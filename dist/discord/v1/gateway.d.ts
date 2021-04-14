import _m0 from "protobufjs/minimal";
import { PresenceData_OnlineStatus, PresenceData_PresenceActivityData_ActivityType, UserData, GuildData, EmojiData } from "../../discord/v1/model";
export declare const protobufPackage = "pylon.discord.v1.gateway";
export interface UpdateVoiceStateRequest {
    $type: "pylon.discord.v1.gateway.UpdateVoiceStateRequest";
    guildId: string;
    channelId: string;
    selfMute: boolean;
    selfDeaf: boolean;
}
export interface UpdateVoiceStateResponse {
    $type: "pylon.discord.v1.gateway.UpdateVoiceStateResponse";
}
export interface UpdateStatusRequest {
    $type: "pylon.discord.v1.gateway.UpdateStatusRequest";
    shardId: number | undefined;
    since: Date | undefined;
    activities: UpdateStatusRequest_ActivityData[];
    status: PresenceData_OnlineStatus;
    afk: boolean;
}
export interface UpdateStatusRequest_ActivityData {
    $type: "pylon.discord.v1.gateway.UpdateStatusRequest.ActivityData";
    name: string;
    type: PresenceData_PresenceActivityData_ActivityType;
}
export interface UpdateStatusResponse {
    $type: "pylon.discord.v1.gateway.UpdateStatusResponse";
}
export interface FindUserRequest {
    $type: "pylon.discord.v1.gateway.FindUserRequest";
    userId: string;
}
export interface FindUserResponse {
    $type: "pylon.discord.v1.gateway.FindUserResponse";
    user: UserData | undefined;
}
export interface GetUserMutualGuildsRequest {
    $type: "pylon.discord.v1.gateway.GetUserMutualGuildsRequest";
    userId: string;
}
export interface GetUserMutualGuildsResponse {
    $type: "pylon.discord.v1.gateway.GetUserMutualGuildsResponse";
    guilds: GuildData[];
}
export interface FindEmojiRequest {
    $type: "pylon.discord.v1.gateway.FindEmojiRequest";
    emojiId: string;
}
export interface FindEmojiResponse {
    $type: "pylon.discord.v1.gateway.FindEmojiResponse";
    emoji: EmojiData | undefined;
}
export interface GetStatsRequest {
    $type: "pylon.discord.v1.gateway.GetStatsRequest";
}
export interface GetStatsResponse {
    $type: "pylon.discord.v1.gateway.GetStatsResponse";
    guildCount: string;
    userCount: string;
    memberCount: string;
    connectedChannels: string;
    shardCount: number;
}
export declare const UpdateVoiceStateRequest: {
    $type: "pylon.discord.v1.gateway.UpdateVoiceStateRequest";
    encode(message: UpdateVoiceStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateVoiceStateRequest;
    fromJSON(object: any): UpdateVoiceStateRequest;
    toJSON(message: UpdateVoiceStateRequest): unknown;
    fromPartial(object: DeepPartial<UpdateVoiceStateRequest>): UpdateVoiceStateRequest;
};
export declare const UpdateVoiceStateResponse: {
    $type: "pylon.discord.v1.gateway.UpdateVoiceStateResponse";
    encode(_: UpdateVoiceStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateVoiceStateResponse;
    fromJSON(_: any): UpdateVoiceStateResponse;
    toJSON(_: UpdateVoiceStateResponse): unknown;
    fromPartial(_: DeepPartial<UpdateVoiceStateResponse>): UpdateVoiceStateResponse;
};
export declare const UpdateStatusRequest: {
    $type: "pylon.discord.v1.gateway.UpdateStatusRequest";
    encode(message: UpdateStatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateStatusRequest;
    fromJSON(object: any): UpdateStatusRequest;
    toJSON(message: UpdateStatusRequest): unknown;
    fromPartial(object: DeepPartial<UpdateStatusRequest>): UpdateStatusRequest;
};
export declare const UpdateStatusRequest_ActivityData: {
    $type: "pylon.discord.v1.gateway.UpdateStatusRequest.ActivityData";
    encode(message: UpdateStatusRequest_ActivityData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateStatusRequest_ActivityData;
    fromJSON(object: any): UpdateStatusRequest_ActivityData;
    toJSON(message: UpdateStatusRequest_ActivityData): unknown;
    fromPartial(object: DeepPartial<UpdateStatusRequest_ActivityData>): UpdateStatusRequest_ActivityData;
};
export declare const UpdateStatusResponse: {
    $type: "pylon.discord.v1.gateway.UpdateStatusResponse";
    encode(_: UpdateStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateStatusResponse;
    fromJSON(_: any): UpdateStatusResponse;
    toJSON(_: UpdateStatusResponse): unknown;
    fromPartial(_: DeepPartial<UpdateStatusResponse>): UpdateStatusResponse;
};
export declare const FindUserRequest: {
    $type: "pylon.discord.v1.gateway.FindUserRequest";
    encode(message: FindUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FindUserRequest;
    fromJSON(object: any): FindUserRequest;
    toJSON(message: FindUserRequest): unknown;
    fromPartial(object: DeepPartial<FindUserRequest>): FindUserRequest;
};
export declare const FindUserResponse: {
    $type: "pylon.discord.v1.gateway.FindUserResponse";
    encode(message: FindUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FindUserResponse;
    fromJSON(object: any): FindUserResponse;
    toJSON(message: FindUserResponse): unknown;
    fromPartial(object: DeepPartial<FindUserResponse>): FindUserResponse;
};
export declare const GetUserMutualGuildsRequest: {
    $type: "pylon.discord.v1.gateway.GetUserMutualGuildsRequest";
    encode(message: GetUserMutualGuildsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetUserMutualGuildsRequest;
    fromJSON(object: any): GetUserMutualGuildsRequest;
    toJSON(message: GetUserMutualGuildsRequest): unknown;
    fromPartial(object: DeepPartial<GetUserMutualGuildsRequest>): GetUserMutualGuildsRequest;
};
export declare const GetUserMutualGuildsResponse: {
    $type: "pylon.discord.v1.gateway.GetUserMutualGuildsResponse";
    encode(message: GetUserMutualGuildsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetUserMutualGuildsResponse;
    fromJSON(object: any): GetUserMutualGuildsResponse;
    toJSON(message: GetUserMutualGuildsResponse): unknown;
    fromPartial(object: DeepPartial<GetUserMutualGuildsResponse>): GetUserMutualGuildsResponse;
};
export declare const FindEmojiRequest: {
    $type: "pylon.discord.v1.gateway.FindEmojiRequest";
    encode(message: FindEmojiRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FindEmojiRequest;
    fromJSON(object: any): FindEmojiRequest;
    toJSON(message: FindEmojiRequest): unknown;
    fromPartial(object: DeepPartial<FindEmojiRequest>): FindEmojiRequest;
};
export declare const FindEmojiResponse: {
    $type: "pylon.discord.v1.gateway.FindEmojiResponse";
    encode(message: FindEmojiResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FindEmojiResponse;
    fromJSON(object: any): FindEmojiResponse;
    toJSON(message: FindEmojiResponse): unknown;
    fromPartial(object: DeepPartial<FindEmojiResponse>): FindEmojiResponse;
};
export declare const GetStatsRequest: {
    $type: "pylon.discord.v1.gateway.GetStatsRequest";
    encode(_: GetStatsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetStatsRequest;
    fromJSON(_: any): GetStatsRequest;
    toJSON(_: GetStatsRequest): unknown;
    fromPartial(_: DeepPartial<GetStatsRequest>): GetStatsRequest;
};
export declare const GetStatsResponse: {
    $type: "pylon.discord.v1.gateway.GetStatsResponse";
    encode(message: GetStatsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetStatsResponse;
    fromJSON(object: any): GetStatsResponse;
    toJSON(message: GetStatsResponse): unknown;
    fromPartial(object: DeepPartial<GetStatsResponse>): GetStatsResponse;
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
