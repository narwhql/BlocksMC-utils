# Fetching Top Donator Data

Fetching top donator data is simple and will provide you with the following:
- Top donators of the server

## Fetch URL
?> [https://blocksmc.com/](https://blocksmc.com/)

#### Example
```javascript
const topDonators = await BlocksMC.fetchTopDonators();

console.log(topDonators); // top donators
```

?> [TopDonatorPlayer](typescript/types/topdonators.md?id=topdonatorplayer)