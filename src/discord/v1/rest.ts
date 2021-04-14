/* eslint-disable */
import { messageTypeRegistry } from "../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  ChannelData_ChannelType,
  ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType,
  InviteData_InviteTargetUserType,
  SnowflakeValue,
  GuildData,
  ChannelData_ChannelPermissionOverwriteData,
  ChannelData,
  SnowflakeListValue,
  GuildBanData,
  PermissionsValue,
  RoleData,
  InviteData,
  MessageData,
  MessageData_MessageEmbedData,
  EmojiData,
  UserData,
  channelData_ChannelTypeFromJSON,
  channelData_ChannelTypeToJSON,
  channelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteTypeFromJSON,
  channelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteTypeToJSON,
  inviteData_InviteTargetUserTypeFromJSON,
  inviteData_InviteTargetUserTypeToJSON,
} from "../../discord/v1/model";
import { Empty } from "../../google/protobuf/empty";
import {
  StringValue,
  UInt32Value,
  BytesValue,
  BoolValue,
} from "../../google/protobuf/wrappers";

export const protobufPackage = "pylon.discord.v1.rest";

export interface RestError {
  $type: "pylon.discord.v1.rest.RestError";
  errorType?:
    | { $case: "unknownError"; unknownError: RestError_UnknownError }
    | { $case: "validationError"; validationError: RestError_ValidationError }
    | {
        $case: "resourceNotFound";
        resourceNotFound: RestError_ResourceNotFound;
      }
    | { $case: "accessDenied"; accessDenied: RestError_AccessDenied }
    | { $case: "rateLimited"; rateLimited: RestError_RateLimited };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: ModifyGuildResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: CreateGuildChannelResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: AddGuildMemberResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
}

export interface ModifyCurrentUserNickRequest {
  $type: "pylon.discord.v1.rest.ModifyCurrentUserNickRequest";
  nick: string | undefined;
}

export interface ModifyCurrentUserNickResponse {
  $type: "pylon.discord.v1.rest.ModifyCurrentUserNickResponse";
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
}

export interface AddGuildMemberRoleRequest {
  $type: "pylon.discord.v1.rest.AddGuildMemberRoleRequest";
  userId: string;
  roleId: string;
  auditLogReason: string | undefined;
}

export interface AddGuildMemberRoleResponse {
  $type: "pylon.discord.v1.rest.AddGuildMemberRoleResponse";
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
}

export interface RemoveGuildMemberRoleRequest {
  $type: "pylon.discord.v1.rest.RemoveGuildMemberRoleRequest";
  userId: string;
  roleId: string;
  auditLogReason: string | undefined;
}

export interface RemoveGuildMemberRoleResponse {
  $type: "pylon.discord.v1.rest.RemoveGuildMemberRoleResponse";
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
}

export interface RemoveGuildMemberRequest {
  $type: "pylon.discord.v1.rest.RemoveGuildMemberRequest";
  userId: string;
  auditLogReason: string | undefined;
}

export interface RemoveGuildMemberResponse {
  $type: "pylon.discord.v1.rest.RemoveGuildMemberResponse";
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
}

export interface GetGuildBansRequest {
  $type: "pylon.discord.v1.rest.GetGuildBansRequest";
  userId: string;
}

export interface GetGuildBansResponse {
  $type: "pylon.discord.v1.rest.GetGuildBansResponse";
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: GetGuildBansResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: GetGuildBanResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
}

export interface RemoveGuildBanRequest {
  $type: "pylon.discord.v1.rest.RemoveGuildBanRequest";
  userId: string;
  auditLogReason: string | undefined;
}

export interface RemoveGuildBanResponse {
  $type: "pylon.discord.v1.rest.RemoveGuildBanResponse";
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: CreateGuildRoleResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: ModifyGuildRolePositionsResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: ModifyGuildRoleResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
}

export interface GetGuildPruneCountRequest {
  $type: "pylon.discord.v1.rest.GetGuildPruneCountRequest";
  days: number | undefined;
  includeRoles: SnowflakeListValue | undefined;
}

export interface GetGuildPruneCountResponse {
  $type: "pylon.discord.v1.rest.GetGuildPruneCountResponse";
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
}

export interface GetGuildVoiceRegionsRequest {
  $type: "pylon.discord.v1.rest.GetGuildVoiceRegionsRequest";
}

export interface GetGuildVoiceRegionsResponse {
  $type: "pylon.discord.v1.rest.GetGuildVoiceRegionsResponse";
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: GetGuildVoiceRegionsResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: GetGuildInvitesResponse_Data };
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
  permissionOverwrites:
    | ModifyChannelRequest_ChannelPermissionOverwritesValue
    | undefined;
  parentId: SnowflakeValue | undefined;
  auditLogReason: string | undefined;
}

export interface ModifyChannelRequest_ChannelPermissionOverwritesValue {
  $type: "pylon.discord.v1.rest.ModifyChannelRequest.ChannelPermissionOverwritesValue";
  values: ChannelData_ChannelPermissionOverwriteData[];
}

export interface ModifyChannelResponse {
  $type: "pylon.discord.v1.rest.ModifyChannelResponse";
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: ModifyChannelResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: GetChannelMessagesResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: GetChannelMessageResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: CreateMessageResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: CrosspostMessageResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
}

export interface DeleteOwnReactionRequest {
  $type: "pylon.discord.v1.rest.DeleteOwnReactionRequest";
  channelId: string;
  messageId: string;
  emoji: string;
}

export interface DeleteOwnReactionResponse {
  $type: "pylon.discord.v1.rest.DeleteOwnReactionResponse";
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
}

export interface DeleteAllReactionsRequest {
  $type: "pylon.discord.v1.rest.DeleteAllReactionsRequest";
  channelId: string;
  messageId: string;
}

export interface DeleteAllReactionsResponse {
  $type: "pylon.discord.v1.rest.DeleteAllReactionsResponse";
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
}

export interface DeleteAllReactionsForEmojiRequest {
  $type: "pylon.discord.v1.rest.DeleteAllReactionsForEmojiRequest";
  channelId: string;
  messageId: string;
  emoji: string;
}

export interface DeleteAllReactionsForEmojiResponse {
  $type: "pylon.discord.v1.rest.DeleteAllReactionsForEmojiResponse";
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: EditMessageResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
}

export interface BulkDeleteMessagesRequest {
  $type: "pylon.discord.v1.rest.BulkDeleteMessagesRequest";
  channelId: string;
  messageIds: string[];
  auditLogReason: string | undefined;
}

export interface BulkDeleteMessagesResponse {
  $type: "pylon.discord.v1.rest.BulkDeleteMessagesResponse";
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
}

export interface GetChannelInvitesRequest {
  $type: "pylon.discord.v1.rest.GetChannelInvitesRequest";
  channelId: string;
}

export interface GetChannelInvitesResponse {
  $type: "pylon.discord.v1.rest.GetChannelInvitesResponse";
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: GetChannelInvitesResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: CreateChannelInviteResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
}

export interface FollowNewsChannelRequest {
  $type: "pylon.discord.v1.rest.FollowNewsChannelRequest";
  channelId: string;
  webhookChannelId: string;
}

export interface FollowNewsChannelResponse {
  $type: "pylon.discord.v1.rest.FollowNewsChannelResponse";
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: FollowNewsChannelResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
}

export interface GetPinnedMessagesRequest {
  $type: "pylon.discord.v1.rest.GetPinnedMessagesRequest";
  channelId: string;
}

export interface GetPinnedMessagesResponse {
  $type: "pylon.discord.v1.rest.GetPinnedMessagesResponse";
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: GetPinnedMessagesResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
}

export interface DeletePinnedChannelMessageRequest {
  $type: "pylon.discord.v1.rest.DeletePinnedChannelMessageRequest";
  channelId: string;
  messageId: string;
  auditLogReason: string | undefined;
}

export interface DeletePinnedChannelMessageResponse {
  $type: "pylon.discord.v1.rest.DeletePinnedChannelMessageResponse";
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
}

export interface ListGuildEmojisRequest {
  $type: "pylon.discord.v1.rest.ListGuildEmojisRequest";
}

export interface ListGuildEmojisResponse {
  $type: "pylon.discord.v1.rest.ListGuildEmojisResponse";
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: ListGuildEmojisResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: GetGuildEmojiResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: CreateGuildEmojiResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: ModifyGuildEmojiResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
}

export interface GetCurrentUserRequest {
  $type: "pylon.discord.v1.rest.GetCurrentUserRequest";
}

export interface GetCurrentUserResponse {
  $type: "pylon.discord.v1.rest.GetCurrentUserResponse";
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: GetCurrentUserResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: GetUserResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: ModifyCurrentUserResponse_Data };
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
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: Empty };
}

export interface CreateDmRequest {
  $type: "pylon.discord.v1.rest.CreateDmRequest";
  recipientId: string;
}

export interface CreateDmResponse {
  $type: "pylon.discord.v1.rest.CreateDmResponse";
  response?:
    | { $case: "error"; error: RestError }
    | { $case: "data"; data: CreateDmResponse_Data };
}

export interface CreateDmResponse_Data {
  $type: "pylon.discord.v1.rest.CreateDmResponse.Data";
  channel: ChannelData | undefined;
}

const baseRestError: object = { $type: "pylon.discord.v1.rest.RestError" };

export const RestError = {
  $type: "pylon.discord.v1.rest.RestError" as const,

  encode(
    message: RestError,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.errorType?.$case === "unknownError") {
      RestError_UnknownError.encode(
        message.errorType.unknownError,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.errorType?.$case === "validationError") {
      RestError_ValidationError.encode(
        message.errorType.validationError,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.errorType?.$case === "resourceNotFound") {
      RestError_ResourceNotFound.encode(
        message.errorType.resourceNotFound,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.errorType?.$case === "accessDenied") {
      RestError_AccessDenied.encode(
        message.errorType.accessDenied,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.errorType?.$case === "rateLimited") {
      RestError_RateLimited.encode(
        message.errorType.rateLimited,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRestError } as RestError;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.errorType = {
            $case: "unknownError",
            unknownError: RestError_UnknownError.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 2:
          message.errorType = {
            $case: "validationError",
            validationError: RestError_ValidationError.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 3:
          message.errorType = {
            $case: "resourceNotFound",
            resourceNotFound: RestError_ResourceNotFound.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 4:
          message.errorType = {
            $case: "accessDenied",
            accessDenied: RestError_AccessDenied.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 5:
          message.errorType = {
            $case: "rateLimited",
            rateLimited: RestError_RateLimited.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RestError {
    const message = { ...baseRestError } as RestError;
    if (object.unknownError !== undefined && object.unknownError !== null) {
      message.errorType = {
        $case: "unknownError",
        unknownError: RestError_UnknownError.fromJSON(object.unknownError),
      };
    }
    if (
      object.validationError !== undefined &&
      object.validationError !== null
    ) {
      message.errorType = {
        $case: "validationError",
        validationError: RestError_ValidationError.fromJSON(
          object.validationError
        ),
      };
    }
    if (
      object.resourceNotFound !== undefined &&
      object.resourceNotFound !== null
    ) {
      message.errorType = {
        $case: "resourceNotFound",
        resourceNotFound: RestError_ResourceNotFound.fromJSON(
          object.resourceNotFound
        ),
      };
    }
    if (object.accessDenied !== undefined && object.accessDenied !== null) {
      message.errorType = {
        $case: "accessDenied",
        accessDenied: RestError_AccessDenied.fromJSON(object.accessDenied),
      };
    }
    if (object.rateLimited !== undefined && object.rateLimited !== null) {
      message.errorType = {
        $case: "rateLimited",
        rateLimited: RestError_RateLimited.fromJSON(object.rateLimited),
      };
    }
    return message;
  },

  toJSON(message: RestError): unknown {
    const obj: any = {};
    message.errorType?.$case === "unknownError" &&
      (obj.unknownError = message.errorType?.unknownError
        ? RestError_UnknownError.toJSON(message.errorType?.unknownError)
        : undefined);
    message.errorType?.$case === "validationError" &&
      (obj.validationError = message.errorType?.validationError
        ? RestError_ValidationError.toJSON(message.errorType?.validationError)
        : undefined);
    message.errorType?.$case === "resourceNotFound" &&
      (obj.resourceNotFound = message.errorType?.resourceNotFound
        ? RestError_ResourceNotFound.toJSON(message.errorType?.resourceNotFound)
        : undefined);
    message.errorType?.$case === "accessDenied" &&
      (obj.accessDenied = message.errorType?.accessDenied
        ? RestError_AccessDenied.toJSON(message.errorType?.accessDenied)
        : undefined);
    message.errorType?.$case === "rateLimited" &&
      (obj.rateLimited = message.errorType?.rateLimited
        ? RestError_RateLimited.toJSON(message.errorType?.rateLimited)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RestError>): RestError {
    const message = { ...baseRestError } as RestError;
    if (
      object.errorType?.$case === "unknownError" &&
      object.errorType?.unknownError !== undefined &&
      object.errorType?.unknownError !== null
    ) {
      message.errorType = {
        $case: "unknownError",
        unknownError: RestError_UnknownError.fromPartial(
          object.errorType.unknownError
        ),
      };
    }
    if (
      object.errorType?.$case === "validationError" &&
      object.errorType?.validationError !== undefined &&
      object.errorType?.validationError !== null
    ) {
      message.errorType = {
        $case: "validationError",
        validationError: RestError_ValidationError.fromPartial(
          object.errorType.validationError
        ),
      };
    }
    if (
      object.errorType?.$case === "resourceNotFound" &&
      object.errorType?.resourceNotFound !== undefined &&
      object.errorType?.resourceNotFound !== null
    ) {
      message.errorType = {
        $case: "resourceNotFound",
        resourceNotFound: RestError_ResourceNotFound.fromPartial(
          object.errorType.resourceNotFound
        ),
      };
    }
    if (
      object.errorType?.$case === "accessDenied" &&
      object.errorType?.accessDenied !== undefined &&
      object.errorType?.accessDenied !== null
    ) {
      message.errorType = {
        $case: "accessDenied",
        accessDenied: RestError_AccessDenied.fromPartial(
          object.errorType.accessDenied
        ),
      };
    }
    if (
      object.errorType?.$case === "rateLimited" &&
      object.errorType?.rateLimited !== undefined &&
      object.errorType?.rateLimited !== null
    ) {
      message.errorType = {
        $case: "rateLimited",
        rateLimited: RestError_RateLimited.fromPartial(
          object.errorType.rateLimited
        ),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(RestError.$type, RestError);

const baseRestError_UnknownError: object = {
  $type: "pylon.discord.v1.rest.RestError.UnknownError",
  httpStatus: 0,
  code: 0,
  message: "",
};

export const RestError_UnknownError = {
  $type: "pylon.discord.v1.rest.RestError.UnknownError" as const,

  encode(
    message: RestError_UnknownError,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.httpStatus !== 0) {
      writer.uint32(8).uint32(message.httpStatus);
    }
    if (message.code !== 0) {
      writer.uint32(16).uint32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RestError_UnknownError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRestError_UnknownError } as RestError_UnknownError;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.httpStatus = reader.uint32();
          break;
        case 2:
          message.code = reader.uint32();
          break;
        case 3:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RestError_UnknownError {
    const message = { ...baseRestError_UnknownError } as RestError_UnknownError;
    if (object.httpStatus !== undefined && object.httpStatus !== null) {
      message.httpStatus = Number(object.httpStatus);
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = Number(object.code);
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    }
    return message;
  },

  toJSON(message: RestError_UnknownError): unknown {
    const obj: any = {};
    message.httpStatus !== undefined && (obj.httpStatus = message.httpStatus);
    message.code !== undefined && (obj.code = message.code);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RestError_UnknownError>
  ): RestError_UnknownError {
    const message = { ...baseRestError_UnknownError } as RestError_UnknownError;
    if (object.httpStatus !== undefined && object.httpStatus !== null) {
      message.httpStatus = object.httpStatus;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
};

messageTypeRegistry.set(RestError_UnknownError.$type, RestError_UnknownError);

const baseRestError_ValidationError: object = {
  $type: "pylon.discord.v1.rest.RestError.ValidationError",
  message: "",
};

export const RestError_ValidationError = {
  $type: "pylon.discord.v1.rest.RestError.ValidationError" as const,

  encode(
    message: RestError_ValidationError,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    for (const v of message.fields) {
      RestError_ValidationError_Field.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RestError_ValidationError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRestError_ValidationError,
    } as RestError_ValidationError;
    message.fields = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.fields.push(
            RestError_ValidationError_Field.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RestError_ValidationError {
    const message = {
      ...baseRestError_ValidationError,
    } as RestError_ValidationError;
    message.fields = [];
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    }
    if (object.fields !== undefined && object.fields !== null) {
      for (const e of object.fields) {
        message.fields.push(RestError_ValidationError_Field.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: RestError_ValidationError): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    if (message.fields) {
      obj.fields = message.fields.map((e) =>
        e ? RestError_ValidationError_Field.toJSON(e) : undefined
      );
    } else {
      obj.fields = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<RestError_ValidationError>
  ): RestError_ValidationError {
    const message = {
      ...baseRestError_ValidationError,
    } as RestError_ValidationError;
    message.fields = [];
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    if (object.fields !== undefined && object.fields !== null) {
      for (const e of object.fields) {
        message.fields.push(RestError_ValidationError_Field.fromPartial(e));
      }
    }
    return message;
  },
};

messageTypeRegistry.set(
  RestError_ValidationError.$type,
  RestError_ValidationError
);

const baseRestError_ValidationError_Field: object = {
  $type: "pylon.discord.v1.rest.RestError.ValidationError.Field",
  path: "",
  code: "",
  message: "",
};

export const RestError_ValidationError_Field = {
  $type: "pylon.discord.v1.rest.RestError.ValidationError.Field" as const,

  encode(
    message: RestError_ValidationError_Field,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RestError_ValidationError_Field {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRestError_ValidationError_Field,
    } as RestError_ValidationError_Field;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.code = reader.string();
          break;
        case 3:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RestError_ValidationError_Field {
    const message = {
      ...baseRestError_ValidationError_Field,
    } as RestError_ValidationError_Field;
    if (object.path !== undefined && object.path !== null) {
      message.path = String(object.path);
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    }
    return message;
  },

  toJSON(message: RestError_ValidationError_Field): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.code !== undefined && (obj.code = message.code);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RestError_ValidationError_Field>
  ): RestError_ValidationError_Field {
    const message = {
      ...baseRestError_ValidationError_Field,
    } as RestError_ValidationError_Field;
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
};

messageTypeRegistry.set(
  RestError_ValidationError_Field.$type,
  RestError_ValidationError_Field
);

const baseRestError_ResourceNotFound: object = {
  $type: "pylon.discord.v1.rest.RestError.ResourceNotFound",
  code: 0,
  message: "",
};

export const RestError_ResourceNotFound = {
  $type: "pylon.discord.v1.rest.RestError.ResourceNotFound" as const,

  encode(
    message: RestError_ResourceNotFound,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RestError_ResourceNotFound {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRestError_ResourceNotFound,
    } as RestError_ResourceNotFound;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RestError_ResourceNotFound {
    const message = {
      ...baseRestError_ResourceNotFound,
    } as RestError_ResourceNotFound;
    if (object.code !== undefined && object.code !== null) {
      message.code = Number(object.code);
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    }
    return message;
  },

  toJSON(message: RestError_ResourceNotFound): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RestError_ResourceNotFound>
  ): RestError_ResourceNotFound {
    const message = {
      ...baseRestError_ResourceNotFound,
    } as RestError_ResourceNotFound;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
};

messageTypeRegistry.set(
  RestError_ResourceNotFound.$type,
  RestError_ResourceNotFound
);

const baseRestError_AccessDenied: object = {
  $type: "pylon.discord.v1.rest.RestError.AccessDenied",
  code: 0,
  message: "",
};

export const RestError_AccessDenied = {
  $type: "pylon.discord.v1.rest.RestError.AccessDenied" as const,

  encode(
    message: RestError_AccessDenied,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RestError_AccessDenied {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRestError_AccessDenied } as RestError_AccessDenied;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RestError_AccessDenied {
    const message = { ...baseRestError_AccessDenied } as RestError_AccessDenied;
    if (object.code !== undefined && object.code !== null) {
      message.code = Number(object.code);
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    }
    return message;
  },

  toJSON(message: RestError_AccessDenied): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RestError_AccessDenied>
  ): RestError_AccessDenied {
    const message = { ...baseRestError_AccessDenied } as RestError_AccessDenied;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
};

messageTypeRegistry.set(RestError_AccessDenied.$type, RestError_AccessDenied);

const baseRestError_RateLimited: object = {
  $type: "pylon.discord.v1.rest.RestError.RateLimited",
  global: false,
  retryAt: 0,
};

export const RestError_RateLimited = {
  $type: "pylon.discord.v1.rest.RestError.RateLimited" as const,

  encode(
    message: RestError_RateLimited,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.global === true) {
      writer.uint32(8).bool(message.global);
    }
    if (message.retryAt !== 0) {
      writer.uint32(16).uint32(message.retryAt);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RestError_RateLimited {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRestError_RateLimited } as RestError_RateLimited;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.global = reader.bool();
          break;
        case 2:
          message.retryAt = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RestError_RateLimited {
    const message = { ...baseRestError_RateLimited } as RestError_RateLimited;
    if (object.global !== undefined && object.global !== null) {
      message.global = Boolean(object.global);
    }
    if (object.retryAt !== undefined && object.retryAt !== null) {
      message.retryAt = Number(object.retryAt);
    }
    return message;
  },

  toJSON(message: RestError_RateLimited): unknown {
    const obj: any = {};
    message.global !== undefined && (obj.global = message.global);
    message.retryAt !== undefined && (obj.retryAt = message.retryAt);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RestError_RateLimited>
  ): RestError_RateLimited {
    const message = { ...baseRestError_RateLimited } as RestError_RateLimited;
    if (object.global !== undefined && object.global !== null) {
      message.global = object.global;
    }
    if (object.retryAt !== undefined && object.retryAt !== null) {
      message.retryAt = object.retryAt;
    }
    return message;
  },
};

messageTypeRegistry.set(RestError_RateLimited.$type, RestError_RateLimited);

const baseModifyGuildRequest: object = {
  $type: "pylon.discord.v1.rest.ModifyGuildRequest",
};

export const ModifyGuildRequest = {
  $type: "pylon.discord.v1.rest.ModifyGuildRequest" as const,

  encode(
    message: ModifyGuildRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.name! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.region !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.region! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.verificationLevel !== undefined) {
      UInt32Value.encode(
        {
          $type: "google.protobuf.UInt32Value",
          value: message.verificationLevel!,
        },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.defaultMessageNotifications !== undefined) {
      UInt32Value.encode(
        {
          $type: "google.protobuf.UInt32Value",
          value: message.defaultMessageNotifications!,
        },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.explicitContentFilter !== undefined) {
      UInt32Value.encode(
        {
          $type: "google.protobuf.UInt32Value",
          value: message.explicitContentFilter!,
        },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.afkChannelId !== undefined) {
      SnowflakeValue.encode(
        message.afkChannelId,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.afkTimeout !== undefined) {
      UInt32Value.encode(
        { $type: "google.protobuf.UInt32Value", value: message.afkTimeout! },
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.icon !== undefined) {
      BytesValue.encode(
        { $type: "google.protobuf.BytesValue", value: message.icon! },
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.ownerId !== undefined) {
      SnowflakeValue.encode(message.ownerId, writer.uint32(74).fork()).ldelim();
    }
    if (message.splash !== undefined) {
      BytesValue.encode(
        { $type: "google.protobuf.BytesValue", value: message.splash! },
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.banner !== undefined) {
      BytesValue.encode(
        { $type: "google.protobuf.BytesValue", value: message.banner! },
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.systemChannelId !== undefined) {
      SnowflakeValue.encode(
        message.systemChannelId,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.rulesChannelId !== undefined) {
      SnowflakeValue.encode(
        message.rulesChannelId,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.publicUpdatesChannelId !== undefined) {
      SnowflakeValue.encode(
        message.publicUpdatesChannelId,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.preferredLocale !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.preferredLocale!,
        },
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModifyGuildRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseModifyGuildRequest } as ModifyGuildRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 2:
          message.region = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.verificationLevel = UInt32Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.defaultMessageNotifications = UInt32Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 5:
          message.explicitContentFilter = UInt32Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.afkChannelId = SnowflakeValue.decode(reader, reader.uint32());
          break;
        case 7:
          message.afkTimeout = UInt32Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 8:
          message.icon = BytesValue.decode(reader, reader.uint32()).value;
          break;
        case 9:
          message.ownerId = SnowflakeValue.decode(reader, reader.uint32());
          break;
        case 10:
          message.splash = BytesValue.decode(reader, reader.uint32()).value;
          break;
        case 11:
          message.banner = BytesValue.decode(reader, reader.uint32()).value;
          break;
        case 12:
          message.systemChannelId = SnowflakeValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.rulesChannelId = SnowflakeValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.publicUpdatesChannelId = SnowflakeValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.preferredLocale = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyGuildRequest {
    const message = { ...baseModifyGuildRequest } as ModifyGuildRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    }
    if (object.region !== undefined && object.region !== null) {
      message.region = String(object.region);
    }
    if (
      object.verificationLevel !== undefined &&
      object.verificationLevel !== null
    ) {
      message.verificationLevel = Number(object.verificationLevel);
    }
    if (
      object.defaultMessageNotifications !== undefined &&
      object.defaultMessageNotifications !== null
    ) {
      message.defaultMessageNotifications = Number(
        object.defaultMessageNotifications
      );
    }
    if (
      object.explicitContentFilter !== undefined &&
      object.explicitContentFilter !== null
    ) {
      message.explicitContentFilter = Number(object.explicitContentFilter);
    }
    if (object.afkChannelId !== undefined && object.afkChannelId !== null) {
      message.afkChannelId = SnowflakeValue.fromJSON(object.afkChannelId);
    }
    if (object.afkTimeout !== undefined && object.afkTimeout !== null) {
      message.afkTimeout = Number(object.afkTimeout);
    }
    if (object.icon !== undefined && object.icon !== null) {
      message.icon = new Uint8Array(object.icon);
    }
    if (object.ownerId !== undefined && object.ownerId !== null) {
      message.ownerId = SnowflakeValue.fromJSON(object.ownerId);
    }
    if (object.splash !== undefined && object.splash !== null) {
      message.splash = new Uint8Array(object.splash);
    }
    if (object.banner !== undefined && object.banner !== null) {
      message.banner = new Uint8Array(object.banner);
    }
    if (
      object.systemChannelId !== undefined &&
      object.systemChannelId !== null
    ) {
      message.systemChannelId = SnowflakeValue.fromJSON(object.systemChannelId);
    }
    if (object.rulesChannelId !== undefined && object.rulesChannelId !== null) {
      message.rulesChannelId = SnowflakeValue.fromJSON(object.rulesChannelId);
    }
    if (
      object.publicUpdatesChannelId !== undefined &&
      object.publicUpdatesChannelId !== null
    ) {
      message.publicUpdatesChannelId = SnowflakeValue.fromJSON(
        object.publicUpdatesChannelId
      );
    }
    if (
      object.preferredLocale !== undefined &&
      object.preferredLocale !== null
    ) {
      message.preferredLocale = String(object.preferredLocale);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: ModifyGuildRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.region !== undefined && (obj.region = message.region);
    message.verificationLevel !== undefined &&
      (obj.verificationLevel = message.verificationLevel);
    message.defaultMessageNotifications !== undefined &&
      (obj.defaultMessageNotifications = message.defaultMessageNotifications);
    message.explicitContentFilter !== undefined &&
      (obj.explicitContentFilter = message.explicitContentFilter);
    message.afkChannelId !== undefined &&
      (obj.afkChannelId = message.afkChannelId
        ? SnowflakeValue.toJSON(message.afkChannelId)
        : undefined);
    message.afkTimeout !== undefined && (obj.afkTimeout = message.afkTimeout);
    message.icon !== undefined && (obj.icon = message.icon);
    message.ownerId !== undefined &&
      (obj.ownerId = message.ownerId
        ? SnowflakeValue.toJSON(message.ownerId)
        : undefined);
    message.splash !== undefined && (obj.splash = message.splash);
    message.banner !== undefined && (obj.banner = message.banner);
    message.systemChannelId !== undefined &&
      (obj.systemChannelId = message.systemChannelId
        ? SnowflakeValue.toJSON(message.systemChannelId)
        : undefined);
    message.rulesChannelId !== undefined &&
      (obj.rulesChannelId = message.rulesChannelId
        ? SnowflakeValue.toJSON(message.rulesChannelId)
        : undefined);
    message.publicUpdatesChannelId !== undefined &&
      (obj.publicUpdatesChannelId = message.publicUpdatesChannelId
        ? SnowflakeValue.toJSON(message.publicUpdatesChannelId)
        : undefined);
    message.preferredLocale !== undefined &&
      (obj.preferredLocale = message.preferredLocale);
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(object: DeepPartial<ModifyGuildRequest>): ModifyGuildRequest {
    const message = { ...baseModifyGuildRequest } as ModifyGuildRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.region !== undefined && object.region !== null) {
      message.region = object.region;
    }
    if (
      object.verificationLevel !== undefined &&
      object.verificationLevel !== null
    ) {
      message.verificationLevel = object.verificationLevel;
    }
    if (
      object.defaultMessageNotifications !== undefined &&
      object.defaultMessageNotifications !== null
    ) {
      message.defaultMessageNotifications = object.defaultMessageNotifications;
    }
    if (
      object.explicitContentFilter !== undefined &&
      object.explicitContentFilter !== null
    ) {
      message.explicitContentFilter = object.explicitContentFilter;
    }
    if (object.afkChannelId !== undefined && object.afkChannelId !== null) {
      message.afkChannelId = SnowflakeValue.fromPartial(object.afkChannelId);
    }
    if (object.afkTimeout !== undefined && object.afkTimeout !== null) {
      message.afkTimeout = object.afkTimeout;
    }
    if (object.icon !== undefined && object.icon !== null) {
      message.icon = object.icon;
    }
    if (object.ownerId !== undefined && object.ownerId !== null) {
      message.ownerId = SnowflakeValue.fromPartial(object.ownerId);
    }
    if (object.splash !== undefined && object.splash !== null) {
      message.splash = object.splash;
    }
    if (object.banner !== undefined && object.banner !== null) {
      message.banner = object.banner;
    }
    if (
      object.systemChannelId !== undefined &&
      object.systemChannelId !== null
    ) {
      message.systemChannelId = SnowflakeValue.fromPartial(
        object.systemChannelId
      );
    }
    if (object.rulesChannelId !== undefined && object.rulesChannelId !== null) {
      message.rulesChannelId = SnowflakeValue.fromPartial(
        object.rulesChannelId
      );
    }
    if (
      object.publicUpdatesChannelId !== undefined &&
      object.publicUpdatesChannelId !== null
    ) {
      message.publicUpdatesChannelId = SnowflakeValue.fromPartial(
        object.publicUpdatesChannelId
      );
    }
    if (
      object.preferredLocale !== undefined &&
      object.preferredLocale !== null
    ) {
      message.preferredLocale = object.preferredLocale;
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(ModifyGuildRequest.$type, ModifyGuildRequest);

const baseModifyGuildResponse: object = {
  $type: "pylon.discord.v1.rest.ModifyGuildResponse",
};

export const ModifyGuildResponse = {
  $type: "pylon.discord.v1.rest.ModifyGuildResponse" as const,

  encode(
    message: ModifyGuildResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      ModifyGuildResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModifyGuildResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseModifyGuildResponse } as ModifyGuildResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: ModifyGuildResponse_Data.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyGuildResponse {
    const message = { ...baseModifyGuildResponse } as ModifyGuildResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: ModifyGuildResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: ModifyGuildResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? ModifyGuildResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ModifyGuildResponse>): ModifyGuildResponse {
    const message = { ...baseModifyGuildResponse } as ModifyGuildResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: ModifyGuildResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(ModifyGuildResponse.$type, ModifyGuildResponse);

const baseModifyGuildResponse_Data: object = {
  $type: "pylon.discord.v1.rest.ModifyGuildResponse.Data",
};

export const ModifyGuildResponse_Data = {
  $type: "pylon.discord.v1.rest.ModifyGuildResponse.Data" as const,

  encode(
    message: ModifyGuildResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.guild !== undefined) {
      GuildData.encode(message.guild, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyGuildResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyGuildResponse_Data,
    } as ModifyGuildResponse_Data;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guild = GuildData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyGuildResponse_Data {
    const message = {
      ...baseModifyGuildResponse_Data,
    } as ModifyGuildResponse_Data;
    if (object.guild !== undefined && object.guild !== null) {
      message.guild = GuildData.fromJSON(object.guild);
    }
    return message;
  },

  toJSON(message: ModifyGuildResponse_Data): unknown {
    const obj: any = {};
    message.guild !== undefined &&
      (obj.guild = message.guild ? GuildData.toJSON(message.guild) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyGuildResponse_Data>
  ): ModifyGuildResponse_Data {
    const message = {
      ...baseModifyGuildResponse_Data,
    } as ModifyGuildResponse_Data;
    if (object.guild !== undefined && object.guild !== null) {
      message.guild = GuildData.fromPartial(object.guild);
    }
    return message;
  },
};

messageTypeRegistry.set(
  ModifyGuildResponse_Data.$type,
  ModifyGuildResponse_Data
);

const baseCreateGuildChannelRequest: object = {
  $type: "pylon.discord.v1.rest.CreateGuildChannelRequest",
  name: "",
  type: 0,
};

export const CreateGuildChannelRequest = {
  $type: "pylon.discord.v1.rest.CreateGuildChannelRequest" as const,

  encode(
    message: CreateGuildChannelRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.topic !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.topic! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.bitrate !== undefined) {
      UInt32Value.encode(
        { $type: "google.protobuf.UInt32Value", value: message.bitrate! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.userLimit !== undefined) {
      UInt32Value.encode(
        { $type: "google.protobuf.UInt32Value", value: message.userLimit! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.rateLimitPerUser !== undefined) {
      UInt32Value.encode(
        {
          $type: "google.protobuf.UInt32Value",
          value: message.rateLimitPerUser!,
        },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.position !== undefined) {
      UInt32Value.encode(
        { $type: "google.protobuf.UInt32Value", value: message.position! },
        writer.uint32(58).fork()
      ).ldelim();
    }
    for (const v of message.permissionOverwrites) {
      ChannelData_ChannelPermissionOverwriteData.encode(
        v!,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.parentId !== undefined) {
      SnowflakeValue.encode(
        message.parentId,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.nsfw !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.nsfw! },
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateGuildChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateGuildChannelRequest,
    } as CreateGuildChannelRequest;
    message.permissionOverwrites = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.topic = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.bitrate = UInt32Value.decode(reader, reader.uint32()).value;
          break;
        case 5:
          message.userLimit = UInt32Value.decode(reader, reader.uint32()).value;
          break;
        case 6:
          message.rateLimitPerUser = UInt32Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 7:
          message.position = UInt32Value.decode(reader, reader.uint32()).value;
          break;
        case 8:
          message.permissionOverwrites.push(
            ChannelData_ChannelPermissionOverwriteData.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        case 9:
          message.parentId = SnowflakeValue.decode(reader, reader.uint32());
          break;
        case 10:
          message.nsfw = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateGuildChannelRequest {
    const message = {
      ...baseCreateGuildChannelRequest,
    } as CreateGuildChannelRequest;
    message.permissionOverwrites = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = channelData_ChannelTypeFromJSON(object.type);
    }
    if (object.topic !== undefined && object.topic !== null) {
      message.topic = String(object.topic);
    }
    if (object.bitrate !== undefined && object.bitrate !== null) {
      message.bitrate = Number(object.bitrate);
    }
    if (object.userLimit !== undefined && object.userLimit !== null) {
      message.userLimit = Number(object.userLimit);
    }
    if (
      object.rateLimitPerUser !== undefined &&
      object.rateLimitPerUser !== null
    ) {
      message.rateLimitPerUser = Number(object.rateLimitPerUser);
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = Number(object.position);
    }
    if (
      object.permissionOverwrites !== undefined &&
      object.permissionOverwrites !== null
    ) {
      for (const e of object.permissionOverwrites) {
        message.permissionOverwrites.push(
          ChannelData_ChannelPermissionOverwriteData.fromJSON(e)
        );
      }
    }
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = SnowflakeValue.fromJSON(object.parentId);
    }
    if (object.nsfw !== undefined && object.nsfw !== null) {
      message.nsfw = Boolean(object.nsfw);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: CreateGuildChannelRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined &&
      (obj.type = channelData_ChannelTypeToJSON(message.type));
    message.topic !== undefined && (obj.topic = message.topic);
    message.bitrate !== undefined && (obj.bitrate = message.bitrate);
    message.userLimit !== undefined && (obj.userLimit = message.userLimit);
    message.rateLimitPerUser !== undefined &&
      (obj.rateLimitPerUser = message.rateLimitPerUser);
    message.position !== undefined && (obj.position = message.position);
    if (message.permissionOverwrites) {
      obj.permissionOverwrites = message.permissionOverwrites.map((e) =>
        e ? ChannelData_ChannelPermissionOverwriteData.toJSON(e) : undefined
      );
    } else {
      obj.permissionOverwrites = [];
    }
    message.parentId !== undefined &&
      (obj.parentId = message.parentId
        ? SnowflakeValue.toJSON(message.parentId)
        : undefined);
    message.nsfw !== undefined && (obj.nsfw = message.nsfw);
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateGuildChannelRequest>
  ): CreateGuildChannelRequest {
    const message = {
      ...baseCreateGuildChannelRequest,
    } as CreateGuildChannelRequest;
    message.permissionOverwrites = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.topic !== undefined && object.topic !== null) {
      message.topic = object.topic;
    }
    if (object.bitrate !== undefined && object.bitrate !== null) {
      message.bitrate = object.bitrate;
    }
    if (object.userLimit !== undefined && object.userLimit !== null) {
      message.userLimit = object.userLimit;
    }
    if (
      object.rateLimitPerUser !== undefined &&
      object.rateLimitPerUser !== null
    ) {
      message.rateLimitPerUser = object.rateLimitPerUser;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = object.position;
    }
    if (
      object.permissionOverwrites !== undefined &&
      object.permissionOverwrites !== null
    ) {
      for (const e of object.permissionOverwrites) {
        message.permissionOverwrites.push(
          ChannelData_ChannelPermissionOverwriteData.fromPartial(e)
        );
      }
    }
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = SnowflakeValue.fromPartial(object.parentId);
    }
    if (object.nsfw !== undefined && object.nsfw !== null) {
      message.nsfw = object.nsfw;
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(
  CreateGuildChannelRequest.$type,
  CreateGuildChannelRequest
);

const baseCreateGuildChannelResponse: object = {
  $type: "pylon.discord.v1.rest.CreateGuildChannelResponse",
};

export const CreateGuildChannelResponse = {
  $type: "pylon.discord.v1.rest.CreateGuildChannelResponse" as const,

  encode(
    message: CreateGuildChannelResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      CreateGuildChannelResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateGuildChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateGuildChannelResponse,
    } as CreateGuildChannelResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: CreateGuildChannelResponse_Data.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateGuildChannelResponse {
    const message = {
      ...baseCreateGuildChannelResponse,
    } as CreateGuildChannelResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: CreateGuildChannelResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: CreateGuildChannelResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? CreateGuildChannelResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateGuildChannelResponse>
  ): CreateGuildChannelResponse {
    const message = {
      ...baseCreateGuildChannelResponse,
    } as CreateGuildChannelResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: CreateGuildChannelResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  CreateGuildChannelResponse.$type,
  CreateGuildChannelResponse
);

const baseCreateGuildChannelResponse_Data: object = {
  $type: "pylon.discord.v1.rest.CreateGuildChannelResponse.Data",
};

export const CreateGuildChannelResponse_Data = {
  $type: "pylon.discord.v1.rest.CreateGuildChannelResponse.Data" as const,

  encode(
    message: CreateGuildChannelResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channel !== undefined) {
      ChannelData.encode(message.channel, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateGuildChannelResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateGuildChannelResponse_Data,
    } as CreateGuildChannelResponse_Data;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel = ChannelData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateGuildChannelResponse_Data {
    const message = {
      ...baseCreateGuildChannelResponse_Data,
    } as CreateGuildChannelResponse_Data;
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = ChannelData.fromJSON(object.channel);
    }
    return message;
  },

  toJSON(message: CreateGuildChannelResponse_Data): unknown {
    const obj: any = {};
    message.channel !== undefined &&
      (obj.channel = message.channel
        ? ChannelData.toJSON(message.channel)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateGuildChannelResponse_Data>
  ): CreateGuildChannelResponse_Data {
    const message = {
      ...baseCreateGuildChannelResponse_Data,
    } as CreateGuildChannelResponse_Data;
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = ChannelData.fromPartial(object.channel);
    }
    return message;
  },
};

messageTypeRegistry.set(
  CreateGuildChannelResponse_Data.$type,
  CreateGuildChannelResponse_Data
);

const baseModifyGuildChannelPositionsRequest: object = {
  $type: "pylon.discord.v1.rest.ModifyGuildChannelPositionsRequest",
};

export const ModifyGuildChannelPositionsRequest = {
  $type: "pylon.discord.v1.rest.ModifyGuildChannelPositionsRequest" as const,

  encode(
    message: ModifyGuildChannelPositionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.channelPositions) {
      ModifyGuildChannelPositionsRequest_ChannelPosition.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyGuildChannelPositionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyGuildChannelPositionsRequest,
    } as ModifyGuildChannelPositionsRequest;
    message.channelPositions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelPositions.push(
            ModifyGuildChannelPositionsRequest_ChannelPosition.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyGuildChannelPositionsRequest {
    const message = {
      ...baseModifyGuildChannelPositionsRequest,
    } as ModifyGuildChannelPositionsRequest;
    message.channelPositions = [];
    if (
      object.channelPositions !== undefined &&
      object.channelPositions !== null
    ) {
      for (const e of object.channelPositions) {
        message.channelPositions.push(
          ModifyGuildChannelPositionsRequest_ChannelPosition.fromJSON(e)
        );
      }
    }
    return message;
  },

  toJSON(message: ModifyGuildChannelPositionsRequest): unknown {
    const obj: any = {};
    if (message.channelPositions) {
      obj.channelPositions = message.channelPositions.map((e) =>
        e
          ? ModifyGuildChannelPositionsRequest_ChannelPosition.toJSON(e)
          : undefined
      );
    } else {
      obj.channelPositions = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyGuildChannelPositionsRequest>
  ): ModifyGuildChannelPositionsRequest {
    const message = {
      ...baseModifyGuildChannelPositionsRequest,
    } as ModifyGuildChannelPositionsRequest;
    message.channelPositions = [];
    if (
      object.channelPositions !== undefined &&
      object.channelPositions !== null
    ) {
      for (const e of object.channelPositions) {
        message.channelPositions.push(
          ModifyGuildChannelPositionsRequest_ChannelPosition.fromPartial(e)
        );
      }
    }
    return message;
  },
};

messageTypeRegistry.set(
  ModifyGuildChannelPositionsRequest.$type,
  ModifyGuildChannelPositionsRequest
);

const baseModifyGuildChannelPositionsRequest_ChannelPosition: object = {
  $type:
    "pylon.discord.v1.rest.ModifyGuildChannelPositionsRequest.ChannelPosition",
  id: "0",
  position: 0,
};

export const ModifyGuildChannelPositionsRequest_ChannelPosition = {
  $type: "pylon.discord.v1.rest.ModifyGuildChannelPositionsRequest.ChannelPosition" as const,

  encode(
    message: ModifyGuildChannelPositionsRequest_ChannelPosition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(9).fixed64(message.id);
    }
    if (message.position !== 0) {
      writer.uint32(16).uint32(message.position);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyGuildChannelPositionsRequest_ChannelPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyGuildChannelPositionsRequest_ChannelPosition,
    } as ModifyGuildChannelPositionsRequest_ChannelPosition;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.position = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyGuildChannelPositionsRequest_ChannelPosition {
    const message = {
      ...baseModifyGuildChannelPositionsRequest_ChannelPosition,
    } as ModifyGuildChannelPositionsRequest_ChannelPosition;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = Number(object.position);
    }
    return message;
  },

  toJSON(message: ModifyGuildChannelPositionsRequest_ChannelPosition): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.position !== undefined && (obj.position = message.position);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyGuildChannelPositionsRequest_ChannelPosition>
  ): ModifyGuildChannelPositionsRequest_ChannelPosition {
    const message = {
      ...baseModifyGuildChannelPositionsRequest_ChannelPosition,
    } as ModifyGuildChannelPositionsRequest_ChannelPosition;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = object.position;
    }
    return message;
  },
};

messageTypeRegistry.set(
  ModifyGuildChannelPositionsRequest_ChannelPosition.$type,
  ModifyGuildChannelPositionsRequest_ChannelPosition
);

const baseModifyGuildChannelPositionsResponse: object = {
  $type: "pylon.discord.v1.rest.ModifyGuildChannelPositionsResponse",
};

export const ModifyGuildChannelPositionsResponse = {
  $type: "pylon.discord.v1.rest.ModifyGuildChannelPositionsResponse" as const,

  encode(
    message: ModifyGuildChannelPositionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyGuildChannelPositionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyGuildChannelPositionsResponse,
    } as ModifyGuildChannelPositionsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyGuildChannelPositionsResponse {
    const message = {
      ...baseModifyGuildChannelPositionsResponse,
    } as ModifyGuildChannelPositionsResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: ModifyGuildChannelPositionsResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyGuildChannelPositionsResponse>
  ): ModifyGuildChannelPositionsResponse {
    const message = {
      ...baseModifyGuildChannelPositionsResponse,
    } as ModifyGuildChannelPositionsResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  ModifyGuildChannelPositionsResponse.$type,
  ModifyGuildChannelPositionsResponse
);

const baseAddGuildMemberRequest: object = {
  $type: "pylon.discord.v1.rest.AddGuildMemberRequest",
  userId: "0",
  accessToken: "",
};

export const AddGuildMemberRequest = {
  $type: "pylon.discord.v1.rest.AddGuildMemberRequest" as const,

  encode(
    message: AddGuildMemberRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== "0") {
      writer.uint32(9).fixed64(message.userId);
    }
    if (message.accessToken !== "") {
      writer.uint32(18).string(message.accessToken);
    }
    if (message.nick !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.nick! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.roles !== undefined) {
      SnowflakeListValue.encode(
        message.roles,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.mute !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.mute! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.deaf !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.deaf! },
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddGuildMemberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddGuildMemberRequest } as AddGuildMemberRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.accessToken = reader.string();
          break;
        case 3:
          message.nick = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.roles = SnowflakeListValue.decode(reader, reader.uint32());
          break;
        case 5:
          message.mute = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 6:
          message.deaf = BoolValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddGuildMemberRequest {
    const message = { ...baseAddGuildMemberRequest } as AddGuildMemberRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    }
    if (object.accessToken !== undefined && object.accessToken !== null) {
      message.accessToken = String(object.accessToken);
    }
    if (object.nick !== undefined && object.nick !== null) {
      message.nick = String(object.nick);
    }
    if (object.roles !== undefined && object.roles !== null) {
      message.roles = SnowflakeListValue.fromJSON(object.roles);
    }
    if (object.mute !== undefined && object.mute !== null) {
      message.mute = Boolean(object.mute);
    }
    if (object.deaf !== undefined && object.deaf !== null) {
      message.deaf = Boolean(object.deaf);
    }
    return message;
  },

  toJSON(message: AddGuildMemberRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.accessToken !== undefined &&
      (obj.accessToken = message.accessToken);
    message.nick !== undefined && (obj.nick = message.nick);
    message.roles !== undefined &&
      (obj.roles = message.roles
        ? SnowflakeListValue.toJSON(message.roles)
        : undefined);
    message.mute !== undefined && (obj.mute = message.mute);
    message.deaf !== undefined && (obj.deaf = message.deaf);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AddGuildMemberRequest>
  ): AddGuildMemberRequest {
    const message = { ...baseAddGuildMemberRequest } as AddGuildMemberRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    }
    if (object.accessToken !== undefined && object.accessToken !== null) {
      message.accessToken = object.accessToken;
    }
    if (object.nick !== undefined && object.nick !== null) {
      message.nick = object.nick;
    }
    if (object.roles !== undefined && object.roles !== null) {
      message.roles = SnowflakeListValue.fromPartial(object.roles);
    }
    if (object.mute !== undefined && object.mute !== null) {
      message.mute = object.mute;
    }
    if (object.deaf !== undefined && object.deaf !== null) {
      message.deaf = object.deaf;
    }
    return message;
  },
};

messageTypeRegistry.set(AddGuildMemberRequest.$type, AddGuildMemberRequest);

const baseAddGuildMemberResponse: object = {
  $type: "pylon.discord.v1.rest.AddGuildMemberResponse",
};

export const AddGuildMemberResponse = {
  $type: "pylon.discord.v1.rest.AddGuildMemberResponse" as const,

  encode(
    message: AddGuildMemberResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      AddGuildMemberResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddGuildMemberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddGuildMemberResponse } as AddGuildMemberResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: AddGuildMemberResponse_Data.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddGuildMemberResponse {
    const message = { ...baseAddGuildMemberResponse } as AddGuildMemberResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: AddGuildMemberResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: AddGuildMemberResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? AddGuildMemberResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AddGuildMemberResponse>
  ): AddGuildMemberResponse {
    const message = { ...baseAddGuildMemberResponse } as AddGuildMemberResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: AddGuildMemberResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(AddGuildMemberResponse.$type, AddGuildMemberResponse);

const baseAddGuildMemberResponse_Data: object = {
  $type: "pylon.discord.v1.rest.AddGuildMemberResponse.Data",
  added: false,
};

export const AddGuildMemberResponse_Data = {
  $type: "pylon.discord.v1.rest.AddGuildMemberResponse.Data" as const,

  encode(
    message: AddGuildMemberResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.added === true) {
      writer.uint32(8).bool(message.added);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddGuildMemberResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddGuildMemberResponse_Data,
    } as AddGuildMemberResponse_Data;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.added = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddGuildMemberResponse_Data {
    const message = {
      ...baseAddGuildMemberResponse_Data,
    } as AddGuildMemberResponse_Data;
    if (object.added !== undefined && object.added !== null) {
      message.added = Boolean(object.added);
    }
    return message;
  },

  toJSON(message: AddGuildMemberResponse_Data): unknown {
    const obj: any = {};
    message.added !== undefined && (obj.added = message.added);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AddGuildMemberResponse_Data>
  ): AddGuildMemberResponse_Data {
    const message = {
      ...baseAddGuildMemberResponse_Data,
    } as AddGuildMemberResponse_Data;
    if (object.added !== undefined && object.added !== null) {
      message.added = object.added;
    }
    return message;
  },
};

messageTypeRegistry.set(
  AddGuildMemberResponse_Data.$type,
  AddGuildMemberResponse_Data
);

const baseModifyGuildMemberRequest: object = {
  $type: "pylon.discord.v1.rest.ModifyGuildMemberRequest",
  userId: "0",
};

export const ModifyGuildMemberRequest = {
  $type: "pylon.discord.v1.rest.ModifyGuildMemberRequest" as const,

  encode(
    message: ModifyGuildMemberRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== "0") {
      writer.uint32(9).fixed64(message.userId);
    }
    if (message.nick !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.nick! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.roles !== undefined) {
      SnowflakeListValue.encode(
        message.roles,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.mute !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.mute! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.deaf !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.deaf! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.channelId !== undefined) {
      SnowflakeValue.encode(
        message.channelId,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyGuildMemberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyGuildMemberRequest,
    } as ModifyGuildMemberRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.nick = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.roles = SnowflakeListValue.decode(reader, reader.uint32());
          break;
        case 4:
          message.mute = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 5:
          message.deaf = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 6:
          message.channelId = SnowflakeValue.decode(reader, reader.uint32());
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyGuildMemberRequest {
    const message = {
      ...baseModifyGuildMemberRequest,
    } as ModifyGuildMemberRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    }
    if (object.nick !== undefined && object.nick !== null) {
      message.nick = String(object.nick);
    }
    if (object.roles !== undefined && object.roles !== null) {
      message.roles = SnowflakeListValue.fromJSON(object.roles);
    }
    if (object.mute !== undefined && object.mute !== null) {
      message.mute = Boolean(object.mute);
    }
    if (object.deaf !== undefined && object.deaf !== null) {
      message.deaf = Boolean(object.deaf);
    }
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = SnowflakeValue.fromJSON(object.channelId);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: ModifyGuildMemberRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.nick !== undefined && (obj.nick = message.nick);
    message.roles !== undefined &&
      (obj.roles = message.roles
        ? SnowflakeListValue.toJSON(message.roles)
        : undefined);
    message.mute !== undefined && (obj.mute = message.mute);
    message.deaf !== undefined && (obj.deaf = message.deaf);
    message.channelId !== undefined &&
      (obj.channelId = message.channelId
        ? SnowflakeValue.toJSON(message.channelId)
        : undefined);
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyGuildMemberRequest>
  ): ModifyGuildMemberRequest {
    const message = {
      ...baseModifyGuildMemberRequest,
    } as ModifyGuildMemberRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    }
    if (object.nick !== undefined && object.nick !== null) {
      message.nick = object.nick;
    }
    if (object.roles !== undefined && object.roles !== null) {
      message.roles = SnowflakeListValue.fromPartial(object.roles);
    }
    if (object.mute !== undefined && object.mute !== null) {
      message.mute = object.mute;
    }
    if (object.deaf !== undefined && object.deaf !== null) {
      message.deaf = object.deaf;
    }
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = SnowflakeValue.fromPartial(object.channelId);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(
  ModifyGuildMemberRequest.$type,
  ModifyGuildMemberRequest
);

const baseModifyGuildMemberResponse: object = {
  $type: "pylon.discord.v1.rest.ModifyGuildMemberResponse",
};

export const ModifyGuildMemberResponse = {
  $type: "pylon.discord.v1.rest.ModifyGuildMemberResponse" as const,

  encode(
    message: ModifyGuildMemberResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyGuildMemberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyGuildMemberResponse,
    } as ModifyGuildMemberResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyGuildMemberResponse {
    const message = {
      ...baseModifyGuildMemberResponse,
    } as ModifyGuildMemberResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: ModifyGuildMemberResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyGuildMemberResponse>
  ): ModifyGuildMemberResponse {
    const message = {
      ...baseModifyGuildMemberResponse,
    } as ModifyGuildMemberResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  ModifyGuildMemberResponse.$type,
  ModifyGuildMemberResponse
);

const baseModifyCurrentUserNickRequest: object = {
  $type: "pylon.discord.v1.rest.ModifyCurrentUserNickRequest",
};

export const ModifyCurrentUserNickRequest = {
  $type: "pylon.discord.v1.rest.ModifyCurrentUserNickRequest" as const,

  encode(
    message: ModifyCurrentUserNickRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nick !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.nick! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyCurrentUserNickRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyCurrentUserNickRequest,
    } as ModifyCurrentUserNickRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nick = StringValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyCurrentUserNickRequest {
    const message = {
      ...baseModifyCurrentUserNickRequest,
    } as ModifyCurrentUserNickRequest;
    if (object.nick !== undefined && object.nick !== null) {
      message.nick = String(object.nick);
    }
    return message;
  },

  toJSON(message: ModifyCurrentUserNickRequest): unknown {
    const obj: any = {};
    message.nick !== undefined && (obj.nick = message.nick);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyCurrentUserNickRequest>
  ): ModifyCurrentUserNickRequest {
    const message = {
      ...baseModifyCurrentUserNickRequest,
    } as ModifyCurrentUserNickRequest;
    if (object.nick !== undefined && object.nick !== null) {
      message.nick = object.nick;
    }
    return message;
  },
};

messageTypeRegistry.set(
  ModifyCurrentUserNickRequest.$type,
  ModifyCurrentUserNickRequest
);

const baseModifyCurrentUserNickResponse: object = {
  $type: "pylon.discord.v1.rest.ModifyCurrentUserNickResponse",
};

export const ModifyCurrentUserNickResponse = {
  $type: "pylon.discord.v1.rest.ModifyCurrentUserNickResponse" as const,

  encode(
    message: ModifyCurrentUserNickResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyCurrentUserNickResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyCurrentUserNickResponse,
    } as ModifyCurrentUserNickResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyCurrentUserNickResponse {
    const message = {
      ...baseModifyCurrentUserNickResponse,
    } as ModifyCurrentUserNickResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: ModifyCurrentUserNickResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyCurrentUserNickResponse>
  ): ModifyCurrentUserNickResponse {
    const message = {
      ...baseModifyCurrentUserNickResponse,
    } as ModifyCurrentUserNickResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  ModifyCurrentUserNickResponse.$type,
  ModifyCurrentUserNickResponse
);

const baseAddGuildMemberRoleRequest: object = {
  $type: "pylon.discord.v1.rest.AddGuildMemberRoleRequest",
  userId: "0",
  roleId: "0",
};

export const AddGuildMemberRoleRequest = {
  $type: "pylon.discord.v1.rest.AddGuildMemberRoleRequest" as const,

  encode(
    message: AddGuildMemberRoleRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== "0") {
      writer.uint32(9).fixed64(message.userId);
    }
    if (message.roleId !== "0") {
      writer.uint32(17).fixed64(message.roleId);
    }
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddGuildMemberRoleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddGuildMemberRoleRequest,
    } as AddGuildMemberRoleRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.roleId = longToString(reader.fixed64() as Long);
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddGuildMemberRoleRequest {
    const message = {
      ...baseAddGuildMemberRoleRequest,
    } as AddGuildMemberRoleRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    }
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = String(object.roleId);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: AddGuildMemberRoleRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.roleId !== undefined && (obj.roleId = message.roleId);
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AddGuildMemberRoleRequest>
  ): AddGuildMemberRoleRequest {
    const message = {
      ...baseAddGuildMemberRoleRequest,
    } as AddGuildMemberRoleRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    }
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = object.roleId;
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(
  AddGuildMemberRoleRequest.$type,
  AddGuildMemberRoleRequest
);

const baseAddGuildMemberRoleResponse: object = {
  $type: "pylon.discord.v1.rest.AddGuildMemberRoleResponse",
};

export const AddGuildMemberRoleResponse = {
  $type: "pylon.discord.v1.rest.AddGuildMemberRoleResponse" as const,

  encode(
    message: AddGuildMemberRoleResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddGuildMemberRoleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddGuildMemberRoleResponse,
    } as AddGuildMemberRoleResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddGuildMemberRoleResponse {
    const message = {
      ...baseAddGuildMemberRoleResponse,
    } as AddGuildMemberRoleResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: AddGuildMemberRoleResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AddGuildMemberRoleResponse>
  ): AddGuildMemberRoleResponse {
    const message = {
      ...baseAddGuildMemberRoleResponse,
    } as AddGuildMemberRoleResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  AddGuildMemberRoleResponse.$type,
  AddGuildMemberRoleResponse
);

const baseRemoveGuildMemberRoleRequest: object = {
  $type: "pylon.discord.v1.rest.RemoveGuildMemberRoleRequest",
  userId: "0",
  roleId: "0",
};

export const RemoveGuildMemberRoleRequest = {
  $type: "pylon.discord.v1.rest.RemoveGuildMemberRoleRequest" as const,

  encode(
    message: RemoveGuildMemberRoleRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== "0") {
      writer.uint32(9).fixed64(message.userId);
    }
    if (message.roleId !== "0") {
      writer.uint32(17).fixed64(message.roleId);
    }
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveGuildMemberRoleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRemoveGuildMemberRoleRequest,
    } as RemoveGuildMemberRoleRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.roleId = longToString(reader.fixed64() as Long);
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveGuildMemberRoleRequest {
    const message = {
      ...baseRemoveGuildMemberRoleRequest,
    } as RemoveGuildMemberRoleRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    }
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = String(object.roleId);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: RemoveGuildMemberRoleRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.roleId !== undefined && (obj.roleId = message.roleId);
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RemoveGuildMemberRoleRequest>
  ): RemoveGuildMemberRoleRequest {
    const message = {
      ...baseRemoveGuildMemberRoleRequest,
    } as RemoveGuildMemberRoleRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    }
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = object.roleId;
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(
  RemoveGuildMemberRoleRequest.$type,
  RemoveGuildMemberRoleRequest
);

const baseRemoveGuildMemberRoleResponse: object = {
  $type: "pylon.discord.v1.rest.RemoveGuildMemberRoleResponse",
};

export const RemoveGuildMemberRoleResponse = {
  $type: "pylon.discord.v1.rest.RemoveGuildMemberRoleResponse" as const,

  encode(
    message: RemoveGuildMemberRoleResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveGuildMemberRoleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRemoveGuildMemberRoleResponse,
    } as RemoveGuildMemberRoleResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveGuildMemberRoleResponse {
    const message = {
      ...baseRemoveGuildMemberRoleResponse,
    } as RemoveGuildMemberRoleResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: RemoveGuildMemberRoleResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RemoveGuildMemberRoleResponse>
  ): RemoveGuildMemberRoleResponse {
    const message = {
      ...baseRemoveGuildMemberRoleResponse,
    } as RemoveGuildMemberRoleResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  RemoveGuildMemberRoleResponse.$type,
  RemoveGuildMemberRoleResponse
);

const baseRemoveGuildMemberRequest: object = {
  $type: "pylon.discord.v1.rest.RemoveGuildMemberRequest",
  userId: "0",
};

export const RemoveGuildMemberRequest = {
  $type: "pylon.discord.v1.rest.RemoveGuildMemberRequest" as const,

  encode(
    message: RemoveGuildMemberRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== "0") {
      writer.uint32(9).fixed64(message.userId);
    }
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveGuildMemberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRemoveGuildMemberRequest,
    } as RemoveGuildMemberRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToString(reader.fixed64() as Long);
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveGuildMemberRequest {
    const message = {
      ...baseRemoveGuildMemberRequest,
    } as RemoveGuildMemberRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: RemoveGuildMemberRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RemoveGuildMemberRequest>
  ): RemoveGuildMemberRequest {
    const message = {
      ...baseRemoveGuildMemberRequest,
    } as RemoveGuildMemberRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(
  RemoveGuildMemberRequest.$type,
  RemoveGuildMemberRequest
);

const baseRemoveGuildMemberResponse: object = {
  $type: "pylon.discord.v1.rest.RemoveGuildMemberResponse",
};

export const RemoveGuildMemberResponse = {
  $type: "pylon.discord.v1.rest.RemoveGuildMemberResponse" as const,

  encode(
    message: RemoveGuildMemberResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveGuildMemberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRemoveGuildMemberResponse,
    } as RemoveGuildMemberResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveGuildMemberResponse {
    const message = {
      ...baseRemoveGuildMemberResponse,
    } as RemoveGuildMemberResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: RemoveGuildMemberResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RemoveGuildMemberResponse>
  ): RemoveGuildMemberResponse {
    const message = {
      ...baseRemoveGuildMemberResponse,
    } as RemoveGuildMemberResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  RemoveGuildMemberResponse.$type,
  RemoveGuildMemberResponse
);

const baseGetGuildBansRequest: object = {
  $type: "pylon.discord.v1.rest.GetGuildBansRequest",
  userId: "0",
};

export const GetGuildBansRequest = {
  $type: "pylon.discord.v1.rest.GetGuildBansRequest" as const,

  encode(
    message: GetGuildBansRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== "0") {
      writer.uint32(9).fixed64(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGuildBansRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetGuildBansRequest } as GetGuildBansRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGuildBansRequest {
    const message = { ...baseGetGuildBansRequest } as GetGuildBansRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    }
    return message;
  },

  toJSON(message: GetGuildBansRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetGuildBansRequest>): GetGuildBansRequest {
    const message = { ...baseGetGuildBansRequest } as GetGuildBansRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    }
    return message;
  },
};

messageTypeRegistry.set(GetGuildBansRequest.$type, GetGuildBansRequest);

const baseGetGuildBansResponse: object = {
  $type: "pylon.discord.v1.rest.GetGuildBansResponse",
};

export const GetGuildBansResponse = {
  $type: "pylon.discord.v1.rest.GetGuildBansResponse" as const,

  encode(
    message: GetGuildBansResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      GetGuildBansResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildBansResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetGuildBansResponse } as GetGuildBansResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: GetGuildBansResponse_Data.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGuildBansResponse {
    const message = { ...baseGetGuildBansResponse } as GetGuildBansResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: GetGuildBansResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: GetGuildBansResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? GetGuildBansResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetGuildBansResponse>): GetGuildBansResponse {
    const message = { ...baseGetGuildBansResponse } as GetGuildBansResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: GetGuildBansResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(GetGuildBansResponse.$type, GetGuildBansResponse);

const baseGetGuildBansResponse_Data: object = {
  $type: "pylon.discord.v1.rest.GetGuildBansResponse.Data",
};

export const GetGuildBansResponse_Data = {
  $type: "pylon.discord.v1.rest.GetGuildBansResponse.Data" as const,

  encode(
    message: GetGuildBansResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.bans) {
      GuildBanData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildBansResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetGuildBansResponse_Data,
    } as GetGuildBansResponse_Data;
    message.bans = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bans.push(GuildBanData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGuildBansResponse_Data {
    const message = {
      ...baseGetGuildBansResponse_Data,
    } as GetGuildBansResponse_Data;
    message.bans = [];
    if (object.bans !== undefined && object.bans !== null) {
      for (const e of object.bans) {
        message.bans.push(GuildBanData.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GetGuildBansResponse_Data): unknown {
    const obj: any = {};
    if (message.bans) {
      obj.bans = message.bans.map((e) =>
        e ? GuildBanData.toJSON(e) : undefined
      );
    } else {
      obj.bans = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetGuildBansResponse_Data>
  ): GetGuildBansResponse_Data {
    const message = {
      ...baseGetGuildBansResponse_Data,
    } as GetGuildBansResponse_Data;
    message.bans = [];
    if (object.bans !== undefined && object.bans !== null) {
      for (const e of object.bans) {
        message.bans.push(GuildBanData.fromPartial(e));
      }
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetGuildBansResponse_Data.$type,
  GetGuildBansResponse_Data
);

const baseGetGuildBanRequest: object = {
  $type: "pylon.discord.v1.rest.GetGuildBanRequest",
  userId: "0",
};

export const GetGuildBanRequest = {
  $type: "pylon.discord.v1.rest.GetGuildBanRequest" as const,

  encode(
    message: GetGuildBanRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== "0") {
      writer.uint32(9).fixed64(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGuildBanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetGuildBanRequest } as GetGuildBanRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGuildBanRequest {
    const message = { ...baseGetGuildBanRequest } as GetGuildBanRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    }
    return message;
  },

  toJSON(message: GetGuildBanRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetGuildBanRequest>): GetGuildBanRequest {
    const message = { ...baseGetGuildBanRequest } as GetGuildBanRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    }
    return message;
  },
};

messageTypeRegistry.set(GetGuildBanRequest.$type, GetGuildBanRequest);

const baseGetGuildBanResponse: object = {
  $type: "pylon.discord.v1.rest.GetGuildBanResponse",
};

export const GetGuildBanResponse = {
  $type: "pylon.discord.v1.rest.GetGuildBanResponse" as const,

  encode(
    message: GetGuildBanResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      GetGuildBanResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGuildBanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetGuildBanResponse } as GetGuildBanResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: GetGuildBanResponse_Data.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGuildBanResponse {
    const message = { ...baseGetGuildBanResponse } as GetGuildBanResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: GetGuildBanResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: GetGuildBanResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? GetGuildBanResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetGuildBanResponse>): GetGuildBanResponse {
    const message = { ...baseGetGuildBanResponse } as GetGuildBanResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: GetGuildBanResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(GetGuildBanResponse.$type, GetGuildBanResponse);

const baseGetGuildBanResponse_Data: object = {
  $type: "pylon.discord.v1.rest.GetGuildBanResponse.Data",
};

export const GetGuildBanResponse_Data = {
  $type: "pylon.discord.v1.rest.GetGuildBanResponse.Data" as const,

  encode(
    message: GetGuildBanResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ban !== undefined) {
      GuildBanData.encode(message.ban, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildBanResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetGuildBanResponse_Data,
    } as GetGuildBanResponse_Data;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ban = GuildBanData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGuildBanResponse_Data {
    const message = {
      ...baseGetGuildBanResponse_Data,
    } as GetGuildBanResponse_Data;
    if (object.ban !== undefined && object.ban !== null) {
      message.ban = GuildBanData.fromJSON(object.ban);
    }
    return message;
  },

  toJSON(message: GetGuildBanResponse_Data): unknown {
    const obj: any = {};
    message.ban !== undefined &&
      (obj.ban = message.ban ? GuildBanData.toJSON(message.ban) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetGuildBanResponse_Data>
  ): GetGuildBanResponse_Data {
    const message = {
      ...baseGetGuildBanResponse_Data,
    } as GetGuildBanResponse_Data;
    if (object.ban !== undefined && object.ban !== null) {
      message.ban = GuildBanData.fromPartial(object.ban);
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetGuildBanResponse_Data.$type,
  GetGuildBanResponse_Data
);

const baseCreateGuildBanRequest: object = {
  $type: "pylon.discord.v1.rest.CreateGuildBanRequest",
  userId: "0",
};

export const CreateGuildBanRequest = {
  $type: "pylon.discord.v1.rest.CreateGuildBanRequest" as const,

  encode(
    message: CreateGuildBanRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== "0") {
      writer.uint32(9).fixed64(message.userId);
    }
    if (message.deleteMessageDays !== undefined) {
      UInt32Value.encode(
        {
          $type: "google.protobuf.UInt32Value",
          value: message.deleteMessageDays!,
        },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateGuildBanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateGuildBanRequest } as CreateGuildBanRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.deleteMessageDays = UInt32Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateGuildBanRequest {
    const message = { ...baseCreateGuildBanRequest } as CreateGuildBanRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    }
    if (
      object.deleteMessageDays !== undefined &&
      object.deleteMessageDays !== null
    ) {
      message.deleteMessageDays = Number(object.deleteMessageDays);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: CreateGuildBanRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.deleteMessageDays !== undefined &&
      (obj.deleteMessageDays = message.deleteMessageDays);
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateGuildBanRequest>
  ): CreateGuildBanRequest {
    const message = { ...baseCreateGuildBanRequest } as CreateGuildBanRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    }
    if (
      object.deleteMessageDays !== undefined &&
      object.deleteMessageDays !== null
    ) {
      message.deleteMessageDays = object.deleteMessageDays;
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(CreateGuildBanRequest.$type, CreateGuildBanRequest);

const baseCreateGuildBanResponse: object = {
  $type: "pylon.discord.v1.rest.CreateGuildBanResponse",
};

export const CreateGuildBanResponse = {
  $type: "pylon.discord.v1.rest.CreateGuildBanResponse" as const,

  encode(
    message: CreateGuildBanResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateGuildBanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateGuildBanResponse } as CreateGuildBanResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateGuildBanResponse {
    const message = { ...baseCreateGuildBanResponse } as CreateGuildBanResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: CreateGuildBanResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateGuildBanResponse>
  ): CreateGuildBanResponse {
    const message = { ...baseCreateGuildBanResponse } as CreateGuildBanResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(CreateGuildBanResponse.$type, CreateGuildBanResponse);

const baseRemoveGuildBanRequest: object = {
  $type: "pylon.discord.v1.rest.RemoveGuildBanRequest",
  userId: "0",
};

export const RemoveGuildBanRequest = {
  $type: "pylon.discord.v1.rest.RemoveGuildBanRequest" as const,

  encode(
    message: RemoveGuildBanRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== "0") {
      writer.uint32(9).fixed64(message.userId);
    }
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveGuildBanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRemoveGuildBanRequest } as RemoveGuildBanRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToString(reader.fixed64() as Long);
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveGuildBanRequest {
    const message = { ...baseRemoveGuildBanRequest } as RemoveGuildBanRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: RemoveGuildBanRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RemoveGuildBanRequest>
  ): RemoveGuildBanRequest {
    const message = { ...baseRemoveGuildBanRequest } as RemoveGuildBanRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(RemoveGuildBanRequest.$type, RemoveGuildBanRequest);

const baseRemoveGuildBanResponse: object = {
  $type: "pylon.discord.v1.rest.RemoveGuildBanResponse",
};

export const RemoveGuildBanResponse = {
  $type: "pylon.discord.v1.rest.RemoveGuildBanResponse" as const,

  encode(
    message: RemoveGuildBanResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveGuildBanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRemoveGuildBanResponse } as RemoveGuildBanResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveGuildBanResponse {
    const message = { ...baseRemoveGuildBanResponse } as RemoveGuildBanResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: RemoveGuildBanResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RemoveGuildBanResponse>
  ): RemoveGuildBanResponse {
    const message = { ...baseRemoveGuildBanResponse } as RemoveGuildBanResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(RemoveGuildBanResponse.$type, RemoveGuildBanResponse);

const baseCreateGuildRoleRequest: object = {
  $type: "pylon.discord.v1.rest.CreateGuildRoleRequest",
};

export const CreateGuildRoleRequest = {
  $type: "pylon.discord.v1.rest.CreateGuildRoleRequest" as const,

  encode(
    message: CreateGuildRoleRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.name! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.permissions !== undefined) {
      PermissionsValue.encode(
        message.permissions,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.color !== undefined) {
      UInt32Value.encode(
        { $type: "google.protobuf.UInt32Value", value: message.color! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.hoist !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.hoist! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.mentionable !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.mentionable! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateGuildRoleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateGuildRoleRequest } as CreateGuildRoleRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 2:
          message.permissions = PermissionsValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.color = UInt32Value.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.hoist = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 5:
          message.mentionable = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateGuildRoleRequest {
    const message = { ...baseCreateGuildRoleRequest } as CreateGuildRoleRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    }
    if (object.permissions !== undefined && object.permissions !== null) {
      message.permissions = PermissionsValue.fromJSON(object.permissions);
    }
    if (object.color !== undefined && object.color !== null) {
      message.color = Number(object.color);
    }
    if (object.hoist !== undefined && object.hoist !== null) {
      message.hoist = Boolean(object.hoist);
    }
    if (object.mentionable !== undefined && object.mentionable !== null) {
      message.mentionable = Boolean(object.mentionable);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: CreateGuildRoleRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.permissions !== undefined &&
      (obj.permissions = message.permissions
        ? PermissionsValue.toJSON(message.permissions)
        : undefined);
    message.color !== undefined && (obj.color = message.color);
    message.hoist !== undefined && (obj.hoist = message.hoist);
    message.mentionable !== undefined &&
      (obj.mentionable = message.mentionable);
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateGuildRoleRequest>
  ): CreateGuildRoleRequest {
    const message = { ...baseCreateGuildRoleRequest } as CreateGuildRoleRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.permissions !== undefined && object.permissions !== null) {
      message.permissions = PermissionsValue.fromPartial(object.permissions);
    }
    if (object.color !== undefined && object.color !== null) {
      message.color = object.color;
    }
    if (object.hoist !== undefined && object.hoist !== null) {
      message.hoist = object.hoist;
    }
    if (object.mentionable !== undefined && object.mentionable !== null) {
      message.mentionable = object.mentionable;
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(CreateGuildRoleRequest.$type, CreateGuildRoleRequest);

const baseCreateGuildRoleResponse: object = {
  $type: "pylon.discord.v1.rest.CreateGuildRoleResponse",
};

export const CreateGuildRoleResponse = {
  $type: "pylon.discord.v1.rest.CreateGuildRoleResponse" as const,

  encode(
    message: CreateGuildRoleResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      CreateGuildRoleResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateGuildRoleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateGuildRoleResponse,
    } as CreateGuildRoleResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: CreateGuildRoleResponse_Data.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateGuildRoleResponse {
    const message = {
      ...baseCreateGuildRoleResponse,
    } as CreateGuildRoleResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: CreateGuildRoleResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: CreateGuildRoleResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? CreateGuildRoleResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateGuildRoleResponse>
  ): CreateGuildRoleResponse {
    const message = {
      ...baseCreateGuildRoleResponse,
    } as CreateGuildRoleResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: CreateGuildRoleResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(CreateGuildRoleResponse.$type, CreateGuildRoleResponse);

const baseCreateGuildRoleResponse_Data: object = {
  $type: "pylon.discord.v1.rest.CreateGuildRoleResponse.Data",
};

export const CreateGuildRoleResponse_Data = {
  $type: "pylon.discord.v1.rest.CreateGuildRoleResponse.Data" as const,

  encode(
    message: CreateGuildRoleResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.role !== undefined) {
      RoleData.encode(message.role, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateGuildRoleResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateGuildRoleResponse_Data,
    } as CreateGuildRoleResponse_Data;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.role = RoleData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateGuildRoleResponse_Data {
    const message = {
      ...baseCreateGuildRoleResponse_Data,
    } as CreateGuildRoleResponse_Data;
    if (object.role !== undefined && object.role !== null) {
      message.role = RoleData.fromJSON(object.role);
    }
    return message;
  },

  toJSON(message: CreateGuildRoleResponse_Data): unknown {
    const obj: any = {};
    message.role !== undefined &&
      (obj.role = message.role ? RoleData.toJSON(message.role) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateGuildRoleResponse_Data>
  ): CreateGuildRoleResponse_Data {
    const message = {
      ...baseCreateGuildRoleResponse_Data,
    } as CreateGuildRoleResponse_Data;
    if (object.role !== undefined && object.role !== null) {
      message.role = RoleData.fromPartial(object.role);
    }
    return message;
  },
};

messageTypeRegistry.set(
  CreateGuildRoleResponse_Data.$type,
  CreateGuildRoleResponse_Data
);

const baseModifyGuildRolePositionsRequest: object = {
  $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsRequest",
};

export const ModifyGuildRolePositionsRequest = {
  $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsRequest" as const,

  encode(
    message: ModifyGuildRolePositionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rolePositions) {
      ModifyGuildRolePositionsRequest_RolePosition.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyGuildRolePositionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyGuildRolePositionsRequest,
    } as ModifyGuildRolePositionsRequest;
    message.rolePositions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rolePositions.push(
            ModifyGuildRolePositionsRequest_RolePosition.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyGuildRolePositionsRequest {
    const message = {
      ...baseModifyGuildRolePositionsRequest,
    } as ModifyGuildRolePositionsRequest;
    message.rolePositions = [];
    if (object.rolePositions !== undefined && object.rolePositions !== null) {
      for (const e of object.rolePositions) {
        message.rolePositions.push(
          ModifyGuildRolePositionsRequest_RolePosition.fromJSON(e)
        );
      }
    }
    return message;
  },

  toJSON(message: ModifyGuildRolePositionsRequest): unknown {
    const obj: any = {};
    if (message.rolePositions) {
      obj.rolePositions = message.rolePositions.map((e) =>
        e ? ModifyGuildRolePositionsRequest_RolePosition.toJSON(e) : undefined
      );
    } else {
      obj.rolePositions = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyGuildRolePositionsRequest>
  ): ModifyGuildRolePositionsRequest {
    const message = {
      ...baseModifyGuildRolePositionsRequest,
    } as ModifyGuildRolePositionsRequest;
    message.rolePositions = [];
    if (object.rolePositions !== undefined && object.rolePositions !== null) {
      for (const e of object.rolePositions) {
        message.rolePositions.push(
          ModifyGuildRolePositionsRequest_RolePosition.fromPartial(e)
        );
      }
    }
    return message;
  },
};

messageTypeRegistry.set(
  ModifyGuildRolePositionsRequest.$type,
  ModifyGuildRolePositionsRequest
);

const baseModifyGuildRolePositionsRequest_RolePosition: object = {
  $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsRequest.RolePosition",
  id: "0",
  position: 0,
};

export const ModifyGuildRolePositionsRequest_RolePosition = {
  $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsRequest.RolePosition" as const,

  encode(
    message: ModifyGuildRolePositionsRequest_RolePosition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(9).fixed64(message.id);
    }
    if (message.position !== 0) {
      writer.uint32(16).uint32(message.position);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyGuildRolePositionsRequest_RolePosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyGuildRolePositionsRequest_RolePosition,
    } as ModifyGuildRolePositionsRequest_RolePosition;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.position = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyGuildRolePositionsRequest_RolePosition {
    const message = {
      ...baseModifyGuildRolePositionsRequest_RolePosition,
    } as ModifyGuildRolePositionsRequest_RolePosition;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = Number(object.position);
    }
    return message;
  },

  toJSON(message: ModifyGuildRolePositionsRequest_RolePosition): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.position !== undefined && (obj.position = message.position);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyGuildRolePositionsRequest_RolePosition>
  ): ModifyGuildRolePositionsRequest_RolePosition {
    const message = {
      ...baseModifyGuildRolePositionsRequest_RolePosition,
    } as ModifyGuildRolePositionsRequest_RolePosition;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = object.position;
    }
    return message;
  },
};

messageTypeRegistry.set(
  ModifyGuildRolePositionsRequest_RolePosition.$type,
  ModifyGuildRolePositionsRequest_RolePosition
);

const baseModifyGuildRolePositionsResponse: object = {
  $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsResponse",
};

export const ModifyGuildRolePositionsResponse = {
  $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsResponse" as const,

  encode(
    message: ModifyGuildRolePositionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      ModifyGuildRolePositionsResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyGuildRolePositionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyGuildRolePositionsResponse,
    } as ModifyGuildRolePositionsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: ModifyGuildRolePositionsResponse_Data.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyGuildRolePositionsResponse {
    const message = {
      ...baseModifyGuildRolePositionsResponse,
    } as ModifyGuildRolePositionsResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: ModifyGuildRolePositionsResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: ModifyGuildRolePositionsResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? ModifyGuildRolePositionsResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyGuildRolePositionsResponse>
  ): ModifyGuildRolePositionsResponse {
    const message = {
      ...baseModifyGuildRolePositionsResponse,
    } as ModifyGuildRolePositionsResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: ModifyGuildRolePositionsResponse_Data.fromPartial(
          object.response.data
        ),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  ModifyGuildRolePositionsResponse.$type,
  ModifyGuildRolePositionsResponse
);

const baseModifyGuildRolePositionsResponse_Data: object = {
  $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsResponse.Data",
};

export const ModifyGuildRolePositionsResponse_Data = {
  $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsResponse.Data" as const,

  encode(
    message: ModifyGuildRolePositionsResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.roles) {
      RoleData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyGuildRolePositionsResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyGuildRolePositionsResponse_Data,
    } as ModifyGuildRolePositionsResponse_Data;
    message.roles = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roles.push(RoleData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyGuildRolePositionsResponse_Data {
    const message = {
      ...baseModifyGuildRolePositionsResponse_Data,
    } as ModifyGuildRolePositionsResponse_Data;
    message.roles = [];
    if (object.roles !== undefined && object.roles !== null) {
      for (const e of object.roles) {
        message.roles.push(RoleData.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ModifyGuildRolePositionsResponse_Data): unknown {
    const obj: any = {};
    if (message.roles) {
      obj.roles = message.roles.map((e) =>
        e ? RoleData.toJSON(e) : undefined
      );
    } else {
      obj.roles = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyGuildRolePositionsResponse_Data>
  ): ModifyGuildRolePositionsResponse_Data {
    const message = {
      ...baseModifyGuildRolePositionsResponse_Data,
    } as ModifyGuildRolePositionsResponse_Data;
    message.roles = [];
    if (object.roles !== undefined && object.roles !== null) {
      for (const e of object.roles) {
        message.roles.push(RoleData.fromPartial(e));
      }
    }
    return message;
  },
};

messageTypeRegistry.set(
  ModifyGuildRolePositionsResponse_Data.$type,
  ModifyGuildRolePositionsResponse_Data
);

const baseModifyGuildRoleRequest: object = {
  $type: "pylon.discord.v1.rest.ModifyGuildRoleRequest",
  roleId: "0",
};

export const ModifyGuildRoleRequest = {
  $type: "pylon.discord.v1.rest.ModifyGuildRoleRequest" as const,

  encode(
    message: ModifyGuildRoleRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.roleId !== "0") {
      writer.uint32(9).fixed64(message.roleId);
    }
    if (message.name !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.name! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.permissions !== undefined) {
      PermissionsValue.encode(
        message.permissions,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.color !== undefined) {
      UInt32Value.encode(
        { $type: "google.protobuf.UInt32Value", value: message.color! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.hoist !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.hoist! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.mentionable !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.mentionable! },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyGuildRoleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseModifyGuildRoleRequest } as ModifyGuildRoleRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.name = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.permissions = PermissionsValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.color = UInt32Value.decode(reader, reader.uint32()).value;
          break;
        case 5:
          message.hoist = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 6:
          message.mentionable = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyGuildRoleRequest {
    const message = { ...baseModifyGuildRoleRequest } as ModifyGuildRoleRequest;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = String(object.roleId);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    }
    if (object.permissions !== undefined && object.permissions !== null) {
      message.permissions = PermissionsValue.fromJSON(object.permissions);
    }
    if (object.color !== undefined && object.color !== null) {
      message.color = Number(object.color);
    }
    if (object.hoist !== undefined && object.hoist !== null) {
      message.hoist = Boolean(object.hoist);
    }
    if (object.mentionable !== undefined && object.mentionable !== null) {
      message.mentionable = Boolean(object.mentionable);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: ModifyGuildRoleRequest): unknown {
    const obj: any = {};
    message.roleId !== undefined && (obj.roleId = message.roleId);
    message.name !== undefined && (obj.name = message.name);
    message.permissions !== undefined &&
      (obj.permissions = message.permissions
        ? PermissionsValue.toJSON(message.permissions)
        : undefined);
    message.color !== undefined && (obj.color = message.color);
    message.hoist !== undefined && (obj.hoist = message.hoist);
    message.mentionable !== undefined &&
      (obj.mentionable = message.mentionable);
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyGuildRoleRequest>
  ): ModifyGuildRoleRequest {
    const message = { ...baseModifyGuildRoleRequest } as ModifyGuildRoleRequest;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = object.roleId;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.permissions !== undefined && object.permissions !== null) {
      message.permissions = PermissionsValue.fromPartial(object.permissions);
    }
    if (object.color !== undefined && object.color !== null) {
      message.color = object.color;
    }
    if (object.hoist !== undefined && object.hoist !== null) {
      message.hoist = object.hoist;
    }
    if (object.mentionable !== undefined && object.mentionable !== null) {
      message.mentionable = object.mentionable;
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(ModifyGuildRoleRequest.$type, ModifyGuildRoleRequest);

const baseModifyGuildRoleResponse: object = {
  $type: "pylon.discord.v1.rest.ModifyGuildRoleResponse",
};

export const ModifyGuildRoleResponse = {
  $type: "pylon.discord.v1.rest.ModifyGuildRoleResponse" as const,

  encode(
    message: ModifyGuildRoleResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      ModifyGuildRoleResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyGuildRoleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyGuildRoleResponse,
    } as ModifyGuildRoleResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: ModifyGuildRoleResponse_Data.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyGuildRoleResponse {
    const message = {
      ...baseModifyGuildRoleResponse,
    } as ModifyGuildRoleResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: ModifyGuildRoleResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: ModifyGuildRoleResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? ModifyGuildRoleResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyGuildRoleResponse>
  ): ModifyGuildRoleResponse {
    const message = {
      ...baseModifyGuildRoleResponse,
    } as ModifyGuildRoleResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: ModifyGuildRoleResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(ModifyGuildRoleResponse.$type, ModifyGuildRoleResponse);

const baseModifyGuildRoleResponse_Data: object = {
  $type: "pylon.discord.v1.rest.ModifyGuildRoleResponse.Data",
};

export const ModifyGuildRoleResponse_Data = {
  $type: "pylon.discord.v1.rest.ModifyGuildRoleResponse.Data" as const,

  encode(
    message: ModifyGuildRoleResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.role !== undefined) {
      RoleData.encode(message.role, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyGuildRoleResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyGuildRoleResponse_Data,
    } as ModifyGuildRoleResponse_Data;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.role = RoleData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyGuildRoleResponse_Data {
    const message = {
      ...baseModifyGuildRoleResponse_Data,
    } as ModifyGuildRoleResponse_Data;
    if (object.role !== undefined && object.role !== null) {
      message.role = RoleData.fromJSON(object.role);
    }
    return message;
  },

  toJSON(message: ModifyGuildRoleResponse_Data): unknown {
    const obj: any = {};
    message.role !== undefined &&
      (obj.role = message.role ? RoleData.toJSON(message.role) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyGuildRoleResponse_Data>
  ): ModifyGuildRoleResponse_Data {
    const message = {
      ...baseModifyGuildRoleResponse_Data,
    } as ModifyGuildRoleResponse_Data;
    if (object.role !== undefined && object.role !== null) {
      message.role = RoleData.fromPartial(object.role);
    }
    return message;
  },
};

messageTypeRegistry.set(
  ModifyGuildRoleResponse_Data.$type,
  ModifyGuildRoleResponse_Data
);

const baseDeleteGuildRoleRequest: object = {
  $type: "pylon.discord.v1.rest.DeleteGuildRoleRequest",
  roleId: "0",
};

export const DeleteGuildRoleRequest = {
  $type: "pylon.discord.v1.rest.DeleteGuildRoleRequest" as const,

  encode(
    message: DeleteGuildRoleRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.roleId !== "0") {
      writer.uint32(9).fixed64(message.roleId);
    }
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteGuildRoleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteGuildRoleRequest } as DeleteGuildRoleRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleId = longToString(reader.fixed64() as Long);
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteGuildRoleRequest {
    const message = { ...baseDeleteGuildRoleRequest } as DeleteGuildRoleRequest;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = String(object.roleId);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: DeleteGuildRoleRequest): unknown {
    const obj: any = {};
    message.roleId !== undefined && (obj.roleId = message.roleId);
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteGuildRoleRequest>
  ): DeleteGuildRoleRequest {
    const message = { ...baseDeleteGuildRoleRequest } as DeleteGuildRoleRequest;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = object.roleId;
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(DeleteGuildRoleRequest.$type, DeleteGuildRoleRequest);

const baseDeleteGuildRoleResponse: object = {
  $type: "pylon.discord.v1.rest.DeleteGuildRoleResponse",
};

export const DeleteGuildRoleResponse = {
  $type: "pylon.discord.v1.rest.DeleteGuildRoleResponse" as const,

  encode(
    message: DeleteGuildRoleResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteGuildRoleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteGuildRoleResponse,
    } as DeleteGuildRoleResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteGuildRoleResponse {
    const message = {
      ...baseDeleteGuildRoleResponse,
    } as DeleteGuildRoleResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: DeleteGuildRoleResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteGuildRoleResponse>
  ): DeleteGuildRoleResponse {
    const message = {
      ...baseDeleteGuildRoleResponse,
    } as DeleteGuildRoleResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(DeleteGuildRoleResponse.$type, DeleteGuildRoleResponse);

const baseGetGuildPruneCountRequest: object = {
  $type: "pylon.discord.v1.rest.GetGuildPruneCountRequest",
};

export const GetGuildPruneCountRequest = {
  $type: "pylon.discord.v1.rest.GetGuildPruneCountRequest" as const,

  encode(
    message: GetGuildPruneCountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.days !== undefined) {
      UInt32Value.encode(
        { $type: "google.protobuf.UInt32Value", value: message.days! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.includeRoles !== undefined) {
      SnowflakeListValue.encode(
        message.includeRoles,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildPruneCountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetGuildPruneCountRequest,
    } as GetGuildPruneCountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.days = UInt32Value.decode(reader, reader.uint32()).value;
          break;
        case 2:
          message.includeRoles = SnowflakeListValue.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGuildPruneCountRequest {
    const message = {
      ...baseGetGuildPruneCountRequest,
    } as GetGuildPruneCountRequest;
    if (object.days !== undefined && object.days !== null) {
      message.days = Number(object.days);
    }
    if (object.includeRoles !== undefined && object.includeRoles !== null) {
      message.includeRoles = SnowflakeListValue.fromJSON(object.includeRoles);
    }
    return message;
  },

  toJSON(message: GetGuildPruneCountRequest): unknown {
    const obj: any = {};
    message.days !== undefined && (obj.days = message.days);
    message.includeRoles !== undefined &&
      (obj.includeRoles = message.includeRoles
        ? SnowflakeListValue.toJSON(message.includeRoles)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetGuildPruneCountRequest>
  ): GetGuildPruneCountRequest {
    const message = {
      ...baseGetGuildPruneCountRequest,
    } as GetGuildPruneCountRequest;
    if (object.days !== undefined && object.days !== null) {
      message.days = object.days;
    }
    if (object.includeRoles !== undefined && object.includeRoles !== null) {
      message.includeRoles = SnowflakeListValue.fromPartial(
        object.includeRoles
      );
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetGuildPruneCountRequest.$type,
  GetGuildPruneCountRequest
);

const baseGetGuildPruneCountResponse: object = {
  $type: "pylon.discord.v1.rest.GetGuildPruneCountResponse",
};

export const GetGuildPruneCountResponse = {
  $type: "pylon.discord.v1.rest.GetGuildPruneCountResponse" as const,

  encode(
    message: GetGuildPruneCountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildPruneCountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetGuildPruneCountResponse,
    } as GetGuildPruneCountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGuildPruneCountResponse {
    const message = {
      ...baseGetGuildPruneCountResponse,
    } as GetGuildPruneCountResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: GetGuildPruneCountResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetGuildPruneCountResponse>
  ): GetGuildPruneCountResponse {
    const message = {
      ...baseGetGuildPruneCountResponse,
    } as GetGuildPruneCountResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetGuildPruneCountResponse.$type,
  GetGuildPruneCountResponse
);

const baseBeginGuildPruneRequest: object = {
  $type: "pylon.discord.v1.rest.BeginGuildPruneRequest",
};

export const BeginGuildPruneRequest = {
  $type: "pylon.discord.v1.rest.BeginGuildPruneRequest" as const,

  encode(
    message: BeginGuildPruneRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.days !== undefined) {
      UInt32Value.encode(
        { $type: "google.protobuf.UInt32Value", value: message.days! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.includeRoles !== undefined) {
      SnowflakeListValue.encode(
        message.includeRoles,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.computePruneCount !== undefined) {
      BoolValue.encode(
        {
          $type: "google.protobuf.BoolValue",
          value: message.computePruneCount!,
        },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BeginGuildPruneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBeginGuildPruneRequest } as BeginGuildPruneRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.days = UInt32Value.decode(reader, reader.uint32()).value;
          break;
        case 2:
          message.includeRoles = SnowflakeListValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.computePruneCount = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BeginGuildPruneRequest {
    const message = { ...baseBeginGuildPruneRequest } as BeginGuildPruneRequest;
    if (object.days !== undefined && object.days !== null) {
      message.days = Number(object.days);
    }
    if (object.includeRoles !== undefined && object.includeRoles !== null) {
      message.includeRoles = SnowflakeListValue.fromJSON(object.includeRoles);
    }
    if (
      object.computePruneCount !== undefined &&
      object.computePruneCount !== null
    ) {
      message.computePruneCount = Boolean(object.computePruneCount);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: BeginGuildPruneRequest): unknown {
    const obj: any = {};
    message.days !== undefined && (obj.days = message.days);
    message.includeRoles !== undefined &&
      (obj.includeRoles = message.includeRoles
        ? SnowflakeListValue.toJSON(message.includeRoles)
        : undefined);
    message.computePruneCount !== undefined &&
      (obj.computePruneCount = message.computePruneCount);
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(
    object: DeepPartial<BeginGuildPruneRequest>
  ): BeginGuildPruneRequest {
    const message = { ...baseBeginGuildPruneRequest } as BeginGuildPruneRequest;
    if (object.days !== undefined && object.days !== null) {
      message.days = object.days;
    }
    if (object.includeRoles !== undefined && object.includeRoles !== null) {
      message.includeRoles = SnowflakeListValue.fromPartial(
        object.includeRoles
      );
    }
    if (
      object.computePruneCount !== undefined &&
      object.computePruneCount !== null
    ) {
      message.computePruneCount = object.computePruneCount;
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(BeginGuildPruneRequest.$type, BeginGuildPruneRequest);

const baseBeginGuildPruneResponse: object = {
  $type: "pylon.discord.v1.rest.BeginGuildPruneResponse",
};

export const BeginGuildPruneResponse = {
  $type: "pylon.discord.v1.rest.BeginGuildPruneResponse" as const,

  encode(
    message: BeginGuildPruneResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BeginGuildPruneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBeginGuildPruneResponse,
    } as BeginGuildPruneResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BeginGuildPruneResponse {
    const message = {
      ...baseBeginGuildPruneResponse,
    } as BeginGuildPruneResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: BeginGuildPruneResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<BeginGuildPruneResponse>
  ): BeginGuildPruneResponse {
    const message = {
      ...baseBeginGuildPruneResponse,
    } as BeginGuildPruneResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(BeginGuildPruneResponse.$type, BeginGuildPruneResponse);

const baseGetGuildVoiceRegionsRequest: object = {
  $type: "pylon.discord.v1.rest.GetGuildVoiceRegionsRequest",
};

export const GetGuildVoiceRegionsRequest = {
  $type: "pylon.discord.v1.rest.GetGuildVoiceRegionsRequest" as const,

  encode(
    _: GetGuildVoiceRegionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildVoiceRegionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetGuildVoiceRegionsRequest,
    } as GetGuildVoiceRegionsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetGuildVoiceRegionsRequest {
    const message = {
      ...baseGetGuildVoiceRegionsRequest,
    } as GetGuildVoiceRegionsRequest;
    return message;
  },

  toJSON(_: GetGuildVoiceRegionsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<GetGuildVoiceRegionsRequest>
  ): GetGuildVoiceRegionsRequest {
    const message = {
      ...baseGetGuildVoiceRegionsRequest,
    } as GetGuildVoiceRegionsRequest;
    return message;
  },
};

messageTypeRegistry.set(
  GetGuildVoiceRegionsRequest.$type,
  GetGuildVoiceRegionsRequest
);

const baseGetGuildVoiceRegionsResponse: object = {
  $type: "pylon.discord.v1.rest.GetGuildVoiceRegionsResponse",
};

export const GetGuildVoiceRegionsResponse = {
  $type: "pylon.discord.v1.rest.GetGuildVoiceRegionsResponse" as const,

  encode(
    message: GetGuildVoiceRegionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      GetGuildVoiceRegionsResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildVoiceRegionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetGuildVoiceRegionsResponse,
    } as GetGuildVoiceRegionsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: GetGuildVoiceRegionsResponse_Data.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGuildVoiceRegionsResponse {
    const message = {
      ...baseGetGuildVoiceRegionsResponse,
    } as GetGuildVoiceRegionsResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: GetGuildVoiceRegionsResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: GetGuildVoiceRegionsResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? GetGuildVoiceRegionsResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetGuildVoiceRegionsResponse>
  ): GetGuildVoiceRegionsResponse {
    const message = {
      ...baseGetGuildVoiceRegionsResponse,
    } as GetGuildVoiceRegionsResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: GetGuildVoiceRegionsResponse_Data.fromPartial(
          object.response.data
        ),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetGuildVoiceRegionsResponse.$type,
  GetGuildVoiceRegionsResponse
);

const baseGetGuildVoiceRegionsResponse_Data: object = {
  $type: "pylon.discord.v1.rest.GetGuildVoiceRegionsResponse.Data",
  regions: "",
};

export const GetGuildVoiceRegionsResponse_Data = {
  $type: "pylon.discord.v1.rest.GetGuildVoiceRegionsResponse.Data" as const,

  encode(
    message: GetGuildVoiceRegionsResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.regions) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildVoiceRegionsResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetGuildVoiceRegionsResponse_Data,
    } as GetGuildVoiceRegionsResponse_Data;
    message.regions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.regions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGuildVoiceRegionsResponse_Data {
    const message = {
      ...baseGetGuildVoiceRegionsResponse_Data,
    } as GetGuildVoiceRegionsResponse_Data;
    message.regions = [];
    if (object.regions !== undefined && object.regions !== null) {
      for (const e of object.regions) {
        message.regions.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: GetGuildVoiceRegionsResponse_Data): unknown {
    const obj: any = {};
    if (message.regions) {
      obj.regions = message.regions.map((e) => e);
    } else {
      obj.regions = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetGuildVoiceRegionsResponse_Data>
  ): GetGuildVoiceRegionsResponse_Data {
    const message = {
      ...baseGetGuildVoiceRegionsResponse_Data,
    } as GetGuildVoiceRegionsResponse_Data;
    message.regions = [];
    if (object.regions !== undefined && object.regions !== null) {
      for (const e of object.regions) {
        message.regions.push(e);
      }
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetGuildVoiceRegionsResponse_Data.$type,
  GetGuildVoiceRegionsResponse_Data
);

const baseGetGuildInvitesRequest: object = {
  $type: "pylon.discord.v1.rest.GetGuildInvitesRequest",
};

export const GetGuildInvitesRequest = {
  $type: "pylon.discord.v1.rest.GetGuildInvitesRequest" as const,

  encode(
    _: GetGuildInvitesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildInvitesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetGuildInvitesRequest } as GetGuildInvitesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetGuildInvitesRequest {
    const message = { ...baseGetGuildInvitesRequest } as GetGuildInvitesRequest;
    return message;
  },

  toJSON(_: GetGuildInvitesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetGuildInvitesRequest>): GetGuildInvitesRequest {
    const message = { ...baseGetGuildInvitesRequest } as GetGuildInvitesRequest;
    return message;
  },
};

messageTypeRegistry.set(GetGuildInvitesRequest.$type, GetGuildInvitesRequest);

const baseGetGuildInvitesResponse: object = {
  $type: "pylon.discord.v1.rest.GetGuildInvitesResponse",
};

export const GetGuildInvitesResponse = {
  $type: "pylon.discord.v1.rest.GetGuildInvitesResponse" as const,

  encode(
    message: GetGuildInvitesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      GetGuildInvitesResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildInvitesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetGuildInvitesResponse,
    } as GetGuildInvitesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: GetGuildInvitesResponse_Data.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGuildInvitesResponse {
    const message = {
      ...baseGetGuildInvitesResponse,
    } as GetGuildInvitesResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: GetGuildInvitesResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: GetGuildInvitesResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? GetGuildInvitesResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetGuildInvitesResponse>
  ): GetGuildInvitesResponse {
    const message = {
      ...baseGetGuildInvitesResponse,
    } as GetGuildInvitesResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: GetGuildInvitesResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(GetGuildInvitesResponse.$type, GetGuildInvitesResponse);

const baseGetGuildInvitesResponse_Data: object = {
  $type: "pylon.discord.v1.rest.GetGuildInvitesResponse.Data",
};

export const GetGuildInvitesResponse_Data = {
  $type: "pylon.discord.v1.rest.GetGuildInvitesResponse.Data" as const,

  encode(
    message: GetGuildInvitesResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.invites) {
      InviteData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildInvitesResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetGuildInvitesResponse_Data,
    } as GetGuildInvitesResponse_Data;
    message.invites = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invites.push(InviteData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGuildInvitesResponse_Data {
    const message = {
      ...baseGetGuildInvitesResponse_Data,
    } as GetGuildInvitesResponse_Data;
    message.invites = [];
    if (object.invites !== undefined && object.invites !== null) {
      for (const e of object.invites) {
        message.invites.push(InviteData.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GetGuildInvitesResponse_Data): unknown {
    const obj: any = {};
    if (message.invites) {
      obj.invites = message.invites.map((e) =>
        e ? InviteData.toJSON(e) : undefined
      );
    } else {
      obj.invites = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetGuildInvitesResponse_Data>
  ): GetGuildInvitesResponse_Data {
    const message = {
      ...baseGetGuildInvitesResponse_Data,
    } as GetGuildInvitesResponse_Data;
    message.invites = [];
    if (object.invites !== undefined && object.invites !== null) {
      for (const e of object.invites) {
        message.invites.push(InviteData.fromPartial(e));
      }
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetGuildInvitesResponse_Data.$type,
  GetGuildInvitesResponse_Data
);

const baseModifyChannelRequest: object = {
  $type: "pylon.discord.v1.rest.ModifyChannelRequest",
  channelId: "0",
  type: 0,
};

export const ModifyChannelRequest = {
  $type: "pylon.discord.v1.rest.ModifyChannelRequest" as const,

  encode(
    message: ModifyChannelRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.name !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.name! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.position !== undefined) {
      UInt32Value.encode(
        { $type: "google.protobuf.UInt32Value", value: message.position! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.topic !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.topic! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.nsfw !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.nsfw! },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.rateLimitPerUser !== undefined) {
      UInt32Value.encode(
        {
          $type: "google.protobuf.UInt32Value",
          value: message.rateLimitPerUser!,
        },
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.bitrate !== undefined) {
      UInt32Value.encode(
        { $type: "google.protobuf.UInt32Value", value: message.bitrate! },
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.userLimit !== undefined) {
      UInt32Value.encode(
        { $type: "google.protobuf.UInt32Value", value: message.userLimit! },
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.permissionOverwrites !== undefined) {
      ModifyChannelRequest_ChannelPermissionOverwritesValue.encode(
        message.permissionOverwrites,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.parentId !== undefined) {
      SnowflakeValue.encode(
        message.parentId,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseModifyChannelRequest } as ModifyChannelRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.name = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.position = UInt32Value.decode(reader, reader.uint32()).value;
          break;
        case 5:
          message.topic = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 6:
          message.nsfw = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 7:
          message.rateLimitPerUser = UInt32Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 8:
          message.bitrate = UInt32Value.decode(reader, reader.uint32()).value;
          break;
        case 9:
          message.userLimit = UInt32Value.decode(reader, reader.uint32()).value;
          break;
        case 10:
          message.permissionOverwrites = ModifyChannelRequest_ChannelPermissionOverwritesValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.parentId = SnowflakeValue.decode(reader, reader.uint32());
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyChannelRequest {
    const message = { ...baseModifyChannelRequest } as ModifyChannelRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = channelData_ChannelTypeFromJSON(object.type);
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = Number(object.position);
    }
    if (object.topic !== undefined && object.topic !== null) {
      message.topic = String(object.topic);
    }
    if (object.nsfw !== undefined && object.nsfw !== null) {
      message.nsfw = Boolean(object.nsfw);
    }
    if (
      object.rateLimitPerUser !== undefined &&
      object.rateLimitPerUser !== null
    ) {
      message.rateLimitPerUser = Number(object.rateLimitPerUser);
    }
    if (object.bitrate !== undefined && object.bitrate !== null) {
      message.bitrate = Number(object.bitrate);
    }
    if (object.userLimit !== undefined && object.userLimit !== null) {
      message.userLimit = Number(object.userLimit);
    }
    if (
      object.permissionOverwrites !== undefined &&
      object.permissionOverwrites !== null
    ) {
      message.permissionOverwrites = ModifyChannelRequest_ChannelPermissionOverwritesValue.fromJSON(
        object.permissionOverwrites
      );
    }
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = SnowflakeValue.fromJSON(object.parentId);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: ModifyChannelRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined &&
      (obj.type = channelData_ChannelTypeToJSON(message.type));
    message.position !== undefined && (obj.position = message.position);
    message.topic !== undefined && (obj.topic = message.topic);
    message.nsfw !== undefined && (obj.nsfw = message.nsfw);
    message.rateLimitPerUser !== undefined &&
      (obj.rateLimitPerUser = message.rateLimitPerUser);
    message.bitrate !== undefined && (obj.bitrate = message.bitrate);
    message.userLimit !== undefined && (obj.userLimit = message.userLimit);
    message.permissionOverwrites !== undefined &&
      (obj.permissionOverwrites = message.permissionOverwrites
        ? ModifyChannelRequest_ChannelPermissionOverwritesValue.toJSON(
            message.permissionOverwrites
          )
        : undefined);
    message.parentId !== undefined &&
      (obj.parentId = message.parentId
        ? SnowflakeValue.toJSON(message.parentId)
        : undefined);
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(object: DeepPartial<ModifyChannelRequest>): ModifyChannelRequest {
    const message = { ...baseModifyChannelRequest } as ModifyChannelRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = object.position;
    }
    if (object.topic !== undefined && object.topic !== null) {
      message.topic = object.topic;
    }
    if (object.nsfw !== undefined && object.nsfw !== null) {
      message.nsfw = object.nsfw;
    }
    if (
      object.rateLimitPerUser !== undefined &&
      object.rateLimitPerUser !== null
    ) {
      message.rateLimitPerUser = object.rateLimitPerUser;
    }
    if (object.bitrate !== undefined && object.bitrate !== null) {
      message.bitrate = object.bitrate;
    }
    if (object.userLimit !== undefined && object.userLimit !== null) {
      message.userLimit = object.userLimit;
    }
    if (
      object.permissionOverwrites !== undefined &&
      object.permissionOverwrites !== null
    ) {
      message.permissionOverwrites = ModifyChannelRequest_ChannelPermissionOverwritesValue.fromPartial(
        object.permissionOverwrites
      );
    }
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = SnowflakeValue.fromPartial(object.parentId);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(ModifyChannelRequest.$type, ModifyChannelRequest);

const baseModifyChannelRequest_ChannelPermissionOverwritesValue: object = {
  $type:
    "pylon.discord.v1.rest.ModifyChannelRequest.ChannelPermissionOverwritesValue",
};

export const ModifyChannelRequest_ChannelPermissionOverwritesValue = {
  $type: "pylon.discord.v1.rest.ModifyChannelRequest.ChannelPermissionOverwritesValue" as const,

  encode(
    message: ModifyChannelRequest_ChannelPermissionOverwritesValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.values) {
      ChannelData_ChannelPermissionOverwriteData.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyChannelRequest_ChannelPermissionOverwritesValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyChannelRequest_ChannelPermissionOverwritesValue,
    } as ModifyChannelRequest_ChannelPermissionOverwritesValue;
    message.values = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(
            ChannelData_ChannelPermissionOverwriteData.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyChannelRequest_ChannelPermissionOverwritesValue {
    const message = {
      ...baseModifyChannelRequest_ChannelPermissionOverwritesValue,
    } as ModifyChannelRequest_ChannelPermissionOverwritesValue;
    message.values = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(
          ChannelData_ChannelPermissionOverwriteData.fromJSON(e)
        );
      }
    }
    return message;
  },

  toJSON(
    message: ModifyChannelRequest_ChannelPermissionOverwritesValue
  ): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) =>
        e ? ChannelData_ChannelPermissionOverwriteData.toJSON(e) : undefined
      );
    } else {
      obj.values = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyChannelRequest_ChannelPermissionOverwritesValue>
  ): ModifyChannelRequest_ChannelPermissionOverwritesValue {
    const message = {
      ...baseModifyChannelRequest_ChannelPermissionOverwritesValue,
    } as ModifyChannelRequest_ChannelPermissionOverwritesValue;
    message.values = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(
          ChannelData_ChannelPermissionOverwriteData.fromPartial(e)
        );
      }
    }
    return message;
  },
};

messageTypeRegistry.set(
  ModifyChannelRequest_ChannelPermissionOverwritesValue.$type,
  ModifyChannelRequest_ChannelPermissionOverwritesValue
);

const baseModifyChannelResponse: object = {
  $type: "pylon.discord.v1.rest.ModifyChannelResponse",
};

export const ModifyChannelResponse = {
  $type: "pylon.discord.v1.rest.ModifyChannelResponse" as const,

  encode(
    message: ModifyChannelResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      ModifyChannelResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseModifyChannelResponse } as ModifyChannelResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: ModifyChannelResponse_Data.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyChannelResponse {
    const message = { ...baseModifyChannelResponse } as ModifyChannelResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: ModifyChannelResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: ModifyChannelResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? ModifyChannelResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyChannelResponse>
  ): ModifyChannelResponse {
    const message = { ...baseModifyChannelResponse } as ModifyChannelResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: ModifyChannelResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(ModifyChannelResponse.$type, ModifyChannelResponse);

const baseModifyChannelResponse_Data: object = {
  $type: "pylon.discord.v1.rest.ModifyChannelResponse.Data",
};

export const ModifyChannelResponse_Data = {
  $type: "pylon.discord.v1.rest.ModifyChannelResponse.Data" as const,

  encode(
    message: ModifyChannelResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channel !== undefined) {
      ChannelData.encode(message.channel, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyChannelResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyChannelResponse_Data,
    } as ModifyChannelResponse_Data;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel = ChannelData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyChannelResponse_Data {
    const message = {
      ...baseModifyChannelResponse_Data,
    } as ModifyChannelResponse_Data;
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = ChannelData.fromJSON(object.channel);
    }
    return message;
  },

  toJSON(message: ModifyChannelResponse_Data): unknown {
    const obj: any = {};
    message.channel !== undefined &&
      (obj.channel = message.channel
        ? ChannelData.toJSON(message.channel)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyChannelResponse_Data>
  ): ModifyChannelResponse_Data {
    const message = {
      ...baseModifyChannelResponse_Data,
    } as ModifyChannelResponse_Data;
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = ChannelData.fromPartial(object.channel);
    }
    return message;
  },
};

messageTypeRegistry.set(
  ModifyChannelResponse_Data.$type,
  ModifyChannelResponse_Data
);

const baseDeleteChannelRequest: object = {
  $type: "pylon.discord.v1.rest.DeleteChannelRequest",
  channelId: "0",
};

export const DeleteChannelRequest = {
  $type: "pylon.discord.v1.rest.DeleteChannelRequest" as const,

  encode(
    message: DeleteChannelRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteChannelRequest } as DeleteChannelRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteChannelRequest {
    const message = { ...baseDeleteChannelRequest } as DeleteChannelRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: DeleteChannelRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteChannelRequest>): DeleteChannelRequest {
    const message = { ...baseDeleteChannelRequest } as DeleteChannelRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(DeleteChannelRequest.$type, DeleteChannelRequest);

const baseDeleteChannelResponse: object = {
  $type: "pylon.discord.v1.rest.DeleteChannelResponse",
};

export const DeleteChannelResponse = {
  $type: "pylon.discord.v1.rest.DeleteChannelResponse" as const,

  encode(
    message: DeleteChannelResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteChannelResponse } as DeleteChannelResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteChannelResponse {
    const message = { ...baseDeleteChannelResponse } as DeleteChannelResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: DeleteChannelResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteChannelResponse>
  ): DeleteChannelResponse {
    const message = { ...baseDeleteChannelResponse } as DeleteChannelResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(DeleteChannelResponse.$type, DeleteChannelResponse);

const baseGetChannelMessagesRequest: object = {
  $type: "pylon.discord.v1.rest.GetChannelMessagesRequest",
  channelId: "0",
  limit: 0,
};

export const GetChannelMessagesRequest = {
  $type: "pylon.discord.v1.rest.GetChannelMessagesRequest" as const,

  encode(
    message: GetChannelMessagesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.around !== undefined) {
      SnowflakeValue.encode(message.around, writer.uint32(18).fork()).ldelim();
    }
    if (message.before !== undefined) {
      SnowflakeValue.encode(message.before, writer.uint32(26).fork()).ldelim();
    }
    if (message.after !== undefined) {
      SnowflakeValue.encode(message.after, writer.uint32(34).fork()).ldelim();
    }
    if (message.limit !== 0) {
      writer.uint32(40).uint32(message.limit);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetChannelMessagesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetChannelMessagesRequest,
    } as GetChannelMessagesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.around = SnowflakeValue.decode(reader, reader.uint32());
          break;
        case 3:
          message.before = SnowflakeValue.decode(reader, reader.uint32());
          break;
        case 4:
          message.after = SnowflakeValue.decode(reader, reader.uint32());
          break;
        case 5:
          message.limit = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetChannelMessagesRequest {
    const message = {
      ...baseGetChannelMessagesRequest,
    } as GetChannelMessagesRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    if (object.around !== undefined && object.around !== null) {
      message.around = SnowflakeValue.fromJSON(object.around);
    }
    if (object.before !== undefined && object.before !== null) {
      message.before = SnowflakeValue.fromJSON(object.before);
    }
    if (object.after !== undefined && object.after !== null) {
      message.after = SnowflakeValue.fromJSON(object.after);
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = Number(object.limit);
    }
    return message;
  },

  toJSON(message: GetChannelMessagesRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.around !== undefined &&
      (obj.around = message.around
        ? SnowflakeValue.toJSON(message.around)
        : undefined);
    message.before !== undefined &&
      (obj.before = message.before
        ? SnowflakeValue.toJSON(message.before)
        : undefined);
    message.after !== undefined &&
      (obj.after = message.after
        ? SnowflakeValue.toJSON(message.after)
        : undefined);
    message.limit !== undefined && (obj.limit = message.limit);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetChannelMessagesRequest>
  ): GetChannelMessagesRequest {
    const message = {
      ...baseGetChannelMessagesRequest,
    } as GetChannelMessagesRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    if (object.around !== undefined && object.around !== null) {
      message.around = SnowflakeValue.fromPartial(object.around);
    }
    if (object.before !== undefined && object.before !== null) {
      message.before = SnowflakeValue.fromPartial(object.before);
    }
    if (object.after !== undefined && object.after !== null) {
      message.after = SnowflakeValue.fromPartial(object.after);
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit;
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetChannelMessagesRequest.$type,
  GetChannelMessagesRequest
);

const baseGetChannelMessagesResponse: object = {
  $type: "pylon.discord.v1.rest.GetChannelMessagesResponse",
};

export const GetChannelMessagesResponse = {
  $type: "pylon.discord.v1.rest.GetChannelMessagesResponse" as const,

  encode(
    message: GetChannelMessagesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      GetChannelMessagesResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetChannelMessagesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetChannelMessagesResponse,
    } as GetChannelMessagesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: GetChannelMessagesResponse_Data.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetChannelMessagesResponse {
    const message = {
      ...baseGetChannelMessagesResponse,
    } as GetChannelMessagesResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: GetChannelMessagesResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: GetChannelMessagesResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? GetChannelMessagesResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetChannelMessagesResponse>
  ): GetChannelMessagesResponse {
    const message = {
      ...baseGetChannelMessagesResponse,
    } as GetChannelMessagesResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: GetChannelMessagesResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetChannelMessagesResponse.$type,
  GetChannelMessagesResponse
);

const baseGetChannelMessagesResponse_Data: object = {
  $type: "pylon.discord.v1.rest.GetChannelMessagesResponse.Data",
};

export const GetChannelMessagesResponse_Data = {
  $type: "pylon.discord.v1.rest.GetChannelMessagesResponse.Data" as const,

  encode(
    message: GetChannelMessagesResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.messages) {
      MessageData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetChannelMessagesResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetChannelMessagesResponse_Data,
    } as GetChannelMessagesResponse_Data;
    message.messages = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(MessageData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetChannelMessagesResponse_Data {
    const message = {
      ...baseGetChannelMessagesResponse_Data,
    } as GetChannelMessagesResponse_Data;
    message.messages = [];
    if (object.messages !== undefined && object.messages !== null) {
      for (const e of object.messages) {
        message.messages.push(MessageData.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GetChannelMessagesResponse_Data): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) =>
        e ? MessageData.toJSON(e) : undefined
      );
    } else {
      obj.messages = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetChannelMessagesResponse_Data>
  ): GetChannelMessagesResponse_Data {
    const message = {
      ...baseGetChannelMessagesResponse_Data,
    } as GetChannelMessagesResponse_Data;
    message.messages = [];
    if (object.messages !== undefined && object.messages !== null) {
      for (const e of object.messages) {
        message.messages.push(MessageData.fromPartial(e));
      }
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetChannelMessagesResponse_Data.$type,
  GetChannelMessagesResponse_Data
);

const baseGetChannelMessageRequest: object = {
  $type: "pylon.discord.v1.rest.GetChannelMessageRequest",
  channelId: "0",
  messageId: "0",
};

export const GetChannelMessageRequest = {
  $type: "pylon.discord.v1.rest.GetChannelMessageRequest" as const,

  encode(
    message: GetChannelMessageRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.messageId !== "0") {
      writer.uint32(17).fixed64(message.messageId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetChannelMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetChannelMessageRequest,
    } as GetChannelMessageRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.messageId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetChannelMessageRequest {
    const message = {
      ...baseGetChannelMessageRequest,
    } as GetChannelMessageRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = String(object.messageId);
    }
    return message;
  },

  toJSON(message: GetChannelMessageRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.messageId !== undefined && (obj.messageId = message.messageId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetChannelMessageRequest>
  ): GetChannelMessageRequest {
    const message = {
      ...baseGetChannelMessageRequest,
    } as GetChannelMessageRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = object.messageId;
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetChannelMessageRequest.$type,
  GetChannelMessageRequest
);

const baseGetChannelMessageResponse: object = {
  $type: "pylon.discord.v1.rest.GetChannelMessageResponse",
};

export const GetChannelMessageResponse = {
  $type: "pylon.discord.v1.rest.GetChannelMessageResponse" as const,

  encode(
    message: GetChannelMessageResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      GetChannelMessageResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetChannelMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetChannelMessageResponse,
    } as GetChannelMessageResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: GetChannelMessageResponse_Data.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetChannelMessageResponse {
    const message = {
      ...baseGetChannelMessageResponse,
    } as GetChannelMessageResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: GetChannelMessageResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: GetChannelMessageResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? GetChannelMessageResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetChannelMessageResponse>
  ): GetChannelMessageResponse {
    const message = {
      ...baseGetChannelMessageResponse,
    } as GetChannelMessageResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: GetChannelMessageResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetChannelMessageResponse.$type,
  GetChannelMessageResponse
);

const baseGetChannelMessageResponse_Data: object = {
  $type: "pylon.discord.v1.rest.GetChannelMessageResponse.Data",
};

export const GetChannelMessageResponse_Data = {
  $type: "pylon.discord.v1.rest.GetChannelMessageResponse.Data" as const,

  encode(
    message: GetChannelMessageResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.message !== undefined) {
      MessageData.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetChannelMessageResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetChannelMessageResponse_Data,
    } as GetChannelMessageResponse_Data;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = MessageData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetChannelMessageResponse_Data {
    const message = {
      ...baseGetChannelMessageResponse_Data,
    } as GetChannelMessageResponse_Data;
    if (object.message !== undefined && object.message !== null) {
      message.message = MessageData.fromJSON(object.message);
    }
    return message;
  },

  toJSON(message: GetChannelMessageResponse_Data): unknown {
    const obj: any = {};
    message.message !== undefined &&
      (obj.message = message.message
        ? MessageData.toJSON(message.message)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetChannelMessageResponse_Data>
  ): GetChannelMessageResponse_Data {
    const message = {
      ...baseGetChannelMessageResponse_Data,
    } as GetChannelMessageResponse_Data;
    if (object.message !== undefined && object.message !== null) {
      message.message = MessageData.fromPartial(object.message);
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetChannelMessageResponse_Data.$type,
  GetChannelMessageResponse_Data
);

const baseCreateMessageRequest: object = {
  $type: "pylon.discord.v1.rest.CreateMessageRequest",
  channelId: "0",
  content: "",
};

export const CreateMessageRequest = {
  $type: "pylon.discord.v1.rest.CreateMessageRequest" as const,

  encode(
    message: CreateMessageRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.content !== "") {
      writer.uint32(18).string(message.content);
    }
    if (message.nonce !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.nonce! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.tts !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.tts! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.embed !== undefined) {
      MessageData_MessageEmbedData.encode(
        message.embed,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.allowedMentions !== undefined) {
      CreateMessageRequest_AllowedMentions.encode(
        message.allowedMentions,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.attachment !== undefined) {
      CreateMessageRequest_Attachment.encode(
        message.attachment,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateMessageRequest } as CreateMessageRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.content = reader.string();
          break;
        case 3:
          message.nonce = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.tts = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 5:
          message.embed = MessageData_MessageEmbedData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.allowedMentions = CreateMessageRequest_AllowedMentions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.attachment = CreateMessageRequest_Attachment.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateMessageRequest {
    const message = { ...baseCreateMessageRequest } as CreateMessageRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = String(object.content);
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = String(object.nonce);
    }
    if (object.tts !== undefined && object.tts !== null) {
      message.tts = Boolean(object.tts);
    }
    if (object.embed !== undefined && object.embed !== null) {
      message.embed = MessageData_MessageEmbedData.fromJSON(object.embed);
    }
    if (
      object.allowedMentions !== undefined &&
      object.allowedMentions !== null
    ) {
      message.allowedMentions = CreateMessageRequest_AllowedMentions.fromJSON(
        object.allowedMentions
      );
    }
    if (object.attachment !== undefined && object.attachment !== null) {
      message.attachment = CreateMessageRequest_Attachment.fromJSON(
        object.attachment
      );
    }
    return message;
  },

  toJSON(message: CreateMessageRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.content !== undefined && (obj.content = message.content);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.tts !== undefined && (obj.tts = message.tts);
    message.embed !== undefined &&
      (obj.embed = message.embed
        ? MessageData_MessageEmbedData.toJSON(message.embed)
        : undefined);
    message.allowedMentions !== undefined &&
      (obj.allowedMentions = message.allowedMentions
        ? CreateMessageRequest_AllowedMentions.toJSON(message.allowedMentions)
        : undefined);
    message.attachment !== undefined &&
      (obj.attachment = message.attachment
        ? CreateMessageRequest_Attachment.toJSON(message.attachment)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateMessageRequest>): CreateMessageRequest {
    const message = { ...baseCreateMessageRequest } as CreateMessageRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    }
    if (object.tts !== undefined && object.tts !== null) {
      message.tts = object.tts;
    }
    if (object.embed !== undefined && object.embed !== null) {
      message.embed = MessageData_MessageEmbedData.fromPartial(object.embed);
    }
    if (
      object.allowedMentions !== undefined &&
      object.allowedMentions !== null
    ) {
      message.allowedMentions = CreateMessageRequest_AllowedMentions.fromPartial(
        object.allowedMentions
      );
    }
    if (object.attachment !== undefined && object.attachment !== null) {
      message.attachment = CreateMessageRequest_Attachment.fromPartial(
        object.attachment
      );
    }
    return message;
  },
};

messageTypeRegistry.set(CreateMessageRequest.$type, CreateMessageRequest);

const baseCreateMessageRequest_AllowedMentions: object = {
  $type: "pylon.discord.v1.rest.CreateMessageRequest.AllowedMentions",
};

export const CreateMessageRequest_AllowedMentions = {
  $type: "pylon.discord.v1.rest.CreateMessageRequest.AllowedMentions" as const,

  encode(
    message: CreateMessageRequest_AllowedMentions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.parse !== undefined) {
      CreateMessageRequest_AllowedMentions_AllowedMentionTypes.encode(
        message.parse,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.roles !== undefined) {
      SnowflakeListValue.encode(
        message.roles,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.users !== undefined) {
      SnowflakeListValue.encode(
        message.users,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateMessageRequest_AllowedMentions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateMessageRequest_AllowedMentions,
    } as CreateMessageRequest_AllowedMentions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parse = CreateMessageRequest_AllowedMentions_AllowedMentionTypes.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.roles = SnowflakeListValue.decode(reader, reader.uint32());
          break;
        case 3:
          message.users = SnowflakeListValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateMessageRequest_AllowedMentions {
    const message = {
      ...baseCreateMessageRequest_AllowedMentions,
    } as CreateMessageRequest_AllowedMentions;
    if (object.parse !== undefined && object.parse !== null) {
      message.parse = CreateMessageRequest_AllowedMentions_AllowedMentionTypes.fromJSON(
        object.parse
      );
    }
    if (object.roles !== undefined && object.roles !== null) {
      message.roles = SnowflakeListValue.fromJSON(object.roles);
    }
    if (object.users !== undefined && object.users !== null) {
      message.users = SnowflakeListValue.fromJSON(object.users);
    }
    return message;
  },

  toJSON(message: CreateMessageRequest_AllowedMentions): unknown {
    const obj: any = {};
    message.parse !== undefined &&
      (obj.parse = message.parse
        ? CreateMessageRequest_AllowedMentions_AllowedMentionTypes.toJSON(
            message.parse
          )
        : undefined);
    message.roles !== undefined &&
      (obj.roles = message.roles
        ? SnowflakeListValue.toJSON(message.roles)
        : undefined);
    message.users !== undefined &&
      (obj.users = message.users
        ? SnowflakeListValue.toJSON(message.users)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateMessageRequest_AllowedMentions>
  ): CreateMessageRequest_AllowedMentions {
    const message = {
      ...baseCreateMessageRequest_AllowedMentions,
    } as CreateMessageRequest_AllowedMentions;
    if (object.parse !== undefined && object.parse !== null) {
      message.parse = CreateMessageRequest_AllowedMentions_AllowedMentionTypes.fromPartial(
        object.parse
      );
    }
    if (object.roles !== undefined && object.roles !== null) {
      message.roles = SnowflakeListValue.fromPartial(object.roles);
    }
    if (object.users !== undefined && object.users !== null) {
      message.users = SnowflakeListValue.fromPartial(object.users);
    }
    return message;
  },
};

messageTypeRegistry.set(
  CreateMessageRequest_AllowedMentions.$type,
  CreateMessageRequest_AllowedMentions
);

const baseCreateMessageRequest_AllowedMentions_AllowedMentionTypes: object = {
  $type:
    "pylon.discord.v1.rest.CreateMessageRequest.AllowedMentions.AllowedMentionTypes",
  roles: false,
  users: false,
  everyone: false,
};

export const CreateMessageRequest_AllowedMentions_AllowedMentionTypes = {
  $type: "pylon.discord.v1.rest.CreateMessageRequest.AllowedMentions.AllowedMentionTypes" as const,

  encode(
    message: CreateMessageRequest_AllowedMentions_AllowedMentionTypes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.roles === true) {
      writer.uint32(8).bool(message.roles);
    }
    if (message.users === true) {
      writer.uint32(16).bool(message.users);
    }
    if (message.everyone === true) {
      writer.uint32(24).bool(message.everyone);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateMessageRequest_AllowedMentions_AllowedMentionTypes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateMessageRequest_AllowedMentions_AllowedMentionTypes,
    } as CreateMessageRequest_AllowedMentions_AllowedMentionTypes;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roles = reader.bool();
          break;
        case 2:
          message.users = reader.bool();
          break;
        case 3:
          message.everyone = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(
    object: any
  ): CreateMessageRequest_AllowedMentions_AllowedMentionTypes {
    const message = {
      ...baseCreateMessageRequest_AllowedMentions_AllowedMentionTypes,
    } as CreateMessageRequest_AllowedMentions_AllowedMentionTypes;
    if (object.roles !== undefined && object.roles !== null) {
      message.roles = Boolean(object.roles);
    }
    if (object.users !== undefined && object.users !== null) {
      message.users = Boolean(object.users);
    }
    if (object.everyone !== undefined && object.everyone !== null) {
      message.everyone = Boolean(object.everyone);
    }
    return message;
  },

  toJSON(
    message: CreateMessageRequest_AllowedMentions_AllowedMentionTypes
  ): unknown {
    const obj: any = {};
    message.roles !== undefined && (obj.roles = message.roles);
    message.users !== undefined && (obj.users = message.users);
    message.everyone !== undefined && (obj.everyone = message.everyone);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateMessageRequest_AllowedMentions_AllowedMentionTypes>
  ): CreateMessageRequest_AllowedMentions_AllowedMentionTypes {
    const message = {
      ...baseCreateMessageRequest_AllowedMentions_AllowedMentionTypes,
    } as CreateMessageRequest_AllowedMentions_AllowedMentionTypes;
    if (object.roles !== undefined && object.roles !== null) {
      message.roles = object.roles;
    }
    if (object.users !== undefined && object.users !== null) {
      message.users = object.users;
    }
    if (object.everyone !== undefined && object.everyone !== null) {
      message.everyone = object.everyone;
    }
    return message;
  },
};

messageTypeRegistry.set(
  CreateMessageRequest_AllowedMentions_AllowedMentionTypes.$type,
  CreateMessageRequest_AllowedMentions_AllowedMentionTypes
);

const baseCreateMessageRequest_Attachment: object = {
  $type: "pylon.discord.v1.rest.CreateMessageRequest.Attachment",
  name: "",
};

export const CreateMessageRequest_Attachment = {
  $type: "pylon.discord.v1.rest.CreateMessageRequest.Attachment" as const,

  encode(
    message: CreateMessageRequest_Attachment,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.content.length !== 0) {
      writer.uint32(18).bytes(message.content);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateMessageRequest_Attachment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateMessageRequest_Attachment,
    } as CreateMessageRequest_Attachment;
    message.content = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.content = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateMessageRequest_Attachment {
    const message = {
      ...baseCreateMessageRequest_Attachment,
    } as CreateMessageRequest_Attachment;
    message.content = new Uint8Array();
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = bytesFromBase64(object.content);
    }
    return message;
  },

  toJSON(message: CreateMessageRequest_Attachment): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.content !== undefined &&
      (obj.content = base64FromBytes(
        message.content !== undefined ? message.content : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateMessageRequest_Attachment>
  ): CreateMessageRequest_Attachment {
    const message = {
      ...baseCreateMessageRequest_Attachment,
    } as CreateMessageRequest_Attachment;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    }
    return message;
  },
};

messageTypeRegistry.set(
  CreateMessageRequest_Attachment.$type,
  CreateMessageRequest_Attachment
);

const baseCreateMessageResponse: object = {
  $type: "pylon.discord.v1.rest.CreateMessageResponse",
};

export const CreateMessageResponse = {
  $type: "pylon.discord.v1.rest.CreateMessageResponse" as const,

  encode(
    message: CreateMessageResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      CreateMessageResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateMessageResponse } as CreateMessageResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: CreateMessageResponse_Data.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateMessageResponse {
    const message = { ...baseCreateMessageResponse } as CreateMessageResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: CreateMessageResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: CreateMessageResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? CreateMessageResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateMessageResponse>
  ): CreateMessageResponse {
    const message = { ...baseCreateMessageResponse } as CreateMessageResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: CreateMessageResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(CreateMessageResponse.$type, CreateMessageResponse);

const baseCreateMessageResponse_Data: object = {
  $type: "pylon.discord.v1.rest.CreateMessageResponse.Data",
};

export const CreateMessageResponse_Data = {
  $type: "pylon.discord.v1.rest.CreateMessageResponse.Data" as const,

  encode(
    message: CreateMessageResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.message !== undefined) {
      MessageData.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateMessageResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateMessageResponse_Data,
    } as CreateMessageResponse_Data;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = MessageData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateMessageResponse_Data {
    const message = {
      ...baseCreateMessageResponse_Data,
    } as CreateMessageResponse_Data;
    if (object.message !== undefined && object.message !== null) {
      message.message = MessageData.fromJSON(object.message);
    }
    return message;
  },

  toJSON(message: CreateMessageResponse_Data): unknown {
    const obj: any = {};
    message.message !== undefined &&
      (obj.message = message.message
        ? MessageData.toJSON(message.message)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateMessageResponse_Data>
  ): CreateMessageResponse_Data {
    const message = {
      ...baseCreateMessageResponse_Data,
    } as CreateMessageResponse_Data;
    if (object.message !== undefined && object.message !== null) {
      message.message = MessageData.fromPartial(object.message);
    }
    return message;
  },
};

messageTypeRegistry.set(
  CreateMessageResponse_Data.$type,
  CreateMessageResponse_Data
);

const baseCrosspostMessageRequest: object = {
  $type: "pylon.discord.v1.rest.CrosspostMessageRequest",
  channelId: "0",
  messageId: "0",
};

export const CrosspostMessageRequest = {
  $type: "pylon.discord.v1.rest.CrosspostMessageRequest" as const,

  encode(
    message: CrosspostMessageRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.messageId !== "0") {
      writer.uint32(17).fixed64(message.messageId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CrosspostMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCrosspostMessageRequest,
    } as CrosspostMessageRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.messageId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CrosspostMessageRequest {
    const message = {
      ...baseCrosspostMessageRequest,
    } as CrosspostMessageRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = String(object.messageId);
    }
    return message;
  },

  toJSON(message: CrosspostMessageRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.messageId !== undefined && (obj.messageId = message.messageId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CrosspostMessageRequest>
  ): CrosspostMessageRequest {
    const message = {
      ...baseCrosspostMessageRequest,
    } as CrosspostMessageRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = object.messageId;
    }
    return message;
  },
};

messageTypeRegistry.set(CrosspostMessageRequest.$type, CrosspostMessageRequest);

const baseCrosspostMessageResponse: object = {
  $type: "pylon.discord.v1.rest.CrosspostMessageResponse",
};

export const CrosspostMessageResponse = {
  $type: "pylon.discord.v1.rest.CrosspostMessageResponse" as const,

  encode(
    message: CrosspostMessageResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      CrosspostMessageResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CrosspostMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCrosspostMessageResponse,
    } as CrosspostMessageResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: CrosspostMessageResponse_Data.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CrosspostMessageResponse {
    const message = {
      ...baseCrosspostMessageResponse,
    } as CrosspostMessageResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: CrosspostMessageResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: CrosspostMessageResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? CrosspostMessageResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CrosspostMessageResponse>
  ): CrosspostMessageResponse {
    const message = {
      ...baseCrosspostMessageResponse,
    } as CrosspostMessageResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: CrosspostMessageResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  CrosspostMessageResponse.$type,
  CrosspostMessageResponse
);

const baseCrosspostMessageResponse_Data: object = {
  $type: "pylon.discord.v1.rest.CrosspostMessageResponse.Data",
};

export const CrosspostMessageResponse_Data = {
  $type: "pylon.discord.v1.rest.CrosspostMessageResponse.Data" as const,

  encode(
    message: CrosspostMessageResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.message !== undefined) {
      MessageData.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CrosspostMessageResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCrosspostMessageResponse_Data,
    } as CrosspostMessageResponse_Data;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = MessageData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CrosspostMessageResponse_Data {
    const message = {
      ...baseCrosspostMessageResponse_Data,
    } as CrosspostMessageResponse_Data;
    if (object.message !== undefined && object.message !== null) {
      message.message = MessageData.fromJSON(object.message);
    }
    return message;
  },

  toJSON(message: CrosspostMessageResponse_Data): unknown {
    const obj: any = {};
    message.message !== undefined &&
      (obj.message = message.message
        ? MessageData.toJSON(message.message)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CrosspostMessageResponse_Data>
  ): CrosspostMessageResponse_Data {
    const message = {
      ...baseCrosspostMessageResponse_Data,
    } as CrosspostMessageResponse_Data;
    if (object.message !== undefined && object.message !== null) {
      message.message = MessageData.fromPartial(object.message);
    }
    return message;
  },
};

messageTypeRegistry.set(
  CrosspostMessageResponse_Data.$type,
  CrosspostMessageResponse_Data
);

const baseCreateReactionRequest: object = {
  $type: "pylon.discord.v1.rest.CreateReactionRequest",
  channelId: "0",
  messageId: "0",
  emoji: "",
};

export const CreateReactionRequest = {
  $type: "pylon.discord.v1.rest.CreateReactionRequest" as const,

  encode(
    message: CreateReactionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.messageId !== "0") {
      writer.uint32(17).fixed64(message.messageId);
    }
    if (message.emoji !== "") {
      writer.uint32(26).string(message.emoji);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateReactionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateReactionRequest } as CreateReactionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.messageId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.emoji = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateReactionRequest {
    const message = { ...baseCreateReactionRequest } as CreateReactionRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = String(object.messageId);
    }
    if (object.emoji !== undefined && object.emoji !== null) {
      message.emoji = String(object.emoji);
    }
    return message;
  },

  toJSON(message: CreateReactionRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.messageId !== undefined && (obj.messageId = message.messageId);
    message.emoji !== undefined && (obj.emoji = message.emoji);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateReactionRequest>
  ): CreateReactionRequest {
    const message = { ...baseCreateReactionRequest } as CreateReactionRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = object.messageId;
    }
    if (object.emoji !== undefined && object.emoji !== null) {
      message.emoji = object.emoji;
    }
    return message;
  },
};

messageTypeRegistry.set(CreateReactionRequest.$type, CreateReactionRequest);

const baseCreateReactionResponse: object = {
  $type: "pylon.discord.v1.rest.CreateReactionResponse",
};

export const CreateReactionResponse = {
  $type: "pylon.discord.v1.rest.CreateReactionResponse" as const,

  encode(
    message: CreateReactionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateReactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateReactionResponse } as CreateReactionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateReactionResponse {
    const message = { ...baseCreateReactionResponse } as CreateReactionResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: CreateReactionResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateReactionResponse>
  ): CreateReactionResponse {
    const message = { ...baseCreateReactionResponse } as CreateReactionResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(CreateReactionResponse.$type, CreateReactionResponse);

const baseDeleteOwnReactionRequest: object = {
  $type: "pylon.discord.v1.rest.DeleteOwnReactionRequest",
  channelId: "0",
  messageId: "0",
  emoji: "",
};

export const DeleteOwnReactionRequest = {
  $type: "pylon.discord.v1.rest.DeleteOwnReactionRequest" as const,

  encode(
    message: DeleteOwnReactionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.messageId !== "0") {
      writer.uint32(17).fixed64(message.messageId);
    }
    if (message.emoji !== "") {
      writer.uint32(26).string(message.emoji);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteOwnReactionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteOwnReactionRequest,
    } as DeleteOwnReactionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.messageId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.emoji = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteOwnReactionRequest {
    const message = {
      ...baseDeleteOwnReactionRequest,
    } as DeleteOwnReactionRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = String(object.messageId);
    }
    if (object.emoji !== undefined && object.emoji !== null) {
      message.emoji = String(object.emoji);
    }
    return message;
  },

  toJSON(message: DeleteOwnReactionRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.messageId !== undefined && (obj.messageId = message.messageId);
    message.emoji !== undefined && (obj.emoji = message.emoji);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteOwnReactionRequest>
  ): DeleteOwnReactionRequest {
    const message = {
      ...baseDeleteOwnReactionRequest,
    } as DeleteOwnReactionRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = object.messageId;
    }
    if (object.emoji !== undefined && object.emoji !== null) {
      message.emoji = object.emoji;
    }
    return message;
  },
};

messageTypeRegistry.set(
  DeleteOwnReactionRequest.$type,
  DeleteOwnReactionRequest
);

const baseDeleteOwnReactionResponse: object = {
  $type: "pylon.discord.v1.rest.DeleteOwnReactionResponse",
};

export const DeleteOwnReactionResponse = {
  $type: "pylon.discord.v1.rest.DeleteOwnReactionResponse" as const,

  encode(
    message: DeleteOwnReactionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteOwnReactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteOwnReactionResponse,
    } as DeleteOwnReactionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteOwnReactionResponse {
    const message = {
      ...baseDeleteOwnReactionResponse,
    } as DeleteOwnReactionResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: DeleteOwnReactionResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteOwnReactionResponse>
  ): DeleteOwnReactionResponse {
    const message = {
      ...baseDeleteOwnReactionResponse,
    } as DeleteOwnReactionResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  DeleteOwnReactionResponse.$type,
  DeleteOwnReactionResponse
);

const baseDeleteUserReactionRequest: object = {
  $type: "pylon.discord.v1.rest.DeleteUserReactionRequest",
  channelId: "0",
  messageId: "0",
  emoji: "",
  userId: "0",
};

export const DeleteUserReactionRequest = {
  $type: "pylon.discord.v1.rest.DeleteUserReactionRequest" as const,

  encode(
    message: DeleteUserReactionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.messageId !== "0") {
      writer.uint32(17).fixed64(message.messageId);
    }
    if (message.emoji !== "") {
      writer.uint32(26).string(message.emoji);
    }
    if (message.userId !== "0") {
      writer.uint32(33).fixed64(message.userId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteUserReactionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteUserReactionRequest,
    } as DeleteUserReactionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.messageId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.emoji = reader.string();
          break;
        case 4:
          message.userId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteUserReactionRequest {
    const message = {
      ...baseDeleteUserReactionRequest,
    } as DeleteUserReactionRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = String(object.messageId);
    }
    if (object.emoji !== undefined && object.emoji !== null) {
      message.emoji = String(object.emoji);
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    }
    return message;
  },

  toJSON(message: DeleteUserReactionRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.messageId !== undefined && (obj.messageId = message.messageId);
    message.emoji !== undefined && (obj.emoji = message.emoji);
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteUserReactionRequest>
  ): DeleteUserReactionRequest {
    const message = {
      ...baseDeleteUserReactionRequest,
    } as DeleteUserReactionRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = object.messageId;
    }
    if (object.emoji !== undefined && object.emoji !== null) {
      message.emoji = object.emoji;
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    }
    return message;
  },
};

messageTypeRegistry.set(
  DeleteUserReactionRequest.$type,
  DeleteUserReactionRequest
);

const baseDeleteUserReactionResponse: object = {
  $type: "pylon.discord.v1.rest.DeleteUserReactionResponse",
};

export const DeleteUserReactionResponse = {
  $type: "pylon.discord.v1.rest.DeleteUserReactionResponse" as const,

  encode(
    message: DeleteUserReactionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteUserReactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteUserReactionResponse,
    } as DeleteUserReactionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteUserReactionResponse {
    const message = {
      ...baseDeleteUserReactionResponse,
    } as DeleteUserReactionResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: DeleteUserReactionResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteUserReactionResponse>
  ): DeleteUserReactionResponse {
    const message = {
      ...baseDeleteUserReactionResponse,
    } as DeleteUserReactionResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  DeleteUserReactionResponse.$type,
  DeleteUserReactionResponse
);

const baseDeleteAllReactionsRequest: object = {
  $type: "pylon.discord.v1.rest.DeleteAllReactionsRequest",
  channelId: "0",
  messageId: "0",
};

export const DeleteAllReactionsRequest = {
  $type: "pylon.discord.v1.rest.DeleteAllReactionsRequest" as const,

  encode(
    message: DeleteAllReactionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.messageId !== "0") {
      writer.uint32(17).fixed64(message.messageId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteAllReactionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteAllReactionsRequest,
    } as DeleteAllReactionsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.messageId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteAllReactionsRequest {
    const message = {
      ...baseDeleteAllReactionsRequest,
    } as DeleteAllReactionsRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = String(object.messageId);
    }
    return message;
  },

  toJSON(message: DeleteAllReactionsRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.messageId !== undefined && (obj.messageId = message.messageId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteAllReactionsRequest>
  ): DeleteAllReactionsRequest {
    const message = {
      ...baseDeleteAllReactionsRequest,
    } as DeleteAllReactionsRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = object.messageId;
    }
    return message;
  },
};

messageTypeRegistry.set(
  DeleteAllReactionsRequest.$type,
  DeleteAllReactionsRequest
);

const baseDeleteAllReactionsResponse: object = {
  $type: "pylon.discord.v1.rest.DeleteAllReactionsResponse",
};

export const DeleteAllReactionsResponse = {
  $type: "pylon.discord.v1.rest.DeleteAllReactionsResponse" as const,

  encode(
    message: DeleteAllReactionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteAllReactionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteAllReactionsResponse,
    } as DeleteAllReactionsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteAllReactionsResponse {
    const message = {
      ...baseDeleteAllReactionsResponse,
    } as DeleteAllReactionsResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: DeleteAllReactionsResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteAllReactionsResponse>
  ): DeleteAllReactionsResponse {
    const message = {
      ...baseDeleteAllReactionsResponse,
    } as DeleteAllReactionsResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  DeleteAllReactionsResponse.$type,
  DeleteAllReactionsResponse
);

const baseDeleteAllReactionsForEmojiRequest: object = {
  $type: "pylon.discord.v1.rest.DeleteAllReactionsForEmojiRequest",
  channelId: "0",
  messageId: "0",
  emoji: "",
};

export const DeleteAllReactionsForEmojiRequest = {
  $type: "pylon.discord.v1.rest.DeleteAllReactionsForEmojiRequest" as const,

  encode(
    message: DeleteAllReactionsForEmojiRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.messageId !== "0") {
      writer.uint32(17).fixed64(message.messageId);
    }
    if (message.emoji !== "") {
      writer.uint32(26).string(message.emoji);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteAllReactionsForEmojiRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteAllReactionsForEmojiRequest,
    } as DeleteAllReactionsForEmojiRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.messageId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.emoji = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteAllReactionsForEmojiRequest {
    const message = {
      ...baseDeleteAllReactionsForEmojiRequest,
    } as DeleteAllReactionsForEmojiRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = String(object.messageId);
    }
    if (object.emoji !== undefined && object.emoji !== null) {
      message.emoji = String(object.emoji);
    }
    return message;
  },

  toJSON(message: DeleteAllReactionsForEmojiRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.messageId !== undefined && (obj.messageId = message.messageId);
    message.emoji !== undefined && (obj.emoji = message.emoji);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteAllReactionsForEmojiRequest>
  ): DeleteAllReactionsForEmojiRequest {
    const message = {
      ...baseDeleteAllReactionsForEmojiRequest,
    } as DeleteAllReactionsForEmojiRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = object.messageId;
    }
    if (object.emoji !== undefined && object.emoji !== null) {
      message.emoji = object.emoji;
    }
    return message;
  },
};

messageTypeRegistry.set(
  DeleteAllReactionsForEmojiRequest.$type,
  DeleteAllReactionsForEmojiRequest
);

const baseDeleteAllReactionsForEmojiResponse: object = {
  $type: "pylon.discord.v1.rest.DeleteAllReactionsForEmojiResponse",
};

export const DeleteAllReactionsForEmojiResponse = {
  $type: "pylon.discord.v1.rest.DeleteAllReactionsForEmojiResponse" as const,

  encode(
    message: DeleteAllReactionsForEmojiResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteAllReactionsForEmojiResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteAllReactionsForEmojiResponse,
    } as DeleteAllReactionsForEmojiResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteAllReactionsForEmojiResponse {
    const message = {
      ...baseDeleteAllReactionsForEmojiResponse,
    } as DeleteAllReactionsForEmojiResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: DeleteAllReactionsForEmojiResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteAllReactionsForEmojiResponse>
  ): DeleteAllReactionsForEmojiResponse {
    const message = {
      ...baseDeleteAllReactionsForEmojiResponse,
    } as DeleteAllReactionsForEmojiResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  DeleteAllReactionsForEmojiResponse.$type,
  DeleteAllReactionsForEmojiResponse
);

const baseEditMessageRequest: object = {
  $type: "pylon.discord.v1.rest.EditMessageRequest",
  channelId: "0",
  messageId: "0",
};

export const EditMessageRequest = {
  $type: "pylon.discord.v1.rest.EditMessageRequest" as const,

  encode(
    message: EditMessageRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.messageId !== "0") {
      writer.uint32(17).fixed64(message.messageId);
    }
    if (message.content !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.content! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.embed !== undefined) {
      MessageData_MessageEmbedData.encode(
        message.embed,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.flags !== undefined) {
      UInt32Value.encode(
        { $type: "google.protobuf.UInt32Value", value: message.flags! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEditMessageRequest } as EditMessageRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.messageId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.content = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.embed = MessageData_MessageEmbedData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.flags = UInt32Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EditMessageRequest {
    const message = { ...baseEditMessageRequest } as EditMessageRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = String(object.messageId);
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = String(object.content);
    }
    if (object.embed !== undefined && object.embed !== null) {
      message.embed = MessageData_MessageEmbedData.fromJSON(object.embed);
    }
    if (object.flags !== undefined && object.flags !== null) {
      message.flags = Number(object.flags);
    }
    return message;
  },

  toJSON(message: EditMessageRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.messageId !== undefined && (obj.messageId = message.messageId);
    message.content !== undefined && (obj.content = message.content);
    message.embed !== undefined &&
      (obj.embed = message.embed
        ? MessageData_MessageEmbedData.toJSON(message.embed)
        : undefined);
    message.flags !== undefined && (obj.flags = message.flags);
    return obj;
  },

  fromPartial(object: DeepPartial<EditMessageRequest>): EditMessageRequest {
    const message = { ...baseEditMessageRequest } as EditMessageRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = object.messageId;
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    }
    if (object.embed !== undefined && object.embed !== null) {
      message.embed = MessageData_MessageEmbedData.fromPartial(object.embed);
    }
    if (object.flags !== undefined && object.flags !== null) {
      message.flags = object.flags;
    }
    return message;
  },
};

messageTypeRegistry.set(EditMessageRequest.$type, EditMessageRequest);

const baseEditMessageResponse: object = {
  $type: "pylon.discord.v1.rest.EditMessageResponse",
};

export const EditMessageResponse = {
  $type: "pylon.discord.v1.rest.EditMessageResponse" as const,

  encode(
    message: EditMessageResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      EditMessageResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEditMessageResponse } as EditMessageResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: EditMessageResponse_Data.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EditMessageResponse {
    const message = { ...baseEditMessageResponse } as EditMessageResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: EditMessageResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: EditMessageResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? EditMessageResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<EditMessageResponse>): EditMessageResponse {
    const message = { ...baseEditMessageResponse } as EditMessageResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: EditMessageResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(EditMessageResponse.$type, EditMessageResponse);

const baseEditMessageResponse_Data: object = {
  $type: "pylon.discord.v1.rest.EditMessageResponse.Data",
};

export const EditMessageResponse_Data = {
  $type: "pylon.discord.v1.rest.EditMessageResponse.Data" as const,

  encode(
    message: EditMessageResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.message !== undefined) {
      MessageData.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EditMessageResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEditMessageResponse_Data,
    } as EditMessageResponse_Data;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = MessageData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EditMessageResponse_Data {
    const message = {
      ...baseEditMessageResponse_Data,
    } as EditMessageResponse_Data;
    if (object.message !== undefined && object.message !== null) {
      message.message = MessageData.fromJSON(object.message);
    }
    return message;
  },

  toJSON(message: EditMessageResponse_Data): unknown {
    const obj: any = {};
    message.message !== undefined &&
      (obj.message = message.message
        ? MessageData.toJSON(message.message)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EditMessageResponse_Data>
  ): EditMessageResponse_Data {
    const message = {
      ...baseEditMessageResponse_Data,
    } as EditMessageResponse_Data;
    if (object.message !== undefined && object.message !== null) {
      message.message = MessageData.fromPartial(object.message);
    }
    return message;
  },
};

messageTypeRegistry.set(
  EditMessageResponse_Data.$type,
  EditMessageResponse_Data
);

const baseDeleteMessageRequest: object = {
  $type: "pylon.discord.v1.rest.DeleteMessageRequest",
  channelId: "0",
  messageId: "0",
};

export const DeleteMessageRequest = {
  $type: "pylon.discord.v1.rest.DeleteMessageRequest" as const,

  encode(
    message: DeleteMessageRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.messageId !== "0") {
      writer.uint32(17).fixed64(message.messageId);
    }
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteMessageRequest } as DeleteMessageRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.messageId = longToString(reader.fixed64() as Long);
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteMessageRequest {
    const message = { ...baseDeleteMessageRequest } as DeleteMessageRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = String(object.messageId);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: DeleteMessageRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.messageId !== undefined && (obj.messageId = message.messageId);
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteMessageRequest>): DeleteMessageRequest {
    const message = { ...baseDeleteMessageRequest } as DeleteMessageRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = object.messageId;
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(DeleteMessageRequest.$type, DeleteMessageRequest);

const baseDeleteMessageResponse: object = {
  $type: "pylon.discord.v1.rest.DeleteMessageResponse",
};

export const DeleteMessageResponse = {
  $type: "pylon.discord.v1.rest.DeleteMessageResponse" as const,

  encode(
    message: DeleteMessageResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteMessageResponse } as DeleteMessageResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteMessageResponse {
    const message = { ...baseDeleteMessageResponse } as DeleteMessageResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: DeleteMessageResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteMessageResponse>
  ): DeleteMessageResponse {
    const message = { ...baseDeleteMessageResponse } as DeleteMessageResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(DeleteMessageResponse.$type, DeleteMessageResponse);

const baseBulkDeleteMessagesRequest: object = {
  $type: "pylon.discord.v1.rest.BulkDeleteMessagesRequest",
  channelId: "0",
  messageIds: "0",
};

export const BulkDeleteMessagesRequest = {
  $type: "pylon.discord.v1.rest.BulkDeleteMessagesRequest" as const,

  encode(
    message: BulkDeleteMessagesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    writer.uint32(18).fork();
    for (const v of message.messageIds) {
      writer.fixed64(v);
    }
    writer.ldelim();
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BulkDeleteMessagesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBulkDeleteMessagesRequest,
    } as BulkDeleteMessagesRequest;
    message.messageIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.messageIds.push(longToString(reader.fixed64() as Long));
            }
          } else {
            message.messageIds.push(longToString(reader.fixed64() as Long));
          }
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BulkDeleteMessagesRequest {
    const message = {
      ...baseBulkDeleteMessagesRequest,
    } as BulkDeleteMessagesRequest;
    message.messageIds = [];
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    if (object.messageIds !== undefined && object.messageIds !== null) {
      for (const e of object.messageIds) {
        message.messageIds.push(String(e));
      }
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: BulkDeleteMessagesRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    if (message.messageIds) {
      obj.messageIds = message.messageIds.map((e) => e);
    } else {
      obj.messageIds = [];
    }
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(
    object: DeepPartial<BulkDeleteMessagesRequest>
  ): BulkDeleteMessagesRequest {
    const message = {
      ...baseBulkDeleteMessagesRequest,
    } as BulkDeleteMessagesRequest;
    message.messageIds = [];
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    if (object.messageIds !== undefined && object.messageIds !== null) {
      for (const e of object.messageIds) {
        message.messageIds.push(e);
      }
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(
  BulkDeleteMessagesRequest.$type,
  BulkDeleteMessagesRequest
);

const baseBulkDeleteMessagesResponse: object = {
  $type: "pylon.discord.v1.rest.BulkDeleteMessagesResponse",
};

export const BulkDeleteMessagesResponse = {
  $type: "pylon.discord.v1.rest.BulkDeleteMessagesResponse" as const,

  encode(
    message: BulkDeleteMessagesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BulkDeleteMessagesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBulkDeleteMessagesResponse,
    } as BulkDeleteMessagesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BulkDeleteMessagesResponse {
    const message = {
      ...baseBulkDeleteMessagesResponse,
    } as BulkDeleteMessagesResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: BulkDeleteMessagesResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<BulkDeleteMessagesResponse>
  ): BulkDeleteMessagesResponse {
    const message = {
      ...baseBulkDeleteMessagesResponse,
    } as BulkDeleteMessagesResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  BulkDeleteMessagesResponse.$type,
  BulkDeleteMessagesResponse
);

const baseEditChannelPermissionsRequest: object = {
  $type: "pylon.discord.v1.rest.EditChannelPermissionsRequest",
  channelId: "0",
  overwriteId: "0",
  allow: "0",
  deny: "0",
  type: 0,
};

export const EditChannelPermissionsRequest = {
  $type: "pylon.discord.v1.rest.EditChannelPermissionsRequest" as const,

  encode(
    message: EditChannelPermissionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.overwriteId !== "0") {
      writer.uint32(17).fixed64(message.overwriteId);
    }
    if (message.allow !== "0") {
      writer.uint32(24).uint64(message.allow);
    }
    if (message.deny !== "0") {
      writer.uint32(32).uint64(message.deny);
    }
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EditChannelPermissionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEditChannelPermissionsRequest,
    } as EditChannelPermissionsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.overwriteId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.allow = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.deny = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.type = reader.int32() as any;
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EditChannelPermissionsRequest {
    const message = {
      ...baseEditChannelPermissionsRequest,
    } as EditChannelPermissionsRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    if (object.overwriteId !== undefined && object.overwriteId !== null) {
      message.overwriteId = String(object.overwriteId);
    }
    if (object.allow !== undefined && object.allow !== null) {
      message.allow = String(object.allow);
    }
    if (object.deny !== undefined && object.deny !== null) {
      message.deny = String(object.deny);
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = channelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteTypeFromJSON(
        object.type
      );
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: EditChannelPermissionsRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.overwriteId !== undefined &&
      (obj.overwriteId = message.overwriteId);
    message.allow !== undefined && (obj.allow = message.allow);
    message.deny !== undefined && (obj.deny = message.deny);
    message.type !== undefined &&
      (obj.type = channelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteTypeToJSON(
        message.type
      ));
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EditChannelPermissionsRequest>
  ): EditChannelPermissionsRequest {
    const message = {
      ...baseEditChannelPermissionsRequest,
    } as EditChannelPermissionsRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    if (object.overwriteId !== undefined && object.overwriteId !== null) {
      message.overwriteId = object.overwriteId;
    }
    if (object.allow !== undefined && object.allow !== null) {
      message.allow = object.allow;
    }
    if (object.deny !== undefined && object.deny !== null) {
      message.deny = object.deny;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(
  EditChannelPermissionsRequest.$type,
  EditChannelPermissionsRequest
);

const baseEditChannelPermissionsResponse: object = {
  $type: "pylon.discord.v1.rest.EditChannelPermissionsResponse",
};

export const EditChannelPermissionsResponse = {
  $type: "pylon.discord.v1.rest.EditChannelPermissionsResponse" as const,

  encode(
    message: EditChannelPermissionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EditChannelPermissionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEditChannelPermissionsResponse,
    } as EditChannelPermissionsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EditChannelPermissionsResponse {
    const message = {
      ...baseEditChannelPermissionsResponse,
    } as EditChannelPermissionsResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: EditChannelPermissionsResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EditChannelPermissionsResponse>
  ): EditChannelPermissionsResponse {
    const message = {
      ...baseEditChannelPermissionsResponse,
    } as EditChannelPermissionsResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  EditChannelPermissionsResponse.$type,
  EditChannelPermissionsResponse
);

const baseGetChannelInvitesRequest: object = {
  $type: "pylon.discord.v1.rest.GetChannelInvitesRequest",
  channelId: "0",
};

export const GetChannelInvitesRequest = {
  $type: "pylon.discord.v1.rest.GetChannelInvitesRequest" as const,

  encode(
    message: GetChannelInvitesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetChannelInvitesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetChannelInvitesRequest,
    } as GetChannelInvitesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetChannelInvitesRequest {
    const message = {
      ...baseGetChannelInvitesRequest,
    } as GetChannelInvitesRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    return message;
  },

  toJSON(message: GetChannelInvitesRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetChannelInvitesRequest>
  ): GetChannelInvitesRequest {
    const message = {
      ...baseGetChannelInvitesRequest,
    } as GetChannelInvitesRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetChannelInvitesRequest.$type,
  GetChannelInvitesRequest
);

const baseGetChannelInvitesResponse: object = {
  $type: "pylon.discord.v1.rest.GetChannelInvitesResponse",
};

export const GetChannelInvitesResponse = {
  $type: "pylon.discord.v1.rest.GetChannelInvitesResponse" as const,

  encode(
    message: GetChannelInvitesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      GetChannelInvitesResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetChannelInvitesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetChannelInvitesResponse,
    } as GetChannelInvitesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: GetChannelInvitesResponse_Data.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetChannelInvitesResponse {
    const message = {
      ...baseGetChannelInvitesResponse,
    } as GetChannelInvitesResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: GetChannelInvitesResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: GetChannelInvitesResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? GetChannelInvitesResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetChannelInvitesResponse>
  ): GetChannelInvitesResponse {
    const message = {
      ...baseGetChannelInvitesResponse,
    } as GetChannelInvitesResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: GetChannelInvitesResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetChannelInvitesResponse.$type,
  GetChannelInvitesResponse
);

const baseGetChannelInvitesResponse_Data: object = {
  $type: "pylon.discord.v1.rest.GetChannelInvitesResponse.Data",
};

export const GetChannelInvitesResponse_Data = {
  $type: "pylon.discord.v1.rest.GetChannelInvitesResponse.Data" as const,

  encode(
    message: GetChannelInvitesResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.invites) {
      InviteData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetChannelInvitesResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetChannelInvitesResponse_Data,
    } as GetChannelInvitesResponse_Data;
    message.invites = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invites.push(InviteData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetChannelInvitesResponse_Data {
    const message = {
      ...baseGetChannelInvitesResponse_Data,
    } as GetChannelInvitesResponse_Data;
    message.invites = [];
    if (object.invites !== undefined && object.invites !== null) {
      for (const e of object.invites) {
        message.invites.push(InviteData.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GetChannelInvitesResponse_Data): unknown {
    const obj: any = {};
    if (message.invites) {
      obj.invites = message.invites.map((e) =>
        e ? InviteData.toJSON(e) : undefined
      );
    } else {
      obj.invites = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetChannelInvitesResponse_Data>
  ): GetChannelInvitesResponse_Data {
    const message = {
      ...baseGetChannelInvitesResponse_Data,
    } as GetChannelInvitesResponse_Data;
    message.invites = [];
    if (object.invites !== undefined && object.invites !== null) {
      for (const e of object.invites) {
        message.invites.push(InviteData.fromPartial(e));
      }
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetChannelInvitesResponse_Data.$type,
  GetChannelInvitesResponse_Data
);

const baseCreateChannelInviteRequest: object = {
  $type: "pylon.discord.v1.rest.CreateChannelInviteRequest",
  channelId: "0",
  targetUserType: 0,
};

export const CreateChannelInviteRequest = {
  $type: "pylon.discord.v1.rest.CreateChannelInviteRequest" as const,

  encode(
    message: CreateChannelInviteRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.maxAge !== undefined) {
      UInt32Value.encode(
        { $type: "google.protobuf.UInt32Value", value: message.maxAge! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.maxUses !== undefined) {
      UInt32Value.encode(
        { $type: "google.protobuf.UInt32Value", value: message.maxUses! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.temporary !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.temporary! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.unique !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.unique! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.targetUser !== undefined) {
      SnowflakeValue.encode(
        message.targetUser,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.targetUserType !== 0) {
      writer.uint32(56).int32(message.targetUserType);
    }
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateChannelInviteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateChannelInviteRequest,
    } as CreateChannelInviteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.maxAge = UInt32Value.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.maxUses = UInt32Value.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.temporary = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 5:
          message.unique = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 6:
          message.targetUser = SnowflakeValue.decode(reader, reader.uint32());
          break;
        case 7:
          message.targetUserType = reader.int32() as any;
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateChannelInviteRequest {
    const message = {
      ...baseCreateChannelInviteRequest,
    } as CreateChannelInviteRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    if (object.maxAge !== undefined && object.maxAge !== null) {
      message.maxAge = Number(object.maxAge);
    }
    if (object.maxUses !== undefined && object.maxUses !== null) {
      message.maxUses = Number(object.maxUses);
    }
    if (object.temporary !== undefined && object.temporary !== null) {
      message.temporary = Boolean(object.temporary);
    }
    if (object.unique !== undefined && object.unique !== null) {
      message.unique = Boolean(object.unique);
    }
    if (object.targetUser !== undefined && object.targetUser !== null) {
      message.targetUser = SnowflakeValue.fromJSON(object.targetUser);
    }
    if (object.targetUserType !== undefined && object.targetUserType !== null) {
      message.targetUserType = inviteData_InviteTargetUserTypeFromJSON(
        object.targetUserType
      );
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: CreateChannelInviteRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.maxAge !== undefined && (obj.maxAge = message.maxAge);
    message.maxUses !== undefined && (obj.maxUses = message.maxUses);
    message.temporary !== undefined && (obj.temporary = message.temporary);
    message.unique !== undefined && (obj.unique = message.unique);
    message.targetUser !== undefined &&
      (obj.targetUser = message.targetUser
        ? SnowflakeValue.toJSON(message.targetUser)
        : undefined);
    message.targetUserType !== undefined &&
      (obj.targetUserType = inviteData_InviteTargetUserTypeToJSON(
        message.targetUserType
      ));
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateChannelInviteRequest>
  ): CreateChannelInviteRequest {
    const message = {
      ...baseCreateChannelInviteRequest,
    } as CreateChannelInviteRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    if (object.maxAge !== undefined && object.maxAge !== null) {
      message.maxAge = object.maxAge;
    }
    if (object.maxUses !== undefined && object.maxUses !== null) {
      message.maxUses = object.maxUses;
    }
    if (object.temporary !== undefined && object.temporary !== null) {
      message.temporary = object.temporary;
    }
    if (object.unique !== undefined && object.unique !== null) {
      message.unique = object.unique;
    }
    if (object.targetUser !== undefined && object.targetUser !== null) {
      message.targetUser = SnowflakeValue.fromPartial(object.targetUser);
    }
    if (object.targetUserType !== undefined && object.targetUserType !== null) {
      message.targetUserType = object.targetUserType;
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(
  CreateChannelInviteRequest.$type,
  CreateChannelInviteRequest
);

const baseCreateChannelInviteResponse: object = {
  $type: "pylon.discord.v1.rest.CreateChannelInviteResponse",
};

export const CreateChannelInviteResponse = {
  $type: "pylon.discord.v1.rest.CreateChannelInviteResponse" as const,

  encode(
    message: CreateChannelInviteResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      CreateChannelInviteResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateChannelInviteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateChannelInviteResponse,
    } as CreateChannelInviteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: CreateChannelInviteResponse_Data.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateChannelInviteResponse {
    const message = {
      ...baseCreateChannelInviteResponse,
    } as CreateChannelInviteResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: CreateChannelInviteResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: CreateChannelInviteResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? CreateChannelInviteResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateChannelInviteResponse>
  ): CreateChannelInviteResponse {
    const message = {
      ...baseCreateChannelInviteResponse,
    } as CreateChannelInviteResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: CreateChannelInviteResponse_Data.fromPartial(
          object.response.data
        ),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  CreateChannelInviteResponse.$type,
  CreateChannelInviteResponse
);

const baseCreateChannelInviteResponse_Data: object = {
  $type: "pylon.discord.v1.rest.CreateChannelInviteResponse.Data",
};

export const CreateChannelInviteResponse_Data = {
  $type: "pylon.discord.v1.rest.CreateChannelInviteResponse.Data" as const,

  encode(
    message: CreateChannelInviteResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.invite !== undefined) {
      InviteData.encode(message.invite, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateChannelInviteResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateChannelInviteResponse_Data,
    } as CreateChannelInviteResponse_Data;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invite = InviteData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateChannelInviteResponse_Data {
    const message = {
      ...baseCreateChannelInviteResponse_Data,
    } as CreateChannelInviteResponse_Data;
    if (object.invite !== undefined && object.invite !== null) {
      message.invite = InviteData.fromJSON(object.invite);
    }
    return message;
  },

  toJSON(message: CreateChannelInviteResponse_Data): unknown {
    const obj: any = {};
    message.invite !== undefined &&
      (obj.invite = message.invite
        ? InviteData.toJSON(message.invite)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateChannelInviteResponse_Data>
  ): CreateChannelInviteResponse_Data {
    const message = {
      ...baseCreateChannelInviteResponse_Data,
    } as CreateChannelInviteResponse_Data;
    if (object.invite !== undefined && object.invite !== null) {
      message.invite = InviteData.fromPartial(object.invite);
    }
    return message;
  },
};

messageTypeRegistry.set(
  CreateChannelInviteResponse_Data.$type,
  CreateChannelInviteResponse_Data
);

const baseDeleteChannelPermissionRequest: object = {
  $type: "pylon.discord.v1.rest.DeleteChannelPermissionRequest",
  channelId: "0",
  overwriteId: "0",
};

export const DeleteChannelPermissionRequest = {
  $type: "pylon.discord.v1.rest.DeleteChannelPermissionRequest" as const,

  encode(
    message: DeleteChannelPermissionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.overwriteId !== "0") {
      writer.uint32(17).fixed64(message.overwriteId);
    }
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteChannelPermissionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteChannelPermissionRequest,
    } as DeleteChannelPermissionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.overwriteId = longToString(reader.fixed64() as Long);
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteChannelPermissionRequest {
    const message = {
      ...baseDeleteChannelPermissionRequest,
    } as DeleteChannelPermissionRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    if (object.overwriteId !== undefined && object.overwriteId !== null) {
      message.overwriteId = String(object.overwriteId);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: DeleteChannelPermissionRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.overwriteId !== undefined &&
      (obj.overwriteId = message.overwriteId);
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteChannelPermissionRequest>
  ): DeleteChannelPermissionRequest {
    const message = {
      ...baseDeleteChannelPermissionRequest,
    } as DeleteChannelPermissionRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    if (object.overwriteId !== undefined && object.overwriteId !== null) {
      message.overwriteId = object.overwriteId;
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(
  DeleteChannelPermissionRequest.$type,
  DeleteChannelPermissionRequest
);

const baseDeleteChannelPermissionResponse: object = {
  $type: "pylon.discord.v1.rest.DeleteChannelPermissionResponse",
};

export const DeleteChannelPermissionResponse = {
  $type: "pylon.discord.v1.rest.DeleteChannelPermissionResponse" as const,

  encode(
    message: DeleteChannelPermissionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteChannelPermissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteChannelPermissionResponse,
    } as DeleteChannelPermissionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteChannelPermissionResponse {
    const message = {
      ...baseDeleteChannelPermissionResponse,
    } as DeleteChannelPermissionResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: DeleteChannelPermissionResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteChannelPermissionResponse>
  ): DeleteChannelPermissionResponse {
    const message = {
      ...baseDeleteChannelPermissionResponse,
    } as DeleteChannelPermissionResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  DeleteChannelPermissionResponse.$type,
  DeleteChannelPermissionResponse
);

const baseFollowNewsChannelRequest: object = {
  $type: "pylon.discord.v1.rest.FollowNewsChannelRequest",
  channelId: "0",
  webhookChannelId: "0",
};

export const FollowNewsChannelRequest = {
  $type: "pylon.discord.v1.rest.FollowNewsChannelRequest" as const,

  encode(
    message: FollowNewsChannelRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.webhookChannelId !== "0") {
      writer.uint32(17).fixed64(message.webhookChannelId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FollowNewsChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFollowNewsChannelRequest,
    } as FollowNewsChannelRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.webhookChannelId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FollowNewsChannelRequest {
    const message = {
      ...baseFollowNewsChannelRequest,
    } as FollowNewsChannelRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    if (
      object.webhookChannelId !== undefined &&
      object.webhookChannelId !== null
    ) {
      message.webhookChannelId = String(object.webhookChannelId);
    }
    return message;
  },

  toJSON(message: FollowNewsChannelRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.webhookChannelId !== undefined &&
      (obj.webhookChannelId = message.webhookChannelId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<FollowNewsChannelRequest>
  ): FollowNewsChannelRequest {
    const message = {
      ...baseFollowNewsChannelRequest,
    } as FollowNewsChannelRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    if (
      object.webhookChannelId !== undefined &&
      object.webhookChannelId !== null
    ) {
      message.webhookChannelId = object.webhookChannelId;
    }
    return message;
  },
};

messageTypeRegistry.set(
  FollowNewsChannelRequest.$type,
  FollowNewsChannelRequest
);

const baseFollowNewsChannelResponse: object = {
  $type: "pylon.discord.v1.rest.FollowNewsChannelResponse",
};

export const FollowNewsChannelResponse = {
  $type: "pylon.discord.v1.rest.FollowNewsChannelResponse" as const,

  encode(
    message: FollowNewsChannelResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      FollowNewsChannelResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FollowNewsChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFollowNewsChannelResponse,
    } as FollowNewsChannelResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: FollowNewsChannelResponse_Data.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FollowNewsChannelResponse {
    const message = {
      ...baseFollowNewsChannelResponse,
    } as FollowNewsChannelResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: FollowNewsChannelResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: FollowNewsChannelResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? FollowNewsChannelResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<FollowNewsChannelResponse>
  ): FollowNewsChannelResponse {
    const message = {
      ...baseFollowNewsChannelResponse,
    } as FollowNewsChannelResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: FollowNewsChannelResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  FollowNewsChannelResponse.$type,
  FollowNewsChannelResponse
);

const baseFollowNewsChannelResponse_Data: object = {
  $type: "pylon.discord.v1.rest.FollowNewsChannelResponse.Data",
  channelId: "0",
  webhookId: "0",
};

export const FollowNewsChannelResponse_Data = {
  $type: "pylon.discord.v1.rest.FollowNewsChannelResponse.Data" as const,

  encode(
    message: FollowNewsChannelResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.webhookId !== "0") {
      writer.uint32(17).fixed64(message.webhookId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FollowNewsChannelResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFollowNewsChannelResponse_Data,
    } as FollowNewsChannelResponse_Data;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.webhookId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FollowNewsChannelResponse_Data {
    const message = {
      ...baseFollowNewsChannelResponse_Data,
    } as FollowNewsChannelResponse_Data;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    if (object.webhookId !== undefined && object.webhookId !== null) {
      message.webhookId = String(object.webhookId);
    }
    return message;
  },

  toJSON(message: FollowNewsChannelResponse_Data): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.webhookId !== undefined && (obj.webhookId = message.webhookId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<FollowNewsChannelResponse_Data>
  ): FollowNewsChannelResponse_Data {
    const message = {
      ...baseFollowNewsChannelResponse_Data,
    } as FollowNewsChannelResponse_Data;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    if (object.webhookId !== undefined && object.webhookId !== null) {
      message.webhookId = object.webhookId;
    }
    return message;
  },
};

messageTypeRegistry.set(
  FollowNewsChannelResponse_Data.$type,
  FollowNewsChannelResponse_Data
);

const baseTriggerTypingIndicatorRequest: object = {
  $type: "pylon.discord.v1.rest.TriggerTypingIndicatorRequest",
  channelId: "0",
};

export const TriggerTypingIndicatorRequest = {
  $type: "pylon.discord.v1.rest.TriggerTypingIndicatorRequest" as const,

  encode(
    message: TriggerTypingIndicatorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TriggerTypingIndicatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTriggerTypingIndicatorRequest,
    } as TriggerTypingIndicatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TriggerTypingIndicatorRequest {
    const message = {
      ...baseTriggerTypingIndicatorRequest,
    } as TriggerTypingIndicatorRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    return message;
  },

  toJSON(message: TriggerTypingIndicatorRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TriggerTypingIndicatorRequest>
  ): TriggerTypingIndicatorRequest {
    const message = {
      ...baseTriggerTypingIndicatorRequest,
    } as TriggerTypingIndicatorRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    return message;
  },
};

messageTypeRegistry.set(
  TriggerTypingIndicatorRequest.$type,
  TriggerTypingIndicatorRequest
);

const baseTriggerTypingIndicatorResponse: object = {
  $type: "pylon.discord.v1.rest.TriggerTypingIndicatorResponse",
};

export const TriggerTypingIndicatorResponse = {
  $type: "pylon.discord.v1.rest.TriggerTypingIndicatorResponse" as const,

  encode(
    message: TriggerTypingIndicatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TriggerTypingIndicatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTriggerTypingIndicatorResponse,
    } as TriggerTypingIndicatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TriggerTypingIndicatorResponse {
    const message = {
      ...baseTriggerTypingIndicatorResponse,
    } as TriggerTypingIndicatorResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: TriggerTypingIndicatorResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TriggerTypingIndicatorResponse>
  ): TriggerTypingIndicatorResponse {
    const message = {
      ...baseTriggerTypingIndicatorResponse,
    } as TriggerTypingIndicatorResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  TriggerTypingIndicatorResponse.$type,
  TriggerTypingIndicatorResponse
);

const baseGetPinnedMessagesRequest: object = {
  $type: "pylon.discord.v1.rest.GetPinnedMessagesRequest",
  channelId: "0",
};

export const GetPinnedMessagesRequest = {
  $type: "pylon.discord.v1.rest.GetPinnedMessagesRequest" as const,

  encode(
    message: GetPinnedMessagesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetPinnedMessagesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetPinnedMessagesRequest,
    } as GetPinnedMessagesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPinnedMessagesRequest {
    const message = {
      ...baseGetPinnedMessagesRequest,
    } as GetPinnedMessagesRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    return message;
  },

  toJSON(message: GetPinnedMessagesRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetPinnedMessagesRequest>
  ): GetPinnedMessagesRequest {
    const message = {
      ...baseGetPinnedMessagesRequest,
    } as GetPinnedMessagesRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetPinnedMessagesRequest.$type,
  GetPinnedMessagesRequest
);

const baseGetPinnedMessagesResponse: object = {
  $type: "pylon.discord.v1.rest.GetPinnedMessagesResponse",
};

export const GetPinnedMessagesResponse = {
  $type: "pylon.discord.v1.rest.GetPinnedMessagesResponse" as const,

  encode(
    message: GetPinnedMessagesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      GetPinnedMessagesResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetPinnedMessagesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetPinnedMessagesResponse,
    } as GetPinnedMessagesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: GetPinnedMessagesResponse_Data.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPinnedMessagesResponse {
    const message = {
      ...baseGetPinnedMessagesResponse,
    } as GetPinnedMessagesResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: GetPinnedMessagesResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: GetPinnedMessagesResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? GetPinnedMessagesResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetPinnedMessagesResponse>
  ): GetPinnedMessagesResponse {
    const message = {
      ...baseGetPinnedMessagesResponse,
    } as GetPinnedMessagesResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: GetPinnedMessagesResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetPinnedMessagesResponse.$type,
  GetPinnedMessagesResponse
);

const baseGetPinnedMessagesResponse_Data: object = {
  $type: "pylon.discord.v1.rest.GetPinnedMessagesResponse.Data",
};

export const GetPinnedMessagesResponse_Data = {
  $type: "pylon.discord.v1.rest.GetPinnedMessagesResponse.Data" as const,

  encode(
    message: GetPinnedMessagesResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.messages) {
      MessageData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetPinnedMessagesResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetPinnedMessagesResponse_Data,
    } as GetPinnedMessagesResponse_Data;
    message.messages = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(MessageData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPinnedMessagesResponse_Data {
    const message = {
      ...baseGetPinnedMessagesResponse_Data,
    } as GetPinnedMessagesResponse_Data;
    message.messages = [];
    if (object.messages !== undefined && object.messages !== null) {
      for (const e of object.messages) {
        message.messages.push(MessageData.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GetPinnedMessagesResponse_Data): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) =>
        e ? MessageData.toJSON(e) : undefined
      );
    } else {
      obj.messages = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetPinnedMessagesResponse_Data>
  ): GetPinnedMessagesResponse_Data {
    const message = {
      ...baseGetPinnedMessagesResponse_Data,
    } as GetPinnedMessagesResponse_Data;
    message.messages = [];
    if (object.messages !== undefined && object.messages !== null) {
      for (const e of object.messages) {
        message.messages.push(MessageData.fromPartial(e));
      }
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetPinnedMessagesResponse_Data.$type,
  GetPinnedMessagesResponse_Data
);

const baseAddPinnedChannelMessageRequest: object = {
  $type: "pylon.discord.v1.rest.AddPinnedChannelMessageRequest",
  channelId: "0",
  messageId: "0",
};

export const AddPinnedChannelMessageRequest = {
  $type: "pylon.discord.v1.rest.AddPinnedChannelMessageRequest" as const,

  encode(
    message: AddPinnedChannelMessageRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.messageId !== "0") {
      writer.uint32(17).fixed64(message.messageId);
    }
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddPinnedChannelMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddPinnedChannelMessageRequest,
    } as AddPinnedChannelMessageRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.messageId = longToString(reader.fixed64() as Long);
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddPinnedChannelMessageRequest {
    const message = {
      ...baseAddPinnedChannelMessageRequest,
    } as AddPinnedChannelMessageRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = String(object.messageId);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: AddPinnedChannelMessageRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.messageId !== undefined && (obj.messageId = message.messageId);
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AddPinnedChannelMessageRequest>
  ): AddPinnedChannelMessageRequest {
    const message = {
      ...baseAddPinnedChannelMessageRequest,
    } as AddPinnedChannelMessageRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = object.messageId;
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(
  AddPinnedChannelMessageRequest.$type,
  AddPinnedChannelMessageRequest
);

const baseAddPinnedChannelMessageResponse: object = {
  $type: "pylon.discord.v1.rest.AddPinnedChannelMessageResponse",
};

export const AddPinnedChannelMessageResponse = {
  $type: "pylon.discord.v1.rest.AddPinnedChannelMessageResponse" as const,

  encode(
    message: AddPinnedChannelMessageResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddPinnedChannelMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddPinnedChannelMessageResponse,
    } as AddPinnedChannelMessageResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddPinnedChannelMessageResponse {
    const message = {
      ...baseAddPinnedChannelMessageResponse,
    } as AddPinnedChannelMessageResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: AddPinnedChannelMessageResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AddPinnedChannelMessageResponse>
  ): AddPinnedChannelMessageResponse {
    const message = {
      ...baseAddPinnedChannelMessageResponse,
    } as AddPinnedChannelMessageResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  AddPinnedChannelMessageResponse.$type,
  AddPinnedChannelMessageResponse
);

const baseDeletePinnedChannelMessageRequest: object = {
  $type: "pylon.discord.v1.rest.DeletePinnedChannelMessageRequest",
  channelId: "0",
  messageId: "0",
};

export const DeletePinnedChannelMessageRequest = {
  $type: "pylon.discord.v1.rest.DeletePinnedChannelMessageRequest" as const,

  encode(
    message: DeletePinnedChannelMessageRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.messageId !== "0") {
      writer.uint32(17).fixed64(message.messageId);
    }
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeletePinnedChannelMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeletePinnedChannelMessageRequest,
    } as DeletePinnedChannelMessageRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.messageId = longToString(reader.fixed64() as Long);
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeletePinnedChannelMessageRequest {
    const message = {
      ...baseDeletePinnedChannelMessageRequest,
    } as DeletePinnedChannelMessageRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = String(object.messageId);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: DeletePinnedChannelMessageRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.messageId !== undefined && (obj.messageId = message.messageId);
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeletePinnedChannelMessageRequest>
  ): DeletePinnedChannelMessageRequest {
    const message = {
      ...baseDeletePinnedChannelMessageRequest,
    } as DeletePinnedChannelMessageRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = object.messageId;
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(
  DeletePinnedChannelMessageRequest.$type,
  DeletePinnedChannelMessageRequest
);

const baseDeletePinnedChannelMessageResponse: object = {
  $type: "pylon.discord.v1.rest.DeletePinnedChannelMessageResponse",
};

export const DeletePinnedChannelMessageResponse = {
  $type: "pylon.discord.v1.rest.DeletePinnedChannelMessageResponse" as const,

  encode(
    message: DeletePinnedChannelMessageResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeletePinnedChannelMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeletePinnedChannelMessageResponse,
    } as DeletePinnedChannelMessageResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeletePinnedChannelMessageResponse {
    const message = {
      ...baseDeletePinnedChannelMessageResponse,
    } as DeletePinnedChannelMessageResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: DeletePinnedChannelMessageResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeletePinnedChannelMessageResponse>
  ): DeletePinnedChannelMessageResponse {
    const message = {
      ...baseDeletePinnedChannelMessageResponse,
    } as DeletePinnedChannelMessageResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  DeletePinnedChannelMessageResponse.$type,
  DeletePinnedChannelMessageResponse
);

const baseListGuildEmojisRequest: object = {
  $type: "pylon.discord.v1.rest.ListGuildEmojisRequest",
};

export const ListGuildEmojisRequest = {
  $type: "pylon.discord.v1.rest.ListGuildEmojisRequest" as const,

  encode(
    _: ListGuildEmojisRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListGuildEmojisRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListGuildEmojisRequest } as ListGuildEmojisRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ListGuildEmojisRequest {
    const message = { ...baseListGuildEmojisRequest } as ListGuildEmojisRequest;
    return message;
  },

  toJSON(_: ListGuildEmojisRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ListGuildEmojisRequest>): ListGuildEmojisRequest {
    const message = { ...baseListGuildEmojisRequest } as ListGuildEmojisRequest;
    return message;
  },
};

messageTypeRegistry.set(ListGuildEmojisRequest.$type, ListGuildEmojisRequest);

const baseListGuildEmojisResponse: object = {
  $type: "pylon.discord.v1.rest.ListGuildEmojisResponse",
};

export const ListGuildEmojisResponse = {
  $type: "pylon.discord.v1.rest.ListGuildEmojisResponse" as const,

  encode(
    message: ListGuildEmojisResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      ListGuildEmojisResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListGuildEmojisResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListGuildEmojisResponse,
    } as ListGuildEmojisResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: ListGuildEmojisResponse_Data.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListGuildEmojisResponse {
    const message = {
      ...baseListGuildEmojisResponse,
    } as ListGuildEmojisResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: ListGuildEmojisResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: ListGuildEmojisResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? ListGuildEmojisResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListGuildEmojisResponse>
  ): ListGuildEmojisResponse {
    const message = {
      ...baseListGuildEmojisResponse,
    } as ListGuildEmojisResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: ListGuildEmojisResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(ListGuildEmojisResponse.$type, ListGuildEmojisResponse);

const baseListGuildEmojisResponse_Data: object = {
  $type: "pylon.discord.v1.rest.ListGuildEmojisResponse.Data",
};

export const ListGuildEmojisResponse_Data = {
  $type: "pylon.discord.v1.rest.ListGuildEmojisResponse.Data" as const,

  encode(
    message: ListGuildEmojisResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.emojis) {
      EmojiData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListGuildEmojisResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListGuildEmojisResponse_Data,
    } as ListGuildEmojisResponse_Data;
    message.emojis = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.emojis.push(EmojiData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListGuildEmojisResponse_Data {
    const message = {
      ...baseListGuildEmojisResponse_Data,
    } as ListGuildEmojisResponse_Data;
    message.emojis = [];
    if (object.emojis !== undefined && object.emojis !== null) {
      for (const e of object.emojis) {
        message.emojis.push(EmojiData.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ListGuildEmojisResponse_Data): unknown {
    const obj: any = {};
    if (message.emojis) {
      obj.emojis = message.emojis.map((e) =>
        e ? EmojiData.toJSON(e) : undefined
      );
    } else {
      obj.emojis = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListGuildEmojisResponse_Data>
  ): ListGuildEmojisResponse_Data {
    const message = {
      ...baseListGuildEmojisResponse_Data,
    } as ListGuildEmojisResponse_Data;
    message.emojis = [];
    if (object.emojis !== undefined && object.emojis !== null) {
      for (const e of object.emojis) {
        message.emojis.push(EmojiData.fromPartial(e));
      }
    }
    return message;
  },
};

messageTypeRegistry.set(
  ListGuildEmojisResponse_Data.$type,
  ListGuildEmojisResponse_Data
);

const baseGetGuildEmojiRequest: object = {
  $type: "pylon.discord.v1.rest.GetGuildEmojiRequest",
  emojiId: "0",
};

export const GetGuildEmojiRequest = {
  $type: "pylon.discord.v1.rest.GetGuildEmojiRequest" as const,

  encode(
    message: GetGuildEmojiRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.emojiId !== "0") {
      writer.uint32(9).fixed64(message.emojiId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildEmojiRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetGuildEmojiRequest } as GetGuildEmojiRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.emojiId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGuildEmojiRequest {
    const message = { ...baseGetGuildEmojiRequest } as GetGuildEmojiRequest;
    if (object.emojiId !== undefined && object.emojiId !== null) {
      message.emojiId = String(object.emojiId);
    }
    return message;
  },

  toJSON(message: GetGuildEmojiRequest): unknown {
    const obj: any = {};
    message.emojiId !== undefined && (obj.emojiId = message.emojiId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetGuildEmojiRequest>): GetGuildEmojiRequest {
    const message = { ...baseGetGuildEmojiRequest } as GetGuildEmojiRequest;
    if (object.emojiId !== undefined && object.emojiId !== null) {
      message.emojiId = object.emojiId;
    }
    return message;
  },
};

messageTypeRegistry.set(GetGuildEmojiRequest.$type, GetGuildEmojiRequest);

const baseGetGuildEmojiResponse: object = {
  $type: "pylon.discord.v1.rest.GetGuildEmojiResponse",
};

export const GetGuildEmojiResponse = {
  $type: "pylon.discord.v1.rest.GetGuildEmojiResponse" as const,

  encode(
    message: GetGuildEmojiResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      GetGuildEmojiResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildEmojiResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetGuildEmojiResponse } as GetGuildEmojiResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: GetGuildEmojiResponse_Data.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGuildEmojiResponse {
    const message = { ...baseGetGuildEmojiResponse } as GetGuildEmojiResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: GetGuildEmojiResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: GetGuildEmojiResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? GetGuildEmojiResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetGuildEmojiResponse>
  ): GetGuildEmojiResponse {
    const message = { ...baseGetGuildEmojiResponse } as GetGuildEmojiResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: GetGuildEmojiResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(GetGuildEmojiResponse.$type, GetGuildEmojiResponse);

const baseGetGuildEmojiResponse_Data: object = {
  $type: "pylon.discord.v1.rest.GetGuildEmojiResponse.Data",
};

export const GetGuildEmojiResponse_Data = {
  $type: "pylon.discord.v1.rest.GetGuildEmojiResponse.Data" as const,

  encode(
    message: GetGuildEmojiResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.emoji !== undefined) {
      EmojiData.encode(message.emoji, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildEmojiResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetGuildEmojiResponse_Data,
    } as GetGuildEmojiResponse_Data;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.emoji = EmojiData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGuildEmojiResponse_Data {
    const message = {
      ...baseGetGuildEmojiResponse_Data,
    } as GetGuildEmojiResponse_Data;
    if (object.emoji !== undefined && object.emoji !== null) {
      message.emoji = EmojiData.fromJSON(object.emoji);
    }
    return message;
  },

  toJSON(message: GetGuildEmojiResponse_Data): unknown {
    const obj: any = {};
    message.emoji !== undefined &&
      (obj.emoji = message.emoji ? EmojiData.toJSON(message.emoji) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetGuildEmojiResponse_Data>
  ): GetGuildEmojiResponse_Data {
    const message = {
      ...baseGetGuildEmojiResponse_Data,
    } as GetGuildEmojiResponse_Data;
    if (object.emoji !== undefined && object.emoji !== null) {
      message.emoji = EmojiData.fromPartial(object.emoji);
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetGuildEmojiResponse_Data.$type,
  GetGuildEmojiResponse_Data
);

const baseCreateGuildEmojiRequest: object = {
  $type: "pylon.discord.v1.rest.CreateGuildEmojiRequest",
  name: "",
};

export const CreateGuildEmojiRequest = {
  $type: "pylon.discord.v1.rest.CreateGuildEmojiRequest" as const,

  encode(
    message: CreateGuildEmojiRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.image !== undefined) {
      BytesValue.encode(
        { $type: "google.protobuf.BytesValue", value: message.image! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.roles !== undefined) {
      SnowflakeListValue.encode(
        message.roles,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateGuildEmojiRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateGuildEmojiRequest,
    } as CreateGuildEmojiRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.image = BytesValue.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.roles = SnowflakeListValue.decode(reader, reader.uint32());
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateGuildEmojiRequest {
    const message = {
      ...baseCreateGuildEmojiRequest,
    } as CreateGuildEmojiRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = new Uint8Array(object.image);
    }
    if (object.roles !== undefined && object.roles !== null) {
      message.roles = SnowflakeListValue.fromJSON(object.roles);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: CreateGuildEmojiRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.image !== undefined && (obj.image = message.image);
    message.roles !== undefined &&
      (obj.roles = message.roles
        ? SnowflakeListValue.toJSON(message.roles)
        : undefined);
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateGuildEmojiRequest>
  ): CreateGuildEmojiRequest {
    const message = {
      ...baseCreateGuildEmojiRequest,
    } as CreateGuildEmojiRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = object.image;
    }
    if (object.roles !== undefined && object.roles !== null) {
      message.roles = SnowflakeListValue.fromPartial(object.roles);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(CreateGuildEmojiRequest.$type, CreateGuildEmojiRequest);

const baseCreateGuildEmojiResponse: object = {
  $type: "pylon.discord.v1.rest.CreateGuildEmojiResponse",
};

export const CreateGuildEmojiResponse = {
  $type: "pylon.discord.v1.rest.CreateGuildEmojiResponse" as const,

  encode(
    message: CreateGuildEmojiResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      CreateGuildEmojiResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateGuildEmojiResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateGuildEmojiResponse,
    } as CreateGuildEmojiResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: CreateGuildEmojiResponse_Data.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateGuildEmojiResponse {
    const message = {
      ...baseCreateGuildEmojiResponse,
    } as CreateGuildEmojiResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: CreateGuildEmojiResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: CreateGuildEmojiResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? CreateGuildEmojiResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateGuildEmojiResponse>
  ): CreateGuildEmojiResponse {
    const message = {
      ...baseCreateGuildEmojiResponse,
    } as CreateGuildEmojiResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: CreateGuildEmojiResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  CreateGuildEmojiResponse.$type,
  CreateGuildEmojiResponse
);

const baseCreateGuildEmojiResponse_Data: object = {
  $type: "pylon.discord.v1.rest.CreateGuildEmojiResponse.Data",
};

export const CreateGuildEmojiResponse_Data = {
  $type: "pylon.discord.v1.rest.CreateGuildEmojiResponse.Data" as const,

  encode(
    message: CreateGuildEmojiResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.emoji !== undefined) {
      EmojiData.encode(message.emoji, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateGuildEmojiResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateGuildEmojiResponse_Data,
    } as CreateGuildEmojiResponse_Data;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.emoji = EmojiData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateGuildEmojiResponse_Data {
    const message = {
      ...baseCreateGuildEmojiResponse_Data,
    } as CreateGuildEmojiResponse_Data;
    if (object.emoji !== undefined && object.emoji !== null) {
      message.emoji = EmojiData.fromJSON(object.emoji);
    }
    return message;
  },

  toJSON(message: CreateGuildEmojiResponse_Data): unknown {
    const obj: any = {};
    message.emoji !== undefined &&
      (obj.emoji = message.emoji ? EmojiData.toJSON(message.emoji) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateGuildEmojiResponse_Data>
  ): CreateGuildEmojiResponse_Data {
    const message = {
      ...baseCreateGuildEmojiResponse_Data,
    } as CreateGuildEmojiResponse_Data;
    if (object.emoji !== undefined && object.emoji !== null) {
      message.emoji = EmojiData.fromPartial(object.emoji);
    }
    return message;
  },
};

messageTypeRegistry.set(
  CreateGuildEmojiResponse_Data.$type,
  CreateGuildEmojiResponse_Data
);

const baseModifyGuildEmojiRequest: object = {
  $type: "pylon.discord.v1.rest.ModifyGuildEmojiRequest",
  emojiId: "0",
};

export const ModifyGuildEmojiRequest = {
  $type: "pylon.discord.v1.rest.ModifyGuildEmojiRequest" as const,

  encode(
    message: ModifyGuildEmojiRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.emojiId !== "0") {
      writer.uint32(9).fixed64(message.emojiId);
    }
    if (message.name !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.name! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.roles !== undefined) {
      SnowflakeListValue.encode(
        message.roles,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyGuildEmojiRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyGuildEmojiRequest,
    } as ModifyGuildEmojiRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.emojiId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.name = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.roles = SnowflakeListValue.decode(reader, reader.uint32());
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyGuildEmojiRequest {
    const message = {
      ...baseModifyGuildEmojiRequest,
    } as ModifyGuildEmojiRequest;
    if (object.emojiId !== undefined && object.emojiId !== null) {
      message.emojiId = String(object.emojiId);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    }
    if (object.roles !== undefined && object.roles !== null) {
      message.roles = SnowflakeListValue.fromJSON(object.roles);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: ModifyGuildEmojiRequest): unknown {
    const obj: any = {};
    message.emojiId !== undefined && (obj.emojiId = message.emojiId);
    message.name !== undefined && (obj.name = message.name);
    message.roles !== undefined &&
      (obj.roles = message.roles
        ? SnowflakeListValue.toJSON(message.roles)
        : undefined);
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyGuildEmojiRequest>
  ): ModifyGuildEmojiRequest {
    const message = {
      ...baseModifyGuildEmojiRequest,
    } as ModifyGuildEmojiRequest;
    if (object.emojiId !== undefined && object.emojiId !== null) {
      message.emojiId = object.emojiId;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.roles !== undefined && object.roles !== null) {
      message.roles = SnowflakeListValue.fromPartial(object.roles);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(ModifyGuildEmojiRequest.$type, ModifyGuildEmojiRequest);

const baseModifyGuildEmojiResponse: object = {
  $type: "pylon.discord.v1.rest.ModifyGuildEmojiResponse",
};

export const ModifyGuildEmojiResponse = {
  $type: "pylon.discord.v1.rest.ModifyGuildEmojiResponse" as const,

  encode(
    message: ModifyGuildEmojiResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      ModifyGuildEmojiResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyGuildEmojiResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyGuildEmojiResponse,
    } as ModifyGuildEmojiResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: ModifyGuildEmojiResponse_Data.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyGuildEmojiResponse {
    const message = {
      ...baseModifyGuildEmojiResponse,
    } as ModifyGuildEmojiResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: ModifyGuildEmojiResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: ModifyGuildEmojiResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? ModifyGuildEmojiResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyGuildEmojiResponse>
  ): ModifyGuildEmojiResponse {
    const message = {
      ...baseModifyGuildEmojiResponse,
    } as ModifyGuildEmojiResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: ModifyGuildEmojiResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  ModifyGuildEmojiResponse.$type,
  ModifyGuildEmojiResponse
);

const baseModifyGuildEmojiResponse_Data: object = {
  $type: "pylon.discord.v1.rest.ModifyGuildEmojiResponse.Data",
};

export const ModifyGuildEmojiResponse_Data = {
  $type: "pylon.discord.v1.rest.ModifyGuildEmojiResponse.Data" as const,

  encode(
    message: ModifyGuildEmojiResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.emoji !== undefined) {
      EmojiData.encode(message.emoji, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyGuildEmojiResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyGuildEmojiResponse_Data,
    } as ModifyGuildEmojiResponse_Data;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.emoji = EmojiData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyGuildEmojiResponse_Data {
    const message = {
      ...baseModifyGuildEmojiResponse_Data,
    } as ModifyGuildEmojiResponse_Data;
    if (object.emoji !== undefined && object.emoji !== null) {
      message.emoji = EmojiData.fromJSON(object.emoji);
    }
    return message;
  },

  toJSON(message: ModifyGuildEmojiResponse_Data): unknown {
    const obj: any = {};
    message.emoji !== undefined &&
      (obj.emoji = message.emoji ? EmojiData.toJSON(message.emoji) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyGuildEmojiResponse_Data>
  ): ModifyGuildEmojiResponse_Data {
    const message = {
      ...baseModifyGuildEmojiResponse_Data,
    } as ModifyGuildEmojiResponse_Data;
    if (object.emoji !== undefined && object.emoji !== null) {
      message.emoji = EmojiData.fromPartial(object.emoji);
    }
    return message;
  },
};

messageTypeRegistry.set(
  ModifyGuildEmojiResponse_Data.$type,
  ModifyGuildEmojiResponse_Data
);

const baseDeleteGuildEmojiRequest: object = {
  $type: "pylon.discord.v1.rest.DeleteGuildEmojiRequest",
  emojiId: "0",
};

export const DeleteGuildEmojiRequest = {
  $type: "pylon.discord.v1.rest.DeleteGuildEmojiRequest" as const,

  encode(
    message: DeleteGuildEmojiRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.emojiId !== "0") {
      writer.uint32(9).fixed64(message.emojiId);
    }
    if (message.auditLogReason !== undefined) {
      StringValue.encode(
        {
          $type: "google.protobuf.StringValue",
          value: message.auditLogReason!,
        },
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteGuildEmojiRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteGuildEmojiRequest,
    } as DeleteGuildEmojiRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.emojiId = longToString(reader.fixed64() as Long);
          break;
        case 100:
          message.auditLogReason = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteGuildEmojiRequest {
    const message = {
      ...baseDeleteGuildEmojiRequest,
    } as DeleteGuildEmojiRequest;
    if (object.emojiId !== undefined && object.emojiId !== null) {
      message.emojiId = String(object.emojiId);
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = String(object.auditLogReason);
    }
    return message;
  },

  toJSON(message: DeleteGuildEmojiRequest): unknown {
    const obj: any = {};
    message.emojiId !== undefined && (obj.emojiId = message.emojiId);
    message.auditLogReason !== undefined &&
      (obj.auditLogReason = message.auditLogReason);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteGuildEmojiRequest>
  ): DeleteGuildEmojiRequest {
    const message = {
      ...baseDeleteGuildEmojiRequest,
    } as DeleteGuildEmojiRequest;
    if (object.emojiId !== undefined && object.emojiId !== null) {
      message.emojiId = object.emojiId;
    }
    if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
      message.auditLogReason = object.auditLogReason;
    }
    return message;
  },
};

messageTypeRegistry.set(DeleteGuildEmojiRequest.$type, DeleteGuildEmojiRequest);

const baseDeleteGuildEmojiResponse: object = {
  $type: "pylon.discord.v1.rest.DeleteGuildEmojiResponse",
};

export const DeleteGuildEmojiResponse = {
  $type: "pylon.discord.v1.rest.DeleteGuildEmojiResponse" as const,

  encode(
    message: DeleteGuildEmojiResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteGuildEmojiResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteGuildEmojiResponse,
    } as DeleteGuildEmojiResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteGuildEmojiResponse {
    const message = {
      ...baseDeleteGuildEmojiResponse,
    } as DeleteGuildEmojiResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: DeleteGuildEmojiResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteGuildEmojiResponse>
  ): DeleteGuildEmojiResponse {
    const message = {
      ...baseDeleteGuildEmojiResponse,
    } as DeleteGuildEmojiResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  DeleteGuildEmojiResponse.$type,
  DeleteGuildEmojiResponse
);

const baseGetCurrentUserRequest: object = {
  $type: "pylon.discord.v1.rest.GetCurrentUserRequest",
};

export const GetCurrentUserRequest = {
  $type: "pylon.discord.v1.rest.GetCurrentUserRequest" as const,

  encode(
    _: GetCurrentUserRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetCurrentUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetCurrentUserRequest } as GetCurrentUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetCurrentUserRequest {
    const message = { ...baseGetCurrentUserRequest } as GetCurrentUserRequest;
    return message;
  },

  toJSON(_: GetCurrentUserRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetCurrentUserRequest>): GetCurrentUserRequest {
    const message = { ...baseGetCurrentUserRequest } as GetCurrentUserRequest;
    return message;
  },
};

messageTypeRegistry.set(GetCurrentUserRequest.$type, GetCurrentUserRequest);

const baseGetCurrentUserResponse: object = {
  $type: "pylon.discord.v1.rest.GetCurrentUserResponse",
};

export const GetCurrentUserResponse = {
  $type: "pylon.discord.v1.rest.GetCurrentUserResponse" as const,

  encode(
    message: GetCurrentUserResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      GetCurrentUserResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetCurrentUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetCurrentUserResponse } as GetCurrentUserResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: GetCurrentUserResponse_Data.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCurrentUserResponse {
    const message = { ...baseGetCurrentUserResponse } as GetCurrentUserResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: GetCurrentUserResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: GetCurrentUserResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? GetCurrentUserResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetCurrentUserResponse>
  ): GetCurrentUserResponse {
    const message = { ...baseGetCurrentUserResponse } as GetCurrentUserResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: GetCurrentUserResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(GetCurrentUserResponse.$type, GetCurrentUserResponse);

const baseGetCurrentUserResponse_Data: object = {
  $type: "pylon.discord.v1.rest.GetCurrentUserResponse.Data",
};

export const GetCurrentUserResponse_Data = {
  $type: "pylon.discord.v1.rest.GetCurrentUserResponse.Data" as const,

  encode(
    message: GetCurrentUserResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== undefined) {
      UserData.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetCurrentUserResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetCurrentUserResponse_Data,
    } as GetCurrentUserResponse_Data;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = UserData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCurrentUserResponse_Data {
    const message = {
      ...baseGetCurrentUserResponse_Data,
    } as GetCurrentUserResponse_Data;
    if (object.user !== undefined && object.user !== null) {
      message.user = UserData.fromJSON(object.user);
    }
    return message;
  },

  toJSON(message: GetCurrentUserResponse_Data): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? UserData.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetCurrentUserResponse_Data>
  ): GetCurrentUserResponse_Data {
    const message = {
      ...baseGetCurrentUserResponse_Data,
    } as GetCurrentUserResponse_Data;
    if (object.user !== undefined && object.user !== null) {
      message.user = UserData.fromPartial(object.user);
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetCurrentUserResponse_Data.$type,
  GetCurrentUserResponse_Data
);

const baseGetUserRequest: object = {
  $type: "pylon.discord.v1.rest.GetUserRequest",
  userId: "0",
};

export const GetUserRequest = {
  $type: "pylon.discord.v1.rest.GetUserRequest" as const,

  encode(
    message: GetUserRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== "0") {
      writer.uint32(9).fixed64(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUserRequest } as GetUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUserRequest {
    const message = { ...baseGetUserRequest } as GetUserRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    }
    return message;
  },

  toJSON(message: GetUserRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetUserRequest>): GetUserRequest {
    const message = { ...baseGetUserRequest } as GetUserRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    }
    return message;
  },
};

messageTypeRegistry.set(GetUserRequest.$type, GetUserRequest);

const baseGetUserResponse: object = {
  $type: "pylon.discord.v1.rest.GetUserResponse",
};

export const GetUserResponse = {
  $type: "pylon.discord.v1.rest.GetUserResponse" as const,

  encode(
    message: GetUserResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      GetUserResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUserResponse } as GetUserResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: GetUserResponse_Data.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUserResponse {
    const message = { ...baseGetUserResponse } as GetUserResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: GetUserResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: GetUserResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? GetUserResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetUserResponse>): GetUserResponse {
    const message = { ...baseGetUserResponse } as GetUserResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: GetUserResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(GetUserResponse.$type, GetUserResponse);

const baseGetUserResponse_Data: object = {
  $type: "pylon.discord.v1.rest.GetUserResponse.Data",
};

export const GetUserResponse_Data = {
  $type: "pylon.discord.v1.rest.GetUserResponse.Data" as const,

  encode(
    message: GetUserResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== undefined) {
      UserData.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetUserResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUserResponse_Data } as GetUserResponse_Data;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = UserData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUserResponse_Data {
    const message = { ...baseGetUserResponse_Data } as GetUserResponse_Data;
    if (object.user !== undefined && object.user !== null) {
      message.user = UserData.fromJSON(object.user);
    }
    return message;
  },

  toJSON(message: GetUserResponse_Data): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? UserData.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetUserResponse_Data>): GetUserResponse_Data {
    const message = { ...baseGetUserResponse_Data } as GetUserResponse_Data;
    if (object.user !== undefined && object.user !== null) {
      message.user = UserData.fromPartial(object.user);
    }
    return message;
  },
};

messageTypeRegistry.set(GetUserResponse_Data.$type, GetUserResponse_Data);

const baseModifyCurrentUserRequest: object = {
  $type: "pylon.discord.v1.rest.ModifyCurrentUserRequest",
};

export const ModifyCurrentUserRequest = {
  $type: "pylon.discord.v1.rest.ModifyCurrentUserRequest" as const,

  encode(
    message: ModifyCurrentUserRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.username !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.username! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.avatar !== undefined) {
      BytesValue.encode(
        { $type: "google.protobuf.BytesValue", value: message.avatar! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyCurrentUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyCurrentUserRequest,
    } as ModifyCurrentUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.username = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 2:
          message.avatar = BytesValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyCurrentUserRequest {
    const message = {
      ...baseModifyCurrentUserRequest,
    } as ModifyCurrentUserRequest;
    if (object.username !== undefined && object.username !== null) {
      message.username = String(object.username);
    }
    if (object.avatar !== undefined && object.avatar !== null) {
      message.avatar = new Uint8Array(object.avatar);
    }
    return message;
  },

  toJSON(message: ModifyCurrentUserRequest): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    message.avatar !== undefined && (obj.avatar = message.avatar);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyCurrentUserRequest>
  ): ModifyCurrentUserRequest {
    const message = {
      ...baseModifyCurrentUserRequest,
    } as ModifyCurrentUserRequest;
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    }
    if (object.avatar !== undefined && object.avatar !== null) {
      message.avatar = object.avatar;
    }
    return message;
  },
};

messageTypeRegistry.set(
  ModifyCurrentUserRequest.$type,
  ModifyCurrentUserRequest
);

const baseModifyCurrentUserResponse: object = {
  $type: "pylon.discord.v1.rest.ModifyCurrentUserResponse",
};

export const ModifyCurrentUserResponse = {
  $type: "pylon.discord.v1.rest.ModifyCurrentUserResponse" as const,

  encode(
    message: ModifyCurrentUserResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      ModifyCurrentUserResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyCurrentUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyCurrentUserResponse,
    } as ModifyCurrentUserResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: ModifyCurrentUserResponse_Data.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyCurrentUserResponse {
    const message = {
      ...baseModifyCurrentUserResponse,
    } as ModifyCurrentUserResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: ModifyCurrentUserResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: ModifyCurrentUserResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? ModifyCurrentUserResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyCurrentUserResponse>
  ): ModifyCurrentUserResponse {
    const message = {
      ...baseModifyCurrentUserResponse,
    } as ModifyCurrentUserResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: ModifyCurrentUserResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  ModifyCurrentUserResponse.$type,
  ModifyCurrentUserResponse
);

const baseModifyCurrentUserResponse_Data: object = {
  $type: "pylon.discord.v1.rest.ModifyCurrentUserResponse.Data",
};

export const ModifyCurrentUserResponse_Data = {
  $type: "pylon.discord.v1.rest.ModifyCurrentUserResponse.Data" as const,

  encode(
    message: ModifyCurrentUserResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== undefined) {
      UserData.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModifyCurrentUserResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModifyCurrentUserResponse_Data,
    } as ModifyCurrentUserResponse_Data;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = UserData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModifyCurrentUserResponse_Data {
    const message = {
      ...baseModifyCurrentUserResponse_Data,
    } as ModifyCurrentUserResponse_Data;
    if (object.user !== undefined && object.user !== null) {
      message.user = UserData.fromJSON(object.user);
    }
    return message;
  },

  toJSON(message: ModifyCurrentUserResponse_Data): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? UserData.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModifyCurrentUserResponse_Data>
  ): ModifyCurrentUserResponse_Data {
    const message = {
      ...baseModifyCurrentUserResponse_Data,
    } as ModifyCurrentUserResponse_Data;
    if (object.user !== undefined && object.user !== null) {
      message.user = UserData.fromPartial(object.user);
    }
    return message;
  },
};

messageTypeRegistry.set(
  ModifyCurrentUserResponse_Data.$type,
  ModifyCurrentUserResponse_Data
);

const baseLeaveGuildRequest: object = {
  $type: "pylon.discord.v1.rest.LeaveGuildRequest",
};

export const LeaveGuildRequest = {
  $type: "pylon.discord.v1.rest.LeaveGuildRequest" as const,

  encode(
    _: LeaveGuildRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LeaveGuildRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLeaveGuildRequest } as LeaveGuildRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): LeaveGuildRequest {
    const message = { ...baseLeaveGuildRequest } as LeaveGuildRequest;
    return message;
  },

  toJSON(_: LeaveGuildRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<LeaveGuildRequest>): LeaveGuildRequest {
    const message = { ...baseLeaveGuildRequest } as LeaveGuildRequest;
    return message;
  },
};

messageTypeRegistry.set(LeaveGuildRequest.$type, LeaveGuildRequest);

const baseLeaveGuildResponse: object = {
  $type: "pylon.discord.v1.rest.LeaveGuildResponse",
};

export const LeaveGuildResponse = {
  $type: "pylon.discord.v1.rest.LeaveGuildResponse" as const,

  encode(
    message: LeaveGuildResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LeaveGuildResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLeaveGuildResponse } as LeaveGuildResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: Empty.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LeaveGuildResponse {
    const message = { ...baseLeaveGuildResponse } as LeaveGuildResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = { $case: "data", data: Empty.fromJSON(object.data) };
    }
    return message;
  },

  toJSON(message: LeaveGuildResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? Empty.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<LeaveGuildResponse>): LeaveGuildResponse {
    const message = { ...baseLeaveGuildResponse } as LeaveGuildResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: Empty.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(LeaveGuildResponse.$type, LeaveGuildResponse);

const baseCreateDmRequest: object = {
  $type: "pylon.discord.v1.rest.CreateDmRequest",
  recipientId: "0",
};

export const CreateDmRequest = {
  $type: "pylon.discord.v1.rest.CreateDmRequest" as const,

  encode(
    message: CreateDmRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recipientId !== "0") {
      writer.uint32(9).fixed64(message.recipientId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDmRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateDmRequest } as CreateDmRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipientId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateDmRequest {
    const message = { ...baseCreateDmRequest } as CreateDmRequest;
    if (object.recipientId !== undefined && object.recipientId !== null) {
      message.recipientId = String(object.recipientId);
    }
    return message;
  },

  toJSON(message: CreateDmRequest): unknown {
    const obj: any = {};
    message.recipientId !== undefined &&
      (obj.recipientId = message.recipientId);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateDmRequest>): CreateDmRequest {
    const message = { ...baseCreateDmRequest } as CreateDmRequest;
    if (object.recipientId !== undefined && object.recipientId !== null) {
      message.recipientId = object.recipientId;
    }
    return message;
  },
};

messageTypeRegistry.set(CreateDmRequest.$type, CreateDmRequest);

const baseCreateDmResponse: object = {
  $type: "pylon.discord.v1.rest.CreateDmResponse",
};

export const CreateDmResponse = {
  $type: "pylon.discord.v1.rest.CreateDmResponse" as const,

  encode(
    message: CreateDmResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response?.$case === "error") {
      RestError.encode(
        message.response.error,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response?.$case === "data") {
      CreateDmResponse_Data.encode(
        message.response.data,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDmResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateDmResponse } as CreateDmResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = {
            $case: "error",
            error: RestError.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.response = {
            $case: "data",
            data: CreateDmResponse_Data.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateDmResponse {
    const message = { ...baseCreateDmResponse } as CreateDmResponse;
    if (object.error !== undefined && object.error !== null) {
      message.response = {
        $case: "error",
        error: RestError.fromJSON(object.error),
      };
    }
    if (object.data !== undefined && object.data !== null) {
      message.response = {
        $case: "data",
        data: CreateDmResponse_Data.fromJSON(object.data),
      };
    }
    return message;
  },

  toJSON(message: CreateDmResponse): unknown {
    const obj: any = {};
    message.response?.$case === "error" &&
      (obj.error = message.response?.error
        ? RestError.toJSON(message.response?.error)
        : undefined);
    message.response?.$case === "data" &&
      (obj.data = message.response?.data
        ? CreateDmResponse_Data.toJSON(message.response?.data)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateDmResponse>): CreateDmResponse {
    const message = { ...baseCreateDmResponse } as CreateDmResponse;
    if (
      object.response?.$case === "error" &&
      object.response?.error !== undefined &&
      object.response?.error !== null
    ) {
      message.response = {
        $case: "error",
        error: RestError.fromPartial(object.response.error),
      };
    }
    if (
      object.response?.$case === "data" &&
      object.response?.data !== undefined &&
      object.response?.data !== null
    ) {
      message.response = {
        $case: "data",
        data: CreateDmResponse_Data.fromPartial(object.response.data),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(CreateDmResponse.$type, CreateDmResponse);

const baseCreateDmResponse_Data: object = {
  $type: "pylon.discord.v1.rest.CreateDmResponse.Data",
};

export const CreateDmResponse_Data = {
  $type: "pylon.discord.v1.rest.CreateDmResponse.Data" as const,

  encode(
    message: CreateDmResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channel !== undefined) {
      ChannelData.encode(message.channel, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateDmResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateDmResponse_Data } as CreateDmResponse_Data;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel = ChannelData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateDmResponse_Data {
    const message = { ...baseCreateDmResponse_Data } as CreateDmResponse_Data;
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = ChannelData.fromJSON(object.channel);
    }
    return message;
  },

  toJSON(message: CreateDmResponse_Data): unknown {
    const obj: any = {};
    message.channel !== undefined &&
      (obj.channel = message.channel
        ? ChannelData.toJSON(message.channel)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateDmResponse_Data>
  ): CreateDmResponse_Data {
    const message = { ...baseCreateDmResponse_Data } as CreateDmResponse_Data;
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = ChannelData.fromPartial(object.channel);
    }
    return message;
  },
};

messageTypeRegistry.set(CreateDmResponse_Data.$type, CreateDmResponse_Data);

export interface DataLoaderOptions {
  cache?: boolean;
}

export interface DataLoaders {
  rpcDataLoaderOptions?: DataLoaderOptions;
  getDataLoader<T>(identifier: string, constructorFn: () => T): T;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string }
  ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & {
      $case: T["$case"];
    }
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
