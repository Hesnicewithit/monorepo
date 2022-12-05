import { ReportEventType } from "@connext/nxtp-adapters-watcher";
import { createLoggingContext, createMethodContext, RequestContext } from "@connext/nxtp-utils";

import { getContext } from "../watcher";

export const validateAndPause = async () => {
  const {
    adapters: { watcher },
  } = getContext();

  const { requestContext } = createLoggingContext("validateAndPause");

  const needsPause = await watcher.checkInvariants(requestContext);
  if (needsPause) {
    await pauseAndAlert(requestContext, "TODO");
  }
};

export const pauseAndAlert = async (
  requestContext: RequestContext,
  reason: string,
): Promise<{ paused: boolean[]; domains: string[] }> => {
  const {
    adapters: { watcher },
    logger,
    config,
  } = getContext();
  const methodContext = createMethodContext("pauseAndAlert");

  const domains = Object.keys(config.chains);
  logger.warn("Pausing contracts!!!", requestContext, methodContext, { reason: "ADD REASON" });
  const paused = await watcher.pause(requestContext, reason, domains);
  logger.warn("Paused contracts, alerting", requestContext, methodContext, { paused });
  await watcher.alert({
    domains,
    errors: [],
    reason: "", // TODO: need to return this from checkInvariants
    timestamp: Date.now(),
    event: ReportEventType.Pause,
    logger,
    methodContext,
    relevantTransactions: [], // TODO: need to return this from pause function
    requestContext,
    rpcs: Object.entries(config.chains)
      .map((chain) => chain[1].providers)
      .flat(),
  });
  logger.info("Finished alerting after pause", requestContext, methodContext);
  return { paused, domains };
};
