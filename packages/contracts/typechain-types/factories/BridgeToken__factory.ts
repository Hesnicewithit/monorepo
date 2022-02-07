/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BridgeToken, BridgeTokenInterface } from "../BridgeToken";

const _abi = [
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
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: true,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
    ],
    name: "UpdateDetails",
    type: "event",
  },
  {
    inputs: [],
    name: "VERSION",
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
    inputs: [],
    name: "_PERMIT_TYPEHASH",
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
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
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
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amnt",
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
    inputs: [],
    name: "detailsHash",
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
    inputs: [],
    name: "domainSeparator",
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
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amnt",
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
        internalType: "address",
        name: "",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_newSymbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_newDecimals",
        type: "uint8",
      },
    ],
    name: "setDetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_detailsHash",
        type: "bytes32",
      },
    ],
    name: "setDetailsHash",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
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
  "0x7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9608052610120604052600160e052603160f81b610100527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660a05261190160c05234801561006d57600080fd5b5060805160a05160c0516118566100a4600039600061098c01526000610b710152600081816102bc015261092801526118566000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80638129fc1c116100de578063a9059cbb11610097578063dd62ed3e11610071578063dd62ed3e1461033d578063f2fde38b14610376578063f698da2514610389578063ffa1ad741461039157600080fd5b8063a9059cbb14610304578063cc2ab7c714610317578063d505accf1461032a57600080fd5b80638129fc1c1461028c5780638da5cb5b1461029457806395d89b41146102af578063982aaf6b146102b75780639dc29fac146102de578063a457c2d7146102f157600080fd5b806340c10f191161013057806340c10f191461020a5780634815fcb11461021f578063654935f41461022857806370a082311461023b578063715018a6146102645780637ecebe001461026c57600080fd5b806306fdde0314610178578063095ea7b31461019657806318160ddd146101b957806323b872dd146101cb578063313ce567146101de57806339509351146101f7575b600080fd5b610180610399565b60405161018d919061131e565b60405180910390f35b6101a96101a436600461136d565b61042e565b604051901515815260200161018d565b6067545b60405190815260200161018d565b6101a96101d9366004611397565b610444565b606a5460ff165b60405160ff909116815260200161018d565b6101a961020536600461136d565b6104ad565b61021d61021836600461136d565b6104e3565b005b6101bd606c5481565b61021d61023636600461142d565b610524565b6101bd6102493660046114ae565b6001600160a01b031660009081526065602052604090205490565b61021d610690565b6101bd61027a3660046114ae565b606b6020526000908152604090205481565b61021d6106c6565b6033546040516001600160a01b03909116815260200161018d565b610180610787565b6101bd7f000000000000000000000000000000000000000000000000000000000000000081565b61021d6102ec36600461136d565b610799565b6101a96102ff36600461136d565b6107cd565b6101a961031236600461136d565b61081c565b61021d6103253660046114c9565b610829565b61021d6103383660046114e2565b610861565b6101bd61034b36600461154c565b6001600160a01b03918216600090815260666020908152604080832093909416825291909152205490565b61021d6103843660046114ae565b610aee565b6101bd610b21565b6101e5600081565b6060606860000180546103ab9061157f565b80601f01602080910402602001604051908101604052809291908181526020018280546103d79061157f565b80156104245780601f106103f957610100808354040283529160200191610424565b820191906000526020600020905b81548152906001019060200180831161040757829003601f168201915b5050505050905090565b600061043b338484610bc1565b50600192915050565b6000610451848484610ce6565b6104a3843361049e856040518060600160405280602881526020016117d4602891396001600160a01b038a1660009081526066602090815260408083203384529091529020549190610e6c565b610bc1565b5060019392505050565b3360008181526066602090815260408083206001600160a01b0387168452909152812054909161043b91859061049e9086610e98565b6033546001600160a01b031633146105165760405162461bcd60e51b815260040161050d906115ba565b60405180910390fd5b6105208282610eab565b5050565b6000606860000180546105369061157f565b159150819050806105bc5750606c546105ba87878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b018190048102820181019092528981529250899150889081908401838280828437600092019190915250889250610f91915050565b145b6105fd5760405162461bcd60e51b815260206004820152601260248201527121636f6d6d69747465642064657461696c7360701b604482015260640161050d565b61060960688787611255565b5061061660698585611255565b50606a805460ff191660ff841617905580610688578160ff16848460405161063f9291906115ef565b604051809103902087876040516106579291906115ef565b604051908190038120907f96848da8c41ae282b5ec5c04f45fc469a8186bb78de70419275c2c402fcc27b190600090a45b505050505050565b6033546001600160a01b031633146106ba5760405162461bcd60e51b815260040161050d906115ba565b6106c46000610fcd565b565b600054610100900460ff166106e15760005460ff16156106e5565b303b155b6107485760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161050d565b600054610100900460ff1615801561076a576000805461ffff19166101011790555b61077261101f565b8015610784576000805461ff00191690555b50565b6060606860010180546103ab9061157f565b6033546001600160a01b031633146107c35760405162461bcd60e51b815260040161050d906115ba565b6105208282611056565b600061043b338461049e856040518060600160405280602581526020016117fc602591393360009081526066602090815260408083206001600160a01b038d1684529091529020549190610e6c565b600061043b338484610ce6565b6033546001600160a01b031633146108535760405162461bcd60e51b815260040161050d906115ba565b80606c541461078457606c55565b834211156108b15760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015260640161050d565b6001600160a01b0387166109075760405162461bcd60e51b815260206004820152601f60248201527f45524332305065726d69743a206f776e6572207a65726f206164647265737300604482015260640161050d565b6001600160a01b038781166000818152606b602090815260408083205481517f00000000000000000000000000000000000000000000000000000000000000008185015280830195909552948b166060850152608084018a905260a0840185905260c08085018a90528151808603909101815260e090940190528251920191909120907f00000000000000000000000000000000000000000000000000000000000000006109b3610b21565b60405160f09290921b6001600160f01b031916602083015260228201526042810183905260620160408051601f198184030181528282528051602091820120600080855291840180845281905260ff8a169284019290925260608301889052608083018790529092509060019060a0016020604051602081039080840390855afa158015610a45573d6000803e3d6000fd5b5050506020604051035190508a6001600160a01b0316816001600160a01b031614610ab25760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015260640161050d565b610abd846001611615565b6001600160a01b038c166000908152606b6020526040902055610ae18b8b8b610bc1565b5050505050505050505050565b6033546001600160a01b03163314610b185760405162461bcd60e51b815260040161050d906115ba565b6107848161115a565b60405160009046907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f90610b579060689061162d565b6040805191829003822060208301939093528101919091527f00000000000000000000000000000000000000000000000000000000000000006060820152608081018290523060a082015260c0016040516020818303038152906040528051906020012091505090565b6001600160a01b038316610c235760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161050d565b6001600160a01b038216610c845760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161050d565b6001600160a01b0383811660008181526066602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038316610d4a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161050d565b6001600160a01b038216610dac5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161050d565b610de9816040518060600160405280602681526020016117ae602691396001600160a01b0386166000908152606560205260409020549190610e6c565b6001600160a01b038085166000908152606560205260408082209390935590841681522054610e189082610e98565b6001600160a01b0380841660008181526065602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610cd99085815260200190565b60008184841115610e905760405162461bcd60e51b815260040161050d919061131e565b505050900390565b6000610ea48284611615565b9392505050565b6001600160a01b038216610f015760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161050d565b606754610f0e9082610e98565b6067556001600160a01b038216600090815260656020526040902054610f349082610e98565b6001600160a01b0383166000818152606560205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610f859085815260200190565b60405180910390a35050565b600083518484518585604051602001610fae9594939291906116c9565b6040516020818303038152906040528051906020012090509392505050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166110465760405162461bcd60e51b815260040161050d90611729565b61104e6111f2565b6106c4611219565b6001600160a01b0382166110b65760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161050d565b6110f38160405180606001604052806022815260200161178c602291396001600160a01b0385166000908152606560205260409020549190610e6c565b6001600160a01b0383166000908152606560205260409020556067546111199082611249565b6067556040518181526000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610f85565b6033546001600160a01b031633146111845760405162461bcd60e51b815260040161050d906115ba565b6001600160a01b0381166111e95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161050d565b61078481610fcd565b600054610100900460ff166106c45760405162461bcd60e51b815260040161050d90611729565b600054610100900460ff166112405760405162461bcd60e51b815260040161050d90611729565b6106c433610fcd565b6000610ea48284611774565b8280546112619061157f565b90600052602060002090601f01602090048101928261128357600085556112c9565b82601f1061129c5782800160ff198235161785556112c9565b828001600101855582156112c9579182015b828111156112c95782358255916020019190600101906112ae565b506112d59291506112d9565b5090565b5b808211156112d557600081556001016112da565b60005b838110156113095781810151838201526020016112f1565b83811115611318576000848401525b50505050565b602081526000825180602084015261133d8160408501602087016112ee565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461136857600080fd5b919050565b6000806040838503121561138057600080fd5b61138983611351565b946020939093013593505050565b6000806000606084860312156113ac57600080fd5b6113b584611351565b92506113c360208501611351565b9150604084013590509250925092565b60008083601f8401126113e557600080fd5b50813567ffffffffffffffff8111156113fd57600080fd5b60208301915083602082850101111561141557600080fd5b9250929050565b803560ff8116811461136857600080fd5b60008060008060006060868803121561144557600080fd5b853567ffffffffffffffff8082111561145d57600080fd5b61146989838a016113d3565b9097509550602088013591508082111561148257600080fd5b5061148f888289016113d3565b90945092506114a290506040870161141c565b90509295509295909350565b6000602082840312156114c057600080fd5b610ea482611351565b6000602082840312156114db57600080fd5b5035919050565b600080600080600080600060e0888a0312156114fd57600080fd5b61150688611351565b965061151460208901611351565b955060408801359450606088013593506115306080890161141c565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561155f57600080fd5b61156883611351565b915061157660208401611351565b90509250929050565b600181811c9082168061159357607f821691505b602082108114156115b457634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b8183823760009101908152919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611628576116286115ff565b500190565b600080835481600182811c91508083168061164957607f831692505b602080841082141561166957634e487b7160e01b86526022600452602486fd5b81801561167d576001811461168e576116bb565b60ff198616895284890196506116bb565b60008a81526020902060005b868110156116b35781548b82015290850190830161169a565b505084890196505b509498975050505050505050565b858152600085516116e1816020850160208a016112ee565b808301905085602082015284516116ff8160408401602089016112ee565b60f89490941b6001600160f81b031916604091909401908101939093525050604101949350505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b600082821015611786576117866115ff565b50039056fe45524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220290c627f82efdbbb8958ce988efa736315ff63a3e594e24524f33d6253b78ac564736f6c634300080b0033";

type BridgeTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BridgeTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BridgeToken__factory extends ContractFactory {
  constructor(...args: BridgeTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "BridgeToken";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BridgeToken> {
    return super.deploy(overrides || {}) as Promise<BridgeToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BridgeToken {
    return super.attach(address) as BridgeToken;
  }
  connect(signer: Signer): BridgeToken__factory {
    return super.connect(signer) as BridgeToken__factory;
  }
  static readonly contractName: "BridgeToken";
  public readonly contractName: "BridgeToken";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BridgeTokenInterface {
    return new utils.Interface(_abi) as BridgeTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeToken {
    return new Contract(address, _abi, signerOrProvider) as BridgeToken;
  }
}
