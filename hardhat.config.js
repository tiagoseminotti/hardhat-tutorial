require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: ropstenNetworkConfig()
  }
};

function ropstenNetworkConfig() {
  let url = "https://ropsten.infura.io/v3/aaf51bdb21b84a9b9f2667829929f54e";
  let accountPrivateKey =
    "0xec0d7e50e6214b5b7be0a7c1376100ec2b41cddf8de17b75a1355da3843c9261";
  if (process.env.ROPSTEN_ENDPOINT) {
    url = `${process.env.ROPSTEN_ENDPOINT}`;
  }

  if (process.env.ROPSTEN_PRIVATE_KEY) {
    accountPrivateKey = `${process.env.ROPSTEN_PRIVATE_KEY}`;
  }

  return {
    url: url,
    accounts: [accountPrivateKey],
  };
}