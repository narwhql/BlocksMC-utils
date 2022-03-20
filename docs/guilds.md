# Fetching Guild Data

!> At common times the [blocksmc backend](https://blocksmc.com/) is not present for this part. If there are any issues on their backend, then this will not work.

Fetching guild data is simple and will provide you with the following:
- Guild name
- Guild tag
- Guild creation date
- Guild leader
- Guild members

## Fetch URL
?> [https://blocksmc.com/guild/$guild](https://blocksmc.com/guild/zZz)
<br>
Where `$guild` is the requested guild name.

#### Example
```javascript
const BlocksMC = require('blocksmc-utils');

const guild = await BlocksMC.fetchGuild('zZz');

console.log(guild.name); // the guild name
console.log(guild.tag); // the guild tag
console.log(guild.created); // the guild creation date
console.log(guild.createdTimestamp); // the guild creation timestamp
console.log(guild.leader); // the guild leader
console.log(guild.members); // the guild members
```

?> [Guild](typescript/types/guilds.md?id=guild) [GuildMember](typescript/types/guilds.md?id=guildmember)