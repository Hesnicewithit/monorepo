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
    "checkOrphans(address)": FunctionFragment;
    "getConnext()": FunctionFragment;
    "getTargetWrapperContract()": FunctionFragment;
    "orphanedNativeTokens(address)": FunctionFragment;
    "orphanedTokens(address,address)": FunctionFragment;
    "saveOrphans(address)": FunctionFragment;
    "xReceive(bytes32,uint256,address,address,uint32,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "CONNEXT"
      | "WRAPPER"
      | "checkOrphans"
      | "getConnext"
      | "getTargetWrapperContract"
      | "orphanedNativeTokens"
      | "orphanedTokens"
      | "saveOrphans"
      | "xReceive"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "CONNEXT", values?: undefined): string;
  encodeFunctionData(functionFragment: "WRAPPER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "checkOrphans",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getConnext",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTargetWrapperContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "orphanedNativeTokens",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "orphanedTokens",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "saveOrphans",
    values: [PromiseOrValue<string>]
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
    functionFragment: "checkOrphans",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getConnext", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTargetWrapperContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "orphanedNativeTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "orphanedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "saveOrphans",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "xReceive", data: BytesLike): Result;

  events: {
    "OrphanedNativeTokens(uint256,address,bytes)": EventFragment;
    "OrphanedTokens(address,uint256,address,bytes)": EventFragment;
    "SavedOrphans(address,uint256,address)": EventFragment;
    "UnwrappingFailed(address,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OrphanedNativeTokens"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrphanedTokens"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SavedOrphans"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnwrappingFailed"): EventFragment;
}

export interface OrphanedNativeTokensEventObject {
  amount: BigNumber;
  parent: string;
  reason: string;
}
export type OrphanedNativeTokensEvent = TypedEvent<
  [BigNumber, string, string],
  OrphanedNativeTokensEventObject
>;

export type OrphanedNativeTokensEventFilter =
  TypedEventFilter<OrphanedNativeTokensEvent>;

export interface OrphanedTokensEventObject {
  token: string;
  amount: BigNumber;
  parent: string;
  reason: string;
}
export type OrphanedTokensEvent = TypedEvent<
  [string, BigNumber, string, string],
  OrphanedTokensEventObject
>;

export type OrphanedTokensEventFilter = TypedEventFilter<OrphanedTokensEvent>;

export interface SavedOrphansEventObject {
  token: string;
  amount: BigNumber;
  parent: string;
}
export type SavedOrphansEvent = TypedEvent<
  [string, BigNumber, string],
  SavedOrphansEventObject
>;

export type SavedOrphansEventFilter = TypedEventFilter<SavedOrphansEvent>;

export interface UnwrappingFailedEventObject {
  recipient: string;
  reason: string;
}
export type UnwrappingFailedEvent = TypedEvent<
  [string, string],
  UnwrappingFailedEventObject
>;

export type UnwrappingFailedEventFilter =
  TypedEventFilter<UnwrappingFailedEvent>;

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

    checkOrphans(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getConnext(overrides?: CallOverrides): Promise<[string]>;

    getTargetWrapperContract(overrides?: CallOverrides): Promise<[string]>;

    orphanedNativeTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    orphanedTokens(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    saveOrphans(
      token: PromiseOrValue<string>,
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

  checkOrphans(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getConnext(overrides?: CallOverrides): Promise<string>;

  getTargetWrapperContract(overrides?: CallOverrides): Promise<string>;

  orphanedNativeTokens(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  orphanedTokens(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  saveOrphans(
    token: PromiseOrValue<string>,
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

    checkOrphans(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getConnext(overrides?: CallOverrides): Promise<string>;

    getTargetWrapperContract(overrides?: CallOverrides): Promise<string>;

    orphanedNativeTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    orphanedTokens(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    saveOrphans(
      token: PromiseOrValue<string>,
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
    "OrphanedNativeTokens(uint256,address,bytes)"(
      amount?: PromiseOrValue<BigNumberish> | null,
      parent?: PromiseOrValue<string> | null,
      reason?: null
    ): OrphanedNativeTokensEventFilter;
    OrphanedNativeTokens(
      amount?: PromiseOrValue<BigNumberish> | null,
      parent?: PromiseOrValue<string> | null,
      reason?: null
    ): OrphanedNativeTokensEventFilter;

    "OrphanedTokens(address,uint256,address,bytes)"(
      token?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null,
      parent?: PromiseOrValue<string> | null,
      reason?: null
    ): OrphanedTokensEventFilter;
    OrphanedTokens(
      token?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null,
      parent?: PromiseOrValue<string> | null,
      reason?: null
    ): OrphanedTokensEventFilter;

    "SavedOrphans(address,uint256,address)"(
      token?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null,
      parent?: PromiseOrValue<string> | null
    ): SavedOrphansEventFilter;
    SavedOrphans(
      token?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null,
      parent?: PromiseOrValue<string> | null
    ): SavedOrphansEventFilter;

    "UnwrappingFailed(address,bytes)"(
      recipient?: null,
      reason?: null
    ): UnwrappingFailedEventFilter;
    UnwrappingFailed(
      recipient?: null,
      reason?: null
    ): UnwrappingFailedEventFilter;
  };

  estimateGas: {
    CONNEXT(overrides?: CallOverrides): Promise<BigNumber>;

    WRAPPER(overrides?: CallOverrides): Promise<BigNumber>;

    checkOrphans(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getConnext(overrides?: CallOverrides): Promise<BigNumber>;

    getTargetWrapperContract(overrides?: CallOverrides): Promise<BigNumber>;

    orphanedNativeTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    orphanedTokens(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    saveOrphans(
      token: PromiseOrValue<string>,
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

    checkOrphans(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getConnext(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTargetWrapperContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    orphanedNativeTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    orphanedTokens(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    saveOrphans(
      token: PromiseOrValue<string>,
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
