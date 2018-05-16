const contracts = {
    PoaNetworkConsensusAbi : [{
        "constant": true,
        "inputs": [{"name": "", "type": "uint256"}],
        "name": "pendingList",
        "outputs": [{"name": "", "type": "address"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "getCurrentValidatorsLength",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_newAddress", "type": "address"}],
        "name": "setProxyStorage",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_validator", "type": "address"}, {"name": "_shouldFireEvent", "type": "bool"}],
        "name": "addValidator",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "currentValidatorsLength",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{"name": "", "type": "address"}],
        "name": "validatorsState",
        "outputs": [{"name": "isValidator", "type": "bool"}, {"name": "index", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "getPendingList",
        "outputs": [{"name": "", "type": "address[]"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "getVotingToChangeKeys",
        "outputs": [{"name": "", "type": "address"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [],
        "name": "finalizeChange",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_newKey", "type": "address"}, {"name": "_oldKey", "type": "address"}],
        "name": "swapValidatorKey",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{"name": "", "type": "uint256"}],
        "name": "currentValidators",
        "outputs": [{"name": "", "type": "address"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "getKeysManager",
        "outputs": [{"name": "", "type": "address"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "isMasterOfCeremonyInitialized",
        "outputs": [{"name": "", "type": "bool"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "proxyStorage",
        "outputs": [{"name": "", "type": "address"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "finalized",
        "outputs": [{"name": "", "type": "bool"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "getValidators",
        "outputs": [{"name": "", "type": "address[]"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "systemAddress",
        "outputs": [{"name": "", "type": "address"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_validator", "type": "address"}, {"name": "_shouldFireEvent", "type": "bool"}],
        "name": "removeValidator",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "masterOfCeremony",
        "outputs": [{"name": "", "type": "address"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{"name": "_someone", "type": "address"}],
        "name": "isValidator",
        "outputs": [{"name": "", "type": "bool"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"name": "_masterOfCeremony", "type": "address"}, {"name": "validators", "type": "address[]"}],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "name": "parentHash", "type": "bytes32"}, {
            "indexed": false,
            "name": "newSet",
            "type": "address[]"
        }],
        "name": "InitiateChange",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": false, "name": "newSet", "type": "address[]"}],
        "name": "ChangeFinalized",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": false, "name": "nameOfContract", "type": "string"}, {
            "indexed": false,
            "name": "newAddress",
            "type": "address"
        }],
        "name": "ChangeReference",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": false, "name": "proxyStorage", "type": "address"}],
        "name": "MoCInitializedProxyStorage",
        "type": "event"
    }],
    PoaNetworkConsensusAddress: "0x83451c8bc04d4ee9745ccc58edfab88037bc48cc"
};

module.exports = contracts;