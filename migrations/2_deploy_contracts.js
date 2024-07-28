const MyToken = artifacts.require("OlympicClickathon");

module.exports = function(deployer) {
  deployer.deploy(MyToken);
};