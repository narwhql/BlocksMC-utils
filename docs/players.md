# Fetching Player Data

Fetching player data is simple and will provide you with the following:
- Username 
- Rank
- Time Played
- Game Statistics

## Fetch URL
?> [https://blocksmc.com/player/$username](https://blocksmc.com/player/1Narwhql)
<br>
Where `$username` is the requested player's username.

## Code Example
```javascript
const BlocksMC = require('blocksmc-utils');

const player = await BlocksMC.fetchPlayer('1Narwhql');

console.log(player.name); // the player's name
console.log(player.rank); // the player's rank
console.log(player.timePlayed); // time spent in the server in miliseconds
console.log(player.games); // the player's game statistics
```

?> [Player](typescript/types/player.md?id=player)

## Accessing Specific Game Statistics
```javascript
const game = player.getGame(type: GameType);

Game {
    name: 'SkyWars Solo',
    type: 'SKY_WARS_SOLO',
    statistics: {
        points: 0,
        kills: ...
    }
}
```

?> [Game](typescript/types/player.md?id=game), [GameType](typescript/types/player.md?id=gametype)

## Example Response
```javascript
Player {
    name: '1Narwhql',
    rank: 'Moderator',
    timePlayed: 0,
    games: [
        {
            name: 'SkyWars Solo',
            type: 'SKY_WARS_SOLO',
            statistics: {
                points: 0,
                kills: ...
            }
        },
        {
            ...
        }
    ]
}
```