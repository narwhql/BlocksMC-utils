const BlocksMC = require('blocksmc-utils');

const run = async() => {
    const player = await BlocksMC.fetchPlayer('1narwhql');

    console.log(player.getGame('BED_WARS').statistics.deaths)
}

run();