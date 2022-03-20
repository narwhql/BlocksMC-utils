const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const playersCore = require('../players/players-core');
const cheerio = require("cheerio");

class Guild {
    constructor(guildData) {
        this.name = guildData.name;
        this.tag = guildData.tag;
        this.created = guildData.created;
        this.createdTimestamp = guildData.createdTimestamp;
        this.leader = guildData.members.length === 0 ? undefined : guildData.members[0];
        this.members = guildData.members;
    }
}

/**
 *
 * @param guildName {string}
 * @returns {Promise<Guild>}
 */
module.exports = (guildName) => {
    return new Promise(async(resolve, reject) => {
        if (!guildName || guildName === '' || typeof guildName !== 'string') {
            reject(new Error('[BlocksMC Utils] A valid guild name was not provided.'));
            return;
        }

        const response = await fetch(`https://blocksmc.com/guild/${guildName}/?__cf_chl_jschl_tk__=pmd_`, { method: 'GET' }).then(res => res.text());
        const $ = cheerio.load(response);

        if (!$('.sub-header-top').text().trim()) {
            resolve(undefined);
            return;
        }

        const data = {
            name: undefined,
            tag: undefined,
            createdTimestamp: 0,
            members: []
        }

        const members = [];

        $('.col-lg-3 tbody tr').each(function() {
            data[$(this).children().first().text().toLowerCase()] = $(this).children().last().text();
        });

        $('.col-lg-7 tbody tr').each(function() {
            members.push({
                name: $(this).children().filter(i => i === 1).text().trim(),
                role: $(this).children().filter(i => i === 2).text().trim(),
                fetch: async() => playersCore($(this).children().filter(i => i === 1).text().trim()),
                joined: new Date($(this).children().filter(i => i === 3).text().trim()),
                joinedTimestamp: new Date($(this).children().filter(i => i === 3).text().trim()).getTime(),
                lastSeen: new Date($(this).children().filter(i => i === 4).text().trim()),
                lastSeenTimestamp: new Date($(this).children().filter(i => i === 4).text().trim()).getTime()
            });
        });

        if (data.tag === '') data.tag = null;
        data.createdTimestamp = new Date(data['created']).getTime();
        data.created = new Date(data['created'])
        data.members = members;
        resolve(new Guild(data));
    });
}