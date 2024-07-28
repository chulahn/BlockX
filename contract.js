const contractAddress = '0x78C4f023e15a75f0B60b327455a149775135E0E2'; // Replace with your deployed contract address
const abi = [
{
"inputs": [],
"stateMutability": "nonpayable",
"type": "constructor"
},
{
"anonymous": false,
"inputs": [
{
  "indexed": true,
  "internalType": "address",
  "name": "user",
  "type": "address"
},
{
  "indexed": false,
  "internalType": "uint256",
  "name": "clicks",
  "type": "uint256"
}
],
"name": "Click",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
  "indexed": true,
  "internalType": "address",
  "name": "user",
  "type": "address"
},
{
  "indexed": false,
  "internalType": "string",
  "name": "gift",
  "type": "string"
},
{
  "indexed": false,
  "internalType": "uint256",
  "name": "value",
  "type": "uint256"
}
],
"name": "GiftPurchase",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
  "indexed": true,
  "internalType": "address",
  "name": "user",
  "type": "address"
},
{
  "indexed": false,
  "internalType": "uint256",
  "name": "score",
  "type": "uint256"
}
],
"name": "LeaderboardUpdated",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
  "indexed": true,
  "internalType": "address",
  "name": "user",
  "type": "address"
},
{
  "indexed": false,
  "internalType": "uint256",
  "name": "highScore",
  "type": "uint256"
}
],
"name": "NewHighScore",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
  "indexed": true,
  "internalType": "address",
  "name": "from",
  "type": "address"
},
{
  "indexed": true,
  "internalType": "address",
  "name": "to",
  "type": "address"
},
{
  "indexed": false,
  "internalType": "uint256",
  "name": "value",
  "type": "uint256"
}
],
"name": "Transfer",
"type": "event"
},
{
"inputs": [
{
  "internalType": "address",
  "name": "",
  "type": "address"
}
],
"name": "balanceOf",
"outputs": [
{
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
  "internalType": "address",
  "name": "",
  "type": "address"
}
],
"name": "clicks",
"outputs": [
{
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "decimals",
"outputs": [
{
  "internalType": "uint8",
  "name": "",
  "type": "uint8"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
  "internalType": "address",
  "name": "",
  "type": "address"
}
],
"name": "highScore",
"outputs": [
{
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
}
],
"name": "leaderboard",
"outputs": [
{
  "internalType": "address",
  "name": "wallet",
  "type": "address"
},
{
  "internalType": "uint256",
  "name": "score",
  "type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "name",
"outputs": [
{
  "internalType": "string",
  "name": "",
  "type": "string"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "owner",
"outputs": [
{
  "internalType": "address",
  "name": "",
  "type": "address"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "symbol",
"outputs": [
{
  "internalType": "string",
  "name": "",
  "type": "string"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "totalSupply",
"outputs": [
{
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [],
"name": "startClicking",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [
{
  "internalType": "uint256",
  "name": "clickCount",
  "type": "uint256"
}
],
"name": "endClicking",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [],
"name": "getLeaderboard",
"outputs": [
{
  "components": [
    {
      "internalType": "address",
      "name": "wallet",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "score",
      "type": "uint256"
    }
  ],
  "internalType": "struct OlympicClickathon.LeaderboardEntry[3]",
  "name": "",
  "type": "tuple[3]"
}
],
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
{
  "internalType": "address",
  "name": "to",
  "type": "address"
},
{
  "internalType": "uint256",
  "name": "value",
  "type": "uint256"
}
],
"name": "transfer",
"outputs": [
{
  "internalType": "bool",
  "name": "",
  "type": "bool"
}
],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [
{
  "internalType": "string",
  "name": "gift",
  "type": "string"
},
{
  "internalType": "uint256",
  "name": "value",
  "type": "uint256"
}
],
"name": "purchaseGift",
"outputs": [
{
  "internalType": "bool",
  "name": "",
  "type": "bool"
}
],
"stateMutability": "nonpayable",
"type": "function"
}
]


let web3;
let contract;
let account;

async function init() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
            const accounts = await web3.eth.getAccounts();
            account = accounts[0];
            document.getElementById('account').innerText = account;

            contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
            updateBalance();
            updateHighScore();
        } catch (error) {
            console.error("Error initializing web3: ", error);
        }
    } else {
        console.error('MetaMask is not installed.');
    }
}

async function updateBalance() {
    try {
        const balance = await contract.methods.balanceOf(account).call();
        document.getElementById('balance').innerText = web3.utils.fromWei(balance, 'ether');
    } catch (error) {
        console.error("Error updating balance: ", error);
    }
}

async function updateHighScore() {
    try {
        const score = await contract.methods.highScore(account).call();
        document.getElementById('highScore').innerText = score;
    } catch (error) {
        console.error("Error updating high score: ", error);
    }
}

document.getElementById('clickButton').addEventListener('click', async () => {
    if (clicks === 0) {
        clicks = 0;
        const interval = setInterval(() => {
            clicks += 1;
            document.getElementById('clicks').innerText = clicks;
        }, 100);

        setTimeout(async () => {
            clearInterval(interval);
            try {
                await contract.methods.recordClicks(account, clicks).send({ from: account });
                updateBalance();
                updateHighScore();
            } catch (error) {
                console.error("Error recording clicks: ", error);
            }
            clicks = 0;
            document.getElementById('clicks').innerText = clicks;
        }, 5000);
    }
});

init();
