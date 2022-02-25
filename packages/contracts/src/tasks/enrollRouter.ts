import { hexZeroPad } from "ethers/lib/utils";
import { task } from "hardhat/config";

import { NOMAD_DEPLOYMENTS } from "../constants";

export default task("enroll-router", "Add a remote router")
  .addParam("router", "Remote router address")
  .addParam("chain", "Chain of remote router")
  .addOptionalParam("local", "Override local router address")
  .setAction(async ({ router, local: _local, chain }, { deployments, getNamedAccounts, ethers }) => {
    const namedAccounts = await getNamedAccounts();

    console.log("router:", router);
    console.log("chain:", chain);
    console.log("namedAccounts: ", namedAccounts);

    let local = _local;
    if (!local) {
      const localRouterDeployment = await deployments.get("BridgeRouterUpgradeBeaconProxy");
      local = localRouterDeployment.address;
    }
    console.log("local: ", local);

    const config = NOMAD_DEPLOYMENTS.get(parseInt(chain));
    if (!config) {
      throw new Error(`No nomad config found for ${chain}`);
    }

    const localRouter = await ethers.getContractAt((await deployments.getArtifact("BridgeRouter")).abi, local);
    const enrollTx = await localRouter.enrollRemoteRouter(config.domain, hexZeroPad(router, 32));
    console.log("enroll tx:", enrollTx);
    const receipt = await enrollTx.wait();
    console.log("enroll tx mined:", receipt);
  });
