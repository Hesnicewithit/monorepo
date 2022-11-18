/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  SwapAdminFacet,
  SwapAdminFacetInterface,
} from "../../../../../contracts/core/connext/facets/SwapAdminFacet";

const _abi = [
  {
    inputs: [],
    name: "AssetLogic__handleOutgoingAsset_notNative",
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
    name: "BaseConnextFacet__nonXCallReentrant_reentrantCall",
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
    name: "SwapAdminFacet__initializeSwap_aExceedMax",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_adminFeeExceedMax",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_alreadyInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_decimalsMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_duplicateTokens",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_failedInitLpTokenClone",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_feeExceedMax",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_invalidPooledTokens",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_tokenDecimalsExceedMax",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_zeroTokenAddress",
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
        indexed: false,
        internalType: "uint256",
        name: "newAdminFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "AdminFeesSet",
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
    name: "AdminFeesWithdrawn",
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
        internalType: "uint256",
        name: "futureA",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "futureTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RampAStarted",
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
    name: "RampAStopped",
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
        internalType: "uint256",
        name: "newSwapFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "SwapFeesSet",
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
        components: [
          {
            internalType: "bytes32",
            name: "key",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "initialA",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "futureA",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initialATime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "futureATime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "swapFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "adminFee",
            type: "uint256",
          },
          {
            internalType: "contract LPToken",
            name: "lpToken",
            type: "address",
          },
          {
            internalType: "contract IERC20[]",
            name: "pooledTokens",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "tokenPrecisionMultipliers",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "balances",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "adminFees",
            type: "uint256[]",
          },
        ],
        indexed: false,
        internalType: "struct SwapUtils.Swap",
        name: "swap",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "SwapInitialized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
      {
        internalType: "contract IERC20[]",
        name: "_pooledTokens",
        type: "address[]",
      },
      {
        internalType: "uint8[]",
        name: "decimals",
        type: "uint8[]",
      },
      {
        internalType: "string",
        name: "lpTokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "lpTokenSymbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_adminFee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "lpTokenTargetAddress",
        type: "address",
      },
    ],
    name: "initializeSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "futureA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "futureTime",
        type: "uint256",
      },
    ],
    name: "rampA",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "newAdminFee",
        type: "uint256",
      },
    ],
    name: "setSwapAdminFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "newSwapFee",
        type: "uint256",
      },
    ],
    name: "setSwapFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "stopRampA",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "withdrawSwapAdminFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611bf1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631963e4261461006757806343be5eaf1461007c57806347555ef61461008f57806372a30e08146100a25780639c8eab97146100b5578063a1a23c29146100c8575b600080fd5b61007a6100753660046114c6565b6100db565b005b61007a61008a3660046114f2565b61019d565b61007a61009d3660046116f1565b610256565b61007a6100b03660046117d6565b6108cf565b61007a6100c33660046114f2565b610980565b61007a6100d63660046117d6565b610a31565b336100e4610b11565b6001600160a01b03161415801561011f57506003336000908152601b602052604090205460ff16600381111561011c5761011c6117ef565b14155b1561013d57604051637b32c26b60e01b815260040160405180910390fd5b6000838152601f60205260409020610156908383610b2d565b60408051838152602081018390523381830152905184917f58e6fbecdb1a94225cf82c6b317a771aa08c9ab6552702b819bcd84ba8e8312f919081900360600190a2505050565b336101a6610b11565b6001600160a01b0316141580156101e157506003336000908152601b602052604090205460ff1660038111156101de576101de6117ef565b14155b156101ff57604051637b32c26b60e01b815260040160405180910390fd5b6000828152601f602052604090206102179082610dba565b6040805182815233602082015283917f6d9b91502dc11e7c127e8e2d114c1f8026647ecb6b987c1baaadb706b5eb317691015b60405180910390a25050565b3361025f610b11565b6001600160a01b03161415801561029a57506003336000908152601b602052604090205460ff166003811115610297576102976117ef565b14155b156102b857604051637b32c26b60e01b815260040160405180910390fd5b6000898152601f6020526040902060080154156102e8576040516376a1368960e11b815260040160405180910390fd5b600188511115806102fa575060208851115b156103185760405163502ef3af60e01b815260040160405180910390fd5b87518751811461033b5760405163d6e48e5d60e01b815260040160405180910390fd5b6000885167ffffffffffffffff81111561035757610357611514565b604051908082528060200260200182016040528015610380578160200160208202803683370190505b50905060005b8281101561059557801561044e5760008c815260208052604081208c519091908d90849081106103b8576103b8611805565b6020908102919091018101516001600160a01b031682528101919091526040016000205460ff1615158061043057508a81815181106103f9576103f9611805565b60200260200101516001600160a01b03168b60008151811061041d5761041d611805565b60200260200101516001600160a01b0316145b1561044e57604051632fa9e93b60e11b815260040160405180910390fd5b60006001600160a01b03168b828151811061046b5761046b611805565b60200260200101516001600160a01b03160361049a57604051634ce187ad60e11b815260040160405180910390fd5b601260ff168a82815181106104b1576104b1611805565b602002602001015160ff1611156104db57604051637d4ada4560e11b815260040160405180910390fd5b8981815181106104ed576104ed611805565b602002602001015160126105019190611831565b61050f9060ff16600a61192e565b82828151811061052157610521611805565b60200260200101818152505080600060200160008e815260200190815260200160002060008d848151811061055857610558611805565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191660ff92909216919091179055600101610386565b50620f424086106105b9576040516306aedbfd60e01b815260040160405180910390fd5b6305f5e10085106105dd57604051634fc2217d60e11b815260040160405180910390fd5b6402540be4008410610602576040516384b9a37f60e01b815260040160405180910390fd5b600061060d84610e32565b60405163266c45bb60e11b81529091506001600160a01b03821690634cd88b769061063e908c908c9060040161198a565b6020604051808303816000875af115801561065d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068191906119b8565b61069e5760405163276cd8b960e01b815260040160405180910390fd5b60006040518061018001604052808e815260200160648a6106bf91906119da565b81526020016106cf60648b6119da565b81526020016000815260200160008152602001888152602001878152602001836001600160a01b031681526020018d81526020018481526020018d5167ffffffffffffffff81111561072357610723611514565b60405190808252806020026020018201604052801561074c578160200160208202803683370190505b5081526020018d5167ffffffffffffffff81111561076c5761076c611514565b604051908082528060200260200182016040528015610795578160200160208202803683370190505b50905260008e8152601f602090815260409182902083518155838201516001820155918301516002830155606083015160038301556080830151600483015560a0830151600583015560c0830151600683015560e08301516007830180546001600160a01b0319166001600160a01b039092169190911790556101008301518051939450849361082b9260088501920190611411565b506101208201518051610848916009840191602090910190611476565b50610140820151805161086591600a840191602090910190611476565b50610160820151805161088291600b840191602090910190611476565b509050508c7f4c5d883e86afc82dc0f918cfc013e437aa458ec41475884857ba8daec50d24cb82336040516108b8929190611a65565b60405180910390a250505050505050505050505050565b336108d8610b11565b6001600160a01b03161415801561091357506003336000908152601b602052604090205460ff166003811115610910576109106117ef565b14155b1561093157604051637b32c26b60e01b815260040160405180910390fd5b6000818152601f6020526040902061094890610ecc565b60405133815281907f86ce75679135e270f845c02bcb49ef6fb50464cb322dcc30096cccd13d2597df9060200160405180910390a250565b33610989610b11565b6001600160a01b0316141580156109c457506003336000908152601b602052604090205460ff1660038111156109c1576109c16117ef565b14155b156109e257604051637b32c26b60e01b815260040160405180910390fd5b6000828152601f602052604090206109fa9082610f8d565b6040805182815233602082015283917f46eefbb271e4103912d3c227656de8afc0849f4c8cba4b2a1e38b660361e0463910161024a565b33610a3a610b11565b6001600160a01b031614158015610a7557506003336000908152601b602052604090205460ff166003811115610a7257610a726117ef565b14155b15610a9357604051637b32c26b60e01b815260040160405180910390fd5b601d5460011901610ab757604051637ce54e2d60e11b815260040160405180910390fd5b6002601d556000818152601f60205260409020610ad49033611006565b60405133815281907f2e6c35653408399a9853c5e5f81b67018cba78568bfd76dd46f93c825cbfb95d9060200160405180910390a2506001601d55565b6000610b1b6110af565b600401546001600160a01b0316919050565b6003830154610b3f9062015180611b66565b421015610b935760405162461bcd60e51b815260206004820152601f60248201527f57616974203120646179206265666f7265207374617274696e672072616d700060448201526064015b60405180910390fd5b610ba06212750042611b66565b811015610be85760405162461bcd60e51b8152602060048201526016602482015275496e73756666696369656e742072616d702074696d6560501b6044820152606401610b8a565b8115801590610bf95750620f424082105b610c455760405162461bcd60e51b815260206004820181905260248201527f667574757265415f206d757374206265203e203020616e64203c204d41585f416044820152606401610b8a565b6000610c50846110e3565b90506000610c5f6064856119da565b9050808203610c9e5760405162461bcd60e51b815260206004820152600b60248201526a02176616c69642072616d760ac1b6044820152606401610b8a565b81811015610cfd5781610cb26002836119da565b1015610cf85760405162461bcd60e51b8152602060048201526015602482015274199d5d1d5c995057c81a5cc81d1bdbc81cdb585b1b605a1b6044820152606401610b8a565b610d4f565b610d086002836119da565b811115610d4f5760405162461bcd60e51b8152602060048201526015602482015274667574757265415f20697320746f6f206c6172676560581b6044820152606401610b8a565b600185018290556002850181905542600386018190556004860184905560408051848152602081018490528082019290925260608201859052517fa2b71ec6df949300b59aab36b55e189697b750119dd349fcfa8c0f779e83c2549181900360800190a15050505050565b6305f5e100811115610df95760405162461bcd60e51b81526020600482015260086024820152670e8dede40d0d2ced60c31b6044820152606401610b8a565b6005820181905581546040518281527f29aee3d14d18e1b8ace81481838ab2996fee9446a44336847d1d5c7fdf2471b19060200161024a565b6000763d602d80600a3d3981f3363d3d373d3d3d363d730000008260601b60e81c176000526e5af43d82803e903d91602b57fd5bf38260781b17602052603760096000f090506001600160a01b038116610ec75760405162461bcd60e51b8152602060048201526016602482015275115490cc4c4d8dce8818dc99585d194819985a5b195960521b6044820152606401610b8a565b919050565b42816004015411610f1f5760405162461bcd60e51b815260206004820152601760248201527f52616d7020697320616c72656164792073746f707065640000000000000000006044820152606401610b8a565b6000610f2a826110e3565b60018301819055600283018190554260038401819055600484018190556040519192507f46e22fb3709ad289f62ce63d469248536dbc78d82b84a3d7e74ad606dc20193891610f8191848252602082015260400190565b60405180910390a15050565b6402540be400811115610fcd5760405162461bcd60e51b81526020600482015260086024820152670e8dede40d0d2ced60c31b6044820152606401610b8a565b6006820181905581546040518281527f7b4e02f2e320870ba4f764edf60a5289a465018a3fe159f0d72ba33139b0a6169060200161024a565b600882015460005b818110156110a957600084600801828154811061102d5761102d611805565b6000918252602082200154600b870180546001600160a01b039092169350908490811061105c5761105c611805565b906000526020600020015490508060001461109f57600086600b01848154811061108857611088611805565b60009182526020909120015561109f82868361112c565b505060010161100e565b50505050565b6000806110dd60017fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c611b79565b92915050565b60048101546002820154600183015490919080831480159061110457508142105b15611125576000846003015490508083038142038502428503840201049350505b5050919050565b8060000361113957505050565b6001600160a01b03831661116057604051633a48ca7b60e11b815260040160405180910390fd5b61116b838383611170565b505050565b604080516001600160a01b03848116602483015260448083018590528351808403909101815260649092018352602080830180516001600160e01b031663a9059cbb60e01b17905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65649084015261116b9286929160009161120091851690849061127d565b80519091501561116b578080602001905181019061121e91906119b8565b61116b5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610b8a565b606061128c8484600085611296565b90505b9392505050565b6060824710156112f75760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610b8a565b600080866001600160a01b031685876040516113139190611b8c565b60006040518083038185875af1925050503d8060008114611350576040519150601f19603f3d011682016040523d82523d6000602084013e611355565b606091505b509150915061136687838387611373565b925050505b949350505050565b606083156113e25782516000036113db576001600160a01b0385163b6113db5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610b8a565b508161136b565b61136b83838151156113f75781518083602001fd5b8060405162461bcd60e51b8152600401610b8a9190611ba8565b828054828255906000526020600020908101928215611466579160200282015b8281111561146657825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190611431565b506114729291506114b1565b5090565b828054828255906000526020600020908101928215611466579160200282015b82811115611466578251825591602001919060010190611496565b5b8082111561147257600081556001016114b2565b6000806000606084860312156114db57600080fd5b505081359360208301359350604090920135919050565b6000806040838503121561150557600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561155357611553611514565b604052919050565b600067ffffffffffffffff82111561157557611575611514565b5060051b60200190565b6001600160a01b038116811461159457600080fd5b50565b600082601f8301126115a857600080fd5b813560206115bd6115b88361155b565b61152a565b82815260059290921b840181019181810190868411156115dc57600080fd5b8286015b848110156116005780356115f38161157f565b83529183019183016115e0565b509695505050505050565b600082601f83011261161c57600080fd5b8135602061162c6115b88361155b565b82815260059290921b8401810191818101908684111561164b57600080fd5b8286015b8481101561160057803560ff811681146116695760008081fd5b835291830191830161164f565b600082601f83011261168757600080fd5b813567ffffffffffffffff8111156116a1576116a1611514565b6116b4601f8201601f191660200161152a565b8181528460208386010111156116c957600080fd5b816020850160208301376000918101602001919091529392505050565b8035610ec78161157f565b60008060008060008060008060006101208a8c03121561171057600080fd5b8935985060208a013567ffffffffffffffff8082111561172f57600080fd5b61173b8d838e01611597565b995060408c013591508082111561175157600080fd5b61175d8d838e0161160b565b985060608c013591508082111561177357600080fd5b61177f8d838e01611676565b975060808c013591508082111561179557600080fd5b506117a28c828d01611676565b95505060a08a0135935060c08a0135925060e08a013591506117c76101008b016116e6565b90509295985092959850929598565b6000602082840312156117e857600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60ff82811682821603908111156110dd576110dd61181b565b600181815b8085111561188557816000190482111561186b5761186b61181b565b8085161561187857918102915b93841c939080029061184f565b509250929050565b60008261189c575060016110dd565b816118a9575060006110dd565b81600181146118bf57600281146118c9576118e5565b60019150506110dd565b60ff8411156118da576118da61181b565b50506001821b6110dd565b5060208310610133831016604e8410600b8410161715611908575081810a6110dd565b611912838361184a565b80600019048211156119265761192661181b565b029392505050565b600061128f838361188d565b60005b8381101561195557818101518382015260200161193d565b50506000910152565b6000815180845261197681602086016020860161193a565b601f01601f19169290920160200192915050565b60408152600061199d604083018561195e565b82810360208401526119af818561195e565b95945050505050565b6000602082840312156119ca57600080fd5b8151801515811461128f57600080fd5b80820281158282048414176110dd576110dd61181b565b600081518084526020808501945080840160005b83811015611a2a5781516001600160a01b031687529582019590820190600101611a05565b509495945050505050565b600081518084526020808501945080840160005b83811015611a2a57815187529582019590820190600101611a49565b60408152825160408201526020830151606082015260408301516080820152606083015160a0820152608083015160c082015260a083015160e0820152600060c0840151610100818185015260e08601519150610120611acf818601846001600160a01b03169052565b81870151925061018091506101408281870152611af06101c08701856119f1565b9350818801519150603f19610160818887030181890152611b118685611a35565b9550828a01519350818887030185890152611b2c8685611a35565b9550808a015194505080878603016101a0880152505050611b4d8282611a35565b9250505061128f60208301846001600160a01b03169052565b808201808211156110dd576110dd61181b565b818103818111156110dd576110dd61181b565b60008251611b9e81846020870161193a565b9190910192915050565b60208152600061128f602083018461195e56fea264697066735822122001cc6066390672f38e75dc7c58e34fc680082abf5025ede026112845e398293964736f6c63430008110033";

type SwapAdminFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwapAdminFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SwapAdminFacet__factory extends ContractFactory {
  constructor(...args: SwapAdminFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SwapAdminFacet> {
    return super.deploy(overrides || {}) as Promise<SwapAdminFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SwapAdminFacet {
    return super.attach(address) as SwapAdminFacet;
  }
  override connect(signer: Signer): SwapAdminFacet__factory {
    return super.connect(signer) as SwapAdminFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapAdminFacetInterface {
    return new utils.Interface(_abi) as SwapAdminFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwapAdminFacet {
    return new Contract(address, _abi, signerOrProvider) as SwapAdminFacet;
  }
}
