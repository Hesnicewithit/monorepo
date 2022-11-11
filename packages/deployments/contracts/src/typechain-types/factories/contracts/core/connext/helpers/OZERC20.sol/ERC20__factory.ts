/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type { ERC20, ERC20Interface } from "../../../../../../contracts/core/connext/helpers/OZERC20.sol/ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_version",
        type: "string",
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
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
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
        name: "_account",
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
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_subtractedValue",
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
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_addedValue",
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
        name: "_owner",
        type: "address",
      },
    ],
    name: "nonces",
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
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "_r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
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
  "0x6101406040523480156200001257600080fd5b5060405162001379380380620013798339810160408190526200003591620001cb565b825160208085019190912082518383012060e08290526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818801819052818301969096526060810194909452608080850193909352308483018190528151808603909301835260c094850190915281519190950120905291909152610120526005620000d2848262000306565b506007805460ff191660ff86161790556006620000f0838262000306565b50805160209091012060045550620003d2915050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200012e57600080fd5b81516001600160401b03808211156200014b576200014b62000106565b604051601f8301601f19908116603f0116810190828211818310171562000176576200017662000106565b816040528381526020925086838588010111156200019357600080fd5b600091505b83821015620001b7578582018301518183018401529082019062000198565b600093810190920192909252949350505050565b60008060008060808587031215620001e257600080fd5b845160ff81168114620001f457600080fd5b60208601519094506001600160401b03808211156200021257600080fd5b62000220888389016200011c565b945060408701519150808211156200023757600080fd5b62000245888389016200011c565b935060608701519150808211156200025c57600080fd5b506200026b878288016200011c565b91505092959194509250565b600181811c908216806200028c57607f821691505b602082108103620002ad57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200030157600081815260208120601f850160051c81016020861015620002dc5750805b601f850160051c820191505b81811015620002fd57828155600101620002e8565b5050505b505050565b81516001600160401b0381111562000322576200032262000106565b6200033a8162000333845462000277565b84620002b3565b602080601f831160018114620003725760008415620003595750858301515b600019600386901b1c1916600185901b178555620002fd565b600085815260208120601f198616915b82811015620003a35788860151825594840194600190910190840162000382565b5085821015620003c25787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c05160e0516101005161012051610f576200042260003960006108f701526000610946015260006109210152600061087a015260006108a4015260006108ce0152610f576000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806370a082311161007157806370a08231146101165780637ecebe001461013f578063a457c2d714610152578063a9059cbb14610165578063d505accf14610178578063dd62ed3e1461018d57600080fd5b8063095ea7b3146100ae57806318160ddd146100d657806323b872dd146100e85780633644e515146100fb5780633950935114610103575b600080fd5b6100c16100bc366004610c56565b6101c6565b60405190151581526020015b60405180910390f35b6002545b6040519081526020016100cd565b6100c16100f6366004610c80565b6101dd565b6100da610246565b6100c1610111366004610c56565b6102d9565b6100da610124366004610cbc565b6001600160a01b031660009081526020819052604090205490565b6100da61014d366004610cbc565b61030f565b6100c1610160366004610c56565b61032d565b6100c1610173366004610c56565b61037c565b61018b610186366004610cd7565b610389565b005b6100da61019b366004610d4a565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60006101d3338484610510565b5060015b92915050565b60006101ea848484610635565b61023c843361023785604051806060016040528060288152602001610ed5602891396001600160a01b038a16600090815260016020908152604080832033845290915290205491906107b8565b610510565b5060019392505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600560000160405160200161027e9190610d7d565b60408051601f198184030181528282528051602091820120600454918401949094529082019290925260608101919091524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916101d391859061023790866107e4565b6001600160a01b0381166000908152600360205260408120546101d7565b60006101d3338461023785604051806060016040528060258152602001610efd602591393360009081526001602090815260408083206001600160a01b038d16845290915290205491906107b8565b60006101d3338484610635565b834211156103de5760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064015b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c988888861042b8c6001600160a01b0316600090815260036020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610486826107f7565b9050600061049682878787610845565b9050896001600160a01b0316816001600160a01b0316146104f95760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016103d5565b6105048a8a8a610510565b50505050505050505050565b6001600160a01b0383166105725760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103d5565b6001600160a01b0382166105d35760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103d5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166106995760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103d5565b6001600160a01b0382166106fb5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103d5565b61073881604051806060016040528060268152602001610eaf602691396001600160a01b03861660009081526020819052604090205491906107b8565b6001600160a01b03808516600090815260208190526040808220939093559084168152205461076790826107e4565b6001600160a01b038381166000818152602081815260409182902094909455518481529092918616917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9101610628565b600081848411156107dc5760405162461bcd60e51b81526004016103d59190610e29565b505050900390565b60006107f08284610e77565b9392505050565b60006101d761080461086d565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b600080600061085687878787610994565b9150915061086381610a81565b5095945050505050565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480156108c657507f000000000000000000000000000000000000000000000000000000000000000046145b156108f057507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156109cb5750600090506003610a78565b8460ff16601b141580156109e357508460ff16601c14155b156109f45750600090506004610a78565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610a48573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610a7157600060019250925050610a78565b9150600090505b94509492505050565b6000816004811115610a9557610a95610e98565b03610a9d5750565b6001816004811115610ab157610ab1610e98565b03610afe5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016103d5565b6002816004811115610b1257610b12610e98565b03610b5f5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016103d5565b6003816004811115610b7357610b73610e98565b03610bcb5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016103d5565b6004816004811115610bdf57610bdf610e98565b03610c375760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016103d5565b50565b80356001600160a01b0381168114610c5157600080fd5b919050565b60008060408385031215610c6957600080fd5b610c7283610c3a565b946020939093013593505050565b600080600060608486031215610c9557600080fd5b610c9e84610c3a565b9250610cac60208501610c3a565b9150604084013590509250925092565b600060208284031215610cce57600080fd5b6107f082610c3a565b600080600080600080600060e0888a031215610cf257600080fd5b610cfb88610c3a565b9650610d0960208901610c3a565b95506040880135945060608801359350608088013560ff81168114610d2d57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610d5d57600080fd5b610d6683610c3a565b9150610d7460208401610c3a565b90509250929050565b600060208083526000845481600182811c915080831680610d9f57607f831692505b8583108103610dbc57634e487b7160e01b85526022600452602485fd5b878601838152602001818015610dd95760018114610def57610e1a565b60ff198616825284151560051b82019650610e1a565b60008b81526020902060005b86811015610e1457815484820152908501908901610dfb565b83019750505b50949998505050505050505050565b600060208083528351808285015260005b81811015610e5657858101830151858201604001528201610e3a565b506000604082860101526040601f19601f8301168501019250505092915050565b808201808211156101d757634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfe45524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122042e2dbf5106e6c7ab4d4e5510d9593c0fc5b162ab3c36d71b29814d994b9558a64736f6c63430008110033";

type ERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: ERC20ConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _decimals: PromiseOrValue<BigNumberish>,
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _version: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ERC20> {
    return super.deploy(_decimals, _name, _symbol, _version, overrides || {}) as Promise<ERC20>;
  }
  override getDeployTransaction(
    _decimals: PromiseOrValue<BigNumberish>,
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _version: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_decimals, _name, _symbol, _version, overrides || {});
  }
  override attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  override connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}
