/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface TokenRegistryInterface extends utils.Interface {
  contractName: "TokenRegistry";
  functions: {
    "canonicalToRepresentation(bytes32)": FunctionFragment;
    "enrollCustom(uint32,bytes32,address)": FunctionFragment;
    "ensureLocalToken(uint32,bytes32)": FunctionFragment;
    "getCanonicalTokenId(address)": FunctionFragment;
    "getLocalAddress(uint32,bytes32)": FunctionFragment;
    "getRepresentationAddress(uint32,bytes32)": FunctionFragment;
    "getTokenId(address)": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "isLocalOrigin(address)": FunctionFragment;
    "mustHaveLocalToken(uint32,bytes32)": FunctionFragment;
    "oldReprToCurrentRepr(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "representationToCanonical(address)": FunctionFragment;
    "setLocalDomain(uint32)": FunctionFragment;
    "setXAppConnectionManager(address)": FunctionFragment;
    "tokenBeacon()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "xAppConnectionManager()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "canonicalToRepresentation",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "enrollCustom",
    values: [BigNumberish, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "ensureLocalToken",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getCanonicalTokenId",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLocalAddress",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRepresentationAddress",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getTokenId", values: [string]): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isLocalOrigin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "mustHaveLocalToken",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "oldReprToCurrentRepr",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "representationToCanonical",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setLocalDomain",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setXAppConnectionManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenBeacon",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "xAppConnectionManager",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "canonicalToRepresentation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enrollCustom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ensureLocalToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCanonicalTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLocalAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRepresentationAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTokenId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isLocalOrigin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mustHaveLocalToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "oldReprToCurrentRepr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "representationToCanonical",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLocalDomain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setXAppConnectionManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenBeacon",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "xAppConnectionManager",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "TokenDeployed(uint32,bytes32,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenDeployed"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type TokenDeployedEvent = TypedEvent<
  [number, string, string],
  { domain: number; id: string; representation: string }
>;

export type TokenDeployedEventFilter = TypedEventFilter<TokenDeployedEvent>;

export interface TokenRegistry extends BaseContract {
  contractName: "TokenRegistry";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TokenRegistryInterface;

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
    canonicalToRepresentation(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    enrollCustom(
      _domain: BigNumberish,
      _id: BytesLike,
      _custom: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ensureLocalToken(
      _domain: BigNumberish,
      _id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCanonicalTokenId(
      _representation: string,
      overrides?: CallOverrides
    ): Promise<[number, string] & { _domain: number; _id: string }>;

    "getLocalAddress(uint32,bytes32)"(
      _domain: BigNumberish,
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { _local: string }>;

    "getLocalAddress(uint32,address)"(
      _domain: BigNumberish,
      _id: string,
      overrides?: CallOverrides
    ): Promise<[string] & { _local: string }>;

    getRepresentationAddress(
      _domain: BigNumberish,
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { _representation: string }>;

    getTokenId(
      _local: string,
      overrides?: CallOverrides
    ): Promise<[number, string] & { _domain: number; _id: string }>;

    initialize(
      _tokenBeacon: string,
      _xAppConnectionManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isLocalOrigin(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mustHaveLocalToken(
      _domain: BigNumberish,
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    oldReprToCurrentRepr(
      _oldRepr: string,
      overrides?: CallOverrides
    ): Promise<[string] & { _currentRepr: string }>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    representationToCanonical(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[number, string] & { domain: number; id: string }>;

    setLocalDomain(
      domain: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setXAppConnectionManager(
      _xAppConnectionManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenBeacon(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    xAppConnectionManager(overrides?: CallOverrides): Promise<[string]>;
  };

  canonicalToRepresentation(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  enrollCustom(
    _domain: BigNumberish,
    _id: BytesLike,
    _custom: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ensureLocalToken(
    _domain: BigNumberish,
    _id: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCanonicalTokenId(
    _representation: string,
    overrides?: CallOverrides
  ): Promise<[number, string] & { _domain: number; _id: string }>;

  "getLocalAddress(uint32,bytes32)"(
    _domain: BigNumberish,
    _id: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "getLocalAddress(uint32,address)"(
    _domain: BigNumberish,
    _id: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getRepresentationAddress(
    _domain: BigNumberish,
    _id: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getTokenId(
    _local: string,
    overrides?: CallOverrides
  ): Promise<[number, string] & { _domain: number; _id: string }>;

  initialize(
    _tokenBeacon: string,
    _xAppConnectionManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isLocalOrigin(_token: string, overrides?: CallOverrides): Promise<boolean>;

  mustHaveLocalToken(
    _domain: BigNumberish,
    _id: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  oldReprToCurrentRepr(
    _oldRepr: string,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  representationToCanonical(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[number, string] & { domain: number; id: string }>;

  setLocalDomain(
    domain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setXAppConnectionManager(
    _xAppConnectionManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenBeacon(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  xAppConnectionManager(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    canonicalToRepresentation(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    enrollCustom(
      _domain: BigNumberish,
      _id: BytesLike,
      _custom: string,
      overrides?: CallOverrides
    ): Promise<void>;

    ensureLocalToken(
      _domain: BigNumberish,
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getCanonicalTokenId(
      _representation: string,
      overrides?: CallOverrides
    ): Promise<[number, string] & { _domain: number; _id: string }>;

    "getLocalAddress(uint32,bytes32)"(
      _domain: BigNumberish,
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "getLocalAddress(uint32,address)"(
      _domain: BigNumberish,
      _id: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getRepresentationAddress(
      _domain: BigNumberish,
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getTokenId(
      _local: string,
      overrides?: CallOverrides
    ): Promise<[number, string] & { _domain: number; _id: string }>;

    initialize(
      _tokenBeacon: string,
      _xAppConnectionManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isLocalOrigin(_token: string, overrides?: CallOverrides): Promise<boolean>;

    mustHaveLocalToken(
      _domain: BigNumberish,
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    oldReprToCurrentRepr(
      _oldRepr: string,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    representationToCanonical(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[number, string] & { domain: number; id: string }>;

    setLocalDomain(
      domain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setXAppConnectionManager(
      _xAppConnectionManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenBeacon(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    xAppConnectionManager(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "TokenDeployed(uint32,bytes32,address)"(
      domain?: BigNumberish | null,
      id?: BytesLike | null,
      representation?: string | null
    ): TokenDeployedEventFilter;
    TokenDeployed(
      domain?: BigNumberish | null,
      id?: BytesLike | null,
      representation?: string | null
    ): TokenDeployedEventFilter;
  };

  estimateGas: {
    canonicalToRepresentation(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    enrollCustom(
      _domain: BigNumberish,
      _id: BytesLike,
      _custom: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ensureLocalToken(
      _domain: BigNumberish,
      _id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCanonicalTokenId(
      _representation: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getLocalAddress(uint32,bytes32)"(
      _domain: BigNumberish,
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getLocalAddress(uint32,address)"(
      _domain: BigNumberish,
      _id: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRepresentationAddress(
      _domain: BigNumberish,
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenId(_local: string, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _tokenBeacon: string,
      _xAppConnectionManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isLocalOrigin(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mustHaveLocalToken(
      _domain: BigNumberish,
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oldReprToCurrentRepr(
      _oldRepr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    representationToCanonical(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setLocalDomain(
      domain: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setXAppConnectionManager(
      _xAppConnectionManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenBeacon(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    xAppConnectionManager(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    canonicalToRepresentation(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    enrollCustom(
      _domain: BigNumberish,
      _id: BytesLike,
      _custom: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ensureLocalToken(
      _domain: BigNumberish,
      _id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCanonicalTokenId(
      _representation: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getLocalAddress(uint32,bytes32)"(
      _domain: BigNumberish,
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getLocalAddress(uint32,address)"(
      _domain: BigNumberish,
      _id: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRepresentationAddress(
      _domain: BigNumberish,
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenId(
      _local: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _tokenBeacon: string,
      _xAppConnectionManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isLocalOrigin(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mustHaveLocalToken(
      _domain: BigNumberish,
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oldReprToCurrentRepr(
      _oldRepr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    representationToCanonical(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setLocalDomain(
      domain: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setXAppConnectionManager(
      _xAppConnectionManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenBeacon(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    xAppConnectionManager(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}