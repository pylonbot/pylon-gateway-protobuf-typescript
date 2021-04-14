"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayWorkerGroupClient = exports.GatewayWorkerGroupService = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const workergroup_1 = require("../../gateway/v1/workergroup");
exports.protobufPackage = "pylon.gateway.v1.service";
exports.GatewayWorkerGroupService = {
    workerStream: {
        path: "/pylon.gateway.v1.service.GatewayWorkerGroup/WorkerStream",
        requestStream: true,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(workergroup_1.WorkerStreamClientMessage.encode(value).finish()),
        requestDeserialize: (value) => workergroup_1.WorkerStreamClientMessage.decode(value),
        responseSerialize: (value) => Buffer.from(workergroup_1.WorkerStreamServerMessage.encode(value).finish()),
        responseDeserialize: (value) => workergroup_1.WorkerStreamServerMessage.decode(value),
    },
};
exports.GatewayWorkerGroupClient = grpc_js_1.makeGenericClientConstructor(exports.GatewayWorkerGroupService, "pylon.gateway.v1.service.GatewayWorkerGroup");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
