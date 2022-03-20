import { Player } from "../players/Player";

export interface Staff {
    fetchOwner(): Promise<StaffMember>;
    fetchAdmins(): Promise<StaffMember[]>;
    fetchModerators(): Promise<StaffMember[]>;
    fetchTeam(): Promise<StaffMember[]>;
}

interface StaffMember {
    name: string;
    fetch(): Promise<Player | void>;
}