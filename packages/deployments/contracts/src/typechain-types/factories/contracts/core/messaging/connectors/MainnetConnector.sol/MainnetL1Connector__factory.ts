/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  MainnetL1Connector,
  MainnetL1ConnectorInterface,
} from "../../../../../../contracts/core/messaging/connectors/MainnetConnector.sol/MainnetL1Connector";

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
        internalType: "uint256",
        name: "_mirrorProcessGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_processGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_reserveGas",
        type: "uint256",
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
        internalType: "bytes32",
        name: "current",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "previous",
        type: "bytes32",
      },
    ],
    name: "AggregateRootUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "Dispatch",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    name: "Process",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "SenderAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "SenderRemoved",
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
    name: "PROCESS_GAS",
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
    name: "RESERVE_GAS",
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
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
    ],
    name: "addSender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "aggregateRoot",
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
    name: "count",
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
    inputs: [
      {
        internalType: "uint32",
        name: "_destinationDomain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_recipientAddress",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_messageBody",
        type: "bytes",
      },
    ],
    name: "dispatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "domain",
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
    name: "home",
    outputs: [
      {
        internalType: "contract Connector",
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
        name: "_potentialReplica",
        type: "address",
      },
    ],
    name: "isReplica",
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
    name: "localDomain",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "messages",
    outputs: [
      {
        internalType: "enum Connector.MessageStatus",
        name: "",
        type: "uint8",
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
    name: "mirrorDomain",
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
    name: "mirrorProcessGas",
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
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "nonces",
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
    name: "outboundRoot",
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
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "bytes32[32]",
        name: "_proof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "proveAndProcess",
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
    name: "provenRoots",
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
        name: "_sender",
        type: "address",
      },
    ],
    name: "removeSender",
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
    inputs: [],
    name: "root",
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
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "sendMessage",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "tree",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelistedSenders",
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
];

const _bytecode =
  "0x6101606040523480156200001257600080fd5b5060405162002ba838038062002ba8833981016040819052620000359162000295565b8787878787878787878063ffffffff16600003620000845760405162461bcd60e51b815260206004820152600760248201526610b237b6b0b4b760c91b60448201526064015b60405180910390fd5b63ffffffff9081166080528816620000c95760405162461bcd60e51b815260206004820152600760248201526610b237b6b0b4b760c91b60448201526064016200007b565b6001600160a01b038516620001105760405162461bcd60e51b815260206004820152600c60248201526b10b937b7ba26b0b730b3b2b960a11b60448201526064016200007b565b6200011b3362000204565b63ffffffff88811660a0526001600160a01b0387811660c05286811660e05290881661010052602480546001600160a01b0319169186169190911790556025839055620cf850821015620001a15760405162461bcd60e51b815260206004820152600c60248201526b2170726f636573732067617360a01b60448201526064016200007b565b613a98811015620001e45760405162461bcd60e51b815260206004820152600c60248201526b21726573657276652067617360a01b60448201526064016200007b565b610120919091526101405250620003229c50505050505050505050505050565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b805163ffffffff811681146200027857600080fd5b919050565b80516001600160a01b03811681146200027857600080fd5b600080600080600080600080610100898b031215620002b357600080fd5b620002be8962000263565b9750620002ce60208a0162000263565b9650620002de60408a016200027d565b9550620002ee60608a016200027d565b9450620002fe60808a016200027d565b935060a0890151925060c0890151915060e089015190509295985092959890939650565b60805160a05160c05160e0516101005161012051610140516127ec620003bc600039600081816102530152610d0601526000818161054401528181610d270152610dae015260006102e601526000818161038201528181610f7f01526110380152600061051d01526000818161034601528181610ac00152610c080152600081816103fe015281816104b80152610fa601526127ec6000f3fe608060405234801561001057600080fd5b50600436106102325760003560e01c8063a8ba212b11610130578063d1851c92116100b8578063ebf0c7171161007c578063ebf0c71714610579578063ee250e0614610581578063f38a267b1461058a578063fa31de01146105ad578063fd54b228146105c057600080fd5b8063d1851c92146104f5578063d232c22014610506578063d69f9d6114610518578063d88beda21461053f578063db1b76591461056657600080fd5b8063b697f531116100ff578063b697f5311461047a578063b95a20011461048d578063c2fb26a6146104b3578063c5b350df146104da578063cc394283146104e257600080fd5b8063a8ba212b14610439578063b1f8100d1461044c578063b2f876431461045f578063b46300ec1461047257600080fd5b80635bd11efc116101be578063715018a611610182578063715018a6146103e157806382646a58146103e95780638d3638f4146103fc5780638da5cb5b146104225780639fa92f9d1461043357600080fd5b80635bd11efc146103685780635f61e3ec1461037d5780636188af0e146103bc57806365eaf11b146103cf5780636a42b8f8146103d857600080fd5b80632bbd59ca116102055780632bbd59ca146102b15780633490334a146102e15780633cf52ffb1461031d5780635190bc531461032557806352a9674b1461034157600080fd5b806306661abd1461023757806325e3beda1461024e578063272efc691461027557806329460bd0146102a8575b600080fd5b6023545b6040519081526020015b60405180910390f35b61023b7f000000000000000000000000000000000000000000000000000000000000000081565b6102986102833660046120c6565b60296020526000908152604090205460ff1681565b6040519015158152602001610245565b61023b60255481565b6102d46102bf3660046120e1565b602b6020526000908152604090205460ff1681565b6040516102459190612110565b6103087f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff9091168152602001610245565b60025461023b565b6102986103333660046120c6565b6001600160a01b0316301490565b6103087f000000000000000000000000000000000000000000000000000000000000000081565b61037b6103763660046120c6565b6105ca565b005b6103a47f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610245565b61037b6103ca3660046121db565b61065e565b61023b60275481565b62093a8061023b565b61037b6106b9565b61037b6103f736600461223b565b610778565b7f0000000000000000000000000000000000000000000000000000000000000000610308565b6000546001600160a01b03166103a4565b306103a4565b61037b610447366004612270565b610784565b61037b61045a3660046120c6565b6107cd565b61037b61046d3660046120c6565b610872565b61037b6108f5565b61037b6104883660046120c6565b610921565b61030861049b3660046122d2565b602a6020526000908152604090205463ffffffff1681565b6103087f000000000000000000000000000000000000000000000000000000000000000081565b61037b6109a0565b6024546103a4906001600160a01b031681565b6001546001600160a01b03166103a4565b6000546001600160a01b031615610298565b6103a47f000000000000000000000000000000000000000000000000000000000000000081565b61023b7f000000000000000000000000000000000000000000000000000000000000000081565b6102986105743660046120c6565b6109fb565b61023b610a10565b61023b60265481565b6102986105983660046120e1565b60286020526000908152604090205460ff1681565b61037b6105bb3660046122ed565b610a21565b60235461023b9081565b6000546001600160a01b031633146105f5576040516311a8a1bb60e31b815260040160405180910390fd5b602454604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1602480546001600160a01b0319166001600160a01b0392909216919091179055565b61067083805190602001208383610b64565b6106aa5760405162461bcd60e51b81526020600482015260066024820152652170726f766560d01b60448201526064015b60405180910390fd5b6106b383610bf2565b50505050565b6000546001600160a01b031633146106e4576040516311a8a1bb60e31b815260040160405180910390fd5b60025460000361070757604051630e4b303f60e21b815260040160405180910390fd5b62093a8060025442610719919061235a565b11610737576040516386d4b3f160e01b815260040160405180910390fd5b6001546001600160a01b031615610761576040516323295ef960e01b815260040160405180910390fd5b600154610776906001600160a01b0316610edb565b565b61078181610f3a565b50565b61078e828261102d565b7fc96a5db6b3817fac2ff3f1738aef53c283692e03714a12cf99e740b7d5054c758282336040516107c1939291906123c9565b60405180910390a15050565b6000546001600160a01b031633146107f8576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b03828116911614801561081d57506001600160a01b03811615155b1561083b576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b0380831691160361086957604051634a2fb73f60e11b815260040160405180910390fd5b610781816110df565b6000546001600160a01b0316331461089d576040516311a8a1bb60e31b815260040160405180910390fd5b6001600160a01b038116600081815260296020908152604091829020805460ff1916905590519182527f384859c5ef5fafac31e8bc92ce7fb48b1f2c74c4dd5e212eb84ec202fa5d9fad91015b60405180910390a150565b61077660275460405160200161090d91815260200190565b604051602081830303815290604052610f3a565b6000546001600160a01b0316331461094c576040516311a8a1bb60e31b815260040160405180910390fd5b6001600160a01b038116600081815260296020908152604091829020805460ff1916600117905590519182527fd65eca5d561d3a4568c87b9b13ced4ab52a69edadfdfdb22d76bc595f36d7d8791016108ea565b6001546001600160a01b031633146109cb576040516311a7f27160e11b815260040160405180910390fd5b62093a80600254426109dd919061235a565b116107615760405163d39c12bb60e01b815260040160405180910390fd5b60006001600160a01b03821633145b92915050565b6000610a1c600361112d565b905090565b3360009081526029602052604090205460ff16610a6f5760405162461bcd60e51b815260206004820152600c60248201526b085dda1a5d195b1a5cdd195960a21b60448201526064016106a1565b63ffffffff8084166000908152602a602052604090205416610a928160016123fe565b63ffffffff8581166000908152602a60205260408120805463ffffffff191693909216929092179055610ae97f00000000000000000000000000000000000000000000000000000000000000003384888888611140565b80516020820120909150610afe600382611178565b610b06610a10565b6027557f40f08ee347fc927ae45902edc87debb024aab1a311943731968607f603f2152f816001610b3660235490565b610b40919061235a565b60275485604051610b549493929190612426565b60405180910390a1505050505050565b6000806000858152602b602052604090205460ff166002811115610b8a57610b8a6120fa565b14610bcd5760405162461bcd60e51b8152602060048201526013602482015272214d6573736167655374617475732e4e6f6e6560681b60448201526064016106a1565b506000838152602b60205260409020805460ff191660019081179091555b9392505050565b600080610bff8382611295565b905063ffffffff7f000000000000000000000000000000000000000000000000000000000000000016610c3762ffffff1983166112b9565b63ffffffff1614610c795760405162461bcd60e51b815260206004820152600c60248201526b10b232b9ba34b730ba34b7b760a11b60448201526064016106a1565b6000610c8a62ffffff1983166112ce565b905060016000828152602b602052604090205460ff166002811115610cb157610cb16120fa565b14610ce85760405162461bcd60e51b815260206004820152600760248201526610b83937bb32b760c91b60448201526064016106a1565b6000818152602b60205260409020805460ff19166002179055610d4b7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061244b565b5a1015610d835760405162461bcd60e51b81526004016106a1906020808252600490820152632167617360e01b604082015260600190565b6000610d9462ffffff198416611317565b6040805161010080825261012082019092529192506000917f0000000000000000000000000000000000000000000000000000000000000000908390836020820181803683370190505090506000610df162ffffff198916611328565b610e0062ffffff198a1661133c565b610e0f62ffffff198b16611351565b610e2c610e2162ffffff198d16611366565b62ffffff1916611394565b604051602401610e3f9493929190612463565b60408051601f198184030181529190526020810180516001600160e01b031663ab2dc3f560e01b17815281519192506000918291828a88f198503d945083851115610e88578394505b848252846000602084013e7fd42de95a9b26f1be134c8ecce389dc4fcfa18753d01661b7b361233569e8fe48878a84604051610ec693929190612492565b60405180910390a15050505050505050919050565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8051602014610f755760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b60448201526064016106a1565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166378ffd0a17f0000000000000000000000000000000000000000000000000000000000000000610fce846124b3565b6040516001600160e01b031960e085901b16815263ffffffff9290921660048301526024820152604401600060405180830381600087803b15801561101257600080fd5b505af1158015611026573d6000803e3d6000fd5b5050505050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461108f5760405162461bcd60e51b815260206004820152600760248201526610b9b2b73232b960c91b60448201526064016106a1565b80516020146110ca5760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b60448201526064016106a1565b6110db6110d6826124b3565b6113dd565b5050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b6000610a0a8261113b611426565b6118e7565b606086868686868660405160200161115d969594939291906124d7565b60405160208183030381529060405290509695505050505050565b600161118660206002612615565b611190919061235a565b8260200154106111d55760405162461bcd60e51b815260206004820152601060248201526f1b595c9adb19481d1c995948199d5b1b60821b60448201526064016106a1565b60018260200160008282546111ea919061244b565b9091555050602082015460005b60208110156112875781600116600103611226578284826020811061121e5761121e612621565b015550505050565b83816020811061123857611238612621565b015460408051602081019290925281018490526060016040516020818303038152906040528051906020012092506002826112739190612637565b91508061127f81612659565b9150506111f7565b50611290612672565b505050565b8151600090602084016112b064ffffffffff851682846119b9565b95945050505050565b6000610a0a62ffffff19831660286004611a00565b6000806112e48360781c6001600160601b031690565b6001600160601b0316905060006113048460181c6001600160601b031690565b6001600160601b03169091209392505050565b6000610a0a61132583611a30565b90565b6000610a0a62ffffff198316826004611a00565b6000610a0a62ffffff19831660246004611a00565b6000610a0a62ffffff19831660046020611a41565b6000610a0a604c61138481601886901c6001600160601b031661235a565b62ffffff19851691906000611b9d565b60606000806113ac8460181c6001600160601b031690565b6001600160601b0316905060405191508192506113cc8483602001611c19565b508181016020016040529052919050565b6024546001600160a01b031633146114215760405162461bcd60e51b815260206004820152600760248201526610b9b2b73232b960c91b60448201526064016106a1565b602655565b61142e61208b565b600081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb560208201527fb4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d3060408201527f21ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba8560608201527fe58769b32a1beaf1ea27375a44095a0d1fb664ce2dd358e7fcbfb78c26a1934460808201527f0eb01ebfc9ed27500cd4dfc979272d1f0913cc9f66540d7e8005811109e1cf2d60a08201527f887c22bd8750d34016ac3c66b5ff102dacdd73f6b014e710b51e8022af9a196860c08201527fffd70157e48063fc33c97a050f7f640233bf646cc98d9524c6b92bcf3ab56f8360e08201527f9867cc5f7f196b93bae1e27e6320742445d290f2263827498b54fec539f756af6101008201527fcefad4e508c098b9a7e1d8feb19955fb02ba9675585078710969d3440f5054e06101208201527ff9dc3e7fe016e050eff260334f18a5d4fe391d82092319f5964f2e2eb7c1c3a56101408201527ff8b13a49e282f609c317a833fb8d976d11517c571d1221a265d25af778ecf8926101608201527f3490c6ceeb450aecdc82e28293031d10c7d73bf85e57bf041a97360aa2c5d99c6101808201527fc1df82d9c4b87413eae2ef048f94b4d3554cea73d92b0f7af96e0271c691e2bb6101a08201527f5c67add7c6caf302256adedf7ab114da0acfe870d449a3a489f781d659e8becc6101c08201527fda7bce9f4e8618b6bd2f4132ce798cdc7a60e7e1460a7299e3c6342a579626d26101e08201527f2733e50f526ec2fa19a22b31e8ed50f23cd1fdf94c9154ed3a7609a2f1ff981f6102008201527fe1d3b5c807b281e4683cc6d6315cf95b9ade8641defcb32372f1c126e398ef7a6102208201527f5a2dce0a8a7f68bb74560f8f71837c2c2ebbcbf7fffb42ae1896f13f7c7479a06102408201527fb46a28b6f55540f89444f63de0378e3d121be09e06cc9ded1c20e65876d36aa06102608201527fc65e9645644786b620e2dd2ad648ddfcbf4a7e5b1a3a4ecfe7f64667a3f0b7e26102808201527ff4418588ed35a2458cffeb39b93d26f18d2ab13bdce6aee58e7b99359ec2dfd96102a08201527f5a9c16dc00d6ef18b7933a6f8dc65ccb55667138776f7dea101070dc8796e3776102c08201527f4df84f40ae0c8229d0d6069e5c8f39a7c299677a09d367fc7b05e3bc380ee6526102e08201527fcdc72595f74c7b1043d0e1ffbab734648c838dfb0527d971b602bc216c9619ef6103008201527f0abf5ac974a1ed57f4050aa510dd9c74f508277b39d7973bb2dfccc5eeb0618d6103208201527fb8cd74046ff337f0a7bf2c8e03e10f642c1886798d71806ab1e888d9e5ee87d06103408201527f838c5655cb21c6cb83313b5a631175dff4963772cce9108188b34ac87c81c41e6103608201527f662ee4dd2dd7b2bc707961b1e646c4047669dcb6584f0d8d770daf5d7e7deb2e6103808201527f388ab20e2573d171a88108e79d820e98f26c0b84aa8b2f4aa4968dbb818ea3226103a08201527f93237c50ba75ee485f4c22adf2f741400bdf8d6a9cc7df7ecae576221665d7356103c08201527f8448818bb4ae4562849e949e17ac16e0be16688e156b5cf15e098c627c0056a96103e082015290565b6020820154600090815b60208110156119b157600182821c16600086836020811061191457611914612621565b015490508160010361195157604080516020810183905290810186905260600160405160208183030381529060405280519060200120945061199c565b8486846020811061196457611964612621565b6020020151604051602001611983929190918252602082015260400190565b6040516020818303038152906040528051906020012094505b505080806119a990612659565b9150506118f1565b505092915050565b6000806119c6838561244b565b90506040518111156119d6575060005b806000036119eb5762ffffff19915050610beb565b5050606092831b9190911790911b1760181b90565b6000611a0d826020612688565b611a189060086126ab565b60ff16611a26858585611a41565b901c949350505050565b6000610a0a62ffffff198316602c60205b60008160ff16600003611a5657506000610beb565b611a698460181c6001600160601b031690565b6001600160601b0316611a7f60ff84168561244b565b1115611ae357611aca611a9b8560781c6001600160601b031690565b6001600160601b0316611ab78660181c6001600160601b031690565b6001600160601b0316858560ff16611d7a565b60405162461bcd60e51b81526004016106a191906126cc565b60208260ff161115611b5d5760405162461bcd60e51b815260206004820152603a60248201527f54797065644d656d566965772f696e646578202d20417474656d70746564207460448201527f6f20696e646578206d6f7265207468616e20333220627974657300000000000060648201526084016106a1565b600882026000611b768660781c6001600160601b031690565b6001600160601b031690506000600160ff1b60001984011d91909501511695945050505050565b600080611bb38660781c6001600160601b031690565b6001600160601b03169050611bc786611de8565b84611bd2878461244b565b611bdc919061244b565b1115611bef5762ffffff19915050611c11565b611bf9858261244b565b9050611c0d8364ffffffffff1682866119b9565b9150505b949350505050565b600062ffffff1980841603611c815760405162461bcd60e51b815260206004820152602860248201527f54797065644d656d566965772f636f7079546f202d204e756c6c20706f696e7460448201526732b9103232b932b360c11b60648201526084016106a1565b611c8a83611e21565b611cea5760405162461bcd60e51b815260206004820152602b60248201527f54797065644d656d566965772f636f7079546f202d20496e76616c696420706f60448201526a34b73a32b9103232b932b360a91b60648201526084016106a1565b6000611cff8460181c6001600160601b031690565b6001600160601b031690506000611d1f8560781c6001600160601b031690565b6001600160601b031690506000604051905084811115611d3f5760206060fd5b8285848460045afa50611d70611d558760d81c90565b64ffffffffff60601b606091821b168717901b841760181b90565b9695505050505050565b60606000611d8786611e5e565b9150506000611d9586611e5e565b9150506000611da386611e5e565b9150506000611db186611e5e565b91505083838383604051602001611dcb94939291906126df565b604051602081830303815290604052945050505050949350505050565b6000611dfd8260181c6001600160601b031690565b611e108360781c6001600160601b031690565b016001600160601b03169050919050565b6000611e2d8260d81c90565b64ffffffffff1664ffffffffff03611e4757506000919050565b6000611e5283611de8565b60405110199392505050565b600080601f5b600f8160ff161115611eb3576000611e7d8260086126ab565b60ff1685901c9050611e8e81611f0c565b61ffff16841793508160ff16601014611ea957601084901b93505b5060001901611e64565b50600f5b60ff8160ff161015611f06576000611ed08260086126ab565b60ff1685901c9050611ee181611f0c565b61ffff16831792508160ff16600014611efc57601083901b92505b5060001901611eb7565b50915091565b6000611f1e60048360ff16901c611f3e565b60ff1661ffff919091161760081b611f3582611f3e565b60ff1617919050565b600060f08083179060ff82169003611f595750603092915050565b8060ff1660f103611f6d5750603192915050565b8060ff1660f203611f815750603292915050565b8060ff1660f303611f955750603392915050565b8060ff1660f403611fa95750603492915050565b8060ff1660f503611fbd5750603592915050565b8060ff1660f603611fd15750603692915050565b8060ff1660f703611fe55750603792915050565b8060ff1660f803611ff95750603892915050565b8060ff1660f90361200d5750603992915050565b8060ff1660fa036120215750606192915050565b8060ff1660fb036120355750606292915050565b8060ff1660fc036120495750606392915050565b8060ff1660fd0361205d5750606492915050565b8060ff1660fe036120715750606592915050565b8060ff1660ff036120855750606692915050565b50919050565b6040518061040001604052806020906020820280368337509192915050565b80356001600160a01b03811681146120c157600080fd5b919050565b6000602082840312156120d857600080fd5b610beb826120aa565b6000602082840312156120f357600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b602081016003831061213257634e487b7160e01b600052602160045260246000fd5b91905290565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261215f57600080fd5b813567ffffffffffffffff8082111561217a5761217a612138565b604051601f8301601f19908116603f011681019082821181831017156121a2576121a2612138565b816040528381528660208588010111156121bb57600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600061044084860312156121f157600080fd5b833567ffffffffffffffff81111561220857600080fd5b6122148682870161214e565b93505061042084018581111561222957600080fd5b60208501925080359150509250925092565b60006020828403121561224d57600080fd5b813567ffffffffffffffff81111561226457600080fd5b611c118482850161214e565b6000806040838503121561228357600080fd5b61228c836120aa565b9150602083013567ffffffffffffffff8111156122a857600080fd5b6122b48582860161214e565b9150509250929050565b803563ffffffff811681146120c157600080fd5b6000602082840312156122e457600080fd5b610beb826122be565b60008060006060848603121561230257600080fd5b61230b846122be565b925060208401359150604084013567ffffffffffffffff81111561232e57600080fd5b61233a8682870161214e565b9150509250925092565b634e487b7160e01b600052601160045260246000fd5b60008282101561236c5761236c612344565b500390565b60005b8381101561238c578181015183820152602001612374565b838111156106b35750506000910152565b600081518084526123b5816020860160208601612371565b601f01601f19169290920160200192915050565b600060018060a01b038086168352606060208401526123eb606084018661239d565b9150808416604084015250949350505050565b600063ffffffff80831681851680830382111561241d5761241d612344565b01949350505050565b848152836020820152826040820152608060608201526000611d70608083018461239d565b6000821982111561245e5761245e612344565b500190565b600063ffffffff808716835280861660208401525083604083015260806060830152611d70608083018461239d565b83815282151560208201526060604082015260006112b0606083018461239d565b805160208083015191908110156120855760001960209190910360031b1b16919050565b600063ffffffff60e01b808960e01b168352876004840152808760e01b166024840152808660e01b1660288401525083602c830152825161251f81604c850160208701612371565b91909101604c01979650505050505050565b600181815b8085111561256c57816000190482111561255257612552612344565b8085161561255f57918102915b93841c9390800290612536565b509250929050565b60008261258357506001610a0a565b8161259057506000610a0a565b81600181146125a657600281146125b0576125cc565b6001915050610a0a565b60ff8411156125c1576125c1612344565b50506001821b610a0a565b5060208310610133831016604e8410600b84101617156125ef575081810a610a0a565b6125f98383612531565b806000190482111561260d5761260d612344565b029392505050565b6000610beb8383612574565b634e487b7160e01b600052603260045260246000fd5b60008261265457634e487b7160e01b600052601260045260246000fd5b500490565b60006001820161266b5761266b612344565b5060010190565b634e487b7160e01b600052600160045260246000fd5b600060ff821660ff8416808210156126a2576126a2612344565b90039392505050565b600060ff821660ff84168160ff048111821515161561260d5761260d612344565b602081526000610beb602083018461239d565b7f54797065644d656d566965772f696e646578202d204f76657272616e20746865815274040ecd2caee5c40a6d8d2c6ca40d2e640c2e84060f605b1b60208201526001600160d01b031960d086811b821660358401526e040eed2e8d040d8cadccee8d04060f608b1b603b840181905286821b8316604a8501527f2e20417474656d7074656420746f20696e646578206174206f666673657420306050850152600f60fb1b607085015285821b83166071850152607784015283901b166086820152601760f91b608c8201526000608d8201611d7056fea2646970667358221220a0799ef34bc28f2353110b1da525f4d6091625a33d9a13beeebffdd06c9d8ef764736f6c634300080f0033";

type MainnetL1ConnectorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: MainnetL1ConnectorConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class MainnetL1Connector__factory extends ContractFactory {
  constructor(...args: MainnetL1ConnectorConstructorParams) {
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
    _mirrorProcessGas: PromiseOrValue<BigNumberish>,
    _processGas: PromiseOrValue<BigNumberish>,
    _reserveGas: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<MainnetL1Connector> {
    return super.deploy(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorProcessGas,
      _processGas,
      _reserveGas,
      overrides || {},
    ) as Promise<MainnetL1Connector>;
  }
  override getDeployTransaction(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _mirrorProcessGas: PromiseOrValue<BigNumberish>,
    _processGas: PromiseOrValue<BigNumberish>,
    _reserveGas: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorProcessGas,
      _processGas,
      _reserveGas,
      overrides || {},
    );
  }
  override attach(address: string): MainnetL1Connector {
    return super.attach(address) as MainnetL1Connector;
  }
  override connect(signer: Signer): MainnetL1Connector__factory {
    return super.connect(signer) as MainnetL1Connector__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MainnetL1ConnectorInterface {
    return new utils.Interface(_abi) as MainnetL1ConnectorInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MainnetL1Connector {
    return new Contract(address, _abi, signerOrProvider) as MainnetL1Connector;
  }
}
