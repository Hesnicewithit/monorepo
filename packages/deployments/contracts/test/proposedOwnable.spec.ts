import { ethers, waffle } from "hardhat";
import { expect, use } from "chai";
import { solidity } from "ethereum-waffle";
use(solidity);

import { constants, providers, Wallet } from "ethers";

import { ProposedOwnableUpgradeable, TestProposedOwnable } from "../typechain-types";
import {
  assertReceiptEvent,
  deployBeaconProxy,
  proposeNewOwnerOnContract,
  setBlockTime,
  transferOwnershipOnContract,
  upgradeBeaconProxy,
} from "./utils";

const createFixtureLoader = waffle.createFixtureLoader;
describe("ProposedOwnableUpgradeable.sol", () => {
  const [wallet, other] = waffle.provider.getWallets() as Wallet[];
  let proposedOwnable: TestProposedOwnable, beaconAddress: string;

  const fixture = async () => {
    // we want to test
    [proposedOwnable, beaconAddress] = await deployBeaconProxy<TestProposedOwnable>("TestProposedOwnable", [5]);
  };

  const proposeNewOwner = async (newOwner: string = constants.AddressZero) => {
    // Propose new owner
    return await proposeNewOwnerOnContract(newOwner, wallet, proposedOwnable as unknown as ProposedOwnableUpgradeable);
  };

  const proposeRouterOwnershipRenunciation = async () => {
    // Propose new owner
    const tx = await proposedOwnable.connect(wallet).proposeRouterOwnershipRenunciation();
    const receipt: providers.TransactionReceipt = await tx.wait();
    const block = await ethers.provider.getBlock(receipt.blockNumber);
    assertReceiptEvent(receipt, "RouterOwnershipRenunciationProposed", { timestamp: block.timestamp });
    expect(await proposedOwnable.routerOwnershipTimestamp()).to.be.eq(block.timestamp);
  };

  const proposeAssetOwnershipRenunciation = async () => {
    // Propose new owner
    const tx = await proposedOwnable.connect(wallet).proposeAssetOwnershipRenunciation();
    const receipt: providers.TransactionReceipt = await tx.wait();
    const block = await ethers.provider.getBlock(receipt.blockNumber);
    assertReceiptEvent(receipt, "AssetOwnershipRenunciationProposed", { timestamp: block.timestamp });
    expect(await proposedOwnable.assetOwnershipTimestamp()).to.be.eq(block.timestamp);
    return receipt;
  };

  const transferOwnership = async (newOwner: string = constants.AddressZero, caller = other) => {
    await transferOwnershipOnContract(
      newOwner,
      caller,
      proposedOwnable as unknown as ProposedOwnableUpgradeable,
      wallet,
    );
  };

  const renounceAssetOwnership = async () => {
    await proposeAssetOwnershipRenunciation();
    // Advance block time
    const eightDays = 8 * 24 * 60 * 60;
    const { timestamp } = await ethers.provider.getBlock("latest");
    await setBlockTime(timestamp + eightDays);

    const tx = await proposedOwnable.connect(wallet).renounceAssetOwnership();
    const receipt = await tx.wait();
    assertReceiptEvent(receipt, "AssetOwnershipRenounced", { renounced: true });
  };

  const renounceRouterOwnership = async () => {
    await proposeRouterOwnershipRenunciation();

    // Advance block time
    const eightDays = 8 * 24 * 60 * 60;
    const { timestamp } = await ethers.provider.getBlock("latest");
    await setBlockTime(timestamp + eightDays);

    const tx = await proposedOwnable.connect(wallet).renounceRouterOwnership();
    const receipt = await tx.wait();
    assertReceiptEvent(receipt, "RouterOwnershipRenounced", { renounced: true });
    expect(await proposedOwnable.routerOwnershipTimestamp()).to.be.eq(constants.Zero);
  };

  let loadFixture: ReturnType<typeof createFixtureLoader>;
  before("create fixture loader", async () => {
    loadFixture = createFixtureLoader([wallet, other]);
  });

  beforeEach(async () => {
    await loadFixture(fixture);
  });

  describe("upgradeable", () => {
    it("should work", async () => {
      await proposedOwnable.setValue(10);
      const upgraded = await upgradeBeaconProxy("TestProposedOwnable", beaconAddress);
      expect(upgraded).to.be.true;
      const upgradedInstance = (await ethers.getContractFactory("TestProposedOwnable")).attach(proposedOwnable.address);
      expect(await upgradedInstance.getValue()).to.be.eq(10);
      await proposedOwnable.setValue(15);
      expect(await upgradedInstance.getValue()).to.be.eq(15);
    });
  });

  describe("owner", () => {
    it("should work", async () => {
      expect(await proposedOwnable.owner()).to.be.eq(wallet.address);
    });
  });

  describe("proposed", () => {
    it("should work", async () => {
      expect(await proposedOwnable.proposed()).to.be.eq(constants.AddressZero);
      await proposeNewOwner(other.address);
      expect(await proposedOwnable.proposed()).to.be.eq(other.address);
    });
  });

  describe("proposedTimestamp", () => {
    it("should work", async () => {
      expect(await proposedOwnable.proposedTimestamp()).to.be.eq(constants.Zero);
      const receipt = await proposeNewOwner(other.address);
      const block = await ethers.provider.getBlock(receipt.blockNumber);
      expect(await proposedOwnable.proposedTimestamp()).to.be.eq(block.timestamp);
    });
  });

  describe("routerOwnershipTimestamp", () => {
    it("should work", async () => {
      expect(await proposedOwnable.routerOwnershipTimestamp()).to.be.eq(constants.Zero);
      await proposeRouterOwnershipRenunciation();
    });
  });

  describe("assetOwnershipTimestamp", () => {
    it("should work", async () => {
      expect(await proposedOwnable.assetOwnershipTimestamp()).to.be.eq(constants.Zero);
      await proposeAssetOwnershipRenunciation();
    });
  });

  describe("delay", () => {
    it("should work", async () => {
      expect(await proposedOwnable.delay()).to.be.eq(7 * 24 * 60 * 60);
    });
  });

  describe("isRouterOwnershipRenounced", () => {
    it("should work if renounced", async () => {
      await transferOwnership(constants.AddressZero, wallet);
      expect(await proposedOwnable.renounced()).to.be.true;
      expect(await proposedOwnable.isRouterOwnershipRenounced()).to.be.true;
    });

    it("should work if asset ownership renounced", async () => {
      await renounceRouterOwnership();
      expect(await proposedOwnable.renounced()).to.be.false;
      expect(await proposedOwnable.isRouterOwnershipRenounced()).to.be.true;
    });
  });

  describe("proposeRouterOwnershipRenunciation", () => {
    it("should fail if router ownership is already renounced", async () => {
      await renounceRouterOwnership();
      await expect(proposedOwnable.connect(wallet).proposeRouterOwnershipRenunciation()).to.be.revertedWith(
        "ProposedOwnableUpgradeable__proposeRouterOwnershipRenunciation_noOwnershipChange",
      );
    });

    it("should work", async () => {
      await proposeRouterOwnershipRenunciation();
    });
  });

  describe("renounceRouterOwnership", () => {
    it("should fail if router ownership is already renounced", async () => {
      await renounceRouterOwnership();
      await expect(proposedOwnable.connect(wallet).renounceRouterOwnership()).to.be.revertedWith(
        "ProposedOwnableUpgradeable__renounceRouterOwnership_noOwnershipChange",
      );
    });

    it("should fail if there is no proposal in place", async () => {
      await expect(proposedOwnable.connect(wallet).renounceRouterOwnership()).to.be.revertedWith(
        "ProposedOwnableUpgradeable__renounceRouterOwnership_noProposal",
      );
    });

    it("should fail if delay has not elapsed", async () => {
      await proposeRouterOwnershipRenunciation();
      await expect(proposedOwnable.connect(wallet).renounceRouterOwnership()).to.be.revertedWith(
        "ProposedOwnableUpgradeable__renounceRouterOwnership_delayNotElapsed",
      );
    });

    it("should work", async () => {
      await renounceRouterOwnership();
    });
  });

  describe("isAssetOwnershipRenounced", () => {
    it("should work if renounced", async () => {
      await transferOwnership(constants.AddressZero, wallet);
      expect(await proposedOwnable.renounced()).to.be.true;
      expect(await proposedOwnable.isAssetOwnershipRenounced()).to.be.true;
    });

    it("should work if asset ownership renounced", async () => {
      await renounceAssetOwnership();
      expect(await proposedOwnable.renounced()).to.be.false;
      expect(await proposedOwnable.isAssetOwnershipRenounced()).to.be.true;
    });
  });

  describe("proposeAssetOwnershipRenunciation", () => {
    it("should fail if asset ownership already renounced", async () => {
      await renounceAssetOwnership();
      await expect(proposedOwnable.connect(wallet).proposeAssetOwnershipRenunciation()).to.be.revertedWith(
        "ProposedOwnableUpgradeable__proposeAssetOwnershipRenunciation_noOwnershipChange",
      );
    });

    it("should work", async () => {
      await proposeAssetOwnershipRenunciation();
    });
  });

  describe("renounceAssetOwnership", () => {
    it("should fail if asset ownership is already renounced", async () => {
      await renounceAssetOwnership();
      await expect(proposedOwnable.connect(wallet).renounceAssetOwnership()).to.be.revertedWith(
        "ProposedOwnableUpgradeable__renounceAssetOwnership_noOwnershipChange",
      );
    });

    it("should fail if no proposal was made", async () => {
      await expect(proposedOwnable.connect(wallet).renounceAssetOwnership()).to.be.revertedWith(
        "ProposedOwnableUpgradeable__renounceAssetOwnership_noProposal",
      );
    });

    it("should fail if delay has not elapsed", async () => {
      await proposeAssetOwnershipRenunciation();
      await expect(proposedOwnable.connect(wallet).renounceAssetOwnership()).to.be.revertedWith(
        "ProposedOwnableUpgradeable__renounceAssetOwnership_delayNotElapsed",
      );
    });

    it("should work", async () => {
      await renounceAssetOwnership();
    });
  });

  describe("renounced", () => {
    it("should return false if owner is not renounced", async () => {
      expect(await proposedOwnable.renounced()).to.be.false;
    });

    it("should return true if owner is renounced", async () => {
      // Propose new owner of address(0)
      await transferOwnership(constants.AddressZero, wallet);

      // Check renounced
      expect(await proposedOwnable.renounced()).to.be.true;
    });
  });

  describe("proposeNewOwner", () => {
    it("should fail if not called by owner", async () => {
      await expect(proposedOwnable.connect(other).proposeNewOwner(constants.AddressZero)).to.be.revertedWith(
        "ProposedOwnableUpgradeable__onlyOwner_notOwner",
      );
    });

    it("should fail if proposing the same address as what is already proposed", async () => {
      await proposeNewOwner(other.address);
      await expect(proposedOwnable.connect(wallet).proposeNewOwner(other.address)).to.be.revertedWith(
        "ProposedOwnableUpgradeable__proposeNewOwner_invalidProposal",
      );
    });

    it("should fail if proposing the owner", async () => {
      await expect(proposedOwnable.connect(wallet).proposeNewOwner(wallet.address)).to.be.revertedWith(
        "ProposedOwnableUpgradeable__proposeNewOwner_noOwnershipChange",
      );
    });

    it("should work", async () => {
      await proposeNewOwner(other.address);
    });
  });

  describe("renounceOwnership", () => {
    it("should fail if there was no proposal", async () => {
      await expect(proposedOwnable.connect(wallet).renounceOwnership()).to.be.revertedWith(
        "ProposedOwnableUpgradeable__renounceOwnership_noProposal",
      );
    });

    it("should fail if the delay hasnt elapsed", async () => {
      await proposeNewOwner(constants.AddressZero);
      await expect(proposedOwnable.connect(wallet).renounceOwnership()).to.be.revertedWith(
        "ProposedOwnableUpgradeable__renounceOwnership_delayNotElapsed",
      );
    });

    it("should fail if the proposed != address(0)", async () => {
      await proposeNewOwner(Wallet.createRandom().address);

      // Advance block time
      const eightDays = 8 * 24 * 60 * 60;
      const { timestamp } = await ethers.provider.getBlock("latest");
      await setBlockTime(timestamp + eightDays);

      await expect(proposedOwnable.connect(wallet).renounceOwnership()).to.be.revertedWith(
        "ProposedOwnableUpgradeable__renounceOwnership_invalidProposal",
      );
    });

    it("should fail if not called by owner", async () => {
      await proposeNewOwner(constants.AddressZero);
      await expect(proposedOwnable.connect(other).renounceOwnership()).to.be.revertedWith(
        "ProposedOwnableUpgradeable__onlyOwner_notOwner",
      );
    });

    it("should work", async () => {
      await transferOwnership(constants.AddressZero, wallet);
    });
  });

  describe("acceptProposedOwner", () => {
    it("should fail if not called by proposed", async () => {
      await proposeNewOwner(other.address);
      await expect(proposedOwnable.connect(wallet).acceptProposedOwner()).to.be.revertedWith(
        "ProposedOwnableUpgradeable__onlyProposed_notProposedOwner",
      );
    });

    it("should fail if there is no effective change in ownership", async () => {
      // First make and accept a new owner
      await transferOwnership(other.address);

      // Then try again
      await expect(proposedOwnable.connect(other).acceptProposedOwner()).to.be.revertedWith(
        "ProposedOwnableUpgradeable__acceptProposedOwner_noOwnershipChange",
      );
    });

    it("should fail if delay has not elapsed", async () => {
      await proposeNewOwner(other.address);
      await expect(proposedOwnable.connect(other).acceptProposedOwner()).to.be.revertedWith(
        "ProposedOwnableUpgradeable__acceptProposedOwner_delayNotElapsed",
      );
    });

    it("should work", async () => {
      await transferOwnership(other.address, other);
    });
  });
});
