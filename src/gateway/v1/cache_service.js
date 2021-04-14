/* eslint-disable */
import Long from "long";
import { makeGenericClientConstructor, } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { GetGuildRequest, GetGuildResponse, ListGuildChannelsRequest, ListGuildChannelsResponse, GetGuildChannelRequest, GetGuildChannelResponse, ListGuildMembersRequest, ListGuildMembersResponse, GetGuildMemberRequest, GetGuildMemberResponse, FindGuildMembersRequest, FindGuildMembersResponse, GetGuildMemberPresenceRequest, GetGuildMemberPresenceResponse, ListGuildRolesRequest, ListGuildRolesResponse, GetGuildRoleRequest, GetGuildRoleResponse, ListGuildEmojisRequest, ListGuildEmojisResponse, GetGuildEmojiRequest, GetGuildEmojiResponse, GetGuildMemberVoiceStateRequest, GetGuildMemberVoiceStateResponse, ListGuildChannelVoiceStatesRequest, ListGuildChannelVoiceStatesResponse, GetUserRequest, GetUserResponse, } from "../../discord/v1/cache";
export const protobufPackage = "pylon.gateway.v1.service";
export const GatewayCacheService = {
    /** Guilds */
    getGuild: {
        path: "/pylon.gateway.v1.service.GatewayCache/GetGuild",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetGuildRequest.encode(value).finish()),
        requestDeserialize: (value) => GetGuildRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetGuildResponse.encode(value).finish()),
        responseDeserialize: (value) => GetGuildResponse.decode(value),
    },
    /** Channels */
    listGuildChannels: {
        path: "/pylon.gateway.v1.service.GatewayCache/ListGuildChannels",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListGuildChannelsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListGuildChannelsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListGuildChannelsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListGuildChannelsResponse.decode(value),
    },
    getGuildChannel: {
        path: "/pylon.gateway.v1.service.GatewayCache/GetGuildChannel",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetGuildChannelRequest.encode(value).finish()),
        requestDeserialize: (value) => GetGuildChannelRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetGuildChannelResponse.encode(value).finish()),
        responseDeserialize: (value) => GetGuildChannelResponse.decode(value),
    },
    /** Guild Members */
    listGuildMembers: {
        path: "/pylon.gateway.v1.service.GatewayCache/ListGuildMembers",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListGuildMembersRequest.encode(value).finish()),
        requestDeserialize: (value) => ListGuildMembersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListGuildMembersResponse.encode(value).finish()),
        responseDeserialize: (value) => ListGuildMembersResponse.decode(value),
    },
    getGuildMember: {
        path: "/pylon.gateway.v1.service.GatewayCache/GetGuildMember",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetGuildMemberRequest.encode(value).finish()),
        requestDeserialize: (value) => GetGuildMemberRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetGuildMemberResponse.encode(value).finish()),
        responseDeserialize: (value) => GetGuildMemberResponse.decode(value),
    },
    findGuildMembers: {
        path: "/pylon.gateway.v1.service.GatewayCache/FindGuildMembers",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(FindGuildMembersRequest.encode(value).finish()),
        requestDeserialize: (value) => FindGuildMembersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(FindGuildMembersResponse.encode(value).finish()),
        responseDeserialize: (value) => FindGuildMembersResponse.decode(value),
    },
    /** Guild Member Presence */
    getGuildMemberPresence: {
        path: "/pylon.gateway.v1.service.GatewayCache/GetGuildMemberPresence",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetGuildMemberPresenceRequest.encode(value).finish()),
        requestDeserialize: (value) => GetGuildMemberPresenceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetGuildMemberPresenceResponse.encode(value).finish()),
        responseDeserialize: (value) => GetGuildMemberPresenceResponse.decode(value),
    },
    /** Guild Member Roles */
    listGuildRoles: {
        path: "/pylon.gateway.v1.service.GatewayCache/ListGuildRoles",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListGuildRolesRequest.encode(value).finish()),
        requestDeserialize: (value) => ListGuildRolesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListGuildRolesResponse.encode(value).finish()),
        responseDeserialize: (value) => ListGuildRolesResponse.decode(value),
    },
    getGuildRole: {
        path: "/pylon.gateway.v1.service.GatewayCache/GetGuildRole",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetGuildRoleRequest.encode(value).finish()),
        requestDeserialize: (value) => GetGuildRoleRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetGuildRoleResponse.encode(value).finish()),
        responseDeserialize: (value) => GetGuildRoleResponse.decode(value),
    },
    /** Emojis */
    listGuildEmojis: {
        path: "/pylon.gateway.v1.service.GatewayCache/ListGuildEmojis",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListGuildEmojisRequest.encode(value).finish()),
        requestDeserialize: (value) => ListGuildEmojisRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListGuildEmojisResponse.encode(value).finish()),
        responseDeserialize: (value) => ListGuildEmojisResponse.decode(value),
    },
    getGuildEmoji: {
        path: "/pylon.gateway.v1.service.GatewayCache/GetGuildEmoji",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetGuildEmojiRequest.encode(value).finish()),
        requestDeserialize: (value) => GetGuildEmojiRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetGuildEmojiResponse.encode(value).finish()),
        responseDeserialize: (value) => GetGuildEmojiResponse.decode(value),
    },
    /** VoiceStates */
    getGuildMemberVoiceState: {
        path: "/pylon.gateway.v1.service.GatewayCache/GetGuildMemberVoiceState",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetGuildMemberVoiceStateRequest.encode(value).finish()),
        requestDeserialize: (value) => GetGuildMemberVoiceStateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetGuildMemberVoiceStateResponse.encode(value).finish()),
        responseDeserialize: (value) => GetGuildMemberVoiceStateResponse.decode(value),
    },
    listGuildChannelVoiceStates: {
        path: "/pylon.gateway.v1.service.GatewayCache/ListGuildChannelVoiceStates",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListGuildChannelVoiceStatesRequest.encode(value).finish()),
        requestDeserialize: (value) => ListGuildChannelVoiceStatesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListGuildChannelVoiceStatesResponse.encode(value).finish()),
        responseDeserialize: (value) => ListGuildChannelVoiceStatesResponse.decode(value),
    },
    /** GetUser */
    getUser: {
        path: "/pylon.gateway.v1.service.GatewayCache/GetUser",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetUserRequest.encode(value).finish()),
        requestDeserialize: (value) => GetUserRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetUserResponse.encode(value).finish()),
        responseDeserialize: (value) => GetUserResponse.decode(value),
    },
};
export const GatewayCacheClient = makeGenericClientConstructor(GatewayCacheService, "pylon.gateway.v1.service.GatewayCache");
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
