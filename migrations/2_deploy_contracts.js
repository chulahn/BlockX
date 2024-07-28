const MyToken = artifacts.require("MyToken2");

module.exports = function(deployer) {
  deployer.deploy(MyToken);
};