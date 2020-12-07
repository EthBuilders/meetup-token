require("dotenv").config();

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-truffle5");

module.exports = {
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      timeout: 1000000,
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/" + process.env.INFURA_API_KEY,
      gasPrice: 72e9,
      accounts: {
        mnemonic: process.env.MNEMONIC || "",
      },
      timeout: 1000000,
    },
    kovan: {
      url: "https://kovan.infura.io/v3/" + process.env.INFURA_API_KEY,
      accounts: {
        mnemonic: process.env.MNEMONIC || "",
      },
      timeout: 1000000,
    },
  },
  solidity: {
    version: "0.6.11",
  },
  mocha: {
    timeout: 1000000,
  },
};
