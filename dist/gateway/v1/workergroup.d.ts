import _m0 from "protobufjs/minimal";
import { EventEnvelope } from "../../discord/v1/event";
export declare const protobufPackage = "pylon.gateway.v1.workergroup";
/** Client -> Server messages */
export interface WorkerStreamClientMessage {
    $type: "pylon.gateway.v1.workergroup.WorkerStreamClientMessage";
    payload?: {
        $case: "identifyRequest";
        identifyRequest: WorkerIdentifyRequest;
    } | {
        $case: "heartbeatResponse";
        heartbeatResponse: WorkerHeartbeatResponse;
    } | {
        $case: "drainRequest";
        drainRequest: WorkerDrainRequest;
    };
}
/** Server -> Client messages */
export interface WorkerStreamServerMessage {
    $type: "pylon.gateway.v1.workergroup.WorkerStreamServerMessage";
    payload?: {
        $case: "identifyResponse";
        identifyResponse: WorkerIdentifyResponse;
    } | {
        $case: "eventEnvelope";
        eventEnvelope: EventEnvelope;
    } | {
        $case: "heartbeatRequest";
        heartbeatRequest: WorkerHeartbeatRequest;
    } | {
        $case: "streamClosed";
        streamClosed: WorkerStreamClosed;
    };
}
/** Identification is the first message sent */
export interface WorkerIdentifyRequest {
    $type: "pylon.gateway.v1.workergroup.WorkerIdentifyRequest";
    authToken: string;
    consumerGroup: string;
    consumerId: string;
    routerTicket: string;
}
/** Router tickets are used for robust reconnections */
export interface WorkerIdentifyResponse {
    $type: "pylon.gateway.v1.workergroup.WorkerIdentifyResponse";
    routerTicket: string;
}
/** Heartbeats are used to keep check on clients and acknowledge received events */
export interface WorkerHeartbeatRequest {
    $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatRequest";
    sequence: string;
    nonce: string;
}
export interface WorkerHeartbeatResponse {
    $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatResponse";
    nonce: string;
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
export declare enum WorkerStreamClosed_CloseReason {
    UNKNOWN = 0,
    HEARTBEAT_TIMEOUT = 1,
    INVALID_IDENTITY = 2,
    DRAIN_COMPLETE = 3,
    REQUESTED_RECONNECT = 4
}
export declare function workerStreamClosed_CloseReasonFromJSON(object: any): WorkerStreamClosed_CloseReason;
export declare function workerStreamClosed_CloseReasonToJSON(object: WorkerStreamClosed_CloseReason): string;
export declare const WorkerStreamClientMessage: {
    $type: "pylon.gateway.v1.workergroup.WorkerStreamClientMessage";
    encode(message: WorkerStreamClientMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WorkerStreamClientMessage;
    fromJSON(object: any): WorkerStreamClientMessage;
    toJSON(message: WorkerStreamClientMessage): unknown;
    fromPartial(object: DeepPartial<WorkerStreamClientMessage>): WorkerStreamClientMessage;
};
export declare const WorkerStreamServerMessage: {
    $type: "pylon.gateway.v1.workergroup.WorkerStreamServerMessage";
    encode(message: WorkerStreamServerMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WorkerStreamServerMessage;
    fromJSON(object: any): WorkerStreamServerMessage;
    toJSON(message: WorkerStreamServerMessage): unknown;
    fromPartial(object: DeepPartial<WorkerStreamServerMessage>): WorkerStreamServerMessage;
};
export declare const WorkerIdentifyRequest: {
    $type: "pylon.gateway.v1.workergroup.WorkerIdentifyRequest";
    encode(message: WorkerIdentifyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WorkerIdentifyRequest;
    fromJSON(object: any): WorkerIdentifyRequest;
    toJSON(message: WorkerIdentifyRequest): unknown;
    fromPartial(object: DeepPartial<WorkerIdentifyRequest>): WorkerIdentifyRequest;
};
export declare const WorkerIdentifyResponse: {
    $type: "pylon.gateway.v1.workergroup.WorkerIdentifyResponse";
    encode(message: WorkerIdentifyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WorkerIdentifyResponse;
    fromJSON(object: any): WorkerIdentifyResponse;
    toJSON(message: WorkerIdentifyResponse): unknown;
    fromPartial(object: DeepPartial<WorkerIdentifyResponse>): WorkerIdentifyResponse;
};
export declare const WorkerHeartbeatRequest: {
    $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatRequest";
    encode(message: WorkerHeartbeatRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WorkerHeartbeatRequest;
    fromJSON(object: any): WorkerHeartbeatRequest;
    toJSON(message: WorkerHeartbeatRequest): unknown;
    fromPartial(object: DeepPartial<WorkerHeartbeatRequest>): WorkerHeartbeatRequest;
};
export declare const WorkerHeartbeatResponse: {
    $type: "pylon.gateway.v1.workergroup.WorkerHeartbeatResponse";
    encode(message: WorkerHeartbeatResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WorkerHeartbeatResponse;
    fromJSON(object: any): WorkerHeartbeatResponse;
    toJSON(message: WorkerHeartbeatResponse): unknown;
    fromPartial(object: DeepPartial<WorkerHeartbeatResponse>): WorkerHeartbeatResponse;
};
export declare const WorkerDrainRequest: {
    $type: "pylon.gateway.v1.workergroup.WorkerDrainRequest";
    encode(message: WorkerDrainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WorkerDrainRequest;
    fromJSON(object: any): WorkerDrainRequest;
    toJSON(message: WorkerDrainRequest): unknown;
    fromPartial(object: DeepPartial<WorkerDrainRequest>): WorkerDrainRequest;
};
export declare const WorkerStreamClosed: {
    $type: "pylon.gateway.v1.workergroup.WorkerStreamClosed";
    encode(message: WorkerStreamClosed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WorkerStreamClosed;
    fromJSON(object: any): WorkerStreamClosed;
    toJSON(message: WorkerStreamClosed): unknown;
    fromPartial(object: DeepPartial<WorkerStreamClosed>): WorkerStreamClosed;
};
export interface DataLoaderOptions {
    cache?: boolean;
}
export interface DataLoaders {
    rpcDataLoaderOptions?: DataLoaderOptions;
    getDataLoader<T>(identifier: string, constructorFn: () => T): T;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {
    $case: string;
} ? {
    [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]>;
} & {
    $case: T["$case"];
} : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
