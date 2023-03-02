/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const API_URL = process.env.API_URL;
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",

  networks: {
    hardhat: {},
    goerli: {
      url: API_URL,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
