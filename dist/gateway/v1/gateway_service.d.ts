/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import { UpdateVoiceStateRequest, UpdateVoiceStateResponse, UpdateStatusRequest, UpdateStatusResponse, FindUserRequest, FindUserResponse, GetUserMutualGuildsRequest, GetUserMutualGuildsResponse, FindEmojiRequest, FindEmojiResponse, GetStatsRequest, GetStatsResponse } from "../../discord/v1/gateway";
export declare const protobufPackage = "pylon.gateway.v1.service";
export declare const GatewayService: {
    readonly updateVoiceState: {
        readonly path: "/pylon.gateway.v1.service.Gateway/UpdateVoiceState";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateVoiceStateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateVoiceStateRequest;
        readonly responseSerialize: (value: UpdateVoiceStateResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateVoiceStateResponse;
    };
    readonly updateStatus: {
        readonly path: "/pylon.gateway.v1.service.Gateway/UpdateStatus";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateStatusRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateStatusRequest;
        readonly responseSerialize: (value: UpdateStatusResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateStatusResponse;
    };
    readonly findUser: {
        readonly path: "/pylon.gateway.v1.service.Gateway/FindUser";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: FindUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => FindUserRequest;
        readonly responseSerialize: (value: FindUserResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => FindUserResponse;
    };
    readonly findUserMutualGuilds: {
        readonly path: "/pylon.gateway.v1.service.Gateway/FindUserMutualGuilds";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetUserMutualGuildsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetUserMutualGuildsRequest;
        readonly responseSerialize: (value: GetUserMutualGuildsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetUserMutualGuildsResponse;
    };
    readonly findEmoji: {
        readonly path: "/pylon.gateway.v1.service.Gateway/FindEmoji";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: FindEmojiRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => FindEmojiRequest;
        readonly responseSerialize: (value: FindEmojiResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => FindEmojiResponse;
    };
    readonly getStats: {
        readonly path: "/pylon.gateway.v1.service.Gateway/GetStats";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetStatsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetStatsRequest;
        readonly responseSerialize: (value: GetStatsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetStatsResponse;
    };
};
export interface GatewayServer extends UntypedServiceImplementation {
    updateVoiceState: handleUnaryCall<UpdateVoiceStateRequest, UpdateVoiceStateResponse>;
    updateStatus: handleUnaryCall<UpdateStatusRequest, UpdateStatusResponse>;
    findUser: handleUnaryCall<FindUserRequest, FindUserResponse>;
    findUserMutualGuilds: handleUnaryCall<GetUserMutualGuildsRequest, GetUserMutualGuildsResponse>;
    findEmoji: handleUnaryCall<FindEmojiRequest, FindEmojiResponse>;
    getStats: handleUnaryCall<GetStatsRequest, GetStatsResponse>;
}
export interface GatewayClient extends Client {
    updateVoiceState(request: UpdateVoiceStateRequest, callback: (error: ServiceError | null, response: UpdateVoiceStateResponse) => void): ClientUnaryCall;
    updateVoiceState(request: UpdateVoiceStateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateVoiceStateResponse) => void): ClientUnaryCall;
    updateVoiceState(request: UpdateVoiceStateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateVoiceStateResponse) => void): ClientUnaryCall;
    updateStatus(request: UpdateStatusRequest, callback: (error: ServiceError | null, response: UpdateStatusResponse) => void): ClientUnaryCall;
    updateStatus(request: UpdateStatusRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateStatusResponse) => void): ClientUnaryCall;
    updateStatus(request: UpdateStatusRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateStatusResponse) => void): ClientUnaryCall;
    findUser(request: FindUserRequest, callback: (error: ServiceError | null, response: FindUserResponse) => void): ClientUnaryCall;
    findUser(request: FindUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: FindUserResponse) => void): ClientUnaryCall;
    findUser(request: FindUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: FindUserResponse) => void): ClientUnaryCall;
    findUserMutualGuilds(request: GetUserMutualGuildsRequest, callback: (error: ServiceError | null, response: GetUserMutualGuildsResponse) => void): ClientUnaryCall;
    findUserMutualGuilds(request: GetUserMutualGuildsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetUserMutualGuildsResponse) => void): ClientUnaryCall;
    findUserMutualGuilds(request: GetUserMutualGuildsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetUserMutualGuildsResponse) => void): ClientUnaryCall;
    findEmoji(request: FindEmojiRequest, callback: (error: ServiceError | null, response: FindEmojiResponse) => void): ClientUnaryCall;
    findEmoji(request: FindEmojiRequest, metadata: Metadata, callback: (error: ServiceError | null, response: FindEmojiResponse) => void): ClientUnaryCall;
    findEmoji(request: FindEmojiRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: FindEmojiResponse) => void): ClientUnaryCall;
    getStats(request: GetStatsRequest, callback: (error: ServiceError | null, response: GetStatsResponse) => void): ClientUnaryCall;
    getStats(request: GetStatsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetStatsResponse) => void): ClientUnaryCall;
    getStats(request: GetStatsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetStatsResponse) => void): ClientUnaryCall;
}
export declare const GatewayClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => GatewayClient;
export interface DataLoaderOptions {
    cache?: boolean;
}
export interface DataLoaders {
    rpcDataLoaderOptions?: DataLoaderOptions;
    getDataLoader<T>(identifier: string, constructorFn: () => T): T;
}
