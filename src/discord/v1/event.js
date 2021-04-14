/* eslint-disable */
import { messageTypeRegistry } from "../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { GuildData, PresenceData, MemberData, ChannelData, RoleData, MessageData, SnowflakeValue, SnowflakeListValue, MessageData_MessageAttachmentData, MessageData_MessageEmbedData, MessageData_MessageMentionData, MessageData_MessageReactionData, MessageData_MessageMentionChannelData, MessageData_MessageActivityData, MessageData_MessageApplicationData, MessageData_MessageReferenceData, UserData, MessageData_MessageReactionEmojiData, VoiceStateData, EmojiData, messageData_MessageTypeFromJSON, messageData_MessageTypeToJSON, inviteData_InviteTargetUserTypeFromJSON, inviteData_InviteTargetUserTypeToJSON, } from "../../discord/v1/model";
import { Timestamp } from "../../google/protobuf/timestamp";
import { StringValue, BoolValue, UInt32Value, } from "../../google/protobuf/wrappers";
export const protobufPackage = "pylon.discord.v1.event";
const baseEventEnvelope = {
    $type: "pylon.discord.v1.event.EventEnvelope",
};
export const EventEnvelope = {
    $type: "pylon.discord.v1.event.EventEnvelope",
    encode(message, writer = _m0.Writer.create()) {
        if (message.header !== undefined) {
            EventEnvelope_HeaderData.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.eventData?.$case === "guildCreateEvent") {
            GuildCreateEvent.encode(message.eventData.guildCreateEvent, writer.uint32(18).fork()).ldelim();
        }
        if (message.eventData?.$case === "guildUpdateEvent") {
            GuildUpdateEvent.encode(message.eventData.guildUpdateEvent, writer.uint32(26).fork()).ldelim();
        }
        if (message.eventData?.$case === "guildDeleteEvent") {
            GuildDeleteEvent.encode(message.eventData.guildDeleteEvent, writer.uint32(34).fork()).ldelim();
        }
        if (message.eventData?.$case === "presenceUpdateEvent") {
            PresenceUpdateEvent.encode(message.eventData.presenceUpdateEvent, writer.uint32(42).fork()).ldelim();
        }
        if (message.eventData?.$case === "guildMemberAddEvent") {
            GuildMemberAddEvent.encode(message.eventData.guildMemberAddEvent, writer.uint32(50).fork()).ldelim();
        }
        if (message.eventData?.$case === "guildMemberUpdateEvent") {
            GuildMemberUpdateEvent.encode(message.eventData.guildMemberUpdateEvent, writer.uint32(58).fork()).ldelim();
        }
        if (message.eventData?.$case === "guildMemberRemoveEvent") {
            GuildMemberRemoveEvent.encode(message.eventData.guildMemberRemoveEvent, writer.uint32(66).fork()).ldelim();
        }
        if (message.eventData?.$case === "channelCreateEvent") {
            ChannelCreateEvent.encode(message.eventData.channelCreateEvent, writer.uint32(74).fork()).ldelim();
        }
        if (message.eventData?.$case === "channelUpdateEvent") {
            ChannelUpdateEvent.encode(message.eventData.channelUpdateEvent, writer.uint32(82).fork()).ldelim();
        }
        if (message.eventData?.$case === "channelDeleteEvent") {
            ChannelDeleteEvent.encode(message.eventData.channelDeleteEvent, writer.uint32(90).fork()).ldelim();
        }
        if (message.eventData?.$case === "channelPinsUpdateEvent") {
            ChannelPinsUpdateEvent.encode(message.eventData.channelPinsUpdateEvent, writer.uint32(98).fork()).ldelim();
        }
        if (message.eventData?.$case === "guildRoleCreateEvent") {
            GuildRoleCreateEvent.encode(message.eventData.guildRoleCreateEvent, writer.uint32(106).fork()).ldelim();
        }
        if (message.eventData?.$case === "guildRoleUpdateEvent") {
            GuildRoleUpdateEvent.encode(message.eventData.guildRoleUpdateEvent, writer.uint32(114).fork()).ldelim();
        }
        if (message.eventData?.$case === "guildRoleDeleteEvent") {
            GuildRoleDeleteEvent.encode(message.eventData.guildRoleDeleteEvent, writer.uint32(122).fork()).ldelim();
        }
        if (message.eventData?.$case === "messageCreateEvent") {
            MessageCreateEvent.encode(message.eventData.messageCreateEvent, writer.uint32(130).fork()).ldelim();
        }
        if (message.eventData?.$case === "messageUpdateEvent") {
            MessageUpdateEvent.encode(message.eventData.messageUpdateEvent, writer.uint32(138).fork()).ldelim();
        }
        if (message.eventData?.$case === "messageDeleteEvent") {
            MessageDeleteEvent.encode(message.eventData.messageDeleteEvent, writer.uint32(146).fork()).ldelim();
        }
        if (message.eventData?.$case === "messageDeleteBulkEvent") {
            MessageDeleteBulkEvent.encode(message.eventData.messageDeleteBulkEvent, writer.uint32(154).fork()).ldelim();
        }
        if (message.eventData?.$case === "messageReactionAddEvent") {
            MessageReactionAddEvent.encode(message.eventData.messageReactionAddEvent, writer.uint32(162).fork()).ldelim();
        }
        if (message.eventData?.$case === "messageReactionRemoveEvent") {
            MessageReactionRemoveEvent.encode(message.eventData.messageReactionRemoveEvent, writer.uint32(170).fork()).ldelim();
        }
        if (message.eventData?.$case === "messageReactionRemoveAllEvent") {
            MessageReactionRemoveAllEvent.encode(message.eventData.messageReactionRemoveAllEvent, writer.uint32(178).fork()).ldelim();
        }
        if (message.eventData?.$case === "messageReactionRemoveEmojiEvent") {
            MessageReactionRemoveEmojiEvent.encode(message.eventData.messageReactionRemoveEmojiEvent, writer.uint32(186).fork()).ldelim();
        }
        if (message.eventData?.$case === "typingStartEvent") {
            TypingStartEvent.encode(message.eventData.typingStartEvent, writer.uint32(194).fork()).ldelim();
        }
        if (message.eventData?.$case === "voiceStateUpdateEvent") {
            VoiceStateUpdateEvent.encode(message.eventData.voiceStateUpdateEvent, writer.uint32(202).fork()).ldelim();
        }
        if (message.eventData?.$case === "voiceServerUpdateEvent") {
            VoiceServerUpdateEvent.encode(message.eventData.voiceServerUpdateEvent, writer.uint32(210).fork()).ldelim();
        }
        if (message.eventData?.$case === "inviteCreateEvent") {
            InviteCreateEvent.encode(message.eventData.inviteCreateEvent, writer.uint32(218).fork()).ldelim();
        }
        if (message.eventData?.$case === "inviteDeleteEvent") {
            InviteDeleteEvent.encode(message.eventData.inviteDeleteEvent, writer.uint32(226).fork()).ldelim();
        }
        if (message.eventData?.$case === "guildBanAddEvent") {
            GuildBanAddEvent.encode(message.eventData.guildBanAddEvent, writer.uint32(234).fork()).ldelim();
        }
        if (message.eventData?.$case === "guildBanRemoveEvent") {
            GuildBanRemoveEvent.encode(message.eventData.guildBanRemoveEvent, writer.uint32(242).fork()).ldelim();
        }
        if (message.eventData?.$case === "guildEmojisUpdateEvent") {
            GuildEmojisUpdateEvent.encode(message.eventData.guildEmojisUpdateEvent, writer.uint32(250).fork()).ldelim();
        }
        if (message.eventData?.$case === "guildIntegrationsUpdateEvent") {
            GuildIntegrationsUpdateEvent.encode(message.eventData.guildIntegrationsUpdateEvent, writer.uint32(258).fork()).ldelim();
        }
        if (message.eventData?.$case === "webhooksUpdateEvent") {
            WebhooksUpdateEvent.encode(message.eventData.webhooksUpdateEvent, writer.uint32(266).fork()).ldelim();
        }
        if (message.eventData?.$case === "integrationCreateEvent") {
            IntegrationCreateEvent.encode(message.eventData.integrationCreateEvent, writer.uint32(274).fork()).ldelim();
        }
        if (message.eventData?.$case === "integrationUpdateEvent") {
            IntegrationUpdateEvent.encode(message.eventData.integrationUpdateEvent, writer.uint32(282).fork()).ldelim();
        }
        if (message.eventData?.$case === "integrationDeleteEvent") {
            IntegrationDeleteEvent.encode(message.eventData.integrationDeleteEvent, writer.uint32(290).fork()).ldelim();
        }
        if (message.eventData?.$case === "interactionCreateEvent") {
            InteractionCreateEvent.encode(message.eventData.interactionCreateEvent, writer.uint32(298).fork()).ldelim();
        }
        if (message.eventData?.$case === "readyEvent") {
            ReadyEvent.encode(message.eventData.readyEvent, writer.uint32(306).fork()).ldelim();
        }
        if (message.eventData?.$case === "resumeEvent") {
            ResumeEvent.encode(message.eventData.resumeEvent, writer.uint32(314).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventEnvelope };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = EventEnvelope_HeaderData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.eventData = {
                        $case: "guildCreateEvent",
                        guildCreateEvent: GuildCreateEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 3:
                    message.eventData = {
                        $case: "guildUpdateEvent",
                        guildUpdateEvent: GuildUpdateEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 4:
                    message.eventData = {
                        $case: "guildDeleteEvent",
                        guildDeleteEvent: GuildDeleteEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 5:
                    message.eventData = {
                        $case: "presenceUpdateEvent",
                        presenceUpdateEvent: PresenceUpdateEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 6:
                    message.eventData = {
                        $case: "guildMemberAddEvent",
                        guildMemberAddEvent: GuildMemberAddEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 7:
                    message.eventData = {
                        $case: "guildMemberUpdateEvent",
                        guildMemberUpdateEvent: GuildMemberUpdateEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 8:
                    message.eventData = {
                        $case: "guildMemberRemoveEvent",
                        guildMemberRemoveEvent: GuildMemberRemoveEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 9:
                    message.eventData = {
                        $case: "channelCreateEvent",
                        channelCreateEvent: ChannelCreateEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 10:
                    message.eventData = {
                        $case: "channelUpdateEvent",
                        channelUpdateEvent: ChannelUpdateEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 11:
                    message.eventData = {
                        $case: "channelDeleteEvent",
                        channelDeleteEvent: ChannelDeleteEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 12:
                    message.eventData = {
                        $case: "channelPinsUpdateEvent",
                        channelPinsUpdateEvent: ChannelPinsUpdateEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 13:
                    message.eventData = {
                        $case: "guildRoleCreateEvent",
                        guildRoleCreateEvent: GuildRoleCreateEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 14:
                    message.eventData = {
                        $case: "guildRoleUpdateEvent",
                        guildRoleUpdateEvent: GuildRoleUpdateEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 15:
                    message.eventData = {
                        $case: "guildRoleDeleteEvent",
                        guildRoleDeleteEvent: GuildRoleDeleteEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 16:
                    message.eventData = {
                        $case: "messageCreateEvent",
                        messageCreateEvent: MessageCreateEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 17:
                    message.eventData = {
                        $case: "messageUpdateEvent",
                        messageUpdateEvent: MessageUpdateEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 18:
                    message.eventData = {
                        $case: "messageDeleteEvent",
                        messageDeleteEvent: MessageDeleteEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 19:
                    message.eventData = {
                        $case: "messageDeleteBulkEvent",
                        messageDeleteBulkEvent: MessageDeleteBulkEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 20:
                    message.eventData = {
                        $case: "messageReactionAddEvent",
                        messageReactionAddEvent: MessageReactionAddEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 21:
                    message.eventData = {
                        $case: "messageReactionRemoveEvent",
                        messageReactionRemoveEvent: MessageReactionRemoveEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 22:
                    message.eventData = {
                        $case: "messageReactionRemoveAllEvent",
                        messageReactionRemoveAllEvent: MessageReactionRemoveAllEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 23:
                    message.eventData = {
                        $case: "messageReactionRemoveEmojiEvent",
                        messageReactionRemoveEmojiEvent: MessageReactionRemoveEmojiEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 24:
                    message.eventData = {
                        $case: "typingStartEvent",
                        typingStartEvent: TypingStartEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 25:
                    message.eventData = {
                        $case: "voiceStateUpdateEvent",
                        voiceStateUpdateEvent: VoiceStateUpdateEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 26:
                    message.eventData = {
                        $case: "voiceServerUpdateEvent",
                        voiceServerUpdateEvent: VoiceServerUpdateEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 27:
                    message.eventData = {
                        $case: "inviteCreateEvent",
                        inviteCreateEvent: InviteCreateEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 28:
                    message.eventData = {
                        $case: "inviteDeleteEvent",
                        inviteDeleteEvent: InviteDeleteEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 29:
                    message.eventData = {
                        $case: "guildBanAddEvent",
                        guildBanAddEvent: GuildBanAddEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 30:
                    message.eventData = {
                        $case: "guildBanRemoveEvent",
                        guildBanRemoveEvent: GuildBanRemoveEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 31:
                    message.eventData = {
                        $case: "guildEmojisUpdateEvent",
                        guildEmojisUpdateEvent: GuildEmojisUpdateEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 32:
                    message.eventData = {
                        $case: "guildIntegrationsUpdateEvent",
                        guildIntegrationsUpdateEvent: GuildIntegrationsUpdateEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 33:
                    message.eventData = {
                        $case: "webhooksUpdateEvent",
                        webhooksUpdateEvent: WebhooksUpdateEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 34:
                    message.eventData = {
                        $case: "integrationCreateEvent",
                        integrationCreateEvent: IntegrationCreateEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 35:
                    message.eventData = {
                        $case: "integrationUpdateEvent",
                        integrationUpdateEvent: IntegrationUpdateEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 36:
                    message.eventData = {
                        $case: "integrationDeleteEvent",
                        integrationDeleteEvent: IntegrationDeleteEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 37:
                    message.eventData = {
                        $case: "interactionCreateEvent",
                        interactionCreateEvent: InteractionCreateEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 38:
                    message.eventData = {
                        $case: "readyEvent",
                        readyEvent: ReadyEvent.decode(reader, reader.uint32()),
                    };
                    break;
                case 39:
                    message.eventData = {
                        $case: "resumeEvent",
                        resumeEvent: ResumeEvent.decode(reader, reader.uint32()),
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
        const message = { ...baseEventEnvelope };
        if (object.header !== undefined && object.header !== null) {
            message.header = EventEnvelope_HeaderData.fromJSON(object.header);
        }
        if (object.guildCreateEvent !== undefined &&
            object.guildCreateEvent !== null) {
            message.eventData = {
                $case: "guildCreateEvent",
                guildCreateEvent: GuildCreateEvent.fromJSON(object.guildCreateEvent),
            };
        }
        if (object.guildUpdateEvent !== undefined &&
            object.guildUpdateEvent !== null) {
            message.eventData = {
                $case: "guildUpdateEvent",
                guildUpdateEvent: GuildUpdateEvent.fromJSON(object.guildUpdateEvent),
            };
        }
        if (object.guildDeleteEvent !== undefined &&
            object.guildDeleteEvent !== null) {
            message.eventData = {
                $case: "guildDeleteEvent",
                guildDeleteEvent: GuildDeleteEvent.fromJSON(object.guildDeleteEvent),
            };
        }
        if (object.presenceUpdateEvent !== undefined &&
            object.presenceUpdateEvent !== null) {
            message.eventData = {
                $case: "presenceUpdateEvent",
                presenceUpdateEvent: PresenceUpdateEvent.fromJSON(object.presenceUpdateEvent),
            };
        }
        if (object.guildMemberAddEvent !== undefined &&
            object.guildMemberAddEvent !== null) {
            message.eventData = {
                $case: "guildMemberAddEvent",
                guildMemberAddEvent: GuildMemberAddEvent.fromJSON(object.guildMemberAddEvent),
            };
        }
        if (object.guildMemberUpdateEvent !== undefined &&
            object.guildMemberUpdateEvent !== null) {
            message.eventData = {
                $case: "guildMemberUpdateEvent",
                guildMemberUpdateEvent: GuildMemberUpdateEvent.fromJSON(object.guildMemberUpdateEvent),
            };
        }
        if (object.guildMemberRemoveEvent !== undefined &&
            object.guildMemberRemoveEvent !== null) {
            message.eventData = {
                $case: "guildMemberRemoveEvent",
                guildMemberRemoveEvent: GuildMemberRemoveEvent.fromJSON(object.guildMemberRemoveEvent),
            };
        }
        if (object.channelCreateEvent !== undefined &&
            object.channelCreateEvent !== null) {
            message.eventData = {
                $case: "channelCreateEvent",
                channelCreateEvent: ChannelCreateEvent.fromJSON(object.channelCreateEvent),
            };
        }
        if (object.channelUpdateEvent !== undefined &&
            object.channelUpdateEvent !== null) {
            message.eventData = {
                $case: "channelUpdateEvent",
                channelUpdateEvent: ChannelUpdateEvent.fromJSON(object.channelUpdateEvent),
            };
        }
        if (object.channelDeleteEvent !== undefined &&
            object.channelDeleteEvent !== null) {
            message.eventData = {
                $case: "channelDeleteEvent",
                channelDeleteEvent: ChannelDeleteEvent.fromJSON(object.channelDeleteEvent),
            };
        }
        if (object.channelPinsUpdateEvent !== undefined &&
            object.channelPinsUpdateEvent !== null) {
            message.eventData = {
                $case: "channelPinsUpdateEvent",
                channelPinsUpdateEvent: ChannelPinsUpdateEvent.fromJSON(object.channelPinsUpdateEvent),
            };
        }
        if (object.guildRoleCreateEvent !== undefined &&
            object.guildRoleCreateEvent !== null) {
            message.eventData = {
                $case: "guildRoleCreateEvent",
                guildRoleCreateEvent: GuildRoleCreateEvent.fromJSON(object.guildRoleCreateEvent),
            };
        }
        if (object.guildRoleUpdateEvent !== undefined &&
            object.guildRoleUpdateEvent !== null) {
            message.eventData = {
                $case: "guildRoleUpdateEvent",
                guildRoleUpdateEvent: GuildRoleUpdateEvent.fromJSON(object.guildRoleUpdateEvent),
            };
        }
        if (object.guildRoleDeleteEvent !== undefined &&
            object.guildRoleDeleteEvent !== null) {
            message.eventData = {
                $case: "guildRoleDeleteEvent",
                guildRoleDeleteEvent: GuildRoleDeleteEvent.fromJSON(object.guildRoleDeleteEvent),
            };
        }
        if (object.messageCreateEvent !== undefined &&
            object.messageCreateEvent !== null) {
            message.eventData = {
                $case: "messageCreateEvent",
                messageCreateEvent: MessageCreateEvent.fromJSON(object.messageCreateEvent),
            };
        }
        if (object.messageUpdateEvent !== undefined &&
            object.messageUpdateEvent !== null) {
            message.eventData = {
                $case: "messageUpdateEvent",
                messageUpdateEvent: MessageUpdateEvent.fromJSON(object.messageUpdateEvent),
            };
        }
        if (object.messageDeleteEvent !== undefined &&
            object.messageDeleteEvent !== null) {
            message.eventData = {
                $case: "messageDeleteEvent",
                messageDeleteEvent: MessageDeleteEvent.fromJSON(object.messageDeleteEvent),
            };
        }
        if (object.messageDeleteBulkEvent !== undefined &&
            object.messageDeleteBulkEvent !== null) {
            message.eventData = {
                $case: "messageDeleteBulkEvent",
                messageDeleteBulkEvent: MessageDeleteBulkEvent.fromJSON(object.messageDeleteBulkEvent),
            };
        }
        if (object.messageReactionAddEvent !== undefined &&
            object.messageReactionAddEvent !== null) {
            message.eventData = {
                $case: "messageReactionAddEvent",
                messageReactionAddEvent: MessageReactionAddEvent.fromJSON(object.messageReactionAddEvent),
            };
        }
        if (object.messageReactionRemoveEvent !== undefined &&
            object.messageReactionRemoveEvent !== null) {
            message.eventData = {
                $case: "messageReactionRemoveEvent",
                messageReactionRemoveEvent: MessageReactionRemoveEvent.fromJSON(object.messageReactionRemoveEvent),
            };
        }
        if (object.messageReactionRemoveAllEvent !== undefined &&
            object.messageReactionRemoveAllEvent !== null) {
            message.eventData = {
                $case: "messageReactionRemoveAllEvent",
                messageReactionRemoveAllEvent: MessageReactionRemoveAllEvent.fromJSON(object.messageReactionRemoveAllEvent),
            };
        }
        if (object.messageReactionRemoveEmojiEvent !== undefined &&
            object.messageReactionRemoveEmojiEvent !== null) {
            message.eventData = {
                $case: "messageReactionRemoveEmojiEvent",
                messageReactionRemoveEmojiEvent: MessageReactionRemoveEmojiEvent.fromJSON(object.messageReactionRemoveEmojiEvent),
            };
        }
        if (object.typingStartEvent !== undefined &&
            object.typingStartEvent !== null) {
            message.eventData = {
                $case: "typingStartEvent",
                typingStartEvent: TypingStartEvent.fromJSON(object.typingStartEvent),
            };
        }
        if (object.voiceStateUpdateEvent !== undefined &&
            object.voiceStateUpdateEvent !== null) {
            message.eventData = {
                $case: "voiceStateUpdateEvent",
                voiceStateUpdateEvent: VoiceStateUpdateEvent.fromJSON(object.voiceStateUpdateEvent),
            };
        }
        if (object.voiceServerUpdateEvent !== undefined &&
            object.voiceServerUpdateEvent !== null) {
            message.eventData = {
                $case: "voiceServerUpdateEvent",
                voiceServerUpdateEvent: VoiceServerUpdateEvent.fromJSON(object.voiceServerUpdateEvent),
            };
        }
        if (object.inviteCreateEvent !== undefined &&
            object.inviteCreateEvent !== null) {
            message.eventData = {
                $case: "inviteCreateEvent",
                inviteCreateEvent: InviteCreateEvent.fromJSON(object.inviteCreateEvent),
            };
        }
        if (object.inviteDeleteEvent !== undefined &&
            object.inviteDeleteEvent !== null) {
            message.eventData = {
                $case: "inviteDeleteEvent",
                inviteDeleteEvent: InviteDeleteEvent.fromJSON(object.inviteDeleteEvent),
            };
        }
        if (object.guildBanAddEvent !== undefined &&
            object.guildBanAddEvent !== null) {
            message.eventData = {
                $case: "guildBanAddEvent",
                guildBanAddEvent: GuildBanAddEvent.fromJSON(object.guildBanAddEvent),
            };
        }
        if (object.guildBanRemoveEvent !== undefined &&
            object.guildBanRemoveEvent !== null) {
            message.eventData = {
                $case: "guildBanRemoveEvent",
                guildBanRemoveEvent: GuildBanRemoveEvent.fromJSON(object.guildBanRemoveEvent),
            };
        }
        if (object.guildEmojisUpdateEvent !== undefined &&
            object.guildEmojisUpdateEvent !== null) {
            message.eventData = {
                $case: "guildEmojisUpdateEvent",
                guildEmojisUpdateEvent: GuildEmojisUpdateEvent.fromJSON(object.guildEmojisUpdateEvent),
            };
        }
        if (object.guildIntegrationsUpdateEvent !== undefined &&
            object.guildIntegrationsUpdateEvent !== null) {
            message.eventData = {
                $case: "guildIntegrationsUpdateEvent",
                guildIntegrationsUpdateEvent: GuildIntegrationsUpdateEvent.fromJSON(object.guildIntegrationsUpdateEvent),
            };
        }
        if (object.webhooksUpdateEvent !== undefined &&
            object.webhooksUpdateEvent !== null) {
            message.eventData = {
                $case: "webhooksUpdateEvent",
                webhooksUpdateEvent: WebhooksUpdateEvent.fromJSON(object.webhooksUpdateEvent),
            };
        }
        if (object.integrationCreateEvent !== undefined &&
            object.integrationCreateEvent !== null) {
            message.eventData = {
                $case: "integrationCreateEvent",
                integrationCreateEvent: IntegrationCreateEvent.fromJSON(object.integrationCreateEvent),
            };
        }
        if (object.integrationUpdateEvent !== undefined &&
            object.integrationUpdateEvent !== null) {
            message.eventData = {
                $case: "integrationUpdateEvent",
                integrationUpdateEvent: IntegrationUpdateEvent.fromJSON(object.integrationUpdateEvent),
            };
        }
        if (object.integrationDeleteEvent !== undefined &&
            object.integrationDeleteEvent !== null) {
            message.eventData = {
                $case: "integrationDeleteEvent",
                integrationDeleteEvent: IntegrationDeleteEvent.fromJSON(object.integrationDeleteEvent),
            };
        }
        if (object.interactionCreateEvent !== undefined &&
            object.interactionCreateEvent !== null) {
            message.eventData = {
                $case: "interactionCreateEvent",
                interactionCreateEvent: InteractionCreateEvent.fromJSON(object.interactionCreateEvent),
            };
        }
        if (object.readyEvent !== undefined && object.readyEvent !== null) {
            message.eventData = {
                $case: "readyEvent",
                readyEvent: ReadyEvent.fromJSON(object.readyEvent),
            };
        }
        if (object.resumeEvent !== undefined && object.resumeEvent !== null) {
            message.eventData = {
                $case: "resumeEvent",
                resumeEvent: ResumeEvent.fromJSON(object.resumeEvent),
            };
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined &&
            (obj.header = message.header
                ? EventEnvelope_HeaderData.toJSON(message.header)
                : undefined);
        message.eventData?.$case === "guildCreateEvent" &&
            (obj.guildCreateEvent = message.eventData?.guildCreateEvent
                ? GuildCreateEvent.toJSON(message.eventData?.guildCreateEvent)
                : undefined);
        message.eventData?.$case === "guildUpdateEvent" &&
            (obj.guildUpdateEvent = message.eventData?.guildUpdateEvent
                ? GuildUpdateEvent.toJSON(message.eventData?.guildUpdateEvent)
                : undefined);
        message.eventData?.$case === "guildDeleteEvent" &&
            (obj.guildDeleteEvent = message.eventData?.guildDeleteEvent
                ? GuildDeleteEvent.toJSON(message.eventData?.guildDeleteEvent)
                : undefined);
        message.eventData?.$case === "presenceUpdateEvent" &&
            (obj.presenceUpdateEvent = message.eventData?.presenceUpdateEvent
                ? PresenceUpdateEvent.toJSON(message.eventData?.presenceUpdateEvent)
                : undefined);
        message.eventData?.$case === "guildMemberAddEvent" &&
            (obj.guildMemberAddEvent = message.eventData?.guildMemberAddEvent
                ? GuildMemberAddEvent.toJSON(message.eventData?.guildMemberAddEvent)
                : undefined);
        message.eventData?.$case === "guildMemberUpdateEvent" &&
            (obj.guildMemberUpdateEvent = message.eventData?.guildMemberUpdateEvent
                ? GuildMemberUpdateEvent.toJSON(message.eventData?.guildMemberUpdateEvent)
                : undefined);
        message.eventData?.$case === "guildMemberRemoveEvent" &&
            (obj.guildMemberRemoveEvent = message.eventData?.guildMemberRemoveEvent
                ? GuildMemberRemoveEvent.toJSON(message.eventData?.guildMemberRemoveEvent)
                : undefined);
        message.eventData?.$case === "channelCreateEvent" &&
            (obj.channelCreateEvent = message.eventData?.channelCreateEvent
                ? ChannelCreateEvent.toJSON(message.eventData?.channelCreateEvent)
                : undefined);
        message.eventData?.$case === "channelUpdateEvent" &&
            (obj.channelUpdateEvent = message.eventData?.channelUpdateEvent
                ? ChannelUpdateEvent.toJSON(message.eventData?.channelUpdateEvent)
                : undefined);
        message.eventData?.$case === "channelDeleteEvent" &&
            (obj.channelDeleteEvent = message.eventData?.channelDeleteEvent
                ? ChannelDeleteEvent.toJSON(message.eventData?.channelDeleteEvent)
                : undefined);
        message.eventData?.$case === "channelPinsUpdateEvent" &&
            (obj.channelPinsUpdateEvent = message.eventData?.channelPinsUpdateEvent
                ? ChannelPinsUpdateEvent.toJSON(message.eventData?.channelPinsUpdateEvent)
                : undefined);
        message.eventData?.$case === "guildRoleCreateEvent" &&
            (obj.guildRoleCreateEvent = message.eventData?.guildRoleCreateEvent
                ? GuildRoleCreateEvent.toJSON(message.eventData?.guildRoleCreateEvent)
                : undefined);
        message.eventData?.$case === "guildRoleUpdateEvent" &&
            (obj.guildRoleUpdateEvent = message.eventData?.guildRoleUpdateEvent
                ? GuildRoleUpdateEvent.toJSON(message.eventData?.guildRoleUpdateEvent)
                : undefined);
        message.eventData?.$case === "guildRoleDeleteEvent" &&
            (obj.guildRoleDeleteEvent = message.eventData?.guildRoleDeleteEvent
                ? GuildRoleDeleteEvent.toJSON(message.eventData?.guildRoleDeleteEvent)
                : undefined);
        message.eventData?.$case === "messageCreateEvent" &&
            (obj.messageCreateEvent = message.eventData?.messageCreateEvent
                ? MessageCreateEvent.toJSON(message.eventData?.messageCreateEvent)
                : undefined);
        message.eventData?.$case === "messageUpdateEvent" &&
            (obj.messageUpdateEvent = message.eventData?.messageUpdateEvent
                ? MessageUpdateEvent.toJSON(message.eventData?.messageUpdateEvent)
                : undefined);
        message.eventData?.$case === "messageDeleteEvent" &&
            (obj.messageDeleteEvent = message.eventData?.messageDeleteEvent
                ? MessageDeleteEvent.toJSON(message.eventData?.messageDeleteEvent)
                : undefined);
        message.eventData?.$case === "messageDeleteBulkEvent" &&
            (obj.messageDeleteBulkEvent = message.eventData?.messageDeleteBulkEvent
                ? MessageDeleteBulkEvent.toJSON(message.eventData?.messageDeleteBulkEvent)
                : undefined);
        message.eventData?.$case === "messageReactionAddEvent" &&
            (obj.messageReactionAddEvent = message.eventData?.messageReactionAddEvent
                ? MessageReactionAddEvent.toJSON(message.eventData?.messageReactionAddEvent)
                : undefined);
        message.eventData?.$case === "messageReactionRemoveEvent" &&
            (obj.messageReactionRemoveEvent = message.eventData
                ?.messageReactionRemoveEvent
                ? MessageReactionRemoveEvent.toJSON(message.eventData?.messageReactionRemoveEvent)
                : undefined);
        message.eventData?.$case === "messageReactionRemoveAllEvent" &&
            (obj.messageReactionRemoveAllEvent = message.eventData
                ?.messageReactionRemoveAllEvent
                ? MessageReactionRemoveAllEvent.toJSON(message.eventData?.messageReactionRemoveAllEvent)
                : undefined);
        message.eventData?.$case === "messageReactionRemoveEmojiEvent" &&
            (obj.messageReactionRemoveEmojiEvent = message.eventData
                ?.messageReactionRemoveEmojiEvent
                ? MessageReactionRemoveEmojiEvent.toJSON(message.eventData?.messageReactionRemoveEmojiEvent)
                : undefined);
        message.eventData?.$case === "typingStartEvent" &&
            (obj.typingStartEvent = message.eventData?.typingStartEvent
                ? TypingStartEvent.toJSON(message.eventData?.typingStartEvent)
                : undefined);
        message.eventData?.$case === "voiceStateUpdateEvent" &&
            (obj.voiceStateUpdateEvent = message.eventData?.voiceStateUpdateEvent
                ? VoiceStateUpdateEvent.toJSON(message.eventData?.voiceStateUpdateEvent)
                : undefined);
        message.eventData?.$case === "voiceServerUpdateEvent" &&
            (obj.voiceServerUpdateEvent = message.eventData?.voiceServerUpdateEvent
                ? VoiceServerUpdateEvent.toJSON(message.eventData?.voiceServerUpdateEvent)
                : undefined);
        message.eventData?.$case === "inviteCreateEvent" &&
            (obj.inviteCreateEvent = message.eventData?.inviteCreateEvent
                ? InviteCreateEvent.toJSON(message.eventData?.inviteCreateEvent)
                : undefined);
        message.eventData?.$case === "inviteDeleteEvent" &&
            (obj.inviteDeleteEvent = message.eventData?.inviteDeleteEvent
                ? InviteDeleteEvent.toJSON(message.eventData?.inviteDeleteEvent)
                : undefined);
        message.eventData?.$case === "guildBanAddEvent" &&
            (obj.guildBanAddEvent = message.eventData?.guildBanAddEvent
                ? GuildBanAddEvent.toJSON(message.eventData?.guildBanAddEvent)
                : undefined);
        message.eventData?.$case === "guildBanRemoveEvent" &&
            (obj.guildBanRemoveEvent = message.eventData?.guildBanRemoveEvent
                ? GuildBanRemoveEvent.toJSON(message.eventData?.guildBanRemoveEvent)
                : undefined);
        message.eventData?.$case === "guildEmojisUpdateEvent" &&
            (obj.guildEmojisUpdateEvent = message.eventData?.guildEmojisUpdateEvent
                ? GuildEmojisUpdateEvent.toJSON(message.eventData?.guildEmojisUpdateEvent)
                : undefined);
        message.eventData?.$case === "guildIntegrationsUpdateEvent" &&
            (obj.guildIntegrationsUpdateEvent = message.eventData
                ?.guildIntegrationsUpdateEvent
                ? GuildIntegrationsUpdateEvent.toJSON(message.eventData?.guildIntegrationsUpdateEvent)
                : undefined);
        message.eventData?.$case === "webhooksUpdateEvent" &&
            (obj.webhooksUpdateEvent = message.eventData?.webhooksUpdateEvent
                ? WebhooksUpdateEvent.toJSON(message.eventData?.webhooksUpdateEvent)
                : undefined);
        message.eventData?.$case === "integrationCreateEvent" &&
            (obj.integrationCreateEvent = message.eventData?.integrationCreateEvent
                ? IntegrationCreateEvent.toJSON(message.eventData?.integrationCreateEvent)
                : undefined);
        message.eventData?.$case === "integrationUpdateEvent" &&
            (obj.integrationUpdateEvent = message.eventData?.integrationUpdateEvent
                ? IntegrationUpdateEvent.toJSON(message.eventData?.integrationUpdateEvent)
                : undefined);
        message.eventData?.$case === "integrationDeleteEvent" &&
            (obj.integrationDeleteEvent = message.eventData?.integrationDeleteEvent
                ? IntegrationDeleteEvent.toJSON(message.eventData?.integrationDeleteEvent)
                : undefined);
        message.eventData?.$case === "interactionCreateEvent" &&
            (obj.interactionCreateEvent = message.eventData?.interactionCreateEvent
                ? InteractionCreateEvent.toJSON(message.eventData?.interactionCreateEvent)
                : undefined);
        message.eventData?.$case === "readyEvent" &&
            (obj.readyEvent = message.eventData?.readyEvent
                ? ReadyEvent.toJSON(message.eventData?.readyEvent)
                : undefined);
        message.eventData?.$case === "resumeEvent" &&
            (obj.resumeEvent = message.eventData?.resumeEvent
                ? ResumeEvent.toJSON(message.eventData?.resumeEvent)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventEnvelope };
        if (object.header !== undefined && object.header !== null) {
            message.header = EventEnvelope_HeaderData.fromPartial(object.header);
        }
        if (object.eventData?.$case === "guildCreateEvent" &&
            object.eventData?.guildCreateEvent !== undefined &&
            object.eventData?.guildCreateEvent !== null) {
            message.eventData = {
                $case: "guildCreateEvent",
                guildCreateEvent: GuildCreateEvent.fromPartial(object.eventData.guildCreateEvent),
            };
        }
        if (object.eventData?.$case === "guildUpdateEvent" &&
            object.eventData?.guildUpdateEvent !== undefined &&
            object.eventData?.guildUpdateEvent !== null) {
            message.eventData = {
                $case: "guildUpdateEvent",
                guildUpdateEvent: GuildUpdateEvent.fromPartial(object.eventData.guildUpdateEvent),
            };
        }
        if (object.eventData?.$case === "guildDeleteEvent" &&
            object.eventData?.guildDeleteEvent !== undefined &&
            object.eventData?.guildDeleteEvent !== null) {
            message.eventData = {
                $case: "guildDeleteEvent",
                guildDeleteEvent: GuildDeleteEvent.fromPartial(object.eventData.guildDeleteEvent),
            };
        }
        if (object.eventData?.$case === "presenceUpdateEvent" &&
            object.eventData?.presenceUpdateEvent !== undefined &&
            object.eventData?.presenceUpdateEvent !== null) {
            message.eventData = {
                $case: "presenceUpdateEvent",
                presenceUpdateEvent: PresenceUpdateEvent.fromPartial(object.eventData.presenceUpdateEvent),
            };
        }
        if (object.eventData?.$case === "guildMemberAddEvent" &&
            object.eventData?.guildMemberAddEvent !== undefined &&
            object.eventData?.guildMemberAddEvent !== null) {
            message.eventData = {
                $case: "guildMemberAddEvent",
                guildMemberAddEvent: GuildMemberAddEvent.fromPartial(object.eventData.guildMemberAddEvent),
            };
        }
        if (object.eventData?.$case === "guildMemberUpdateEvent" &&
            object.eventData?.guildMemberUpdateEvent !== undefined &&
            object.eventData?.guildMemberUpdateEvent !== null) {
            message.eventData = {
                $case: "guildMemberUpdateEvent",
                guildMemberUpdateEvent: GuildMemberUpdateEvent.fromPartial(object.eventData.guildMemberUpdateEvent),
            };
        }
        if (object.eventData?.$case === "guildMemberRemoveEvent" &&
            object.eventData?.guildMemberRemoveEvent !== undefined &&
            object.eventData?.guildMemberRemoveEvent !== null) {
            message.eventData = {
                $case: "guildMemberRemoveEvent",
                guildMemberRemoveEvent: GuildMemberRemoveEvent.fromPartial(object.eventData.guildMemberRemoveEvent),
            };
        }
        if (object.eventData?.$case === "channelCreateEvent" &&
            object.eventData?.channelCreateEvent !== undefined &&
            object.eventData?.channelCreateEvent !== null) {
            message.eventData = {
                $case: "channelCreateEvent",
                channelCreateEvent: ChannelCreateEvent.fromPartial(object.eventData.channelCreateEvent),
            };
        }
        if (object.eventData?.$case === "channelUpdateEvent" &&
            object.eventData?.channelUpdateEvent !== undefined &&
            object.eventData?.channelUpdateEvent !== null) {
            message.eventData = {
                $case: "channelUpdateEvent",
                channelUpdateEvent: ChannelUpdateEvent.fromPartial(object.eventData.channelUpdateEvent),
            };
        }
        if (object.eventData?.$case === "channelDeleteEvent" &&
            object.eventData?.channelDeleteEvent !== undefined &&
            object.eventData?.channelDeleteEvent !== null) {
            message.eventData = {
                $case: "channelDeleteEvent",
                channelDeleteEvent: ChannelDeleteEvent.fromPartial(object.eventData.channelDeleteEvent),
            };
        }
        if (object.eventData?.$case === "channelPinsUpdateEvent" &&
            object.eventData?.channelPinsUpdateEvent !== undefined &&
            object.eventData?.channelPinsUpdateEvent !== null) {
            message.eventData = {
                $case: "channelPinsUpdateEvent",
                channelPinsUpdateEvent: ChannelPinsUpdateEvent.fromPartial(object.eventData.channelPinsUpdateEvent),
            };
        }
        if (object.eventData?.$case === "guildRoleCreateEvent" &&
            object.eventData?.guildRoleCreateEvent !== undefined &&
            object.eventData?.guildRoleCreateEvent !== null) {
            message.eventData = {
                $case: "guildRoleCreateEvent",
                guildRoleCreateEvent: GuildRoleCreateEvent.fromPartial(object.eventData.guildRoleCreateEvent),
            };
        }
        if (object.eventData?.$case === "guildRoleUpdateEvent" &&
            object.eventData?.guildRoleUpdateEvent !== undefined &&
            object.eventData?.guildRoleUpdateEvent !== null) {
            message.eventData = {
                $case: "guildRoleUpdateEvent",
                guildRoleUpdateEvent: GuildRoleUpdateEvent.fromPartial(object.eventData.guildRoleUpdateEvent),
            };
        }
        if (object.eventData?.$case === "guildRoleDeleteEvent" &&
            object.eventData?.guildRoleDeleteEvent !== undefined &&
            object.eventData?.guildRoleDeleteEvent !== null) {
            message.eventData = {
                $case: "guildRoleDeleteEvent",
                guildRoleDeleteEvent: GuildRoleDeleteEvent.fromPartial(object.eventData.guildRoleDeleteEvent),
            };
        }
        if (object.eventData?.$case === "messageCreateEvent" &&
            object.eventData?.messageCreateEvent !== undefined &&
            object.eventData?.messageCreateEvent !== null) {
            message.eventData = {
                $case: "messageCreateEvent",
                messageCreateEvent: MessageCreateEvent.fromPartial(object.eventData.messageCreateEvent),
            };
        }
        if (object.eventData?.$case === "messageUpdateEvent" &&
            object.eventData?.messageUpdateEvent !== undefined &&
            object.eventData?.messageUpdateEvent !== null) {
            message.eventData = {
                $case: "messageUpdateEvent",
                messageUpdateEvent: MessageUpdateEvent.fromPartial(object.eventData.messageUpdateEvent),
            };
        }
        if (object.eventData?.$case === "messageDeleteEvent" &&
            object.eventData?.messageDeleteEvent !== undefined &&
            object.eventData?.messageDeleteEvent !== null) {
            message.eventData = {
                $case: "messageDeleteEvent",
                messageDeleteEvent: MessageDeleteEvent.fromPartial(object.eventData.messageDeleteEvent),
            };
        }
        if (object.eventData?.$case === "messageDeleteBulkEvent" &&
            object.eventData?.messageDeleteBulkEvent !== undefined &&
            object.eventData?.messageDeleteBulkEvent !== null) {
            message.eventData = {
                $case: "messageDeleteBulkEvent",
                messageDeleteBulkEvent: MessageDeleteBulkEvent.fromPartial(object.eventData.messageDeleteBulkEvent),
            };
        }
        if (object.eventData?.$case === "messageReactionAddEvent" &&
            object.eventData?.messageReactionAddEvent !== undefined &&
            object.eventData?.messageReactionAddEvent !== null) {
            message.eventData = {
                $case: "messageReactionAddEvent",
                messageReactionAddEvent: MessageReactionAddEvent.fromPartial(object.eventData.messageReactionAddEvent),
            };
        }
        if (object.eventData?.$case === "messageReactionRemoveEvent" &&
            object.eventData?.messageReactionRemoveEvent !== undefined &&
            object.eventData?.messageReactionRemoveEvent !== null) {
            message.eventData = {
                $case: "messageReactionRemoveEvent",
                messageReactionRemoveEvent: MessageReactionRemoveEvent.fromPartial(object.eventData.messageReactionRemoveEvent),
            };
        }
        if (object.eventData?.$case === "messageReactionRemoveAllEvent" &&
            object.eventData?.messageReactionRemoveAllEvent !== undefined &&
            object.eventData?.messageReactionRemoveAllEvent !== null) {
            message.eventData = {
                $case: "messageReactionRemoveAllEvent",
                messageReactionRemoveAllEvent: MessageReactionRemoveAllEvent.fromPartial(object.eventData.messageReactionRemoveAllEvent),
            };
        }
        if (object.eventData?.$case === "messageReactionRemoveEmojiEvent" &&
            object.eventData?.messageReactionRemoveEmojiEvent !== undefined &&
            object.eventData?.messageReactionRemoveEmojiEvent !== null) {
            message.eventData = {
                $case: "messageReactionRemoveEmojiEvent",
                messageReactionRemoveEmojiEvent: MessageReactionRemoveEmojiEvent.fromPartial(object.eventData.messageReactionRemoveEmojiEvent),
            };
        }
        if (object.eventData?.$case === "typingStartEvent" &&
            object.eventData?.typingStartEvent !== undefined &&
            object.eventData?.typingStartEvent !== null) {
            message.eventData = {
                $case: "typingStartEvent",
                typingStartEvent: TypingStartEvent.fromPartial(object.eventData.typingStartEvent),
            };
        }
        if (object.eventData?.$case === "voiceStateUpdateEvent" &&
            object.eventData?.voiceStateUpdateEvent !== undefined &&
            object.eventData?.voiceStateUpdateEvent !== null) {
            message.eventData = {
                $case: "voiceStateUpdateEvent",
                voiceStateUpdateEvent: VoiceStateUpdateEvent.fromPartial(object.eventData.voiceStateUpdateEvent),
            };
        }
        if (object.eventData?.$case === "voiceServerUpdateEvent" &&
            object.eventData?.voiceServerUpdateEvent !== undefined &&
            object.eventData?.voiceServerUpdateEvent !== null) {
            message.eventData = {
                $case: "voiceServerUpdateEvent",
                voiceServerUpdateEvent: VoiceServerUpdateEvent.fromPartial(object.eventData.voiceServerUpdateEvent),
            };
        }
        if (object.eventData?.$case === "inviteCreateEvent" &&
            object.eventData?.inviteCreateEvent !== undefined &&
            object.eventData?.inviteCreateEvent !== null) {
            message.eventData = {
                $case: "inviteCreateEvent",
                inviteCreateEvent: InviteCreateEvent.fromPartial(object.eventData.inviteCreateEvent),
            };
        }
        if (object.eventData?.$case === "inviteDeleteEvent" &&
            object.eventData?.inviteDeleteEvent !== undefined &&
            object.eventData?.inviteDeleteEvent !== null) {
            message.eventData = {
                $case: "inviteDeleteEvent",
                inviteDeleteEvent: InviteDeleteEvent.fromPartial(object.eventData.inviteDeleteEvent),
            };
        }
        if (object.eventData?.$case === "guildBanAddEvent" &&
            object.eventData?.guildBanAddEvent !== undefined &&
            object.eventData?.guildBanAddEvent !== null) {
            message.eventData = {
                $case: "guildBanAddEvent",
                guildBanAddEvent: GuildBanAddEvent.fromPartial(object.eventData.guildBanAddEvent),
            };
        }
        if (object.eventData?.$case === "guildBanRemoveEvent" &&
            object.eventData?.guildBanRemoveEvent !== undefined &&
            object.eventData?.guildBanRemoveEvent !== null) {
            message.eventData = {
                $case: "guildBanRemoveEvent",
                guildBanRemoveEvent: GuildBanRemoveEvent.fromPartial(object.eventData.guildBanRemoveEvent),
            };
        }
        if (object.eventData?.$case === "guildEmojisUpdateEvent" &&
            object.eventData?.guildEmojisUpdateEvent !== undefined &&
            object.eventData?.guildEmojisUpdateEvent !== null) {
            message.eventData = {
                $case: "guildEmojisUpdateEvent",
                guildEmojisUpdateEvent: GuildEmojisUpdateEvent.fromPartial(object.eventData.guildEmojisUpdateEvent),
            };
        }
        if (object.eventData?.$case === "guildIntegrationsUpdateEvent" &&
            object.eventData?.guildIntegrationsUpdateEvent !== undefined &&
            object.eventData?.guildIntegrationsUpdateEvent !== null) {
            message.eventData = {
                $case: "guildIntegrationsUpdateEvent",
                guildIntegrationsUpdateEvent: GuildIntegrationsUpdateEvent.fromPartial(object.eventData.guildIntegrationsUpdateEvent),
            };
        }
        if (object.eventData?.$case === "webhooksUpdateEvent" &&
            object.eventData?.webhooksUpdateEvent !== undefined &&
            object.eventData?.webhooksUpdateEvent !== null) {
            message.eventData = {
                $case: "webhooksUpdateEvent",
                webhooksUpdateEvent: WebhooksUpdateEvent.fromPartial(object.eventData.webhooksUpdateEvent),
            };
        }
        if (object.eventData?.$case === "integrationCreateEvent" &&
            object.eventData?.integrationCreateEvent !== undefined &&
            object.eventData?.integrationCreateEvent !== null) {
            message.eventData = {
                $case: "integrationCreateEvent",
                integrationCreateEvent: IntegrationCreateEvent.fromPartial(object.eventData.integrationCreateEvent),
            };
        }
        if (object.eventData?.$case === "integrationUpdateEvent" &&
            object.eventData?.integrationUpdateEvent !== undefined &&
            object.eventData?.integrationUpdateEvent !== null) {
            message.eventData = {
                $case: "integrationUpdateEvent",
                integrationUpdateEvent: IntegrationUpdateEvent.fromPartial(object.eventData.integrationUpdateEvent),
            };
        }
        if (object.eventData?.$case === "integrationDeleteEvent" &&
            object.eventData?.integrationDeleteEvent !== undefined &&
            object.eventData?.integrationDeleteEvent !== null) {
            message.eventData = {
                $case: "integrationDeleteEvent",
                integrationDeleteEvent: IntegrationDeleteEvent.fromPartial(object.eventData.integrationDeleteEvent),
            };
        }
        if (object.eventData?.$case === "interactionCreateEvent" &&
            object.eventData?.interactionCreateEvent !== undefined &&
            object.eventData?.interactionCreateEvent !== null) {
            message.eventData = {
                $case: "interactionCreateEvent",
                interactionCreateEvent: InteractionCreateEvent.fromPartial(object.eventData.interactionCreateEvent),
            };
        }
        if (object.eventData?.$case === "readyEvent" &&
            object.eventData?.readyEvent !== undefined &&
            object.eventData?.readyEvent !== null) {
            message.eventData = {
                $case: "readyEvent",
                readyEvent: ReadyEvent.fromPartial(object.eventData.readyEvent),
            };
        }
        if (object.eventData?.$case === "resumeEvent" &&
            object.eventData?.resumeEvent !== undefined &&
            object.eventData?.resumeEvent !== null) {
            message.eventData = {
                $case: "resumeEvent",
                resumeEvent: ResumeEvent.fromPartial(object.eventData.resumeEvent),
            };
        }
        return message;
    },
};
messageTypeRegistry.set(EventEnvelope.$type, EventEnvelope);
const baseEventEnvelope_HeaderData = {
    $type: "pylon.discord.v1.event.EventEnvelope.HeaderData",
    seq: "0",
};
export const EventEnvelope_HeaderData = {
    $type: "pylon.discord.v1.event.EventEnvelope.HeaderData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.seq !== "0") {
            writer.uint32(8).uint64(message.seq);
        }
        if (message.receivedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.receivedAt), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseEventEnvelope_HeaderData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seq = longToString(reader.uint64());
                    break;
                case 2:
                    message.receivedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            ...baseEventEnvelope_HeaderData,
        };
        if (object.seq !== undefined && object.seq !== null) {
            message.seq = String(object.seq);
        }
        if (object.receivedAt !== undefined && object.receivedAt !== null) {
            message.receivedAt = fromJsonTimestamp(object.receivedAt);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.seq !== undefined && (obj.seq = message.seq);
        message.receivedAt !== undefined &&
            (obj.receivedAt = message.receivedAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseEventEnvelope_HeaderData,
        };
        if (object.seq !== undefined && object.seq !== null) {
            message.seq = object.seq;
        }
        if (object.receivedAt !== undefined && object.receivedAt !== null) {
            message.receivedAt = object.receivedAt;
        }
        return message;
    },
};
messageTypeRegistry.set(EventEnvelope_HeaderData.$type, EventEnvelope_HeaderData);
const baseEventEnvelopeAck = {
    $type: "pylon.discord.v1.event.EventEnvelopeAck",
    seq: "0",
};
export const EventEnvelopeAck = {
    $type: "pylon.discord.v1.event.EventEnvelopeAck",
    encode(message, writer = _m0.Writer.create()) {
        if (message.seq !== "0") {
            writer.uint32(8).uint64(message.seq);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventEnvelopeAck };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seq = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEventEnvelopeAck };
        if (object.seq !== undefined && object.seq !== null) {
            message.seq = String(object.seq);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.seq !== undefined && (obj.seq = message.seq);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventEnvelopeAck };
        if (object.seq !== undefined && object.seq !== null) {
            message.seq = object.seq;
        }
        return message;
    },
};
messageTypeRegistry.set(EventEnvelopeAck.$type, EventEnvelopeAck);
const baseEventScope = {
    $type: "pylon.discord.v1.event.EventScope",
    botId: "0",
    guildId: "0",
};
export const EventScope = {
    $type: "pylon.discord.v1.event.EventScope",
    encode(message, writer = _m0.Writer.create()) {
        if (message.botId !== "0") {
            writer.uint32(9).fixed64(message.botId);
        }
        if (message.guildId !== "0") {
            writer.uint32(17).fixed64(message.guildId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventScope };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.botId = longToString(reader.fixed64());
                    break;
                case 2:
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
        const message = { ...baseEventScope };
        if (object.botId !== undefined && object.botId !== null) {
            message.botId = String(object.botId);
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.botId !== undefined && (obj.botId = message.botId);
        message.guildId !== undefined && (obj.guildId = message.guildId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEventScope };
        if (object.botId !== undefined && object.botId !== null) {
            message.botId = object.botId;
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        return message;
    },
};
messageTypeRegistry.set(EventScope.$type, EventScope);
const baseReadyEvent = { $type: "pylon.discord.v1.event.ReadyEvent" };
export const ReadyEvent = {
    $type: "pylon.discord.v1.event.ReadyEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReadyEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseReadyEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseReadyEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        return message;
    },
};
messageTypeRegistry.set(ReadyEvent.$type, ReadyEvent);
const baseResumeEvent = { $type: "pylon.discord.v1.event.ResumeEvent" };
export const ResumeEvent = {
    $type: "pylon.discord.v1.event.ResumeEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResumeEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseResumeEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseResumeEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        return message;
    },
};
messageTypeRegistry.set(ResumeEvent.$type, ResumeEvent);
const baseGuildCreateEvent = {
    $type: "pylon.discord.v1.event.GuildCreateEvent",
};
export const GuildCreateEvent = {
    $type: "pylon.discord.v1.event.GuildCreateEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            GuildData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGuildCreateEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = GuildData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGuildCreateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = GuildData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? GuildData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGuildCreateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = GuildData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(GuildCreateEvent.$type, GuildCreateEvent);
const baseGuildUpdateEvent = {
    $type: "pylon.discord.v1.event.GuildUpdateEvent",
};
export const GuildUpdateEvent = {
    $type: "pylon.discord.v1.event.GuildUpdateEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            GuildData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        if (message.previouslyCached !== undefined) {
            GuildData.encode(message.previouslyCached, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGuildUpdateEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = GuildData.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.previouslyCached = GuildData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGuildUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = GuildData.fromJSON(object.payload);
        }
        if (object.previouslyCached !== undefined &&
            object.previouslyCached !== null) {
            message.previouslyCached = GuildData.fromJSON(object.previouslyCached);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? GuildData.toJSON(message.payload)
                : undefined);
        message.previouslyCached !== undefined &&
            (obj.previouslyCached = message.previouslyCached
                ? GuildData.toJSON(message.previouslyCached)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGuildUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = GuildData.fromPartial(object.payload);
        }
        if (object.previouslyCached !== undefined &&
            object.previouslyCached !== null) {
            message.previouslyCached = GuildData.fromPartial(object.previouslyCached);
        }
        return message;
    },
};
messageTypeRegistry.set(GuildUpdateEvent.$type, GuildUpdateEvent);
const baseGuildDeleteEvent = {
    $type: "pylon.discord.v1.event.GuildDeleteEvent",
};
export const GuildDeleteEvent = {
    $type: "pylon.discord.v1.event.GuildDeleteEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            GuildData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGuildDeleteEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = GuildData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGuildDeleteEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = GuildData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? GuildData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGuildDeleteEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = GuildData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(GuildDeleteEvent.$type, GuildDeleteEvent);
const basePresenceUpdateEvent = {
    $type: "pylon.discord.v1.event.PresenceUpdateEvent",
};
export const PresenceUpdateEvent = {
    $type: "pylon.discord.v1.event.PresenceUpdateEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            PresenceData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        if (message.previouslyCached !== undefined) {
            PresenceData.encode(message.previouslyCached, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePresenceUpdateEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = PresenceData.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.previouslyCached = PresenceData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePresenceUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = PresenceData.fromJSON(object.payload);
        }
        if (object.previouslyCached !== undefined &&
            object.previouslyCached !== null) {
            message.previouslyCached = PresenceData.fromJSON(object.previouslyCached);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? PresenceData.toJSON(message.payload)
                : undefined);
        message.previouslyCached !== undefined &&
            (obj.previouslyCached = message.previouslyCached
                ? PresenceData.toJSON(message.previouslyCached)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePresenceUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = PresenceData.fromPartial(object.payload);
        }
        if (object.previouslyCached !== undefined &&
            object.previouslyCached !== null) {
            message.previouslyCached = PresenceData.fromPartial(object.previouslyCached);
        }
        return message;
    },
};
messageTypeRegistry.set(PresenceUpdateEvent.$type, PresenceUpdateEvent);
const baseGuildMemberAddEvent = {
    $type: "pylon.discord.v1.event.GuildMemberAddEvent",
};
export const GuildMemberAddEvent = {
    $type: "pylon.discord.v1.event.GuildMemberAddEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            MemberData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGuildMemberAddEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = MemberData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGuildMemberAddEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = MemberData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? MemberData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGuildMemberAddEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = MemberData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(GuildMemberAddEvent.$type, GuildMemberAddEvent);
const baseGuildMemberUpdateEvent = {
    $type: "pylon.discord.v1.event.GuildMemberUpdateEvent",
};
export const GuildMemberUpdateEvent = {
    $type: "pylon.discord.v1.event.GuildMemberUpdateEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            MemberData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        if (message.previouslyCached !== undefined) {
            MemberData.encode(message.previouslyCached, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGuildMemberUpdateEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = MemberData.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.previouslyCached = MemberData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGuildMemberUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = MemberData.fromJSON(object.payload);
        }
        if (object.previouslyCached !== undefined &&
            object.previouslyCached !== null) {
            message.previouslyCached = MemberData.fromJSON(object.previouslyCached);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? MemberData.toJSON(message.payload)
                : undefined);
        message.previouslyCached !== undefined &&
            (obj.previouslyCached = message.previouslyCached
                ? MemberData.toJSON(message.previouslyCached)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGuildMemberUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = MemberData.fromPartial(object.payload);
        }
        if (object.previouslyCached !== undefined &&
            object.previouslyCached !== null) {
            message.previouslyCached = MemberData.fromPartial(object.previouslyCached);
        }
        return message;
    },
};
messageTypeRegistry.set(GuildMemberUpdateEvent.$type, GuildMemberUpdateEvent);
const baseGuildMemberRemoveEvent = {
    $type: "pylon.discord.v1.event.GuildMemberRemoveEvent",
};
export const GuildMemberRemoveEvent = {
    $type: "pylon.discord.v1.event.GuildMemberRemoveEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            MemberData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGuildMemberRemoveEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = MemberData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGuildMemberRemoveEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = MemberData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? MemberData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGuildMemberRemoveEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = MemberData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(GuildMemberRemoveEvent.$type, GuildMemberRemoveEvent);
const baseChannelCreateEvent = {
    $type: "pylon.discord.v1.event.ChannelCreateEvent",
};
export const ChannelCreateEvent = {
    $type: "pylon.discord.v1.event.ChannelCreateEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            ChannelData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseChannelCreateEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = ChannelData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseChannelCreateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = ChannelData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? ChannelData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseChannelCreateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = ChannelData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(ChannelCreateEvent.$type, ChannelCreateEvent);
const baseChannelUpdateEvent = {
    $type: "pylon.discord.v1.event.ChannelUpdateEvent",
};
export const ChannelUpdateEvent = {
    $type: "pylon.discord.v1.event.ChannelUpdateEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            ChannelData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        if (message.previouslyCached !== undefined) {
            ChannelData.encode(message.previouslyCached, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseChannelUpdateEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = ChannelData.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.previouslyCached = ChannelData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseChannelUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = ChannelData.fromJSON(object.payload);
        }
        if (object.previouslyCached !== undefined &&
            object.previouslyCached !== null) {
            message.previouslyCached = ChannelData.fromJSON(object.previouslyCached);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? ChannelData.toJSON(message.payload)
                : undefined);
        message.previouslyCached !== undefined &&
            (obj.previouslyCached = message.previouslyCached
                ? ChannelData.toJSON(message.previouslyCached)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseChannelUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = ChannelData.fromPartial(object.payload);
        }
        if (object.previouslyCached !== undefined &&
            object.previouslyCached !== null) {
            message.previouslyCached = ChannelData.fromPartial(object.previouslyCached);
        }
        return message;
    },
};
messageTypeRegistry.set(ChannelUpdateEvent.$type, ChannelUpdateEvent);
const baseChannelDeleteEvent = {
    $type: "pylon.discord.v1.event.ChannelDeleteEvent",
};
export const ChannelDeleteEvent = {
    $type: "pylon.discord.v1.event.ChannelDeleteEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            ChannelData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseChannelDeleteEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = ChannelData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseChannelDeleteEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = ChannelData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? ChannelData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseChannelDeleteEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = ChannelData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(ChannelDeleteEvent.$type, ChannelDeleteEvent);
const baseChannelPinsUpdateEvent = {
    $type: "pylon.discord.v1.event.ChannelPinsUpdateEvent",
};
export const ChannelPinsUpdateEvent = {
    $type: "pylon.discord.v1.event.ChannelPinsUpdateEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            ChannelPinsUpdateEvent_PayloadData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseChannelPinsUpdateEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = ChannelPinsUpdateEvent_PayloadData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseChannelPinsUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = ChannelPinsUpdateEvent_PayloadData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? ChannelPinsUpdateEvent_PayloadData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseChannelPinsUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = ChannelPinsUpdateEvent_PayloadData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(ChannelPinsUpdateEvent.$type, ChannelPinsUpdateEvent);
const baseChannelPinsUpdateEvent_PayloadData = {
    $type: "pylon.discord.v1.event.ChannelPinsUpdateEvent.PayloadData",
    channelId: "0",
    guildId: "0",
};
export const ChannelPinsUpdateEvent_PayloadData = {
    $type: "pylon.discord.v1.event.ChannelPinsUpdateEvent.PayloadData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.guildId !== "0") {
            writer.uint32(17).fixed64(message.guildId);
        }
        if (message.lastPinTimestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.lastPinTimestamp), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseChannelPinsUpdateEvent_PayloadData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.guildId = longToString(reader.fixed64());
                    break;
                case 3:
                    message.lastPinTimestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            ...baseChannelPinsUpdateEvent_PayloadData,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        if (object.lastPinTimestamp !== undefined &&
            object.lastPinTimestamp !== null) {
            message.lastPinTimestamp = fromJsonTimestamp(object.lastPinTimestamp);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.guildId !== undefined && (obj.guildId = message.guildId);
        message.lastPinTimestamp !== undefined &&
            (obj.lastPinTimestamp = message.lastPinTimestamp.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseChannelPinsUpdateEvent_PayloadData,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        if (object.lastPinTimestamp !== undefined &&
            object.lastPinTimestamp !== null) {
            message.lastPinTimestamp = object.lastPinTimestamp;
        }
        return message;
    },
};
messageTypeRegistry.set(ChannelPinsUpdateEvent_PayloadData.$type, ChannelPinsUpdateEvent_PayloadData);
const baseGuildRoleCreateEvent = {
    $type: "pylon.discord.v1.event.GuildRoleCreateEvent",
};
export const GuildRoleCreateEvent = {
    $type: "pylon.discord.v1.event.GuildRoleCreateEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            RoleData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGuildRoleCreateEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = RoleData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGuildRoleCreateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = RoleData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? RoleData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGuildRoleCreateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = RoleData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(GuildRoleCreateEvent.$type, GuildRoleCreateEvent);
const baseGuildRoleUpdateEvent = {
    $type: "pylon.discord.v1.event.GuildRoleUpdateEvent",
};
export const GuildRoleUpdateEvent = {
    $type: "pylon.discord.v1.event.GuildRoleUpdateEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            RoleData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        if (message.previouslyCached !== undefined) {
            RoleData.encode(message.previouslyCached, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGuildRoleUpdateEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = RoleData.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.previouslyCached = RoleData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGuildRoleUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = RoleData.fromJSON(object.payload);
        }
        if (object.previouslyCached !== undefined &&
            object.previouslyCached !== null) {
            message.previouslyCached = RoleData.fromJSON(object.previouslyCached);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? RoleData.toJSON(message.payload)
                : undefined);
        message.previouslyCached !== undefined &&
            (obj.previouslyCached = message.previouslyCached
                ? RoleData.toJSON(message.previouslyCached)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGuildRoleUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = RoleData.fromPartial(object.payload);
        }
        if (object.previouslyCached !== undefined &&
            object.previouslyCached !== null) {
            message.previouslyCached = RoleData.fromPartial(object.previouslyCached);
        }
        return message;
    },
};
messageTypeRegistry.set(GuildRoleUpdateEvent.$type, GuildRoleUpdateEvent);
const baseGuildRoleDeleteEvent = {
    $type: "pylon.discord.v1.event.GuildRoleDeleteEvent",
};
export const GuildRoleDeleteEvent = {
    $type: "pylon.discord.v1.event.GuildRoleDeleteEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            RoleData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGuildRoleDeleteEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = RoleData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGuildRoleDeleteEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = RoleData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? RoleData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGuildRoleDeleteEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = RoleData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(GuildRoleDeleteEvent.$type, GuildRoleDeleteEvent);
const baseMessageCreateEvent = {
    $type: "pylon.discord.v1.event.MessageCreateEvent",
};
export const MessageCreateEvent = {
    $type: "pylon.discord.v1.event.MessageCreateEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.messageData !== undefined) {
            MessageData.encode(message.messageData, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMessageCreateEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.messageData = MessageData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMessageCreateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.messageData !== undefined && object.messageData !== null) {
            message.messageData = MessageData.fromJSON(object.messageData);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.messageData !== undefined &&
            (obj.messageData = message.messageData
                ? MessageData.toJSON(message.messageData)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMessageCreateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.messageData !== undefined && object.messageData !== null) {
            message.messageData = MessageData.fromPartial(object.messageData);
        }
        return message;
    },
};
messageTypeRegistry.set(MessageCreateEvent.$type, MessageCreateEvent);
const baseMessageUpdateEvent = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent",
};
export const MessageUpdateEvent = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload?.$case === "cached") {
            MessageData.encode(message.payload.cached, writer.uint32(18).fork()).ldelim();
        }
        if (message.payload?.$case === "raw") {
            MessageUpdateEvent_PayloadData.encode(message.payload.raw, writer.uint32(34).fork()).ldelim();
        }
        if (message.previouslyCached !== undefined) {
            MessageData.encode(message.previouslyCached, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMessageUpdateEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = {
                        $case: "cached",
                        cached: MessageData.decode(reader, reader.uint32()),
                    };
                    break;
                case 4:
                    message.payload = {
                        $case: "raw",
                        raw: MessageUpdateEvent_PayloadData.decode(reader, reader.uint32()),
                    };
                    break;
                case 3:
                    message.previouslyCached = MessageData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMessageUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.cached !== undefined && object.cached !== null) {
            message.payload = {
                $case: "cached",
                cached: MessageData.fromJSON(object.cached),
            };
        }
        if (object.raw !== undefined && object.raw !== null) {
            message.payload = {
                $case: "raw",
                raw: MessageUpdateEvent_PayloadData.fromJSON(object.raw),
            };
        }
        if (object.previouslyCached !== undefined &&
            object.previouslyCached !== null) {
            message.previouslyCached = MessageData.fromJSON(object.previouslyCached);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload?.$case === "cached" &&
            (obj.cached = message.payload?.cached
                ? MessageData.toJSON(message.payload?.cached)
                : undefined);
        message.payload?.$case === "raw" &&
            (obj.raw = message.payload?.raw
                ? MessageUpdateEvent_PayloadData.toJSON(message.payload?.raw)
                : undefined);
        message.previouslyCached !== undefined &&
            (obj.previouslyCached = message.previouslyCached
                ? MessageData.toJSON(message.previouslyCached)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMessageUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload?.$case === "cached" &&
            object.payload?.cached !== undefined &&
            object.payload?.cached !== null) {
            message.payload = {
                $case: "cached",
                cached: MessageData.fromPartial(object.payload.cached),
            };
        }
        if (object.payload?.$case === "raw" &&
            object.payload?.raw !== undefined &&
            object.payload?.raw !== null) {
            message.payload = {
                $case: "raw",
                raw: MessageUpdateEvent_PayloadData.fromPartial(object.payload.raw),
            };
        }
        if (object.previouslyCached !== undefined &&
            object.previouslyCached !== null) {
            message.previouslyCached = MessageData.fromPartial(object.previouslyCached);
        }
        return message;
    },
};
messageTypeRegistry.set(MessageUpdateEvent.$type, MessageUpdateEvent);
const baseMessageUpdateEvent_PayloadData = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData",
    id: "0",
    channelId: "0",
};
export const MessageUpdateEvent_PayloadData = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData",
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
        if (message.content !== undefined) {
            StringValue.encode({ $type: "google.protobuf.StringValue", value: message.content }, writer.uint32(34).fork()).ldelim();
        }
        if (message.editedTimestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.editedTimestamp), writer.uint32(42).fork()).ldelim();
        }
        if (message.mentionRoles !== undefined) {
            SnowflakeListValue.encode(message.mentionRoles, writer.uint32(50).fork()).ldelim();
        }
        if (message.tts !== undefined) {
            BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.tts }, writer.uint32(58).fork()).ldelim();
        }
        if (message.mentionEveryone !== undefined) {
            BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.mentionEveryone }, writer.uint32(66).fork()).ldelim();
        }
        if (message.attachments !== undefined) {
            MessageUpdateEvent_PayloadData_MessageAttachmentListValue.encode(message.attachments, writer.uint32(74).fork()).ldelim();
        }
        if (message.embeds !== undefined) {
            MessageUpdateEvent_PayloadData_MessageEmbedListValue.encode(message.embeds, writer.uint32(82).fork()).ldelim();
        }
        if (message.mentions !== undefined) {
            MessageUpdateEvent_PayloadData_MessageMentionListValue.encode(message.mentions, writer.uint32(90).fork()).ldelim();
        }
        if (message.reactions !== undefined) {
            MessageUpdateEvent_PayloadData_MessageReactionListValue.encode(message.reactions, writer.uint32(98).fork()).ldelim();
        }
        if (message.pinned !== undefined) {
            BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.pinned }, writer.uint32(106).fork()).ldelim();
        }
        if (message.type !== undefined) {
            MessageUpdateEvent_PayloadData_MessageTypeValue.encode(message.type, writer.uint32(114).fork()).ldelim();
        }
        if (message.mentionChannels !== undefined) {
            MessageUpdateEvent_PayloadData_MessageMentionChannelListValue.encode(message.mentionChannels, writer.uint32(122).fork()).ldelim();
        }
        if (message.flags !== undefined) {
            UInt32Value.encode({ $type: "google.protobuf.UInt32Value", value: message.flags }, writer.uint32(130).fork()).ldelim();
        }
        if (message.activity !== undefined) {
            MessageUpdateEvent_PayloadData_MessageActivityValue.encode(message.activity, writer.uint32(138).fork()).ldelim();
        }
        if (message.application !== undefined) {
            MessageUpdateEvent_PayloadData_MessageApplicationValue.encode(message.application, writer.uint32(146).fork()).ldelim();
        }
        if (message.messageReference !== undefined) {
            MessageUpdateEvent_PayloadData_MessageReferenceValue.encode(message.messageReference, writer.uint32(154).fork()).ldelim();
        }
        if (message.author !== undefined) {
            MessageUpdateEvent_PayloadData_MessageAuthorValue.encode(message.author, writer.uint32(162).fork()).ldelim();
        }
        if (message.member !== undefined) {
            MessageUpdateEvent_PayloadData_MessageMemberValue.encode(message.member, writer.uint32(170).fork()).ldelim();
        }
        if (message.webhookId !== undefined) {
            SnowflakeValue.encode(message.webhookId, writer.uint32(178).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageUpdateEvent_PayloadData,
        };
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
                    message.content = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.editedTimestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.mentionRoles = SnowflakeListValue.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.tts = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.mentionEveryone = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.attachments = MessageUpdateEvent_PayloadData_MessageAttachmentListValue.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.embeds = MessageUpdateEvent_PayloadData_MessageEmbedListValue.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.mentions = MessageUpdateEvent_PayloadData_MessageMentionListValue.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.reactions = MessageUpdateEvent_PayloadData_MessageReactionListValue.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.pinned = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 14:
                    message.type = MessageUpdateEvent_PayloadData_MessageTypeValue.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.mentionChannels = MessageUpdateEvent_PayloadData_MessageMentionChannelListValue.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.flags = UInt32Value.decode(reader, reader.uint32()).value;
                    break;
                case 17:
                    message.activity = MessageUpdateEvent_PayloadData_MessageActivityValue.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.application = MessageUpdateEvent_PayloadData_MessageApplicationValue.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.messageReference = MessageUpdateEvent_PayloadData_MessageReferenceValue.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.author = MessageUpdateEvent_PayloadData_MessageAuthorValue.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.member = MessageUpdateEvent_PayloadData_MessageMemberValue.decode(reader, reader.uint32());
                    break;
                case 22:
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
        const message = {
            ...baseMessageUpdateEvent_PayloadData,
        };
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
            message.attachments = MessageUpdateEvent_PayloadData_MessageAttachmentListValue.fromJSON(object.attachments);
        }
        if (object.embeds !== undefined && object.embeds !== null) {
            message.embeds = MessageUpdateEvent_PayloadData_MessageEmbedListValue.fromJSON(object.embeds);
        }
        if (object.mentions !== undefined && object.mentions !== null) {
            message.mentions = MessageUpdateEvent_PayloadData_MessageMentionListValue.fromJSON(object.mentions);
        }
        if (object.reactions !== undefined && object.reactions !== null) {
            message.reactions = MessageUpdateEvent_PayloadData_MessageReactionListValue.fromJSON(object.reactions);
        }
        if (object.pinned !== undefined && object.pinned !== null) {
            message.pinned = Boolean(object.pinned);
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = MessageUpdateEvent_PayloadData_MessageTypeValue.fromJSON(object.type);
        }
        if (object.mentionChannels !== undefined &&
            object.mentionChannels !== null) {
            message.mentionChannels = MessageUpdateEvent_PayloadData_MessageMentionChannelListValue.fromJSON(object.mentionChannels);
        }
        if (object.flags !== undefined && object.flags !== null) {
            message.flags = Number(object.flags);
        }
        if (object.activity !== undefined && object.activity !== null) {
            message.activity = MessageUpdateEvent_PayloadData_MessageActivityValue.fromJSON(object.activity);
        }
        if (object.application !== undefined && object.application !== null) {
            message.application = MessageUpdateEvent_PayloadData_MessageApplicationValue.fromJSON(object.application);
        }
        if (object.messageReference !== undefined &&
            object.messageReference !== null) {
            message.messageReference = MessageUpdateEvent_PayloadData_MessageReferenceValue.fromJSON(object.messageReference);
        }
        if (object.author !== undefined && object.author !== null) {
            message.author = MessageUpdateEvent_PayloadData_MessageAuthorValue.fromJSON(object.author);
        }
        if (object.member !== undefined && object.member !== null) {
            message.member = MessageUpdateEvent_PayloadData_MessageMemberValue.fromJSON(object.member);
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
        message.editedTimestamp !== undefined &&
            (obj.editedTimestamp = message.editedTimestamp.toISOString());
        message.mentionRoles !== undefined &&
            (obj.mentionRoles = message.mentionRoles
                ? SnowflakeListValue.toJSON(message.mentionRoles)
                : undefined);
        message.tts !== undefined && (obj.tts = message.tts);
        message.mentionEveryone !== undefined &&
            (obj.mentionEveryone = message.mentionEveryone);
        message.attachments !== undefined &&
            (obj.attachments = message.attachments
                ? MessageUpdateEvent_PayloadData_MessageAttachmentListValue.toJSON(message.attachments)
                : undefined);
        message.embeds !== undefined &&
            (obj.embeds = message.embeds
                ? MessageUpdateEvent_PayloadData_MessageEmbedListValue.toJSON(message.embeds)
                : undefined);
        message.mentions !== undefined &&
            (obj.mentions = message.mentions
                ? MessageUpdateEvent_PayloadData_MessageMentionListValue.toJSON(message.mentions)
                : undefined);
        message.reactions !== undefined &&
            (obj.reactions = message.reactions
                ? MessageUpdateEvent_PayloadData_MessageReactionListValue.toJSON(message.reactions)
                : undefined);
        message.pinned !== undefined && (obj.pinned = message.pinned);
        message.type !== undefined &&
            (obj.type = message.type
                ? MessageUpdateEvent_PayloadData_MessageTypeValue.toJSON(message.type)
                : undefined);
        message.mentionChannels !== undefined &&
            (obj.mentionChannels = message.mentionChannels
                ? MessageUpdateEvent_PayloadData_MessageMentionChannelListValue.toJSON(message.mentionChannels)
                : undefined);
        message.flags !== undefined && (obj.flags = message.flags);
        message.activity !== undefined &&
            (obj.activity = message.activity
                ? MessageUpdateEvent_PayloadData_MessageActivityValue.toJSON(message.activity)
                : undefined);
        message.application !== undefined &&
            (obj.application = message.application
                ? MessageUpdateEvent_PayloadData_MessageApplicationValue.toJSON(message.application)
                : undefined);
        message.messageReference !== undefined &&
            (obj.messageReference = message.messageReference
                ? MessageUpdateEvent_PayloadData_MessageReferenceValue.toJSON(message.messageReference)
                : undefined);
        message.author !== undefined &&
            (obj.author = message.author
                ? MessageUpdateEvent_PayloadData_MessageAuthorValue.toJSON(message.author)
                : undefined);
        message.member !== undefined &&
            (obj.member = message.member
                ? MessageUpdateEvent_PayloadData_MessageMemberValue.toJSON(message.member)
                : undefined);
        message.webhookId !== undefined &&
            (obj.webhookId = message.webhookId
                ? SnowflakeValue.toJSON(message.webhookId)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageUpdateEvent_PayloadData,
        };
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
            message.attachments = MessageUpdateEvent_PayloadData_MessageAttachmentListValue.fromPartial(object.attachments);
        }
        if (object.embeds !== undefined && object.embeds !== null) {
            message.embeds = MessageUpdateEvent_PayloadData_MessageEmbedListValue.fromPartial(object.embeds);
        }
        if (object.mentions !== undefined && object.mentions !== null) {
            message.mentions = MessageUpdateEvent_PayloadData_MessageMentionListValue.fromPartial(object.mentions);
        }
        if (object.reactions !== undefined && object.reactions !== null) {
            message.reactions = MessageUpdateEvent_PayloadData_MessageReactionListValue.fromPartial(object.reactions);
        }
        if (object.pinned !== undefined && object.pinned !== null) {
            message.pinned = object.pinned;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = MessageUpdateEvent_PayloadData_MessageTypeValue.fromPartial(object.type);
        }
        if (object.mentionChannels !== undefined &&
            object.mentionChannels !== null) {
            message.mentionChannels = MessageUpdateEvent_PayloadData_MessageMentionChannelListValue.fromPartial(object.mentionChannels);
        }
        if (object.flags !== undefined && object.flags !== null) {
            message.flags = object.flags;
        }
        if (object.activity !== undefined && object.activity !== null) {
            message.activity = MessageUpdateEvent_PayloadData_MessageActivityValue.fromPartial(object.activity);
        }
        if (object.application !== undefined && object.application !== null) {
            message.application = MessageUpdateEvent_PayloadData_MessageApplicationValue.fromPartial(object.application);
        }
        if (object.messageReference !== undefined &&
            object.messageReference !== null) {
            message.messageReference = MessageUpdateEvent_PayloadData_MessageReferenceValue.fromPartial(object.messageReference);
        }
        if (object.author !== undefined && object.author !== null) {
            message.author = MessageUpdateEvent_PayloadData_MessageAuthorValue.fromPartial(object.author);
        }
        if (object.member !== undefined && object.member !== null) {
            message.member = MessageUpdateEvent_PayloadData_MessageMemberValue.fromPartial(object.member);
        }
        if (object.webhookId !== undefined && object.webhookId !== null) {
            message.webhookId = SnowflakeValue.fromPartial(object.webhookId);
        }
        return message;
    },
};
messageTypeRegistry.set(MessageUpdateEvent_PayloadData.$type, MessageUpdateEvent_PayloadData);
const baseMessageUpdateEvent_PayloadData_MessageAttachmentListValue = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageAttachmentListValue",
};
export const MessageUpdateEvent_PayloadData_MessageAttachmentListValue = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageAttachmentListValue",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.values) {
            MessageData_MessageAttachmentData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageUpdateEvent_PayloadData_MessageAttachmentListValue,
        };
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(MessageData_MessageAttachmentData.decode(reader, reader.uint32()));
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
            ...baseMessageUpdateEvent_PayloadData_MessageAttachmentListValue,
        };
        message.values = [];
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(MessageData_MessageAttachmentData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.values) {
            obj.values = message.values.map((e) => e ? MessageData_MessageAttachmentData.toJSON(e) : undefined);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageUpdateEvent_PayloadData_MessageAttachmentListValue,
        };
        message.values = [];
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(MessageData_MessageAttachmentData.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(MessageUpdateEvent_PayloadData_MessageAttachmentListValue.$type, MessageUpdateEvent_PayloadData_MessageAttachmentListValue);
const baseMessageUpdateEvent_PayloadData_MessageEmbedListValue = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageEmbedListValue",
};
export const MessageUpdateEvent_PayloadData_MessageEmbedListValue = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageEmbedListValue",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.values) {
            MessageData_MessageEmbedData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageUpdateEvent_PayloadData_MessageEmbedListValue,
        };
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(MessageData_MessageEmbedData.decode(reader, reader.uint32()));
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
            ...baseMessageUpdateEvent_PayloadData_MessageEmbedListValue,
        };
        message.values = [];
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(MessageData_MessageEmbedData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.values) {
            obj.values = message.values.map((e) => e ? MessageData_MessageEmbedData.toJSON(e) : undefined);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageUpdateEvent_PayloadData_MessageEmbedListValue,
        };
        message.values = [];
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(MessageData_MessageEmbedData.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(MessageUpdateEvent_PayloadData_MessageEmbedListValue.$type, MessageUpdateEvent_PayloadData_MessageEmbedListValue);
const baseMessageUpdateEvent_PayloadData_MessageMentionListValue = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageMentionListValue",
};
export const MessageUpdateEvent_PayloadData_MessageMentionListValue = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageMentionListValue",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.values) {
            MessageData_MessageMentionData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageUpdateEvent_PayloadData_MessageMentionListValue,
        };
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(MessageData_MessageMentionData.decode(reader, reader.uint32()));
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
            ...baseMessageUpdateEvent_PayloadData_MessageMentionListValue,
        };
        message.values = [];
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(MessageData_MessageMentionData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.values) {
            obj.values = message.values.map((e) => e ? MessageData_MessageMentionData.toJSON(e) : undefined);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageUpdateEvent_PayloadData_MessageMentionListValue,
        };
        message.values = [];
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(MessageData_MessageMentionData.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(MessageUpdateEvent_PayloadData_MessageMentionListValue.$type, MessageUpdateEvent_PayloadData_MessageMentionListValue);
const baseMessageUpdateEvent_PayloadData_MessageReactionListValue = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageReactionListValue",
};
export const MessageUpdateEvent_PayloadData_MessageReactionListValue = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageReactionListValue",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.values) {
            MessageData_MessageReactionData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageUpdateEvent_PayloadData_MessageReactionListValue,
        };
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(MessageData_MessageReactionData.decode(reader, reader.uint32()));
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
            ...baseMessageUpdateEvent_PayloadData_MessageReactionListValue,
        };
        message.values = [];
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(MessageData_MessageReactionData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.values) {
            obj.values = message.values.map((e) => e ? MessageData_MessageReactionData.toJSON(e) : undefined);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageUpdateEvent_PayloadData_MessageReactionListValue,
        };
        message.values = [];
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(MessageData_MessageReactionData.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(MessageUpdateEvent_PayloadData_MessageReactionListValue.$type, MessageUpdateEvent_PayloadData_MessageReactionListValue);
const baseMessageUpdateEvent_PayloadData_MessageTypeValue = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageTypeValue",
    value: 0,
};
export const MessageUpdateEvent_PayloadData_MessageTypeValue = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageTypeValue",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== 0) {
            writer.uint32(8).int32(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageUpdateEvent_PayloadData_MessageTypeValue,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.int32();
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
            ...baseMessageUpdateEvent_PayloadData_MessageTypeValue,
        };
        if (object.value !== undefined && object.value !== null) {
            message.value = messageData_MessageTypeFromJSON(object.value);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined &&
            (obj.value = messageData_MessageTypeToJSON(message.value));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageUpdateEvent_PayloadData_MessageTypeValue,
        };
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
};
messageTypeRegistry.set(MessageUpdateEvent_PayloadData_MessageTypeValue.$type, MessageUpdateEvent_PayloadData_MessageTypeValue);
const baseMessageUpdateEvent_PayloadData_MessageMentionChannelListValue = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageMentionChannelListValue",
};
export const MessageUpdateEvent_PayloadData_MessageMentionChannelListValue = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageMentionChannelListValue",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.values) {
            MessageData_MessageMentionChannelData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageUpdateEvent_PayloadData_MessageMentionChannelListValue,
        };
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(MessageData_MessageMentionChannelData.decode(reader, reader.uint32()));
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
            ...baseMessageUpdateEvent_PayloadData_MessageMentionChannelListValue,
        };
        message.values = [];
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(MessageData_MessageMentionChannelData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.values) {
            obj.values = message.values.map((e) => e ? MessageData_MessageMentionChannelData.toJSON(e) : undefined);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageUpdateEvent_PayloadData_MessageMentionChannelListValue,
        };
        message.values = [];
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(MessageData_MessageMentionChannelData.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(MessageUpdateEvent_PayloadData_MessageMentionChannelListValue.$type, MessageUpdateEvent_PayloadData_MessageMentionChannelListValue);
const baseMessageUpdateEvent_PayloadData_MessageActivityValue = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageActivityValue",
};
export const MessageUpdateEvent_PayloadData_MessageActivityValue = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageActivityValue",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== undefined) {
            MessageData_MessageActivityData.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageUpdateEvent_PayloadData_MessageActivityValue,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = MessageData_MessageActivityData.decode(reader, reader.uint32());
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
            ...baseMessageUpdateEvent_PayloadData_MessageActivityValue,
        };
        if (object.value !== undefined && object.value !== null) {
            message.value = MessageData_MessageActivityData.fromJSON(object.value);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined &&
            (obj.value = message.value
                ? MessageData_MessageActivityData.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageUpdateEvent_PayloadData_MessageActivityValue,
        };
        if (object.value !== undefined && object.value !== null) {
            message.value = MessageData_MessageActivityData.fromPartial(object.value);
        }
        return message;
    },
};
messageTypeRegistry.set(MessageUpdateEvent_PayloadData_MessageActivityValue.$type, MessageUpdateEvent_PayloadData_MessageActivityValue);
const baseMessageUpdateEvent_PayloadData_MessageApplicationValue = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageApplicationValue",
};
export const MessageUpdateEvent_PayloadData_MessageApplicationValue = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageApplicationValue",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== undefined) {
            MessageData_MessageApplicationData.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageUpdateEvent_PayloadData_MessageApplicationValue,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = MessageData_MessageApplicationData.decode(reader, reader.uint32());
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
            ...baseMessageUpdateEvent_PayloadData_MessageApplicationValue,
        };
        if (object.value !== undefined && object.value !== null) {
            message.value = MessageData_MessageApplicationData.fromJSON(object.value);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined &&
            (obj.value = message.value
                ? MessageData_MessageApplicationData.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageUpdateEvent_PayloadData_MessageApplicationValue,
        };
        if (object.value !== undefined && object.value !== null) {
            message.value = MessageData_MessageApplicationData.fromPartial(object.value);
        }
        return message;
    },
};
messageTypeRegistry.set(MessageUpdateEvent_PayloadData_MessageApplicationValue.$type, MessageUpdateEvent_PayloadData_MessageApplicationValue);
const baseMessageUpdateEvent_PayloadData_MessageReferenceValue = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageReferenceValue",
};
export const MessageUpdateEvent_PayloadData_MessageReferenceValue = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageReferenceValue",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== undefined) {
            MessageData_MessageReferenceData.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageUpdateEvent_PayloadData_MessageReferenceValue,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = MessageData_MessageReferenceData.decode(reader, reader.uint32());
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
            ...baseMessageUpdateEvent_PayloadData_MessageReferenceValue,
        };
        if (object.value !== undefined && object.value !== null) {
            message.value = MessageData_MessageReferenceData.fromJSON(object.value);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined &&
            (obj.value = message.value
                ? MessageData_MessageReferenceData.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageUpdateEvent_PayloadData_MessageReferenceValue,
        };
        if (object.value !== undefined && object.value !== null) {
            message.value = MessageData_MessageReferenceData.fromPartial(object.value);
        }
        return message;
    },
};
messageTypeRegistry.set(MessageUpdateEvent_PayloadData_MessageReferenceValue.$type, MessageUpdateEvent_PayloadData_MessageReferenceValue);
const baseMessageUpdateEvent_PayloadData_MessageAuthorValue = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageAuthorValue",
};
export const MessageUpdateEvent_PayloadData_MessageAuthorValue = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageAuthorValue",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== undefined) {
            UserData.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageUpdateEvent_PayloadData_MessageAuthorValue,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = UserData.decode(reader, reader.uint32());
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
            ...baseMessageUpdateEvent_PayloadData_MessageAuthorValue,
        };
        if (object.value !== undefined && object.value !== null) {
            message.value = UserData.fromJSON(object.value);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined &&
            (obj.value = message.value ? UserData.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageUpdateEvent_PayloadData_MessageAuthorValue,
        };
        if (object.value !== undefined && object.value !== null) {
            message.value = UserData.fromPartial(object.value);
        }
        return message;
    },
};
messageTypeRegistry.set(MessageUpdateEvent_PayloadData_MessageAuthorValue.$type, MessageUpdateEvent_PayloadData_MessageAuthorValue);
const baseMessageUpdateEvent_PayloadData_MessageMemberValue = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageMemberValue",
};
export const MessageUpdateEvent_PayloadData_MessageMemberValue = {
    $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageMemberValue",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== undefined) {
            MemberData.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageUpdateEvent_PayloadData_MessageMemberValue,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = MemberData.decode(reader, reader.uint32());
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
            ...baseMessageUpdateEvent_PayloadData_MessageMemberValue,
        };
        if (object.value !== undefined && object.value !== null) {
            message.value = MemberData.fromJSON(object.value);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined &&
            (obj.value = message.value
                ? MemberData.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageUpdateEvent_PayloadData_MessageMemberValue,
        };
        if (object.value !== undefined && object.value !== null) {
            message.value = MemberData.fromPartial(object.value);
        }
        return message;
    },
};
messageTypeRegistry.set(MessageUpdateEvent_PayloadData_MessageMemberValue.$type, MessageUpdateEvent_PayloadData_MessageMemberValue);
const baseMessageDeleteEvent = {
    $type: "pylon.discord.v1.event.MessageDeleteEvent",
};
export const MessageDeleteEvent = {
    $type: "pylon.discord.v1.event.MessageDeleteEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            MessageDeleteEvent_PayloadData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        if (message.previouslyCached !== undefined) {
            MessageData.encode(message.previouslyCached, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMessageDeleteEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = MessageDeleteEvent_PayloadData.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.previouslyCached = MessageData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMessageDeleteEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = MessageDeleteEvent_PayloadData.fromJSON(object.payload);
        }
        if (object.previouslyCached !== undefined &&
            object.previouslyCached !== null) {
            message.previouslyCached = MessageData.fromJSON(object.previouslyCached);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? MessageDeleteEvent_PayloadData.toJSON(message.payload)
                : undefined);
        message.previouslyCached !== undefined &&
            (obj.previouslyCached = message.previouslyCached
                ? MessageData.toJSON(message.previouslyCached)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMessageDeleteEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = MessageDeleteEvent_PayloadData.fromPartial(object.payload);
        }
        if (object.previouslyCached !== undefined &&
            object.previouslyCached !== null) {
            message.previouslyCached = MessageData.fromPartial(object.previouslyCached);
        }
        return message;
    },
};
messageTypeRegistry.set(MessageDeleteEvent.$type, MessageDeleteEvent);
const baseMessageDeleteEvent_PayloadData = {
    $type: "pylon.discord.v1.event.MessageDeleteEvent.PayloadData",
    id: "0",
    channelId: "0",
    guildId: "0",
};
export const MessageDeleteEvent_PayloadData = {
    $type: "pylon.discord.v1.event.MessageDeleteEvent.PayloadData",
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageDeleteEvent_PayloadData,
        };
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMessageDeleteEvent_PayloadData,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
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
        message.id !== undefined && (obj.id = message.id);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.guildId !== undefined && (obj.guildId = message.guildId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageDeleteEvent_PayloadData,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
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
messageTypeRegistry.set(MessageDeleteEvent_PayloadData.$type, MessageDeleteEvent_PayloadData);
const baseMessageDeleteBulkEvent = {
    $type: "pylon.discord.v1.event.MessageDeleteBulkEvent",
};
export const MessageDeleteBulkEvent = {
    $type: "pylon.discord.v1.event.MessageDeleteBulkEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            MessageDeleteBulkEvent_PayloadData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMessageDeleteBulkEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = MessageDeleteBulkEvent_PayloadData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMessageDeleteBulkEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = MessageDeleteBulkEvent_PayloadData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? MessageDeleteBulkEvent_PayloadData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMessageDeleteBulkEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = MessageDeleteBulkEvent_PayloadData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(MessageDeleteBulkEvent.$type, MessageDeleteBulkEvent);
const baseMessageDeleteBulkEvent_PayloadData = {
    $type: "pylon.discord.v1.event.MessageDeleteBulkEvent.PayloadData",
    ids: "0",
    channelId: "0",
    guildId: "0",
};
export const MessageDeleteBulkEvent_PayloadData = {
    $type: "pylon.discord.v1.event.MessageDeleteBulkEvent.PayloadData",
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.ids) {
            writer.fixed64(v);
        }
        writer.ldelim();
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
            ...baseMessageDeleteBulkEvent_PayloadData,
        };
        message.ids = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.ids.push(longToString(reader.fixed64()));
                        }
                    }
                    else {
                        message.ids.push(longToString(reader.fixed64()));
                    }
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
            ...baseMessageDeleteBulkEvent_PayloadData,
        };
        message.ids = [];
        if (object.ids !== undefined && object.ids !== null) {
            for (const e of object.ids) {
                message.ids.push(String(e));
            }
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
        if (message.ids) {
            obj.ids = message.ids.map((e) => e);
        }
        else {
            obj.ids = [];
        }
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.guildId !== undefined && (obj.guildId = message.guildId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageDeleteBulkEvent_PayloadData,
        };
        message.ids = [];
        if (object.ids !== undefined && object.ids !== null) {
            for (const e of object.ids) {
                message.ids.push(e);
            }
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
messageTypeRegistry.set(MessageDeleteBulkEvent_PayloadData.$type, MessageDeleteBulkEvent_PayloadData);
const baseMessageReactionAddEvent = {
    $type: "pylon.discord.v1.event.MessageReactionAddEvent",
};
export const MessageReactionAddEvent = {
    $type: "pylon.discord.v1.event.MessageReactionAddEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            MessageReactionAddEvent_PayloadData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageReactionAddEvent,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = MessageReactionAddEvent_PayloadData.decode(reader, reader.uint32());
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
            ...baseMessageReactionAddEvent,
        };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = MessageReactionAddEvent_PayloadData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? MessageReactionAddEvent_PayloadData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageReactionAddEvent,
        };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = MessageReactionAddEvent_PayloadData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(MessageReactionAddEvent.$type, MessageReactionAddEvent);
const baseMessageReactionAddEvent_PayloadData = {
    $type: "pylon.discord.v1.event.MessageReactionAddEvent.PayloadData",
    userId: "0",
    channelId: "0",
    messageId: "0",
    guildId: "0",
};
export const MessageReactionAddEvent_PayloadData = {
    $type: "pylon.discord.v1.event.MessageReactionAddEvent.PayloadData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.userId !== "0") {
            writer.uint32(9).fixed64(message.userId);
        }
        if (message.channelId !== "0") {
            writer.uint32(17).fixed64(message.channelId);
        }
        if (message.messageId !== "0") {
            writer.uint32(25).fixed64(message.messageId);
        }
        if (message.guildId !== "0") {
            writer.uint32(33).fixed64(message.guildId);
        }
        if (message.emoji !== undefined) {
            MessageData_MessageReactionEmojiData.encode(message.emoji, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageReactionAddEvent_PayloadData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 3:
                    message.messageId = longToString(reader.fixed64());
                    break;
                case 4:
                    message.guildId = longToString(reader.fixed64());
                    break;
                case 6:
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
            ...baseMessageReactionAddEvent_PayloadData,
        };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = String(object.userId);
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = String(object.messageId);
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = MessageData_MessageReactionEmojiData.fromJSON(object.emoji);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.messageId !== undefined && (obj.messageId = message.messageId);
        message.guildId !== undefined && (obj.guildId = message.guildId);
        message.emoji !== undefined &&
            (obj.emoji = message.emoji
                ? MessageData_MessageReactionEmojiData.toJSON(message.emoji)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageReactionAddEvent_PayloadData,
        };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = object.messageId;
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = MessageData_MessageReactionEmojiData.fromPartial(object.emoji);
        }
        return message;
    },
};
messageTypeRegistry.set(MessageReactionAddEvent_PayloadData.$type, MessageReactionAddEvent_PayloadData);
const baseMessageReactionRemoveEvent = {
    $type: "pylon.discord.v1.event.MessageReactionRemoveEvent",
};
export const MessageReactionRemoveEvent = {
    $type: "pylon.discord.v1.event.MessageReactionRemoveEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            MessageReactionRemoveEvent_PayloadData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageReactionRemoveEvent,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = MessageReactionRemoveEvent_PayloadData.decode(reader, reader.uint32());
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
            ...baseMessageReactionRemoveEvent,
        };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = MessageReactionRemoveEvent_PayloadData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? MessageReactionRemoveEvent_PayloadData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageReactionRemoveEvent,
        };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = MessageReactionRemoveEvent_PayloadData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(MessageReactionRemoveEvent.$type, MessageReactionRemoveEvent);
const baseMessageReactionRemoveEvent_PayloadData = {
    $type: "pylon.discord.v1.event.MessageReactionRemoveEvent.PayloadData",
    userId: "0",
    channelId: "0",
    messageId: "0",
    guildId: "0",
};
export const MessageReactionRemoveEvent_PayloadData = {
    $type: "pylon.discord.v1.event.MessageReactionRemoveEvent.PayloadData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.userId !== "0") {
            writer.uint32(9).fixed64(message.userId);
        }
        if (message.channelId !== "0") {
            writer.uint32(17).fixed64(message.channelId);
        }
        if (message.messageId !== "0") {
            writer.uint32(25).fixed64(message.messageId);
        }
        if (message.guildId !== "0") {
            writer.uint32(33).fixed64(message.guildId);
        }
        if (message.emoji !== undefined) {
            MessageData_MessageReactionEmojiData.encode(message.emoji, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageReactionRemoveEvent_PayloadData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 3:
                    message.messageId = longToString(reader.fixed64());
                    break;
                case 4:
                    message.guildId = longToString(reader.fixed64());
                    break;
                case 5:
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
            ...baseMessageReactionRemoveEvent_PayloadData,
        };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = String(object.userId);
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = String(object.messageId);
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = MessageData_MessageReactionEmojiData.fromJSON(object.emoji);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.messageId !== undefined && (obj.messageId = message.messageId);
        message.guildId !== undefined && (obj.guildId = message.guildId);
        message.emoji !== undefined &&
            (obj.emoji = message.emoji
                ? MessageData_MessageReactionEmojiData.toJSON(message.emoji)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageReactionRemoveEvent_PayloadData,
        };
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = object.messageId;
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = MessageData_MessageReactionEmojiData.fromPartial(object.emoji);
        }
        return message;
    },
};
messageTypeRegistry.set(MessageReactionRemoveEvent_PayloadData.$type, MessageReactionRemoveEvent_PayloadData);
const baseMessageReactionRemoveAllEvent = {
    $type: "pylon.discord.v1.event.MessageReactionRemoveAllEvent",
};
export const MessageReactionRemoveAllEvent = {
    $type: "pylon.discord.v1.event.MessageReactionRemoveAllEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            MessageReactionRemoveAllEvent_PayloadData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageReactionRemoveAllEvent,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = MessageReactionRemoveAllEvent_PayloadData.decode(reader, reader.uint32());
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
            ...baseMessageReactionRemoveAllEvent,
        };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = MessageReactionRemoveAllEvent_PayloadData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? MessageReactionRemoveAllEvent_PayloadData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageReactionRemoveAllEvent,
        };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = MessageReactionRemoveAllEvent_PayloadData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(MessageReactionRemoveAllEvent.$type, MessageReactionRemoveAllEvent);
const baseMessageReactionRemoveAllEvent_PayloadData = {
    $type: "pylon.discord.v1.event.MessageReactionRemoveAllEvent.PayloadData",
    channelId: "0",
    messageId: "0",
    guildId: "0",
};
export const MessageReactionRemoveAllEvent_PayloadData = {
    $type: "pylon.discord.v1.event.MessageReactionRemoveAllEvent.PayloadData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.messageId !== "0") {
            writer.uint32(17).fixed64(message.messageId);
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
            ...baseMessageReactionRemoveAllEvent_PayloadData,
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
            ...baseMessageReactionRemoveAllEvent_PayloadData,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = String(object.messageId);
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.messageId !== undefined && (obj.messageId = message.messageId);
        message.guildId !== undefined && (obj.guildId = message.guildId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageReactionRemoveAllEvent_PayloadData,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = object.messageId;
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        return message;
    },
};
messageTypeRegistry.set(MessageReactionRemoveAllEvent_PayloadData.$type, MessageReactionRemoveAllEvent_PayloadData);
const baseMessageReactionRemoveEmojiEvent = {
    $type: "pylon.discord.v1.event.MessageReactionRemoveEmojiEvent",
};
export const MessageReactionRemoveEmojiEvent = {
    $type: "pylon.discord.v1.event.MessageReactionRemoveEmojiEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            MessageReactionRemoveEmojiEvent_PayloadData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageReactionRemoveEmojiEvent,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = MessageReactionRemoveEmojiEvent_PayloadData.decode(reader, reader.uint32());
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
            ...baseMessageReactionRemoveEmojiEvent,
        };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = MessageReactionRemoveEmojiEvent_PayloadData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? MessageReactionRemoveEmojiEvent_PayloadData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageReactionRemoveEmojiEvent,
        };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = MessageReactionRemoveEmojiEvent_PayloadData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(MessageReactionRemoveEmojiEvent.$type, MessageReactionRemoveEmojiEvent);
const baseMessageReactionRemoveEmojiEvent_PayloadData = {
    $type: "pylon.discord.v1.event.MessageReactionRemoveEmojiEvent.PayloadData",
    channelId: "0",
    messageId: "0",
    guildId: "0",
};
export const MessageReactionRemoveEmojiEvent_PayloadData = {
    $type: "pylon.discord.v1.event.MessageReactionRemoveEmojiEvent.PayloadData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.messageId !== "0") {
            writer.uint32(17).fixed64(message.messageId);
        }
        if (message.guildId !== "0") {
            writer.uint32(25).fixed64(message.guildId);
        }
        if (message.emoji !== undefined) {
            MessageData_MessageReactionEmojiData.encode(message.emoji, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMessageReactionRemoveEmojiEvent_PayloadData,
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
                    message.guildId = longToString(reader.fixed64());
                    break;
                case 4:
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
            ...baseMessageReactionRemoveEmojiEvent_PayloadData,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = String(object.messageId);
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = MessageData_MessageReactionEmojiData.fromJSON(object.emoji);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.messageId !== undefined && (obj.messageId = message.messageId);
        message.guildId !== undefined && (obj.guildId = message.guildId);
        message.emoji !== undefined &&
            (obj.emoji = message.emoji
                ? MessageData_MessageReactionEmojiData.toJSON(message.emoji)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMessageReactionRemoveEmojiEvent_PayloadData,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = object.messageId;
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        if (object.emoji !== undefined && object.emoji !== null) {
            message.emoji = MessageData_MessageReactionEmojiData.fromPartial(object.emoji);
        }
        return message;
    },
};
messageTypeRegistry.set(MessageReactionRemoveEmojiEvent_PayloadData.$type, MessageReactionRemoveEmojiEvent_PayloadData);
const baseTypingStartEvent = {
    $type: "pylon.discord.v1.event.TypingStartEvent",
};
export const TypingStartEvent = {
    $type: "pylon.discord.v1.event.TypingStartEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            TypingStartEvent_PayloadData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTypingStartEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = TypingStartEvent_PayloadData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTypingStartEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = TypingStartEvent_PayloadData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? TypingStartEvent_PayloadData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTypingStartEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = TypingStartEvent_PayloadData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(TypingStartEvent.$type, TypingStartEvent);
const baseTypingStartEvent_PayloadData = {
    $type: "pylon.discord.v1.event.TypingStartEvent.PayloadData",
    channelId: "0",
    userId: "0",
};
export const TypingStartEvent_PayloadData = {
    $type: "pylon.discord.v1.event.TypingStartEvent.PayloadData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.userId !== "0") {
            writer.uint32(17).fixed64(message.userId);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        if (message.member !== undefined) {
            MemberData.encode(message.member, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTypingStartEvent_PayloadData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.userId = longToString(reader.fixed64());
                    break;
                case 3:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
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
        const message = {
            ...baseTypingStartEvent_PayloadData,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = String(object.userId);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromJsonTimestamp(object.timestamp);
        }
        if (object.member !== undefined && object.member !== null) {
            message.member = MemberData.fromJSON(object.member);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.userId !== undefined && (obj.userId = message.userId);
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        message.member !== undefined &&
            (obj.member = message.member
                ? MemberData.toJSON(message.member)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseTypingStartEvent_PayloadData,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        if (object.member !== undefined && object.member !== null) {
            message.member = MemberData.fromPartial(object.member);
        }
        return message;
    },
};
messageTypeRegistry.set(TypingStartEvent_PayloadData.$type, TypingStartEvent_PayloadData);
const baseVoiceStateUpdateEvent = {
    $type: "pylon.discord.v1.event.VoiceStateUpdateEvent",
};
export const VoiceStateUpdateEvent = {
    $type: "pylon.discord.v1.event.VoiceStateUpdateEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            VoiceStateData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        if (message.previouslyCached !== undefined) {
            VoiceStateData.encode(message.previouslyCached, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVoiceStateUpdateEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = VoiceStateData.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.previouslyCached = VoiceStateData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseVoiceStateUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = VoiceStateData.fromJSON(object.payload);
        }
        if (object.previouslyCached !== undefined &&
            object.previouslyCached !== null) {
            message.previouslyCached = VoiceStateData.fromJSON(object.previouslyCached);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? VoiceStateData.toJSON(message.payload)
                : undefined);
        message.previouslyCached !== undefined &&
            (obj.previouslyCached = message.previouslyCached
                ? VoiceStateData.toJSON(message.previouslyCached)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseVoiceStateUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = VoiceStateData.fromPartial(object.payload);
        }
        if (object.previouslyCached !== undefined &&
            object.previouslyCached !== null) {
            message.previouslyCached = VoiceStateData.fromPartial(object.previouslyCached);
        }
        return message;
    },
};
messageTypeRegistry.set(VoiceStateUpdateEvent.$type, VoiceStateUpdateEvent);
const baseVoiceServerUpdateEvent = {
    $type: "pylon.discord.v1.event.VoiceServerUpdateEvent",
};
export const VoiceServerUpdateEvent = {
    $type: "pylon.discord.v1.event.VoiceServerUpdateEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            VoiceServerUpdateEvent_PayloadData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVoiceServerUpdateEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = VoiceServerUpdateEvent_PayloadData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseVoiceServerUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = VoiceServerUpdateEvent_PayloadData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? VoiceServerUpdateEvent_PayloadData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseVoiceServerUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = VoiceServerUpdateEvent_PayloadData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(VoiceServerUpdateEvent.$type, VoiceServerUpdateEvent);
const baseVoiceServerUpdateEvent_PayloadData = {
    $type: "pylon.discord.v1.event.VoiceServerUpdateEvent.PayloadData",
    guildId: "0",
    token: "",
    endpoint: "",
};
export const VoiceServerUpdateEvent_PayloadData = {
    $type: "pylon.discord.v1.event.VoiceServerUpdateEvent.PayloadData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.guildId !== "0") {
            writer.uint32(9).fixed64(message.guildId);
        }
        if (message.token !== "") {
            writer.uint32(18).string(message.token);
        }
        if (message.endpoint !== "") {
            writer.uint32(26).string(message.endpoint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseVoiceServerUpdateEvent_PayloadData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.guildId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.token = reader.string();
                    break;
                case 3:
                    message.endpoint = reader.string();
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
            ...baseVoiceServerUpdateEvent_PayloadData,
        };
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        if (object.token !== undefined && object.token !== null) {
            message.token = String(object.token);
        }
        if (object.endpoint !== undefined && object.endpoint !== null) {
            message.endpoint = String(object.endpoint);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.guildId !== undefined && (obj.guildId = message.guildId);
        message.token !== undefined && (obj.token = message.token);
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseVoiceServerUpdateEvent_PayloadData,
        };
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        if (object.token !== undefined && object.token !== null) {
            message.token = object.token;
        }
        if (object.endpoint !== undefined && object.endpoint !== null) {
            message.endpoint = object.endpoint;
        }
        return message;
    },
};
messageTypeRegistry.set(VoiceServerUpdateEvent_PayloadData.$type, VoiceServerUpdateEvent_PayloadData);
const baseInviteCreateEvent = {
    $type: "pylon.discord.v1.event.InviteCreateEvent",
};
export const InviteCreateEvent = {
    $type: "pylon.discord.v1.event.InviteCreateEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            InviteCreateEvent_PayloadData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInviteCreateEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = InviteCreateEvent_PayloadData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseInviteCreateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = InviteCreateEvent_PayloadData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? InviteCreateEvent_PayloadData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseInviteCreateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = InviteCreateEvent_PayloadData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(InviteCreateEvent.$type, InviteCreateEvent);
const baseInviteCreateEvent_PayloadData = {
    $type: "pylon.discord.v1.event.InviteCreateEvent.PayloadData",
    channelId: "0",
    code: "",
    maxAge: "0",
    maxUses: "0",
    targetUserType: 0,
    temporary: false,
    uses: "0",
};
export const InviteCreateEvent_PayloadData = {
    $type: "pylon.discord.v1.event.InviteCreateEvent.PayloadData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channelId !== "0") {
            writer.uint32(9).fixed64(message.channelId);
        }
        if (message.code !== "") {
            writer.uint32(18).string(message.code);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.guildId !== undefined) {
            SnowflakeValue.encode(message.guildId, writer.uint32(34).fork()).ldelim();
        }
        if (message.inviter !== undefined) {
            UserData.encode(message.inviter, writer.uint32(42).fork()).ldelim();
        }
        if (message.maxAge !== "0") {
            writer.uint32(48).uint64(message.maxAge);
        }
        if (message.maxUses !== "0") {
            writer.uint32(56).uint64(message.maxUses);
        }
        if (message.targetUser !== undefined) {
            UserData.encode(message.targetUser, writer.uint32(66).fork()).ldelim();
        }
        if (message.targetUserType !== 0) {
            writer.uint32(72).int32(message.targetUserType);
        }
        if (message.temporary === true) {
            writer.uint32(80).bool(message.temporary);
        }
        if (message.uses !== "0") {
            writer.uint32(88).uint64(message.uses);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseInviteCreateEvent_PayloadData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = longToString(reader.fixed64());
                    break;
                case 2:
                    message.code = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.guildId = SnowflakeValue.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.inviter = UserData.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.maxAge = longToString(reader.uint64());
                    break;
                case 7:
                    message.maxUses = longToString(reader.uint64());
                    break;
                case 8:
                    message.targetUser = UserData.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.targetUserType = reader.int32();
                    break;
                case 10:
                    message.temporary = reader.bool();
                    break;
                case 11:
                    message.uses = longToString(reader.uint64());
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
            ...baseInviteCreateEvent_PayloadData,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = SnowflakeValue.fromJSON(object.guildId);
        }
        if (object.inviter !== undefined && object.inviter !== null) {
            message.inviter = UserData.fromJSON(object.inviter);
        }
        if (object.maxAge !== undefined && object.maxAge !== null) {
            message.maxAge = String(object.maxAge);
        }
        if (object.maxUses !== undefined && object.maxUses !== null) {
            message.maxUses = String(object.maxUses);
        }
        if (object.targetUser !== undefined && object.targetUser !== null) {
            message.targetUser = UserData.fromJSON(object.targetUser);
        }
        if (object.targetUserType !== undefined && object.targetUserType !== null) {
            message.targetUserType = inviteData_InviteTargetUserTypeFromJSON(object.targetUserType);
        }
        if (object.temporary !== undefined && object.temporary !== null) {
            message.temporary = Boolean(object.temporary);
        }
        if (object.uses !== undefined && object.uses !== null) {
            message.uses = String(object.uses);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.code !== undefined && (obj.code = message.code);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.guildId !== undefined &&
            (obj.guildId = message.guildId
                ? SnowflakeValue.toJSON(message.guildId)
                : undefined);
        message.inviter !== undefined &&
            (obj.inviter = message.inviter
                ? UserData.toJSON(message.inviter)
                : undefined);
        message.maxAge !== undefined && (obj.maxAge = message.maxAge);
        message.maxUses !== undefined && (obj.maxUses = message.maxUses);
        message.targetUser !== undefined &&
            (obj.targetUser = message.targetUser
                ? UserData.toJSON(message.targetUser)
                : undefined);
        message.targetUserType !== undefined &&
            (obj.targetUserType = inviteData_InviteTargetUserTypeToJSON(message.targetUserType));
        message.temporary !== undefined && (obj.temporary = message.temporary);
        message.uses !== undefined && (obj.uses = message.uses);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseInviteCreateEvent_PayloadData,
        };
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = SnowflakeValue.fromPartial(object.guildId);
        }
        if (object.inviter !== undefined && object.inviter !== null) {
            message.inviter = UserData.fromPartial(object.inviter);
        }
        if (object.maxAge !== undefined && object.maxAge !== null) {
            message.maxAge = object.maxAge;
        }
        if (object.maxUses !== undefined && object.maxUses !== null) {
            message.maxUses = object.maxUses;
        }
        if (object.targetUser !== undefined && object.targetUser !== null) {
            message.targetUser = UserData.fromPartial(object.targetUser);
        }
        if (object.targetUserType !== undefined && object.targetUserType !== null) {
            message.targetUserType = object.targetUserType;
        }
        if (object.temporary !== undefined && object.temporary !== null) {
            message.temporary = object.temporary;
        }
        if (object.uses !== undefined && object.uses !== null) {
            message.uses = object.uses;
        }
        return message;
    },
};
messageTypeRegistry.set(InviteCreateEvent_PayloadData.$type, InviteCreateEvent_PayloadData);
const baseInviteDeleteEvent = {
    $type: "pylon.discord.v1.event.InviteDeleteEvent",
};
export const InviteDeleteEvent = {
    $type: "pylon.discord.v1.event.InviteDeleteEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            InviteDeleteEvent_PayloadData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInviteDeleteEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = InviteDeleteEvent_PayloadData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseInviteDeleteEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = InviteDeleteEvent_PayloadData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? InviteDeleteEvent_PayloadData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseInviteDeleteEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = InviteDeleteEvent_PayloadData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(InviteDeleteEvent.$type, InviteDeleteEvent);
const baseInviteDeleteEvent_PayloadData = {
    $type: "pylon.discord.v1.event.InviteDeleteEvent.PayloadData",
    guildId: "0",
    channelId: "0",
    code: "",
};
export const InviteDeleteEvent_PayloadData = {
    $type: "pylon.discord.v1.event.InviteDeleteEvent.PayloadData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.guildId !== "0") {
            writer.uint32(9).fixed64(message.guildId);
        }
        if (message.channelId !== "0") {
            writer.uint32(17).fixed64(message.channelId);
        }
        if (message.code !== "") {
            writer.uint32(26).string(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseInviteDeleteEvent_PayloadData,
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
                    message.code = reader.string();
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
            ...baseInviteDeleteEvent_PayloadData,
        };
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = String(object.channelId);
        }
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.guildId !== undefined && (obj.guildId = message.guildId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.code !== undefined && (obj.code = message.code);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseInviteDeleteEvent_PayloadData,
        };
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        return message;
    },
};
messageTypeRegistry.set(InviteDeleteEvent_PayloadData.$type, InviteDeleteEvent_PayloadData);
const baseGuildBanAddEvent = {
    $type: "pylon.discord.v1.event.GuildBanAddEvent",
};
export const GuildBanAddEvent = {
    $type: "pylon.discord.v1.event.GuildBanAddEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            GuildBanAddEvent_PayloadData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGuildBanAddEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = GuildBanAddEvent_PayloadData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGuildBanAddEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = GuildBanAddEvent_PayloadData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? GuildBanAddEvent_PayloadData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGuildBanAddEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = GuildBanAddEvent_PayloadData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(GuildBanAddEvent.$type, GuildBanAddEvent);
const baseGuildBanAddEvent_PayloadData = {
    $type: "pylon.discord.v1.event.GuildBanAddEvent.PayloadData",
    guildId: "0",
};
export const GuildBanAddEvent_PayloadData = {
    $type: "pylon.discord.v1.event.GuildBanAddEvent.PayloadData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.guildId !== "0") {
            writer.uint32(9).fixed64(message.guildId);
        }
        if (message.user !== undefined) {
            UserData.encode(message.user, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGuildBanAddEvent_PayloadData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.guildId = longToString(reader.fixed64());
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
        const message = {
            ...baseGuildBanAddEvent_PayloadData,
        };
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        if (object.user !== undefined && object.user !== null) {
            message.user = UserData.fromJSON(object.user);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.guildId !== undefined && (obj.guildId = message.guildId);
        message.user !== undefined &&
            (obj.user = message.user ? UserData.toJSON(message.user) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGuildBanAddEvent_PayloadData,
        };
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        if (object.user !== undefined && object.user !== null) {
            message.user = UserData.fromPartial(object.user);
        }
        return message;
    },
};
messageTypeRegistry.set(GuildBanAddEvent_PayloadData.$type, GuildBanAddEvent_PayloadData);
const baseGuildBanRemoveEvent = {
    $type: "pylon.discord.v1.event.GuildBanRemoveEvent",
};
export const GuildBanRemoveEvent = {
    $type: "pylon.discord.v1.event.GuildBanRemoveEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            GuildBanRemoveEvent_PayloadData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGuildBanRemoveEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = GuildBanRemoveEvent_PayloadData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGuildBanRemoveEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = GuildBanRemoveEvent_PayloadData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? GuildBanRemoveEvent_PayloadData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGuildBanRemoveEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = GuildBanRemoveEvent_PayloadData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(GuildBanRemoveEvent.$type, GuildBanRemoveEvent);
const baseGuildBanRemoveEvent_PayloadData = {
    $type: "pylon.discord.v1.event.GuildBanRemoveEvent.PayloadData",
    guildId: "0",
};
export const GuildBanRemoveEvent_PayloadData = {
    $type: "pylon.discord.v1.event.GuildBanRemoveEvent.PayloadData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.guildId !== "0") {
            writer.uint32(9).fixed64(message.guildId);
        }
        if (message.user !== undefined) {
            UserData.encode(message.user, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGuildBanRemoveEvent_PayloadData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.guildId = longToString(reader.fixed64());
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
        const message = {
            ...baseGuildBanRemoveEvent_PayloadData,
        };
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        if (object.user !== undefined && object.user !== null) {
            message.user = UserData.fromJSON(object.user);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.guildId !== undefined && (obj.guildId = message.guildId);
        message.user !== undefined &&
            (obj.user = message.user ? UserData.toJSON(message.user) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGuildBanRemoveEvent_PayloadData,
        };
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        if (object.user !== undefined && object.user !== null) {
            message.user = UserData.fromPartial(object.user);
        }
        return message;
    },
};
messageTypeRegistry.set(GuildBanRemoveEvent_PayloadData.$type, GuildBanRemoveEvent_PayloadData);
const baseGuildEmojisUpdateEvent = {
    $type: "pylon.discord.v1.event.GuildEmojisUpdateEvent",
};
export const GuildEmojisUpdateEvent = {
    $type: "pylon.discord.v1.event.GuildEmojisUpdateEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            GuildEmojisUpdateEvent_PayloadData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        if (message.previouslyCached !== undefined) {
            GuildEmojisUpdateEvent_PayloadData.encode(message.previouslyCached, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGuildEmojisUpdateEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = GuildEmojisUpdateEvent_PayloadData.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.previouslyCached = GuildEmojisUpdateEvent_PayloadData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGuildEmojisUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = GuildEmojisUpdateEvent_PayloadData.fromJSON(object.payload);
        }
        if (object.previouslyCached !== undefined &&
            object.previouslyCached !== null) {
            message.previouslyCached = GuildEmojisUpdateEvent_PayloadData.fromJSON(object.previouslyCached);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? GuildEmojisUpdateEvent_PayloadData.toJSON(message.payload)
                : undefined);
        message.previouslyCached !== undefined &&
            (obj.previouslyCached = message.previouslyCached
                ? GuildEmojisUpdateEvent_PayloadData.toJSON(message.previouslyCached)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGuildEmojisUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = GuildEmojisUpdateEvent_PayloadData.fromPartial(object.payload);
        }
        if (object.previouslyCached !== undefined &&
            object.previouslyCached !== null) {
            message.previouslyCached = GuildEmojisUpdateEvent_PayloadData.fromPartial(object.previouslyCached);
        }
        return message;
    },
};
messageTypeRegistry.set(GuildEmojisUpdateEvent.$type, GuildEmojisUpdateEvent);
const baseGuildEmojisUpdateEvent_PayloadData = {
    $type: "pylon.discord.v1.event.GuildEmojisUpdateEvent.PayloadData",
    guildId: "0",
};
export const GuildEmojisUpdateEvent_PayloadData = {
    $type: "pylon.discord.v1.event.GuildEmojisUpdateEvent.PayloadData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.guildId !== "0") {
            writer.uint32(9).fixed64(message.guildId);
        }
        for (const v of message.emojis) {
            EmojiData.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGuildEmojisUpdateEvent_PayloadData,
        };
        message.emojis = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.guildId = longToString(reader.fixed64());
                    break;
                case 2:
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
            ...baseGuildEmojisUpdateEvent_PayloadData,
        };
        message.emojis = [];
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        if (object.emojis !== undefined && object.emojis !== null) {
            for (const e of object.emojis) {
                message.emojis.push(EmojiData.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.guildId !== undefined && (obj.guildId = message.guildId);
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
            ...baseGuildEmojisUpdateEvent_PayloadData,
        };
        message.emojis = [];
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        if (object.emojis !== undefined && object.emojis !== null) {
            for (const e of object.emojis) {
                message.emojis.push(EmojiData.fromPartial(e));
            }
        }
        return message;
    },
};
messageTypeRegistry.set(GuildEmojisUpdateEvent_PayloadData.$type, GuildEmojisUpdateEvent_PayloadData);
const baseGuildIntegrationsUpdateEvent = {
    $type: "pylon.discord.v1.event.GuildIntegrationsUpdateEvent",
};
export const GuildIntegrationsUpdateEvent = {
    $type: "pylon.discord.v1.event.GuildIntegrationsUpdateEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            GuildIntegrationsUpdateEvent_PayloadData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGuildIntegrationsUpdateEvent,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = GuildIntegrationsUpdateEvent_PayloadData.decode(reader, reader.uint32());
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
            ...baseGuildIntegrationsUpdateEvent,
        };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = GuildIntegrationsUpdateEvent_PayloadData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? GuildIntegrationsUpdateEvent_PayloadData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGuildIntegrationsUpdateEvent,
        };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = GuildIntegrationsUpdateEvent_PayloadData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(GuildIntegrationsUpdateEvent.$type, GuildIntegrationsUpdateEvent);
const baseGuildIntegrationsUpdateEvent_PayloadData = {
    $type: "pylon.discord.v1.event.GuildIntegrationsUpdateEvent.PayloadData",
    guildId: "0",
};
export const GuildIntegrationsUpdateEvent_PayloadData = {
    $type: "pylon.discord.v1.event.GuildIntegrationsUpdateEvent.PayloadData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.guildId !== "0") {
            writer.uint32(9).fixed64(message.guildId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGuildIntegrationsUpdateEvent_PayloadData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            ...baseGuildIntegrationsUpdateEvent_PayloadData,
        };
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.guildId !== undefined && (obj.guildId = message.guildId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGuildIntegrationsUpdateEvent_PayloadData,
        };
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        return message;
    },
};
messageTypeRegistry.set(GuildIntegrationsUpdateEvent_PayloadData.$type, GuildIntegrationsUpdateEvent_PayloadData);
const baseWebhooksUpdateEvent = {
    $type: "pylon.discord.v1.event.WebhooksUpdateEvent",
};
export const WebhooksUpdateEvent = {
    $type: "pylon.discord.v1.event.WebhooksUpdateEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            WebhooksUpdateEvent_PayloadData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWebhooksUpdateEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = WebhooksUpdateEvent_PayloadData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseWebhooksUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = WebhooksUpdateEvent_PayloadData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? WebhooksUpdateEvent_PayloadData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseWebhooksUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = WebhooksUpdateEvent_PayloadData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(WebhooksUpdateEvent.$type, WebhooksUpdateEvent);
const baseWebhooksUpdateEvent_PayloadData = {
    $type: "pylon.discord.v1.event.WebhooksUpdateEvent.PayloadData",
    guildId: "0",
};
export const WebhooksUpdateEvent_PayloadData = {
    $type: "pylon.discord.v1.event.WebhooksUpdateEvent.PayloadData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.guildId !== "0") {
            writer.uint32(9).fixed64(message.guildId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseWebhooksUpdateEvent_PayloadData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            ...baseWebhooksUpdateEvent_PayloadData,
        };
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.guildId !== undefined && (obj.guildId = message.guildId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseWebhooksUpdateEvent_PayloadData,
        };
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        return message;
    },
};
messageTypeRegistry.set(WebhooksUpdateEvent_PayloadData.$type, WebhooksUpdateEvent_PayloadData);
const baseIntegrationCreateEvent = {
    $type: "pylon.discord.v1.event.IntegrationCreateEvent",
};
export const IntegrationCreateEvent = {
    $type: "pylon.discord.v1.event.IntegrationCreateEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            IntegrationCreateEvent_PayloadData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIntegrationCreateEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = IntegrationCreateEvent_PayloadData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseIntegrationCreateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = IntegrationCreateEvent_PayloadData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? IntegrationCreateEvent_PayloadData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseIntegrationCreateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = IntegrationCreateEvent_PayloadData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(IntegrationCreateEvent.$type, IntegrationCreateEvent);
const baseIntegrationCreateEvent_PayloadData = {
    $type: "pylon.discord.v1.event.IntegrationCreateEvent.PayloadData",
    guildId: "0",
};
export const IntegrationCreateEvent_PayloadData = {
    $type: "pylon.discord.v1.event.IntegrationCreateEvent.PayloadData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.guildId !== "0") {
            writer.uint32(9).fixed64(message.guildId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseIntegrationCreateEvent_PayloadData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            ...baseIntegrationCreateEvent_PayloadData,
        };
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.guildId !== undefined && (obj.guildId = message.guildId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseIntegrationCreateEvent_PayloadData,
        };
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        return message;
    },
};
messageTypeRegistry.set(IntegrationCreateEvent_PayloadData.$type, IntegrationCreateEvent_PayloadData);
const baseIntegrationUpdateEvent = {
    $type: "pylon.discord.v1.event.IntegrationUpdateEvent",
};
export const IntegrationUpdateEvent = {
    $type: "pylon.discord.v1.event.IntegrationUpdateEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            IntegrationUpdateEvent_PayloadData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIntegrationUpdateEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = IntegrationUpdateEvent_PayloadData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseIntegrationUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = IntegrationUpdateEvent_PayloadData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? IntegrationUpdateEvent_PayloadData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseIntegrationUpdateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = IntegrationUpdateEvent_PayloadData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(IntegrationUpdateEvent.$type, IntegrationUpdateEvent);
const baseIntegrationUpdateEvent_PayloadData = {
    $type: "pylon.discord.v1.event.IntegrationUpdateEvent.PayloadData",
    guildId: "0",
};
export const IntegrationUpdateEvent_PayloadData = {
    $type: "pylon.discord.v1.event.IntegrationUpdateEvent.PayloadData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.guildId !== "0") {
            writer.uint32(9).fixed64(message.guildId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseIntegrationUpdateEvent_PayloadData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            ...baseIntegrationUpdateEvent_PayloadData,
        };
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.guildId !== undefined && (obj.guildId = message.guildId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseIntegrationUpdateEvent_PayloadData,
        };
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        return message;
    },
};
messageTypeRegistry.set(IntegrationUpdateEvent_PayloadData.$type, IntegrationUpdateEvent_PayloadData);
const baseIntegrationDeleteEvent = {
    $type: "pylon.discord.v1.event.IntegrationDeleteEvent",
};
export const IntegrationDeleteEvent = {
    $type: "pylon.discord.v1.event.IntegrationDeleteEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            IntegrationDeleteEvent_PayloadData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIntegrationDeleteEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = IntegrationDeleteEvent_PayloadData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseIntegrationDeleteEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = IntegrationDeleteEvent_PayloadData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? IntegrationDeleteEvent_PayloadData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseIntegrationDeleteEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = IntegrationDeleteEvent_PayloadData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(IntegrationDeleteEvent.$type, IntegrationDeleteEvent);
const baseIntegrationDeleteEvent_PayloadData = {
    $type: "pylon.discord.v1.event.IntegrationDeleteEvent.PayloadData",
    guildId: "0",
};
export const IntegrationDeleteEvent_PayloadData = {
    $type: "pylon.discord.v1.event.IntegrationDeleteEvent.PayloadData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.guildId !== "0") {
            writer.uint32(9).fixed64(message.guildId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseIntegrationDeleteEvent_PayloadData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            ...baseIntegrationDeleteEvent_PayloadData,
        };
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.guildId !== undefined && (obj.guildId = message.guildId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseIntegrationDeleteEvent_PayloadData,
        };
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        return message;
    },
};
messageTypeRegistry.set(IntegrationDeleteEvent_PayloadData.$type, IntegrationDeleteEvent_PayloadData);
const baseInteractionCreateEvent = {
    $type: "pylon.discord.v1.event.InteractionCreateEvent",
};
export const InteractionCreateEvent = {
    $type: "pylon.discord.v1.event.InteractionCreateEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== undefined) {
            EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
        }
        if (message.payload !== undefined) {
            InteractionCreateEvent_PayloadData.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInteractionCreateEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = EventScope.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.payload = InteractionCreateEvent_PayloadData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseInteractionCreateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromJSON(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = InteractionCreateEvent_PayloadData.fromJSON(object.payload);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined &&
            (obj.scope = message.scope
                ? EventScope.toJSON(message.scope)
                : undefined);
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? InteractionCreateEvent_PayloadData.toJSON(message.payload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseInteractionCreateEvent };
        if (object.scope !== undefined && object.scope !== null) {
            message.scope = EventScope.fromPartial(object.scope);
        }
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = InteractionCreateEvent_PayloadData.fromPartial(object.payload);
        }
        return message;
    },
};
messageTypeRegistry.set(InteractionCreateEvent.$type, InteractionCreateEvent);
const baseInteractionCreateEvent_PayloadData = {
    $type: "pylon.discord.v1.event.InteractionCreateEvent.PayloadData",
    guildId: "0",
};
export const InteractionCreateEvent_PayloadData = {
    $type: "pylon.discord.v1.event.InteractionCreateEvent.PayloadData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.guildId !== "0") {
            writer.uint32(9).sfixed64(message.guildId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseInteractionCreateEvent_PayloadData,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.guildId = longToString(reader.sfixed64());
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
            ...baseInteractionCreateEvent_PayloadData,
        };
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = String(object.guildId);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.guildId !== undefined && (obj.guildId = message.guildId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseInteractionCreateEvent_PayloadData,
        };
        if (object.guildId !== undefined && object.guildId !== null) {
            message.guildId = object.guildId;
        }
        return message;
    },
};
messageTypeRegistry.set(InteractionCreateEvent_PayloadData.$type, InteractionCreateEvent_PayloadData);
const baseEventResponse = {
    $type: "pylon.discord.v1.event.EventResponse",
};
export const EventResponse = {
    $type: "pylon.discord.v1.event.EventResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEventResponse };
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
        const message = { ...baseEventResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseEventResponse };
        return message;
    },
};
messageTypeRegistry.set(EventResponse.$type, EventResponse);
const baseInteractionResponse = {
    $type: "pylon.discord.v1.event.InteractionResponse",
};
export const InteractionResponse = {
    $type: "pylon.discord.v1.event.InteractionResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInteractionResponse };
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
        const message = { ...baseInteractionResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseInteractionResponse };
        return message;
    },
};
messageTypeRegistry.set(InteractionResponse.$type, InteractionResponse);
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
