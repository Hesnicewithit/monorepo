/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestBridgeMessage,
  TestBridgeMessageInterface,
} from "../TestBridgeMessage";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
    ],
    name: "testFormatDetailsHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_tokenIds",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_action",
        type: "bytes",
      },
      {
        internalType: "enum BridgeMessage.Types",
        name: "_idType",
        type: "uint8",
      },
      {
        internalType: "enum BridgeMessage.Types",
        name: "_actionType",
        type: "uint8",
      },
    ],
    name: "testFormatMessage",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32[3]",
        name: "_domain",
        type: "uint32[3]",
      },
      {
        internalType: "bytes32[3]",
        name: "_id",
        type: "bytes32[3]",
      },
    ],
    name: "testFormatTokenIds",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_to",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
      {
        internalType: "uint256[3]",
        name: "_amts",
        type: "uint256[3]",
      },
      {
        internalType: "bytes32[3]",
        name: "_details",
        type: "bytes32[3]",
      },
    ],
    name: "testFormatTransfer",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_action",
        type: "bytes",
      },
    ],
    name: "testIsFastTransfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_action",
        type: "bytes",
      },
    ],
    name: "testIsTransfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_action",
        type: "bytes",
      },
      {
        internalType: "enum BridgeMessage.Types",
        name: "_t",
        type: "uint8",
      },
    ],
    name: "testIsValidAction",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "testIsValidMessageLength",
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
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "testMessageType",
    outputs: [
      {
        internalType: "enum BridgeMessage.Types",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "testMustBeMessage",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_tokenId",
        type: "bytes",
      },
      {
        internalType: "uint8",
        name: "idx",
        type: "uint8",
      },
    ],
    name: "testSplitTokenId",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_batch",
        type: "bytes",
      },
    ],
    name: "testSplitTransfer",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256[3]",
        name: "",
        type: "uint256[3]",
      },
      {
        internalType: "bytes32[3]",
        name: "",
        type: "bytes32[3]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611b2d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063932cbc9811610071578063932cbc981461017e578063957b15d214610191578063b81726a2146101a4578063ded2f006146101b7578063dfd9d1db146101f5578063f9dd616a1461020857600080fd5b806312bdd731146100b957806334ceb4a6146100e25780636c18a185146101025780637d5bf43d146101275780638213d910146101485780638cdce7e21461016b575b600080fd5b6100cc6100c736600461148b565b61021b565b6040516100d991906114d6565b60405180910390f35b6100f56100f036600461154e565b610242565b6040516100d9919061162f565b61011561011036600461148b565b610267565b6040516100d996959493929190611642565b61013a6101353660046116de565b610355565b6040519081526020016100d9565b61015b610156366004611761565b61036a565b60405190151581526020016100d9565b61015b61017936600461148b565b610390565b61015b61018c36600461148b565b6103ab565b6100f561019f3660046117af565b6103cb565b61015b6101b236600461148b565b6103da565b6101ca6101c5366004611832565b6103f2565b6040805163ffffffff909416845260208401929092526001600160a01b0316908201526060016100d9565b6100f5610203366004611877565b610447565b6100f561021636600461148b565b610490565b600080610227836104ac565b905061023b61023684836104cf565b6104ea565b9392505050565b606061025e6102538686868661050b565b62ffffff1916610598565b95945050505050565b6000806000806102756113a1565b61027d6113a1565b600061028a8860056104cf565b90506000610297826105e8565b905060006102a4836105fc565b905060006102b184610611565b905060006102be85610624565b90506102c86113a1565b6102d06113a1565b60005b60038160ff16101561033f576102ec888260ff16610639565b838260ff1660038110610301576103016118fc565b60200201526103138860ff831661066e565b828260ff1660038110610328576103286118fc565b60200201528061033781611928565b9150506102d3565b50949d939c50919a509850965090945092505050565b6000610362848484610698565b949350505050565b600061023b61038b836006811115610384576103846114c0565b85906104cf565b6106d4565b6000806103a060045b84906104cf565b905061023b816106fd565b6000806103b7836104ac565b905061023b6103c684836104cf565b61070a565b606061023b610253848461073a565b6000806103e76003610399565b905061023b816107ad565b600080808061040460065b87906104cf565b90506000610415828760ff166107ba565b90506000610426838860ff166107ef565b90506000610437848960ff16610826565b9299919850919650945050505050565b606060006104608460068111156103fd576103fd6114c0565b905060006104798460068111156103fd576103fd6114c0565b9050610485828261085b565b979650505050505050565b6060600061049e6002610399565b905061023b6102538261092f565b6000816024815181106104c1576104c16118fc565b016020015160f81c92915050565b81516000906020840161025e64ffffffffff85168284610948565b600060d882901c60ff166006811115610505576105056114c0565b92915050565b6000600561058e816105786000848a8a898460200201518b600060200201518b600160200201518d600160200201518d600260200201518f6002602002015160405160200161056299989796959493929190611948565b60408051601f19818403018152919052906104cf565b6301000000600160d81b031660d89190911b1790565b9695505050505050565b60606000806105b08460181c6001600160601b031690565b60405193508392506001600160601b031690506105d7846105d28460206119ac565b61098c565b508181016020016040529052919050565b600061050562ffffff198316826001610ae4565b600061050562ffffff19831660016020610b14565b600061050562ffffff198316600d610c6d565b600061050562ffffff19831660216020610b14565b600061023b6106498360406119c4565b6106549060416119ac565b61065f9060206119ac565b62ffffff198516906020610ae4565b600061023b61067e8360406119c4565b6106899060416119ac565b62ffffff198516906020610b14565b6000835184845185856040516020016106b59594939291906119e3565b6040516020818303038152906040528051906020012090509392505050565b60006106df826107ad565b806106ee57506106ee826106fd565b80610505575061050582610c7b565b6000610505826004610c84565b6000601882901c6001600160601b0316610101610729602460036119c4565b61073391906119ac565b1492915050565b81518151602080850151818501516040808801518188015191516001600160e01b031960e098891b811696820196909652602481019690965292861b841660448601526048850191909152931b166068820152606c81019190915260009061023b90600690610578908490608c01610562565b6000610505826003610c84565b60008260066107d1815b62ffffff19841690610ce3565b5061025e6107e06024866119c4565b62ffffff198716906004610ae4565b60008260066107fd816107c4565b5061025e61080c6024866119c4565b6108179060046119ac565b62ffffff198716906020610b14565b6000826006610834816107c4565b5061025e6108438560206119c4565b61084e9060106119ac565b62ffffff19871690610c6d565b6060826006610869816107c4565b50610873846106d4565b6108ae5760405162461bcd60e51b815260206004820152600760248201526610b0b1ba34b7b760c91b60448201526064015b60405180910390fd5b60408051600280825260608201835260009260208301908036833701905050905085816000815181106108e3576108e36118fc565b602002602001019062ffffff1916908162ffffff1916815250508481600181518110610911576109116118fc565b62ffffff199092166020928302919091019091015261058e81610dbc565b600061050561093d83610e18565b62ffffff1916610e4a565b6000806109558484610ea5565b9050604051811115610965575060005b806109775762ffffff1991505061023b565b5050606092831b9190911790911b1760181b90565b600062ffffff1980841614156109f55760405162461bcd60e51b815260206004820152602860248201527f54797065644d656d566965772f636f7079546f202d204e756c6c20706f696e7460448201526732b9103232b932b360c11b60648201526084016108a5565b6109fe83610eb1565b610a5e5760405162461bcd60e51b815260206004820152602b60248201527f54797065644d656d566965772f636f7079546f202d20496e76616c696420706f60448201526a34b73a32b9103232b932b360a91b60648201526084016108a5565b6000610a738460181c6001600160601b031690565b6001600160601b031690506000610a938560781c6001600160601b031690565b6001600160601b031690506000604051905084811115610ab35760206060fd5b8285848460045afa5061058e610ac98760d81c90565b64ffffffffff60601b606091821b168717901b841760181b90565b6000610af1826020611a43565b610afc906008611a66565b60ff16610b0a858585610b14565b901c949350505050565b600060ff8216610b265750600061023b565b610b398460181c6001600160601b031690565b6001600160601b0316610b4f8460ff8516610ea5565b1115610bb357610b9a610b6b8560781c6001600160601b031690565b6001600160601b0316610b878660181c6001600160601b031690565b6001600160601b0316858560ff16610eef565b60405162461bcd60e51b81526004016108a5919061162f565b60208260ff161115610c2d5760405162461bcd60e51b815260206004820152603a60248201527f54797065644d656d566965772f696e646578202d20417474656d70746564207460448201527f6f20696e646578206d6f7265207468616e20333220627974657300000000000060648201526084016108a5565b600882026000610c468660781c6001600160601b031690565b6001600160601b031690506000600160ff1b60001984011d91909501511695945050505050565b600061023b83836014610ae4565b60006105058260055b6000816006811115610c9857610c986114c0565b60ff16610ca4846105e8565b60ff1614801561023b5750816006811115610cc157610cc16114c0565b610cca846104ea565b6006811115610cdb57610cdb6114c0565b149392505050565b6000610cef8383611019565b610db5576000610d0e610d028560d81c90565b64ffffffffff1661103c565b9150506000610d238464ffffffffff1661103c565b6040517f5479706520617373657274696f6e206661696c65642e20476f7420307800000060208201526001600160b01b031960b086811b8216603d8401526c05c408af0e0cac6e8cac84060f609b1b604784015283901b16605482015290925060009150605e0160405160208183030381529060405290508060405162461bcd60e51b81526004016108a5919061162f565b5090919050565b6040516060906000610dd884610dd38460206119ac565b6110e8565b90506000610def8260181c6001600160601b031690565b6001600160601b031690506000610e0583611187565b9184525082016020016040525092915050565b6000610e238261070a565b15610e40576301000000600160d81b038216600160d91b17610505565b62ffffff19610505565b6000610e5582610eb1565b610ea15760405162461bcd60e51b815260206004820152601960248201527f56616c696469747920617373657274696f6e206661696c65640000000000000060448201526064016108a5565b5090565b600061023b82846119ac565b6000610ebd8260d81c90565b64ffffffffff1664ffffffffff1415610ed857506000919050565b6000610ee38361119d565b60405110199392505050565b60606000610efc8661103c565b9150506000610f0a8661103c565b9150506000610f188661103c565b9150506000610f268661103c565b604080517f54797065644d656d566965772f696e646578202d204f76657272616e20746865602082015274040ecd2caee5c40a6d8d2c6ca40d2e640c2e84060f605b1b818301526001600160d01b031960d098891b811660558301526e040eed2e8d040d8cadccee8d04060f608b1b605b830181905297891b8116606a8301527f2e20417474656d7074656420746f20696e646578206174206f666673657420306070830152600f60fb1b609083015295881b861660918201526097810196909652951b90921660a68401525050601760f91b60ac8201528151808203608d01815260ad90910190915295945050505050565b60008164ffffffffff1661102d8460d81c90565b64ffffffffff16149392505050565b600080601f5b600f8160ff16111561109a57600061105b826008611a66565b60ff1685901c905061106c816111de565b61ffff16841793508160ff1660101461108757601084901b93505b50611093600182611a43565b9050611042565b50600f5b60ff8160ff1610156110e25760ff600882021684901c6110bd816111de565b61ffff16831792508160ff166000146110d857601083901b92505b506000190161109e565b50915091565b6000604051828111156110fb5760206060fd5b506000805b845181101561117457600085828151811061111d5761111d6118fc565b602002602001015190506111378184876105d291906119ac565b5061114b8160181c6001600160601b031690565b61115e906001600160601b0316846119ac565b925050808061116c90611a8f565b915050611100565b50606083901b811760181b949350505050565b600061119282611210565b6105059060206119c4565b60006111b28260181c6001600160601b031690565b6111c58360781c6001600160601b031690565b6111cf9190611aaa565b6001600160601b031692915050565b60006111f060048360ff16901c611245565b60ff1661ffff919091161760081b61120782611245565b60ff1617919050565b6000602061123b602061122c8560181c6001600160601b031690565b6001600160601b031690610ea5565b6105059190611ad5565b600060f08083179060ff821614156112605750603092915050565b8060ff1660f114156112755750603192915050565b8060ff1660f2141561128a5750603292915050565b8060ff1660f3141561129f5750603392915050565b8060ff1660f414156112b45750603492915050565b8060ff1660f514156112c95750603592915050565b8060ff1660f614156112de5750603692915050565b8060ff1660f714156112f35750603792915050565b8060ff1660f814156113085750603892915050565b8060ff1660f9141561131d5750603992915050565b8060ff1660fa14156113325750606192915050565b8060ff1660fb14156113475750606292915050565b8060ff1660fc141561135c5750606392915050565b8060ff1660fd14156113715750606492915050565b8060ff1660fe14156113865750606592915050565b8060ff1660ff141561139b5750606692915050565b50919050565b60405180606001604052806003906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156113f8576113f86113bf565b60405290565b600082601f83011261140f57600080fd5b813567ffffffffffffffff8082111561142a5761142a6113bf565b604051601f8301601f19908116603f01168101908282118183101715611452576114526113bf565b8160405283815286602085880101111561146b57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006020828403121561149d57600080fd5b813567ffffffffffffffff8111156114b457600080fd5b610362848285016113fe565b634e487b7160e01b600052602160045260246000fd5b60208101600783106114f857634e487b7160e01b600052602160045260246000fd5b91905290565b600082601f83011261150f57600080fd5b6115176113d5565b80606084018581111561152957600080fd5b845b8181101561154357803584526020938401930161152b565b509095945050505050565b600080600080610100858703121561156557600080fd5b84359350602080860135935086605f87011261158057600080fd5b6115886113d5565b8060a088018981111561159a57600080fd5b604089015b818110156115b6578035845292840192840161159f565b508195506115c48a826114fe565b94505050505092959194509250565b60005b838110156115ee5781810151838201526020016115d6565b838111156115fd576000848401525b50505050565b6000815180845261161b8160208601602086016115d3565b601f01601f19169290920160200192915050565b60208152600061023b6020830184611603565b60ff8716815260208082018790526001600160a01b038616604083015260608201859052610140820190608083018560005b600381101561169157815183529183019190830190600101611674565b50505060e083018460005b60038110156116b95781518352918301919083019060010161169c565b50505050979650505050505050565b803560ff811681146116d957600080fd5b919050565b6000806000606084860312156116f357600080fd5b833567ffffffffffffffff8082111561170b57600080fd5b611717878388016113fe565b9450602086013591508082111561172d57600080fd5b5061173a868287016113fe565b925050611749604085016116c8565b90509250925092565b8035600781106116d957600080fd5b6000806040838503121561177457600080fd5b823567ffffffffffffffff81111561178b57600080fd5b611797858286016113fe565b9250506117a660208401611752565b90509250929050565b60008060c083850312156117c257600080fd5b83601f8401126117d157600080fd5b6117d96113d5565b8060608501868111156117eb57600080fd5b855b8181101561181857803563ffffffff8116811461180a5760008081fd5b8452602093840193016117ed565b5081945061182687826114fe565b93505050509250929050565b6000806040838503121561184557600080fd5b823567ffffffffffffffff81111561185c57600080fd5b611868858286016113fe565b9250506117a6602084016116c8565b6000806000806080858703121561188d57600080fd5b843567ffffffffffffffff808211156118a557600080fd5b6118b1888389016113fe565b955060208701359150808211156118c757600080fd5b506118d4878288016113fe565b9350506118e360408601611752565b91506118f160608601611752565b905092959194509250565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff81141561193f5761193f611912565b60010192915050565b600060078b1061196857634e487b7160e01b600052602160045260246000fd5b5060f89990991b89526001890197909752602188019590955260418701939093526061860191909152608185015260a184015260c183015260e18201526101010190565b600082198211156119bf576119bf611912565b500190565b60008160001904831182151516156119de576119de611912565b500290565b858152600085516119fb816020850160208a016115d3565b80830190508560208201528451611a198160408401602089016115d3565b60f89490941b6001600160f81b031916604091909401908101939093525050604101949350505050565b600060ff821660ff841680821015611a5d57611a5d611912565b90039392505050565b600060ff821660ff84168160ff0481118215151615611a8757611a87611912565b029392505050565b6000600019821415611aa357611aa3611912565b5060010190565b60006001600160601b03808316818516808303821115611acc57611acc611912565b01949350505050565b600082611af257634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212209ae8fcc9ec9622676ad9362903426ffa95451eb9651c486e607f92881b6438b064736f6c634300080b0033";

type TestBridgeMessageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestBridgeMessageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestBridgeMessage__factory extends ContractFactory {
  constructor(...args: TestBridgeMessageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TestBridgeMessage";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestBridgeMessage> {
    return super.deploy(overrides || {}) as Promise<TestBridgeMessage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestBridgeMessage {
    return super.attach(address) as TestBridgeMessage;
  }
  connect(signer: Signer): TestBridgeMessage__factory {
    return super.connect(signer) as TestBridgeMessage__factory;
  }
  static readonly contractName: "TestBridgeMessage";
  public readonly contractName: "TestBridgeMessage";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestBridgeMessageInterface {
    return new utils.Interface(_abi) as TestBridgeMessageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestBridgeMessage {
    return new Contract(address, _abi, signerOrProvider) as TestBridgeMessage;
  }
}
