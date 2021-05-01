"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerStreamClosed = exports.WorkerDrainRequest = exports.WorkerHeartbeatAck = exports.WorkerHeartbeatRequest = exports.WorkerIdentifyResponse = exports.WorkerIdentifyRequest = exports.WorkerStreamServerMessage = exports.WorkerStreamClientMessage = exports.workerStreamClosed_CloseReasonToJSON = exports.workerStreamClosed_CloseReasonFromJSON = exports.WorkerStreamClosed_CloseReason = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const event_1 = require("../../discord/v1/event");
exports.protobufPackage = "pylon.gateway.v1.workergroup";
var WorkerStreamClosed_CloseReason;
(function (WorkerStreamClosed_CloseReason) {
    WorkerStreamClosed_CloseReason[WorkerStreamClosed_CloseReason["UNKNOWN"] = 0] = "UNKNOWN";
    WorkerStreamClosed_CloseReason[WorkerStreamClosed_CloseReason["HEARTBEAT_TIMEOUT"] = 1] = "HEARTBEAT_TIMEOUT";
    WorkerStreamClosed_CloseReason[WorkerStreamClosed_CloseReason["INVALID_IDENTITY"] = 2] = "INVALID_IDENTITY";
    WorkerStreamClosed_CloseReason[WorkerStreamClosed_CloseReason["DRAIN_COMPLETE"] = 3] = "DRAIN_COMPLETE";
    WorkerStreamClosed_CloseReason[WorkerStreamClosed_CloseReason["REQUESTED_RECONNECT"] = 4] = "REQUESTED_RECONNECT";
})(WorkerStreamClosed_CloseReason = exports.WorkerStreamClosed_CloseReason || (exports.WorkerStreamClosed_CloseReason = {}));
function workerStreamClosed_CloseReasonFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return WorkerStreamClosed_CloseReason.UNKNOWN;
        case 1:
        case "HEARTBEAT_TIMEOUT":
            return WorkerStreamClosed_CloseReason.HEARTBEAT_TIMEOUT;
        case 2:
        case "INVALID_IDENTITY":
            return WorkerStreamClosed_CloseReason.INVALID_IDENTITY;
        case 3:
        case "DRAIN_COMPLETE":
            return WorkerStreamClosed_CloseReason.DRAIN_COMPLETE;
        case 4:
        case "REQUESTED_RECONNECT":
            return WorkerStreamClosed_CloseReason.REQUESTED_RECONNECT;
        default:
            throw new globalThis.Error("Unrecognized enum value " +
                object +
                " for enum WorkerStreamClosed_CloseReason");
    }
}
exports.workerStreamClosed_CloseReasonFromJSON = workerStreamClosed_CloseReasonFromJSON;
function workerStreamClosed_CloseReasonToJSON(object) {
    switch (object) {
        case WorkerStreamClosed_CloseReason.UNKNOWN:
            return "UNKNOWN";
        case WorkerStreamClosed_CloseReason.HEARTBEAT_TIMEOUT:
            return "HEARTBEAT_TIMEOUT";
        case WorkerStreamClosed_CloseReason.INVALID_IDENTITY:
            return "INVALID_IDENTITY";
        case WorkerStreamClosed_CloseReason.DRAIN_COMPLETE:
            return "DRAIN_COMPLETE";
        case WorkerStreamClosed_CloseReason.REQUESTED_RECONNECT:
            return "REQUESTED_RECONNECT";
        default:
            return "UNKNOWN";
    }
}
exports.workerStreamClosed_CloseReasonToJSON = workerStreamClosed_CloseReasonToJSON;
const baseWorkerStreamClientMessage = {
    $type: "pylon.gateway.v1.workergroup.WorkerStreamClientMessage",
};
exports.WorkerStreamClientMessage = {
    $type: "pylon.gateway.v1.workergroup.WorkerStreamClientMessage",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.payload?.$case === "identifyRequest") {
            exports.WorkerIdentifyRequest.encode(message.payload.identifyRequest, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload?.$case === "heartbeatAck") {
            exports.WorkerHeartbeatAck.encode(message.payload.heartbeatAck, writer.uint32(18).fork()).ldelim();
        }
        if (message.payload?.$case === "drainRequest") {
            exports.WorkerDrainRequest.encode(message.payload.drainRequest, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseWorkerStreamClientMessage,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payload = {
                        $case: "identifyRequest",
                        identifyRequest: exports.WorkerIdentifyRequest.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.payload = {
                        $case: "heartbeatAck",
                        heartbeatAck: exports.WorkerHeartbeatAck.decode(reader, reader.uint32()),
                    };
                    break;
                case 3:
                    message.payload = {
                        $case: "drainRequest",
                        drainRequest: exports.WorkerDrainRequest.decode(reader, reader.uint32()),
                    };
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseWorkerStreamClientMessage,
        };
        if (object.identifyRequest !== undefined &&
            object.identifyRequest !== null) {
            message.payload = {
                $case: "identifyRequest",
                identifyRequest: exports.WorkerIdentifyRequest.fromJSON(object.identifyRequest),
            };
        }
        if (object.heartbeatAck !== undefined && object.heartbeatAck !== null) {
            message.payload = {
                $case: "heartbeatAck",
                heartbeatAck: exports.WorkerHeartbeatAck.fromJSON(object.heartbeatAck),
            };
        }
        if (object.drainRequest !== undefined && object.drainRequest !== null) {
            message.payload = {
                $case: "drainRequest",
                drainRequest: exports.WorkerDrainRequest.fromJSON(object.drainRequest),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.payload?.$case === "identifyRequest" &&
            (obj.identifyRequest = message.payload?.identifyRequest
                ? exports.WorkerIdentifyRequest.toJSON(message.payload?.identifyRequest)
                : undefined);
        message.payload?.$case === "heartbeatAck" &&
            (obj.heartbeatAck = message.payload?.heartbeatAck
                ? exports.WorkerHeartbeatAck.toJSON(message.payload?.heartbeatAck)
                : undefined);
        message.payload?.$case === "drainRequest" &&
            (obj.drainRequest = message.payload?.drainRequest
                ? exports.WorkerDrainRequest.toJSON(message.payload?.drainRequest)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseWorkerStreamClientMessage,
        };
        if (object.payload?.$case === "identifyRequest" &&
            object.payload?.identifyRequest !== undefined &&
            object.payload?.identifyRequest !== null) {
            message.payload = {
                $case: "identifyRequest",
                identifyRequest: exports.WorkerIdentifyRequest.fromPartial(object.payload.identifyRequest),
            };
        }
        if (object.payload?.$case === "heartbeatAck" &&
            object.payload?.heartbeatAck !== undefined &&
            object.payload?.heartbeatAck !== null) {
            message.payload = {
                $case: "heartbeatAck",
                heartbeatAck: exports.WorkerHeartbeatAck.fromPartial(object.payload.heartbeatAck),
            };
        }
        if (object.payload?.$case === "drainRequest" &&
            object.payload?.drainRequest !== undefined &&
            object.payload?.drainRequest !== null) {
            message.payload = {
                $case: "drainRequest",
                drainRequest: exports.WorkerDrainRequest.fromPartial(object.payload.drainRequest),
            };
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WorkerStreamClientMessage.$type, exports.WorkerStreamClientMessage);
const baseWorkerStreamServerMessage = {
    $type: "pylon.gateway.v1.workergroup.WorkerStreamServerMessage",
};
exports.WorkerStreamServerMessage = {
    $type: "pylon.gateway.v1.workergroup.WorkerStreamServerMessage",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.payload?.$case === "identifyResponse") {
            exports.WorkerIdentifyResponse.encode(message.payload.identifyResponse, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload?.$case === "eventEnvelope") {
            event_1.EventEnvelope.encode(message.payload.eventEnvelope, writer.uint32(18).fork()).ldelim();
        }
        if (message.payload?.$case === "heartbeatRequest") {
            exports.WorkerHeartbeatRequest.encode(message.payload.heartbeatRequest, writer.uint32(26).fork()).ldelim();
        }
        if (message.payload?.$case === "streamClosed") {
            exports.WorkerStreamClosed.encode(message.payload.streamClosed, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseWorkerStreamServerMessage,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payload = {
                        $case: "identifyResponse",
                        identifyResponse: exports.WorkerIdentifyResponse.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.payload = {
                        $case: "eventEnvelope",
                        eventEnvelope: event_1.EventEnvelope.decode(reader, reader.uint32()),
                    };
                    break;
                case 3:
                    message.payload = {
                        $case: "heartbeatRequest",
                        heartbeatRequest: exports.WorkerHeartbeatRequest.decode(reader, reader.uint32()),
                    };
                    break;
                case 4:
                    message.payload = {
                        $case: "streamClosed",
                        streamClosed: exports.WorkerStreamClosed.decode(reader, reader.uint32()),
                    };
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseWorkerStreamServerMessage,
        };
        if (object.identifyResponse !== undefined &&
            object.identifyResponse !== null) {
            message.payload = {
                $case: "identifyResponse",
                identifyResponse: exports.WorkerIdentifyResponse.fromJSON(object.identifyResponse),
            };
        }
        if (object.eventEnvelope !== undefined && object.eventEnvelope !== null) {
            message.payload = {
                $case: "eventEnvelope",
                eventEnvelope: event_1.EventEnvelope.fromJSON(object.eventEnvelope),
            };
        }
        if (object.heartbeatRequest !== undefined &&
            object.heartbeatRequest !== null) {
            message.payload = {
                $case: "heartbeatRequest",
                heartbeatRequest: exports.WorkerHeartbeatRequest.fromJSON(object.heartbeatRequest),
            };
        }
        if (object.streamClosed !== undefined && object.streamClosed !== null) {
            message.payload = {
                $case: "streamClosed",
                streamClosed: exports.WorkerStreamClosed.fromJSON(object.streamClosed),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.payload?.$case === "identifyResponse" &&
            (obj.identifyResponse = message.payload?.identifyResponse
                ? exports.WorkerIdentifyResponse.toJSON(message.payload?.identifyResponse)
                : undefined);
        message.payload?.$case === "eventEnvelope" &&
            (obj.eventEnvelope = message.payload?.eventEnvelope
                ? event_1.EventEnvelope.toJSON(message.payload?.eventEnvelope)
                : undefined);
        message.payload?.$case === "heartbeatRequest" &&
            (obj.heartbeatRequest = message.payload?.heartbeatRequest
                ? exports.WorkerHeartbeatRequest.toJSON(message.payload?.heartbeatRequest)
                : undefined);
        message.payload?.$case === "streamClosed" &&
            (obj.streamClosed = message.payload?.streamClosed
                ? exports.WorkerStreamClosed.toJSON(message.payload?.streamClosed)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseWorkerStreamServerMessage,
        };
        if (object.payload?.$case === "identifyResponse" &&
            object.payload?.identifyResponse !== undefined &&
            object.payload?.identifyResponse !== null) {
            message.payload = {
                $case: "identifyResponse",
                identifyResponse: exports.WorkerIdentifyResponse.fromPartial(object.payload.identifyResponse),
            };
        }
        if (object.payload?.$case === "eventEnvelope" &&
            object.payload?.eventEnvelope !== undefined &&
            object.payload?.eventEnvelope !== null) {
            message.payload = {
                $case: "eventEnvelope",
                eventEnvelope: event_1.EventEnvelope.fromPartial(object.payload.eventEnvelope),
            };
        }
        if (object.payload?.$case === "heartbeatRequest" &&
            object.payload?.heartbeatRequest !== undefined &&
            object.payload?.heartbeatRequest !== null) {
            message.payload = {
                $case: "heartbeatRequest",
                heartbeatRequest: exports.WorkerHeartbeatRequest.fromPartial(object.payload.heartbeatRequest),
            };
        }
        if (object.payload?.$case === "streamClosed" &&
            object.payload?.streamClosed !== undefined &&
            object.payload?.streamClosed !== null) {
            message.payload = {
                $case: "streamClosed",
                streamClosed: exports.WorkerStreamClosed.fromPartial(object.payload.streamClosed),
            };
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WorkerStreamServerMessage.$type, exports.WorkerStreamServerMessage);
const baseWorkerIdentifyRequest = {
    $type: "pylon.gateway.v1.workergroup.WorkerIdentifyRequest",
    authToken: "",
    consumerGroup: "",
    consumerId: "",
    routerTicket: "",
    lastSequence: "0",
};
exports.WorkerIdentifyRequest = {
    $type: "pylon.gateway.v1.workergroup.WorkerIdentifyRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.authToken !== "") {
            writer.uint32(10).string(message.authToken);
        }
        if (message.consumerGroup !== "") {
            writer.uint32(18).string(message.consumerGroup);
        }
        if (message.consumerId !== "") {
            writer.uint32(26).string(message.consumerId);
        }
        if (message.routerTicket !== "") {
            writer.uint32(34).string(message.routerTicket);
        }
        if (message.lastSequence !== "0") {
            writer.uint32(40).uint64(message.lastSequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWorkerIdentifyRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authToken = reader.string();
                    break;
                case 2:
                    message.consumerGroup = reader.string();
                    break;
                case 3:
                    message.consumerId = reader.string();
                    break;
                case 4:
                    message.routerTicket = reader.string();
                    break;
                case 5:
                    message.lastSequence = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseWorkerIdentifyRequest };
        if (object.authToken !== undefined && object.authToken !== null) {
            message.authToken = String(object.authToken);
        }
        if (object.consumerGroup !== undefined && object.consumerGroup !== null) {
            message.consumerGroup = String(object.consumerGroup);
        }
        if (object.consumerId !== undefined && object.consumerId !== null) {
            message.consumerId = String(object.consumerId);
        }
        if (object.routerTicket !== undefined && object.routerTicket !== null) {
            message.routerTicket = String(object.routerTicket);
        }
        if (object.lastSequence !== undefined && object.lastSequence !== null) {
            message.lastSequence = String(object.lastSequence);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.authToken !== undefined && (obj.authToken = message.authToken);
        message.consumerGroup !== undefined &&
            (obj.consumerGroup = message.consumerGroup);
        message.consumerId !== undefined && (obj.consumerId = message.consumerId);
        message.routerTicket !== undefined &&
            (obj.routerTicket = message.routerTicket);
        message.lastSequence !== undefined &&
            (obj.lastSequence = message.lastSequence);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseWorkerIdentifyRequest };
        if (object.authToken !== undefined && object.authToken !== null) {
            message.authToken = object.authToken;
        }
        if (object.consumerGroup !== undefined && object.consumerGroup !== null) {
            message.consumerGroup = object.consumerGroup;
        }
        if (object.consumerId !== undefined && object.consumerId !== null) {
            message.consumerId = object.consumerId;
        }
        if (object.routerTicket !== undefined && object.routerTicket !== null) {
            message.routerTicket = object.routerTicket;
        }
        if (object.lastSequence !== undefined && object.lastSequence !== null) {
            message.lastSequence = object.lastSequence;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WorkerIdentifyRequest.$type, exports.WorkerIdentifyRequest);
const baseWorkerIdentifyResponse = {
    $type: "pylon.gateway.v1.workergroup.WorkerIdentifyResponse",
    routerTicket: "",
};
exports.WorkerIdentifyResponse = {
    $type: "pylon.gateway.v1.workergroup.WorkerIdentifyResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.routerTicket !== "") {
            writer.uint32(10).string(message.routerTicket);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWorkerIdentifyResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routerTicket = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseWorkerIdentifyResponse };
        if (object.routerTicket !== undefined && object.routerTicket !== null) {
            message.routerTicket = String(object.routerTicket);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.routerTicket !== undefined &&
            (obj.routerTicket = message.routerTicket);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseWorkerIdentifyResponse };
        if (object.routerTicket !== undefined && object.routerTicket !== null) {
            message.routerTicket = object.routerTicket;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WorkerIdentifyResponse.$type, exports.WorkerIdentifyResponse);
const baseWorkerHeartbeatRequest = {
    $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatRequest",
    nonce: "",
};
exports.WorkerHeartbeatRequest = {
    $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nonce !== "") {
            writer.uint32(10).string(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWorkerHeartbeatRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseWorkerHeartbeatRequest };
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = String(object.nonce);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseWorkerHeartbeatRequest };
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = object.nonce;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WorkerHeartbeatRequest.$type, exports.WorkerHeartbeatRequest);
const baseWorkerHeartbeatAck = {
    $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatAck",
    nonce: "",
    sequence: "0",
};
exports.WorkerHeartbeatAck = {
    $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatAck",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nonce !== "") {
            writer.uint32(10).string(message.nonce);
        }
        if (message.sequence !== "0") {
            writer.uint32(16).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWorkerHeartbeatAck };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.string();
                    break;
                case 2:
                    message.sequence = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseWorkerHeartbeatAck };
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = String(object.nonce);
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = String(object.sequence);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.sequence !== undefined && (obj.sequence = message.sequence);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseWorkerHeartbeatAck };
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = object.nonce;
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = object.sequence;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WorkerHeartbeatAck.$type, exports.WorkerHeartbeatAck);
const baseWorkerDrainRequest = {
    $type: "pylon.gateway.v1.workergroup.WorkerDrainRequest",
    sequence: "0",
};
exports.WorkerDrainRequest = {
    $type: "pylon.gateway.v1.workergroup.WorkerDrainRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sequence !== "0") {
            writer.uint32(8).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWorkerDrainRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseWorkerDrainRequest };
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = String(object.sequence);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = message.sequence);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseWorkerDrainRequest };
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = object.sequence;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WorkerDrainRequest.$type, exports.WorkerDrainRequest);
const baseWorkerStreamClosed = {
    $type: "pylon.gateway.v1.workergroup.WorkerStreamClosed",
    reason: 0,
};
exports.WorkerStreamClosed = {
    $type: "pylon.gateway.v1.workergroup.WorkerStreamClosed",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.reason !== 0) {
            writer.uint32(8).int32(message.reason);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWorkerStreamClosed };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reason = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseWorkerStreamClosed };
        if (object.reason !== undefined && object.reason !== null) {
            message.reason = workerStreamClosed_CloseReasonFromJSON(object.reason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.reason !== undefined &&
            (obj.reason = workerStreamClosed_CloseReasonToJSON(message.reason));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseWorkerStreamClosed };
        if (object.reason !== undefined && object.reason !== null) {
            message.reason = object.reason;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WorkerStreamClosed.$type, exports.WorkerStreamClosed);
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToString(long) {
    return long.toString();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
