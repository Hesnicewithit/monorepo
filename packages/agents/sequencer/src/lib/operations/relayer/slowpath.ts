import { RequestContext, ExecutorData, getChainIdFromDomain, createLoggingContext } from "@connext/nxtp-utils";

import { sendWithRelayerWithBackup } from "../../../mockable";
import { getContext } from "../../../sequencer";
import { MissingTransfer } from "../../errors";

export const sendExecuteSlowToRelayer = async (
  executorData: ExecutorData,
  _requestContext: RequestContext,
): Promise<{ taskId: string }> => {
  const {
    logger,
    chainData,
    config,
    adapters: { chainreader, relayers, cache, database },
  } = getContext();

  const { requestContext, methodContext } = createLoggingContext(sendExecuteSlowToRelayer.name, _requestContext);
  logger.debug(`Method start: ${sendExecuteSlowToRelayer.name}`, requestContext, methodContext, { executorData });

  const { transferId, encodedData: executeEncodedData } = executorData;
  const transfer = await cache.transfers.getTransfer(transferId);
  if (!transfer) {
    throw new MissingTransfer({ transferId });
  }

  const destinationChainId = await getChainIdFromDomain(transfer.xparams.destinationDomain, chainData);
  const destinationConnextAddress = config.chains[transfer.xparams.destinationDomain].deployments.connext;

  // Simulation data for Execute transfer
  const relayerFrom = await relayers[0].instance.getRelayerAddress(destinationChainId);

  await database.updateExecuteSimulationData(
    transfer.transferId,
    executeEncodedData,
    relayerFrom,
    destinationConnextAddress,
    String(destinationChainId),
  );

  return await sendWithRelayerWithBackup(
    destinationChainId,
    transfer.xparams.destinationDomain,
    destinationConnextAddress,
    executeEncodedData,
    relayers,
    chainreader,
    logger,
    _requestContext,
  );
};
