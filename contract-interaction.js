// Initialize Web3 and the contract
const web3 = new Web3('https://rpc.api.moonbase.moonbeam.network');
const contractAddress = '0x3C5486f518A9459846d9B749D0E0a7e95b9a310A'; // Replace with your deployed contract address
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
      "name": "Mint",
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
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
    }
]// Replace with your contract's ABI
const contract = new web3.eth.Contract(abi, contractAddress);

// Get elements from the HTML
const totalSupplyButton = document.getElementById('getTotalSupply');
const totalSupplyElement = document.getElementById('totalSupply');
const tokenDetailsButton = document.getElementById('getTokenDetails');
const tokenDetailsElement = document.getElementById('tokenDetails');
const addressInput = document.getElementById('address');
const getBalanceButton = document.getElementById('getBalance');
const balanceElement = document.getElementById('balance');

// Event listener for total supply button
totalSupplyButton.addEventListener('click', async () => {
    try {
        const totalSupply = await contract.methods.totalSupply().call();
        totalSupplyElement.textContent = `Total Supply: ${totalSupply}`;
    } catch (error) {
        console.error(error);
        totalSupplyElement.textContent = 'Error fetching total supply';
    }
});

// Event listener for token details button
tokenDetailsButton.addEventListener('click', async () => {
    try {
        const name = await contract.methods.name().call();
        const symbol = await contract.methods.symbol().call();
        tokenDetailsElement.textContent = `Name: ${name}, Symbol: ${symbol}`;
    } catch (error) {
        console.error(error);
        tokenDetailsElement.textContent = 'Error fetching token details';
    }
});

// Event listener for balance button
getBalanceButton.addEventListener('click', async () => {
    const address = addressInput.value;
    try {
        const balance = await contract.methods.balanceOf(address).call();
        balanceElement.textContent = `Balance of ${address}: ${balance}`;
    } catch (error) {
        console.error(error);
        balanceElement.textContent = 'Error fetching balance';
    }
});
