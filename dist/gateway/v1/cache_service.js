"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayCacheClient = exports.GatewayCacheService = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const cache_1 = require("../../discord/v1/cache");
exports.protobufPackage = "pylon.gateway.v1.service";
exports.GatewayCacheService = {
    /** Guilds */
    getGuild: {
        path: "/pylon.gateway.v1.service.GatewayCache/GetGuild",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(cache_1.GetGuildRequest.encode(value).finish()),
        requestDeserialize: (value) => cache_1.GetGuildRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cache_1.GetGuildResponse.encode(value).finish()),
        responseDeserialize: (value) => cache_1.GetGuildResponse.decode(value),
    },
    /** Channels */
    listGuildChannels: {
        path: "/pylon.gateway.v1.service.GatewayCache/ListGuildChannels",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(cache_1.ListGuildChannelsRequest.encode(value).finish()),
        requestDeserialize: (value) => cache_1.ListGuildChannelsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cache_1.ListGuildChannelsResponse.encode(value).finish()),
        responseDeserialize: (value) => cache_1.ListGuildChannelsResponse.decode(value),
    },
    getGuildChannel: {
        path: "/pylon.gateway.v1.service.GatewayCache/GetGuildChannel",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(cache_1.GetGuildChannelRequest.encode(value).finish()),
        requestDeserialize: (value) => cache_1.GetGuildChannelRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cache_1.GetGuildChannelResponse.encode(value).finish()),
        responseDeserialize: (value) => cache_1.GetGuildChannelResponse.decode(value),
    },
    /** Guild Members */
    listGuildMembers: {
        path: "/pylon.gateway.v1.service.GatewayCache/ListGuildMembers",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(cache_1.ListGuildMembersRequest.encode(value).finish()),
        requestDeserialize: (value) => cache_1.ListGuildMembersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cache_1.ListGuildMembersResponse.encode(value).finish()),
        responseDeserialize: (value) => cache_1.ListGuildMembersResponse.decode(value),
    },
    getGuildMember: {
        path: "/pylon.gateway.v1.service.GatewayCache/GetGuildMember",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(cache_1.GetGuildMemberRequest.encode(value).finish()),
        requestDeserialize: (value) => cache_1.GetGuildMemberRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cache_1.GetGuildMemberResponse.encode(value).finish()),
        responseDeserialize: (value) => cache_1.GetGuildMemberResponse.decode(value),
    },
    findGuildMembers: {
        path: "/pylon.gateway.v1.service.GatewayCache/FindGuildMembers",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(cache_1.FindGuildMembersRequest.encode(value).finish()),
        requestDeserialize: (value) => cache_1.FindGuildMembersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cache_1.FindGuildMembersResponse.encode(value).finish()),
        responseDeserialize: (value) => cache_1.FindGuildMembersResponse.decode(value),
    },
    /** Guild Member Presence */
    getGuildMemberPresence: {
        path: "/pylon.gateway.v1.service.GatewayCache/GetGuildMemberPresence",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(cache_1.GetGuildMemberPresenceRequest.encode(value).finish()),
        requestDeserialize: (value) => cache_1.GetGuildMemberPresenceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cache_1.GetGuildMemberPresenceResponse.encode(value).finish()),
        responseDeserialize: (value) => cache_1.GetGuildMemberPresenceResponse.decode(value),
    },
    /** Guild Member Roles */
    listGuildRoles: {
        path: "/pylon.gateway.v1.service.GatewayCache/ListGuildRoles",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(cache_1.ListGuildRolesRequest.encode(value).finish()),
        requestDeserialize: (value) => cache_1.ListGuildRolesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cache_1.ListGuildRolesResponse.encode(value).finish()),
        responseDeserialize: (value) => cache_1.ListGuildRolesResponse.decode(value),
    },
    getGuildRole: {
        path: "/pylon.gateway.v1.service.GatewayCache/GetGuildRole",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(cache_1.GetGuildRoleRequest.encode(value).finish()),
        requestDeserialize: (value) => cache_1.GetGuildRoleRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cache_1.GetGuildRoleResponse.encode(value).finish()),
        responseDeserialize: (value) => cache_1.GetGuildRoleResponse.decode(value),
    },
    /** Emojis */
    listGuildEmojis: {
        path: "/pylon.gateway.v1.service.GatewayCache/ListGuildEmojis",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(cache_1.ListGuildEmojisRequest.encode(value).finish()),
        requestDeserialize: (value) => cache_1.ListGuildEmojisRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cache_1.ListGuildEmojisResponse.encode(value).finish()),
        responseDeserialize: (value) => cache_1.ListGuildEmojisResponse.decode(value),
    },
    getGuildEmoji: {
        path: "/pylon.gateway.v1.service.GatewayCache/GetGuildEmoji",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(cache_1.GetGuildEmojiRequest.encode(value).finish()),
        requestDeserialize: (value) => cache_1.GetGuildEmojiRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cache_1.GetGuildEmojiResponse.encode(value).finish()),
        responseDeserialize: (value) => cache_1.GetGuildEmojiResponse.decode(value),
    },
    /** VoiceStates */
    getGuildMemberVoiceState: {
        path: "/pylon.gateway.v1.service.GatewayCache/GetGuildMemberVoiceState",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(cache_1.GetGuildMemberVoiceStateRequest.encode(value).finish()),
        requestDeserialize: (value) => cache_1.GetGuildMemberVoiceStateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cache_1.GetGuildMemberVoiceStateResponse.encode(value).finish()),
        responseDeserialize: (value) => cache_1.GetGuildMemberVoiceStateResponse.decode(value),
    },
    listGuildChannelVoiceStates: {
        path: "/pylon.gateway.v1.service.GatewayCache/ListGuildChannelVoiceStates",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(cache_1.ListGuildChannelVoiceStatesRequest.encode(value).finish()),
        requestDeserialize: (value) => cache_1.ListGuildChannelVoiceStatesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cache_1.ListGuildChannelVoiceStatesResponse.encode(value).finish()),
        responseDeserialize: (value) => cache_1.ListGuildChannelVoiceStatesResponse.decode(value),
    },
    /** GetUser */
    getUser: {
        path: "/pylon.gateway.v1.service.GatewayCache/GetUser",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(cache_1.GetUserRequest.encode(value).finish()),
        requestDeserialize: (value) => cache_1.GetUserRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cache_1.GetUserResponse.encode(value).finish()),
        responseDeserialize: (value) => cache_1.GetUserResponse.decode(value),
    },
};
exports.GatewayCacheClient = grpc_js_1.makeGenericClientConstructor(exports.GatewayCacheService, "pylon.gateway.v1.service.GatewayCache");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
