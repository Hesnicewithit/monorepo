/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  RoutersFacet,
  RoutersFacetInterface,
} from "../../../../../contracts/core/connext/facets/RoutersFacet";

const _abi = [
  {
    inputs: [],
    name: "AssetLogic__handleIncomingAsset_nativeAssetNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetLogic__handleOutgoingAsset_notNative",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetLogic__transferAssetToContract_feeOnTransferNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__getAdoptedAsset_notWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__getApprovedCanonicalId_notWhitelisted",
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
    name: "RoutersFacet__acceptProposedRouterOwner_notElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__addLiquidityForRouter_amountIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__addLiquidityForRouter_badRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__addLiquidityForRouter_capReached",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__addLiquidityForRouter_routerEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__approveRouterForPortal_alreadyApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__approveRouterForPortal_notAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__onlyProposedRouterOwner_notProposedRouterOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__onlyProposedRouterOwner_notRouterOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__onlyRouterOwner_notRouterOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__proposeRouterOwner_badRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__proposeRouterOwner_notNewOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__removeRouterLiquidityFor_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__removeRouterLiquidity_amountIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__removeRouterLiquidity_insufficientFunds",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__removeRouterLiquidity_recipientEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__removeRouter_notAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__removeRouter_routerEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setLiquidityFeeNumerator_tooLarge",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setLiquidityFeeNumerator_tooSmall",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setMaxRoutersPerTransfer_invalidMaxRoutersPerTransfer",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setRouterRecipient_notNewRecipient",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setupRouter_alreadyAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__setupRouter_routerEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "RoutersFacet__unapproveRouterForPortal_notApproved",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidityFeeNumerator",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "LiquidityFeeNumeratorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "maxRoutersPerTransfer",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MaxRoutersPerTransferUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterApprovedForPortal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "local",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterLiquidityAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "local",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterLiquidityRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "prevOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "RouterOwnerAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "prevProposed",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newProposed",
        type: "address",
      },
    ],
    name: "RouterOwnerProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "prevRecipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newRecipient",
        type: "address",
      },
    ],
    name: "RouterRecipientSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RouterUnapprovedForPortal",
    type: "event",
  },
  {
    inputs: [],
    name: "LIQUIDITY_FEE_DENOMINATOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "LIQUIDITY_FEE_NUMERATOR",
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
        name: "router",
        type: "address",
      },
    ],
    name: "acceptProposedRouterOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_local",
        type: "address",
      },
    ],
    name: "addRouterLiquidity",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_local",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "addRouterLiquidityFor",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "approveRouterForPortal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "getProposedRouterOwner",
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
        name: "_router",
        type: "address",
      },
    ],
    name: "getProposedRouterOwnerTimestamp",
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
        name: "_router",
        type: "address",
      },
    ],
    name: "getRouterApproval",
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
        name: "_router",
        type: "address",
      },
    ],
    name: "getRouterApprovalForPortal",
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
        name: "_router",
        type: "address",
      },
    ],
    name: "getRouterOwner",
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
        name: "_router",
        type: "address",
      },
    ],
    name: "getRouterRecipient",
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
    name: "maxRoutersPerTransfer",
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
        name: "router",
        type: "address",
      },
      {
        internalType: "address",
        name: "proposed",
        type: "address",
      },
    ],
    name: "proposeRouterOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
    ],
    name: "removeRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_local",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
    ],
    name: "removeRouterLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_local",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "removeRouterLiquidityFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
    ],
    name: "routerBalances",
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
        name: "_numerator",
        type: "uint256",
      },
    ],
    name: "setLiquidityFeeNumerator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newMaxRouters",
        type: "uint256",
      },
    ],
    name: "setMaxRoutersPerTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "setRouterRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "setupRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "unapproveRouterForPortal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506120b2806100206000396000f3fe6080604052600436106101405760003560e01c806354064594116100b65780639bf6d8751161006f5780639bf6d875146103cf578063c6bf691d146103e4578063da3a892f1461041d578063e9160f3e1461043d578063eb492f441461045d578063ffaf3f1a1461047d57600080fd5b80635406459414610303578063582c78d2146103165780636ae0b1541461033657806382904716146103565780638770e68214610376578063899962a1146103af57600080fd5b8063197c139d11610108578063197c139d1461022a57806322a3c0071461024a5780632d3f9ef61461026a5780633b688da61461027d57806341258b5c146102ce5780634b72c5da146102ee57600080fd5b806304376ff4146101455780630951d6d81461016757806309935b8f1461018b57806312d57170146101ab5780631407093b146101e1575b600080fd5b34801561015157600080fd5b50610165610160366004611dd1565b61049d565b005b34801561017357600080fd5b506001545b6040519081526020015b60405180910390f35b34801561019757600080fd5b506101656101a6366004611dd1565b610595565b3480156101b757600080fd5b506101786101c6366004611dd1565b6001600160a01b03166000908152601f602052604090205490565b3480156101ed57600080fd5b5061021a6101fc366004611dd1565b6001600160a01b03166000908152601a602052604090205460ff1690565b6040519015158152602001610182565b34801561023657600080fd5b50610165610245366004611dee565b610753565b34801561025657600080fd5b50610165610265366004611e41565b6107f1565b610165610278366004611e7a565b610939565b34801561028957600080fd5b506102b6610298366004611dd1565b6001600160a01b039081166000908152601e60205260409020541690565b6040516001600160a01b039091168152602001610182565b3480156102da57600080fd5b506101786102e9366004611e41565b61099b565b3480156102fa57600080fd5b50612710610178565b610165610311366004611ebc565b6109c8565b34801561032257600080fd5b50610165610331366004611ee1565b610a29565b34801561034257600080fd5b50610165610351366004611dd1565b610b27565b34801561036257600080fd5b50610165610371366004611ee1565b610d88565b34801561038257600080fd5b5061021a610391366004611dd1565b6001600160a01b03166000908152601b602052604090205460ff1690565b3480156103bb57600080fd5b506101656103ca366004611e7a565b610e53565b3480156103db57600080fd5b50601054610178565b3480156103f057600080fd5b506102b66103ff366004611dd1565b6001600160a01b039081166000908152601c60205260409020541690565b34801561042957600080fd5b50610165610438366004611dd1565b610eac565b34801561044957600080fd5b506102b6610458366004611dd1565b610fed565b34801561046957600080fd5b50610165610478366004611efa565b61101f565b34801561048957600080fd5b50610165610498366004611e41565b61120c565b336104a661130e565b6001600160a01b0316141580156104e1575060033360009081526019602052604090205460ff1660038111156104de576104de611f2a565b14155b156104ff57604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b0381166000908152601b602052604090205460ff1661053857604051635d3abc4360e11b815260040160405180910390fd5b6001600160a01b0381166000818152601b6020908152604091829020805460ff19169055815192835233908301527f903522f09b29fa2102f5d8d8b181ac8edb4cfaf5d705076e4ab95117f6bb02ad91015b60405180910390a150565b6001600160a01b038082166000908152601e60205260409020548291168061061e576001600160a01b038083166000908152601d602052604090205416801580156105e85750336001600160a01b038416145b806105fb57506001600160a01b03811633145b6106185760405163f72e7a4760e01b815260040160405180910390fd5b50610647565b336001600160a01b0382161461064757604051630c2baa6160e41b815260040160405180910390fd5b600061065284610fed565b6001600160a01b0385166000908152601f602052604090205490915062093a809061067d9042611f56565b1161069b576040516376b2ad0760e01b815260040160405180910390fd5b6001600160a01b038085166000908152601e6020908152604080832054601d90925290912080546001600160a01b031916919092169081179091558015610703576001600160a01b0385166000908152601e6020526040902080546001600160a01b03191690555b6001600160a01b038086166000818152601f60205260408082208290555184841693861692917fd73892e8827a6025d74a01fca72a8e0d9e2c04080272e728f8861410c7d3c2d191a45050505050565b6020546001190161077757604051637ce54e2d60e11b815260040160405180910390fd5b600260205560235460ff16156107a057604051633ee5b89360e01b815260040160405180910390fd5b6107a981610fed565b6001600160a01b0316336001600160a01b0316146107da5760405163f3dc2d1960e01b815260040160405180910390fd5b6107e68484848461133c565b505060016020555050565b6001600160a01b038083166000908152601d6020526040902054839116801580156108245750336001600160a01b038316145b8061083757506001600160a01b03811633145b6108545760405163407c584960e01b815260040160405180910390fd5b826001600160a01b031661086785610fed565b6001600160a01b03160361088e57604051630e49614b60e31b815260040160405180910390fd5b6001600160a01b038085166000908152601e6020526040902054811690841681036108cc57604051631b2163f160e31b815260040160405180910390fd5b6001600160a01b038581166000818152601e6020908152604080832080546001600160a01b0319168a8716908117909155601f909252808320429055519093851692917fee0158b57adc03901d8b16c48cd10c33ca1283ee96c6e0d30f817ceba74dc4a191a45050505050565b6020546001190161095d57604051637ce54e2d60e11b815260040160405180910390fd5b600260205560235460ff161561098657604051633ee5b89360e01b815260040160405180910390fd5b6109918383836114b6565b5050600160205550565b6001600160a01b038083166000908152600e60209081526040808320938516835292905220545b92915050565b602054600119016109ec57604051637ce54e2d60e11b815260040160405180910390fd5b600260205560235460ff1615610a1557604051633ee5b89360e01b815260040160405180910390fd5b610a208282336114b6565b50506001602055565b33610a3261130e565b6001600160a01b031614158015610a6d575060033360009081526019602052604090205460ff166003811115610a6a57610a6a611f2a565b14155b15610a8b57604051637b32c26b60e01b815260040160405180910390fd5b6127106064610a9b82605f611f6d565b610aa59190611f8c565b821015610ac55760405163b74bfc8360e01b815260040160405180910390fd5b80821115610ae657604051637347083360e11b815260040160405180910390fd5b6001829055604080518381523360208201527feb6222a0b32216f861511e9aba88faa9549b749c2e0ad47df4e288565de5ceae910160405180910390a15050565b33610b3061130e565b6001600160a01b031614158015610b6b575060013360009081526019602052604090205460ff166003811115610b6857610b68611f2a565b14155b15610b89576040516360237f6b60e11b815260040160405180910390fd5b6001600160a01b038116610bb05760405163128df0bf60e21b815260040160405180910390fd5b6001600160a01b0381166000908152601a602052604090205460ff16610be957604051633fb36f5d60e01b815260040160405180910390fd5b6001600160a01b0381166000818152601a6020908152604091829020805460ff1916905590513381527fbee3e974bb6a6f44f20096ede047c191eef60322e65e4ee4bd3392230a8716d5910160405180910390a26001600160a01b038082166000908152601d6020526040902054168015610cc0576040516000906001600160a01b0383811691908516907fd73892e8827a6025d74a01fca72a8e0d9e2c04080272e728f8861410c7d3c2d1908490a46001600160a01b0382166000908152601d6020526040902080546001600160a01b03191690555b6001600160a01b038083166000908152601c6020526040902054168015610d43576040516000906001600160a01b0383811691908616907f31f32ebf07b0ac7fe173f7b7f3f943020d9bdc6dbfbdcdae01bd45ea78d953d7908490a46001600160a01b0383166000908152601c6020526040902080546001600160a01b03191690555b50506001600160a01b03166000908152601e6020908152604080832080546001600160a01b0319169055601f8252808320839055601b9091529020805460ff19169055565b33610d9161130e565b6001600160a01b031614158015610dcc575060033360009081526019602052604090205460ff166003811115610dc957610dc9611f2a565b14155b15610dea57604051637b32c26b60e01b815260040160405180910390fd5b801580610df8575060105481145b15610e1657604051630d9f9fad60e01b815260040160405180910390fd5b604080518281523360208201527fa7fe33308fb33ae6f3259e3c7c954ae3d6cd7f428cd17f653413c2cdc691666d910160405180910390a1601055565b60205460011901610e7757604051637ce54e2d60e11b815260040160405180910390fd5b600260205560235460ff1615610ea057604051633ee5b89360e01b815260040160405180910390fd5b6109918383833361133c565b33610eb561130e565b6001600160a01b031614158015610ef0575060033360009081526019602052604090205460ff166003811115610eed57610eed611f2a565b14155b15610f0e57604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b0381166000908152601a602052604090205460ff16158015610f3c5750610f3a6116c8565b155b15610f5a576040516375befccb60e01b815260040160405180910390fd5b6001600160a01b0381166000908152601b602052604090205460ff1615610f945760405163c896c2d960e01b815260040160405180910390fd5b6001600160a01b0381166000818152601b6020908152604091829020805460ff19166001179055815192835233908301527fc428fad4df337e27be8199c35a79ca103e8d00538a69b0f9701fb2bdf7d6c84c910161058a565b6001600160a01b038082166000908152601d602052604081205490911680156110165780611018565b825b9392505050565b3361102861130e565b6001600160a01b031614158015611063575060013360009081526019602052604090205460ff16600381111561106057611060611f2a565b14155b15611081576040516360237f6b60e11b815260040160405180910390fd5b6001600160a01b0383166110a85760405163e0239aa960e01b815260040160405180910390fd5b6001600160a01b0383166000908152601a602052604090205460ff16156110e25760405163201b2fd160e11b815260040160405180910390fd5b6001600160a01b0383166000818152601a6020908152604091829020805460ff1916600117905590513381527fbc68405e644da2aaf25623ce2199da82c6dfd2e1de102b400eba6a091704d4f4910160405180910390a26001600160a01b038216156111a0576001600160a01b038381166000818152601d602052604080822080546001600160a01b0319169487169485179055519091907fd73892e8827a6025d74a01fca72a8e0d9e2c04080272e728f8861410c7d3c2d1908390a45b6001600160a01b03811615611207576001600160a01b038381166000818152601c602052604080822080546001600160a01b0319169486169485179055519091907f31f32ebf07b0ac7fe173f7b7f3f943020d9bdc6dbfbdcdae01bd45ea78d953d7908390a45b505050565b6001600160a01b038083166000908152601d60205260409020548391168015801561123f5750336001600160a01b038316145b8061125257506001600160a01b03811633145b61126f5760405163407c584960e01b815260040160405180910390fd5b6001600160a01b038085166000908152601c6020526040902054811690841681036112ad57604051631b0043f560e31b815260040160405180910390fd5b6001600160a01b038581166000818152601c602052604080822080546001600160a01b03191689861690811790915590519093851692917f31f32ebf07b0ac7fe173f7b7f3f943020d9bdc6dbfbdcdae01bd45ea78d953d791a45050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6001600160a01b038181166000908152601c60205260409020541680156113635780611365565b825b90506001600160a01b03811661138e5760405163516101e760e11b815260040160405180910390fd5b846000036113af5760405163606ab7a160e11b815260040160405180910390fd5b60006113ba856116ef565b905060006113d08260200151836000015161170e565b6001600160a01b038086166000908152600e60209081526040808320938b16835292905220549091508781101561141a57604051630a1e6d4d60e01b815260040160405180910390fd5b6001600160a01b038086166000908152600e60209081526040808320938b16835292905220888203905561144f87858a611750565b604080516001600160a01b0386811682528981166020830152918101849052606081018a9052336080820152908616907ffacf3161e9675ca1ca84a16d238bc838c7e2084c302cf411d9da7ac0391f64869060a00160405180910390a25050505050505050565b6001600160a01b0381166114dd576040516339773cbf60e21b815260040160405180910390fd5b826000036114fe57604051632a24141960e01b815260040160405180910390fd5b60008061150a8461178f565b915091506115166116c8565b15801561153c57506001600160a01b0383166000908152601a602052604090205460ff16155b1561155a57604051631464c65f60e31b815260040160405180910390fd5b815160045463ffffffff918216911603611626576040516370a0823160e01b815230600482015260009086906001600160a01b038716906370a0823190602401602060405180830381865afa1580156115b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115db9190611fae565b6115e59190611fc7565b600083815260076020526040902054909150801580159061160557508082115b1561162357604051638ada373160e01b815260040160405180910390fd5b50505b6116308486611813565b6001600160a01b038084166000908152600e6020908152604080832093881683529290529081208054879290611667908490611fc7565b9091555050604080516001600160a01b03868116825260208201849052918101879052336060820152908416907fcc3100122c1752fe0f6bfa5503175bc53eb00b5f2d774e81efedcd2b10a6d24b9060800160405180910390a25050505050565b6000806116d361130e565b6001600160a01b031614806116ea575060155460ff165b905090565b60408051808201909152600080825260208201526109c2826000611854565b6000828260405160200161173292919091825263ffffffff16602082015260400190565b60405160208183030381529060405280519060200120905092915050565b8060000361175d57505050565b6001600160a01b03831661178457604051633a48ca7b60e11b815260040160405180910390fd5b61120783838361194c565b60408051808201909152600080825260208201526000806117af846116ef565b905060006117c58260200151836000015161170e565b90506117cf6119af565b1580156117eb575060008181526006602052604090205460ff16155b156118095760405163d7ad34f160e01b815260040160405180910390fd5b9094909350915050565b8060000361181f575050565b6001600160a01b03821661184657604051632a38b13360e01b815260040160405180910390fd5b61185082826119d4565b5050565b604080518082019091526000808252602082015260408051808201909152600080825260208201526001600160a01b0384166118915790506109c2565b506001600160a01b03831660009081526008830160209081526040918290208251808401909352805463ffffffff1680845260019091015491830191909152156118dc5790506109c2565b6118e68484611aed565b1561190c57600483015463ffffffff1681526001600160a01b0384166020820152611018565b506001600160a01b03831660009081526009830160209081526040918290208251808401909352805463ffffffff16835260010154908201529392505050565b6040516001600160a01b03831660248201526044810182905261120790849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611b23565b6000806119ba61130e565b6001600160a01b031614806116ea57505060175460ff1690565b806000036119e0575050565b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa158015611a27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a4b9190611fae565b9050611a5983333085611bfa565b6040516370a0823160e01b8152306004820152829082906001600160a01b038616906370a0823190602401602060405180830381865afa158015611aa1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ac59190611fae565b611acf9190611f56565b1461120757604051631a39afd960e11b815260040160405180910390fd5b6001600160a01b038216600090815260098201602052604081205463ffffffff1615611b1b575060006109c2565b50503b151590565b6000611b78826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611c389092919063ffffffff16565b8051909150156112075780806020019051810190611b969190611fdf565b6112075760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084015b60405180910390fd5b6040516001600160a01b0380851660248301528316604482015260648101829052611c329085906323b872dd60e01b90608401611978565b50505050565b6060611c478484600085611c4f565b949350505050565b606082471015611cb05760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401611bf1565b6001600160a01b0385163b611d075760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611bf1565b600080866001600160a01b03168587604051611d23919061202d565b60006040518083038185875af1925050503d8060008114611d60576040519150601f19603f3d011682016040523d82523d6000602084013e611d65565b606091505b5091509150611d75828286611d80565b979650505050505050565b60608315611d8f575081611018565b825115611d9f5782518084602001fd5b8160405162461bcd60e51b8152600401611bf19190612049565b6001600160a01b0381168114611dce57600080fd5b50565b600060208284031215611de357600080fd5b813561101881611db9565b60008060008060808587031215611e0457600080fd5b843593506020850135611e1681611db9565b92506040850135611e2681611db9565b91506060850135611e3681611db9565b939692955090935050565b60008060408385031215611e5457600080fd5b8235611e5f81611db9565b91506020830135611e6f81611db9565b809150509250929050565b600080600060608486031215611e8f57600080fd5b833592506020840135611ea181611db9565b91506040840135611eb181611db9565b809150509250925092565b60008060408385031215611ecf57600080fd5b823591506020830135611e6f81611db9565b600060208284031215611ef357600080fd5b5035919050565b600080600060608486031215611f0f57600080fd5b8335611f1a81611db9565b92506020840135611ea181611db9565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082821015611f6857611f68611f40565b500390565b6000816000190483118215151615611f8757611f87611f40565b500290565b600082611fa957634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215611fc057600080fd5b5051919050565b60008219821115611fda57611fda611f40565b500190565b600060208284031215611ff157600080fd5b8151801515811461101857600080fd5b60005b8381101561201c578181015183820152602001612004565b83811115611c325750506000910152565b6000825161203f818460208701612001565b9190910192915050565b6020815260008251806020840152612068816040850160208701612001565b601f01601f1916919091016040019291505056fea2646970667358221220143c6ab9673a141faa83e9da214d94541c9c6b271bbb13d1ef73abfc4ae56aad64736f6c634300080f0033";

type RoutersFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RoutersFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RoutersFacet__factory extends ContractFactory {
  constructor(...args: RoutersFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RoutersFacet> {
    return super.deploy(overrides || {}) as Promise<RoutersFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RoutersFacet {
    return super.attach(address) as RoutersFacet;
  }
  override connect(signer: Signer): RoutersFacet__factory {
    return super.connect(signer) as RoutersFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RoutersFacetInterface {
    return new utils.Interface(_abi) as RoutersFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RoutersFacet {
    return new Contract(address, _abi, signerOrProvider) as RoutersFacet;
  }
}
