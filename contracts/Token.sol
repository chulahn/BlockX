// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyToken {
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Mint(address indexed to, uint256 value);


    constructor() {
        name = "My Token";
        symbol = "MTK";
        decimals = 18;
        totalSupply = 1000000 * (10**uint256(decimals));
        balanceOf[msg.sender] = totalSupply;
    }

    function mint(address to, uint256 value) public {
        require(msg.sender == address(0x4Fbf38eFCDeb381F753BAAA22233cA40dF3123Ac), "Only contract owner can mint tokens");
        balanceOf[to] += value;
        totalSupply += value;
        emit Mint(to, value);
        emit Transfer(address(0), to, value);
    }

    function transfer(address to, uint256 value) public returns (bool) {
        require(balanceOf[msg.sender] >= value, "Insufficient balance");
        balanceOf[msg.sender] -= value;
        balanceOf[to] += value;
        emit Transfer(msg.sender, to, value);
        return true;
    }
}