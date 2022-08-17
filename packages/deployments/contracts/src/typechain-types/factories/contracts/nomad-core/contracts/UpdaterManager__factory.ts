/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  UpdaterManager,
  UpdaterManagerInterface,
} from "../../../../contracts/nomad-core/contracts/UpdaterManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_updaterAddress",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "reporter",
        type: "address",
      },
    ],
    name: "FakeSlashed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "home",
        type: "address",
      },
    ],
    name: "NewHome",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_home",
        type: "address",
      },
    ],
    name: "setHome",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_updaterAddress",
        type: "address",
      },
    ],
    name: "setUpdater",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_reporter",
        type: "address",
      },
    ],
    name: "slashUpdater",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updater",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260405161053d38038061053d833981016040819052610022916100a0565b61002b33610050565b600280546001600160a01b0319166001600160a01b03929092169190911790556100d0565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100b257600080fd5b81516001600160a01b03811681146100c957600080fd5b9392505050565b61045e806100df6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100b25780639d54f419146100db578063df034cd0146100ee578063f2fde38b146100ff57600080fd5b80635b3c2cbf146100825780636ef0f37f14610097578063715018a6146100aa575b600080fd5b610095610090366004610404565b610112565b005b6100956100a5366004610404565b610199565b610095610237565b6000546001600160a01b03165b6040516001600160a01b03909116815260200160405180910390f35b6100956100e9366004610404565b61024b565b6002546001600160a01b03166100bf565b61009561010d366004610404565b6102cc565b6001546001600160a01b031633146101595760405162461bcd60e51b815260206004820152600560248201526421686f6d6560d81b60448201526064015b60405180910390fd5b6040516001600160a01b03821681527f4180932f5f5f11458bcd408e42c54626987799e7c4c89f40f484fefdfdfff14f906020015b60405180910390a150565b6101a1610345565b6001600160a01b0381163b6101e95760405162461bcd60e51b815260206004820152600e60248201526d21636f6e747261637420686f6d6560901b6044820152606401610150565b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527fa6c230e5615262e310dcb42eaf014e813e5d8580abf5b00d2186ca8e9833de219060200161018e565b61023f610345565b610249600061039f565b565b610253610345565b600280546001600160a01b0319166001600160a01b03838116918217909255600154604051639d54f41960e01b8152600481019290925290911690639d54f41990602401600060405180830381600087803b1580156102b157600080fd5b505af11580156102c5573d6000803e3d6000fd5b5050505050565b6102d4610345565b6001600160a01b0381166103395760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610150565b6103428161039f565b50565b6000546001600160a01b031633146102495760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610150565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038116811461034257600080fd5b60006020828403121561041657600080fd5b8135610421816103ef565b939250505056fea2646970667358221220c74a7a33b534d19f4d8077b30da471235665f00a79edc37113dd96ca1b322d4564736f6c634300080f0033";

type UpdaterManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UpdaterManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UpdaterManager__factory extends ContractFactory {
  constructor(...args: UpdaterManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _updaterAddress: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<UpdaterManager> {
    return super.deploy(
      _updaterAddress,
      overrides || {}
    ) as Promise<UpdaterManager>;
  }
  override getDeployTransaction(
    _updaterAddress: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_updaterAddress, overrides || {});
  }
  override attach(address: string): UpdaterManager {
    return super.attach(address) as UpdaterManager;
  }
  override connect(signer: Signer): UpdaterManager__factory {
    return super.connect(signer) as UpdaterManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpdaterManagerInterface {
    return new utils.Interface(_abi) as UpdaterManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpdaterManager {
    return new Contract(address, _abi, signerOrProvider) as UpdaterManager;
  }
}
