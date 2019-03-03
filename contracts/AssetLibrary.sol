pragma solidity ^0.5.1;

library AssetLibrary {
    struct Asset {
        uint id;
        string batchNo;
        string name;
        string description;
        string manufacturer;
        
        uint statusCount;
        mapping(uint => Status) status;
    }
    struct Status {
        uint time;
        string status;
        string owner;
    }
}