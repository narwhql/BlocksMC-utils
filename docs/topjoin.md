# Fetching Top Join Data

Fetching top join data is simple and will provide you with the following:
- Top time spent on the server

## Fetch URL
?> [https://blocksmc.com/](https://blocksmc.com/)

#### Example
```javascript
const topJoin = await BlocksMC.fetchTopJoin();

console.log(topJoin); // top join
```

?> [TopJoinPlayer](typescript/types/topjoin.md?id=topjoinplayer)