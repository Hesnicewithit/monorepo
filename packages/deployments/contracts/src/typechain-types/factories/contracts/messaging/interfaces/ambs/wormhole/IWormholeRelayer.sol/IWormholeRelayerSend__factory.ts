/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IWormholeRelayerSend,
  IWormholeRelayerSendInterface,
} from "../../../../../../../contracts/messaging/interfaces/ambs/wormhole/IWormholeRelayer.sol/IWormholeRelayerSend";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "sequence",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "deliveryQuote",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "paymentForExtraReceiverValue",
        type: "uint256",
      },
    ],
    name: "SendEvent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "targetAddress",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "receiverValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "paymentForExtraReceiverValue",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "encodedExecutionParameters",
        type: "bytes",
      },
      {
        internalType: "uint16",
        name: "refundChain",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "refundAddress",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "deliveryProviderAddress",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint16",
            name: "chainId",
            type: "uint16",
          },
          {
            internalType: "bytes32",
            name: "emitterAddress",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "sequence",
            type: "uint64",
          },
        ],
        internalType: "struct VaaKey[]",
        name: "vaaKeys",
        type: "tuple[]",
      },
      {
        internalType: "uint8",
        name: "consistencyLevel",
        type: "uint8",
      },
    ],
    name: "forward",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "receiverValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
    ],
    name: "forwardPayloadToEvm",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "receiverValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "paymentForExtraReceiverValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "refundChain",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "refundAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "deliveryProviderAddress",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint16",
            name: "chainId",
            type: "uint16",
          },
          {
            internalType: "bytes32",
            name: "emitterAddress",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "sequence",
            type: "uint64",
          },
        ],
        internalType: "struct VaaKey[]",
        name: "vaaKeys",
        type: "tuple[]",
      },
      {
        internalType: "uint8",
        name: "consistencyLevel",
        type: "uint8",
      },
    ],
    name: "forwardToEvm",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "receiverValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint16",
            name: "chainId",
            type: "uint16",
          },
          {
            internalType: "bytes32",
            name: "emitterAddress",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "sequence",
            type: "uint64",
          },
        ],
        internalType: "struct VaaKey[]",
        name: "vaaKeys",
        type: "tuple[]",
      },
    ],
    name: "forwardVaasToEvm",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDefaultDeliveryProvider",
    outputs: [
      {
        internalType: "address",
        name: "deliveryProvider",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "chainId",
        type: "uint16",
      },
    ],
    name: "getRegisteredWormholeRelayerContract",
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
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "receiverValue",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "encodedExecutionParameters",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "deliveryProviderAddress",
        type: "address",
      },
    ],
    name: "quoteDeliveryPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "nativePriceQuote",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "encodedExecutionInfo",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "receiverValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "deliveryProviderAddress",
        type: "address",
      },
    ],
    name: "quoteEVMDeliveryPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "nativePriceQuote",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "targetChainRefundPerGasUnused",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "receiverValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
    ],
    name: "quoteEVMDeliveryPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "nativePriceQuote",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "targetChainRefundPerGasUnused",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "currentChainAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "deliveryProviderAddress",
        type: "address",
      },
    ],
    name: "quoteNativeForChain",
    outputs: [
      {
        internalType: "uint256",
        name: "targetChainAmount",
        type: "uint256",
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
            internalType: "uint16",
            name: "chainId",
            type: "uint16",
          },
          {
            internalType: "bytes32",
            name: "emitterAddress",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "sequence",
            type: "uint64",
          },
        ],
        internalType: "struct VaaKey",
        name: "deliveryVaaKey",
        type: "tuple",
      },
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "newReceiverValue",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "newEncodedExecutionParameters",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "newDeliveryProviderAddress",
        type: "address",
      },
    ],
    name: "resend",
    outputs: [
      {
        internalType: "uint64",
        name: "sequence",
        type: "uint64",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint16",
            name: "chainId",
            type: "uint16",
          },
          {
            internalType: "bytes32",
            name: "emitterAddress",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "sequence",
            type: "uint64",
          },
        ],
        internalType: "struct VaaKey",
        name: "deliveryVaaKey",
        type: "tuple",
      },
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "newReceiverValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newGasLimit",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "newDeliveryProviderAddress",
        type: "address",
      },
    ],
    name: "resendToEvm",
    outputs: [
      {
        internalType: "uint64",
        name: "sequence",
        type: "uint64",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "targetAddress",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "receiverValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "paymentForExtraReceiverValue",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "encodedExecutionParameters",
        type: "bytes",
      },
      {
        internalType: "uint16",
        name: "refundChain",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "refundAddress",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "deliveryProviderAddress",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint16",
            name: "chainId",
            type: "uint16",
          },
          {
            internalType: "bytes32",
            name: "emitterAddress",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "sequence",
            type: "uint64",
          },
        ],
        internalType: "struct VaaKey[]",
        name: "vaaKeys",
        type: "tuple[]",
      },
      {
        internalType: "uint8",
        name: "consistencyLevel",
        type: "uint8",
      },
    ],
    name: "send",
    outputs: [
      {
        internalType: "uint64",
        name: "sequence",
        type: "uint64",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "receiverValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "refundChain",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "refundAddress",
        type: "address",
      },
    ],
    name: "sendPayloadToEvm",
    outputs: [
      {
        internalType: "uint64",
        name: "sequence",
        type: "uint64",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "receiverValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
    ],
    name: "sendPayloadToEvm",
    outputs: [
      {
        internalType: "uint64",
        name: "sequence",
        type: "uint64",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "receiverValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "paymentForExtraReceiverValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "refundChain",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "refundAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "deliveryProviderAddress",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint16",
            name: "chainId",
            type: "uint16",
          },
          {
            internalType: "bytes32",
            name: "emitterAddress",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "sequence",
            type: "uint64",
          },
        ],
        internalType: "struct VaaKey[]",
        name: "vaaKeys",
        type: "tuple[]",
      },
      {
        internalType: "uint8",
        name: "consistencyLevel",
        type: "uint8",
      },
    ],
    name: "sendToEvm",
    outputs: [
      {
        internalType: "uint64",
        name: "sequence",
        type: "uint64",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "receiverValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint16",
            name: "chainId",
            type: "uint16",
          },
          {
            internalType: "bytes32",
            name: "emitterAddress",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "sequence",
            type: "uint64",
          },
        ],
        internalType: "struct VaaKey[]",
        name: "vaaKeys",
        type: "tuple[]",
      },
    ],
    name: "sendVaasToEvm",
    outputs: [
      {
        internalType: "uint64",
        name: "sequence",
        type: "uint64",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "receiverValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint16",
            name: "chainId",
            type: "uint16",
          },
          {
            internalType: "bytes32",
            name: "emitterAddress",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "sequence",
            type: "uint64",
          },
        ],
        internalType: "struct VaaKey[]",
        name: "vaaKeys",
        type: "tuple[]",
      },
      {
        internalType: "uint16",
        name: "refundChain",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "refundAddress",
        type: "address",
      },
    ],
    name: "sendVaasToEvm",
    outputs: [
      {
        internalType: "uint64",
        name: "sequence",
        type: "uint64",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class IWormholeRelayerSend__factory {
  static readonly abi = _abi;
  static createInterface(): IWormholeRelayerSendInterface {
    return new utils.Interface(_abi) as IWormholeRelayerSendInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IWormholeRelayerSend {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IWormholeRelayerSend;
  }
}
