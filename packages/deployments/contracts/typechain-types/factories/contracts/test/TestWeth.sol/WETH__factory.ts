/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  WETH,
  WETHInterface,
} from "../../../../contracts/test/TestWeth.sol/WETH";

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
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Deposit",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
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
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
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
        name: "to",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600a8152692a32b9ba102a37b5b2b760b11b602080830191825283518085019094526004845263151154d560e21b908401528151919291620000609160039162000183565b5080516200007690600490602084019062000183565b505050620000953369d3c21bcecceda10000006200009b60201b60201c565b6200028d565b6001600160a01b038216620000f65760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200010a919062000229565b90915550506001600160a01b038216600090815260208190526040812080548392906200013990849062000229565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001919062000250565b90600052602060002090601f016020900481019282620001b5576000855562000200565b82601f10620001d057805160ff191683800117855562000200565b8280016001018555821562000200579182015b8281111562000200578251825591602001919060010190620001e3565b506200020e92915062000212565b5090565b5b808211156200020e576000815560010162000213565b600082198211156200024b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200026557607f821691505b602082108114156200028757634e487b7160e01b600052602260045260246000fd5b50919050565b610d43806200029d6000396000f3fe6080604052600436106100e05760003560e01c806340c10f1911610084578063a457c2d711610056578063a457c2d71461026a578063a9059cbb1461028a578063d0e30db0146102aa578063dd62ed3e146102b257005b806340c10f19146101df57806370a08231146101ff57806395d89b41146102355780639dc29fac1461024a57005b806323b872dd116100bd57806323b872dd146101635780632e1a7d4d14610183578063313ce567146101a357806339509351146101bf57005b806306fdde03146100e9578063095ea7b31461011457806318160ddd1461014457005b366100e757005b005b3480156100f557600080fd5b506100fe6102f8565b60405161010b9190610b48565b60405180910390f35b34801561012057600080fd5b5061013461012f366004610bb9565b61038a565b604051901515815260200161010b565b34801561015057600080fd5b506002545b60405190815260200161010b565b34801561016f57600080fd5b5061013461017e366004610be3565b6103a2565b34801561018f57600080fd5b506100e761019e366004610c1f565b6103c6565b3480156101af57600080fd5b506040516012815260200161010b565b3480156101cb57600080fd5b506101346101da366004610bb9565b610452565b3480156101eb57600080fd5b506100e76101fa366004610bb9565b610491565b34801561020b57600080fd5b5061015561021a366004610c38565b6001600160a01b031660009081526020819052604090205490565b34801561024157600080fd5b506100fe61049f565b34801561025657600080fd5b506100e7610265366004610bb9565b6104ae565b34801561027657600080fd5b50610134610285366004610bb9565b6104b8565b34801561029657600080fd5b506101346102a5366004610bb9565b61054f565b6100e761055d565b3480156102be57600080fd5b506101556102cd366004610c5a565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461030790610c8d565b80601f016020809104026020016040519081016040528092919081815260200182805461033390610c8d565b80156103805780601f1061035557610100808354040283529160200191610380565b820191906000526020600020905b81548152906001019060200180831161036357829003601f168201915b5050505050905090565b60003361039881858561059e565b5060019392505050565b6000336103b08582856106c3565b6103bb858585610755565b506001949350505050565b336000908152602081905260409020548111156103e257600080fd5b6103ec3382610923565b604051339082156108fc029083906000818181858888f19350505050158015610419573d6000803e3d6000fd5b5060405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a250565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190610398908290869061048c908790610cde565b61059e565b61049b8282610a69565b5050565b60606004805461030790610c8d565b61049b8282610923565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105425760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6103bb828686840361059e565b600033610398818585610755565b6105673334610a69565b60405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b6001600160a01b0383166106005760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610539565b6001600160a01b0382166106615760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610539565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461074f57818110156107425760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610539565b61074f848484840361059e565b50505050565b6001600160a01b0383166107b95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610539565b6001600160a01b03821661081b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610539565b6001600160a01b038316600090815260208190526040902054818110156108935760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610539565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906108ca908490610cde565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161091691815260200190565b60405180910390a361074f565b6001600160a01b0382166109835760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610539565b6001600160a01b038216600090815260208190526040902054818110156109f75760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610539565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610a26908490610cf6565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016106b6565b6001600160a01b038216610abf5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610539565b8060026000828254610ad19190610cde565b90915550506001600160a01b03821660009081526020819052604081208054839290610afe908490610cde565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600060208083528351808285015260005b81811015610b7557858101830151858201604001528201610b59565b81811115610b87576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610bb457600080fd5b919050565b60008060408385031215610bcc57600080fd5b610bd583610b9d565b946020939093013593505050565b600080600060608486031215610bf857600080fd5b610c0184610b9d565b9250610c0f60208501610b9d565b9150604084013590509250925092565b600060208284031215610c3157600080fd5b5035919050565b600060208284031215610c4a57600080fd5b610c5382610b9d565b9392505050565b60008060408385031215610c6d57600080fd5b610c7683610b9d565b9150610c8460208401610b9d565b90509250929050565b600181811c90821680610ca157607f821691505b60208210811415610cc257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610cf157610cf1610cc8565b500190565b600082821015610d0857610d08610cc8565b50039056fea2646970667358221220befc291fd7a2911abc3f308a7aa77d060539d7c97188e839dd6ce2c30fc275cb64736f6c634300080b0033";

type WETHConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WETHConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WETH__factory extends ContractFactory {
  constructor(...args: WETHConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WETH> {
    return super.deploy(overrides || {}) as Promise<WETH>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): WETH {
    return super.attach(address) as WETH;
  }
  override connect(signer: Signer): WETH__factory {
    return super.connect(signer) as WETH__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WETHInterface {
    return new utils.Interface(_abi) as WETHInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): WETH {
    return new Contract(address, _abi, signerOrProvider) as WETH;
  }
}
