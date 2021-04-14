"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayClient = exports.GatewayService = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const gateway_1 = require("../../discord/v1/gateway");
exports.protobufPackage = "pylon.gateway.v1.service";
exports.GatewayService = {
    updateVoiceState: {
        path: "/pylon.gateway.v1.service.Gateway/UpdateVoiceState",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(gateway_1.UpdateVoiceStateRequest.encode(value).finish()),
        requestDeserialize: (value) => gateway_1.UpdateVoiceStateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(gateway_1.UpdateVoiceStateResponse.encode(value).finish()),
        responseDeserialize: (value) => gateway_1.UpdateVoiceStateResponse.decode(value),
    },
    updateStatus: {
        path: "/pylon.gateway.v1.service.Gateway/UpdateStatus",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(gateway_1.UpdateStatusRequest.encode(value).finish()),
        requestDeserialize: (value) => gateway_1.UpdateStatusRequest.decode(value),
        responseSerialize: (value) => Buffer.from(gateway_1.UpdateStatusResponse.encode(value).finish()),
        responseDeserialize: (value) => gateway_1.UpdateStatusResponse.decode(value),
    },
    findUser: {
        path: "/pylon.gateway.v1.service.Gateway/FindUser",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(gateway_1.FindUserRequest.encode(value).finish()),
        requestDeserialize: (value) => gateway_1.FindUserRequest.decode(value),
        responseSerialize: (value) => Buffer.from(gateway_1.FindUserResponse.encode(value).finish()),
        responseDeserialize: (value) => gateway_1.FindUserResponse.decode(value),
    },
    findUserMutualGuilds: {
        path: "/pylon.gateway.v1.service.Gateway/FindUserMutualGuilds",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(gateway_1.GetUserMutualGuildsRequest.encode(value).finish()),
        requestDeserialize: (value) => gateway_1.GetUserMutualGuildsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(gateway_1.GetUserMutualGuildsResponse.encode(value).finish()),
        responseDeserialize: (value) => gateway_1.GetUserMutualGuildsResponse.decode(value),
    },
    findEmoji: {
        path: "/pylon.gateway.v1.service.Gateway/FindEmoji",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(gateway_1.FindEmojiRequest.encode(value).finish()),
        requestDeserialize: (value) => gateway_1.FindEmojiRequest.decode(value),
        responseSerialize: (value) => Buffer.from(gateway_1.FindEmojiResponse.encode(value).finish()),
        responseDeserialize: (value) => gateway_1.FindEmojiResponse.decode(value),
    },
    getStats: {
        path: "/pylon.gateway.v1.service.Gateway/GetStats",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(gateway_1.GetStatsRequest.encode(value).finish()),
        requestDeserialize: (value) => gateway_1.GetStatsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(gateway_1.GetStatsResponse.encode(value).finish()),
        responseDeserialize: (value) => gateway_1.GetStatsResponse.decode(value),
    },
};
exports.GatewayClient = grpc_js_1.makeGenericClientConstructor(exports.GatewayService, "pylon.gateway.v1.service.Gateway");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
