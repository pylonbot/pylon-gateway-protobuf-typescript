/* eslint-disable */
import { messageTypeRegistry } from "../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { SnowflakeValue, GuildData, ChannelData_ChannelPermissionOverwriteData, ChannelData, SnowflakeListValue, GuildBanData, PermissionsValue, RoleData, InviteData, MessageData, MessageData_MessageEmbedData, EmojiData, UserData, channelData_ChannelTypeFromJSON, channelData_ChannelTypeToJSON, channelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteTypeFromJSON, channelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteTypeToJSON, inviteData_InviteTargetUserTypeFromJSON, inviteData_InviteTargetUserTypeToJSON, } from "../../discord/v1/model";
import { Empty } from "../../google/protobuf/empty";
import { StringValue, UInt32Value, BytesValue, BoolValue, } from "../../google/protobuf/wrappers";
export const protobufPackage = "pylon.discord.v1.rest";
const baseRestError = { $type: "pylon.discord.v1.rest.RestError" };
export const RestError = {
    $type: "pylon.discord.v1.rest.RestError",
    encode(message, writer = _m0.Writer.create()) {
        if (message.errorType?.$case === "unknownError") {
            RestError_UnknownError.encode(message.errorType.unknownError, writer.uint32(10).fork()).ldelim();
        }
        if (message.errorType?.$case === "validationError") {
            RestError_ValidationError.encode(message.errorType.validationError, writer.uint32(18).fork()).ldelim();
        }
        if (message.errorType?.$case === "resourceNotFound") {
            RestError_ResourceNotFound.encode(message.errorType.resourceNotFound, writer.uint32(26).fork()).ldelim();
        }
        if (message.errorType?.$case === "accessDenied") {
            RestError_AccessDenied.encode(message.errorType.accessDenied, writer.uint32(34).fork()).ldelim();
        }
        if (message.errorType?.$case === "rateLimited") {
            RestError_RateLimited.encode(message.errorType.rateLimited, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRestError };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.errorType = {
                        $case: "unknownError",
                        unknownError: RestError_UnknownError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.errorType = {
                        $case: "validationError",
                        validationError: RestError_ValidationError.decode(reader, reader.uint32()),
                    };
                    break;
                case 3:
                    message.errorType = {
                        $case: "resourceNotFound",
                        resourceNotFound: RestError_ResourceNotFound.decode(reader, reader.uint32()),
                    };
                    break;
                case 4:
                    message.errorType = {
                        $case: "accessDenied",
                        accessDenied: RestError_AccessDenied.decode(reader, reader.uint32()),
                    };
                    break;
                case 5:
                    message.errorType = {
                        $case: "rateLimited",
                        rateLimited: RestError_RateLimited.decode(reader, reader.uint32()),
                    };
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRestError };
        if (object.unknownError !== undefined && object.unknownError !== null) {
            message.errorType = {
                $case: "unknownError",
                unknownError: RestError_UnknownError.fromJSON(object.unknownError),
            };
        }
        if (object.validationError !== undefined &&
            object.validationError !== null) {
            message.errorType = {
                $case: "validationError",
                validationError: RestError_ValidationError.fromJSON(object.validationError),
            };
        }
        if (object.resourceNotFound !== undefined &&
            object.resourceNotFound !== null) {
            message.errorType = {
                $case: "resourceNotFound",
                resourceNotFound: RestError_ResourceNotFound.fromJSON(object.resourceNotFound),
            };
        }
        if (object.accessDenied !== undefined && object.accessDenied !== null) {
            message.errorType = {
                $case: "accessDenied",
                accessDenied: RestError_AccessDenied.fromJSON(object.accessDenied),
            };
        }
        if (object.rateLimited !== undefined && object.rateLimited !== null) {
            message.errorType = {
                $case: "rateLimited",
                rateLimited: RestError_RateLimited.fromJSON(object.rateLimited),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.errorType?.$case === "unknownError" &&
            (obj.unknownError = message.errorType?.unknownError
                ? RestError_UnknownError.toJSON(message.errorType?.unknownError)
                : undefined);
        message.errorType?.$case === "validationError" &&
            (obj.validationError = message.errorType?.validationError
                ? RestError_ValidationError.toJSON(message.errorType?.validationError)
                : undefined);
        message.errorType?.$case === "resourceNotFound" &&
            (obj.resourceNotFound = message.errorType?.resourceNotFound
                ? RestError_ResourceNotFound.toJSON(message.errorType?.resourceNotFound)
                : undefined);
        message.errorType?.$case === "accessDenied" &&
            (obj.accessDenied = message.errorType?.accessDenied
                ? RestError_AccessDenied.toJSON(message.errorType?.accessDenied)
                : undefined);
        message.errorType?.$case === "rateLimited" &&
            (obj.rateLimited = message.errorType?.rateLimited
                ? RestError_RateLimited.toJSON(message.errorType?.rateLimited)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRestError };
        if (object.errorType?.$case === "unknownError" &&
            object.errorType?.unknownError !== undefined &&
            object.errorType?.unknownError !== null) {
            message.errorType = {
                $case: "unknownError",
                unknownError: RestError_UnknownError.fromPartial(object.errorType.unknownError),
            };
        }
        if (object.errorType?.$case === "validationError" &&
            object.errorType?.validationError !== undefined &&
            object.errorType?.validationError !== null) {
            message.errorType = {
                $case: "validationError",
                validationError: RestError_ValidationError.fromPartial(object.errorType.validationError),
            };
        }
        if (object.errorType?.$case === "resourceNotFound" &&
            object.errorType?.resourceNotFound !== undefined &&
            object.errorType?.resourceNotFound !== null) {
            message.errorType = {
                $case: "resourceNotFound",
                resourceNotFound: RestError_ResourceNotFound.fromPartial(object.errorType.resourceNotFound),
            };
        }
        if (object.errorType?.$case === "accessDenied" &&
            object.errorType?.accessDenied !== undefined &&
            object.errorType?.accessDenied !== null) {
            message.errorType = {
                $case: "accessDenied",
                accessDenied: RestError_AccessDenied.fromPartial(object.errorType.accessDenied),
            };
        }
        if (object.errorType?.$case === "rateLimited" &&
            object.errorType?.rateLimited !== undefined &&
            object.errorType?.rateLimited !== null) {
            message.errorType = {
                $case: "rateLimited",
                rateLimited: RestError_RateLimited.fromPartial(object.errorType.rateLimited),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(RestError.$type, RestError);
const baseRestError_UnknownError = {
    $type: "pylon.discord.v1.rest.RestError.UnknownError",
    httpStatus: 0,
    code: 0,
    message: "",
};
export const RestError_UnknownError = {
    $type: "pylon.discord.v1.rest.RestError.UnknownError",
    encode(message, writer = _m0.Writer.create()) {
        if (message.httpStatus !== 0) {
            writer.uint32(8).uint32(message.httpStatus);
        }
        if (message.code !== 0) {
            writer.uint32(16).uint32(message.code);
        }
        if (message.message !== "") {
            writer.uint32(26).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRestError_UnknownError };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpStatus = reader.uint32();
                    break;
                case 2:
                    message.code = reader.uint32();
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRestError_UnknownError };
        if (object.httpStatus !== undefined && object.httpStatus !== null) {
            message.httpStatus = Number(object.httpStatus);
        }
        if (object.code !== undefined && object.code !== null) {
            message.code = Number(object.code);
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = String(object.message);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpStatus !== undefined && (obj.httpStatus = message.httpStatus);
        message.code !== undefined && (obj.code = message.code);
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRestError_UnknownError };
        if (object.httpStatus !== undefined && object.httpStatus !== null) {
            message.httpStatus = object.httpStatus;
        }
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        return message;
    },
};
messageTypeRegistry.set(RestError_UnknownError.$type, RestError_UnknownError);
const baseRestError_ValidationError = {
    $type: "pylon.discord.v1.rest.RestError.ValidationError",
    message: "",
};
export const RestError_ValidationError = {
    $type: "pylon.discord.v1.rest.RestError.ValidationError",
    encode(message, writer = _m0.Writer.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        for (const v of message.fields) {
            RestError_ValidationError_Field.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRestError_ValidationError,
        };
        message.fields = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    message.fields.push(RestError_ValidationError_Field.decode(reader, reader.uint32()));
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
            ...baseRestError_ValidationError,
        };
        message.fields = [];
        if (object.message !== undefined && object.message !== null) {
            message.message = String(object.message);
        }
        if (object.fields !== undefined && object.fields !== null) {
            for (const e of object.fields) {
                message.fields.push(RestError_ValidationError_Field.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        if (message.fields) {
            obj.fields = message.fields.map((e) => e ? RestError_ValidationError_Field.toJSON(e) : undefined);
        }
        else {
            obj.fields = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRestError_ValidationError,
        };
        message.fields = [];
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        if (object.fields !== undefined && object.fields !== null) {
            for (const e of object.fields) {
                message.fields.push(RestError_ValidationError_Field.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(RestError_ValidationError.$type, RestError_ValidationError);
const baseRestError_ValidationError_Field = {
    $type: "pylon.discord.v1.rest.RestError.ValidationError.Field",
    path: "",
    code: "",
    message: "",
};
export const RestError_ValidationError_Field = {
    $type: "pylon.discord.v1.rest.RestError.ValidationError.Field",
    encode(message, writer = _m0.Writer.create()) {
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        if (message.code !== "") {
            writer.uint32(18).string(message.code);
        }
        if (message.message !== "") {
            writer.uint32(26).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRestError_ValidationError_Field,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                case 2:
                    message.code = reader.string();
                    break;
                case 3:
                    message.message = reader.string();
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
            ...baseRestError_ValidationError_Field,
        };
        if (object.path !== undefined && object.path !== null) {
            message.path = String(object.path);
        }
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = String(object.message);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = message.path);
        message.code !== undefined && (obj.code = message.code);
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRestError_ValidationError_Field,
        };
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        }
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        return message;
    },
};
messageTypeRegistry.set(RestError_ValidationError_Field.$type, RestError_ValidationError_Field);
const baseRestError_ResourceNotFound = {
    $type: "pylon.discord.v1.rest.RestError.ResourceNotFound",
    code: 0,
    message: "",
};
export const RestError_ResourceNotFound = {
    $type: "pylon.discord.v1.rest.RestError.ResourceNotFound",
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRestError_ResourceNotFound,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.message = reader.string();
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
            ...baseRestError_ResourceNotFound,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = Number(object.code);
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = String(object.message);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRestError_ResourceNotFound,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        return message;
    },
};
messageTypeRegistry.set(RestError_ResourceNotFound.$type, RestError_ResourceNotFound);
const baseRestError_AccessDenied = {
    $type: "pylon.discord.v1.rest.RestError.AccessDenied",
    code: 0,
    message: "",
};
export const RestError_AccessDenied = {
    $type: "pylon.discord.v1.rest.RestError.AccessDenied",
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRestError_AccessDenied };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRestError_AccessDenied };
        if (object.code !== undefined && object.code !== null) {
            message.code = Number(object.code);
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = String(object.message);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRestError_AccessDenied };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        return message;
    },
};
messageTypeRegistry.set(RestError_AccessDenied.$type, RestError_AccessDenied);
const baseRestError_RateLimited = {
    $type: "pylon.discord.v1.rest.RestError.RateLimited",
    global: false,
    retryAt: 0,
};
export const RestError_RateLimited = {
    $type: "pylon.discord.v1.rest.RestError.RateLimited",
    encode(message, writer = _m0.Writer.create()) {
        if (message.global === true) {
            writer.uint32(8).bool(message.global);
        }
        if (message.retryAt !== 0) {
            writer.uint32(16).uint32(message.retryAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRestError_RateLimited };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.global = reader.bool();
                    break;
                case 2:
                    message.retryAt = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRestError_RateLimited };
        if (object.global !== undefined && object.global !== null) {
            message.global = Boolean(object.global);
        }
        if (object.retryAt !== undefined && object.retryAt !== null) {
            message.retryAt = Number(object.retryAt);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.global !== undefined && (obj.global = message.global);
        message.retryAt !== undefined && (obj.retryAt = message.retryAt);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRestError_RateLimited };
        if (object.global !== undefined && object.global !== null) {
            message.global = object.global;
        }
        if (object.retryAt !== undefined && object.retryAt !== null) {
            message.retryAt = object.retryAt;
        }
        return message;
    },
};
messageTypeRegistry.set(RestError_RateLimited.$type, RestError_RateLimited);
const baseModifyGuildRequest = {
    $type: "pylon.discord.v1.rest.ModifyGuildRequest",
};
export const ModifyGuildRequest = {
    $type: "pylon.discord.v1.rest.ModifyGuildRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.name }, writer.uint32(10).fork()).ldelim();
        }
        if (message.region !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.region }, writer.uint32(18).fork()).ldelim();
        }
        if (message.verificationLevel !== undefined) {
            UInt32Value.encode({
                $type: "google.protobuf.UInt32Value",
                value: message.verificationLevel,
            }, writer.uint32(26).fork()).ldelim();
        }
        if (message.defaultMessageNotifications !== undefined) {
            UInt32Value.encode({
                $type: "google.protobuf.UInt32Value",
                value: message.defaultMessageNotifications,
            }, writer.uint32(34).fork()).ldelim();
        }
        if (message.explicitContentFilter !== undefined) {
            UInt32Value.encode({
                $type: "google.protobuf.UInt32Value",
                value: message.explicitContentFilter,
            }, writer.uint32(42).fork()).ldelim();
        }
        if (message.afkChannelId !== undefined) {
            SnowflakeValue.encode(message.afkChannelId, writer.uint32(50).fork()).ldelim();
        }
        if (message.afkTimeout !== undefined) {
            UInt32Value.encode({ $type: "google.protobuf.UInt32Value", value: message.afkTimeout }, writer.uint32(58).fork()).ldelim();
        }
        if (message.icon !== undefined) {
            BytesValue.encode({ $type: "google.protobuf.BytesValue", value: message.icon }, writer.uint32(66).fork()).ldelim();
        }
        if (message.ownerId !== undefined) {
            SnowflakeValue.encode(message.ownerId, writer.uint32(74).fork()).ldelim();
        }
        if (message.splash !== undefined) {
            BytesValue.encode({ $type: "google.protobuf.BytesValue", value: message.splash }, writer.uint32(82).fork()).ldelim();
        }
        if (message.banner !== undefined) {
            BytesValue.encode({ $type: "google.protobuf.BytesValue", value: message.banner }, writer.uint32(90).fork()).ldelim();
        }
        if (message.systemChannelId !== undefined) {
            SnowflakeValue.encode(message.systemChannelId, writer.uint32(98).fork()).ldelim();
        }
        if (message.rulesChannelId !== undefined) {
            SnowflakeValue.encode(message.rulesChannelId, writer.uint32(106).fork()).ldelim();
        }
        if (message.publicUpdatesChannelId !== undefined) {
            SnowflakeValue.encode(message.publicUpdatesChannelId, writer.uint32(114).fork()).ldelim();
        }
        if (message.preferredLocale !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.preferredLocale,
            }, writer.uint32(122).fork()).ldelim();
        }
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseModifyGuildRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.region = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.verificationLevel = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.defaultMessageNotifications = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.explicitContentFilter = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.afkChannelId = SnowflakeValue.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.afkTimeout = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.icon = BytesValue.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.ownerId = SnowflakeValue.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.splash = BytesValue.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.banner = BytesValue.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.systemChannelId = SnowflakeValue.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.rulesChannelId = SnowflakeValue.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.publicUpdatesChannelId = SnowflakeValue.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.preferredLocale = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseModifyGuildRequest };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        if (object.region !== undefined && object.region !== null) {
            message.region = String(object.region);
        }
        if (object.verificationLevel !== undefined &&
            object.verificationLevel !== null) {
            message.verificationLevel = Number(object.verificationLevel);
        }
        if (object.defaultMessageNotifications !== undefined &&
            object.defaultMessageNotifications !== null) {
            message.defaultMessageNotifications = Number(object.defaultMessageNotifications);
        }
        if (object.explicitContentFilter !== undefined &&
            object.explicitContentFilter !== null) {
            message.explicitContentFilter = Number(object.explicitContentFilter);
        }
        if (object.afkChannelId !== undefined && object.afkChannelId !== null) {
            message.afkChannelId = SnowflakeValue.fromJSON(object.afkChannelId);
        }
        if (object.afkTimeout !== undefined && object.afkTimeout !== null) {
            message.afkTimeout = Number(object.afkTimeout);
        }
        if (object.icon !== undefined && object.icon !== null) {
            message.icon = new Uint8Array(object.icon);
        }
        if (object.ownerId !== undefined && object.ownerId !== null) {
            message.ownerId = SnowflakeValue.fromJSON(object.ownerId);
        }
        if (object.splash !== undefined && object.splash !== null) {
            message.splash = new Uint8Array(object.splash);
        }
        if (object.banner !== undefined && object.banner !== null) {
            message.banner = new Uint8Array(object.banner);
        }
        if (object.systemChannelId !== undefined &&
            object.systemChannelId !== null) {
            message.systemChannelId = SnowflakeValue.fromJSON(object.systemChannelId);
        }
        if (object.rulesChannelId !== undefined && object.rulesChannelId !== null) {
            message.rulesChannelId = SnowflakeValue.fromJSON(object.rulesChannelId);
        }
        if (object.publicUpdatesChannelId !== undefined &&
            object.publicUpdatesChannelId !== null) {
            message.publicUpdatesChannelId = SnowflakeValue.fromJSON(object.publicUpdatesChannelId);
        }
        if (object.preferredLocale !== undefined &&
            object.preferredLocale !== null) {
            message.preferredLocale = String(object.preferredLocale);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.region !== undefined && (obj.region = message.region);
        message.verificationLevel !== undefined &&
            (obj.verificationLevel = message.verificationLevel);
        message.defaultMessageNotifications !== undefined &&
            (obj.defaultMessageNotifications = message.defaultMessageNotifications);
        message.explicitContentFilter !== undefined &&
            (obj.explicitContentFilter = message.explicitContentFilter);
        message.afkChannelId !== undefined &&
            (obj.afkChannelId = message.afkChannelId
                ? SnowflakeValue.toJSON(message.afkChannelId)
                : undefined);
        message.afkTimeout !== undefined && (obj.afkTimeout = message.afkTimeout);
        message.icon !== undefined && (obj.icon = message.icon);
        message.ownerId !== undefined &&
            (obj.ownerId = message.ownerId
                ? SnowflakeValue.toJSON(message.ownerId)
                : undefined);
        message.splash !== undefined && (obj.splash = message.splash);
        message.banner !== undefined && (obj.banner = message.banner);
        message.systemChannelId !== undefined &&
            (obj.systemChannelId = message.systemChannelId
                ? SnowflakeValue.toJSON(message.systemChannelId)
                : undefined);
        message.rulesChannelId !== undefined &&
            (obj.rulesChannelId = message.rulesChannelId
                ? SnowflakeValue.toJSON(message.rulesChannelId)
                : undefined);
        message.publicUpdatesChannelId !== undefined &&
            (obj.publicUpdatesChannelId = message.publicUpdatesChannelId
                ? SnowflakeValue.toJSON(message.publicUpdatesChannelId)
                : undefined);
        message.preferredLocale !== undefined &&
            (obj.preferredLocale = message.preferredLocale);
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseModifyGuildRequest };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.region !== undefined && object.region !== null) {
            message.region = object.region;
        }
        if (object.verificationLevel !== undefined &&
            object.verificationLevel !== null) {
            message.verificationLevel = object.verificationLevel;
        }
        if (object.defaultMessageNotifications !== undefined &&
            object.defaultMessageNotifications !== null) {
            message.defaultMessageNotifications = object.defaultMessageNotifications;
        }
        if (object.explicitContentFilter !== undefined &&
            object.explicitContentFilter !== null) {
            message.explicitContentFilter = object.explicitContentFilter;
        }
        if (object.afkChannelId !== undefined && object.afkChannelId !== null) {
            message.afkChannelId = SnowflakeValue.fromPartial(object.afkChannelId);
        }
        if (object.afkTimeout !== undefined && object.afkTimeout !== null) {
            message.afkTimeout = object.afkTimeout;
        }
        if (object.icon !== undefined && object.icon !== null) {
            message.icon = object.icon;
        }
        if (object.ownerId !== undefined && object.ownerId !== null) {
            message.ownerId = SnowflakeValue.fromPartial(object.ownerId);
        }
        if (object.splash !== undefined && object.splash !== null) {
            message.splash = object.splash;
        }
        if (object.banner !== undefined && object.banner !== null) {
            message.banner = object.banner;
        }
        if (object.systemChannelId !== undefined &&
            object.systemChannelId !== null) {
            message.systemChannelId = SnowflakeValue.fromPartial(object.systemChannelId);
        }
        if (object.rulesChannelId !== undefined && object.rulesChannelId !== null) {
            message.rulesChannelId = SnowflakeValue.fromPartial(object.rulesChannelId);
        }
        if (object.publicUpdatesChannelId !== undefined &&
            object.publicUpdatesChannelId !== null) {
            message.publicUpdatesChannelId = SnowflakeValue.fromPartial(object.publicUpdatesChannelId);
        }
        if (object.preferredLocale !== undefined &&
            object.preferredLocale !== null) {
            message.preferredLocale = object.preferredLocale;
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyGuildRequest.$type, ModifyGuildRequest);
const baseModifyGuildResponse = {
    $type: "pylon.discord.v1.rest.ModifyGuildResponse",
};
export const ModifyGuildResponse = {
    $type: "pylon.discord.v1.rest.ModifyGuildResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            ModifyGuildResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseModifyGuildResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: ModifyGuildResponse_Data.decode(reader, reader.uint32()),
                    };
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseModifyGuildResponse };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: ModifyGuildResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? ModifyGuildResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseModifyGuildResponse };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: ModifyGuildResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyGuildResponse.$type, ModifyGuildResponse);
const baseModifyGuildResponse_Data = {
    $type: "pylon.discord.v1.rest.ModifyGuildResponse.Data",
};
export const ModifyGuildResponse_Data = {
    $type: "pylon.discord.v1.rest.ModifyGuildResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        if (message.guild !== undefined) {
            GuildData.encode(message.guild, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseModifyGuildResponse_Data,
        };
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
        const message = {
            ...baseModifyGuildResponse_Data,
        };
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
        const message = {
            ...baseModifyGuildResponse_Data,
        };
        if (object.guild !== undefined && object.guild !== null) {
            message.guild = GuildData.fromPartial(object.guild);
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyGuildResponse_Data.$type, ModifyGuildResponse_Data);
const baseCreateGuildChannelRequest = {
    $type: "pylon.discord.v1.rest.CreateGuildChannelRequest",
    name: "",
    type: 0,
};
export const CreateGuildChannelRequest = {
    $type: "pylon.discord.v1.rest.CreateGuildChannelRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        if (message.topic !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.topic }, writer.uint32(26).fork()).ldelim();
        }
        if (message.bitrate !== undefined) {
            UInt32Value.encode({ $type: "google.protobuf.UInt32Value", value: message.bitrate }, writer.uint32(34).fork()).ldelim();
        }
        if (message.userLimit !== undefined) {
            UInt32Value.encode({ $type: "google.protobuf.UInt32Value", value: message.userLimit }, writer.uint32(42).fork()).ldelim();
        }
        if (message.rateLimitPerUser !== undefined) {
            UInt32Value.encode({
                $type: "google.protobuf.UInt32Value",
                value: message.rateLimitPerUser,
            }, writer.uint32(50).fork()).ldelim();
        }
        if (message.position !== undefined) {
            UInt32Value.encode({ $type: "google.protobuf.UInt32Value", value: message.position }, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.permissionOverwrites) {
            ChannelData_ChannelPermissionOverwriteData.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.parentId !== undefined) {
            SnowflakeValue.encode(message.parentId, writer.uint32(74).fork()).ldelim();
        }
        if (message.nsfw !== undefined) {
            BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.nsfw }, writer.uint32(82).fork()).ldelim();
        }
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateGuildChannelRequest,
        };
        message.permissionOverwrites = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.topic = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.bitrate = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.userLimit = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.rateLimitPerUser = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.position = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.permissionOverwrites.push(ChannelData_ChannelPermissionOverwriteData.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.parentId = SnowflakeValue.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.nsfw = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
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
            ...baseCreateGuildChannelRequest,
        };
        message.permissionOverwrites = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = channelData_ChannelTypeFromJSON(object.type);
        }
        if (object.topic !== undefined && object.topic !== null) {
            message.topic = String(object.topic);
        }
        if (object.bitrate !== undefined && object.bitrate !== null) {
            message.bitrate = Number(object.bitrate);
        }
        if (object.userLimit !== undefined && object.userLimit !== null) {
            message.userLimit = Number(object.userLimit);
        }
        if (object.rateLimitPerUser !== undefined &&
            object.rateLimitPerUser !== null) {
            message.rateLimitPerUser = Number(object.rateLimitPerUser);
        }
        if (object.position !== undefined && object.position !== null) {
            message.position = Number(object.position);
        }
        if (object.permissionOverwrites !== undefined &&
            object.permissionOverwrites !== null) {
            for (const e of object.permissionOverwrites) {
                message.permissionOverwrites.push(ChannelData_ChannelPermissionOverwriteData.fromJSON(e));
            }
        }
        if (object.parentId !== undefined && object.parentId !== null) {
            message.parentId = SnowflakeValue.fromJSON(object.parentId);
        }
        if (object.nsfw !== undefined && object.nsfw !== null) {
            message.nsfw = Boolean(object.nsfw);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.type !== undefined &&
            (obj.type = channelData_ChannelTypeToJSON(message.type));
        message.topic !== undefined && (obj.topic = message.topic);
        message.bitrate !== undefined && (obj.bitrate = message.bitrate);
        message.userLimit !== undefined && (obj.userLimit = message.userLimit);
        message.rateLimitPerUser !== undefined &&
            (obj.rateLimitPerUser = message.rateLimitPerUser);
        message.position !== undefined && (obj.position = message.position);
        if (message.permissionOverwrites) {
            obj.permissionOverwrites = message.permissionOverwrites.map((e) => e ? ChannelData_ChannelPermissionOverwriteData.toJSON(e) : undefined);
        }
        else {
            obj.permissionOverwrites = [];
        }
        message.parentId !== undefined &&
            (obj.parentId = message.parentId
                ? SnowflakeValue.toJSON(message.parentId)
                : undefined);
        message.nsfw !== undefined && (obj.nsfw = message.nsfw);
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateGuildChannelRequest,
        };
        message.permissionOverwrites = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        if (object.topic !== undefined && object.topic !== null) {
            message.topic = object.topic;
        }
        if (object.bitrate !== undefined && object.bitrate !== null) {
            message.bitrate = object.bitrate;
        }
        if (object.userLimit !== undefined && object.userLimit !== null) {
            message.userLimit = object.userLimit;
        }
        if (object.rateLimitPerUser !== undefined &&
            object.rateLimitPerUser !== null) {
            message.rateLimitPerUser = object.rateLimitPerUser;
        }
        if (object.position !== undefined && object.position !== null) {
            message.position = object.position;
        }
        if (object.permissionOverwrites !== undefined &&
            object.permissionOverwrites !== null) {
            for (const e of object.permissionOverwrites) {
                message.permissionOverwrites.push(ChannelData_ChannelPermissionOverwriteData.fromPartial(e));
            }
        }
        if (object.parentId !== undefined && object.parentId !== null) {
            message.parentId = SnowflakeValue.fromPartial(object.parentId);
        }
        if (object.nsfw !== undefined && object.nsfw !== null) {
            message.nsfw = object.nsfw;
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(CreateGuildChannelRequest.$type, CreateGuildChannelRequest);
const baseCreateGuildChannelResponse = {
    $type: "pylon.discord.v1.rest.CreateGuildChannelResponse",
};
export const CreateGuildChannelResponse = {
    $type: "pylon.discord.v1.rest.CreateGuildChannelResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            CreateGuildChannelResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateGuildChannelResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: CreateGuildChannelResponse_Data.decode(reader, reader.uint32()),
                    };
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
            ...baseCreateGuildChannelResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: CreateGuildChannelResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? CreateGuildChannelResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateGuildChannelResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: CreateGuildChannelResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(CreateGuildChannelResponse.$type, CreateGuildChannelResponse);
const baseCreateGuildChannelResponse_Data = {
    $type: "pylon.discord.v1.rest.CreateGuildChannelResponse.Data",
};
export const CreateGuildChannelResponse_Data = {
    $type: "pylon.discord.v1.rest.CreateGuildChannelResponse.Data",
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
            ...baseCreateGuildChannelResponse_Data,
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
            ...baseCreateGuildChannelResponse_Data,
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
            ...baseCreateGuildChannelResponse_Data,
        };
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = ChannelData.fromPartial(object.channel);
        }
        return message;
    },
};
messageTypeRegistry.set(CreateGuildChannelResponse_Data.$type, CreateGuildChannelResponse_Data);
const baseModifyGuildChannelPositionsRequest = {
    $type: "pylon.discord.v1.rest.ModifyGuildChannelPositionsRequest",
};
export const ModifyGuildChannelPositionsRequest = {
    $type: "pylon.discord.v1.rest.ModifyGuildChannelPositionsRequest",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.channelPositions) {
            ModifyGuildChannelPositionsRequest_ChannelPosition.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseModifyGuildChannelPositionsRequest,
        };
        message.channelPositions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelPositions.push(ModifyGuildChannelPositionsRequest_ChannelPosition.decode(reader, reader.uint32()));
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
            ...baseModifyGuildChannelPositionsRequest,
        };
        message.channelPositions = [];
        if (object.channelPositions !== undefined &&
            object.channelPositions !== null) {
            for (const e of object.channelPositions) {
                message.channelPositions.push(ModifyGuildChannelPositionsRequest_ChannelPosition.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.channelPositions) {
            obj.channelPositions = message.channelPositions.map((e) => e
                ? ModifyGuildChannelPositionsRequest_ChannelPosition.toJSON(e)
                : undefined);
        }
        else {
            obj.channelPositions = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseModifyGuildChannelPositionsRequest,
        };
        message.channelPositions = [];
        if (object.channelPositions !== undefined &&
            object.channelPositions !== null) {
            for (const e of object.channelPositions) {
                message.channelPositions.push(ModifyGuildChannelPositionsRequest_ChannelPosition.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyGuildChannelPositionsRequest.$type, ModifyGuildChannelPositionsRequest);
const baseModifyGuildChannelPositionsRequest_ChannelPosition = {
    $type: "pylon.discord.v1.rest.ModifyGuildChannelPositionsRequest.ChannelPosition",
    id: "0",
    position: 0,
};
export const ModifyGuildChannelPositionsRequest_ChannelPosition = {
    $type: "pylon.discord.v1.rest.ModifyGuildChannelPositionsRequest.ChannelPosition",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "0") {
            writer.uint32(9).fixed64(message.id);
        }
        if (message.position !== 0) {
            writer.uint32(16).uint32(message.position);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseModifyGuildChannelPositionsRequest_ChannelPosition,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.fixed64());
                    break;
                case 2:
                    message.position = reader.uint32();
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
            ...baseModifyGuildChannelPositionsRequest_ChannelPosition,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        if (object.position !== undefined && object.position !== null) {
            message.position = Number(object.position);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.position !== undefined && (obj.position = message.position);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseModifyGuildChannelPositionsRequest_ChannelPosition,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.position !== undefined && object.position !== null) {
            message.position = object.position;
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyGuildChannelPositionsRequest_ChannelPosition.$type, ModifyGuildChannelPositionsRequest_ChannelPosition);
const baseModifyGuildChannelPositionsResponse = {
    $type: "pylon.discord.v1.rest.ModifyGuildChannelPositionsResponse",
};
export const ModifyGuildChannelPositionsResponse = {
    $type: "pylon.discord.v1.rest.ModifyGuildChannelPositionsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseModifyGuildChannelPositionsResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
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
            ...baseModifyGuildChannelPositionsResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseModifyGuildChannelPositionsResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyGuildChannelPositionsResponse.$type, ModifyGuildChannelPositionsResponse);
const baseAddGuildMemberRequest = {
    $type: "pylon.discord.v1.rest.AddGuildMemberRequest",
    userId: "0",
    accessToken: "",
};
export const AddGuildMemberRequest = {
    $type: "pylon.discord.v1.rest.AddGuildMemberRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.userId !== "0") {
            writer.uint32(9).fixed64(message.userId);
        }
        if (message.accessToken !== "") {
            writer.uint32(18).string(message.accessToken);
        }
        if (message.nick !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.nick }, writer.uint32(26).fork()).ldelim();
        }
        if (message.roles !== undefined) {
            SnowflakeListValue.encode(message.roles, writer.uint32(34).fork()).ldelim();
        }
        if (message.mute !== undefined) {
            BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.mute }, writer.uint32(42).fork()).ldelim();
        }
        if (message.deaf !== undefined) {
            BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.deaf }, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddGuildMemberRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.accessToken = reader.string();
                    break;
                case 3:
                    message.nick = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.roles = SnowflakeListValue.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.mute = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.deaf = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAddGuildMemberRequest };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = String(object.userId);
        }
        if (object.accessToken !== undefined && object.accessToken !== null) {
            message.accessToken = String(object.accessToken);
        }
        if (object.nick !== undefined && object.nick !== null) {
            message.nick = String(object.nick);
        }
        if (object.roles !== undefined && object.roles !== null) {
            message.roles = SnowflakeListValue.fromJSON(object.roles);
        }
        if (object.mute !== undefined && object.mute !== null) {
            message.mute = Boolean(object.mute);
        }
        if (object.deaf !== undefined && object.deaf !== null) {
            message.deaf = Boolean(object.deaf);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.accessToken !== undefined &&
            (obj.accessToken = message.accessToken);
        message.nick !== undefined && (obj.nick = message.nick);
        message.roles !== undefined &&
            (obj.roles = message.roles
                ? SnowflakeListValue.toJSON(message.roles)
                : undefined);
        message.mute !== undefined && (obj.mute = message.mute);
        message.deaf !== undefined && (obj.deaf = message.deaf);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAddGuildMemberRequest };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        if (object.accessToken !== undefined && object.accessToken !== null) {
            message.accessToken = object.accessToken;
        }
        if (object.nick !== undefined && object.nick !== null) {
            message.nick = object.nick;
        }
        if (object.roles !== undefined && object.roles !== null) {
            message.roles = SnowflakeListValue.fromPartial(object.roles);
        }
        if (object.mute !== undefined && object.mute !== null) {
            message.mute = object.mute;
        }
        if (object.deaf !== undefined && object.deaf !== null) {
            message.deaf = object.deaf;
        }
        return message;
    },
};
messageTypeRegistry.set(AddGuildMemberRequest.$type, AddGuildMemberRequest);
const baseAddGuildMemberResponse = {
    $type: "pylon.discord.v1.rest.AddGuildMemberResponse",
};
export const AddGuildMemberResponse = {
    $type: "pylon.discord.v1.rest.AddGuildMemberResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            AddGuildMemberResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddGuildMemberResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: AddGuildMemberResponse_Data.decode(reader, reader.uint32()),
                    };
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAddGuildMemberResponse };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: AddGuildMemberResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? AddGuildMemberResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAddGuildMemberResponse };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: AddGuildMemberResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(AddGuildMemberResponse.$type, AddGuildMemberResponse);
const baseAddGuildMemberResponse_Data = {
    $type: "pylon.discord.v1.rest.AddGuildMemberResponse.Data",
    added: false,
};
export const AddGuildMemberResponse_Data = {
    $type: "pylon.discord.v1.rest.AddGuildMemberResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        if (message.added === true) {
            writer.uint32(8).bool(message.added);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddGuildMemberResponse_Data,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.added = reader.bool();
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
            ...baseAddGuildMemberResponse_Data,
        };
        if (object.added !== undefined && object.added !== null) {
            message.added = Boolean(object.added);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.added !== undefined && (obj.added = message.added);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddGuildMemberResponse_Data,
        };
        if (object.added !== undefined && object.added !== null) {
            message.added = object.added;
        }
        return message;
    },
};
messageTypeRegistry.set(AddGuildMemberResponse_Data.$type, AddGuildMemberResponse_Data);
const baseModifyGuildMemberRequest = {
    $type: "pylon.discord.v1.rest.ModifyGuildMemberRequest",
    userId: "0",
};
export const ModifyGuildMemberRequest = {
    $type: "pylon.discord.v1.rest.ModifyGuildMemberRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.userId !== "0") {
            writer.uint32(9).fixed64(message.userId);
        }
        if (message.nick !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.nick }, writer.uint32(18).fork()).ldelim();
        }
        if (message.roles !== undefined) {
            SnowflakeListValue.encode(message.roles, writer.uint32(26).fork()).ldelim();
        }
        if (message.mute !== undefined) {
            BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.mute }, writer.uint32(34).fork()).ldelim();
        }
        if (message.deaf !== undefined) {
            BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.deaf }, writer.uint32(42).fork()).ldelim();
        }
        if (message.channelId !== undefined) {
            SnowflakeValue.encode(message.channelId, writer.uint32(50).fork()).ldelim();
        }
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseModifyGuildMemberRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.nick = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.roles = SnowflakeListValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mute = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.deaf = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.channelId = SnowflakeValue.decode(reader, reader.uint32());
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
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
            ...baseModifyGuildMemberRequest,
        };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = String(object.userId);
        }
        if (object.nick !== undefined && object.nick !== null) {
            message.nick = String(object.nick);
        }
        if (object.roles !== undefined && object.roles !== null) {
            message.roles = SnowflakeListValue.fromJSON(object.roles);
        }
        if (object.mute !== undefined && object.mute !== null) {
            message.mute = Boolean(object.mute);
        }
        if (object.deaf !== undefined && object.deaf !== null) {
            message.deaf = Boolean(object.deaf);
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = SnowflakeValue.fromJSON(object.channelId);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.nick !== undefined && (obj.nick = message.nick);
        message.roles !== undefined &&
            (obj.roles = message.roles
                ? SnowflakeListValue.toJSON(message.roles)
                : undefined);
        message.mute !== undefined && (obj.mute = message.mute);
        message.deaf !== undefined && (obj.deaf = message.deaf);
        message.channelId !== undefined &&
            (obj.channelId = message.channelId
                ? SnowflakeValue.toJSON(message.channelId)
                : undefined);
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseModifyGuildMemberRequest,
        };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        if (object.nick !== undefined && object.nick !== null) {
            message.nick = object.nick;
        }
        if (object.roles !== undefined && object.roles !== null) {
            message.roles = SnowflakeListValue.fromPartial(object.roles);
        }
        if (object.mute !== undefined && object.mute !== null) {
            message.mute = object.mute;
        }
        if (object.deaf !== undefined && object.deaf !== null) {
            message.deaf = object.deaf;
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = SnowflakeValue.fromPartial(object.channelId);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyGuildMemberRequest.$type, ModifyGuildMemberRequest);
const baseModifyGuildMemberResponse = {
    $type: "pylon.discord.v1.rest.ModifyGuildMemberResponse",
};
export const ModifyGuildMemberResponse = {
    $type: "pylon.discord.v1.rest.ModifyGuildMemberResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseModifyGuildMemberResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
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
            ...baseModifyGuildMemberResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseModifyGuildMemberResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyGuildMemberResponse.$type, ModifyGuildMemberResponse);
const baseModifyCurrentUserNickRequest = {
    $type: "pylon.discord.v1.rest.ModifyCurrentUserNickRequest",
};
export const ModifyCurrentUserNickRequest = {
    $type: "pylon.discord.v1.rest.ModifyCurrentUserNickRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.nick !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.nick }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseModifyCurrentUserNickRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nick = StringValue.decode(reader, reader.uint32()).value;
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
            ...baseModifyCurrentUserNickRequest,
        };
        if (object.nick !== undefined && object.nick !== null) {
            message.nick = String(object.nick);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nick !== undefined && (obj.nick = message.nick);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseModifyCurrentUserNickRequest,
        };
        if (object.nick !== undefined && object.nick !== null) {
            message.nick = object.nick;
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyCurrentUserNickRequest.$type, ModifyCurrentUserNickRequest);
const baseModifyCurrentUserNickResponse = {
    $type: "pylon.discord.v1.rest.ModifyCurrentUserNickResponse",
};
export const ModifyCurrentUserNickResponse = {
    $type: "pylon.discord.v1.rest.ModifyCurrentUserNickResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseModifyCurrentUserNickResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
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
            ...baseModifyCurrentUserNickResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseModifyCurrentUserNickResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyCurrentUserNickResponse.$type, ModifyCurrentUserNickResponse);
const baseAddGuildMemberRoleRequest = {
    $type: "pylon.discord.v1.rest.AddGuildMemberRoleRequest",
    userId: "0",
    roleId: "0",
};
export const AddGuildMemberRoleRequest = {
    $type: "pylon.discord.v1.rest.AddGuildMemberRoleRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.userId !== "0") {
            writer.uint32(9).fixed64(message.userId);
        }
        if (message.roleId !== "0") {
            writer.uint32(17).fixed64(message.roleId);
        }
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddGuildMemberRoleRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.roleId = longToString(reader.fixed64());
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
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
            ...baseAddGuildMemberRoleRequest,
        };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = String(object.userId);
        }
        if (object.roleId !== undefined && object.roleId !== null) {
            message.roleId = String(object.roleId);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.roleId !== undefined && (obj.roleId = message.roleId);
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddGuildMemberRoleRequest,
        };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        if (object.roleId !== undefined && object.roleId !== null) {
            message.roleId = object.roleId;
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(AddGuildMemberRoleRequest.$type, AddGuildMemberRoleRequest);
const baseAddGuildMemberRoleResponse = {
    $type: "pylon.discord.v1.rest.AddGuildMemberRoleResponse",
};
export const AddGuildMemberRoleResponse = {
    $type: "pylon.discord.v1.rest.AddGuildMemberRoleResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddGuildMemberRoleResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
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
            ...baseAddGuildMemberRoleResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddGuildMemberRoleResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(AddGuildMemberRoleResponse.$type, AddGuildMemberRoleResponse);
const baseRemoveGuildMemberRoleRequest = {
    $type: "pylon.discord.v1.rest.RemoveGuildMemberRoleRequest",
    userId: "0",
    roleId: "0",
};
export const RemoveGuildMemberRoleRequest = {
    $type: "pylon.discord.v1.rest.RemoveGuildMemberRoleRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.userId !== "0") {
            writer.uint32(9).fixed64(message.userId);
        }
        if (message.roleId !== "0") {
            writer.uint32(17).fixed64(message.roleId);
        }
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveGuildMemberRoleRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.roleId = longToString(reader.fixed64());
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
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
            ...baseRemoveGuildMemberRoleRequest,
        };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = String(object.userId);
        }
        if (object.roleId !== undefined && object.roleId !== null) {
            message.roleId = String(object.roleId);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.roleId !== undefined && (obj.roleId = message.roleId);
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRemoveGuildMemberRoleRequest,
        };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        if (object.roleId !== undefined && object.roleId !== null) {
            message.roleId = object.roleId;
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(RemoveGuildMemberRoleRequest.$type, RemoveGuildMemberRoleRequest);
const baseRemoveGuildMemberRoleResponse = {
    $type: "pylon.discord.v1.rest.RemoveGuildMemberRoleResponse",
};
export const RemoveGuildMemberRoleResponse = {
    $type: "pylon.discord.v1.rest.RemoveGuildMemberRoleResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveGuildMemberRoleResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
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
            ...baseRemoveGuildMemberRoleResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRemoveGuildMemberRoleResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(RemoveGuildMemberRoleResponse.$type, RemoveGuildMemberRoleResponse);
const baseRemoveGuildMemberRequest = {
    $type: "pylon.discord.v1.rest.RemoveGuildMemberRequest",
    userId: "0",
};
export const RemoveGuildMemberRequest = {
    $type: "pylon.discord.v1.rest.RemoveGuildMemberRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.userId !== "0") {
            writer.uint32(9).fixed64(message.userId);
        }
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveGuildMemberRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = longToString(reader.fixed64());
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
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
            ...baseRemoveGuildMemberRequest,
        };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = String(object.userId);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRemoveGuildMemberRequest,
        };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(RemoveGuildMemberRequest.$type, RemoveGuildMemberRequest);
const baseRemoveGuildMemberResponse = {
    $type: "pylon.discord.v1.rest.RemoveGuildMemberResponse",
};
export const RemoveGuildMemberResponse = {
    $type: "pylon.discord.v1.rest.RemoveGuildMemberResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveGuildMemberResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
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
            ...baseRemoveGuildMemberResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRemoveGuildMemberResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(RemoveGuildMemberResponse.$type, RemoveGuildMemberResponse);
const baseGetGuildBansRequest = {
    $type: "pylon.discord.v1.rest.GetGuildBansRequest",
    userId: "0",
};
export const GetGuildBansRequest = {
    $type: "pylon.discord.v1.rest.GetGuildBansRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.userId !== "0") {
            writer.uint32(9).fixed64(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetGuildBansRequest };
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
        const message = { ...baseGetGuildBansRequest };
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
        const message = { ...baseGetGuildBansRequest };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildBansRequest.$type, GetGuildBansRequest);
const baseGetGuildBansResponse = {
    $type: "pylon.discord.v1.rest.GetGuildBansResponse",
};
export const GetGuildBansResponse = {
    $type: "pylon.discord.v1.rest.GetGuildBansResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            GetGuildBansResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetGuildBansResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: GetGuildBansResponse_Data.decode(reader, reader.uint32()),
                    };
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetGuildBansResponse };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: GetGuildBansResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? GetGuildBansResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetGuildBansResponse };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: GetGuildBansResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildBansResponse.$type, GetGuildBansResponse);
const baseGetGuildBansResponse_Data = {
    $type: "pylon.discord.v1.rest.GetGuildBansResponse.Data",
};
export const GetGuildBansResponse_Data = {
    $type: "pylon.discord.v1.rest.GetGuildBansResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.bans) {
            GuildBanData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetGuildBansResponse_Data,
        };
        message.bans = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bans.push(GuildBanData.decode(reader, reader.uint32()));
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
            ...baseGetGuildBansResponse_Data,
        };
        message.bans = [];
        if (object.bans !== undefined && object.bans !== null) {
            for (const e of object.bans) {
                message.bans.push(GuildBanData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.bans) {
            obj.bans = message.bans.map((e) => e ? GuildBanData.toJSON(e) : undefined);
        }
        else {
            obj.bans = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetGuildBansResponse_Data,
        };
        message.bans = [];
        if (object.bans !== undefined && object.bans !== null) {
            for (const e of object.bans) {
                message.bans.push(GuildBanData.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildBansResponse_Data.$type, GetGuildBansResponse_Data);
const baseGetGuildBanRequest = {
    $type: "pylon.discord.v1.rest.GetGuildBanRequest",
    userId: "0",
};
export const GetGuildBanRequest = {
    $type: "pylon.discord.v1.rest.GetGuildBanRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.userId !== "0") {
            writer.uint32(9).fixed64(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetGuildBanRequest };
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
        const message = { ...baseGetGuildBanRequest };
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
        const message = { ...baseGetGuildBanRequest };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildBanRequest.$type, GetGuildBanRequest);
const baseGetGuildBanResponse = {
    $type: "pylon.discord.v1.rest.GetGuildBanResponse",
};
export const GetGuildBanResponse = {
    $type: "pylon.discord.v1.rest.GetGuildBanResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            GetGuildBanResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetGuildBanResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: GetGuildBanResponse_Data.decode(reader, reader.uint32()),
                    };
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetGuildBanResponse };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: GetGuildBanResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? GetGuildBanResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetGuildBanResponse };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: GetGuildBanResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildBanResponse.$type, GetGuildBanResponse);
const baseGetGuildBanResponse_Data = {
    $type: "pylon.discord.v1.rest.GetGuildBanResponse.Data",
};
export const GetGuildBanResponse_Data = {
    $type: "pylon.discord.v1.rest.GetGuildBanResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        if (message.ban !== undefined) {
            GuildBanData.encode(message.ban, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetGuildBanResponse_Data,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ban = GuildBanData.decode(reader, reader.uint32());
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
            ...baseGetGuildBanResponse_Data,
        };
        if (object.ban !== undefined && object.ban !== null) {
            message.ban = GuildBanData.fromJSON(object.ban);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ban !== undefined &&
            (obj.ban = message.ban ? GuildBanData.toJSON(message.ban) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetGuildBanResponse_Data,
        };
        if (object.ban !== undefined && object.ban !== null) {
            message.ban = GuildBanData.fromPartial(object.ban);
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildBanResponse_Data.$type, GetGuildBanResponse_Data);
const baseCreateGuildBanRequest = {
    $type: "pylon.discord.v1.rest.CreateGuildBanRequest",
    userId: "0",
};
export const CreateGuildBanRequest = {
    $type: "pylon.discord.v1.rest.CreateGuildBanRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.userId !== "0") {
            writer.uint32(9).fixed64(message.userId);
        }
        if (message.deleteMessageDays !== undefined) {
            UInt32Value.encode({
                $type: "google.protobuf.UInt32Value",
                value: message.deleteMessageDays,
            }, writer.uint32(18).fork()).ldelim();
        }
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateGuildBanRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.deleteMessageDays = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateGuildBanRequest };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = String(object.userId);
        }
        if (object.deleteMessageDays !== undefined &&
            object.deleteMessageDays !== null) {
            message.deleteMessageDays = Number(object.deleteMessageDays);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.deleteMessageDays !== undefined &&
            (obj.deleteMessageDays = message.deleteMessageDays);
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateGuildBanRequest };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        if (object.deleteMessageDays !== undefined &&
            object.deleteMessageDays !== null) {
            message.deleteMessageDays = object.deleteMessageDays;
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(CreateGuildBanRequest.$type, CreateGuildBanRequest);
const baseCreateGuildBanResponse = {
    $type: "pylon.discord.v1.rest.CreateGuildBanResponse",
};
export const CreateGuildBanResponse = {
    $type: "pylon.discord.v1.rest.CreateGuildBanResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateGuildBanResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateGuildBanResponse };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateGuildBanResponse };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(CreateGuildBanResponse.$type, CreateGuildBanResponse);
const baseRemoveGuildBanRequest = {
    $type: "pylon.discord.v1.rest.RemoveGuildBanRequest",
    userId: "0",
};
export const RemoveGuildBanRequest = {
    $type: "pylon.discord.v1.rest.RemoveGuildBanRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.userId !== "0") {
            writer.uint32(9).fixed64(message.userId);
        }
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRemoveGuildBanRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = longToString(reader.fixed64());
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRemoveGuildBanRequest };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = String(object.userId);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRemoveGuildBanRequest };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(RemoveGuildBanRequest.$type, RemoveGuildBanRequest);
const baseRemoveGuildBanResponse = {
    $type: "pylon.discord.v1.rest.RemoveGuildBanResponse",
};
export const RemoveGuildBanResponse = {
    $type: "pylon.discord.v1.rest.RemoveGuildBanResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRemoveGuildBanResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRemoveGuildBanResponse };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRemoveGuildBanResponse };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(RemoveGuildBanResponse.$type, RemoveGuildBanResponse);
const baseCreateGuildRoleRequest = {
    $type: "pylon.discord.v1.rest.CreateGuildRoleRequest",
};
export const CreateGuildRoleRequest = {
    $type: "pylon.discord.v1.rest.CreateGuildRoleRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.name }, writer.uint32(10).fork()).ldelim();
        }
        if (message.permissions !== undefined) {
            PermissionsValue.encode(message.permissions, writer.uint32(18).fork()).ldelim();
        }
        if (message.color !== undefined) {
            UInt32Value.encode({ $type: "google.protobuf.UInt32Value", value: message.color }, writer.uint32(26).fork()).ldelim();
        }
        if (message.hoist !== undefined) {
            BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.hoist }, writer.uint32(34).fork()).ldelim();
        }
        if (message.mentionable !== undefined) {
            BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.mentionable }, writer.uint32(42).fork()).ldelim();
        }
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateGuildRoleRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.permissions = PermissionsValue.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.color = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.hoist = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.mentionable = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateGuildRoleRequest };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            message.permissions = PermissionsValue.fromJSON(object.permissions);
        }
        if (object.color !== undefined && object.color !== null) {
            message.color = Number(object.color);
        }
        if (object.hoist !== undefined && object.hoist !== null) {
            message.hoist = Boolean(object.hoist);
        }
        if (object.mentionable !== undefined && object.mentionable !== null) {
            message.mentionable = Boolean(object.mentionable);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.permissions !== undefined &&
            (obj.permissions = message.permissions
                ? PermissionsValue.toJSON(message.permissions)
                : undefined);
        message.color !== undefined && (obj.color = message.color);
        message.hoist !== undefined && (obj.hoist = message.hoist);
        message.mentionable !== undefined &&
            (obj.mentionable = message.mentionable);
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateGuildRoleRequest };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            message.permissions = PermissionsValue.fromPartial(object.permissions);
        }
        if (object.color !== undefined && object.color !== null) {
            message.color = object.color;
        }
        if (object.hoist !== undefined && object.hoist !== null) {
            message.hoist = object.hoist;
        }
        if (object.mentionable !== undefined && object.mentionable !== null) {
            message.mentionable = object.mentionable;
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(CreateGuildRoleRequest.$type, CreateGuildRoleRequest);
const baseCreateGuildRoleResponse = {
    $type: "pylon.discord.v1.rest.CreateGuildRoleResponse",
};
export const CreateGuildRoleResponse = {
    $type: "pylon.discord.v1.rest.CreateGuildRoleResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            CreateGuildRoleResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateGuildRoleResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: CreateGuildRoleResponse_Data.decode(reader, reader.uint32()),
                    };
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
            ...baseCreateGuildRoleResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: CreateGuildRoleResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? CreateGuildRoleResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateGuildRoleResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: CreateGuildRoleResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(CreateGuildRoleResponse.$type, CreateGuildRoleResponse);
const baseCreateGuildRoleResponse_Data = {
    $type: "pylon.discord.v1.rest.CreateGuildRoleResponse.Data",
};
export const CreateGuildRoleResponse_Data = {
    $type: "pylon.discord.v1.rest.CreateGuildRoleResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        if (message.role !== undefined) {
            RoleData.encode(message.role, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateGuildRoleResponse_Data,
        };
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
        const message = {
            ...baseCreateGuildRoleResponse_Data,
        };
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
        const message = {
            ...baseCreateGuildRoleResponse_Data,
        };
        if (object.role !== undefined && object.role !== null) {
            message.role = RoleData.fromPartial(object.role);
        }
        return message;
    },
};
messageTypeRegistry.set(CreateGuildRoleResponse_Data.$type, CreateGuildRoleResponse_Data);
const baseModifyGuildRolePositionsRequest = {
    $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsRequest",
};
export const ModifyGuildRolePositionsRequest = {
    $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsRequest",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rolePositions) {
            ModifyGuildRolePositionsRequest_RolePosition.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseModifyGuildRolePositionsRequest,
        };
        message.rolePositions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rolePositions.push(ModifyGuildRolePositionsRequest_RolePosition.decode(reader, reader.uint32()));
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
            ...baseModifyGuildRolePositionsRequest,
        };
        message.rolePositions = [];
        if (object.rolePositions !== undefined && object.rolePositions !== null) {
            for (const e of object.rolePositions) {
                message.rolePositions.push(ModifyGuildRolePositionsRequest_RolePosition.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.rolePositions) {
            obj.rolePositions = message.rolePositions.map((e) => e ? ModifyGuildRolePositionsRequest_RolePosition.toJSON(e) : undefined);
        }
        else {
            obj.rolePositions = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseModifyGuildRolePositionsRequest,
        };
        message.rolePositions = [];
        if (object.rolePositions !== undefined && object.rolePositions !== null) {
            for (const e of object.rolePositions) {
                message.rolePositions.push(ModifyGuildRolePositionsRequest_RolePosition.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyGuildRolePositionsRequest.$type, ModifyGuildRolePositionsRequest);
const baseModifyGuildRolePositionsRequest_RolePosition = {
    $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsRequest.RolePosition",
    id: "0",
    position: 0,
};
export const ModifyGuildRolePositionsRequest_RolePosition = {
    $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsRequest.RolePosition",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "0") {
            writer.uint32(9).fixed64(message.id);
        }
        if (message.position !== 0) {
            writer.uint32(16).uint32(message.position);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseModifyGuildRolePositionsRequest_RolePosition,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.fixed64());
                    break;
                case 2:
                    message.position = reader.uint32();
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
            ...baseModifyGuildRolePositionsRequest_RolePosition,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        if (object.position !== undefined && object.position !== null) {
            message.position = Number(object.position);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.position !== undefined && (obj.position = message.position);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseModifyGuildRolePositionsRequest_RolePosition,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.position !== undefined && object.position !== null) {
            message.position = object.position;
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyGuildRolePositionsRequest_RolePosition.$type, ModifyGuildRolePositionsRequest_RolePosition);
const baseModifyGuildRolePositionsResponse = {
    $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsResponse",
};
export const ModifyGuildRolePositionsResponse = {
    $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            ModifyGuildRolePositionsResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseModifyGuildRolePositionsResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: ModifyGuildRolePositionsResponse_Data.decode(reader, reader.uint32()),
                    };
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
            ...baseModifyGuildRolePositionsResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: ModifyGuildRolePositionsResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? ModifyGuildRolePositionsResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseModifyGuildRolePositionsResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: ModifyGuildRolePositionsResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyGuildRolePositionsResponse.$type, ModifyGuildRolePositionsResponse);
const baseModifyGuildRolePositionsResponse_Data = {
    $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsResponse.Data",
};
export const ModifyGuildRolePositionsResponse_Data = {
    $type: "pylon.discord.v1.rest.ModifyGuildRolePositionsResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.roles) {
            RoleData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseModifyGuildRolePositionsResponse_Data,
        };
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
        const message = {
            ...baseModifyGuildRolePositionsResponse_Data,
        };
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
        const message = {
            ...baseModifyGuildRolePositionsResponse_Data,
        };
        message.roles = [];
        if (object.roles !== undefined && object.roles !== null) {
            for (const e of object.roles) {
                message.roles.push(RoleData.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyGuildRolePositionsResponse_Data.$type, ModifyGuildRolePositionsResponse_Data);
const baseModifyGuildRoleRequest = {
    $type: "pylon.discord.v1.rest.ModifyGuildRoleRequest",
    roleId: "0",
};
export const ModifyGuildRoleRequest = {
    $type: "pylon.discord.v1.rest.ModifyGuildRoleRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.roleId !== "0") {
            writer.uint32(9).fixed64(message.roleId);
        }
        if (message.name !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.name }, writer.uint32(18).fork()).ldelim();
        }
        if (message.permissions !== undefined) {
            PermissionsValue.encode(message.permissions, writer.uint32(26).fork()).ldelim();
        }
        if (message.color !== undefined) {
            UInt32Value.encode({ $type: "google.protobuf.UInt32Value", value: message.color }, writer.uint32(34).fork()).ldelim();
        }
        if (message.hoist !== undefined) {
            BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.hoist }, writer.uint32(42).fork()).ldelim();
        }
        if (message.mentionable !== undefined) {
            BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.mentionable }, writer.uint32(50).fork()).ldelim();
        }
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseModifyGuildRoleRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.roleId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.name = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.permissions = PermissionsValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.color = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.hoist = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.mentionable = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseModifyGuildRoleRequest };
        if (object.roleId !== undefined && object.roleId !== null) {
            message.roleId = String(object.roleId);
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            message.permissions = PermissionsValue.fromJSON(object.permissions);
        }
        if (object.color !== undefined && object.color !== null) {
            message.color = Number(object.color);
        }
        if (object.hoist !== undefined && object.hoist !== null) {
            message.hoist = Boolean(object.hoist);
        }
        if (object.mentionable !== undefined && object.mentionable !== null) {
            message.mentionable = Boolean(object.mentionable);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.roleId !== undefined && (obj.roleId = message.roleId);
        message.name !== undefined && (obj.name = message.name);
        message.permissions !== undefined &&
            (obj.permissions = message.permissions
                ? PermissionsValue.toJSON(message.permissions)
                : undefined);
        message.color !== undefined && (obj.color = message.color);
        message.hoist !== undefined && (obj.hoist = message.hoist);
        message.mentionable !== undefined &&
            (obj.mentionable = message.mentionable);
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseModifyGuildRoleRequest };
        if (object.roleId !== undefined && object.roleId !== null) {
            message.roleId = object.roleId;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            message.permissions = PermissionsValue.fromPartial(object.permissions);
        }
        if (object.color !== undefined && object.color !== null) {
            message.color = object.color;
        }
        if (object.hoist !== undefined && object.hoist !== null) {
            message.hoist = object.hoist;
        }
        if (object.mentionable !== undefined && object.mentionable !== null) {
            message.mentionable = object.mentionable;
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyGuildRoleRequest.$type, ModifyGuildRoleRequest);
const baseModifyGuildRoleResponse = {
    $type: "pylon.discord.v1.rest.ModifyGuildRoleResponse",
};
export const ModifyGuildRoleResponse = {
    $type: "pylon.discord.v1.rest.ModifyGuildRoleResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            ModifyGuildRoleResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseModifyGuildRoleResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: ModifyGuildRoleResponse_Data.decode(reader, reader.uint32()),
                    };
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
            ...baseModifyGuildRoleResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: ModifyGuildRoleResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? ModifyGuildRoleResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseModifyGuildRoleResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: ModifyGuildRoleResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyGuildRoleResponse.$type, ModifyGuildRoleResponse);
const baseModifyGuildRoleResponse_Data = {
    $type: "pylon.discord.v1.rest.ModifyGuildRoleResponse.Data",
};
export const ModifyGuildRoleResponse_Data = {
    $type: "pylon.discord.v1.rest.ModifyGuildRoleResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        if (message.role !== undefined) {
            RoleData.encode(message.role, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseModifyGuildRoleResponse_Data,
        };
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
        const message = {
            ...baseModifyGuildRoleResponse_Data,
        };
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
        const message = {
            ...baseModifyGuildRoleResponse_Data,
        };
        if (object.role !== undefined && object.role !== null) {
            message.role = RoleData.fromPartial(object.role);
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyGuildRoleResponse_Data.$type, ModifyGuildRoleResponse_Data);
const baseDeleteGuildRoleRequest = {
    $type: "pylon.discord.v1.rest.DeleteGuildRoleRequest",
    roleId: "0",
};
export const DeleteGuildRoleRequest = {
    $type: "pylon.discord.v1.rest.DeleteGuildRoleRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.roleId !== "0") {
            writer.uint32(9).fixed64(message.roleId);
        }
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteGuildRoleRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.roleId = longToString(reader.fixed64());
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteGuildRoleRequest };
        if (object.roleId !== undefined && object.roleId !== null) {
            message.roleId = String(object.roleId);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.roleId !== undefined && (obj.roleId = message.roleId);
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteGuildRoleRequest };
        if (object.roleId !== undefined && object.roleId !== null) {
            message.roleId = object.roleId;
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(DeleteGuildRoleRequest.$type, DeleteGuildRoleRequest);
const baseDeleteGuildRoleResponse = {
    $type: "pylon.discord.v1.rest.DeleteGuildRoleResponse",
};
export const DeleteGuildRoleResponse = {
    $type: "pylon.discord.v1.rest.DeleteGuildRoleResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteGuildRoleResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
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
            ...baseDeleteGuildRoleResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteGuildRoleResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(DeleteGuildRoleResponse.$type, DeleteGuildRoleResponse);
const baseGetGuildPruneCountRequest = {
    $type: "pylon.discord.v1.rest.GetGuildPruneCountRequest",
};
export const GetGuildPruneCountRequest = {
    $type: "pylon.discord.v1.rest.GetGuildPruneCountRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.days !== undefined) {
            UInt32Value.encode({ $type: "google.protobuf.UInt32Value", value: message.days }, writer.uint32(10).fork()).ldelim();
        }
        if (message.includeRoles !== undefined) {
            SnowflakeListValue.encode(message.includeRoles, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetGuildPruneCountRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.days = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.includeRoles = SnowflakeListValue.decode(reader, reader.uint32());
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
            ...baseGetGuildPruneCountRequest,
        };
        if (object.days !== undefined && object.days !== null) {
            message.days = Number(object.days);
        }
        if (object.includeRoles !== undefined && object.includeRoles !== null) {
            message.includeRoles = SnowflakeListValue.fromJSON(object.includeRoles);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.days !== undefined && (obj.days = message.days);
        message.includeRoles !== undefined &&
            (obj.includeRoles = message.includeRoles
                ? SnowflakeListValue.toJSON(message.includeRoles)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetGuildPruneCountRequest,
        };
        if (object.days !== undefined && object.days !== null) {
            message.days = object.days;
        }
        if (object.includeRoles !== undefined && object.includeRoles !== null) {
            message.includeRoles = SnowflakeListValue.fromPartial(object.includeRoles);
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildPruneCountRequest.$type, GetGuildPruneCountRequest);
const baseGetGuildPruneCountResponse = {
    $type: "pylon.discord.v1.rest.GetGuildPruneCountResponse",
};
export const GetGuildPruneCountResponse = {
    $type: "pylon.discord.v1.rest.GetGuildPruneCountResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetGuildPruneCountResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
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
            ...baseGetGuildPruneCountResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetGuildPruneCountResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildPruneCountResponse.$type, GetGuildPruneCountResponse);
const baseBeginGuildPruneRequest = {
    $type: "pylon.discord.v1.rest.BeginGuildPruneRequest",
};
export const BeginGuildPruneRequest = {
    $type: "pylon.discord.v1.rest.BeginGuildPruneRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.days !== undefined) {
            UInt32Value.encode({ $type: "google.protobuf.UInt32Value", value: message.days }, writer.uint32(10).fork()).ldelim();
        }
        if (message.includeRoles !== undefined) {
            SnowflakeListValue.encode(message.includeRoles, writer.uint32(18).fork()).ldelim();
        }
        if (message.computePruneCount !== undefined) {
            BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.computePruneCount,
            }, writer.uint32(26).fork()).ldelim();
        }
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeginGuildPruneRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.days = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.includeRoles = SnowflakeListValue.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.computePruneCount = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseBeginGuildPruneRequest };
        if (object.days !== undefined && object.days !== null) {
            message.days = Number(object.days);
        }
        if (object.includeRoles !== undefined && object.includeRoles !== null) {
            message.includeRoles = SnowflakeListValue.fromJSON(object.includeRoles);
        }
        if (object.computePruneCount !== undefined &&
            object.computePruneCount !== null) {
            message.computePruneCount = Boolean(object.computePruneCount);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.days !== undefined && (obj.days = message.days);
        message.includeRoles !== undefined &&
            (obj.includeRoles = message.includeRoles
                ? SnowflakeListValue.toJSON(message.includeRoles)
                : undefined);
        message.computePruneCount !== undefined &&
            (obj.computePruneCount = message.computePruneCount);
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBeginGuildPruneRequest };
        if (object.days !== undefined && object.days !== null) {
            message.days = object.days;
        }
        if (object.includeRoles !== undefined && object.includeRoles !== null) {
            message.includeRoles = SnowflakeListValue.fromPartial(object.includeRoles);
        }
        if (object.computePruneCount !== undefined &&
            object.computePruneCount !== null) {
            message.computePruneCount = object.computePruneCount;
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(BeginGuildPruneRequest.$type, BeginGuildPruneRequest);
const baseBeginGuildPruneResponse = {
    $type: "pylon.discord.v1.rest.BeginGuildPruneResponse",
};
export const BeginGuildPruneResponse = {
    $type: "pylon.discord.v1.rest.BeginGuildPruneResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBeginGuildPruneResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
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
            ...baseBeginGuildPruneResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseBeginGuildPruneResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(BeginGuildPruneResponse.$type, BeginGuildPruneResponse);
const baseGetGuildVoiceRegionsRequest = {
    $type: "pylon.discord.v1.rest.GetGuildVoiceRegionsRequest",
};
export const GetGuildVoiceRegionsRequest = {
    $type: "pylon.discord.v1.rest.GetGuildVoiceRegionsRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetGuildVoiceRegionsRequest,
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
            ...baseGetGuildVoiceRegionsRequest,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseGetGuildVoiceRegionsRequest,
        };
        return message;
    },
};
messageTypeRegistry.set(GetGuildVoiceRegionsRequest.$type, GetGuildVoiceRegionsRequest);
const baseGetGuildVoiceRegionsResponse = {
    $type: "pylon.discord.v1.rest.GetGuildVoiceRegionsResponse",
};
export const GetGuildVoiceRegionsResponse = {
    $type: "pylon.discord.v1.rest.GetGuildVoiceRegionsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            GetGuildVoiceRegionsResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetGuildVoiceRegionsResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: GetGuildVoiceRegionsResponse_Data.decode(reader, reader.uint32()),
                    };
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
            ...baseGetGuildVoiceRegionsResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: GetGuildVoiceRegionsResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? GetGuildVoiceRegionsResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetGuildVoiceRegionsResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: GetGuildVoiceRegionsResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildVoiceRegionsResponse.$type, GetGuildVoiceRegionsResponse);
const baseGetGuildVoiceRegionsResponse_Data = {
    $type: "pylon.discord.v1.rest.GetGuildVoiceRegionsResponse.Data",
    regions: "",
};
export const GetGuildVoiceRegionsResponse_Data = {
    $type: "pylon.discord.v1.rest.GetGuildVoiceRegionsResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.regions) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetGuildVoiceRegionsResponse_Data,
        };
        message.regions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.regions.push(reader.string());
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
            ...baseGetGuildVoiceRegionsResponse_Data,
        };
        message.regions = [];
        if (object.regions !== undefined && object.regions !== null) {
            for (const e of object.regions) {
                message.regions.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.regions) {
            obj.regions = message.regions.map((e) => e);
        }
        else {
            obj.regions = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetGuildVoiceRegionsResponse_Data,
        };
        message.regions = [];
        if (object.regions !== undefined && object.regions !== null) {
            for (const e of object.regions) {
                message.regions.push(e);
            }
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildVoiceRegionsResponse_Data.$type, GetGuildVoiceRegionsResponse_Data);
const baseGetGuildInvitesRequest = {
    $type: "pylon.discord.v1.rest.GetGuildInvitesRequest",
};
export const GetGuildInvitesRequest = {
    $type: "pylon.discord.v1.rest.GetGuildInvitesRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetGuildInvitesRequest };
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
        const message = { ...baseGetGuildInvitesRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseGetGuildInvitesRequest };
        return message;
    },
};
messageTypeRegistry.set(GetGuildInvitesRequest.$type, GetGuildInvitesRequest);
const baseGetGuildInvitesResponse = {
    $type: "pylon.discord.v1.rest.GetGuildInvitesResponse",
};
export const GetGuildInvitesResponse = {
    $type: "pylon.discord.v1.rest.GetGuildInvitesResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            GetGuildInvitesResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetGuildInvitesResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: GetGuildInvitesResponse_Data.decode(reader, reader.uint32()),
                    };
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
            ...baseGetGuildInvitesResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: GetGuildInvitesResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? GetGuildInvitesResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetGuildInvitesResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: GetGuildInvitesResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildInvitesResponse.$type, GetGuildInvitesResponse);
const baseGetGuildInvitesResponse_Data = {
    $type: "pylon.discord.v1.rest.GetGuildInvitesResponse.Data",
};
export const GetGuildInvitesResponse_Data = {
    $type: "pylon.discord.v1.rest.GetGuildInvitesResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.invites) {
            InviteData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetGuildInvitesResponse_Data,
        };
        message.invites = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.invites.push(InviteData.decode(reader, reader.uint32()));
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
            ...baseGetGuildInvitesResponse_Data,
        };
        message.invites = [];
        if (object.invites !== undefined && object.invites !== null) {
            for (const e of object.invites) {
                message.invites.push(InviteData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.invites) {
            obj.invites = message.invites.map((e) => e ? InviteData.toJSON(e) : undefined);
        }
        else {
            obj.invites = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetGuildInvitesResponse_Data,
        };
        message.invites = [];
        if (object.invites !== undefined && object.invites !== null) {
            for (const e of object.invites) {
                message.invites.push(InviteData.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildInvitesResponse_Data.$type, GetGuildInvitesResponse_Data);
const baseModifyChannelRequest = {
    $type: "pylon.discord.v1.rest.ModifyChannelRequest",
    channelId: "0",
    type: 0,
};
export const ModifyChannelRequest = {
    $type: "pylon.discord.v1.rest.ModifyChannelRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.name !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.name }, writer.uint32(18).fork()).ldelim();
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.position !== undefined) {
            UInt32Value.encode({ $type: "google.protobuf.UInt32Value", value: message.position }, writer.uint32(34).fork()).ldelim();
        }
        if (message.topic !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.topic }, writer.uint32(42).fork()).ldelim();
        }
        if (message.nsfw !== undefined) {
            BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.nsfw }, writer.uint32(50).fork()).ldelim();
        }
        if (message.rateLimitPerUser !== undefined) {
            UInt32Value.encode({
                $type: "google.protobuf.UInt32Value",
                value: message.rateLimitPerUser,
            }, writer.uint32(58).fork()).ldelim();
        }
        if (message.bitrate !== undefined) {
            UInt32Value.encode({ $type: "google.protobuf.UInt32Value", value: message.bitrate }, writer.uint32(66).fork()).ldelim();
        }
        if (message.userLimit !== undefined) {
            UInt32Value.encode({ $type: "google.protobuf.UInt32Value", value: message.userLimit }, writer.uint32(74).fork()).ldelim();
        }
        if (message.permissionOverwrites !== undefined) {
            ModifyChannelRequest_ChannelPermissionOverwritesValue.encode(message.permissionOverwrites, writer.uint32(82).fork()).ldelim();
        }
        if (message.parentId !== undefined) {
            SnowflakeValue.encode(message.parentId, writer.uint32(90).fork()).ldelim();
        }
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseModifyChannelRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.name = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.position = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.topic = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.nsfw = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.rateLimitPerUser = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.bitrate = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.userLimit = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.permissionOverwrites = ModifyChannelRequest_ChannelPermissionOverwritesValue.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.parentId = SnowflakeValue.decode(reader, reader.uint32());
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseModifyChannelRequest };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = channelData_ChannelTypeFromJSON(object.type);
        }
        if (object.position !== undefined && object.position !== null) {
            message.position = Number(object.position);
        }
        if (object.topic !== undefined && object.topic !== null) {
            message.topic = String(object.topic);
        }
        if (object.nsfw !== undefined && object.nsfw !== null) {
            message.nsfw = Boolean(object.nsfw);
        }
        if (object.rateLimitPerUser !== undefined &&
            object.rateLimitPerUser !== null) {
            message.rateLimitPerUser = Number(object.rateLimitPerUser);
        }
        if (object.bitrate !== undefined && object.bitrate !== null) {
            message.bitrate = Number(object.bitrate);
        }
        if (object.userLimit !== undefined && object.userLimit !== null) {
            message.userLimit = Number(object.userLimit);
        }
        if (object.permissionOverwrites !== undefined &&
            object.permissionOverwrites !== null) {
            message.permissionOverwrites = ModifyChannelRequest_ChannelPermissionOverwritesValue.fromJSON(object.permissionOverwrites);
        }
        if (object.parentId !== undefined && object.parentId !== null) {
            message.parentId = SnowflakeValue.fromJSON(object.parentId);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.name !== undefined && (obj.name = message.name);
        message.type !== undefined &&
            (obj.type = channelData_ChannelTypeToJSON(message.type));
        message.position !== undefined && (obj.position = message.position);
        message.topic !== undefined && (obj.topic = message.topic);
        message.nsfw !== undefined && (obj.nsfw = message.nsfw);
        message.rateLimitPerUser !== undefined &&
            (obj.rateLimitPerUser = message.rateLimitPerUser);
        message.bitrate !== undefined && (obj.bitrate = message.bitrate);
        message.userLimit !== undefined && (obj.userLimit = message.userLimit);
        message.permissionOverwrites !== undefined &&
            (obj.permissionOverwrites = message.permissionOverwrites
                ? ModifyChannelRequest_ChannelPermissionOverwritesValue.toJSON(message.permissionOverwrites)
                : undefined);
        message.parentId !== undefined &&
            (obj.parentId = message.parentId
                ? SnowflakeValue.toJSON(message.parentId)
                : undefined);
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseModifyChannelRequest };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        if (object.position !== undefined && object.position !== null) {
            message.position = object.position;
        }
        if (object.topic !== undefined && object.topic !== null) {
            message.topic = object.topic;
        }
        if (object.nsfw !== undefined && object.nsfw !== null) {
            message.nsfw = object.nsfw;
        }
        if (object.rateLimitPerUser !== undefined &&
            object.rateLimitPerUser !== null) {
            message.rateLimitPerUser = object.rateLimitPerUser;
        }
        if (object.bitrate !== undefined && object.bitrate !== null) {
            message.bitrate = object.bitrate;
        }
        if (object.userLimit !== undefined && object.userLimit !== null) {
            message.userLimit = object.userLimit;
        }
        if (object.permissionOverwrites !== undefined &&
            object.permissionOverwrites !== null) {
            message.permissionOverwrites = ModifyChannelRequest_ChannelPermissionOverwritesValue.fromPartial(object.permissionOverwrites);
        }
        if (object.parentId !== undefined && object.parentId !== null) {
            message.parentId = SnowflakeValue.fromPartial(object.parentId);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyChannelRequest.$type, ModifyChannelRequest);
const baseModifyChannelRequest_ChannelPermissionOverwritesValue = {
    $type: "pylon.discord.v1.rest.ModifyChannelRequest.ChannelPermissionOverwritesValue",
};
export const ModifyChannelRequest_ChannelPermissionOverwritesValue = {
    $type: "pylon.discord.v1.rest.ModifyChannelRequest.ChannelPermissionOverwritesValue",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.values) {
            ChannelData_ChannelPermissionOverwriteData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseModifyChannelRequest_ChannelPermissionOverwritesValue,
        };
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(ChannelData_ChannelPermissionOverwriteData.decode(reader, reader.uint32()));
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
            ...baseModifyChannelRequest_ChannelPermissionOverwritesValue,
        };
        message.values = [];
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(ChannelData_ChannelPermissionOverwriteData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.values) {
            obj.values = message.values.map((e) => e ? ChannelData_ChannelPermissionOverwriteData.toJSON(e) : undefined);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseModifyChannelRequest_ChannelPermissionOverwritesValue,
        };
        message.values = [];
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(ChannelData_ChannelPermissionOverwriteData.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyChannelRequest_ChannelPermissionOverwritesValue.$type, ModifyChannelRequest_ChannelPermissionOverwritesValue);
const baseModifyChannelResponse = {
    $type: "pylon.discord.v1.rest.ModifyChannelResponse",
};
export const ModifyChannelResponse = {
    $type: "pylon.discord.v1.rest.ModifyChannelResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            ModifyChannelResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseModifyChannelResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: ModifyChannelResponse_Data.decode(reader, reader.uint32()),
                    };
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseModifyChannelResponse };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: ModifyChannelResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? ModifyChannelResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseModifyChannelResponse };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: ModifyChannelResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyChannelResponse.$type, ModifyChannelResponse);
const baseModifyChannelResponse_Data = {
    $type: "pylon.discord.v1.rest.ModifyChannelResponse.Data",
};
export const ModifyChannelResponse_Data = {
    $type: "pylon.discord.v1.rest.ModifyChannelResponse.Data",
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
            ...baseModifyChannelResponse_Data,
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
            ...baseModifyChannelResponse_Data,
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
            ...baseModifyChannelResponse_Data,
        };
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = ChannelData.fromPartial(object.channel);
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyChannelResponse_Data.$type, ModifyChannelResponse_Data);
const baseDeleteChannelRequest = {
    $type: "pylon.discord.v1.rest.DeleteChannelRequest",
    channelId: "0",
};
export const DeleteChannelRequest = {
    $type: "pylon.discord.v1.rest.DeleteChannelRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteChannelRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteChannelRequest };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteChannelRequest };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(DeleteChannelRequest.$type, DeleteChannelRequest);
const baseDeleteChannelResponse = {
    $type: "pylon.discord.v1.rest.DeleteChannelResponse",
};
export const DeleteChannelResponse = {
    $type: "pylon.discord.v1.rest.DeleteChannelResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteChannelResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteChannelResponse };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteChannelResponse };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(DeleteChannelResponse.$type, DeleteChannelResponse);
const baseGetChannelMessagesRequest = {
    $type: "pylon.discord.v1.rest.GetChannelMessagesRequest",
    channelId: "0",
    limit: 0,
};
export const GetChannelMessagesRequest = {
    $type: "pylon.discord.v1.rest.GetChannelMessagesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.around !== undefined) {
            SnowflakeValue.encode(message.around, writer.uint32(18).fork()).ldelim();
        }
        if (message.before !== undefined) {
            SnowflakeValue.encode(message.before, writer.uint32(26).fork()).ldelim();
        }
        if (message.after !== undefined) {
            SnowflakeValue.encode(message.after, writer.uint32(34).fork()).ldelim();
        }
        if (message.limit !== 0) {
            writer.uint32(40).uint32(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetChannelMessagesRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.around = SnowflakeValue.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.before = SnowflakeValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.after = SnowflakeValue.decode(reader, reader.uint32());
                    break;
                case 5:
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
            ...baseGetChannelMessagesRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.around !== undefined && object.around !== null) {
            message.around = SnowflakeValue.fromJSON(object.around);
        }
        if (object.before !== undefined && object.before !== null) {
            message.before = SnowflakeValue.fromJSON(object.before);
        }
        if (object.after !== undefined && object.after !== null) {
            message.after = SnowflakeValue.fromJSON(object.after);
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = Number(object.limit);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.around !== undefined &&
            (obj.around = message.around
                ? SnowflakeValue.toJSON(message.around)
                : undefined);
        message.before !== undefined &&
            (obj.before = message.before
                ? SnowflakeValue.toJSON(message.before)
                : undefined);
        message.after !== undefined &&
            (obj.after = message.after
                ? SnowflakeValue.toJSON(message.after)
                : undefined);
        message.limit !== undefined && (obj.limit = message.limit);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetChannelMessagesRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.around !== undefined && object.around !== null) {
            message.around = SnowflakeValue.fromPartial(object.around);
        }
        if (object.before !== undefined && object.before !== null) {
            message.before = SnowflakeValue.fromPartial(object.before);
        }
        if (object.after !== undefined && object.after !== null) {
            message.after = SnowflakeValue.fromPartial(object.after);
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = object.limit;
        }
        return message;
    },
};
messageTypeRegistry.set(GetChannelMessagesRequest.$type, GetChannelMessagesRequest);
const baseGetChannelMessagesResponse = {
    $type: "pylon.discord.v1.rest.GetChannelMessagesResponse",
};
export const GetChannelMessagesResponse = {
    $type: "pylon.discord.v1.rest.GetChannelMessagesResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            GetChannelMessagesResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetChannelMessagesResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: GetChannelMessagesResponse_Data.decode(reader, reader.uint32()),
                    };
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
            ...baseGetChannelMessagesResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: GetChannelMessagesResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? GetChannelMessagesResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetChannelMessagesResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: GetChannelMessagesResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(GetChannelMessagesResponse.$type, GetChannelMessagesResponse);
const baseGetChannelMessagesResponse_Data = {
    $type: "pylon.discord.v1.rest.GetChannelMessagesResponse.Data",
};
export const GetChannelMessagesResponse_Data = {
    $type: "pylon.discord.v1.rest.GetChannelMessagesResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.messages) {
            MessageData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetChannelMessagesResponse_Data,
        };
        message.messages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(MessageData.decode(reader, reader.uint32()));
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
            ...baseGetChannelMessagesResponse_Data,
        };
        message.messages = [];
        if (object.messages !== undefined && object.messages !== null) {
            for (const e of object.messages) {
                message.messages.push(MessageData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map((e) => e ? MessageData.toJSON(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetChannelMessagesResponse_Data,
        };
        message.messages = [];
        if (object.messages !== undefined && object.messages !== null) {
            for (const e of object.messages) {
                message.messages.push(MessageData.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(GetChannelMessagesResponse_Data.$type, GetChannelMessagesResponse_Data);
const baseGetChannelMessageRequest = {
    $type: "pylon.discord.v1.rest.GetChannelMessageRequest",
    channelId: "0",
    messageId: "0",
};
export const GetChannelMessageRequest = {
    $type: "pylon.discord.v1.rest.GetChannelMessageRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.messageId !== "0") {
            writer.uint32(17).fixed64(message.messageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetChannelMessageRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.messageId = longToString(reader.fixed64());
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
            ...baseGetChannelMessageRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = String(object.messageId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.messageId !== undefined && (obj.messageId = message.messageId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetChannelMessageRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = object.messageId;
        }
        return message;
    },
};
messageTypeRegistry.set(GetChannelMessageRequest.$type, GetChannelMessageRequest);
const baseGetChannelMessageResponse = {
    $type: "pylon.discord.v1.rest.GetChannelMessageResponse",
};
export const GetChannelMessageResponse = {
    $type: "pylon.discord.v1.rest.GetChannelMessageResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            GetChannelMessageResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetChannelMessageResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: GetChannelMessageResponse_Data.decode(reader, reader.uint32()),
                    };
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
            ...baseGetChannelMessageResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: GetChannelMessageResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? GetChannelMessageResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetChannelMessageResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: GetChannelMessageResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(GetChannelMessageResponse.$type, GetChannelMessageResponse);
const baseGetChannelMessageResponse_Data = {
    $type: "pylon.discord.v1.rest.GetChannelMessageResponse.Data",
};
export const GetChannelMessageResponse_Data = {
    $type: "pylon.discord.v1.rest.GetChannelMessageResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        if (message.message !== undefined) {
            MessageData.encode(message.message, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetChannelMessageResponse_Data,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = MessageData.decode(reader, reader.uint32());
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
            ...baseGetChannelMessageResponse_Data,
        };
        if (object.message !== undefined && object.message !== null) {
            message.message = MessageData.fromJSON(object.message);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined &&
            (obj.message = message.message
                ? MessageData.toJSON(message.message)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetChannelMessageResponse_Data,
        };
        if (object.message !== undefined && object.message !== null) {
            message.message = MessageData.fromPartial(object.message);
        }
        return message;
    },
};
messageTypeRegistry.set(GetChannelMessageResponse_Data.$type, GetChannelMessageResponse_Data);
const baseCreateMessageRequest = {
    $type: "pylon.discord.v1.rest.CreateMessageRequest",
    channelId: "0",
    content: "",
};
export const CreateMessageRequest = {
    $type: "pylon.discord.v1.rest.CreateMessageRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.content !== "") {
            writer.uint32(18).string(message.content);
        }
        if (message.nonce !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.nonce }, writer.uint32(26).fork()).ldelim();
        }
        if (message.tts !== undefined) {
            BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.tts }, writer.uint32(34).fork()).ldelim();
        }
        if (message.embed !== undefined) {
            MessageData_MessageEmbedData.encode(message.embed, writer.uint32(42).fork()).ldelim();
        }
        if (message.allowedMentions !== undefined) {
            CreateMessageRequest_AllowedMentions.encode(message.allowedMentions, writer.uint32(50).fork()).ldelim();
        }
        if (message.attachment !== undefined) {
            CreateMessageRequest_Attachment.encode(message.attachment, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateMessageRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.content = reader.string();
                    break;
                case 3:
                    message.nonce = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.tts = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.embed = MessageData_MessageEmbedData.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.allowedMentions = CreateMessageRequest_AllowedMentions.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.attachment = CreateMessageRequest_Attachment.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateMessageRequest };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = String(object.content);
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = String(object.nonce);
        }
        if (object.tts !== undefined && object.tts !== null) {
            message.tts = Boolean(object.tts);
        }
        if (object.embed !== undefined && object.embed !== null) {
            message.embed = MessageData_MessageEmbedData.fromJSON(object.embed);
        }
        if (object.allowedMentions !== undefined &&
            object.allowedMentions !== null) {
            message.allowedMentions = CreateMessageRequest_AllowedMentions.fromJSON(object.allowedMentions);
        }
        if (object.attachment !== undefined && object.attachment !== null) {
            message.attachment = CreateMessageRequest_Attachment.fromJSON(object.attachment);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.content !== undefined && (obj.content = message.content);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.tts !== undefined && (obj.tts = message.tts);
        message.embed !== undefined &&
            (obj.embed = message.embed
                ? MessageData_MessageEmbedData.toJSON(message.embed)
                : undefined);
        message.allowedMentions !== undefined &&
            (obj.allowedMentions = message.allowedMentions
                ? CreateMessageRequest_AllowedMentions.toJSON(message.allowedMentions)
                : undefined);
        message.attachment !== undefined &&
            (obj.attachment = message.attachment
                ? CreateMessageRequest_Attachment.toJSON(message.attachment)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateMessageRequest };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = object.content;
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = object.nonce;
        }
        if (object.tts !== undefined && object.tts !== null) {
            message.tts = object.tts;
        }
        if (object.embed !== undefined && object.embed !== null) {
            message.embed = MessageData_MessageEmbedData.fromPartial(object.embed);
        }
        if (object.allowedMentions !== undefined &&
            object.allowedMentions !== null) {
            message.allowedMentions = CreateMessageRequest_AllowedMentions.fromPartial(object.allowedMentions);
        }
        if (object.attachment !== undefined && object.attachment !== null) {
            message.attachment = CreateMessageRequest_Attachment.fromPartial(object.attachment);
        }
        return message;
    },
};
messageTypeRegistry.set(CreateMessageRequest.$type, CreateMessageRequest);
const baseCreateMessageRequest_AllowedMentions = {
    $type: "pylon.discord.v1.rest.CreateMessageRequest.AllowedMentions",
};
export const CreateMessageRequest_AllowedMentions = {
    $type: "pylon.discord.v1.rest.CreateMessageRequest.AllowedMentions",
    encode(message, writer = _m0.Writer.create()) {
        if (message.parse !== undefined) {
            CreateMessageRequest_AllowedMentions_AllowedMentionTypes.encode(message.parse, writer.uint32(10).fork()).ldelim();
        }
        if (message.roles !== undefined) {
            SnowflakeListValue.encode(message.roles, writer.uint32(18).fork()).ldelim();
        }
        if (message.users !== undefined) {
            SnowflakeListValue.encode(message.users, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateMessageRequest_AllowedMentions,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.parse = CreateMessageRequest_AllowedMentions_AllowedMentionTypes.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.roles = SnowflakeListValue.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.users = SnowflakeListValue.decode(reader, reader.uint32());
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
            ...baseCreateMessageRequest_AllowedMentions,
        };
        if (object.parse !== undefined && object.parse !== null) {
            message.parse = CreateMessageRequest_AllowedMentions_AllowedMentionTypes.fromJSON(object.parse);
        }
        if (object.roles !== undefined && object.roles !== null) {
            message.roles = SnowflakeListValue.fromJSON(object.roles);
        }
        if (object.users !== undefined && object.users !== null) {
            message.users = SnowflakeListValue.fromJSON(object.users);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.parse !== undefined &&
            (obj.parse = message.parse
                ? CreateMessageRequest_AllowedMentions_AllowedMentionTypes.toJSON(message.parse)
                : undefined);
        message.roles !== undefined &&
            (obj.roles = message.roles
                ? SnowflakeListValue.toJSON(message.roles)
                : undefined);
        message.users !== undefined &&
            (obj.users = message.users
                ? SnowflakeListValue.toJSON(message.users)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateMessageRequest_AllowedMentions,
        };
        if (object.parse !== undefined && object.parse !== null) {
            message.parse = CreateMessageRequest_AllowedMentions_AllowedMentionTypes.fromPartial(object.parse);
        }
        if (object.roles !== undefined && object.roles !== null) {
            message.roles = SnowflakeListValue.fromPartial(object.roles);
        }
        if (object.users !== undefined && object.users !== null) {
            message.users = SnowflakeListValue.fromPartial(object.users);
        }
        return message;
    },
};
messageTypeRegistry.set(CreateMessageRequest_AllowedMentions.$type, CreateMessageRequest_AllowedMentions);
const baseCreateMessageRequest_AllowedMentions_AllowedMentionTypes = {
    $type: "pylon.discord.v1.rest.CreateMessageRequest.AllowedMentions.AllowedMentionTypes",
    roles: false,
    users: false,
    everyone: false,
};
export const CreateMessageRequest_AllowedMentions_AllowedMentionTypes = {
    $type: "pylon.discord.v1.rest.CreateMessageRequest.AllowedMentions.AllowedMentionTypes",
    encode(message, writer = _m0.Writer.create()) {
        if (message.roles === true) {
            writer.uint32(8).bool(message.roles);
        }
        if (message.users === true) {
            writer.uint32(16).bool(message.users);
        }
        if (message.everyone === true) {
            writer.uint32(24).bool(message.everyone);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateMessageRequest_AllowedMentions_AllowedMentionTypes,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.roles = reader.bool();
                    break;
                case 2:
                    message.users = reader.bool();
                    break;
                case 3:
                    message.everyone = reader.bool();
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
            ...baseCreateMessageRequest_AllowedMentions_AllowedMentionTypes,
        };
        if (object.roles !== undefined && object.roles !== null) {
            message.roles = Boolean(object.roles);
        }
        if (object.users !== undefined && object.users !== null) {
            message.users = Boolean(object.users);
        }
        if (object.everyone !== undefined && object.everyone !== null) {
            message.everyone = Boolean(object.everyone);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.roles !== undefined && (obj.roles = message.roles);
        message.users !== undefined && (obj.users = message.users);
        message.everyone !== undefined && (obj.everyone = message.everyone);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateMessageRequest_AllowedMentions_AllowedMentionTypes,
        };
        if (object.roles !== undefined && object.roles !== null) {
            message.roles = object.roles;
        }
        if (object.users !== undefined && object.users !== null) {
            message.users = object.users;
        }
        if (object.everyone !== undefined && object.everyone !== null) {
            message.everyone = object.everyone;
        }
        return message;
    },
};
messageTypeRegistry.set(CreateMessageRequest_AllowedMentions_AllowedMentionTypes.$type, CreateMessageRequest_AllowedMentions_AllowedMentionTypes);
const baseCreateMessageRequest_Attachment = {
    $type: "pylon.discord.v1.rest.CreateMessageRequest.Attachment",
    name: "",
};
export const CreateMessageRequest_Attachment = {
    $type: "pylon.discord.v1.rest.CreateMessageRequest.Attachment",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.content.length !== 0) {
            writer.uint32(18).bytes(message.content);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateMessageRequest_Attachment,
        };
        message.content = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.content = reader.bytes();
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
            ...baseCreateMessageRequest_Attachment,
        };
        message.content = new Uint8Array();
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = bytesFromBase64(object.content);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.content !== undefined &&
            (obj.content = base64FromBytes(message.content !== undefined ? message.content : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateMessageRequest_Attachment,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = object.content;
        }
        return message;
    },
};
messageTypeRegistry.set(CreateMessageRequest_Attachment.$type, CreateMessageRequest_Attachment);
const baseCreateMessageResponse = {
    $type: "pylon.discord.v1.rest.CreateMessageResponse",
};
export const CreateMessageResponse = {
    $type: "pylon.discord.v1.rest.CreateMessageResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            CreateMessageResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateMessageResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: CreateMessageResponse_Data.decode(reader, reader.uint32()),
                    };
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateMessageResponse };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: CreateMessageResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? CreateMessageResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateMessageResponse };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: CreateMessageResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(CreateMessageResponse.$type, CreateMessageResponse);
const baseCreateMessageResponse_Data = {
    $type: "pylon.discord.v1.rest.CreateMessageResponse.Data",
};
export const CreateMessageResponse_Data = {
    $type: "pylon.discord.v1.rest.CreateMessageResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        if (message.message !== undefined) {
            MessageData.encode(message.message, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateMessageResponse_Data,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = MessageData.decode(reader, reader.uint32());
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
            ...baseCreateMessageResponse_Data,
        };
        if (object.message !== undefined && object.message !== null) {
            message.message = MessageData.fromJSON(object.message);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined &&
            (obj.message = message.message
                ? MessageData.toJSON(message.message)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateMessageResponse_Data,
        };
        if (object.message !== undefined && object.message !== null) {
            message.message = MessageData.fromPartial(object.message);
        }
        return message;
    },
};
messageTypeRegistry.set(CreateMessageResponse_Data.$type, CreateMessageResponse_Data);
const baseCrosspostMessageRequest = {
    $type: "pylon.discord.v1.rest.CrosspostMessageRequest",
    channelId: "0",
    messageId: "0",
};
export const CrosspostMessageRequest = {
    $type: "pylon.discord.v1.rest.CrosspostMessageRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.messageId !== "0") {
            writer.uint32(17).fixed64(message.messageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCrosspostMessageRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.messageId = longToString(reader.fixed64());
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
            ...baseCrosspostMessageRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = String(object.messageId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.messageId !== undefined && (obj.messageId = message.messageId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCrosspostMessageRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = object.messageId;
        }
        return message;
    },
};
messageTypeRegistry.set(CrosspostMessageRequest.$type, CrosspostMessageRequest);
const baseCrosspostMessageResponse = {
    $type: "pylon.discord.v1.rest.CrosspostMessageResponse",
};
export const CrosspostMessageResponse = {
    $type: "pylon.discord.v1.rest.CrosspostMessageResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            CrosspostMessageResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCrosspostMessageResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: CrosspostMessageResponse_Data.decode(reader, reader.uint32()),
                    };
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
            ...baseCrosspostMessageResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: CrosspostMessageResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? CrosspostMessageResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCrosspostMessageResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: CrosspostMessageResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(CrosspostMessageResponse.$type, CrosspostMessageResponse);
const baseCrosspostMessageResponse_Data = {
    $type: "pylon.discord.v1.rest.CrosspostMessageResponse.Data",
};
export const CrosspostMessageResponse_Data = {
    $type: "pylon.discord.v1.rest.CrosspostMessageResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        if (message.message !== undefined) {
            MessageData.encode(message.message, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCrosspostMessageResponse_Data,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = MessageData.decode(reader, reader.uint32());
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
            ...baseCrosspostMessageResponse_Data,
        };
        if (object.message !== undefined && object.message !== null) {
            message.message = MessageData.fromJSON(object.message);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined &&
            (obj.message = message.message
                ? MessageData.toJSON(message.message)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCrosspostMessageResponse_Data,
        };
        if (object.message !== undefined && object.message !== null) {
            message.message = MessageData.fromPartial(object.message);
        }
        return message;
    },
};
messageTypeRegistry.set(CrosspostMessageResponse_Data.$type, CrosspostMessageResponse_Data);
const baseCreateReactionRequest = {
    $type: "pylon.discord.v1.rest.CreateReactionRequest",
    channelId: "0",
    messageId: "0",
    emoji: "",
};
export const CreateReactionRequest = {
    $type: "pylon.discord.v1.rest.CreateReactionRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.messageId !== "0") {
            writer.uint32(17).fixed64(message.messageId);
        }
        if (message.emoji !== "") {
            writer.uint32(26).string(message.emoji);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateReactionRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.messageId = longToString(reader.fixed64());
                    break;
                case 3:
                    message.emoji = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateReactionRequest };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = String(object.messageId);
        }
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = String(object.emoji);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.messageId !== undefined && (obj.messageId = message.messageId);
        message.emoji !== undefined && (obj.emoji = message.emoji);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateReactionRequest };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = object.messageId;
        }
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = object.emoji;
        }
        return message;
    },
};
messageTypeRegistry.set(CreateReactionRequest.$type, CreateReactionRequest);
const baseCreateReactionResponse = {
    $type: "pylon.discord.v1.rest.CreateReactionResponse",
};
export const CreateReactionResponse = {
    $type: "pylon.discord.v1.rest.CreateReactionResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateReactionResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateReactionResponse };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateReactionResponse };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(CreateReactionResponse.$type, CreateReactionResponse);
const baseDeleteOwnReactionRequest = {
    $type: "pylon.discord.v1.rest.DeleteOwnReactionRequest",
    channelId: "0",
    messageId: "0",
    emoji: "",
};
export const DeleteOwnReactionRequest = {
    $type: "pylon.discord.v1.rest.DeleteOwnReactionRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.messageId !== "0") {
            writer.uint32(17).fixed64(message.messageId);
        }
        if (message.emoji !== "") {
            writer.uint32(26).string(message.emoji);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteOwnReactionRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.messageId = longToString(reader.fixed64());
                    break;
                case 3:
                    message.emoji = reader.string();
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
            ...baseDeleteOwnReactionRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = String(object.messageId);
        }
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = String(object.emoji);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.messageId !== undefined && (obj.messageId = message.messageId);
        message.emoji !== undefined && (obj.emoji = message.emoji);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteOwnReactionRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = object.messageId;
        }
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = object.emoji;
        }
        return message;
    },
};
messageTypeRegistry.set(DeleteOwnReactionRequest.$type, DeleteOwnReactionRequest);
const baseDeleteOwnReactionResponse = {
    $type: "pylon.discord.v1.rest.DeleteOwnReactionResponse",
};
export const DeleteOwnReactionResponse = {
    $type: "pylon.discord.v1.rest.DeleteOwnReactionResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteOwnReactionResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
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
            ...baseDeleteOwnReactionResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteOwnReactionResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(DeleteOwnReactionResponse.$type, DeleteOwnReactionResponse);
const baseDeleteUserReactionRequest = {
    $type: "pylon.discord.v1.rest.DeleteUserReactionRequest",
    channelId: "0",
    messageId: "0",
    emoji: "",
    userId: "0",
};
export const DeleteUserReactionRequest = {
    $type: "pylon.discord.v1.rest.DeleteUserReactionRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.messageId !== "0") {
            writer.uint32(17).fixed64(message.messageId);
        }
        if (message.emoji !== "") {
            writer.uint32(26).string(message.emoji);
        }
        if (message.userId !== "0") {
            writer.uint32(33).fixed64(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteUserReactionRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.messageId = longToString(reader.fixed64());
                    break;
                case 3:
                    message.emoji = reader.string();
                    break;
                case 4:
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
            ...baseDeleteUserReactionRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = String(object.messageId);
        }
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = String(object.emoji);
        }
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = String(object.userId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.messageId !== undefined && (obj.messageId = message.messageId);
        message.emoji !== undefined && (obj.emoji = message.emoji);
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteUserReactionRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = object.messageId;
        }
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = object.emoji;
        }
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        return message;
    },
};
messageTypeRegistry.set(DeleteUserReactionRequest.$type, DeleteUserReactionRequest);
const baseDeleteUserReactionResponse = {
    $type: "pylon.discord.v1.rest.DeleteUserReactionResponse",
};
export const DeleteUserReactionResponse = {
    $type: "pylon.discord.v1.rest.DeleteUserReactionResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteUserReactionResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
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
            ...baseDeleteUserReactionResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteUserReactionResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(DeleteUserReactionResponse.$type, DeleteUserReactionResponse);
const baseDeleteAllReactionsRequest = {
    $type: "pylon.discord.v1.rest.DeleteAllReactionsRequest",
    channelId: "0",
    messageId: "0",
};
export const DeleteAllReactionsRequest = {
    $type: "pylon.discord.v1.rest.DeleteAllReactionsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.messageId !== "0") {
            writer.uint32(17).fixed64(message.messageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteAllReactionsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.messageId = longToString(reader.fixed64());
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
            ...baseDeleteAllReactionsRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = String(object.messageId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.messageId !== undefined && (obj.messageId = message.messageId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteAllReactionsRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = object.messageId;
        }
        return message;
    },
};
messageTypeRegistry.set(DeleteAllReactionsRequest.$type, DeleteAllReactionsRequest);
const baseDeleteAllReactionsResponse = {
    $type: "pylon.discord.v1.rest.DeleteAllReactionsResponse",
};
export const DeleteAllReactionsResponse = {
    $type: "pylon.discord.v1.rest.DeleteAllReactionsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteAllReactionsResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
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
            ...baseDeleteAllReactionsResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteAllReactionsResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(DeleteAllReactionsResponse.$type, DeleteAllReactionsResponse);
const baseDeleteAllReactionsForEmojiRequest = {
    $type: "pylon.discord.v1.rest.DeleteAllReactionsForEmojiRequest",
    channelId: "0",
    messageId: "0",
    emoji: "",
};
export const DeleteAllReactionsForEmojiRequest = {
    $type: "pylon.discord.v1.rest.DeleteAllReactionsForEmojiRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.messageId !== "0") {
            writer.uint32(17).fixed64(message.messageId);
        }
        if (message.emoji !== "") {
            writer.uint32(26).string(message.emoji);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteAllReactionsForEmojiRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.messageId = longToString(reader.fixed64());
                    break;
                case 3:
                    message.emoji = reader.string();
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
            ...baseDeleteAllReactionsForEmojiRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = String(object.messageId);
        }
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = String(object.emoji);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.messageId !== undefined && (obj.messageId = message.messageId);
        message.emoji !== undefined && (obj.emoji = message.emoji);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteAllReactionsForEmojiRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = object.messageId;
        }
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = object.emoji;
        }
        return message;
    },
};
messageTypeRegistry.set(DeleteAllReactionsForEmojiRequest.$type, DeleteAllReactionsForEmojiRequest);
const baseDeleteAllReactionsForEmojiResponse = {
    $type: "pylon.discord.v1.rest.DeleteAllReactionsForEmojiResponse",
};
export const DeleteAllReactionsForEmojiResponse = {
    $type: "pylon.discord.v1.rest.DeleteAllReactionsForEmojiResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteAllReactionsForEmojiResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
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
            ...baseDeleteAllReactionsForEmojiResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteAllReactionsForEmojiResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(DeleteAllReactionsForEmojiResponse.$type, DeleteAllReactionsForEmojiResponse);
const baseEditMessageRequest = {
    $type: "pylon.discord.v1.rest.EditMessageRequest",
    channelId: "0",
    messageId: "0",
};
export const EditMessageRequest = {
    $type: "pylon.discord.v1.rest.EditMessageRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.messageId !== "0") {
            writer.uint32(17).fixed64(message.messageId);
        }
        if (message.content !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.content }, writer.uint32(26).fork()).ldelim();
        }
        if (message.embed !== undefined) {
            MessageData_MessageEmbedData.encode(message.embed, writer.uint32(34).fork()).ldelim();
        }
        if (message.flags !== undefined) {
            UInt32Value.encode({ $type: "google.protobuf.UInt32Value", value: message.flags }, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEditMessageRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.messageId = longToString(reader.fixed64());
                    break;
                case 3:
                    message.content = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.embed = MessageData_MessageEmbedData.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.flags = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEditMessageRequest };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = String(object.messageId);
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = String(object.content);
        }
        if (object.embed !== undefined && object.embed !== null) {
            message.embed = MessageData_MessageEmbedData.fromJSON(object.embed);
        }
        if (object.flags !== undefined && object.flags !== null) {
            message.flags = Number(object.flags);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.messageId !== undefined && (obj.messageId = message.messageId);
        message.content !== undefined && (obj.content = message.content);
        message.embed !== undefined &&
            (obj.embed = message.embed
                ? MessageData_MessageEmbedData.toJSON(message.embed)
                : undefined);
        message.flags !== undefined && (obj.flags = message.flags);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEditMessageRequest };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = object.messageId;
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = object.content;
        }
        if (object.embed !== undefined && object.embed !== null) {
            message.embed = MessageData_MessageEmbedData.fromPartial(object.embed);
        }
        if (object.flags !== undefined && object.flags !== null) {
            message.flags = object.flags;
        }
        return message;
    },
};
messageTypeRegistry.set(EditMessageRequest.$type, EditMessageRequest);
const baseEditMessageResponse = {
    $type: "pylon.discord.v1.rest.EditMessageResponse",
};
export const EditMessageResponse = {
    $type: "pylon.discord.v1.rest.EditMessageResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            EditMessageResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEditMessageResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: EditMessageResponse_Data.decode(reader, reader.uint32()),
                    };
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEditMessageResponse };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: EditMessageResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? EditMessageResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEditMessageResponse };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: EditMessageResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(EditMessageResponse.$type, EditMessageResponse);
const baseEditMessageResponse_Data = {
    $type: "pylon.discord.v1.rest.EditMessageResponse.Data",
};
export const EditMessageResponse_Data = {
    $type: "pylon.discord.v1.rest.EditMessageResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        if (message.message !== undefined) {
            MessageData.encode(message.message, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseEditMessageResponse_Data,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = MessageData.decode(reader, reader.uint32());
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
            ...baseEditMessageResponse_Data,
        };
        if (object.message !== undefined && object.message !== null) {
            message.message = MessageData.fromJSON(object.message);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined &&
            (obj.message = message.message
                ? MessageData.toJSON(message.message)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseEditMessageResponse_Data,
        };
        if (object.message !== undefined && object.message !== null) {
            message.message = MessageData.fromPartial(object.message);
        }
        return message;
    },
};
messageTypeRegistry.set(EditMessageResponse_Data.$type, EditMessageResponse_Data);
const baseDeleteMessageRequest = {
    $type: "pylon.discord.v1.rest.DeleteMessageRequest",
    channelId: "0",
    messageId: "0",
};
export const DeleteMessageRequest = {
    $type: "pylon.discord.v1.rest.DeleteMessageRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.messageId !== "0") {
            writer.uint32(17).fixed64(message.messageId);
        }
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteMessageRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.messageId = longToString(reader.fixed64());
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteMessageRequest };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = String(object.messageId);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.messageId !== undefined && (obj.messageId = message.messageId);
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteMessageRequest };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = object.messageId;
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(DeleteMessageRequest.$type, DeleteMessageRequest);
const baseDeleteMessageResponse = {
    $type: "pylon.discord.v1.rest.DeleteMessageResponse",
};
export const DeleteMessageResponse = {
    $type: "pylon.discord.v1.rest.DeleteMessageResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteMessageResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteMessageResponse };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteMessageResponse };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(DeleteMessageResponse.$type, DeleteMessageResponse);
const baseBulkDeleteMessagesRequest = {
    $type: "pylon.discord.v1.rest.BulkDeleteMessagesRequest",
    channelId: "0",
    messageIds: "0",
};
export const BulkDeleteMessagesRequest = {
    $type: "pylon.discord.v1.rest.BulkDeleteMessagesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        writer.uint32(18).fork();
        for (const v of message.messageIds) {
            writer.fixed64(v);
        }
        writer.ldelim();
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBulkDeleteMessagesRequest,
        };
        message.messageIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.messageIds.push(longToString(reader.fixed64()));
                        }
                    }
                    else {
                        message.messageIds.push(longToString(reader.fixed64()));
                    }
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
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
            ...baseBulkDeleteMessagesRequest,
        };
        message.messageIds = [];
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.messageIds !== undefined && object.messageIds !== null) {
            for (const e of object.messageIds) {
                message.messageIds.push(String(e));
            }
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        if (message.messageIds) {
            obj.messageIds = message.messageIds.map((e) => e);
        }
        else {
            obj.messageIds = [];
        }
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseBulkDeleteMessagesRequest,
        };
        message.messageIds = [];
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.messageIds !== undefined && object.messageIds !== null) {
            for (const e of object.messageIds) {
                message.messageIds.push(e);
            }
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(BulkDeleteMessagesRequest.$type, BulkDeleteMessagesRequest);
const baseBulkDeleteMessagesResponse = {
    $type: "pylon.discord.v1.rest.BulkDeleteMessagesResponse",
};
export const BulkDeleteMessagesResponse = {
    $type: "pylon.discord.v1.rest.BulkDeleteMessagesResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBulkDeleteMessagesResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
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
            ...baseBulkDeleteMessagesResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseBulkDeleteMessagesResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(BulkDeleteMessagesResponse.$type, BulkDeleteMessagesResponse);
const baseEditChannelPermissionsRequest = {
    $type: "pylon.discord.v1.rest.EditChannelPermissionsRequest",
    channelId: "0",
    overwriteId: "0",
    allow: "0",
    deny: "0",
    type: 0,
};
export const EditChannelPermissionsRequest = {
    $type: "pylon.discord.v1.rest.EditChannelPermissionsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.overwriteId !== "0") {
            writer.uint32(17).fixed64(message.overwriteId);
        }
        if (message.allow !== "0") {
            writer.uint32(24).uint64(message.allow);
        }
        if (message.deny !== "0") {
            writer.uint32(32).uint64(message.deny);
        }
        if (message.type !== 0) {
            writer.uint32(40).int32(message.type);
        }
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseEditChannelPermissionsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.overwriteId = longToString(reader.fixed64());
                    break;
                case 3:
                    message.allow = longToString(reader.uint64());
                    break;
                case 4:
                    message.deny = longToString(reader.uint64());
                    break;
                case 5:
                    message.type = reader.int32();
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
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
            ...baseEditChannelPermissionsRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.overwriteId !== undefined && object.overwriteId !== null) {
            message.overwriteId = String(object.overwriteId);
        }
        if (object.allow !== undefined && object.allow !== null) {
            message.allow = String(object.allow);
        }
        if (object.deny !== undefined && object.deny !== null) {
            message.deny = String(object.deny);
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = channelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteTypeFromJSON(object.type);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.overwriteId !== undefined &&
            (obj.overwriteId = message.overwriteId);
        message.allow !== undefined && (obj.allow = message.allow);
        message.deny !== undefined && (obj.deny = message.deny);
        message.type !== undefined &&
            (obj.type = channelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteTypeToJSON(message.type));
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseEditChannelPermissionsRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.overwriteId !== undefined && object.overwriteId !== null) {
            message.overwriteId = object.overwriteId;
        }
        if (object.allow !== undefined && object.allow !== null) {
            message.allow = object.allow;
        }
        if (object.deny !== undefined && object.deny !== null) {
            message.deny = object.deny;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(EditChannelPermissionsRequest.$type, EditChannelPermissionsRequest);
const baseEditChannelPermissionsResponse = {
    $type: "pylon.discord.v1.rest.EditChannelPermissionsResponse",
};
export const EditChannelPermissionsResponse = {
    $type: "pylon.discord.v1.rest.EditChannelPermissionsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseEditChannelPermissionsResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
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
            ...baseEditChannelPermissionsResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseEditChannelPermissionsResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(EditChannelPermissionsResponse.$type, EditChannelPermissionsResponse);
const baseGetChannelInvitesRequest = {
    $type: "pylon.discord.v1.rest.GetChannelInvitesRequest",
    channelId: "0",
};
export const GetChannelInvitesRequest = {
    $type: "pylon.discord.v1.rest.GetChannelInvitesRequest",
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
            ...baseGetChannelInvitesRequest,
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
            ...baseGetChannelInvitesRequest,
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
            ...baseGetChannelInvitesRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        return message;
    },
};
messageTypeRegistry.set(GetChannelInvitesRequest.$type, GetChannelInvitesRequest);
const baseGetChannelInvitesResponse = {
    $type: "pylon.discord.v1.rest.GetChannelInvitesResponse",
};
export const GetChannelInvitesResponse = {
    $type: "pylon.discord.v1.rest.GetChannelInvitesResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            GetChannelInvitesResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetChannelInvitesResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: GetChannelInvitesResponse_Data.decode(reader, reader.uint32()),
                    };
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
            ...baseGetChannelInvitesResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: GetChannelInvitesResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? GetChannelInvitesResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetChannelInvitesResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: GetChannelInvitesResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(GetChannelInvitesResponse.$type, GetChannelInvitesResponse);
const baseGetChannelInvitesResponse_Data = {
    $type: "pylon.discord.v1.rest.GetChannelInvitesResponse.Data",
};
export const GetChannelInvitesResponse_Data = {
    $type: "pylon.discord.v1.rest.GetChannelInvitesResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.invites) {
            InviteData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetChannelInvitesResponse_Data,
        };
        message.invites = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.invites.push(InviteData.decode(reader, reader.uint32()));
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
            ...baseGetChannelInvitesResponse_Data,
        };
        message.invites = [];
        if (object.invites !== undefined && object.invites !== null) {
            for (const e of object.invites) {
                message.invites.push(InviteData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.invites) {
            obj.invites = message.invites.map((e) => e ? InviteData.toJSON(e) : undefined);
        }
        else {
            obj.invites = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetChannelInvitesResponse_Data,
        };
        message.invites = [];
        if (object.invites !== undefined && object.invites !== null) {
            for (const e of object.invites) {
                message.invites.push(InviteData.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(GetChannelInvitesResponse_Data.$type, GetChannelInvitesResponse_Data);
const baseCreateChannelInviteRequest = {
    $type: "pylon.discord.v1.rest.CreateChannelInviteRequest",
    channelId: "0",
    targetUserType: 0,
};
export const CreateChannelInviteRequest = {
    $type: "pylon.discord.v1.rest.CreateChannelInviteRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.maxAge !== undefined) {
            UInt32Value.encode({ $type: "google.protobuf.UInt32Value", value: message.maxAge }, writer.uint32(18).fork()).ldelim();
        }
        if (message.maxUses !== undefined) {
            UInt32Value.encode({ $type: "google.protobuf.UInt32Value", value: message.maxUses }, writer.uint32(26).fork()).ldelim();
        }
        if (message.temporary !== undefined) {
            BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.temporary }, writer.uint32(34).fork()).ldelim();
        }
        if (message.unique !== undefined) {
            BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.unique }, writer.uint32(42).fork()).ldelim();
        }
        if (message.targetUser !== undefined) {
            SnowflakeValue.encode(message.targetUser, writer.uint32(50).fork()).ldelim();
        }
        if (message.targetUserType !== 0) {
            writer.uint32(56).int32(message.targetUserType);
        }
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateChannelInviteRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.maxAge = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.maxUses = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.temporary = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.unique = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.targetUser = SnowflakeValue.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.targetUserType = reader.int32();
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
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
            ...baseCreateChannelInviteRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.maxAge !== undefined && object.maxAge !== null) {
            message.maxAge = Number(object.maxAge);
        }
        if (object.maxUses !== undefined && object.maxUses !== null) {
            message.maxUses = Number(object.maxUses);
        }
        if (object.temporary !== undefined && object.temporary !== null) {
            message.temporary = Boolean(object.temporary);
        }
        if (object.unique !== undefined && object.unique !== null) {
            message.unique = Boolean(object.unique);
        }
        if (object.targetUser !== undefined && object.targetUser !== null) {
            message.targetUser = SnowflakeValue.fromJSON(object.targetUser);
        }
        if (object.targetUserType !== undefined && object.targetUserType !== null) {
            message.targetUserType = inviteData_InviteTargetUserTypeFromJSON(object.targetUserType);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.maxAge !== undefined && (obj.maxAge = message.maxAge);
        message.maxUses !== undefined && (obj.maxUses = message.maxUses);
        message.temporary !== undefined && (obj.temporary = message.temporary);
        message.unique !== undefined && (obj.unique = message.unique);
        message.targetUser !== undefined &&
            (obj.targetUser = message.targetUser
                ? SnowflakeValue.toJSON(message.targetUser)
                : undefined);
        message.targetUserType !== undefined &&
            (obj.targetUserType = inviteData_InviteTargetUserTypeToJSON(message.targetUserType));
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateChannelInviteRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.maxAge !== undefined && object.maxAge !== null) {
            message.maxAge = object.maxAge;
        }
        if (object.maxUses !== undefined && object.maxUses !== null) {
            message.maxUses = object.maxUses;
        }
        if (object.temporary !== undefined && object.temporary !== null) {
            message.temporary = object.temporary;
        }
        if (object.unique !== undefined && object.unique !== null) {
            message.unique = object.unique;
        }
        if (object.targetUser !== undefined && object.targetUser !== null) {
            message.targetUser = SnowflakeValue.fromPartial(object.targetUser);
        }
        if (object.targetUserType !== undefined && object.targetUserType !== null) {
            message.targetUserType = object.targetUserType;
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(CreateChannelInviteRequest.$type, CreateChannelInviteRequest);
const baseCreateChannelInviteResponse = {
    $type: "pylon.discord.v1.rest.CreateChannelInviteResponse",
};
export const CreateChannelInviteResponse = {
    $type: "pylon.discord.v1.rest.CreateChannelInviteResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            CreateChannelInviteResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateChannelInviteResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: CreateChannelInviteResponse_Data.decode(reader, reader.uint32()),
                    };
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
            ...baseCreateChannelInviteResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: CreateChannelInviteResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? CreateChannelInviteResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateChannelInviteResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: CreateChannelInviteResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(CreateChannelInviteResponse.$type, CreateChannelInviteResponse);
const baseCreateChannelInviteResponse_Data = {
    $type: "pylon.discord.v1.rest.CreateChannelInviteResponse.Data",
};
export const CreateChannelInviteResponse_Data = {
    $type: "pylon.discord.v1.rest.CreateChannelInviteResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        if (message.invite !== undefined) {
            InviteData.encode(message.invite, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateChannelInviteResponse_Data,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.invite = InviteData.decode(reader, reader.uint32());
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
            ...baseCreateChannelInviteResponse_Data,
        };
        if (object.invite !== undefined && object.invite !== null) {
            message.invite = InviteData.fromJSON(object.invite);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.invite !== undefined &&
            (obj.invite = message.invite
                ? InviteData.toJSON(message.invite)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateChannelInviteResponse_Data,
        };
        if (object.invite !== undefined && object.invite !== null) {
            message.invite = InviteData.fromPartial(object.invite);
        }
        return message;
    },
};
messageTypeRegistry.set(CreateChannelInviteResponse_Data.$type, CreateChannelInviteResponse_Data);
const baseDeleteChannelPermissionRequest = {
    $type: "pylon.discord.v1.rest.DeleteChannelPermissionRequest",
    channelId: "0",
    overwriteId: "0",
};
export const DeleteChannelPermissionRequest = {
    $type: "pylon.discord.v1.rest.DeleteChannelPermissionRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.overwriteId !== "0") {
            writer.uint32(17).fixed64(message.overwriteId);
        }
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteChannelPermissionRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.overwriteId = longToString(reader.fixed64());
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
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
            ...baseDeleteChannelPermissionRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.overwriteId !== undefined && object.overwriteId !== null) {
            message.overwriteId = String(object.overwriteId);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.overwriteId !== undefined &&
            (obj.overwriteId = message.overwriteId);
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteChannelPermissionRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.overwriteId !== undefined && object.overwriteId !== null) {
            message.overwriteId = object.overwriteId;
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(DeleteChannelPermissionRequest.$type, DeleteChannelPermissionRequest);
const baseDeleteChannelPermissionResponse = {
    $type: "pylon.discord.v1.rest.DeleteChannelPermissionResponse",
};
export const DeleteChannelPermissionResponse = {
    $type: "pylon.discord.v1.rest.DeleteChannelPermissionResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteChannelPermissionResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
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
            ...baseDeleteChannelPermissionResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteChannelPermissionResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(DeleteChannelPermissionResponse.$type, DeleteChannelPermissionResponse);
const baseFollowNewsChannelRequest = {
    $type: "pylon.discord.v1.rest.FollowNewsChannelRequest",
    channelId: "0",
    webhookChannelId: "0",
};
export const FollowNewsChannelRequest = {
    $type: "pylon.discord.v1.rest.FollowNewsChannelRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.webhookChannelId !== "0") {
            writer.uint32(17).fixed64(message.webhookChannelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseFollowNewsChannelRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.webhookChannelId = longToString(reader.fixed64());
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
            ...baseFollowNewsChannelRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.webhookChannelId !== undefined &&
            object.webhookChannelId !== null) {
            message.webhookChannelId = String(object.webhookChannelId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.webhookChannelId !== undefined &&
            (obj.webhookChannelId = message.webhookChannelId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseFollowNewsChannelRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.webhookChannelId !== undefined &&
            object.webhookChannelId !== null) {
            message.webhookChannelId = object.webhookChannelId;
        }
        return message;
    },
};
messageTypeRegistry.set(FollowNewsChannelRequest.$type, FollowNewsChannelRequest);
const baseFollowNewsChannelResponse = {
    $type: "pylon.discord.v1.rest.FollowNewsChannelResponse",
};
export const FollowNewsChannelResponse = {
    $type: "pylon.discord.v1.rest.FollowNewsChannelResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            FollowNewsChannelResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseFollowNewsChannelResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: FollowNewsChannelResponse_Data.decode(reader, reader.uint32()),
                    };
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
            ...baseFollowNewsChannelResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: FollowNewsChannelResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? FollowNewsChannelResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseFollowNewsChannelResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: FollowNewsChannelResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(FollowNewsChannelResponse.$type, FollowNewsChannelResponse);
const baseFollowNewsChannelResponse_Data = {
    $type: "pylon.discord.v1.rest.FollowNewsChannelResponse.Data",
    channelId: "0",
    webhookId: "0",
};
export const FollowNewsChannelResponse_Data = {
    $type: "pylon.discord.v1.rest.FollowNewsChannelResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.webhookId !== "0") {
            writer.uint32(17).fixed64(message.webhookId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseFollowNewsChannelResponse_Data,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.webhookId = longToString(reader.fixed64());
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
            ...baseFollowNewsChannelResponse_Data,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.webhookId !== undefined && object.webhookId !== null) {
            message.webhookId = String(object.webhookId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.webhookId !== undefined && (obj.webhookId = message.webhookId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseFollowNewsChannelResponse_Data,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.webhookId !== undefined && object.webhookId !== null) {
            message.webhookId = object.webhookId;
        }
        return message;
    },
};
messageTypeRegistry.set(FollowNewsChannelResponse_Data.$type, FollowNewsChannelResponse_Data);
const baseTriggerTypingIndicatorRequest = {
    $type: "pylon.discord.v1.rest.TriggerTypingIndicatorRequest",
    channelId: "0",
};
export const TriggerTypingIndicatorRequest = {
    $type: "pylon.discord.v1.rest.TriggerTypingIndicatorRequest",
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
            ...baseTriggerTypingIndicatorRequest,
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
            ...baseTriggerTypingIndicatorRequest,
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
            ...baseTriggerTypingIndicatorRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        return message;
    },
};
messageTypeRegistry.set(TriggerTypingIndicatorRequest.$type, TriggerTypingIndicatorRequest);
const baseTriggerTypingIndicatorResponse = {
    $type: "pylon.discord.v1.rest.TriggerTypingIndicatorResponse",
};
export const TriggerTypingIndicatorResponse = {
    $type: "pylon.discord.v1.rest.TriggerTypingIndicatorResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTriggerTypingIndicatorResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
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
            ...baseTriggerTypingIndicatorResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseTriggerTypingIndicatorResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(TriggerTypingIndicatorResponse.$type, TriggerTypingIndicatorResponse);
const baseGetPinnedMessagesRequest = {
    $type: "pylon.discord.v1.rest.GetPinnedMessagesRequest",
    channelId: "0",
};
export const GetPinnedMessagesRequest = {
    $type: "pylon.discord.v1.rest.GetPinnedMessagesRequest",
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
            ...baseGetPinnedMessagesRequest,
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
            ...baseGetPinnedMessagesRequest,
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
            ...baseGetPinnedMessagesRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        return message;
    },
};
messageTypeRegistry.set(GetPinnedMessagesRequest.$type, GetPinnedMessagesRequest);
const baseGetPinnedMessagesResponse = {
    $type: "pylon.discord.v1.rest.GetPinnedMessagesResponse",
};
export const GetPinnedMessagesResponse = {
    $type: "pylon.discord.v1.rest.GetPinnedMessagesResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            GetPinnedMessagesResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetPinnedMessagesResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: GetPinnedMessagesResponse_Data.decode(reader, reader.uint32()),
                    };
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
            ...baseGetPinnedMessagesResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: GetPinnedMessagesResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? GetPinnedMessagesResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetPinnedMessagesResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: GetPinnedMessagesResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(GetPinnedMessagesResponse.$type, GetPinnedMessagesResponse);
const baseGetPinnedMessagesResponse_Data = {
    $type: "pylon.discord.v1.rest.GetPinnedMessagesResponse.Data",
};
export const GetPinnedMessagesResponse_Data = {
    $type: "pylon.discord.v1.rest.GetPinnedMessagesResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.messages) {
            MessageData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetPinnedMessagesResponse_Data,
        };
        message.messages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(MessageData.decode(reader, reader.uint32()));
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
            ...baseGetPinnedMessagesResponse_Data,
        };
        message.messages = [];
        if (object.messages !== undefined && object.messages !== null) {
            for (const e of object.messages) {
                message.messages.push(MessageData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map((e) => e ? MessageData.toJSON(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetPinnedMessagesResponse_Data,
        };
        message.messages = [];
        if (object.messages !== undefined && object.messages !== null) {
            for (const e of object.messages) {
                message.messages.push(MessageData.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(GetPinnedMessagesResponse_Data.$type, GetPinnedMessagesResponse_Data);
const baseAddPinnedChannelMessageRequest = {
    $type: "pylon.discord.v1.rest.AddPinnedChannelMessageRequest",
    channelId: "0",
    messageId: "0",
};
export const AddPinnedChannelMessageRequest = {
    $type: "pylon.discord.v1.rest.AddPinnedChannelMessageRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.messageId !== "0") {
            writer.uint32(17).fixed64(message.messageId);
        }
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddPinnedChannelMessageRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.messageId = longToString(reader.fixed64());
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
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
            ...baseAddPinnedChannelMessageRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = String(object.messageId);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.messageId !== undefined && (obj.messageId = message.messageId);
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddPinnedChannelMessageRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = object.messageId;
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(AddPinnedChannelMessageRequest.$type, AddPinnedChannelMessageRequest);
const baseAddPinnedChannelMessageResponse = {
    $type: "pylon.discord.v1.rest.AddPinnedChannelMessageResponse",
};
export const AddPinnedChannelMessageResponse = {
    $type: "pylon.discord.v1.rest.AddPinnedChannelMessageResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddPinnedChannelMessageResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
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
            ...baseAddPinnedChannelMessageResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddPinnedChannelMessageResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(AddPinnedChannelMessageResponse.$type, AddPinnedChannelMessageResponse);
const baseDeletePinnedChannelMessageRequest = {
    $type: "pylon.discord.v1.rest.DeletePinnedChannelMessageRequest",
    channelId: "0",
    messageId: "0",
};
export const DeletePinnedChannelMessageRequest = {
    $type: "pylon.discord.v1.rest.DeletePinnedChannelMessageRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.messageId !== "0") {
            writer.uint32(17).fixed64(message.messageId);
        }
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeletePinnedChannelMessageRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.messageId = longToString(reader.fixed64());
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
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
            ...baseDeletePinnedChannelMessageRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = String(object.messageId);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.messageId !== undefined && (obj.messageId = message.messageId);
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeletePinnedChannelMessageRequest,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = object.messageId;
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(DeletePinnedChannelMessageRequest.$type, DeletePinnedChannelMessageRequest);
const baseDeletePinnedChannelMessageResponse = {
    $type: "pylon.discord.v1.rest.DeletePinnedChannelMessageResponse",
};
export const DeletePinnedChannelMessageResponse = {
    $type: "pylon.discord.v1.rest.DeletePinnedChannelMessageResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeletePinnedChannelMessageResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
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
            ...baseDeletePinnedChannelMessageResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeletePinnedChannelMessageResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(DeletePinnedChannelMessageResponse.$type, DeletePinnedChannelMessageResponse);
const baseListGuildEmojisRequest = {
    $type: "pylon.discord.v1.rest.ListGuildEmojisRequest",
};
export const ListGuildEmojisRequest = {
    $type: "pylon.discord.v1.rest.ListGuildEmojisRequest",
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
    $type: "pylon.discord.v1.rest.ListGuildEmojisResponse",
};
export const ListGuildEmojisResponse = {
    $type: "pylon.discord.v1.rest.ListGuildEmojisResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            ListGuildEmojisResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListGuildEmojisResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: ListGuildEmojisResponse_Data.decode(reader, reader.uint32()),
                    };
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
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: ListGuildEmojisResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? ListGuildEmojisResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListGuildEmojisResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: ListGuildEmojisResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(ListGuildEmojisResponse.$type, ListGuildEmojisResponse);
const baseListGuildEmojisResponse_Data = {
    $type: "pylon.discord.v1.rest.ListGuildEmojisResponse.Data",
};
export const ListGuildEmojisResponse_Data = {
    $type: "pylon.discord.v1.rest.ListGuildEmojisResponse.Data",
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
            ...baseListGuildEmojisResponse_Data,
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
            ...baseListGuildEmojisResponse_Data,
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
            ...baseListGuildEmojisResponse_Data,
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
messageTypeRegistry.set(ListGuildEmojisResponse_Data.$type, ListGuildEmojisResponse_Data);
const baseGetGuildEmojiRequest = {
    $type: "pylon.discord.v1.rest.GetGuildEmojiRequest",
    emojiId: "0",
};
export const GetGuildEmojiRequest = {
    $type: "pylon.discord.v1.rest.GetGuildEmojiRequest",
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
    $type: "pylon.discord.v1.rest.GetGuildEmojiResponse",
};
export const GetGuildEmojiResponse = {
    $type: "pylon.discord.v1.rest.GetGuildEmojiResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            GetGuildEmojiResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
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
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: GetGuildEmojiResponse_Data.decode(reader, reader.uint32()),
                    };
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
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: GetGuildEmojiResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? GetGuildEmojiResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetGuildEmojiResponse };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: GetGuildEmojiResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildEmojiResponse.$type, GetGuildEmojiResponse);
const baseGetGuildEmojiResponse_Data = {
    $type: "pylon.discord.v1.rest.GetGuildEmojiResponse.Data",
};
export const GetGuildEmojiResponse_Data = {
    $type: "pylon.discord.v1.rest.GetGuildEmojiResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        if (message.emoji !== undefined) {
            EmojiData.encode(message.emoji, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetGuildEmojiResponse_Data,
        };
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
        const message = {
            ...baseGetGuildEmojiResponse_Data,
        };
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
        const message = {
            ...baseGetGuildEmojiResponse_Data,
        };
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = EmojiData.fromPartial(object.emoji);
        }
        return message;
    },
};
messageTypeRegistry.set(GetGuildEmojiResponse_Data.$type, GetGuildEmojiResponse_Data);
const baseCreateGuildEmojiRequest = {
    $type: "pylon.discord.v1.rest.CreateGuildEmojiRequest",
    name: "",
};
export const CreateGuildEmojiRequest = {
    $type: "pylon.discord.v1.rest.CreateGuildEmojiRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.image !== undefined) {
            BytesValue.encode({ $type: "google.protobuf.BytesValue", value: message.image }, writer.uint32(18).fork()).ldelim();
        }
        if (message.roles !== undefined) {
            SnowflakeListValue.encode(message.roles, writer.uint32(26).fork()).ldelim();
        }
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateGuildEmojiRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.image = BytesValue.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.roles = SnowflakeListValue.decode(reader, reader.uint32());
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
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
            ...baseCreateGuildEmojiRequest,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        if (object.image !== undefined && object.image !== null) {
            message.image = new Uint8Array(object.image);
        }
        if (object.roles !== undefined && object.roles !== null) {
            message.roles = SnowflakeListValue.fromJSON(object.roles);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.image !== undefined && (obj.image = message.image);
        message.roles !== undefined &&
            (obj.roles = message.roles
                ? SnowflakeListValue.toJSON(message.roles)
                : undefined);
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateGuildEmojiRequest,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.image !== undefined && object.image !== null) {
            message.image = object.image;
        }
        if (object.roles !== undefined && object.roles !== null) {
            message.roles = SnowflakeListValue.fromPartial(object.roles);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(CreateGuildEmojiRequest.$type, CreateGuildEmojiRequest);
const baseCreateGuildEmojiResponse = {
    $type: "pylon.discord.v1.rest.CreateGuildEmojiResponse",
};
export const CreateGuildEmojiResponse = {
    $type: "pylon.discord.v1.rest.CreateGuildEmojiResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            CreateGuildEmojiResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateGuildEmojiResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: CreateGuildEmojiResponse_Data.decode(reader, reader.uint32()),
                    };
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
            ...baseCreateGuildEmojiResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: CreateGuildEmojiResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? CreateGuildEmojiResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateGuildEmojiResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: CreateGuildEmojiResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(CreateGuildEmojiResponse.$type, CreateGuildEmojiResponse);
const baseCreateGuildEmojiResponse_Data = {
    $type: "pylon.discord.v1.rest.CreateGuildEmojiResponse.Data",
};
export const CreateGuildEmojiResponse_Data = {
    $type: "pylon.discord.v1.rest.CreateGuildEmojiResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        if (message.emoji !== undefined) {
            EmojiData.encode(message.emoji, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateGuildEmojiResponse_Data,
        };
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
        const message = {
            ...baseCreateGuildEmojiResponse_Data,
        };
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
        const message = {
            ...baseCreateGuildEmojiResponse_Data,
        };
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = EmojiData.fromPartial(object.emoji);
        }
        return message;
    },
};
messageTypeRegistry.set(CreateGuildEmojiResponse_Data.$type, CreateGuildEmojiResponse_Data);
const baseModifyGuildEmojiRequest = {
    $type: "pylon.discord.v1.rest.ModifyGuildEmojiRequest",
    emojiId: "0",
};
export const ModifyGuildEmojiRequest = {
    $type: "pylon.discord.v1.rest.ModifyGuildEmojiRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.emojiId !== "0") {
            writer.uint32(9).fixed64(message.emojiId);
        }
        if (message.name !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.name }, writer.uint32(18).fork()).ldelim();
        }
        if (message.roles !== undefined) {
            SnowflakeListValue.encode(message.roles, writer.uint32(26).fork()).ldelim();
        }
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseModifyGuildEmojiRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.emojiId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.name = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.roles = SnowflakeListValue.decode(reader, reader.uint32());
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
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
            ...baseModifyGuildEmojiRequest,
        };
        if (object.emojiId !== undefined && object.emojiId !== null) {
            message.emojiId = String(object.emojiId);
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        if (object.roles !== undefined && object.roles !== null) {
            message.roles = SnowflakeListValue.fromJSON(object.roles);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.emojiId !== undefined && (obj.emojiId = message.emojiId);
        message.name !== undefined && (obj.name = message.name);
        message.roles !== undefined &&
            (obj.roles = message.roles
                ? SnowflakeListValue.toJSON(message.roles)
                : undefined);
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseModifyGuildEmojiRequest,
        };
        if (object.emojiId !== undefined && object.emojiId !== null) {
            message.emojiId = object.emojiId;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.roles !== undefined && object.roles !== null) {
            message.roles = SnowflakeListValue.fromPartial(object.roles);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyGuildEmojiRequest.$type, ModifyGuildEmojiRequest);
const baseModifyGuildEmojiResponse = {
    $type: "pylon.discord.v1.rest.ModifyGuildEmojiResponse",
};
export const ModifyGuildEmojiResponse = {
    $type: "pylon.discord.v1.rest.ModifyGuildEmojiResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            ModifyGuildEmojiResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseModifyGuildEmojiResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: ModifyGuildEmojiResponse_Data.decode(reader, reader.uint32()),
                    };
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
            ...baseModifyGuildEmojiResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: ModifyGuildEmojiResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? ModifyGuildEmojiResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseModifyGuildEmojiResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: ModifyGuildEmojiResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyGuildEmojiResponse.$type, ModifyGuildEmojiResponse);
const baseModifyGuildEmojiResponse_Data = {
    $type: "pylon.discord.v1.rest.ModifyGuildEmojiResponse.Data",
};
export const ModifyGuildEmojiResponse_Data = {
    $type: "pylon.discord.v1.rest.ModifyGuildEmojiResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        if (message.emoji !== undefined) {
            EmojiData.encode(message.emoji, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseModifyGuildEmojiResponse_Data,
        };
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
        const message = {
            ...baseModifyGuildEmojiResponse_Data,
        };
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
        const message = {
            ...baseModifyGuildEmojiResponse_Data,
        };
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = EmojiData.fromPartial(object.emoji);
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyGuildEmojiResponse_Data.$type, ModifyGuildEmojiResponse_Data);
const baseDeleteGuildEmojiRequest = {
    $type: "pylon.discord.v1.rest.DeleteGuildEmojiRequest",
    emojiId: "0",
};
export const DeleteGuildEmojiRequest = {
    $type: "pylon.discord.v1.rest.DeleteGuildEmojiRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.emojiId !== "0") {
            writer.uint32(9).fixed64(message.emojiId);
        }
        if (message.auditLogReason !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.auditLogReason,
            }, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteGuildEmojiRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.emojiId = longToString(reader.fixed64());
                    break;
                case 100:
                    message.auditLogReason = StringValue.decode(reader, reader.uint32()).value;
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
            ...baseDeleteGuildEmojiRequest,
        };
        if (object.emojiId !== undefined && object.emojiId !== null) {
            message.emojiId = String(object.emojiId);
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = String(object.auditLogReason);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.emojiId !== undefined && (obj.emojiId = message.emojiId);
        message.auditLogReason !== undefined &&
            (obj.auditLogReason = message.auditLogReason);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteGuildEmojiRequest,
        };
        if (object.emojiId !== undefined && object.emojiId !== null) {
            message.emojiId = object.emojiId;
        }
        if (object.auditLogReason !== undefined && object.auditLogReason !== null) {
            message.auditLogReason = object.auditLogReason;
        }
        return message;
    },
};
messageTypeRegistry.set(DeleteGuildEmojiRequest.$type, DeleteGuildEmojiRequest);
const baseDeleteGuildEmojiResponse = {
    $type: "pylon.discord.v1.rest.DeleteGuildEmojiResponse",
};
export const DeleteGuildEmojiResponse = {
    $type: "pylon.discord.v1.rest.DeleteGuildEmojiResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteGuildEmojiResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
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
            ...baseDeleteGuildEmojiResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteGuildEmojiResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(DeleteGuildEmojiResponse.$type, DeleteGuildEmojiResponse);
const baseGetCurrentUserRequest = {
    $type: "pylon.discord.v1.rest.GetCurrentUserRequest",
};
export const GetCurrentUserRequest = {
    $type: "pylon.discord.v1.rest.GetCurrentUserRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetCurrentUserRequest };
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
        const message = { ...baseGetCurrentUserRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseGetCurrentUserRequest };
        return message;
    },
};
messageTypeRegistry.set(GetCurrentUserRequest.$type, GetCurrentUserRequest);
const baseGetCurrentUserResponse = {
    $type: "pylon.discord.v1.rest.GetCurrentUserResponse",
};
export const GetCurrentUserResponse = {
    $type: "pylon.discord.v1.rest.GetCurrentUserResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            GetCurrentUserResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetCurrentUserResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: GetCurrentUserResponse_Data.decode(reader, reader.uint32()),
                    };
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetCurrentUserResponse };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: GetCurrentUserResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? GetCurrentUserResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetCurrentUserResponse };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: GetCurrentUserResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(GetCurrentUserResponse.$type, GetCurrentUserResponse);
const baseGetCurrentUserResponse_Data = {
    $type: "pylon.discord.v1.rest.GetCurrentUserResponse.Data",
};
export const GetCurrentUserResponse_Data = {
    $type: "pylon.discord.v1.rest.GetCurrentUserResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        if (message.user !== undefined) {
            UserData.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetCurrentUserResponse_Data,
        };
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
        const message = {
            ...baseGetCurrentUserResponse_Data,
        };
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
        const message = {
            ...baseGetCurrentUserResponse_Data,
        };
        if (object.user !== undefined && object.user !== null) {
            message.user = UserData.fromPartial(object.user);
        }
        return message;
    },
};
messageTypeRegistry.set(GetCurrentUserResponse_Data.$type, GetCurrentUserResponse_Data);
const baseGetUserRequest = {
    $type: "pylon.discord.v1.rest.GetUserRequest",
    userId: "0",
};
export const GetUserRequest = {
    $type: "pylon.discord.v1.rest.GetUserRequest",
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
    $type: "pylon.discord.v1.rest.GetUserResponse",
};
export const GetUserResponse = {
    $type: "pylon.discord.v1.rest.GetUserResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            GetUserResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
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
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: GetUserResponse_Data.decode(reader, reader.uint32()),
                    };
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
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: GetUserResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? GetUserResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetUserResponse };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: GetUserResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(GetUserResponse.$type, GetUserResponse);
const baseGetUserResponse_Data = {
    $type: "pylon.discord.v1.rest.GetUserResponse.Data",
};
export const GetUserResponse_Data = {
    $type: "pylon.discord.v1.rest.GetUserResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        if (message.user !== undefined) {
            UserData.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetUserResponse_Data };
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
        const message = { ...baseGetUserResponse_Data };
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
        const message = { ...baseGetUserResponse_Data };
        if (object.user !== undefined && object.user !== null) {
            message.user = UserData.fromPartial(object.user);
        }
        return message;
    },
};
messageTypeRegistry.set(GetUserResponse_Data.$type, GetUserResponse_Data);
const baseModifyCurrentUserRequest = {
    $type: "pylon.discord.v1.rest.ModifyCurrentUserRequest",
};
export const ModifyCurrentUserRequest = {
    $type: "pylon.discord.v1.rest.ModifyCurrentUserRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.username !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.username }, writer.uint32(10).fork()).ldelim();
        }
        if (message.avatar !== undefined) {
            BytesValue.encode({ $type: "google.protobuf.BytesValue", value: message.avatar }, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseModifyCurrentUserRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.username = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.avatar = BytesValue.decode(reader, reader.uint32()).value;
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
            ...baseModifyCurrentUserRequest,
        };
        if (object.username !== undefined && object.username !== null) {
            message.username = String(object.username);
        }
        if (object.avatar !== undefined && object.avatar !== null) {
            message.avatar = new Uint8Array(object.avatar);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.username !== undefined && (obj.username = message.username);
        message.avatar !== undefined && (obj.avatar = message.avatar);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseModifyCurrentUserRequest,
        };
        if (object.username !== undefined && object.username !== null) {
            message.username = object.username;
        }
        if (object.avatar !== undefined && object.avatar !== null) {
            message.avatar = object.avatar;
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyCurrentUserRequest.$type, ModifyCurrentUserRequest);
const baseModifyCurrentUserResponse = {
    $type: "pylon.discord.v1.rest.ModifyCurrentUserResponse",
};
export const ModifyCurrentUserResponse = {
    $type: "pylon.discord.v1.rest.ModifyCurrentUserResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            ModifyCurrentUserResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseModifyCurrentUserResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: ModifyCurrentUserResponse_Data.decode(reader, reader.uint32()),
                    };
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
            ...baseModifyCurrentUserResponse,
        };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: ModifyCurrentUserResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? ModifyCurrentUserResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseModifyCurrentUserResponse,
        };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: ModifyCurrentUserResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyCurrentUserResponse.$type, ModifyCurrentUserResponse);
const baseModifyCurrentUserResponse_Data = {
    $type: "pylon.discord.v1.rest.ModifyCurrentUserResponse.Data",
};
export const ModifyCurrentUserResponse_Data = {
    $type: "pylon.discord.v1.rest.ModifyCurrentUserResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        if (message.user !== undefined) {
            UserData.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseModifyCurrentUserResponse_Data,
        };
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
        const message = {
            ...baseModifyCurrentUserResponse_Data,
        };
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
        const message = {
            ...baseModifyCurrentUserResponse_Data,
        };
        if (object.user !== undefined && object.user !== null) {
            message.user = UserData.fromPartial(object.user);
        }
        return message;
    },
};
messageTypeRegistry.set(ModifyCurrentUserResponse_Data.$type, ModifyCurrentUserResponse_Data);
const baseLeaveGuildRequest = {
    $type: "pylon.discord.v1.rest.LeaveGuildRequest",
};
export const LeaveGuildRequest = {
    $type: "pylon.discord.v1.rest.LeaveGuildRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLeaveGuildRequest };
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
        const message = { ...baseLeaveGuildRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseLeaveGuildRequest };
        return message;
    },
};
messageTypeRegistry.set(LeaveGuildRequest.$type, LeaveGuildRequest);
const baseLeaveGuildResponse = {
    $type: "pylon.discord.v1.rest.LeaveGuildResponse",
};
export const LeaveGuildResponse = {
    $type: "pylon.discord.v1.rest.LeaveGuildResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            Empty.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLeaveGuildResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: Empty.decode(reader, reader.uint32()),
                    };
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseLeaveGuildResponse };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = { $case: "data", data: Empty.fromJSON(object.data) };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? Empty.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLeaveGuildResponse };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: Empty.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(LeaveGuildResponse.$type, LeaveGuildResponse);
const baseCreateDmRequest = {
    $type: "pylon.discord.v1.rest.CreateDmRequest",
    recipientId: "0",
};
export const CreateDmRequest = {
    $type: "pylon.discord.v1.rest.CreateDmRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.recipientId !== "0") {
            writer.uint32(9).fixed64(message.recipientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateDmRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recipientId = longToString(reader.fixed64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateDmRequest };
        if (object.recipientId !== undefined && object.recipientId !== null) {
            message.recipientId = String(object.recipientId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.recipientId !== undefined &&
            (obj.recipientId = message.recipientId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateDmRequest };
        if (object.recipientId !== undefined && object.recipientId !== null) {
            message.recipientId = object.recipientId;
        }
        return message;
    },
};
messageTypeRegistry.set(CreateDmRequest.$type, CreateDmRequest);
const baseCreateDmResponse = {
    $type: "pylon.discord.v1.rest.CreateDmResponse",
};
export const CreateDmResponse = {
    $type: "pylon.discord.v1.rest.CreateDmResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.response?.$case === "error") {
            RestError.encode(message.response.error, writer.uint32(10).fork()).ldelim();
        }
        if (message.response?.$case === "data") {
            CreateDmResponse_Data.encode(message.response.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateDmResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = {
                        $case: "error",
                        error: RestError.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.response = {
                        $case: "data",
                        data: CreateDmResponse_Data.decode(reader, reader.uint32()),
                    };
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateDmResponse };
        if (object.error !== undefined && object.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromJSON(object.error),
            };
        }
        if (object.data !== undefined && object.data !== null) {
            message.response = {
                $case: "data",
                data: CreateDmResponse_Data.fromJSON(object.data),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response?.$case === "error" &&
            (obj.error = message.response?.error
                ? RestError.toJSON(message.response?.error)
                : undefined);
        message.response?.$case === "data" &&
            (obj.data = message.response?.data
                ? CreateDmResponse_Data.toJSON(message.response?.data)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateDmResponse };
        if (object.response?.$case === "error" &&
            object.response?.error !== undefined &&
            object.response?.error !== null) {
            message.response = {
                $case: "error",
                error: RestError.fromPartial(object.response.error),
            };
        }
        if (object.response?.$case === "data" &&
            object.response?.data !== undefined &&
            object.response?.data !== null) {
            message.response = {
                $case: "data",
                data: CreateDmResponse_Data.fromPartial(object.response.data),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(CreateDmResponse.$type, CreateDmResponse);
const baseCreateDmResponse_Data = {
    $type: "pylon.discord.v1.rest.CreateDmResponse.Data",
};
export const CreateDmResponse_Data = {
    $type: "pylon.discord.v1.rest.CreateDmResponse.Data",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channel !== undefined) {
            ChannelData.encode(message.channel, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateDmResponse_Data };
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
        const message = { ...baseCreateDmResponse_Data };
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
        const message = { ...baseCreateDmResponse_Data };
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = ChannelData.fromPartial(object.channel);
        }
        return message;
    },
};
messageTypeRegistry.set(CreateDmResponse_Data.$type, CreateDmResponse_Data);
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(""));
}
function longToString(long) {
    return long.toString();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
