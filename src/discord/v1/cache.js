/* eslint-disable */
import { messageTypeRegistry } from "../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { GuildData, ChannelData, MemberData, SnowflakeValue, PresenceData, RoleData, EmojiData, VoiceStateData, UserData, presenceData_OnlineStatusFromJSON, presenceData_OnlineStatusToJSON, } from "../../discord/v1/model";
import { StringValue } from "../../google/protobuf/wrappers";
export const protobufPackage = "pylon.discord.v1.cache";
const baseGetGuildRequest = {
    $type: "pylon.discord.v1.cache.GetGuildRequest",
};
export const GetGuildRequest = {
    $type: "pylon.discord.v1.cache.GetGuildRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetGuildRequest };
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
        const message = { ...baseGetGuildRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseGetGuildRequest };
        return message;
    },
};
messageTypeRegistry.set(GetGuildRequest.$type, GetGuildRequest);
const baseGetGuildResponse = {
    $type: "pylon.discord.v1.cache.GetGuildResponse",
};
export const GetGuildResponse = {
    $type: "pylon.discord.v1.cache.GetGuildResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.guild !== undefined) {
            GuildData.encode(message.guild, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetGuildResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.guild = GuildData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetGuildResponse };
        if (object.guild !== undefined && object.guild !== null) {
            message.guild = GuildData.fromJSON(object.guild);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.guild !== undefined &&
            (obj.guild = message.guild ? GuildData.toJSON(message.guild) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetGuildResponse };
        if (object.guild !== undefined && object.guild !== null) {
            message.guild = GuildData.fromPartial(object.guild);
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildResponse.$type, GetGuildResponse);
const baseListGuildChannelsRequest = {
    $type: "pylon.discord.v1.cache.ListGuildChannelsRequest",
};
export const ListGuildChannelsRequest = {
    $type: "pylon.discord.v1.cache.ListGuildChannelsRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListGuildChannelsRequest,
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
            ...baseListGuildChannelsRequest,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseListGuildChannelsRequest,
        };
        return message;
    },
};
messageTypeRegistry.set(ListGuildChannelsRequest.$type, ListGuildChannelsRequest);
const baseListGuildChannelsResponse = {
    $type: "pylon.discord.v1.cache.ListGuildChannelsResponse",
};
export const ListGuildChannelsResponse = {
    $type: "pylon.discord.v1.cache.ListGuildChannelsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.channels) {
            ChannelData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListGuildChannelsResponse,
        };
        message.channels = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channels.push(ChannelData.decode(reader, reader.uint32()));
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
            ...baseListGuildChannelsResponse,
        };
        message.channels = [];
        if (object.channels !== undefined && object.channels !== null) {
            for (const e of object.channels) {
                message.channels.push(ChannelData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map((e) => e ? ChannelData.toJSON(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListGuildChannelsResponse,
        };
        message.channels = [];
        if (object.channels !== undefined && object.channels !== null) {
            for (const e of object.channels) {
                message.channels.push(ChannelData.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(ListGuildChannelsResponse.$type, ListGuildChannelsResponse);
const baseGetGuildChannelRequest = {
    $type: "pylon.discord.v1.cache.GetGuildChannelRequest",
    channelId: "0",
};
export const GetGuildChannelRequest = {
    $type: "pylon.discord.v1.cache.GetGuildChannelRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetGuildChannelRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetGuildChannelRequest };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetGuildChannelRequest };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildChannelRequest.$type, GetGuildChannelRequest);
const baseGetGuildChannelResponse = {
    $type: "pylon.discord.v1.cache.GetGuildChannelResponse",
};
export const GetGuildChannelResponse = {
    $type: "pylon.discord.v1.cache.GetGuildChannelResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channel !== undefined) {
            ChannelData.encode(message.channel, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetGuildChannelResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channel = ChannelData.decode(reader, reader.uint32());
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
            ...baseGetGuildChannelResponse,
        };
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = ChannelData.fromJSON(object.channel);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channel !== undefined &&
            (obj.channel = message.channel
                ? ChannelData.toJSON(message.channel)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetGuildChannelResponse,
        };
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = ChannelData.fromPartial(object.channel);
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildChannelResponse.$type, GetGuildChannelResponse);
const baseListGuildMembersRequest = {
    $type: "pylon.discord.v1.cache.ListGuildMembersRequest",
    after: "0",
    limit: 0,
};
export const ListGuildMembersRequest = {
    $type: "pylon.discord.v1.cache.ListGuildMembersRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.after !== "0") {
            writer.uint32(9).fixed64(message.after);
        }
        if (message.limit !== 0) {
            writer.uint32(16).uint32(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListGuildMembersRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.after = longToString(reader.fixed64());
                    break;
                case 2:
                    message.limit = reader.uint32();
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
            ...baseListGuildMembersRequest,
        };
        if (object.after !== undefined && object.after !== null) {
            message.after = String(object.after);
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = Number(object.limit);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.after !== undefined && (obj.after = message.after);
        message.limit !== undefined && (obj.limit = message.limit);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListGuildMembersRequest,
        };
        if (object.after !== undefined && object.after !== null) {
            message.after = object.after;
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = object.limit;
        }
        return message;
    },
};
messageTypeRegistry.set(ListGuildMembersRequest.$type, ListGuildMembersRequest);
const baseListGuildMembersResponse = {
    $type: "pylon.discord.v1.cache.ListGuildMembersResponse",
};
export const ListGuildMembersResponse = {
    $type: "pylon.discord.v1.cache.ListGuildMembersResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.members) {
            MemberData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListGuildMembersResponse,
        };
        message.members = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.members.push(MemberData.decode(reader, reader.uint32()));
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
            ...baseListGuildMembersResponse,
        };
        message.members = [];
        if (object.members !== undefined && object.members !== null) {
            for (const e of object.members) {
                message.members.push(MemberData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.members) {
            obj.members = message.members.map((e) => e ? MemberData.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListGuildMembersResponse,
        };
        message.members = [];
        if (object.members !== undefined && object.members !== null) {
            for (const e of object.members) {
                message.members.push(MemberData.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(ListGuildMembersResponse.$type, ListGuildMembersResponse);
const baseGetGuildMemberRequest = {
    $type: "pylon.discord.v1.cache.GetGuildMemberRequest",
    userId: "0",
};
export const GetGuildMemberRequest = {
    $type: "pylon.discord.v1.cache.GetGuildMemberRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.userId !== "0") {
            writer.uint32(9).fixed64(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetGuildMemberRequest };
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
        const message = { ...baseGetGuildMemberRequest };
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
        const message = { ...baseGetGuildMemberRequest };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildMemberRequest.$type, GetGuildMemberRequest);
const baseGetGuildMemberResponse = {
    $type: "pylon.discord.v1.cache.GetGuildMemberResponse",
};
export const GetGuildMemberResponse = {
    $type: "pylon.discord.v1.cache.GetGuildMemberResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.member !== undefined) {
            MemberData.encode(message.member, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetGuildMemberResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.member = MemberData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetGuildMemberResponse };
        if (object.member !== undefined && object.member !== null) {
            message.member = MemberData.fromJSON(object.member);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.member !== undefined &&
            (obj.member = message.member
                ? MemberData.toJSON(message.member)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetGuildMemberResponse };
        if (object.member !== undefined && object.member !== null) {
            message.member = MemberData.fromPartial(object.member);
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildMemberResponse.$type, GetGuildMemberResponse);
const baseFindGuildMembersRequest = {
    $type: "pylon.discord.v1.cache.FindGuildMembersRequest",
    status: 0,
    limit: 0,
};
export const FindGuildMembersRequest = {
    $type: "pylon.discord.v1.cache.FindGuildMembersRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.name }, writer.uint32(10).fork()).ldelim();
        }
        if (message.prefix !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.prefix }, writer.uint32(18).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        if (message.roleId !== undefined) {
            SnowflakeValue.encode(message.roleId, writer.uint32(34).fork()).ldelim();
        }
        if (message.limit !== 0) {
            writer.uint32(792).uint32(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseFindGuildMembersRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.prefix = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 4:
                    message.roleId = SnowflakeValue.decode(reader, reader.uint32());
                    break;
                case 99:
                    message.limit = reader.uint32();
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
            ...baseFindGuildMembersRequest,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        if (object.prefix !== undefined && object.prefix !== null) {
            message.prefix = String(object.prefix);
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = presenceData_OnlineStatusFromJSON(object.status);
        }
        if (object.roleId !== undefined && object.roleId !== null) {
            message.roleId = SnowflakeValue.fromJSON(object.roleId);
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = Number(object.limit);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.prefix !== undefined && (obj.prefix = message.prefix);
        message.status !== undefined &&
            (obj.status = presenceData_OnlineStatusToJSON(message.status));
        message.roleId !== undefined &&
            (obj.roleId = message.roleId
                ? SnowflakeValue.toJSON(message.roleId)
                : undefined);
        message.limit !== undefined && (obj.limit = message.limit);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseFindGuildMembersRequest,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.prefix !== undefined && object.prefix !== null) {
            message.prefix = object.prefix;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        if (object.roleId !== undefined && object.roleId !== null) {
            message.roleId = SnowflakeValue.fromPartial(object.roleId);
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = object.limit;
        }
        return message;
    },
};
messageTypeRegistry.set(FindGuildMembersRequest.$type, FindGuildMembersRequest);
const baseFindGuildMembersResponse = {
    $type: "pylon.discord.v1.cache.FindGuildMembersResponse",
};
export const FindGuildMembersResponse = {
    $type: "pylon.discord.v1.cache.FindGuildMembersResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.members) {
            MemberData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseFindGuildMembersResponse,
        };
        message.members = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.members.push(MemberData.decode(reader, reader.uint32()));
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
            ...baseFindGuildMembersResponse,
        };
        message.members = [];
        if (object.members !== undefined && object.members !== null) {
            for (const e of object.members) {
                message.members.push(MemberData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.members) {
            obj.members = message.members.map((e) => e ? MemberData.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseFindGuildMembersResponse,
        };
        message.members = [];
        if (object.members !== undefined && object.members !== null) {
            for (const e of object.members) {
                message.members.push(MemberData.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(FindGuildMembersResponse.$type, FindGuildMembersResponse);
const baseGetGuildMemberPresenceRequest = {
    $type: "pylon.discord.v1.cache.GetGuildMemberPresenceRequest",
    userId: "0",
};
export const GetGuildMemberPresenceRequest = {
    $type: "pylon.discord.v1.cache.GetGuildMemberPresenceRequest",
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
            ...baseGetGuildMemberPresenceRequest,
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
            ...baseGetGuildMemberPresenceRequest,
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
            ...baseGetGuildMemberPresenceRequest,
        };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildMemberPresenceRequest.$type, GetGuildMemberPresenceRequest);
const baseGetGuildMemberPresenceResponse = {
    $type: "pylon.discord.v1.cache.GetGuildMemberPresenceResponse",
};
export const GetGuildMemberPresenceResponse = {
    $type: "pylon.discord.v1.cache.GetGuildMemberPresenceResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.presence !== undefined) {
            PresenceData.encode(message.presence, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetGuildMemberPresenceResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.presence = PresenceData.decode(reader, reader.uint32());
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
            ...baseGetGuildMemberPresenceResponse,
        };
        if (object.presence !== undefined && object.presence !== null) {
            message.presence = PresenceData.fromJSON(object.presence);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.presence !== undefined &&
            (obj.presence = message.presence
                ? PresenceData.toJSON(message.presence)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetGuildMemberPresenceResponse,
        };
        if (object.presence !== undefined && object.presence !== null) {
            message.presence = PresenceData.fromPartial(object.presence);
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildMemberPresenceResponse.$type, GetGuildMemberPresenceResponse);
const baseListGuildRolesRequest = {
    $type: "pylon.discord.v1.cache.ListGuildRolesRequest",
};
export const ListGuildRolesRequest = {
    $type: "pylon.discord.v1.cache.ListGuildRolesRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListGuildRolesRequest };
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
        const message = { ...baseListGuildRolesRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseListGuildRolesRequest };
        return message;
    },
};
messageTypeRegistry.set(ListGuildRolesRequest.$type, ListGuildRolesRequest);
const baseListGuildRolesResponse = {
    $type: "pylon.discord.v1.cache.ListGuildRolesResponse",
};
export const ListGuildRolesResponse = {
    $type: "pylon.discord.v1.cache.ListGuildRolesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.roles) {
            RoleData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListGuildRolesResponse };
        message.roles = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.roles.push(RoleData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseListGuildRolesResponse };
        message.roles = [];
        if (object.roles !== undefined && object.roles !== null) {
            for (const e of object.roles) {
                message.roles.push(RoleData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.roles) {
            obj.roles = message.roles.map((e) => e ? RoleData.toJSON(e) : undefined);
        }
        else {
            obj.roles = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListGuildRolesResponse };
        message.roles = [];
        if (object.roles !== undefined && object.roles !== null) {
            for (const e of object.roles) {
                message.roles.push(RoleData.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(ListGuildRolesResponse.$type, ListGuildRolesResponse);
const baseGetGuildRoleRequest = {
    $type: "pylon.discord.v1.cache.GetGuildRoleRequest",
    roleId: "0",
};
export const GetGuildRoleRequest = {
    $type: "pylon.discord.v1.cache.GetGuildRoleRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.roleId !== "0") {
            writer.uint32(9).fixed64(message.roleId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetGuildRoleRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.roleId = longToString(reader.fixed64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetGuildRoleRequest };
        if (object.roleId !== undefined && object.roleId !== null) {
            message.roleId = String(object.roleId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.roleId !== undefined && (obj.roleId = message.roleId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetGuildRoleRequest };
        if (object.roleId !== undefined && object.roleId !== null) {
            message.roleId = object.roleId;
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildRoleRequest.$type, GetGuildRoleRequest);
const baseGetGuildRoleResponse = {
    $type: "pylon.discord.v1.cache.GetGuildRoleResponse",
};
export const GetGuildRoleResponse = {
    $type: "pylon.discord.v1.cache.GetGuildRoleResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.role !== undefined) {
            RoleData.encode(message.role, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetGuildRoleResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.role = RoleData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetGuildRoleResponse };
        if (object.role !== undefined && object.role !== null) {
            message.role = RoleData.fromJSON(object.role);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.role !== undefined &&
            (obj.role = message.role ? RoleData.toJSON(message.role) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetGuildRoleResponse };
        if (object.role !== undefined && object.role !== null) {
            message.role = RoleData.fromPartial(object.role);
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildRoleResponse.$type, GetGuildRoleResponse);
const baseListGuildEmojisRequest = {
    $type: "pylon.discord.v1.cache.ListGuildEmojisRequest",
};
export const ListGuildEmojisRequest = {
    $type: "pylon.discord.v1.cache.ListGuildEmojisRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListGuildEmojisRequest };
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
        const message = { ...baseListGuildEmojisRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseListGuildEmojisRequest };
        return message;
    },
};
messageTypeRegistry.set(ListGuildEmojisRequest.$type, ListGuildEmojisRequest);
const baseListGuildEmojisResponse = {
    $type: "pylon.discord.v1.cache.ListGuildEmojisResponse",
};
export const ListGuildEmojisResponse = {
    $type: "pylon.discord.v1.cache.ListGuildEmojisResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.emojis) {
            EmojiData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListGuildEmojisResponse,
        };
        message.emojis = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.emojis.push(EmojiData.decode(reader, reader.uint32()));
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
            ...baseListGuildEmojisResponse,
        };
        message.emojis = [];
        if (object.emojis !== undefined && object.emojis !== null) {
            for (const e of object.emojis) {
                message.emojis.push(EmojiData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.emojis) {
            obj.emojis = message.emojis.map((e) => e ? EmojiData.toJSON(e) : undefined);
        }
        else {
            obj.emojis = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListGuildEmojisResponse,
        };
        message.emojis = [];
        if (object.emojis !== undefined && object.emojis !== null) {
            for (const e of object.emojis) {
                message.emojis.push(EmojiData.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(ListGuildEmojisResponse.$type, ListGuildEmojisResponse);
const baseGetGuildEmojiRequest = {
    $type: "pylon.discord.v1.cache.GetGuildEmojiRequest",
    emojiId: "0",
};
export const GetGuildEmojiRequest = {
    $type: "pylon.discord.v1.cache.GetGuildEmojiRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.emojiId !== "0") {
            writer.uint32(9).fixed64(message.emojiId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetGuildEmojiRequest };
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
        const message = { ...baseGetGuildEmojiRequest };
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
        const message = { ...baseGetGuildEmojiRequest };
        if (object.emojiId !== undefined && object.emojiId !== null) {
            message.emojiId = object.emojiId;
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildEmojiRequest.$type, GetGuildEmojiRequest);
const baseGetGuildEmojiResponse = {
    $type: "pylon.discord.v1.cache.GetGuildEmojiResponse",
};
export const GetGuildEmojiResponse = {
    $type: "pylon.discord.v1.cache.GetGuildEmojiResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.emoji !== undefined) {
            EmojiData.encode(message.emoji, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetGuildEmojiResponse };
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
        const message = { ...baseGetGuildEmojiResponse };
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
        const message = { ...baseGetGuildEmojiResponse };
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = EmojiData.fromPartial(object.emoji);
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildEmojiResponse.$type, GetGuildEmojiResponse);
const baseGetGuildMemberVoiceStateRequest = {
    $type: "pylon.discord.v1.cache.GetGuildMemberVoiceStateRequest",
    userId: "0",
};
export const GetGuildMemberVoiceStateRequest = {
    $type: "pylon.discord.v1.cache.GetGuildMemberVoiceStateRequest",
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
            ...baseGetGuildMemberVoiceStateRequest,
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
            ...baseGetGuildMemberVoiceStateRequest,
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
            ...baseGetGuildMemberVoiceStateRequest,
        };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildMemberVoiceStateRequest.$type, GetGuildMemberVoiceStateRequest);
const baseGetGuildMemberVoiceStateResponse = {
    $type: "pylon.discord.v1.cache.GetGuildMemberVoiceStateResponse",
};
export const GetGuildMemberVoiceStateResponse = {
    $type: "pylon.discord.v1.cache.GetGuildMemberVoiceStateResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.voiceStateData !== undefined) {
            VoiceStateData.encode(message.voiceStateData, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetGuildMemberVoiceStateResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voiceStateData = VoiceStateData.decode(reader, reader.uint32());
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
            ...baseGetGuildMemberVoiceStateResponse,
        };
        if (object.voiceStateData !== undefined && object.voiceStateData !== null) {
            message.voiceStateData = VoiceStateData.fromJSON(object.voiceStateData);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.voiceStateData !== undefined &&
            (obj.voiceStateData = message.voiceStateData
                ? VoiceStateData.toJSON(message.voiceStateData)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetGuildMemberVoiceStateResponse,
        };
        if (object.voiceStateData !== undefined && object.voiceStateData !== null) {
            message.voiceStateData = VoiceStateData.fromPartial(object.voiceStateData);
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildMemberVoiceStateResponse.$type, GetGuildMemberVoiceStateResponse);
const baseListGuildChannelVoiceStatesRequest = {
    $type: "pylon.discord.v1.cache.ListGuildChannelVoiceStatesRequest",
    channelId: "0",
};
export const ListGuildChannelVoiceStatesRequest = {
    $type: "pylon.discord.v1.cache.ListGuildChannelVoiceStatesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListGuildChannelVoiceStatesRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
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
            ...baseListGuildChannelVoiceStatesRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListGuildChannelVoiceStatesRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        return message;
    },
};
messageTypeRegistry.set(ListGuildChannelVoiceStatesRequest.$type, ListGuildChannelVoiceStatesRequest);
const baseListGuildChannelVoiceStatesResponse = {
    $type: "pylon.discord.v1.cache.ListGuildChannelVoiceStatesResponse",
};
export const ListGuildChannelVoiceStatesResponse = {
    $type: "pylon.discord.v1.cache.ListGuildChannelVoiceStatesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.voiceStatesData) {
            VoiceStateData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListGuildChannelVoiceStatesResponse,
        };
        message.voiceStatesData = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voiceStatesData.push(VoiceStateData.decode(reader, reader.uint32()));
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
            ...baseListGuildChannelVoiceStatesResponse,
        };
        message.voiceStatesData = [];
        if (object.voiceStatesData !== undefined &&
            object.voiceStatesData !== null) {
            for (const e of object.voiceStatesData) {
                message.voiceStatesData.push(VoiceStateData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.voiceStatesData) {
            obj.voiceStatesData = message.voiceStatesData.map((e) => e ? VoiceStateData.toJSON(e) : undefined);
        }
        else {
            obj.voiceStatesData = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListGuildChannelVoiceStatesResponse,
        };
        message.voiceStatesData = [];
        if (object.voiceStatesData !== undefined &&
            object.voiceStatesData !== null) {
            for (const e of object.voiceStatesData) {
                message.voiceStatesData.push(VoiceStateData.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(ListGuildChannelVoiceStatesResponse.$type, ListGuildChannelVoiceStatesResponse);
const baseGetUserRequest = {
    $type: "pylon.discord.v1.cache.GetUserRequest",
    userId: "0",
};
export const GetUserRequest = {
    $type: "pylon.discord.v1.cache.GetUserRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.userId !== "0") {
            writer.uint32(9).fixed64(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetUserRequest };
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
        const message = { ...baseGetUserRequest };
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
        const message = { ...baseGetUserRequest };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        return message;
    },
};
messageTypeRegistry.set(GetUserRequest.$type, GetUserRequest);
const baseGetUserResponse = {
    $type: "pylon.discord.v1.cache.GetUserResponse",
};
export const GetUserResponse = {
    $type: "pylon.discord.v1.cache.GetUserResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.user !== undefined) {
            UserData.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetUserResponse };
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
        const message = { ...baseGetUserResponse };
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
        const message = { ...baseGetUserResponse };
        if (object.user !== undefined && object.user !== null) {
            message.user = UserData.fromPartial(object.user);
        }
        return message;
    },
};
messageTypeRegistry.set(GetUserResponse.$type, GetUserResponse);
function longToString(long) {
    return long.toString();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
