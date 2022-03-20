# Fetching Player Data

!> At common times the [blocksmc backend](https://blocksmc.com/) is not present for this part. If there are any issues on their backend, then this will not work.

Fetching leaderboard data is simple and will provide you with the following:
- Leaderboard title 
- Top leaderboard players
- Statistics

## Fetch URL
?> [https://blocksmc.com/$game](https://blocksmc.com/sky-wars-solo)
<br>
Where `$game` is the requested leaderboard game.

#### Example
```javascript
const BlocksMC = require('blocksmc-utils');

const leaderboard = await BlocksMC.fetchLeaderboards('SKY_WARS_SOLO');

console.log(leaderboard.game.title); // the game's name
console.log(leaderboard.game.type); // the game's type
console.log(leaderboard.players); // the game's top players
```

?> [Leaderboard](typescript/types/leaderboards.md?id=leaderboard) [LeaderboardGame](typescript/types/leaderboards.md?id=leaderboardgame) [LeaderboardPlayer](typescript/types/leaderboards.md?id=leaderboardplayer) [LeaderboardStatistics](typescript/types/leaderboards.md?id=leaderboardstatistics) [LeaderboardGameType](typescript/types/leaderboards.md?id=leaderboardgametype)