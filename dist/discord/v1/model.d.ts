import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "pylon.discord.v1.model";
export interface SnowflakeValue {
    $type: "pylon.discord.v1.model.SnowflakeValue";
    value: string;
}
export interface SnowflakeListValue {
    $type: "pylon.discord.v1.model.SnowflakeListValue";
    values: string[];
}
export interface PermissionsValue {
    $type: "pylon.discord.v1.model.PermissionsValue";
    value: string;
}
export interface GuildData {
    $type: "pylon.discord.v1.model.GuildData";
    id: string;
    name: string;
    icon: string | undefined;
    region: string;
    afkChannelId: SnowflakeValue | undefined;
    ownerId: string;
    joinedAt: Date | undefined;
    splash: string | undefined;
    discoverySplash: string | undefined;
    afkTimeout: number;
    memberCount: number;
    verificationLevel: number;
    defaultMessageNotifications: number;
    explicitContentFilter: number;
    features: string[];
    mfaLevel: number;
    widgetEnabled: boolean;
    widgetChannelId: SnowflakeValue | undefined;
    systemChannelId: SnowflakeValue | undefined;
    vanityUrlCode: string | undefined;
    description: string | undefined;
    banner: string | undefined;
    premiumTier: number;
    premiumSubscriptionCount: number;
    unavailable: boolean;
}
export interface ChannelData {
    $type: "pylon.discord.v1.model.ChannelData";
    id: string;
    guildId: SnowflakeValue | undefined;
    name: string;
    topic: string | undefined;
    type: ChannelData_ChannelType;
    nsfw: boolean;
    position: number;
    bitrate: number;
    userLimit: number;
    parentId: SnowflakeValue | undefined;
    rateLimitPerUser: number;
    permissionOverwrites: ChannelData_ChannelPermissionOverwriteData[];
}
export declare enum ChannelData_ChannelType {
    UNKNOWN = 0,
    GUILD_TEXT = 1,
    DM = 2,
    GUILD_VOICE = 3,
    GROUP_DM = 4,
    GUILD_CATEGORY = 5,
    GUILD_NEWS = 6,
    GUILD_STORE = 7,
    PUBLIC_THREAD = 8,
    PRIVATE_THREAD = 9,
    GUILD_STAGE_VOICE = 10
}
export declare function channelData_ChannelTypeFromJSON(object: any): ChannelData_ChannelType;
export declare function channelData_ChannelTypeToJSON(object: ChannelData_ChannelType): string;
export interface ChannelData_ChannelPermissionOverwriteData {
    $type: "pylon.discord.v1.model.ChannelData.ChannelPermissionOverwriteData";
    id: string;
    type: ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType;
    allow: string;
    deny: string;
}
export declare enum ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType {
    UNKNOWN = 0,
    ROLE = 1,
    MEMBER = 2
}
export declare function channelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteTypeFromJSON(object: any): ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType;
export declare function channelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteTypeToJSON(object: ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType): string;
export interface UserData {
    $type: "pylon.discord.v1.model.UserData";
    id: string;
    username: string;
    avatar: string | undefined;
    discriminator: number;
    bot: boolean;
}
export interface MemberData {
    $type: "pylon.discord.v1.model.MemberData";
    id: string;
    guildId: string;
    user: UserData | undefined;
    nick: string | undefined;
    roles: string[];
    joinedAt: Date | undefined;
    premiumSince: Date | undefined;
    permissions: string;
    pending: boolean | undefined;
}
export interface RoleData {
    $type: "pylon.discord.v1.model.RoleData";
    id: string;
    guildId: string;
    name: string;
    managed: boolean;
    mentionable: boolean;
    hoist: boolean;
    color: number;
    position: number;
    permissions: string;
}
export interface EmojiData {
    $type: "pylon.discord.v1.model.EmojiData";
    id: string;
    guildId: string;
    name: string;
    animated: boolean;
    roles: string[];
    managed: boolean;
    requireColons: boolean;
    available: boolean;
    userId: string;
}
export interface VoiceStateData {
    $type: "pylon.discord.v1.model.VoiceStateData";
    member: MemberData | undefined;
    guildId: string;
    channelId: SnowflakeValue | undefined;
    sessionId: string | undefined;
    selfMute: boolean;
    selfDeaf: boolean;
    selfVideo: boolean;
    selfStream: boolean;
    mute: boolean;
    deaf: boolean;
    suppress: boolean;
}
export interface MessageData {
    $type: "pylon.discord.v1.model.MessageData";
    id: string;
    channelId: string;
    guildId: SnowflakeValue | undefined;
    content: string;
    timestamp: Date | undefined;
    editedTimestamp: Date | undefined;
    mentionRoles: SnowflakeListValue | undefined;
    tts: boolean;
    mentionEveryone: boolean;
    attachments: MessageData_MessageAttachmentData[];
    embeds: MessageData_MessageEmbedData[];
    mentions: MessageData_MessageMentionData[];
    reactions: MessageData_MessageReactionData[];
    pinned: boolean;
    type: MessageData_MessageType;
    mentionChannels: MessageData_MessageMentionChannelData[];
    flags: number;
    activity: MessageData_MessageActivityData | undefined;
    application: MessageData_MessageApplicationData | undefined;
    messageReference: MessageData_MessageReferenceData | undefined;
    author: UserData | undefined;
    member: MemberData | undefined;
    webhookId: SnowflakeValue | undefined;
}
export declare enum MessageData_MessageType {
    UNKNOWN = 0,
    DEFAULT = 1,
    RECIPIENT_ADD = 2,
    RECIPIENT_REMOVE = 3,
    CALL = 4,
    CHANNEL_NAME_CHANGE = 5,
    CHANNEL_ICON_CHANGE = 6,
    CHANNEL_PINNED_MESSAGE = 7,
    GUILD_MEMBER_JOIN = 8,
    USER_PREMIUM_GUILD_SUBSCRIPTION = 9,
    USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1 = 10,
    USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2 = 11,
    USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3 = 12,
    CHANNEL_FOLLOW_ADD = 13,
    GUILD_DISCOVERY_DISQUALIFIED = 15,
    GUILD_DISCOVERY_REQUALIFIED = 16
}
export declare function messageData_MessageTypeFromJSON(object: any): MessageData_MessageType;
export declare function messageData_MessageTypeToJSON(object: MessageData_MessageType): string;
export interface MessageData_MessageAttachmentData {
    $type: "pylon.discord.v1.model.MessageData.MessageAttachmentData";
    id: string;
    filename: string;
    size: string;
    url: string;
    proxyUrl: string;
    width: string;
    height: string;
}
export interface MessageData_MessageMentionData {
    $type: "pylon.discord.v1.model.MessageData.MessageMentionData";
    id: string;
    username: string;
    avatar: string;
    discriminator: number;
}
export interface MessageData_MessageReactionData {
    $type: "pylon.discord.v1.model.MessageData.MessageReactionData";
    count: number;
    me: boolean;
    emoji: MessageData_MessageReactionEmojiData | undefined;
}
export interface MessageData_MessageReactionEmojiData {
    $type: "pylon.discord.v1.model.MessageData.MessageReactionEmojiData";
    id: string;
    name: string;
    animated: boolean;
}
export interface MessageData_MessageApplicationData {
    $type: "pylon.discord.v1.model.MessageData.MessageApplicationData";
    id: string;
    coverImage: string;
    description: string;
    icon: string;
    name: string;
}
export interface MessageData_MessageReferenceData {
    $type: "pylon.discord.v1.model.MessageData.MessageReferenceData";
    messageId: string;
    channelId: string;
    guildId: string;
}
export interface MessageData_MessageActivityData {
    $type: "pylon.discord.v1.model.MessageData.MessageActivityData";
    type: number;
    partyId: string;
}
export interface MessageData_MessageMentionChannelData {
    $type: "pylon.discord.v1.model.MessageData.MessageMentionChannelData";
    id: string;
    guildId: string;
    type: ChannelData_ChannelType;
    name: string;
}
export interface MessageData_MessageEmbedData {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData";
    title: string;
    type: MessageData_MessageEmbedData_MessageEmbedType;
    description: string;
    url: string;
    timestamp: Date | undefined;
    color: number;
    footer: MessageData_MessageEmbedData_MessageEmbedFooterData | undefined;
    image: MessageData_MessageEmbedData_MessageEmbedImageData | undefined;
    thumbnail: MessageData_MessageEmbedData_MessageEmbedThumbnailData | undefined;
    video: MessageData_MessageEmbedData_MessageEmbedVideoData | undefined;
    provider: MessageData_MessageEmbedData_MessageEmbedProviderData | undefined;
    author: MessageData_MessageEmbedData_MessageEmbedAuthorData | undefined;
    fields: MessageData_MessageEmbedData_MessageEmbedFieldData[];
}
export declare enum MessageData_MessageEmbedData_MessageEmbedType {
    UNKNOWN = 0,
    RICH = 1,
    IMAGE = 2,
    VIDEO = 3,
    GIFV = 4,
    ARTICLE = 5,
    LINK = 6
}
export declare function messageData_MessageEmbedData_MessageEmbedTypeFromJSON(object: any): MessageData_MessageEmbedData_MessageEmbedType;
export declare function messageData_MessageEmbedData_MessageEmbedTypeToJSON(object: MessageData_MessageEmbedData_MessageEmbedType): string;
export interface MessageData_MessageEmbedData_MessageEmbedFooterData {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedFooterData";
    text: string;
    iconUrl: string;
    proxyIconUrl: string;
}
export interface MessageData_MessageEmbedData_MessageEmbedImageData {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedImageData";
    url: string;
    width: number;
    height: number;
}
export interface MessageData_MessageEmbedData_MessageEmbedThumbnailData {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedThumbnailData";
    url: string;
    proxyUrl: string;
    width: number;
    height: number;
}
export interface MessageData_MessageEmbedData_MessageEmbedVideoData {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedVideoData";
    url: string;
    width: number;
    height: number;
}
export interface MessageData_MessageEmbedData_MessageEmbedProviderData {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedProviderData";
    name: string;
    url: string;
}
export interface MessageData_MessageEmbedData_MessageEmbedAuthorData {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedAuthorData";
    name: string;
    url: string;
    iconUrl: string;
    proxyIconUrl: string;
}
export interface MessageData_MessageEmbedData_MessageEmbedFieldData {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedFieldData";
    name: string;
    value: string;
    inline: boolean;
}
export interface PresenceData {
    $type: "pylon.discord.v1.model.PresenceData";
    guildId: string;
    maybePartialUser?: {
        $case: "user";
        user: UserData;
    } | {
        $case: "userId";
        userId: string;
    };
    status: PresenceData_OnlineStatus;
    clientStatus: PresenceData_PresenceClientStatusData | undefined;
    activities: PresenceData_PresenceActivityData[];
}
export declare enum PresenceData_OnlineStatus {
    UNKNOWN = 0,
    ONLINE = 1,
    IDLE = 2,
    DND = 3,
    INVISIBLE = 4,
    OFFLINE = 5
}
export declare function presenceData_OnlineStatusFromJSON(object: any): PresenceData_OnlineStatus;
export declare function presenceData_OnlineStatusToJSON(object: PresenceData_OnlineStatus): string;
export interface PresenceData_PresenceClientStatusData {
    $type: "pylon.discord.v1.model.PresenceData.PresenceClientStatusData";
    desktop: string;
    mobile: string;
    web: string;
}
export interface PresenceData_PresenceActivityData {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData";
    name: string;
    type: PresenceData_PresenceActivityData_ActivityType;
    url: string;
    createdAt: Date | undefined;
    timestamps: PresenceData_PresenceActivityData_PresenceActivityTimestampsData | undefined;
    applicationId: string;
    details: string;
    state: string;
    emoji: PresenceData_PresenceActivityData_PresenceActivityEmojiData | undefined;
    party: PresenceData_PresenceActivityData_PresenceActivityPartyData | undefined;
    assets: PresenceData_PresenceActivityData_PresenceActivityAssetsData | undefined;
    secrets: PresenceData_PresenceActivityData_PresenceActivitySecretsData | undefined;
    instance: boolean;
    flags: number;
}
export declare enum PresenceData_PresenceActivityData_ActivityType {
    UNKNOWN = 0,
    DEFAULT = 1,
    STREAMING = 2,
    LISTENING = 3,
    WATCHING = 4,
    CUSTOM_STATUS = 5,
    COMPETING = 6
}
export declare function presenceData_PresenceActivityData_ActivityTypeFromJSON(object: any): PresenceData_PresenceActivityData_ActivityType;
export declare function presenceData_PresenceActivityData_ActivityTypeToJSON(object: PresenceData_PresenceActivityData_ActivityType): string;
export interface PresenceData_PresenceActivityData_PresenceActivityTimestampsData {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData.PresenceActivityTimestampsData";
    start: string;
    end: string;
}
export interface PresenceData_PresenceActivityData_PresenceActivityEmojiData {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData.PresenceActivityEmojiData";
    name: string;
    id: string;
    animated: boolean;
}
export interface PresenceData_PresenceActivityData_PresenceActivityPartyData {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData.PresenceActivityPartyData";
    id: string;
    currentSize: string;
    maxSize: string;
}
export interface PresenceData_PresenceActivityData_PresenceActivityAssetsData {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData.PresenceActivityAssetsData";
    largeImage: string;
    largeText: string;
    smallImage: string;
    smallText: string;
}
export interface PresenceData_PresenceActivityData_PresenceActivitySecretsData {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData.PresenceActivitySecretsData";
    join: string;
    spectate: string;
    match: string;
}
export interface WebhookData {
    $type: "pylon.discord.v1.model.WebhookData";
    id: string;
    channelId: string;
    guildId: string;
    type: WebhookData_WebhookType;
    name: string;
    avatar: string;
    token: string;
}
export declare enum WebhookData_WebhookType {
    INCOMING = 0,
    CHANNEL_FOLLOWER = 1
}
export declare function webhookData_WebhookTypeFromJSON(object: any): WebhookData_WebhookType;
export declare function webhookData_WebhookTypeToJSON(object: WebhookData_WebhookType): string;
export interface InviteData {
    $type: "pylon.discord.v1.model.InviteData";
    code: string;
    guild: InviteData_InviteGuildData | undefined;
    channel: InviteData_InviteChannelData | undefined;
    inviter: UserData | undefined;
    targetUser: UserData | undefined;
    targetUserType: InviteData_InviteTargetUserType;
    approximatePresenceCount: number | undefined;
    approximateMemberCount: number | undefined;
}
export declare enum InviteData_InviteTargetUserType {
    UNKNOWN = 0,
    STREAM = 1
}
export declare function inviteData_InviteTargetUserTypeFromJSON(object: any): InviteData_InviteTargetUserType;
export declare function inviteData_InviteTargetUserTypeToJSON(object: InviteData_InviteTargetUserType): string;
export interface InviteData_InviteGuildData {
    $type: "pylon.discord.v1.model.InviteData.InviteGuildData";
    id: string;
    name: string;
    splash: string | undefined;
    banner: string | undefined;
    description: string | undefined;
    icon: string | undefined;
    features: string[];
    verificationLevel: number;
    vanityUrlCode: string | undefined;
}
export interface InviteData_InviteChannelData {
    $type: "pylon.discord.v1.model.InviteData.InviteChannelData";
    id: string;
    name: string;
    type: ChannelData_ChannelType;
}
export interface GuildBanData {
    $type: "pylon.discord.v1.model.GuildBanData";
    reason: string;
    user: UserData | undefined;
}
export declare const SnowflakeValue: {
    $type: "pylon.discord.v1.model.SnowflakeValue";
    encode(message: SnowflakeValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SnowflakeValue;
    fromJSON(object: any): SnowflakeValue;
    toJSON(message: SnowflakeValue): unknown;
    fromPartial(object: DeepPartial<SnowflakeValue>): SnowflakeValue;
};
export declare const SnowflakeListValue: {
    $type: "pylon.discord.v1.model.SnowflakeListValue";
    encode(message: SnowflakeListValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SnowflakeListValue;
    fromJSON(object: any): SnowflakeListValue;
    toJSON(message: SnowflakeListValue): unknown;
    fromPartial(object: DeepPartial<SnowflakeListValue>): SnowflakeListValue;
};
export declare const PermissionsValue: {
    $type: "pylon.discord.v1.model.PermissionsValue";
    encode(message: PermissionsValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PermissionsValue;
    fromJSON(object: any): PermissionsValue;
    toJSON(message: PermissionsValue): unknown;
    fromPartial(object: DeepPartial<PermissionsValue>): PermissionsValue;
};
export declare const GuildData: {
    $type: "pylon.discord.v1.model.GuildData";
    encode(message: GuildData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuildData;
    fromJSON(object: any): GuildData;
    toJSON(message: GuildData): unknown;
    fromPartial(object: DeepPartial<GuildData>): GuildData;
};
export declare const ChannelData: {
    $type: "pylon.discord.v1.model.ChannelData";
    encode(message: ChannelData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChannelData;
    fromJSON(object: any): ChannelData;
    toJSON(message: ChannelData): unknown;
    fromPartial(object: DeepPartial<ChannelData>): ChannelData;
};
export declare const ChannelData_ChannelPermissionOverwriteData: {
    $type: "pylon.discord.v1.model.ChannelData.ChannelPermissionOverwriteData";
    encode(message: ChannelData_ChannelPermissionOverwriteData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChannelData_ChannelPermissionOverwriteData;
    fromJSON(object: any): ChannelData_ChannelPermissionOverwriteData;
    toJSON(message: ChannelData_ChannelPermissionOverwriteData): unknown;
    fromPartial(object: DeepPartial<ChannelData_ChannelPermissionOverwriteData>): ChannelData_ChannelPermissionOverwriteData;
};
export declare const UserData: {
    $type: "pylon.discord.v1.model.UserData";
    encode(message: UserData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserData;
    fromJSON(object: any): UserData;
    toJSON(message: UserData): unknown;
    fromPartial(object: DeepPartial<UserData>): UserData;
};
export declare const MemberData: {
    $type: "pylon.discord.v1.model.MemberData";
    encode(message: MemberData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MemberData;
    fromJSON(object: any): MemberData;
    toJSON(message: MemberData): unknown;
    fromPartial(object: DeepPartial<MemberData>): MemberData;
};
export declare const RoleData: {
    $type: "pylon.discord.v1.model.RoleData";
    encode(message: RoleData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RoleData;
    fromJSON(object: any): RoleData;
    toJSON(message: RoleData): unknown;
    fromPartial(object: DeepPartial<RoleData>): RoleData;
};
export declare const EmojiData: {
    $type: "pylon.discord.v1.model.EmojiData";
    encode(message: EmojiData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EmojiData;
    fromJSON(object: any): EmojiData;
    toJSON(message: EmojiData): unknown;
    fromPartial(object: DeepPartial<EmojiData>): EmojiData;
};
export declare const VoiceStateData: {
    $type: "pylon.discord.v1.model.VoiceStateData";
    encode(message: VoiceStateData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VoiceStateData;
    fromJSON(object: any): VoiceStateData;
    toJSON(message: VoiceStateData): unknown;
    fromPartial(object: DeepPartial<VoiceStateData>): VoiceStateData;
};
export declare const MessageData: {
    $type: "pylon.discord.v1.model.MessageData";
    encode(message: MessageData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageData;
    fromJSON(object: any): MessageData;
    toJSON(message: MessageData): unknown;
    fromPartial(object: DeepPartial<MessageData>): MessageData;
};
export declare const MessageData_MessageAttachmentData: {
    $type: "pylon.discord.v1.model.MessageData.MessageAttachmentData";
    encode(message: MessageData_MessageAttachmentData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageData_MessageAttachmentData;
    fromJSON(object: any): MessageData_MessageAttachmentData;
    toJSON(message: MessageData_MessageAttachmentData): unknown;
    fromPartial(object: DeepPartial<MessageData_MessageAttachmentData>): MessageData_MessageAttachmentData;
};
export declare const MessageData_MessageMentionData: {
    $type: "pylon.discord.v1.model.MessageData.MessageMentionData";
    encode(message: MessageData_MessageMentionData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageData_MessageMentionData;
    fromJSON(object: any): MessageData_MessageMentionData;
    toJSON(message: MessageData_MessageMentionData): unknown;
    fromPartial(object: DeepPartial<MessageData_MessageMentionData>): MessageData_MessageMentionData;
};
export declare const MessageData_MessageReactionData: {
    $type: "pylon.discord.v1.model.MessageData.MessageReactionData";
    encode(message: MessageData_MessageReactionData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageData_MessageReactionData;
    fromJSON(object: any): MessageData_MessageReactionData;
    toJSON(message: MessageData_MessageReactionData): unknown;
    fromPartial(object: DeepPartial<MessageData_MessageReactionData>): MessageData_MessageReactionData;
};
export declare const MessageData_MessageReactionEmojiData: {
    $type: "pylon.discord.v1.model.MessageData.MessageReactionEmojiData";
    encode(message: MessageData_MessageReactionEmojiData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageData_MessageReactionEmojiData;
    fromJSON(object: any): MessageData_MessageReactionEmojiData;
    toJSON(message: MessageData_MessageReactionEmojiData): unknown;
    fromPartial(object: DeepPartial<MessageData_MessageReactionEmojiData>): MessageData_MessageReactionEmojiData;
};
export declare const MessageData_MessageApplicationData: {
    $type: "pylon.discord.v1.model.MessageData.MessageApplicationData";
    encode(message: MessageData_MessageApplicationData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageData_MessageApplicationData;
    fromJSON(object: any): MessageData_MessageApplicationData;
    toJSON(message: MessageData_MessageApplicationData): unknown;
    fromPartial(object: DeepPartial<MessageData_MessageApplicationData>): MessageData_MessageApplicationData;
};
export declare const MessageData_MessageReferenceData: {
    $type: "pylon.discord.v1.model.MessageData.MessageReferenceData";
    encode(message: MessageData_MessageReferenceData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageData_MessageReferenceData;
    fromJSON(object: any): MessageData_MessageReferenceData;
    toJSON(message: MessageData_MessageReferenceData): unknown;
    fromPartial(object: DeepPartial<MessageData_MessageReferenceData>): MessageData_MessageReferenceData;
};
export declare const MessageData_MessageActivityData: {
    $type: "pylon.discord.v1.model.MessageData.MessageActivityData";
    encode(message: MessageData_MessageActivityData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageData_MessageActivityData;
    fromJSON(object: any): MessageData_MessageActivityData;
    toJSON(message: MessageData_MessageActivityData): unknown;
    fromPartial(object: DeepPartial<MessageData_MessageActivityData>): MessageData_MessageActivityData;
};
export declare const MessageData_MessageMentionChannelData: {
    $type: "pylon.discord.v1.model.MessageData.MessageMentionChannelData";
    encode(message: MessageData_MessageMentionChannelData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageData_MessageMentionChannelData;
    fromJSON(object: any): MessageData_MessageMentionChannelData;
    toJSON(message: MessageData_MessageMentionChannelData): unknown;
    fromPartial(object: DeepPartial<MessageData_MessageMentionChannelData>): MessageData_MessageMentionChannelData;
};
export declare const MessageData_MessageEmbedData: {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData";
    encode(message: MessageData_MessageEmbedData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageData_MessageEmbedData;
    fromJSON(object: any): MessageData_MessageEmbedData;
    toJSON(message: MessageData_MessageEmbedData): unknown;
    fromPartial(object: DeepPartial<MessageData_MessageEmbedData>): MessageData_MessageEmbedData;
};
export declare const MessageData_MessageEmbedData_MessageEmbedFooterData: {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedFooterData";
    encode(message: MessageData_MessageEmbedData_MessageEmbedFooterData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageData_MessageEmbedData_MessageEmbedFooterData;
    fromJSON(object: any): MessageData_MessageEmbedData_MessageEmbedFooterData;
    toJSON(message: MessageData_MessageEmbedData_MessageEmbedFooterData): unknown;
    fromPartial(object: DeepPartial<MessageData_MessageEmbedData_MessageEmbedFooterData>): MessageData_MessageEmbedData_MessageEmbedFooterData;
};
export declare const MessageData_MessageEmbedData_MessageEmbedImageData: {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedImageData";
    encode(message: MessageData_MessageEmbedData_MessageEmbedImageData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageData_MessageEmbedData_MessageEmbedImageData;
    fromJSON(object: any): MessageData_MessageEmbedData_MessageEmbedImageData;
    toJSON(message: MessageData_MessageEmbedData_MessageEmbedImageData): unknown;
    fromPartial(object: DeepPartial<MessageData_MessageEmbedData_MessageEmbedImageData>): MessageData_MessageEmbedData_MessageEmbedImageData;
};
export declare const MessageData_MessageEmbedData_MessageEmbedThumbnailData: {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedThumbnailData";
    encode(message: MessageData_MessageEmbedData_MessageEmbedThumbnailData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageData_MessageEmbedData_MessageEmbedThumbnailData;
    fromJSON(object: any): MessageData_MessageEmbedData_MessageEmbedThumbnailData;
    toJSON(message: MessageData_MessageEmbedData_MessageEmbedThumbnailData): unknown;
    fromPartial(object: DeepPartial<MessageData_MessageEmbedData_MessageEmbedThumbnailData>): MessageData_MessageEmbedData_MessageEmbedThumbnailData;
};
export declare const MessageData_MessageEmbedData_MessageEmbedVideoData: {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedVideoData";
    encode(message: MessageData_MessageEmbedData_MessageEmbedVideoData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageData_MessageEmbedData_MessageEmbedVideoData;
    fromJSON(object: any): MessageData_MessageEmbedData_MessageEmbedVideoData;
    toJSON(message: MessageData_MessageEmbedData_MessageEmbedVideoData): unknown;
    fromPartial(object: DeepPartial<MessageData_MessageEmbedData_MessageEmbedVideoData>): MessageData_MessageEmbedData_MessageEmbedVideoData;
};
export declare const MessageData_MessageEmbedData_MessageEmbedProviderData: {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedProviderData";
    encode(message: MessageData_MessageEmbedData_MessageEmbedProviderData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageData_MessageEmbedData_MessageEmbedProviderData;
    fromJSON(object: any): MessageData_MessageEmbedData_MessageEmbedProviderData;
    toJSON(message: MessageData_MessageEmbedData_MessageEmbedProviderData): unknown;
    fromPartial(object: DeepPartial<MessageData_MessageEmbedData_MessageEmbedProviderData>): MessageData_MessageEmbedData_MessageEmbedProviderData;
};
export declare const MessageData_MessageEmbedData_MessageEmbedAuthorData: {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedAuthorData";
    encode(message: MessageData_MessageEmbedData_MessageEmbedAuthorData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageData_MessageEmbedData_MessageEmbedAuthorData;
    fromJSON(object: any): MessageData_MessageEmbedData_MessageEmbedAuthorData;
    toJSON(message: MessageData_MessageEmbedData_MessageEmbedAuthorData): unknown;
    fromPartial(object: DeepPartial<MessageData_MessageEmbedData_MessageEmbedAuthorData>): MessageData_MessageEmbedData_MessageEmbedAuthorData;
};
export declare const MessageData_MessageEmbedData_MessageEmbedFieldData: {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedFieldData";
    encode(message: MessageData_MessageEmbedData_MessageEmbedFieldData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageData_MessageEmbedData_MessageEmbedFieldData;
    fromJSON(object: any): MessageData_MessageEmbedData_MessageEmbedFieldData;
    toJSON(message: MessageData_MessageEmbedData_MessageEmbedFieldData): unknown;
    fromPartial(object: DeepPartial<MessageData_MessageEmbedData_MessageEmbedFieldData>): MessageData_MessageEmbedData_MessageEmbedFieldData;
};
export declare const PresenceData: {
    $type: "pylon.discord.v1.model.PresenceData";
    encode(message: PresenceData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PresenceData;
    fromJSON(object: any): PresenceData;
    toJSON(message: PresenceData): unknown;
    fromPartial(object: DeepPartial<PresenceData>): PresenceData;
};
export declare const PresenceData_PresenceClientStatusData: {
    $type: "pylon.discord.v1.model.PresenceData.PresenceClientStatusData";
    encode(message: PresenceData_PresenceClientStatusData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PresenceData_PresenceClientStatusData;
    fromJSON(object: any): PresenceData_PresenceClientStatusData;
    toJSON(message: PresenceData_PresenceClientStatusData): unknown;
    fromPartial(object: DeepPartial<PresenceData_PresenceClientStatusData>): PresenceData_PresenceClientStatusData;
};
export declare const PresenceData_PresenceActivityData: {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData";
    encode(message: PresenceData_PresenceActivityData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PresenceData_PresenceActivityData;
    fromJSON(object: any): PresenceData_PresenceActivityData;
    toJSON(message: PresenceData_PresenceActivityData): unknown;
    fromPartial(object: DeepPartial<PresenceData_PresenceActivityData>): PresenceData_PresenceActivityData;
};
export declare const PresenceData_PresenceActivityData_PresenceActivityTimestampsData: {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData.PresenceActivityTimestampsData";
    encode(message: PresenceData_PresenceActivityData_PresenceActivityTimestampsData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PresenceData_PresenceActivityData_PresenceActivityTimestampsData;
    fromJSON(object: any): PresenceData_PresenceActivityData_PresenceActivityTimestampsData;
    toJSON(message: PresenceData_PresenceActivityData_PresenceActivityTimestampsData): unknown;
    fromPartial(object: DeepPartial<PresenceData_PresenceActivityData_PresenceActivityTimestampsData>): PresenceData_PresenceActivityData_PresenceActivityTimestampsData;
};
export declare const PresenceData_PresenceActivityData_PresenceActivityEmojiData: {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData.PresenceActivityEmojiData";
    encode(message: PresenceData_PresenceActivityData_PresenceActivityEmojiData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PresenceData_PresenceActivityData_PresenceActivityEmojiData;
    fromJSON(object: any): PresenceData_PresenceActivityData_PresenceActivityEmojiData;
    toJSON(message: PresenceData_PresenceActivityData_PresenceActivityEmojiData): unknown;
    fromPartial(object: DeepPartial<PresenceData_PresenceActivityData_PresenceActivityEmojiData>): PresenceData_PresenceActivityData_PresenceActivityEmojiData;
};
export declare const PresenceData_PresenceActivityData_PresenceActivityPartyData: {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData.PresenceActivityPartyData";
    encode(message: PresenceData_PresenceActivityData_PresenceActivityPartyData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PresenceData_PresenceActivityData_PresenceActivityPartyData;
    fromJSON(object: any): PresenceData_PresenceActivityData_PresenceActivityPartyData;
    toJSON(message: PresenceData_PresenceActivityData_PresenceActivityPartyData): unknown;
    fromPartial(object: DeepPartial<PresenceData_PresenceActivityData_PresenceActivityPartyData>): PresenceData_PresenceActivityData_PresenceActivityPartyData;
};
export declare const PresenceData_PresenceActivityData_PresenceActivityAssetsData: {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData.PresenceActivityAssetsData";
    encode(message: PresenceData_PresenceActivityData_PresenceActivityAssetsData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PresenceData_PresenceActivityData_PresenceActivityAssetsData;
    fromJSON(object: any): PresenceData_PresenceActivityData_PresenceActivityAssetsData;
    toJSON(message: PresenceData_PresenceActivityData_PresenceActivityAssetsData): unknown;
    fromPartial(object: DeepPartial<PresenceData_PresenceActivityData_PresenceActivityAssetsData>): PresenceData_PresenceActivityData_PresenceActivityAssetsData;
};
export declare const PresenceData_PresenceActivityData_PresenceActivitySecretsData: {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData.PresenceActivitySecretsData";
    encode(message: PresenceData_PresenceActivityData_PresenceActivitySecretsData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PresenceData_PresenceActivityData_PresenceActivitySecretsData;
    fromJSON(object: any): PresenceData_PresenceActivityData_PresenceActivitySecretsData;
    toJSON(message: PresenceData_PresenceActivityData_PresenceActivitySecretsData): unknown;
    fromPartial(object: DeepPartial<PresenceData_PresenceActivityData_PresenceActivitySecretsData>): PresenceData_PresenceActivityData_PresenceActivitySecretsData;
};
export declare const WebhookData: {
    $type: "pylon.discord.v1.model.WebhookData";
    encode(message: WebhookData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WebhookData;
    fromJSON(object: any): WebhookData;
    toJSON(message: WebhookData): unknown;
    fromPartial(object: DeepPartial<WebhookData>): WebhookData;
};
export declare const InviteData: {
    $type: "pylon.discord.v1.model.InviteData";
    encode(message: InviteData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InviteData;
    fromJSON(object: any): InviteData;
    toJSON(message: InviteData): unknown;
    fromPartial(object: DeepPartial<InviteData>): InviteData;
};
export declare const InviteData_InviteGuildData: {
    $type: "pylon.discord.v1.model.InviteData.InviteGuildData";
    encode(message: InviteData_InviteGuildData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InviteData_InviteGuildData;
    fromJSON(object: any): InviteData_InviteGuildData;
    toJSON(message: InviteData_InviteGuildData): unknown;
    fromPartial(object: DeepPartial<InviteData_InviteGuildData>): InviteData_InviteGuildData;
};
export declare const InviteData_InviteChannelData: {
    $type: "pylon.discord.v1.model.InviteData.InviteChannelData";
    encode(message: InviteData_InviteChannelData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InviteData_InviteChannelData;
    fromJSON(object: any): InviteData_InviteChannelData;
    toJSON(message: InviteData_InviteChannelData): unknown;
    fromPartial(object: DeepPartial<InviteData_InviteChannelData>): InviteData_InviteChannelData;
};
export declare const GuildBanData: {
    $type: "pylon.discord.v1.model.GuildBanData";
    encode(message: GuildBanData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuildBanData;
    fromJSON(object: any): GuildBanData;
    toJSON(message: GuildBanData): unknown;
    fromPartial(object: DeepPartial<GuildBanData>): GuildBanData;
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
