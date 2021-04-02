const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //Constructor function/ class 
const web3 = new Web3(ganache.provider()); //Our actual instance of Web3
//Web 3 allows JavaScript communicate with the Ethereum network.


