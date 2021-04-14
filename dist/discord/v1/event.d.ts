import _m0 from "protobufjs/minimal";
import { MessageData_MessageType, InviteData_InviteTargetUserType, GuildData, PresenceData, MemberData, ChannelData, RoleData, MessageData, SnowflakeValue, SnowflakeListValue, MessageData_MessageAttachmentData, MessageData_MessageEmbedData, MessageData_MessageMentionData, MessageData_MessageReactionData, MessageData_MessageMentionChannelData, MessageData_MessageActivityData, MessageData_MessageApplicationData, MessageData_MessageReferenceData, UserData, MessageData_MessageReactionEmojiData, VoiceStateData, EmojiData } from "../../discord/v1/model";
export declare const protobufPackage = "pylon.discord.v1.event";
export interface EventEnvelope {
    $type: "pylon.discord.v1.event.EventEnvelope";
    header: EventEnvelope_HeaderData | undefined;
    eventData?: {
        $case: "guildCreateEvent";
        guildCreateEvent: GuildCreateEvent;
    } | {
        $case: "guildUpdateEvent";
        guildUpdateEvent: GuildUpdateEvent;
    } | {
        $case: "guildDeleteEvent";
        guildDeleteEvent: GuildDeleteEvent;
    } | {
        $case: "presenceUpdateEvent";
        presenceUpdateEvent: PresenceUpdateEvent;
    } | {
        $case: "guildMemberAddEvent";
        guildMemberAddEvent: GuildMemberAddEvent;
    } | {
        $case: "guildMemberUpdateEvent";
        guildMemberUpdateEvent: GuildMemberUpdateEvent;
    } | {
        $case: "guildMemberRemoveEvent";
        guildMemberRemoveEvent: GuildMemberRemoveEvent;
    } | {
        $case: "channelCreateEvent";
        channelCreateEvent: ChannelCreateEvent;
    } | {
        $case: "channelUpdateEvent";
        channelUpdateEvent: ChannelUpdateEvent;
    } | {
        $case: "channelDeleteEvent";
        channelDeleteEvent: ChannelDeleteEvent;
    } | {
        $case: "channelPinsUpdateEvent";
        channelPinsUpdateEvent: ChannelPinsUpdateEvent;
    } | {
        $case: "guildRoleCreateEvent";
        guildRoleCreateEvent: GuildRoleCreateEvent;
    } | {
        $case: "guildRoleUpdateEvent";
        guildRoleUpdateEvent: GuildRoleUpdateEvent;
    } | {
        $case: "guildRoleDeleteEvent";
        guildRoleDeleteEvent: GuildRoleDeleteEvent;
    } | {
        $case: "messageCreateEvent";
        messageCreateEvent: MessageCreateEvent;
    } | {
        $case: "messageUpdateEvent";
        messageUpdateEvent: MessageUpdateEvent;
    } | {
        $case: "messageDeleteEvent";
        messageDeleteEvent: MessageDeleteEvent;
    } | {
        $case: "messageDeleteBulkEvent";
        messageDeleteBulkEvent: MessageDeleteBulkEvent;
    } | {
        $case: "messageReactionAddEvent";
        messageReactionAddEvent: MessageReactionAddEvent;
    } | {
        $case: "messageReactionRemoveEvent";
        messageReactionRemoveEvent: MessageReactionRemoveEvent;
    } | {
        $case: "messageReactionRemoveAllEvent";
        messageReactionRemoveAllEvent: MessageReactionRemoveAllEvent;
    } | {
        $case: "messageReactionRemoveEmojiEvent";
        messageReactionRemoveEmojiEvent: MessageReactionRemoveEmojiEvent;
    } | {
        $case: "typingStartEvent";
        typingStartEvent: TypingStartEvent;
    } | {
        $case: "voiceStateUpdateEvent";
        voiceStateUpdateEvent: VoiceStateUpdateEvent;
    } | {
        $case: "voiceServerUpdateEvent";
        voiceServerUpdateEvent: VoiceServerUpdateEvent;
    } | {
        $case: "inviteCreateEvent";
        inviteCreateEvent: InviteCreateEvent;
    } | {
        $case: "inviteDeleteEvent";
        inviteDeleteEvent: InviteDeleteEvent;
    } | {
        $case: "guildBanAddEvent";
        guildBanAddEvent: GuildBanAddEvent;
    } | {
        $case: "guildBanRemoveEvent";
        guildBanRemoveEvent: GuildBanRemoveEvent;
    } | {
        $case: "guildEmojisUpdateEvent";
        guildEmojisUpdateEvent: GuildEmojisUpdateEvent;
    } | {
        $case: "guildIntegrationsUpdateEvent";
        guildIntegrationsUpdateEvent: GuildIntegrationsUpdateEvent;
    } | {
        $case: "webhooksUpdateEvent";
        webhooksUpdateEvent: WebhooksUpdateEvent;
    } | {
        $case: "integrationCreateEvent";
        integrationCreateEvent: IntegrationCreateEvent;
    } | {
        $case: "integrationUpdateEvent";
        integrationUpdateEvent: IntegrationUpdateEvent;
    } | {
        $case: "integrationDeleteEvent";
        integrationDeleteEvent: IntegrationDeleteEvent;
    } | {
        $case: "interactionCreateEvent";
        interactionCreateEvent: InteractionCreateEvent;
    } | {
        $case: "readyEvent";
        readyEvent: ReadyEvent;
    } | {
        $case: "resumeEvent";
        resumeEvent: ResumeEvent;
    };
}
export interface EventEnvelope_HeaderData {
    $type: "pylon.discord.v1.event.EventEnvelope.HeaderData";
    seq: string;
    receivedAt: Date | undefined;
}
export interface EventEnvelopeAck {
    $type: "pylon.discord.v1.event.EventEnvelopeAck";
    seq: string;
}
export interface EventScope {
    $type: "pylon.discord.v1.event.EventScope";
    botId: string;
    guildId: string;
}
export interface ReadyEvent {
    $type: "pylon.discord.v1.event.ReadyEvent";
    scope: EventScope | undefined;
}
export interface ResumeEvent {
    $type: "pylon.discord.v1.event.ResumeEvent";
    scope: EventScope | undefined;
}
export interface GuildCreateEvent {
    $type: "pylon.discord.v1.event.GuildCreateEvent";
    scope: EventScope | undefined;
    payload: GuildData | undefined;
}
export interface GuildUpdateEvent {
    $type: "pylon.discord.v1.event.GuildUpdateEvent";
    scope: EventScope | undefined;
    payload: GuildData | undefined;
    previouslyCached: GuildData | undefined;
}
export interface GuildDeleteEvent {
    $type: "pylon.discord.v1.event.GuildDeleteEvent";
    scope: EventScope | undefined;
    payload: GuildData | undefined;
}
export interface PresenceUpdateEvent {
    $type: "pylon.discord.v1.event.PresenceUpdateEvent";
    scope: EventScope | undefined;
    payload: PresenceData | undefined;
    previouslyCached: PresenceData | undefined;
}
export interface GuildMemberAddEvent {
    $type: "pylon.discord.v1.event.GuildMemberAddEvent";
    scope: EventScope | undefined;
    payload: MemberData | undefined;
}
export interface GuildMemberUpdateEvent {
    $type: "pylon.discord.v1.event.GuildMemberUpdateEvent";
    scope: EventScope | undefined;
    payload: MemberData | undefined;
    previouslyCached: MemberData | undefined;
}
export interface GuildMemberRemoveEvent {
    $type: "pylon.discord.v1.event.GuildMemberRemoveEvent";
    scope: EventScope | undefined;
    payload: MemberData | undefined;
}
export interface ChannelCreateEvent {
    $type: "pylon.discord.v1.event.ChannelCreateEvent";
    scope: EventScope | undefined;
    payload: ChannelData | undefined;
}
export interface ChannelUpdateEvent {
    $type: "pylon.discord.v1.event.ChannelUpdateEvent";
    scope: EventScope | undefined;
    payload: ChannelData | undefined;
    previouslyCached: ChannelData | undefined;
}
export interface ChannelDeleteEvent {
    $type: "pylon.discord.v1.event.ChannelDeleteEvent";
    scope: EventScope | undefined;
    payload: ChannelData | undefined;
}
export interface ChannelPinsUpdateEvent {
    $type: "pylon.discord.v1.event.ChannelPinsUpdateEvent";
    scope: EventScope | undefined;
    payload: ChannelPinsUpdateEvent_PayloadData | undefined;
}
export interface ChannelPinsUpdateEvent_PayloadData {
    $type: "pylon.discord.v1.event.ChannelPinsUpdateEvent.PayloadData";
    channelId: string;
    guildId: string;
    lastPinTimestamp: Date | undefined;
}
export interface GuildRoleCreateEvent {
    $type: "pylon.discord.v1.event.GuildRoleCreateEvent";
    scope: EventScope | undefined;
    payload: RoleData | undefined;
}
export interface GuildRoleUpdateEvent {
    $type: "pylon.discord.v1.event.GuildRoleUpdateEvent";
    scope: EventScope | undefined;
    payload: RoleData | undefined;
    previouslyCached: RoleData | undefined;
}
export interface GuildRoleDeleteEvent {
    $type: "pylon.discord.v1.event.GuildRoleDeleteEvent";
    scope: EventScope | undefined;
    payload: RoleData | undefined;
}
export interface MessageCreateEvent {
    $type: "pylon.discord.v1.event.MessageCreateEvent";
    scope: EventScope | undefined;
    messageData: MessageData | undefined;
}
export interface MessageUpdateEvent {
    $type: "pylon.discord.v1.event.MessageUpdateEvent";
    scope: EventScope | undefined;
    payload?: {
        $case: "cached";
        cached: MessageData;
    } | {
        $case: "raw";
        raw: MessageUpdateEvent_PayloadData;
    };
    previouslyCached: MessageData | undefined;
}
export interface MessageUpdateEvent_PayloadData {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData";
    id: string;
    channelId: string;
    guildId: SnowflakeValue | undefined;
    content: string | undefined;
    editedTimestamp: Date | undefined;
    mentionRoles: SnowflakeListValue | undefined;
    tts: boolean | undefined;
    mentionEveryone: boolean | undefined;
    attachments: MessageUpdateEvent_PayloadData_MessageAttachmentListValue | undefined;
    embeds: MessageUpdateEvent_PayloadData_MessageEmbedListValue | undefined;
    mentions: MessageUpdateEvent_PayloadData_MessageMentionListValue | undefined;
    reactions: MessageUpdateEvent_PayloadData_MessageReactionListValue | undefined;
    pinned: boolean | undefined;
    type: MessageUpdateEvent_PayloadData_MessageTypeValue | undefined;
    mentionChannels: MessageUpdateEvent_PayloadData_MessageMentionChannelListValue | undefined;
    flags: number | undefined;
    activity: MessageUpdateEvent_PayloadData_MessageActivityValue | undefined;
    application: MessageUpdateEvent_PayloadData_MessageApplicationValue | undefined;
    messageReference: MessageUpdateEvent_PayloadData_MessageReferenceValue | undefined;
    author: MessageUpdateEvent_PayloadData_MessageAuthorValue | undefined;
    member: MessageUpdateEvent_PayloadData_MessageMemberValue | undefined;
    webhookId: SnowflakeValue | undefined;
}
export interface MessageUpdateEvent_PayloadData_MessageAttachmentListValue {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageAttachmentListValue";
    values: MessageData_MessageAttachmentData[];
}
export interface MessageUpdateEvent_PayloadData_MessageEmbedListValue {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageEmbedListValue";
    values: MessageData_MessageEmbedData[];
}
export interface MessageUpdateEvent_PayloadData_MessageMentionListValue {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageMentionListValue";
    values: MessageData_MessageMentionData[];
}
export interface MessageUpdateEvent_PayloadData_MessageReactionListValue {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageReactionListValue";
    values: MessageData_MessageReactionData[];
}
export interface MessageUpdateEvent_PayloadData_MessageTypeValue {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageTypeValue";
    value: MessageData_MessageType;
}
export interface MessageUpdateEvent_PayloadData_MessageMentionChannelListValue {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageMentionChannelListValue";
    values: MessageData_MessageMentionChannelData[];
}
export interface MessageUpdateEvent_PayloadData_MessageActivityValue {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageActivityValue";
    value: MessageData_MessageActivityData | undefined;
}
export interface MessageUpdateEvent_PayloadData_MessageApplicationValue {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageApplicationValue";
    value: MessageData_MessageApplicationData | undefined;
}
export interface MessageUpdateEvent_PayloadData_MessageReferenceValue {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageReferenceValue";
    value: MessageData_MessageReferenceData | undefined;
}
export interface MessageUpdateEvent_PayloadData_MessageAuthorValue {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageAuthorValue";
    value: UserData | undefined;
}
export interface MessageUpdateEvent_PayloadData_MessageMemberValue {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageMemberValue";
    value: MemberData | undefined;
}
export interface MessageDeleteEvent {
    $type: "pylon.discord.v1.event.MessageDeleteEvent";
    scope: EventScope | undefined;
    payload: MessageDeleteEvent_PayloadData | undefined;
    previouslyCached: MessageData | undefined;
}
export interface MessageDeleteEvent_PayloadData {
    $type: "pylon.discord.v1.event.MessageDeleteEvent.PayloadData";
    id: string;
    channelId: string;
    guildId: string;
}
export interface MessageDeleteBulkEvent {
    $type: "pylon.discord.v1.event.MessageDeleteBulkEvent";
    scope: EventScope | undefined;
    payload: MessageDeleteBulkEvent_PayloadData | undefined;
}
export interface MessageDeleteBulkEvent_PayloadData {
    $type: "pylon.discord.v1.event.MessageDeleteBulkEvent.PayloadData";
    ids: string[];
    channelId: string;
    guildId: string;
}
export interface MessageReactionAddEvent {
    $type: "pylon.discord.v1.event.MessageReactionAddEvent";
    scope: EventScope | undefined;
    payload: MessageReactionAddEvent_PayloadData | undefined;
}
export interface MessageReactionAddEvent_PayloadData {
    $type: "pylon.discord.v1.event.MessageReactionAddEvent.PayloadData";
    userId: string;
    channelId: string;
    messageId: string;
    guildId: string;
    emoji: MessageData_MessageReactionEmojiData | undefined;
}
export interface MessageReactionRemoveEvent {
    $type: "pylon.discord.v1.event.MessageReactionRemoveEvent";
    scope: EventScope | undefined;
    payload: MessageReactionRemoveEvent_PayloadData | undefined;
}
export interface MessageReactionRemoveEvent_PayloadData {
    $type: "pylon.discord.v1.event.MessageReactionRemoveEvent.PayloadData";
    userId: string;
    channelId: string;
    messageId: string;
    guildId: string;
    emoji: MessageData_MessageReactionEmojiData | undefined;
}
export interface MessageReactionRemoveAllEvent {
    $type: "pylon.discord.v1.event.MessageReactionRemoveAllEvent";
    scope: EventScope | undefined;
    payload: MessageReactionRemoveAllEvent_PayloadData | undefined;
}
export interface MessageReactionRemoveAllEvent_PayloadData {
    $type: "pylon.discord.v1.event.MessageReactionRemoveAllEvent.PayloadData";
    channelId: string;
    messageId: string;
    guildId: string;
}
export interface MessageReactionRemoveEmojiEvent {
    $type: "pylon.discord.v1.event.MessageReactionRemoveEmojiEvent";
    scope: EventScope | undefined;
    payload: MessageReactionRemoveEmojiEvent_PayloadData | undefined;
}
export interface MessageReactionRemoveEmojiEvent_PayloadData {
    $type: "pylon.discord.v1.event.MessageReactionRemoveEmojiEvent.PayloadData";
    channelId: string;
    messageId: string;
    guildId: string;
    emoji: MessageData_MessageReactionEmojiData | undefined;
}
export interface TypingStartEvent {
    $type: "pylon.discord.v1.event.TypingStartEvent";
    scope: EventScope | undefined;
    payload: TypingStartEvent_PayloadData | undefined;
}
export interface TypingStartEvent_PayloadData {
    $type: "pylon.discord.v1.event.TypingStartEvent.PayloadData";
    channelId: string;
    userId: string;
    timestamp: Date | undefined;
    member: MemberData | undefined;
}
export interface VoiceStateUpdateEvent {
    $type: "pylon.discord.v1.event.VoiceStateUpdateEvent";
    scope: EventScope | undefined;
    payload: VoiceStateData | undefined;
    previouslyCached: VoiceStateData | undefined;
}
export interface VoiceServerUpdateEvent {
    $type: "pylon.discord.v1.event.VoiceServerUpdateEvent";
    scope: EventScope | undefined;
    payload: VoiceServerUpdateEvent_PayloadData | undefined;
}
export interface VoiceServerUpdateEvent_PayloadData {
    $type: "pylon.discord.v1.event.VoiceServerUpdateEvent.PayloadData";
    guildId: string;
    token: string;
    endpoint: string;
}
export interface InviteCreateEvent {
    $type: "pylon.discord.v1.event.InviteCreateEvent";
    scope: EventScope | undefined;
    payload: InviteCreateEvent_PayloadData | undefined;
}
export interface InviteCreateEvent_PayloadData {
    $type: "pylon.discord.v1.event.InviteCreateEvent.PayloadData";
    channelId: string;
    code: string;
    createdAt: Date | undefined;
    guildId: SnowflakeValue | undefined;
    inviter: UserData | undefined;
    maxAge: string;
    maxUses: string;
    targetUser: UserData | undefined;
    targetUserType: InviteData_InviteTargetUserType;
    temporary: boolean;
    uses: string;
}
export interface InviteDeleteEvent {
    $type: "pylon.discord.v1.event.InviteDeleteEvent";
    scope: EventScope | undefined;
    payload: InviteDeleteEvent_PayloadData | undefined;
}
export interface InviteDeleteEvent_PayloadData {
    $type: "pylon.discord.v1.event.InviteDeleteEvent.PayloadData";
    guildId: string;
    channelId: string;
    code: string;
}
export interface GuildBanAddEvent {
    $type: "pylon.discord.v1.event.GuildBanAddEvent";
    scope: EventScope | undefined;
    payload: GuildBanAddEvent_PayloadData | undefined;
}
export interface GuildBanAddEvent_PayloadData {
    $type: "pylon.discord.v1.event.GuildBanAddEvent.PayloadData";
    guildId: string;
    user: UserData | undefined;
}
export interface GuildBanRemoveEvent {
    $type: "pylon.discord.v1.event.GuildBanRemoveEvent";
    scope: EventScope | undefined;
    payload: GuildBanRemoveEvent_PayloadData | undefined;
}
export interface GuildBanRemoveEvent_PayloadData {
    $type: "pylon.discord.v1.event.GuildBanRemoveEvent.PayloadData";
    guildId: string;
    user: UserData | undefined;
}
export interface GuildEmojisUpdateEvent {
    $type: "pylon.discord.v1.event.GuildEmojisUpdateEvent";
    scope: EventScope | undefined;
    payload: GuildEmojisUpdateEvent_PayloadData | undefined;
    previouslyCached: GuildEmojisUpdateEvent_PayloadData | undefined;
}
export interface GuildEmojisUpdateEvent_PayloadData {
    $type: "pylon.discord.v1.event.GuildEmojisUpdateEvent.PayloadData";
    guildId: string;
    emojis: EmojiData[];
}
export interface GuildIntegrationsUpdateEvent {
    $type: "pylon.discord.v1.event.GuildIntegrationsUpdateEvent";
    scope: EventScope | undefined;
    payload: GuildIntegrationsUpdateEvent_PayloadData | undefined;
}
export interface GuildIntegrationsUpdateEvent_PayloadData {
    $type: "pylon.discord.v1.event.GuildIntegrationsUpdateEvent.PayloadData";
    guildId: string;
}
export interface WebhooksUpdateEvent {
    $type: "pylon.discord.v1.event.WebhooksUpdateEvent";
    scope: EventScope | undefined;
    payload: WebhooksUpdateEvent_PayloadData | undefined;
}
export interface WebhooksUpdateEvent_PayloadData {
    $type: "pylon.discord.v1.event.WebhooksUpdateEvent.PayloadData";
    guildId: string;
}
export interface IntegrationCreateEvent {
    $type: "pylon.discord.v1.event.IntegrationCreateEvent";
    scope: EventScope | undefined;
    payload: IntegrationCreateEvent_PayloadData | undefined;
}
export interface IntegrationCreateEvent_PayloadData {
    $type: "pylon.discord.v1.event.IntegrationCreateEvent.PayloadData";
    guildId: string;
}
export interface IntegrationUpdateEvent {
    $type: "pylon.discord.v1.event.IntegrationUpdateEvent";
    scope: EventScope | undefined;
    payload: IntegrationUpdateEvent_PayloadData | undefined;
}
export interface IntegrationUpdateEvent_PayloadData {
    $type: "pylon.discord.v1.event.IntegrationUpdateEvent.PayloadData";
    guildId: string;
}
export interface IntegrationDeleteEvent {
    $type: "pylon.discord.v1.event.IntegrationDeleteEvent";
    scope: EventScope | undefined;
    payload: IntegrationDeleteEvent_PayloadData | undefined;
}
export interface IntegrationDeleteEvent_PayloadData {
    $type: "pylon.discord.v1.event.IntegrationDeleteEvent.PayloadData";
    guildId: string;
}
export interface InteractionCreateEvent {
    $type: "pylon.discord.v1.event.InteractionCreateEvent";
    scope: EventScope | undefined;
    payload: InteractionCreateEvent_PayloadData | undefined;
}
export interface InteractionCreateEvent_PayloadData {
    $type: "pylon.discord.v1.event.InteractionCreateEvent.PayloadData";
    guildId: string;
}
export interface EventResponse {
    $type: "pylon.discord.v1.event.EventResponse";
}
export interface InteractionResponse {
    $type: "pylon.discord.v1.event.InteractionResponse";
}
export declare const EventEnvelope: {
    $type: "pylon.discord.v1.event.EventEnvelope";
    encode(message: EventEnvelope, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventEnvelope;
    fromJSON(object: any): EventEnvelope;
    toJSON(message: EventEnvelope): unknown;
    fromPartial(object: DeepPartial<EventEnvelope>): EventEnvelope;
};
export declare const EventEnvelope_HeaderData: {
    $type: "pylon.discord.v1.event.EventEnvelope.HeaderData";
    encode(message: EventEnvelope_HeaderData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventEnvelope_HeaderData;
    fromJSON(object: any): EventEnvelope_HeaderData;
    toJSON(message: EventEnvelope_HeaderData): unknown;
    fromPartial(object: DeepPartial<EventEnvelope_HeaderData>): EventEnvelope_HeaderData;
};
export declare const EventEnvelopeAck: {
    $type: "pylon.discord.v1.event.EventEnvelopeAck";
    encode(message: EventEnvelopeAck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventEnvelopeAck;
    fromJSON(object: any): EventEnvelopeAck;
    toJSON(message: EventEnvelopeAck): unknown;
    fromPartial(object: DeepPartial<EventEnvelopeAck>): EventEnvelopeAck;
};
export declare const EventScope: {
    $type: "pylon.discord.v1.event.EventScope";
    encode(message: EventScope, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventScope;
    fromJSON(object: any): EventScope;
    toJSON(message: EventScope): unknown;
    fromPartial(object: DeepPartial<EventScope>): EventScope;
};
export declare const ReadyEvent: {
    $type: "pylon.discord.v1.event.ReadyEvent";
    encode(message: ReadyEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ReadyEvent;
    fromJSON(object: any): ReadyEvent;
    toJSON(message: ReadyEvent): unknown;
    fromPartial(object: DeepPartial<ReadyEvent>): ReadyEvent;
};
export declare const ResumeEvent: {
    $type: "pylon.discord.v1.event.ResumeEvent";
    encode(message: ResumeEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResumeEvent;
    fromJSON(object: any): ResumeEvent;
    toJSON(message: ResumeEvent): unknown;
    fromPartial(object: DeepPartial<ResumeEvent>): ResumeEvent;
};
export declare const GuildCreateEvent: {
    $type: "pylon.discord.v1.event.GuildCreateEvent";
    encode(message: GuildCreateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuildCreateEvent;
    fromJSON(object: any): GuildCreateEvent;
    toJSON(message: GuildCreateEvent): unknown;
    fromPartial(object: DeepPartial<GuildCreateEvent>): GuildCreateEvent;
};
export declare const GuildUpdateEvent: {
    $type: "pylon.discord.v1.event.GuildUpdateEvent";
    encode(message: GuildUpdateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuildUpdateEvent;
    fromJSON(object: any): GuildUpdateEvent;
    toJSON(message: GuildUpdateEvent): unknown;
    fromPartial(object: DeepPartial<GuildUpdateEvent>): GuildUpdateEvent;
};
export declare const GuildDeleteEvent: {
    $type: "pylon.discord.v1.event.GuildDeleteEvent";
    encode(message: GuildDeleteEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuildDeleteEvent;
    fromJSON(object: any): GuildDeleteEvent;
    toJSON(message: GuildDeleteEvent): unknown;
    fromPartial(object: DeepPartial<GuildDeleteEvent>): GuildDeleteEvent;
};
export declare const PresenceUpdateEvent: {
    $type: "pylon.discord.v1.event.PresenceUpdateEvent";
    encode(message: PresenceUpdateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PresenceUpdateEvent;
    fromJSON(object: any): PresenceUpdateEvent;
    toJSON(message: PresenceUpdateEvent): unknown;
    fromPartial(object: DeepPartial<PresenceUpdateEvent>): PresenceUpdateEvent;
};
export declare const GuildMemberAddEvent: {
    $type: "pylon.discord.v1.event.GuildMemberAddEvent";
    encode(message: GuildMemberAddEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuildMemberAddEvent;
    fromJSON(object: any): GuildMemberAddEvent;
    toJSON(message: GuildMemberAddEvent): unknown;
    fromPartial(object: DeepPartial<GuildMemberAddEvent>): GuildMemberAddEvent;
};
export declare const GuildMemberUpdateEvent: {
    $type: "pylon.discord.v1.event.GuildMemberUpdateEvent";
    encode(message: GuildMemberUpdateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuildMemberUpdateEvent;
    fromJSON(object: any): GuildMemberUpdateEvent;
    toJSON(message: GuildMemberUpdateEvent): unknown;
    fromPartial(object: DeepPartial<GuildMemberUpdateEvent>): GuildMemberUpdateEvent;
};
export declare const GuildMemberRemoveEvent: {
    $type: "pylon.discord.v1.event.GuildMemberRemoveEvent";
    encode(message: GuildMemberRemoveEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuildMemberRemoveEvent;
    fromJSON(object: any): GuildMemberRemoveEvent;
    toJSON(message: GuildMemberRemoveEvent): unknown;
    fromPartial(object: DeepPartial<GuildMemberRemoveEvent>): GuildMemberRemoveEvent;
};
export declare const ChannelCreateEvent: {
    $type: "pylon.discord.v1.event.ChannelCreateEvent";
    encode(message: ChannelCreateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChannelCreateEvent;
    fromJSON(object: any): ChannelCreateEvent;
    toJSON(message: ChannelCreateEvent): unknown;
    fromPartial(object: DeepPartial<ChannelCreateEvent>): ChannelCreateEvent;
};
export declare const ChannelUpdateEvent: {
    $type: "pylon.discord.v1.event.ChannelUpdateEvent";
    encode(message: ChannelUpdateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChannelUpdateEvent;
    fromJSON(object: any): ChannelUpdateEvent;
    toJSON(message: ChannelUpdateEvent): unknown;
    fromPartial(object: DeepPartial<ChannelUpdateEvent>): ChannelUpdateEvent;
};
export declare const ChannelDeleteEvent: {
    $type: "pylon.discord.v1.event.ChannelDeleteEvent";
    encode(message: ChannelDeleteEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChannelDeleteEvent;
    fromJSON(object: any): ChannelDeleteEvent;
    toJSON(message: ChannelDeleteEvent): unknown;
    fromPartial(object: DeepPartial<ChannelDeleteEvent>): ChannelDeleteEvent;
};
export declare const ChannelPinsUpdateEvent: {
    $type: "pylon.discord.v1.event.ChannelPinsUpdateEvent";
    encode(message: ChannelPinsUpdateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChannelPinsUpdateEvent;
    fromJSON(object: any): ChannelPinsUpdateEvent;
    toJSON(message: ChannelPinsUpdateEvent): unknown;
    fromPartial(object: DeepPartial<ChannelPinsUpdateEvent>): ChannelPinsUpdateEvent;
};
export declare const ChannelPinsUpdateEvent_PayloadData: {
    $type: "pylon.discord.v1.event.ChannelPinsUpdateEvent.PayloadData";
    encode(message: ChannelPinsUpdateEvent_PayloadData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChannelPinsUpdateEvent_PayloadData;
    fromJSON(object: any): ChannelPinsUpdateEvent_PayloadData;
    toJSON(message: ChannelPinsUpdateEvent_PayloadData): unknown;
    fromPartial(object: DeepPartial<ChannelPinsUpdateEvent_PayloadData>): ChannelPinsUpdateEvent_PayloadData;
};
export declare const GuildRoleCreateEvent: {
    $type: "pylon.discord.v1.event.GuildRoleCreateEvent";
    encode(message: GuildRoleCreateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuildRoleCreateEvent;
    fromJSON(object: any): GuildRoleCreateEvent;
    toJSON(message: GuildRoleCreateEvent): unknown;
    fromPartial(object: DeepPartial<GuildRoleCreateEvent>): GuildRoleCreateEvent;
};
export declare const GuildRoleUpdateEvent: {
    $type: "pylon.discord.v1.event.GuildRoleUpdateEvent";
    encode(message: GuildRoleUpdateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuildRoleUpdateEvent;
    fromJSON(object: any): GuildRoleUpdateEvent;
    toJSON(message: GuildRoleUpdateEvent): unknown;
    fromPartial(object: DeepPartial<GuildRoleUpdateEvent>): GuildRoleUpdateEvent;
};
export declare const GuildRoleDeleteEvent: {
    $type: "pylon.discord.v1.event.GuildRoleDeleteEvent";
    encode(message: GuildRoleDeleteEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuildRoleDeleteEvent;
    fromJSON(object: any): GuildRoleDeleteEvent;
    toJSON(message: GuildRoleDeleteEvent): unknown;
    fromPartial(object: DeepPartial<GuildRoleDeleteEvent>): GuildRoleDeleteEvent;
};
export declare const MessageCreateEvent: {
    $type: "pylon.discord.v1.event.MessageCreateEvent";
    encode(message: MessageCreateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageCreateEvent;
    fromJSON(object: any): MessageCreateEvent;
    toJSON(message: MessageCreateEvent): unknown;
    fromPartial(object: DeepPartial<MessageCreateEvent>): MessageCreateEvent;
};
export declare const MessageUpdateEvent: {
    $type: "pylon.discord.v1.event.MessageUpdateEvent";
    encode(message: MessageUpdateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageUpdateEvent;
    fromJSON(object: any): MessageUpdateEvent;
    toJSON(message: MessageUpdateEvent): unknown;
    fromPartial(object: DeepPartial<MessageUpdateEvent>): MessageUpdateEvent;
};
export declare const MessageUpdateEvent_PayloadData: {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData";
    encode(message: MessageUpdateEvent_PayloadData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageUpdateEvent_PayloadData;
    fromJSON(object: any): MessageUpdateEvent_PayloadData;
    toJSON(message: MessageUpdateEvent_PayloadData): unknown;
    fromPartial(object: DeepPartial<MessageUpdateEvent_PayloadData>): MessageUpdateEvent_PayloadData;
};
export declare const MessageUpdateEvent_PayloadData_MessageAttachmentListValue: {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageAttachmentListValue";
    encode(message: MessageUpdateEvent_PayloadData_MessageAttachmentListValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageUpdateEvent_PayloadData_MessageAttachmentListValue;
    fromJSON(object: any): MessageUpdateEvent_PayloadData_MessageAttachmentListValue;
    toJSON(message: MessageUpdateEvent_PayloadData_MessageAttachmentListValue): unknown;
    fromPartial(object: DeepPartial<MessageUpdateEvent_PayloadData_MessageAttachmentListValue>): MessageUpdateEvent_PayloadData_MessageAttachmentListValue;
};
export declare const MessageUpdateEvent_PayloadData_MessageEmbedListValue: {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageEmbedListValue";
    encode(message: MessageUpdateEvent_PayloadData_MessageEmbedListValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageUpdateEvent_PayloadData_MessageEmbedListValue;
    fromJSON(object: any): MessageUpdateEvent_PayloadData_MessageEmbedListValue;
    toJSON(message: MessageUpdateEvent_PayloadData_MessageEmbedListValue): unknown;
    fromPartial(object: DeepPartial<MessageUpdateEvent_PayloadData_MessageEmbedListValue>): MessageUpdateEvent_PayloadData_MessageEmbedListValue;
};
export declare const MessageUpdateEvent_PayloadData_MessageMentionListValue: {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageMentionListValue";
    encode(message: MessageUpdateEvent_PayloadData_MessageMentionListValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageUpdateEvent_PayloadData_MessageMentionListValue;
    fromJSON(object: any): MessageUpdateEvent_PayloadData_MessageMentionListValue;
    toJSON(message: MessageUpdateEvent_PayloadData_MessageMentionListValue): unknown;
    fromPartial(object: DeepPartial<MessageUpdateEvent_PayloadData_MessageMentionListValue>): MessageUpdateEvent_PayloadData_MessageMentionListValue;
};
export declare const MessageUpdateEvent_PayloadData_MessageReactionListValue: {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageReactionListValue";
    encode(message: MessageUpdateEvent_PayloadData_MessageReactionListValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageUpdateEvent_PayloadData_MessageReactionListValue;
    fromJSON(object: any): MessageUpdateEvent_PayloadData_MessageReactionListValue;
    toJSON(message: MessageUpdateEvent_PayloadData_MessageReactionListValue): unknown;
    fromPartial(object: DeepPartial<MessageUpdateEvent_PayloadData_MessageReactionListValue>): MessageUpdateEvent_PayloadData_MessageReactionListValue;
};
export declare const MessageUpdateEvent_PayloadData_MessageTypeValue: {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageTypeValue";
    encode(message: MessageUpdateEvent_PayloadData_MessageTypeValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageUpdateEvent_PayloadData_MessageTypeValue;
    fromJSON(object: any): MessageUpdateEvent_PayloadData_MessageTypeValue;
    toJSON(message: MessageUpdateEvent_PayloadData_MessageTypeValue): unknown;
    fromPartial(object: DeepPartial<MessageUpdateEvent_PayloadData_MessageTypeValue>): MessageUpdateEvent_PayloadData_MessageTypeValue;
};
export declare const MessageUpdateEvent_PayloadData_MessageMentionChannelListValue: {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageMentionChannelListValue";
    encode(message: MessageUpdateEvent_PayloadData_MessageMentionChannelListValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageUpdateEvent_PayloadData_MessageMentionChannelListValue;
    fromJSON(object: any): MessageUpdateEvent_PayloadData_MessageMentionChannelListValue;
    toJSON(message: MessageUpdateEvent_PayloadData_MessageMentionChannelListValue): unknown;
    fromPartial(object: DeepPartial<MessageUpdateEvent_PayloadData_MessageMentionChannelListValue>): MessageUpdateEvent_PayloadData_MessageMentionChannelListValue;
};
export declare const MessageUpdateEvent_PayloadData_MessageActivityValue: {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageActivityValue";
    encode(message: MessageUpdateEvent_PayloadData_MessageActivityValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageUpdateEvent_PayloadData_MessageActivityValue;
    fromJSON(object: any): MessageUpdateEvent_PayloadData_MessageActivityValue;
    toJSON(message: MessageUpdateEvent_PayloadData_MessageActivityValue): unknown;
    fromPartial(object: DeepPartial<MessageUpdateEvent_PayloadData_MessageActivityValue>): MessageUpdateEvent_PayloadData_MessageActivityValue;
};
export declare const MessageUpdateEvent_PayloadData_MessageApplicationValue: {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageApplicationValue";
    encode(message: MessageUpdateEvent_PayloadData_MessageApplicationValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageUpdateEvent_PayloadData_MessageApplicationValue;
    fromJSON(object: any): MessageUpdateEvent_PayloadData_MessageApplicationValue;
    toJSON(message: MessageUpdateEvent_PayloadData_MessageApplicationValue): unknown;
    fromPartial(object: DeepPartial<MessageUpdateEvent_PayloadData_MessageApplicationValue>): MessageUpdateEvent_PayloadData_MessageApplicationValue;
};
export declare const MessageUpdateEvent_PayloadData_MessageReferenceValue: {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageReferenceValue";
    encode(message: MessageUpdateEvent_PayloadData_MessageReferenceValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageUpdateEvent_PayloadData_MessageReferenceValue;
    fromJSON(object: any): MessageUpdateEvent_PayloadData_MessageReferenceValue;
    toJSON(message: MessageUpdateEvent_PayloadData_MessageReferenceValue): unknown;
    fromPartial(object: DeepPartial<MessageUpdateEvent_PayloadData_MessageReferenceValue>): MessageUpdateEvent_PayloadData_MessageReferenceValue;
};
export declare const MessageUpdateEvent_PayloadData_MessageAuthorValue: {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageAuthorValue";
    encode(message: MessageUpdateEvent_PayloadData_MessageAuthorValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageUpdateEvent_PayloadData_MessageAuthorValue;
    fromJSON(object: any): MessageUpdateEvent_PayloadData_MessageAuthorValue;
    toJSON(message: MessageUpdateEvent_PayloadData_MessageAuthorValue): unknown;
    fromPartial(object: DeepPartial<MessageUpdateEvent_PayloadData_MessageAuthorValue>): MessageUpdateEvent_PayloadData_MessageAuthorValue;
};
export declare const MessageUpdateEvent_PayloadData_MessageMemberValue: {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageMemberValue";
    encode(message: MessageUpdateEvent_PayloadData_MessageMemberValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageUpdateEvent_PayloadData_MessageMemberValue;
    fromJSON(object: any): MessageUpdateEvent_PayloadData_MessageMemberValue;
    toJSON(message: MessageUpdateEvent_PayloadData_MessageMemberValue): unknown;
    fromPartial(object: DeepPartial<MessageUpdateEvent_PayloadData_MessageMemberValue>): MessageUpdateEvent_PayloadData_MessageMemberValue;
};
export declare const MessageDeleteEvent: {
    $type: "pylon.discord.v1.event.MessageDeleteEvent";
    encode(message: MessageDeleteEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageDeleteEvent;
    fromJSON(object: any): MessageDeleteEvent;
    toJSON(message: MessageDeleteEvent): unknown;
    fromPartial(object: DeepPartial<MessageDeleteEvent>): MessageDeleteEvent;
};
export declare const MessageDeleteEvent_PayloadData: {
    $type: "pylon.discord.v1.event.MessageDeleteEvent.PayloadData";
    encode(message: MessageDeleteEvent_PayloadData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageDeleteEvent_PayloadData;
    fromJSON(object: any): MessageDeleteEvent_PayloadData;
    toJSON(message: MessageDeleteEvent_PayloadData): unknown;
    fromPartial(object: DeepPartial<MessageDeleteEvent_PayloadData>): MessageDeleteEvent_PayloadData;
};
export declare const MessageDeleteBulkEvent: {
    $type: "pylon.discord.v1.event.MessageDeleteBulkEvent";
    encode(message: MessageDeleteBulkEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageDeleteBulkEvent;
    fromJSON(object: any): MessageDeleteBulkEvent;
    toJSON(message: MessageDeleteBulkEvent): unknown;
    fromPartial(object: DeepPartial<MessageDeleteBulkEvent>): MessageDeleteBulkEvent;
};
export declare const MessageDeleteBulkEvent_PayloadData: {
    $type: "pylon.discord.v1.event.MessageDeleteBulkEvent.PayloadData";
    encode(message: MessageDeleteBulkEvent_PayloadData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageDeleteBulkEvent_PayloadData;
    fromJSON(object: any): MessageDeleteBulkEvent_PayloadData;
    toJSON(message: MessageDeleteBulkEvent_PayloadData): unknown;
    fromPartial(object: DeepPartial<MessageDeleteBulkEvent_PayloadData>): MessageDeleteBulkEvent_PayloadData;
};
export declare const MessageReactionAddEvent: {
    $type: "pylon.discord.v1.event.MessageReactionAddEvent";
    encode(message: MessageReactionAddEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageReactionAddEvent;
    fromJSON(object: any): MessageReactionAddEvent;
    toJSON(message: MessageReactionAddEvent): unknown;
    fromPartial(object: DeepPartial<MessageReactionAddEvent>): MessageReactionAddEvent;
};
export declare const MessageReactionAddEvent_PayloadData: {
    $type: "pylon.discord.v1.event.MessageReactionAddEvent.PayloadData";
    encode(message: MessageReactionAddEvent_PayloadData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageReactionAddEvent_PayloadData;
    fromJSON(object: any): MessageReactionAddEvent_PayloadData;
    toJSON(message: MessageReactionAddEvent_PayloadData): unknown;
    fromPartial(object: DeepPartial<MessageReactionAddEvent_PayloadData>): MessageReactionAddEvent_PayloadData;
};
export declare const MessageReactionRemoveEvent: {
    $type: "pylon.discord.v1.event.MessageReactionRemoveEvent";
    encode(message: MessageReactionRemoveEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageReactionRemoveEvent;
    fromJSON(object: any): MessageReactionRemoveEvent;
    toJSON(message: MessageReactionRemoveEvent): unknown;
    fromPartial(object: DeepPartial<MessageReactionRemoveEvent>): MessageReactionRemoveEvent;
};
export declare const MessageReactionRemoveEvent_PayloadData: {
    $type: "pylon.discord.v1.event.MessageReactionRemoveEvent.PayloadData";
    encode(message: MessageReactionRemoveEvent_PayloadData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageReactionRemoveEvent_PayloadData;
    fromJSON(object: any): MessageReactionRemoveEvent_PayloadData;
    toJSON(message: MessageReactionRemoveEvent_PayloadData): unknown;
    fromPartial(object: DeepPartial<MessageReactionRemoveEvent_PayloadData>): MessageReactionRemoveEvent_PayloadData;
};
export declare const MessageReactionRemoveAllEvent: {
    $type: "pylon.discord.v1.event.MessageReactionRemoveAllEvent";
    encode(message: MessageReactionRemoveAllEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageReactionRemoveAllEvent;
    fromJSON(object: any): MessageReactionRemoveAllEvent;
    toJSON(message: MessageReactionRemoveAllEvent): unknown;
    fromPartial(object: DeepPartial<MessageReactionRemoveAllEvent>): MessageReactionRemoveAllEvent;
};
export declare const MessageReactionRemoveAllEvent_PayloadData: {
    $type: "pylon.discord.v1.event.MessageReactionRemoveAllEvent.PayloadData";
    encode(message: MessageReactionRemoveAllEvent_PayloadData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageReactionRemoveAllEvent_PayloadData;
    fromJSON(object: any): MessageReactionRemoveAllEvent_PayloadData;
    toJSON(message: MessageReactionRemoveAllEvent_PayloadData): unknown;
    fromPartial(object: DeepPartial<MessageReactionRemoveAllEvent_PayloadData>): MessageReactionRemoveAllEvent_PayloadData;
};
export declare const MessageReactionRemoveEmojiEvent: {
    $type: "pylon.discord.v1.event.MessageReactionRemoveEmojiEvent";
    encode(message: MessageReactionRemoveEmojiEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageReactionRemoveEmojiEvent;
    fromJSON(object: any): MessageReactionRemoveEmojiEvent;
    toJSON(message: MessageReactionRemoveEmojiEvent): unknown;
    fromPartial(object: DeepPartial<MessageReactionRemoveEmojiEvent>): MessageReactionRemoveEmojiEvent;
};
export declare const MessageReactionRemoveEmojiEvent_PayloadData: {
    $type: "pylon.discord.v1.event.MessageReactionRemoveEmojiEvent.PayloadData";
    encode(message: MessageReactionRemoveEmojiEvent_PayloadData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageReactionRemoveEmojiEvent_PayloadData;
    fromJSON(object: any): MessageReactionRemoveEmojiEvent_PayloadData;
    toJSON(message: MessageReactionRemoveEmojiEvent_PayloadData): unknown;
    fromPartial(object: DeepPartial<MessageReactionRemoveEmojiEvent_PayloadData>): MessageReactionRemoveEmojiEvent_PayloadData;
};
export declare const TypingStartEvent: {
    $type: "pylon.discord.v1.event.TypingStartEvent";
    encode(message: TypingStartEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TypingStartEvent;
    fromJSON(object: any): TypingStartEvent;
    toJSON(message: TypingStartEvent): unknown;
    fromPartial(object: DeepPartial<TypingStartEvent>): TypingStartEvent;
};
export declare const TypingStartEvent_PayloadData: {
    $type: "pylon.discord.v1.event.TypingStartEvent.PayloadData";
    encode(message: TypingStartEvent_PayloadData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TypingStartEvent_PayloadData;
    fromJSON(object: any): TypingStartEvent_PayloadData;
    toJSON(message: TypingStartEvent_PayloadData): unknown;
    fromPartial(object: DeepPartial<TypingStartEvent_PayloadData>): TypingStartEvent_PayloadData;
};
export declare const VoiceStateUpdateEvent: {
    $type: "pylon.discord.v1.event.VoiceStateUpdateEvent";
    encode(message: VoiceStateUpdateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VoiceStateUpdateEvent;
    fromJSON(object: any): VoiceStateUpdateEvent;
    toJSON(message: VoiceStateUpdateEvent): unknown;
    fromPartial(object: DeepPartial<VoiceStateUpdateEvent>): VoiceStateUpdateEvent;
};
export declare const VoiceServerUpdateEvent: {
    $type: "pylon.discord.v1.event.VoiceServerUpdateEvent";
    encode(message: VoiceServerUpdateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VoiceServerUpdateEvent;
    fromJSON(object: any): VoiceServerUpdateEvent;
    toJSON(message: VoiceServerUpdateEvent): unknown;
    fromPartial(object: DeepPartial<VoiceServerUpdateEvent>): VoiceServerUpdateEvent;
};
export declare const VoiceServerUpdateEvent_PayloadData: {
    $type: "pylon.discord.v1.event.VoiceServerUpdateEvent.PayloadData";
    encode(message: VoiceServerUpdateEvent_PayloadData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VoiceServerUpdateEvent_PayloadData;
    fromJSON(object: any): VoiceServerUpdateEvent_PayloadData;
    toJSON(message: VoiceServerUpdateEvent_PayloadData): unknown;
    fromPartial(object: DeepPartial<VoiceServerUpdateEvent_PayloadData>): VoiceServerUpdateEvent_PayloadData;
};
export declare const InviteCreateEvent: {
    $type: "pylon.discord.v1.event.InviteCreateEvent";
    encode(message: InviteCreateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InviteCreateEvent;
    fromJSON(object: any): InviteCreateEvent;
    toJSON(message: InviteCreateEvent): unknown;
    fromPartial(object: DeepPartial<InviteCreateEvent>): InviteCreateEvent;
};
export declare const InviteCreateEvent_PayloadData: {
    $type: "pylon.discord.v1.event.InviteCreateEvent.PayloadData";
    encode(message: InviteCreateEvent_PayloadData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InviteCreateEvent_PayloadData;
    fromJSON(object: any): InviteCreateEvent_PayloadData;
    toJSON(message: InviteCreateEvent_PayloadData): unknown;
    fromPartial(object: DeepPartial<InviteCreateEvent_PayloadData>): InviteCreateEvent_PayloadData;
};
export declare const InviteDeleteEvent: {
    $type: "pylon.discord.v1.event.InviteDeleteEvent";
    encode(message: InviteDeleteEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InviteDeleteEvent;
    fromJSON(object: any): InviteDeleteEvent;
    toJSON(message: InviteDeleteEvent): unknown;
    fromPartial(object: DeepPartial<InviteDeleteEvent>): InviteDeleteEvent;
};
export declare const InviteDeleteEvent_PayloadData: {
    $type: "pylon.discord.v1.event.InviteDeleteEvent.PayloadData";
    encode(message: InviteDeleteEvent_PayloadData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InviteDeleteEvent_PayloadData;
    fromJSON(object: any): InviteDeleteEvent_PayloadData;
    toJSON(message: InviteDeleteEvent_PayloadData): unknown;
    fromPartial(object: DeepPartial<InviteDeleteEvent_PayloadData>): InviteDeleteEvent_PayloadData;
};
export declare const GuildBanAddEvent: {
    $type: "pylon.discord.v1.event.GuildBanAddEvent";
    encode(message: GuildBanAddEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuildBanAddEvent;
    fromJSON(object: any): GuildBanAddEvent;
    toJSON(message: GuildBanAddEvent): unknown;
    fromPartial(object: DeepPartial<GuildBanAddEvent>): GuildBanAddEvent;
};
export declare const GuildBanAddEvent_PayloadData: {
    $type: "pylon.discord.v1.event.GuildBanAddEvent.PayloadData";
    encode(message: GuildBanAddEvent_PayloadData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuildBanAddEvent_PayloadData;
    fromJSON(object: any): GuildBanAddEvent_PayloadData;
    toJSON(message: GuildBanAddEvent_PayloadData): unknown;
    fromPartial(object: DeepPartial<GuildBanAddEvent_PayloadData>): GuildBanAddEvent_PayloadData;
};
export declare const GuildBanRemoveEvent: {
    $type: "pylon.discord.v1.event.GuildBanRemoveEvent";
    encode(message: GuildBanRemoveEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuildBanRemoveEvent;
    fromJSON(object: any): GuildBanRemoveEvent;
    toJSON(message: GuildBanRemoveEvent): unknown;
    fromPartial(object: DeepPartial<GuildBanRemoveEvent>): GuildBanRemoveEvent;
};
export declare const GuildBanRemoveEvent_PayloadData: {
    $type: "pylon.discord.v1.event.GuildBanRemoveEvent.PayloadData";
    encode(message: GuildBanRemoveEvent_PayloadData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuildBanRemoveEvent_PayloadData;
    fromJSON(object: any): GuildBanRemoveEvent_PayloadData;
    toJSON(message: GuildBanRemoveEvent_PayloadData): unknown;
    fromPartial(object: DeepPartial<GuildBanRemoveEvent_PayloadData>): GuildBanRemoveEvent_PayloadData;
};
export declare const GuildEmojisUpdateEvent: {
    $type: "pylon.discord.v1.event.GuildEmojisUpdateEvent";
    encode(message: GuildEmojisUpdateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuildEmojisUpdateEvent;
    fromJSON(object: any): GuildEmojisUpdateEvent;
    toJSON(message: GuildEmojisUpdateEvent): unknown;
    fromPartial(object: DeepPartial<GuildEmojisUpdateEvent>): GuildEmojisUpdateEvent;
};
export declare const GuildEmojisUpdateEvent_PayloadData: {
    $type: "pylon.discord.v1.event.GuildEmojisUpdateEvent.PayloadData";
    encode(message: GuildEmojisUpdateEvent_PayloadData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuildEmojisUpdateEvent_PayloadData;
    fromJSON(object: any): GuildEmojisUpdateEvent_PayloadData;
    toJSON(message: GuildEmojisUpdateEvent_PayloadData): unknown;
    fromPartial(object: DeepPartial<GuildEmojisUpdateEvent_PayloadData>): GuildEmojisUpdateEvent_PayloadData;
};
export declare const GuildIntegrationsUpdateEvent: {
    $type: "pylon.discord.v1.event.GuildIntegrationsUpdateEvent";
    encode(message: GuildIntegrationsUpdateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuildIntegrationsUpdateEvent;
    fromJSON(object: any): GuildIntegrationsUpdateEvent;
    toJSON(message: GuildIntegrationsUpdateEvent): unknown;
    fromPartial(object: DeepPartial<GuildIntegrationsUpdateEvent>): GuildIntegrationsUpdateEvent;
};
export declare const GuildIntegrationsUpdateEvent_PayloadData: {
    $type: "pylon.discord.v1.event.GuildIntegrationsUpdateEvent.PayloadData";
    encode(message: GuildIntegrationsUpdateEvent_PayloadData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuildIntegrationsUpdateEvent_PayloadData;
    fromJSON(object: any): GuildIntegrationsUpdateEvent_PayloadData;
    toJSON(message: GuildIntegrationsUpdateEvent_PayloadData): unknown;
    fromPartial(object: DeepPartial<GuildIntegrationsUpdateEvent_PayloadData>): GuildIntegrationsUpdateEvent_PayloadData;
};
export declare const WebhooksUpdateEvent: {
    $type: "pylon.discord.v1.event.WebhooksUpdateEvent";
    encode(message: WebhooksUpdateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WebhooksUpdateEvent;
    fromJSON(object: any): WebhooksUpdateEvent;
    toJSON(message: WebhooksUpdateEvent): unknown;
    fromPartial(object: DeepPartial<WebhooksUpdateEvent>): WebhooksUpdateEvent;
};
export declare const WebhooksUpdateEvent_PayloadData: {
    $type: "pylon.discord.v1.event.WebhooksUpdateEvent.PayloadData";
    encode(message: WebhooksUpdateEvent_PayloadData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WebhooksUpdateEvent_PayloadData;
    fromJSON(object: any): WebhooksUpdateEvent_PayloadData;
    toJSON(message: WebhooksUpdateEvent_PayloadData): unknown;
    fromPartial(object: DeepPartial<WebhooksUpdateEvent_PayloadData>): WebhooksUpdateEvent_PayloadData;
};
export declare const IntegrationCreateEvent: {
    $type: "pylon.discord.v1.event.IntegrationCreateEvent";
    encode(message: IntegrationCreateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IntegrationCreateEvent;
    fromJSON(object: any): IntegrationCreateEvent;
    toJSON(message: IntegrationCreateEvent): unknown;
    fromPartial(object: DeepPartial<IntegrationCreateEvent>): IntegrationCreateEvent;
};
export declare const IntegrationCreateEvent_PayloadData: {
    $type: "pylon.discord.v1.event.IntegrationCreateEvent.PayloadData";
    encode(message: IntegrationCreateEvent_PayloadData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IntegrationCreateEvent_PayloadData;
    fromJSON(object: any): IntegrationCreateEvent_PayloadData;
    toJSON(message: IntegrationCreateEvent_PayloadData): unknown;
    fromPartial(object: DeepPartial<IntegrationCreateEvent_PayloadData>): IntegrationCreateEvent_PayloadData;
};
export declare const IntegrationUpdateEvent: {
    $type: "pylon.discord.v1.event.IntegrationUpdateEvent";
    encode(message: IntegrationUpdateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IntegrationUpdateEvent;
    fromJSON(object: any): IntegrationUpdateEvent;
    toJSON(message: IntegrationUpdateEvent): unknown;
    fromPartial(object: DeepPartial<IntegrationUpdateEvent>): IntegrationUpdateEvent;
};
export declare const IntegrationUpdateEvent_PayloadData: {
    $type: "pylon.discord.v1.event.IntegrationUpdateEvent.PayloadData";
    encode(message: IntegrationUpdateEvent_PayloadData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IntegrationUpdateEvent_PayloadData;
    fromJSON(object: any): IntegrationUpdateEvent_PayloadData;
    toJSON(message: IntegrationUpdateEvent_PayloadData): unknown;
    fromPartial(object: DeepPartial<IntegrationUpdateEvent_PayloadData>): IntegrationUpdateEvent_PayloadData;
};
export declare const IntegrationDeleteEvent: {
    $type: "pylon.discord.v1.event.IntegrationDeleteEvent";
    encode(message: IntegrationDeleteEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IntegrationDeleteEvent;
    fromJSON(object: any): IntegrationDeleteEvent;
    toJSON(message: IntegrationDeleteEvent): unknown;
    fromPartial(object: DeepPartial<IntegrationDeleteEvent>): IntegrationDeleteEvent;
};
export declare const IntegrationDeleteEvent_PayloadData: {
    $type: "pylon.discord.v1.event.IntegrationDeleteEvent.PayloadData";
    encode(message: IntegrationDeleteEvent_PayloadData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IntegrationDeleteEvent_PayloadData;
    fromJSON(object: any): IntegrationDeleteEvent_PayloadData;
    toJSON(message: IntegrationDeleteEvent_PayloadData): unknown;
    fromPartial(object: DeepPartial<IntegrationDeleteEvent_PayloadData>): IntegrationDeleteEvent_PayloadData;
};
export declare const InteractionCreateEvent: {
    $type: "pylon.discord.v1.event.InteractionCreateEvent";
    encode(message: InteractionCreateEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InteractionCreateEvent;
    fromJSON(object: any): InteractionCreateEvent;
    toJSON(message: InteractionCreateEvent): unknown;
    fromPartial(object: DeepPartial<InteractionCreateEvent>): InteractionCreateEvent;
};
export declare const InteractionCreateEvent_PayloadData: {
    $type: "pylon.discord.v1.event.InteractionCreateEvent.PayloadData";
    encode(message: InteractionCreateEvent_PayloadData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InteractionCreateEvent_PayloadData;
    fromJSON(object: any): InteractionCreateEvent_PayloadData;
    toJSON(message: InteractionCreateEvent_PayloadData): unknown;
    fromPartial(object: DeepPartial<InteractionCreateEvent_PayloadData>): InteractionCreateEvent_PayloadData;
};
export declare const EventResponse: {
    $type: "pylon.discord.v1.event.EventResponse";
    encode(_: EventResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventResponse;
    fromJSON(_: any): EventResponse;
    toJSON(_: EventResponse): unknown;
    fromPartial(_: DeepPartial<EventResponse>): EventResponse;
};
export declare const InteractionResponse: {
    $type: "pylon.discord.v1.event.InteractionResponse";
    encode(_: InteractionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InteractionResponse;
    fromJSON(_: any): InteractionResponse;
    toJSON(_: InteractionResponse): unknown;
    fromPartial(_: DeepPartial<InteractionResponse>): InteractionResponse;
};
export interface DataLoaderOptions {
    cache?: boolean;
}
export interface DataLoaders {
    rpcDataLoaderOptions?: DataLoaderOptions;
    getDataLoader<T>(identifier: string, constructorFn: () => T): T;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {
    $case: string;
} ? {
    [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]>;
} & {
    $case: T["$case"];
} : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
