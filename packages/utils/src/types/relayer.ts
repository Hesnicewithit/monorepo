import { Type, Static } from "@sinclair/typebox";
import { BigNumber } from "ethers";

import { TIntegerString } from "./primitives";

export const ExecutorDataSchema = Type.Object({
  executorVersion: Type.String(),
  transferId: Type.String(),
  origin: Type.String(),
  relayerFee: Type.Object({
    amount: TIntegerString,
    asset: Type.String(),
  }),
  encodedData: Type.String(),
});

export type ExecutorData = Static<typeof ExecutorDataSchema>;

export enum RelayerTaskStatus {
  CheckPending = "CheckPending",
  ExecPending = "ExecPending",
  ExecSuccess = "ExecSuccess",
  ExecReverted = "ExecReverted",
  WaitingForConfirmation = "WaitingForConfirmation",
  Blacklisted = "Blacklisted",
  Cancelled = "Cancelled",
  NotFound = "NotFound",
}

export enum RelayerType {
  Gelato = "Gelato",
  BackupRelayer = "BackupRelayer",
  Mock = "Mock",
}

// Record of important data for any meta tx.
export type MetaTxTask = {
  // Timestamp of when execution meta tx was sent.
  timestamp: string;
  // task ID.
  taskId: string;
  // The relayer type which can be one of both Backup | Gelato
  relayer: RelayerType;
  // Number of meta tx attempts sent. Should be 1 in 99% of cases.
  attempts: number;
};

// Gelato SDK send request.
export type RelayerRequest = {
  // Chain ID of the chain where the target smart contract is deployed
  chainId: number;
  // Address of the target smart contract
  target: string;
  // Encoded payload data (usually a function selector plus the required arguments) used to call the required target address
  data: string;
  // Address of the token that is to be used for payment
  feeToken?: string;
};

// Gelato SDK send response.
export type RelayResponse = {
  // Unique relay task ID which can be used for monitoring and data analytics.
  taskId: string;
};

// Gelato SDK send request options.
export type RelayRequestOptions = {
  // Gas limit of the relay call. This effectively sets an upper price limit for the relay call.
  gasLimit?: BigNumber;
  // Number of retries that Gelato should attempt before discarding this relay call
  retries?: number;
};
