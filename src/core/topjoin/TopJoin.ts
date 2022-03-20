import { Player } from "../players/Player";

export interface TopJoinPlayer {
    name: string;
    timePlayed: number;
    fetch(): Promise<Player>;
}