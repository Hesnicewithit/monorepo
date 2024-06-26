/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPolygonZkEVMBridge,
  IPolygonZkEVMBridgeInterface,
} from "../../../../../../contracts/messaging/interfaces/ambs/polygonzk/IPolygonZkEVMBridge";

const _abi = [
  {
    inputs: [],
    name: "AlreadyClaimed",
    type: "error",
  },
  {
    inputs: [],
    name: "AmountDoesNotMatchMsgValue",
    type: "error",
  },
  {
    inputs: [],
    name: "DestinationNetworkInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "EtherTransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "GlobalExitRootInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSmtProof",
    type: "error",
  },
  {
    inputs: [],
    name: "MessageFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "MsgValueNotZero",
    type: "error",
  },
  {
    inputs: [],
    name: "NotValidAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "NotValidOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "NotValidSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "NotValidSpender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "destinationNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "forceUpdateGlobalExitRoot",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "permitData",
        type: "bytes",
      },
    ],
    name: "bridgeAsset",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "destinationNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "forceUpdateGlobalExitRoot",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "metadata",
        type: "bytes",
      },
    ],
    name: "bridgeMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[32]",
        name: "smtProofLocalExitRoot",
        type: "bytes32[32]",
      },
      {
        internalType: "bytes32[32]",
        name: "smtProofRollupExitRoot",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "globalIndex",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "mainnetExitRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "rollupExitRoot",
        type: "bytes32",
      },
      {
        internalType: "uint32",
        name: "originNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "originTokenAddress",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "destinationNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "metadata",
        type: "bytes",
      },
    ],
    name: "claimAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[32]",
        name: "smtProofLocalExitRoot",
        type: "bytes32[32]",
      },
      {
        internalType: "bytes32[32]",
        name: "smtProofRollupExitRoot",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "globalIndex",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "mainnetExitRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "rollupExitRoot",
        type: "bytes32",
      },
      {
        internalType: "uint32",
        name: "originNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "originAddress",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "destinationNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "metadata",
        type: "bytes",
      },
    ],
    name: "claimMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateGlobalExitRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IPolygonZkEVMBridge__factory {
  static readonly abi = _abi;
  static createInterface(): IPolygonZkEVMBridgeInterface {
    return new utils.Interface(_abi) as IPolygonZkEVMBridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPolygonZkEVMBridge {
    return new Contract(address, _abi, signerOrProvider) as IPolygonZkEVMBridge;
  }
}
