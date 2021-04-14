/* eslint-disable */
import Long from "long";
import { makeGenericClientConstructor, } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { UpdateVoiceStateRequest, UpdateVoiceStateResponse, UpdateStatusRequest, UpdateStatusResponse, FindUserRequest, FindUserResponse, GetUserMutualGuildsRequest, GetUserMutualGuildsResponse, FindEmojiRequest, FindEmojiResponse, GetStatsRequest, GetStatsResponse, } from "../../discord/v1/gateway";
export const protobufPackage = "pylon.gateway.v1.service";
export const GatewayService = {
    updateVoiceState: {
        path: "/pylon.gateway.v1.service.Gateway/UpdateVoiceState",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateVoiceStateRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateVoiceStateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(UpdateVoiceStateResponse.encode(value).finish()),
        responseDeserialize: (value) => UpdateVoiceStateResponse.decode(value),
    },
    updateStatus: {
        path: "/pylon.gateway.v1.service.Gateway/UpdateStatus",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateStatusRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateStatusRequest.decode(value),
        responseSerialize: (value) => Buffer.from(UpdateStatusResponse.encode(value).finish()),
        responseDeserialize: (value) => UpdateStatusResponse.decode(value),
    },
    findUser: {
        path: "/pylon.gateway.v1.service.Gateway/FindUser",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(FindUserRequest.encode(value).finish()),
        requestDeserialize: (value) => FindUserRequest.decode(value),
        responseSerialize: (value) => Buffer.from(FindUserResponse.encode(value).finish()),
        responseDeserialize: (value) => FindUserResponse.decode(value),
    },
    findUserMutualGuilds: {
        path: "/pylon.gateway.v1.service.Gateway/FindUserMutualGuilds",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetUserMutualGuildsRequest.encode(value).finish()),
        requestDeserialize: (value) => GetUserMutualGuildsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetUserMutualGuildsResponse.encode(value).finish()),
        responseDeserialize: (value) => GetUserMutualGuildsResponse.decode(value),
    },
    findEmoji: {
        path: "/pylon.gateway.v1.service.Gateway/FindEmoji",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(FindEmojiRequest.encode(value).finish()),
        requestDeserialize: (value) => FindEmojiRequest.decode(value),
        responseSerialize: (value) => Buffer.from(FindEmojiResponse.encode(value).finish()),
        responseDeserialize: (value) => FindEmojiResponse.decode(value),
    },
    getStats: {
        path: "/pylon.gateway.v1.service.Gateway/GetStats",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetStatsRequest.encode(value).finish()),
        requestDeserialize: (value) => GetStatsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetStatsResponse.encode(value).finish()),
        responseDeserialize: (value) => GetStatsResponse.decode(value),
    },
};
export const GatewayClient = makeGenericClientConstructor(GatewayService, "pylon.gateway.v1.service.Gateway");
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
