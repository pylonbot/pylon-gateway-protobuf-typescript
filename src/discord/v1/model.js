/* eslint-disable */
import { messageTypeRegistry } from "../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";
import { StringValue, BoolValue, UInt32Value, } from "../../google/protobuf/wrappers";
export const protobufPackage = "pylon.discord.v1.model";
export var ChannelData_ChannelType;
(function (ChannelData_ChannelType) {
    ChannelData_ChannelType[ChannelData_ChannelType["UNKNOWN"] = 0] = "UNKNOWN";
    ChannelData_ChannelType[ChannelData_ChannelType["GUILD_TEXT"] = 1] = "GUILD_TEXT";
    ChannelData_ChannelType[ChannelData_ChannelType["DM"] = 2] = "DM";
    ChannelData_ChannelType[ChannelData_ChannelType["GUILD_VOICE"] = 3] = "GUILD_VOICE";
    ChannelData_ChannelType[ChannelData_ChannelType["GROUP_DM"] = 4] = "GROUP_DM";
    ChannelData_ChannelType[ChannelData_ChannelType["GUILD_CATEGORY"] = 5] = "GUILD_CATEGORY";
    ChannelData_ChannelType[ChannelData_ChannelType["GUILD_NEWS"] = 6] = "GUILD_NEWS";
    ChannelData_ChannelType[ChannelData_ChannelType["GUILD_STORE"] = 7] = "GUILD_STORE";
    ChannelData_ChannelType[ChannelData_ChannelType["PUBLIC_THREAD"] = 8] = "PUBLIC_THREAD";
    ChannelData_ChannelType[ChannelData_ChannelType["PRIVATE_THREAD"] = 9] = "PRIVATE_THREAD";
    ChannelData_ChannelType[ChannelData_ChannelType["GUILD_STAGE_VOICE"] = 10] = "GUILD_STAGE_VOICE";
})(ChannelData_ChannelType || (ChannelData_ChannelType = {}));
export function channelData_ChannelTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ChannelData_ChannelType.UNKNOWN;
        case 1:
        case "GUILD_TEXT":
            return ChannelData_ChannelType.GUILD_TEXT;
        case 2:
        case "DM":
            return ChannelData_ChannelType.DM;
        case 3:
        case "GUILD_VOICE":
            return ChannelData_ChannelType.GUILD_VOICE;
        case 4:
        case "GROUP_DM":
            return ChannelData_ChannelType.GROUP_DM;
        case 5:
        case "GUILD_CATEGORY":
            return ChannelData_ChannelType.GUILD_CATEGORY;
        case 6:
        case "GUILD_NEWS":
            return ChannelData_ChannelType.GUILD_NEWS;
        case 7:
        case "GUILD_STORE":
            return ChannelData_ChannelType.GUILD_STORE;
        case 8:
        case "PUBLIC_THREAD":
            return ChannelData_ChannelType.PUBLIC_THREAD;
        case 9:
        case "PRIVATE_THREAD":
            return ChannelData_ChannelType.PRIVATE_THREAD;
        case 10:
        case "GUILD_STAGE_VOICE":
            return ChannelData_ChannelType.GUILD_STAGE_VOICE;
        default:
            throw new globalThis.Error("Unrecognized enum value " +
                object +
                " for enum ChannelData_ChannelType");
    }
}
export function channelData_ChannelTypeToJSON(object) {
    switch (object) {
        case ChannelData_ChannelType.UNKNOWN:
            return "UNKNOWN";
        case ChannelData_ChannelType.GUILD_TEXT:
            return "GUILD_TEXT";
        case ChannelData_ChannelType.DM:
            return "DM";
        case ChannelData_ChannelType.GUILD_VOICE:
            return "GUILD_VOICE";
        case ChannelData_ChannelType.GROUP_DM:
            return "GROUP_DM";
        case ChannelData_ChannelType.GUILD_CATEGORY:
            return "GUILD_CATEGORY";
        case ChannelData_ChannelType.GUILD_NEWS:
            return "GUILD_NEWS";
        case ChannelData_ChannelType.GUILD_STORE:
            return "GUILD_STORE";
        case ChannelData_ChannelType.PUBLIC_THREAD:
            return "PUBLIC_THREAD";
        case ChannelData_ChannelType.PRIVATE_THREAD:
            return "PRIVATE_THREAD";
        case ChannelData_ChannelType.GUILD_STAGE_VOICE:
            return "GUILD_STAGE_VOICE";
        default:
            return "UNKNOWN";
    }
}
export var ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType;
(function (ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType) {
    ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType[ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType["UNKNOWN"] = 0] = "UNKNOWN";
    ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType[ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType["ROLE"] = 1] = "ROLE";
    ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType[ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType["MEMBER"] = 2] = "MEMBER";
})(ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType || (ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType = {}));
export function channelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType.UNKNOWN;
        case 1:
        case "ROLE":
            return ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType.ROLE;
        case 2:
        case "MEMBER":
            return ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType.MEMBER;
        default:
            throw new globalThis.Error("Unrecognized enum value " +
                object +
                " for enum ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType");
    }
}
export function channelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteTypeToJSON(object) {
    switch (object) {
        case ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType.UNKNOWN:
            return "UNKNOWN";
        case ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType.ROLE:
            return "ROLE";
        case ChannelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteType.MEMBER:
            return "MEMBER";
        default:
            return "UNKNOWN";
    }
}
export var MessageData_MessageType;
(function (MessageData_MessageType) {
    MessageData_MessageType[MessageData_MessageType["UNKNOWN"] = 0] = "UNKNOWN";
    MessageData_MessageType[MessageData_MessageType["DEFAULT"] = 1] = "DEFAULT";
    MessageData_MessageType[MessageData_MessageType["RECIPIENT_ADD"] = 2] = "RECIPIENT_ADD";
    MessageData_MessageType[MessageData_MessageType["RECIPIENT_REMOVE"] = 3] = "RECIPIENT_REMOVE";
    MessageData_MessageType[MessageData_MessageType["CALL"] = 4] = "CALL";
    MessageData_MessageType[MessageData_MessageType["CHANNEL_NAME_CHANGE"] = 5] = "CHANNEL_NAME_CHANGE";
    MessageData_MessageType[MessageData_MessageType["CHANNEL_ICON_CHANGE"] = 6] = "CHANNEL_ICON_CHANGE";
    MessageData_MessageType[MessageData_MessageType["CHANNEL_PINNED_MESSAGE"] = 7] = "CHANNEL_PINNED_MESSAGE";
    MessageData_MessageType[MessageData_MessageType["GUILD_MEMBER_JOIN"] = 8] = "GUILD_MEMBER_JOIN";
    MessageData_MessageType[MessageData_MessageType["USER_PREMIUM_GUILD_SUBSCRIPTION"] = 9] = "USER_PREMIUM_GUILD_SUBSCRIPTION";
    MessageData_MessageType[MessageData_MessageType["USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1"] = 10] = "USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1";
    MessageData_MessageType[MessageData_MessageType["USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2"] = 11] = "USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2";
    MessageData_MessageType[MessageData_MessageType["USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3"] = 12] = "USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3";
    MessageData_MessageType[MessageData_MessageType["CHANNEL_FOLLOW_ADD"] = 13] = "CHANNEL_FOLLOW_ADD";
    MessageData_MessageType[MessageData_MessageType["GUILD_DISCOVERY_DISQUALIFIED"] = 15] = "GUILD_DISCOVERY_DISQUALIFIED";
    MessageData_MessageType[MessageData_MessageType["GUILD_DISCOVERY_REQUALIFIED"] = 16] = "GUILD_DISCOVERY_REQUALIFIED";
})(MessageData_MessageType || (MessageData_MessageType = {}));
export function messageData_MessageTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return MessageData_MessageType.UNKNOWN;
        case 1:
        case "DEFAULT":
            return MessageData_MessageType.DEFAULT;
        case 2:
        case "RECIPIENT_ADD":
            return MessageData_MessageType.RECIPIENT_ADD;
        case 3:
        case "RECIPIENT_REMOVE":
            return MessageData_MessageType.RECIPIENT_REMOVE;
        case 4:
        case "CALL":
            return MessageData_MessageType.CALL;
        case 5:
        case "CHANNEL_NAME_CHANGE":
            return MessageData_MessageType.CHANNEL_NAME_CHANGE;
        case 6:
        case "CHANNEL_ICON_CHANGE":
            return MessageData_MessageType.CHANNEL_ICON_CHANGE;
        case 7:
        case "CHANNEL_PINNED_MESSAGE":
            return MessageData_MessageType.CHANNEL_PINNED_MESSAGE;
        case 8:
        case "GUILD_MEMBER_JOIN":
            return MessageData_MessageType.GUILD_MEMBER_JOIN;
        case 9:
        case "USER_PREMIUM_GUILD_SUBSCRIPTION":
            return MessageData_MessageType.USER_PREMIUM_GUILD_SUBSCRIPTION;
        case 10:
        case "USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1":
            return MessageData_MessageType.USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1;
        case 11:
        case "USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2":
            return MessageData_MessageType.USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2;
        case 12:
        case "USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3":
            return MessageData_MessageType.USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3;
        case 13:
        case "CHANNEL_FOLLOW_ADD":
            return MessageData_MessageType.CHANNEL_FOLLOW_ADD;
        case 15:
        case "GUILD_DISCOVERY_DISQUALIFIED":
            return MessageData_MessageType.GUILD_DISCOVERY_DISQUALIFIED;
        case 16:
        case "GUILD_DISCOVERY_REQUALIFIED":
            return MessageData_MessageType.GUILD_DISCOVERY_REQUALIFIED;
        default:
            throw new globalThis.Error("Unrecognized enum value " +
                object +
                " for enum MessageData_MessageType");
    }
}
export function messageData_MessageTypeToJSON(object) {
    switch (object) {
        case MessageData_MessageType.UNKNOWN:
            return "UNKNOWN";
        case MessageData_MessageType.DEFAULT:
            return "DEFAULT";
        case MessageData_MessageType.RECIPIENT_ADD:
            return "RECIPIENT_ADD";
        case MessageData_MessageType.RECIPIENT_REMOVE:
            return "RECIPIENT_REMOVE";
        case MessageData_MessageType.CALL:
            return "CALL";
        case MessageData_MessageType.CHANNEL_NAME_CHANGE:
            return "CHANNEL_NAME_CHANGE";
        case MessageData_MessageType.CHANNEL_ICON_CHANGE:
            return "CHANNEL_ICON_CHANGE";
        case MessageData_MessageType.CHANNEL_PINNED_MESSAGE:
            return "CHANNEL_PINNED_MESSAGE";
        case MessageData_MessageType.GUILD_MEMBER_JOIN:
            return "GUILD_MEMBER_JOIN";
        case MessageData_MessageType.USER_PREMIUM_GUILD_SUBSCRIPTION:
            return "USER_PREMIUM_GUILD_SUBSCRIPTION";
        case MessageData_MessageType.USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1:
            return "USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1";
        case MessageData_MessageType.USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2:
            return "USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2";
        case MessageData_MessageType.USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3:
            return "USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3";
        case MessageData_MessageType.CHANNEL_FOLLOW_ADD:
            return "CHANNEL_FOLLOW_ADD";
        case MessageData_MessageType.GUILD_DISCOVERY_DISQUALIFIED:
            return "GUILD_DISCOVERY_DISQUALIFIED";
        case MessageData_MessageType.GUILD_DISCOVERY_REQUALIFIED:
            return "GUILD_DISCOVERY_REQUALIFIED";
        default:
            return "UNKNOWN";
    }
}
export var MessageData_MessageEmbedData_MessageEmbedType;
(function (MessageData_MessageEmbedData_MessageEmbedType) {
    MessageData_MessageEmbedData_MessageEmbedType[MessageData_MessageEmbedData_MessageEmbedType["UNKNOWN"] = 0] = "UNKNOWN";
    MessageData_MessageEmbedData_MessageEmbedType[MessageData_MessageEmbedData_MessageEmbedType["RICH"] = 1] = "RICH";
    MessageData_MessageEmbedData_MessageEmbedType[MessageData_MessageEmbedData_MessageEmbedType["IMAGE"] = 2] = "IMAGE";
    MessageData_MessageEmbedData_MessageEmbedType[MessageData_MessageEmbedData_MessageEmbedType["VIDEO"] = 3] = "VIDEO";
    MessageData_MessageEmbedData_MessageEmbedType[MessageData_MessageEmbedData_MessageEmbedType["GIFV"] = 4] = "GIFV";
    MessageData_MessageEmbedData_MessageEmbedType[MessageData_MessageEmbedData_MessageEmbedType["ARTICLE"] = 5] = "ARTICLE";
    MessageData_MessageEmbedData_MessageEmbedType[MessageData_MessageEmbedData_MessageEmbedType["LINK"] = 6] = "LINK";
})(MessageData_MessageEmbedData_MessageEmbedType || (MessageData_MessageEmbedData_MessageEmbedType = {}));
export function messageData_MessageEmbedData_MessageEmbedTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return MessageData_MessageEmbedData_MessageEmbedType.UNKNOWN;
        case 1:
        case "RICH":
            return MessageData_MessageEmbedData_MessageEmbedType.RICH;
        case 2:
        case "IMAGE":
            return MessageData_MessageEmbedData_MessageEmbedType.IMAGE;
        case 3:
        case "VIDEO":
            return MessageData_MessageEmbedData_MessageEmbedType.VIDEO;
        case 4:
        case "GIFV":
            return MessageData_MessageEmbedData_MessageEmbedType.GIFV;
        case 5:
        case "ARTICLE":
            return MessageData_MessageEmbedData_MessageEmbedType.ARTICLE;
        case 6:
        case "LINK":
            return MessageData_MessageEmbedData_MessageEmbedType.LINK;
        default:
            throw new globalThis.Error("Unrecognized enum value " +
                object +
                " for enum MessageData_MessageEmbedData_MessageEmbedType");
    }
}
export function messageData_MessageEmbedData_MessageEmbedTypeToJSON(object) {
    switch (object) {
        case MessageData_MessageEmbedData_MessageEmbedType.UNKNOWN:
            return "UNKNOWN";
        case MessageData_MessageEmbedData_MessageEmbedType.RICH:
            return "RICH";
        case MessageData_MessageEmbedData_MessageEmbedType.IMAGE:
            return "IMAGE";
        case MessageData_MessageEmbedData_MessageEmbedType.VIDEO:
            return "VIDEO";
        case MessageData_MessageEmbedData_MessageEmbedType.GIFV:
            return "GIFV";
        case MessageData_MessageEmbedData_MessageEmbedType.ARTICLE:
            return "ARTICLE";
        case MessageData_MessageEmbedData_MessageEmbedType.LINK:
            return "LINK";
        default:
            return "UNKNOWN";
    }
}
export var PresenceData_OnlineStatus;
(function (PresenceData_OnlineStatus) {
    PresenceData_OnlineStatus[PresenceData_OnlineStatus["UNKNOWN"] = 0] = "UNKNOWN";
    PresenceData_OnlineStatus[PresenceData_OnlineStatus["ONLINE"] = 1] = "ONLINE";
    PresenceData_OnlineStatus[PresenceData_OnlineStatus["IDLE"] = 2] = "IDLE";
    PresenceData_OnlineStatus[PresenceData_OnlineStatus["DND"] = 3] = "DND";
    PresenceData_OnlineStatus[PresenceData_OnlineStatus["INVISIBLE"] = 4] = "INVISIBLE";
    PresenceData_OnlineStatus[PresenceData_OnlineStatus["OFFLINE"] = 5] = "OFFLINE";
})(PresenceData_OnlineStatus || (PresenceData_OnlineStatus = {}));
export function presenceData_OnlineStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return PresenceData_OnlineStatus.UNKNOWN;
        case 1:
        case "ONLINE":
            return PresenceData_OnlineStatus.ONLINE;
        case 2:
        case "IDLE":
            return PresenceData_OnlineStatus.IDLE;
        case 3:
        case "DND":
            return PresenceData_OnlineStatus.DND;
        case 4:
        case "INVISIBLE":
            return PresenceData_OnlineStatus.INVISIBLE;
        case 5:
        case "OFFLINE":
            return PresenceData_OnlineStatus.OFFLINE;
        default:
            throw new globalThis.Error("Unrecognized enum value " +
                object +
                " for enum PresenceData_OnlineStatus");
    }
}
export function presenceData_OnlineStatusToJSON(object) {
    switch (object) {
        case PresenceData_OnlineStatus.UNKNOWN:
            return "UNKNOWN";
        case PresenceData_OnlineStatus.ONLINE:
            return "ONLINE";
        case PresenceData_OnlineStatus.IDLE:
            return "IDLE";
        case PresenceData_OnlineStatus.DND:
            return "DND";
        case PresenceData_OnlineStatus.INVISIBLE:
            return "INVISIBLE";
        case PresenceData_OnlineStatus.OFFLINE:
            return "OFFLINE";
        default:
            return "UNKNOWN";
    }
}
export var PresenceData_PresenceActivityData_ActivityType;
(function (PresenceData_PresenceActivityData_ActivityType) {
    PresenceData_PresenceActivityData_ActivityType[PresenceData_PresenceActivityData_ActivityType["UNKNOWN"] = 0] = "UNKNOWN";
    PresenceData_PresenceActivityData_ActivityType[PresenceData_PresenceActivityData_ActivityType["DEFAULT"] = 1] = "DEFAULT";
    PresenceData_PresenceActivityData_ActivityType[PresenceData_PresenceActivityData_ActivityType["STREAMING"] = 2] = "STREAMING";
    PresenceData_PresenceActivityData_ActivityType[PresenceData_PresenceActivityData_ActivityType["LISTENING"] = 3] = "LISTENING";
    PresenceData_PresenceActivityData_ActivityType[PresenceData_PresenceActivityData_ActivityType["WATCHING"] = 4] = "WATCHING";
    PresenceData_PresenceActivityData_ActivityType[PresenceData_PresenceActivityData_ActivityType["CUSTOM_STATUS"] = 5] = "CUSTOM_STATUS";
    PresenceData_PresenceActivityData_ActivityType[PresenceData_PresenceActivityData_ActivityType["COMPETING"] = 6] = "COMPETING";
})(PresenceData_PresenceActivityData_ActivityType || (PresenceData_PresenceActivityData_ActivityType = {}));
export function presenceData_PresenceActivityData_ActivityTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return PresenceData_PresenceActivityData_ActivityType.UNKNOWN;
        case 1:
        case "DEFAULT":
            return PresenceData_PresenceActivityData_ActivityType.DEFAULT;
        case 2:
        case "STREAMING":
            return PresenceData_PresenceActivityData_ActivityType.STREAMING;
        case 3:
        case "LISTENING":
            return PresenceData_PresenceActivityData_ActivityType.LISTENING;
        case 4:
        case "WATCHING":
            return PresenceData_PresenceActivityData_ActivityType.WATCHING;
        case 5:
        case "CUSTOM_STATUS":
            return PresenceData_PresenceActivityData_ActivityType.CUSTOM_STATUS;
        case 6:
        case "COMPETING":
            return PresenceData_PresenceActivityData_ActivityType.COMPETING;
        default:
            throw new globalThis.Error("Unrecognized enum value " +
                object +
                " for enum PresenceData_PresenceActivityData_ActivityType");
    }
}
export function presenceData_PresenceActivityData_ActivityTypeToJSON(object) {
    switch (object) {
        case PresenceData_PresenceActivityData_ActivityType.UNKNOWN:
            return "UNKNOWN";
        case PresenceData_PresenceActivityData_ActivityType.DEFAULT:
            return "DEFAULT";
        case PresenceData_PresenceActivityData_ActivityType.STREAMING:
            return "STREAMING";
        case PresenceData_PresenceActivityData_ActivityType.LISTENING:
            return "LISTENING";
        case PresenceData_PresenceActivityData_ActivityType.WATCHING:
            return "WATCHING";
        case PresenceData_PresenceActivityData_ActivityType.CUSTOM_STATUS:
            return "CUSTOM_STATUS";
        case PresenceData_PresenceActivityData_ActivityType.COMPETING:
            return "COMPETING";
        default:
            return "UNKNOWN";
    }
}
export var WebhookData_WebhookType;
(function (WebhookData_WebhookType) {
    WebhookData_WebhookType[WebhookData_WebhookType["INCOMING"] = 0] = "INCOMING";
    WebhookData_WebhookType[WebhookData_WebhookType["CHANNEL_FOLLOWER"] = 1] = "CHANNEL_FOLLOWER";
})(WebhookData_WebhookType || (WebhookData_WebhookType = {}));
export function webhookData_WebhookTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "INCOMING":
            return WebhookData_WebhookType.INCOMING;
        case 1:
        case "CHANNEL_FOLLOWER":
            return WebhookData_WebhookType.CHANNEL_FOLLOWER;
        default:
            throw new globalThis.Error("Unrecognized enum value " +
                object +
                " for enum WebhookData_WebhookType");
    }
}
export function webhookData_WebhookTypeToJSON(object) {
    switch (object) {
        case WebhookData_WebhookType.INCOMING:
            return "INCOMING";
        case WebhookData_WebhookType.CHANNEL_FOLLOWER:
            return "CHANNEL_FOLLOWER";
        default:
            return "UNKNOWN";
    }
}
export var InviteData_InviteTargetUserType;
(function (InviteData_InviteTargetUserType) {
    InviteData_InviteTargetUserType[InviteData_InviteTargetUserType["UNKNOWN"] = 0] = "UNKNOWN";
    InviteData_InviteTargetUserType[InviteData_InviteTargetUserType["STREAM"] = 1] = "STREAM";
})(InviteData_InviteTargetUserType || (InviteData_InviteTargetUserType = {}));
export function inviteData_InviteTargetUserTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return InviteData_InviteTargetUserType.UNKNOWN;
        case 1:
        case "STREAM":
            return InviteData_InviteTargetUserType.STREAM;
        default:
            throw new globalThis.Error("Unrecognized enum value " +
                object +
                " for enum InviteData_InviteTargetUserType");
    }
}
export function inviteData_InviteTargetUserTypeToJSON(object) {
    switch (object) {
        case InviteData_InviteTargetUserType.UNKNOWN:
            return "UNKNOWN";
        case InviteData_InviteTargetUserType.STREAM:
            return "STREAM";
        default:
            return "UNKNOWN";
    }
}
const baseSnowflakeValue = {
    $type: "pylon.discord.v1.model.SnowflakeValue",
    value: "0",
};
export const SnowflakeValue = {
    $type: "pylon.discord.v1.model.SnowflakeValue",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== "0") {
            writer.uint32(9).fixed64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSnowflakeValue };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = longToString(reader.fixed64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSnowflakeValue };
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSnowflakeValue };
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
};
messageTypeRegistry.set(SnowflakeValue.$type, SnowflakeValue);
const baseSnowflakeListValue = {
    $type: "pylon.discord.v1.model.SnowflakeListValue",
    values: "0",
};
export const SnowflakeListValue = {
    $type: "pylon.discord.v1.model.SnowflakeListValue",
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.values) {
            writer.fixed64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSnowflakeListValue };
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.values.push(longToString(reader.fixed64()));
                        }
                    }
                    else {
                        message.values.push(longToString(reader.fixed64()));
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSnowflakeListValue };
        message.values = [];
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.values) {
            obj.values = message.values.map((e) => e);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSnowflakeListValue };
        message.values = [];
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(e);
            }
        }
        return message;
    },
};
messageTypeRegistry.set(SnowflakeListValue.$type, SnowflakeListValue);
const basePermissionsValue = {
    $type: "pylon.discord.v1.model.PermissionsValue",
    value: "0",
};
export const PermissionsValue = {
    $type: "pylon.discord.v1.model.PermissionsValue",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== "0") {
            writer.uint32(8).uint64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePermissionsValue };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePermissionsValue };
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePermissionsValue };
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
};
messageTypeRegistry.set(PermissionsValue.$type, PermissionsValue);
const baseGuildData = {
    $type: "pylon.discord.v1.model.GuildData",
    id: "0",
    name: "",
    region: "",
    ownerId: "0",
    afkTimeout: 0,
    memberCount: 0,
    verificationLevel: 0,
    defaultMessageNotifications: 0,
    explicitContentFilter: 0,
    features: "",
    mfaLevel: 0,
    widgetEnabled: false,
    premiumTier: 0,
    premiumSubscriptionCount: 0,
    unavailable: false,
};
export const GuildData = {
    $type: "pylon.discord.v1.model.GuildData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "0") {
            writer.uint32(9).fixed64(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.icon !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.icon }, writer.uint32(26).fork()).ldelim();
        }
        if (message.region !== "") {
            writer.uint32(34).string(message.region);
        }
        if (message.afkChannelId !== undefined) {
            SnowflakeValue.encode(message.afkChannelId, writer.uint32(42).fork()).ldelim();
        }
        if (message.ownerId !== "0") {
            writer.uint32(49).fixed64(message.ownerId);
        }
        if (message.joinedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.joinedAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.splash !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.splash }, writer.uint32(66).fork()).ldelim();
        }
        if (message.discoverySplash !== undefined) {
            StringValue.encode({
                $type: "google.protobuf.StringValue",
                value: message.discoverySplash,
            }, writer.uint32(74).fork()).ldelim();
        }
        if (message.afkTimeout !== 0) {
            writer.uint32(80).uint32(message.afkTimeout);
        }
        if (message.memberCount !== 0) {
            writer.uint32(88).uint32(message.memberCount);
        }
        if (message.verificationLevel !== 0) {
            writer.uint32(96).uint32(message.verificationLevel);
        }
        if (message.defaultMessageNotifications !== 0) {
            writer.uint32(104).uint32(message.defaultMessageNotifications);
        }
        if (message.explicitContentFilter !== 0) {
            writer.uint32(112).uint32(message.explicitContentFilter);
        }
        for (const v of message.features) {
            writer.uint32(122).string(v);
        }
        if (message.mfaLevel !== 0) {
            writer.uint32(128).uint32(message.mfaLevel);
        }
        if (message.widgetEnabled === true) {
            writer.uint32(136).bool(message.widgetEnabled);
        }
        if (message.widgetChannelId !== undefined) {
            SnowflakeValue.encode(message.widgetChannelId, writer.uint32(146).fork()).ldelim();
        }
        if (message.systemChannelId !== undefined) {
            SnowflakeValue.encode(message.systemChannelId, writer.uint32(154).fork()).ldelim();
        }
        if (message.vanityUrlCode !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.vanityUrlCode }, writer.uint32(162).fork()).ldelim();
        }
        if (message.description !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.description }, writer.uint32(170).fork()).ldelim();
        }
        if (message.banner !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.banner }, writer.uint32(178).fork()).ldelim();
        }
        if (message.premiumTier !== 0) {
            writer.uint32(184).uint32(message.premiumTier);
        }
        if (message.premiumSubscriptionCount !== 0) {
            writer.uint32(192).uint32(message.premiumSubscriptionCount);
        }
        if (message.unavailable === true) {
            writer.uint32(200).bool(message.unavailable);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGuildData };
        message.features = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.fixed64());
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.icon = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.region = reader.string();
                    break;
                case 5:
                    message.afkChannelId = SnowflakeValue.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.ownerId = longToString(reader.fixed64());
                    break;
                case 7:
                    message.joinedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.splash = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.discoverySplash = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.afkTimeout = reader.uint32();
                    break;
                case 11:
                    message.memberCount = reader.uint32();
                    break;
                case 12:
                    message.verificationLevel = reader.uint32();
                    break;
                case 13:
                    message.defaultMessageNotifications = reader.uint32();
                    break;
                case 14:
                    message.explicitContentFilter = reader.uint32();
                    break;
                case 15:
                    message.features.push(reader.string());
                    break;
                case 16:
                    message.mfaLevel = reader.uint32();
                    break;
                case 17:
                    message.widgetEnabled = reader.bool();
                    break;
                case 18:
                    message.widgetChannelId = SnowflakeValue.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.systemChannelId = SnowflakeValue.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.vanityUrlCode = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 21:
                    message.description = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 22:
                    message.banner = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 23:
                    message.premiumTier = reader.uint32();
                    break;
                case 24:
                    message.premiumSubscriptionCount = reader.uint32();
                    break;
                case 25:
                    message.unavailable = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGuildData };
        message.features = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        if (object.icon !== undefined && object.icon !== null) {
            message.icon = String(object.icon);
        }
        if (object.region !== undefined && object.region !== null) {
            message.region = String(object.region);
        }
        if (object.afkChannelId !== undefined && object.afkChannelId !== null) {
            message.afkChannelId = SnowflakeValue.fromJSON(object.afkChannelId);
        }
        if (object.ownerId !== undefined && object.ownerId !== null) {
            message.ownerId = String(object.ownerId);
        }
        if (object.joinedAt !== undefined && object.joinedAt !== null) {
            message.joinedAt = fromJsonTimestamp(object.joinedAt);
        }
        if (object.splash !== undefined && object.splash !== null) {
            message.splash = String(object.splash);
        }
        if (object.discoverySplash !== undefined &&
            object.discoverySplash !== null) {
            message.discoverySplash = String(object.discoverySplash);
        }
        if (object.afkTimeout !== undefined && object.afkTimeout !== null) {
            message.afkTimeout = Number(object.afkTimeout);
        }
        if (object.memberCount !== undefined && object.memberCount !== null) {
            message.memberCount = Number(object.memberCount);
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
        if (object.features !== undefined && object.features !== null) {
            for (const e of object.features) {
                message.features.push(String(e));
            }
        }
        if (object.mfaLevel !== undefined && object.mfaLevel !== null) {
            message.mfaLevel = Number(object.mfaLevel);
        }
        if (object.widgetEnabled !== undefined && object.widgetEnabled !== null) {
            message.widgetEnabled = Boolean(object.widgetEnabled);
        }
        if (object.widgetChannelId !== undefined &&
            object.widgetChannelId !== null) {
            message.widgetChannelId = SnowflakeValue.fromJSON(object.widgetChannelId);
        }
        if (object.systemChannelId !== undefined &&
            object.systemChannelId !== null) {
            message.systemChannelId = SnowflakeValue.fromJSON(object.systemChannelId);
        }
        if (object.vanityUrlCode !== undefined && object.vanityUrlCode !== null) {
            message.vanityUrlCode = String(object.vanityUrlCode);
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        if (object.banner !== undefined && object.banner !== null) {
            message.banner = String(object.banner);
        }
        if (object.premiumTier !== undefined && object.premiumTier !== null) {
            message.premiumTier = Number(object.premiumTier);
        }
        if (object.premiumSubscriptionCount !== undefined &&
            object.premiumSubscriptionCount !== null) {
            message.premiumSubscriptionCount = Number(object.premiumSubscriptionCount);
        }
        if (object.unavailable !== undefined && object.unavailable !== null) {
            message.unavailable = Boolean(object.unavailable);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.icon !== undefined && (obj.icon = message.icon);
        message.region !== undefined && (obj.region = message.region);
        message.afkChannelId !== undefined &&
            (obj.afkChannelId = message.afkChannelId
                ? SnowflakeValue.toJSON(message.afkChannelId)
                : undefined);
        message.ownerId !== undefined && (obj.ownerId = message.ownerId);
        message.joinedAt !== undefined &&
            (obj.joinedAt = message.joinedAt.toISOString());
        message.splash !== undefined && (obj.splash = message.splash);
        message.discoverySplash !== undefined &&
            (obj.discoverySplash = message.discoverySplash);
        message.afkTimeout !== undefined && (obj.afkTimeout = message.afkTimeout);
        message.memberCount !== undefined &&
            (obj.memberCount = message.memberCount);
        message.verificationLevel !== undefined &&
            (obj.verificationLevel = message.verificationLevel);
        message.defaultMessageNotifications !== undefined &&
            (obj.defaultMessageNotifications = message.defaultMessageNotifications);
        message.explicitContentFilter !== undefined &&
            (obj.explicitContentFilter = message.explicitContentFilter);
        if (message.features) {
            obj.features = message.features.map((e) => e);
        }
        else {
            obj.features = [];
        }
        message.mfaLevel !== undefined && (obj.mfaLevel = message.mfaLevel);
        message.widgetEnabled !== undefined &&
            (obj.widgetEnabled = message.widgetEnabled);
        message.widgetChannelId !== undefined &&
            (obj.widgetChannelId = message.widgetChannelId
                ? SnowflakeValue.toJSON(message.widgetChannelId)
                : undefined);
        message.systemChannelId !== undefined &&
            (obj.systemChannelId = message.systemChannelId
                ? SnowflakeValue.toJSON(message.systemChannelId)
                : undefined);
        message.vanityUrlCode !== undefined &&
            (obj.vanityUrlCode = message.vanityUrlCode);
        message.description !== undefined &&
            (obj.description = message.description);
        message.banner !== undefined && (obj.banner = message.banner);
        message.premiumTier !== undefined &&
            (obj.premiumTier = message.premiumTier);
        message.premiumSubscriptionCount !== undefined &&
            (obj.premiumSubscriptionCount = message.premiumSubscriptionCount);
        message.unavailable !== undefined &&
            (obj.unavailable = message.unavailable);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGuildData };
        message.features = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.icon !== undefined && object.icon !== null) {
            message.icon = object.icon;
        }
        if (object.region !== undefined && object.region !== null) {
            message.region = object.region;
        }
        if (object.afkChannelId !== undefined && object.afkChannelId !== null) {
            message.afkChannelId = SnowflakeValue.fromPartial(object.afkChannelId);
        }
        if (object.ownerId !== undefined && object.ownerId !== null) {
            message.ownerId = object.ownerId;
        }
        if (object.joinedAt !== undefined && object.joinedAt !== null) {
            message.joinedAt = object.joinedAt;
        }
        if (object.splash !== undefined && object.splash !== null) {
            message.splash = object.splash;
        }
        if (object.discoverySplash !== undefined &&
            object.discoverySplash !== null) {
            message.discoverySplash = object.discoverySplash;
        }
        if (object.afkTimeout !== undefined && object.afkTimeout !== null) {
            message.afkTimeout = object.afkTimeout;
        }
        if (object.memberCount !== undefined && object.memberCount !== null) {
            message.memberCount = object.memberCount;
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
        if (object.features !== undefined && object.features !== null) {
            for (const e of object.features) {
                message.features.push(e);
            }
        }
        if (object.mfaLevel !== undefined && object.mfaLevel !== null) {
            message.mfaLevel = object.mfaLevel;
        }
        if (object.widgetEnabled !== undefined && object.widgetEnabled !== null) {
            message.widgetEnabled = object.widgetEnabled;
        }
        if (object.widgetChannelId !== undefined &&
            object.widgetChannelId !== null) {
            message.widgetChannelId = SnowflakeValue.fromPartial(object.widgetChannelId);
        }
        if (object.systemChannelId !== undefined &&
            object.systemChannelId !== null) {
            message.systemChannelId = SnowflakeValue.fromPartial(object.systemChannelId);
        }
        if (object.vanityUrlCode !== undefined && object.vanityUrlCode !== null) {
            message.vanityUrlCode = object.vanityUrlCode;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.banner !== undefined && object.banner !== null) {
            message.banner = object.banner;
        }
        if (object.premiumTier !== undefined && object.premiumTier !== null) {
            message.premiumTier = object.premiumTier;
        }
        if (object.premiumSubscriptionCount !== undefined &&
            object.premiumSubscriptionCount !== null) {
            message.premiumSubscriptionCount = object.premiumSubscriptionCount;
        }
        if (object.unavailable !== undefined && object.unavailable !== null) {
            message.unavailable = object.unavailable;
        }
        return message;
    },
};
messageTypeRegistry.set(GuildData.$type, GuildData);
const baseChannelData = {
    $type: "pylon.discord.v1.model.ChannelData",
    id: "0",
    name: "",
    type: 0,
    nsfw: false,
    position: 0,
    bitrate: 0,
    userLimit: 0,
    rateLimitPerUser: 0,
};
export const ChannelData = {
    $type: "pylon.discord.v1.model.ChannelData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "0") {
            writer.uint32(9).fixed64(message.id);
        }
        if (message.guildId !== undefined) {
            SnowflakeValue.encode(message.guildId, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.topic !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.topic }, writer.uint32(34).fork()).ldelim();
        }
        if (message.type !== 0) {
            writer.uint32(40).int32(message.type);
        }
        if (message.nsfw === true) {
            writer.uint32(48).bool(message.nsfw);
        }
        if (message.position !== 0) {
            writer.uint32(56).uint32(message.position);
        }
        if (message.bitrate !== 0) {
            writer.uint32(64).uint32(message.bitrate);
        }
        if (message.userLimit !== 0) {
            writer.uint32(72).uint32(message.userLimit);
        }
        if (message.parentId !== undefined) {
            SnowflakeValue.encode(message.parentId, writer.uint32(82).fork()).ldelim();
        }
        if (message.rateLimitPerUser !== 0) {
            writer.uint32(88).uint32(message.rateLimitPerUser);
        }
        for (const v of message.permissionOverwrites) {
            ChannelData_ChannelPermissionOverwriteData.encode(v, writer.uint32(98).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseChannelData };
        message.permissionOverwrites = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.fixed64());
                    break;
                case 2:
                    message.guildId = SnowflakeValue.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.topic = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.type = reader.int32();
                    break;
                case 6:
                    message.nsfw = reader.bool();
                    break;
                case 7:
                    message.position = reader.uint32();
                    break;
                case 8:
                    message.bitrate = reader.uint32();
                    break;
                case 9:
                    message.userLimit = reader.uint32();
                    break;
                case 10:
                    message.parentId = SnowflakeValue.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.rateLimitPerUser = reader.uint32();
                    break;
                case 12:
                    message.permissionOverwrites.push(ChannelData_ChannelPermissionOverwriteData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseChannelData };
        message.permissionOverwrites = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = SnowflakeValue.fromJSON(object.guildId);
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        if (object.topic !== undefined && object.topic !== null) {
            message.topic = String(object.topic);
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = channelData_ChannelTypeFromJSON(object.type);
        }
        if (object.nsfw !== undefined && object.nsfw !== null) {
            message.nsfw = Boolean(object.nsfw);
        }
        if (object.position !== undefined && object.position !== null) {
            message.position = Number(object.position);
        }
        if (object.bitrate !== undefined && object.bitrate !== null) {
            message.bitrate = Number(object.bitrate);
        }
        if (object.userLimit !== undefined && object.userLimit !== null) {
            message.userLimit = Number(object.userLimit);
        }
        if (object.parentId !== undefined && object.parentId !== null) {
            message.parentId = SnowflakeValue.fromJSON(object.parentId);
        }
        if (object.rateLimitPerUser !== undefined &&
            object.rateLimitPerUser !== null) {
            message.rateLimitPerUser = Number(object.rateLimitPerUser);
        }
        if (object.permissionOverwrites !== undefined &&
            object.permissionOverwrites !== null) {
            for (const e of object.permissionOverwrites) {
                message.permissionOverwrites.push(ChannelData_ChannelPermissionOverwriteData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.guildId !== undefined &&
            (obj.guildId = message.guildId
                ? SnowflakeValue.toJSON(message.guildId)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.topic !== undefined && (obj.topic = message.topic);
        message.type !== undefined &&
            (obj.type = channelData_ChannelTypeToJSON(message.type));
        message.nsfw !== undefined && (obj.nsfw = message.nsfw);
        message.position !== undefined && (obj.position = message.position);
        message.bitrate !== undefined && (obj.bitrate = message.bitrate);
        message.userLimit !== undefined && (obj.userLimit = message.userLimit);
        message.parentId !== undefined &&
            (obj.parentId = message.parentId
                ? SnowflakeValue.toJSON(message.parentId)
                : undefined);
        message.rateLimitPerUser !== undefined &&
            (obj.rateLimitPerUser = message.rateLimitPerUser);
        if (message.permissionOverwrites) {
            obj.permissionOverwrites = message.permissionOverwrites.map((e) => e ? ChannelData_ChannelPermissionOverwriteData.toJSON(e) : undefined);
        }
        else {
            obj.permissionOverwrites = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseChannelData };
        message.permissionOverwrites = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = SnowflakeValue.fromPartial(object.guildId);
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.topic !== undefined && object.topic !== null) {
            message.topic = object.topic;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        if (object.nsfw !== undefined && object.nsfw !== null) {
            message.nsfw = object.nsfw;
        }
        if (object.position !== undefined && object.position !== null) {
            message.position = object.position;
        }
        if (object.bitrate !== undefined && object.bitrate !== null) {
            message.bitrate = object.bitrate;
        }
        if (object.userLimit !== undefined && object.userLimit !== null) {
            message.userLimit = object.userLimit;
        }
        if (object.parentId !== undefined && object.parentId !== null) {
            message.parentId = SnowflakeValue.fromPartial(object.parentId);
        }
        if (object.rateLimitPerUser !== undefined &&
            object.rateLimitPerUser !== null) {
            message.rateLimitPerUser = object.rateLimitPerUser;
        }
        if (object.permissionOverwrites !== undefined &&
            object.permissionOverwrites !== null) {
            for (const e of object.permissionOverwrites) {
                message.permissionOverwrites.push(ChannelData_ChannelPermissionOverwriteData.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(ChannelData.$type, ChannelData);
const baseChannelData_ChannelPermissionOverwriteData = {
    $type: "pylon.discord.v1.model.ChannelData.ChannelPermissionOverwriteData",
    id: "0",
    type: 0,
    allow: "0",
    deny: "0",
};
export const ChannelData_ChannelPermissionOverwriteData = {
    $type: "pylon.discord.v1.model.ChannelData.ChannelPermissionOverwriteData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "0") {
            writer.uint32(9).fixed64(message.id);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        if (message.allow !== "0") {
            writer.uint32(24).uint64(message.allow);
        }
        if (message.deny !== "0") {
            writer.uint32(32).uint64(message.deny);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseChannelData_ChannelPermissionOverwriteData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.fixed64());
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.allow = longToString(reader.uint64());
                    break;
                case 4:
                    message.deny = longToString(reader.uint64());
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
            ...baseChannelData_ChannelPermissionOverwriteData,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = channelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteTypeFromJSON(object.type);
        }
        if (object.allow !== undefined && object.allow !== null) {
            message.allow = String(object.allow);
        }
        if (object.deny !== undefined && object.deny !== null) {
            message.deny = String(object.deny);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined &&
            (obj.type = channelData_ChannelPermissionOverwriteData_ChannelPermissionOverwriteTypeToJSON(message.type));
        message.allow !== undefined && (obj.allow = message.allow);
        message.deny !== undefined && (obj.deny = message.deny);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseChannelData_ChannelPermissionOverwriteData,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        if (object.allow !== undefined && object.allow !== null) {
            message.allow = object.allow;
        }
        if (object.deny !== undefined && object.deny !== null) {
            message.deny = object.deny;
        }
        return message;
    },
};
messageTypeRegistry.set(ChannelData_ChannelPermissionOverwriteData.$type, ChannelData_ChannelPermissionOverwriteData);
const baseUserData = {
    $type: "pylon.discord.v1.model.UserData",
    id: "0",
    username: "",
    discriminator: 0,
    bot: false,
};
export const UserData = {
    $type: "pylon.discord.v1.model.UserData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "0") {
            writer.uint32(9).fixed64(message.id);
        }
        if (message.username !== "") {
            writer.uint32(18).string(message.username);
        }
        if (message.avatar !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.avatar }, writer.uint32(26).fork()).ldelim();
        }
        if (message.discriminator !== 0) {
            writer.uint32(32).uint32(message.discriminator);
        }
        if (message.bot === true) {
            writer.uint32(40).bool(message.bot);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.fixed64());
                    break;
                case 2:
                    message.username = reader.string();
                    break;
                case 3:
                    message.avatar = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.discriminator = reader.uint32();
                    break;
                case 5:
                    message.bot = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUserData };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        if (object.username !== undefined && object.username !== null) {
            message.username = String(object.username);
        }
        if (object.avatar !== undefined && object.avatar !== null) {
            message.avatar = String(object.avatar);
        }
        if (object.discriminator !== undefined && object.discriminator !== null) {
            message.discriminator = Number(object.discriminator);
        }
        if (object.bot !== undefined && object.bot !== null) {
            message.bot = Boolean(object.bot);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.username !== undefined && (obj.username = message.username);
        message.avatar !== undefined && (obj.avatar = message.avatar);
        message.discriminator !== undefined &&
            (obj.discriminator = message.discriminator);
        message.bot !== undefined && (obj.bot = message.bot);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUserData };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.username !== undefined && object.username !== null) {
            message.username = object.username;
        }
        if (object.avatar !== undefined && object.avatar !== null) {
            message.avatar = object.avatar;
        }
        if (object.discriminator !== undefined && object.discriminator !== null) {
            message.discriminator = object.discriminator;
        }
        if (object.bot !== undefined && object.bot !== null) {
            message.bot = object.bot;
        }
        return message;
    },
};
messageTypeRegistry.set(UserData.$type, UserData);
const baseMemberData = {
    $type: "pylon.discord.v1.model.MemberData",
    id: "0",
    guildId: "0",
    roles: "0",
    permissions: "0",
};
export const MemberData = {
    $type: "pylon.discord.v1.model.MemberData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "0") {
            writer.uint32(9).fixed64(message.id);
        }
        if (message.guildId !== "0") {
            writer.uint32(17).fixed64(message.guildId);
        }
        if (message.user !== undefined) {
            UserData.encode(message.user, writer.uint32(26).fork()).ldelim();
        }
        if (message.nick !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.nick }, writer.uint32(34).fork()).ldelim();
        }
        writer.uint32(42).fork();
        for (const v of message.roles) {
            writer.fixed64(v);
        }
        writer.ldelim();
        if (message.joinedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.joinedAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.premiumSince !== undefined) {
            Timestamp.encode(toTimestamp(message.premiumSince), writer.uint32(58).fork()).ldelim();
        }
        if (message.permissions !== "0") {
            writer.uint32(64).uint64(message.permissions);
        }
        if (message.pending !== undefined) {
            BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.pending }, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMemberData };
        message.roles = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.fixed64());
                    break;
                case 2:
                    message.guildId = longToString(reader.fixed64());
                    break;
                case 3:
                    message.user = UserData.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.nick = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.roles.push(longToString(reader.fixed64()));
                        }
                    }
                    else {
                        message.roles.push(longToString(reader.fixed64()));
                    }
                    break;
                case 6:
                    message.joinedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.premiumSince = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.permissions = longToString(reader.uint64());
                    break;
                case 9:
                    message.pending = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMemberData };
        message.roles = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        if (object.user !== undefined && object.user !== null) {
            message.user = UserData.fromJSON(object.user);
        }
        if (object.nick !== undefined && object.nick !== null) {
            message.nick = String(object.nick);
        }
        if (object.roles !== undefined && object.roles !== null) {
            for (const e of object.roles) {
                message.roles.push(String(e));
            }
        }
        if (object.joinedAt !== undefined && object.joinedAt !== null) {
            message.joinedAt = fromJsonTimestamp(object.joinedAt);
        }
        if (object.premiumSince !== undefined && object.premiumSince !== null) {
            message.premiumSince = fromJsonTimestamp(object.premiumSince);
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            message.permissions = String(object.permissions);
        }
        if (object.pending !== undefined && object.pending !== null) {
            message.pending = Boolean(object.pending);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.guildId !== undefined && (obj.guildId = message.guildId);
        message.user !== undefined &&
            (obj.user = message.user ? UserData.toJSON(message.user) : undefined);
        message.nick !== undefined && (obj.nick = message.nick);
        if (message.roles) {
            obj.roles = message.roles.map((e) => e);
        }
        else {
            obj.roles = [];
        }
        message.joinedAt !== undefined &&
            (obj.joinedAt = message.joinedAt.toISOString());
        message.premiumSince !== undefined &&
            (obj.premiumSince = message.premiumSince.toISOString());
        message.permissions !== undefined &&
            (obj.permissions = message.permissions);
        message.pending !== undefined && (obj.pending = message.pending);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMemberData };
        message.roles = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        if (object.user !== undefined && object.user !== null) {
            message.user = UserData.fromPartial(object.user);
        }
        if (object.nick !== undefined && object.nick !== null) {
            message.nick = object.nick;
        }
        if (object.roles !== undefined && object.roles !== null) {
            for (const e of object.roles) {
                message.roles.push(e);
            }
        }
        if (object.joinedAt !== undefined && object.joinedAt !== null) {
            message.joinedAt = object.joinedAt;
        }
        if (object.premiumSince !== undefined && object.premiumSince !== null) {
            message.premiumSince = object.premiumSince;
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            message.permissions = object.permissions;
        }
        if (object.pending !== undefined && object.pending !== null) {
            message.pending = object.pending;
        }
        return message;
    },
};
messageTypeRegistry.set(MemberData.$type, MemberData);
const baseRoleData = {
    $type: "pylon.discord.v1.model.RoleData",
    id: "0",
    guildId: "0",
    name: "",
    managed: false,
    mentionable: false,
    hoist: false,
    color: 0,
    position: 0,
    permissions: "0",
};
export const RoleData = {
    $type: "pylon.discord.v1.model.RoleData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "0") {
            writer.uint32(9).fixed64(message.id);
        }
        if (message.guildId !== "0") {
            writer.uint32(17).fixed64(message.guildId);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.managed === true) {
            writer.uint32(32).bool(message.managed);
        }
        if (message.mentionable === true) {
            writer.uint32(40).bool(message.mentionable);
        }
        if (message.hoist === true) {
            writer.uint32(48).bool(message.hoist);
        }
        if (message.color !== 0) {
            writer.uint32(56).uint32(message.color);
        }
        if (message.position !== 0) {
            writer.uint32(64).uint32(message.position);
        }
        if (message.permissions !== "0") {
            writer.uint32(72).uint64(message.permissions);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRoleData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.fixed64());
                    break;
                case 2:
                    message.guildId = longToString(reader.fixed64());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.managed = reader.bool();
                    break;
                case 5:
                    message.mentionable = reader.bool();
                    break;
                case 6:
                    message.hoist = reader.bool();
                    break;
                case 7:
                    message.color = reader.uint32();
                    break;
                case 8:
                    message.position = reader.uint32();
                    break;
                case 9:
                    message.permissions = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRoleData };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        if (object.managed !== undefined && object.managed !== null) {
            message.managed = Boolean(object.managed);
        }
        if (object.mentionable !== undefined && object.mentionable !== null) {
            message.mentionable = Boolean(object.mentionable);
        }
        if (object.hoist !== undefined && object.hoist !== null) {
            message.hoist = Boolean(object.hoist);
        }
        if (object.color !== undefined && object.color !== null) {
            message.color = Number(object.color);
        }
        if (object.position !== undefined && object.position !== null) {
            message.position = Number(object.position);
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            message.permissions = String(object.permissions);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.guildId !== undefined && (obj.guildId = message.guildId);
        message.name !== undefined && (obj.name = message.name);
        message.managed !== undefined && (obj.managed = message.managed);
        message.mentionable !== undefined &&
            (obj.mentionable = message.mentionable);
        message.hoist !== undefined && (obj.hoist = message.hoist);
        message.color !== undefined && (obj.color = message.color);
        message.position !== undefined && (obj.position = message.position);
        message.permissions !== undefined &&
            (obj.permissions = message.permissions);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRoleData };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.managed !== undefined && object.managed !== null) {
            message.managed = object.managed;
        }
        if (object.mentionable !== undefined && object.mentionable !== null) {
            message.mentionable = object.mentionable;
        }
        if (object.hoist !== undefined && object.hoist !== null) {
            message.hoist = object.hoist;
        }
        if (object.color !== undefined && object.color !== null) {
            message.color = object.color;
        }
        if (object.position !== undefined && object.position !== null) {
            message.position = object.position;
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            message.permissions = object.permissions;
        }
        return message;
    },
};
messageTypeRegistry.set(RoleData.$type, RoleData);
const baseEmojiData = {
    $type: "pylon.discord.v1.model.EmojiData",
    id: "0",
    guildId: "0",
    name: "",
    animated: false,
    roles: "0",
    managed: false,
    requireColons: false,
    available: false,
    userId: "0",
};
export const EmojiData = {
    $type: "pylon.discord.v1.model.EmojiData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "0") {
            writer.uint32(9).fixed64(message.id);
        }
        if (message.guildId !== "0") {
            writer.uint32(17).fixed64(message.guildId);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.animated === true) {
            writer.uint32(32).bool(message.animated);
        }
        writer.uint32(42).fork();
        for (const v of message.roles) {
            writer.fixed64(v);
        }
        writer.ldelim();
        if (message.managed === true) {
            writer.uint32(48).bool(message.managed);
        }
        if (message.requireColons === true) {
            writer.uint32(56).bool(message.requireColons);
        }
        if (message.available === true) {
            writer.uint32(64).bool(message.available);
        }
        if (message.userId !== "0") {
            writer.uint32(73).fixed64(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEmojiData };
        message.roles = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.fixed64());
                    break;
                case 2:
                    message.guildId = longToString(reader.fixed64());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.animated = reader.bool();
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.roles.push(longToString(reader.fixed64()));
                        }
                    }
                    else {
                        message.roles.push(longToString(reader.fixed64()));
                    }
                    break;
                case 6:
                    message.managed = reader.bool();
                    break;
                case 7:
                    message.requireColons = reader.bool();
                    break;
                case 8:
                    message.available = reader.bool();
                    break;
                case 9:
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
        const message = { ...baseEmojiData };
        message.roles = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        if (object.animated !== undefined && object.animated !== null) {
            message.animated = Boolean(object.animated);
        }
        if (object.roles !== undefined && object.roles !== null) {
            for (const e of object.roles) {
                message.roles.push(String(e));
            }
        }
        if (object.managed !== undefined && object.managed !== null) {
            message.managed = Boolean(object.managed);
        }
        if (object.requireColons !== undefined && object.requireColons !== null) {
            message.requireColons = Boolean(object.requireColons);
        }
        if (object.available !== undefined && object.available !== null) {
            message.available = Boolean(object.available);
        }
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = String(object.userId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.guildId !== undefined && (obj.guildId = message.guildId);
        message.name !== undefined && (obj.name = message.name);
        message.animated !== undefined && (obj.animated = message.animated);
        if (message.roles) {
            obj.roles = message.roles.map((e) => e);
        }
        else {
            obj.roles = [];
        }
        message.managed !== undefined && (obj.managed = message.managed);
        message.requireColons !== undefined &&
            (obj.requireColons = message.requireColons);
        message.available !== undefined && (obj.available = message.available);
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEmojiData };
        message.roles = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.animated !== undefined && object.animated !== null) {
            message.animated = object.animated;
        }
        if (object.roles !== undefined && object.roles !== null) {
            for (const e of object.roles) {
                message.roles.push(e);
            }
        }
        if (object.managed !== undefined && object.managed !== null) {
            message.managed = object.managed;
        }
        if (object.requireColons !== undefined && object.requireColons !== null) {
            message.requireColons = object.requireColons;
        }
        if (object.available !== undefined && object.available !== null) {
            message.available = object.available;
        }
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        return message;
    },
};
messageTypeRegistry.set(EmojiData.$type, EmojiData);
const baseVoiceStateData = {
    $type: "pylon.discord.v1.model.VoiceStateData",
    guildId: "0",
    selfMute: false,
    selfDeaf: false,
    selfVideo: false,
    selfStream: false,
    mute: false,
    deaf: false,
    suppress: false,
};
export const VoiceStateData = {
    $type: "pylon.discord.v1.model.VoiceStateData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.member !== undefined) {
            MemberData.encode(message.member, writer.uint32(10).fork()).ldelim();
        }
        if (message.guildId !== "0") {
            writer.uint32(17).fixed64(message.guildId);
        }
        if (message.channelId !== undefined) {
            SnowflakeValue.encode(message.channelId, writer.uint32(26).fork()).ldelim();
        }
        if (message.sessionId !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.sessionId }, writer.uint32(34).fork()).ldelim();
        }
        if (message.selfMute === true) {
            writer.uint32(40).bool(message.selfMute);
        }
        if (message.selfDeaf === true) {
            writer.uint32(48).bool(message.selfDeaf);
        }
        if (message.selfVideo === true) {
            writer.uint32(56).bool(message.selfVideo);
        }
        if (message.selfStream === true) {
            writer.uint32(64).bool(message.selfStream);
        }
        if (message.mute === true) {
            writer.uint32(72).bool(message.mute);
        }
        if (message.deaf === true) {
            writer.uint32(80).bool(message.deaf);
        }
        if (message.suppress === true) {
            writer.uint32(88).bool(message.suppress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVoiceStateData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.member = MemberData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.guildId = longToString(reader.fixed64());
                    break;
                case 3:
                    message.channelId = SnowflakeValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.sessionId = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.selfMute = reader.bool();
                    break;
                case 6:
                    message.selfDeaf = reader.bool();
                    break;
                case 7:
                    message.selfVideo = reader.bool();
                    break;
                case 8:
                    message.selfStream = reader.bool();
                    break;
                case 9:
                    message.mute = reader.bool();
                    break;
                case 10:
                    message.deaf = reader.bool();
                    break;
                case 11:
                    message.suppress = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseVoiceStateData };
        if (object.member !== undefined && object.member !== null) {
            message.member = MemberData.fromJSON(object.member);
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = SnowflakeValue.fromJSON(object.channelId);
        }
        if (object.sessionId !== undefined && object.sessionId !== null) {
            message.sessionId = String(object.sessionId);
        }
        if (object.selfMute !== undefined && object.selfMute !== null) {
            message.selfMute = Boolean(object.selfMute);
        }
        if (object.selfDeaf !== undefined && object.selfDeaf !== null) {
            message.selfDeaf = Boolean(object.selfDeaf);
        }
        if (object.selfVideo !== undefined && object.selfVideo !== null) {
            message.selfVideo = Boolean(object.selfVideo);
        }
        if (object.selfStream !== undefined && object.selfStream !== null) {
            message.selfStream = Boolean(object.selfStream);
        }
        if (object.mute !== undefined && object.mute !== null) {
            message.mute = Boolean(object.mute);
        }
        if (object.deaf !== undefined && object.deaf !== null) {
            message.deaf = Boolean(object.deaf);
        }
        if (object.suppress !== undefined && object.suppress !== null) {
            message.suppress = Boolean(object.suppress);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.member !== undefined &&
            (obj.member = message.member
                ? MemberData.toJSON(message.member)
                : undefined);
        message.guildId !== undefined && (obj.guildId = message.guildId);
        message.channelId !== undefined &&
            (obj.channelId = message.channelId
                ? SnowflakeValue.toJSON(message.channelId)
                : undefined);
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        message.selfMute !== undefined && (obj.selfMute = message.selfMute);
        message.selfDeaf !== undefined && (obj.selfDeaf = message.selfDeaf);
        message.selfVideo !== undefined && (obj.selfVideo = message.selfVideo);
        message.selfStream !== undefined && (obj.selfStream = message.selfStream);
        message.mute !== undefined && (obj.mute = message.mute);
        message.deaf !== undefined && (obj.deaf = message.deaf);
        message.suppress !== undefined && (obj.suppress = message.suppress);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseVoiceStateData };
        if (object.member !== undefined && object.member !== null) {
            message.member = MemberData.fromPartial(object.member);
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = SnowflakeValue.fromPartial(object.channelId);
        }
        if (object.sessionId !== undefined && object.sessionId !== null) {
            message.sessionId = object.sessionId;
        }
        if (object.selfMute !== undefined && object.selfMute !== null) {
            message.selfMute = object.selfMute;
        }
        if (object.selfDeaf !== undefined && object.selfDeaf !== null) {
            message.selfDeaf = object.selfDeaf;
        }
        if (object.selfVideo !== undefined && object.selfVideo !== null) {
            message.selfVideo = object.selfVideo;
        }
        if (object.selfStream !== undefined && object.selfStream !== null) {
            message.selfStream = object.selfStream;
        }
        if (object.mute !== undefined && object.mute !== null) {
            message.mute = object.mute;
        }
        if (object.deaf !== undefined && object.deaf !== null) {
            message.deaf = object.deaf;
        }
        if (object.suppress !== undefined && object.suppress !== null) {
            message.suppress = object.suppress;
        }
        return message;
    },
};
messageTypeRegistry.set(VoiceStateData.$type, VoiceStateData);
const baseMessageData = {
    $type: "pylon.discord.v1.model.MessageData",
    id: "0",
    channelId: "0",
    content: "",
    tts: false,
    mentionEveryone: false,
    pinned: false,
    type: 0,
    flags: 0,
};
export const MessageData = {
    $type: "pylon.discord.v1.model.MessageData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "0") {
            writer.uint32(9).fixed64(message.id);
        }
        if (message.channelId !== "0") {
            writer.uint32(17).fixed64(message.channelId);
        }
        if (message.guildId !== undefined) {
            SnowflakeValue.encode(message.guildId, writer.uint32(26).fork()).ldelim();
        }
        if (message.content !== "") {
            writer.uint32(34).string(message.content);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        if (message.editedTimestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.editedTimestamp), writer.uint32(50).fork()).ldelim();
        }
        if (message.mentionRoles !== undefined) {
            SnowflakeListValue.encode(message.mentionRoles, writer.uint32(58).fork()).ldelim();
        }
        if (message.tts === true) {
            writer.uint32(64).bool(message.tts);
        }
        if (message.mentionEveryone === true) {
            writer.uint32(72).bool(message.mentionEveryone);
        }
        for (const v of message.attachments) {
            MessageData_MessageAttachmentData.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.embeds) {
            MessageData_MessageEmbedData.encode(v, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.mentions) {
            MessageData_MessageMentionData.encode(v, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.reactions) {
            MessageData_MessageReactionData.encode(v, writer.uint32(106).fork()).ldelim();
        }
        if (message.pinned === true) {
            writer.uint32(112).bool(message.pinned);
        }
        if (message.type !== 0) {
            writer.uint32(120).int32(message.type);
        }
        for (const v of message.mentionChannels) {
            MessageData_MessageMentionChannelData.encode(v, writer.uint32(130).fork()).ldelim();
        }
        if (message.flags !== 0) {
            writer.uint32(136).uint32(message.flags);
        }
        if (message.activity !== undefined) {
            MessageData_MessageActivityData.encode(message.activity, writer.uint32(146).fork()).ldelim();
        }
        if (message.application !== undefined) {
            MessageData_MessageApplicationData.encode(message.application, writer.uint32(154).fork()).ldelim();
        }
        if (message.messageReference !== undefined) {
            MessageData_MessageReferenceData.encode(message.messageReference, writer.uint32(162).fork()).ldelim();
        }
        if (message.author !== undefined) {
            UserData.encode(message.author, writer.uint32(170).fork()).ldelim();
        }
        if (message.member !== undefined) {
            MemberData.encode(message.member, writer.uint32(178).fork()).ldelim();
        }
        if (message.webhookId !== undefined) {
            SnowflakeValue.encode(message.webhookId, writer.uint32(186).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMessageData };
        message.attachments = [];
        message.embeds = [];
        message.mentions = [];
        message.reactions = [];
        message.mentionChannels = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.fixed64());
                    break;
                case 2:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 3:
                    message.guildId = SnowflakeValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.content = reader.string();
                    break;
                case 5:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.editedTimestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.mentionRoles = SnowflakeListValue.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.tts = reader.bool();
                    break;
                case 9:
                    message.mentionEveryone = reader.bool();
                    break;
                case 10:
                    message.attachments.push(MessageData_MessageAttachmentData.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.embeds.push(MessageData_MessageEmbedData.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.mentions.push(MessageData_MessageMentionData.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.reactions.push(MessageData_MessageReactionData.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.pinned = reader.bool();
                    break;
                case 15:
                    message.type = reader.int32();
                    break;
                case 16:
                    message.mentionChannels.push(MessageData_MessageMentionChannelData.decode(reader, reader.uint32()));
                    break;
                case 17:
                    message.flags = reader.uint32();
                    break;
                case 18:
                    message.activity = MessageData_MessageActivityData.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.application = MessageData_MessageApplicationData.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.messageReference = MessageData_MessageReferenceData.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.author = UserData.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.member = MemberData.decode(reader, reader.uint32());
                    break;
                case 23:
                    message.webhookId = SnowflakeValue.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMessageData };
        message.attachments = [];
        message.embeds = [];
        message.mentions = [];
        message.reactions = [];
        message.mentionChannels = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = SnowflakeValue.fromJSON(object.guildId);
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = String(object.content);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromJsonTimestamp(object.timestamp);
        }
        if (object.editedTimestamp !== undefined &&
            object.editedTimestamp !== null) {
            message.editedTimestamp = fromJsonTimestamp(object.editedTimestamp);
        }
        if (object.mentionRoles !== undefined && object.mentionRoles !== null) {
            message.mentionRoles = SnowflakeListValue.fromJSON(object.mentionRoles);
        }
        if (object.tts !== undefined && object.tts !== null) {
            message.tts = Boolean(object.tts);
        }
        if (object.mentionEveryone !== undefined &&
            object.mentionEveryone !== null) {
            message.mentionEveryone = Boolean(object.mentionEveryone);
        }
        if (object.attachments !== undefined && object.attachments !== null) {
            for (const e of object.attachments) {
                message.attachments.push(MessageData_MessageAttachmentData.fromJSON(e));
            }
        }
        if (object.embeds !== undefined && object.embeds !== null) {
            for (const e of object.embeds) {
                message.embeds.push(MessageData_MessageEmbedData.fromJSON(e));
            }
        }
        if (object.mentions !== undefined && object.mentions !== null) {
            for (const e of object.mentions) {
                message.mentions.push(MessageData_MessageMentionData.fromJSON(e));
            }
        }
        if (object.reactions !== undefined && object.reactions !== null) {
            for (const e of object.reactions) {
                message.reactions.push(MessageData_MessageReactionData.fromJSON(e));
            }
        }
        if (object.pinned !== undefined && object.pinned !== null) {
            message.pinned = Boolean(object.pinned);
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = messageData_MessageTypeFromJSON(object.type);
        }
        if (object.mentionChannels !== undefined &&
            object.mentionChannels !== null) {
            for (const e of object.mentionChannels) {
                message.mentionChannels.push(MessageData_MessageMentionChannelData.fromJSON(e));
            }
        }
        if (object.flags !== undefined && object.flags !== null) {
            message.flags = Number(object.flags);
        }
        if (object.activity !== undefined && object.activity !== null) {
            message.activity = MessageData_MessageActivityData.fromJSON(object.activity);
        }
        if (object.application !== undefined && object.application !== null) {
            message.application = MessageData_MessageApplicationData.fromJSON(object.application);
        }
        if (object.messageReference !== undefined &&
            object.messageReference !== null) {
            message.messageReference = MessageData_MessageReferenceData.fromJSON(object.messageReference);
        }
        if (object.author !== undefined && object.author !== null) {
            message.author = UserData.fromJSON(object.author);
        }
        if (object.member !== undefined && object.member !== null) {
            message.member = MemberData.fromJSON(object.member);
        }
        if (object.webhookId !== undefined && object.webhookId !== null) {
            message.webhookId = SnowflakeValue.fromJSON(object.webhookId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.guildId !== undefined &&
            (obj.guildId = message.guildId
                ? SnowflakeValue.toJSON(message.guildId)
                : undefined);
        message.content !== undefined && (obj.content = message.content);
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        message.editedTimestamp !== undefined &&
            (obj.editedTimestamp = message.editedTimestamp.toISOString());
        message.mentionRoles !== undefined &&
            (obj.mentionRoles = message.mentionRoles
                ? SnowflakeListValue.toJSON(message.mentionRoles)
                : undefined);
        message.tts !== undefined && (obj.tts = message.tts);
        message.mentionEveryone !== undefined &&
            (obj.mentionEveryone = message.mentionEveryone);
        if (message.attachments) {
            obj.attachments = message.attachments.map((e) => e ? MessageData_MessageAttachmentData.toJSON(e) : undefined);
        }
        else {
            obj.attachments = [];
        }
        if (message.embeds) {
            obj.embeds = message.embeds.map((e) => e ? MessageData_MessageEmbedData.toJSON(e) : undefined);
        }
        else {
            obj.embeds = [];
        }
        if (message.mentions) {
            obj.mentions = message.mentions.map((e) => e ? MessageData_MessageMentionData.toJSON(e) : undefined);
        }
        else {
            obj.mentions = [];
        }
        if (message.reactions) {
            obj.reactions = message.reactions.map((e) => e ? MessageData_MessageReactionData.toJSON(e) : undefined);
        }
        else {
            obj.reactions = [];
        }
        message.pinned !== undefined && (obj.pinned = message.pinned);
        message.type !== undefined &&
            (obj.type = messageData_MessageTypeToJSON(message.type));
        if (message.mentionChannels) {
            obj.mentionChannels = message.mentionChannels.map((e) => e ? MessageData_MessageMentionChannelData.toJSON(e) : undefined);
        }
        else {
            obj.mentionChannels = [];
        }
        message.flags !== undefined && (obj.flags = message.flags);
        message.activity !== undefined &&
            (obj.activity = message.activity
                ? MessageData_MessageActivityData.toJSON(message.activity)
                : undefined);
        message.application !== undefined &&
            (obj.application = message.application
                ? MessageData_MessageApplicationData.toJSON(message.application)
                : undefined);
        message.messageReference !== undefined &&
            (obj.messageReference = message.messageReference
                ? MessageData_MessageReferenceData.toJSON(message.messageReference)
                : undefined);
        message.author !== undefined &&
            (obj.author = message.author
                ? UserData.toJSON(message.author)
                : undefined);
        message.member !== undefined &&
            (obj.member = message.member
                ? MemberData.toJSON(message.member)
                : undefined);
        message.webhookId !== undefined &&
            (obj.webhookId = message.webhookId
                ? SnowflakeValue.toJSON(message.webhookId)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMessageData };
        message.attachments = [];
        message.embeds = [];
        message.mentions = [];
        message.reactions = [];
        message.mentionChannels = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = SnowflakeValue.fromPartial(object.guildId);
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = object.content;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        if (object.editedTimestamp !== undefined &&
            object.editedTimestamp !== null) {
            message.editedTimestamp = object.editedTimestamp;
        }
        if (object.mentionRoles !== undefined && object.mentionRoles !== null) {
            message.mentionRoles = SnowflakeListValue.fromPartial(object.mentionRoles);
        }
        if (object.tts !== undefined && object.tts !== null) {
            message.tts = object.tts;
        }
        if (object.mentionEveryone !== undefined &&
            object.mentionEveryone !== null) {
            message.mentionEveryone = object.mentionEveryone;
        }
        if (object.attachments !== undefined && object.attachments !== null) {
            for (const e of object.attachments) {
                message.attachments.push(MessageData_MessageAttachmentData.fromPartial(e));
            }
        }
        if (object.embeds !== undefined && object.embeds !== null) {
            for (const e of object.embeds) {
                message.embeds.push(MessageData_MessageEmbedData.fromPartial(e));
            }
        }
        if (object.mentions !== undefined && object.mentions !== null) {
            for (const e of object.mentions) {
                message.mentions.push(MessageData_MessageMentionData.fromPartial(e));
            }
        }
        if (object.reactions !== undefined && object.reactions !== null) {
            for (const e of object.reactions) {
                message.reactions.push(MessageData_MessageReactionData.fromPartial(e));
            }
        }
        if (object.pinned !== undefined && object.pinned !== null) {
            message.pinned = object.pinned;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        if (object.mentionChannels !== undefined &&
            object.mentionChannels !== null) {
            for (const e of object.mentionChannels) {
                message.mentionChannels.push(MessageData_MessageMentionChannelData.fromPartial(e));
            }
        }
        if (object.flags !== undefined && object.flags !== null) {
            message.flags = object.flags;
        }
        if (object.activity !== undefined && object.activity !== null) {
            message.activity = MessageData_MessageActivityData.fromPartial(object.activity);
        }
        if (object.application !== undefined && object.application !== null) {
            message.application = MessageData_MessageApplicationData.fromPartial(object.application);
        }
        if (object.messageReference !== undefined &&
            object.messageReference !== null) {
            message.messageReference = MessageData_MessageReferenceData.fromPartial(object.messageReference);
        }
        if (object.author !== undefined && object.author !== null) {
            message.author = UserData.fromPartial(object.author);
        }
        if (object.member !== undefined && object.member !== null) {
            message.member = MemberData.fromPartial(object.member);
        }
        if (object.webhookId !== undefined && object.webhookId !== null) {
            message.webhookId = SnowflakeValue.fromPartial(object.webhookId);
        }
        return message;
    },
};
messageTypeRegistry.set(MessageData.$type, MessageData);
const baseMessageData_MessageAttachmentData = {
    $type: "pylon.discord.v1.model.MessageData.MessageAttachmentData",
    id: "0",
    filename: "",
    size: "0",
    url: "",
    proxyUrl: "",
    width: "0",
    height: "0",
};
export const MessageData_MessageAttachmentData = {
    $type: "pylon.discord.v1.model.MessageData.MessageAttachmentData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "0") {
            writer.uint32(9).fixed64(message.id);
        }
        if (message.filename !== "") {
            writer.uint32(18).string(message.filename);
        }
        if (message.size !== "0") {
            writer.uint32(24).uint64(message.size);
        }
        if (message.url !== "") {
            writer.uint32(34).string(message.url);
        }
        if (message.proxyUrl !== "") {
            writer.uint32(42).string(message.proxyUrl);
        }
        if (message.width !== "0") {
            writer.uint32(48).uint64(message.width);
        }
        if (message.height !== "0") {
            writer.uint32(56).uint64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageData_MessageAttachmentData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.fixed64());
                    break;
                case 2:
                    message.filename = reader.string();
                    break;
                case 3:
                    message.size = longToString(reader.uint64());
                    break;
                case 4:
                    message.url = reader.string();
                    break;
                case 5:
                    message.proxyUrl = reader.string();
                    break;
                case 6:
                    message.width = longToString(reader.uint64());
                    break;
                case 7:
                    message.height = longToString(reader.uint64());
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
            ...baseMessageData_MessageAttachmentData,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        if (object.filename !== undefined && object.filename !== null) {
            message.filename = String(object.filename);
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = String(object.size);
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        if (object.proxyUrl !== undefined && object.proxyUrl !== null) {
            message.proxyUrl = String(object.proxyUrl);
        }
        if (object.width !== undefined && object.width !== null) {
            message.width = String(object.width);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = String(object.height);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.filename !== undefined && (obj.filename = message.filename);
        message.size !== undefined && (obj.size = message.size);
        message.url !== undefined && (obj.url = message.url);
        message.proxyUrl !== undefined && (obj.proxyUrl = message.proxyUrl);
        message.width !== undefined && (obj.width = message.width);
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageData_MessageAttachmentData,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.filename !== undefined && object.filename !== null) {
            message.filename = object.filename;
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = object.size;
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        if (object.proxyUrl !== undefined && object.proxyUrl !== null) {
            message.proxyUrl = object.proxyUrl;
        }
        if (object.width !== undefined && object.width !== null) {
            message.width = object.width;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        return message;
    },
};
messageTypeRegistry.set(MessageData_MessageAttachmentData.$type, MessageData_MessageAttachmentData);
const baseMessageData_MessageMentionData = {
    $type: "pylon.discord.v1.model.MessageData.MessageMentionData",
    id: "0",
    username: "",
    avatar: "",
    discriminator: 0,
};
export const MessageData_MessageMentionData = {
    $type: "pylon.discord.v1.model.MessageData.MessageMentionData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "0") {
            writer.uint32(9).fixed64(message.id);
        }
        if (message.username !== "") {
            writer.uint32(18).string(message.username);
        }
        if (message.avatar !== "") {
            writer.uint32(26).string(message.avatar);
        }
        if (message.discriminator !== 0) {
            writer.uint32(32).uint32(message.discriminator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageData_MessageMentionData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.fixed64());
                    break;
                case 2:
                    message.username = reader.string();
                    break;
                case 3:
                    message.avatar = reader.string();
                    break;
                case 4:
                    message.discriminator = reader.uint32();
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
            ...baseMessageData_MessageMentionData,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        if (object.username !== undefined && object.username !== null) {
            message.username = String(object.username);
        }
        if (object.avatar !== undefined && object.avatar !== null) {
            message.avatar = String(object.avatar);
        }
        if (object.discriminator !== undefined && object.discriminator !== null) {
            message.discriminator = Number(object.discriminator);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.username !== undefined && (obj.username = message.username);
        message.avatar !== undefined && (obj.avatar = message.avatar);
        message.discriminator !== undefined &&
            (obj.discriminator = message.discriminator);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageData_MessageMentionData,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.username !== undefined && object.username !== null) {
            message.username = object.username;
        }
        if (object.avatar !== undefined && object.avatar !== null) {
            message.avatar = object.avatar;
        }
        if (object.discriminator !== undefined && object.discriminator !== null) {
            message.discriminator = object.discriminator;
        }
        return message;
    },
};
messageTypeRegistry.set(MessageData_MessageMentionData.$type, MessageData_MessageMentionData);
const baseMessageData_MessageReactionData = {
    $type: "pylon.discord.v1.model.MessageData.MessageReactionData",
    count: 0,
    me: false,
};
export const MessageData_MessageReactionData = {
    $type: "pylon.discord.v1.model.MessageData.MessageReactionData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.count !== 0) {
            writer.uint32(8).uint32(message.count);
        }
        if (message.me === true) {
            writer.uint32(16).bool(message.me);
        }
        if (message.emoji !== undefined) {
            MessageData_MessageReactionEmojiData.encode(message.emoji, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageData_MessageReactionData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.count = reader.uint32();
                    break;
                case 2:
                    message.me = reader.bool();
                    break;
                case 3:
                    message.emoji = MessageData_MessageReactionEmojiData.decode(reader, reader.uint32());
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
            ...baseMessageData_MessageReactionData,
        };
        if (object.count !== undefined && object.count !== null) {
            message.count = Number(object.count);
        }
        if (object.me !== undefined && object.me !== null) {
            message.me = Boolean(object.me);
        }
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = MessageData_MessageReactionEmojiData.fromJSON(object.emoji);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.count !== undefined && (obj.count = message.count);
        message.me !== undefined && (obj.me = message.me);
        message.emoji !== undefined &&
            (obj.emoji = message.emoji
                ? MessageData_MessageReactionEmojiData.toJSON(message.emoji)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageData_MessageReactionData,
        };
        if (object.count !== undefined && object.count !== null) {
            message.count = object.count;
        }
        if (object.me !== undefined && object.me !== null) {
            message.me = object.me;
        }
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = MessageData_MessageReactionEmojiData.fromPartial(object.emoji);
        }
        return message;
    },
};
messageTypeRegistry.set(MessageData_MessageReactionData.$type, MessageData_MessageReactionData);
const baseMessageData_MessageReactionEmojiData = {
    $type: "pylon.discord.v1.model.MessageData.MessageReactionEmojiData",
    id: "0",
    name: "",
    animated: false,
};
export const MessageData_MessageReactionEmojiData = {
    $type: "pylon.discord.v1.model.MessageData.MessageReactionEmojiData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "0") {
            writer.uint32(9).fixed64(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.animated === true) {
            writer.uint32(24).bool(message.animated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageData_MessageReactionEmojiData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.fixed64());
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.animated = reader.bool();
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
            ...baseMessageData_MessageReactionEmojiData,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        if (object.animated !== undefined && object.animated !== null) {
            message.animated = Boolean(object.animated);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.animated !== undefined && (obj.animated = message.animated);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageData_MessageReactionEmojiData,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.animated !== undefined && object.animated !== null) {
            message.animated = object.animated;
        }
        return message;
    },
};
messageTypeRegistry.set(MessageData_MessageReactionEmojiData.$type, MessageData_MessageReactionEmojiData);
const baseMessageData_MessageApplicationData = {
    $type: "pylon.discord.v1.model.MessageData.MessageApplicationData",
    id: "0",
    coverImage: "",
    description: "",
    icon: "",
    name: "",
};
export const MessageData_MessageApplicationData = {
    $type: "pylon.discord.v1.model.MessageData.MessageApplicationData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "0") {
            writer.uint32(9).fixed64(message.id);
        }
        if (message.coverImage !== "") {
            writer.uint32(18).string(message.coverImage);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.icon !== "") {
            writer.uint32(34).string(message.icon);
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageData_MessageApplicationData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.fixed64());
                    break;
                case 2:
                    message.coverImage = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.icon = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
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
            ...baseMessageData_MessageApplicationData,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        if (object.coverImage !== undefined && object.coverImage !== null) {
            message.coverImage = String(object.coverImage);
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        if (object.icon !== undefined && object.icon !== null) {
            message.icon = String(object.icon);
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.coverImage !== undefined && (obj.coverImage = message.coverImage);
        message.description !== undefined &&
            (obj.description = message.description);
        message.icon !== undefined && (obj.icon = message.icon);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageData_MessageApplicationData,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.coverImage !== undefined && object.coverImage !== null) {
            message.coverImage = object.coverImage;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.icon !== undefined && object.icon !== null) {
            message.icon = object.icon;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        return message;
    },
};
messageTypeRegistry.set(MessageData_MessageApplicationData.$type, MessageData_MessageApplicationData);
const baseMessageData_MessageReferenceData = {
    $type: "pylon.discord.v1.model.MessageData.MessageReferenceData",
    messageId: "0",
    channelId: "0",
    guildId: "0",
};
export const MessageData_MessageReferenceData = {
    $type: "pylon.discord.v1.model.MessageData.MessageReferenceData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.messageId !== "0") {
            writer.uint32(9).fixed64(message.messageId);
        }
        if (message.channelId !== "0") {
            writer.uint32(17).fixed64(message.channelId);
        }
        if (message.guildId !== "0") {
            writer.uint32(25).fixed64(message.guildId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageData_MessageReferenceData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messageId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 3:
                    message.guildId = longToString(reader.fixed64());
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
            ...baseMessageData_MessageReferenceData,
        };
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = String(object.messageId);
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.messageId !== undefined && (obj.messageId = message.messageId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.guildId !== undefined && (obj.guildId = message.guildId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageData_MessageReferenceData,
        };
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = object.messageId;
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        return message;
    },
};
messageTypeRegistry.set(MessageData_MessageReferenceData.$type, MessageData_MessageReferenceData);
const baseMessageData_MessageActivityData = {
    $type: "pylon.discord.v1.model.MessageData.MessageActivityData",
    type: 0,
    partyId: "",
};
export const MessageData_MessageActivityData = {
    $type: "pylon.discord.v1.model.MessageData.MessageActivityData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).uint32(message.type);
        }
        if (message.partyId !== "") {
            writer.uint32(18).string(message.partyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageData_MessageActivityData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.uint32();
                    break;
                case 2:
                    message.partyId = reader.string();
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
            ...baseMessageData_MessageActivityData,
        };
        if (object.type !== undefined && object.type !== null) {
            message.type = Number(object.type);
        }
        if (object.partyId !== undefined && object.partyId !== null) {
            message.partyId = String(object.partyId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.partyId !== undefined && (obj.partyId = message.partyId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageData_MessageActivityData,
        };
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        if (object.partyId !== undefined && object.partyId !== null) {
            message.partyId = object.partyId;
        }
        return message;
    },
};
messageTypeRegistry.set(MessageData_MessageActivityData.$type, MessageData_MessageActivityData);
const baseMessageData_MessageMentionChannelData = {
    $type: "pylon.discord.v1.model.MessageData.MessageMentionChannelData",
    id: "0",
    guildId: "0",
    type: 0,
    name: "",
};
export const MessageData_MessageMentionChannelData = {
    $type: "pylon.discord.v1.model.MessageData.MessageMentionChannelData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "0") {
            writer.uint32(9).fixed64(message.id);
        }
        if (message.guildId !== "0") {
            writer.uint32(17).fixed64(message.guildId);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageData_MessageMentionChannelData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.fixed64());
                    break;
                case 2:
                    message.guildId = longToString(reader.fixed64());
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.name = reader.string();
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
            ...baseMessageData_MessageMentionChannelData,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = channelData_ChannelTypeFromJSON(object.type);
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.guildId !== undefined && (obj.guildId = message.guildId);
        message.type !== undefined &&
            (obj.type = channelData_ChannelTypeToJSON(message.type));
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageData_MessageMentionChannelData,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        return message;
    },
};
messageTypeRegistry.set(MessageData_MessageMentionChannelData.$type, MessageData_MessageMentionChannelData);
const baseMessageData_MessageEmbedData = {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData",
    title: "",
    type: 0,
    description: "",
    url: "",
    color: 0,
};
export const MessageData_MessageEmbedData = {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.url !== "") {
            writer.uint32(34).string(message.url);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        if (message.color !== 0) {
            writer.uint32(48).uint32(message.color);
        }
        if (message.footer !== undefined) {
            MessageData_MessageEmbedData_MessageEmbedFooterData.encode(message.footer, writer.uint32(58).fork()).ldelim();
        }
        if (message.image !== undefined) {
            MessageData_MessageEmbedData_MessageEmbedImageData.encode(message.image, writer.uint32(66).fork()).ldelim();
        }
        if (message.thumbnail !== undefined) {
            MessageData_MessageEmbedData_MessageEmbedThumbnailData.encode(message.thumbnail, writer.uint32(74).fork()).ldelim();
        }
        if (message.video !== undefined) {
            MessageData_MessageEmbedData_MessageEmbedVideoData.encode(message.video, writer.uint32(82).fork()).ldelim();
        }
        if (message.provider !== undefined) {
            MessageData_MessageEmbedData_MessageEmbedProviderData.encode(message.provider, writer.uint32(90).fork()).ldelim();
        }
        if (message.author !== undefined) {
            MessageData_MessageEmbedData_MessageEmbedAuthorData.encode(message.author, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.fields) {
            MessageData_MessageEmbedData_MessageEmbedFieldData.encode(v, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageData_MessageEmbedData,
        };
        message.fields = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.url = reader.string();
                    break;
                case 5:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.color = reader.uint32();
                    break;
                case 7:
                    message.footer = MessageData_MessageEmbedData_MessageEmbedFooterData.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.image = MessageData_MessageEmbedData_MessageEmbedImageData.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.thumbnail = MessageData_MessageEmbedData_MessageEmbedThumbnailData.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.video = MessageData_MessageEmbedData_MessageEmbedVideoData.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.provider = MessageData_MessageEmbedData_MessageEmbedProviderData.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.author = MessageData_MessageEmbedData_MessageEmbedAuthorData.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.fields.push(MessageData_MessageEmbedData_MessageEmbedFieldData.decode(reader, reader.uint32()));
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
            ...baseMessageData_MessageEmbedData,
        };
        message.fields = [];
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = messageData_MessageEmbedData_MessageEmbedTypeFromJSON(object.type);
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromJsonTimestamp(object.timestamp);
        }
        if (object.color !== undefined && object.color !== null) {
            message.color = Number(object.color);
        }
        if (object.footer !== undefined && object.footer !== null) {
            message.footer = MessageData_MessageEmbedData_MessageEmbedFooterData.fromJSON(object.footer);
        }
        if (object.image !== undefined && object.image !== null) {
            message.image = MessageData_MessageEmbedData_MessageEmbedImageData.fromJSON(object.image);
        }
        if (object.thumbnail !== undefined && object.thumbnail !== null) {
            message.thumbnail = MessageData_MessageEmbedData_MessageEmbedThumbnailData.fromJSON(object.thumbnail);
        }
        if (object.video !== undefined && object.video !== null) {
            message.video = MessageData_MessageEmbedData_MessageEmbedVideoData.fromJSON(object.video);
        }
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = MessageData_MessageEmbedData_MessageEmbedProviderData.fromJSON(object.provider);
        }
        if (object.author !== undefined && object.author !== null) {
            message.author = MessageData_MessageEmbedData_MessageEmbedAuthorData.fromJSON(object.author);
        }
        if (object.fields !== undefined && object.fields !== null) {
            for (const e of object.fields) {
                message.fields.push(MessageData_MessageEmbedData_MessageEmbedFieldData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.type !== undefined &&
            (obj.type = messageData_MessageEmbedData_MessageEmbedTypeToJSON(message.type));
        message.description !== undefined &&
            (obj.description = message.description);
        message.url !== undefined && (obj.url = message.url);
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        message.color !== undefined && (obj.color = message.color);
        message.footer !== undefined &&
            (obj.footer = message.footer
                ? MessageData_MessageEmbedData_MessageEmbedFooterData.toJSON(message.footer)
                : undefined);
        message.image !== undefined &&
            (obj.image = message.image
                ? MessageData_MessageEmbedData_MessageEmbedImageData.toJSON(message.image)
                : undefined);
        message.thumbnail !== undefined &&
            (obj.thumbnail = message.thumbnail
                ? MessageData_MessageEmbedData_MessageEmbedThumbnailData.toJSON(message.thumbnail)
                : undefined);
        message.video !== undefined &&
            (obj.video = message.video
                ? MessageData_MessageEmbedData_MessageEmbedVideoData.toJSON(message.video)
                : undefined);
        message.provider !== undefined &&
            (obj.provider = message.provider
                ? MessageData_MessageEmbedData_MessageEmbedProviderData.toJSON(message.provider)
                : undefined);
        message.author !== undefined &&
            (obj.author = message.author
                ? MessageData_MessageEmbedData_MessageEmbedAuthorData.toJSON(message.author)
                : undefined);
        if (message.fields) {
            obj.fields = message.fields.map((e) => e
                ? MessageData_MessageEmbedData_MessageEmbedFieldData.toJSON(e)
                : undefined);
        }
        else {
            obj.fields = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageData_MessageEmbedData,
        };
        message.fields = [];
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        if (object.color !== undefined && object.color !== null) {
            message.color = object.color;
        }
        if (object.footer !== undefined && object.footer !== null) {
            message.footer = MessageData_MessageEmbedData_MessageEmbedFooterData.fromPartial(object.footer);
        }
        if (object.image !== undefined && object.image !== null) {
            message.image = MessageData_MessageEmbedData_MessageEmbedImageData.fromPartial(object.image);
        }
        if (object.thumbnail !== undefined && object.thumbnail !== null) {
            message.thumbnail = MessageData_MessageEmbedData_MessageEmbedThumbnailData.fromPartial(object.thumbnail);
        }
        if (object.video !== undefined && object.video !== null) {
            message.video = MessageData_MessageEmbedData_MessageEmbedVideoData.fromPartial(object.video);
        }
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = MessageData_MessageEmbedData_MessageEmbedProviderData.fromPartial(object.provider);
        }
        if (object.author !== undefined && object.author !== null) {
            message.author = MessageData_MessageEmbedData_MessageEmbedAuthorData.fromPartial(object.author);
        }
        if (object.fields !== undefined && object.fields !== null) {
            for (const e of object.fields) {
                message.fields.push(MessageData_MessageEmbedData_MessageEmbedFieldData.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(MessageData_MessageEmbedData.$type, MessageData_MessageEmbedData);
const baseMessageData_MessageEmbedData_MessageEmbedFooterData = {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedFooterData",
    text: "",
    iconUrl: "",
    proxyIconUrl: "",
};
export const MessageData_MessageEmbedData_MessageEmbedFooterData = {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedFooterData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.text !== "") {
            writer.uint32(10).string(message.text);
        }
        if (message.iconUrl !== "") {
            writer.uint32(18).string(message.iconUrl);
        }
        if (message.proxyIconUrl !== "") {
            writer.uint32(26).string(message.proxyIconUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageData_MessageEmbedData_MessageEmbedFooterData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                case 2:
                    message.iconUrl = reader.string();
                    break;
                case 3:
                    message.proxyIconUrl = reader.string();
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
            ...baseMessageData_MessageEmbedData_MessageEmbedFooterData,
        };
        if (object.text !== undefined && object.text !== null) {
            message.text = String(object.text);
        }
        if (object.iconUrl !== undefined && object.iconUrl !== null) {
            message.iconUrl = String(object.iconUrl);
        }
        if (object.proxyIconUrl !== undefined && object.proxyIconUrl !== null) {
            message.proxyIconUrl = String(object.proxyIconUrl);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.text !== undefined && (obj.text = message.text);
        message.iconUrl !== undefined && (obj.iconUrl = message.iconUrl);
        message.proxyIconUrl !== undefined &&
            (obj.proxyIconUrl = message.proxyIconUrl);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageData_MessageEmbedData_MessageEmbedFooterData,
        };
        if (object.text !== undefined && object.text !== null) {
            message.text = object.text;
        }
        if (object.iconUrl !== undefined && object.iconUrl !== null) {
            message.iconUrl = object.iconUrl;
        }
        if (object.proxyIconUrl !== undefined && object.proxyIconUrl !== null) {
            message.proxyIconUrl = object.proxyIconUrl;
        }
        return message;
    },
};
messageTypeRegistry.set(MessageData_MessageEmbedData_MessageEmbedFooterData.$type, MessageData_MessageEmbedData_MessageEmbedFooterData);
const baseMessageData_MessageEmbedData_MessageEmbedImageData = {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedImageData",
    url: "",
    width: 0,
    height: 0,
};
export const MessageData_MessageEmbedData_MessageEmbedImageData = {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedImageData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.url !== "") {
            writer.uint32(10).string(message.url);
        }
        if (message.width !== 0) {
            writer.uint32(16).uint32(message.width);
        }
        if (message.height !== 0) {
            writer.uint32(24).uint32(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageData_MessageEmbedData_MessageEmbedImageData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.width = reader.uint32();
                    break;
                case 3:
                    message.height = reader.uint32();
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
            ...baseMessageData_MessageEmbedData_MessageEmbedImageData,
        };
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        if (object.width !== undefined && object.width !== null) {
            message.width = Number(object.width);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.url !== undefined && (obj.url = message.url);
        message.width !== undefined && (obj.width = message.width);
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageData_MessageEmbedData_MessageEmbedImageData,
        };
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        if (object.width !== undefined && object.width !== null) {
            message.width = object.width;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        return message;
    },
};
messageTypeRegistry.set(MessageData_MessageEmbedData_MessageEmbedImageData.$type, MessageData_MessageEmbedData_MessageEmbedImageData);
const baseMessageData_MessageEmbedData_MessageEmbedThumbnailData = {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedThumbnailData",
    url: "",
    proxyUrl: "",
    width: 0,
    height: 0,
};
export const MessageData_MessageEmbedData_MessageEmbedThumbnailData = {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedThumbnailData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.url !== "") {
            writer.uint32(10).string(message.url);
        }
        if (message.proxyUrl !== "") {
            writer.uint32(18).string(message.proxyUrl);
        }
        if (message.width !== 0) {
            writer.uint32(24).uint32(message.width);
        }
        if (message.height !== 0) {
            writer.uint32(32).uint32(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageData_MessageEmbedData_MessageEmbedThumbnailData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.proxyUrl = reader.string();
                    break;
                case 3:
                    message.width = reader.uint32();
                    break;
                case 4:
                    message.height = reader.uint32();
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
            ...baseMessageData_MessageEmbedData_MessageEmbedThumbnailData,
        };
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        if (object.proxyUrl !== undefined && object.proxyUrl !== null) {
            message.proxyUrl = String(object.proxyUrl);
        }
        if (object.width !== undefined && object.width !== null) {
            message.width = Number(object.width);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.url !== undefined && (obj.url = message.url);
        message.proxyUrl !== undefined && (obj.proxyUrl = message.proxyUrl);
        message.width !== undefined && (obj.width = message.width);
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageData_MessageEmbedData_MessageEmbedThumbnailData,
        };
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        if (object.proxyUrl !== undefined && object.proxyUrl !== null) {
            message.proxyUrl = object.proxyUrl;
        }
        if (object.width !== undefined && object.width !== null) {
            message.width = object.width;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        return message;
    },
};
messageTypeRegistry.set(MessageData_MessageEmbedData_MessageEmbedThumbnailData.$type, MessageData_MessageEmbedData_MessageEmbedThumbnailData);
const baseMessageData_MessageEmbedData_MessageEmbedVideoData = {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedVideoData",
    url: "",
    width: 0,
    height: 0,
};
export const MessageData_MessageEmbedData_MessageEmbedVideoData = {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedVideoData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.url !== "") {
            writer.uint32(10).string(message.url);
        }
        if (message.width !== 0) {
            writer.uint32(16).uint32(message.width);
        }
        if (message.height !== 0) {
            writer.uint32(24).uint32(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageData_MessageEmbedData_MessageEmbedVideoData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.width = reader.uint32();
                    break;
                case 3:
                    message.height = reader.uint32();
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
            ...baseMessageData_MessageEmbedData_MessageEmbedVideoData,
        };
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        if (object.width !== undefined && object.width !== null) {
            message.width = Number(object.width);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.url !== undefined && (obj.url = message.url);
        message.width !== undefined && (obj.width = message.width);
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageData_MessageEmbedData_MessageEmbedVideoData,
        };
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        if (object.width !== undefined && object.width !== null) {
            message.width = object.width;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        return message;
    },
};
messageTypeRegistry.set(MessageData_MessageEmbedData_MessageEmbedVideoData.$type, MessageData_MessageEmbedData_MessageEmbedVideoData);
const baseMessageData_MessageEmbedData_MessageEmbedProviderData = {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedProviderData",
    name: "",
    url: "",
};
export const MessageData_MessageEmbedData_MessageEmbedProviderData = {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedProviderData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageData_MessageEmbedData_MessageEmbedProviderData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
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
            ...baseMessageData_MessageEmbedData_MessageEmbedProviderData,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageData_MessageEmbedData_MessageEmbedProviderData,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        return message;
    },
};
messageTypeRegistry.set(MessageData_MessageEmbedData_MessageEmbedProviderData.$type, MessageData_MessageEmbedData_MessageEmbedProviderData);
const baseMessageData_MessageEmbedData_MessageEmbedAuthorData = {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedAuthorData",
    name: "",
    url: "",
    iconUrl: "",
    proxyIconUrl: "",
};
export const MessageData_MessageEmbedData_MessageEmbedAuthorData = {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedAuthorData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        if (message.iconUrl !== "") {
            writer.uint32(26).string(message.iconUrl);
        }
        if (message.proxyIconUrl !== "") {
            writer.uint32(34).string(message.proxyIconUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageData_MessageEmbedData_MessageEmbedAuthorData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.iconUrl = reader.string();
                    break;
                case 4:
                    message.proxyIconUrl = reader.string();
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
            ...baseMessageData_MessageEmbedData_MessageEmbedAuthorData,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        if (object.iconUrl !== undefined && object.iconUrl !== null) {
            message.iconUrl = String(object.iconUrl);
        }
        if (object.proxyIconUrl !== undefined && object.proxyIconUrl !== null) {
            message.proxyIconUrl = String(object.proxyIconUrl);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.url !== undefined && (obj.url = message.url);
        message.iconUrl !== undefined && (obj.iconUrl = message.iconUrl);
        message.proxyIconUrl !== undefined &&
            (obj.proxyIconUrl = message.proxyIconUrl);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageData_MessageEmbedData_MessageEmbedAuthorData,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        if (object.iconUrl !== undefined && object.iconUrl !== null) {
            message.iconUrl = object.iconUrl;
        }
        if (object.proxyIconUrl !== undefined && object.proxyIconUrl !== null) {
            message.proxyIconUrl = object.proxyIconUrl;
        }
        return message;
    },
};
messageTypeRegistry.set(MessageData_MessageEmbedData_MessageEmbedAuthorData.$type, MessageData_MessageEmbedData_MessageEmbedAuthorData);
const baseMessageData_MessageEmbedData_MessageEmbedFieldData = {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedFieldData",
    name: "",
    value: "",
    inline: false,
};
export const MessageData_MessageEmbedData_MessageEmbedFieldData = {
    $type: "pylon.discord.v1.model.MessageData.MessageEmbedData.MessageEmbedFieldData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        if (message.inline === true) {
            writer.uint32(24).bool(message.inline);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageData_MessageEmbedData_MessageEmbedFieldData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                case 3:
                    message.inline = reader.bool();
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
            ...baseMessageData_MessageEmbedData_MessageEmbedFieldData,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        if (object.inline !== undefined && object.inline !== null) {
            message.inline = Boolean(object.inline);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.value !== undefined && (obj.value = message.value);
        message.inline !== undefined && (obj.inline = message.inline);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageData_MessageEmbedData_MessageEmbedFieldData,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        if (object.inline !== undefined && object.inline !== null) {
            message.inline = object.inline;
        }
        return message;
    },
};
messageTypeRegistry.set(MessageData_MessageEmbedData_MessageEmbedFieldData.$type, MessageData_MessageEmbedData_MessageEmbedFieldData);
const basePresenceData = {
    $type: "pylon.discord.v1.model.PresenceData",
    guildId: "0",
    status: 0,
};
export const PresenceData = {
    $type: "pylon.discord.v1.model.PresenceData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.guildId !== "0") {
            writer.uint32(9).fixed64(message.guildId);
        }
        if (message.maybePartialUser?.$case === "user") {
            UserData.encode(message.maybePartialUser.user, writer.uint32(18).fork()).ldelim();
        }
        if (message.maybePartialUser?.$case === "userId") {
            writer.uint32(25).fixed64(message.maybePartialUser.userId);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.clientStatus !== undefined) {
            PresenceData_PresenceClientStatusData.encode(message.clientStatus, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.activities) {
            PresenceData_PresenceActivityData.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePresenceData };
        message.activities = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.guildId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.maybePartialUser = {
                        $case: "user",
                        user: UserData.decode(reader, reader.uint32()),
                    };
                    break;
                case 3:
                    message.maybePartialUser = {
                        $case: "userId",
                        userId: longToString(reader.fixed64()),
                    };
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.clientStatus = PresenceData_PresenceClientStatusData.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.activities.push(PresenceData_PresenceActivityData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePresenceData };
        message.activities = [];
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        if (object.user !== undefined && object.user !== null) {
            message.maybePartialUser = {
                $case: "user",
                user: UserData.fromJSON(object.user),
            };
        }
        if (object.userId !== undefined && object.userId !== null) {
            message.maybePartialUser = {
                $case: "userId",
                userId: String(object.userId),
            };
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = presenceData_OnlineStatusFromJSON(object.status);
        }
        if (object.clientStatus !== undefined && object.clientStatus !== null) {
            message.clientStatus = PresenceData_PresenceClientStatusData.fromJSON(object.clientStatus);
        }
        if (object.activities !== undefined && object.activities !== null) {
            for (const e of object.activities) {
                message.activities.push(PresenceData_PresenceActivityData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.guildId !== undefined && (obj.guildId = message.guildId);
        message.maybePartialUser?.$case === "user" &&
            (obj.user = message.maybePartialUser?.user
                ? UserData.toJSON(message.maybePartialUser?.user)
                : undefined);
        message.maybePartialUser?.$case === "userId" &&
            (obj.userId = message.maybePartialUser?.userId);
        message.status !== undefined &&
            (obj.status = presenceData_OnlineStatusToJSON(message.status));
        message.clientStatus !== undefined &&
            (obj.clientStatus = message.clientStatus
                ? PresenceData_PresenceClientStatusData.toJSON(message.clientStatus)
                : undefined);
        if (message.activities) {
            obj.activities = message.activities.map((e) => e ? PresenceData_PresenceActivityData.toJSON(e) : undefined);
        }
        else {
            obj.activities = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePresenceData };
        message.activities = [];
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        if (object.maybePartialUser?.$case === "user" &&
            object.maybePartialUser?.user !== undefined &&
            object.maybePartialUser?.user !== null) {
            message.maybePartialUser = {
                $case: "user",
                user: UserData.fromPartial(object.maybePartialUser.user),
            };
        }
        if (object.maybePartialUser?.$case === "userId" &&
            object.maybePartialUser?.userId !== undefined &&
            object.maybePartialUser?.userId !== null) {
            message.maybePartialUser = {
                $case: "userId",
                userId: object.maybePartialUser.userId,
            };
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        if (object.clientStatus !== undefined && object.clientStatus !== null) {
            message.clientStatus = PresenceData_PresenceClientStatusData.fromPartial(object.clientStatus);
        }
        if (object.activities !== undefined && object.activities !== null) {
            for (const e of object.activities) {
                message.activities.push(PresenceData_PresenceActivityData.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(PresenceData.$type, PresenceData);
const basePresenceData_PresenceClientStatusData = {
    $type: "pylon.discord.v1.model.PresenceData.PresenceClientStatusData",
    desktop: "",
    mobile: "",
    web: "",
};
export const PresenceData_PresenceClientStatusData = {
    $type: "pylon.discord.v1.model.PresenceData.PresenceClientStatusData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.desktop !== "") {
            writer.uint32(10).string(message.desktop);
        }
        if (message.mobile !== "") {
            writer.uint32(18).string(message.mobile);
        }
        if (message.web !== "") {
            writer.uint32(26).string(message.web);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePresenceData_PresenceClientStatusData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.desktop = reader.string();
                    break;
                case 2:
                    message.mobile = reader.string();
                    break;
                case 3:
                    message.web = reader.string();
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
            ...basePresenceData_PresenceClientStatusData,
        };
        if (object.desktop !== undefined && object.desktop !== null) {
            message.desktop = String(object.desktop);
        }
        if (object.mobile !== undefined && object.mobile !== null) {
            message.mobile = String(object.mobile);
        }
        if (object.web !== undefined && object.web !== null) {
            message.web = String(object.web);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.desktop !== undefined && (obj.desktop = message.desktop);
        message.mobile !== undefined && (obj.mobile = message.mobile);
        message.web !== undefined && (obj.web = message.web);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...basePresenceData_PresenceClientStatusData,
        };
        if (object.desktop !== undefined && object.desktop !== null) {
            message.desktop = object.desktop;
        }
        if (object.mobile !== undefined && object.mobile !== null) {
            message.mobile = object.mobile;
        }
        if (object.web !== undefined && object.web !== null) {
            message.web = object.web;
        }
        return message;
    },
};
messageTypeRegistry.set(PresenceData_PresenceClientStatusData.$type, PresenceData_PresenceClientStatusData);
const basePresenceData_PresenceActivityData = {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData",
    name: "",
    type: 0,
    url: "",
    applicationId: "0",
    details: "",
    state: "",
    instance: false,
    flags: 0,
};
export const PresenceData_PresenceActivityData = {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        if (message.url !== "") {
            writer.uint32(26).string(message.url);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.timestamps !== undefined) {
            PresenceData_PresenceActivityData_PresenceActivityTimestampsData.encode(message.timestamps, writer.uint32(42).fork()).ldelim();
        }
        if (message.applicationId !== "0") {
            writer.uint32(49).fixed64(message.applicationId);
        }
        if (message.details !== "") {
            writer.uint32(58).string(message.details);
        }
        if (message.state !== "") {
            writer.uint32(66).string(message.state);
        }
        if (message.emoji !== undefined) {
            PresenceData_PresenceActivityData_PresenceActivityEmojiData.encode(message.emoji, writer.uint32(74).fork()).ldelim();
        }
        if (message.party !== undefined) {
            PresenceData_PresenceActivityData_PresenceActivityPartyData.encode(message.party, writer.uint32(82).fork()).ldelim();
        }
        if (message.assets !== undefined) {
            PresenceData_PresenceActivityData_PresenceActivityAssetsData.encode(message.assets, writer.uint32(90).fork()).ldelim();
        }
        if (message.secrets !== undefined) {
            PresenceData_PresenceActivityData_PresenceActivitySecretsData.encode(message.secrets, writer.uint32(98).fork()).ldelim();
        }
        if (message.instance === true) {
            writer.uint32(104).bool(message.instance);
        }
        if (message.flags !== 0) {
            writer.uint32(112).uint32(message.flags);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePresenceData_PresenceActivityData,
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
                case 3:
                    message.url = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.timestamps = PresenceData_PresenceActivityData_PresenceActivityTimestampsData.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.applicationId = longToString(reader.fixed64());
                    break;
                case 7:
                    message.details = reader.string();
                    break;
                case 8:
                    message.state = reader.string();
                    break;
                case 9:
                    message.emoji = PresenceData_PresenceActivityData_PresenceActivityEmojiData.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.party = PresenceData_PresenceActivityData_PresenceActivityPartyData.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.assets = PresenceData_PresenceActivityData_PresenceActivityAssetsData.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.secrets = PresenceData_PresenceActivityData_PresenceActivitySecretsData.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.instance = reader.bool();
                    break;
                case 14:
                    message.flags = reader.uint32();
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
            ...basePresenceData_PresenceActivityData,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = presenceData_PresenceActivityData_ActivityTypeFromJSON(object.type);
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        if (object.timestamps !== undefined && object.timestamps !== null) {
            message.timestamps = PresenceData_PresenceActivityData_PresenceActivityTimestampsData.fromJSON(object.timestamps);
        }
        if (object.applicationId !== undefined && object.applicationId !== null) {
            message.applicationId = String(object.applicationId);
        }
        if (object.details !== undefined && object.details !== null) {
            message.details = String(object.details);
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = String(object.state);
        }
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = PresenceData_PresenceActivityData_PresenceActivityEmojiData.fromJSON(object.emoji);
        }
        if (object.party !== undefined && object.party !== null) {
            message.party = PresenceData_PresenceActivityData_PresenceActivityPartyData.fromJSON(object.party);
        }
        if (object.assets !== undefined && object.assets !== null) {
            message.assets = PresenceData_PresenceActivityData_PresenceActivityAssetsData.fromJSON(object.assets);
        }
        if (object.secrets !== undefined && object.secrets !== null) {
            message.secrets = PresenceData_PresenceActivityData_PresenceActivitySecretsData.fromJSON(object.secrets);
        }
        if (object.instance !== undefined && object.instance !== null) {
            message.instance = Boolean(object.instance);
        }
        if (object.flags !== undefined && object.flags !== null) {
            message.flags = Number(object.flags);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.type !== undefined &&
            (obj.type = presenceData_PresenceActivityData_ActivityTypeToJSON(message.type));
        message.url !== undefined && (obj.url = message.url);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.timestamps !== undefined &&
            (obj.timestamps = message.timestamps
                ? PresenceData_PresenceActivityData_PresenceActivityTimestampsData.toJSON(message.timestamps)
                : undefined);
        message.applicationId !== undefined &&
            (obj.applicationId = message.applicationId);
        message.details !== undefined && (obj.details = message.details);
        message.state !== undefined && (obj.state = message.state);
        message.emoji !== undefined &&
            (obj.emoji = message.emoji
                ? PresenceData_PresenceActivityData_PresenceActivityEmojiData.toJSON(message.emoji)
                : undefined);
        message.party !== undefined &&
            (obj.party = message.party
                ? PresenceData_PresenceActivityData_PresenceActivityPartyData.toJSON(message.party)
                : undefined);
        message.assets !== undefined &&
            (obj.assets = message.assets
                ? PresenceData_PresenceActivityData_PresenceActivityAssetsData.toJSON(message.assets)
                : undefined);
        message.secrets !== undefined &&
            (obj.secrets = message.secrets
                ? PresenceData_PresenceActivityData_PresenceActivitySecretsData.toJSON(message.secrets)
                : undefined);
        message.instance !== undefined && (obj.instance = message.instance);
        message.flags !== undefined && (obj.flags = message.flags);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...basePresenceData_PresenceActivityData,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        if (object.timestamps !== undefined && object.timestamps !== null) {
            message.timestamps = PresenceData_PresenceActivityData_PresenceActivityTimestampsData.fromPartial(object.timestamps);
        }
        if (object.applicationId !== undefined && object.applicationId !== null) {
            message.applicationId = object.applicationId;
        }
        if (object.details !== undefined && object.details !== null) {
            message.details = object.details;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = PresenceData_PresenceActivityData_PresenceActivityEmojiData.fromPartial(object.emoji);
        }
        if (object.party !== undefined && object.party !== null) {
            message.party = PresenceData_PresenceActivityData_PresenceActivityPartyData.fromPartial(object.party);
        }
        if (object.assets !== undefined && object.assets !== null) {
            message.assets = PresenceData_PresenceActivityData_PresenceActivityAssetsData.fromPartial(object.assets);
        }
        if (object.secrets !== undefined && object.secrets !== null) {
            message.secrets = PresenceData_PresenceActivityData_PresenceActivitySecretsData.fromPartial(object.secrets);
        }
        if (object.instance !== undefined && object.instance !== null) {
            message.instance = object.instance;
        }
        if (object.flags !== undefined && object.flags !== null) {
            message.flags = object.flags;
        }
        return message;
    },
};
messageTypeRegistry.set(PresenceData_PresenceActivityData.$type, PresenceData_PresenceActivityData);
const basePresenceData_PresenceActivityData_PresenceActivityTimestampsData = {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData.PresenceActivityTimestampsData",
    start: "0",
    end: "0",
};
export const PresenceData_PresenceActivityData_PresenceActivityTimestampsData = {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData.PresenceActivityTimestampsData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.start !== "0") {
            writer.uint32(8).uint64(message.start);
        }
        if (message.end !== "0") {
            writer.uint32(16).uint64(message.end);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePresenceData_PresenceActivityData_PresenceActivityTimestampsData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start = longToString(reader.uint64());
                    break;
                case 2:
                    message.end = longToString(reader.uint64());
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
            ...basePresenceData_PresenceActivityData_PresenceActivityTimestampsData,
        };
        if (object.start !== undefined && object.start !== null) {
            message.start = String(object.start);
        }
        if (object.end !== undefined && object.end !== null) {
            message.end = String(object.end);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.start !== undefined && (obj.start = message.start);
        message.end !== undefined && (obj.end = message.end);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...basePresenceData_PresenceActivityData_PresenceActivityTimestampsData,
        };
        if (object.start !== undefined && object.start !== null) {
            message.start = object.start;
        }
        if (object.end !== undefined && object.end !== null) {
            message.end = object.end;
        }
        return message;
    },
};
messageTypeRegistry.set(PresenceData_PresenceActivityData_PresenceActivityTimestampsData.$type, PresenceData_PresenceActivityData_PresenceActivityTimestampsData);
const basePresenceData_PresenceActivityData_PresenceActivityEmojiData = {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData.PresenceActivityEmojiData",
    name: "",
    id: "0",
    animated: false,
};
export const PresenceData_PresenceActivityData_PresenceActivityEmojiData = {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData.PresenceActivityEmojiData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.id !== "0") {
            writer.uint32(17).fixed64(message.id);
        }
        if (message.animated === true) {
            writer.uint32(24).bool(message.animated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePresenceData_PresenceActivityData_PresenceActivityEmojiData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.id = longToString(reader.fixed64());
                    break;
                case 3:
                    message.animated = reader.bool();
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
            ...basePresenceData_PresenceActivityData_PresenceActivityEmojiData,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        if (object.animated !== undefined && object.animated !== null) {
            message.animated = Boolean(object.animated);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.id !== undefined && (obj.id = message.id);
        message.animated !== undefined && (obj.animated = message.animated);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...basePresenceData_PresenceActivityData_PresenceActivityEmojiData,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.animated !== undefined && object.animated !== null) {
            message.animated = object.animated;
        }
        return message;
    },
};
messageTypeRegistry.set(PresenceData_PresenceActivityData_PresenceActivityEmojiData.$type, PresenceData_PresenceActivityData_PresenceActivityEmojiData);
const basePresenceData_PresenceActivityData_PresenceActivityPartyData = {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData.PresenceActivityPartyData",
    id: "",
    currentSize: "0",
    maxSize: "0",
};
export const PresenceData_PresenceActivityData_PresenceActivityPartyData = {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData.PresenceActivityPartyData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.currentSize !== "0") {
            writer.uint32(16).uint64(message.currentSize);
        }
        if (message.maxSize !== "0") {
            writer.uint32(24).uint64(message.maxSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePresenceData_PresenceActivityData_PresenceActivityPartyData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.currentSize = longToString(reader.uint64());
                    break;
                case 3:
                    message.maxSize = longToString(reader.uint64());
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
            ...basePresenceData_PresenceActivityData_PresenceActivityPartyData,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        if (object.currentSize !== undefined && object.currentSize !== null) {
            message.currentSize = String(object.currentSize);
        }
        if (object.maxSize !== undefined && object.maxSize !== null) {
            message.maxSize = String(object.maxSize);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.currentSize !== undefined &&
            (obj.currentSize = message.currentSize);
        message.maxSize !== undefined && (obj.maxSize = message.maxSize);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...basePresenceData_PresenceActivityData_PresenceActivityPartyData,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.currentSize !== undefined && object.currentSize !== null) {
            message.currentSize = object.currentSize;
        }
        if (object.maxSize !== undefined && object.maxSize !== null) {
            message.maxSize = object.maxSize;
        }
        return message;
    },
};
messageTypeRegistry.set(PresenceData_PresenceActivityData_PresenceActivityPartyData.$type, PresenceData_PresenceActivityData_PresenceActivityPartyData);
const basePresenceData_PresenceActivityData_PresenceActivityAssetsData = {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData.PresenceActivityAssetsData",
    largeImage: "",
    largeText: "",
    smallImage: "",
    smallText: "",
};
export const PresenceData_PresenceActivityData_PresenceActivityAssetsData = {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData.PresenceActivityAssetsData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.largeImage !== "") {
            writer.uint32(10).string(message.largeImage);
        }
        if (message.largeText !== "") {
            writer.uint32(18).string(message.largeText);
        }
        if (message.smallImage !== "") {
            writer.uint32(26).string(message.smallImage);
        }
        if (message.smallText !== "") {
            writer.uint32(34).string(message.smallText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePresenceData_PresenceActivityData_PresenceActivityAssetsData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.largeImage = reader.string();
                    break;
                case 2:
                    message.largeText = reader.string();
                    break;
                case 3:
                    message.smallImage = reader.string();
                    break;
                case 4:
                    message.smallText = reader.string();
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
            ...basePresenceData_PresenceActivityData_PresenceActivityAssetsData,
        };
        if (object.largeImage !== undefined && object.largeImage !== null) {
            message.largeImage = String(object.largeImage);
        }
        if (object.largeText !== undefined && object.largeText !== null) {
            message.largeText = String(object.largeText);
        }
        if (object.smallImage !== undefined && object.smallImage !== null) {
            message.smallImage = String(object.smallImage);
        }
        if (object.smallText !== undefined && object.smallText !== null) {
            message.smallText = String(object.smallText);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.largeImage !== undefined && (obj.largeImage = message.largeImage);
        message.largeText !== undefined && (obj.largeText = message.largeText);
        message.smallImage !== undefined && (obj.smallImage = message.smallImage);
        message.smallText !== undefined && (obj.smallText = message.smallText);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...basePresenceData_PresenceActivityData_PresenceActivityAssetsData,
        };
        if (object.largeImage !== undefined && object.largeImage !== null) {
            message.largeImage = object.largeImage;
        }
        if (object.largeText !== undefined && object.largeText !== null) {
            message.largeText = object.largeText;
        }
        if (object.smallImage !== undefined && object.smallImage !== null) {
            message.smallImage = object.smallImage;
        }
        if (object.smallText !== undefined && object.smallText !== null) {
            message.smallText = object.smallText;
        }
        return message;
    },
};
messageTypeRegistry.set(PresenceData_PresenceActivityData_PresenceActivityAssetsData.$type, PresenceData_PresenceActivityData_PresenceActivityAssetsData);
const basePresenceData_PresenceActivityData_PresenceActivitySecretsData = {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData.PresenceActivitySecretsData",
    join: "",
    spectate: "",
    match: "",
};
export const PresenceData_PresenceActivityData_PresenceActivitySecretsData = {
    $type: "pylon.discord.v1.model.PresenceData.PresenceActivityData.PresenceActivitySecretsData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.join !== "") {
            writer.uint32(10).string(message.join);
        }
        if (message.spectate !== "") {
            writer.uint32(18).string(message.spectate);
        }
        if (message.match !== "") {
            writer.uint32(26).string(message.match);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePresenceData_PresenceActivityData_PresenceActivitySecretsData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.join = reader.string();
                    break;
                case 2:
                    message.spectate = reader.string();
                    break;
                case 3:
                    message.match = reader.string();
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
            ...basePresenceData_PresenceActivityData_PresenceActivitySecretsData,
        };
        if (object.join !== undefined && object.join !== null) {
            message.join = String(object.join);
        }
        if (object.spectate !== undefined && object.spectate !== null) {
            message.spectate = String(object.spectate);
        }
        if (object.match !== undefined && object.match !== null) {
            message.match = String(object.match);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.join !== undefined && (obj.join = message.join);
        message.spectate !== undefined && (obj.spectate = message.spectate);
        message.match !== undefined && (obj.match = message.match);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...basePresenceData_PresenceActivityData_PresenceActivitySecretsData,
        };
        if (object.join !== undefined && object.join !== null) {
            message.join = object.join;
        }
        if (object.spectate !== undefined && object.spectate !== null) {
            message.spectate = object.spectate;
        }
        if (object.match !== undefined && object.match !== null) {
            message.match = object.match;
        }
        return message;
    },
};
messageTypeRegistry.set(PresenceData_PresenceActivityData_PresenceActivitySecretsData.$type, PresenceData_PresenceActivityData_PresenceActivitySecretsData);
const baseWebhookData = {
    $type: "pylon.discord.v1.model.WebhookData",
    id: "0",
    channelId: "0",
    guildId: "0",
    type: 0,
    name: "",
    avatar: "",
    token: "",
};
export const WebhookData = {
    $type: "pylon.discord.v1.model.WebhookData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "0") {
            writer.uint32(9).fixed64(message.id);
        }
        if (message.channelId !== "0") {
            writer.uint32(17).fixed64(message.channelId);
        }
        if (message.guildId !== "0") {
            writer.uint32(25).fixed64(message.guildId);
        }
        if (message.type !== 0) {
            writer.uint32(32).int32(message.type);
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        if (message.avatar !== "") {
            writer.uint32(50).string(message.avatar);
        }
        if (message.token !== "") {
            writer.uint32(58).string(message.token);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWebhookData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.fixed64());
                    break;
                case 2:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 3:
                    message.guildId = longToString(reader.fixed64());
                    break;
                case 4:
                    message.type = reader.int32();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.avatar = reader.string();
                    break;
                case 7:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseWebhookData };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = webhookData_WebhookTypeFromJSON(object.type);
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        if (object.avatar !== undefined && object.avatar !== null) {
            message.avatar = String(object.avatar);
        }
        if (object.token !== undefined && object.token !== null) {
            message.token = String(object.token);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.guildId !== undefined && (obj.guildId = message.guildId);
        message.type !== undefined &&
            (obj.type = webhookData_WebhookTypeToJSON(message.type));
        message.name !== undefined && (obj.name = message.name);
        message.avatar !== undefined && (obj.avatar = message.avatar);
        message.token !== undefined && (obj.token = message.token);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseWebhookData };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.avatar !== undefined && object.avatar !== null) {
            message.avatar = object.avatar;
        }
        if (object.token !== undefined && object.token !== null) {
            message.token = object.token;
        }
        return message;
    },
};
messageTypeRegistry.set(WebhookData.$type, WebhookData);
const baseInviteData = {
    $type: "pylon.discord.v1.model.InviteData",
    code: "",
    targetUserType: 0,
};
export const InviteData = {
    $type: "pylon.discord.v1.model.InviteData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.guild !== undefined) {
            InviteData_InviteGuildData.encode(message.guild, writer.uint32(18).fork()).ldelim();
        }
        if (message.channel !== undefined) {
            InviteData_InviteChannelData.encode(message.channel, writer.uint32(26).fork()).ldelim();
        }
        if (message.inviter !== undefined) {
            UserData.encode(message.inviter, writer.uint32(34).fork()).ldelim();
        }
        if (message.targetUser !== undefined) {
            UserData.encode(message.targetUser, writer.uint32(42).fork()).ldelim();
        }
        if (message.targetUserType !== 0) {
            writer.uint32(48).int32(message.targetUserType);
        }
        if (message.approximatePresenceCount !== undefined) {
            UInt32Value.encode({
                $type: "google.protobuf.UInt32Value",
                value: message.approximatePresenceCount,
            }, writer.uint32(58).fork()).ldelim();
        }
        if (message.approximateMemberCount !== undefined) {
            UInt32Value.encode({
                $type: "google.protobuf.UInt32Value",
                value: message.approximateMemberCount,
            }, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInviteData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.string();
                    break;
                case 2:
                    message.guild = InviteData_InviteGuildData.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.channel = InviteData_InviteChannelData.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.inviter = UserData.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.targetUser = UserData.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.targetUserType = reader.int32();
                    break;
                case 7:
                    message.approximatePresenceCount = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.approximateMemberCount = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseInviteData };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        if (object.guild !== undefined && object.guild !== null) {
            message.guild = InviteData_InviteGuildData.fromJSON(object.guild);
        }
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = InviteData_InviteChannelData.fromJSON(object.channel);
        }
        if (object.inviter !== undefined && object.inviter !== null) {
            message.inviter = UserData.fromJSON(object.inviter);
        }
        if (object.targetUser !== undefined && object.targetUser !== null) {
            message.targetUser = UserData.fromJSON(object.targetUser);
        }
        if (object.targetUserType !== undefined && object.targetUserType !== null) {
            message.targetUserType = inviteData_InviteTargetUserTypeFromJSON(object.targetUserType);
        }
        if (object.approximatePresenceCount !== undefined &&
            object.approximatePresenceCount !== null) {
            message.approximatePresenceCount = Number(object.approximatePresenceCount);
        }
        if (object.approximateMemberCount !== undefined &&
            object.approximateMemberCount !== null) {
            message.approximateMemberCount = Number(object.approximateMemberCount);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.guild !== undefined &&
            (obj.guild = message.guild
                ? InviteData_InviteGuildData.toJSON(message.guild)
                : undefined);
        message.channel !== undefined &&
            (obj.channel = message.channel
                ? InviteData_InviteChannelData.toJSON(message.channel)
                : undefined);
        message.inviter !== undefined &&
            (obj.inviter = message.inviter
                ? UserData.toJSON(message.inviter)
                : undefined);
        message.targetUser !== undefined &&
            (obj.targetUser = message.targetUser
                ? UserData.toJSON(message.targetUser)
                : undefined);
        message.targetUserType !== undefined &&
            (obj.targetUserType = inviteData_InviteTargetUserTypeToJSON(message.targetUserType));
        message.approximatePresenceCount !== undefined &&
            (obj.approximatePresenceCount = message.approximatePresenceCount);
        message.approximateMemberCount !== undefined &&
            (obj.approximateMemberCount = message.approximateMemberCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseInviteData };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        if (object.guild !== undefined && object.guild !== null) {
            message.guild = InviteData_InviteGuildData.fromPartial(object.guild);
        }
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = InviteData_InviteChannelData.fromPartial(object.channel);
        }
        if (object.inviter !== undefined && object.inviter !== null) {
            message.inviter = UserData.fromPartial(object.inviter);
        }
        if (object.targetUser !== undefined && object.targetUser !== null) {
            message.targetUser = UserData.fromPartial(object.targetUser);
        }
        if (object.targetUserType !== undefined && object.targetUserType !== null) {
            message.targetUserType = object.targetUserType;
        }
        if (object.approximatePresenceCount !== undefined &&
            object.approximatePresenceCount !== null) {
            message.approximatePresenceCount = object.approximatePresenceCount;
        }
        if (object.approximateMemberCount !== undefined &&
            object.approximateMemberCount !== null) {
            message.approximateMemberCount = object.approximateMemberCount;
        }
        return message;
    },
};
messageTypeRegistry.set(InviteData.$type, InviteData);
const baseInviteData_InviteGuildData = {
    $type: "pylon.discord.v1.model.InviteData.InviteGuildData",
    id: "0",
    name: "",
    features: "",
    verificationLevel: 0,
};
export const InviteData_InviteGuildData = {
    $type: "pylon.discord.v1.model.InviteData.InviteGuildData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "0") {
            writer.uint32(9).fixed64(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.splash !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.splash }, writer.uint32(26).fork()).ldelim();
        }
        if (message.banner !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.banner }, writer.uint32(34).fork()).ldelim();
        }
        if (message.description !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.description }, writer.uint32(42).fork()).ldelim();
        }
        if (message.icon !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.icon }, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.features) {
            writer.uint32(58).string(v);
        }
        if (message.verificationLevel !== 0) {
            writer.uint32(64).uint32(message.verificationLevel);
        }
        if (message.vanityUrlCode !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.vanityUrlCode }, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseInviteData_InviteGuildData,
        };
        message.features = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.fixed64());
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.splash = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.banner = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.description = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.icon = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.features.push(reader.string());
                    break;
                case 8:
                    message.verificationLevel = reader.uint32();
                    break;
                case 9:
                    message.vanityUrlCode = StringValue.decode(reader, reader.uint32()).value;
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
            ...baseInviteData_InviteGuildData,
        };
        message.features = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        if (object.splash !== undefined && object.splash !== null) {
            message.splash = String(object.splash);
        }
        if (object.banner !== undefined && object.banner !== null) {
            message.banner = String(object.banner);
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        if (object.icon !== undefined && object.icon !== null) {
            message.icon = String(object.icon);
        }
        if (object.features !== undefined && object.features !== null) {
            for (const e of object.features) {
                message.features.push(String(e));
            }
        }
        if (object.verificationLevel !== undefined &&
            object.verificationLevel !== null) {
            message.verificationLevel = Number(object.verificationLevel);
        }
        if (object.vanityUrlCode !== undefined && object.vanityUrlCode !== null) {
            message.vanityUrlCode = String(object.vanityUrlCode);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.splash !== undefined && (obj.splash = message.splash);
        message.banner !== undefined && (obj.banner = message.banner);
        message.description !== undefined &&
            (obj.description = message.description);
        message.icon !== undefined && (obj.icon = message.icon);
        if (message.features) {
            obj.features = message.features.map((e) => e);
        }
        else {
            obj.features = [];
        }
        message.verificationLevel !== undefined &&
            (obj.verificationLevel = message.verificationLevel);
        message.vanityUrlCode !== undefined &&
            (obj.vanityUrlCode = message.vanityUrlCode);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseInviteData_InviteGuildData,
        };
        message.features = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.splash !== undefined && object.splash !== null) {
            message.splash = object.splash;
        }
        if (object.banner !== undefined && object.banner !== null) {
            message.banner = object.banner;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.icon !== undefined && object.icon !== null) {
            message.icon = object.icon;
        }
        if (object.features !== undefined && object.features !== null) {
            for (const e of object.features) {
                message.features.push(e);
            }
        }
        if (object.verificationLevel !== undefined &&
            object.verificationLevel !== null) {
            message.verificationLevel = object.verificationLevel;
        }
        if (object.vanityUrlCode !== undefined && object.vanityUrlCode !== null) {
            message.vanityUrlCode = object.vanityUrlCode;
        }
        return message;
    },
};
messageTypeRegistry.set(InviteData_InviteGuildData.$type, InviteData_InviteGuildData);
const baseInviteData_InviteChannelData = {
    $type: "pylon.discord.v1.model.InviteData.InviteChannelData",
    id: "0",
    name: "",
    type: 0,
};
export const InviteData_InviteChannelData = {
    $type: "pylon.discord.v1.model.InviteData.InviteChannelData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "0") {
            writer.uint32(9).fixed64(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseInviteData_InviteChannelData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.fixed64());
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
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
            ...baseInviteData_InviteChannelData,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = channelData_ChannelTypeFromJSON(object.type);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.type !== undefined &&
            (obj.type = channelData_ChannelTypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseInviteData_InviteChannelData,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        return message;
    },
};
messageTypeRegistry.set(InviteData_InviteChannelData.$type, InviteData_InviteChannelData);
const baseGuildBanData = {
    $type: "pylon.discord.v1.model.GuildBanData",
    reason: "",
};
export const GuildBanData = {
    $type: "pylon.discord.v1.model.GuildBanData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.reason !== "") {
            writer.uint32(10).string(message.reason);
        }
        if (message.user !== undefined) {
            UserData.encode(message.user, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGuildBanData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reason = reader.string();
                    break;
                case 2:
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
        const message = { ...baseGuildBanData };
        if (object.reason !== undefined && object.reason !== null) {
            message.reason = String(object.reason);
        }
        if (object.user !== undefined && object.user !== null) {
            message.user = UserData.fromJSON(object.user);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.reason !== undefined && (obj.reason = message.reason);
        message.user !== undefined &&
            (obj.user = message.user ? UserData.toJSON(message.user) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGuildBanData };
        if (object.reason !== undefined && object.reason !== null) {
            message.reason = object.reason;
        }
        if (object.user !== undefined && object.user !== null) {
            message.user = UserData.fromPartial(object.user);
        }
        return message;
    },
};
messageTypeRegistry.set(GuildBanData.$type, GuildBanData);
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
