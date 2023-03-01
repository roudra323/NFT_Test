/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const API_KEY = process.env.API_KEY;
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",

  networks: {
    hardhat: {},
    goerli: {
      url: `https://goerli.infura.io/v3/${API_KEY}`,
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
