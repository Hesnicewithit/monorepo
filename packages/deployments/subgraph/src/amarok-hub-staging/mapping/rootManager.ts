/* eslint-disable prefer-const */
import { Address, Bytes } from "@graphprotocol/graph-ts";

import {
  AggregateRootPropagated as AggregateRootPropagatedEvent,
  RootReceived as RootReceivedEvent,
  ConnectorAdded as ConnectorAddedEvent,
  ConnectorRemoved as ConnectorRemovedEvent,
  AggregateRootProposed as AggregateRootProposedEvent,
  SlowModeActivated as SlowModeActivatedEvent,
  OptimisticModeActivated as OptimisticModeActivatedEvent,
  AggregateRootSavedOptimistic as AggregateRootSavedOptimisticEvent,
  AggregateRootSavedSlow as AggregateRootSavedSlowEvent,
} from "../../../generated/RootManager/RootManager";
import {
  AggregateRootPropagated,
  RootAggregated, //TOOD: V1.1 Remove
  RootManagerMeta,
  RootManagerMode,
  OptimisticRootProposed,
  AggregateRootSavedOptimistic,
  AggregateRootSavedSlow,
} from "../../../generated/schema";

const ROOT_MANAGER_META_ID = "ROOT_MANAGER_META_ID";
const ROOT_MANAGER_MODE_ID = "ROOT_MANAGER_MODE_ID";
const OPTIMISTIC_MODE = "OPTIMISTIC_MODE";
const SLOW_MODE = "SLOW_MODE";

/// MARK - ROOT MANAGER
// TODO: Needed?
export function handleRootReceived(event: RootReceivedEvent): void {
  let instance = RootAggregated.load(event.params.receivedRoot.toHexString());
  if (instance == null) {
    instance = new RootAggregated(event.params.receivedRoot.toHexString());
  }

  instance.domain = event.params.domain;
  instance.receivedRoot = event.params.receivedRoot;
  instance.index = event.params.queueIndex;

  instance.save();
}

export function handleAggregateRootPropagated(event: AggregateRootPropagatedEvent): void {
  const key = event.params.aggregateRoot.toHexString();
  // Create the AggregateRootPropagated entity: this is used to track aggregate roots propagated
  // needed for proof generation off-chain.
  let instance = AggregateRootPropagated.load(key);
  if (instance == null) {
    instance = new AggregateRootPropagated(key);
  }
  instance.aggregate = event.params.aggregateRoot;
  instance.domainsHash = event.params.domainsHash;

  instance.save();
}

export function handleConnectorAdded(event: ConnectorAddedEvent): void {
  let instance = RootManagerMeta.load(ROOT_MANAGER_META_ID);
  if (instance == null) {
    instance = new RootManagerMeta(ROOT_MANAGER_META_ID);
  }
  instance.domains = event.params.domains;
  instance.connectors = event.params.connectors.map<Bytes>((c: Address): Bytes => Bytes.fromHexString(c.toHexString()));

  instance.save();
}

export function handleConnectorRemoved(event: ConnectorRemovedEvent): void {
  let instance = RootManagerMeta.load(ROOT_MANAGER_META_ID);
  if (instance == null) {
    instance = new RootManagerMeta(ROOT_MANAGER_META_ID);
  }
  instance.domains = event.params.domains;
  instance.connectors = event.params.connectors.map<Bytes>((c: Address): Bytes => Bytes.fromHexString(c.toHexString()));

  instance.save();
}

export function handleAggregateRootProposed(event: AggregateRootProposedEvent): void {
  let snapshot = OptimisticRootProposed.load(event.params.snapshotId.toHexString());
  if (snapshot == null) {
    snapshot = new OptimisticRootProposed(event.params.snapshotId.toHexString());
  }

  snapshot.disputeCliff = event.params.endOfDispute;
  snapshot.aggregateRoot = event.params.aggregateRoot;
  snapshot.snapshotsRoots = event.params.snapshotsRoots;
  snapshot.domains = event.params.domains;
  snapshot.baseAggregateRoot = event.params.baseRoot;

  snapshot.save();
}

export function handleAggregateRootSavedOptimistic(event: AggregateRootSavedOptimisticEvent): void {
  const key = event.params.aggregateRoot.toHexString();
  let instance = AggregateRootSavedOptimistic.load(key);
  if (instance == null) {
    instance = new AggregateRootSavedOptimistic(key);
  }
  instance.aggregate = event.params.aggregateRoot;
  instance.rootTimestamp = event.params.rootTimestamp;

  instance.save();
}

export function handleAggregateRootSavedSlow(event: AggregateRootSavedSlowEvent): void {
  const key = event.params.aggregateRoot.toHexString();
  let instance = AggregateRootSavedSlow.load(key);
  if (instance == null) {
    instance = new AggregateRootSavedSlow(key);
  }
  instance.count = event.params.leafCount;
  instance.aggregatedRoots = event.params.aggregatedRoots;
  instance.rootTimestamp = event.params.rootTimestamp;

  instance.save();
}

export function handleSlowModeActivated(event: SlowModeActivatedEvent): void {
  let instance = RootManagerMode.load(ROOT_MANAGER_MODE_ID);
  if (instance == null) {
    instance = new RootManagerMode(ROOT_MANAGER_MODE_ID);
  }

  instance.mode = SLOW_MODE;

  instance.save();
}

export function handleOptimisticModeActivated(event: OptimisticModeActivatedEvent): void {
  let instance = RootManagerMode.load(ROOT_MANAGER_MODE_ID);
  if (instance == null) {
    instance = new RootManagerMode(ROOT_MANAGER_MODE_ID);
  }

  instance.mode = OPTIMISTIC_MODE;

  instance.save();
}
