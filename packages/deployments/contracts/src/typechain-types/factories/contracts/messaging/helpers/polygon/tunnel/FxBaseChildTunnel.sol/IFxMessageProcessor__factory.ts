/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IFxMessageProcessor,
  IFxMessageProcessorInterface,
} from "../../../../../../../contracts/messaging/helpers/polygon/tunnel/FxBaseChildTunnel.sol/IFxMessageProcessor";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "stateId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "rootMessageSender",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "processMessageFromRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IFxMessageProcessor__factory {
  static readonly abi = _abi;
  static createInterface(): IFxMessageProcessorInterface {
    return new utils.Interface(_abi) as IFxMessageProcessorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFxMessageProcessor {
    return new Contract(address, _abi, signerOrProvider) as IFxMessageProcessor;
  }
}
