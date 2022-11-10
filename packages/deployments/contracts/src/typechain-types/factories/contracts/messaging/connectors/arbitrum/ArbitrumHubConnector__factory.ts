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
  ArbitrumHubConnector,
  ArbitrumHubConnectorInterface,
} from "../../../../../contracts/messaging/connectors/arbitrum/ArbitrumHubConnector";

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
        name: "_outbox",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_maxSubmissionCostCap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxGasCap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_gasPriceCap",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "NotCrossChainCall",
    type: "error",
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
        internalType: "uint256",
        name: "_previous",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_updated",
        type: "uint256",
      },
    ],
    name: "GasPriceCapUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_previous",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_updated",
        type: "uint256",
      },
    ],
    name: "MaxGasCapUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_previous",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_updated",
        type: "uint256",
      },
    ],
    name: "MaxSubmissionCapUpdated",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "ticketId",
        type: "uint256",
      },
    ],
    name: "RetryableTicketCreated",
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
    name: "gasPriceCap",
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
    name: "maxGasCap",
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
    name: "maxSubmissionCostCap",
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
    name: "outbox",
    outputs: [
      {
        internalType: "contract IArbitrumOutbox",
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
        internalType: "uint64",
        name: "_nodeNum",
        type: "uint64",
      },
      {
        internalType: "bytes32",
        name: "_sendRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_blockHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "_proof",
        type: "bytes32[]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "l2Sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "l2Block",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "l1Block",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "l2Timestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct L2Message",
        name: "_message",
        type: "tuple",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
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
    inputs: [],
    name: "rollup",
    outputs: [
      {
        internalType: "contract IArbitrumRollup",
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
        internalType: "uint256",
        name: "_updated",
        type: "uint256",
      },
    ],
    name: "setGasPriceCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_updated",
        type: "uint256",
      },
    ],
    name: "setMaxGasCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_updated",
        type: "uint256",
      },
    ],
    name: "setMaxSubmissionCostCap",
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
  "0x6101006040523480156200001257600080fd5b506040516200262f3803806200262f83398101604081905262000035916200032f565b888888888884848484846200004a3362000235565b8463ffffffff16600003620000955760405162461bcd60e51b815260206004820152600c60248201526b32b6b83a3c903237b6b0b4b760a11b60448201526064015b60405180910390fd5b6001600160a01b038216620000e15760405162461bcd60e51b815260206004820152601160248201527032b6b83a3c903937b7ba26b0b730b3b2b960791b60448201526064016200008c565b63ffffffff8086166080526001600160a01b0380851660a05283811660c05290851660e0528116156200011957620001198162000294565b604080516001600160a01b0385811682528481166020830152831681830152905163ffffffff86811692908816917f4f9c27c2fe3f84576ea469d367d044da53c45e951617e8389f2b5ed8db9d25f09181900360600190a35050600480546001600160a01b0319166001600160a01b038e1690811782556040805163cb23bcb560e01b81529051919a5063cb23bcb599508083019850602097509095508590030192508391508790505afa158015620001d6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001fc9190620003cf565b600580546001600160a01b0319166001600160a01b039290921691909117905560069290925560075560085550620003f4945050505050565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b805163ffffffff811681146200031257600080fd5b919050565b80516001600160a01b03811681146200031257600080fd5b60008060008060008060008060006101208a8c0312156200034f57600080fd5b6200035a8a620002fd565b98506200036a60208b01620002fd565b97506200037a60408b0162000317565b96506200038a60608b0162000317565b95506200039a60808b0162000317565b9450620003aa60a08b0162000317565b935060c08a0151925060e08a015191506101008a015190509295985092959850929598565b600060208284031215620003e257600080fd5b620003ed8262000317565b9392505050565b60805160a05160c05160e0516121d7620004586000396000818161021c0152610950015260008181610323015281816105cf01526109810152600081816104e00152818161068401528181610ca20152611316015260006102cf01526121d76000f3fe60806040526004361061019c5760003560e01c80639ab0563b116100ec578063ce11e6ab1161008a578063d69f9d6111610064578063d69f9d61146104ce578063db1b765914610502578063e2ce3c6414610522578063fbd4006b1461053857600080fd5b8063ce11e6ab14610471578063d1851c9214610491578063d232c220146104af57600080fd5b8063b64d327e116100c6578063b64d327e14610406578063c5b350df1461041c578063cb23bcb514610431578063cc3942831461045157600080fd5b80639ab0563b146103a65780639d4373a4146103c6578063b1f8100d146103e657600080fd5b80634ff746f6116101595780635f61e3ec116101335780635f61e3ec146103115780636a42b8f81461035d578063715018a6146103735780638da5cb5b1461038857600080fd5b80634ff746f61461029d57806352a9674b146102bd5780635bd11efc146102f157600080fd5b806305a79e06146101a15780630fca49cd146101e6578063141684161461020a5780633327998d146102535780633cf52ffb1461027557806348e6fa231461028a575b600080fd5b3480156101ad57600080fd5b506101d16101bc3660046119f7565b60096020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b3480156101f257600080fd5b506101fc60065481565b6040519081526020016101dd565b34801561021657600080fd5b5061023e7f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020016101dd565b34801561025f57600080fd5b5061027361026e3660046119f7565b610558565b005b34801561028157600080fd5b506002546101fc565b610273610298366004611add565b6105c4565b3480156102a957600080fd5b506102736102b8366004611b41565b610679565b3480156102c957600080fd5b5061023e7f000000000000000000000000000000000000000000000000000000000000000081565b3480156102fd57600080fd5b5061027361030c366004611b93565b610716565b34801561031d57600080fd5b506103457f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101dd565b34801561036957600080fd5b5062093a806101fc565b34801561037f57600080fd5b5061027361074d565b34801561039457600080fd5b506000546001600160a01b0316610345565b3480156103b257600080fd5b506102736103c13660046119f7565b61080c565b3480156103d257600080fd5b506102736103e1366004611bd8565b610878565b3480156103f257600080fd5b50610273610401366004611b93565b610a37565b34801561041257600080fd5b506101fc60075481565b34801561042857600080fd5b50610273610adc565b34801561043d57600080fd5b50600554610345906001600160a01b031681565b34801561045d57600080fd5b50600354610345906001600160a01b031681565b34801561047d57600080fd5b50600454610345906001600160a01b031681565b34801561049d57600080fd5b506001546001600160a01b0316610345565b3480156104bb57600080fd5b506000546001600160a01b0316156101d1565b3480156104da57600080fd5b506103457f000000000000000000000000000000000000000000000000000000000000000081565b34801561050e57600080fd5b506101d161051d366004611b93565b610b37565b34801561052e57600080fd5b506101fc60085481565b34801561054457600080fd5b506102736105533660046119f7565b610b48565b6000546001600160a01b03163314610583576040516311a8a1bb60e31b815260040160405180910390fd5b60065460408051918252602082018390527f8826388bbfa56ae5df40ee5607d9d354fa66549d854624242c77b5af2a5e4c3b910160405180910390a1600655565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106305760405162461bcd60e51b815260206004820152600c60248201526b10b937b7ba26b0b730b3b2b960a11b60448201526064015b60405180910390fd5b61063a8282610bb4565b7fdcaa37a042a0087de79018c629bbd29cee82ca80bd9be394e1696bf9e935507782823360405161066d93929190611cef565b60405180910390a15050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106da5760405162461bcd60e51b81526004016106279060208082526004908201526310a0a6a160e11b604082015260600190565b7fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced813360405161070b929190611d2d565b60405180910390a150565b6000546001600160a01b03163314610741576040516311a8a1bb60e31b815260040160405180910390fd5b61074a81610dbd565b50565b6000546001600160a01b03163314610778576040516311a8a1bb60e31b815260040160405180910390fd5b60025460000361079b57604051630e4b303f60e21b815260040160405180910390fd5b62093a80600254426107ad9190611d6d565b116107cb576040516386d4b3f160e01b815260040160405180910390fd5b6001546001600160a01b0316156107f5576040516323295ef960e01b815260040160405180910390fd5b60015461080a906001600160a01b0316610e26565b565b6000546001600160a01b03163314610837576040516311a8a1bb60e31b815260040160405180910390fd5b60075460408051918252602082018390527f57bffb29c4c6b672a2e334fa00ea826dba286d6cb34d61bebc6c667abb579c62910160405180910390a1600755565b610883878787610e85565b6108908685858585610fda565b61089d60c0820182611d84565b90506024146108d85760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b6044820152606401610627565b600061093c6004602061092f846108f260c0880188611d84565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929392505061113d9050565b62ffffff19169190611161565b60405163473ec9fd60e11b815263ffffffff7f0000000000000000000000000000000000000000000000000000000000000000166004820152602481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638e7d93fa90604401600060405180830381600087803b1580156109cd57600080fd5b505af11580156109e1573d6000803e3d6000fd5b507fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced9250610a1591505060c0840184611d84565b33604051610a2593929190611dfb565b60405180910390a15050505050505050565b6000546001600160a01b03163314610a62576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b038281169116148015610a8757506001600160a01b03811615155b15610aa5576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b03808316911603610ad357604051634a2fb73f60e11b815260040160405180910390fd5b61074a816112c1565b6001546001600160a01b03163314610b07576040516311a7f27160e11b815260040160405180910390fd5b62093a8060025442610b199190611d6d565b116107f55760405163d39c12bb60e01b815260040160405180910390fd5b6000610b428261130f565b92915050565b6000546001600160a01b03163314610b73576040516311a8a1bb60e31b815260040160405180910390fd5b60065460408051918252602082018390527f7f46895145f361561c5e9bbaf45b71269a4399dc3064511f123ebf4c6f04e357910160405180910390a1600855565b8151602014610bef5760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b6044820152606401610627565b6000634ff746f660e01b83604051602401610c0a9190611e27565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091528251909150606014610c7f5760405162461bcd60e51b815260206004820152600c60248201526b042c8c2e8c240d8cadccee8d60a31b6044820152606401610627565b600080600084806020019051810190610c989190611e3a565b92509250925060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663679b6ded34600360009054906101000a90046001600160a01b03166000610cf489600654611355565b6003546007546001600160a01b03909116908190610d13908c90611355565b610d1f8b600854611355565b8e6040518a63ffffffff1660e01b8152600401610d43989796959493929190611e68565b60206040518083038185885af1158015610d61573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610d869190611ec3565b60405190915081907fde92b5b7839f4a2c640f5e3bbb66d415458dadc57a487b0c7fa562ed7c9c896f90600090a250505050505050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b604080516020808201849052818301859052825180830384018152606090920190925280519101206000906005546040516324b204d360e21b815267ffffffffffffffff871660048201529192506000916001600160a01b03909116906392c8134c9060240161018060405180830381865afa158015610f09573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f2d9190611eec565b905081816040015114610f715760405162461bcd60e51b815260206004820152600c60248201526b21636f6e6669726d4461746160a01b6044820152606401610627565b60008160c0015167ffffffffffffffff16118015610f9d575060008160e0015167ffffffffffffffff16115b610fd35760405162461bcd60e51b8152602060048201526007602482015266085cdd185ad95960ca1b6044820152606401610627565b5050505050565b6003546001600160a01b0316610ff36020830183611b93565b6001600160a01b03161461103c5760405162461bcd60e51b815260206004820152601060248201526f10b6b4b93937b921b7b73732b1ba37b960811b6044820152606401610627565b6004546000906001600160a01b0316639f0c04bf61105d6020850185611b93565b61106d6040860160208701611b93565b60408601356060870135608088013560a089013561108e60c08b018b611d84565b6040518963ffffffff1660e01b81526004016110b1989796959493929190611fbe565b602060405180830381865afa1580156110ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110f29190611ec3565b90506111358585808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152508792508591508a905061136b565b505050505050565b81516000906020840161115864ffffffffff8516828461150d565b95945050505050565b60008160ff16600003611176575060006112ba565b6111898460181c6001600160601b031690565b6001600160601b031661119f60ff841685612010565b1115611203576111ea6111bb8560781c6001600160601b031690565b6001600160601b03166111d78660181c6001600160601b031690565b6001600160601b0316858560ff16611554565b60405162461bcd60e51b81526004016106279190611e27565b60208260ff16111561127d5760405162461bcd60e51b815260206004820152603a60248201527f54797065644d656d566965772f696e646578202d20417474656d70746564207460448201527f6f20696e646578206d6f7265207468616e2033322062797465730000000000006064820152608401610627565b6008820260006112968660781c6001600160601b031690565b6001600160601b031690506000600160ff1b60001984011d91860151909116925050505b9392505050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b600061133a7f000000000000000000000000000000000000000000000000000000000000000061167e565b6001600160a01b0316826001600160a01b0316149050919050565b600081831061136457816112ba565b5090919050565b6101008451106113ac5760405162461bcd60e51b815260206004820152600c60248201526b0e0e4dedecc40d8cadccee8d60a31b6044820152606401610627565b83516113b990600261210c565b83106113f85760405162461bcd60e51b815260206004820152600e60248201526d10b6b4b734b6b0b610383937b7b360911b6044820152606401610627565b60008381526009602052604090205460ff161561143f5760405162461bcd60e51b81526020600482015260056024820152641cdc195b9d60da1b6044820152606401610627565b60048054604051627436d360e01b81526000926001600160a01b0390921691627436d3916114739189918991899101612118565b602060405180830381865afa158015611490573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114b49190611ec3565b90508181146114ee5760405162461bcd60e51b815260206004820152600660248201526510b83937b7b360d11b6044820152606401610627565b5050506000908152600960205260409020805460ff1916600117905550565b60008061151a8385612010565b905060405181111561152a575060005b8060000361153f5762ffffff199150506112ba565b5050606092831b9190911790911b1760181b90565b60606000611561866117dc565b915050600061156f866117dc565b915050600061157d866117dc565b915050600061158b866117dc565b604080517f54797065644d656d566965772f696e646578202d204f76657272616e20746865602082015274040ecd2caee5c40a6d8d2c6ca40d2e640c2e84060f605b1b818301526001600160d01b031960d098891b811660558301526e040eed2e8d040d8cadccee8d04060f608b1b605b830181905297891b8116606a8301527f2e20417474656d7074656420746f20696e646578206174206f666673657420306070830152600f60fb1b609083015295881b861660918201526097810196909652951b90921660a68401525050601760f91b60ac8201528151808203608d01815260ad90910190915295945050505050565b60006001600160a01b03821633146116a95760405163253a6fc960e11b815260040160405180910390fd5b6000826001600160a01b031663ab5d89436040518163ffffffff1660e01b8152600401602060405180830381865afa1580156116e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061170d9190612165565b6001600160a01b03166380648b026040518163ffffffff1660e01b8152600401602060405180830381865afa15801561174a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061176e9190612165565b90506001600160a01b038116610b425760405162461bcd60e51b815260206004820152602d60248201527f4c6962417262697472756d4c313a2073797374656d206d65737361676573207760448201526c34ba3437baba1039b2b73232b960991b6064820152608401610627565b600080601f5b600f8111156118285760006117f8826008612182565b85901c905061180681611878565b61ffff16841793508160101461181e57601084901b93505b50600019016117e2565b50600f5b60ff811015611872576000611842826008612182565b85901c905061185081611878565b61ffff16831792508160001461186857601083901b92505b506000190161182c565b50915091565b600061188a60048360ff16901c6118aa565b60ff1661ffff919091161760081b6118a1826118aa565b60ff1617919050565b600060f08083179060ff821690036118c55750603092915050565b8060ff1660f1036118d95750603192915050565b8060ff1660f2036118ed5750603292915050565b8060ff1660f3036119015750603392915050565b8060ff1660f4036119155750603492915050565b8060ff1660f5036119295750603592915050565b8060ff1660f60361193d5750603692915050565b8060ff1660f7036119515750603792915050565b8060ff1660f8036119655750603892915050565b8060ff1660f9036119795750603992915050565b8060ff1660fa0361198d5750606192915050565b8060ff1660fb036119a15750606292915050565b8060ff1660fc036119b55750606392915050565b8060ff1660fd036119c95750606492915050565b8060ff1660fe036119dd5750606592915050565b8060ff1660ff036119f15750606692915050565b50919050565b600060208284031215611a0957600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff81118282101715611a4a57611a4a611a10565b60405290565b600082601f830112611a6157600080fd5b813567ffffffffffffffff80821115611a7c57611a7c611a10565b604051601f8301601f19908116603f01168101908282118183101715611aa457611aa4611a10565b81604052838152866020858801011115611abd57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215611af057600080fd5b823567ffffffffffffffff80821115611b0857600080fd5b611b1486838701611a50565b93506020850135915080821115611b2a57600080fd5b50611b3785828601611a50565b9150509250929050565b600060208284031215611b5357600080fd5b813567ffffffffffffffff811115611b6a57600080fd5b611b7684828501611a50565b949350505050565b6001600160a01b038116811461074a57600080fd5b600060208284031215611ba557600080fd5b81356112ba81611b7e565b67ffffffffffffffff8116811461074a57600080fd5b600060e082840312156119f157600080fd5b600080600080600080600060c0888a031215611bf357600080fd5b8735611bfe81611bb0565b96506020880135955060408801359450606088013567ffffffffffffffff80821115611c2957600080fd5b818a0191508a601f830112611c3d57600080fd5b813581811115611c4c57600080fd5b8b60208260051b8501011115611c6157600080fd5b6020830196508095505060808a0135935060a08a0135915080821115611c8657600080fd5b50611c938a828b01611bc6565b91505092959891949750929550565b6000815180845260005b81811015611cc857602081850181015186830182015201611cac565b81811115611cda576000602083870101525b50601f01601f19169290920160200192915050565b606081526000611d026060830186611ca2565b8281036020840152611d148186611ca2565b91505060018060a01b0383166040830152949350505050565b604081526000611d406040830185611ca2565b905060018060a01b03831660208301529392505050565b634e487b7160e01b600052601160045260246000fd5b600082821015611d7f57611d7f611d57565b500390565b6000808335601e19843603018112611d9b57600080fd5b83018035915067ffffffffffffffff821115611db657600080fd5b602001915036819003821315611dcb57600080fd5b9250929050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b604081526000611e0f604083018587611dd2565b905060018060a01b0383166020830152949350505050565b6020815260006112ba6020830184611ca2565b600080600060608486031215611e4f57600080fd5b8351925060208401519150604084015190509250925092565b600061010060018060a01b03808c1684528a602085015289604085015280891660608501528088166080850152508560a08401528460c08401528060e0840152611eb481840185611ca2565b9b9a5050505050505050505050565b600060208284031215611ed557600080fd5b5051919050565b8051611ee781611bb0565b919050565b60006101808284031215611eff57600080fd5b611f07611a26565b825181526020830151602082015260408301516040820152611f2b60608401611edc565b6060820152611f3c60808401611edc565b6080820152611f4d60a08401611edc565b60a0820152611f5e60c08401611edc565b60c0820152611f6f60e08401611edc565b60e0820152610100611f82818501611edc565b90820152610120611f94848201611edc565b90820152610140611fa6848201611edc565b90820152610160928301519281019290925250919050565b600060018060a01b03808b168352808a166020840152508760408301528660608301528560808301528460a083015260e060c083015261200260e083018486611dd2565b9a9950505050505050505050565b6000821982111561202357612023611d57565b500190565b600181815b8085111561206357816000190482111561204957612049611d57565b8085161561205657918102915b93841c939080029061202d565b509250929050565b60008261207a57506001610b42565b8161208757506000610b42565b816001811461209d57600281146120a7576120c3565b6001915050610b42565b60ff8411156120b8576120b8611d57565b50506001821b610b42565b5060208310610133831016604e8410600b84101617156120e6575081810a610b42565b6120f08383612028565b806000190482111561210457612104611d57565b029392505050565b60006112ba838361206b565b606080825284519082018190526000906020906080840190828801845b8281101561215157815184529284019290840190600101612135565b505050908301949094525060400152919050565b60006020828403121561217757600080fd5b81516112ba81611b7e565b600081600019048311821515161561219c5761219c611d57565b50029056fea264697066735822122064939ccb0802cc5e8b49af63841a036a40932b7abe69604b09fd0c2fc579760b64736f6c634300080f0033";

type ArbitrumHubConnectorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ArbitrumHubConnectorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ArbitrumHubConnector__factory extends ContractFactory {
  constructor(...args: ArbitrumHubConnectorConstructorParams) {
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
    _outbox: PromiseOrValue<string>,
    _maxSubmissionCostCap: PromiseOrValue<BigNumberish>,
    _maxGasCap: PromiseOrValue<BigNumberish>,
    _gasPriceCap: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ArbitrumHubConnector> {
    return super.deploy(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _outbox,
      _maxSubmissionCostCap,
      _maxGasCap,
      _gasPriceCap,
      overrides || {}
    ) as Promise<ArbitrumHubConnector>;
  }
  override getDeployTransaction(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _outbox: PromiseOrValue<string>,
    _maxSubmissionCostCap: PromiseOrValue<BigNumberish>,
    _maxGasCap: PromiseOrValue<BigNumberish>,
    _gasPriceCap: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _outbox,
      _maxSubmissionCostCap,
      _maxGasCap,
      _gasPriceCap,
      overrides || {}
    );
  }
  override attach(address: string): ArbitrumHubConnector {
    return super.attach(address) as ArbitrumHubConnector;
  }
  override connect(signer: Signer): ArbitrumHubConnector__factory {
    return super.connect(signer) as ArbitrumHubConnector__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ArbitrumHubConnectorInterface {
    return new utils.Interface(_abi) as ArbitrumHubConnectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArbitrumHubConnector {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ArbitrumHubConnector;
  }
}
