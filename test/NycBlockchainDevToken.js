const { artifacts } = require("hardhat");
const { expect, assert } = require("chai");
const timeMachine = require("ganache-time-traveler");
const NycBlockchainDevToken = artifacts.require("NycBlockchainDevToken");

describe("NycBlockchainDevToken deployment", function () {
  it("should deploy", async function () {
    try {
      const token = await NycBlockchainDevToken.new();
    } catch (err) {
      console.error(err);
      assert.fail("Could not deploy token.");
    }
  });
});

describe("NycBlockchainDevToken", function () {
  let token;
  let snapShotId;

  before("setup token", async function () {
    //
  });

  beforeEach("reset blockchain", async () => {
    const snapshot = await timeMachine.takeSnapshot();
    snapshotId = snapshot["result"];
  });

  afterEach(async () => {
    await timeMachine.revertToSnapshot(snapshotId);
  });

  it("decimals returns correct value", async function () {
    //
  });

  it("symbol returns correct value", async function () {
    //
  });

  it("deployer is set as owner", async function () {
    //
  });

  it("owner has total supply", async function () {
    //
  });

  it("owner can transfer to user", async function () {
    //
  });
});
