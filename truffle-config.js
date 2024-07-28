require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    moonbeam: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.RPC_URL),
      network_id: 1287,       // Moonbeam's testnet ID
      gas: 5500000,           // Gas limit
      confirmations: 2,       // # of confirmations to wait between deployments
      timeoutBlocks: 200,     // # of blocks before a deployment times out
      skipDryRun: true        // Skip dry run before migrations
    },
  },
  compilers: {
    solc: {
      version: "0.8.0"       // Fetch exact version from solc-bin
    }
  }
};