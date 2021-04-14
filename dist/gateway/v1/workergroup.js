"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerDrainResponse = exports.WorkerDrainRequest = exports.WorkerHeartbeatResponse = exports.WorkerHeartbeatRequest = exports.WorkerIdentifyResponse = exports.WorkerIdentifyRequest = exports.WorkerStreamServerMessage = exports.WorkerStreamClientMessage = exports.workerIdentifyResponse_IdentifyStatusToJSON = exports.workerIdentifyResponse_IdentifyStatusFromJSON = exports.WorkerIdentifyResponse_IdentifyStatus = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const event_1 = require("../../discord/v1/event");
exports.protobufPackage = "pylon.gateway.v1.workergroup";
var WorkerIdentifyResponse_IdentifyStatus;
(function (WorkerIdentifyResponse_IdentifyStatus) {
    WorkerIdentifyResponse_IdentifyStatus[WorkerIdentifyResponse_IdentifyStatus["UNKNOWN"] = 0] = "UNKNOWN";
    WorkerIdentifyResponse_IdentifyStatus[WorkerIdentifyResponse_IdentifyStatus["OK"] = 1] = "OK";
    WorkerIdentifyResponse_IdentifyStatus[WorkerIdentifyResponse_IdentifyStatus["ERROR"] = 2] = "ERROR";
})(WorkerIdentifyResponse_IdentifyStatus = exports.WorkerIdentifyResponse_IdentifyStatus || (exports.WorkerIdentifyResponse_IdentifyStatus = {}));
function workerIdentifyResponse_IdentifyStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return WorkerIdentifyResponse_IdentifyStatus.UNKNOWN;
        case 1:
        case "OK":
            return WorkerIdentifyResponse_IdentifyStatus.OK;
        case 2:
        case "ERROR":
            return WorkerIdentifyResponse_IdentifyStatus.ERROR;
        default:
            throw new globalThis.Error("Unrecognized enum value " +
                object +
                " for enum WorkerIdentifyResponse_IdentifyStatus");
    }
}
exports.workerIdentifyResponse_IdentifyStatusFromJSON = workerIdentifyResponse_IdentifyStatusFromJSON;
function workerIdentifyResponse_IdentifyStatusToJSON(object) {
    switch (object) {
        case WorkerIdentifyResponse_IdentifyStatus.UNKNOWN:
            return "UNKNOWN";
        case WorkerIdentifyResponse_IdentifyStatus.OK:
            return "OK";
        case WorkerIdentifyResponse_IdentifyStatus.ERROR:
            return "ERROR";
        default:
            return "UNKNOWN";
    }
}
exports.workerIdentifyResponse_IdentifyStatusToJSON = workerIdentifyResponse_IdentifyStatusToJSON;
const baseWorkerStreamClientMessage = {
    $type: "pylon.gateway.v1.workergroup.WorkerStreamClientMessage",
};
exports.WorkerStreamClientMessage = {
    $type: "pylon.gateway.v1.workergroup.WorkerStreamClientMessage",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.payload?.$case === "identifyRequest") {
            exports.WorkerIdentifyRequest.encode(message.payload.identifyRequest, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload?.$case === "heartbeatRequest") {
            exports.WorkerHeartbeatRequest.encode(message.payload.heartbeatRequest, writer.uint32(18).fork()).ldelim();
        }
        if (message.payload?.$case === "heartbeatResponse") {
            exports.WorkerHeartbeatResponse.encode(message.payload.heartbeatResponse, writer.uint32(26).fork()).ldelim();
        }
        if (message.payload?.$case === "drainRequest") {
            exports.WorkerDrainRequest.encode(message.payload.drainRequest, writer.uint32(34).fork()).ldelim();
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
                        $case: "heartbeatRequest",
                        heartbeatRequest: exports.WorkerHeartbeatRequest.decode(reader, reader.uint32()),
                    };
                    break;
                case 3:
                    message.payload = {
                        $case: "heartbeatResponse",
                        heartbeatResponse: exports.WorkerHeartbeatResponse.decode(reader, reader.uint32()),
                    };
                    break;
                case 4:
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
        if (object.heartbeatRequest !== undefined &&
            object.heartbeatRequest !== null) {
            message.payload = {
                $case: "heartbeatRequest",
                heartbeatRequest: exports.WorkerHeartbeatRequest.fromJSON(object.heartbeatRequest),
            };
        }
        if (object.heartbeatResponse !== undefined &&
            object.heartbeatResponse !== null) {
            message.payload = {
                $case: "heartbeatResponse",
                heartbeatResponse: exports.WorkerHeartbeatResponse.fromJSON(object.heartbeatResponse),
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
        message.payload?.$case === "heartbeatRequest" &&
            (obj.heartbeatRequest = message.payload?.heartbeatRequest
                ? exports.WorkerHeartbeatRequest.toJSON(message.payload?.heartbeatRequest)
                : undefined);
        message.payload?.$case === "heartbeatResponse" &&
            (obj.heartbeatResponse = message.payload?.heartbeatResponse
                ? exports.WorkerHeartbeatResponse.toJSON(message.payload?.heartbeatResponse)
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
        if (object.payload?.$case === "heartbeatRequest" &&
            object.payload?.heartbeatRequest !== undefined &&
            object.payload?.heartbeatRequest !== null) {
            message.payload = {
                $case: "heartbeatRequest",
                heartbeatRequest: exports.WorkerHeartbeatRequest.fromPartial(object.payload.heartbeatRequest),
            };
        }
        if (object.payload?.$case === "heartbeatResponse" &&
            object.payload?.heartbeatResponse !== undefined &&
            object.payload?.heartbeatResponse !== null) {
            message.payload = {
                $case: "heartbeatResponse",
                heartbeatResponse: exports.WorkerHeartbeatResponse.fromPartial(object.payload.heartbeatResponse),
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
        if (message.payload?.$case === "heartbeatResponse") {
            exports.WorkerHeartbeatResponse.encode(message.payload.heartbeatResponse, writer.uint32(34).fork()).ldelim();
        }
        if (message.payload?.$case === "drainResponse") {
            exports.WorkerDrainResponse.encode(message.payload.drainResponse, writer.uint32(42).fork()).ldelim();
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
                        $case: "heartbeatResponse",
                        heartbeatResponse: exports.WorkerHeartbeatResponse.decode(reader, reader.uint32()),
                    };
                    break;
                case 5:
                    message.payload = {
                        $case: "drainResponse",
                        drainResponse: exports.WorkerDrainResponse.decode(reader, reader.uint32()),
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
        if (object.heartbeatResponse !== undefined &&
            object.heartbeatResponse !== null) {
            message.payload = {
                $case: "heartbeatResponse",
                heartbeatResponse: exports.WorkerHeartbeatResponse.fromJSON(object.heartbeatResponse),
            };
        }
        if (object.drainResponse !== undefined && object.drainResponse !== null) {
            message.payload = {
                $case: "drainResponse",
                drainResponse: exports.WorkerDrainResponse.fromJSON(object.drainResponse),
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
        message.payload?.$case === "heartbeatResponse" &&
            (obj.heartbeatResponse = message.payload?.heartbeatResponse
                ? exports.WorkerHeartbeatResponse.toJSON(message.payload?.heartbeatResponse)
                : undefined);
        message.payload?.$case === "drainResponse" &&
            (obj.drainResponse = message.payload?.drainResponse
                ? exports.WorkerDrainResponse.toJSON(message.payload?.drainResponse)
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
        if (object.payload?.$case === "heartbeatResponse" &&
            object.payload?.heartbeatResponse !== undefined &&
            object.payload?.heartbeatResponse !== null) {
            message.payload = {
                $case: "heartbeatResponse",
                heartbeatResponse: exports.WorkerHeartbeatResponse.fromPartial(object.payload.heartbeatResponse),
            };
        }
        if (object.payload?.$case === "drainResponse" &&
            object.payload?.drainResponse !== undefined &&
            object.payload?.drainResponse !== null) {
            message.payload = {
                $case: "drainResponse",
                drainResponse: exports.WorkerDrainResponse.fromPartial(object.payload.drainResponse),
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.authToken !== undefined && (obj.authToken = message.authToken);
        message.consumerGroup !== undefined &&
            (obj.consumerGroup = message.consumerGroup);
        message.consumerId !== undefined && (obj.consumerId = message.consumerId);
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
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WorkerIdentifyRequest.$type, exports.WorkerIdentifyRequest);
const baseWorkerIdentifyResponse = {
    $type: "pylon.gateway.v1.workergroup.WorkerIdentifyResponse",
    status: 0,
    consumerId: "",
};
exports.WorkerIdentifyResponse = {
    $type: "pylon.gateway.v1.workergroup.WorkerIdentifyResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.consumerId !== "") {
            writer.uint32(18).string(message.consumerId);
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
                    message.status = reader.int32();
                    break;
                case 2:
                    message.consumerId = reader.string();
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
        if (object.status !== undefined && object.status !== null) {
            message.status = workerIdentifyResponse_IdentifyStatusFromJSON(object.status);
        }
        if (object.consumerId !== undefined && object.consumerId !== null) {
            message.consumerId = String(object.consumerId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined &&
            (obj.status = workerIdentifyResponse_IdentifyStatusToJSON(message.status));
        message.consumerId !== undefined && (obj.consumerId = message.consumerId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseWorkerIdentifyResponse };
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        if (object.consumerId !== undefined && object.consumerId !== null) {
            message.consumerId = object.consumerId;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WorkerIdentifyResponse.$type, exports.WorkerIdentifyResponse);
const baseWorkerHeartbeatRequest = {
    $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatRequest",
    lastSequence: "0",
    nonce: "",
};
exports.WorkerHeartbeatRequest = {
    $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lastSequence !== "0") {
            writer.uint32(8).uint64(message.lastSequence);
        }
        if (message.nonce !== "") {
            writer.uint32(18).string(message.nonce);
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
                    message.lastSequence = longToString(reader.uint64());
                    break;
                case 2:
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
        if (object.lastSequence !== undefined && object.lastSequence !== null) {
            message.lastSequence = String(object.lastSequence);
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = String(object.nonce);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.lastSequence !== undefined &&
            (obj.lastSequence = message.lastSequence);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseWorkerHeartbeatRequest };
        if (object.lastSequence !== undefined && object.lastSequence !== null) {
            message.lastSequence = object.lastSequence;
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = object.nonce;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WorkerHeartbeatRequest.$type, exports.WorkerHeartbeatRequest);
const baseWorkerHeartbeatResponse = {
    $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatResponse",
    nonce: "",
};
exports.WorkerHeartbeatResponse = {
    $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nonce !== "") {
            writer.uint32(10).string(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseWorkerHeartbeatResponse,
        };
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
        const message = {
            ...baseWorkerHeartbeatResponse,
        };
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
        const message = {
            ...baseWorkerHeartbeatResponse,
        };
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = object.nonce;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WorkerHeartbeatResponse.$type, exports.WorkerHeartbeatResponse);
const baseWorkerDrainRequest = {
    $type: "pylon.gateway.v1.workergroup.WorkerDrainRequest",
};
exports.WorkerDrainRequest = {
    $type: "pylon.gateway.v1.workergroup.WorkerDrainRequest",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWorkerDrainRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseWorkerDrainRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseWorkerDrainRequest };
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WorkerDrainRequest.$type, exports.WorkerDrainRequest);
const baseWorkerDrainResponse = {
    $type: "pylon.gateway.v1.workergroup.WorkerDrainResponse",
};
exports.WorkerDrainResponse = {
    $type: "pylon.gateway.v1.workergroup.WorkerDrainResponse",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWorkerDrainResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseWorkerDrainResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseWorkerDrainResponse };
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.WorkerDrainResponse.$type, exports.WorkerDrainResponse);
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
