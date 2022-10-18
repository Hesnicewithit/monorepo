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
  "0x608060405234801561001057600080fd5b50611c36806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631963e4261461006757806343be5eaf1461007c57806347555ef61461008f57806372a30e08146100a25780639c8eab97146100b5578063a1a23c29146100c8575b600080fd5b61007a6100753660046114c4565b6100db565b005b61007a61008a3660046114f0565b61019d565b61007a61009d3660046116ef565b610256565b61007a6100b03660046117d4565b6108f1565b61007a6100c33660046114f0565b6109a2565b61007a6100d63660046117d4565b610a53565b336100e4610b35565b6001600160a01b03161415801561011f575060033360009081526019602052604090205460ff16600381111561011c5761011c6117ed565b14155b1561013d57604051637b32c26b60e01b815260040160405180910390fd5b6000838152602160205260409020610156908383610b63565b60408051838152602081018390523381830152905184917f58e6fbecdb1a94225cf82c6b317a771aa08c9ab6552702b819bcd84ba8e8312f919081900360600190a2505050565b336101a6610b35565b6001600160a01b0316141580156101e1575060033360009081526019602052604090205460ff1660038111156101de576101de6117ed565b14155b156101ff57604051637b32c26b60e01b815260040160405180910390fd5b60008281526021602052604090206102179082610db3565b6040805182815233602082015283917f6d9b91502dc11e7c127e8e2d114c1f8026647ecb6b987c1baaadb706b5eb317691015b60405180910390a25050565b3361025f610b35565b6001600160a01b03161415801561029a575060033360009081526019602052604090205460ff166003811115610297576102976117ed565b14155b156102b857604051637b32c26b60e01b815260040160405180910390fd5b600089815260216020526040902060080154156102e8576040516376a1368960e11b815260040160405180910390fd5b600188511115806102fa575060208851115b156103185760405163502ef3af60e01b815260040160405180910390fd5b8751875160ff82161461033e5760405163d6e48e5d60e01b815260040160405180910390fd5b6000885167ffffffffffffffff81111561035a5761035a611512565b604051908082528060200260200182016040528015610383578160200160208202803683370190505b50905060005b8260ff168160ff1610156105b75760ff8116156104615760008c81526022602052604081208c519091908d9060ff85169081106103c8576103c8611803565b6020908102919091018101516001600160a01b031682528101919091526040016000205460ff1615158061044357508a8160ff168151811061040c5761040c611803565b60200260200101516001600160a01b03168b60008151811061043057610430611803565b60200260200101516001600160a01b0316145b1561046157604051632fa9e93b60e11b815260040160405180910390fd5b60006001600160a01b03168b8260ff168151811061048157610481611803565b60200260200101516001600160a01b0316036104b057604051634ce187ad60e11b815260040160405180910390fd5b601260ff168a8260ff16815181106104ca576104ca611803565b602002602001015160ff1611156104f457604051637d4ada4560e11b815260040160405180910390fd5b898160ff168151811061050957610509611803565b6020026020010151601261051d919061182f565b61052b9060ff16600a611938565b828260ff168151811061054057610540611803565b60200260200101818152505080600060220160008e815260200190815260200160002060008d8460ff168151811061057a5761057a611803565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191660ff92909216919091179055600101610389565b50620f424086106105db576040516306aedbfd60e01b815260040160405180910390fd5b6305f5e10085106105ff57604051634fc2217d60e11b815260040160405180910390fd5b6402540be4008410610624576040516384b9a37f60e01b815260040160405180910390fd5b600061062f84610e2b565b60405163266c45bb60e11b81529091506001600160a01b03821690634cd88b7690610660908c908c9060040161199c565b6020604051808303816000875af115801561067f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a391906119ca565b6106c05760405163276cd8b960e01b815260040160405180910390fd5b60006040518061018001604052808e815260200160648a6106e191906119ec565b81526020016106f160648b6119ec565b81526020016000815260200160008152602001888152602001878152602001836001600160a01b031681526020018d81526020018481526020018d5167ffffffffffffffff81111561074557610745611512565b60405190808252806020026020018201604052801561076e578160200160208202803683370190505b5081526020018d5167ffffffffffffffff81111561078e5761078e611512565b6040519080825280602002602001820160405280156107b7578160200160208202803683370190505b50905260008e81526021602090815260409182902083518155838201516001820155918301516002830155606083015160038301556080830151600483015560a0830151600583015560c0830151600683015560e08301516007830180546001600160a01b0319166001600160a01b039092169190911790556101008301518051939450849361084d926008850192019061140f565b50610120820151805161086a916009840191602090910190611474565b50610140820151805161088791600a840191602090910190611474565b5061016082015180516108a491600b840191602090910190611474565b509050508c7f4c5d883e86afc82dc0f918cfc013e437aa458ec41475884857ba8daec50d24cb82336040516108da929190611a7f565b60405180910390a250505050505050505050505050565b336108fa610b35565b6001600160a01b031614158015610935575060033360009081526019602052604090205460ff166003811115610932576109326117ed565b14155b1561095357604051637b32c26b60e01b815260040160405180910390fd5b600081815260216020526040902061096a90610ec8565b60405133815281907f86ce75679135e270f845c02bcb49ef6fb50464cb322dcc30096cccd13d2597df9060200160405180910390a250565b336109ab610b35565b6001600160a01b0316141580156109e6575060033360009081526019602052604090205460ff1660038111156109e3576109e36117ed565b14155b15610a0457604051637b32c26b60e01b815260040160405180910390fd5b6000828152602160205260409020610a1c9082610f89565b6040805182815233602082015283917f46eefbb271e4103912d3c227656de8afc0849f4c8cba4b2a1e38b660361e0463910161024a565b33610a5c610b35565b6001600160a01b031614158015610a97575060033360009081526019602052604090205460ff166003811115610a9457610a946117ed565b14155b15610ab557604051637b32c26b60e01b815260040160405180910390fd5b60205460011901610ad957604051637ce54e2d60e11b815260040160405180910390fd5b600260209081556000828152602190915260409020610af89033611002565b60405133815281907f2e6c35653408399a9853c5e5f81b67018cba78568bfd76dd46f93c825cbfb95d9060200160405180910390a2506001602055565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6003830154610b759062015180611b80565b421015610bc95760405162461bcd60e51b815260206004820152601f60248201527f57616974203120646179206265666f7265207374617274696e672072616d700060448201526064015b60405180910390fd5b610bd66212750042611b80565b811015610c1e5760405162461bcd60e51b8152602060048201526016602482015275496e73756666696369656e742072616d702074696d6560501b6044820152606401610bc0565b8115801590610c2f5750620f424082105b610c7b5760405162461bcd60e51b815260206004820181905260248201527f667574757265415f206d757374206265203e203020616e64203c204d41585f416044820152606401610bc0565b6000610c86846110b4565b90506000610c956064856119ec565b905081811015610cf65781610cab6002836119ec565b1015610cf15760405162461bcd60e51b8152602060048201526015602482015274199d5d1d5c995057c81a5cc81d1bdbc81cdb585b1b605a1b6044820152606401610bc0565b610d48565b610d016002836119ec565b811115610d485760405162461bcd60e51b8152602060048201526015602482015274667574757265415f20697320746f6f206c6172676560581b6044820152606401610bc0565b600185018290556002850181905542600386018190556004860184905560408051848152602081018490528082019290925260608201859052517fa2b71ec6df949300b59aab36b55e189697b750119dd349fcfa8c0f779e83c2549181900360800190a15050505050565b6305f5e100811115610df25760405162461bcd60e51b81526020600482015260086024820152670e8dede40d0d2ced60c31b6044820152606401610bc0565b6005820181905581546040518281527f29aee3d14d18e1b8ace81481838ab2996fee9446a44336847d1d5c7fdf2471b19060200161024a565b6000604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528260601b60148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f09150506001600160a01b038116610ec35760405162461bcd60e51b8152602060048201526016602482015275115490cc4c4d8dce8818dc99585d194819985a5b195960521b6044820152606401610bc0565b919050565b42816004015411610f1b5760405162461bcd60e51b815260206004820152601760248201527f52616d7020697320616c72656164792073746f707065640000000000000000006044820152606401610bc0565b6000610f26826110b4565b60018301819055600283018190554260038401819055600484018190556040519192507f46e22fb3709ad289f62ce63d469248536dbc78d82b84a3d7e74ad606dc20193891610f7d91848252602082015260400190565b60405180910390a15050565b6402540be400811115610fc95760405162461bcd60e51b81526020600482015260086024820152670e8dede40d0d2ced60c31b6044820152606401610bc0565b6006820181905581546040518281527f7b4e02f2e320870ba4f764edf60a5289a465018a3fe159f0d72ba33139b0a6169060200161024a565b600882015460005b818110156110ae57600084600801828154811061102957611029611803565b6000918252602082200154600b870180546001600160a01b039092169350908490811061105857611058611803565b90600052602060002001549050806000146110a457600086600b01848154811061108457611084611803565b6000918252602090912001556110a46001600160a01b0383168683611165565b505060010161100a565b50505050565b60048101546002820154600091904282111561115e576003840154600185015480831115611122576110e68285611b98565b6110f08342611b98565b6110fa8386611b98565b61110491906119ec565b61110e9190611baf565b6111189082611b80565b9695505050505050565b61112c8285611b98565b6111368342611b98565b6111408584611b98565b61114a91906119ec565b6111549190611baf565b6111189082611b98565b9392505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526111b79084906111bc565b505050565b6000611211826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661128e9092919063ffffffff16565b8051909150156111b7578080602001905181019061122f91906119ca565b6111b75760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610bc0565b606061129d84846000856112a5565b949350505050565b6060824710156113065760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610bc0565b6001600160a01b0385163b61135d5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610bc0565b600080866001600160a01b031685876040516113799190611bd1565b60006040518083038185875af1925050503d80600081146113b6576040519150601f19603f3d011682016040523d82523d6000602084013e6113bb565b606091505b50915091506113cb8282866113d6565b979650505050505050565b606083156113e557508161115e565b8251156113f55782518084602001fd5b8160405162461bcd60e51b8152600401610bc09190611bed565b828054828255906000526020600020908101928215611464579160200282015b8281111561146457825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019061142f565b506114709291506114af565b5090565b828054828255906000526020600020908101928215611464579160200282015b82811115611464578251825591602001919060010190611494565b5b8082111561147057600081556001016114b0565b6000806000606084860312156114d957600080fd5b505081359360208301359350604090920135919050565b6000806040838503121561150357600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561155157611551611512565b604052919050565b600067ffffffffffffffff82111561157357611573611512565b5060051b60200190565b6001600160a01b038116811461159257600080fd5b50565b600082601f8301126115a657600080fd5b813560206115bb6115b683611559565b611528565b82815260059290921b840181019181810190868411156115da57600080fd5b8286015b848110156115fe5780356115f18161157d565b83529183019183016115de565b509695505050505050565b600082601f83011261161a57600080fd5b8135602061162a6115b683611559565b82815260059290921b8401810191818101908684111561164957600080fd5b8286015b848110156115fe57803560ff811681146116675760008081fd5b835291830191830161164d565b600082601f83011261168557600080fd5b813567ffffffffffffffff81111561169f5761169f611512565b6116b2601f8201601f1916602001611528565b8181528460208386010111156116c757600080fd5b816020850160208301376000918101602001919091529392505050565b8035610ec38161157d565b60008060008060008060008060006101208a8c03121561170e57600080fd5b8935985060208a013567ffffffffffffffff8082111561172d57600080fd5b6117398d838e01611595565b995060408c013591508082111561174f57600080fd5b61175b8d838e01611609565b985060608c013591508082111561177157600080fd5b61177d8d838e01611674565b975060808c013591508082111561179357600080fd5b506117a08c828d01611674565b95505060a08a0135935060c08a0135925060e08a013591506117c56101008b016116e4565b90509295985092959850929598565b6000602082840312156117e657600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff84168082101561184957611849611819565b90039392505050565b600181815b8085111561188d57816000190482111561187357611873611819565b8085161561188057918102915b93841c9390800290611857565b509250929050565b6000826118a457506001611932565b816118b157506000611932565b81600181146118c757600281146118d1576118ed565b6001915050611932565b60ff8411156118e2576118e2611819565b50506001821b611932565b5060208310610133831016604e8410600b8410161715611910575081810a611932565b61191a8383611852565b806000190482111561192e5761192e611819565b0290505b92915050565b600061115e8383611895565b60005b8381101561195f578181015183820152602001611947565b838111156110ae5750506000910152565b60008151808452611988816020860160208601611944565b601f01601f19169290920160200192915050565b6040815260006119af6040830185611970565b82810360208401526119c18185611970565b95945050505050565b6000602082840312156119dc57600080fd5b8151801515811461115e57600080fd5b6000816000190483118215151615611a0657611a06611819565b500290565b600081518084526020808501945080840160005b83811015611a445781516001600160a01b031687529582019590820190600101611a1f565b509495945050505050565b600081518084526020808501945080840160005b83811015611a4457815187529582019590820190600101611a63565b60408152825160408201526020830151606082015260408301516080820152606083015160a0820152608083015160c082015260a083015160e0820152600060c0840151610100818185015260e08601519150610120611ae9818601846001600160a01b03169052565b81870151925061018091506101408281870152611b0a6101c0870185611a0b565b9350818801519150603f19610160818887030181890152611b2b8685611a4f565b9550828a01519350818887030185890152611b468685611a4f565b9550808a015194505080878603016101a0880152505050611b678282611a4f565b9250505061115e60208301846001600160a01b03169052565b60008219821115611b9357611b93611819565b500190565b600082821015611baa57611baa611819565b500390565b600082611bcc57634e487b7160e01b600052601260045260246000fd5b500490565b60008251611be3818460208701611944565b9190910192915050565b60208152600061115e602083018461197056fea264697066735822122011c4c64da75a839ff175703959cd970059cdb9ac94ba990bb9b0a18beac60e7c64736f6c634300080f0033";

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
