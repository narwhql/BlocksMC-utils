# Types for top join

## TopJoinPlayer
| attribute  | returns                                                         | description                                            |
|------------|-----------------------------------------------------------------|--------------------------------------------------------|
| name       | string                                                          | the player name                                        |
| timePlayed | number                                                          | the amount of time spent in the server in milliseconds |
| fetch()    | Promise<[Player](typescript/types/player.md?id=player)> OR void | fetches a normal player                                |

