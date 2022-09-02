import { expect, mkHash, mkSig } from "@connext/nxtp-utils";
import { restore, reset, stub, SinonStub } from "sinon";
import * as SharedFns from "../../src/ethers/shared";
import { generateExitPayload, initMatic } from "../../src";
import * as ClientFuncs from "../../src/maticjs/client";
import { POSClient } from "@maticnetwork/maticjs";

const mockChainData = [
  {
    name: "Unit Test Chain 1",
    chainId: "80001",
    domainId: "9991",
    confirmations: 1,
    assetId: {},
    rpc: ["https://rpc.ankr.com/polygon_mumbai"],
  },
  {
    name: "Unit Test Chain 2",
    chainId: "5",
    domainId: "1735353714",
    confirmations: 1,
    assetId: {},
    rpc: ["https://rpc.ankr.com/eth_goerli"],
  },
];

describe("maticjs:proof", () => {
  describe("#generateExitPayload", () => {
    let fetchJsonStub: SinonStub;
    let posClient: POSClient;
    let posClientStub: SinonStub;
    let exitBuildStub: SinonStub;
    let exitCheckpointStub: SinonStub;

    const domain = "9991";
    const mirrorDomain = "1735353714";
    const burnTx = mkHash("0xburn");
    const eventSignature = mkSig("MessageSent(bytes)");
    const mockProof = mkHash("0xproof");

    beforeEach(async () => {
      fetchJsonStub = stub(SharedFns, "fetchJson");
      fetchJsonStub.resolves(mockChainData);

      posClient = await initMatic(false, mockChainData[0].rpc[0], mockChainData[1].rpc[0]);
      posClientStub = stub(ClientFuncs, "initMatic").resolves(posClient);
      exitBuildStub = stub(posClient.exitUtil, "buildPayloadForExit");
      exitCheckpointStub = stub(posClient.exitUtil, "isCheckPointed");
    });

    afterEach(() => {
      restore();
      reset();
    });

    it("should fail if theres no record of domain", async () => {
      await expect(generateExitPayload("111111", mirrorDomain, burnTx, eventSignature)).to.be.rejectedWith(
        "ChainData doesn't have a record for domain: 111111",
      );
    });

    it("should fail if theres no record of mirror domain", async () => {
      await expect(generateExitPayload(domain, "111111", burnTx, eventSignature)).to.be.rejectedWith(
        "ChainData doesn't have a record for mirrorDomain: 111111",
      );
    });

    it("should return null if there are no rpcs && no providers mapping included", async () => {
      fetchJsonStub.resolves(
        mockChainData.map((m) => {
          return { ...m, rpc: [] };
        }),
      );
      const result = await generateExitPayload(domain, mirrorDomain, burnTx, eventSignature);
      expect(result).to.be.undefined;
    });

    it("throws if not checkpoint throws", async () => {
      exitCheckpointStub.throws();
      await expect(generateExitPayload(domain, mirrorDomain, burnTx, eventSignature)).to.be.rejectedWith(
        "Incorrect burn transaction",
      );
    });

    it("throws if not checkpointed", async () => {
      exitCheckpointStub.resolves(false);
      await expect(generateExitPayload(domain, mirrorDomain, burnTx, eventSignature)).to.be.rejectedWith(
        "Burn transaction has not been checkpointed yet",
      );
    });

    it("throws if block not included", async () => {
      exitCheckpointStub.resolves(true);
      exitBuildStub.throws();
      await expect(generateExitPayload(domain, mirrorDomain, burnTx, eventSignature)).to.be.rejectedWith(
        "Event Signature log not found in tx receipt",
      );
    });

    it("happy", async () => {
      exitBuildStub.resolves(mockProof);
      exitCheckpointStub.resolves(true);
      expect(await generateExitPayload(domain, mirrorDomain, burnTx, eventSignature)).to.be.equal(mockProof);

      expect(posClientStub.alwaysCalledWith(false, mockChainData[0].rpc[0], mockChainData[1].rpc[0])).to.be.true;
      expect(exitBuildStub.alwaysCalledWith(burnTx, eventSignature, false)).to.be.true;
      expect(exitCheckpointStub.alwaysCalledWith(burnTx)).to.be.true;
    });
  });
});
