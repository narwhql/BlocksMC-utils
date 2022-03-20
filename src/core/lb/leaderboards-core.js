const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const cheerio = require('cheerio');
const playersCore = require('../players/players-core');

const clean = (string) => {
    return string.toLowerCase().replaceAll('_', '-').split(' ').join('-');
}

class Leaderboard {
    constructor(leaderboardData) {
        this.game = leaderboardData.game;
        this.players = leaderboardData.players;
    }
}

/**
 *
 * @param gameType {string}
 * @returns {Promise<Leaderboard>}
 */
module.exports = (gameType) => {
    return new Promise(async(resolve, reject) => {
        if (!gameType || gameType === '' || typeof gameType !== 'string') {
            reject(new Error('[BlocksMC Utils] A valid game was not provided.'));
            return;
        }

        const response = await fetch(`https://blocksmc.com/${clean(gameType)}/?__cf_chl_jschl_tk__=pmd_`, { method: 'GET' }).then(res => res.text());
        const $ = cheerio.load(response);

        if (!$('.sub-header-top').text().trim()) {
            resolve(undefined);
            return;
        }

        const stats = [];

        $('tbody td')
            .filter(function () {
                return $(this).text().trim() != '';
            })
            .filter(function () {
                if (!isNaN($(this).text().trim()) && $(this).text().trim().toString().indexOf('.') === -1) return parseInt($(this).text().trim()) > 50;
                return true;
            })
            .each(function() {
                stats.push($(this).text().trim())
            });

        const sections = [];

        $('thead td')
            .filter(function () {
                return !['#', 'Av', 'Avatar', 'Name', 'IGN'].includes($(this).text().trim());
            })
            .each(function () {
                sections.push($(this).text().trim().toLowerCase().replaceAll(' ', '_').replaceAll('/', ''));
            });

        const players = {};
        let current = null;

        stats.forEach(data => {
             if (isNaN(data)) {
                 current = data;
                 players[current] = {};
             }

             else {
                 for (let i = 0; i < sections.length; i++) {
                     const section = sections[i];

                     if (players[current][section] === undefined) {
                         players[current][section] = data;
                         break;
                     }
                 }
             }
        });

        const data = [];

        for (const key in players) {
            data.push({
                name: key,
                fetch: async() => playersCore(key),
                statistics: players[key]
            });
        }

        resolve(new Leaderboard({
            game: {
                title: $('.sep p').text().trim().replaceAll('Top ', '').replaceAll(':', ' '),
                type: gameType
            },
            players: data
        }));
    });
}