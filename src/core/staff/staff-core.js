const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const cheerio = require('cheerio');
const playersCore = require('../players/players-core');

const find = async(input) => {
    const response = await fetch(`https://blocksmc.com/players/?__cf_chl_jschl_tk__=pmd_`, { method: 'GET' }).then(res => res.text());
    const $ = cheerio.load(response);
    const list = [];

    $(input).each(function() {
        list.push({
            name: $(this).attr('src').split('https://minotar.net/helm/')[1].split('/')[0],
            fetch: async() => playersCore($(this).attr('src').split('https://minotar.net/helm/')[1].split('/')[0])
        });
    });

    return list;
}

module.exports = {
    fetchOwner: () => {
        return new Promise((resolve, reject) => {
            resolve({
                name: 'iDhoom',
                fetch: async() => playersCore('iDhoom')
            });
        });
    },
    fetchAdmins: () => {
        return new Promise(async(resolve, reject) => resolve(await find('.rank-admin-border')) )
    },
    fetchModerators: () => {
        return new Promise(async(resolve, reject) => resolve(await find('.rank-mod-border')) )
    },
    fetchTeam: () => {
        return new Promise(async(resolve, reject) => resolve(await find('.rank-team-border')) )
    }
}