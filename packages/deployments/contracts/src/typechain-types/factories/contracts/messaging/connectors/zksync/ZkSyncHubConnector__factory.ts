/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ZkSyncHubConnector,
  ZkSyncHubConnectorInterface,
} from "../../../../../contracts/messaging/connectors/zksync/ZkSyncHubConnector";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_mirrorDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_amb",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rootManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_mirrorConnector",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stateCommitmentChain",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ProposedOwnable__acceptProposedOwner_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_noProposal",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MessageProcessed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "encodedData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "current",
        type: "address",
      },
    ],
    name: "MirrorConnectorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "mirrorDomain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "amb",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "rootManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "mirrorConnector",
        type: "address",
      },
    ],
    name: "NewConnector",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposedOwner",
        type: "address",
      },
    ],
    name: "OwnershipProposed",
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
    name: "AMB",
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
    name: "DOMAIN",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIRROR_DOMAIN",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT_MANAGER",
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
    name: "acceptProposedOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
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
    name: "mirrorConnector",
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
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "processMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_l2BlockNumber",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_l2MessageIndex",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_l2TxNumberInBlock",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "bytes32[]",
        name: "_proof",
        type: "bytes32[]",
      },
    ],
    name: "processMessageFromRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "processed",
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
    inputs: [
      {
        internalType: "address",
        name: "newlyProposed",
        type: "address",
      },
    ],
    name: "proposeNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposed",
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
    name: "proposedTimestamp",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounced",
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
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_encodedData",
        type: "bytes",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mirrorConnector",
        type: "address",
      },
    ],
    name: "setMirrorConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_expected",
        type: "address",
      },
    ],
    name: "verifySender",
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
  "0x6101006040523480156200001257600080fd5b5060405162001ae838038062001ae8833981016040819052620000359162000281565b858585858584848484846200004a3362000187565b8463ffffffff16600003620000955760405162461bcd60e51b815260206004820152600c60248201526b32b6b83a3c903237b6b0b4b760a11b60448201526064015b60405180910390fd5b6001600160a01b038216620000e15760405162461bcd60e51b815260206004820152601160248201527032b6b83a3c903937b7ba26b0b730b3b2b960791b60448201526064016200008c565b63ffffffff8086166080526001600160a01b0380851660a05283811660c05290851660e05281161562000119576200011981620001e6565b604080516001600160a01b0385811682528481166020830152831681830152905163ffffffff86811692908816917f4f9c27c2fe3f84576ea469d367d044da53c45e951617e8389f2b5ed8db9d25f09181900360600190a35050505050505050505050505050505062000302565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b805163ffffffff811681146200026457600080fd5b919050565b80516001600160a01b03811681146200026457600080fd5b60008060008060008060c087890312156200029b57600080fd5b620002a6876200024f565b9550620002b6602088016200024f565b9450620002c66040880162000269565b9350620002d66060880162000269565b9250620002e66080880162000269565b9150620002f660a0880162000269565b90509295509295509295565b60805160a05160c05160e051611782620003666000396000818161012b0152610997015260008181610221015281816103f6015261096a015260008181610388015281816104ab015281816107a90152610ae7015260006101cd01526117826000f3fe6080604052600436106101145760003560e01c80638da5cb5b116100a0578063d1851c9211610064578063d1851c9214610339578063d232c22014610357578063d69f9d6114610376578063db1b7659146103aa578063e92a492f146103cb57600080fd5b80638da5cb5b14610286578063b1f8100d146102a4578063c1f0808a146102c4578063c5b350df14610304578063cc3942831461031957600080fd5b806352a9674b116100e757806352a9674b146101bb5780635bd11efc146101ef5780635f61e3ec1461020f5780636a42b8f81461025b578063715018a61461027157600080fd5b806314168416146101195780633cf52ffb1461016757806348e6fa23146101865780634ff746f61461019b575b600080fd5b34801561012557600080fd5b5061014d7f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020015b60405180910390f35b34801561017357600080fd5b506002545b60405190815260200161015e565b61019961019436600461127f565b6103eb565b005b3480156101a757600080fd5b506101996101b63660046112e3565b6104a0565b3480156101c757600080fd5b5061014d7f000000000000000000000000000000000000000000000000000000000000000081565b3480156101fb57600080fd5b5061019961020a366004611320565b61053d565b34801561021b57600080fd5b506102437f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161015e565b34801561026757600080fd5b5062093a80610178565b34801561027d57600080fd5b50610199610574565b34801561029257600080fd5b506000546001600160a01b0316610243565b3480156102b057600080fd5b506101996102bf366004611320565b610633565b3480156102d057600080fd5b506102f46102df366004611349565b60046020526000908152604090205460ff1681565b604051901515815260200161015e565b34801561031057600080fd5b506101996106d8565b34801561032557600080fd5b50600354610243906001600160a01b031681565b34801561034557600080fd5b506001546001600160a01b0316610243565b34801561036357600080fd5b506000546001600160a01b0316156102f4565b34801561038257600080fd5b506102437f000000000000000000000000000000000000000000000000000000000000000081565b3480156103b657600080fd5b506102f46103c5366004611320565b50600090565b3480156103d757600080fd5b506101996103e63660046113f0565b610733565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104575760405162461bcd60e51b815260206004820152600c60248201526b10b937b7ba26b0b730b3b2b960a11b60448201526064015b60405180910390fd5b6104618282610a11565b7fdcaa37a042a0087de79018c629bbd29cee82ca80bd9be394e1696bf9e9355077828233604051610494939291906114ec565b60405180910390a15050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105015760405162461bcd60e51b815260040161044e9060208082526004908201526310a0a6a160e11b604082015260600190565b7fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced813360405161053292919061152a565b60405180910390a150565b6000546001600160a01b03163314610568576040516311a8a1bb60e31b815260040160405180910390fd5b61057181610bb6565b50565b6000546001600160a01b0316331461059f576040516311a8a1bb60e31b815260040160405180910390fd5b6002546000036105c257604051630e4b303f60e21b815260040160405180910390fd5b62093a80600254426105d4919061156a565b116105f2576040516386d4b3f160e01b815260040160405180910390fd5b6001546001600160a01b03161561061c576040516323295ef960e01b815260040160405180910390fd5b600154610631906001600160a01b0316610c1f565b565b6000546001600160a01b0316331461065e576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b03828116911614801561068357506001600160a01b03811615155b156106a1576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b038083169116036106cf57604051634a2fb73f60e11b815260040160405180910390fd5b61057181610c7e565b6001546001600160a01b03163314610703576040516311a7f27160e11b815260040160405180910390fd5b62093a8060025442610715919061156a565b1161061c5760405163d39c12bb60e01b815260040160405180910390fd5b6024831461076d5760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b604482015260640161044e565b6040805160608101825261ffff871681526003546001600160a01b03166020808301919091528251601f870182900482028101820184528681527f0000000000000000000000000000000000000000000000000000000000000000936000939290830191908990899081908401838280828437600092018290525093909452505060405163e4948f4360e01b8152929350916001600160a01b038516915063e4948f4390610827908d908d9087908b908b90600401611581565b602060405180830381865afa158015610844573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108689190611610565b9050806108a15760405162461bcd60e51b815260206004820152600760248201526610b83937bb32b760c91b604482015260640161044e565b60006108e7600089898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293925050610ccc9050565b9050600061091e6109066020601885901c6001600160601b0316611632565b62ffffff198416906001600160601b03166020610cf0565b60008181526004602052604090205490915060ff16610a0357600081815260046020819052604091829020805460ff19166001179055905163473ec9fd60e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691638e7d93fa916109d0917f00000000000000000000000000000000000000000000000000000000000000009186910163ffffffff929092168252602082015260400190565b600060405180830381600087803b1580156109ea57600080fd5b505af11580156109fe573d6000803e3d6000fd5b505050505b505050505050505050505050565b805115610a4f5760405162461bcd60e51b815260206004820152600c60248201526b042c8c2e8c240d8cadccee8d60a31b604482015260640161044e565b8151602014610a8a5760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b604482015260640161044e565b6000634ff746f660e01b83604051602401610aa5919061165a565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526003549091506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169163725ad8509134911660008561271082604051908082528060200260200182016040528015610b4c57816020015b6060815260200190600190039081610b375790505b506040518763ffffffff1660e01b8152600401610b6d95949392919061166d565b60206040518083038185885af1158015610b8b573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610bb091906116fc565b50505050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b815160009060208401610ce764ffffffffff85168284610e50565b95945050505050565b60008160ff16600003610d0557506000610e49565b610d188460181c6001600160601b031690565b6001600160601b0316610d2e60ff841685611715565b1115610d9257610d79610d4a8560781c6001600160601b031690565b6001600160601b0316610d668660181c6001600160601b031690565b6001600160601b0316858560ff16610e97565b60405162461bcd60e51b815260040161044e919061165a565b60208260ff161115610e0c5760405162461bcd60e51b815260206004820152603a60248201527f54797065644d656d566965772f696e646578202d20417474656d70746564207460448201527f6f20696e646578206d6f7265207468616e203332206279746573000000000000606482015260840161044e565b600882026000610e258660781c6001600160601b031690565b6001600160601b031690506000600160ff1b60001984011d91860151909116925050505b9392505050565b600080610e5d8385611715565b9050604051811115610e6d575060005b80600003610e825762ffffff19915050610e49565b5050606092831b9190911790911b1760181b90565b60606000610ea486610fc1565b9150506000610eb286610fc1565b9150506000610ec086610fc1565b9150506000610ece86610fc1565b604080517f54797065644d656d566965772f696e646578202d204f76657272616e20746865602082015274040ecd2caee5c40a6d8d2c6ca40d2e640c2e84060f605b1b818301526001600160d01b031960d098891b811660558301526e040eed2e8d040d8cadccee8d04060f608b1b605b830181905297891b8116606a8301527f2e20417474656d7074656420746f20696e646578206174206f666673657420306070830152600f60fb1b609083015295881b861660918201526097810196909652951b90921660a68401525050601760f91b60ac8201528151808203608d01815260ad90910190915295945050505050565b600080601f5b600f81111561100d576000610fdd82600861172d565b85901c9050610feb8161105d565b61ffff16841793508160101461100357601084901b93505b5060001901610fc7565b50600f5b60ff81101561105757600061102782600861172d565b85901c90506110358161105d565b61ffff16831792508160001461104d57601083901b92505b5060001901611011565b50915091565b600061106f60048360ff16901c61108f565b60ff1661ffff919091161760081b6110868261108f565b60ff1617919050565b600060f08083179060ff821690036110aa5750603092915050565b8060ff1660f1036110be5750603192915050565b8060ff1660f2036110d25750603292915050565b8060ff1660f3036110e65750603392915050565b8060ff1660f4036110fa5750603492915050565b8060ff1660f50361110e5750603592915050565b8060ff1660f6036111225750603692915050565b8060ff1660f7036111365750603792915050565b8060ff1660f80361114a5750603892915050565b8060ff1660f90361115e5750603992915050565b8060ff1660fa036111725750606192915050565b8060ff1660fb036111865750606292915050565b8060ff1660fc0361119a5750606392915050565b8060ff1660fd036111ae5750606492915050565b8060ff1660fe036111c25750606592915050565b8060ff1660ff036111d65750606692915050565b50919050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261120357600080fd5b813567ffffffffffffffff8082111561121e5761121e6111dc565b604051601f8301601f19908116603f01168101908282118183101715611246576112466111dc565b8160405283815286602085880101111561125f57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561129257600080fd5b823567ffffffffffffffff808211156112aa57600080fd5b6112b6868387016111f2565b935060208501359150808211156112cc57600080fd5b506112d9858286016111f2565b9150509250929050565b6000602082840312156112f557600080fd5b813567ffffffffffffffff81111561130c57600080fd5b611318848285016111f2565b949350505050565b60006020828403121561133257600080fd5b81356001600160a01b0381168114610e4957600080fd5b60006020828403121561135b57600080fd5b5035919050565b60008083601f84011261137457600080fd5b50813567ffffffffffffffff81111561138c57600080fd5b6020830191508360208285010111156113a457600080fd5b9250929050565b60008083601f8401126113bd57600080fd5b50813567ffffffffffffffff8111156113d557600080fd5b6020830191508360208260051b85010111156113a457600080fd5b600080600080600080600060a0888a03121561140b57600080fd5b873563ffffffff8116811461141f57600080fd5b965060208801359550604088013561ffff8116811461143d57600080fd5b9450606088013567ffffffffffffffff8082111561145a57600080fd5b6114668b838c01611362565b909650945060808a013591508082111561147f57600080fd5b5061148c8a828b016113ab565b989b979a50959850939692959293505050565b6000815180845260005b818110156114c5576020818501810151868301820152016114a9565b818111156114d7576000602083870101525b50601f01601f19169290920160200192915050565b6060815260006114ff606083018661149f565b8281036020840152611511818661149f565b91505060018060a01b0383166040830152949350505050565b60408152600061153d604083018561149f565b905060018060a01b03831660208301529392505050565b634e487b7160e01b600052601160045260246000fd5b60008282101561157c5761157c611554565b500390565b63ffffffff861681528460208201526080604082015261ffff845116608082015260018060a01b0360208501511660a082015260006040850151606060c08401526115cf60e084018261149f565b838103606085015284815290506001600160fb1b038411156115f057600080fd5b8360051b8086602084013760009101602001908152979650505050505050565b60006020828403121561162257600080fd5b81518015158114610e4957600080fd5b60006001600160601b038381169083168181101561165257611652611554565b039392505050565b602081526000610e49602083018461149f565b60018060a01b038616815260006020868184015260a0604084015261169560a084018761149f565b85606085015283810360808501528085518083528383019150838160051b84010184880160005b838110156116ea57601f198684030185526116d883835161149f565b948701949250908601906001016116bc565b50909c9b505050505050505050505050565b60006020828403121561170e57600080fd5b5051919050565b6000821982111561172857611728611554565b500190565b600081600019048311821515161561174757611747611554565b50029056fea26469706673582212205652bd9bf469b0ec09f063a73774a1d0ad147a73138a9e16aceec95f556178da64736f6c634300080f0033";

type ZkSyncHubConnectorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZkSyncHubConnectorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZkSyncHubConnector__factory extends ContractFactory {
  constructor(...args: ZkSyncHubConnectorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _stateCommitmentChain: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZkSyncHubConnector> {
    return super.deploy(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _stateCommitmentChain,
      overrides || {}
    ) as Promise<ZkSyncHubConnector>;
  }
  override getDeployTransaction(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _stateCommitmentChain: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _stateCommitmentChain,
      overrides || {}
    );
  }
  override attach(address: string): ZkSyncHubConnector {
    return super.attach(address) as ZkSyncHubConnector;
  }
  override connect(signer: Signer): ZkSyncHubConnector__factory {
    return super.connect(signer) as ZkSyncHubConnector__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZkSyncHubConnectorInterface {
    return new utils.Interface(_abi) as ZkSyncHubConnectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZkSyncHubConnector {
    return new Contract(address, _abi, signerOrProvider) as ZkSyncHubConnector;
  }
}
