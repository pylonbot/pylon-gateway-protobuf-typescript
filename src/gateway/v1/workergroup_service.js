/* eslint-disable */
import Long from "long";
import { makeGenericClientConstructor, } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { WorkerStreamClientMessage, WorkerStreamServerMessage, } from "../../gateway/v1/workergroup";
export const protobufPackage = "pylon.gateway.v1.service";
export const GatewayWorkerGroupService = {
    workerStream: {
        path: "/pylon.gateway.v1.service.GatewayWorkerGroup/WorkerStream",
        requestStream: true,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(WorkerStreamClientMessage.encode(value).finish()),
        requestDeserialize: (value) => WorkerStreamClientMessage.decode(value),
        responseSerialize: (value) => Buffer.from(WorkerStreamServerMessage.encode(value).finish()),
        responseDeserialize: (value) => WorkerStreamServerMessage.decode(value),
    },
};
export const GatewayWorkerGroupClient = makeGenericClientConstructor(GatewayWorkerGroupService, "pylon.gateway.v1.service.GatewayWorkerGroup");
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
