import { constants, providers, BigNumber, utils } from "ethers";
import {
  Logger,
  createLoggingContext,
  ChainData,
  XCallArgs,
  WETHAbi,
  MultisendTransaction,
  encodeMultisendCall,
} from "@connext/nxtp-utils";
import { contractDeployments } from "@connext/nxtp-txservice";

import { getChainData, getChainIdFromDomain, calculateRelayerFee } from "./lib/helpers";
import { SignerAddressMissing, ChainDataUndefined } from "./lib/errors";
import { NxtpSdkConfig, getConfig } from "./config";
import { NxtpSdkShared } from "./sdkShared";

type NxtpSdkXCallArgs = Omit<XCallArgs, "callData" | "delegate"> &
  Partial<XCallArgs> & {
    origin: string;
    relayerFee?: string;
  } & {
    receiveLocal?: boolean;
    wrapNativeOnOrigin?: boolean;
    unwrapNativeOnDestination?: boolean;
  };

/**
 * @classdesc SDK class encapsulating bridge functions.
 */
export class NxtpSdkBase extends NxtpSdkShared {
  private static _instance: NxtpSdkBase;

  constructor(config: NxtpSdkConfig, logger: Logger, chainData: Map<string, ChainData>) {
    super(config, logger, chainData);
  }

  static async create(
    _config: NxtpSdkConfig,
    _logger?: Logger,
    _chainData?: Map<string, ChainData>,
  ): Promise<NxtpSdkBase> {
    const chainData = _chainData ?? (await getChainData());
    if (!chainData) {
      throw new ChainDataUndefined();
    }

    const nxtpConfig = await getConfig(_config, contractDeployments, chainData);
    const logger = _logger
      ? _logger.child({ name: "NxtpSdkBase" })
      : new Logger({ name: "NxtpSdkBase", level: nxtpConfig.logLevel });

    return this._instance || (this._instance = new NxtpSdkBase(nxtpConfig, logger, chainData));
  }

  /**
   * Check, sanitize, and format the XCall and encode calldata. Returns an ethers TransactionRequest object, ready
   * to be sent to an RPC provider.
   *
   * @param args - XCall arguments. Some fields in args.params are optional and have default values provided.
   * @param args.wrapNativeOnOrigin - Whether we should wrap the native token before sending the xcall.
   * @param args.unwrapNativeOnDestination - Whether we should unwrap the wrapped native token when the transfer
   * reaches its destination. By default, if sending a wrapped native token, the wrapped token is what gets
   * delivered at the destination. Setting this to `true` means we should overwrite `callData` to target the
   * Unwrapper utility contract, which will unwrap the wrapped native token and deliver it to the target
   * recipient (the `to` address).
   * @param args.asset - The target asset to send with the xcall. Can be set to `address(0)` if this is a 0-value
   * transfer. If `wrapNativeOnOrigin` is true, this should be the target wrapper contract (e.g. WETH) address.
   * @param args.amount - The amount of tokens (in specified asset) to send with the xcall. If `wrapNativeOnOrigin`
   * is true, this will be used as the amount of native token to deposit into the wrapper contract and withdraw
   * as wrapped native token for sending (e.g. deposit ETH to the WETH contract in exchange for the WETH ERC20).
   * @returns providers.TransactionRequest object.
   */
  async xcall(args: NxtpSdkXCallArgs): Promise<providers.TransactionRequest> {
    const { requestContext, methodContext } = createLoggingContext(this.xcall.name);
    this.logger.info("Method start", requestContext, methodContext, { args });

    const {
      origin,
      relayerFee: _relayerFee,
      destination,
      asset,
      amount: _amount,
      slippage,
      receiveLocal,
      wrapNativeOnOrigin,
      unwrapNativeOnDestination,
    } = args;
    let { to } = args;

    // Ensure signer is provided.
    const signerAddress = this.config.signerAddress;
    if (!signerAddress) {
      throw new SignerAddressMissing();
    }
    // Get the origin chain ID.
    const chainId = await this.getChainId(origin);
    // Get Connext address for origin.
    const connextContractAddress = await this.getDeploymentAddress(origin, "connext");

    /// MARK - Validate arguments.
    if (asset === constants.AddressZero && _amount !== "0") {
      // TODO: Custom error.
      throw new Error("Transacting asset specified was address zero; native assets are not supported!");
    }

    // Sanitize arguments. Substitute default values as needed.
    const amount = BigNumber.from(_amount);
    let callData = args.callData ?? "0x";
    const delegate = args.delegate ?? to; // Default to using the user's signer address as the delegate.
    const relayerFee = BigNumber.from(_relayerFee ?? "0");
    // TODO: Calculate estimate for relayer fee and include it in the call params.
    // TODO: Should additionally make sure the asset is set to address(0) if the amount is 0.
    // TODO: Use ajv validator.

    if (unwrapNativeOnDestination) {
      // Sanity check: We'll need to overwrite the callData with an unwrapping call. If a `callData` argument
      // is also specified, we throw to ensure the user's callData isn't being overwritten unexpectedly.
      // TODO: Implement an xReceive Multisend call to have the option to combine the unwrapping AND the user's
      // original callData!
      if (callData !== "0x") {
        // TODO: Custom error.
        throw new Error(
          "XCall request to unwrap on destination requires `callData` argument to be empty!" +
            ` callData specified: ${callData}`,
        );
      }

      // Sanity check: `receiveLocal` must be false.
      if (receiveLocal) {
        // TODO: Custom error.
        throw new Error("Cannot unwrap native token on destination if `receiveLocal` is set to true.");
      }

      // TODO: Should check on-chain to ensure destination Unwrapper supports unwrapping the target native token!

      // Retrieve destination unwrapper xReceive utility contract (will throw if it has not been configured).
      // Set the `callData` to the unwrap method. Specify amount and `to` - the preserved original recipient.
      callData = this.contracts.unwrapper.encodeFunctionData("unwrap", [amount, to]);
      // Now we can overwrite the `to` address to be the target unwrapper contract.
      to = await this.getDeploymentAddress(destination, "unwrapper");
    }

    // Take the finalized xcall arguments and encode calldata.
    // NOTE: Using a tuple here to satisfy compiler for `encodeFunctionData` call below.
    const formattedArguments: [string, string, string, string, BigNumber, string, string] = [
      destination,
      to,
      asset,
      delegate,
      amount,
      slippage,
      callData,
    ];
    const xcallData = receiveLocal
      ? this.contracts.connext.encodeFunctionData("xcallIntoLocal", formattedArguments)
      : this.contracts.connext.encodeFunctionData("xcall", formattedArguments);

    let txRequest: providers.TransactionRequest;
    if (wrapNativeOnOrigin) {
      /**
       * Wrapping native on origin:
       * Produce a singular transaction that will first wrap the native token and then send an XCall with the
       * wrapped native token (e.g. wrap ETH, xcall WETH). This single transaction relies on the Multisend
       * utility contract (deployed by Connext).
       */
      // Get multisend utility contract (will throw if it has not been configured).
      const multisendContractAddress = await this.getDeploymentAddress(origin, "multisend");
      // WETH interface for deposit/withdraw.
      // TODO: Will all wrappers implement this same interface?
      const weth = new utils.Interface(WETHAbi);

      const txs: MultisendTransaction[] = [];

      // 1. WETH.deposit(amount)
      txs.push({
        to: asset,
        data: weth.encodeFunctionData("deposit"),
        value: amount,
      });

      // 2. WETH.approve(connext)
      txs.push({
        to: asset,
        data: weth.encodeFunctionData("approve", [connextContractAddress, amount]),
      });

      // 3. xcall(args)
      txs.push({
        to: connextContractAddress,
        data: xcallData,
        value: relayerFee,
      });

      // 5. Format Multisend call in an ethers TransactionRequest object.
      txRequest = {
        to: multisendContractAddress,
        value: amount.add(relayerFee), // Amount in ETH (which will be converted to WETH) + ETH for xcall relayer fee.
        data: encodeMultisendCall(txs),
        from: signerAddress,
        chainId,
      };
    } else {
      // Add callback and relayer fee together to get the total ETH value that should be sent.
      const value = BigNumber.from(relayerFee ?? "0");

      // Format the ethers TransactionRequest object.
      txRequest = {
        to: connextContractAddress,
        value,
        data: xcallData,
        from: signerAddress,
        chainId,
      };
    }

    this.logger.info("XCall transaction formatted.", requestContext, methodContext, {
      args: { ...args, callData, delegate },
      to: txRequest.to,
      from: txRequest.from,
      value: txRequest.value?.toString(),
    });

    return txRequest;
  }

  async bumpTransfer(params: {
    domainId: string;
    transferId: string;
    relayerFee: string;
  }): Promise<providers.TransactionRequest> {
    const { requestContext, methodContext } = createLoggingContext(this.bumpTransfer.name);
    this.logger.info("Method start", requestContext, methodContext, { params });

    const signerAddress = this.config.signerAddress;
    if (!signerAddress) {
      throw new SignerAddressMissing();
    }

    const { domainId, transferId, relayerFee } = params;

    let chainId = this.config.chains[domainId].chainId;
    if (!chainId) {
      chainId = await getChainIdFromDomain(domainId, this.chainData);
    }
    const ConnextContractAddress = (await this.getConnext(domainId)).address;

    // if asset is AddressZero then we are adding relayerFee to amount for value
    const value = BigNumber.from(relayerFee);

    const data = this.contracts.connext.encodeFunctionData("bumpTransfer", [transferId]);

    const txRequest = {
      to: ConnextContractAddress,
      value,
      data,
      from: signerAddress,
      chainId,
    };

    this.logger.info(`${this.bumpTransfer.name} transaction created`, requestContext, methodContext, txRequest);

    return txRequest;
  }

  async estimateRelayerFee(params: {
    originDomain: string;
    destinationDomain: string;
    originNativeToken?: string;
    destinationNativeToken?: string;
    callDataGasAmount?: number;
    isHighPriority?: boolean;
  }): Promise<BigNumber> {
    const { requestContext, methodContext } = createLoggingContext(this.estimateRelayerFee.name);
    this.logger.info("Method start", requestContext, methodContext, { params });

    const relayerFeeInOriginNativeAsset = await calculateRelayerFee(params, this.chainData, this.logger);

    return relayerFeeInOriginNativeAsset;
  }

  /**
   * Produce a singular transaction that will first wrap the native token and then send an XCall with the
   * wrapped native token (e.g. wrap ETH, xcall WETH). This single transaction relies on the Multisend
   * utility contract (deployed by Connext).
   *

   *
   * @param args - XCall arguments. Some fields in args.params are optional and have default values provided.

   *
   * @param args.to - Address of the native token wrapper contract on destination. If
   * specified, will indicate we should unwrap the wrapped native token on destination (e.g. unwrap WETH => ETH).
   * @dev Will throw if `destinationWrapperAddress` is specified as true and callData argument is provided, as we
   * need to replace the callData argument with unwrapping callData.
   * @returns providers.TransactionRequest object.
   */
  async wrapNativeAndXCall(args: NxtpSdkXCallArgs): Promise<providers.TransactionRequest> {
    const txs: MultisendTransaction[] = [];
    const { asset, amount: _amount, origin } = args;
    const amount = BigNumber.from(_amount);

    const signerAddress = this.config.signerAddress;
    if (!signerAddress) {
      throw new SignerAddressMissing();
    }

    let chainId = this.config.chains[origin].chainId;
    if (!chainId) {
      chainId = await getChainIdFromDomain(origin, this.chainData);
    }

    const connextContractAddress = await this.getDeploymentAddress(origin, "connext");
    const multisendContractAddress = await this.getDeploymentAddress(origin, "multisend");

    if (!multisendContractAddress) {
      throw new Error(`Multisend contract deployment not found for chain ${chainId}! Unable to perform multicall.`);
    }

    // 3. xcall(args)
    const xcallRequest = await this.xcall(args);

    // Sanity check: the `to` recipient of xcall matches what we used as connext contract address
    // for token approval.
    if (!xcallRequest.to || connextContractAddress !== xcallRequest.to) {
      throw new Error(
        "Formatted XCall recipient address did not match expected Connext address!" +
          `Got: ${xcallRequest.to}; Expected: ${connextContractAddress}`,
      );
    }

    const relayerFee = BigNumber.from(args.relayerFee ?? "0");
    // Sanity check: value is correct.
    if (!xcallRequest.value || !BigNumber.from(xcallRequest.value).eq(relayerFee)) {
      throw new Error(
        "Formatted XCall msg.value did not match expected value (args.relayerFee)." +
          `Got: ${xcallRequest.value?.toString()}; Expected: ${args.relayerFee}`,
      );
    }

    txs.push({
      to: connextContractAddress,
      data: xcallRequest.data!.toString(),
      value: relayerFee,
    });

    // 5. Format Multisend call in an ethers TransactionRequest object.
    const txRequest: providers.TransactionRequest = {
      to: multisendContractAddress,
      value: amount.add(relayerFee), // Amount in ETH (which will be converted to WETH) + ETH for xcall relayer fee.
      data: encodeMultisendCall(txs),
      from: signerAddress,
      chainId,
    };
    return txRequest;
  }
}
