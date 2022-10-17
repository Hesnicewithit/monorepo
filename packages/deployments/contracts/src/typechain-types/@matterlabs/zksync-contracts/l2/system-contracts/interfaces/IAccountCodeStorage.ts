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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../common";

export interface IAccountCodeStorageInterface extends utils.Interface {
  functions: {
    "getCodeHash(uint256)": FunctionFragment;
    "getCodeSize(uint256)": FunctionFragment;
    "getRawCodeHash(address)": FunctionFragment;
    "storeCodeHash(address,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getCodeHash"
      | "getCodeSize"
      | "getRawCodeHash"
      | "storeCodeHash"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getCodeHash",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getCodeSize",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRawCodeHash",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "storeCodeHash",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getCodeHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCodeSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRawCodeHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "storeCodeHash",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IAccountCodeStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAccountCodeStorageInterface;

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
    getCodeHash(
      _input: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getCodeSize(
      _input: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getRawCodeHash(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { codeHash: string }>;

    storeCodeHash(
      _address: PromiseOrValue<string>,
      _hash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getCodeHash(
    _input: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getCodeSize(
    _input: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getRawCodeHash(
    _address: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  storeCodeHash(
    _address: PromiseOrValue<string>,
    _hash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getCodeHash(
      _input: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getCodeSize(
      _input: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRawCodeHash(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    storeCodeHash(
      _address: PromiseOrValue<string>,
      _hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getCodeHash(
      _input: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getCodeSize(
      _input: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getRawCodeHash(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    storeCodeHash(
      _address: PromiseOrValue<string>,
      _hash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getCodeHash(
      _input: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getCodeSize(
      _input: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getRawCodeHash(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    storeCodeHash(
      _address: PromiseOrValue<string>,
      _hash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
