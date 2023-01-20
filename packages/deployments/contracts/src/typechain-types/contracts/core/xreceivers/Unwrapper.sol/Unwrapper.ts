/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface UnwrapperInterface extends utils.Interface {
  functions: {
    "CONNEXT()": FunctionFragment;
    "WRAPPER()": FunctionFragment;
    "acceptProposedOwner()": FunctionFragment;
    "delay()": FunctionFragment;
    "owner()": FunctionFragment;
    "proposeNewOwner(address)": FunctionFragment;
    "proposed()": FunctionFragment;
    "proposedTimestamp()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "renounced()": FunctionFragment;
    "sweep(uint256,address,address)": FunctionFragment;
    "unwrapAndSweep(uint256,address)": FunctionFragment;
    "xReceive(bytes32,uint256,address,address,uint32,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "CONNEXT"
      | "WRAPPER"
      | "acceptProposedOwner"
      | "delay"
      | "owner"
      | "proposeNewOwner"
      | "proposed"
      | "proposedTimestamp"
      | "renounceOwnership"
      | "renounced"
      | "sweep"
      | "unwrapAndSweep"
      | "xReceive"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "CONNEXT", values?: undefined): string;
  encodeFunctionData(functionFragment: "WRAPPER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "acceptProposedOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "delay", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposeNewOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "proposed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposedTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "renounced", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sweep",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "unwrapAndSweep",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "xReceive",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "CONNEXT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "WRAPPER", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "acceptProposedOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposeNewOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposedTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "renounced", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sweep", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unwrapAndSweep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "xReceive", data: BytesLike): Result;

  events: {
    "FundsDelivered(address,address,uint256)": EventFragment;
    "OwnershipProposed(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "WrongAsset(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FundsDelivered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipProposed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WrongAsset"): EventFragment;
}

export interface FundsDeliveredEventObject {
  recipient: string;
  asset: string;
  amount: BigNumber;
}
export type FundsDeliveredEvent = TypedEvent<
  [string, string, BigNumber],
  FundsDeliveredEventObject
>;

export type FundsDeliveredEventFilter = TypedEventFilter<FundsDeliveredEvent>;

export interface OwnershipProposedEventObject {
  proposedOwner: string;
}
export type OwnershipProposedEvent = TypedEvent<
  [string],
  OwnershipProposedEventObject
>;

export type OwnershipProposedEventFilter =
  TypedEventFilter<OwnershipProposedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface WrongAssetEventObject {
  recipient: string;
  asset: string;
}
export type WrongAssetEvent = TypedEvent<
  [string, string],
  WrongAssetEventObject
>;

export type WrongAssetEventFilter = TypedEventFilter<WrongAssetEvent>;

export interface Unwrapper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UnwrapperInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    CONNEXT(overrides?: CallOverrides): Promise<[string]>;

    WRAPPER(overrides?: CallOverrides): Promise<[string]>;

    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    delay(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposed(overrides?: CallOverrides): Promise<[string]>;

    proposedTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounced(overrides?: CallOverrides): Promise<[boolean]>;

    sweep(
      amount: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unwrapAndSweep(
      amount: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    xReceive(
      arg0: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      asset: PromiseOrValue<string>,
      originSender: PromiseOrValue<string>,
      arg4: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  CONNEXT(overrides?: CallOverrides): Promise<string>;

  WRAPPER(overrides?: CallOverrides): Promise<string>;

  acceptProposedOwner(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  delay(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  proposeNewOwner(
    newlyProposed: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposed(overrides?: CallOverrides): Promise<string>;

  proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounced(overrides?: CallOverrides): Promise<boolean>;

  sweep(
    amount: PromiseOrValue<BigNumberish>,
    recipient: PromiseOrValue<string>,
    asset: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unwrapAndSweep(
    amount: PromiseOrValue<BigNumberish>,
    recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  xReceive(
    arg0: PromiseOrValue<BytesLike>,
    amount: PromiseOrValue<BigNumberish>,
    asset: PromiseOrValue<string>,
    originSender: PromiseOrValue<string>,
    arg4: PromiseOrValue<BigNumberish>,
    callData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CONNEXT(overrides?: CallOverrides): Promise<string>;

    WRAPPER(overrides?: CallOverrides): Promise<string>;

    acceptProposedOwner(overrides?: CallOverrides): Promise<void>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    proposed(overrides?: CallOverrides): Promise<string>;

    proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    renounced(overrides?: CallOverrides): Promise<boolean>;

    sweep(
      amount: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unwrapAndSweep(
      amount: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    xReceive(
      arg0: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      asset: PromiseOrValue<string>,
      originSender: PromiseOrValue<string>,
      arg4: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "FundsDelivered(address,address,uint256)"(
      recipient?: null,
      asset?: null,
      amount?: null
    ): FundsDeliveredEventFilter;
    FundsDelivered(
      recipient?: null,
      asset?: null,
      amount?: null
    ): FundsDeliveredEventFilter;

    "OwnershipProposed(address)"(
      proposedOwner?: PromiseOrValue<string> | null
    ): OwnershipProposedEventFilter;
    OwnershipProposed(
      proposedOwner?: PromiseOrValue<string> | null
    ): OwnershipProposedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "WrongAsset(address,address)"(
      recipient?: null,
      asset?: null
    ): WrongAssetEventFilter;
    WrongAsset(recipient?: null, asset?: null): WrongAssetEventFilter;
  };

  estimateGas: {
    CONNEXT(overrides?: CallOverrides): Promise<BigNumber>;

    WRAPPER(overrides?: CallOverrides): Promise<BigNumber>;

    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposed(overrides?: CallOverrides): Promise<BigNumber>;

    proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounced(overrides?: CallOverrides): Promise<BigNumber>;

    sweep(
      amount: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unwrapAndSweep(
      amount: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    xReceive(
      arg0: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      asset: PromiseOrValue<string>,
      originSender: PromiseOrValue<string>,
      arg4: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CONNEXT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WRAPPER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposedTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounced(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sweep(
      amount: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unwrapAndSweep(
      amount: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    xReceive(
      arg0: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      asset: PromiseOrValue<string>,
      originSender: PromiseOrValue<string>,
      arg4: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
