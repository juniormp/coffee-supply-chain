const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "<Infura PROJECT ID>";
// const fs = require('fs');
const mnemonic = "<METAMASK SEED>";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },

    goerli: {
      provider: () => new HDWalletProvider('limb cake dismiss then curve congress similar prepare client around tribe fantasy', 'https://goerli.infura.io/v3/face4cae119b4ab0914c03312bd8b871'), // only used for tests
      network_id: '5', // eslint-disable-line camelcase,
      gas: 4465030
    },

  },

  compilers: {
    solc: {
      // Can also be set to "native" to use a native solc
    }
  }
};