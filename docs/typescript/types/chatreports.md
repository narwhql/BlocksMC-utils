# Types for chat reports

## ChatReport
| attribute        | returns                                   | description                        |
|------------------|-------------------------------------------|------------------------------------|
| code             | string                                    | the chat report code               |
| player           | [ChatReportPlayer](#chatreportplayer)     | the chat report target player      |
| server           | string                                    | the chat report server             |
| created          | Date                                      | the chat report creation date      |
| createdTimestamp | Date                                      | the chat report creation timestamp |
| messageCount     | number                                    | the chat report message count      |
| messages         | [ChatReportMessage[]](#chatreportmessage) | the chat report messages           |

## ChatReportPlayer
| attribute | returns                                                         | description     |
|-----------|-----------------------------------------------------------------|-----------------|
| name      | string                                                          | the player name |
| fetch()   | Promise<[Player](typescript/types/player.md?id=player)> OR void | the player      |


## ChatReportMessage
| attribute        | returns | description                    |
|------------------|---------|--------------------------------|
| created          | Date    | the message creation date      |
| createdTimestamp | Date    | the message creation timestamp |
| server           | string  | the message server             |
| content          | string  | the message content            |
