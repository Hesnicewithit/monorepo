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

export interface ConnextPriceOracleInterface extends utils.Interface {
  functions: {
    "VALID_PERIOD()": FunctionFragment;
    "acceptProposedOwner()": FunctionFragment;
    "aggregators(address)": FunctionFragment;
    "assetPrices(address)": FunctionFragment;
    "delay()": FunctionFragment;
    "getPriceFromChainlink(address)": FunctionFragment;
    "getPriceFromOracle(address)": FunctionFragment;
    "getTokenPrice(address)": FunctionFragment;
    "isPriceOracle()": FunctionFragment;
    "owner()": FunctionFragment;
    "proposeNewOwner(address)": FunctionFragment;
    "proposed()": FunctionFragment;
    "proposedTimestamp()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "renounced()": FunctionFragment;
    "setAggregators(address[],address[])": FunctionFragment;
    "setDirectPrice(address,uint256,uint256)": FunctionFragment;
    "setV1PriceOracle(address)": FunctionFragment;
    "v1PriceOracle()": FunctionFragment;
    "wrapped()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "VALID_PERIOD"
      | "acceptProposedOwner"
      | "aggregators"
      | "assetPrices"
      | "delay"
      | "getPriceFromChainlink"
      | "getPriceFromOracle"
      | "getTokenPrice"
      | "isPriceOracle"
      | "owner"
      | "proposeNewOwner"
      | "proposed"
      | "proposedTimestamp"
      | "renounceOwnership"
      | "renounced"
      | "setAggregators"
      | "setDirectPrice"
      | "setV1PriceOracle"
      | "v1PriceOracle"
      | "wrapped"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "VALID_PERIOD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptProposedOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "aggregators",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "assetPrices",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "delay", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPriceFromChainlink",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceFromOracle",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenPrice",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isPriceOracle",
    values?: undefined
  ): string;
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
    functionFragment: "setAggregators",
    values: [PromiseOrValue<string>[], PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setDirectPrice",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setV1PriceOracle",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "v1PriceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "wrapped", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "VALID_PERIOD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptProposedOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "aggregators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetPrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPriceFromChainlink",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceFromOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPriceOracle",
    data: BytesLike
  ): Result;
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
  decodeFunctionResult(
    functionFragment: "setAggregators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDirectPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setV1PriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "v1PriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wrapped", data: BytesLike): Result;

  events: {
    "AggregatorUpdated(address,address)": EventFragment;
    "DirectPriceUpdated(address,uint256,uint256)": EventFragment;
    "NewAdmin(address,address)": EventFragment;
    "OwnershipProposed(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PriceRecordUpdated(address,address,address,bool)": EventFragment;
    "V1PriceOracleUpdated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AggregatorUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DirectPriceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewAdmin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipProposed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceRecordUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "V1PriceOracleUpdated"): EventFragment;
}

export interface AggregatorUpdatedEventObject {
  tokenAddress: string;
  source: string;
}
export type AggregatorUpdatedEvent = TypedEvent<
  [string, string],
  AggregatorUpdatedEventObject
>;

export type AggregatorUpdatedEventFilter =
  TypedEventFilter<AggregatorUpdatedEvent>;

export interface DirectPriceUpdatedEventObject {
  token: string;
  oldPrice: BigNumber;
  newPrice: BigNumber;
}
export type DirectPriceUpdatedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  DirectPriceUpdatedEventObject
>;

export type DirectPriceUpdatedEventFilter =
  TypedEventFilter<DirectPriceUpdatedEvent>;

export interface NewAdminEventObject {
  oldAdmin: string;
  newAdmin: string;
}
export type NewAdminEvent = TypedEvent<[string, string], NewAdminEventObject>;

export type NewAdminEventFilter = TypedEventFilter<NewAdminEvent>;

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

export interface PriceRecordUpdatedEventObject {
  token: string;
  baseToken: string;
  lpToken: string;
  _active: boolean;
}
export type PriceRecordUpdatedEvent = TypedEvent<
  [string, string, string, boolean],
  PriceRecordUpdatedEventObject
>;

export type PriceRecordUpdatedEventFilter =
  TypedEventFilter<PriceRecordUpdatedEvent>;

export interface V1PriceOracleUpdatedEventObject {
  oldAddress: string;
  newAddress: string;
}
export type V1PriceOracleUpdatedEvent = TypedEvent<
  [string, string],
  V1PriceOracleUpdatedEventObject
>;

export type V1PriceOracleUpdatedEventFilter =
  TypedEventFilter<V1PriceOracleUpdatedEvent>;

export interface ConnextPriceOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConnextPriceOracleInterface;

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
    VALID_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;

    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    aggregators(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    assetPrices(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { updatedAt: BigNumber; price: BigNumber }
    >;

    delay(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPriceFromChainlink(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPriceFromOracle(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTokenPrice(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    isPriceOracle(overrides?: CallOverrides): Promise<[boolean]>;

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

    setAggregators(
      tokenAddresses: PromiseOrValue<string>[],
      sources: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setDirectPrice(
      _token: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setV1PriceOracle(
      _v1PriceOracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    v1PriceOracle(overrides?: CallOverrides): Promise<[string]>;

    wrapped(overrides?: CallOverrides): Promise<[string]>;
  };

  VALID_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  acceptProposedOwner(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  aggregators(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  assetPrices(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { updatedAt: BigNumber; price: BigNumber }
  >;

  delay(overrides?: CallOverrides): Promise<BigNumber>;

  getPriceFromChainlink(
    _tokenAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPriceFromOracle(
    _tokenAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTokenPrice(
    _tokenAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  isPriceOracle(overrides?: CallOverrides): Promise<boolean>;

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

  setAggregators(
    tokenAddresses: PromiseOrValue<string>[],
    sources: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setDirectPrice(
    _token: PromiseOrValue<string>,
    _price: PromiseOrValue<BigNumberish>,
    _timestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setV1PriceOracle(
    _v1PriceOracle: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  v1PriceOracle(overrides?: CallOverrides): Promise<string>;

  wrapped(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    VALID_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    acceptProposedOwner(overrides?: CallOverrides): Promise<void>;

    aggregators(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    assetPrices(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { updatedAt: BigNumber; price: BigNumber }
    >;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    getPriceFromChainlink(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriceFromOracle(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenPrice(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    isPriceOracle(overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    proposed(overrides?: CallOverrides): Promise<string>;

    proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    renounced(overrides?: CallOverrides): Promise<boolean>;

    setAggregators(
      tokenAddresses: PromiseOrValue<string>[],
      sources: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    setDirectPrice(
      _token: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setV1PriceOracle(
      _v1PriceOracle: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    v1PriceOracle(overrides?: CallOverrides): Promise<string>;

    wrapped(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AggregatorUpdated(address,address)"(
      tokenAddress?: null,
      source?: null
    ): AggregatorUpdatedEventFilter;
    AggregatorUpdated(
      tokenAddress?: null,
      source?: null
    ): AggregatorUpdatedEventFilter;

    "DirectPriceUpdated(address,uint256,uint256)"(
      token?: null,
      oldPrice?: null,
      newPrice?: null
    ): DirectPriceUpdatedEventFilter;
    DirectPriceUpdated(
      token?: null,
      oldPrice?: null,
      newPrice?: null
    ): DirectPriceUpdatedEventFilter;

    "NewAdmin(address,address)"(
      oldAdmin?: null,
      newAdmin?: null
    ): NewAdminEventFilter;
    NewAdmin(oldAdmin?: null, newAdmin?: null): NewAdminEventFilter;

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

    "PriceRecordUpdated(address,address,address,bool)"(
      token?: null,
      baseToken?: null,
      lpToken?: null,
      _active?: null
    ): PriceRecordUpdatedEventFilter;
    PriceRecordUpdated(
      token?: null,
      baseToken?: null,
      lpToken?: null,
      _active?: null
    ): PriceRecordUpdatedEventFilter;

    "V1PriceOracleUpdated(address,address)"(
      oldAddress?: null,
      newAddress?: null
    ): V1PriceOracleUpdatedEventFilter;
    V1PriceOracleUpdated(
      oldAddress?: null,
      newAddress?: null
    ): V1PriceOracleUpdatedEventFilter;
  };

  estimateGas: {
    VALID_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    aggregators(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    assetPrices(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    getPriceFromChainlink(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriceFromOracle(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenPrice(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPriceOracle(overrides?: CallOverrides): Promise<BigNumber>;

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

    setAggregators(
      tokenAddresses: PromiseOrValue<string>[],
      sources: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setDirectPrice(
      _token: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setV1PriceOracle(
      _v1PriceOracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    v1PriceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    wrapped(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    VALID_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    aggregators(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    assetPrices(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPriceFromChainlink(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceFromOracle(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenPrice(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPriceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    setAggregators(
      tokenAddresses: PromiseOrValue<string>[],
      sources: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setDirectPrice(
      _token: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setV1PriceOracle(
      _v1PriceOracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    v1PriceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wrapped(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
