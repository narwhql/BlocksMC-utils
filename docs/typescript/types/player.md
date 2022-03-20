# Types for players

## Player
| attribute  | returns         | description                                             |
|------------|-----------------|---------------------------------------------------------|
| name       | string          | the player's username                                   |
| rank       | string          | the player's rank                                       |
| timePlayed | number          | the player's spent time in the server (in milliseconds) |
| games      | [Game[]](#game) | the player's game statistics                            |

## Game
| attribute  | returns                   | description           |
|------------|---------------------------|-----------------------|
| name       | string                    | the game's title      |
| type       | [GameType](#gametype)     | the game's type       |
| statistics | [Statistics](#statistics) | the game's statistics |

## Statistics
| attribute | returns | games                               | not null |
|-----------|---------|-------------------------------------|----------|
| points    | number  | `ALL`                               | `true`   |
| wins      | number  | `ALL`                               | `true`   |
| played    | number  | `ALL`                               | `true`   |
| eggs      | number  | `SPLEGG` `EGG_WARS` `EGG_WARS_SOLO` | `false`  |
| blocks    | number  | `SPLEGG`                            | `false`  |
| fireworks | number  | `QUAKE_CRAFT`                       | `false`  |
| crates    | number  | `SURVIVAL_GAMES`                    | `false`  |
| dms       | number  | `SURVIVAL_GAMES`                    | `false`  |
| sponges   | number  | `LUCKY_BLOCK_WARS`                  | `false`  |
| beds      | number  | `BED_WARS` `BED_WARS_SOLO`          | `false`  |
| goals     | number  | `THE_BRIDGE`                        | `false`  |
| rounds    | number  | `ONE_VS_ONE`                        | `false`  |

## GameType
- `BLOCK_PARTY`
- `SPLEGG`
- `QUAKE_CRAFT`
- `GRAVITY`
- `SURVIVAL_GAMES`
- `LUCKY_BLOCK_WARS`
- `EGG_WARS`
- `EGG_WARS_SOLO`
- `BED_WARS`
- `BED_WARS_SOLO`
- `SKY_WARS`
- `SKY_WARS_SOLO`
- `SKY_GIANT`
- `SKY_GIANT_MINI`
- `THE_BRIDGE`
- `ONE_VS_ONE`