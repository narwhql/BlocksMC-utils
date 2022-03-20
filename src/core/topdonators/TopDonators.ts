import { Player } from "../players/Player";

export interface TopDonatorPlayer {
    name: string;
    fetch(): Promise<Player | void>;
}