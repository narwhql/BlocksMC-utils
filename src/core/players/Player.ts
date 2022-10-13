import { fetchGuild } from "../..";
import { GameType } from "../../types";
import { Guild } from "../guilds/Guilds";

export class Player {
    public name: string;
    public guildName?: string;
    public guildTag?: string;
    public rank: string;
    public timePlayed: number;
    public games: Game[];

    public constructor(playerData: PlayerData) {
        this.name = playerData.name;
        this.guildName = playerData.guildName;
        this.guildTag = playerData.guildTag;
        this.rank = playerData.rank;
        this.timePlayed = playerData.timePlayed;
        this.games = playerData.games;
    }

    public getGame(gameType: GameType): Game | null {
        return this.games.filter(game => game.type === gameType).length !== 0 ? this.games.filter(game => game.type === gameType)[0] : null;
    }

    public async fetchGuild(): Promise<Guild | null> {
        return this.guildName ? await fetchGuild(this.guildName) : null;
    }
}

interface PlayerData {
    name: string;
    guildName?: string;
    guildTag?: string;
    rank: string;
    timePlayed: number;
    games: Game[];
}

interface Game {
    name: string;
    imageURL: string;
    type: GameType;
    statistics: Statistics;
}

interface Statistics {
    played: number;
    points?: number;
    wins?: number;
    eggs?: number;
    blocks?: number;
    fireworks?: number;
    crates?: number;
    dms?: number;
    sponges?: number;
    beds?: number;
    goals?: number;
    rounds?: number;
    kills?: number;
    deaths?: number;
    respawns?: number;
    shots?: number;
    murder_kills?: number;
    hero?: number;
    tags?: number;
    seeker_wins?: number;
    hider_wins?: number;
    seeker_kills?: number;
    hider_kills?: number;
    seeker_deaths?: number;
    hider_deaths?: number;
    blocks_placed?: number;
    blocks_broken?: number;
    powerups?: number;
}