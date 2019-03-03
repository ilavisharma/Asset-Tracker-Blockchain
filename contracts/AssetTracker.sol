pragma solidity ^0.5.0;
import "./AssetLibrary.sol";

contract AssetTracker {
    
    mapping(uint => AssetLibrary.Asset) public AssetStore;
    uint256 public assetCount= 0;
    
    function createAsset(
        string memory _batchNo,
        string memory _name,
        string memory _description,
        string memory _manufacturer,
        string memory _owner,
        string memory _status
        ) public returns(uint256) {
        
        assetCount++;
        AssetStore[assetCount]= AssetLibrary.Asset(assetCount, _batchNo, _name, _description, _manufacturer , 0);
        AssetStore[assetCount].statusCount++;
        AssetStore[assetCount].status[AssetStore[assetCount].statusCount]=AssetLibrary.Status(block.timestamp, _status, _owner);
        emit AssetCreate(assetCount, _manufacturer, _status);
    }
    
    
    function getAsset(uint _id) view public returns(string memory, string memory, string memory, string memory, string memory, string memory) {
        return (AssetStore[_id].batchNo, AssetStore[_id].name, AssetStore[_id].manufacturer, AssetStore[_id].status[AssetStore[_id].statusCount].owner, AssetStore[_id].status[AssetStore[_id].statusCount].status, AssetStore[_id].description);
    }
    
    function transferAsset(uint _id, string memory _newOwner, string memory _status) public returns(string memory) {
        AssetStore[_id].statusCount++;
        AssetStore[_id].status[AssetStore[_id].statusCount]=AssetLibrary.Status(block.timestamp, _status, _newOwner);
        emit AssetTransfer(_id, _newOwner);
    }
    
    function getAssetCount() view public returns(uint) {
        return assetCount;
    }
    
    function getStatus(uint _id, uint _statusCount) view public returns(uint, string memory, string memory) {
        AssetLibrary.Status memory s= AssetStore[_id].status[_statusCount];
        return (s.time, s.status, s.owner);
    }
    
    event AssetCreate(uint id, string manufacturer, string status);
    event AssetTransfer(uint id, string newOwner);
}