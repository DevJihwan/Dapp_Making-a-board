let TotalContract = artifacts.require("./TotalContract.sol");

module.exports = function(deployer) {
     deployer.deploy(TotalContract);
};