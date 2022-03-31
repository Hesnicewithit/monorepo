/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RevertableERC20,
  RevertableERC20Interface,
} from "../../../contracts/test/RevertableERC20";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_shouldRevert",
        type: "bool",
      },
    ],
    name: "setShouldRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "shouldRevert",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526005805460ff191690553480156200001b57600080fd5b50604080518082018252601081526f2932bb32b93a30b13632902a37b5b2b760811b6020808301918252835180850190945260048452631495949560e21b908401528151919291620000709160039162000193565b5080516200008690600490602084019062000193565b505050620000a53369d3c21bcecceda1000000620000ab60201b60201c565b6200029d565b6001600160a01b038216620001065760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200011a919062000239565b90915550506001600160a01b038216600090815260208190526040812080548392906200014990849062000239565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001a19062000260565b90600052602060002090601f016020900481019282620001c5576000855562000210565b82601f10620001e057805160ff191683800117855562000210565b8280016001018555821562000210579182015b8281111562000210578251825591602001919060010190620001f3565b506200021e92915062000222565b5090565b5b808211156200021e576000815560010162000223565b600082198211156200025b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200027557607f821691505b602082108114156200029757634e487b7160e01b600052602260045260246000fd5b50919050565b610d3980620002ad6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80636813d78711610097578063a457c2d711610066578063a457c2d7146101e6578063a9059cbb146101f9578063d3072d821461020c578063dd62ed3e1461021957600080fd5b80636813d7871461019757806370a08231146101b857806395d89b41146101cb5780639dc29fac146101d357600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063395093511461016f57806340c10f191461018257600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610252565b60405161010f9190610b35565b60405180910390f35b61012b610126366004610ba6565b6102e4565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610bd0565b6102fc565b6040516012815260200161010f565b61012b61017d366004610ba6565b610320565b610195610190366004610ba6565b61035f565b005b6101956101a5366004610c0c565b6005805460ff1916911515919091179055565b61013f6101c6366004610c35565b6103bb565b61010261042d565b6101956101e1366004610ba6565b61043c565b61012b6101f4366004610ba6565b61048f565b61012b610207366004610ba6565b610521565b60055461012b9060ff1681565b61013f610227366004610c50565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461026190610c83565b80601f016020809104026020016040519081016040528092919081815260200182805461028d90610c83565b80156102da5780601f106102af576101008083540402835291602001916102da565b820191906000526020600020905b8154815290600101906020018083116102bd57829003601f168201915b5050505050905090565b6000336102f281858561058b565b5060019392505050565b60003361030a8582856106b0565b610315858585610742565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102f2908290869061035a908790610cd4565b61058b565b60055460ff16156103ad5760405162461bcd60e51b81526020600482015260136024820152721b5a5b9d0e8814d213d5531117d49155915495606a1b60448201526064015b60405180910390fd5b6103b78282610910565b5050565b60055460009060ff16156104115760405162461bcd60e51b815260206004820152601860248201527f62616c616e63654f663a2053484f554c445f524556455254000000000000000060448201526064016103a4565b506001600160a01b031660009081526020819052604090205490565b60606004805461026190610c83565b60055460ff16156104855760405162461bcd60e51b8152602060048201526013602482015272189d5c9b8e8814d213d5531117d49155915495606a1b60448201526064016103a4565b6103b782826109ef565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105145760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103a4565b610315828686840361058b565b60055460009060ff16156105775760405162461bcd60e51b815260206004820152601760248201527f7472616e736665723a2053484f554c445f52455645525400000000000000000060448201526064016103a4565b610582338484610742565b50600192915050565b6001600160a01b0383166105ed5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103a4565b6001600160a01b03821661064e5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103a4565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461073c578181101561072f5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103a4565b61073c848484840361058b565b50505050565b6001600160a01b0383166107a65760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103a4565b6001600160a01b0382166108085760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103a4565b6001600160a01b038316600090815260208190526040902054818110156108805760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103a4565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906108b7908490610cd4565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161090391815260200190565b60405180910390a361073c565b6001600160a01b0382166109665760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103a4565b80600260008282546109789190610cd4565b90915550506001600160a01b038216600090815260208190526040812080548392906109a5908490610cd4565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610a4f5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103a4565b6001600160a01b03821660009081526020819052604090205481811015610ac35760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103a4565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610af2908490610cec565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016106a3565b600060208083528351808285015260005b81811015610b6257858101830151858201604001528201610b46565b81811115610b74576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610ba157600080fd5b919050565b60008060408385031215610bb957600080fd5b610bc283610b8a565b946020939093013593505050565b600080600060608486031215610be557600080fd5b610bee84610b8a565b9250610bfc60208501610b8a565b9150604084013590509250925092565b600060208284031215610c1e57600080fd5b81358015158114610c2e57600080fd5b9392505050565b600060208284031215610c4757600080fd5b610c2e82610b8a565b60008060408385031215610c6357600080fd5b610c6c83610b8a565b9150610c7a60208401610b8a565b90509250929050565b600181811c90821680610c9757607f821691505b60208210811415610cb857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610ce757610ce7610cbe565b500190565b600082821015610cfe57610cfe610cbe565b50039056fea2646970667358221220cb5e4d5e8c93c274512876c3bd955a29aa7885b436b3350b878c1fa19977e06d64736f6c634300080b0033";

type RevertableERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RevertableERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RevertableERC20__factory extends ContractFactory {
  constructor(...args: RevertableERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RevertableERC20> {
    return super.deploy(overrides || {}) as Promise<RevertableERC20>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RevertableERC20 {
    return super.attach(address) as RevertableERC20;
  }
  override connect(signer: Signer): RevertableERC20__factory {
    return super.connect(signer) as RevertableERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RevertableERC20Interface {
    return new utils.Interface(_abi) as RevertableERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RevertableERC20 {
    return new Contract(address, _abi, signerOrProvider) as RevertableERC20;
  }
}
