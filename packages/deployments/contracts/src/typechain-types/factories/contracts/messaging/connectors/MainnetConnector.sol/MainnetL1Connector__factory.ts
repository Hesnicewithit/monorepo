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
  MainnetL1Connector,
  MainnetL1ConnectorInterface,
} from "../../../../../contracts/messaging/connectors/MainnetConnector.sol/MainnetL1Connector";

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
        internalType: "contract IOutbox",
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
  "0x6101606040523480156200001257600080fd5b5060405162002bd238038062002bd2833981016040819052620000359162000295565b8787878787878787878063ffffffff16600003620000845760405162461bcd60e51b815260206004820152600760248201526610b237b6b0b4b760c91b60448201526064015b60405180910390fd5b63ffffffff9081166080528816620000c95760405162461bcd60e51b815260206004820152600760248201526610b237b6b0b4b760c91b60448201526064016200007b565b6001600160a01b038516620001105760405162461bcd60e51b815260206004820152600c60248201526b10b937b7ba26b0b730b3b2b960a11b60448201526064016200007b565b6200011b3362000204565b63ffffffff88811660a0526001600160a01b0387811660c05286811660e05290881661010052602480546001600160a01b0319169186169190911790556025839055620cf850821015620001a15760405162461bcd60e51b815260206004820152600c60248201526b2170726f636573732067617360a01b60448201526064016200007b565b613a98811015620001e45760405162461bcd60e51b815260206004820152600c60248201526b21726573657276652067617360a01b60448201526064016200007b565b610120919091526101405250620003229c50505050505050505050505050565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b805163ffffffff811681146200027857600080fd5b919050565b80516001600160a01b03811681146200027857600080fd5b600080600080600080600080610100898b031215620002b357600080fd5b620002be8962000263565b9750620002ce60208a0162000263565b9650620002de60408a016200027d565b9550620002ee60608a016200027d565b9450620002fe60808a016200027d565b935060a0890151925060c0890151915060e089015190509295985092959890939650565b60805160a05160c05160e051610100516101205161014051612808620003ca600039600081816102530152610dfc01526000818161054301528181610e1d0152610ea4015260006102e6015260008181610395015281816108320152818161107501526110b601526000818161051c01526105d401526000818161035b01528181610bbc0152610cfe015260008181610410015281816104b701526110dd01526128086000f3fe608060405234801561001057600080fd5b50600436106102325760003560e01c80639fa92f9d11610130578063d1851c92116100b8578063ebf0c7171161007c578063ebf0c71714610578578063ee250e0614610580578063f38a267b14610589578063fa31de01146105ac578063fd54b228146105bf57600080fd5b8063d1851c92146104f4578063d232c22014610505578063d69f9d6114610517578063d88beda21461053e578063db1b76591461056557600080fd5b8063b697f531116100ff578063b697f53114610479578063b95a20011461048c578063c2fb26a6146104b2578063c5b350df146104d9578063cc394283146104e157600080fd5b80639fa92f9d14610445578063b1f8100d1461044b578063b2f876431461045e578063b46300ec1461047157600080fd5b806352a9674b116101be5780636a42b8f8116101825780636a42b8f8146103ea578063715018a6146103f357806382646a58146103fb5780638d3638f41461040e5780638da5cb5b1461043457600080fd5b806352a9674b146103565780635bd11efc1461037d5780635f61e3ec146103905780636188af0e146103cf57806365eaf11b146103e257600080fd5b80632bbd59ca116102055780632bbd59ca146102b15780633490334a146102e15780633cf52ffb1461031d5780634ff746f6146103255780635190bc531461033a57600080fd5b806306661abd1461023757806325e3beda1461024e578063272efc691461027557806329460bd0146102a8575b600080fd5b6023545b6040519081526020015b60405180910390f35b61023b7f000000000000000000000000000000000000000000000000000000000000000081565b610298610283366004612128565b60286020526000908152604090205460ff1681565b6040519015158152602001610245565b61023b60255481565b6102d46102bf366004612151565b602a6020526000908152604090205460ff1681565b6040516102459190612180565b6103087f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff9091168152602001610245565b60025461023b565b61033861033336600461224b565b6105c9565b005b610298610348366004612128565b6001600160a01b0316301490565b6103087f000000000000000000000000000000000000000000000000000000000000000081565b61033861038b366004612128565b61066f565b6103b77f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610245565b6103386103dd366004612280565b610703565b61023b610759565b62093a8061023b565b610338610768565b61033861040936600461224b565b610827565b7f0000000000000000000000000000000000000000000000000000000000000000610308565b6000546001600160a01b03166103b7565b306103b7565b610338610459366004612128565b6108c8565b61033861046c366004612128565b610970565b6103386109ec565b610338610487366004612128565b610a22565b61030861049a3660046122f9565b60296020526000908152604090205463ffffffff1681565b6103087f000000000000000000000000000000000000000000000000000000000000000081565b610338610aa1565b6024546103b7906001600160a01b031681565b6001546001600160a01b03166103b7565b6000546001600160a01b031615610298565b6103b77f000000000000000000000000000000000000000000000000000000000000000081565b61023b7f000000000000000000000000000000000000000000000000000000000000000081565b610298610573366004612128565b610afc565b61023b610b11565b61023b60265481565b610298610597366004612151565b60276020526000908152604090205460ff1681565b6103386105ba366004612314565b610b1d565b60235461023b9081565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106335760405162461bcd60e51b815260040161062a9060208082526004908201526310a0a6a160e11b604082015260600190565b60405180910390fd5b7fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced81336040516106649291906123c3565b60405180910390a150565b6000546001600160a01b0316331461069a576040516311a8a1bb60e31b815260040160405180910390fd5b602454604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1602480546001600160a01b0319166001600160a01b0392909216919091179055565b61071583805190602001208383610c5a565b61074a5760405162461bcd60e51b81526020600482015260066024820152652170726f766560d01b604482015260640161062a565b61075383610ce8565b50505050565b6000610763610b11565b905090565b6000546001600160a01b03163314610793576040516311a8a1bb60e31b815260040160405180910390fd5b6002546000036107b657604051630e4b303f60e21b815260040160405180910390fd5b62093a80600254426107c89190612403565b116107e6576040516386d4b3f160e01b815260040160405180910390fd5b6001546001600160a01b031615610810576040516323295ef960e01b815260040160405180910390fd5b600154610825906001600160a01b0316610fd1565b565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461088e5760405162461bcd60e51b815260206004820152600c60248201526b10b937b7ba26b0b730b3b2b960a11b604482015260640161062a565b61089781611030565b7fa69577a1e55dd0712044e7078b408c39fadff8b3e1b334b202ff17e70eda9fdc81336040516106649291906123c3565b6000546001600160a01b031633146108f3576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b03828116911614801561091857506001600160a01b03811615155b15610936576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b0380831691160361096457604051634a2fb73f60e11b815260040160405180910390fd5b61096d81611164565b50565b6000546001600160a01b0316331461099b576040516311a8a1bb60e31b815260040160405180910390fd5b6001600160a01b038116600081815260286020908152604091829020805460ff1916905590519182527f384859c5ef5fafac31e8bc92ce7fb48b1f2c74c4dd5e212eb84ec202fa5d9fad9101610664565b60006109f6610b11565b604051602001610a0891815260200190565b604051602081830303815290604052905061089781611030565b6000546001600160a01b03163314610a4d576040516311a8a1bb60e31b815260040160405180910390fd5b6001600160a01b038116600081815260286020908152604091829020805460ff1916600117905590519182527fd65eca5d561d3a4568c87b9b13ced4ab52a69edadfdfdb22d76bc595f36d7d879101610664565b6001546001600160a01b03163314610acc576040516311a7f27160e11b815260040160405180910390fd5b62093a8060025442610ade9190612403565b116108105760405163d39c12bb60e01b815260040160405180910390fd5b60006001600160a01b03821633145b92915050565b600061076360036111b2565b3360009081526028602052604090205460ff16610b6b5760405162461bcd60e51b815260206004820152600c60248201526b085dda1a5d195b1a5cdd195960a21b604482015260640161062a565b63ffffffff80841660009081526029602052604090205416610b8e81600161241a565b63ffffffff8581166000908152602960205260408120805463ffffffff191693909216929092179055610be57f000000000000000000000000000000000000000000000000000000000000000033848888886111c5565b80516020820120909150610bfa6003826111fd565b7f40f08ee347fc927ae45902edc87debb024aab1a311943731968607f603f2152f816001610c2760235490565b610c319190612403565b610c39610b11565b85604051610c4a9493929190612442565b60405180910390a1505050505050565b6000806000858152602a602052604090205460ff166002811115610c8057610c8061216a565b14610cc35760405162461bcd60e51b8152602060048201526013602482015272214d6573736167655374617475732e4e6f6e6560681b604482015260640161062a565b506000838152602a60205260409020805460ff191660019081179091555b9392505050565b600080610cf5838261131a565b905063ffffffff7f000000000000000000000000000000000000000000000000000000000000000016610d2d62ffffff19831661133e565b63ffffffff1614610d6f5760405162461bcd60e51b815260206004820152600c60248201526b10b232b9ba34b730ba34b7b760a11b604482015260640161062a565b6000610d8062ffffff198316611353565b905060016000828152602a602052604090205460ff166002811115610da757610da761216a565b14610dde5760405162461bcd60e51b815260206004820152600760248201526610b83937bb32b760c91b604482015260640161062a565b6000818152602a60205260409020805460ff19166002179055610e417f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612467565b5a1015610e795760405162461bcd60e51b815260040161062a906020808252600490820152632167617360e01b604082015260600190565b6000610e8a62ffffff19841661139c565b6040805161010080825261012082019092529192506000917f0000000000000000000000000000000000000000000000000000000000000000908390836020820181803683370190505090506000610ee762ffffff1989166113ad565b610ef662ffffff198a166113c1565b610f0562ffffff198b166113d6565b610f22610f1762ffffff198d166113eb565b62ffffff1916611419565b604051602401610f35949392919061247f565b60408051601f198184030181529190526020810180516001600160e01b031663ab2dc3f560e01b17815281519192506000918291828a88f198503d945083851115610f7e578394505b848252846000602084013e7fd42de95a9b26f1be134c8ecce389dc4fcfa18753d01661b7b361233569e8fe48878a84604051610fbc939291906124ae565b60405180910390a15050505050505050919050565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b805160201461106b5760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b604482015260640161062a565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633036110ac5761096d6110a7826124cf565b611462565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166378ffd0a17f0000000000000000000000000000000000000000000000000000000000000000611105846124cf565b6040516001600160e01b031960e085901b16815263ffffffff9290921660048301526024820152604401600060405180830381600087803b15801561114957600080fd5b505af115801561115d573d6000803e3d6000fd5b5050505050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b6000610b0b826111c06114a4565b611965565b60608686868686866040516020016111e2969594939291906124f3565b60405160208183030381529060405290509695505050505050565b600161120b60206002612631565b6112159190612403565b82602001541061125a5760405162461bcd60e51b815260206004820152601060248201526f1b595c9adb19481d1c995948199d5b1b60821b604482015260640161062a565b600182602001600082825461126f9190612467565b9091555050602082015460005b602081101561130c57816001166001036112ab57828482602081106112a3576112a361263d565b015550505050565b8381602081106112bd576112bd61263d565b015460408051602081019290925281018490526060016040516020818303038152906040528051906020012092506002826112f89190612653565b91508061130481612675565b91505061127c565b5061131561268e565b505050565b81516000906020840161133564ffffffffff85168284611a37565b95945050505050565b6000610b0b62ffffff19831660286004611a7e565b6000806113698360781c6001600160601b031690565b6001600160601b0316905060006113898460181c6001600160601b031690565b6001600160601b03169091209392505050565b6000610b0b6113aa83611aae565b90565b6000610b0b62ffffff198316826004611a7e565b6000610b0b62ffffff19831660246004611a7e565b6000610b0b62ffffff19831660046020611abf565b6000610b0b604c61140981601886901c6001600160601b0316612403565b62ffffff19851691906000611c1b565b60606000806114318460181c6001600160601b031690565b6001600160601b0316905060405191508192506114518483602001611c97565b508181016020016040529052919050565b6026546040805183815260208101929092527fd93b9a9123395d96a15a0cff10295f286f99a0962c9adb978bad3ab6aaea7213910160405180910390a1602655565b6114ac612109565b600081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb560208201527fb4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d3060408201527f21ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba8560608201527fe58769b32a1beaf1ea27375a44095a0d1fb664ce2dd358e7fcbfb78c26a1934460808201527f0eb01ebfc9ed27500cd4dfc979272d1f0913cc9f66540d7e8005811109e1cf2d60a08201527f887c22bd8750d34016ac3c66b5ff102dacdd73f6b014e710b51e8022af9a196860c08201527fffd70157e48063fc33c97a050f7f640233bf646cc98d9524c6b92bcf3ab56f8360e08201527f9867cc5f7f196b93bae1e27e6320742445d290f2263827498b54fec539f756af6101008201527fcefad4e508c098b9a7e1d8feb19955fb02ba9675585078710969d3440f5054e06101208201527ff9dc3e7fe016e050eff260334f18a5d4fe391d82092319f5964f2e2eb7c1c3a56101408201527ff8b13a49e282f609c317a833fb8d976d11517c571d1221a265d25af778ecf8926101608201527f3490c6ceeb450aecdc82e28293031d10c7d73bf85e57bf041a97360aa2c5d99c6101808201527fc1df82d9c4b87413eae2ef048f94b4d3554cea73d92b0f7af96e0271c691e2bb6101a08201527f5c67add7c6caf302256adedf7ab114da0acfe870d449a3a489f781d659e8becc6101c08201527fda7bce9f4e8618b6bd2f4132ce798cdc7a60e7e1460a7299e3c6342a579626d26101e08201527f2733e50f526ec2fa19a22b31e8ed50f23cd1fdf94c9154ed3a7609a2f1ff981f6102008201527fe1d3b5c807b281e4683cc6d6315cf95b9ade8641defcb32372f1c126e398ef7a6102208201527f5a2dce0a8a7f68bb74560f8f71837c2c2ebbcbf7fffb42ae1896f13f7c7479a06102408201527fb46a28b6f55540f89444f63de0378e3d121be09e06cc9ded1c20e65876d36aa06102608201527fc65e9645644786b620e2dd2ad648ddfcbf4a7e5b1a3a4ecfe7f64667a3f0b7e26102808201527ff4418588ed35a2458cffeb39b93d26f18d2ab13bdce6aee58e7b99359ec2dfd96102a08201527f5a9c16dc00d6ef18b7933a6f8dc65ccb55667138776f7dea101070dc8796e3776102c08201527f4df84f40ae0c8229d0d6069e5c8f39a7c299677a09d367fc7b05e3bc380ee6526102e08201527fcdc72595f74c7b1043d0e1ffbab734648c838dfb0527d971b602bc216c9619ef6103008201527f0abf5ac974a1ed57f4050aa510dd9c74f508277b39d7973bb2dfccc5eeb0618d6103208201527fb8cd74046ff337f0a7bf2c8e03e10f642c1886798d71806ab1e888d9e5ee87d06103408201527f838c5655cb21c6cb83313b5a631175dff4963772cce9108188b34ac87c81c41e6103608201527f662ee4dd2dd7b2bc707961b1e646c4047669dcb6584f0d8d770daf5d7e7deb2e6103808201527f388ab20e2573d171a88108e79d820e98f26c0b84aa8b2f4aa4968dbb818ea3226103a08201527f93237c50ba75ee485f4c22adf2f741400bdf8d6a9cc7df7ecae576221665d7356103c08201527f8448818bb4ae4562849e949e17ac16e0be16688e156b5cf15e098c627c0056a96103e082015290565b6020820154600090815b6020811015611a2f57600182821c1660008683602081106119925761199261263d565b01549050816001036119cf576040805160208101839052908101869052606001604051602081830303815290604052805190602001209450611a1a565b848684602081106119e2576119e261263d565b6020020151604051602001611a01929190918252602082015260400190565b6040516020818303038152906040528051906020012094505b50508080611a2790612675565b91505061196f565b505092915050565b600080611a448385612467565b9050604051811115611a54575060005b80600003611a695762ffffff19915050610ce1565b5050606092831b9190911790911b1760181b90565b6000611a8b8260206126a4565b611a969060086126c7565b60ff16611aa4858585611abf565b901c949350505050565b6000610b0b62ffffff198316602c60205b60008160ff16600003611ad457506000610ce1565b611ae78460181c6001600160601b031690565b6001600160601b0316611afd60ff841685612467565b1115611b6157611b48611b198560781c6001600160601b031690565b6001600160601b0316611b358660181c6001600160601b031690565b6001600160601b0316858560ff16611df8565b60405162461bcd60e51b815260040161062a91906126e8565b60208260ff161115611bdb5760405162461bcd60e51b815260206004820152603a60248201527f54797065644d656d566965772f696e646578202d20417474656d70746564207460448201527f6f20696e646578206d6f7265207468616e203332206279746573000000000000606482015260840161062a565b600882026000611bf48660781c6001600160601b031690565b6001600160601b031690506000600160ff1b60001984011d91909501511695945050505050565b600080611c318660781c6001600160601b031690565b6001600160601b03169050611c4586611e66565b84611c508784612467565b611c5a9190612467565b1115611c6d5762ffffff19915050611c8f565b611c778582612467565b9050611c8b8364ffffffffff168286611a37565b9150505b949350505050565b600062ffffff1980841603611cff5760405162461bcd60e51b815260206004820152602860248201527f54797065644d656d566965772f636f7079546f202d204e756c6c20706f696e7460448201526732b9103232b932b360c11b606482015260840161062a565b611d0883611e9f565b611d685760405162461bcd60e51b815260206004820152602b60248201527f54797065644d656d566965772f636f7079546f202d20496e76616c696420706f60448201526a34b73a32b9103232b932b360a91b606482015260840161062a565b6000611d7d8460181c6001600160601b031690565b6001600160601b031690506000611d9d8560781c6001600160601b031690565b6001600160601b031690506000604051905084811115611dbd5760206060fd5b8285848460045afa50611dee611dd38760d81c90565b64ffffffffff60601b606091821b168717901b841760181b90565b9695505050505050565b60606000611e0586611edc565b9150506000611e1386611edc565b9150506000611e2186611edc565b9150506000611e2f86611edc565b91505083838383604051602001611e4994939291906126fb565b604051602081830303815290604052945050505050949350505050565b6000611e7b8260181c6001600160601b031690565b611e8e8360781c6001600160601b031690565b016001600160601b03169050919050565b6000611eab8260d81c90565b64ffffffffff1664ffffffffff03611ec557506000919050565b6000611ed083611e66565b60405110199392505050565b600080601f5b600f8160ff161115611f31576000611efb8260086126c7565b60ff1685901c9050611f0c81611f8a565b61ffff16841793508160ff16601014611f2757601084901b93505b5060001901611ee2565b50600f5b60ff8160ff161015611f84576000611f4e8260086126c7565b60ff1685901c9050611f5f81611f8a565b61ffff16831792508160ff16600014611f7a57601083901b92505b5060001901611f35565b50915091565b6000611f9c60048360ff16901c611fbc565b60ff1661ffff919091161760081b611fb382611fbc565b60ff1617919050565b600060f08083179060ff82169003611fd75750603092915050565b8060ff1660f103611feb5750603192915050565b8060ff1660f203611fff5750603292915050565b8060ff1660f3036120135750603392915050565b8060ff1660f4036120275750603492915050565b8060ff1660f50361203b5750603592915050565b8060ff1660f60361204f5750603692915050565b8060ff1660f7036120635750603792915050565b8060ff1660f8036120775750603892915050565b8060ff1660f90361208b5750603992915050565b8060ff1660fa0361209f5750606192915050565b8060ff1660fb036120b35750606292915050565b8060ff1660fc036120c75750606392915050565b8060ff1660fd036120db5750606492915050565b8060ff1660fe036120ef5750606592915050565b8060ff1660ff036121035750606692915050565b50919050565b6040518061040001604052806020906020820280368337509192915050565b60006020828403121561213a57600080fd5b81356001600160a01b0381168114610ce157600080fd5b60006020828403121561216357600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b60208101600383106121a257634e487b7160e01b600052602160045260246000fd5b91905290565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126121cf57600080fd5b813567ffffffffffffffff808211156121ea576121ea6121a8565b604051601f8301601f19908116603f01168101908282118183101715612212576122126121a8565b8160405283815286602085880101111561222b57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006020828403121561225d57600080fd5b813567ffffffffffffffff81111561227457600080fd5b611c8f848285016121be565b6000806000610440848603121561229657600080fd5b833567ffffffffffffffff8111156122ad57600080fd5b6122b9868287016121be565b9350506104208401858111156122ce57600080fd5b60208501925080359150509250925092565b803563ffffffff811681146122f457600080fd5b919050565b60006020828403121561230b57600080fd5b610ce1826122e0565b60008060006060848603121561232957600080fd5b612332846122e0565b925060208401359150604084013567ffffffffffffffff81111561235557600080fd5b612361868287016121be565b9150509250925092565b60005b8381101561238657818101518382015260200161236e565b838111156107535750506000910152565b600081518084526123af81602086016020860161236b565b601f01601f19169290920160200192915050565b6040815260006123d66040830185612397565b905060018060a01b03831660208301529392505050565b634e487b7160e01b600052601160045260246000fd5b600082821015612415576124156123ed565b500390565b600063ffffffff808316818516808303821115612439576124396123ed565b01949350505050565b848152836020820152826040820152608060608201526000611dee6080830184612397565b6000821982111561247a5761247a6123ed565b500190565b600063ffffffff808716835280861660208401525083604083015260806060830152611dee6080830184612397565b83815282151560208201526060604082015260006113356060830184612397565b805160208083015191908110156121035760001960209190910360031b1b16919050565b600063ffffffff60e01b808960e01b168352876004840152808760e01b166024840152808660e01b1660288401525083602c830152825161253b81604c85016020870161236b565b91909101604c01979650505050505050565b600181815b8085111561258857816000190482111561256e5761256e6123ed565b8085161561257b57918102915b93841c9390800290612552565b509250929050565b60008261259f57506001610b0b565b816125ac57506000610b0b565b81600181146125c257600281146125cc576125e8565b6001915050610b0b565b60ff8411156125dd576125dd6123ed565b50506001821b610b0b565b5060208310610133831016604e8410600b841016171561260b575081810a610b0b565b612615838361254d565b8060001904821115612629576126296123ed565b029392505050565b6000610ce18383612590565b634e487b7160e01b600052603260045260246000fd5b60008261267057634e487b7160e01b600052601260045260246000fd5b500490565b600060018201612687576126876123ed565b5060010190565b634e487b7160e01b600052600160045260246000fd5b600060ff821660ff8416808210156126be576126be6123ed565b90039392505050565b600060ff821660ff84168160ff0481118215151615612629576126296123ed565b602081526000610ce16020830184612397565b7f54797065644d656d566965772f696e646578202d204f76657272616e20746865815274040ecd2caee5c40a6d8d2c6ca40d2e640c2e84060f605b1b60208201526001600160d01b031960d086811b821660358401526e040eed2e8d040d8cadccee8d04060f608b1b603b840181905286821b8316604a8501527f2e20417474656d7074656420746f20696e646578206174206f666673657420306050850152600f60fb1b607085015285821b83166071850152607784015283901b166086820152601760f91b608c8201526000608d8201611dee56fea2646970667358221220c534ec68e2a53250468bb9fa3fbf564b5d9faa6a8010c173f3e797d3a144af7a64736f6c634300080f0033";

type MainnetL1ConnectorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MainnetL1ConnectorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

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
    overrides?: Overrides & { from?: PromiseOrValue<string> }
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
      overrides || {}
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
    overrides?: Overrides & { from?: PromiseOrValue<string> }
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
      overrides || {}
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
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MainnetL1Connector {
    return new Contract(address, _abi, signerOrProvider) as MainnetL1Connector;
  }
}
