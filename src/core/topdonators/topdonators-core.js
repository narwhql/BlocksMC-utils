const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const cheerio = require('cheerio');
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

        names.splice(5);

        const players = [];

        names.forEach(name => {
            players.push({
                name: name,
                fetch: async() => playersCore(name)
            });
        });

        resolve(players);
    });
}