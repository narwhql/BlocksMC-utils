import { Player } from "./core/players/Player";
import { LeaderboardGameType } from "./types";
import { Leaderboard } from "./core/lb/Leaderboards";
import { Guild } from "./core/guilds/Guilds";
import { ChatReport } from "./core/chatreports/ChatReports";
import { Staff } from "./core/staff/Staff";
import { TopJoinPlayer } from "./core/topjoin/TopJoin";
import { TopDonatorPlayer } from "./core/topdonators/TopDonators";

export function fetchPlayer(username: string): Promise<Player>;
export function fetchLeaderboards(game: LeaderboardGameType): Promise<Leaderboard>;
export function fetchGuild(name: string): Promise<Guild>;
export function fetchChatReport(code: string): Promise<ChatReport>;
export const staff: Staff;
export function fetchTopJoin(): Promise<TopJoinPlayer[]>;
export function fetchTopDonators(): Promise<TopDonatorPlayer[]>;