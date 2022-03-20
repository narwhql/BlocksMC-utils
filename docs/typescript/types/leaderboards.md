# Types for leaderboards

## Leaderboard
| attribute  | returns                                   | description                                             |
|------------|-------------------------------------------|---------------------------------------------------------|
| game       | [LeaderboardGame](#leaderboardgame)       | the leaderboard game                                    |
| players    | [LeaderboardPlayer[]](#leaderboardplayer) | the top leaderboard players                             |

## LeaderboardGame
| attribute | returns                                     | description                 |
|-----------|---------------------------------------------|-----------------------------|
| title     | string                                      | the game's title            |
| type      | [LeaderboardGameType](#leaderboardgametype) | the leaderboard's game type |

## LeaderboardPlayer
| attribute  | returns                                                         | description             |
|------------|-----------------------------------------------------------------|-------------------------|
| name       | string                                                          | the player's name       |
| fetch()    | Promise<[Player](typescript/types/player.md?id=player)> OR void | fetches a normal player |
| statistics | [LeaderboardPlayerStatistics](#leaderboardplayerstatistics)     | the player's statistics |

## LeaderboardPlayerStatistics
| attribute      | returns | games                                                                                                                                                                                                                                                       | not null |
|----------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| wins           | number  | `ALL`                                                                                                                                                                                                                                                       | `true`   |
| played         | number  | `ALL`                                                                                                                                                                                                                                                       | `true`   |
| wl             | number  | `SKY_WARS` `SKY_WARS_SOLO` `BED_WARS` `BED_WARS_SOLO` `EGG_WARS` `EGG_WARS_SOLO` `SURVIVAL_GAMES` `1VS1` `THE_BRIDGE` `LUCKY_BLOCK_WARS` `SKY_GIANT` `SKY_GIANT_MINI` `MURDER_MYSTERY` `TNT_TAG` `SUPER_JUMP` `SPLEGG` `QUAKE_CRAFT` `UHC_RUN`              | `false`  |
| points         | number  | `SKY_WARS` `SKY_WARS_SOLO` `BED_WARS` `BED_WARS_SOLO` `EGG_WARS` `EGG_WARS_SOLO` `TOP_SKYPVP_S1` `SURVIVAL_GAMES` `1VS1` `THE_BRIDGE` `LUCKY_BLOCK_WARS` `SKY_GIANT` `SKY_GIANT_MINI` `BLOCK_PARTY` `GRAVITY` `SUPER_JUMP` `SPLEGG` `QUAKE_CRAFT` `UHC_RUN` | `false`  |
| kills          | number  | `SKY_WARS` `SKY_WARS_SOLO` `BED_WARS` `BED_WARS_SOLO` `EGG_WARS` `EGG_WARS_SOLO` `TOP_SKYPVP_S1` `SURVIVAL_GAMES` `1VS1` `THE_BRIDGE` `LUCKY_BLOCK_WARS` `SKY_GIANT` `SKY_GIANT_MINI` `QUAKE_CRAFT` `UHC_RUN`                                               | `false`  |
| deaths         | number  | `SKY_WARS` `SKY_WARS_SOLO` `BED_WARS` `BED_WARS_SOLO` `EGG_WARS` `EGG_WARS_SOLO` `TOP_SKYPVP_S1` `SURVIVAL_GAMES` `1VS1` `THE_BRIDGE` `LUCKY_BLOCK_WARS` `SKY_GIANT` `SKY_GIANT_MINI` `QUAKE_CRAFT` `UHC_RUN`                                               | `false`  |
| kd             | number  | `SKY_WARS` `SKY_WARS_SOLO` `BED_WARS` `BED_WARS_SOLO` `EGG_WARS` `EGG_WARS_SOLO` `SKYPVP_S1` `SURVIVAL_GAMES` `1VS1` `THE_BRIDGE` `LUCKY_BLOCK_WARS` `SKY_GIANT` `SKY_GIANT_MINI` `QUAKE_CRAFT` `UHC_RUN`                                                   | `false`  |
| beds           | number  | `SKY_WARS` `SKY_WARS_SOLO` `BED_WARS` `BED_WARS_SOLO`                                                                                                                                                                                                       | `false`  |
| eggs           | number  | `EGG_WARS` `EGG_WARS_SOLO` `SPLEGG`                                                                                                                                                                                                                         | `false`  |
| crates         | number  | `SURVIVAL_GAMES`                                                                                                                                                                                                                                            | `false`  |
| rounds         | number  | `1VS1`                                                                                                                                                                                                                                                      | `false`  |
| goals          | number  | `THE_BRIDGE`                                                                                                                                                                                                                                                | `false`  |
| sponges        | number  | `LUCKY_BLOCK_WARS`                                                                                                                                                                                                                                          | `false`  |
| murderer_kills | number  | `MURDER_MYSTERY`                                                                                                                                                                                                                                            | `false`  |
| hero           | number  | `MURER_MYSTERY`                                                                                                                                                                                                                                             | `false`  |
| respawns       | number  | `SUPER_JUMP`                                                                                                                                                                                                                                                | `false`  |
| blocks         | number  | `SPLEGG`                                                                                                                                                                                                                                                    | `false`  |
| tnts           | number  | `SPLEGG`                                                                                                                                                                                                                                                    | `false`  |
| fireworks      | number  | `QUAKE_CRAFT`                                                                                                                                                                                                                                               | `false`  |

## LeaderboardGameType
- `SKY_WARS`
- `SKY_WARS_SOLO`
- `BED_WARS`
- `BED_WARS_SOLO`
- `EGG_WARS`
- `EGG_WARS_SOLO`
- `TOP_SKYPVP_S1`
- `SURVIVAL_GAMES`
- `1VS1`
- `THE_BRIDGE`
- `LUCKY_BLOCK_WARS`
- `SKY_GIANT`
- `SKY_GIANT_MINI`
- `MURDER_MYSTERY`
- `TNT_TAG`
- `BLOCK_PARTY`
- `GRAVITY`
- `SUPER_JUMP`
- `SPLEGG`
- `QUAKE_CRAFT`
- `UHC_RUN`