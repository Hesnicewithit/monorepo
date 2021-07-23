/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FulfillInterpreter,
  FulfillInterpreterInterface,
} from "../FulfillInterpreter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "transactionManager",
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
        name: "transactionId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "callTo",
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
        internalType: "address payable",
        name: "fallbackAddress",
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
    ],
    name: "Executed",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "transactionId",
        type: "bytes32",
      },
      {
        internalType: "address payable",
        name: "callTo",
        type: "address",
      },
      {
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "fallbackAddress",
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
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getTransactionManager",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610d05380380610d0583398101604081905261002f916100b4565b600160005561003d33610062565b600280546001600160a01b0319166001600160a01b03929092169190911790556100e2565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000602082840312156100c5578081fd5b81516001600160a01b03811681146100db578182fd5b9392505050565b610c14806100f16000396000f3fe60806040526004361061004a5760003560e01c8063715018a61461004f5780638da5cb5b1461006657806396f32fb81461009c578063cf9a3604146100ba578063f2fde38b146100cd575b600080fd5b34801561005b57600080fd5b506100646100ed565b005b34801561007257600080fd5b506001546001600160a01b03165b6040516001600160a01b03909116815260200160405180910390f35b3480156100a857600080fd5b506002546001600160a01b0316610080565b6100646100c83660046109c1565b610158565b3480156100d957600080fd5b506100646100e8366004610985565b6102f9565b6001546001600160a01b0316331461014c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b61015660006103c4565b565b600260005414156101ab5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610143565b60026000819055546001600160a01b031633146101f55760405162461bcd60e51b8152602060048201526008602482015267234f544d3a30323760c01b6044820152606401610143565b6001600160a01b038516158061021057610210868886610416565b600080886001600160a01b03168361022957600061022b565b865b868660405161023b929190610abe565b60006040518083038185875af1925050503d8060008114610278576040519150601f19603f3d011682016040523d82523d6000602084013e61027d565b606091505b5091509150816102a257610292888888610426565b826102a2576102a2888a8861044a565b897fbf49bd2de448d90a19e0510ab1030fead50ebfc64a4f112ca42535ae79fbab798a8a8a8a8a8a888a6040516102e0989796959493929190610aea565b60405180910390a2505060016000555050505050505050565b6001546001600160a01b031633146103535760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610143565b6001600160a01b0381166103b85760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610143565b6103c1816103c4565b50565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610421838383610455565b505050565b6001600160a01b038316156104405761042183838361054f565b610421828261055a565b6104218383836105e7565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e9060440160206040518083038186803b1580156104a157600080fd5b505afa1580156104b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d99190610a7a565b6104e39190610b79565b6040516001600160a01b03851660248201526044810182905290915061054990859063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610709565b50505050565b6104218383836107db565b6000826001600160a01b03168260405160006040518083038185875af1925050503d80600081146105a7576040519150601f19603f3d011682016040523d82523d6000602084013e6105ac565b606091505b50509050806104215760405162461bcd60e51b8152602060048201526007602482015266046a88a746064760cb1b6044820152606401610143565b604051636eb1769f60e11b81523060048201526001600160a01b0383811660248301526000919085169063dd62ed3e9060440160206040518083038186803b15801561063257600080fd5b505afa158015610646573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066a9190610a7a565b9050818110156106ce5760405162461bcd60e51b815260206004820152602960248201527f5361666545524332303a2064656372656173656420616c6c6f77616e63652062604482015268656c6f77207a65726f60b81b6064820152608401610143565b6040516001600160a01b0384166024820152828203604482018190529061070290869063095ea7b360e01b90606401610512565b5050505050565b600061075e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661080b9092919063ffffffff16565b805190915015610421578080602001905181019061077c91906109a1565b6104215760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610143565b6040516001600160a01b03831660248201526044810182905261042190849063a9059cbb60e01b90606401610512565b606061081a8484600085610824565b90505b9392505050565b6060824710156108855760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610143565b843b6108d35760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610143565b600080866001600160a01b031685876040516108ef9190610ace565b60006040518083038185875af1925050503d806000811461092c576040519150601f19603f3d011682016040523d82523d6000602084013e610931565b606091505b509150915061094182828661094c565b979650505050505050565b6060831561095b57508161081d565b82511561096b5782518084602001fd5b8160405162461bcd60e51b81526004016101439190610b66565b600060208284031215610996578081fd5b813561081d81610bc9565b6000602082840312156109b2578081fd5b8151801515811461081d578182fd5b600080600080600080600060c0888a0312156109db578283fd5b8735965060208801356109ed81610bc9565b955060408801356109fd81610bc9565b94506060880135610a0d81610bc9565b93506080880135925060a088013567ffffffffffffffff80821115610a30578384fd5b818a0191508a601f830112610a43578384fd5b813581811115610a51578485fd5b8b6020828501011115610a62578485fd5b60208301945080935050505092959891949750929550565b600060208284031215610a8b578081fd5b5051919050565b60008151808452610aaa816020860160208601610b9d565b601f01601f19169290920160200192915050565b8183823760009101908152919050565b60008251610ae0818460208701610b9d565b9190910192915050565b6001600160a01b0389811682528881166020830152871660408201526060810186905260e0608082018190528101849052600061010085878285013781818785010152601f19601f8701168301818482030160a0850152610b4d82820187610a92565b9250505082151560c08301529998505050505050505050565b60208152600061081d6020830184610a92565b60008219821115610b9857634e487b7160e01b81526011600452602481fd5b500190565b60005b83811015610bb8578181015183820152602001610ba0565b838111156105495750506000910152565b6001600160a01b03811681146103c157600080fdfea2646970667358221220ab5ba9945a4513262d06024d5ad492a1762f51b928b7ec4eb6ba41cd7edf60f664736f6c63430008040033";

export class FulfillInterpreter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    transactionManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FulfillInterpreter> {
    return super.deploy(
      transactionManager,
      overrides || {}
    ) as Promise<FulfillInterpreter>;
  }
  getDeployTransaction(
    transactionManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(transactionManager, overrides || {});
  }
  attach(address: string): FulfillInterpreter {
    return super.attach(address) as FulfillInterpreter;
  }
  connect(signer: Signer): FulfillInterpreter__factory {
    return super.connect(signer) as FulfillInterpreter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FulfillInterpreterInterface {
    return new utils.Interface(_abi) as FulfillInterpreterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FulfillInterpreter {
    return new Contract(address, _abi, signerOrProvider) as FulfillInterpreter;
  }
}
