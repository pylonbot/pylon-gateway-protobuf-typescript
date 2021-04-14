/* eslint-disable */
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import {
  ModifyGuildRequest,
  ModifyGuildResponse,
  CreateGuildChannelRequest,
  CreateGuildChannelResponse,
  ModifyGuildChannelPositionsRequest,
  ModifyGuildChannelPositionsResponse,
  AddGuildMemberRequest,
  AddGuildMemberResponse,
  ModifyGuildMemberRequest,
  ModifyGuildMemberResponse,
  ModifyCurrentUserNickRequest,
  ModifyCurrentUserNickResponse,
  AddGuildMemberRoleRequest,
  AddGuildMemberRoleResponse,
  RemoveGuildMemberRoleRequest,
  RemoveGuildMemberRoleResponse,
  RemoveGuildMemberRequest,
  RemoveGuildMemberResponse,
  GetGuildBansRequest,
  GetGuildBansResponse,
  GetGuildBanRequest,
  GetGuildBanResponse,
  CreateGuildBanRequest,
  CreateGuildBanResponse,
  RemoveGuildBanRequest,
  RemoveGuildBanResponse,
  CreateGuildRoleRequest,
  CreateGuildRoleResponse,
  ModifyGuildRolePositionsRequest,
  ModifyGuildRolePositionsResponse,
  ModifyGuildRoleRequest,
  ModifyGuildRoleResponse,
  DeleteGuildRoleRequest,
  DeleteGuildRoleResponse,
  GetGuildPruneCountRequest,
  GetGuildPruneCountResponse,
  BeginGuildPruneRequest,
  BeginGuildPruneResponse,
  GetGuildVoiceRegionsRequest,
  GetGuildVoiceRegionsResponse,
  GetGuildInvitesRequest,
  GetGuildInvitesResponse,
  ModifyChannelRequest,
  ModifyChannelResponse,
  DeleteChannelRequest,
  DeleteChannelResponse,
  GetChannelMessagesRequest,
  GetChannelMessagesResponse,
  GetChannelMessageRequest,
  GetChannelMessageResponse,
  CreateMessageRequest,
  CreateMessageResponse,
  CrosspostMessageRequest,
  CrosspostMessageResponse,
  CreateReactionRequest,
  CreateReactionResponse,
  DeleteOwnReactionRequest,
  DeleteOwnReactionResponse,
  DeleteUserReactionRequest,
  DeleteUserReactionResponse,
  DeleteAllReactionsRequest,
  DeleteAllReactionsResponse,
  DeleteAllReactionsForEmojiRequest,
  DeleteAllReactionsForEmojiResponse,
  EditMessageRequest,
  EditMessageResponse,
  DeleteMessageRequest,
  DeleteMessageResponse,
  BulkDeleteMessagesRequest,
  BulkDeleteMessagesResponse,
  EditChannelPermissionsRequest,
  EditChannelPermissionsResponse,
  GetChannelInvitesRequest,
  GetChannelInvitesResponse,
  CreateChannelInviteRequest,
  CreateChannelInviteResponse,
  DeleteChannelPermissionRequest,
  DeleteChannelPermissionResponse,
  FollowNewsChannelRequest,
  FollowNewsChannelResponse,
  TriggerTypingIndicatorRequest,
  TriggerTypingIndicatorResponse,
  GetPinnedMessagesRequest,
  GetPinnedMessagesResponse,
  AddPinnedChannelMessageRequest,
  AddPinnedChannelMessageResponse,
  DeletePinnedChannelMessageRequest,
  DeletePinnedChannelMessageResponse,
  ListGuildEmojisRequest,
  ListGuildEmojisResponse,
  GetGuildEmojiRequest,
  GetGuildEmojiResponse,
  CreateGuildEmojiRequest,
  CreateGuildEmojiResponse,
  ModifyGuildEmojiRequest,
  ModifyGuildEmojiResponse,
  DeleteGuildEmojiRequest,
  DeleteGuildEmojiResponse,
  GetCurrentUserRequest,
  GetCurrentUserResponse,
  GetUserRequest,
  GetUserResponse,
  ModifyCurrentUserRequest,
  ModifyCurrentUserResponse,
  LeaveGuildRequest,
  LeaveGuildResponse,
  CreateDmRequest,
  CreateDmResponse,
} from "../../discord/v1/rest";

export const protobufPackage = "pylon.gateway.v1.service";

export const GatewayRestService = {
  modifyGuild: {
    path: "/pylon.gateway.v1.service.GatewayRest/ModifyGuild",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ModifyGuildRequest) =>
      Buffer.from(ModifyGuildRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ModifyGuildRequest.decode(value),
    responseSerialize: (value: ModifyGuildResponse) =>
      Buffer.from(ModifyGuildResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ModifyGuildResponse.decode(value),
  },
  createGuildChannel: {
    path: "/pylon.gateway.v1.service.GatewayRest/CreateGuildChannel",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateGuildChannelRequest) =>
      Buffer.from(CreateGuildChannelRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateGuildChannelRequest.decode(value),
    responseSerialize: (value: CreateGuildChannelResponse) =>
      Buffer.from(CreateGuildChannelResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      CreateGuildChannelResponse.decode(value),
  },
  modifyGuildChannelPositions: {
    path: "/pylon.gateway.v1.service.GatewayRest/ModifyGuildChannelPositions",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ModifyGuildChannelPositionsRequest) =>
      Buffer.from(ModifyGuildChannelPositionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ModifyGuildChannelPositionsRequest.decode(value),
    responseSerialize: (value: ModifyGuildChannelPositionsResponse) =>
      Buffer.from(ModifyGuildChannelPositionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ModifyGuildChannelPositionsResponse.decode(value),
  },
  addGuildMember: {
    path: "/pylon.gateway.v1.service.GatewayRest/AddGuildMember",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddGuildMemberRequest) =>
      Buffer.from(AddGuildMemberRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddGuildMemberRequest.decode(value),
    responseSerialize: (value: AddGuildMemberResponse) =>
      Buffer.from(AddGuildMemberResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      AddGuildMemberResponse.decode(value),
  },
  modifyGuildMember: {
    path: "/pylon.gateway.v1.service.GatewayRest/ModifyGuildMember",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ModifyGuildMemberRequest) =>
      Buffer.from(ModifyGuildMemberRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ModifyGuildMemberRequest.decode(value),
    responseSerialize: (value: ModifyGuildMemberResponse) =>
      Buffer.from(ModifyGuildMemberResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ModifyGuildMemberResponse.decode(value),
  },
  modifyCurrentUserNick: {
    path: "/pylon.gateway.v1.service.GatewayRest/ModifyCurrentUserNick",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ModifyCurrentUserNickRequest) =>
      Buffer.from(ModifyCurrentUserNickRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ModifyCurrentUserNickRequest.decode(value),
    responseSerialize: (value: ModifyCurrentUserNickResponse) =>
      Buffer.from(ModifyCurrentUserNickResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ModifyCurrentUserNickResponse.decode(value),
  },
  addGuildMemberRole: {
    path: "/pylon.gateway.v1.service.GatewayRest/AddGuildMemberRole",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddGuildMemberRoleRequest) =>
      Buffer.from(AddGuildMemberRoleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      AddGuildMemberRoleRequest.decode(value),
    responseSerialize: (value: AddGuildMemberRoleResponse) =>
      Buffer.from(AddGuildMemberRoleResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      AddGuildMemberRoleResponse.decode(value),
  },
  removeGuildMemberRole: {
    path: "/pylon.gateway.v1.service.GatewayRest/RemoveGuildMemberRole",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveGuildMemberRoleRequest) =>
      Buffer.from(RemoveGuildMemberRoleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      RemoveGuildMemberRoleRequest.decode(value),
    responseSerialize: (value: RemoveGuildMemberRoleResponse) =>
      Buffer.from(RemoveGuildMemberRoleResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      RemoveGuildMemberRoleResponse.decode(value),
  },
  removeGuildMember: {
    path: "/pylon.gateway.v1.service.GatewayRest/RemoveGuildMember",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveGuildMemberRequest) =>
      Buffer.from(RemoveGuildMemberRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      RemoveGuildMemberRequest.decode(value),
    responseSerialize: (value: RemoveGuildMemberResponse) =>
      Buffer.from(RemoveGuildMemberResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      RemoveGuildMemberResponse.decode(value),
  },
  getGuildBans: {
    path: "/pylon.gateway.v1.service.GatewayRest/GetGuildBans",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetGuildBansRequest) =>
      Buffer.from(GetGuildBansRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetGuildBansRequest.decode(value),
    responseSerialize: (value: GetGuildBansResponse) =>
      Buffer.from(GetGuildBansResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetGuildBansResponse.decode(value),
  },
  getGuildBan: {
    path: "/pylon.gateway.v1.service.GatewayRest/GetGuildBan",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetGuildBanRequest) =>
      Buffer.from(GetGuildBanRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetGuildBanRequest.decode(value),
    responseSerialize: (value: GetGuildBanResponse) =>
      Buffer.from(GetGuildBanResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetGuildBanResponse.decode(value),
  },
  createGuildBan: {
    path: "/pylon.gateway.v1.service.GatewayRest/CreateGuildBan",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateGuildBanRequest) =>
      Buffer.from(CreateGuildBanRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateGuildBanRequest.decode(value),
    responseSerialize: (value: CreateGuildBanResponse) =>
      Buffer.from(CreateGuildBanResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      CreateGuildBanResponse.decode(value),
  },
  removeGuildBan: {
    path: "/pylon.gateway.v1.service.GatewayRest/RemoveGuildBan",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveGuildBanRequest) =>
      Buffer.from(RemoveGuildBanRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveGuildBanRequest.decode(value),
    responseSerialize: (value: RemoveGuildBanResponse) =>
      Buffer.from(RemoveGuildBanResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      RemoveGuildBanResponse.decode(value),
  },
  createGuildRole: {
    path: "/pylon.gateway.v1.service.GatewayRest/CreateGuildRole",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateGuildRoleRequest) =>
      Buffer.from(CreateGuildRoleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateGuildRoleRequest.decode(value),
    responseSerialize: (value: CreateGuildRoleResponse) =>
      Buffer.from(CreateGuildRoleResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      CreateGuildRoleResponse.decode(value),
  },
  modifyGuildRolePositions: {
    path: "/pylon.gateway.v1.service.GatewayRest/ModifyGuildRolePositions",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ModifyGuildRolePositionsRequest) =>
      Buffer.from(ModifyGuildRolePositionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ModifyGuildRolePositionsRequest.decode(value),
    responseSerialize: (value: ModifyGuildRolePositionsResponse) =>
      Buffer.from(ModifyGuildRolePositionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ModifyGuildRolePositionsResponse.decode(value),
  },
  modifyGuildRole: {
    path: "/pylon.gateway.v1.service.GatewayRest/ModifyGuildRole",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ModifyGuildRoleRequest) =>
      Buffer.from(ModifyGuildRoleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ModifyGuildRoleRequest.decode(value),
    responseSerialize: (value: ModifyGuildRoleResponse) =>
      Buffer.from(ModifyGuildRoleResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ModifyGuildRoleResponse.decode(value),
  },
  deleteGuildRole: {
    path: "/pylon.gateway.v1.service.GatewayRest/DeleteGuildRole",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteGuildRoleRequest) =>
      Buffer.from(DeleteGuildRoleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteGuildRoleRequest.decode(value),
    responseSerialize: (value: DeleteGuildRoleResponse) =>
      Buffer.from(DeleteGuildRoleResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      DeleteGuildRoleResponse.decode(value),
  },
  getGuildPruneCount: {
    path: "/pylon.gateway.v1.service.GatewayRest/GetGuildPruneCount",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetGuildPruneCountRequest) =>
      Buffer.from(GetGuildPruneCountRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetGuildPruneCountRequest.decode(value),
    responseSerialize: (value: GetGuildPruneCountResponse) =>
      Buffer.from(GetGuildPruneCountResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetGuildPruneCountResponse.decode(value),
  },
  beginGuildPrune: {
    path: "/pylon.gateway.v1.service.GatewayRest/BeginGuildPrune",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BeginGuildPruneRequest) =>
      Buffer.from(BeginGuildPruneRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BeginGuildPruneRequest.decode(value),
    responseSerialize: (value: BeginGuildPruneResponse) =>
      Buffer.from(BeginGuildPruneResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      BeginGuildPruneResponse.decode(value),
  },
  getGuildVoiceRegions: {
    path: "/pylon.gateway.v1.service.GatewayRest/GetGuildVoiceRegions",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetGuildVoiceRegionsRequest) =>
      Buffer.from(GetGuildVoiceRegionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetGuildVoiceRegionsRequest.decode(value),
    responseSerialize: (value: GetGuildVoiceRegionsResponse) =>
      Buffer.from(GetGuildVoiceRegionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetGuildVoiceRegionsResponse.decode(value),
  },
  getGuildInvites: {
    path: "/pylon.gateway.v1.service.GatewayRest/GetGuildInvites",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetGuildInvitesRequest) =>
      Buffer.from(GetGuildInvitesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetGuildInvitesRequest.decode(value),
    responseSerialize: (value: GetGuildInvitesResponse) =>
      Buffer.from(GetGuildInvitesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetGuildInvitesResponse.decode(value),
  },
  modifyChannel: {
    path: "/pylon.gateway.v1.service.GatewayRest/ModifyChannel",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ModifyChannelRequest) =>
      Buffer.from(ModifyChannelRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ModifyChannelRequest.decode(value),
    responseSerialize: (value: ModifyChannelResponse) =>
      Buffer.from(ModifyChannelResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ModifyChannelResponse.decode(value),
  },
  deleteChannel: {
    path: "/pylon.gateway.v1.service.GatewayRest/DeleteChannel",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteChannelRequest) =>
      Buffer.from(DeleteChannelRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteChannelRequest.decode(value),
    responseSerialize: (value: DeleteChannelResponse) =>
      Buffer.from(DeleteChannelResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DeleteChannelResponse.decode(value),
  },
  getChannelMessages: {
    path: "/pylon.gateway.v1.service.GatewayRest/GetChannelMessages",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetChannelMessagesRequest) =>
      Buffer.from(GetChannelMessagesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetChannelMessagesRequest.decode(value),
    responseSerialize: (value: GetChannelMessagesResponse) =>
      Buffer.from(GetChannelMessagesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetChannelMessagesResponse.decode(value),
  },
  getChannelMessage: {
    path: "/pylon.gateway.v1.service.GatewayRest/GetChannelMessage",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetChannelMessageRequest) =>
      Buffer.from(GetChannelMessageRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetChannelMessageRequest.decode(value),
    responseSerialize: (value: GetChannelMessageResponse) =>
      Buffer.from(GetChannelMessageResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetChannelMessageResponse.decode(value),
  },
  createMessage: {
    path: "/pylon.gateway.v1.service.GatewayRest/CreateMessage",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateMessageRequest) =>
      Buffer.from(CreateMessageRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateMessageRequest.decode(value),
    responseSerialize: (value: CreateMessageResponse) =>
      Buffer.from(CreateMessageResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateMessageResponse.decode(value),
  },
  crosspostMessage: {
    path: "/pylon.gateway.v1.service.GatewayRest/CrosspostMessage",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CrosspostMessageRequest) =>
      Buffer.from(CrosspostMessageRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CrosspostMessageRequest.decode(value),
    responseSerialize: (value: CrosspostMessageResponse) =>
      Buffer.from(CrosspostMessageResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      CrosspostMessageResponse.decode(value),
  },
  createReaction: {
    path: "/pylon.gateway.v1.service.GatewayRest/CreateReaction",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateReactionRequest) =>
      Buffer.from(CreateReactionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateReactionRequest.decode(value),
    responseSerialize: (value: CreateReactionResponse) =>
      Buffer.from(CreateReactionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      CreateReactionResponse.decode(value),
  },
  deleteOwnReaction: {
    path: "/pylon.gateway.v1.service.GatewayRest/DeleteOwnReaction",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteOwnReactionRequest) =>
      Buffer.from(DeleteOwnReactionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteOwnReactionRequest.decode(value),
    responseSerialize: (value: DeleteOwnReactionResponse) =>
      Buffer.from(DeleteOwnReactionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      DeleteOwnReactionResponse.decode(value),
  },
  deleteUserReaction: {
    path: "/pylon.gateway.v1.service.GatewayRest/DeleteUserReaction",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteUserReactionRequest) =>
      Buffer.from(DeleteUserReactionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteUserReactionRequest.decode(value),
    responseSerialize: (value: DeleteUserReactionResponse) =>
      Buffer.from(DeleteUserReactionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      DeleteUserReactionResponse.decode(value),
  },
  deleteAllReactions: {
    path: "/pylon.gateway.v1.service.GatewayRest/DeleteAllReactions",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteAllReactionsRequest) =>
      Buffer.from(DeleteAllReactionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteAllReactionsRequest.decode(value),
    responseSerialize: (value: DeleteAllReactionsResponse) =>
      Buffer.from(DeleteAllReactionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      DeleteAllReactionsResponse.decode(value),
  },
  deleteAllReactionsForEmoji: {
    path: "/pylon.gateway.v1.service.GatewayRest/DeleteAllReactionsForEmoji",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteAllReactionsForEmojiRequest) =>
      Buffer.from(DeleteAllReactionsForEmojiRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteAllReactionsForEmojiRequest.decode(value),
    responseSerialize: (value: DeleteAllReactionsForEmojiResponse) =>
      Buffer.from(DeleteAllReactionsForEmojiResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      DeleteAllReactionsForEmojiResponse.decode(value),
  },
  editMessage: {
    path: "/pylon.gateway.v1.service.GatewayRest/EditMessage",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EditMessageRequest) =>
      Buffer.from(EditMessageRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EditMessageRequest.decode(value),
    responseSerialize: (value: EditMessageResponse) =>
      Buffer.from(EditMessageResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EditMessageResponse.decode(value),
  },
  deleteMessage: {
    path: "/pylon.gateway.v1.service.GatewayRest/DeleteMessage",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteMessageRequest) =>
      Buffer.from(DeleteMessageRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteMessageRequest.decode(value),
    responseSerialize: (value: DeleteMessageResponse) =>
      Buffer.from(DeleteMessageResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DeleteMessageResponse.decode(value),
  },
  bulkDeleteMessages: {
    path: "/pylon.gateway.v1.service.GatewayRest/BulkDeleteMessages",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BulkDeleteMessagesRequest) =>
      Buffer.from(BulkDeleteMessagesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      BulkDeleteMessagesRequest.decode(value),
    responseSerialize: (value: BulkDeleteMessagesResponse) =>
      Buffer.from(BulkDeleteMessagesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      BulkDeleteMessagesResponse.decode(value),
  },
  editChannelPermissions: {
    path: "/pylon.gateway.v1.service.GatewayRest/EditChannelPermissions",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EditChannelPermissionsRequest) =>
      Buffer.from(EditChannelPermissionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      EditChannelPermissionsRequest.decode(value),
    responseSerialize: (value: EditChannelPermissionsResponse) =>
      Buffer.from(EditChannelPermissionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      EditChannelPermissionsResponse.decode(value),
  },
  getChannelInvites: {
    path: "/pylon.gateway.v1.service.GatewayRest/GetChannelInvites",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetChannelInvitesRequest) =>
      Buffer.from(GetChannelInvitesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetChannelInvitesRequest.decode(value),
    responseSerialize: (value: GetChannelInvitesResponse) =>
      Buffer.from(GetChannelInvitesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetChannelInvitesResponse.decode(value),
  },
  createChannelInvite: {
    path: "/pylon.gateway.v1.service.GatewayRest/CreateChannelInvite",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateChannelInviteRequest) =>
      Buffer.from(CreateChannelInviteRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateChannelInviteRequest.decode(value),
    responseSerialize: (value: CreateChannelInviteResponse) =>
      Buffer.from(CreateChannelInviteResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      CreateChannelInviteResponse.decode(value),
  },
  deleteChannelPermission: {
    path: "/pylon.gateway.v1.service.GatewayRest/DeleteChannelPermission",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteChannelPermissionRequest) =>
      Buffer.from(DeleteChannelPermissionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteChannelPermissionRequest.decode(value),
    responseSerialize: (value: DeleteChannelPermissionResponse) =>
      Buffer.from(DeleteChannelPermissionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      DeleteChannelPermissionResponse.decode(value),
  },
  followNewsChannel: {
    path: "/pylon.gateway.v1.service.GatewayRest/FollowNewsChannel",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: FollowNewsChannelRequest) =>
      Buffer.from(FollowNewsChannelRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      FollowNewsChannelRequest.decode(value),
    responseSerialize: (value: FollowNewsChannelResponse) =>
      Buffer.from(FollowNewsChannelResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      FollowNewsChannelResponse.decode(value),
  },
  triggerTypingIndicator: {
    path: "/pylon.gateway.v1.service.GatewayRest/TriggerTypingIndicator",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: TriggerTypingIndicatorRequest) =>
      Buffer.from(TriggerTypingIndicatorRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      TriggerTypingIndicatorRequest.decode(value),
    responseSerialize: (value: TriggerTypingIndicatorResponse) =>
      Buffer.from(TriggerTypingIndicatorResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      TriggerTypingIndicatorResponse.decode(value),
  },
  getPinnedMessages: {
    path: "/pylon.gateway.v1.service.GatewayRest/GetPinnedMessages",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetPinnedMessagesRequest) =>
      Buffer.from(GetPinnedMessagesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetPinnedMessagesRequest.decode(value),
    responseSerialize: (value: GetPinnedMessagesResponse) =>
      Buffer.from(GetPinnedMessagesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetPinnedMessagesResponse.decode(value),
  },
  addPinnedChannelMessage: {
    path: "/pylon.gateway.v1.service.GatewayRest/AddPinnedChannelMessage",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddPinnedChannelMessageRequest) =>
      Buffer.from(AddPinnedChannelMessageRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      AddPinnedChannelMessageRequest.decode(value),
    responseSerialize: (value: AddPinnedChannelMessageResponse) =>
      Buffer.from(AddPinnedChannelMessageResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      AddPinnedChannelMessageResponse.decode(value),
  },
  deletePinnedChannelMessage: {
    path: "/pylon.gateway.v1.service.GatewayRest/DeletePinnedChannelMessage",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeletePinnedChannelMessageRequest) =>
      Buffer.from(DeletePinnedChannelMessageRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeletePinnedChannelMessageRequest.decode(value),
    responseSerialize: (value: DeletePinnedChannelMessageResponse) =>
      Buffer.from(DeletePinnedChannelMessageResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      DeletePinnedChannelMessageResponse.decode(value),
  },
  listGuildEmojis: {
    path: "/pylon.gateway.v1.service.GatewayRest/ListGuildEmojis",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListGuildEmojisRequest) =>
      Buffer.from(ListGuildEmojisRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListGuildEmojisRequest.decode(value),
    responseSerialize: (value: ListGuildEmojisResponse) =>
      Buffer.from(ListGuildEmojisResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListGuildEmojisResponse.decode(value),
  },
  getGuildEmoji: {
    path: "/pylon.gateway.v1.service.GatewayRest/GetGuildEmoji",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetGuildEmojiRequest) =>
      Buffer.from(GetGuildEmojiRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetGuildEmojiRequest.decode(value),
    responseSerialize: (value: GetGuildEmojiResponse) =>
      Buffer.from(GetGuildEmojiResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetGuildEmojiResponse.decode(value),
  },
  createGuildEmoji: {
    path: "/pylon.gateway.v1.service.GatewayRest/CreateGuildEmoji",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateGuildEmojiRequest) =>
      Buffer.from(CreateGuildEmojiRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CreateGuildEmojiRequest.decode(value),
    responseSerialize: (value: CreateGuildEmojiResponse) =>
      Buffer.from(CreateGuildEmojiResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      CreateGuildEmojiResponse.decode(value),
  },
  modifyGuildEmoji: {
    path: "/pylon.gateway.v1.service.GatewayRest/ModifyGuildEmoji",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ModifyGuildEmojiRequest) =>
      Buffer.from(ModifyGuildEmojiRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ModifyGuildEmojiRequest.decode(value),
    responseSerialize: (value: ModifyGuildEmojiResponse) =>
      Buffer.from(ModifyGuildEmojiResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ModifyGuildEmojiResponse.decode(value),
  },
  deleteGuildEmoji: {
    path: "/pylon.gateway.v1.service.GatewayRest/DeleteGuildEmoji",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteGuildEmojiRequest) =>
      Buffer.from(DeleteGuildEmojiRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      DeleteGuildEmojiRequest.decode(value),
    responseSerialize: (value: DeleteGuildEmojiResponse) =>
      Buffer.from(DeleteGuildEmojiResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      DeleteGuildEmojiResponse.decode(value),
  },
  getCurrentUser: {
    path: "/pylon.gateway.v1.service.GatewayRest/GetCurrentUser",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetCurrentUserRequest) =>
      Buffer.from(GetCurrentUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetCurrentUserRequest.decode(value),
    responseSerialize: (value: GetCurrentUserResponse) =>
      Buffer.from(GetCurrentUserResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetCurrentUserResponse.decode(value),
  },
  getUser: {
    path: "/pylon.gateway.v1.service.GatewayRest/GetUser",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetUserRequest) =>
      Buffer.from(GetUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetUserRequest.decode(value),
    responseSerialize: (value: GetUserResponse) =>
      Buffer.from(GetUserResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetUserResponse.decode(value),
  },
  modifyCurrentUser: {
    path: "/pylon.gateway.v1.service.GatewayRest/ModifyCurrentUser",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ModifyCurrentUserRequest) =>
      Buffer.from(ModifyCurrentUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ModifyCurrentUserRequest.decode(value),
    responseSerialize: (value: ModifyCurrentUserResponse) =>
      Buffer.from(ModifyCurrentUserResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ModifyCurrentUserResponse.decode(value),
  },
  leaveGuild: {
    path: "/pylon.gateway.v1.service.GatewayRest/LeaveGuild",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LeaveGuildRequest) =>
      Buffer.from(LeaveGuildRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LeaveGuildRequest.decode(value),
    responseSerialize: (value: LeaveGuildResponse) =>
      Buffer.from(LeaveGuildResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LeaveGuildResponse.decode(value),
  },
  createDm: {
    path: "/pylon.gateway.v1.service.GatewayRest/CreateDm",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateDmRequest) =>
      Buffer.from(CreateDmRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateDmRequest.decode(value),
    responseSerialize: (value: CreateDmResponse) =>
      Buffer.from(CreateDmResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateDmResponse.decode(value),
  },
} as const;

export interface GatewayRestServer extends UntypedServiceImplementation {
  modifyGuild: handleUnaryCall<ModifyGuildRequest, ModifyGuildResponse>;
  createGuildChannel: handleUnaryCall<
    CreateGuildChannelRequest,
    CreateGuildChannelResponse
  >;
  modifyGuildChannelPositions: handleUnaryCall<
    ModifyGuildChannelPositionsRequest,
    ModifyGuildChannelPositionsResponse
  >;
  addGuildMember: handleUnaryCall<
    AddGuildMemberRequest,
    AddGuildMemberResponse
  >;
  modifyGuildMember: handleUnaryCall<
    ModifyGuildMemberRequest,
    ModifyGuildMemberResponse
  >;
  modifyCurrentUserNick: handleUnaryCall<
    ModifyCurrentUserNickRequest,
    ModifyCurrentUserNickResponse
  >;
  addGuildMemberRole: handleUnaryCall<
    AddGuildMemberRoleRequest,
    AddGuildMemberRoleResponse
  >;
  removeGuildMemberRole: handleUnaryCall<
    RemoveGuildMemberRoleRequest,
    RemoveGuildMemberRoleResponse
  >;
  removeGuildMember: handleUnaryCall<
    RemoveGuildMemberRequest,
    RemoveGuildMemberResponse
  >;
  getGuildBans: handleUnaryCall<GetGuildBansRequest, GetGuildBansResponse>;
  getGuildBan: handleUnaryCall<GetGuildBanRequest, GetGuildBanResponse>;
  createGuildBan: handleUnaryCall<
    CreateGuildBanRequest,
    CreateGuildBanResponse
  >;
  removeGuildBan: handleUnaryCall<
    RemoveGuildBanRequest,
    RemoveGuildBanResponse
  >;
  createGuildRole: handleUnaryCall<
    CreateGuildRoleRequest,
    CreateGuildRoleResponse
  >;
  modifyGuildRolePositions: handleUnaryCall<
    ModifyGuildRolePositionsRequest,
    ModifyGuildRolePositionsResponse
  >;
  modifyGuildRole: handleUnaryCall<
    ModifyGuildRoleRequest,
    ModifyGuildRoleResponse
  >;
  deleteGuildRole: handleUnaryCall<
    DeleteGuildRoleRequest,
    DeleteGuildRoleResponse
  >;
  getGuildPruneCount: handleUnaryCall<
    GetGuildPruneCountRequest,
    GetGuildPruneCountResponse
  >;
  beginGuildPrune: handleUnaryCall<
    BeginGuildPruneRequest,
    BeginGuildPruneResponse
  >;
  getGuildVoiceRegions: handleUnaryCall<
    GetGuildVoiceRegionsRequest,
    GetGuildVoiceRegionsResponse
  >;
  getGuildInvites: handleUnaryCall<
    GetGuildInvitesRequest,
    GetGuildInvitesResponse
  >;
  modifyChannel: handleUnaryCall<ModifyChannelRequest, ModifyChannelResponse>;
  deleteChannel: handleUnaryCall<DeleteChannelRequest, DeleteChannelResponse>;
  getChannelMessages: handleUnaryCall<
    GetChannelMessagesRequest,
    GetChannelMessagesResponse
  >;
  getChannelMessage: handleUnaryCall<
    GetChannelMessageRequest,
    GetChannelMessageResponse
  >;
  createMessage: handleUnaryCall<CreateMessageRequest, CreateMessageResponse>;
  crosspostMessage: handleUnaryCall<
    CrosspostMessageRequest,
    CrosspostMessageResponse
  >;
  createReaction: handleUnaryCall<
    CreateReactionRequest,
    CreateReactionResponse
  >;
  deleteOwnReaction: handleUnaryCall<
    DeleteOwnReactionRequest,
    DeleteOwnReactionResponse
  >;
  deleteUserReaction: handleUnaryCall<
    DeleteUserReactionRequest,
    DeleteUserReactionResponse
  >;
  deleteAllReactions: handleUnaryCall<
    DeleteAllReactionsRequest,
    DeleteAllReactionsResponse
  >;
  deleteAllReactionsForEmoji: handleUnaryCall<
    DeleteAllReactionsForEmojiRequest,
    DeleteAllReactionsForEmojiResponse
  >;
  editMessage: handleUnaryCall<EditMessageRequest, EditMessageResponse>;
  deleteMessage: handleUnaryCall<DeleteMessageRequest, DeleteMessageResponse>;
  bulkDeleteMessages: handleUnaryCall<
    BulkDeleteMessagesRequest,
    BulkDeleteMessagesResponse
  >;
  editChannelPermissions: handleUnaryCall<
    EditChannelPermissionsRequest,
    EditChannelPermissionsResponse
  >;
  getChannelInvites: handleUnaryCall<
    GetChannelInvitesRequest,
    GetChannelInvitesResponse
  >;
  createChannelInvite: handleUnaryCall<
    CreateChannelInviteRequest,
    CreateChannelInviteResponse
  >;
  deleteChannelPermission: handleUnaryCall<
    DeleteChannelPermissionRequest,
    DeleteChannelPermissionResponse
  >;
  followNewsChannel: handleUnaryCall<
    FollowNewsChannelRequest,
    FollowNewsChannelResponse
  >;
  triggerTypingIndicator: handleUnaryCall<
    TriggerTypingIndicatorRequest,
    TriggerTypingIndicatorResponse
  >;
  getPinnedMessages: handleUnaryCall<
    GetPinnedMessagesRequest,
    GetPinnedMessagesResponse
  >;
  addPinnedChannelMessage: handleUnaryCall<
    AddPinnedChannelMessageRequest,
    AddPinnedChannelMessageResponse
  >;
  deletePinnedChannelMessage: handleUnaryCall<
    DeletePinnedChannelMessageRequest,
    DeletePinnedChannelMessageResponse
  >;
  listGuildEmojis: handleUnaryCall<
    ListGuildEmojisRequest,
    ListGuildEmojisResponse
  >;
  getGuildEmoji: handleUnaryCall<GetGuildEmojiRequest, GetGuildEmojiResponse>;
  createGuildEmoji: handleUnaryCall<
    CreateGuildEmojiRequest,
    CreateGuildEmojiResponse
  >;
  modifyGuildEmoji: handleUnaryCall<
    ModifyGuildEmojiRequest,
    ModifyGuildEmojiResponse
  >;
  deleteGuildEmoji: handleUnaryCall<
    DeleteGuildEmojiRequest,
    DeleteGuildEmojiResponse
  >;
  getCurrentUser: handleUnaryCall<
    GetCurrentUserRequest,
    GetCurrentUserResponse
  >;
  getUser: handleUnaryCall<GetUserRequest, GetUserResponse>;
  modifyCurrentUser: handleUnaryCall<
    ModifyCurrentUserRequest,
    ModifyCurrentUserResponse
  >;
  leaveGuild: handleUnaryCall<LeaveGuildRequest, LeaveGuildResponse>;
  createDm: handleUnaryCall<CreateDmRequest, CreateDmResponse>;
}

export interface GatewayRestClient extends Client {
  modifyGuild(
    request: ModifyGuildRequest,
    callback: (
      error: ServiceError | null,
      response: ModifyGuildResponse
    ) => void
  ): ClientUnaryCall;
  modifyGuild(
    request: ModifyGuildRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ModifyGuildResponse
    ) => void
  ): ClientUnaryCall;
  modifyGuild(
    request: ModifyGuildRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ModifyGuildResponse
    ) => void
  ): ClientUnaryCall;
  createGuildChannel(
    request: CreateGuildChannelRequest,
    callback: (
      error: ServiceError | null,
      response: CreateGuildChannelResponse
    ) => void
  ): ClientUnaryCall;
  createGuildChannel(
    request: CreateGuildChannelRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CreateGuildChannelResponse
    ) => void
  ): ClientUnaryCall;
  createGuildChannel(
    request: CreateGuildChannelRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CreateGuildChannelResponse
    ) => void
  ): ClientUnaryCall;
  modifyGuildChannelPositions(
    request: ModifyGuildChannelPositionsRequest,
    callback: (
      error: ServiceError | null,
      response: ModifyGuildChannelPositionsResponse
    ) => void
  ): ClientUnaryCall;
  modifyGuildChannelPositions(
    request: ModifyGuildChannelPositionsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ModifyGuildChannelPositionsResponse
    ) => void
  ): ClientUnaryCall;
  modifyGuildChannelPositions(
    request: ModifyGuildChannelPositionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ModifyGuildChannelPositionsResponse
    ) => void
  ): ClientUnaryCall;
  addGuildMember(
    request: AddGuildMemberRequest,
    callback: (
      error: ServiceError | null,
      response: AddGuildMemberResponse
    ) => void
  ): ClientUnaryCall;
  addGuildMember(
    request: AddGuildMemberRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: AddGuildMemberResponse
    ) => void
  ): ClientUnaryCall;
  addGuildMember(
    request: AddGuildMemberRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: AddGuildMemberResponse
    ) => void
  ): ClientUnaryCall;
  modifyGuildMember(
    request: ModifyGuildMemberRequest,
    callback: (
      error: ServiceError | null,
      response: ModifyGuildMemberResponse
    ) => void
  ): ClientUnaryCall;
  modifyGuildMember(
    request: ModifyGuildMemberRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ModifyGuildMemberResponse
    ) => void
  ): ClientUnaryCall;
  modifyGuildMember(
    request: ModifyGuildMemberRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ModifyGuildMemberResponse
    ) => void
  ): ClientUnaryCall;
  modifyCurrentUserNick(
    request: ModifyCurrentUserNickRequest,
    callback: (
      error: ServiceError | null,
      response: ModifyCurrentUserNickResponse
    ) => void
  ): ClientUnaryCall;
  modifyCurrentUserNick(
    request: ModifyCurrentUserNickRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ModifyCurrentUserNickResponse
    ) => void
  ): ClientUnaryCall;
  modifyCurrentUserNick(
    request: ModifyCurrentUserNickRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ModifyCurrentUserNickResponse
    ) => void
  ): ClientUnaryCall;
  addGuildMemberRole(
    request: AddGuildMemberRoleRequest,
    callback: (
      error: ServiceError | null,
      response: AddGuildMemberRoleResponse
    ) => void
  ): ClientUnaryCall;
  addGuildMemberRole(
    request: AddGuildMemberRoleRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: AddGuildMemberRoleResponse
    ) => void
  ): ClientUnaryCall;
  addGuildMemberRole(
    request: AddGuildMemberRoleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: AddGuildMemberRoleResponse
    ) => void
  ): ClientUnaryCall;
  removeGuildMemberRole(
    request: RemoveGuildMemberRoleRequest,
    callback: (
      error: ServiceError | null,
      response: RemoveGuildMemberRoleResponse
    ) => void
  ): ClientUnaryCall;
  removeGuildMemberRole(
    request: RemoveGuildMemberRoleRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: RemoveGuildMemberRoleResponse
    ) => void
  ): ClientUnaryCall;
  removeGuildMemberRole(
    request: RemoveGuildMemberRoleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: RemoveGuildMemberRoleResponse
    ) => void
  ): ClientUnaryCall;
  removeGuildMember(
    request: RemoveGuildMemberRequest,
    callback: (
      error: ServiceError | null,
      response: RemoveGuildMemberResponse
    ) => void
  ): ClientUnaryCall;
  removeGuildMember(
    request: RemoveGuildMemberRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: RemoveGuildMemberResponse
    ) => void
  ): ClientUnaryCall;
  removeGuildMember(
    request: RemoveGuildMemberRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: RemoveGuildMemberResponse
    ) => void
  ): ClientUnaryCall;
  getGuildBans(
    request: GetGuildBansRequest,
    callback: (
      error: ServiceError | null,
      response: GetGuildBansResponse
    ) => void
  ): ClientUnaryCall;
  getGuildBans(
    request: GetGuildBansRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetGuildBansResponse
    ) => void
  ): ClientUnaryCall;
  getGuildBans(
    request: GetGuildBansRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetGuildBansResponse
    ) => void
  ): ClientUnaryCall;
  getGuildBan(
    request: GetGuildBanRequest,
    callback: (
      error: ServiceError | null,
      response: GetGuildBanResponse
    ) => void
  ): ClientUnaryCall;
  getGuildBan(
    request: GetGuildBanRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetGuildBanResponse
    ) => void
  ): ClientUnaryCall;
  getGuildBan(
    request: GetGuildBanRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetGuildBanResponse
    ) => void
  ): ClientUnaryCall;
  createGuildBan(
    request: CreateGuildBanRequest,
    callback: (
      error: ServiceError | null,
      response: CreateGuildBanResponse
    ) => void
  ): ClientUnaryCall;
  createGuildBan(
    request: CreateGuildBanRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CreateGuildBanResponse
    ) => void
  ): ClientUnaryCall;
  createGuildBan(
    request: CreateGuildBanRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CreateGuildBanResponse
    ) => void
  ): ClientUnaryCall;
  removeGuildBan(
    request: RemoveGuildBanRequest,
    callback: (
      error: ServiceError | null,
      response: RemoveGuildBanResponse
    ) => void
  ): ClientUnaryCall;
  removeGuildBan(
    request: RemoveGuildBanRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: RemoveGuildBanResponse
    ) => void
  ): ClientUnaryCall;
  removeGuildBan(
    request: RemoveGuildBanRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: RemoveGuildBanResponse
    ) => void
  ): ClientUnaryCall;
  createGuildRole(
    request: CreateGuildRoleRequest,
    callback: (
      error: ServiceError | null,
      response: CreateGuildRoleResponse
    ) => void
  ): ClientUnaryCall;
  createGuildRole(
    request: CreateGuildRoleRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CreateGuildRoleResponse
    ) => void
  ): ClientUnaryCall;
  createGuildRole(
    request: CreateGuildRoleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CreateGuildRoleResponse
    ) => void
  ): ClientUnaryCall;
  modifyGuildRolePositions(
    request: ModifyGuildRolePositionsRequest,
    callback: (
      error: ServiceError | null,
      response: ModifyGuildRolePositionsResponse
    ) => void
  ): ClientUnaryCall;
  modifyGuildRolePositions(
    request: ModifyGuildRolePositionsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ModifyGuildRolePositionsResponse
    ) => void
  ): ClientUnaryCall;
  modifyGuildRolePositions(
    request: ModifyGuildRolePositionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ModifyGuildRolePositionsResponse
    ) => void
  ): ClientUnaryCall;
  modifyGuildRole(
    request: ModifyGuildRoleRequest,
    callback: (
      error: ServiceError | null,
      response: ModifyGuildRoleResponse
    ) => void
  ): ClientUnaryCall;
  modifyGuildRole(
    request: ModifyGuildRoleRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ModifyGuildRoleResponse
    ) => void
  ): ClientUnaryCall;
  modifyGuildRole(
    request: ModifyGuildRoleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ModifyGuildRoleResponse
    ) => void
  ): ClientUnaryCall;
  deleteGuildRole(
    request: DeleteGuildRoleRequest,
    callback: (
      error: ServiceError | null,
      response: DeleteGuildRoleResponse
    ) => void
  ): ClientUnaryCall;
  deleteGuildRole(
    request: DeleteGuildRoleRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: DeleteGuildRoleResponse
    ) => void
  ): ClientUnaryCall;
  deleteGuildRole(
    request: DeleteGuildRoleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: DeleteGuildRoleResponse
    ) => void
  ): ClientUnaryCall;
  getGuildPruneCount(
    request: GetGuildPruneCountRequest,
    callback: (
      error: ServiceError | null,
      response: GetGuildPruneCountResponse
    ) => void
  ): ClientUnaryCall;
  getGuildPruneCount(
    request: GetGuildPruneCountRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetGuildPruneCountResponse
    ) => void
  ): ClientUnaryCall;
  getGuildPruneCount(
    request: GetGuildPruneCountRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetGuildPruneCountResponse
    ) => void
  ): ClientUnaryCall;
  beginGuildPrune(
    request: BeginGuildPruneRequest,
    callback: (
      error: ServiceError | null,
      response: BeginGuildPruneResponse
    ) => void
  ): ClientUnaryCall;
  beginGuildPrune(
    request: BeginGuildPruneRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: BeginGuildPruneResponse
    ) => void
  ): ClientUnaryCall;
  beginGuildPrune(
    request: BeginGuildPruneRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: BeginGuildPruneResponse
    ) => void
  ): ClientUnaryCall;
  getGuildVoiceRegions(
    request: GetGuildVoiceRegionsRequest,
    callback: (
      error: ServiceError | null,
      response: GetGuildVoiceRegionsResponse
    ) => void
  ): ClientUnaryCall;
  getGuildVoiceRegions(
    request: GetGuildVoiceRegionsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetGuildVoiceRegionsResponse
    ) => void
  ): ClientUnaryCall;
  getGuildVoiceRegions(
    request: GetGuildVoiceRegionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetGuildVoiceRegionsResponse
    ) => void
  ): ClientUnaryCall;
  getGuildInvites(
    request: GetGuildInvitesRequest,
    callback: (
      error: ServiceError | null,
      response: GetGuildInvitesResponse
    ) => void
  ): ClientUnaryCall;
  getGuildInvites(
    request: GetGuildInvitesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetGuildInvitesResponse
    ) => void
  ): ClientUnaryCall;
  getGuildInvites(
    request: GetGuildInvitesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetGuildInvitesResponse
    ) => void
  ): ClientUnaryCall;
  modifyChannel(
    request: ModifyChannelRequest,
    callback: (
      error: ServiceError | null,
      response: ModifyChannelResponse
    ) => void
  ): ClientUnaryCall;
  modifyChannel(
    request: ModifyChannelRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ModifyChannelResponse
    ) => void
  ): ClientUnaryCall;
  modifyChannel(
    request: ModifyChannelRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ModifyChannelResponse
    ) => void
  ): ClientUnaryCall;
  deleteChannel(
    request: DeleteChannelRequest,
    callback: (
      error: ServiceError | null,
      response: DeleteChannelResponse
    ) => void
  ): ClientUnaryCall;
  deleteChannel(
    request: DeleteChannelRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: DeleteChannelResponse
    ) => void
  ): ClientUnaryCall;
  deleteChannel(
    request: DeleteChannelRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: DeleteChannelResponse
    ) => void
  ): ClientUnaryCall;
  getChannelMessages(
    request: GetChannelMessagesRequest,
    callback: (
      error: ServiceError | null,
      response: GetChannelMessagesResponse
    ) => void
  ): ClientUnaryCall;
  getChannelMessages(
    request: GetChannelMessagesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetChannelMessagesResponse
    ) => void
  ): ClientUnaryCall;
  getChannelMessages(
    request: GetChannelMessagesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetChannelMessagesResponse
    ) => void
  ): ClientUnaryCall;
  getChannelMessage(
    request: GetChannelMessageRequest,
    callback: (
      error: ServiceError | null,
      response: GetChannelMessageResponse
    ) => void
  ): ClientUnaryCall;
  getChannelMessage(
    request: GetChannelMessageRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetChannelMessageResponse
    ) => void
  ): ClientUnaryCall;
  getChannelMessage(
    request: GetChannelMessageRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetChannelMessageResponse
    ) => void
  ): ClientUnaryCall;
  createMessage(
    request: CreateMessageRequest,
    callback: (
      error: ServiceError | null,
      response: CreateMessageResponse
    ) => void
  ): ClientUnaryCall;
  createMessage(
    request: CreateMessageRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CreateMessageResponse
    ) => void
  ): ClientUnaryCall;
  createMessage(
    request: CreateMessageRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CreateMessageResponse
    ) => void
  ): ClientUnaryCall;
  crosspostMessage(
    request: CrosspostMessageRequest,
    callback: (
      error: ServiceError | null,
      response: CrosspostMessageResponse
    ) => void
  ): ClientUnaryCall;
  crosspostMessage(
    request: CrosspostMessageRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CrosspostMessageResponse
    ) => void
  ): ClientUnaryCall;
  crosspostMessage(
    request: CrosspostMessageRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CrosspostMessageResponse
    ) => void
  ): ClientUnaryCall;
  createReaction(
    request: CreateReactionRequest,
    callback: (
      error: ServiceError | null,
      response: CreateReactionResponse
    ) => void
  ): ClientUnaryCall;
  createReaction(
    request: CreateReactionRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CreateReactionResponse
    ) => void
  ): ClientUnaryCall;
  createReaction(
    request: CreateReactionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CreateReactionResponse
    ) => void
  ): ClientUnaryCall;
  deleteOwnReaction(
    request: DeleteOwnReactionRequest,
    callback: (
      error: ServiceError | null,
      response: DeleteOwnReactionResponse
    ) => void
  ): ClientUnaryCall;
  deleteOwnReaction(
    request: DeleteOwnReactionRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: DeleteOwnReactionResponse
    ) => void
  ): ClientUnaryCall;
  deleteOwnReaction(
    request: DeleteOwnReactionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: DeleteOwnReactionResponse
    ) => void
  ): ClientUnaryCall;
  deleteUserReaction(
    request: DeleteUserReactionRequest,
    callback: (
      error: ServiceError | null,
      response: DeleteUserReactionResponse
    ) => void
  ): ClientUnaryCall;
  deleteUserReaction(
    request: DeleteUserReactionRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: DeleteUserReactionResponse
    ) => void
  ): ClientUnaryCall;
  deleteUserReaction(
    request: DeleteUserReactionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: DeleteUserReactionResponse
    ) => void
  ): ClientUnaryCall;
  deleteAllReactions(
    request: DeleteAllReactionsRequest,
    callback: (
      error: ServiceError | null,
      response: DeleteAllReactionsResponse
    ) => void
  ): ClientUnaryCall;
  deleteAllReactions(
    request: DeleteAllReactionsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: DeleteAllReactionsResponse
    ) => void
  ): ClientUnaryCall;
  deleteAllReactions(
    request: DeleteAllReactionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: DeleteAllReactionsResponse
    ) => void
  ): ClientUnaryCall;
  deleteAllReactionsForEmoji(
    request: DeleteAllReactionsForEmojiRequest,
    callback: (
      error: ServiceError | null,
      response: DeleteAllReactionsForEmojiResponse
    ) => void
  ): ClientUnaryCall;
  deleteAllReactionsForEmoji(
    request: DeleteAllReactionsForEmojiRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: DeleteAllReactionsForEmojiResponse
    ) => void
  ): ClientUnaryCall;
  deleteAllReactionsForEmoji(
    request: DeleteAllReactionsForEmojiRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: DeleteAllReactionsForEmojiResponse
    ) => void
  ): ClientUnaryCall;
  editMessage(
    request: EditMessageRequest,
    callback: (
      error: ServiceError | null,
      response: EditMessageResponse
    ) => void
  ): ClientUnaryCall;
  editMessage(
    request: EditMessageRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: EditMessageResponse
    ) => void
  ): ClientUnaryCall;
  editMessage(
    request: EditMessageRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: EditMessageResponse
    ) => void
  ): ClientUnaryCall;
  deleteMessage(
    request: DeleteMessageRequest,
    callback: (
      error: ServiceError | null,
      response: DeleteMessageResponse
    ) => void
  ): ClientUnaryCall;
  deleteMessage(
    request: DeleteMessageRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: DeleteMessageResponse
    ) => void
  ): ClientUnaryCall;
  deleteMessage(
    request: DeleteMessageRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: DeleteMessageResponse
    ) => void
  ): ClientUnaryCall;
  bulkDeleteMessages(
    request: BulkDeleteMessagesRequest,
    callback: (
      error: ServiceError | null,
      response: BulkDeleteMessagesResponse
    ) => void
  ): ClientUnaryCall;
  bulkDeleteMessages(
    request: BulkDeleteMessagesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: BulkDeleteMessagesResponse
    ) => void
  ): ClientUnaryCall;
  bulkDeleteMessages(
    request: BulkDeleteMessagesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: BulkDeleteMessagesResponse
    ) => void
  ): ClientUnaryCall;
  editChannelPermissions(
    request: EditChannelPermissionsRequest,
    callback: (
      error: ServiceError | null,
      response: EditChannelPermissionsResponse
    ) => void
  ): ClientUnaryCall;
  editChannelPermissions(
    request: EditChannelPermissionsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: EditChannelPermissionsResponse
    ) => void
  ): ClientUnaryCall;
  editChannelPermissions(
    request: EditChannelPermissionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: EditChannelPermissionsResponse
    ) => void
  ): ClientUnaryCall;
  getChannelInvites(
    request: GetChannelInvitesRequest,
    callback: (
      error: ServiceError | null,
      response: GetChannelInvitesResponse
    ) => void
  ): ClientUnaryCall;
  getChannelInvites(
    request: GetChannelInvitesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetChannelInvitesResponse
    ) => void
  ): ClientUnaryCall;
  getChannelInvites(
    request: GetChannelInvitesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetChannelInvitesResponse
    ) => void
  ): ClientUnaryCall;
  createChannelInvite(
    request: CreateChannelInviteRequest,
    callback: (
      error: ServiceError | null,
      response: CreateChannelInviteResponse
    ) => void
  ): ClientUnaryCall;
  createChannelInvite(
    request: CreateChannelInviteRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CreateChannelInviteResponse
    ) => void
  ): ClientUnaryCall;
  createChannelInvite(
    request: CreateChannelInviteRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CreateChannelInviteResponse
    ) => void
  ): ClientUnaryCall;
  deleteChannelPermission(
    request: DeleteChannelPermissionRequest,
    callback: (
      error: ServiceError | null,
      response: DeleteChannelPermissionResponse
    ) => void
  ): ClientUnaryCall;
  deleteChannelPermission(
    request: DeleteChannelPermissionRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: DeleteChannelPermissionResponse
    ) => void
  ): ClientUnaryCall;
  deleteChannelPermission(
    request: DeleteChannelPermissionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: DeleteChannelPermissionResponse
    ) => void
  ): ClientUnaryCall;
  followNewsChannel(
    request: FollowNewsChannelRequest,
    callback: (
      error: ServiceError | null,
      response: FollowNewsChannelResponse
    ) => void
  ): ClientUnaryCall;
  followNewsChannel(
    request: FollowNewsChannelRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: FollowNewsChannelResponse
    ) => void
  ): ClientUnaryCall;
  followNewsChannel(
    request: FollowNewsChannelRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: FollowNewsChannelResponse
    ) => void
  ): ClientUnaryCall;
  triggerTypingIndicator(
    request: TriggerTypingIndicatorRequest,
    callback: (
      error: ServiceError | null,
      response: TriggerTypingIndicatorResponse
    ) => void
  ): ClientUnaryCall;
  triggerTypingIndicator(
    request: TriggerTypingIndicatorRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: TriggerTypingIndicatorResponse
    ) => void
  ): ClientUnaryCall;
  triggerTypingIndicator(
    request: TriggerTypingIndicatorRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: TriggerTypingIndicatorResponse
    ) => void
  ): ClientUnaryCall;
  getPinnedMessages(
    request: GetPinnedMessagesRequest,
    callback: (
      error: ServiceError | null,
      response: GetPinnedMessagesResponse
    ) => void
  ): ClientUnaryCall;
  getPinnedMessages(
    request: GetPinnedMessagesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetPinnedMessagesResponse
    ) => void
  ): ClientUnaryCall;
  getPinnedMessages(
    request: GetPinnedMessagesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetPinnedMessagesResponse
    ) => void
  ): ClientUnaryCall;
  addPinnedChannelMessage(
    request: AddPinnedChannelMessageRequest,
    callback: (
      error: ServiceError | null,
      response: AddPinnedChannelMessageResponse
    ) => void
  ): ClientUnaryCall;
  addPinnedChannelMessage(
    request: AddPinnedChannelMessageRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: AddPinnedChannelMessageResponse
    ) => void
  ): ClientUnaryCall;
  addPinnedChannelMessage(
    request: AddPinnedChannelMessageRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: AddPinnedChannelMessageResponse
    ) => void
  ): ClientUnaryCall;
  deletePinnedChannelMessage(
    request: DeletePinnedChannelMessageRequest,
    callback: (
      error: ServiceError | null,
      response: DeletePinnedChannelMessageResponse
    ) => void
  ): ClientUnaryCall;
  deletePinnedChannelMessage(
    request: DeletePinnedChannelMessageRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: DeletePinnedChannelMessageResponse
    ) => void
  ): ClientUnaryCall;
  deletePinnedChannelMessage(
    request: DeletePinnedChannelMessageRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: DeletePinnedChannelMessageResponse
    ) => void
  ): ClientUnaryCall;
  listGuildEmojis(
    request: ListGuildEmojisRequest,
    callback: (
      error: ServiceError | null,
      response: ListGuildEmojisResponse
    ) => void
  ): ClientUnaryCall;
  listGuildEmojis(
    request: ListGuildEmojisRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListGuildEmojisResponse
    ) => void
  ): ClientUnaryCall;
  listGuildEmojis(
    request: ListGuildEmojisRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListGuildEmojisResponse
    ) => void
  ): ClientUnaryCall;
  getGuildEmoji(
    request: GetGuildEmojiRequest,
    callback: (
      error: ServiceError | null,
      response: GetGuildEmojiResponse
    ) => void
  ): ClientUnaryCall;
  getGuildEmoji(
    request: GetGuildEmojiRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetGuildEmojiResponse
    ) => void
  ): ClientUnaryCall;
  getGuildEmoji(
    request: GetGuildEmojiRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetGuildEmojiResponse
    ) => void
  ): ClientUnaryCall;
  createGuildEmoji(
    request: CreateGuildEmojiRequest,
    callback: (
      error: ServiceError | null,
      response: CreateGuildEmojiResponse
    ) => void
  ): ClientUnaryCall;
  createGuildEmoji(
    request: CreateGuildEmojiRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CreateGuildEmojiResponse
    ) => void
  ): ClientUnaryCall;
  createGuildEmoji(
    request: CreateGuildEmojiRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CreateGuildEmojiResponse
    ) => void
  ): ClientUnaryCall;
  modifyGuildEmoji(
    request: ModifyGuildEmojiRequest,
    callback: (
      error: ServiceError | null,
      response: ModifyGuildEmojiResponse
    ) => void
  ): ClientUnaryCall;
  modifyGuildEmoji(
    request: ModifyGuildEmojiRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ModifyGuildEmojiResponse
    ) => void
  ): ClientUnaryCall;
  modifyGuildEmoji(
    request: ModifyGuildEmojiRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ModifyGuildEmojiResponse
    ) => void
  ): ClientUnaryCall;
  deleteGuildEmoji(
    request: DeleteGuildEmojiRequest,
    callback: (
      error: ServiceError | null,
      response: DeleteGuildEmojiResponse
    ) => void
  ): ClientUnaryCall;
  deleteGuildEmoji(
    request: DeleteGuildEmojiRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: DeleteGuildEmojiResponse
    ) => void
  ): ClientUnaryCall;
  deleteGuildEmoji(
    request: DeleteGuildEmojiRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: DeleteGuildEmojiResponse
    ) => void
  ): ClientUnaryCall;
  getCurrentUser(
    request: GetCurrentUserRequest,
    callback: (
      error: ServiceError | null,
      response: GetCurrentUserResponse
    ) => void
  ): ClientUnaryCall;
  getCurrentUser(
    request: GetCurrentUserRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetCurrentUserResponse
    ) => void
  ): ClientUnaryCall;
  getCurrentUser(
    request: GetCurrentUserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetCurrentUserResponse
    ) => void
  ): ClientUnaryCall;
  getUser(
    request: GetUserRequest,
    callback: (error: ServiceError | null, response: GetUserResponse) => void
  ): ClientUnaryCall;
  getUser(
    request: GetUserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetUserResponse) => void
  ): ClientUnaryCall;
  getUser(
    request: GetUserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetUserResponse) => void
  ): ClientUnaryCall;
  modifyCurrentUser(
    request: ModifyCurrentUserRequest,
    callback: (
      error: ServiceError | null,
      response: ModifyCurrentUserResponse
    ) => void
  ): ClientUnaryCall;
  modifyCurrentUser(
    request: ModifyCurrentUserRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ModifyCurrentUserResponse
    ) => void
  ): ClientUnaryCall;
  modifyCurrentUser(
    request: ModifyCurrentUserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ModifyCurrentUserResponse
    ) => void
  ): ClientUnaryCall;
  leaveGuild(
    request: LeaveGuildRequest,
    callback: (error: ServiceError | null, response: LeaveGuildResponse) => void
  ): ClientUnaryCall;
  leaveGuild(
    request: LeaveGuildRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LeaveGuildResponse) => void
  ): ClientUnaryCall;
  leaveGuild(
    request: LeaveGuildRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LeaveGuildResponse) => void
  ): ClientUnaryCall;
  createDm(
    request: CreateDmRequest,
    callback: (error: ServiceError | null, response: CreateDmResponse) => void
  ): ClientUnaryCall;
  createDm(
    request: CreateDmRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateDmResponse) => void
  ): ClientUnaryCall;
  createDm(
    request: CreateDmRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateDmResponse) => void
  ): ClientUnaryCall;
}

export const GatewayRestClient = (makeGenericClientConstructor(
  GatewayRestService,
  "pylon.gateway.v1.service.GatewayRest"
) as unknown) as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): GatewayRestClient;
};

export interface DataLoaderOptions {
  cache?: boolean;
}

export interface DataLoaders {
  rpcDataLoaderOptions?: DataLoaderOptions;
  getDataLoader<T>(identifier: string, constructorFn: () => T): T;
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
