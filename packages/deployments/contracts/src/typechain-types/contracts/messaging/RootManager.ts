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
} from "../../common";

export interface RootManagerInterface extends utils.Interface {
  functions: {
    "acceptProposedOwner()": FunctionFragment;
    "addConnector(uint32,address)": FunctionFragment;
    "addWatcher(address)": FunctionFragment;
    "connectors(uint32)": FunctionFragment;
    "delay()": FunctionFragment;
    "domains(uint256)": FunctionFragment;
    "outboundRoots(uint32)": FunctionFragment;
    "owner()": FunctionFragment;
    "propagate()": FunctionFragment;
    "proposeNewOwner(address)": FunctionFragment;
    "proposed()": FunctionFragment;
    "proposedTimestamp()": FunctionFragment;
    "removeConnector(uint32)": FunctionFragment;
    "removeWatcher(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "renounced()": FunctionFragment;
    "setOutboundRoot(uint32,bytes32)": FunctionFragment;
    "watchers(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptProposedOwner"
      | "addConnector"
      | "addWatcher"
      | "connectors"
      | "delay"
      | "domains"
      | "outboundRoots"
      | "owner"
      | "propagate"
      | "proposeNewOwner"
      | "proposed"
      | "proposedTimestamp"
      | "removeConnector"
      | "removeWatcher"
      | "renounceOwnership"
      | "renounced"
      | "setOutboundRoot"
      | "watchers"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptProposedOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addConnector",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "addWatcher",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "connectors",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "delay", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "domains",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "outboundRoots",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "propagate", values?: undefined): string;
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
    functionFragment: "removeConnector",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeWatcher",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "renounced", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setOutboundRoot",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "watchers",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptProposedOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addConnector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addWatcher", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "connectors", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "domains", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "outboundRoots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "propagate", data: BytesLike): Result;
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
    functionFragment: "removeConnector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeWatcher",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "renounced", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setOutboundRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "watchers", data: BytesLike): Result;

  events: {
    "ConnectorAdded(uint32,address)": EventFragment;
    "ConnectorRemoved(uint32,address)": EventFragment;
    "OutboundRootUpdated(uint32,bytes32)": EventFragment;
    "OwnershipProposed(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RootPropagated(bytes32,uint32[])": EventFragment;
    "WatcherAdded(address)": EventFragment;
    "WatcherRemoved(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ConnectorAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ConnectorRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OutboundRootUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipProposed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RootPropagated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WatcherAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WatcherRemoved"): EventFragment;
}

export interface ConnectorAddedEventObject {
  domain: number;
  connector: string;
}
export type ConnectorAddedEvent = TypedEvent<
  [number, string],
  ConnectorAddedEventObject
>;

export type ConnectorAddedEventFilter = TypedEventFilter<ConnectorAddedEvent>;

export interface ConnectorRemovedEventObject {
  domain: number;
  connector: string;
}
export type ConnectorRemovedEvent = TypedEvent<
  [number, string],
  ConnectorRemovedEventObject
>;

export type ConnectorRemovedEventFilter =
  TypedEventFilter<ConnectorRemovedEvent>;

export interface OutboundRootUpdatedEventObject {
  domain: number;
  outboundRoot: string;
}
export type OutboundRootUpdatedEvent = TypedEvent<
  [number, string],
  OutboundRootUpdatedEventObject
>;

export type OutboundRootUpdatedEventFilter =
  TypedEventFilter<OutboundRootUpdatedEvent>;

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

export interface RootPropagatedEventObject {
  aggregate: string;
  domains: number[];
}
export type RootPropagatedEvent = TypedEvent<
  [string, number[]],
  RootPropagatedEventObject
>;

export type RootPropagatedEventFilter = TypedEventFilter<RootPropagatedEvent>;

export interface WatcherAddedEventObject {
  watcher: string;
}
export type WatcherAddedEvent = TypedEvent<[string], WatcherAddedEventObject>;

export type WatcherAddedEventFilter = TypedEventFilter<WatcherAddedEvent>;

export interface WatcherRemovedEventObject {
  watcher: string;
}
export type WatcherRemovedEvent = TypedEvent<
  [string],
  WatcherRemovedEventObject
>;

export type WatcherRemovedEventFilter = TypedEventFilter<WatcherRemovedEvent>;

export interface RootManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RootManagerInterface;

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
    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addConnector(
      _domain: PromiseOrValue<BigNumberish>,
      _connector: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addWatcher(
      _watcher: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    connectors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    delay(overrides?: CallOverrides): Promise<[BigNumber]>;

    domains(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    outboundRoots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    propagate(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposed(overrides?: CallOverrides): Promise<[string]>;

    proposedTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    removeConnector(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeWatcher(
      _watcher: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounced(overrides?: CallOverrides): Promise<[boolean]>;

    setOutboundRoot(
      _domain: PromiseOrValue<BigNumberish>,
      _outbound: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    watchers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  acceptProposedOwner(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addConnector(
    _domain: PromiseOrValue<BigNumberish>,
    _connector: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addWatcher(
    _watcher: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  connectors(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  delay(overrides?: CallOverrides): Promise<BigNumber>;

  domains(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  outboundRoots(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  propagate(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposeNewOwner(
    newlyProposed: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposed(overrides?: CallOverrides): Promise<string>;

  proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  removeConnector(
    _domain: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeWatcher(
    _watcher: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounced(overrides?: CallOverrides): Promise<boolean>;

  setOutboundRoot(
    _domain: PromiseOrValue<BigNumberish>,
    _outbound: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  watchers(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    acceptProposedOwner(overrides?: CallOverrides): Promise<void>;

    addConnector(
      _domain: PromiseOrValue<BigNumberish>,
      _connector: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    addWatcher(
      _watcher: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    connectors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    domains(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    outboundRoots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    propagate(overrides?: CallOverrides): Promise<void>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    proposed(overrides?: CallOverrides): Promise<string>;

    proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    removeConnector(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeWatcher(
      _watcher: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    renounced(overrides?: CallOverrides): Promise<boolean>;

    setOutboundRoot(
      _domain: PromiseOrValue<BigNumberish>,
      _outbound: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    watchers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "ConnectorAdded(uint32,address)"(
      domain?: null,
      connector?: null
    ): ConnectorAddedEventFilter;
    ConnectorAdded(domain?: null, connector?: null): ConnectorAddedEventFilter;

    "ConnectorRemoved(uint32,address)"(
      domain?: null,
      connector?: null
    ): ConnectorRemovedEventFilter;
    ConnectorRemoved(
      domain?: null,
      connector?: null
    ): ConnectorRemovedEventFilter;

    "OutboundRootUpdated(uint32,bytes32)"(
      domain?: null,
      outboundRoot?: null
    ): OutboundRootUpdatedEventFilter;
    OutboundRootUpdated(
      domain?: null,
      outboundRoot?: null
    ): OutboundRootUpdatedEventFilter;

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

    "RootPropagated(bytes32,uint32[])"(
      aggregate?: null,
      domains?: null
    ): RootPropagatedEventFilter;
    RootPropagated(aggregate?: null, domains?: null): RootPropagatedEventFilter;

    "WatcherAdded(address)"(watcher?: null): WatcherAddedEventFilter;
    WatcherAdded(watcher?: null): WatcherAddedEventFilter;

    "WatcherRemoved(address)"(watcher?: null): WatcherRemovedEventFilter;
    WatcherRemoved(watcher?: null): WatcherRemovedEventFilter;
  };

  estimateGas: {
    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addConnector(
      _domain: PromiseOrValue<BigNumberish>,
      _connector: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addWatcher(
      _watcher: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    connectors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    domains(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    outboundRoots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    propagate(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposed(overrides?: CallOverrides): Promise<BigNumber>;

    proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    removeConnector(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeWatcher(
      _watcher: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounced(overrides?: CallOverrides): Promise<BigNumber>;

    setOutboundRoot(
      _domain: PromiseOrValue<BigNumberish>,
      _outbound: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    watchers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addConnector(
      _domain: PromiseOrValue<BigNumberish>,
      _connector: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addWatcher(
      _watcher: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    connectors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    domains(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    outboundRoots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    propagate(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposedTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeConnector(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeWatcher(
      _watcher: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounced(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setOutboundRoot(
      _domain: PromiseOrValue<BigNumberish>,
      _outbound: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    watchers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
