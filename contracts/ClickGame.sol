// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ClickGame {
    struct Player {
        uint256 highScore;
        address wallet;
    }

    mapping(address => uint256) public highScores;
    Player[3] public leaderboard;

    event NewHighScore(address indexed player, uint256 score);
    event LeaderboardUpdated(address indexed player, uint256 score, uint256 position);

    function updateHighScore(uint256 score) public {
        require(score > highScores[msg.sender], "Score is not higher than the current high score");

        highScores[msg.sender] = score;

        emit NewHighScore(msg.sender, score);

        // Check if the new score should be in the leaderboard
        for (uint256 i = 0; i < leaderboard.length; i++) {
            if (score > leaderboard[i].highScore) {
                // Shift lower scores down the leaderboard
                for (uint256 j = leaderboard.length - 1; j > i; j--) {
                    leaderboard[j] = leaderboard[j - 1];
                }
                // Insert the new high score
                leaderboard[i] = Player(score, msg.sender);
                emit LeaderboardUpdated(msg.sender, score, i + 1);
                break;
            }
        }
    }

    function getLeaderboard() public view returns (Player[3] memory) {
        return leaderboard;
    }
}
