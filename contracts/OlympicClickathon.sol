// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract OlympicClickathon {
    string public name = "Olympic Clickathon Token";
    string public symbol = "OCT";
    uint8 public decimals = 18;
    uint256 public totalSupply;
    address public owner;

    mapping(address => uint256) public balanceOf;
    mapping(address => uint256) public clicks;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Click(address indexed user, uint256 clicks);
    event GiftPurchase(address indexed user, string gift, uint256 value);

    constructor() {
        owner = msg.sender;
        totalSupply = 1000000 * (10**uint256(decimals));
        balanceOf[owner] = totalSupply;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can call this function");
        _;
    }
    function transfer(address to, uint256 value) public returns (bool) {
        require(balanceOf[msg.sender] >= value, "Insufficient balance");
        balanceOf[msg.sender] -= value;
        balanceOf[to] += value;
        emit Transfer(msg.sender, to, value);
        return true;
    }

    function purchaseGift(string memory gift, uint256 value) public returns (bool) {
        require(balanceOf[msg.sender] >= value, "Insufficient balance");
        balanceOf[msg.sender] -= value;
        emit GiftPurchase(msg.sender, gift, value);
        return true;
    }

    function click() public {
        clicks[msg.sender] += 1;
        balanceOf[msg.sender] += 1 * (10**uint256(decimals));
        totalSupply += 1 * (10**uint256(decimals));
        emit Click(msg.sender, clicks[msg.sender]);
        emit Transfer(address(0), msg.sender, 1 * (10**uint256(decimals)));
    }

}
