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
} from "../../../../../common";

export type ChainBatchHeaderStruct = {
  batchIndex: PromiseOrValue<BigNumberish>;
  batchRoot: PromiseOrValue<BytesLike>;
  batchSize: PromiseOrValue<BigNumberish>;
  prevTotalElements: PromiseOrValue<BigNumberish>;
  signature: PromiseOrValue<BytesLike>;
  extraData: PromiseOrValue<BytesLike>;
};

export type ChainBatchHeaderStructOutput = [
  BigNumber,
  string,
  BigNumber,
  BigNumber,
  string,
  string
] & {
  batchIndex: BigNumber;
  batchRoot: string;
  batchSize: BigNumber;
  prevTotalElements: BigNumber;
  signature: string;
  extraData: string;
};

export type ChainInclusionProofStruct = {
  index: PromiseOrValue<BigNumberish>;
  siblings: PromiseOrValue<BytesLike>[];
};

export type ChainInclusionProofStructOutput = [BigNumber, string[]] & {
  index: BigNumber;
  siblings: string[];
};

export interface IStateCommitmentChainInterface extends utils.Interface {
  functions: {
    "appendStateBatch(bytes32[],uint256)": FunctionFragment;
    "deleteStateBatch((uint256,bytes32,uint256,uint256,bytes,bytes))": FunctionFragment;
    "getLastSequencerTimestamp()": FunctionFragment;
    "getTotalBatches()": FunctionFragment;
    "getTotalElements()": FunctionFragment;
    "insideFraudProofWindow((uint256,bytes32,uint256,uint256,bytes,bytes))": FunctionFragment;
    "verifyStateCommitment(bytes32,(uint256,bytes32,uint256,uint256,bytes,bytes),(uint256,bytes32[]))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "appendStateBatch"
      | "deleteStateBatch"
      | "getLastSequencerTimestamp"
      | "getTotalBatches"
      | "getTotalElements"
      | "insideFraudProofWindow"
      | "verifyStateCommitment"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "appendStateBatch",
    values: [PromiseOrValue<BytesLike>[], PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteStateBatch",
    values: [ChainBatchHeaderStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getLastSequencerTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalBatches",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalElements",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "insideFraudProofWindow",
    values: [ChainBatchHeaderStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyStateCommitment",
    values: [
      PromiseOrValue<BytesLike>,
      ChainBatchHeaderStruct,
      ChainInclusionProofStruct
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "appendStateBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deleteStateBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastSequencerTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalBatches",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalElements",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "insideFraudProofWindow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyStateCommitment",
    data: BytesLike
  ): Result;

  events: {
    "StateBatchAppended(uint256,bytes32,uint256,uint256,bytes)": EventFragment;
    "StateBatchDeleted(uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "StateBatchAppended"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StateBatchDeleted"): EventFragment;
}

export interface StateBatchAppendedEventObject {
  _batchIndex: BigNumber;
  _batchRoot: string;
  _batchSize: BigNumber;
  _prevTotalElements: BigNumber;
  _extraData: string;
}
export type StateBatchAppendedEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, string],
  StateBatchAppendedEventObject
>;

export type StateBatchAppendedEventFilter =
  TypedEventFilter<StateBatchAppendedEvent>;

export interface StateBatchDeletedEventObject {
  _batchIndex: BigNumber;
  _batchRoot: string;
}
export type StateBatchDeletedEvent = TypedEvent<
  [BigNumber, string],
  StateBatchDeletedEventObject
>;

export type StateBatchDeletedEventFilter =
  TypedEventFilter<StateBatchDeletedEvent>;

export interface IStateCommitmentChain extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IStateCommitmentChainInterface;

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
    appendStateBatch(
      _batch: PromiseOrValue<BytesLike>[],
      _shouldStartAtElement: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deleteStateBatch(
      _batchHeader: ChainBatchHeaderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getLastSequencerTimestamp(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _lastSequencerTimestamp: BigNumber }>;

    getTotalBatches(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _totalBatches: BigNumber }>;

    getTotalElements(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _totalElements: BigNumber }>;

    insideFraudProofWindow(
      _batchHeader: ChainBatchHeaderStruct,
      overrides?: CallOverrides
    ): Promise<[boolean] & { _inside: boolean }>;

    verifyStateCommitment(
      _element: PromiseOrValue<BytesLike>,
      _batchHeader: ChainBatchHeaderStruct,
      _proof: ChainInclusionProofStruct,
      overrides?: CallOverrides
    ): Promise<[boolean] & { _verified: boolean }>;
  };

  appendStateBatch(
    _batch: PromiseOrValue<BytesLike>[],
    _shouldStartAtElement: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deleteStateBatch(
    _batchHeader: ChainBatchHeaderStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getLastSequencerTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalBatches(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalElements(overrides?: CallOverrides): Promise<BigNumber>;

  insideFraudProofWindow(
    _batchHeader: ChainBatchHeaderStruct,
    overrides?: CallOverrides
  ): Promise<boolean>;

  verifyStateCommitment(
    _element: PromiseOrValue<BytesLike>,
    _batchHeader: ChainBatchHeaderStruct,
    _proof: ChainInclusionProofStruct,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    appendStateBatch(
      _batch: PromiseOrValue<BytesLike>[],
      _shouldStartAtElement: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    deleteStateBatch(
      _batchHeader: ChainBatchHeaderStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    getLastSequencerTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalBatches(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalElements(overrides?: CallOverrides): Promise<BigNumber>;

    insideFraudProofWindow(
      _batchHeader: ChainBatchHeaderStruct,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyStateCommitment(
      _element: PromiseOrValue<BytesLike>,
      _batchHeader: ChainBatchHeaderStruct,
      _proof: ChainInclusionProofStruct,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "StateBatchAppended(uint256,bytes32,uint256,uint256,bytes)"(
      _batchIndex?: PromiseOrValue<BigNumberish> | null,
      _batchRoot?: null,
      _batchSize?: null,
      _prevTotalElements?: null,
      _extraData?: null
    ): StateBatchAppendedEventFilter;
    StateBatchAppended(
      _batchIndex?: PromiseOrValue<BigNumberish> | null,
      _batchRoot?: null,
      _batchSize?: null,
      _prevTotalElements?: null,
      _extraData?: null
    ): StateBatchAppendedEventFilter;

    "StateBatchDeleted(uint256,bytes32)"(
      _batchIndex?: PromiseOrValue<BigNumberish> | null,
      _batchRoot?: null
    ): StateBatchDeletedEventFilter;
    StateBatchDeleted(
      _batchIndex?: PromiseOrValue<BigNumberish> | null,
      _batchRoot?: null
    ): StateBatchDeletedEventFilter;
  };

  estimateGas: {
    appendStateBatch(
      _batch: PromiseOrValue<BytesLike>[],
      _shouldStartAtElement: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deleteStateBatch(
      _batchHeader: ChainBatchHeaderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getLastSequencerTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalBatches(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalElements(overrides?: CallOverrides): Promise<BigNumber>;

    insideFraudProofWindow(
      _batchHeader: ChainBatchHeaderStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyStateCommitment(
      _element: PromiseOrValue<BytesLike>,
      _batchHeader: ChainBatchHeaderStruct,
      _proof: ChainInclusionProofStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    appendStateBatch(
      _batch: PromiseOrValue<BytesLike>[],
      _shouldStartAtElement: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deleteStateBatch(
      _batchHeader: ChainBatchHeaderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getLastSequencerTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalBatches(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalElements(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    insideFraudProofWindow(
      _batchHeader: ChainBatchHeaderStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyStateCommitment(
      _element: PromiseOrValue<BytesLike>,
      _batchHeader: ChainBatchHeaderStruct,
      _proof: ChainInclusionProofStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
