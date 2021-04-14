/* eslint-disable */
import { messageTypeRegistry } from "../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { EventEnvelope } from "../../discord/v1/event";

export const protobufPackage = "pylon.gateway.v1.workergroup";

export interface WorkerStreamClientMessage {
  $type: "pylon.gateway.v1.workergroup.WorkerStreamClientMessage";
  payload?:
    | { $case: "identifyRequest"; identifyRequest: WorkerIdentifyRequest }
    | { $case: "heartbeatRequest"; heartbeatRequest: WorkerHeartbeatRequest }
    | { $case: "heartbeatResponse"; heartbeatResponse: WorkerHeartbeatResponse }
    | { $case: "drainRequest"; drainRequest: WorkerDrainRequest };
}

export interface WorkerStreamServerMessage {
  $type: "pylon.gateway.v1.workergroup.WorkerStreamServerMessage";
  payload?:
    | { $case: "identifyResponse"; identifyResponse: WorkerIdentifyResponse }
    | { $case: "eventEnvelope"; eventEnvelope: EventEnvelope }
    | { $case: "heartbeatRequest"; heartbeatRequest: WorkerHeartbeatRequest }
    | { $case: "heartbeatResponse"; heartbeatResponse: WorkerHeartbeatResponse }
    | { $case: "drainResponse"; drainResponse: WorkerDrainResponse };
}

export interface WorkerIdentifyRequest {
  $type: "pylon.gateway.v1.workergroup.WorkerIdentifyRequest";
  authToken: string;
  consumerGroup: string;
  consumerId: string;
}

export interface WorkerIdentifyResponse {
  $type: "pylon.gateway.v1.workergroup.WorkerIdentifyResponse";
  status: WorkerIdentifyResponse_IdentifyStatus;
  consumerId: string;
}

export enum WorkerIdentifyResponse_IdentifyStatus {
  UNKNOWN = 0,
  OK = 1,
  ERROR = 2,
}

export function workerIdentifyResponse_IdentifyStatusFromJSON(
  object: any
): WorkerIdentifyResponse_IdentifyStatus {
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
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum WorkerIdentifyResponse_IdentifyStatus"
      );
  }
}

export function workerIdentifyResponse_IdentifyStatusToJSON(
  object: WorkerIdentifyResponse_IdentifyStatus
): string {
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

export interface WorkerHeartbeatRequest {
  $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatRequest";
  lastSequence: string;
  nonce: string;
}

export interface WorkerHeartbeatResponse {
  $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatResponse";
  nonce: string;
}

export interface WorkerDrainRequest {
  $type: "pylon.gateway.v1.workergroup.WorkerDrainRequest";
}

export interface WorkerDrainResponse {
  $type: "pylon.gateway.v1.workergroup.WorkerDrainResponse";
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
    if (message.payload?.$case === "heartbeatRequest") {
      WorkerHeartbeatRequest.encode(
        message.payload.heartbeatRequest,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.payload?.$case === "heartbeatResponse") {
      WorkerHeartbeatResponse.encode(
        message.payload.heartbeatResponse,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.payload?.$case === "drainRequest") {
      WorkerDrainRequest.encode(
        message.payload.drainRequest,
        writer.uint32(34).fork()
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
            $case: "heartbeatRequest",
            heartbeatRequest: WorkerHeartbeatRequest.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 3:
          message.payload = {
            $case: "heartbeatResponse",
            heartbeatResponse: WorkerHeartbeatResponse.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 4:
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
    if (
      object.heartbeatResponse !== undefined &&
      object.heartbeatResponse !== null
    ) {
      message.payload = {
        $case: "heartbeatResponse",
        heartbeatResponse: WorkerHeartbeatResponse.fromJSON(
          object.heartbeatResponse
        ),
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
    message.payload?.$case === "heartbeatRequest" &&
      (obj.heartbeatRequest = message.payload?.heartbeatRequest
        ? WorkerHeartbeatRequest.toJSON(message.payload?.heartbeatRequest)
        : undefined);
    message.payload?.$case === "heartbeatResponse" &&
      (obj.heartbeatResponse = message.payload?.heartbeatResponse
        ? WorkerHeartbeatResponse.toJSON(message.payload?.heartbeatResponse)
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
      object.payload?.$case === "heartbeatResponse" &&
      object.payload?.heartbeatResponse !== undefined &&
      object.payload?.heartbeatResponse !== null
    ) {
      message.payload = {
        $case: "heartbeatResponse",
        heartbeatResponse: WorkerHeartbeatResponse.fromPartial(
          object.payload.heartbeatResponse
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
    if (message.payload?.$case === "heartbeatResponse") {
      WorkerHeartbeatResponse.encode(
        message.payload.heartbeatResponse,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.payload?.$case === "drainResponse") {
      WorkerDrainResponse.encode(
        message.payload.drainResponse,
        writer.uint32(42).fork()
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
            $case: "heartbeatResponse",
            heartbeatResponse: WorkerHeartbeatResponse.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 5:
          message.payload = {
            $case: "drainResponse",
            drainResponse: WorkerDrainResponse.decode(reader, reader.uint32()),
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
    if (
      object.heartbeatResponse !== undefined &&
      object.heartbeatResponse !== null
    ) {
      message.payload = {
        $case: "heartbeatResponse",
        heartbeatResponse: WorkerHeartbeatResponse.fromJSON(
          object.heartbeatResponse
        ),
      };
    }
    if (object.drainResponse !== undefined && object.drainResponse !== null) {
      message.payload = {
        $case: "drainResponse",
        drainResponse: WorkerDrainResponse.fromJSON(object.drainResponse),
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
    message.payload?.$case === "heartbeatResponse" &&
      (obj.heartbeatResponse = message.payload?.heartbeatResponse
        ? WorkerHeartbeatResponse.toJSON(message.payload?.heartbeatResponse)
        : undefined);
    message.payload?.$case === "drainResponse" &&
      (obj.drainResponse = message.payload?.drainResponse
        ? WorkerDrainResponse.toJSON(message.payload?.drainResponse)
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
      object.payload?.$case === "heartbeatResponse" &&
      object.payload?.heartbeatResponse !== undefined &&
      object.payload?.heartbeatResponse !== null
    ) {
      message.payload = {
        $case: "heartbeatResponse",
        heartbeatResponse: WorkerHeartbeatResponse.fromPartial(
          object.payload.heartbeatResponse
        ),
      };
    }
    if (
      object.payload?.$case === "drainResponse" &&
      object.payload?.drainResponse !== undefined &&
      object.payload?.drainResponse !== null
    ) {
      message.payload = {
        $case: "drainResponse",
        drainResponse: WorkerDrainResponse.fromPartial(
          object.payload.drainResponse
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
    return message;
  },

  toJSON(message: WorkerIdentifyRequest): unknown {
    const obj: any = {};
    message.authToken !== undefined && (obj.authToken = message.authToken);
    message.consumerGroup !== undefined &&
      (obj.consumerGroup = message.consumerGroup);
    message.consumerId !== undefined && (obj.consumerId = message.consumerId);
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
    return message;
  },
};

messageTypeRegistry.set(WorkerIdentifyRequest.$type, WorkerIdentifyRequest);

const baseWorkerIdentifyResponse: object = {
  $type: "pylon.gateway.v1.workergroup.WorkerIdentifyResponse",
  status: 0,
  consumerId: "",
};

export const WorkerIdentifyResponse = {
  $type: "pylon.gateway.v1.workergroup.WorkerIdentifyResponse" as const,

  encode(
    message: WorkerIdentifyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.consumerId !== "") {
      writer.uint32(18).string(message.consumerId);
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
          message.status = reader.int32() as any;
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

  fromJSON(object: any): WorkerIdentifyResponse {
    const message = { ...baseWorkerIdentifyResponse } as WorkerIdentifyResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = workerIdentifyResponse_IdentifyStatusFromJSON(
        object.status
      );
    }
    if (object.consumerId !== undefined && object.consumerId !== null) {
      message.consumerId = String(object.consumerId);
    }
    return message;
  },

  toJSON(message: WorkerIdentifyResponse): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = workerIdentifyResponse_IdentifyStatusToJSON(
        message.status
      ));
    message.consumerId !== undefined && (obj.consumerId = message.consumerId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<WorkerIdentifyResponse>
  ): WorkerIdentifyResponse {
    const message = { ...baseWorkerIdentifyResponse } as WorkerIdentifyResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.consumerId !== undefined && object.consumerId !== null) {
      message.consumerId = object.consumerId;
    }
    return message;
  },
};

messageTypeRegistry.set(WorkerIdentifyResponse.$type, WorkerIdentifyResponse);

const baseWorkerHeartbeatRequest: object = {
  $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatRequest",
  lastSequence: "0",
  nonce: "",
};

export const WorkerHeartbeatRequest = {
  $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatRequest" as const,

  encode(
    message: WorkerHeartbeatRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lastSequence !== "0") {
      writer.uint32(8).uint64(message.lastSequence);
    }
    if (message.nonce !== "") {
      writer.uint32(18).string(message.nonce);
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
          message.lastSequence = longToString(reader.uint64() as Long);
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

  fromJSON(object: any): WorkerHeartbeatRequest {
    const message = { ...baseWorkerHeartbeatRequest } as WorkerHeartbeatRequest;
    if (object.lastSequence !== undefined && object.lastSequence !== null) {
      message.lastSequence = String(object.lastSequence);
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = String(object.nonce);
    }
    return message;
  },

  toJSON(message: WorkerHeartbeatRequest): unknown {
    const obj: any = {};
    message.lastSequence !== undefined &&
      (obj.lastSequence = message.lastSequence);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    return obj;
  },

  fromPartial(
    object: DeepPartial<WorkerHeartbeatRequest>
  ): WorkerHeartbeatRequest {
    const message = { ...baseWorkerHeartbeatRequest } as WorkerHeartbeatRequest;
    if (object.lastSequence !== undefined && object.lastSequence !== null) {
      message.lastSequence = object.lastSequence;
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    }
    return message;
  },
};

messageTypeRegistry.set(WorkerHeartbeatRequest.$type, WorkerHeartbeatRequest);

const baseWorkerHeartbeatResponse: object = {
  $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatResponse",
  nonce: "",
};

export const WorkerHeartbeatResponse = {
  $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatResponse" as const,

  encode(
    message: WorkerHeartbeatResponse,
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
  ): WorkerHeartbeatResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseWorkerHeartbeatResponse,
    } as WorkerHeartbeatResponse;
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

  fromJSON(object: any): WorkerHeartbeatResponse {
    const message = {
      ...baseWorkerHeartbeatResponse,
    } as WorkerHeartbeatResponse;
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = String(object.nonce);
    }
    return message;
  },

  toJSON(message: WorkerHeartbeatResponse): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = message.nonce);
    return obj;
  },

  fromPartial(
    object: DeepPartial<WorkerHeartbeatResponse>
  ): WorkerHeartbeatResponse {
    const message = {
      ...baseWorkerHeartbeatResponse,
    } as WorkerHeartbeatResponse;
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    }
    return message;
  },
};

messageTypeRegistry.set(WorkerHeartbeatResponse.$type, WorkerHeartbeatResponse);

const baseWorkerDrainRequest: object = {
  $type: "pylon.gateway.v1.workergroup.WorkerDrainRequest",
};

export const WorkerDrainRequest = {
  $type: "pylon.gateway.v1.workergroup.WorkerDrainRequest" as const,

  encode(
    _: WorkerDrainRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WorkerDrainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWorkerDrainRequest } as WorkerDrainRequest;
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

  fromJSON(_: any): WorkerDrainRequest {
    const message = { ...baseWorkerDrainRequest } as WorkerDrainRequest;
    return message;
  },

  toJSON(_: WorkerDrainRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<WorkerDrainRequest>): WorkerDrainRequest {
    const message = { ...baseWorkerDrainRequest } as WorkerDrainRequest;
    return message;
  },
};

messageTypeRegistry.set(WorkerDrainRequest.$type, WorkerDrainRequest);

const baseWorkerDrainResponse: object = {
  $type: "pylon.gateway.v1.workergroup.WorkerDrainResponse",
};

export const WorkerDrainResponse = {
  $type: "pylon.gateway.v1.workergroup.WorkerDrainResponse" as const,

  encode(
    _: WorkerDrainResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WorkerDrainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWorkerDrainResponse } as WorkerDrainResponse;
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

  fromJSON(_: any): WorkerDrainResponse {
    const message = { ...baseWorkerDrainResponse } as WorkerDrainResponse;
    return message;
  },

  toJSON(_: WorkerDrainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<WorkerDrainResponse>): WorkerDrainResponse {
    const message = { ...baseWorkerDrainResponse } as WorkerDrainResponse;
    return message;
  },
};

messageTypeRegistry.set(WorkerDrainResponse.$type, WorkerDrainResponse);

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
