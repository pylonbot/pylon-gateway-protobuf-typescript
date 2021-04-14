/* eslint-disable */
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleBidiStreamingCall,
  Client,
  ClientDuplexStream,
  CallOptions,
  Metadata,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import {
  WorkerStreamClientMessage,
  WorkerStreamServerMessage,
} from "../../gateway/v1/workergroup";

export const protobufPackage = "pylon.gateway.v1.service";

export const GatewayWorkerGroupService = {
  workerStream: {
    path: "/pylon.gateway.v1.service.GatewayWorkerGroup/WorkerStream",
    requestStream: true,
    responseStream: true,
    requestSerialize: (value: WorkerStreamClientMessage) =>
      Buffer.from(WorkerStreamClientMessage.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      WorkerStreamClientMessage.decode(value),
    responseSerialize: (value: WorkerStreamServerMessage) =>
      Buffer.from(WorkerStreamServerMessage.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      WorkerStreamServerMessage.decode(value),
  },
} as const;

export interface GatewayWorkerGroupServer extends UntypedServiceImplementation {
  workerStream: handleBidiStreamingCall<
    WorkerStreamClientMessage,
    WorkerStreamServerMessage
  >;
}

export interface GatewayWorkerGroupClient extends Client {
  workerStream(): ClientDuplexStream<
    WorkerStreamClientMessage,
    WorkerStreamServerMessage
  >;
  workerStream(
    options: Partial<CallOptions>
  ): ClientDuplexStream<WorkerStreamClientMessage, WorkerStreamServerMessage>;
  workerStream(
    metadata: Metadata,
    options?: Partial<CallOptions>
  ): ClientDuplexStream<WorkerStreamClientMessage, WorkerStreamServerMessage>;
}

export const GatewayWorkerGroupClient = (makeGenericClientConstructor(
  GatewayWorkerGroupService,
  "pylon.gateway.v1.service.GatewayWorkerGroup"
) as unknown) as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): GatewayWorkerGroupClient;
};

export interface DataLoaderOptions {
  cache?: boolean;
}

export interface DataLoaders {
  rpcDataLoaderOptions?: DataLoaderOptions;
  getDataLoader<T>(identifier: string, constructorFn: () => T): T;
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
