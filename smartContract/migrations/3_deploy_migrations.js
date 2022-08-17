let LoginContract = artifacts.require("./LoginContract.sol");

module.exports = function(deployer) {
     deployer.deploy(LoginContract);
};