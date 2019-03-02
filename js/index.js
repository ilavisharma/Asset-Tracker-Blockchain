const AssetTrackerABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_batchNo",
				"type": "string"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_description",
				"type": "string"
			},
			{
				"name": "_manufacturer",
				"type": "string"
			},
			{
				"name": "_owner",
				"type": "string"
			},
			{
				"name": "_status",
				"type": "string"
			}
		],
		"name": "createAsset",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			},
			{
				"name": "_newOwner",
				"type": "string"
			},
			{
				"name": "_status",
				"type": "string"
			}
		],
		"name": "transferAsset",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "manufacturer",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "status",
				"type": "string"
			}
		],
		"name": "AssetCreate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "newOwner",
				"type": "string"
			}
		],
		"name": "AssetTransfer",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "assetCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "AssetStore",
		"outputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "batchNo",
				"type": "string"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "description",
				"type": "string"
			},
			{
				"name": "manufacturer",
				"type": "string"
			},
			{
				"name": "statusCount",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getAsset",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAssetCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			},
			{
				"name": "_statusCount",
				"type": "uint256"
			}
		],
		"name": "getStatus",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

if (typeof web3 !== "undefined") {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProviders("http://127.0.0.1:7545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];

const contractAddress = "0x94382f9be851840bba9a5f59726bea8e7367fe5b";
var fromAddress = "0x7F0D09B5514D2e79271EfD258e1A732Ca5EE89Bf";

const AssetTrackerContract = new web3.eth.Contract(
  AssetTrackerABI,
  contractAddress,
  { from: fromAddress }
);
