import { Player } from "../players/Player";

export class ChatReport {
    public code: string;
    public player: ChatReportPlayer;
    public server: string;
    public created: Date;
    public createdTimestamp: number;
    public messageCount: number;
    public messages: ChatReportMessage[];

    public constructor(chatReportData: ChatReportData) {
        this.code = chatReportData.code;
        this.player = chatReportData.player;
        this.server = chatReportData.server;
        this.created = chatReportData.created;
        this.createdTimestamp = chatReportData.createdTimestamp;
        this.messageCount = chatReportData.messageCount;
        this.messages = chatReportData.messages;
    }
}

interface ChatReportData {
    code: string;
    player: ChatReportPlayer;
    server: string;
    created: Date;
    createdTimestamp: number;
    messageCount: number;
    messages: ChatReportMessage[];
}

interface ChatReportPlayer {
    name: string;
    fetch: () => Promise<Player | void>;
}

interface ChatReportMessage {
    created: Date;
    createdTimestamp: number;
    server: string;
    content: string;
}
