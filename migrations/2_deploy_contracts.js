let AssetTracker= artifacts.require("./AssetTracker.sol")

module.exports= deployer => {
    deployer.deploy(AssetTracker);
}