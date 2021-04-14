import _m0 from "protobufjs/minimal";
import { PresenceData_OnlineStatus, GuildData, ChannelData, MemberData, SnowflakeValue, PresenceData, RoleData, EmojiData, VoiceStateData, UserData } from "../../discord/v1/model";
export declare const protobufPackage = "pylon.discord.v1.cache";
export interface GetGuildRequest {
    $type: "pylon.discord.v1.cache.GetGuildRequest";
}
export interface GetGuildResponse {
    $type: "pylon.discord.v1.cache.GetGuildResponse";
    guild: GuildData | undefined;
}
export interface ListGuildChannelsRequest {
    $type: "pylon.discord.v1.cache.ListGuildChannelsRequest";
}
export interface ListGuildChannelsResponse {
    $type: "pylon.discord.v1.cache.ListGuildChannelsResponse";
    channels: ChannelData[];
}
export interface GetGuildChannelRequest {
    $type: "pylon.discord.v1.cache.GetGuildChannelRequest";
    channelId: string;
}
export interface GetGuildChannelResponse {
    $type: "pylon.discord.v1.cache.GetGuildChannelResponse";
    channel: ChannelData | undefined;
}
export interface ListGuildMembersRequest {
    $type: "pylon.discord.v1.cache.ListGuildMembersRequest";
    after: string;
    limit: number;
}
export interface ListGuildMembersResponse {
    $type: "pylon.discord.v1.cache.ListGuildMembersResponse";
    members: MemberData[];
}
export interface GetGuildMemberRequest {
    $type: "pylon.discord.v1.cache.GetGuildMemberRequest";
    userId: string;
}
export interface GetGuildMemberResponse {
    $type: "pylon.discord.v1.cache.GetGuildMemberResponse";
    member: MemberData | undefined;
}
export interface FindGuildMembersRequest {
    $type: "pylon.discord.v1.cache.FindGuildMembersRequest";
    name: string | undefined;
    prefix: string | undefined;
    status: PresenceData_OnlineStatus;
    roleId: SnowflakeValue | undefined;
    limit: number;
}
export interface FindGuildMembersResponse {
    $type: "pylon.discord.v1.cache.FindGuildMembersResponse";
    members: MemberData[];
}
export interface GetGuildMemberPresenceRequest {
    $type: "pylon.discord.v1.cache.GetGuildMemberPresenceRequest";
    userId: string;
}
export interface GetGuildMemberPresenceResponse {
    $type: "pylon.discord.v1.cache.GetGuildMemberPresenceResponse";
    presence: PresenceData | undefined;
}
export interface ListGuildRolesRequest {
    $type: "pylon.discord.v1.cache.ListGuildRolesRequest";
}
export interface ListGuildRolesResponse {
    $type: "pylon.discord.v1.cache.ListGuildRolesResponse";
    roles: RoleData[];
}
export interface GetGuildRoleRequest {
    $type: "pylon.discord.v1.cache.GetGuildRoleRequest";
    roleId: string;
}
export interface GetGuildRoleResponse {
    $type: "pylon.discord.v1.cache.GetGuildRoleResponse";
    role: RoleData | undefined;
}
export interface ListGuildEmojisRequest {
    $type: "pylon.discord.v1.cache.ListGuildEmojisRequest";
}
export interface ListGuildEmojisResponse {
    $type: "pylon.discord.v1.cache.ListGuildEmojisResponse";
    emojis: EmojiData[];
}
export interface GetGuildEmojiRequest {
    $type: "pylon.discord.v1.cache.GetGuildEmojiRequest";
    emojiId: string;
}
export interface GetGuildEmojiResponse {
    $type: "pylon.discord.v1.cache.GetGuildEmojiResponse";
    emoji: EmojiData | undefined;
}
export interface GetGuildMemberVoiceStateRequest {
    $type: "pylon.discord.v1.cache.GetGuildMemberVoiceStateRequest";
    userId: string;
}
export interface GetGuildMemberVoiceStateResponse {
    $type: "pylon.discord.v1.cache.GetGuildMemberVoiceStateResponse";
    voiceStateData: VoiceStateData | undefined;
}
export interface ListGuildChannelVoiceStatesRequest {
    $type: "pylon.discord.v1.cache.ListGuildChannelVoiceStatesRequest";
    channelId: string;
}
export interface ListGuildChannelVoiceStatesResponse {
    $type: "pylon.discord.v1.cache.ListGuildChannelVoiceStatesResponse";
    voiceStatesData: VoiceStateData[];
}
export interface GetUserRequest {
    $type: "pylon.discord.v1.cache.GetUserRequest";
    userId: string;
}
export interface GetUserResponse {
    $type: "pylon.discord.v1.cache.GetUserResponse";
    user: UserData | undefined;
}
export declare const GetGuildRequest: {
    $type: "pylon.discord.v1.cache.GetGuildRequest";
    encode(_: GetGuildRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildRequest;
    fromJSON(_: any): GetGuildRequest;
    toJSON(_: GetGuildRequest): unknown;
    fromPartial(_: DeepPartial<GetGuildRequest>): GetGuildRequest;
};
export declare const GetGuildResponse: {
    $type: "pylon.discord.v1.cache.GetGuildResponse";
    encode(message: GetGuildResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildResponse;
    fromJSON(object: any): GetGuildResponse;
    toJSON(message: GetGuildResponse): unknown;
    fromPartial(object: DeepPartial<GetGuildResponse>): GetGuildResponse;
};
export declare const ListGuildChannelsRequest: {
    $type: "pylon.discord.v1.cache.ListGuildChannelsRequest";
    encode(_: ListGuildChannelsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGuildChannelsRequest;
    fromJSON(_: any): ListGuildChannelsRequest;
    toJSON(_: ListGuildChannelsRequest): unknown;
    fromPartial(_: DeepPartial<ListGuildChannelsRequest>): ListGuildChannelsRequest;
};
export declare const ListGuildChannelsResponse: {
    $type: "pylon.discord.v1.cache.ListGuildChannelsResponse";
    encode(message: ListGuildChannelsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGuildChannelsResponse;
    fromJSON(object: any): ListGuildChannelsResponse;
    toJSON(message: ListGuildChannelsResponse): unknown;
    fromPartial(object: DeepPartial<ListGuildChannelsResponse>): ListGuildChannelsResponse;
};
export declare const GetGuildChannelRequest: {
    $type: "pylon.discord.v1.cache.GetGuildChannelRequest";
    encode(message: GetGuildChannelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildChannelRequest;
    fromJSON(object: any): GetGuildChannelRequest;
    toJSON(message: GetGuildChannelRequest): unknown;
    fromPartial(object: DeepPartial<GetGuildChannelRequest>): GetGuildChannelRequest;
};
export declare const GetGuildChannelResponse: {
    $type: "pylon.discord.v1.cache.GetGuildChannelResponse";
    encode(message: GetGuildChannelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildChannelResponse;
    fromJSON(object: any): GetGuildChannelResponse;
    toJSON(message: GetGuildChannelResponse): unknown;
    fromPartial(object: DeepPartial<GetGuildChannelResponse>): GetGuildChannelResponse;
};
export declare const ListGuildMembersRequest: {
    $type: "pylon.discord.v1.cache.ListGuildMembersRequest";
    encode(message: ListGuildMembersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGuildMembersRequest;
    fromJSON(object: any): ListGuildMembersRequest;
    toJSON(message: ListGuildMembersRequest): unknown;
    fromPartial(object: DeepPartial<ListGuildMembersRequest>): ListGuildMembersRequest;
};
export declare const ListGuildMembersResponse: {
    $type: "pylon.discord.v1.cache.ListGuildMembersResponse";
    encode(message: ListGuildMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGuildMembersResponse;
    fromJSON(object: any): ListGuildMembersResponse;
    toJSON(message: ListGuildMembersResponse): unknown;
    fromPartial(object: DeepPartial<ListGuildMembersResponse>): ListGuildMembersResponse;
};
export declare const GetGuildMemberRequest: {
    $type: "pylon.discord.v1.cache.GetGuildMemberRequest";
    encode(message: GetGuildMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildMemberRequest;
    fromJSON(object: any): GetGuildMemberRequest;
    toJSON(message: GetGuildMemberRequest): unknown;
    fromPartial(object: DeepPartial<GetGuildMemberRequest>): GetGuildMemberRequest;
};
export declare const GetGuildMemberResponse: {
    $type: "pylon.discord.v1.cache.GetGuildMemberResponse";
    encode(message: GetGuildMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildMemberResponse;
    fromJSON(object: any): GetGuildMemberResponse;
    toJSON(message: GetGuildMemberResponse): unknown;
    fromPartial(object: DeepPartial<GetGuildMemberResponse>): GetGuildMemberResponse;
};
export declare const FindGuildMembersRequest: {
    $type: "pylon.discord.v1.cache.FindGuildMembersRequest";
    encode(message: FindGuildMembersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FindGuildMembersRequest;
    fromJSON(object: any): FindGuildMembersRequest;
    toJSON(message: FindGuildMembersRequest): unknown;
    fromPartial(object: DeepPartial<FindGuildMembersRequest>): FindGuildMembersRequest;
};
export declare const FindGuildMembersResponse: {
    $type: "pylon.discord.v1.cache.FindGuildMembersResponse";
    encode(message: FindGuildMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FindGuildMembersResponse;
    fromJSON(object: any): FindGuildMembersResponse;
    toJSON(message: FindGuildMembersResponse): unknown;
    fromPartial(object: DeepPartial<FindGuildMembersResponse>): FindGuildMembersResponse;
};
export declare const GetGuildMemberPresenceRequest: {
    $type: "pylon.discord.v1.cache.GetGuildMemberPresenceRequest";
    encode(message: GetGuildMemberPresenceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildMemberPresenceRequest;
    fromJSON(object: any): GetGuildMemberPresenceRequest;
    toJSON(message: GetGuildMemberPresenceRequest): unknown;
    fromPartial(object: DeepPartial<GetGuildMemberPresenceRequest>): GetGuildMemberPresenceRequest;
};
export declare const GetGuildMemberPresenceResponse: {
    $type: "pylon.discord.v1.cache.GetGuildMemberPresenceResponse";
    encode(message: GetGuildMemberPresenceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildMemberPresenceResponse;
    fromJSON(object: any): GetGuildMemberPresenceResponse;
    toJSON(message: GetGuildMemberPresenceResponse): unknown;
    fromPartial(object: DeepPartial<GetGuildMemberPresenceResponse>): GetGuildMemberPresenceResponse;
};
export declare const ListGuildRolesRequest: {
    $type: "pylon.discord.v1.cache.ListGuildRolesRequest";
    encode(_: ListGuildRolesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGuildRolesRequest;
    fromJSON(_: any): ListGuildRolesRequest;
    toJSON(_: ListGuildRolesRequest): unknown;
    fromPartial(_: DeepPartial<ListGuildRolesRequest>): ListGuildRolesRequest;
};
export declare const ListGuildRolesResponse: {
    $type: "pylon.discord.v1.cache.ListGuildRolesResponse";
    encode(message: ListGuildRolesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGuildRolesResponse;
    fromJSON(object: any): ListGuildRolesResponse;
    toJSON(message: ListGuildRolesResponse): unknown;
    fromPartial(object: DeepPartial<ListGuildRolesResponse>): ListGuildRolesResponse;
};
export declare const GetGuildRoleRequest: {
    $type: "pylon.discord.v1.cache.GetGuildRoleRequest";
    encode(message: GetGuildRoleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildRoleRequest;
    fromJSON(object: any): GetGuildRoleRequest;
    toJSON(message: GetGuildRoleRequest): unknown;
    fromPartial(object: DeepPartial<GetGuildRoleRequest>): GetGuildRoleRequest;
};
export declare const GetGuildRoleResponse: {
    $type: "pylon.discord.v1.cache.GetGuildRoleResponse";
    encode(message: GetGuildRoleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildRoleResponse;
    fromJSON(object: any): GetGuildRoleResponse;
    toJSON(message: GetGuildRoleResponse): unknown;
    fromPartial(object: DeepPartial<GetGuildRoleResponse>): GetGuildRoleResponse;
};
export declare const ListGuildEmojisRequest: {
    $type: "pylon.discord.v1.cache.ListGuildEmojisRequest";
    encode(_: ListGuildEmojisRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGuildEmojisRequest;
    fromJSON(_: any): ListGuildEmojisRequest;
    toJSON(_: ListGuildEmojisRequest): unknown;
    fromPartial(_: DeepPartial<ListGuildEmojisRequest>): ListGuildEmojisRequest;
};
export declare const ListGuildEmojisResponse: {
    $type: "pylon.discord.v1.cache.ListGuildEmojisResponse";
    encode(message: ListGuildEmojisResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGuildEmojisResponse;
    fromJSON(object: any): ListGuildEmojisResponse;
    toJSON(message: ListGuildEmojisResponse): unknown;
    fromPartial(object: DeepPartial<ListGuildEmojisResponse>): ListGuildEmojisResponse;
};
export declare const GetGuildEmojiRequest: {
    $type: "pylon.discord.v1.cache.GetGuildEmojiRequest";
    encode(message: GetGuildEmojiRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildEmojiRequest;
    fromJSON(object: any): GetGuildEmojiRequest;
    toJSON(message: GetGuildEmojiRequest): unknown;
    fromPartial(object: DeepPartial<GetGuildEmojiRequest>): GetGuildEmojiRequest;
};
export declare const GetGuildEmojiResponse: {
    $type: "pylon.discord.v1.cache.GetGuildEmojiResponse";
    encode(message: GetGuildEmojiResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildEmojiResponse;
    fromJSON(object: any): GetGuildEmojiResponse;
    toJSON(message: GetGuildEmojiResponse): unknown;
    fromPartial(object: DeepPartial<GetGuildEmojiResponse>): GetGuildEmojiResponse;
};
export declare const GetGuildMemberVoiceStateRequest: {
    $type: "pylon.discord.v1.cache.GetGuildMemberVoiceStateRequest";
    encode(message: GetGuildMemberVoiceStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildMemberVoiceStateRequest;
    fromJSON(object: any): GetGuildMemberVoiceStateRequest;
    toJSON(message: GetGuildMemberVoiceStateRequest): unknown;
    fromPartial(object: DeepPartial<GetGuildMemberVoiceStateRequest>): GetGuildMemberVoiceStateRequest;
};
export declare const GetGuildMemberVoiceStateResponse: {
    $type: "pylon.discord.v1.cache.GetGuildMemberVoiceStateResponse";
    encode(message: GetGuildMemberVoiceStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGuildMemberVoiceStateResponse;
    fromJSON(object: any): GetGuildMemberVoiceStateResponse;
    toJSON(message: GetGuildMemberVoiceStateResponse): unknown;
    fromPartial(object: DeepPartial<GetGuildMemberVoiceStateResponse>): GetGuildMemberVoiceStateResponse;
};
export declare const ListGuildChannelVoiceStatesRequest: {
    $type: "pylon.discord.v1.cache.ListGuildChannelVoiceStatesRequest";
    encode(message: ListGuildChannelVoiceStatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGuildChannelVoiceStatesRequest;
    fromJSON(object: any): ListGuildChannelVoiceStatesRequest;
    toJSON(message: ListGuildChannelVoiceStatesRequest): unknown;
    fromPartial(object: DeepPartial<ListGuildChannelVoiceStatesRequest>): ListGuildChannelVoiceStatesRequest;
};
export declare const ListGuildChannelVoiceStatesResponse: {
    $type: "pylon.discord.v1.cache.ListGuildChannelVoiceStatesResponse";
    encode(message: ListGuildChannelVoiceStatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListGuildChannelVoiceStatesResponse;
    fromJSON(object: any): ListGuildChannelVoiceStatesResponse;
    toJSON(message: ListGuildChannelVoiceStatesResponse): unknown;
    fromPartial(object: DeepPartial<ListGuildChannelVoiceStatesResponse>): ListGuildChannelVoiceStatesResponse;
};
export declare const GetUserRequest: {
    $type: "pylon.discord.v1.cache.GetUserRequest";
    encode(message: GetUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetUserRequest;
    fromJSON(object: any): GetUserRequest;
    toJSON(message: GetUserRequest): unknown;
    fromPartial(object: DeepPartial<GetUserRequest>): GetUserRequest;
};
export declare const GetUserResponse: {
    $type: "pylon.discord.v1.cache.GetUserResponse";
    encode(message: GetUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetUserResponse;
    fromJSON(object: any): GetUserResponse;
    toJSON(message: GetUserResponse): unknown;
    fromPartial(object: DeepPartial<GetUserResponse>): GetUserResponse;
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
