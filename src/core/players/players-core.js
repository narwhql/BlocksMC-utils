const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const cheerio = require('cheerio');
const ms = require('ms');

class Player {
    constructor(playerData) {
        this.name = playerData.name;
        this.rank = playerData.rank;
        this.timePlayed = playerData.timePlayed;
        this.games = playerData.games;
    }

    getGame(gameType) {
        return this.games.filter(game => game.type === gameType).length !== 0 ? this.games.filter(game => game.type === gameType)[0] : null;
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

        const response = await fetch(`https://blocksmc.com/player/${username}/?__cf_chl_jschl_tk__=pmd_`, {method: 'GET'}).then(res => res.text());
        const $ = cheerio.load(response);

        const name = $('.profile-header h1').text().trim();

        if (!name || name === '') {
            resolve(undefined);
            return;
        }

        const rank = $('.profile-rank').text().replace('\n', '').trim();
        const playTime = $('.profile-time h1').text().replace('\n', '').trim();
        const games = [];

        $('div.col-xl-4').each(function() {
            const stats = {};

            $(this).find('li').each(function () {
                stats[$(this).find('div.key').text().toLowerCase()] = parseInt($(this).find('div.val').text());
            });

            const title = $(this).find('div.title').text().trim();
            let type = null;

            if (title === 'Block Party') type = 'BLOCK_PARTY';
            else if (title === 'Splegg') type = 'SPLEGG';
            else if (title === 'QuakeCraft') type = 'QUAKE_CRAFT';
            else if (title === 'Gravity') type = 'GRAVITY';
            else if (title === 'SurvivalGames') type = 'SURVIVAL_GAMES';
            else if (title === 'LuckyBlockWars') type = 'LUCKY_BLOCK_WARS';
            else if (title === 'EggWars') type = 'EGG_WARS';
            else if (title === 'EggWars:Solo') type = 'EGG_WARS_SOLO';
            else if (title === 'BedWars') type = 'BED_WARS';
            else if (title === 'BedWars:Solo') type = 'BED_WARS_SOLO';
            else if (title === 'SkyWars') type = 'SKY_WARS';
            else if (title === 'SkyWars:Solo') type = 'SKY_WARS_SOLO';
            else if (title === 'SkyGiant') type = 'SKY_GIANT';
            else if (title === 'SkyGiant Mini') type = 'SKY_GIANT_MINI';
            else if (title === 'The Bridge') type = 'THE_BRIDGE';
            else if (title === '1VS1') type = 'ONE_VS_ONE';

            games.push({
                name: title.replaceAll(':', ' '),
                type: type,
                statistics: stats
            });
        });

        resolve(new Player({
            name: name,
            rank: rank,
            timePlayed: ms(playTime),
            games: games
        }));
    });
}