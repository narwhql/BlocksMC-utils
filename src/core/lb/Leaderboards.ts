import { LeaderboardGameType } from "../../types";
import { Player } from "../players/Player";

export class Leaderboard {
    public game: LeaderboardGame;
    public players: LeaderboardPlayer[];

    public constructor(leaderboardData: LeaderboardData) {
        this.game = leaderboardData.game;
        this.players = leaderboardData.players;
    }
}

interface LeaderboardData {
    game: LeaderboardGame;
    players: LeaderboardPlayer[];
}

interface LeaderboardGame {
    title: string;
    type: LeaderboardGameType;
}

interface LeaderboardPlayer {
    name: string;
    fetch: () => Promise<Player>;
    statistics: LeaderboardPlayerStatistics;
}

interface LeaderboardPlayerStatistics {
    wins: number;
    played: number;
    wl?: number;
    points?: number;
    kills?: number;
    deaths?: number;
    kd?: number;
    beds?: number;
    eggs?: number;
    crates?: number;
    rounds?: number;
    goals?: number;
    sponges?: number;
    murderer_kills?: number;
    hero?: number;
    respawns?: number;
    blocks?: number;
    tnts?: number;
    fireworks?: number;
    hider_wins?: number;
    seeker_wins?: number;
    hider_kills?: number;
    seeker_kills?: number;
    hider_deaths?: number;
    seeker_deaths?: number;
    blocks_placed?: number;
    blocks_broken?: number;
    powerups?: number;
}