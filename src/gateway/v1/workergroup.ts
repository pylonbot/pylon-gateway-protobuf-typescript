/* eslint-disable */
import { messageTypeRegistry } from "../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { EventEnvelope } from "../../discord/v1/event";

export const protobufPackage = "pylon.gateway.v1.workergroup";

/** Client -> Server messages */
export interface WorkerStreamClientMessage {
  $type: "pylon.gateway.v1.workergroup.WorkerStreamClientMessage";
  payload?:
    | { $case: "identifyRequest"; identifyRequest: WorkerIdentifyRequest }
    | { $case: "heartbeatAck"; heartbeatAck: WorkerHeartbeatAck }
    | { $case: "drainRequest"; drainRequest: WorkerDrainRequest };
}

/** Server -> Client messages */
export interface WorkerStreamServerMessage {
  $type: "pylon.gateway.v1.workergroup.WorkerStreamServerMessage";
  payload?:
    | { $case: "identifyResponse"; identifyResponse: WorkerIdentifyResponse }
    | { $case: "eventEnvelope"; eventEnvelope: EventEnvelope }
    | { $case: "heartbeatRequest"; heartbeatRequest: WorkerHeartbeatRequest }
    | { $case: "streamClosed"; streamClosed: WorkerStreamClosed };
}

/** Identification is the first message sent */
export interface WorkerIdentifyRequest {
  $type: "pylon.gateway.v1.workergroup.WorkerIdentifyRequest";
  authToken: string;
  consumerGroup: string;
  consumerId: string;
  routerTicket: string;
  lastSequence: string;
}

/** Router tickets are used for robust reconnections */
export interface WorkerIdentifyResponse {
  $type: "pylon.gateway.v1.workergroup.WorkerIdentifyResponse";
  routerTicket: string;
}

/** Heartbeats are used to keep check on clients and acknowledge received events */
export interface WorkerHeartbeatRequest {
  $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatRequest";
  nonce: string;
}

export interface WorkerHeartbeatAck {
  $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatAck";
  nonce: string;
  sequence: string;
}

/** Clients can request to drain their connections */
export interface WorkerDrainRequest {
  $type: "pylon.gateway.v1.workergroup.WorkerDrainRequest";
  sequence: string;
}

/** The server may close the connection with a reason */
export interface WorkerStreamClosed {
  $type: "pylon.gateway.v1.workergroup.WorkerStreamClosed";
  reason: WorkerStreamClosed_CloseReason;
}

export enum WorkerStreamClosed_CloseReason {
  UNKNOWN = 0,
  HEARTBEAT_TIMEOUT = 1,
  INVALID_IDENTITY = 2,
  DRAIN_COMPLETE = 3,
  REQUESTED_RECONNECT = 4,
}

export function workerStreamClosed_CloseReasonFromJSON(
  object: any
): WorkerStreamClosed_CloseReason {
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
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum WorkerStreamClosed_CloseReason"
      );
  }
}

export function workerStreamClosed_CloseReasonToJSON(
  object: WorkerStreamClosed_CloseReason
): string {
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

const baseWorkerStreamClientMessage: object = {
  $type: "pylon.gateway.v1.workergroup.WorkerStreamClientMessage",
};

export const WorkerStreamClientMessage = {
  $type: "pylon.gateway.v1.workergroup.WorkerStreamClientMessage" as const,

  encode(
    message: WorkerStreamClientMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payload?.$case === "identifyRequest") {
      WorkerIdentifyRequest.encode(
        message.payload.identifyRequest,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.payload?.$case === "heartbeatAck") {
      WorkerHeartbeatAck.encode(
        message.payload.heartbeatAck,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.payload?.$case === "drainRequest") {
      WorkerDrainRequest.encode(
        message.payload.drainRequest,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WorkerStreamClientMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseWorkerStreamClientMessage,
    } as WorkerStreamClientMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = {
            $case: "identifyRequest",
            identifyRequest: WorkerIdentifyRequest.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 2:
          message.payload = {
            $case: "heartbeatAck",
            heartbeatAck: WorkerHeartbeatAck.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.payload = {
            $case: "drainRequest",
            drainRequest: WorkerDrainRequest.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WorkerStreamClientMessage {
    const message = {
      ...baseWorkerStreamClientMessage,
    } as WorkerStreamClientMessage;
    if (
      object.identifyRequest !== undefined &&
      object.identifyRequest !== null
    ) {
      message.payload = {
        $case: "identifyRequest",
        identifyRequest: WorkerIdentifyRequest.fromJSON(object.identifyRequest),
      };
    }
    if (object.heartbeatAck !== undefined && object.heartbeatAck !== null) {
      message.payload = {
        $case: "heartbeatAck",
        heartbeatAck: WorkerHeartbeatAck.fromJSON(object.heartbeatAck),
      };
    }
    if (object.drainRequest !== undefined && object.drainRequest !== null) {
      message.payload = {
        $case: "drainRequest",
        drainRequest: WorkerDrainRequest.fromJSON(object.drainRequest),
      };
    }
    return message;
  },

  toJSON(message: WorkerStreamClientMessage): unknown {
    const obj: any = {};
    message.payload?.$case === "identifyRequest" &&
      (obj.identifyRequest = message.payload?.identifyRequest
        ? WorkerIdentifyRequest.toJSON(message.payload?.identifyRequest)
        : undefined);
    message.payload?.$case === "heartbeatAck" &&
      (obj.heartbeatAck = message.payload?.heartbeatAck
        ? WorkerHeartbeatAck.toJSON(message.payload?.heartbeatAck)
        : undefined);
    message.payload?.$case === "drainRequest" &&
      (obj.drainRequest = message.payload?.drainRequest
        ? WorkerDrainRequest.toJSON(message.payload?.drainRequest)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<WorkerStreamClientMessage>
  ): WorkerStreamClientMessage {
    const message = {
      ...baseWorkerStreamClientMessage,
    } as WorkerStreamClientMessage;
    if (
      object.payload?.$case === "identifyRequest" &&
      object.payload?.identifyRequest !== undefined &&
      object.payload?.identifyRequest !== null
    ) {
      message.payload = {
        $case: "identifyRequest",
        identifyRequest: WorkerIdentifyRequest.fromPartial(
          object.payload.identifyRequest
        ),
      };
    }
    if (
      object.payload?.$case === "heartbeatAck" &&
      object.payload?.heartbeatAck !== undefined &&
      object.payload?.heartbeatAck !== null
    ) {
      message.payload = {
        $case: "heartbeatAck",
        heartbeatAck: WorkerHeartbeatAck.fromPartial(
          object.payload.heartbeatAck
        ),
      };
    }
    if (
      object.payload?.$case === "drainRequest" &&
      object.payload?.drainRequest !== undefined &&
      object.payload?.drainRequest !== null
    ) {
      message.payload = {
        $case: "drainRequest",
        drainRequest: WorkerDrainRequest.fromPartial(
          object.payload.drainRequest
        ),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  WorkerStreamClientMessage.$type,
  WorkerStreamClientMessage
);

const baseWorkerStreamServerMessage: object = {
  $type: "pylon.gateway.v1.workergroup.WorkerStreamServerMessage",
};

export const WorkerStreamServerMessage = {
  $type: "pylon.gateway.v1.workergroup.WorkerStreamServerMessage" as const,

  encode(
    message: WorkerStreamServerMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payload?.$case === "identifyResponse") {
      WorkerIdentifyResponse.encode(
        message.payload.identifyResponse,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.payload?.$case === "eventEnvelope") {
      EventEnvelope.encode(
        message.payload.eventEnvelope,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.payload?.$case === "heartbeatRequest") {
      WorkerHeartbeatRequest.encode(
        message.payload.heartbeatRequest,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.payload?.$case === "streamClosed") {
      WorkerStreamClosed.encode(
        message.payload.streamClosed,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WorkerStreamServerMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseWorkerStreamServerMessage,
    } as WorkerStreamServerMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = {
            $case: "identifyResponse",
            identifyResponse: WorkerIdentifyResponse.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 2:
          message.payload = {
            $case: "eventEnvelope",
            eventEnvelope: EventEnvelope.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.payload = {
            $case: "heartbeatRequest",
            heartbeatRequest: WorkerHeartbeatRequest.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 4:
          message.payload = {
            $case: "streamClosed",
            streamClosed: WorkerStreamClosed.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WorkerStreamServerMessage {
    const message = {
      ...baseWorkerStreamServerMessage,
    } as WorkerStreamServerMessage;
    if (
      object.identifyResponse !== undefined &&
      object.identifyResponse !== null
    ) {
      message.payload = {
        $case: "identifyResponse",
        identifyResponse: WorkerIdentifyResponse.fromJSON(
          object.identifyResponse
        ),
      };
    }
    if (object.eventEnvelope !== undefined && object.eventEnvelope !== null) {
      message.payload = {
        $case: "eventEnvelope",
        eventEnvelope: EventEnvelope.fromJSON(object.eventEnvelope),
      };
    }
    if (
      object.heartbeatRequest !== undefined &&
      object.heartbeatRequest !== null
    ) {
      message.payload = {
        $case: "heartbeatRequest",
        heartbeatRequest: WorkerHeartbeatRequest.fromJSON(
          object.heartbeatRequest
        ),
      };
    }
    if (object.streamClosed !== undefined && object.streamClosed !== null) {
      message.payload = {
        $case: "streamClosed",
        streamClosed: WorkerStreamClosed.fromJSON(object.streamClosed),
      };
    }
    return message;
  },

  toJSON(message: WorkerStreamServerMessage): unknown {
    const obj: any = {};
    message.payload?.$case === "identifyResponse" &&
      (obj.identifyResponse = message.payload?.identifyResponse
        ? WorkerIdentifyResponse.toJSON(message.payload?.identifyResponse)
        : undefined);
    message.payload?.$case === "eventEnvelope" &&
      (obj.eventEnvelope = message.payload?.eventEnvelope
        ? EventEnvelope.toJSON(message.payload?.eventEnvelope)
        : undefined);
    message.payload?.$case === "heartbeatRequest" &&
      (obj.heartbeatRequest = message.payload?.heartbeatRequest
        ? WorkerHeartbeatRequest.toJSON(message.payload?.heartbeatRequest)
        : undefined);
    message.payload?.$case === "streamClosed" &&
      (obj.streamClosed = message.payload?.streamClosed
        ? WorkerStreamClosed.toJSON(message.payload?.streamClosed)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<WorkerStreamServerMessage>
  ): WorkerStreamServerMessage {
    const message = {
      ...baseWorkerStreamServerMessage,
    } as WorkerStreamServerMessage;
    if (
      object.payload?.$case === "identifyResponse" &&
      object.payload?.identifyResponse !== undefined &&
      object.payload?.identifyResponse !== null
    ) {
      message.payload = {
        $case: "identifyResponse",
        identifyResponse: WorkerIdentifyResponse.fromPartial(
          object.payload.identifyResponse
        ),
      };
    }
    if (
      object.payload?.$case === "eventEnvelope" &&
      object.payload?.eventEnvelope !== undefined &&
      object.payload?.eventEnvelope !== null
    ) {
      message.payload = {
        $case: "eventEnvelope",
        eventEnvelope: EventEnvelope.fromPartial(object.payload.eventEnvelope),
      };
    }
    if (
      object.payload?.$case === "heartbeatRequest" &&
      object.payload?.heartbeatRequest !== undefined &&
      object.payload?.heartbeatRequest !== null
    ) {
      message.payload = {
        $case: "heartbeatRequest",
        heartbeatRequest: WorkerHeartbeatRequest.fromPartial(
          object.payload.heartbeatRequest
        ),
      };
    }
    if (
      object.payload?.$case === "streamClosed" &&
      object.payload?.streamClosed !== undefined &&
      object.payload?.streamClosed !== null
    ) {
      message.payload = {
        $case: "streamClosed",
        streamClosed: WorkerStreamClosed.fromPartial(
          object.payload.streamClosed
        ),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(
  WorkerStreamServerMessage.$type,
  WorkerStreamServerMessage
);

const baseWorkerIdentifyRequest: object = {
  $type: "pylon.gateway.v1.workergroup.WorkerIdentifyRequest",
  authToken: "",
  consumerGroup: "",
  consumerId: "",
  routerTicket: "",
  lastSequence: "0",
};

export const WorkerIdentifyRequest = {
  $type: "pylon.gateway.v1.workergroup.WorkerIdentifyRequest" as const,

  encode(
    message: WorkerIdentifyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WorkerIdentifyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWorkerIdentifyRequest } as WorkerIdentifyRequest;
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
          message.lastSequence = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WorkerIdentifyRequest {
    const message = { ...baseWorkerIdentifyRequest } as WorkerIdentifyRequest;
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

  toJSON(message: WorkerIdentifyRequest): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<WorkerIdentifyRequest>
  ): WorkerIdentifyRequest {
    const message = { ...baseWorkerIdentifyRequest } as WorkerIdentifyRequest;
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

messageTypeRegistry.set(WorkerIdentifyRequest.$type, WorkerIdentifyRequest);

const baseWorkerIdentifyResponse: object = {
  $type: "pylon.gateway.v1.workergroup.WorkerIdentifyResponse",
  routerTicket: "",
};

export const WorkerIdentifyResponse = {
  $type: "pylon.gateway.v1.workergroup.WorkerIdentifyResponse" as const,

  encode(
    message: WorkerIdentifyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.routerTicket !== "") {
      writer.uint32(10).string(message.routerTicket);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WorkerIdentifyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWorkerIdentifyResponse } as WorkerIdentifyResponse;
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

  fromJSON(object: any): WorkerIdentifyResponse {
    const message = { ...baseWorkerIdentifyResponse } as WorkerIdentifyResponse;
    if (object.routerTicket !== undefined && object.routerTicket !== null) {
      message.routerTicket = String(object.routerTicket);
    }
    return message;
  },

  toJSON(message: WorkerIdentifyResponse): unknown {
    const obj: any = {};
    message.routerTicket !== undefined &&
      (obj.routerTicket = message.routerTicket);
    return obj;
  },

  fromPartial(
    object: DeepPartial<WorkerIdentifyResponse>
  ): WorkerIdentifyResponse {
    const message = { ...baseWorkerIdentifyResponse } as WorkerIdentifyResponse;
    if (object.routerTicket !== undefined && object.routerTicket !== null) {
      message.routerTicket = object.routerTicket;
    }
    return message;
  },
};

messageTypeRegistry.set(WorkerIdentifyResponse.$type, WorkerIdentifyResponse);

const baseWorkerHeartbeatRequest: object = {
  $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatRequest",
  nonce: "",
};

export const WorkerHeartbeatRequest = {
  $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatRequest" as const,

  encode(
    message: WorkerHeartbeatRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nonce !== "") {
      writer.uint32(10).string(message.nonce);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WorkerHeartbeatRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWorkerHeartbeatRequest } as WorkerHeartbeatRequest;
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

  fromJSON(object: any): WorkerHeartbeatRequest {
    const message = { ...baseWorkerHeartbeatRequest } as WorkerHeartbeatRequest;
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = String(object.nonce);
    }
    return message;
  },

  toJSON(message: WorkerHeartbeatRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = message.nonce);
    return obj;
  },

  fromPartial(
    object: DeepPartial<WorkerHeartbeatRequest>
  ): WorkerHeartbeatRequest {
    const message = { ...baseWorkerHeartbeatRequest } as WorkerHeartbeatRequest;
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    }
    return message;
  },
};

messageTypeRegistry.set(WorkerHeartbeatRequest.$type, WorkerHeartbeatRequest);

const baseWorkerHeartbeatAck: object = {
  $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatAck",
  nonce: "",
  sequence: "0",
};

export const WorkerHeartbeatAck = {
  $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatAck" as const,

  encode(
    message: WorkerHeartbeatAck,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nonce !== "") {
      writer.uint32(10).string(message.nonce);
    }
    if (message.sequence !== "0") {
      writer.uint32(16).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WorkerHeartbeatAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWorkerHeartbeatAck } as WorkerHeartbeatAck;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.string();
          break;
        case 2:
          message.sequence = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WorkerHeartbeatAck {
    const message = { ...baseWorkerHeartbeatAck } as WorkerHeartbeatAck;
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = String(object.nonce);
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = String(object.sequence);
    }
    return message;
  },

  toJSON(message: WorkerHeartbeatAck): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.sequence !== undefined && (obj.sequence = message.sequence);
    return obj;
  },

  fromPartial(object: DeepPartial<WorkerHeartbeatAck>): WorkerHeartbeatAck {
    const message = { ...baseWorkerHeartbeatAck } as WorkerHeartbeatAck;
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence;
    }
    return message;
  },
};

messageTypeRegistry.set(WorkerHeartbeatAck.$type, WorkerHeartbeatAck);

const baseWorkerDrainRequest: object = {
  $type: "pylon.gateway.v1.workergroup.WorkerDrainRequest",
  sequence: "0",
};

export const WorkerDrainRequest = {
  $type: "pylon.gateway.v1.workergroup.WorkerDrainRequest" as const,

  encode(
    message: WorkerDrainRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sequence !== "0") {
      writer.uint32(8).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WorkerDrainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWorkerDrainRequest } as WorkerDrainRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WorkerDrainRequest {
    const message = { ...baseWorkerDrainRequest } as WorkerDrainRequest;
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = String(object.sequence);
    }
    return message;
  },

  toJSON(message: WorkerDrainRequest): unknown {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = message.sequence);
    return obj;
  },

  fromPartial(object: DeepPartial<WorkerDrainRequest>): WorkerDrainRequest {
    const message = { ...baseWorkerDrainRequest } as WorkerDrainRequest;
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence;
    }
    return message;
  },
};

messageTypeRegistry.set(WorkerDrainRequest.$type, WorkerDrainRequest);

const baseWorkerStreamClosed: object = {
  $type: "pylon.gateway.v1.workergroup.WorkerStreamClosed",
  reason: 0,
};

export const WorkerStreamClosed = {
  $type: "pylon.gateway.v1.workergroup.WorkerStreamClosed" as const,

  encode(
    message: WorkerStreamClosed,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.reason !== 0) {
      writer.uint32(8).int32(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WorkerStreamClosed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWorkerStreamClosed } as WorkerStreamClosed;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reason = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WorkerStreamClosed {
    const message = { ...baseWorkerStreamClosed } as WorkerStreamClosed;
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = workerStreamClosed_CloseReasonFromJSON(object.reason);
    }
    return message;
  },

  toJSON(message: WorkerStreamClosed): unknown {
    const obj: any = {};
    message.reason !== undefined &&
      (obj.reason = workerStreamClosed_CloseReasonToJSON(message.reason));
    return obj;
  },

  fromPartial(object: DeepPartial<WorkerStreamClosed>): WorkerStreamClosed {
    const message = { ...baseWorkerStreamClosed } as WorkerStreamClosed;
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
};

messageTypeRegistry.set(WorkerStreamClosed.$type, WorkerStreamClosed);

export interface DataLoaderOptions {
  cache?: boolean;
}

export interface DataLoaders {
  rpcDataLoaderOptions?: DataLoaderOptions;
  getDataLoader<T>(identifier: string, constructorFn: () => T): T;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string }
  ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & {
      $case: T["$case"];
    }
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
