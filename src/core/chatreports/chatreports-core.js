const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const cheerio = require("cheerio");
const playersCore = require('../players/players-core');

class ChatReport {
    constructor(chatReportData) {
        this.code = chatReportData.code;
        this.player = chatReportData.player;
        this.server = chatReportData.server;
        this.created = chatReportData.created;
        this.createdTimestamp = chatReportData.createdTimestamp;
        this.messageCount = chatReportData.messageCount;
        this.messages = chatReportData.messages;
    }
}

/**
 *
 * @param code {string}
 * @returns {Promise<ChatReport>}
 */
module.exports = (code) => {
    return new Promise(async(resolve, reject) => {
        if (!code || code === '' || typeof code !== 'string') {
            reject(new Error('[BlocksMC Utils] A valid chat report code was not provided.'));
            return;
        }

        const response = await fetch(`https://blocksmc.com/chatreport/${code}/?__cf_chl_jschl_tk__=pmd_`, { method: 'GET' }).then(res => res.text());
        const $ = cheerio.load(response);

        if (!$('.jumbotron h1').text().trim()) {
            resolve(undefined);
            return;
        }

        const cache = [];

        $('div.container > div.jumbotron > div.row > div.col-md-3').each((index, element) => {
            if (index === 0) cache.push(element.children[0].nextSibling.children[0].nextSibling.next.children[0].data);
            else cache.push(element.children[0].nextSibling.children[0].next.data)
        });

        if (cache.length !== 4 || !cache[0] || !cache[1] || !cache[2] || !cache[3]) {
            resolve(undefined);
            return;
        }

        const data = {
            code: code,
            player: {
                name: cache[0],
                fetch: async() => playersCore(cache[0])
            },
            created: new Date(cache[1].substring(1)),
            createdTimestamp: new Date(cache[1].substring(1)).getTime(),
            messageCount: Number(cache[2].substring(1).replaceAll(' Messages', '')),
            server: cache[3].substring(1)
        }

        const dates = [];
        const servers = [];
        const contents = [];

        $('.chat .col-md-2').each(function () {
            dates.push($(this).text().trim());
        });
        $('.chat .col-md-1').each(function () {
            servers.push($(this).text().trim());
        });
        $('.chat .col-md-8').each(function () {
            contents.push($(this).text().trim());
        });

        const messages = [];

        for (let i = 0; i < dates.length; i++) {
            messages.push({
                created: new Date(dates[i]),
                createdTimestamp: new Date(dates[i]).getTime(),
                server: servers[i],
                content: contents[i],
            });
        }

        data['messages'] = messages;

        resolve(data);
    });
}