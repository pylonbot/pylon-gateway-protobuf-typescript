/* eslint-disable */
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import {
  UpdateVoiceStateRequest,
  UpdateVoiceStateResponse,
  UpdateStatusRequest,
  UpdateStatusResponse,
  FindUserRequest,
  FindUserResponse,
  GetUserMutualGuildsRequest,
  GetUserMutualGuildsResponse,
  FindEmojiRequest,
  FindEmojiResponse,
  GetStatsRequest,
  GetStatsResponse,
} from "../../discord/v1/gateway";

export const protobufPackage = "pylon.gateway.v1.service";

export const GatewayService = {
  updateVoiceState: {
    path: "/pylon.gateway.v1.service.Gateway/UpdateVoiceState",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateVoiceStateRequest) =>
      Buffer.from(UpdateVoiceStateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      UpdateVoiceStateRequest.decode(value),
    responseSerialize: (value: UpdateVoiceStateResponse) =>
      Buffer.from(UpdateVoiceStateResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      UpdateVoiceStateResponse.decode(value),
  },
  updateStatus: {
    path: "/pylon.gateway.v1.service.Gateway/UpdateStatus",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateStatusRequest) =>
      Buffer.from(UpdateStatusRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateStatusRequest.decode(value),
    responseSerialize: (value: UpdateStatusResponse) =>
      Buffer.from(UpdateStatusResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateStatusResponse.decode(value),
  },
  findUser: {
    path: "/pylon.gateway.v1.service.Gateway/FindUser",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: FindUserRequest) =>
      Buffer.from(FindUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => FindUserRequest.decode(value),
    responseSerialize: (value: FindUserResponse) =>
      Buffer.from(FindUserResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => FindUserResponse.decode(value),
  },
  findUserMutualGuilds: {
    path: "/pylon.gateway.v1.service.Gateway/FindUserMutualGuilds",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetUserMutualGuildsRequest) =>
      Buffer.from(GetUserMutualGuildsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetUserMutualGuildsRequest.decode(value),
    responseSerialize: (value: GetUserMutualGuildsResponse) =>
      Buffer.from(GetUserMutualGuildsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      GetUserMutualGuildsResponse.decode(value),
  },
  findEmoji: {
    path: "/pylon.gateway.v1.service.Gateway/FindEmoji",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: FindEmojiRequest) =>
      Buffer.from(FindEmojiRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => FindEmojiRequest.decode(value),
    responseSerialize: (value: FindEmojiResponse) =>
      Buffer.from(FindEmojiResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => FindEmojiResponse.decode(value),
  },
  getStats: {
    path: "/pylon.gateway.v1.service.Gateway/GetStats",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetStatsRequest) =>
      Buffer.from(GetStatsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetStatsRequest.decode(value),
    responseSerialize: (value: GetStatsResponse) =>
      Buffer.from(GetStatsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetStatsResponse.decode(value),
  },
} as const;

export interface GatewayServer extends UntypedServiceImplementation {
  updateVoiceState: handleUnaryCall<
    UpdateVoiceStateRequest,
    UpdateVoiceStateResponse
  >;
  updateStatus: handleUnaryCall<UpdateStatusRequest, UpdateStatusResponse>;
  findUser: handleUnaryCall<FindUserRequest, FindUserResponse>;
  findUserMutualGuilds: handleUnaryCall<
    GetUserMutualGuildsRequest,
    GetUserMutualGuildsResponse
  >;
  findEmoji: handleUnaryCall<FindEmojiRequest, FindEmojiResponse>;
  getStats: handleUnaryCall<GetStatsRequest, GetStatsResponse>;
}

export interface GatewayClient extends Client {
  updateVoiceState(
    request: UpdateVoiceStateRequest,
    callback: (
      error: ServiceError | null,
      response: UpdateVoiceStateResponse
    ) => void
  ): ClientUnaryCall;
  updateVoiceState(
    request: UpdateVoiceStateRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: UpdateVoiceStateResponse
    ) => void
  ): ClientUnaryCall;
  updateVoiceState(
    request: UpdateVoiceStateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: UpdateVoiceStateResponse
    ) => void
  ): ClientUnaryCall;
  updateStatus(
    request: UpdateStatusRequest,
    callback: (
      error: ServiceError | null,
      response: UpdateStatusResponse
    ) => void
  ): ClientUnaryCall;
  updateStatus(
    request: UpdateStatusRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: UpdateStatusResponse
    ) => void
  ): ClientUnaryCall;
  updateStatus(
    request: UpdateStatusRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: UpdateStatusResponse
    ) => void
  ): ClientUnaryCall;
  findUser(
    request: FindUserRequest,
    callback: (error: ServiceError | null, response: FindUserResponse) => void
  ): ClientUnaryCall;
  findUser(
    request: FindUserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: FindUserResponse) => void
  ): ClientUnaryCall;
  findUser(
    request: FindUserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: FindUserResponse) => void
  ): ClientUnaryCall;
  findUserMutualGuilds(
    request: GetUserMutualGuildsRequest,
    callback: (
      error: ServiceError | null,
      response: GetUserMutualGuildsResponse
    ) => void
  ): ClientUnaryCall;
  findUserMutualGuilds(
    request: GetUserMutualGuildsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetUserMutualGuildsResponse
    ) => void
  ): ClientUnaryCall;
  findUserMutualGuilds(
    request: GetUserMutualGuildsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetUserMutualGuildsResponse
    ) => void
  ): ClientUnaryCall;
  findEmoji(
    request: FindEmojiRequest,
    callback: (error: ServiceError | null, response: FindEmojiResponse) => void
  ): ClientUnaryCall;
  findEmoji(
    request: FindEmojiRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: FindEmojiResponse) => void
  ): ClientUnaryCall;
  findEmoji(
    request: FindEmojiRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: FindEmojiResponse) => void
  ): ClientUnaryCall;
  getStats(
    request: GetStatsRequest,
    callback: (error: ServiceError | null, response: GetStatsResponse) => void
  ): ClientUnaryCall;
  getStats(
    request: GetStatsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetStatsResponse) => void
  ): ClientUnaryCall;
  getStats(
    request: GetStatsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetStatsResponse) => void
  ): ClientUnaryCall;
}

export const GatewayClient = (makeGenericClientConstructor(
  GatewayService,
  "pylon.gateway.v1.service.Gateway"
) as unknown) as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): GatewayClient;
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
