/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import { GetGuildRequest, GetGuildResponse, ListGuildChannelsRequest, ListGuildChannelsResponse, GetGuildChannelRequest, GetGuildChannelResponse, ListGuildMembersRequest, ListGuildMembersResponse, GetGuildMemberRequest, GetGuildMemberResponse, FindGuildMembersRequest, FindGuildMembersResponse, GetGuildMemberPresenceRequest, GetGuildMemberPresenceResponse, ListGuildRolesRequest, ListGuildRolesResponse, GetGuildRoleRequest, GetGuildRoleResponse, ListGuildEmojisRequest, ListGuildEmojisResponse, GetGuildEmojiRequest, GetGuildEmojiResponse, GetGuildMemberVoiceStateRequest, GetGuildMemberVoiceStateResponse, ListGuildChannelVoiceStatesRequest, ListGuildChannelVoiceStatesResponse, GetUserRequest, GetUserResponse } from "../../discord/v1/cache";
export declare const protobufPackage = "pylon.gateway.v1.service";
export declare const GatewayCacheService: {
    /** Guilds */
    readonly getGuild: {
        readonly path: "/pylon.gateway.v1.service.GatewayCache/GetGuild";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetGuildRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetGuildRequest;
        readonly responseSerialize: (value: GetGuildResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetGuildResponse;
    };
    /** Channels */
    readonly listGuildChannels: {
        readonly path: "/pylon.gateway.v1.service.GatewayCache/ListGuildChannels";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListGuildChannelsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListGuildChannelsRequest;
        readonly responseSerialize: (value: ListGuildChannelsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListGuildChannelsResponse;
    };
    readonly getGuildChannel: {
        readonly path: "/pylon.gateway.v1.service.GatewayCache/GetGuildChannel";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetGuildChannelRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetGuildChannelRequest;
        readonly responseSerialize: (value: GetGuildChannelResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetGuildChannelResponse;
    };
    /** Guild Members */
    readonly listGuildMembers: {
        readonly path: "/pylon.gateway.v1.service.GatewayCache/ListGuildMembers";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListGuildMembersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListGuildMembersRequest;
        readonly responseSerialize: (value: ListGuildMembersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListGuildMembersResponse;
    };
    readonly getGuildMember: {
        readonly path: "/pylon.gateway.v1.service.GatewayCache/GetGuildMember";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetGuildMemberRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetGuildMemberRequest;
        readonly responseSerialize: (value: GetGuildMemberResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetGuildMemberResponse;
    };
    readonly findGuildMembers: {
        readonly path: "/pylon.gateway.v1.service.GatewayCache/FindGuildMembers";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: FindGuildMembersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => FindGuildMembersRequest;
        readonly responseSerialize: (value: FindGuildMembersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => FindGuildMembersResponse;
    };
    /** Guild Member Presence */
    readonly getGuildMemberPresence: {
        readonly path: "/pylon.gateway.v1.service.GatewayCache/GetGuildMemberPresence";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetGuildMemberPresenceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetGuildMemberPresenceRequest;
        readonly responseSerialize: (value: GetGuildMemberPresenceResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetGuildMemberPresenceResponse;
    };
    /** Guild Member Roles */
    readonly listGuildRoles: {
        readonly path: "/pylon.gateway.v1.service.GatewayCache/ListGuildRoles";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListGuildRolesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListGuildRolesRequest;
        readonly responseSerialize: (value: ListGuildRolesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListGuildRolesResponse;
    };
    readonly getGuildRole: {
        readonly path: "/pylon.gateway.v1.service.GatewayCache/GetGuildRole";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetGuildRoleRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetGuildRoleRequest;
        readonly responseSerialize: (value: GetGuildRoleResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetGuildRoleResponse;
    };
    /** Emojis */
    readonly listGuildEmojis: {
        readonly path: "/pylon.gateway.v1.service.GatewayCache/ListGuildEmojis";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListGuildEmojisRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListGuildEmojisRequest;
        readonly responseSerialize: (value: ListGuildEmojisResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListGuildEmojisResponse;
    };
    readonly getGuildEmoji: {
        readonly path: "/pylon.gateway.v1.service.GatewayCache/GetGuildEmoji";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetGuildEmojiRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetGuildEmojiRequest;
        readonly responseSerialize: (value: GetGuildEmojiResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetGuildEmojiResponse;
    };
    /** VoiceStates */
    readonly getGuildMemberVoiceState: {
        readonly path: "/pylon.gateway.v1.service.GatewayCache/GetGuildMemberVoiceState";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetGuildMemberVoiceStateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetGuildMemberVoiceStateRequest;
        readonly responseSerialize: (value: GetGuildMemberVoiceStateResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetGuildMemberVoiceStateResponse;
    };
    readonly listGuildChannelVoiceStates: {
        readonly path: "/pylon.gateway.v1.service.GatewayCache/ListGuildChannelVoiceStates";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListGuildChannelVoiceStatesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListGuildChannelVoiceStatesRequest;
        readonly responseSerialize: (value: ListGuildChannelVoiceStatesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListGuildChannelVoiceStatesResponse;
    };
    /** GetUser */
    readonly getUser: {
        readonly path: "/pylon.gateway.v1.service.GatewayCache/GetUser";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetUserRequest;
        readonly responseSerialize: (value: GetUserResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetUserResponse;
    };
};
export interface GatewayCacheServer extends UntypedServiceImplementation {
    /** Guilds */
    getGuild: handleUnaryCall<GetGuildRequest, GetGuildResponse>;
    /** Channels */
    listGuildChannels: handleUnaryCall<ListGuildChannelsRequest, ListGuildChannelsResponse>;
    getGuildChannel: handleUnaryCall<GetGuildChannelRequest, GetGuildChannelResponse>;
    /** Guild Members */
    listGuildMembers: handleUnaryCall<ListGuildMembersRequest, ListGuildMembersResponse>;
    getGuildMember: handleUnaryCall<GetGuildMemberRequest, GetGuildMemberResponse>;
    findGuildMembers: handleUnaryCall<FindGuildMembersRequest, FindGuildMembersResponse>;
    /** Guild Member Presence */
    getGuildMemberPresence: handleUnaryCall<GetGuildMemberPresenceRequest, GetGuildMemberPresenceResponse>;
    /** Guild Member Roles */
    listGuildRoles: handleUnaryCall<ListGuildRolesRequest, ListGuildRolesResponse>;
    getGuildRole: handleUnaryCall<GetGuildRoleRequest, GetGuildRoleResponse>;
    /** Emojis */
    listGuildEmojis: handleUnaryCall<ListGuildEmojisRequest, ListGuildEmojisResponse>;
    getGuildEmoji: handleUnaryCall<GetGuildEmojiRequest, GetGuildEmojiResponse>;
    /** VoiceStates */
    getGuildMemberVoiceState: handleUnaryCall<GetGuildMemberVoiceStateRequest, GetGuildMemberVoiceStateResponse>;
    listGuildChannelVoiceStates: handleUnaryCall<ListGuildChannelVoiceStatesRequest, ListGuildChannelVoiceStatesResponse>;
    /** GetUser */
    getUser: handleUnaryCall<GetUserRequest, GetUserResponse>;
}
export interface GatewayCacheClient extends Client {
    /** Guilds */
    getGuild(request: GetGuildRequest, callback: (error: ServiceError | null, response: GetGuildResponse) => void): ClientUnaryCall;
    getGuild(request: GetGuildRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetGuildResponse) => void): ClientUnaryCall;
    getGuild(request: GetGuildRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetGuildResponse) => void): ClientUnaryCall;
    /** Channels */
    listGuildChannels(request: ListGuildChannelsRequest, callback: (error: ServiceError | null, response: ListGuildChannelsResponse) => void): ClientUnaryCall;
    listGuildChannels(request: ListGuildChannelsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListGuildChannelsResponse) => void): ClientUnaryCall;
    listGuildChannels(request: ListGuildChannelsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListGuildChannelsResponse) => void): ClientUnaryCall;
    getGuildChannel(request: GetGuildChannelRequest, callback: (error: ServiceError | null, response: GetGuildChannelResponse) => void): ClientUnaryCall;
    getGuildChannel(request: GetGuildChannelRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetGuildChannelResponse) => void): ClientUnaryCall;
    getGuildChannel(request: GetGuildChannelRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetGuildChannelResponse) => void): ClientUnaryCall;
    /** Guild Members */
    listGuildMembers(request: ListGuildMembersRequest, callback: (error: ServiceError | null, response: ListGuildMembersResponse) => void): ClientUnaryCall;
    listGuildMembers(request: ListGuildMembersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListGuildMembersResponse) => void): ClientUnaryCall;
    listGuildMembers(request: ListGuildMembersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListGuildMembersResponse) => void): ClientUnaryCall;
    getGuildMember(request: GetGuildMemberRequest, callback: (error: ServiceError | null, response: GetGuildMemberResponse) => void): ClientUnaryCall;
    getGuildMember(request: GetGuildMemberRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetGuildMemberResponse) => void): ClientUnaryCall;
    getGuildMember(request: GetGuildMemberRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetGuildMemberResponse) => void): ClientUnaryCall;
    findGuildMembers(request: FindGuildMembersRequest, callback: (error: ServiceError | null, response: FindGuildMembersResponse) => void): ClientUnaryCall;
    findGuildMembers(request: FindGuildMembersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: FindGuildMembersResponse) => void): ClientUnaryCall;
    findGuildMembers(request: FindGuildMembersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: FindGuildMembersResponse) => void): ClientUnaryCall;
    /** Guild Member Presence */
    getGuildMemberPresence(request: GetGuildMemberPresenceRequest, callback: (error: ServiceError | null, response: GetGuildMemberPresenceResponse) => void): ClientUnaryCall;
    getGuildMemberPresence(request: GetGuildMemberPresenceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetGuildMemberPresenceResponse) => void): ClientUnaryCall;
    getGuildMemberPresence(request: GetGuildMemberPresenceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetGuildMemberPresenceResponse) => void): ClientUnaryCall;
    /** Guild Member Roles */
    listGuildRoles(request: ListGuildRolesRequest, callback: (error: ServiceError | null, response: ListGuildRolesResponse) => void): ClientUnaryCall;
    listGuildRoles(request: ListGuildRolesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListGuildRolesResponse) => void): ClientUnaryCall;
    listGuildRoles(request: ListGuildRolesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListGuildRolesResponse) => void): ClientUnaryCall;
    getGuildRole(request: GetGuildRoleRequest, callback: (error: ServiceError | null, response: GetGuildRoleResponse) => void): ClientUnaryCall;
    getGuildRole(request: GetGuildRoleRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetGuildRoleResponse) => void): ClientUnaryCall;
    getGuildRole(request: GetGuildRoleRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetGuildRoleResponse) => void): ClientUnaryCall;
    /** Emojis */
    listGuildEmojis(request: ListGuildEmojisRequest, callback: (error: ServiceError | null, response: ListGuildEmojisResponse) => void): ClientUnaryCall;
    listGuildEmojis(request: ListGuildEmojisRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListGuildEmojisResponse) => void): ClientUnaryCall;
    listGuildEmojis(request: ListGuildEmojisRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListGuildEmojisResponse) => void): ClientUnaryCall;
    getGuildEmoji(request: GetGuildEmojiRequest, callback: (error: ServiceError | null, response: GetGuildEmojiResponse) => void): ClientUnaryCall;
    getGuildEmoji(request: GetGuildEmojiRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetGuildEmojiResponse) => void): ClientUnaryCall;
    getGuildEmoji(request: GetGuildEmojiRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetGuildEmojiResponse) => void): ClientUnaryCall;
    /** VoiceStates */
    getGuildMemberVoiceState(request: GetGuildMemberVoiceStateRequest, callback: (error: ServiceError | null, response: GetGuildMemberVoiceStateResponse) => void): ClientUnaryCall;
    getGuildMemberVoiceState(request: GetGuildMemberVoiceStateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetGuildMemberVoiceStateResponse) => void): ClientUnaryCall;
    getGuildMemberVoiceState(request: GetGuildMemberVoiceStateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetGuildMemberVoiceStateResponse) => void): ClientUnaryCall;
    listGuildChannelVoiceStates(request: ListGuildChannelVoiceStatesRequest, callback: (error: ServiceError | null, response: ListGuildChannelVoiceStatesResponse) => void): ClientUnaryCall;
    listGuildChannelVoiceStates(request: ListGuildChannelVoiceStatesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListGuildChannelVoiceStatesResponse) => void): ClientUnaryCall;
    listGuildChannelVoiceStates(request: ListGuildChannelVoiceStatesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListGuildChannelVoiceStatesResponse) => void): ClientUnaryCall;
    /** GetUser */
    getUser(request: GetUserRequest, callback: (error: ServiceError | null, response: GetUserResponse) => void): ClientUnaryCall;
    getUser(request: GetUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetUserResponse) => void): ClientUnaryCall;
    getUser(request: GetUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetUserResponse) => void): ClientUnaryCall;
}
export declare const GatewayCacheClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => GatewayCacheClient;
export interface DataLoaderOptions {
    cache?: boolean;
}
export interface DataLoaders {
    rpcDataLoaderOptions?: DataLoaderOptions;
    getDataLoader<T>(identifier: string, constructorFn: () => T): T;
}
