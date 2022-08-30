let StandardToken = artifacts.require("./TotalContract.sol");

module.exports = function(deployer) {
     deployer.deploy(StandardToken);
};