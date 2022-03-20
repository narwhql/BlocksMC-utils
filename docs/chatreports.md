# Fetching Chat Report Data

Fetching guild data is simple and will provide you with the following:
- Chat report code
- Chat report target
- Chat report server
- Chat report creation date
- Chat report messages

## Fetch URL
?> [https://blocksmc.com/chatreport/$code](https://blocksmc.com/chatreport/)
<br>
Where `$chatreport` is the requested chat report code.

#### Example
```javascript
const BlocksMC = require('blocksmc-utils');

const chatreport = await BlocksMC.fetchChatReport('012345678912');

console.log(chatreport.code); // the chat report code (012345678912)
console.log(chatreport.player); // the chat report's target player
console.log(chatreport.server); // the chat report server
console.log(chatreport.created); // the chat report creation date
console.log(chatreport.createdTimestamp); // the chat report creation timestamp
console.log(chatreport.messages); // the chat report messages
```

?> [ChatReport](typescript/types/chatreports.md?id=chatreport) [ChatReportPlayer](typescript/types/chatreports.md?id=chatreportplayer) [ChatReportMessage](typescript/types/chatreports.md?id=chatreportmessage) 