/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  Orphanage,
  OrphanageInterface,
} from "../../../../contracts/shared/libraries/Orphanage";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "parent",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "reason",
        type: "bytes",
      },
    ],
    name: "OrphanedNativeTokens",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "parent",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "reason",
        type: "bytes",
      },
    ],
    name: "OrphanedTokens",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "parent",
        type: "address",
      },
    ],
    name: "SavedOrphans",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "checkOrphans",
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
        name: "",
        type: "address",
      },
    ],
    name: "orphanedNativeTokens",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "orphanedTokens",
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
        name: "token",
        type: "address",
      },
    ],
    name: "saveOrphans",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class Orphanage__factory {
  static readonly abi = _abi;
  static createInterface(): OrphanageInterface {
    return new utils.Interface(_abi) as OrphanageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Orphanage {
    return new Contract(address, _abi, signerOrProvider) as Orphanage;
  }
}
