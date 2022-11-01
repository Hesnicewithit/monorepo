import { compare } from "compare-versions";
import {
  ExecutorData,
  RequestContext,
  createLoggingContext,
  ajv,
  ExecutorDataSchema,
  ExecStatus,
  getChainIdFromDomain,
  RelayerTaskStatus,
} from "@connext/nxtp-utils";

import { getContext } from "../../../sequencer";
import {
  ParamsInvalid,
  ExecutorVersionInvalid,
  ExecutorDataExpired,
  MissingXCall,
  GasEstimationFailed,
  MissingTransfer,
  MissingExecutorData,
  ExecuteSlowCompleted,
} from "../../errors";
import { Message, MessageType } from "../../entities";
import { getOperations } from "..";

export const storeSlowPathData = async (executorData: ExecutorData, _requestContext: RequestContext): Promise<void> => {
  const {
    logger,
    config,
    chainData,
    adapters: { cache, subgraph, mqClient },
  } = getContext();
  const { requestContext, methodContext } = createLoggingContext(storeSlowPathData.name, _requestContext);
  logger.debug(`Method start: ${storeSlowPathData.name}`, requestContext, methodContext, { executorData });

  const { transferId, executorVersion, origin } = executorData;

  // Validate Input schema
  const validateInput = ajv.compile(ExecutorDataSchema);
  const validInput = validateInput(executorData);
  if (!validInput) {
    const msg = validateInput.errors?.map((err: any) => `${err.instancePath} - ${err.message}`).join(",");
    throw new ParamsInvalid({
      paramsError: msg,
      executorData,
    });
  }

  // check if executor version is compatible with hosted sequencer
  const checkVersion = compare(executorVersion, config.supportedVersion!, "<");
  if (checkVersion) {
    throw new ExecutorVersionInvalid({
      supportedVersion: config.supportedVersion,
      executorData,
    });
  }

  // Check to see if we have the XCall data saved locally for this.
  let transfer = await cache.transfers.getTransfer(transferId);
  if (!transfer || !transfer.origin) {
    // Get the XCall from the subgraph for this transfer.
    transfer = await subgraph.getOriginTransferById(origin, transferId);
    if (!transfer || !transfer.origin) {
      throw new MissingXCall(origin, transferId, {
        executorData,
      });
    }
    // Store the transfer locally. We will use this as a reference later when we execute this transfer
    // in the cycle, for both encoding data and passing relayer fee to the relayer.
    await cache.transfers.storeTransfers([transfer]);
  }

  // Ensure that the executor data for this transfer hasn't expired.
  const status = await cache.executors.getExecStatus(transferId);
  if (status === ExecStatus.Completed) {
    throw new ExecuteSlowCompleted({ transferId });
  } else if (status === ExecStatus.None) {
    await cache.executors.setExecStatus(transferId, ExecStatus.Queued);
    await cache.executors.storeExecutorData(executorData);
    logger.info("Created a executor tx", requestContext, methodContext, { transferId, executorData });

    const message: Message = {
      transferId: transfer.transferId,
      originDomain: transfer.xparams!.originDomain,
      type: MessageType.ExecuteSlow,
    };

    await mqClient.publish(config.messageQueue.publisher!, {
      type: transfer.xparams!.originDomain,
      body: message,
      routingKey: transfer.xparams!.originDomain,
      persistent: true,
    });
    logger.info("Enqueued transfer", requestContext, methodContext, {
      message: message,
    });
  } else {
    // The executor data status here is Pending/Cancelled.
    // If Cancelled, fallback processor would work so lets just keep it storing
    // If Pending, the data needs to be stored in the cache as a backup item
    const res = await cache.executors.storeBackupData(executorData);
    logger.info("Stored a executor data in the backup cache", requestContext, methodContext, {
      executorData,
      result: res == 2 ? "Skipped" : "Saved",
    });
  }
};

/**
 * Send any slow-path data from the executor to the relayer directly once sanity checks passes
 * @param transferId - The transfer id you're gonna send
 * @param _requestContext - The parant request context instance
 */
export const executeSlowPathData = async (
  transferId: string,
  type: string,
  _requestContext: RequestContext,
): Promise<{ taskId: string | undefined; taskStatus: RelayerTaskStatus }> => {
  const {
    logger,
    adapters: { cache },
  } = getContext();

  const {
    relayer: { sendExecuteSlowToRelayer },
  } = getOperations();

  const { requestContext, methodContext } = createLoggingContext(storeSlowPathData.name, _requestContext);
  logger.debug(`Method start: ${executeSlowPathData.name}`, requestContext, methodContext, { transferId, type });

  const transfer = await cache.transfers.getTransfer(transferId);
  if (!transfer) {
    throw new MissingTransfer({ transferId });
  }

  const executorData = await cache.executors.getExecutorData(transferId);
  if (!executorData) {
    throw new MissingExecutorData({ transfer });
  }

  // Ensure that the executor data for this transfer hasn't expired.
  const status = await cache.executors.getExecStatus(transferId);
  if (status !== ExecStatus.Queued) {
    throw new ExecutorDataExpired(status, {
      transferId,
      executorData,
    });
  }

  let taskId: string | undefined;
  let taskStatus: RelayerTaskStatus = RelayerTaskStatus.NotFound;
  try {
    const result = await sendExecuteSlowToRelayer(executorData, requestContext);
    taskId = result.taskId;
    taskStatus = result.taskStatus;
  } catch (error: unknown) {
    // TODO: If the first slow-liq transfer fails, we'll try to send backup data one by one
    // If any of backup data succeeds, we'll make the data status `sent`.
    // If all of them also fail, we'll reset all the data for a given transferId
    const backupSlowTxs = await cache.executors.getBackupData(transferId);
    logger.debug("Running a fallback mechanism", requestContext, methodContext, { transferId, backupSlowTxs });
    for (const backupSlowTx of backupSlowTxs) {
      const result = await sendExecuteSlowToRelayer(backupSlowTx, requestContext);
      taskId = result.taskId;
      taskStatus = result.taskStatus;
      if (taskId) break;
    }
  }
  if (taskId && taskStatus) {
    await cache.executors.setExecStatus(transferId, ExecStatus.Completed);
    await cache.executors.upsertMetaTxTask({ transferId, taskId });
  } else {
    // Prunes all the executor data for a given transferId
    await cache.executors.pruneExecutorData(transferId);
  }

  return { taskId, taskStatus };
};
