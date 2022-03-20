import { GameType } from "../../types";

export class Player {
    public name: string;
    public rank: string;
    public timePlayed: number;
    public games: Game[];

    public constructor(playerData: PlayerData) {
        this.name = playerData.name;
        this.rank = playerData.rank;
        this.timePlayed = playerData.timePlayed;
        this.games = playerData.games;
    }

    public getGame(gameType: GameType): Game {
        return this.games.filter(game => game.type === gameType).length !== 0 ? this.games.filter(game => game.type === gameType)[0] : null;
    }
}

interface PlayerData {
    name: string;
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
    points: number;
    wins: number;
    played: number;
    eggs?: number;
    blocks?: number;
    fireworks?: number;
    crates?: number;
    dms?: number;
    sponges?: number;
    beds?: number;
    goals?: number;
    rounds?: number;
}