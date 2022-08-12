/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestAavePool,
  TestAavePoolInterface,
} from "../../../contracts/test/TestAavePool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "backUnbacked",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    name: "mintUnbacked",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_revert",
        type: "bool",
      },
    ],
    name: "setRevertCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102f5806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806369328dec1461005157806369a933a514610076578063d33d5c861461008b578063d65dc7a1146100ac575b600080fd5b61006461005f3660046101d1565b6100bf565b60405190815260200160405180910390f35b61008961008436600461020d565b610114565b005b610089610099366004610263565b6000805460ff1916911515919091179055565b6100896100ba36600461028c565b610165565b6000805460ff161561010c5760405162461bcd60e51b81526020600482015260116024820152701dda5d1a191c985dc81c995d995c9d1959607a1b60448201526064015b60405180910390fd5b509092915050565b60005460ff161561015f5760405162461bcd60e51b81526020600482015260156024820152741b5a5b9d155b989858dad959081c995d995c9d1959605a1b6044820152606401610103565b50505050565b60005460ff16156101b05760405162461bcd60e51b8152602060048201526015602482015274189858dad55b989858dad959081c995d995c9d1959605a1b6044820152606401610103565b505050565b80356001600160a01b03811681146101cc57600080fd5b919050565b6000806000606084860312156101e657600080fd5b6101ef846101b5565b925060208401359150610204604085016101b5565b90509250925092565b6000806000806080858703121561022357600080fd5b61022c856101b5565b935060208501359250610241604086016101b5565b9150606085013561ffff8116811461025857600080fd5b939692955090935050565b60006020828403121561027557600080fd5b8135801515811461028557600080fd5b9392505050565b6000806000606084860312156102a157600080fd5b6102aa846101b5565b9560208501359550604090940135939250505056fea26469706673582212206e00763e121a9cb1ca3fe17924b2d381b6c376b112ccdcc985684188e4b1811264736f6c634300080f0033";

type TestAavePoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestAavePoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestAavePool__factory extends ContractFactory {
  constructor(...args: TestAavePoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestAavePool> {
    return super.deploy(overrides || {}) as Promise<TestAavePool>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestAavePool {
    return super.attach(address) as TestAavePool;
  }
  override connect(signer: Signer): TestAavePool__factory {
    return super.connect(signer) as TestAavePool__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestAavePoolInterface {
    return new utils.Interface(_abi) as TestAavePoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestAavePool {
    return new Contract(address, _abi, signerOrProvider) as TestAavePool;
  }
}
