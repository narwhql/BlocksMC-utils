export class Guild {
    public name: string;
    public tag?: string;
    public created: Date;
    public createdTimestamp: number;
    public leader: GuildMember;
    public members: GuildMember[];

    public constructor(guildData: GuildData) {
        this.name = guildData.name;
        this.tag = guildData.tag;
        this.created = guildData.created;
        this.createdTimestamp = guildData.createdTimestamp;
        this.leader = this.members.length === 0 ? undefined : this.members[0];
        this.members = guildData.members;
    }
}


interface GuildData {
    name: string;
    tag?: string;
    created: Date;
    createdTimestamp: number;
    members: GuildMember[];
}

interface GuildMember {
    name: string;
    role: string;
    joined: Date;
    joinedTimestamp: number;
    lastSeen: Date;
    lastSeenTimestamp: number;
}