let DWToken = artifacts.require("./TotalContract.sol");

module.exports = function(deployer) {
     deployer.deploy(DWToken);
};