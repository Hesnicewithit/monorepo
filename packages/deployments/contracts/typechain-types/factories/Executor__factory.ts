/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Executor, ExecutorInterface } from "../Executor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_connext",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transferId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isContract",
        type: "bool",
      },
    ],
    name: "Executed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "transferId",
        type: "bytes32",
      },
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
      {
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getConnext",
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
  "0x60a060405234801561001057600080fd5b50604051610a2d380380610a2d83398101604081905261002f91610045565b60016000556001600160a01b0316608052610075565b60006020828403121561005757600080fd5b81516001600160a01b038116811461006e57600080fd5b9392505050565b608051610998610095600039600081816048015260a901526109986000f3fe6080604052600436106100295760003560e01c8063975740c61461002e578063a81a368d14610077575b600080fd5b34801561003a57600080fd5b506040516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020015b60405180910390f35b61008a610085366004610723565b610099565b60405161006e93929190610825565b6000806060336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101055760405162461bcd60e51b8152602060048201526007602482015266234f433a30323760c81b60448201526064015b60405180910390fd5b6001600160a01b038716158061012057610120888a8961021d565b600060606001600160a01b038b163b158015906101a8578b6001600160a01b03168461014d57600061014f565b8a5b8a8a60405161015f929190610851565b60006040518083038185875af1925050503d806000811461019c576040519150601f19603f3d011682016040523d82523d6000602084013e6101a1565b606091505b5090935091505b826101bd57836101bd576101bd8b8d8c61026d565b8b6001600160a01b03168d7fba8945310c2d5b346d3320f14e4072113b27427d9442cd033665c6f70244a1a28d8d8d8d888a896040516102039796959493929190610861565b60405180910390a3919c919b509950975050505050505050565b6001600160a01b03831661025d5760405162461bcd60e51b815260206004820152600760248201526608d2504e8c0ccd60ca1b60448201526064016100fc565b6102688383836102b8565b505050565b6001600160a01b0383166102ad5760405162461bcd60e51b815260206004820152600760248201526608d1104e8c0ccd60ca1b60448201526064016100fc565b6102688383836103a3565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015610309573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061032d91906108d2565b61033791906108eb565b6040516001600160a01b03851660248201526044810182905290915061039d90859063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526104b6565b50505050565b604051636eb1769f60e11b81523060048201526001600160a01b0383811660248301526000919085169063dd62ed3e90604401602060405180830381865afa1580156103f3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041791906108d2565b90508181101561047b5760405162461bcd60e51b815260206004820152602960248201527f5361666545524332303a2064656372656173656420616c6c6f77616e63652062604482015268656c6f77207a65726f60b81b60648201526084016100fc565b6040516001600160a01b038416602482015282820360448201819052906104af90869063095ea7b360e01b90606401610366565b5050505050565b600061050b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166105889092919063ffffffff16565b80519091501561026857808060200190518101906105299190610911565b6102685760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016100fc565b606061059784846000856105a1565b90505b9392505050565b6060824710156106025760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016100fc565b6001600160a01b0385163b6106595760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016100fc565b600080866001600160a01b031685876040516106759190610933565b60006040518083038185875af1925050503d80600081146106b2576040519150601f19603f3d011682016040523d82523d6000602084013e6106b7565b606091505b50915091506106c78282866106d2565b979650505050505050565b606083156106e157508161059a565b8251156106f15782518084602001fd5b8160405162461bcd60e51b81526004016100fc919061094f565b6001600160a01b038116811461072057600080fd5b50565b60008060008060008060a0878903121561073c57600080fd5b86359550602087013561074e8161070b565b9450604087013561075e8161070b565b935060608701359250608087013567ffffffffffffffff8082111561078257600080fd5b818901915089601f83011261079657600080fd5b8135818111156107a557600080fd5b8a60208285010111156107b757600080fd5b6020830194508093505050509295509295509295565b60005b838110156107e85781810151838201526020016107d0565b8381111561039d5750506000910152565b600081518084526108118160208601602086016107cd565b601f01601f19169290920160200192915050565b8315158152821515602082015260606040820152600061084860608301846107f9565b95945050505050565b8183823760009101908152919050565b6001600160a01b03881681526020810187905260c0604082018190528101859052848660e0830137600060e086830101526000601f19601f870116820160e08382030160608401526108b660e08201876107f9565b9415156080840152505090151560a09091015295945050505050565b6000602082840312156108e457600080fd5b5051919050565b6000821982111561090c57634e487b7160e01b600052601160045260246000fd5b500190565b60006020828403121561092357600080fd5b8151801515811461059a57600080fd5b600082516109458184602087016107cd565b9190910192915050565b60208152600061059a60208301846107f956fea26469706673582212202227f263794a5dc68ad64cfdfc0af38d93b214e0ae5c4cea8d42ff15a59eab4b64736f6c634300080b0033";

type ExecutorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExecutorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Executor__factory extends ContractFactory {
  constructor(...args: ExecutorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Executor";
  }

  deploy(
    _connext: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Executor> {
    return super.deploy(_connext, overrides || {}) as Promise<Executor>;
  }
  getDeployTransaction(
    _connext: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_connext, overrides || {});
  }
  attach(address: string): Executor {
    return super.attach(address) as Executor;
  }
  connect(signer: Signer): Executor__factory {
    return super.connect(signer) as Executor__factory;
  }
  static readonly contractName: "Executor";
  public readonly contractName: "Executor";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExecutorInterface {
    return new utils.Interface(_abi) as ExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Executor {
    return new Contract(address, _abi, signerOrProvider) as Executor;
  }
}
