/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IGasTokenOracle,
  IGasTokenOracleInterface,
} from "../../../../../contracts/core/connext/interfaces/IGasTokenOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "originDomain",
        type: "uint32",
      },
    ],
    name: "getRate",
    outputs: [
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "den",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IGasTokenOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IGasTokenOracleInterface {
    return new utils.Interface(_abi) as IGasTokenOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGasTokenOracle {
    return new Contract(address, _abi, signerOrProvider) as IGasTokenOracle;
  }
}
