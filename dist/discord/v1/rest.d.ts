import _m0 from "protobufjs/minimal";
import { ChannelData_ChannelType, ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType, InviteData_InviteTargetUserType, SnowflakeValue, GuildData, ChannelData_ChannelPermissionOverwriteData, ChannelData, SnowflakeListValue, GuildBanData, PermissionsValue, RoleData, InviteData, MessageData, MessageData_MessageEmbedData, EmojiData, UserData } from "../../discord/v1/model";
import { Empty } from "../../google/protobuf/empty";
export declare const protobufPackage = "pylon.discord.v1.rest";
export interface RestError {
    $type: "pylon.discord.v1.rest.RestError";
    errorType?: {
        $case: "unknownError";
        unknownError: RestError_UnknownError;
    } | {
        $case: "validationError";
        validationError: RestError_ValidationError;
    } | {
        $case: "resourceNotFound";
        resourceNotFound: RestError_ResourceNotFound;
    } | {
        $case: "accessDenied";
        accessDenied: RestError_AccessDenied;
    } | {
        $case: "rateLimited";
        rateLimited: RestError_RateLimited;
    };
}
export interface RestError_UnknownError {
    $type: "pylon.discord.v1.rest.RestError.UnknownError";
    httpStatus: number;
    code: number;
    message: string;
}
export interface RestError_ValidationError {
    $type: "pylon.discord.v1.rest.RestError.ValidationError";
    message: string;
    fields: RestError_ValidationError_Field[];
}
export interface RestError_ValidationError_Field {
    $type: "pylon.discord.v1.rest.RestError.ValidationError.Field";
    path: string;
    code: string;
    message: string;
}
export interface RestError_ResourceNotFound {
    $type: "pylon.discord.v1.rest.RestError.ResourceNotFound";
    code: number;
    message: string;
}
export interface RestError_AccessDenied {
    $type: "pylon.discord.v1.rest.RestError.AccessDenied";
    code: number;
    message: string;
}
export interface RestError_RateLimited {
    $type: "pylon.discord.v1.rest.RestError.RateLimited";
    global: boolean;
    retryAt: number;
}
export interface ModifyGuildRequest {
    $type: "pylon.discord.v1.rest.ModifyGuildRequest";
    name: string | undefined;
    region: string | undefined;
    verificationLevel: number | undefined;
    defaultMessageNotifications: number | undefined;
    explicitContentFilter: number | undefined;
    afkChannelId: SnowflakeValue | undefined;
    afkTimeout: number | undefined;
    icon: Uint8Array | undefined;
    ownerId: SnowflakeValue | undefined;
    splash: Uint8Array | undefined;
    banner: Uint8Array | undefined;
    systemChannelId: SnowflakeValue | undefined;
    rulesChannelId: SnowflakeValue | undefined;
    publicUpdatesChannelId: SnowflakeValue | undefined;
    preferredLocale: string | undefined;
    auditLogReason: string | undefined;
}
export interface ModifyGuildResponse {
    $type: "pylon.discord.v1.rest.ModifyGuildResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: ModifyGuildResponse_Data;
    };
}
export interface ModifyGuildResponse_Data {
    $type: "pylon.discord.v1.rest.ModifyGuildResponse.Data";
    guild: GuildData | undefined;
}
export interface CreateGuildChannelRequest {
    $type: "pylon.discord.v1.rest.CreateGuildChannelRequest";
    name: string;
    type: ChannelData_ChannelType;
    topic: string | undefined;
    bitrate: number | undefined;
    userLimit: number | undefined;
    rateLimitPerUser: number | undefined;
    position: number | undefined;
    permissionOverwrites: ChannelData_ChannelPermissionOverwriteData[];
    parentId: SnowflakeValue | undefined;
    nsfw: boolean | undefined;
    auditLogReason: string | undefined;
}
export interface CreateGuildChannelResponse {
    $type: "pylon.discord.v1.rest.CreateGuildChannelResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: CreateGuildChannelResponse_Data;
    };
}
export interface CreateGuildChannelResponse_Data {
    $type: "pylon.discord.v1.rest.CreateGuildChannelResponse.Data";
    channel: ChannelData | undefined;
}
export interface ModifyGuildChannelPositionsRequest {
    $type: "pylon.discord.v1.rest.ModifyGuildChannelPositionsRequest";
    channelPositions: ModifyGuildChannelPositionsRequest_ChannelPosition[];
}
export interface ModifyGuildChannelPositionsRequest_ChannelPosition {
    $type: "pylon.discord.v1.rest.ModifyGuildChannelPositionsRequest.ChannelPosition";
    id: string;
    position: number;
}
export interface ModifyGuildChannelPositionsResponse {
    $type: "pylon.discord.v1.rest.ModifyGuildChannelPositionsResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface AddGuildMemberRequest {
    $type: "pylon.discord.v1.rest.AddGuildMemberRequest";
    userId: string;
    accessToken: string;
    nick: string | undefined;
    roles: SnowflakeListValue | undefined;
    mute: boolean | undefined;
    deaf: boolean | undefined;
}
export interface AddGuildMemberResponse {
    $type: "pylon.discord.v1.rest.AddGuildMemberResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: AddGuildMemberResponse_Data;
    };
}
export interface AddGuildMemberResponse_Data {
    $type: "pylon.discord.v1.rest.AddGuildMemberResponse.Data";
    added: boolean;
}
export interface ModifyGuildMemberRequest {
    $type: "pylon.discord.v1.rest.ModifyGuildMemberRequest";
    userId: string;
    nick: string | undefined;
    roles: SnowflakeListValue | undefined;
    mute: boolean | undefined;
    deaf: boolean | undefined;
    channelId: SnowflakeValue | undefined;
    auditLogReason: string | undefined;
}
export interface ModifyGuildMemberResponse {
    $type: "pylon.discord.v1.rest.ModifyGuildMemberResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface ModifyCurrentUserNickRequest {
    $type: "pylon.discord.v1.rest.ModifyCurrentUserNickRequest";
    nick: string | undefined;
}
export interface ModifyCurrentUserNickResponse {
    $type: "pylon.discord.v1.rest.ModifyCurrentUserNickResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface AddGuildMemberRoleRequest {
    $type: "pylon.discord.v1.rest.AddGuildMemberRoleRequest";
    userId: string;
    roleId: string;
    auditLogReason: string | undefined;
}
export interface AddGuildMemberRoleResponse {
    $type: "pylon.discord.v1.rest.AddGuildMemberRoleResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface RemoveGuildMemberRoleRequest {
    $type: "pylon.discord.v1.rest.RemoveGuildMemberRoleRequest";
    userId: string;
    roleId: string;
    auditLogReason: string | undefined;
}
export interface RemoveGuildMemberRoleResponse {
    $type: "pylon.discord.v1.rest.RemoveGuildMemberRoleResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface RemoveGuildMemberRequest {
    $type: "pylon.discord.v1.rest.RemoveGuildMemberRequest";
    userId: string;
    auditLogReason: string | undefined;
}
export interface RemoveGuildMemberResponse {
    $type: "pylon.discord.v1.rest.RemoveGuildMemberResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface GetGuildBansRequest {
    $type: "pylon.discord.v1.rest.GetGuildBansRequest";
    userId: string;
}
export interface GetGuildBansResponse {
    $type: "pylon.discord.v1.rest.GetGuildBansResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: GetGuildBansResponse_Data;
    };
}
export interface GetGuildBansResponse_Data {
    $type: "pylon.discord.v1.rest.GetGuildBansResponse.Data";
    bans: GuildBanData[];
}
export interface GetGuildBanRequest {
    $type: "pylon.discord.v1.rest.GetGuildBanRequest";
    userId: string;
}
export interface GetGuildBanResponse {
    $type: "pylon.discord.v1.rest.GetGuildBanResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: GetGuildBanResponse_Data;
    };
}
export interface GetGuildBanResponse_Data {
    $type: "pylon.discord.v1.rest.GetGuildBanResponse.Data";
    ban: GuildBanData | undefined;
}
export interface CreateGuildBanRequest {
    $type: "pylon.discord.v1.rest.CreateGuildBanRequest";
    userId: string;
    deleteMessageDays: number | undefined;
    auditLogReason: string | undefined;
}
export interface CreateGuildBanResponse {
    $type: "pylon.discord.v1.rest.CreateGuildBanResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface RemoveGuildBanRequest {
    $type: "pylon.discord.v1.rest.RemoveGuildBanRequest";
    userId: string;
    auditLogReason: string | undefined;
}
export interface RemoveGuildBanResponse {
    $type: "pylon.discord.v1.rest.RemoveGuildBanResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface CreateGuildRoleRequest {
    $type: "pylon.discord.v1.rest.CreateGuildRoleRequest";
    name: string | undefined;
    permissions: PermissionsValue | undefined;
    color: number | undefined;
    hoist: boolean | undefined;
    mentionable: boolean | undefined;
    auditLogReason: string | undefined;
}
export interface CreateGuildRoleResponse {
    $type: "pylon.discord.v1.rest.CreateGuildRoleResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: CreateGuildRoleResponse_Data;
    };
}
export interface CreateGuildRoleResponse_Data {
    $type: "pylon.discord.v1.rest.CreateGuildRoleResponse.Data";
    role: RoleData | undefined;
}
export interface ModifyGuildRolePositionsRequest {
    $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsRequest";
    rolePositions: ModifyGuildRolePositionsRequest_RolePosition[];
}
export interface ModifyGuildRolePositionsRequest_RolePosition {
    $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsRequest.RolePosition";
    id: string;
    position: number;
}
export interface ModifyGuildRolePositionsResponse {
    $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: ModifyGuildRolePositionsResponse_Data;
    };
}
export interface ModifyGuildRolePositionsResponse_Data {
    $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsResponse.Data";
    roles: RoleData[];
}
export interface ModifyGuildRoleRequest {
    $type: "pylon.discord.v1.rest.ModifyGuildRoleRequest";
    roleId: string;
    name: string | undefined;
    permissions: PermissionsValue | undefined;
    color: number | undefined;
    hoist: boolean | undefined;
    mentionable: boolean | undefined;
    auditLogReason: string | undefined;
}
export interface ModifyGuildRoleResponse {
    $type: "pylon.discord.v1.rest.ModifyGuildRoleResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: ModifyGuildRoleResponse_Data;
    };
}
export interface ModifyGuildRoleResponse_Data {
    $type: "pylon.discord.v1.rest.ModifyGuildRoleResponse.Data";
    role: RoleData | undefined;
}
export interface DeleteGuildRoleRequest {
    $type: "pylon.discord.v1.rest.DeleteGuildRoleRequest";
    roleId: string;
    auditLogReason: string | undefined;
}
export interface DeleteGuildRoleResponse {
    $type: "pylon.discord.v1.rest.DeleteGuildRoleResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface GetGuildPruneCountRequest {
    $type: "pylon.discord.v1.rest.GetGuildPruneCountRequest";
    days: number | undefined;
    includeRoles: SnowflakeListValue | undefined;
}
export interface GetGuildPruneCountResponse {
    $type: "pylon.discord.v1.rest.GetGuildPruneCountResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface BeginGuildPruneRequest {
    $type: "pylon.discord.v1.rest.BeginGuildPruneRequest";
    days: number | undefined;
    includeRoles: SnowflakeListValue | undefined;
    computePruneCount: boolean | undefined;
    auditLogReason: string | undefined;
}
export interface BeginGuildPruneResponse {
    $type: "pylon.discord.v1.rest.BeginGuildPruneResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface GetGuildVoiceRegionsRequest {
    $type: "pylon.discord.v1.rest.GetGuildVoiceRegionsRequest";
}
export interface GetGuildVoiceRegionsResponse {
    $type: "pylon.discord.v1.rest.GetGuildVoiceRegionsResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: GetGuildVoiceRegionsResponse_Data;
    };
}
export interface GetGuildVoiceRegionsResponse_Data {
    $type: "pylon.discord.v1.rest.GetGuildVoiceRegionsResponse.Data";
    regions: string[];
}
export interface GetGuildInvitesRequest {
    $type: "pylon.discord.v1.rest.GetGuildInvitesRequest";
}
export interface GetGuildInvitesResponse {
    $type: "pylon.discord.v1.rest.GetGuildInvitesResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: GetGuildInvitesResponse_Data;
    };
}
export interface GetGuildInvitesResponse_Data {
    $type: "pylon.discord.v1.rest.GetGuildInvitesResponse.Data";
    invites: InviteData[];
}
export interface ModifyChannelRequest {
    $type: "pylon.discord.v1.rest.ModifyChannelRequest";
    channelId: string;
    name: string | undefined;
    type: ChannelData_ChannelType;
    position: number | undefined;
    topic: string | undefined;
    nsfw: boolean | undefined;
    rateLimitPerUser: number | undefined;
    bitrate: number | undefined;
    userLimit: number | undefined;
    permissionOverwrites: ModifyChannelRequest_ChannelPermissionOverwritesValue | undefined;
    parentId: SnowflakeValue | undefined;
    auditLogReason: string | undefined;
}
export interface ModifyChannelRequest_ChannelPermissionOverwritesValue {
    $type: "pylon.discord.v1.rest.ModifyChannelRequest.ChannelPermissionOverwritesValue";
    values: ChannelData_ChannelPermissionOverwriteData[];
}
export interface ModifyChannelResponse {
    $type: "pylon.discord.v1.rest.ModifyChannelResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: ModifyChannelResponse_Data;
    };
}
export interface ModifyChannelResponse_Data {
    $type: "pylon.discord.v1.rest.ModifyChannelResponse.Data";
    channel: ChannelData | undefined;
}
export interface DeleteChannelRequest {
    $type: "pylon.discord.v1.rest.DeleteChannelRequest";
    channelId: string;
    auditLogReason: string | undefined;
}
export interface DeleteChannelResponse {
    $type: "pylon.discord.v1.rest.DeleteChannelResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface GetChannelMessagesRequest {
    $type: "pylon.discord.v1.rest.GetChannelMessagesRequest";
    channelId: string;
    around: SnowflakeValue | undefined;
    before: SnowflakeValue | undefined;
    after: SnowflakeValue | undefined;
    limit: number;
}
export interface GetChannelMessagesResponse {
    $type: "pylon.discord.v1.rest.GetChannelMessagesResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: GetChannelMessagesResponse_Data;
    };
}
export interface GetChannelMessagesResponse_Data {
    $type: "pylon.discord.v1.rest.GetChannelMessagesResponse.Data";
    messages: MessageData[];
}
export interface GetChannelMessageRequest {
    $type: "pylon.discord.v1.rest.GetChannelMessageRequest";
    channelId: string;
    messageId: string;
}
export interface GetChannelMessageResponse {
    $type: "pylon.discord.v1.rest.GetChannelMessageResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: GetChannelMessageResponse_Data;
    };
}
export interface GetChannelMessageResponse_Data {
    $type: "pylon.discord.v1.rest.GetChannelMessageResponse.Data";
    message: MessageData | undefined;
}
export interface CreateMessageRequest {
    $type: "pylon.discord.v1.rest.CreateMessageRequest";
    channelId: string;
    content: string;
    nonce: string | undefined;
    tts: boolean | undefined;
    embed: MessageData_MessageEmbedData | undefined;
    allowedMentions: CreateMessageRequest_AllowedMentions | undefined;
    attachment: CreateMessageRequest_Attachment | undefined;
}
export interface CreateMessageRequest_AllowedMentions {
    $type: "pylon.discord.v1.rest.CreateMessageRequest.AllowedMentions";
    parse: CreateMessageRequest_AllowedMentions_AllowedMentionTypes | undefined;
    roles: SnowflakeListValue | undefined;
    users: SnowflakeListValue | undefined;
}
export interface CreateMessageRequest_AllowedMentions_AllowedMentionTypes {
    $type: "pylon.discord.v1.rest.CreateMessageRequest.AllowedMentions.AllowedMentionTypes";
    roles: boolean;
    users: boolean;
    everyone: boolean;
}
export interface CreateMessageRequest_Attachment {
    $type: "pylon.discord.v1.rest.CreateMessageRequest.Attachment";
    name: string;
    content: Uint8Array;
}
export interface CreateMessageResponse {
    $type: "pylon.discord.v1.rest.CreateMessageResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: CreateMessageResponse_Data;
    };
}
export interface CreateMessageResponse_Data {
    $type: "pylon.discord.v1.rest.CreateMessageResponse.Data";
    message: MessageData | undefined;
}
export interface CrosspostMessageRequest {
    $type: "pylon.discord.v1.rest.CrosspostMessageRequest";
    channelId: string;
    messageId: string;
}
export interface CrosspostMessageResponse {
    $type: "pylon.discord.v1.rest.CrosspostMessageResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: CrosspostMessageResponse_Data;
    };
}
export interface CrosspostMessageResponse_Data {
    $type: "pylon.discord.v1.rest.CrosspostMessageResponse.Data";
    message: MessageData | undefined;
}
export interface CreateReactionRequest {
    $type: "pylon.discord.v1.rest.CreateReactionRequest";
    channelId: string;
    messageId: string;
    emoji: string;
}
export interface CreateReactionResponse {
    $type: "pylon.discord.v1.rest.CreateReactionResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface DeleteOwnReactionRequest {
    $type: "pylon.discord.v1.rest.DeleteOwnReactionRequest";
    channelId: string;
    messageId: string;
    emoji: string;
}
export interface DeleteOwnReactionResponse {
    $type: "pylon.discord.v1.rest.DeleteOwnReactionResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface DeleteUserReactionRequest {
    $type: "pylon.discord.v1.rest.DeleteUserReactionRequest";
    channelId: string;
    messageId: string;
    emoji: string;
    userId: string;
}
export interface DeleteUserReactionResponse {
    $type: "pylon.discord.v1.rest.DeleteUserReactionResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface DeleteAllReactionsRequest {
    $type: "pylon.discord.v1.rest.DeleteAllReactionsRequest";
    channelId: string;
    messageId: string;
}
export interface DeleteAllReactionsResponse {
    $type: "pylon.discord.v1.rest.DeleteAllReactionsResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface DeleteAllReactionsForEmojiRequest {
    $type: "pylon.discord.v1.rest.DeleteAllReactionsForEmojiRequest";
    channelId: string;
    messageId: string;
    emoji: string;
}
export interface DeleteAllReactionsForEmojiResponse {
    $type: "pylon.discord.v1.rest.DeleteAllReactionsForEmojiResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface EditMessageRequest {
    $type: "pylon.discord.v1.rest.EditMessageRequest";
    channelId: string;
    messageId: string;
    content: string | undefined;
    embed: MessageData_MessageEmbedData | undefined;
    flags: number | undefined;
}
export interface EditMessageResponse {
    $type: "pylon.discord.v1.rest.EditMessageResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: EditMessageResponse_Data;
    };
}
export interface EditMessageResponse_Data {
    $type: "pylon.discord.v1.rest.EditMessageResponse.Data";
    message: MessageData | undefined;
}
export interface DeleteMessageRequest {
    $type: "pylon.discord.v1.rest.DeleteMessageRequest";
    channelId: string;
    messageId: string;
    auditLogReason: string | undefined;
}
export interface DeleteMessageResponse {
    $type: "pylon.discord.v1.rest.DeleteMessageResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface BulkDeleteMessagesRequest {
    $type: "pylon.discord.v1.rest.BulkDeleteMessagesRequest";
    channelId: string;
    messageIds: string[];
    auditLogReason: string | undefined;
}
export interface BulkDeleteMessagesResponse {
    $type: "pylon.discord.v1.rest.BulkDeleteMessagesResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface EditChannelPermissionsRequest {
    $type: "pylon.discord.v1.rest.EditChannelPermissionsRequest";
    channelId: string;
    overwriteId: string;
    allow: string;
    deny: string;
    type: ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType;
    auditLogReason: string | undefined;
}
export interface EditChannelPermissionsResponse {
    $type: "pylon.discord.v1.rest.EditChannelPermissionsResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface GetChannelInvitesRequest {
    $type: "pylon.discord.v1.rest.GetChannelInvitesRequest";
    channelId: string;
}
export interface GetChannelInvitesResponse {
    $type: "pylon.discord.v1.rest.GetChannelInvitesResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: GetChannelInvitesResponse_Data;
    };
}
export interface GetChannelInvitesResponse_Data {
    $type: "pylon.discord.v1.rest.GetChannelInvitesResponse.Data";
    invites: InviteData[];
}
export interface CreateChannelInviteRequest {
    $type: "pylon.discord.v1.rest.CreateChannelInviteRequest";
    channelId: string;
    maxAge: number | undefined;
    maxUses: number | undefined;
    temporary: boolean | undefined;
    unique: boolean | undefined;
    targetUser: SnowflakeValue | undefined;
    targetUserType: InviteData_InviteTargetUserType;
    auditLogReason: string | undefined;
}
export interface CreateChannelInviteResponse {
    $type: "pylon.discord.v1.rest.CreateChannelInviteResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: CreateChannelInviteResponse_Data;
    };
}
export interface CreateChannelInviteResponse_Data {
    $type: "pylon.discord.v1.rest.CreateChannelInviteResponse.Data";
    invite: InviteData | undefined;
}
export interface DeleteChannelPermissionRequest {
    $type: "pylon.discord.v1.rest.DeleteChannelPermissionRequest";
    channelId: string;
    overwriteId: string;
    auditLogReason: string | undefined;
}
export interface DeleteChannelPermissionResponse {
    $type: "pylon.discord.v1.rest.DeleteChannelPermissionResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface FollowNewsChannelRequest {
    $type: "pylon.discord.v1.rest.FollowNewsChannelRequest";
    channelId: string;
    webhookChannelId: string;
}
export interface FollowNewsChannelResponse {
    $type: "pylon.discord.v1.rest.FollowNewsChannelResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: FollowNewsChannelResponse_Data;
    };
}
export interface FollowNewsChannelResponse_Data {
    $type: "pylon.discord.v1.rest.FollowNewsChannelResponse.Data";
    channelId: string;
    webhookId: string;
}
export interface TriggerTypingIndicatorRequest {
    $type: "pylon.discord.v1.rest.TriggerTypingIndicatorRequest";
    channelId: string;
}
export interface TriggerTypingIndicatorResponse {
    $type: "pylon.discord.v1.rest.TriggerTypingIndicatorResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface GetPinnedMessagesRequest {
    $type: "pylon.discord.v1.rest.GetPinnedMessagesRequest";
    channelId: string;
}
export interface GetPinnedMessagesResponse {
    $type: "pylon.discord.v1.rest.GetPinnedMessagesResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: GetPinnedMessagesResponse_Data;
    };
}
export interface GetPinnedMessagesResponse_Data {
    $type: "pylon.discord.v1.rest.GetPinnedMessagesResponse.Data";
    messages: MessageData[];
}
export interface AddPinnedChannelMessageRequest {
    $type: "pylon.discord.v1.rest.AddPinnedChannelMessageRequest";
    channelId: string;
    messageId: string;
    auditLogReason: string | undefined;
}
export interface AddPinnedChannelMessageResponse {
    $type: "pylon.discord.v1.rest.AddPinnedChannelMessageResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface DeletePinnedChannelMessageRequest {
    $type: "pylon.discord.v1.rest.DeletePinnedChannelMessageRequest";
    channelId: string;
    messageId: string;
    auditLogReason: string | undefined;
}
export interface DeletePinnedChannelMessageResponse {
    $type: "pylon.discord.v1.rest.DeletePinnedChannelMessageResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface ListGuildEmojisRequest {
    $type: "pylon.discord.v1.rest.ListGuildEmojisRequest";
}
export interface ListGuildEmojisResponse {
    $type: "pylon.discord.v1.rest.ListGuildEmojisResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: ListGuildEmojisResponse_Data;
    };
}
export interface ListGuildEmojisResponse_Data {
    $type: "pylon.discord.v1.rest.ListGuildEmojisResponse.Data";
    emojis: EmojiData[];
}
export interface GetGuildEmojiRequest {
    $type: "pylon.discord.v1.rest.GetGuildEmojiRequest";
    emojiId: string;
}
export interface GetGuildEmojiResponse {
    $type: "pylon.discord.v1.rest.GetGuildEmojiResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: GetGuildEmojiResponse_Data;
    };
}
export interface GetGuildEmojiResponse_Data {
    $type: "pylon.discord.v1.rest.GetGuildEmojiResponse.Data";
    emoji: EmojiData | undefined;
}
export interface CreateGuildEmojiRequest {
    $type: "pylon.discord.v1.rest.CreateGuildEmojiRequest";
    name: string;
    image: Uint8Array | undefined;
    roles: SnowflakeListValue | undefined;
    auditLogReason: string | undefined;
}
export interface CreateGuildEmojiResponse {
    $type: "pylon.discord.v1.rest.CreateGuildEmojiResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: CreateGuildEmojiResponse_Data;
    };
}
export interface CreateGuildEmojiResponse_Data {
    $type: "pylon.discord.v1.rest.CreateGuildEmojiResponse.Data";
    emoji: EmojiData | undefined;
}
export interface ModifyGuildEmojiRequest {
    $type: "pylon.discord.v1.rest.ModifyGuildEmojiRequest";
    emojiId: string;
    name: string | undefined;
    roles: SnowflakeListValue | undefined;
    auditLogReason: string | undefined;
}
export interface ModifyGuildEmojiResponse {
    $type: "pylon.discord.v1.rest.ModifyGuildEmojiResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: ModifyGuildEmojiResponse_Data;
    };
}
export interface ModifyGuildEmojiResponse_Data {
    $type: "pylon.discord.v1.rest.ModifyGuildEmojiResponse.Data";
    emoji: EmojiData | undefined;
}
export interface DeleteGuildEmojiRequest {
    $type: "pylon.discord.v1.rest.DeleteGuildEmojiRequest";
    emojiId: string;
    auditLogReason: string | undefined;
}
export interface DeleteGuildEmojiResponse {
    $type: "pylon.discord.v1.rest.DeleteGuildEmojiResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface GetCurrentUserRequest {
    $type: "pylon.discord.v1.rest.GetCurrentUserRequest";
}
export interface GetCurrentUserResponse {
    $type: "pylon.discord.v1.rest.GetCurrentUserResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: GetCurrentUserResponse_Data;
    };
}
export interface GetCurrentUserResponse_Data {
    $type: "pylon.discord.v1.rest.GetCurrentUserResponse.Data";
    user: UserData | undefined;
}
export interface GetUserRequest {
    $type: "pylon.discord.v1.rest.GetUserRequest";
    userId: string;
}
export interface GetUserResponse {
    $type: "pylon.discord.v1.rest.GetUserResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: GetUserResponse_Data;
    };
}
export interface GetUserResponse_Data {
    $type: "pylon.discord.v1.rest.GetUserResponse.Data";
    user: UserData | undefined;
}
export interface ModifyCurrentUserRequest {
    $type: "pylon.discord.v1.rest.ModifyCurrentUserRequest";
    username: string | undefined;
    avatar: Uint8Array | undefined;
}
export interface ModifyCurrentUserResponse {
    $type: "pylon.discord.v1.rest.ModifyCurrentUserResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: ModifyCurrentUserResponse_Data;
    };
}
export interface ModifyCurrentUserResponse_Data {
    $type: "pylon.discord.v1.rest.ModifyCurrentUserResponse.Data";
    user: UserData | undefined;
}
export interface LeaveGuildRequest {
    $type: "pylon.discord.v1.rest.LeaveGuildRequest";
}
export interface LeaveGuildResponse {
    $type: "pylon.discord.v1.rest.LeaveGuildResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: Empty;
    };
}
export interface CreateDmRequest {
    $type: "pylon.discord.v1.rest.CreateDmRequest";
    recipientId: string;
}
export interface CreateDmResponse {
    $type: "pylon.discord.v1.rest.CreateDmResponse";
    response?: {
        $case: "error";
        error: RestError;
    } | {
        $case: "data";
        data: CreateDmResponse_Data;
    };
}
export interface CreateDmResponse_Data {
    $type: "pylon.discord.v1.rest.CreateDmResponse.Data";
    channel: ChannelData | undefined;
}
export declare const RestError: {
    $type: "pylon.discord.v1.rest.RestError";
    encode(message: RestError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestError;
    fromJSON(object: any): RestError;
    toJSON(message: RestError): unknown;
    fromPartial(object: DeepPartial<RestError>): RestError;
};
export declare const RestError_UnknownError: {
    $type: "pylon.discord.v1.rest.RestError.UnknownError";
    encode(message: RestError_UnknownError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestError_UnknownError;
    fromJSON(object: any): RestError_UnknownError;
    toJSON(message: RestError_UnknownError): unknown;
    fromPartial(object: DeepPartial<RestError_UnknownError>): RestError_UnknownError;
};
export declare const RestError_ValidationError: {
    $type: "pylon.discord.v1.rest.RestError.ValidationError";
    encode(message: RestError_ValidationError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestError_ValidationError;
    fromJSON(object: any): RestError_ValidationError;
    toJSON(message: RestError_ValidationError): unknown;
    fromPartial(object: DeepPartial<RestError_ValidationError>): RestError_ValidationError;
};
export declare const RestError_ValidationError_Field: {
    $type: "pylon.discord.v1.rest.RestError.ValidationError.Field";
    encode(message: RestError_ValidationError_Field, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestError_ValidationError_Field;
    fromJSON(object: any): RestError_ValidationError_Field;
    toJSON(message: RestError_ValidationError_Field): unknown;
    fromPartial(object: DeepPartial<RestError_ValidationError_Field>): RestError_ValidationError_Field;
};
export declare const RestError_ResourceNotFound: {
    $type: "pylon.discord.v1.rest.RestError.ResourceNotFound";
    encode(message: RestError_ResourceNotFound, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestError_ResourceNotFound;
    fromJSON(object: any): RestError_ResourceNotFound;
    toJSON(message: RestError_ResourceNotFound): unknown;
    fromPartial(object: DeepPartial<RestError_ResourceNotFound>): RestError_ResourceNotFound;
};
export declare const RestError_AccessDenied: {
    $type: "pylon.discord.v1.rest.RestError.AccessDenied";
    encode(message: RestError_AccessDenied, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestError_AccessDenied;
    fromJSON(object: any): RestError_AccessDenied;
    toJSON(message: RestError_AccessDenied): unknown;
    fromPartial(object: DeepPartial<RestError_AccessDenied>): RestError_AccessDenied;
};
export declare const RestError_RateLimited: {
    $type: "pylon.discord.v1.rest.RestError.RateLimited";
    encode(message: RestError_RateLimited, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestError_RateLimited;
    fromJSON(object: any): RestError_RateLimited;
    toJSON(message: RestError_RateLimited): unknown;
    fromPartial(object: DeepPartial<RestError_RateLimited>): RestError_RateLimited;
};
export declare const ModifyGuildRequest: {
    $type: "pylon.discord.v1.rest.ModifyGuildRequest";
    encode(message: ModifyGuildRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyGuildRequest;
    fromJSON(object: any): ModifyGuildRequest;
    toJSON(message: ModifyGuildRequest): unknown;
    fromPartial(object: DeepPartial<ModifyGuildRequest>): ModifyGuildRequest;
};
export declare const ModifyGuildResponse: {
    $type: "pylon.discord.v1.rest.ModifyGuildResponse";
    encode(message: ModifyGuildResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyGuildResponse;
    fromJSON(object: any): ModifyGuildResponse;
    toJSON(message: ModifyGuildResponse): unknown;
    fromPartial(object: DeepPartial<ModifyGuildResponse>): ModifyGuildResponse;
};
export declare const ModifyGuildResponse_Data: {
    $type: "pylon.discord.v1.rest.ModifyGuildResponse.Data";
    encode(message: ModifyGuildResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyGuildResponse_Data;
    fromJSON(object: any): ModifyGuildResponse_Data;
    toJSON(message: ModifyGuildResponse_Data): unknown;
    fromPartial(object: DeepPartial<ModifyGuildResponse_Data>): ModifyGuildResponse_Data;
};
export declare const CreateGuildChannelRequest: {
    $type: "pylon.discord.v1.rest.CreateGuildChannelRequest";
    encode(message: CreateGuildChannelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateGuildChannelRequest;
    fromJSON(object: any): CreateGuildChannelRequest;
    toJSON(message: CreateGuildChannelRequest): unknown;
    fromPartial(object: DeepPartial<CreateGuildChannelRequest>): CreateGuildChannelRequest;
};
export declare const CreateGuildChannelResponse: {
    $type: "pylon.discord.v1.rest.CreateGuildChannelResponse";
    encode(message: CreateGuildChannelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateGuildChannelResponse;
    fromJSON(object: any): CreateGuildChannelResponse;
    toJSON(message: CreateGuildChannelResponse): unknown;
    fromPartial(object: DeepPartial<CreateGuildChannelResponse>): CreateGuildChannelResponse;
};
export declare const CreateGuildChannelResponse_Data: {
    $type: "pylon.discord.v1.rest.CreateGuildChannelResponse.Data";
    encode(message: CreateGuildChannelResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateGuildChannelResponse_Data;
    fromJSON(object: any): CreateGuildChannelResponse_Data;
    toJSON(message: CreateGuildChannelResponse_Data): unknown;
    fromPartial(object: DeepPartial<CreateGuildChannelResponse_Data>): CreateGuildChannelResponse_Data;
};
export declare const ModifyGuildChannelPositionsRequest: {
    $type: "pylon.discord.v1.rest.ModifyGuildChannelPositionsRequest";
    encode(message: ModifyGuildChannelPositionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyGuildChannelPositionsRequest;
    fromJSON(object: any): ModifyGuildChannelPositionsRequest;
    toJSON(message: ModifyGuildChannelPositionsRequest): unknown;
    fromPartial(object: DeepPartial<ModifyGuildChannelPositionsRequest>): ModifyGuildChannelPositionsRequest;
};
export declare const ModifyGuildChannelPositionsRequest_ChannelPosition: {
    $type: "pylon.discord.v1.rest.ModifyGuildChannelPositionsRequest.ChannelPosition";
    encode(message: ModifyGuildChannelPositionsRequest_ChannelPosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyGuildChannelPositionsRequest_ChannelPosition;
    fromJSON(object: any): ModifyGuildChannelPositionsRequest_ChannelPosition;
    toJSON(message: ModifyGuildChannelPositionsRequest_ChannelPosition): unknown;
    fromPartial(object: DeepPartial<ModifyGuildChannelPositionsRequest_ChannelPosition>): ModifyGuildChannelPositionsRequest_ChannelPosition;
};
export declare const ModifyGuildChannelPositionsResponse: {
    $type: "pylon.discord.v1.rest.ModifyGuildChannelPositionsResponse";
    encode(message: ModifyGuildChannelPositionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyGuildChannelPositionsResponse;
    fromJSON(object: any): ModifyGuildChannelPositionsResponse;
    toJSON(message: ModifyGuildChannelPositionsResponse): unknown;
    fromPartial(object: DeepPartial<ModifyGuildChannelPositionsResponse>): ModifyGuildChannelPositionsResponse;
};
export declare const AddGuildMemberRequest: {
    $type: "pylon.discord.v1.rest.AddGuildMemberRequest";
    encode(message: AddGuildMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddGuildMemberRequest;
    fromJSON(object: any): AddGuildMemberRequest;
    toJSON(message: AddGuildMemberRequest): unknown;
    fromPartial(object: DeepPartial<AddGuildMemberRequest>): AddGuildMemberRequest;
};
export declare const AddGuildMemberResponse: {
    $type: "pylon.discord.v1.rest.AddGuildMemberResponse";
    encode(message: AddGuildMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddGuildMemberResponse;
    fromJSON(object: any): AddGuildMemberResponse;
    toJSON(message: AddGuildMemberResponse): unknown;
    fromPartial(object: DeepPartial<AddGuildMemberResponse>): AddGuildMemberResponse;
};
export declare const AddGuildMemberResponse_Data: {
    $type: "pylon.discord.v1.rest.AddGuildMemberResponse.Data";
    encode(message: AddGuildMemberResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddGuildMemberResponse_Data;
    fromJSON(object: any): AddGuildMemberResponse_Data;
    toJSON(message: AddGuildMemberResponse_Data): unknown;
    fromPartial(object: DeepPartial<AddGuildMemberResponse_Data>): AddGuildMemberResponse_Data;
};
export declare const ModifyGuildMemberRequest: {
    $type: "pylon.discord.v1.rest.ModifyGuildMemberRequest";
    encode(message: ModifyGuildMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyGuildMemberRequest;
    fromJSON(object: any): ModifyGuildMemberRequest;
    toJSON(message: ModifyGuildMemberRequest): unknown;
    fromPartial(object: DeepPartial<ModifyGuildMemberRequest>): ModifyGuildMemberRequest;
};
export declare const ModifyGuildMemberResponse: {
    $type: "pylon.discord.v1.rest.ModifyGuildMemberResponse";
    encode(message: ModifyGuildMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyGuildMemberResponse;
    fromJSON(object: any): ModifyGuildMemberResponse;
    toJSON(message: ModifyGuildMemberResponse): unknown;
    fromPartial(object: DeepPartial<ModifyGuildMemberResponse>): ModifyGuildMemberResponse;
};
export declare const ModifyCurrentUserNickRequest: {
    $type: "pylon.discord.v1.rest.ModifyCurrentUserNickRequest";
    encode(message: ModifyCurrentUserNickRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyCurrentUserNickRequest;
    fromJSON(object: any): ModifyCurrentUserNickRequest;
    toJSON(message: ModifyCurrentUserNickRequest): unknown;
    fromPartial(object: DeepPartial<ModifyCurrentUserNickRequest>): ModifyCurrentUserNickRequest;
};
export declare const ModifyCurrentUserNickResponse: {
    $type: "pylon.discord.v1.rest.ModifyCurrentUserNickResponse";
    encode(message: ModifyCurrentUserNickResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyCurrentUserNickResponse;
    fromJSON(object: any): ModifyCurrentUserNickResponse;
    toJSON(message: ModifyCurrentUserNickResponse): unknown;
    fromPartial(object: DeepPartial<ModifyCurrentUserNickResponse>): ModifyCurrentUserNickResponse;
};
export declare const AddGuildMemberRoleRequest: {
    $type: "pylon.discord.v1.rest.AddGuildMemberRoleRequest";
    encode(message: AddGuildMemberRoleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddGuildMemberRoleRequest;
    fromJSON(object: any): AddGuildMemberRoleRequest;
    toJSON(message: AddGuildMemberRoleRequest): unknown;
    fromPartial(object: DeepPartial<AddGuildMemberRoleRequest>): AddGuildMemberRoleRequest;
};
export declare const AddGuildMemberRoleResponse: {
    $type: "pylon.discord.v1.rest.AddGuildMemberRoleResponse";
    encode(message: AddGuildMemberRoleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddGuildMemberRoleResponse;
    fromJSON(object: any): AddGuildMemberRoleResponse;
    toJSON(message: AddGuildMemberRoleResponse): unknown;
    fromPartial(object: DeepPartial<AddGuildMemberRoleResponse>): AddGuildMemberRoleResponse;
};
export declare const RemoveGuildMemberRoleRequest: {
    $type: "pylon.discord.v1.rest.RemoveGuildMemberRoleRequest";
    encode(message: RemoveGuildMemberRoleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveGuildMemberRoleRequest;
    fromJSON(object: any): RemoveGuildMemberRoleRequest;
    toJSON(message: RemoveGuildMemberRoleRequest): unknown;
    fromPartial(object: DeepPartial<RemoveGuildMemberRoleRequest>): RemoveGuildMemberRoleRequest;
};
export declare const RemoveGuildMemberRoleResponse: {
    $type: "pylon.discord.v1.rest.RemoveGuildMemberRoleResponse";
    encode(message: RemoveGuildMemberRoleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveGuildMemberRoleResponse;
    fromJSON(object: any): RemoveGuildMemberRoleResponse;
    toJSON(message: RemoveGuildMemberRoleResponse): unknown;
    fromPartial(object: DeepPartial<RemoveGuildMemberRoleResponse>): RemoveGuildMemberRoleResponse;
};
export declare const RemoveGuildMemberRequest: {
    $type: "pylon.discord.v1.rest.RemoveGuildMemberRequest";
    encode(message: RemoveGuildMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveGuildMemberRequest;
    fromJSON(object: any): RemoveGuildMemberRequest;
    toJSON(message: RemoveGuildMemberRequest): unknown;
    fromPartial(object: DeepPartial<RemoveGuildMemberRequest>): RemoveGuildMemberRequest;
};
export declare const RemoveGuildMemberResponse: {
    $type: "pylon.discord.v1.rest.RemoveGuildMemberResponse";
    encode(message: RemoveGuildMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveGuildMemberResponse;
    fromJSON(object: any): RemoveGuildMemberResponse;
    toJSON(message: RemoveGuildMemberResponse): unknown;
    fromPartial(object: DeepPartial<RemoveGuildMemberResponse>): RemoveGuildMemberResponse;
};
export declare const GetGuildBansRequest: {
    $type: "pylon.discord.v1.rest.GetGuildBansRequest";
    encode(message: GetGuildBansRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildBansRequest;
    fromJSON(object: any): GetGuildBansRequest;
    toJSON(message: GetGuildBansRequest): unknown;
    fromPartial(object: DeepPartial<GetGuildBansRequest>): GetGuildBansRequest;
};
export declare const GetGuildBansResponse: {
    $type: "pylon.discord.v1.rest.GetGuildBansResponse";
    encode(message: GetGuildBansResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildBansResponse;
    fromJSON(object: any): GetGuildBansResponse;
    toJSON(message: GetGuildBansResponse): unknown;
    fromPartial(object: DeepPartial<GetGuildBansResponse>): GetGuildBansResponse;
};
export declare const GetGuildBansResponse_Data: {
    $type: "pylon.discord.v1.rest.GetGuildBansResponse.Data";
    encode(message: GetGuildBansResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildBansResponse_Data;
    fromJSON(object: any): GetGuildBansResponse_Data;
    toJSON(message: GetGuildBansResponse_Data): unknown;
    fromPartial(object: DeepPartial<GetGuildBansResponse_Data>): GetGuildBansResponse_Data;
};
export declare const GetGuildBanRequest: {
    $type: "pylon.discord.v1.rest.GetGuildBanRequest";
    encode(message: GetGuildBanRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildBanRequest;
    fromJSON(object: any): GetGuildBanRequest;
    toJSON(message: GetGuildBanRequest): unknown;
    fromPartial(object: DeepPartial<GetGuildBanRequest>): GetGuildBanRequest;
};
export declare const GetGuildBanResponse: {
    $type: "pylon.discord.v1.rest.GetGuildBanResponse";
    encode(message: GetGuildBanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildBanResponse;
    fromJSON(object: any): GetGuildBanResponse;
    toJSON(message: GetGuildBanResponse): unknown;
    fromPartial(object: DeepPartial<GetGuildBanResponse>): GetGuildBanResponse;
};
export declare const GetGuildBanResponse_Data: {
    $type: "pylon.discord.v1.rest.GetGuildBanResponse.Data";
    encode(message: GetGuildBanResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildBanResponse_Data;
    fromJSON(object: any): GetGuildBanResponse_Data;
    toJSON(message: GetGuildBanResponse_Data): unknown;
    fromPartial(object: DeepPartial<GetGuildBanResponse_Data>): GetGuildBanResponse_Data;
};
export declare const CreateGuildBanRequest: {
    $type: "pylon.discord.v1.rest.CreateGuildBanRequest";
    encode(message: CreateGuildBanRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateGuildBanRequest;
    fromJSON(object: any): CreateGuildBanRequest;
    toJSON(message: CreateGuildBanRequest): unknown;
    fromPartial(object: DeepPartial<CreateGuildBanRequest>): CreateGuildBanRequest;
};
export declare const CreateGuildBanResponse: {
    $type: "pylon.discord.v1.rest.CreateGuildBanResponse";
    encode(message: CreateGuildBanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateGuildBanResponse;
    fromJSON(object: any): CreateGuildBanResponse;
    toJSON(message: CreateGuildBanResponse): unknown;
    fromPartial(object: DeepPartial<CreateGuildBanResponse>): CreateGuildBanResponse;
};
export declare const RemoveGuildBanRequest: {
    $type: "pylon.discord.v1.rest.RemoveGuildBanRequest";
    encode(message: RemoveGuildBanRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveGuildBanRequest;
    fromJSON(object: any): RemoveGuildBanRequest;
    toJSON(message: RemoveGuildBanRequest): unknown;
    fromPartial(object: DeepPartial<RemoveGuildBanRequest>): RemoveGuildBanRequest;
};
export declare const RemoveGuildBanResponse: {
    $type: "pylon.discord.v1.rest.RemoveGuildBanResponse";
    encode(message: RemoveGuildBanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveGuildBanResponse;
    fromJSON(object: any): RemoveGuildBanResponse;
    toJSON(message: RemoveGuildBanResponse): unknown;
    fromPartial(object: DeepPartial<RemoveGuildBanResponse>): RemoveGuildBanResponse;
};
export declare const CreateGuildRoleRequest: {
    $type: "pylon.discord.v1.rest.CreateGuildRoleRequest";
    encode(message: CreateGuildRoleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateGuildRoleRequest;
    fromJSON(object: any): CreateGuildRoleRequest;
    toJSON(message: CreateGuildRoleRequest): unknown;
    fromPartial(object: DeepPartial<CreateGuildRoleRequest>): CreateGuildRoleRequest;
};
export declare const CreateGuildRoleResponse: {
    $type: "pylon.discord.v1.rest.CreateGuildRoleResponse";
    encode(message: CreateGuildRoleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateGuildRoleResponse;
    fromJSON(object: any): CreateGuildRoleResponse;
    toJSON(message: CreateGuildRoleResponse): unknown;
    fromPartial(object: DeepPartial<CreateGuildRoleResponse>): CreateGuildRoleResponse;
};
export declare const CreateGuildRoleResponse_Data: {
    $type: "pylon.discord.v1.rest.CreateGuildRoleResponse.Data";
    encode(message: CreateGuildRoleResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateGuildRoleResponse_Data;
    fromJSON(object: any): CreateGuildRoleResponse_Data;
    toJSON(message: CreateGuildRoleResponse_Data): unknown;
    fromPartial(object: DeepPartial<CreateGuildRoleResponse_Data>): CreateGuildRoleResponse_Data;
};
export declare const ModifyGuildRolePositionsRequest: {
    $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsRequest";
    encode(message: ModifyGuildRolePositionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyGuildRolePositionsRequest;
    fromJSON(object: any): ModifyGuildRolePositionsRequest;
    toJSON(message: ModifyGuildRolePositionsRequest): unknown;
    fromPartial(object: DeepPartial<ModifyGuildRolePositionsRequest>): ModifyGuildRolePositionsRequest;
};
export declare const ModifyGuildRolePositionsRequest_RolePosition: {
    $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsRequest.RolePosition";
    encode(message: ModifyGuildRolePositionsRequest_RolePosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyGuildRolePositionsRequest_RolePosition;
    fromJSON(object: any): ModifyGuildRolePositionsRequest_RolePosition;
    toJSON(message: ModifyGuildRolePositionsRequest_RolePosition): unknown;
    fromPartial(object: DeepPartial<ModifyGuildRolePositionsRequest_RolePosition>): ModifyGuildRolePositionsRequest_RolePosition;
};
export declare const ModifyGuildRolePositionsResponse: {
    $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsResponse";
    encode(message: ModifyGuildRolePositionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyGuildRolePositionsResponse;
    fromJSON(object: any): ModifyGuildRolePositionsResponse;
    toJSON(message: ModifyGuildRolePositionsResponse): unknown;
    fromPartial(object: DeepPartial<ModifyGuildRolePositionsResponse>): ModifyGuildRolePositionsResponse;
};
export declare const ModifyGuildRolePositionsResponse_Data: {
    $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsResponse.Data";
    encode(message: ModifyGuildRolePositionsResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyGuildRolePositionsResponse_Data;
    fromJSON(object: any): ModifyGuildRolePositionsResponse_Data;
    toJSON(message: ModifyGuildRolePositionsResponse_Data): unknown;
    fromPartial(object: DeepPartial<ModifyGuildRolePositionsResponse_Data>): ModifyGuildRolePositionsResponse_Data;
};
export declare const ModifyGuildRoleRequest: {
    $type: "pylon.discord.v1.rest.ModifyGuildRoleRequest";
    encode(message: ModifyGuildRoleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyGuildRoleRequest;
    fromJSON(object: any): ModifyGuildRoleRequest;
    toJSON(message: ModifyGuildRoleRequest): unknown;
    fromPartial(object: DeepPartial<ModifyGuildRoleRequest>): ModifyGuildRoleRequest;
};
export declare const ModifyGuildRoleResponse: {
    $type: "pylon.discord.v1.rest.ModifyGuildRoleResponse";
    encode(message: ModifyGuildRoleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyGuildRoleResponse;
    fromJSON(object: any): ModifyGuildRoleResponse;
    toJSON(message: ModifyGuildRoleResponse): unknown;
    fromPartial(object: DeepPartial<ModifyGuildRoleResponse>): ModifyGuildRoleResponse;
};
export declare const ModifyGuildRoleResponse_Data: {
    $type: "pylon.discord.v1.rest.ModifyGuildRoleResponse.Data";
    encode(message: ModifyGuildRoleResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyGuildRoleResponse_Data;
    fromJSON(object: any): ModifyGuildRoleResponse_Data;
    toJSON(message: ModifyGuildRoleResponse_Data): unknown;
    fromPartial(object: DeepPartial<ModifyGuildRoleResponse_Data>): ModifyGuildRoleResponse_Data;
};
export declare const DeleteGuildRoleRequest: {
    $type: "pylon.discord.v1.rest.DeleteGuildRoleRequest";
    encode(message: DeleteGuildRoleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteGuildRoleRequest;
    fromJSON(object: any): DeleteGuildRoleRequest;
    toJSON(message: DeleteGuildRoleRequest): unknown;
    fromPartial(object: DeepPartial<DeleteGuildRoleRequest>): DeleteGuildRoleRequest;
};
export declare const DeleteGuildRoleResponse: {
    $type: "pylon.discord.v1.rest.DeleteGuildRoleResponse";
    encode(message: DeleteGuildRoleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteGuildRoleResponse;
    fromJSON(object: any): DeleteGuildRoleResponse;
    toJSON(message: DeleteGuildRoleResponse): unknown;
    fromPartial(object: DeepPartial<DeleteGuildRoleResponse>): DeleteGuildRoleResponse;
};
export declare const GetGuildPruneCountRequest: {
    $type: "pylon.discord.v1.rest.GetGuildPruneCountRequest";
    encode(message: GetGuildPruneCountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildPruneCountRequest;
    fromJSON(object: any): GetGuildPruneCountRequest;
    toJSON(message: GetGuildPruneCountRequest): unknown;
    fromPartial(object: DeepPartial<GetGuildPruneCountRequest>): GetGuildPruneCountRequest;
};
export declare const GetGuildPruneCountResponse: {
    $type: "pylon.discord.v1.rest.GetGuildPruneCountResponse";
    encode(message: GetGuildPruneCountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildPruneCountResponse;
    fromJSON(object: any): GetGuildPruneCountResponse;
    toJSON(message: GetGuildPruneCountResponse): unknown;
    fromPartial(object: DeepPartial<GetGuildPruneCountResponse>): GetGuildPruneCountResponse;
};
export declare const BeginGuildPruneRequest: {
    $type: "pylon.discord.v1.rest.BeginGuildPruneRequest";
    encode(message: BeginGuildPruneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BeginGuildPruneRequest;
    fromJSON(object: any): BeginGuildPruneRequest;
    toJSON(message: BeginGuildPruneRequest): unknown;
    fromPartial(object: DeepPartial<BeginGuildPruneRequest>): BeginGuildPruneRequest;
};
export declare const BeginGuildPruneResponse: {
    $type: "pylon.discord.v1.rest.BeginGuildPruneResponse";
    encode(message: BeginGuildPruneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BeginGuildPruneResponse;
    fromJSON(object: any): BeginGuildPruneResponse;
    toJSON(message: BeginGuildPruneResponse): unknown;
    fromPartial(object: DeepPartial<BeginGuildPruneResponse>): BeginGuildPruneResponse;
};
export declare const GetGuildVoiceRegionsRequest: {
    $type: "pylon.discord.v1.rest.GetGuildVoiceRegionsRequest";
    encode(_: GetGuildVoiceRegionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildVoiceRegionsRequest;
    fromJSON(_: any): GetGuildVoiceRegionsRequest;
    toJSON(_: GetGuildVoiceRegionsRequest): unknown;
    fromPartial(_: DeepPartial<GetGuildVoiceRegionsRequest>): GetGuildVoiceRegionsRequest;
};
export declare const GetGuildVoiceRegionsResponse: {
    $type: "pylon.discord.v1.rest.GetGuildVoiceRegionsResponse";
    encode(message: GetGuildVoiceRegionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildVoiceRegionsResponse;
    fromJSON(object: any): GetGuildVoiceRegionsResponse;
    toJSON(message: GetGuildVoiceRegionsResponse): unknown;
    fromPartial(object: DeepPartial<GetGuildVoiceRegionsResponse>): GetGuildVoiceRegionsResponse;
};
export declare const GetGuildVoiceRegionsResponse_Data: {
    $type: "pylon.discord.v1.rest.GetGuildVoiceRegionsResponse.Data";
    encode(message: GetGuildVoiceRegionsResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildVoiceRegionsResponse_Data;
    fromJSON(object: any): GetGuildVoiceRegionsResponse_Data;
    toJSON(message: GetGuildVoiceRegionsResponse_Data): unknown;
    fromPartial(object: DeepPartial<GetGuildVoiceRegionsResponse_Data>): GetGuildVoiceRegionsResponse_Data;
};
export declare const GetGuildInvitesRequest: {
    $type: "pylon.discord.v1.rest.GetGuildInvitesRequest";
    encode(_: GetGuildInvitesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildInvitesRequest;
    fromJSON(_: any): GetGuildInvitesRequest;
    toJSON(_: GetGuildInvitesRequest): unknown;
    fromPartial(_: DeepPartial<GetGuildInvitesRequest>): GetGuildInvitesRequest;
};
export declare const GetGuildInvitesResponse: {
    $type: "pylon.discord.v1.rest.GetGuildInvitesResponse";
    encode(message: GetGuildInvitesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildInvitesResponse;
    fromJSON(object: any): GetGuildInvitesResponse;
    toJSON(message: GetGuildInvitesResponse): unknown;
    fromPartial(object: DeepPartial<GetGuildInvitesResponse>): GetGuildInvitesResponse;
};
export declare const GetGuildInvitesResponse_Data: {
    $type: "pylon.discord.v1.rest.GetGuildInvitesResponse.Data";
    encode(message: GetGuildInvitesResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildInvitesResponse_Data;
    fromJSON(object: any): GetGuildInvitesResponse_Data;
    toJSON(message: GetGuildInvitesResponse_Data): unknown;
    fromPartial(object: DeepPartial<GetGuildInvitesResponse_Data>): GetGuildInvitesResponse_Data;
};
export declare const ModifyChannelRequest: {
    $type: "pylon.discord.v1.rest.ModifyChannelRequest";
    encode(message: ModifyChannelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyChannelRequest;
    fromJSON(object: any): ModifyChannelRequest;
    toJSON(message: ModifyChannelRequest): unknown;
    fromPartial(object: DeepPartial<ModifyChannelRequest>): ModifyChannelRequest;
};
export declare const ModifyChannelRequest_ChannelPermissionOverwritesValue: {
    $type: "pylon.discord.v1.rest.ModifyChannelRequest.ChannelPermissionOverwritesValue";
    encode(message: ModifyChannelRequest_ChannelPermissionOverwritesValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyChannelRequest_ChannelPermissionOverwritesValue;
    fromJSON(object: any): ModifyChannelRequest_ChannelPermissionOverwritesValue;
    toJSON(message: ModifyChannelRequest_ChannelPermissionOverwritesValue): unknown;
    fromPartial(object: DeepPartial<ModifyChannelRequest_ChannelPermissionOverwritesValue>): ModifyChannelRequest_ChannelPermissionOverwritesValue;
};
export declare const ModifyChannelResponse: {
    $type: "pylon.discord.v1.rest.ModifyChannelResponse";
    encode(message: ModifyChannelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyChannelResponse;
    fromJSON(object: any): ModifyChannelResponse;
    toJSON(message: ModifyChannelResponse): unknown;
    fromPartial(object: DeepPartial<ModifyChannelResponse>): ModifyChannelResponse;
};
export declare const ModifyChannelResponse_Data: {
    $type: "pylon.discord.v1.rest.ModifyChannelResponse.Data";
    encode(message: ModifyChannelResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyChannelResponse_Data;
    fromJSON(object: any): ModifyChannelResponse_Data;
    toJSON(message: ModifyChannelResponse_Data): unknown;
    fromPartial(object: DeepPartial<ModifyChannelResponse_Data>): ModifyChannelResponse_Data;
};
export declare const DeleteChannelRequest: {
    $type: "pylon.discord.v1.rest.DeleteChannelRequest";
    encode(message: DeleteChannelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteChannelRequest;
    fromJSON(object: any): DeleteChannelRequest;
    toJSON(message: DeleteChannelRequest): unknown;
    fromPartial(object: DeepPartial<DeleteChannelRequest>): DeleteChannelRequest;
};
export declare const DeleteChannelResponse: {
    $type: "pylon.discord.v1.rest.DeleteChannelResponse";
    encode(message: DeleteChannelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteChannelResponse;
    fromJSON(object: any): DeleteChannelResponse;
    toJSON(message: DeleteChannelResponse): unknown;
    fromPartial(object: DeepPartial<DeleteChannelResponse>): DeleteChannelResponse;
};
export declare const GetChannelMessagesRequest: {
    $type: "pylon.discord.v1.rest.GetChannelMessagesRequest";
    encode(message: GetChannelMessagesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetChannelMessagesRequest;
    fromJSON(object: any): GetChannelMessagesRequest;
    toJSON(message: GetChannelMessagesRequest): unknown;
    fromPartial(object: DeepPartial<GetChannelMessagesRequest>): GetChannelMessagesRequest;
};
export declare const GetChannelMessagesResponse: {
    $type: "pylon.discord.v1.rest.GetChannelMessagesResponse";
    encode(message: GetChannelMessagesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetChannelMessagesResponse;
    fromJSON(object: any): GetChannelMessagesResponse;
    toJSON(message: GetChannelMessagesResponse): unknown;
    fromPartial(object: DeepPartial<GetChannelMessagesResponse>): GetChannelMessagesResponse;
};
export declare const GetChannelMessagesResponse_Data: {
    $type: "pylon.discord.v1.rest.GetChannelMessagesResponse.Data";
    encode(message: GetChannelMessagesResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetChannelMessagesResponse_Data;
    fromJSON(object: any): GetChannelMessagesResponse_Data;
    toJSON(message: GetChannelMessagesResponse_Data): unknown;
    fromPartial(object: DeepPartial<GetChannelMessagesResponse_Data>): GetChannelMessagesResponse_Data;
};
export declare const GetChannelMessageRequest: {
    $type: "pylon.discord.v1.rest.GetChannelMessageRequest";
    encode(message: GetChannelMessageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetChannelMessageRequest;
    fromJSON(object: any): GetChannelMessageRequest;
    toJSON(message: GetChannelMessageRequest): unknown;
    fromPartial(object: DeepPartial<GetChannelMessageRequest>): GetChannelMessageRequest;
};
export declare const GetChannelMessageResponse: {
    $type: "pylon.discord.v1.rest.GetChannelMessageResponse";
    encode(message: GetChannelMessageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetChannelMessageResponse;
    fromJSON(object: any): GetChannelMessageResponse;
    toJSON(message: GetChannelMessageResponse): unknown;
    fromPartial(object: DeepPartial<GetChannelMessageResponse>): GetChannelMessageResponse;
};
export declare const GetChannelMessageResponse_Data: {
    $type: "pylon.discord.v1.rest.GetChannelMessageResponse.Data";
    encode(message: GetChannelMessageResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetChannelMessageResponse_Data;
    fromJSON(object: any): GetChannelMessageResponse_Data;
    toJSON(message: GetChannelMessageResponse_Data): unknown;
    fromPartial(object: DeepPartial<GetChannelMessageResponse_Data>): GetChannelMessageResponse_Data;
};
export declare const CreateMessageRequest: {
    $type: "pylon.discord.v1.rest.CreateMessageRequest";
    encode(message: CreateMessageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateMessageRequest;
    fromJSON(object: any): CreateMessageRequest;
    toJSON(message: CreateMessageRequest): unknown;
    fromPartial(object: DeepPartial<CreateMessageRequest>): CreateMessageRequest;
};
export declare const CreateMessageRequest_AllowedMentions: {
    $type: "pylon.discord.v1.rest.CreateMessageRequest.AllowedMentions";
    encode(message: CreateMessageRequest_AllowedMentions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateMessageRequest_AllowedMentions;
    fromJSON(object: any): CreateMessageRequest_AllowedMentions;
    toJSON(message: CreateMessageRequest_AllowedMentions): unknown;
    fromPartial(object: DeepPartial<CreateMessageRequest_AllowedMentions>): CreateMessageRequest_AllowedMentions;
};
export declare const CreateMessageRequest_AllowedMentions_AllowedMentionTypes: {
    $type: "pylon.discord.v1.rest.CreateMessageRequest.AllowedMentions.AllowedMentionTypes";
    encode(message: CreateMessageRequest_AllowedMentions_AllowedMentionTypes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateMessageRequest_AllowedMentions_AllowedMentionTypes;
    fromJSON(object: any): CreateMessageRequest_AllowedMentions_AllowedMentionTypes;
    toJSON(message: CreateMessageRequest_AllowedMentions_AllowedMentionTypes): unknown;
    fromPartial(object: DeepPartial<CreateMessageRequest_AllowedMentions_AllowedMentionTypes>): CreateMessageRequest_AllowedMentions_AllowedMentionTypes;
};
export declare const CreateMessageRequest_Attachment: {
    $type: "pylon.discord.v1.rest.CreateMessageRequest.Attachment";
    encode(message: CreateMessageRequest_Attachment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateMessageRequest_Attachment;
    fromJSON(object: any): CreateMessageRequest_Attachment;
    toJSON(message: CreateMessageRequest_Attachment): unknown;
    fromPartial(object: DeepPartial<CreateMessageRequest_Attachment>): CreateMessageRequest_Attachment;
};
export declare const CreateMessageResponse: {
    $type: "pylon.discord.v1.rest.CreateMessageResponse";
    encode(message: CreateMessageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateMessageResponse;
    fromJSON(object: any): CreateMessageResponse;
    toJSON(message: CreateMessageResponse): unknown;
    fromPartial(object: DeepPartial<CreateMessageResponse>): CreateMessageResponse;
};
export declare const CreateMessageResponse_Data: {
    $type: "pylon.discord.v1.rest.CreateMessageResponse.Data";
    encode(message: CreateMessageResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateMessageResponse_Data;
    fromJSON(object: any): CreateMessageResponse_Data;
    toJSON(message: CreateMessageResponse_Data): unknown;
    fromPartial(object: DeepPartial<CreateMessageResponse_Data>): CreateMessageResponse_Data;
};
export declare const CrosspostMessageRequest: {
    $type: "pylon.discord.v1.rest.CrosspostMessageRequest";
    encode(message: CrosspostMessageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CrosspostMessageRequest;
    fromJSON(object: any): CrosspostMessageRequest;
    toJSON(message: CrosspostMessageRequest): unknown;
    fromPartial(object: DeepPartial<CrosspostMessageRequest>): CrosspostMessageRequest;
};
export declare const CrosspostMessageResponse: {
    $type: "pylon.discord.v1.rest.CrosspostMessageResponse";
    encode(message: CrosspostMessageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CrosspostMessageResponse;
    fromJSON(object: any): CrosspostMessageResponse;
    toJSON(message: CrosspostMessageResponse): unknown;
    fromPartial(object: DeepPartial<CrosspostMessageResponse>): CrosspostMessageResponse;
};
export declare const CrosspostMessageResponse_Data: {
    $type: "pylon.discord.v1.rest.CrosspostMessageResponse.Data";
    encode(message: CrosspostMessageResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CrosspostMessageResponse_Data;
    fromJSON(object: any): CrosspostMessageResponse_Data;
    toJSON(message: CrosspostMessageResponse_Data): unknown;
    fromPartial(object: DeepPartial<CrosspostMessageResponse_Data>): CrosspostMessageResponse_Data;
};
export declare const CreateReactionRequest: {
    $type: "pylon.discord.v1.rest.CreateReactionRequest";
    encode(message: CreateReactionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateReactionRequest;
    fromJSON(object: any): CreateReactionRequest;
    toJSON(message: CreateReactionRequest): unknown;
    fromPartial(object: DeepPartial<CreateReactionRequest>): CreateReactionRequest;
};
export declare const CreateReactionResponse: {
    $type: "pylon.discord.v1.rest.CreateReactionResponse";
    encode(message: CreateReactionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateReactionResponse;
    fromJSON(object: any): CreateReactionResponse;
    toJSON(message: CreateReactionResponse): unknown;
    fromPartial(object: DeepPartial<CreateReactionResponse>): CreateReactionResponse;
};
export declare const DeleteOwnReactionRequest: {
    $type: "pylon.discord.v1.rest.DeleteOwnReactionRequest";
    encode(message: DeleteOwnReactionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteOwnReactionRequest;
    fromJSON(object: any): DeleteOwnReactionRequest;
    toJSON(message: DeleteOwnReactionRequest): unknown;
    fromPartial(object: DeepPartial<DeleteOwnReactionRequest>): DeleteOwnReactionRequest;
};
export declare const DeleteOwnReactionResponse: {
    $type: "pylon.discord.v1.rest.DeleteOwnReactionResponse";
    encode(message: DeleteOwnReactionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteOwnReactionResponse;
    fromJSON(object: any): DeleteOwnReactionResponse;
    toJSON(message: DeleteOwnReactionResponse): unknown;
    fromPartial(object: DeepPartial<DeleteOwnReactionResponse>): DeleteOwnReactionResponse;
};
export declare const DeleteUserReactionRequest: {
    $type: "pylon.discord.v1.rest.DeleteUserReactionRequest";
    encode(message: DeleteUserReactionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteUserReactionRequest;
    fromJSON(object: any): DeleteUserReactionRequest;
    toJSON(message: DeleteUserReactionRequest): unknown;
    fromPartial(object: DeepPartial<DeleteUserReactionRequest>): DeleteUserReactionRequest;
};
export declare const DeleteUserReactionResponse: {
    $type: "pylon.discord.v1.rest.DeleteUserReactionResponse";
    encode(message: DeleteUserReactionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteUserReactionResponse;
    fromJSON(object: any): DeleteUserReactionResponse;
    toJSON(message: DeleteUserReactionResponse): unknown;
    fromPartial(object: DeepPartial<DeleteUserReactionResponse>): DeleteUserReactionResponse;
};
export declare const DeleteAllReactionsRequest: {
    $type: "pylon.discord.v1.rest.DeleteAllReactionsRequest";
    encode(message: DeleteAllReactionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteAllReactionsRequest;
    fromJSON(object: any): DeleteAllReactionsRequest;
    toJSON(message: DeleteAllReactionsRequest): unknown;
    fromPartial(object: DeepPartial<DeleteAllReactionsRequest>): DeleteAllReactionsRequest;
};
export declare const DeleteAllReactionsResponse: {
    $type: "pylon.discord.v1.rest.DeleteAllReactionsResponse";
    encode(message: DeleteAllReactionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteAllReactionsResponse;
    fromJSON(object: any): DeleteAllReactionsResponse;
    toJSON(message: DeleteAllReactionsResponse): unknown;
    fromPartial(object: DeepPartial<DeleteAllReactionsResponse>): DeleteAllReactionsResponse;
};
export declare const DeleteAllReactionsForEmojiRequest: {
    $type: "pylon.discord.v1.rest.DeleteAllReactionsForEmojiRequest";
    encode(message: DeleteAllReactionsForEmojiRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteAllReactionsForEmojiRequest;
    fromJSON(object: any): DeleteAllReactionsForEmojiRequest;
    toJSON(message: DeleteAllReactionsForEmojiRequest): unknown;
    fromPartial(object: DeepPartial<DeleteAllReactionsForEmojiRequest>): DeleteAllReactionsForEmojiRequest;
};
export declare const DeleteAllReactionsForEmojiResponse: {
    $type: "pylon.discord.v1.rest.DeleteAllReactionsForEmojiResponse";
    encode(message: DeleteAllReactionsForEmojiResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteAllReactionsForEmojiResponse;
    fromJSON(object: any): DeleteAllReactionsForEmojiResponse;
    toJSON(message: DeleteAllReactionsForEmojiResponse): unknown;
    fromPartial(object: DeepPartial<DeleteAllReactionsForEmojiResponse>): DeleteAllReactionsForEmojiResponse;
};
export declare const EditMessageRequest: {
    $type: "pylon.discord.v1.rest.EditMessageRequest";
    encode(message: EditMessageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EditMessageRequest;
    fromJSON(object: any): EditMessageRequest;
    toJSON(message: EditMessageRequest): unknown;
    fromPartial(object: DeepPartial<EditMessageRequest>): EditMessageRequest;
};
export declare const EditMessageResponse: {
    $type: "pylon.discord.v1.rest.EditMessageResponse";
    encode(message: EditMessageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EditMessageResponse;
    fromJSON(object: any): EditMessageResponse;
    toJSON(message: EditMessageResponse): unknown;
    fromPartial(object: DeepPartial<EditMessageResponse>): EditMessageResponse;
};
export declare const EditMessageResponse_Data: {
    $type: "pylon.discord.v1.rest.EditMessageResponse.Data";
    encode(message: EditMessageResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EditMessageResponse_Data;
    fromJSON(object: any): EditMessageResponse_Data;
    toJSON(message: EditMessageResponse_Data): unknown;
    fromPartial(object: DeepPartial<EditMessageResponse_Data>): EditMessageResponse_Data;
};
export declare const DeleteMessageRequest: {
    $type: "pylon.discord.v1.rest.DeleteMessageRequest";
    encode(message: DeleteMessageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteMessageRequest;
    fromJSON(object: any): DeleteMessageRequest;
    toJSON(message: DeleteMessageRequest): unknown;
    fromPartial(object: DeepPartial<DeleteMessageRequest>): DeleteMessageRequest;
};
export declare const DeleteMessageResponse: {
    $type: "pylon.discord.v1.rest.DeleteMessageResponse";
    encode(message: DeleteMessageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteMessageResponse;
    fromJSON(object: any): DeleteMessageResponse;
    toJSON(message: DeleteMessageResponse): unknown;
    fromPartial(object: DeepPartial<DeleteMessageResponse>): DeleteMessageResponse;
};
export declare const BulkDeleteMessagesRequest: {
    $type: "pylon.discord.v1.rest.BulkDeleteMessagesRequest";
    encode(message: BulkDeleteMessagesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BulkDeleteMessagesRequest;
    fromJSON(object: any): BulkDeleteMessagesRequest;
    toJSON(message: BulkDeleteMessagesRequest): unknown;
    fromPartial(object: DeepPartial<BulkDeleteMessagesRequest>): BulkDeleteMessagesRequest;
};
export declare const BulkDeleteMessagesResponse: {
    $type: "pylon.discord.v1.rest.BulkDeleteMessagesResponse";
    encode(message: BulkDeleteMessagesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BulkDeleteMessagesResponse;
    fromJSON(object: any): BulkDeleteMessagesResponse;
    toJSON(message: BulkDeleteMessagesResponse): unknown;
    fromPartial(object: DeepPartial<BulkDeleteMessagesResponse>): BulkDeleteMessagesResponse;
};
export declare const EditChannelPermissionsRequest: {
    $type: "pylon.discord.v1.rest.EditChannelPermissionsRequest";
    encode(message: EditChannelPermissionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EditChannelPermissionsRequest;
    fromJSON(object: any): EditChannelPermissionsRequest;
    toJSON(message: EditChannelPermissionsRequest): unknown;
    fromPartial(object: DeepPartial<EditChannelPermissionsRequest>): EditChannelPermissionsRequest;
};
export declare const EditChannelPermissionsResponse: {
    $type: "pylon.discord.v1.rest.EditChannelPermissionsResponse";
    encode(message: EditChannelPermissionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EditChannelPermissionsResponse;
    fromJSON(object: any): EditChannelPermissionsResponse;
    toJSON(message: EditChannelPermissionsResponse): unknown;
    fromPartial(object: DeepPartial<EditChannelPermissionsResponse>): EditChannelPermissionsResponse;
};
export declare const GetChannelInvitesRequest: {
    $type: "pylon.discord.v1.rest.GetChannelInvitesRequest";
    encode(message: GetChannelInvitesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetChannelInvitesRequest;
    fromJSON(object: any): GetChannelInvitesRequest;
    toJSON(message: GetChannelInvitesRequest): unknown;
    fromPartial(object: DeepPartial<GetChannelInvitesRequest>): GetChannelInvitesRequest;
};
export declare const GetChannelInvitesResponse: {
    $type: "pylon.discord.v1.rest.GetChannelInvitesResponse";
    encode(message: GetChannelInvitesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetChannelInvitesResponse;
    fromJSON(object: any): GetChannelInvitesResponse;
    toJSON(message: GetChannelInvitesResponse): unknown;
    fromPartial(object: DeepPartial<GetChannelInvitesResponse>): GetChannelInvitesResponse;
};
export declare const GetChannelInvitesResponse_Data: {
    $type: "pylon.discord.v1.rest.GetChannelInvitesResponse.Data";
    encode(message: GetChannelInvitesResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetChannelInvitesResponse_Data;
    fromJSON(object: any): GetChannelInvitesResponse_Data;
    toJSON(message: GetChannelInvitesResponse_Data): unknown;
    fromPartial(object: DeepPartial<GetChannelInvitesResponse_Data>): GetChannelInvitesResponse_Data;
};
export declare const CreateChannelInviteRequest: {
    $type: "pylon.discord.v1.rest.CreateChannelInviteRequest";
    encode(message: CreateChannelInviteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateChannelInviteRequest;
    fromJSON(object: any): CreateChannelInviteRequest;
    toJSON(message: CreateChannelInviteRequest): unknown;
    fromPartial(object: DeepPartial<CreateChannelInviteRequest>): CreateChannelInviteRequest;
};
export declare const CreateChannelInviteResponse: {
    $type: "pylon.discord.v1.rest.CreateChannelInviteResponse";
    encode(message: CreateChannelInviteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateChannelInviteResponse;
    fromJSON(object: any): CreateChannelInviteResponse;
    toJSON(message: CreateChannelInviteResponse): unknown;
    fromPartial(object: DeepPartial<CreateChannelInviteResponse>): CreateChannelInviteResponse;
};
export declare const CreateChannelInviteResponse_Data: {
    $type: "pylon.discord.v1.rest.CreateChannelInviteResponse.Data";
    encode(message: CreateChannelInviteResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateChannelInviteResponse_Data;
    fromJSON(object: any): CreateChannelInviteResponse_Data;
    toJSON(message: CreateChannelInviteResponse_Data): unknown;
    fromPartial(object: DeepPartial<CreateChannelInviteResponse_Data>): CreateChannelInviteResponse_Data;
};
export declare const DeleteChannelPermissionRequest: {
    $type: "pylon.discord.v1.rest.DeleteChannelPermissionRequest";
    encode(message: DeleteChannelPermissionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteChannelPermissionRequest;
    fromJSON(object: any): DeleteChannelPermissionRequest;
    toJSON(message: DeleteChannelPermissionRequest): unknown;
    fromPartial(object: DeepPartial<DeleteChannelPermissionRequest>): DeleteChannelPermissionRequest;
};
export declare const DeleteChannelPermissionResponse: {
    $type: "pylon.discord.v1.rest.DeleteChannelPermissionResponse";
    encode(message: DeleteChannelPermissionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteChannelPermissionResponse;
    fromJSON(object: any): DeleteChannelPermissionResponse;
    toJSON(message: DeleteChannelPermissionResponse): unknown;
    fromPartial(object: DeepPartial<DeleteChannelPermissionResponse>): DeleteChannelPermissionResponse;
};
export declare const FollowNewsChannelRequest: {
    $type: "pylon.discord.v1.rest.FollowNewsChannelRequest";
    encode(message: FollowNewsChannelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FollowNewsChannelRequest;
    fromJSON(object: any): FollowNewsChannelRequest;
    toJSON(message: FollowNewsChannelRequest): unknown;
    fromPartial(object: DeepPartial<FollowNewsChannelRequest>): FollowNewsChannelRequest;
};
export declare const FollowNewsChannelResponse: {
    $type: "pylon.discord.v1.rest.FollowNewsChannelResponse";
    encode(message: FollowNewsChannelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FollowNewsChannelResponse;
    fromJSON(object: any): FollowNewsChannelResponse;
    toJSON(message: FollowNewsChannelResponse): unknown;
    fromPartial(object: DeepPartial<FollowNewsChannelResponse>): FollowNewsChannelResponse;
};
export declare const FollowNewsChannelResponse_Data: {
    $type: "pylon.discord.v1.rest.FollowNewsChannelResponse.Data";
    encode(message: FollowNewsChannelResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FollowNewsChannelResponse_Data;
    fromJSON(object: any): FollowNewsChannelResponse_Data;
    toJSON(message: FollowNewsChannelResponse_Data): unknown;
    fromPartial(object: DeepPartial<FollowNewsChannelResponse_Data>): FollowNewsChannelResponse_Data;
};
export declare const TriggerTypingIndicatorRequest: {
    $type: "pylon.discord.v1.rest.TriggerTypingIndicatorRequest";
    encode(message: TriggerTypingIndicatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TriggerTypingIndicatorRequest;
    fromJSON(object: any): TriggerTypingIndicatorRequest;
    toJSON(message: TriggerTypingIndicatorRequest): unknown;
    fromPartial(object: DeepPartial<TriggerTypingIndicatorRequest>): TriggerTypingIndicatorRequest;
};
export declare const TriggerTypingIndicatorResponse: {
    $type: "pylon.discord.v1.rest.TriggerTypingIndicatorResponse";
    encode(message: TriggerTypingIndicatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TriggerTypingIndicatorResponse;
    fromJSON(object: any): TriggerTypingIndicatorResponse;
    toJSON(message: TriggerTypingIndicatorResponse): unknown;
    fromPartial(object: DeepPartial<TriggerTypingIndicatorResponse>): TriggerTypingIndicatorResponse;
};
export declare const GetPinnedMessagesRequest: {
    $type: "pylon.discord.v1.rest.GetPinnedMessagesRequest";
    encode(message: GetPinnedMessagesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetPinnedMessagesRequest;
    fromJSON(object: any): GetPinnedMessagesRequest;
    toJSON(message: GetPinnedMessagesRequest): unknown;
    fromPartial(object: DeepPartial<GetPinnedMessagesRequest>): GetPinnedMessagesRequest;
};
export declare const GetPinnedMessagesResponse: {
    $type: "pylon.discord.v1.rest.GetPinnedMessagesResponse";
    encode(message: GetPinnedMessagesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetPinnedMessagesResponse;
    fromJSON(object: any): GetPinnedMessagesResponse;
    toJSON(message: GetPinnedMessagesResponse): unknown;
    fromPartial(object: DeepPartial<GetPinnedMessagesResponse>): GetPinnedMessagesResponse;
};
export declare const GetPinnedMessagesResponse_Data: {
    $type: "pylon.discord.v1.rest.GetPinnedMessagesResponse.Data";
    encode(message: GetPinnedMessagesResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetPinnedMessagesResponse_Data;
    fromJSON(object: any): GetPinnedMessagesResponse_Data;
    toJSON(message: GetPinnedMessagesResponse_Data): unknown;
    fromPartial(object: DeepPartial<GetPinnedMessagesResponse_Data>): GetPinnedMessagesResponse_Data;
};
export declare const AddPinnedChannelMessageRequest: {
    $type: "pylon.discord.v1.rest.AddPinnedChannelMessageRequest";
    encode(message: AddPinnedChannelMessageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddPinnedChannelMessageRequest;
    fromJSON(object: any): AddPinnedChannelMessageRequest;
    toJSON(message: AddPinnedChannelMessageRequest): unknown;
    fromPartial(object: DeepPartial<AddPinnedChannelMessageRequest>): AddPinnedChannelMessageRequest;
};
export declare const AddPinnedChannelMessageResponse: {
    $type: "pylon.discord.v1.rest.AddPinnedChannelMessageResponse";
    encode(message: AddPinnedChannelMessageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddPinnedChannelMessageResponse;
    fromJSON(object: any): AddPinnedChannelMessageResponse;
    toJSON(message: AddPinnedChannelMessageResponse): unknown;
    fromPartial(object: DeepPartial<AddPinnedChannelMessageResponse>): AddPinnedChannelMessageResponse;
};
export declare const DeletePinnedChannelMessageRequest: {
    $type: "pylon.discord.v1.rest.DeletePinnedChannelMessageRequest";
    encode(message: DeletePinnedChannelMessageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeletePinnedChannelMessageRequest;
    fromJSON(object: any): DeletePinnedChannelMessageRequest;
    toJSON(message: DeletePinnedChannelMessageRequest): unknown;
    fromPartial(object: DeepPartial<DeletePinnedChannelMessageRequest>): DeletePinnedChannelMessageRequest;
};
export declare const DeletePinnedChannelMessageResponse: {
    $type: "pylon.discord.v1.rest.DeletePinnedChannelMessageResponse";
    encode(message: DeletePinnedChannelMessageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeletePinnedChannelMessageResponse;
    fromJSON(object: any): DeletePinnedChannelMessageResponse;
    toJSON(message: DeletePinnedChannelMessageResponse): unknown;
    fromPartial(object: DeepPartial<DeletePinnedChannelMessageResponse>): DeletePinnedChannelMessageResponse;
};
export declare const ListGuildEmojisRequest: {
    $type: "pylon.discord.v1.rest.ListGuildEmojisRequest";
    encode(_: ListGuildEmojisRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGuildEmojisRequest;
    fromJSON(_: any): ListGuildEmojisRequest;
    toJSON(_: ListGuildEmojisRequest): unknown;
    fromPartial(_: DeepPartial<ListGuildEmojisRequest>): ListGuildEmojisRequest;
};
export declare const ListGuildEmojisResponse: {
    $type: "pylon.discord.v1.rest.ListGuildEmojisResponse";
    encode(message: ListGuildEmojisResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGuildEmojisResponse;
    fromJSON(object: any): ListGuildEmojisResponse;
    toJSON(message: ListGuildEmojisResponse): unknown;
    fromPartial(object: DeepPartial<ListGuildEmojisResponse>): ListGuildEmojisResponse;
};
export declare const ListGuildEmojisResponse_Data: {
    $type: "pylon.discord.v1.rest.ListGuildEmojisResponse.Data";
    encode(message: ListGuildEmojisResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGuildEmojisResponse_Data;
    fromJSON(object: any): ListGuildEmojisResponse_Data;
    toJSON(message: ListGuildEmojisResponse_Data): unknown;
    fromPartial(object: DeepPartial<ListGuildEmojisResponse_Data>): ListGuildEmojisResponse_Data;
};
export declare const GetGuildEmojiRequest: {
    $type: "pylon.discord.v1.rest.GetGuildEmojiRequest";
    encode(message: GetGuildEmojiRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildEmojiRequest;
    fromJSON(object: any): GetGuildEmojiRequest;
    toJSON(message: GetGuildEmojiRequest): unknown;
    fromPartial(object: DeepPartial<GetGuildEmojiRequest>): GetGuildEmojiRequest;
};
export declare const GetGuildEmojiResponse: {
    $type: "pylon.discord.v1.rest.GetGuildEmojiResponse";
    encode(message: GetGuildEmojiResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildEmojiResponse;
    fromJSON(object: any): GetGuildEmojiResponse;
    toJSON(message: GetGuildEmojiResponse): unknown;
    fromPartial(object: DeepPartial<GetGuildEmojiResponse>): GetGuildEmojiResponse;
};
export declare const GetGuildEmojiResponse_Data: {
    $type: "pylon.discord.v1.rest.GetGuildEmojiResponse.Data";
    encode(message: GetGuildEmojiResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildEmojiResponse_Data;
    fromJSON(object: any): GetGuildEmojiResponse_Data;
    toJSON(message: GetGuildEmojiResponse_Data): unknown;
    fromPartial(object: DeepPartial<GetGuildEmojiResponse_Data>): GetGuildEmojiResponse_Data;
};
export declare const CreateGuildEmojiRequest: {
    $type: "pylon.discord.v1.rest.CreateGuildEmojiRequest";
    encode(message: CreateGuildEmojiRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateGuildEmojiRequest;
    fromJSON(object: any): CreateGuildEmojiRequest;
    toJSON(message: CreateGuildEmojiRequest): unknown;
    fromPartial(object: DeepPartial<CreateGuildEmojiRequest>): CreateGuildEmojiRequest;
};
export declare const CreateGuildEmojiResponse: {
    $type: "pylon.discord.v1.rest.CreateGuildEmojiResponse";
    encode(message: CreateGuildEmojiResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateGuildEmojiResponse;
    fromJSON(object: any): CreateGuildEmojiResponse;
    toJSON(message: CreateGuildEmojiResponse): unknown;
    fromPartial(object: DeepPartial<CreateGuildEmojiResponse>): CreateGuildEmojiResponse;
};
export declare const CreateGuildEmojiResponse_Data: {
    $type: "pylon.discord.v1.rest.CreateGuildEmojiResponse.Data";
    encode(message: CreateGuildEmojiResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateGuildEmojiResponse_Data;
    fromJSON(object: any): CreateGuildEmojiResponse_Data;
    toJSON(message: CreateGuildEmojiResponse_Data): unknown;
    fromPartial(object: DeepPartial<CreateGuildEmojiResponse_Data>): CreateGuildEmojiResponse_Data;
};
export declare const ModifyGuildEmojiRequest: {
    $type: "pylon.discord.v1.rest.ModifyGuildEmojiRequest";
    encode(message: ModifyGuildEmojiRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyGuildEmojiRequest;
    fromJSON(object: any): ModifyGuildEmojiRequest;
    toJSON(message: ModifyGuildEmojiRequest): unknown;
    fromPartial(object: DeepPartial<ModifyGuildEmojiRequest>): ModifyGuildEmojiRequest;
};
export declare const ModifyGuildEmojiResponse: {
    $type: "pylon.discord.v1.rest.ModifyGuildEmojiResponse";
    encode(message: ModifyGuildEmojiResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyGuildEmojiResponse;
    fromJSON(object: any): ModifyGuildEmojiResponse;
    toJSON(message: ModifyGuildEmojiResponse): unknown;
    fromPartial(object: DeepPartial<ModifyGuildEmojiResponse>): ModifyGuildEmojiResponse;
};
export declare const ModifyGuildEmojiResponse_Data: {
    $type: "pylon.discord.v1.rest.ModifyGuildEmojiResponse.Data";
    encode(message: ModifyGuildEmojiResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyGuildEmojiResponse_Data;
    fromJSON(object: any): ModifyGuildEmojiResponse_Data;
    toJSON(message: ModifyGuildEmojiResponse_Data): unknown;
    fromPartial(object: DeepPartial<ModifyGuildEmojiResponse_Data>): ModifyGuildEmojiResponse_Data;
};
export declare const DeleteGuildEmojiRequest: {
    $type: "pylon.discord.v1.rest.DeleteGuildEmojiRequest";
    encode(message: DeleteGuildEmojiRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteGuildEmojiRequest;
    fromJSON(object: any): DeleteGuildEmojiRequest;
    toJSON(message: DeleteGuildEmojiRequest): unknown;
    fromPartial(object: DeepPartial<DeleteGuildEmojiRequest>): DeleteGuildEmojiRequest;
};
export declare const DeleteGuildEmojiResponse: {
    $type: "pylon.discord.v1.rest.DeleteGuildEmojiResponse";
    encode(message: DeleteGuildEmojiResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteGuildEmojiResponse;
    fromJSON(object: any): DeleteGuildEmojiResponse;
    toJSON(message: DeleteGuildEmojiResponse): unknown;
    fromPartial(object: DeepPartial<DeleteGuildEmojiResponse>): DeleteGuildEmojiResponse;
};
export declare const GetCurrentUserRequest: {
    $type: "pylon.discord.v1.rest.GetCurrentUserRequest";
    encode(_: GetCurrentUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetCurrentUserRequest;
    fromJSON(_: any): GetCurrentUserRequest;
    toJSON(_: GetCurrentUserRequest): unknown;
    fromPartial(_: DeepPartial<GetCurrentUserRequest>): GetCurrentUserRequest;
};
export declare const GetCurrentUserResponse: {
    $type: "pylon.discord.v1.rest.GetCurrentUserResponse";
    encode(message: GetCurrentUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetCurrentUserResponse;
    fromJSON(object: any): GetCurrentUserResponse;
    toJSON(message: GetCurrentUserResponse): unknown;
    fromPartial(object: DeepPartial<GetCurrentUserResponse>): GetCurrentUserResponse;
};
export declare const GetCurrentUserResponse_Data: {
    $type: "pylon.discord.v1.rest.GetCurrentUserResponse.Data";
    encode(message: GetCurrentUserResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetCurrentUserResponse_Data;
    fromJSON(object: any): GetCurrentUserResponse_Data;
    toJSON(message: GetCurrentUserResponse_Data): unknown;
    fromPartial(object: DeepPartial<GetCurrentUserResponse_Data>): GetCurrentUserResponse_Data;
};
export declare const GetUserRequest: {
    $type: "pylon.discord.v1.rest.GetUserRequest";
    encode(message: GetUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetUserRequest;
    fromJSON(object: any): GetUserRequest;
    toJSON(message: GetUserRequest): unknown;
    fromPartial(object: DeepPartial<GetUserRequest>): GetUserRequest;
};
export declare const GetUserResponse: {
    $type: "pylon.discord.v1.rest.GetUserResponse";
    encode(message: GetUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetUserResponse;
    fromJSON(object: any): GetUserResponse;
    toJSON(message: GetUserResponse): unknown;
    fromPartial(object: DeepPartial<GetUserResponse>): GetUserResponse;
};
export declare const GetUserResponse_Data: {
    $type: "pylon.discord.v1.rest.GetUserResponse.Data";
    encode(message: GetUserResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetUserResponse_Data;
    fromJSON(object: any): GetUserResponse_Data;
    toJSON(message: GetUserResponse_Data): unknown;
    fromPartial(object: DeepPartial<GetUserResponse_Data>): GetUserResponse_Data;
};
export declare const ModifyCurrentUserRequest: {
    $type: "pylon.discord.v1.rest.ModifyCurrentUserRequest";
    encode(message: ModifyCurrentUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyCurrentUserRequest;
    fromJSON(object: any): ModifyCurrentUserRequest;
    toJSON(message: ModifyCurrentUserRequest): unknown;
    fromPartial(object: DeepPartial<ModifyCurrentUserRequest>): ModifyCurrentUserRequest;
};
export declare const ModifyCurrentUserResponse: {
    $type: "pylon.discord.v1.rest.ModifyCurrentUserResponse";
    encode(message: ModifyCurrentUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyCurrentUserResponse;
    fromJSON(object: any): ModifyCurrentUserResponse;
    toJSON(message: ModifyCurrentUserResponse): unknown;
    fromPartial(object: DeepPartial<ModifyCurrentUserResponse>): ModifyCurrentUserResponse;
};
export declare const ModifyCurrentUserResponse_Data: {
    $type: "pylon.discord.v1.rest.ModifyCurrentUserResponse.Data";
    encode(message: ModifyCurrentUserResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModifyCurrentUserResponse_Data;
    fromJSON(object: any): ModifyCurrentUserResponse_Data;
    toJSON(message: ModifyCurrentUserResponse_Data): unknown;
    fromPartial(object: DeepPartial<ModifyCurrentUserResponse_Data>): ModifyCurrentUserResponse_Data;
};
export declare const LeaveGuildRequest: {
    $type: "pylon.discord.v1.rest.LeaveGuildRequest";
    encode(_: LeaveGuildRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LeaveGuildRequest;
    fromJSON(_: any): LeaveGuildRequest;
    toJSON(_: LeaveGuildRequest): unknown;
    fromPartial(_: DeepPartial<LeaveGuildRequest>): LeaveGuildRequest;
};
export declare const LeaveGuildResponse: {
    $type: "pylon.discord.v1.rest.LeaveGuildResponse";
    encode(message: LeaveGuildResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LeaveGuildResponse;
    fromJSON(object: any): LeaveGuildResponse;
    toJSON(message: LeaveGuildResponse): unknown;
    fromPartial(object: DeepPartial<LeaveGuildResponse>): LeaveGuildResponse;
};
export declare const CreateDmRequest: {
    $type: "pylon.discord.v1.rest.CreateDmRequest";
    encode(message: CreateDmRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDmRequest;
    fromJSON(object: any): CreateDmRequest;
    toJSON(message: CreateDmRequest): unknown;
    fromPartial(object: DeepPartial<CreateDmRequest>): CreateDmRequest;
};
export declare const CreateDmResponse: {
    $type: "pylon.discord.v1.rest.CreateDmResponse";
    encode(message: CreateDmResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDmResponse;
    fromJSON(object: any): CreateDmResponse;
    toJSON(message: CreateDmResponse): unknown;
    fromPartial(object: DeepPartial<CreateDmResponse>): CreateDmResponse;
};
export declare const CreateDmResponse_Data: {
    $type: "pylon.discord.v1.rest.CreateDmResponse.Data";
    encode(message: CreateDmResponse_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDmResponse_Data;
    fromJSON(object: any): CreateDmResponse_Data;
    toJSON(message: CreateDmResponse_Data): unknown;
    fromPartial(object: DeepPartial<CreateDmResponse_Data>): CreateDmResponse_Data;
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
