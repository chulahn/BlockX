// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract OlympicClickathon {
    string public name = "Olympic Clickathon Token";
    string public symbol = "OCT";
    uint8 public decimals = 18;
    uint256 public totalSupply;
    address public owner;

    struct LeaderboardEntry {
        address wallet;
        uint256 score;
    }

    LeaderboardEntry[3] public leaderboard;

    mapping(address => uint256) public balanceOf;
    mapping(address => uint256) public clicks;
    mapping(address => uint256) public highScore;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Click(address indexed user, uint256 clicks);
    event GiftPurchase(address indexed user, string gift, uint256 value);
    event NewHighScore(address indexed user, uint256 highScore);
    event LeaderboardUpdated(address indexed user, uint256 score);

    constructor() {
        owner = msg.sender;
        totalSupply = 1000000 * (10**uint256(decimals));
        balanceOf[owner] = totalSupply;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can call this function");
        _;
    }

    function startClicking() public {
        clicks[msg.sender] = 0; // reset clicks for the new session
    }

    function endClicking(uint256 clickCount) public {
        clicks[msg.sender] = clickCount;
        balanceOf[msg.sender] += clickCount * (10**uint256(decimals));
        totalSupply += clickCount * (10**uint256(decimals));

        if (clickCount > highScore[msg.sender]) {
            highScore[msg.sender] = clickCount;
            updateLeaderboard(msg.sender, clickCount);
            emit NewHighScore(msg.sender, clickCount);
        }

        emit Transfer(address(0), msg.sender, clickCount * (10**uint256(decimals)));
    }

    function updateLeaderboard(address user, uint256 score) internal {
        for (uint256 i = 0; i < leaderboard.length; i++) {
            if (score > leaderboard[i].score) {
                // Shift lower scores down the leaderboard
                for (uint256 j = leaderboard.length - 1; j > i; j--) {
                    leaderboard[j] = leaderboard[j - 1];
                }
                // Insert the new high score
                leaderboard[i] = LeaderboardEntry(user, score);
                emit LeaderboardUpdated(user, score);
                break;
            }
        }
    }

    function getLeaderboard() public view returns (LeaderboardEntry[3] memory) {
        return leaderboard;
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
}