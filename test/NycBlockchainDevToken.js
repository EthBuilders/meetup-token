const { artifacts } = require("hardhat");
const { expect, assert } = require("chai");
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
  it("decimals returns correct value", async function () {
    //
  });
  it("symbol returns correct value", async function () {
    //
  });
  it("owner has total supply", async function () {
    //
  });
  it("owner can transfer to user", async function () {
    //
  });
});
