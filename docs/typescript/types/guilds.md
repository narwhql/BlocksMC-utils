# Types for guilds

## Guild
| attribute        | returns                       | description                                                 |
|------------------|-------------------------------|-------------------------------------------------------------|
| name             | string                        | the guild name                                              |
| tag              | string OR void                | the guild tag; returns undefined if guild does not have tag |
| created          | Date                          | the guild creation date                                     |
| createdTimestamp | number                        | the guild creation timestamp                                |
| leader           | [GuildMember](#guildmember)   | the guild leader                                            |
| members          | [GuildMember[]](#guildmember) | the guild members                                           |

## GuildMember
| attribute         | returns | description                                 |
|-------------------|---------|---------------------------------------------|
| name              | string  | the player's name                           |
| role              | string  | the player's role                           |
| joined            | string  | the player's join date                      |
| joinedTimestamp   | string  | the player's join timestamp                 |
| lastSeen          | string  | the date when the player was last seen      |
| lastSeenTimestamp | string  | the timestamp when the player was last seen |