/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  PromiseRouter,
  PromiseRouterInterface,
} from "../../../../contracts/core/promise/PromiseRouter";

const _abi = [
  {
    inputs: [],
    name: "PromiseRouter__bumpCallbackFee_messageUnavailable",
    type: "error",
  },
  {
    inputs: [],
    name: "PromiseRouter__bumpCallbackFee_valueIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "PromiseRouter__initCallbackFee_valueIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "PromiseRouter__onlyConnext_notConnext",
    type: "error",
  },
  {
    inputs: [],
    name: "PromiseRouter__process_insufficientCallbackFee",
    type: "error",
  },
  {
    inputs: [],
    name: "PromiseRouter__process_invalidMessage",
    type: "error",
  },
  {
    inputs: [],
    name: "PromiseRouter__process_invalidTransferId",
    type: "error",
  },
  {
    inputs: [],
    name: "PromiseRouter__process_notApprovedRelayer",
    type: "error",
  },
  {
    inputs: [],
    name: "PromiseRouter__process_notContractCallback",
    type: "error",
  },
  {
    inputs: [],
    name: "PromiseRouter__send_callbackEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "PromiseRouter__send_returndataEmpty",
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
        indexed: true,
        internalType: "bytes32",
        name: "transferId",
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
        internalType: "address",
        name: "relayer",
        type: "address",
      },
    ],
    name: "CallbackExecuted",
    type: "event",
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
        indexed: false,
        internalType: "uint256",
        name: "addedFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "CallbackFeeAdded",
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
        internalType: "uint64",
        name: "originAndNonce",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "origin",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "transferId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "callbackAddress",
        type: "address",
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
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "Receive",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previous",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "updated",
        type: "uint256",
      },
    ],
    name: "ReserveGasSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "remote",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "transferId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "callbackAddress",
        type: "address",
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
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "Send",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "connext",
        type: "address",
      },
    ],
    name: "SetConnext",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_COPY",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
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
    name: "acceptProposedOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_transferId",
        type: "bytes32",
      },
    ],
    name: "bumpCallbackFee",
    outputs: [],
    stateMutability: "payable",
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
    name: "callbackFees",
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
    name: "connext",
    outputs: [
      {
        internalType: "contract IConnextHandler",
        name: "",
        type: "address",
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
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_router",
        type: "bytes32",
      },
    ],
    name: "enrollRemoteRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_origin",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_nonce",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_sender",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "handle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_transferId",
        type: "bytes32",
      },
    ],
    name: "initCallbackFee",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
    ],
    name: "initialize",
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
    name: "messageHashes",
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
        internalType: "bytes32",
        name: "transferId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "process",
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
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "remotes",
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
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_transferId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_callbackAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_returnSuccess",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "_returnData",
        type: "bytes",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_connext",
        type: "address",
      },
    ],
    name: "setConnext",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_reserve",
        type: "uint256",
      },
    ],
    name: "setReserveGas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
    ],
    name: "setXAppConnectionManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "xAppConnectionManager",
    outputs: [
      {
        internalType: "contract XAppConnectionManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612611806100206000396000f3fe6080604052600436106101815760003560e01c80638da5cb5b116100d1578063c5b350df1161008a578063de4b054811610064578063de4b05481461047e578063dfefb7d71461049e578063fc89d377146104be578063ffa1ad74146104d157600080fd5b8063c5b350df14610415578063d1851c921461042a578063d232c2201461044857600080fd5b80638da5cb5b146103435780639367427c14610367578063ab2dc3f514610395578063b1f8100d146103b5578063b49c53a7146103d5578063c4d66de8146103f557600080fd5b80634fa6b6341161013e5780636a42b8f8116101185780636a42b8f8146102be5780637080f771146102d4578063715018a61461030157806383bbb8061461031657600080fd5b80634fa6b6341461025e5780635540f1c01461028b57806365d82b8b1461029e57600080fd5b806325e3beda146101865780633339df96146101af5780633cf52ffb146101e757806341bdc8b5146101fc57806348d677e81461021e5780634d6f20131461023e575b600080fd5b34801561019257600080fd5b5061019c60ce5481565b6040519081526020015b60405180910390f35b3480156101bb57600080fd5b506034546101cf906001600160a01b031681565b6040516001600160a01b0390911681526020016101a6565b3480156101f357600080fd5b5060025461019c565b34801561020857600080fd5b5061021c610217366004611efb565b6104f8565b005b34801561022a57600080fd5b5061021c610239366004611f18565b61054b565b34801561024a57600080fd5b5061021c610259366004611efb565b6105bd565b34801561026a57600080fd5b5061019c610279366004611f18565b60cc6020526000908152604090205481565b61021c610299366004611f18565b610638565b3480156102aa57600080fd5b5061021c6102b9366004611f9c565b610732565b3480156102ca57600080fd5b5062093a8061019c565b3480156102e057600080fd5b5061019c6102ef366004611f18565b60cb6020526000908152604090205481565b34801561030d57600080fd5b5061021c6108c9565b34801561032257600080fd5b5061019c61033136600461201f565b60666020526000908152604090205481565b34801561034f57600080fd5b506000546201000090046001600160a01b03166101cf565b34801561037357600080fd5b5060cd546103829061ffff1681565b60405161ffff90911681526020016101a6565b3480156103a157600080fd5b5061021c6103b0366004612050565b61098e565b3480156103c157600080fd5b5061021c6103d0366004611efb565b610b19565b3480156103e157600080fd5b5061021c6103f036600461212c565b610bcd565b34801561040157600080fd5b5061021c610410366004611efb565b610c17565b34801561042157600080fd5b5061021c610ca8565b34801561043657600080fd5b506001546001600160a01b03166101cf565b34801561045457600080fd5b5061046e6000546201000090046001600160a01b03161590565b60405190151581526020016101a6565b34801561048a57600080fd5b5060ca546101cf906001600160a01b031681565b3480156104aa57600080fd5b5061021c6104b9366004612156565b610d03565b61021c6104cc366004611f18565b610fb1565b3480156104dd57600080fd5b506104e6600081565b60405160ff90911681526020016101a6565b6000546201000090046001600160a01b03163314610529576040516311a8a1bb60e31b815260040160405180910390fd5b603480546001600160a01b0319166001600160a01b0392909216919091179055565b6000546201000090046001600160a01b0316331461057c576040516311a8a1bb60e31b815260040160405180910390fd5b60ce5460408051918252602082018390527fc4f6391de2c7e6a71a52545396978cad807d085036052c9a75273006156a682f910160405180910390a160ce55565b6000546201000090046001600160a01b031633146105ee576040516311a8a1bb60e31b815260040160405180910390fd5b60ca80546001600160a01b0319166001600160a01b0383169081179091556040517f8ff00ea0f06ea523b8f4b80a53bb86b4967c9909b4e354b47a83371249ad57f390600090a250565b60ca546001600160a01b0316331461066357604051632c4b07cf60e01b815260040160405180910390fd5b60026098540361068e5760405162461bcd60e51b8152600401610685906121a2565b60405180910390fd5b6002609855346000036106b757604051600162bcaa2760e01b0319815260040160405180910390fd5b600081815260cc6020526040812080543492906106d59084906121ef565b9091555050600081815260cc6020908152604091829020548251348152918201523381830152905182917fe01346f7c5b12b318c8239d37465281e572012b3f898085a3d2ed142ba2fa15d919081900360600190a2506001609855565b60ca546001600160a01b0316331461075d57604051632c4b07cf60e01b815260040160405180910390fd5b6001600160a01b03841661078457604051638676471760e01b815260040160405180910390fd5b600061078f87611025565b905060006107a08787878787611077565b9050603460009054906101000a90046001600160a01b03166001600160a01b0316639fa92f9d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108199190612207565b6001600160a01b031663fa31de018984846040518463ffffffff1660e01b815260040161084893929190612271565b600060405180830381600087803b15801561086257600080fd5b505af1158015610876573d6000803e3d6000fd5b505050507fa1d84c22c68d469068eaf6be2c49fd6f9120f7e4176ba1dc8027e5e1cdce1f9188838989898989886040516108b7989796959493929190612296565b60405180910390a15050505050505050565b6000546201000090046001600160a01b031633146108fa576040516311a8a1bb60e31b815260040160405180910390fd5b60025460000361091d57604051630e4b303f60e21b815260040160405180910390fd5b62093a806002544261092f9190612311565b1161094d576040516386d4b3f160e01b815260040160405180910390fd5b6001546001600160a01b031615610977576040516323295ef960e01b815260040160405180910390fd5b60015461098c906001600160a01b03166110bf565b565b6109973361112f565b6109ce5760405162461bcd60e51b8152602060048201526008602482015267217265706c69636160c01b6044820152606401610685565b83826109da82826111a4565b610a175760405162461bcd60e51b815260206004820152600e60248201526d10b932b6b7ba32903937baba32b960911b6044820152606401610685565b6000610a31610a2685836111ce565b62ffffff19166111f2565b90506000610a4462ffffff19831661120b565b90506000610a5762ffffff19841661123e565b90506000610a6a62ffffff19851661125e565b90506000610a7d62ffffff19861661128b565b9050610a8e62ffffff1986166112c9565b600085815260cb602052604090205563ffffffff8b16610ac38c8c63ffffffff1660209190911b67ffffffff00000000161790565b67ffffffffffffffff167f878c51ec082a65de8c0a9e68ec34c48c86f4d76ae6d693587eb4420611ae0f51868686868e604051610b04959493929190612328565b60405180910390a35050505050505050505050565b6000546201000090046001600160a01b03163314610b4a576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b038281169116148015610b6f57506001600160a01b03811615155b15610b8d576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b03808316620100009092041603610bc157604051634a2fb73f60e11b815260040160405180910390fd5b610bca81611312565b50565b6000546201000090046001600160a01b03163314610bfe576040516311a8a1bb60e31b815260040160405180910390fd5b63ffffffff909116600090815260666020526040902055565b600054610100900460ff16610c325760005460ff1615610c36565b303b155b610c525760405162461bcd60e51b815260040161068590612378565b600054610100900460ff16158015610c74576000805461ffff19166101011790555b610c7d82611360565b60cd805461ffff191661010017905561c35060ce558015610ca4576000805461ff00191690555b5050565b6001546001600160a01b03163314610cd3576040516311a7f27160e11b815260040160405180910390fd5b62093a8060025442610ce59190612311565b116109775760405163d39c12bb60e01b815260040160405180910390fd5b600260985403610d255760405162461bcd60e51b8152600401610685906121a2565b6002609855600083815260cb602052604090205480610d5757604051633099ed6360e01b815260040160405180910390fd5b6000610da0610a26600086868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506111ce9050565b9050610db162ffffff1982166112c9565b8214610dd057604051630824701d60e11b815260040160405180910390fd5b60ca5460405163465d45b560e11b81523360048201526001600160a01b0390911690638cba8b6a90602401602060405180830381865afa158015610e18573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e3c91906123c6565b610e5957604051630be95c7560e41b815260040160405180910390fd5b6000610e6a62ffffff19831661123e565b90506001600160a01b0381163b610e94576040516374a3bc6160e11b815260040160405180910390fd5b600086815260cc60208181526040808420805460cb8452918520859055929091529082905560ce549091905a610eca9190612311565b60cd54909150600090610f519085908490849061ffff166301a5d78760e11b8e610ef962ffffff198d1661125e565b610f0862ffffff198e1661128b565b604051602401610f1a939291906123e3565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526113f5565b506040805182151581523360208201529192508a917fb57ab1d3a3b4ddbf8823dfeefb7fe73d09cef77971f2111f6b21d00016b393f1910160405180910390a28215610fa157610fa13384611480565b5050600160985550505050505050565b600260985403610fd35760405162461bcd60e51b8152600401610685906121a2565b600260985534600003610ff957604051633f1fd4df60e21b815260040160405180910390fd5b600081815260cb60205260409020546106b7576040516353b0f6d960e01b815260040160405180910390fd5b63ffffffff8116600090815260666020526040902054806110725760405162461bcd60e51b81526020600482015260076024820152662172656d6f746560c81b6044820152606401610685565b919050565b6060600186868661108957600061108c565b60015b6040516110a59493929190879089908290602001612404565b604051602081830303815290604052905095945050505050565b600080546001600160a01b038381166201000081810262010000600160b01b031985161785556002859055600180546001600160a01b031916905560405193049190911692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35050565b603454604051635190bc5360e01b81526001600160a01b0383811660048301526000921690635190bc5390602401602060405180830381865afa15801561117a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061119e91906123c6565b92915050565b63ffffffff8216600090815260666020526040812054821480156111c757508115155b9392505050565b8151600090602084016111e964ffffffffff8516828461159e565b95945050505050565b600061119e611200836115e5565b62ffffff1916611617565b6000816001611222815b62ffffff19841690611672565b5061123662ffffff1985166001602061174b565b949350505050565b600081600161124c81611215565b5061123662ffffff19851660216118a7565b600081600161126c81611215565b5061128062ffffff198516603560016118b1565b600114949350505050565b606081600161129981611215565b5060006112a5856118e1565b90506111e96112be62ffffff19871660568460006118f6565b62ffffff1916611970565b6000806112df8360781c6001600160601b031690565b6001600160601b0316905060006112ff8460181c6001600160601b031690565b6001600160601b03169091209392505050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b600054610100900460ff1661137b5760005460ff161561137f565b303b155b61139b5760405162461bcd60e51b815260040161068590612378565b600054610100900460ff161580156113bd576000805461ffff19166101011790555b603480546001600160a01b0319166001600160a01b0384161790556113e06119b9565b8015610ca4576000805461ff00191690555050565b6000606060008060008661ffff1667ffffffffffffffff81111561141b5761141b61203a565b6040519080825280601f01601f191660200182016040528015611445576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115611466578692505b828152826000602083013e90999098509650505050505050565b804710156114d05760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610685565b6000826001600160a01b03168260405160006040518083038185875af1925050503d806000811461151d576040519150601f19603f3d011682016040523d82523d6000602084013e611522565b606091505b50509050806115995760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610685565b505050565b6000806115ab83856121ef565b90506040518111156115bb575060005b806000036115d05762ffffff199150506111c7565b5050606092831b9190911790911b1760181b90565b60006115f0826119e8565b1561160d576301000000600160d81b038216600160d81b1761119e565b62ffffff1961119e565b600061162282611a2b565b61166e5760405162461bcd60e51b815260206004820152601960248201527f56616c696469747920617373657274696f6e206661696c6564000000000000006044820152606401610685565b5090565b600061167e8383611a68565b61174457600061169d6116918560d81c90565b64ffffffffff16611a8b565b91505060006116b28464ffffffffff16611a8b565b6040517f5479706520617373657274696f6e206661696c65642e20476f7420307800000060208201526001600160b01b031960b086811b8216603d8401526c05c408af0e0cac6e8cac84060f609b1b604784015283901b16605482015290925060009150605e0160405160208183030381529060405290508060405162461bcd60e51b8152600401610685919061245a565b5090919050565b60008160ff16600003611760575060006111c7565b6117738460181c6001600160601b031690565b6001600160601b031661178960ff8416856121ef565b11156117ed576117d46117a58560781c6001600160601b031690565b6001600160601b03166117c18660181c6001600160601b031690565b6001600160601b0316858560ff16611b39565b60405162461bcd60e51b8152600401610685919061245a565b60208260ff1611156118675760405162461bcd60e51b815260206004820152603a60248201527f54797065644d656d566965772f696e646578202d20417474656d70746564207460448201527f6f20696e646578206d6f7265207468616e2033322062797465730000000000006064820152608401610685565b6008820260006118808660781c6001600160601b031690565b6001600160601b031690506000600160ff1b60001984011d91909501511695945050505050565b60006111c7838360145b60006118be82602061246d565b6118c9906008612490565b60ff166118d785858561174b565b901c949350505050565b600061119e62ffffff198316603660206118b1565b60008061190c8660781c6001600160601b031690565b6001600160601b0316905061192086611ba7565b8461192b87846121ef565b61193591906121ef565b11156119485762ffffff19915050611236565b61195285826121ef565b90506119668364ffffffffff16828661159e565b9695505050505050565b60606000806119888460181c6001600160601b031690565b6001600160601b0316905060405191508192506119a88483602001611be0565b508181016020016040529052919050565b600054610100900460ff166119e05760405162461bcd60e51b8152600401610685906124b9565b61098c611d37565b6000601882901c6001600160601b031660368111611a095750600092915050565b6000611a14846118e1565b905081611a228260566121ef565b14949350505050565b6000611a378260d81c90565b64ffffffffff1664ffffffffff03611a5157506000919050565b6000611a5c83611ba7565b60405110199392505050565b60008164ffffffffff16611a7c8460d81c90565b64ffffffffff16149392505050565b600080601f5b600f8160ff161115611ae0576000611aaa826008612490565b60ff1685901c9050611abb81611d67565b61ffff16841793508160ff16601014611ad657601084901b93505b5060001901611a91565b50600f5b60ff8160ff161015611b33576000611afd826008612490565b60ff1685901c9050611b0e81611d67565b61ffff16831792508160ff16600014611b2957601083901b92505b5060001901611ae4565b50915091565b60606000611b4686611a8b565b9150506000611b5486611a8b565b9150506000611b6286611a8b565b9150506000611b7086611a8b565b91505083838383604051602001611b8a9493929190612504565b604051602081830303815290604052945050505050949350505050565b6000611bbc8260181c6001600160601b031690565b611bcf8360781c6001600160601b031690565b016001600160601b03169050919050565b600062ffffff1980841603611c485760405162461bcd60e51b815260206004820152602860248201527f54797065644d656d566965772f636f7079546f202d204e756c6c20706f696e7460448201526732b9103232b932b360c11b6064820152608401610685565b611c5183611a2b565b611cb15760405162461bcd60e51b815260206004820152602b60248201527f54797065644d656d566965772f636f7079546f202d20496e76616c696420706f60448201526a34b73a32b9103232b932b360a91b6064820152608401610685565b6000611cc68460181c6001600160601b031690565b6001600160601b031690506000611ce68560781c6001600160601b031690565b6001600160601b031690506000604051905084811115611d065760206060fd5b8285848460045afa50611966611d1c8760d81c90565b64ffffffffff60601b606091821b168717901b841760181b90565b600054610100900460ff16611d5e5760405162461bcd60e51b8152600401610685906124b9565b61098c336110bf565b6000611d7960048360ff16901c611d99565b60ff1661ffff919091161760081b611d9082611d99565b60ff1617919050565b600060f08083179060ff82169003611db45750603092915050565b8060ff1660f103611dc85750603192915050565b8060ff1660f203611ddc5750603292915050565b8060ff1660f303611df05750603392915050565b8060ff1660f403611e045750603492915050565b8060ff1660f503611e185750603592915050565b8060ff1660f603611e2c5750603692915050565b8060ff1660f703611e405750603792915050565b8060ff1660f803611e545750603892915050565b8060ff1660f903611e685750603992915050565b8060ff1660fa03611e7c5750606192915050565b8060ff1660fb03611e905750606292915050565b8060ff1660fc03611ea45750606392915050565b8060ff1660fd03611eb85750606492915050565b8060ff1660fe03611ecc5750606592915050565b8060ff1660ff03611ee05750606692915050565b50919050565b6001600160a01b0381168114610bca57600080fd5b600060208284031215611f0d57600080fd5b81356111c781611ee6565b600060208284031215611f2a57600080fd5b5035919050565b803563ffffffff8116811461107257600080fd5b8015158114610bca57600080fd5b60008083601f840112611f6557600080fd5b50813567ffffffffffffffff811115611f7d57600080fd5b602083019150836020828501011115611f9557600080fd5b9250929050565b60008060008060008060a08789031215611fb557600080fd5b611fbe87611f31565b9550602087013594506040870135611fd581611ee6565b93506060870135611fe581611f45565b9250608087013567ffffffffffffffff81111561200157600080fd5b61200d89828a01611f53565b979a9699509497509295939492505050565b60006020828403121561203157600080fd5b6111c782611f31565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561206657600080fd5b61206f85611f31565b935061207d60208601611f31565b925060408501359150606085013567ffffffffffffffff808211156120a157600080fd5b818701915087601f8301126120b557600080fd5b8135818111156120c7576120c761203a565b604051601f8201601f19908116603f011681019083821181831017156120ef576120ef61203a565b816040528281528a602084870101111561210857600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561213f57600080fd5b61214883611f31565b946020939093013593505050565b60008060006040848603121561216b57600080fd5b83359250602084013567ffffffffffffffff81111561218957600080fd5b61219586828701611f53565b9497909650939450505050565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b634e487b7160e01b600052601160045260246000fd5b60008219821115612202576122026121d9565b500190565b60006020828403121561221957600080fd5b81516111c781611ee6565b6000815180845260005b8181101561224a5760208185018101518683018201520161222e565b8181111561225c576000602083870101525b50601f01601f19169290920160200192915050565b63ffffffff841681528260208201526060604082015260006111e96060830184612224565b63ffffffff8916815287602082015286604082015260018060a01b0386166060820152841515608082015260e060a08201528260e082015260006101008486828501376000838601820152601f8501601f19168301838103820160c085015261230181830186612224565b9c9b505050505050505050505050565b600082821015612323576123236121d9565b500390565b8581526001600160a01b0385166020820152831515604082015260a06060820181905260009061235a90830185612224565b828103608084015261236c8185612224565b98975050505050505050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6000602082840312156123d857600080fd5b81516111c781611f45565b83815282151560208201526060604082015260006111e96060830184612224565b600060ff60f81b808a60f81b1683528860018401526001600160601b03198860601b166021840152808760f81b166035840152508460368301528284605684013750600091016056019081529695505050505050565b6020815260006111c76020830184612224565b600060ff821660ff841680821015612487576124876121d9565b90039392505050565b600060ff821660ff84168160ff04811182151516156124b1576124b16121d9565b029392505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b7f54797065644d656d566965772f696e646578202d204f76657272616e20746865815274040ecd2caee5c40a6d8d2c6ca40d2e640c2e84060f605b1b60208201526001600160d01b031960d086811b821660358401526e040eed2e8d040d8cadccee8d04060f608b1b603b840181905286821b8316604a8501527f2e20417474656d7074656420746f20696e646578206174206f666673657420306050850152600f60fb1b607085015285821b83166071850152607784015283901b166086820152601760f91b608c8201526000608d820161196656fea2646970667358221220a3743adfd2578044e80798621928c179da65a195e921ed65fe3a79a972afc05b64736f6c634300080f0033";

type PromiseRouterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PromiseRouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PromiseRouter__factory extends ContractFactory {
  constructor(...args: PromiseRouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PromiseRouter> {
    return super.deploy(overrides || {}) as Promise<PromiseRouter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PromiseRouter {
    return super.attach(address) as PromiseRouter;
  }
  override connect(signer: Signer): PromiseRouter__factory {
    return super.connect(signer) as PromiseRouter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PromiseRouterInterface {
    return new utils.Interface(_abi) as PromiseRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PromiseRouter {
    return new Contract(address, _abi, signerOrProvider) as PromiseRouter;
  }
}
