/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  RootManager,
  RootManagerInterface,
} from "../../../contracts/messaging/RootManager";

const _abi = [
  {
    inputs: [],
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
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "connector",
        type: "address",
      },
    ],
    name: "ConnectorAdded",
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
        internalType: "address",
        name: "connector",
        type: "address",
      },
    ],
    name: "ConnectorRemoved",
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
        name: "outboundRoot",
        type: "bytes32",
      },
    ],
    name: "OutboundRootUpdated",
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
        name: "aggregate",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint32[]",
        name: "domains",
        type: "uint32[]",
      },
    ],
    name: "RootPropagated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "watcher",
        type: "address",
      },
    ],
    name: "WatcherAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "watcher",
        type: "address",
      },
    ],
    name: "WatcherRemoved",
    type: "event",
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
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_connector",
        type: "address",
      },
    ],
    name: "addConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_watcher",
        type: "address",
      },
    ],
    name: "addWatcher",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "connectors",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "domains",
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
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "outboundRoots",
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
    inputs: [],
    name: "propagate",
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
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "removeConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_watcher",
        type: "address",
      },
    ],
    name: "removeWatcher",
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
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_outbound",
        type: "bytes32",
      },
    ],
    name: "setOutboundRoot",
    outputs: [],
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
    name: "watchers",
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
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61007e565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6110df8061008d6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063b1f8100d116100a2578063c5b350df11610071578063c5b350df14610262578063d1851c921461026a578063d232c2201461027b578063e6f1208d1461028d578063ec2b1345146102a057600080fd5b8063b1f8100d1461020b578063b904670f1461021e578063c14bad4a14610231578063c54609121461025a57600080fd5b80636a42b8f8116100e95780636a42b8f8146101a2578063715018a6146101ab578063765a6095146101b357806378ffd0a1146101d35780638da5cb5b146101e657600080fd5b806324bdff8c1461011b5780633cf52ffb14610130578063596150d71461014757806366cf8fab1461017a575b600080fd5b61012e610129366004610d88565b6102b3565b005b6002545b6040519081526020015b60405180910390f35b61016a610155366004610d88565b60066020526000908152604090205460ff1681565b604051901515815260200161013e565b61018d610188366004610daa565b610399565b60405163ffffffff909116815260200161013e565b62093a80610134565b61012e6103d3565b6101346101c1366004610dd7565b60046020526000908152604090205481565b61012e6101e1366004610df2565b610492565b6000546001600160a01b03165b6040516001600160a01b03909116815260200161013e565b61012e610219366004610d88565b610545565b61012e61022c366004610e1c565b6105ed565b6101f361023f366004610dd7565b6003602052600090815260409020546001600160a01b031681565b61012e610770565b61012e61094e565b6001546001600160a01b03166101f3565b6000546001600160a01b03161561016a565b61012e61029b366004610dd7565b6109a9565b61012e6102ae366004610d88565b610bf2565b6000546001600160a01b031633146102de576040516311a8a1bb60e31b815260040160405180910390fd5b6001600160a01b03811660009081526006602052604090205460ff161561033e5760405162461bcd60e51b815260206004820152600f60248201526e30b63932b0b23c903bb0ba31b432b960891b60448201526064015b60405180910390fd5b6001600160a01b038116600081815260066020908152604091829020805460ff1916600117905590519182527fbd71030f437353231b6e5bedade573b1e0da5cb6e8bdde37c33c1fea986c29c791015b60405180910390a150565b600581815481106103a957600080fd5b9060005260206000209060089182820401919006600402915054906101000a900463ffffffff1681565b6000546001600160a01b031633146103fe576040516311a8a1bb60e31b815260040160405180910390fd5b60025460000361042157604051630e4b303f60e21b815260040160405180910390fd5b62093a80600254426104339190610e65565b11610451576040516386d4b3f160e01b815260040160405180910390fd5b6001546001600160a01b03161561047b576040516323295ef960e01b815260040160405180910390fd5b600154610490906001600160a01b0316610cbf565b565b63ffffffff821660009081526003602052604090205482906001600160a01b031633146104ee5760405162461bcd60e51b815260206004820152600a60248201526910b1b7b73732b1ba37b960b11b6044820152606401610335565b63ffffffff8316600081815260046020908152604091829020859055815192835282018490527fb2a03565e1fcba9e74dcf22ce00df9588c4903ede1bd443605ba8385dcd99e3891015b60405180910390a1505050565b6000546001600160a01b03163314610570576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b03828116911614801561059557506001600160a01b03811615155b156105b3576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b038083169116036105e157604051634a2fb73f60e11b815260040160405180910390fd5b6105ea81610d1e565b50565b6000546001600160a01b03163314610618576040516311a8a1bb60e31b815260040160405180910390fd5b6001600160a01b03811661065b5760405162461bcd60e51b815260206004820152600a60248201526910b1b7b73732b1ba37b960b11b6044820152606401610335565b63ffffffff82166000908152600360205260409020546001600160a01b0316156106b05760405162461bcd60e51b815260206004820152600660248201526565786973747360d01b6044820152606401610335565b63ffffffff828116600081815260036020908152604080832080546001600160a01b0319166001600160a01b0388169081179091556005805460018101825594527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db06008850401805460079095166004026101000a968702199094169585029590951790925581519283528201929092527fffe1880f946ecead1a35ac14f99c782cacaa440f95493896794dabacf8f95c54910160405180910390a15050565b600060046000600560008154811061078a5761078a610e7c565b90600052602060002090600891828204019190066004029054906101000a900463ffffffff1663ffffffff1663ffffffff168152602001908152602001600020546040516020016107dd91815260200190565b604051602081830303815290604052905060005b60055460ff821610156108c35760006003600060058460ff168154811061081a5761081a610e7c565b6000918252602080832060088304015463ffffffff6004600790941684026101000a9091041684528301939093526040918201902054905163104c8d4b60e31b81526001600160a01b03909116925082916382646a589161087d91879101610e92565b600060405180830381600087803b15801561089757600080fd5b505af11580156108ab573d6000803e3d6000fd5b505050505080806108bb90610ee7565b9150506107f1565b507ffbeca3b9b6e2936bbc4ecd9464e6a1092f67b16803cc78b202585d0a7fe0b39b6004600060056000815481106108fd576108fd610e7c565b90600052602060002090600891828204019190066004029054906101000a900463ffffffff1663ffffffff1663ffffffff16815260200190815260200160002054600560405161038e929190610f06565b6001546001600160a01b03163314610979576040516311a7f27160e11b815260040160405180910390fd5b62093a806002544261098b9190610e65565b1161047b5760405163d39c12bb60e01b815260040160405180910390fd5b3360009081526006602052604090205460ff166109f35760405162461bcd60e51b815260206004820152600860248201526710bbb0ba31b432b960c11b6044820152606401610335565b63ffffffff81166000908152600360205260409020546001600160a01b031680610a495760405162461bcd60e51b81526020600482015260076024820152662165786973747360c81b6044820152606401610335565b63ffffffff8216600090815260036020526040812080546001600160a01b031916905560058054610a7c90600190610e65565b81548110610a8c57610a8c610e7c565b60009182526020822060088204015460079091166004026101000a900463ffffffff1691505b60055460ff82161015610b66578363ffffffff1660058260ff1681548110610adc57610adc610e7c565b6000918252602090912060088204015460079091166004026101000a900463ffffffff1603610b54578160058260ff1681548110610b1c57610b1c610e7c565b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908363ffffffff160217905550610b66565b80610b5e81610ee7565b915050610ab2565b506005805480610b7857610b78611093565b600082815260209020600860001990920191820401805463ffffffff600460078516026101000a021916905590556040517fb576e68aeacfc9a4973bc2ac5c7ea7e6662b78809d33443fed101e04ceb7c9d490610538908590859063ffffffff9290921682526001600160a01b0316602082015260400190565b6000546001600160a01b03163314610c1d576040516311a8a1bb60e31b815260040160405180910390fd5b6001600160a01b03811660009081526006602052604090205460ff16610c6e5760405162461bcd60e51b815260206004820152600660248201526508595e1a5cdd60d21b6044820152606401610335565b6001600160a01b038116600081815260066020908152604091829020805460ff1916905590519182527ffa8eab6357bec870e7048c2413cbaa813236bb29ebac113541a76fef429e94dc910161038e565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b80356001600160a01b0381168114610d8357600080fd5b919050565b600060208284031215610d9a57600080fd5b610da382610d6c565b9392505050565b600060208284031215610dbc57600080fd5b5035919050565b803563ffffffff81168114610d8357600080fd5b600060208284031215610de957600080fd5b610da382610dc3565b60008060408385031215610e0557600080fd5b610e0e83610dc3565b946020939093013593505050565b60008060408385031215610e2f57600080fd5b610e3883610dc3565b9150610e4660208401610d6c565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b600082821015610e7757610e77610e4f565b500390565b634e487b7160e01b600052603260045260246000fd5b600060208083528351808285015260005b81811015610ebf57858101830151858201604001528201610ea3565b81811115610ed1576000604083870101525b50601f01601f1916929092016040019392505050565b600060ff821660ff8103610efd57610efd610e4f565b60010192915050565b6000604080830185845260208281860152818654610f28818590815260200190565b60008981526020812095509092505b81600782011015610fab57845463ffffffff808216855281861c81168686015281881c811688860152606082811c821690860152608082811c82169086015260a082811c82169086015260c082811c9091169085015260e090811c9084015260019094019361010090920191600801610f37565b93549381811015610fc75763ffffffff85168352918301916001015b81811015610fe25784841c63ffffffff168352918301916001015b81811015610ffd5784861c63ffffffff168352918301916001015b8181101561101a57606085901c63ffffffff168352918301916001015b8181101561103757608085901c63ffffffff168352918301916001015b818110156110545760a085901c63ffffffff168352918301916001015b818110156110715760c085901c63ffffffff168352918301916001015b818110156110855760e085901c8352918301915b509098975050505050505050565b634e487b7160e01b600052603160045260246000fdfea26469706673582212201c9ac65546da55b3fc6085d4d499be18110e70fa8d8c7514e77857cac8cd773464736f6c634300080f0033";

type RootManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RootManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RootManager__factory extends ContractFactory {
  constructor(...args: RootManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RootManager> {
    return super.deploy(overrides || {}) as Promise<RootManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RootManager {
    return super.attach(address) as RootManager;
  }
  override connect(signer: Signer): RootManager__factory {
    return super.connect(signer) as RootManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RootManagerInterface {
    return new utils.Interface(_abi) as RootManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RootManager {
    return new Contract(address, _abi, signerOrProvider) as RootManager;
  }
}
