const fetchGuild = require("../guilds/guilds-core");

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

class Player {
    constructor(playerData) {
        this.name = playerData.name;
        this.guildName = playerData.guildName;
        this.guildTag = playerData.guildTag;
        this.rank = playerData.rank;
        this.timePlayed = playerData.timePlayed;
        this.games = playerData.games;
    }

    getGame(gameType) {
        return this.games.filter(game => game.type === gameType).length !== 0 ? this.games.filter(game => game.type === gameType)[0] : null;
    }

    async fetchGuild() {
        return this.guildName ? await fetchGuild(this.guildName) : null;
    }
}

/**
 *
 * @param username {string}
 * @returns {Promise<Player>}
 */
module.exports = (username) => {
    return new Promise(async (resolve, reject) => {
        if (!username || username === '' || typeof username !== 'string') {
            reject(new Error('[BlocksMC Utils] A valid username was not provided.'));
            return;
        }

        const response = await fetch(`https://util.narwhql.ml/player/${username}`, { method: 'GET' }, 30000).then(res => res.json());
        
        if (!response || response.registered == false) return resolve(undefined);

        resolve(new Player({
            name: response.name,
            guildName: response.guildName,
            guildTag: response.guildTag,
            rank: response.rank,
            timePlayed: response.timePlayed,
            games: response.games
        }));
    });
}