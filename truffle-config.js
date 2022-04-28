require("babel-register");
require("babel-polyfill");
require("dotenv").config();
const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const privateKeys = process.env.PRIVATE_KEYS || "";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port:  8545,
      network_id: "*",
    },
    kovan: {
      provider: function () {
        return new HDWalletProvider(privateKeys.split(","), `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`);
      },
      gas: 5000000,
      gasPrice: 5000000000,
      network_id: 42,
    },
    main: {
      provider: function () {
        return new HDWalletProvider(privateKeys.split(","), `https://main.infura.io/v3/${process.env.INFURA_API_KEY}`);
      },
      gas: 5000000,
      gasPrice: 5000000000,
      network_id: 1,
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(privateKeys.split(","), `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`);
      },
      gas: 5000000,
      gasPrice: 5000000000,
      network_id: 4,
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(privateKeys.split(","), `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`);
      },
      gas: 5000000,
      gasPrice: 5000000000,
      network_id: 3,
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      version: ">=0.6.0 <0.8.0",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
