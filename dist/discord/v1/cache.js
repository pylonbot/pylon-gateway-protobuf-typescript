"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserResponse = exports.GetUserRequest = exports.ListGuildChannelVoiceStatesResponse = exports.ListGuildChannelVoiceStatesRequest = exports.GetGuildMemberVoiceStateResponse = exports.GetGuildMemberVoiceStateRequest = exports.GetGuildEmojiResponse = exports.GetGuildEmojiRequest = exports.ListGuildEmojisResponse = exports.ListGuildEmojisRequest = exports.GetGuildRoleResponse = exports.GetGuildRoleRequest = exports.ListGuildRolesResponse = exports.ListGuildRolesRequest = exports.GetGuildMemberPresenceResponse = exports.GetGuildMemberPresenceRequest = exports.FindGuildMembersResponse = exports.FindGuildMembersRequest = exports.GetGuildMemberResponse = exports.GetGuildMemberRequest = exports.ListGuildMembersResponse = exports.ListGuildMembersRequest = exports.GetGuildChannelResponse = exports.GetGuildChannelRequest = exports.ListGuildChannelsResponse = exports.ListGuildChannelsRequest = exports.GetGuildResponse = exports.GetGuildRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const model_1 = require("../../discord/v1/model");
const wrappers_1 = require("../../google/protobuf/wrappers");
exports.protobufPackage = "pylon.discord.v1.cache";
const baseGetGuildRequest = {
    $type: "pylon.discord.v1.cache.GetGuildRequest",
};
exports.GetGuildRequest = {
    $type: "pylon.discord.v1.cache.GetGuildRequest",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.GetGuildRequest.$type, exports.GetGuildRequest);
const baseGetGuildResponse = {
    $type: "pylon.discord.v1.cache.GetGuildResponse",
};
exports.GetGuildResponse = {
    $type: "pylon.discord.v1.cache.GetGuildResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.guild !== undefined) {
            model_1.GuildData.encode(message.guild, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetGuildResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.guild = model_1.GuildData.decode(reader, reader.uint32());
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
            message.guild = model_1.GuildData.fromJSON(object.guild);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.guild !== undefined &&
            (obj.guild = message.guild ? model_1.GuildData.toJSON(message.guild) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetGuildResponse };
        if (object.guild !== undefined && object.guild !== null) {
            message.guild = model_1.GuildData.fromPartial(object.guild);
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetGuildResponse.$type, exports.GetGuildResponse);
const baseListGuildChannelsRequest = {
    $type: "pylon.discord.v1.cache.ListGuildChannelsRequest",
};
exports.ListGuildChannelsRequest = {
    $type: "pylon.discord.v1.cache.ListGuildChannelsRequest",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.ListGuildChannelsRequest.$type, exports.ListGuildChannelsRequest);
const baseListGuildChannelsResponse = {
    $type: "pylon.discord.v1.cache.ListGuildChannelsResponse",
};
exports.ListGuildChannelsResponse = {
    $type: "pylon.discord.v1.cache.ListGuildChannelsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.channels) {
            model_1.ChannelData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListGuildChannelsResponse,
        };
        message.channels = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channels.push(model_1.ChannelData.decode(reader, reader.uint32()));
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
                message.channels.push(model_1.ChannelData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map((e) => e ? model_1.ChannelData.toJSON(e) : undefined);
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
                message.channels.push(model_1.ChannelData.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListGuildChannelsResponse.$type, exports.ListGuildChannelsResponse);
const baseGetGuildChannelRequest = {
    $type: "pylon.discord.v1.cache.GetGuildChannelRequest",
    channelId: "0",
};
exports.GetGuildChannelRequest = {
    $type: "pylon.discord.v1.cache.GetGuildChannelRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.GetGuildChannelRequest.$type, exports.GetGuildChannelRequest);
const baseGetGuildChannelResponse = {
    $type: "pylon.discord.v1.cache.GetGuildChannelResponse",
};
exports.GetGuildChannelResponse = {
    $type: "pylon.discord.v1.cache.GetGuildChannelResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.channel !== undefined) {
            model_1.ChannelData.encode(message.channel, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetGuildChannelResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channel = model_1.ChannelData.decode(reader, reader.uint32());
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
            message.channel = model_1.ChannelData.fromJSON(object.channel);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channel !== undefined &&
            (obj.channel = message.channel
                ? model_1.ChannelData.toJSON(message.channel)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetGuildChannelResponse,
        };
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = model_1.ChannelData.fromPartial(object.channel);
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetGuildChannelResponse.$type, exports.GetGuildChannelResponse);
const baseListGuildMembersRequest = {
    $type: "pylon.discord.v1.cache.ListGuildMembersRequest",
    after: "0",
    limit: 0,
};
exports.ListGuildMembersRequest = {
    $type: "pylon.discord.v1.cache.ListGuildMembersRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.after !== "0") {
            writer.uint32(9).fixed64(message.after);
        }
        if (message.limit !== 0) {
            writer.uint32(16).uint32(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.ListGuildMembersRequest.$type, exports.ListGuildMembersRequest);
const baseListGuildMembersResponse = {
    $type: "pylon.discord.v1.cache.ListGuildMembersResponse",
};
exports.ListGuildMembersResponse = {
    $type: "pylon.discord.v1.cache.ListGuildMembersResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.members) {
            model_1.MemberData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListGuildMembersResponse,
        };
        message.members = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.members.push(model_1.MemberData.decode(reader, reader.uint32()));
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
                message.members.push(model_1.MemberData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.members) {
            obj.members = message.members.map((e) => e ? model_1.MemberData.toJSON(e) : undefined);
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
                message.members.push(model_1.MemberData.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListGuildMembersResponse.$type, exports.ListGuildMembersResponse);
const baseGetGuildMemberRequest = {
    $type: "pylon.discord.v1.cache.GetGuildMemberRequest",
    userId: "0",
};
exports.GetGuildMemberRequest = {
    $type: "pylon.discord.v1.cache.GetGuildMemberRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "0") {
            writer.uint32(9).fixed64(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.GetGuildMemberRequest.$type, exports.GetGuildMemberRequest);
const baseGetGuildMemberResponse = {
    $type: "pylon.discord.v1.cache.GetGuildMemberResponse",
};
exports.GetGuildMemberResponse = {
    $type: "pylon.discord.v1.cache.GetGuildMemberResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.member !== undefined) {
            model_1.MemberData.encode(message.member, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetGuildMemberResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.member = model_1.MemberData.decode(reader, reader.uint32());
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
            message.member = model_1.MemberData.fromJSON(object.member);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.member !== undefined &&
            (obj.member = message.member
                ? model_1.MemberData.toJSON(message.member)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetGuildMemberResponse };
        if (object.member !== undefined && object.member !== null) {
            message.member = model_1.MemberData.fromPartial(object.member);
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetGuildMemberResponse.$type, exports.GetGuildMemberResponse);
const baseFindGuildMembersRequest = {
    $type: "pylon.discord.v1.cache.FindGuildMembersRequest",
    status: 0,
    limit: 0,
};
exports.FindGuildMembersRequest = {
    $type: "pylon.discord.v1.cache.FindGuildMembersRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined) {
            wrappers_1.StringValue.encode({ $type: "google.protobuf.StringValue", value: message.name }, writer.uint32(10).fork()).ldelim();
        }
        if (message.prefix !== undefined) {
            wrappers_1.StringValue.encode({ $type: "google.protobuf.StringValue", value: message.prefix }, writer.uint32(18).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        if (message.roleId !== undefined) {
            model_1.SnowflakeValue.encode(message.roleId, writer.uint32(34).fork()).ldelim();
        }
        if (message.limit !== 0) {
            writer.uint32(792).uint32(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseFindGuildMembersRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = wrappers_1.StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.prefix = wrappers_1.StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 4:
                    message.roleId = model_1.SnowflakeValue.decode(reader, reader.uint32());
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
            message.status = model_1.presenceData_OnlineStatusFromJSON(object.status);
        }
        if (object.roleId !== undefined && object.roleId !== null) {
            message.roleId = model_1.SnowflakeValue.fromJSON(object.roleId);
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
            (obj.status = model_1.presenceData_OnlineStatusToJSON(message.status));
        message.roleId !== undefined &&
            (obj.roleId = message.roleId
                ? model_1.SnowflakeValue.toJSON(message.roleId)
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
            message.roleId = model_1.SnowflakeValue.fromPartial(object.roleId);
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = object.limit;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.FindGuildMembersRequest.$type, exports.FindGuildMembersRequest);
const baseFindGuildMembersResponse = {
    $type: "pylon.discord.v1.cache.FindGuildMembersResponse",
};
exports.FindGuildMembersResponse = {
    $type: "pylon.discord.v1.cache.FindGuildMembersResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.members) {
            model_1.MemberData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseFindGuildMembersResponse,
        };
        message.members = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.members.push(model_1.MemberData.decode(reader, reader.uint32()));
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
                message.members.push(model_1.MemberData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.members) {
            obj.members = message.members.map((e) => e ? model_1.MemberData.toJSON(e) : undefined);
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
                message.members.push(model_1.MemberData.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.FindGuildMembersResponse.$type, exports.FindGuildMembersResponse);
const baseGetGuildMemberPresenceRequest = {
    $type: "pylon.discord.v1.cache.GetGuildMemberPresenceRequest",
    userId: "0",
};
exports.GetGuildMemberPresenceRequest = {
    $type: "pylon.discord.v1.cache.GetGuildMemberPresenceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "0") {
            writer.uint32(9).fixed64(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.GetGuildMemberPresenceRequest.$type, exports.GetGuildMemberPresenceRequest);
const baseGetGuildMemberPresenceResponse = {
    $type: "pylon.discord.v1.cache.GetGuildMemberPresenceResponse",
};
exports.GetGuildMemberPresenceResponse = {
    $type: "pylon.discord.v1.cache.GetGuildMemberPresenceResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.presence !== undefined) {
            model_1.PresenceData.encode(message.presence, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetGuildMemberPresenceResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.presence = model_1.PresenceData.decode(reader, reader.uint32());
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
            message.presence = model_1.PresenceData.fromJSON(object.presence);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.presence !== undefined &&
            (obj.presence = message.presence
                ? model_1.PresenceData.toJSON(message.presence)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetGuildMemberPresenceResponse,
        };
        if (object.presence !== undefined && object.presence !== null) {
            message.presence = model_1.PresenceData.fromPartial(object.presence);
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetGuildMemberPresenceResponse.$type, exports.GetGuildMemberPresenceResponse);
const baseListGuildRolesRequest = {
    $type: "pylon.discord.v1.cache.ListGuildRolesRequest",
};
exports.ListGuildRolesRequest = {
    $type: "pylon.discord.v1.cache.ListGuildRolesRequest",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.ListGuildRolesRequest.$type, exports.ListGuildRolesRequest);
const baseListGuildRolesResponse = {
    $type: "pylon.discord.v1.cache.ListGuildRolesResponse",
};
exports.ListGuildRolesResponse = {
    $type: "pylon.discord.v1.cache.ListGuildRolesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.roles) {
            model_1.RoleData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListGuildRolesResponse };
        message.roles = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.roles.push(model_1.RoleData.decode(reader, reader.uint32()));
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
                message.roles.push(model_1.RoleData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.roles) {
            obj.roles = message.roles.map((e) => e ? model_1.RoleData.toJSON(e) : undefined);
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
                message.roles.push(model_1.RoleData.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListGuildRolesResponse.$type, exports.ListGuildRolesResponse);
const baseGetGuildRoleRequest = {
    $type: "pylon.discord.v1.cache.GetGuildRoleRequest",
    roleId: "0",
};
exports.GetGuildRoleRequest = {
    $type: "pylon.discord.v1.cache.GetGuildRoleRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.roleId !== "0") {
            writer.uint32(9).fixed64(message.roleId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.GetGuildRoleRequest.$type, exports.GetGuildRoleRequest);
const baseGetGuildRoleResponse = {
    $type: "pylon.discord.v1.cache.GetGuildRoleResponse",
};
exports.GetGuildRoleResponse = {
    $type: "pylon.discord.v1.cache.GetGuildRoleResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.role !== undefined) {
            model_1.RoleData.encode(message.role, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetGuildRoleResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.role = model_1.RoleData.decode(reader, reader.uint32());
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
            message.role = model_1.RoleData.fromJSON(object.role);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.role !== undefined &&
            (obj.role = message.role ? model_1.RoleData.toJSON(message.role) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetGuildRoleResponse };
        if (object.role !== undefined && object.role !== null) {
            message.role = model_1.RoleData.fromPartial(object.role);
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetGuildRoleResponse.$type, exports.GetGuildRoleResponse);
const baseListGuildEmojisRequest = {
    $type: "pylon.discord.v1.cache.ListGuildEmojisRequest",
};
exports.ListGuildEmojisRequest = {
    $type: "pylon.discord.v1.cache.ListGuildEmojisRequest",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.ListGuildEmojisRequest.$type, exports.ListGuildEmojisRequest);
const baseListGuildEmojisResponse = {
    $type: "pylon.discord.v1.cache.ListGuildEmojisResponse",
};
exports.ListGuildEmojisResponse = {
    $type: "pylon.discord.v1.cache.ListGuildEmojisResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.emojis) {
            model_1.EmojiData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListGuildEmojisResponse,
        };
        message.emojis = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.emojis.push(model_1.EmojiData.decode(reader, reader.uint32()));
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
                message.emojis.push(model_1.EmojiData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.emojis) {
            obj.emojis = message.emojis.map((e) => e ? model_1.EmojiData.toJSON(e) : undefined);
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
                message.emojis.push(model_1.EmojiData.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListGuildEmojisResponse.$type, exports.ListGuildEmojisResponse);
const baseGetGuildEmojiRequest = {
    $type: "pylon.discord.v1.cache.GetGuildEmojiRequest",
    emojiId: "0",
};
exports.GetGuildEmojiRequest = {
    $type: "pylon.discord.v1.cache.GetGuildEmojiRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.emojiId !== "0") {
            writer.uint32(9).fixed64(message.emojiId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.GetGuildEmojiRequest.$type, exports.GetGuildEmojiRequest);
const baseGetGuildEmojiResponse = {
    $type: "pylon.discord.v1.cache.GetGuildEmojiResponse",
};
exports.GetGuildEmojiResponse = {
    $type: "pylon.discord.v1.cache.GetGuildEmojiResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.emoji !== undefined) {
            model_1.EmojiData.encode(message.emoji, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetGuildEmojiResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.emoji = model_1.EmojiData.decode(reader, reader.uint32());
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
            message.emoji = model_1.EmojiData.fromJSON(object.emoji);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.emoji !== undefined &&
            (obj.emoji = message.emoji ? model_1.EmojiData.toJSON(message.emoji) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetGuildEmojiResponse };
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = model_1.EmojiData.fromPartial(object.emoji);
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetGuildEmojiResponse.$type, exports.GetGuildEmojiResponse);
const baseGetGuildMemberVoiceStateRequest = {
    $type: "pylon.discord.v1.cache.GetGuildMemberVoiceStateRequest",
    userId: "0",
};
exports.GetGuildMemberVoiceStateRequest = {
    $type: "pylon.discord.v1.cache.GetGuildMemberVoiceStateRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "0") {
            writer.uint32(9).fixed64(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.GetGuildMemberVoiceStateRequest.$type, exports.GetGuildMemberVoiceStateRequest);
const baseGetGuildMemberVoiceStateResponse = {
    $type: "pylon.discord.v1.cache.GetGuildMemberVoiceStateResponse",
};
exports.GetGuildMemberVoiceStateResponse = {
    $type: "pylon.discord.v1.cache.GetGuildMemberVoiceStateResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.voiceStateData !== undefined) {
            model_1.VoiceStateData.encode(message.voiceStateData, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetGuildMemberVoiceStateResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voiceStateData = model_1.VoiceStateData.decode(reader, reader.uint32());
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
            message.voiceStateData = model_1.VoiceStateData.fromJSON(object.voiceStateData);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.voiceStateData !== undefined &&
            (obj.voiceStateData = message.voiceStateData
                ? model_1.VoiceStateData.toJSON(message.voiceStateData)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetGuildMemberVoiceStateResponse,
        };
        if (object.voiceStateData !== undefined && object.voiceStateData !== null) {
            message.voiceStateData = model_1.VoiceStateData.fromPartial(object.voiceStateData);
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetGuildMemberVoiceStateResponse.$type, exports.GetGuildMemberVoiceStateResponse);
const baseListGuildChannelVoiceStatesRequest = {
    $type: "pylon.discord.v1.cache.ListGuildChannelVoiceStatesRequest",
    channelId: "0",
};
exports.ListGuildChannelVoiceStatesRequest = {
    $type: "pylon.discord.v1.cache.ListGuildChannelVoiceStatesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.ListGuildChannelVoiceStatesRequest.$type, exports.ListGuildChannelVoiceStatesRequest);
const baseListGuildChannelVoiceStatesResponse = {
    $type: "pylon.discord.v1.cache.ListGuildChannelVoiceStatesResponse",
};
exports.ListGuildChannelVoiceStatesResponse = {
    $type: "pylon.discord.v1.cache.ListGuildChannelVoiceStatesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.voiceStatesData) {
            model_1.VoiceStateData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListGuildChannelVoiceStatesResponse,
        };
        message.voiceStatesData = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voiceStatesData.push(model_1.VoiceStateData.decode(reader, reader.uint32()));
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
                message.voiceStatesData.push(model_1.VoiceStateData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.voiceStatesData) {
            obj.voiceStatesData = message.voiceStatesData.map((e) => e ? model_1.VoiceStateData.toJSON(e) : undefined);
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
                message.voiceStatesData.push(model_1.VoiceStateData.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListGuildChannelVoiceStatesResponse.$type, exports.ListGuildChannelVoiceStatesResponse);
const baseGetUserRequest = {
    $type: "pylon.discord.v1.cache.GetUserRequest",
    userId: "0",
};
exports.GetUserRequest = {
    $type: "pylon.discord.v1.cache.GetUserRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "0") {
            writer.uint32(9).fixed64(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.GetUserRequest.$type, exports.GetUserRequest);
const baseGetUserResponse = {
    $type: "pylon.discord.v1.cache.GetUserResponse",
};
exports.GetUserResponse = {
    $type: "pylon.discord.v1.cache.GetUserResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.user !== undefined) {
            model_1.UserData.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetUserResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.user = model_1.UserData.decode(reader, reader.uint32());
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
            message.user = model_1.UserData.fromJSON(object.user);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.user !== undefined &&
            (obj.user = message.user ? model_1.UserData.toJSON(message.user) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetUserResponse };
        if (object.user !== undefined && object.user !== null) {
            message.user = model_1.UserData.fromPartial(object.user);
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetUserResponse.$type, exports.GetUserResponse);
function longToString(long) {
    return long.toString();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
