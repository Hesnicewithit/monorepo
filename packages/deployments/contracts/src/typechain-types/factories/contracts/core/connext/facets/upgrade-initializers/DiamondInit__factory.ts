/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  DiamondInit,
  DiamondInitInterface,
} from "../../../../../../contracts/core/connext/facets/upgrade-initializers/DiamondInit";

const _abi = [
  {
    inputs: [],
    name: "BaseConnextFacet__nonReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyBridgeRouter_notBridgeRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__whenNotPaused_paused",
    type: "error",
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
        name: "_tokenRegistry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_relayerFeeRouter",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_promiseRouter",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_acceptanceDelay",
        type: "uint256",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611222806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063d50b5fab14610030575b600080fd5b61004361003e3660046102ff565b610045565b005b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131f6020527f699d9daa71b280d05a152715774afa0a81a312594b2d731d6b0b2552b7d6f69f8054600160ff1991821681179092557fa90a0781ecf976bd3956b611ce5c1010e0b72a277b086ef69c464670c05e8f1780548216831790557f65d510a5d8f7ef134ec444f7f34ee808c8eeb5177cdfd16be0c40fe1ab433695805482168317905563286b971b60e01b60009081527f0776c8a3c3f40ad82516fe93595c25e54d866a6f9df80e22659bf8367382d004805490921690921790557fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1322829055547fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c9060ff1661025057610179610258565b6000805460ff191660019081179091556022556005805463ffffffff8816600160a01b0263ffffffff60a01b19909116179055600280546001600160a01b038087166001600160a01b031992831617909255600380549286169290911691909117905560405130906101ea906102da565b6001600160a01b039091168152602001604051809103906000f080158015610216573d6000803e3d6000fd5b50600580546001600160a01b03199081166001600160a01b03938416178255600680549091169288169290921790915561270b6001556011555b505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c600401546001600160a01b031633146102d85760405162461bcd60e51b815260206004820152601b60248201527f4c69624469616d6f6e643a2021636f6e7472616374206f776e65720000000000604482015260640160405180910390fd5b565b610e808061036d83390190565b6001600160a01b03811681146102fc57600080fd5b50565b600080600080600060a0868803121561031757600080fd5b853563ffffffff8116811461032b57600080fd5b9450602086013561033b816102e7565b9350604086013561034b816102e7565b9250606086013561035b816102e7565b94979396509194608001359291505056fe60a0604052620186a06000556001805461ffff191661010017905534801561002657600080fd5b50604051610e80380380610e8083398101604081905261004591610056565b6001600160a01b0316608052610086565b60006020828403121561006857600080fd5b81516001600160a01b038116811461007f57600080fd5b9392505050565b608051610dda6100a66000396000818160c0015260f90152610dda6000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80637742a0061461005157806391cd8ca81461007b5780639367427c14610092578063975740c6146100b3575b600080fd5b61006461005f366004610b14565b6100ea565b604051610072929190610c43565b60405180910390f35b61008460005481565b604051908152602001610072565b6001546100a09061ffff1681565b60405161ffff9091168152602001610072565b6040516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152602001610072565b60006060336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101565760405162461bcd60e51b81526020600482015260086024820152670858dbdb9b995e1d60c21b60448201526064015b60405180910390fd5b6000606061017185604001516001600160a01b03163b151590565b6102155761019360008660800151876040015188606001518960200151610346565b84606001516001600160a01b031685604001516001600160a01b031686600001517fb479e25bfc12b3463deec2da7585cf09c28bb1dbe4d6ea491ee6a2811a2002f4886080015189602001518a60a001518b60c001518c60e00151898b6040516102039796959493929190610c5e565b60405180910390a49092509050915091565b60208501511580159061024d5761023686608001518760400151600061036f565b61024d8660800151876040015188602001516104bc565b600080545a61025c9190610cdc565b905061029b8760400151826000600160009054906101000a900461ffff166102968c602001518d60c001518e60a001518f60e00151610574565b6105fb565b9094509250836102c2576102c282886080015189604001518a606001518b60200151610346565b86606001516001600160a01b031687604001516001600160a01b031688600001517fb479e25bfc12b3463deec2da7585cf09c28bb1dbe4d6ea491ee6a2811a2002f48a608001518b602001518c60a001518d60c001518e60e001518b8d6040516103329796959493929190610c5e565b60405180910390a450919350915050915091565b801561036857841561035d5761035d848483610686565b610368848383610792565b5050505050565b8015806103e95750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156103c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e79190610cf3565b155b6104545760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b606482015260840161014d565b6040516001600160a01b0383166024820152604481018290526104b790849063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526107c2565b505050565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa15801561050d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105319190610cf3565b61053b9190610d0c565b6040516001600160a01b03851660248201526044810182905290915061056e90859063095ea7b360e01b90606401610480565b50505050565b606060008585856040516020016105bd9392919092835260e09190911b6001600160e01b031916602083015260601b6bffffffffffffffffffffffff1916602482015260380190565b604051602081830303815290604052905082816040516020016105e1929190610d24565b604051602081830303815290604052915050949350505050565b6000606060008060008661ffff1667ffffffffffffffff81111561062157610621610a17565b6040519080825280601f01601f19166020018201604052801561064b576020820181803683370190505b5090506000808751602089018b8e8ef191503d92508683111561066c578692505b828152826000602083013e90999098509650505050505050565b604051636eb1769f60e11b81523060048201526001600160a01b0383811660248301526000919085169063dd62ed3e90604401602060405180830381865afa1580156106d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106fa9190610cf3565b90508181101561075e5760405162461bcd60e51b815260206004820152602960248201527f5361666545524332303a2064656372656173656420616c6c6f77616e63652062604482015268656c6f77207a65726f60b81b606482015260840161014d565b6040516001600160a01b0384166024820152828203604482018190529061036890869063095ea7b360e01b90606401610480565b6040516001600160a01b0383166024820152604481018290526104b790849063a9059cbb60e01b90606401610480565b6000610817826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166108949092919063ffffffff16565b8051909150156104b757808060200190518101906108359190610d53565b6104b75760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161014d565b60606108a384846000856108ad565b90505b9392505050565b60608247101561090e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161014d565b6001600160a01b0385163b6109655760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161014d565b600080866001600160a01b031685876040516109819190610d75565b60006040518083038185875af1925050503d80600081146109be576040519150601f19603f3d011682016040523d82523d6000602084013e6109c3565b606091505b50915091506109d38282866109de565b979650505050505050565b606083156109ed5750816108a6565b8251156109fd5782518084602001fd5b8160405162461bcd60e51b815260040161014d9190610d91565b634e487b7160e01b600052604160045260246000fd5b604051610100810167ffffffffffffffff81118282101715610a5157610a51610a17565b60405290565b80356001600160a01b0381168114610a6e57600080fd5b919050565b803563ffffffff81168114610a6e57600080fd5b600082601f830112610a9857600080fd5b813567ffffffffffffffff80821115610ab357610ab3610a17565b604051601f8301601f19908116603f01168101908282118183101715610adb57610adb610a17565b81604052838152866020858801011115610af457600080fd5b836020870160208301376000602085830101528094505050505092915050565b600060208284031215610b2657600080fd5b813567ffffffffffffffff80821115610b3e57600080fd5b908301906101008286031215610b5357600080fd5b610b5b610a2d565b8235815260208301356020820152610b7560408401610a57565b6040820152610b8660608401610a57565b6060820152610b9760808401610a57565b6080820152610ba860a08401610a57565b60a0820152610bb960c08401610a73565b60c082015260e083013582811115610bd057600080fd5b610bdc87828601610a87565b60e08301525095945050505050565b60005b83811015610c06578181015183820152602001610bee565b8381111561056e5750506000910152565b60008151808452610c2f816020860160208601610beb565b601f01601f19169290920160200192915050565b82151581526040602082015260006108a36040830184610c17565b6001600160a01b038881168252602082018890528616604082015263ffffffff8516606082015260e060808201819052600090610c9d90830186610c17565b82810360a0840152610caf8186610c17565b91505082151560c083015298975050505050505050565b634e487b7160e01b600052601160045260246000fd5b600082821015610cee57610cee610cc6565b500390565b600060208284031215610d0557600080fd5b5051919050565b60008219821115610d1f57610d1f610cc6565b500190565b60008351610d36818460208801610beb565b835190830190610d4a818360208801610beb565b01949350505050565b600060208284031215610d6557600080fd5b815180151581146108a657600080fd5b60008251610d87818460208701610beb565b9190910192915050565b6020815260006108a66020830184610c1756fea2646970667358221220d947793d115e0ee405ea9f0f2dd42155d50fb7f42d01b7b9fe817c700382a03664736f6c634300080f0033a2646970667358221220da323897e80d4aeb0f48fc4b9a34d95e8dc03805825df3cfafb083fa0ba57f7b64736f6c634300080f0033";

type DiamondInitConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiamondInitConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DiamondInit__factory extends ContractFactory {
  constructor(...args: DiamondInitConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DiamondInit> {
    return super.deploy(overrides || {}) as Promise<DiamondInit>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DiamondInit {
    return super.attach(address) as DiamondInit;
  }
  override connect(signer: Signer): DiamondInit__factory {
    return super.connect(signer) as DiamondInit__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiamondInitInterface {
    return new utils.Interface(_abi) as DiamondInitInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiamondInit {
    return new Contract(address, _abi, signerOrProvider) as DiamondInit;
  }
}
