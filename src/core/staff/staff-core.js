const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const cheerio = require('cheerio');
const playersCore = require('../players/players-core');

module.exports = {
    fetchOwner: () => {
        return new Promise(async (resolve, reject) => {
            const response = await fetch("https://util.narwhql.ml/staff/owner").then(res => res.json());
            const pl = [];
            response.players.forEach(player => pl.push({
                name: player,
                fetch: async () => playersCore(player)
            }));
            resolve(pl);
        });
    },
    fetchAdmins: () => {
        return new Promise(async (resolve, reject) => {
            const response = await fetch("https://util.narwhql.ml/staff/admins").then(res => res.json());
            const pl = [];
            response.players.forEach(player => pl.push({
                name: player,
                fetch: async () => playersCore(player)
            }));
            resolve(pl);
        })
    },
    fetchModerators: () => {
        return new Promise(async (resolve, reject) => {
            const response = await fetch("https://util.narwhql.ml/staff/mods").then(res => res.json());
            const pl = [];
            response.players.forEach(player => pl.push({
                name: player,
                fetch: async () => playersCore(player)
            }));
            resolve(pl);
        })
    },
    fetchTeam: () => {
        return new Promise(async (resolve, reject) => {
            const response = await fetch("https://util.narwhql.ml/staff/team").then(res => res.json());
            const pl = [];
            response.players.forEach(player => pl.push({
                name: player,
                fetch: async () => playersCore(player)
            }));
            resolve(pl);
        })
    }
}