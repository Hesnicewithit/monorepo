/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  TokenFacet,
  TokenFacetInterface,
} from "../../../../../contracts/core/connext/facets/TokenFacet";

const _abi = [
  {
    inputs: [],
    name: "BaseConnextFacet__getAdoptedAsset_notWhitelisted",
    type: "error",
  },
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
    name: "BaseConnextFacet__onlyOwnerOrAdmin_notOwnerOrAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrRouter_notOwnerOrRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrWatcher_notOwnerOrWatcher",
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
    inputs: [],
    name: "TokenFacet__addAssetId_alreadyAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenFacet__addAssetId_nativeAsset",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenFacet__removeAssetId_notAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenFacet__setTokenRegistry_invalidTokenRegistry",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "canonicalId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "adoptedAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "localAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "AssetAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "AssetRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "canonicalId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "swapPool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "StableSwapAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldTokenRegistry",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newTokenRegistry",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "TokenRegistryUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_stableSwapPool",
        type: "address",
      },
    ],
    name: "addStableSwapPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_adopted",
        type: "address",
      },
    ],
    name: "adoptedToCanonical",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
    ],
    name: "adoptedToLocalPools",
    outputs: [
      {
        internalType: "contract IStableSwap",
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
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
    ],
    name: "adoptedToLocalPools",
    outputs: [
      {
        internalType: "contract IStableSwap",
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
        name: "_key",
        type: "bytes32",
      },
    ],
    name: "approvedAssets",
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
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
    ],
    name: "approvedAssets",
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
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
    ],
    name: "canonicalToAdopted",
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
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
    ],
    name: "canonicalToAdopted",
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
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_adoptedAssetId",
        type: "address",
      },
    ],
    name: "removeAssetId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_adoptedAssetId",
        type: "address",
      },
    ],
    name: "removeAssetId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenRegistry",
        type: "address",
      },
    ],
    name: "setTokenRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_adoptedAssetId",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stableSwapPool",
        type: "address",
      },
    ],
    name: "setupAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenRegistry",
    outputs: [
      {
        internalType: "contract ITokenRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ab1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063600620911161008c578063bd7e1e2e11610066578063bd7e1e2e14610233578063bd8671a71461025c578063e9a25ab41461026f578063ea7a904d1461028257600080fd5b806360062091146101855780639d23c4c714610207578063ae8bc0de1461022057600080fd5b80631506e463146100d45780632c1999d0146100e957806335a5af92146101195780633c84a5121461012c578063569d29e41461013f57806357bd0a3214610152575b600080fd5b6100e76100e236600461093f565b610295565b005b6100fc6100f7366004610977565b6102e2565b6040516001600160a01b0390911681526020015b60405180910390f35b6100e7610127366004610990565b6102f3565b6100e761013a36600461093f565b6103e2565b6100e761014d3660046109ad565b610429565b610175610160366004610977565b60009081526006602052604090205460ff1690565b6040519015158152602001610110565b6101e6610193366004610990565b6040805180820190915260008082526020820152506040805180820182526001600160a01b03909216600081815260076020818152938220805463ffffffff168652929091528252600101549082015290565b60408051825163ffffffff1681526020928301519281019290925201610110565b60045464010000000090046001600160a01b03166100fc565b61017561022e3660046109f7565b61065c565b6100fc610241366004610977565b6000908152600560205260409020546001600160a01b031690565b6100fc61026a3660046109f7565b61066a565b6100fc61027d3660046109f7565b610685565b6100e7610290366004610a13565b610693565b3361029e6106d1565b6001600160a01b0316146102c5576040516314e74a2560e21b815260040160405180910390fd5b60006102d0836106ff565b90506102dd83838361071a565b505050565b60006102ed826107af565b92915050565b336102fc6106d1565b6001600160a01b031614610323576040516314e74a2560e21b815260040160405180910390fd5b6004546001600160a01b03640100000000909104811690821681148061035157506001600160a01b0382163b155b1561036f5760405163031972cb60e41b815260040160405180910390fd5b60048054640100000000600160c01b0319166401000000006001600160a01b03858116918202929092179092556040805191841682526020820192909252338183015290517fb930976fe3861b681d9ff47fd2a0cd7631c018a3e76b25a945098e35e59c8ad69181900360600190a15050565b336103eb6106d1565b6001600160a01b031614610412576040516314e74a2560e21b815260040160405180910390fd5b600061041d836106ff565b90506102dd81836107e5565b336104326106d1565b6001600160a01b031614610459576040516314e74a2560e21b815260040160405180910390fd5b6001600160a01b0382166104805760405163c1380cb560e01b815260040160405180910390fd5b600061048b846106ff565b60008181526006602052604090205490915060ff16156104be5760405163bfa2bf9b60e01b815260040160405180910390fd5b6000818152600660209081526040909120805460ff191660011790556104e690850185610a38565b6001600160a01b038481166000818152600760209081526040808320805463ffffffff191663ffffffff9790971696909617865589820180356001909701969096558683526008909152812080546001600160a01b03191690921790915560045490926401000000009091049091169063589b3c64906105669088610a38565b6040516001600160e01b031960e084901b16815263ffffffff91909116600482015260208801356024820152604401602060405180830381865afa1580156105b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d69190610a5e565b90506105e56020860186610a38565b63ffffffff168560200135837f0c58c78506e2d526f5ccdba28119c9ca3b5ce48e1462e0e19bc39232db11c632878533604051610642939291906001600160a01b0393841681529183166020830152909116604082015260600190565b60405180910390a461065585848461071a565b5050505050565b60006102ed610160836106ff565b60006102ed602083018035906106809085610a38565b6108b2565b60006102ed610241836106ff565b3361069c6106d1565b6001600160a01b0316146106c3576040516314e74a2560e21b815260040160405180910390fd5b6106cd82826107e5565b5050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b60006102ed602083018035906107159085610a38565b6108cd565b600081815260056020908152604090912080546001600160a01b0319166001600160a01b03851617905561075090840184610a38565b63ffffffff168360200135827f16285b1cf634d546d51fefe55f6e63e5edf970d2a3d2bd50b55a8cfad25e8b5685336040516107a29291906001600160a01b0392831681529116602082015260400190565b60405180910390a4505050565b6000818152600860205260408120546001600160a01b0316806102ed57604051634cdfde3760e11b815260040160405180910390fd5b60008281526006602052604090205460ff1661081457604051631c999e7d60e11b815260040160405180910390fd5b6000828152600660209081526040808320805460ff191690556005825280832080546001600160a01b03199081169091556001600160a01b038516845260078352818420805463ffffffff1916815560010184905585845260088352928190208054909316909255905133815283917f9d181adb70e733f5235f839c1eed929407ea8526e41d01f49b9fef703e78dddf910160405180910390a25050565b60006108c66108c184846108cd565b6107af565b9392505050565b600082826040516020016108f192919091825263ffffffff16602082015260400190565b60405160208183030381529060405280519060200120905092915050565b60006040828403121561092157600080fd5b50919050565b6001600160a01b038116811461093c57600080fd5b50565b6000806060838503121561095257600080fd5b61095c848461090f565b9150604083013561096c81610927565b809150509250929050565b60006020828403121561098957600080fd5b5035919050565b6000602082840312156109a257600080fd5b81356108c681610927565b6000806000608084860312156109c257600080fd5b6109cc858561090f565b925060408401356109dc81610927565b915060608401356109ec81610927565b809150509250925092565b600060408284031215610a0957600080fd5b6108c6838361090f565b60008060408385031215610a2657600080fd5b82359150602083013561096c81610927565b600060208284031215610a4a57600080fd5b813563ffffffff811681146108c657600080fd5b600060208284031215610a7057600080fd5b81516108c68161092756fea26469706673582212208b3b8c2bcd8642300b9d4c2374595eaf2d13e8312e135c0997f062d848961d4064736f6c634300080f0033";

type TokenFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenFacet__factory extends ContractFactory {
  constructor(...args: TokenFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenFacet> {
    return super.deploy(overrides || {}) as Promise<TokenFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TokenFacet {
    return super.attach(address) as TokenFacet;
  }
  override connect(signer: Signer): TokenFacet__factory {
    return super.connect(signer) as TokenFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenFacetInterface {
    return new utils.Interface(_abi) as TokenFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenFacet {
    return new Contract(address, _abi, signerOrProvider) as TokenFacet;
  }
}
