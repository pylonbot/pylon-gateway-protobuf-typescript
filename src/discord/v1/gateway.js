/* eslint-disable */
import { messageTypeRegistry } from "../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { UserData, GuildData, EmojiData, presenceData_OnlineStatusFromJSON, presenceData_OnlineStatusToJSON, presenceData_PresenceActivityData_ActivityTypeFromJSON, presenceData_PresenceActivityData_ActivityTypeToJSON, } from "../../discord/v1/model";
import { Timestamp } from "../../google/protobuf/timestamp";
import { UInt32Value } from "../../google/protobuf/wrappers";
export const protobufPackage = "pylon.discord.v1.gateway";
const baseUpdateVoiceStateRequest = {
    $type: "pylon.discord.v1.gateway.UpdateVoiceStateRequest",
    guildId: "0",
    channelId: "0",
    selfMute: false,
    selfDeaf: false,
};
export const UpdateVoiceStateRequest = {
    $type: "pylon.discord.v1.gateway.UpdateVoiceStateRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.guildId !== "0") {
            writer.uint32(9).fixed64(message.guildId);
        }
        if (message.channelId !== "0") {
            writer.uint32(17).fixed64(message.channelId);
        }
        if (message.selfMute === true) {
            writer.uint32(24).bool(message.selfMute);
        }
        if (message.selfDeaf === true) {
            writer.uint32(32).bool(message.selfDeaf);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateVoiceStateRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.guildId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 3:
                    message.selfMute = reader.bool();
                    break;
                case 4:
                    message.selfDeaf = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseUpdateVoiceStateRequest,
        };
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.selfMute !== undefined && object.selfMute !== null) {
            message.selfMute = Boolean(object.selfMute);
        }
        if (object.selfDeaf !== undefined && object.selfDeaf !== null) {
            message.selfDeaf = Boolean(object.selfDeaf);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.guildId !== undefined && (obj.guildId = message.guildId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.selfMute !== undefined && (obj.selfMute = message.selfMute);
        message.selfDeaf !== undefined && (obj.selfDeaf = message.selfDeaf);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateVoiceStateRequest,
        };
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.selfMute !== undefined && object.selfMute !== null) {
            message.selfMute = object.selfMute;
        }
        if (object.selfDeaf !== undefined && object.selfDeaf !== null) {
            message.selfDeaf = object.selfDeaf;
        }
        return message;
    },
};
messageTypeRegistry.set(UpdateVoiceStateRequest.$type, UpdateVoiceStateRequest);
const baseUpdateVoiceStateResponse = {
    $type: "pylon.discord.v1.gateway.UpdateVoiceStateResponse",
};
export const UpdateVoiceStateResponse = {
    $type: "pylon.discord.v1.gateway.UpdateVoiceStateResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateVoiceStateResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseUpdateVoiceStateResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseUpdateVoiceStateResponse,
        };
        return message;
    },
};
messageTypeRegistry.set(UpdateVoiceStateResponse.$type, UpdateVoiceStateResponse);
const baseUpdateStatusRequest = {
    $type: "pylon.discord.v1.gateway.UpdateStatusRequest",
    status: 0,
    afk: false,
};
export const UpdateStatusRequest = {
    $type: "pylon.discord.v1.gateway.UpdateStatusRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.shardId !== undefined) {
            UInt32Value.encode({ $type: "google.protobuf.UInt32Value", value: message.shardId }, writer.uint32(10).fork()).ldelim();
        }
        if (message.since !== undefined) {
            Timestamp.encode(toTimestamp(message.since), writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.activities) {
            UpdateStatusRequest_ActivityData.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.afk === true) {
            writer.uint32(40).bool(message.afk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateStatusRequest };
        message.activities = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shardId = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.since = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.activities.push(UpdateStatusRequest_ActivityData.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.afk = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateStatusRequest };
        message.activities = [];
        if (object.shardId !== undefined && object.shardId !== null) {
            message.shardId = Number(object.shardId);
        }
        if (object.since !== undefined && object.since !== null) {
            message.since = fromJsonTimestamp(object.since);
        }
        if (object.activities !== undefined && object.activities !== null) {
            for (const e of object.activities) {
                message.activities.push(UpdateStatusRequest_ActivityData.fromJSON(e));
            }
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = presenceData_OnlineStatusFromJSON(object.status);
        }
        if (object.afk !== undefined && object.afk !== null) {
            message.afk = Boolean(object.afk);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.shardId !== undefined && (obj.shardId = message.shardId);
        message.since !== undefined && (obj.since = message.since.toISOString());
        if (message.activities) {
            obj.activities = message.activities.map((e) => e ? UpdateStatusRequest_ActivityData.toJSON(e) : undefined);
        }
        else {
            obj.activities = [];
        }
        message.status !== undefined &&
            (obj.status = presenceData_OnlineStatusToJSON(message.status));
        message.afk !== undefined && (obj.afk = message.afk);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateStatusRequest };
        message.activities = [];
        if (object.shardId !== undefined && object.shardId !== null) {
            message.shardId = object.shardId;
        }
        if (object.since !== undefined && object.since !== null) {
            message.since = object.since;
        }
        if (object.activities !== undefined && object.activities !== null) {
            for (const e of object.activities) {
                message.activities.push(UpdateStatusRequest_ActivityData.fromPartial(e));
            }
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        if (object.afk !== undefined && object.afk !== null) {
            message.afk = object.afk;
        }
        return message;
    },
};
messageTypeRegistry.set(UpdateStatusRequest.$type, UpdateStatusRequest);
const baseUpdateStatusRequest_ActivityData = {
    $type: "pylon.discord.v1.gateway.UpdateStatusRequest.ActivityData",
    name: "",
    type: 0,
};
export const UpdateStatusRequest_ActivityData = {
    $type: "pylon.discord.v1.gateway.UpdateStatusRequest.ActivityData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateStatusRequest_ActivityData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseUpdateStatusRequest_ActivityData,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = presenceData_PresenceActivityData_ActivityTypeFromJSON(object.type);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.type !== undefined &&
            (obj.type = presenceData_PresenceActivityData_ActivityTypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateStatusRequest_ActivityData,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        return message;
    },
};
messageTypeRegistry.set(UpdateStatusRequest_ActivityData.$type, UpdateStatusRequest_ActivityData);
const baseUpdateStatusResponse = {
    $type: "pylon.discord.v1.gateway.UpdateStatusResponse",
};
export const UpdateStatusResponse = {
    $type: "pylon.discord.v1.gateway.UpdateStatusResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateStatusResponse };
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
    fromJSON(_) {
        const message = { ...baseUpdateStatusResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseUpdateStatusResponse };
        return message;
    },
};
messageTypeRegistry.set(UpdateStatusResponse.$type, UpdateStatusResponse);
const baseFindUserRequest = {
    $type: "pylon.discord.v1.gateway.FindUserRequest",
    userId: "0",
};
export const FindUserRequest = {
    $type: "pylon.discord.v1.gateway.FindUserRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.userId !== "0") {
            writer.uint32(9).fixed64(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFindUserRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = longToString(reader.fixed64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseFindUserRequest };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = String(object.userId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseFindUserRequest };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        return message;
    },
};
messageTypeRegistry.set(FindUserRequest.$type, FindUserRequest);
const baseFindUserResponse = {
    $type: "pylon.discord.v1.gateway.FindUserResponse",
};
export const FindUserResponse = {
    $type: "pylon.discord.v1.gateway.FindUserResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.user !== undefined) {
            UserData.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFindUserResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.user = UserData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseFindUserResponse };
        if (object.user !== undefined && object.user !== null) {
            message.user = UserData.fromJSON(object.user);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.user !== undefined &&
            (obj.user = message.user ? UserData.toJSON(message.user) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseFindUserResponse };
        if (object.user !== undefined && object.user !== null) {
            message.user = UserData.fromPartial(object.user);
        }
        return message;
    },
};
messageTypeRegistry.set(FindUserResponse.$type, FindUserResponse);
const baseGetUserMutualGuildsRequest = {
    $type: "pylon.discord.v1.gateway.GetUserMutualGuildsRequest",
    userId: "0",
};
export const GetUserMutualGuildsRequest = {
    $type: "pylon.discord.v1.gateway.GetUserMutualGuildsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.userId !== "0") {
            writer.uint32(9).fixed64(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetUserMutualGuildsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = longToString(reader.fixed64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseGetUserMutualGuildsRequest,
        };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = String(object.userId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetUserMutualGuildsRequest,
        };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        return message;
    },
};
messageTypeRegistry.set(GetUserMutualGuildsRequest.$type, GetUserMutualGuildsRequest);
const baseGetUserMutualGuildsResponse = {
    $type: "pylon.discord.v1.gateway.GetUserMutualGuildsResponse",
};
export const GetUserMutualGuildsResponse = {
    $type: "pylon.discord.v1.gateway.GetUserMutualGuildsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.guilds) {
            GuildData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetUserMutualGuildsResponse,
        };
        message.guilds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.guilds.push(GuildData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseGetUserMutualGuildsResponse,
        };
        message.guilds = [];
        if (object.guilds !== undefined && object.guilds !== null) {
            for (const e of object.guilds) {
                message.guilds.push(GuildData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.guilds) {
            obj.guilds = message.guilds.map((e) => e ? GuildData.toJSON(e) : undefined);
        }
        else {
            obj.guilds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetUserMutualGuildsResponse,
        };
        message.guilds = [];
        if (object.guilds !== undefined && object.guilds !== null) {
            for (const e of object.guilds) {
                message.guilds.push(GuildData.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(GetUserMutualGuildsResponse.$type, GetUserMutualGuildsResponse);
const baseFindEmojiRequest = {
    $type: "pylon.discord.v1.gateway.FindEmojiRequest",
    emojiId: "0",
};
export const FindEmojiRequest = {
    $type: "pylon.discord.v1.gateway.FindEmojiRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.emojiId !== "0") {
            writer.uint32(9).fixed64(message.emojiId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFindEmojiRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.emojiId = longToString(reader.fixed64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseFindEmojiRequest };
        if (object.emojiId !== undefined && object.emojiId !== null) {
            message.emojiId = String(object.emojiId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.emojiId !== undefined && (obj.emojiId = message.emojiId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseFindEmojiRequest };
        if (object.emojiId !== undefined && object.emojiId !== null) {
            message.emojiId = object.emojiId;
        }
        return message;
    },
};
messageTypeRegistry.set(FindEmojiRequest.$type, FindEmojiRequest);
const baseFindEmojiResponse = {
    $type: "pylon.discord.v1.gateway.FindEmojiResponse",
};
export const FindEmojiResponse = {
    $type: "pylon.discord.v1.gateway.FindEmojiResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.emoji !== undefined) {
            EmojiData.encode(message.emoji, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFindEmojiResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.emoji = EmojiData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseFindEmojiResponse };
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = EmojiData.fromJSON(object.emoji);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.emoji !== undefined &&
            (obj.emoji = message.emoji ? EmojiData.toJSON(message.emoji) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseFindEmojiResponse };
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = EmojiData.fromPartial(object.emoji);
        }
        return message;
    },
};
messageTypeRegistry.set(FindEmojiResponse.$type, FindEmojiResponse);
const baseGetStatsRequest = {
    $type: "pylon.discord.v1.gateway.GetStatsRequest",
};
export const GetStatsRequest = {
    $type: "pylon.discord.v1.gateway.GetStatsRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetStatsRequest };
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
    fromJSON(_) {
        const message = { ...baseGetStatsRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseGetStatsRequest };
        return message;
    },
};
messageTypeRegistry.set(GetStatsRequest.$type, GetStatsRequest);
const baseGetStatsResponse = {
    $type: "pylon.discord.v1.gateway.GetStatsResponse",
    guildCount: "0",
    userCount: "0",
    memberCount: "0",
    connectedChannels: "0",
    shardCount: 0,
};
export const GetStatsResponse = {
    $type: "pylon.discord.v1.gateway.GetStatsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.guildCount !== "0") {
            writer.uint32(8).uint64(message.guildCount);
        }
        if (message.userCount !== "0") {
            writer.uint32(16).uint64(message.userCount);
        }
        if (message.memberCount !== "0") {
            writer.uint32(24).uint64(message.memberCount);
        }
        if (message.connectedChannels !== "0") {
            writer.uint32(32).uint64(message.connectedChannels);
        }
        if (message.shardCount !== 0) {
            writer.uint32(40).uint32(message.shardCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetStatsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.guildCount = longToString(reader.uint64());
                    break;
                case 2:
                    message.userCount = longToString(reader.uint64());
                    break;
                case 3:
                    message.memberCount = longToString(reader.uint64());
                    break;
                case 4:
                    message.connectedChannels = longToString(reader.uint64());
                    break;
                case 5:
                    message.shardCount = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetStatsResponse };
        if (object.guildCount !== undefined && object.guildCount !== null) {
            message.guildCount = String(object.guildCount);
        }
        if (object.userCount !== undefined && object.userCount !== null) {
            message.userCount = String(object.userCount);
        }
        if (object.memberCount !== undefined && object.memberCount !== null) {
            message.memberCount = String(object.memberCount);
        }
        if (object.connectedChannels !== undefined &&
            object.connectedChannels !== null) {
            message.connectedChannels = String(object.connectedChannels);
        }
        if (object.shardCount !== undefined && object.shardCount !== null) {
            message.shardCount = Number(object.shardCount);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.guildCount !== undefined && (obj.guildCount = message.guildCount);
        message.userCount !== undefined && (obj.userCount = message.userCount);
        message.memberCount !== undefined &&
            (obj.memberCount = message.memberCount);
        message.connectedChannels !== undefined &&
            (obj.connectedChannels = message.connectedChannels);
        message.shardCount !== undefined && (obj.shardCount = message.shardCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetStatsResponse };
        if (object.guildCount !== undefined && object.guildCount !== null) {
            message.guildCount = object.guildCount;
        }
        if (object.userCount !== undefined && object.userCount !== null) {
            message.userCount = object.userCount;
        }
        if (object.memberCount !== undefined && object.memberCount !== null) {
            message.memberCount = object.memberCount;
        }
        if (object.connectedChannels !== undefined &&
            object.connectedChannels !== null) {
            message.connectedChannels = object.connectedChannels;
        }
        if (object.shardCount !== undefined && object.shardCount !== null) {
            message.shardCount = object.shardCount;
        }
        return message;
    },
};
messageTypeRegistry.set(GetStatsResponse.$type, GetStatsResponse);
function toTimestamp(date) {
    const seconds = (date.getTime() / 1000).toString();
    const nanos = (date.getTime() % 1000) * 1000000;
    return { $type: "google.protobuf.Timestamp", seconds, nanos };
}
function fromTimestamp(t) {
    let millis = Number(t.seconds) * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
function longToString(long) {
    return long.toString();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
