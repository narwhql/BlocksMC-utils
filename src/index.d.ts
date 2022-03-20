import { Player } from "./core/players/Player";
import { LeaderboardGameType } from "./types";
import { Leaderboard } from "./core/lb/Leaderboards";
import { Guild } from "./core/guilds/Guilds";
import { ChatReport } from "./core/chatreports/ChatReports";

export function fetchPlayer(username: string): Promise<Player | void>;
export function fetchLeaderboards(game: LeaderboardGameType): Promise<Leaderboard | void>;
export function fetchGuild(name: string): Promise<Guild | void>;
export function fetchChatReport(code: string): Promise<ChatReport | void>;