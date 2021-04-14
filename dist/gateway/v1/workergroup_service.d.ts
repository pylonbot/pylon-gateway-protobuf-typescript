/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleBidiStreamingCall, Client, ClientDuplexStream, CallOptions, Metadata } from "@grpc/grpc-js";
import { WorkerStreamClientMessage, WorkerStreamServerMessage } from "../../gateway/v1/workergroup";
export declare const protobufPackage = "pylon.gateway.v1.service";
export declare const GatewayWorkerGroupService: {
    readonly workerStream: {
        readonly path: "/pylon.gateway.v1.service.GatewayWorkerGroup/WorkerStream";
        readonly requestStream: true;
        readonly responseStream: true;
        readonly requestSerialize: (value: WorkerStreamClientMessage) => Buffer;
        readonly requestDeserialize: (value: Buffer) => WorkerStreamClientMessage;
        readonly responseSerialize: (value: WorkerStreamServerMessage) => Buffer;
        readonly responseDeserialize: (value: Buffer) => WorkerStreamServerMessage;
    };
};
export interface GatewayWorkerGroupServer extends UntypedServiceImplementation {
    workerStream: handleBidiStreamingCall<WorkerStreamClientMessage, WorkerStreamServerMessage>;
}
export interface GatewayWorkerGroupClient extends Client {
    workerStream(): ClientDuplexStream<WorkerStreamClientMessage, WorkerStreamServerMessage>;
    workerStream(options: Partial<CallOptions>): ClientDuplexStream<WorkerStreamClientMessage, WorkerStreamServerMessage>;
    workerStream(metadata: Metadata, options?: Partial<CallOptions>): ClientDuplexStream<WorkerStreamClientMessage, WorkerStreamServerMessage>;
}
export declare const GatewayWorkerGroupClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => GatewayWorkerGroupClient;
export interface DataLoaderOptions {
    cache?: boolean;
}
export interface DataLoaders {
    rpcDataLoaderOptions?: DataLoaderOptions;
    getDataLoader<T>(identifier: string, constructorFn: () => T): T;
}
