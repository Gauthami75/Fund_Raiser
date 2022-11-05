require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
/** @type import('hardhat/config').HardhatUserConfig */

const privateKey =process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.17",
  paths:{
    artifacts:'./src/artifacts'
  },
  network:{
    hardhat:{
      chainId:31337,
    }
  }
};
