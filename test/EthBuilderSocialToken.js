const { artifacts } = require("hardhat");
const { expect, assert } = require("chai");
const timeMachine = require("ganache-time-traveler");
const {
  BN, // Big Number support
  constants, // Common constants, like the zero address and largest integers
  expectEvent, // Assertions for emitted events
  expectRevert, // Assertions for transactions that should fail
} = require("@openzeppelin/test-helpers");

const EthBuilderSocialToken = artifacts.require("EthBuilderSocialToken");

contract("EthBuilderSocialToken deployment", async (accounts) => {
  const [deployer] = accounts;

  it("should deploy", async function () {
    try {
      const token = await EthBuilderSocialToken.new({ from: deployer });
    } catch (err) {
      console.error(err);
      assert.fail("Could not deploy token.");
    }
  });
});

contract("EthBuilderSocialToken", async (accounts) => {
  const [deployer, user] = accounts;
  let token;
  let snapShotId;

  console.log(accounts);

  before("setup token", async function () {
    token = await EthBuilderSocialToken.new({ from: deployer });
  });

  beforeEach("reset blockchain", async () => {
    const snapshot = await timeMachine.takeSnapshot();
    snapshotId = snapshot["result"];
  });

  afterEach(async () => {
    await timeMachine.revertToSnapshot(snapshotId);
  });

  it("decimals returns correct value", async function () {
    assert.equal(await token.decimals(), 6);
  });

  // it("symbol returns correct value", async function () {
  //   //
  // });

  it("deployer is set as owner", async function () {
    assert.equal(await token.owner(), deployer);
  });

  it("owner can call special people function", async function () {
    assert.equal(
      await token.onlySpecialPeopleCanCall({ from: deployer }),
      "Feels good being special."
    );
  });

  it("Revert when non-owner calls special people function", async function () {
    await expectRevert(
      token.onlySpecialPeopleCanCall({ from: user }),
      "Ownable: caller is not the owner"
    );
  });

  // it("owner has total supply", async function () {
  //   //
  // });

  // it("owner can transfer to user", async function () {
  //   //
  // });
});
