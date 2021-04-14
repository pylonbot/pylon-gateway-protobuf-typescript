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
  GetGuildRequest,
  GetGuildResponse,
  ListGuildChannelsRequest,
  ListGuildChannelsResponse,
  GetGuildChannelRequest,
  GetGuildChannelResponse,
  ListGuildMembersRequest,
  ListGuildMembersResponse,
  GetGuildMemberRequest,
  GetGuildMemberResponse,
  FindGuildMembersRequest,
  FindGuildMembersResponse,
  GetGuildMemberPresenceRequest,
  GetGuildMemberPresenceResponse,
  ListGuildRolesRequest,
  ListGuildRolesResponse,
  GetGuildRoleRequest,
  GetGuildRoleResponse,
  ListGuildEmojisRequest,
  ListGuildEmojisResponse,
  GetGuildEmojiRequest,
  GetGuildEmojiResponse,
  GetGuildMemberVoiceStateRequest,
  GetGuildMemberVoiceStateResponse,
  ListGuildChannelVoiceStatesRequest,
  ListGuildChannelVoiceStatesResponse,
  GetUserRequest,
  GetUserResponse,
} from "../../discord/v1/cache";

export const protobufPackage = "pylon.gateway.v1.service";

export const GatewayCacheService = {
  /** Guilds */
  getGuild: {
    path: "/pylon.gateway.v1.service.GatewayCache/GetGuild",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetGuildRequest) =>
      Buffer.from(GetGuildRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetGuildRequest.decode(value),
    responseSerialize: (value: GetGuildResponse) =>
      Buffer.from(GetGuildResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetGuildResponse.decode(value),
  },
  /** Channels */
  listGuildChannels: {
    path: "/pylon.gateway.v1.service.GatewayCache/ListGuildChannels",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListGuildChannelsRequest) =>
      Buffer.from(ListGuildChannelsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListGuildChannelsRequest.decode(value),
    responseSerialize: (value: ListGuildChannelsResponse) =>
      Buffer.from(ListGuildChannelsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListGuildChannelsResponse.decode(value),
  },
  getGuildChannel: {
    path: "/pylon.gateway.v1.service.GatewayCache/GetGuildChannel",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetGuildChannelRequest) =>
      Buffer.from(GetGuildChannelRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetGuildChannelRequest.decode(value),
    responseSerialize: (value: GetGuildChannelResponse) =>
      Buffer.from(GetGuildChannelResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetGuildChannelResponse.decode(value),
  },
  /** Guild Members */
  listGuildMembers: {
    path: "/pylon.gateway.v1.service.GatewayCache/ListGuildMembers",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListGuildMembersRequest) =>
      Buffer.from(ListGuildMembersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListGuildMembersRequest.decode(value),
    responseSerialize: (value: ListGuildMembersResponse) =>
      Buffer.from(ListGuildMembersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListGuildMembersResponse.decode(value),
  },
  getGuildMember: {
    path: "/pylon.gateway.v1.service.GatewayCache/GetGuildMember",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetGuildMemberRequest) =>
      Buffer.from(GetGuildMemberRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetGuildMemberRequest.decode(value),
    responseSerialize: (value: GetGuildMemberResponse) =>
      Buffer.from(GetGuildMemberResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetGuildMemberResponse.decode(value),
  },
  findGuildMembers: {
    path: "/pylon.gateway.v1.service.GatewayCache/FindGuildMembers",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: FindGuildMembersRequest) =>
      Buffer.from(FindGuildMembersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      FindGuildMembersRequest.decode(value),
    responseSerialize: (value: FindGuildMembersResponse) =>
      Buffer.from(FindGuildMembersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      FindGuildMembersResponse.decode(value),
  },
  /** Guild Member Presence */
  getGuildMemberPresence: {
    path: "/pylon.gateway.v1.service.GatewayCache/GetGuildMemberPresence",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetGuildMemberPresenceRequest) =>
      Buffer.from(GetGuildMemberPresenceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetGuildMemberPresenceRequest.decode(value),
    responseSerialize: (value: GetGuildMemberPresenceResponse) =>
      Buffer.from(GetGuildMemberPresenceResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetGuildMemberPresenceResponse.decode(value),
  },
  /** Guild Member Roles */
  listGuildRoles: {
    path: "/pylon.gateway.v1.service.GatewayCache/ListGuildRoles",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListGuildRolesRequest) =>
      Buffer.from(ListGuildRolesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListGuildRolesRequest.decode(value),
    responseSerialize: (value: ListGuildRolesResponse) =>
      Buffer.from(ListGuildRolesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListGuildRolesResponse.decode(value),
  },
  getGuildRole: {
    path: "/pylon.gateway.v1.service.GatewayCache/GetGuildRole",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetGuildRoleRequest) =>
      Buffer.from(GetGuildRoleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetGuildRoleRequest.decode(value),
    responseSerialize: (value: GetGuildRoleResponse) =>
      Buffer.from(GetGuildRoleResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetGuildRoleResponse.decode(value),
  },
  /** Emojis */
  listGuildEmojis: {
    path: "/pylon.gateway.v1.service.GatewayCache/ListGuildEmojis",
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
    path: "/pylon.gateway.v1.service.GatewayCache/GetGuildEmoji",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetGuildEmojiRequest) =>
      Buffer.from(GetGuildEmojiRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetGuildEmojiRequest.decode(value),
    responseSerialize: (value: GetGuildEmojiResponse) =>
      Buffer.from(GetGuildEmojiResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetGuildEmojiResponse.decode(value),
  },
  /** VoiceStates */
  getGuildMemberVoiceState: {
    path: "/pylon.gateway.v1.service.GatewayCache/GetGuildMemberVoiceState",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetGuildMemberVoiceStateRequest) =>
      Buffer.from(GetGuildMemberVoiceStateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetGuildMemberVoiceStateRequest.decode(value),
    responseSerialize: (value: GetGuildMemberVoiceStateResponse) =>
      Buffer.from(GetGuildMemberVoiceStateResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetGuildMemberVoiceStateResponse.decode(value),
  },
  listGuildChannelVoiceStates: {
    path: "/pylon.gateway.v1.service.GatewayCache/ListGuildChannelVoiceStates",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListGuildChannelVoiceStatesRequest) =>
      Buffer.from(ListGuildChannelVoiceStatesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ListGuildChannelVoiceStatesRequest.decode(value),
    responseSerialize: (value: ListGuildChannelVoiceStatesResponse) =>
      Buffer.from(ListGuildChannelVoiceStatesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ListGuildChannelVoiceStatesResponse.decode(value),
  },
  /** GetUser */
  getUser: {
    path: "/pylon.gateway.v1.service.GatewayCache/GetUser",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetUserRequest) =>
      Buffer.from(GetUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetUserRequest.decode(value),
    responseSerialize: (value: GetUserResponse) =>
      Buffer.from(GetUserResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetUserResponse.decode(value),
  },
} as const;

export interface GatewayCacheServer extends UntypedServiceImplementation {
  /** Guilds */
  getGuild: handleUnaryCall<GetGuildRequest, GetGuildResponse>;
  /** Channels */
  listGuildChannels: handleUnaryCall<
    ListGuildChannelsRequest,
    ListGuildChannelsResponse
  >;
  getGuildChannel: handleUnaryCall<
    GetGuildChannelRequest,
    GetGuildChannelResponse
  >;
  /** Guild Members */
  listGuildMembers: handleUnaryCall<
    ListGuildMembersRequest,
    ListGuildMembersResponse
  >;
  getGuildMember: handleUnaryCall<
    GetGuildMemberRequest,
    GetGuildMemberResponse
  >;
  findGuildMembers: handleUnaryCall<
    FindGuildMembersRequest,
    FindGuildMembersResponse
  >;
  /** Guild Member Presence */
  getGuildMemberPresence: handleUnaryCall<
    GetGuildMemberPresenceRequest,
    GetGuildMemberPresenceResponse
  >;
  /** Guild Member Roles */
  listGuildRoles: handleUnaryCall<
    ListGuildRolesRequest,
    ListGuildRolesResponse
  >;
  getGuildRole: handleUnaryCall<GetGuildRoleRequest, GetGuildRoleResponse>;
  /** Emojis */
  listGuildEmojis: handleUnaryCall<
    ListGuildEmojisRequest,
    ListGuildEmojisResponse
  >;
  getGuildEmoji: handleUnaryCall<GetGuildEmojiRequest, GetGuildEmojiResponse>;
  /** VoiceStates */
  getGuildMemberVoiceState: handleUnaryCall<
    GetGuildMemberVoiceStateRequest,
    GetGuildMemberVoiceStateResponse
  >;
  listGuildChannelVoiceStates: handleUnaryCall<
    ListGuildChannelVoiceStatesRequest,
    ListGuildChannelVoiceStatesResponse
  >;
  /** GetUser */
  getUser: handleUnaryCall<GetUserRequest, GetUserResponse>;
}

export interface GatewayCacheClient extends Client {
  /** Guilds */
  getGuild(
    request: GetGuildRequest,
    callback: (error: ServiceError | null, response: GetGuildResponse) => void
  ): ClientUnaryCall;
  getGuild(
    request: GetGuildRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetGuildResponse) => void
  ): ClientUnaryCall;
  getGuild(
    request: GetGuildRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetGuildResponse) => void
  ): ClientUnaryCall;
  /** Channels */
  listGuildChannels(
    request: ListGuildChannelsRequest,
    callback: (
      error: ServiceError | null,
      response: ListGuildChannelsResponse
    ) => void
  ): ClientUnaryCall;
  listGuildChannels(
    request: ListGuildChannelsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListGuildChannelsResponse
    ) => void
  ): ClientUnaryCall;
  listGuildChannels(
    request: ListGuildChannelsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListGuildChannelsResponse
    ) => void
  ): ClientUnaryCall;
  getGuildChannel(
    request: GetGuildChannelRequest,
    callback: (
      error: ServiceError | null,
      response: GetGuildChannelResponse
    ) => void
  ): ClientUnaryCall;
  getGuildChannel(
    request: GetGuildChannelRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetGuildChannelResponse
    ) => void
  ): ClientUnaryCall;
  getGuildChannel(
    request: GetGuildChannelRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetGuildChannelResponse
    ) => void
  ): ClientUnaryCall;
  /** Guild Members */
  listGuildMembers(
    request: ListGuildMembersRequest,
    callback: (
      error: ServiceError | null,
      response: ListGuildMembersResponse
    ) => void
  ): ClientUnaryCall;
  listGuildMembers(
    request: ListGuildMembersRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListGuildMembersResponse
    ) => void
  ): ClientUnaryCall;
  listGuildMembers(
    request: ListGuildMembersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListGuildMembersResponse
    ) => void
  ): ClientUnaryCall;
  getGuildMember(
    request: GetGuildMemberRequest,
    callback: (
      error: ServiceError | null,
      response: GetGuildMemberResponse
    ) => void
  ): ClientUnaryCall;
  getGuildMember(
    request: GetGuildMemberRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetGuildMemberResponse
    ) => void
  ): ClientUnaryCall;
  getGuildMember(
    request: GetGuildMemberRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetGuildMemberResponse
    ) => void
  ): ClientUnaryCall;
  findGuildMembers(
    request: FindGuildMembersRequest,
    callback: (
      error: ServiceError | null,
      response: FindGuildMembersResponse
    ) => void
  ): ClientUnaryCall;
  findGuildMembers(
    request: FindGuildMembersRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: FindGuildMembersResponse
    ) => void
  ): ClientUnaryCall;
  findGuildMembers(
    request: FindGuildMembersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: FindGuildMembersResponse
    ) => void
  ): ClientUnaryCall;
  /** Guild Member Presence */
  getGuildMemberPresence(
    request: GetGuildMemberPresenceRequest,
    callback: (
      error: ServiceError | null,
      response: GetGuildMemberPresenceResponse
    ) => void
  ): ClientUnaryCall;
  getGuildMemberPresence(
    request: GetGuildMemberPresenceRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetGuildMemberPresenceResponse
    ) => void
  ): ClientUnaryCall;
  getGuildMemberPresence(
    request: GetGuildMemberPresenceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetGuildMemberPresenceResponse
    ) => void
  ): ClientUnaryCall;
  /** Guild Member Roles */
  listGuildRoles(
    request: ListGuildRolesRequest,
    callback: (
      error: ServiceError | null,
      response: ListGuildRolesResponse
    ) => void
  ): ClientUnaryCall;
  listGuildRoles(
    request: ListGuildRolesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListGuildRolesResponse
    ) => void
  ): ClientUnaryCall;
  listGuildRoles(
    request: ListGuildRolesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListGuildRolesResponse
    ) => void
  ): ClientUnaryCall;
  getGuildRole(
    request: GetGuildRoleRequest,
    callback: (
      error: ServiceError | null,
      response: GetGuildRoleResponse
    ) => void
  ): ClientUnaryCall;
  getGuildRole(
    request: GetGuildRoleRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetGuildRoleResponse
    ) => void
  ): ClientUnaryCall;
  getGuildRole(
    request: GetGuildRoleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetGuildRoleResponse
    ) => void
  ): ClientUnaryCall;
  /** Emojis */
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
  /** VoiceStates */
  getGuildMemberVoiceState(
    request: GetGuildMemberVoiceStateRequest,
    callback: (
      error: ServiceError | null,
      response: GetGuildMemberVoiceStateResponse
    ) => void
  ): ClientUnaryCall;
  getGuildMemberVoiceState(
    request: GetGuildMemberVoiceStateRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetGuildMemberVoiceStateResponse
    ) => void
  ): ClientUnaryCall;
  getGuildMemberVoiceState(
    request: GetGuildMemberVoiceStateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetGuildMemberVoiceStateResponse
    ) => void
  ): ClientUnaryCall;
  listGuildChannelVoiceStates(
    request: ListGuildChannelVoiceStatesRequest,
    callback: (
      error: ServiceError | null,
      response: ListGuildChannelVoiceStatesResponse
    ) => void
  ): ClientUnaryCall;
  listGuildChannelVoiceStates(
    request: ListGuildChannelVoiceStatesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListGuildChannelVoiceStatesResponse
    ) => void
  ): ClientUnaryCall;
  listGuildChannelVoiceStates(
    request: ListGuildChannelVoiceStatesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListGuildChannelVoiceStatesResponse
    ) => void
  ): ClientUnaryCall;
  /** GetUser */
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
}

export const GatewayCacheClient = (makeGenericClientConstructor(
  GatewayCacheService,
  "pylon.gateway.v1.service.GatewayCache"
) as unknown) as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): GatewayCacheClient;
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
