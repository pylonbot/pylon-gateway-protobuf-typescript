import _m0 from "protobufjs/minimal";
import { EventEnvelope } from "../../discord/v1/event";
export declare const protobufPackage = "pylon.gateway.v1.workergroup";
export interface WorkerStreamClientMessage {
    $type: "pylon.gateway.v1.workergroup.WorkerStreamClientMessage";
    payload?: {
        $case: "identifyRequest";
        identifyRequest: WorkerIdentifyRequest;
    } | {
        $case: "heartbeatRequest";
        heartbeatRequest: WorkerHeartbeatRequest;
    } | {
        $case: "heartbeatResponse";
        heartbeatResponse: WorkerHeartbeatResponse;
    } | {
        $case: "drainRequest";
        drainRequest: WorkerDrainRequest;
    };
}
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
        $case: "heartbeatResponse";
        heartbeatResponse: WorkerHeartbeatResponse;
    } | {
        $case: "drainResponse";
        drainResponse: WorkerDrainResponse;
    };
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
export declare enum WorkerIdentifyResponse_IdentifyStatus {
    UNKNOWN = 0,
    OK = 1,
    ERROR = 2
}
export declare function workerIdentifyResponse_IdentifyStatusFromJSON(object: any): WorkerIdentifyResponse_IdentifyStatus;
export declare function workerIdentifyResponse_IdentifyStatusToJSON(object: WorkerIdentifyResponse_IdentifyStatus): string;
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
    encode(_: WorkerDrainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WorkerDrainRequest;
    fromJSON(_: any): WorkerDrainRequest;
    toJSON(_: WorkerDrainRequest): unknown;
    fromPartial(_: DeepPartial<WorkerDrainRequest>): WorkerDrainRequest;
};
export declare const WorkerDrainResponse: {
    $type: "pylon.gateway.v1.workergroup.WorkerDrainResponse";
    encode(_: WorkerDrainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WorkerDrainResponse;
    fromJSON(_: any): WorkerDrainResponse;
    toJSON(_: WorkerDrainResponse): unknown;
    fromPartial(_: DeepPartial<WorkerDrainResponse>): WorkerDrainResponse;
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
