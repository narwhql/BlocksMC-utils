const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const cheerio = require('cheerio');
const ms = require('ms');
const playersCore = require('../players/players-core');

module.exports = () => {
    return new Promise(async(resolve, reject) => {
        const response = await fetch(`https://blocksmc.com/?__cf_chl_jschl_tk__=pmd_`, { method: 'GET' }).then(res => res.text());
        const $ = cheerio.load(response);

        const names = [];

        $('.player-card').each(function () {
            $(this).find('p').each(function () {
                names.push($(this).text());
            });
        });

        names.splice(0, 5);

        const times = [];

        $('.player-card').each(function () {
            $(this).find('h3').each(function () {
                times.push(parseInt(ms($(this).text()).toFixed(0)));
            });
        });

        const players = [];

        for (let i = 0; i < names.length; i++) {
            players.push({
                name: names[i],
                timePlayed: times[i],
                fetch: async() => playersCore(names[i])
            });
        }

        resolve(players);
    });
}