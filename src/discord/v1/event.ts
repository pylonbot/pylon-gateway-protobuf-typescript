/* eslint-disable */
import { messageTypeRegistry } from "../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  MessageData_MessageType,
  InviteData_InviteTargetUserType,
  GuildData,
  PresenceData,
  MemberData,
  ChannelData,
  RoleData,
  MessageData,
  SnowflakeValue,
  SnowflakeListValue,
  MessageData_MessageAttachmentData,
  MessageData_MessageEmbedData,
  MessageData_MessageMentionData,
  MessageData_MessageReactionData,
  MessageData_MessageMentionChannelData,
  MessageData_MessageActivityData,
  MessageData_MessageApplicationData,
  MessageData_MessageReferenceData,
  UserData,
  MessageData_MessageReactionEmojiData,
  VoiceStateData,
  EmojiData,
  messageData_MessageTypeFromJSON,
  messageData_MessageTypeToJSON,
  inviteData_InviteTargetUserTypeFromJSON,
  inviteData_InviteTargetUserTypeToJSON,
} from "../../discord/v1/model";
import { Timestamp } from "../../google/protobuf/timestamp";
import {
  StringValue,
  BoolValue,
  UInt32Value,
} from "../../google/protobuf/wrappers";

export const protobufPackage = "pylon.discord.v1.event";

export interface EventEnvelope {
  $type: "pylon.discord.v1.event.EventEnvelope";
  header: EventEnvelope_HeaderData | undefined;
  eventData?:
    | { $case: "guildCreateEvent"; guildCreateEvent: GuildCreateEvent }
    | { $case: "guildUpdateEvent"; guildUpdateEvent: GuildUpdateEvent }
    | { $case: "guildDeleteEvent"; guildDeleteEvent: GuildDeleteEvent }
    | { $case: "presenceUpdateEvent"; presenceUpdateEvent: PresenceUpdateEvent }
    | { $case: "guildMemberAddEvent"; guildMemberAddEvent: GuildMemberAddEvent }
    | {
        $case: "guildMemberUpdateEvent";
        guildMemberUpdateEvent: GuildMemberUpdateEvent;
      }
    | {
        $case: "guildMemberRemoveEvent";
        guildMemberRemoveEvent: GuildMemberRemoveEvent;
      }
    | { $case: "channelCreateEvent"; channelCreateEvent: ChannelCreateEvent }
    | { $case: "channelUpdateEvent"; channelUpdateEvent: ChannelUpdateEvent }
    | { $case: "channelDeleteEvent"; channelDeleteEvent: ChannelDeleteEvent }
    | {
        $case: "channelPinsUpdateEvent";
        channelPinsUpdateEvent: ChannelPinsUpdateEvent;
      }
    | {
        $case: "guildRoleCreateEvent";
        guildRoleCreateEvent: GuildRoleCreateEvent;
      }
    | {
        $case: "guildRoleUpdateEvent";
        guildRoleUpdateEvent: GuildRoleUpdateEvent;
      }
    | {
        $case: "guildRoleDeleteEvent";
        guildRoleDeleteEvent: GuildRoleDeleteEvent;
      }
    | { $case: "messageCreateEvent"; messageCreateEvent: MessageCreateEvent }
    | { $case: "messageUpdateEvent"; messageUpdateEvent: MessageUpdateEvent }
    | { $case: "messageDeleteEvent"; messageDeleteEvent: MessageDeleteEvent }
    | {
        $case: "messageDeleteBulkEvent";
        messageDeleteBulkEvent: MessageDeleteBulkEvent;
      }
    | {
        $case: "messageReactionAddEvent";
        messageReactionAddEvent: MessageReactionAddEvent;
      }
    | {
        $case: "messageReactionRemoveEvent";
        messageReactionRemoveEvent: MessageReactionRemoveEvent;
      }
    | {
        $case: "messageReactionRemoveAllEvent";
        messageReactionRemoveAllEvent: MessageReactionRemoveAllEvent;
      }
    | {
        $case: "messageReactionRemoveEmojiEvent";
        messageReactionRemoveEmojiEvent: MessageReactionRemoveEmojiEvent;
      }
    | { $case: "typingStartEvent"; typingStartEvent: TypingStartEvent }
    | {
        $case: "voiceStateUpdateEvent";
        voiceStateUpdateEvent: VoiceStateUpdateEvent;
      }
    | {
        $case: "voiceServerUpdateEvent";
        voiceServerUpdateEvent: VoiceServerUpdateEvent;
      }
    | { $case: "inviteCreateEvent"; inviteCreateEvent: InviteCreateEvent }
    | { $case: "inviteDeleteEvent"; inviteDeleteEvent: InviteDeleteEvent }
    | { $case: "guildBanAddEvent"; guildBanAddEvent: GuildBanAddEvent }
    | { $case: "guildBanRemoveEvent"; guildBanRemoveEvent: GuildBanRemoveEvent }
    | {
        $case: "guildEmojisUpdateEvent";
        guildEmojisUpdateEvent: GuildEmojisUpdateEvent;
      }
    | {
        $case: "guildIntegrationsUpdateEvent";
        guildIntegrationsUpdateEvent: GuildIntegrationsUpdateEvent;
      }
    | { $case: "webhooksUpdateEvent"; webhooksUpdateEvent: WebhooksUpdateEvent }
    | {
        $case: "integrationCreateEvent";
        integrationCreateEvent: IntegrationCreateEvent;
      }
    | {
        $case: "integrationUpdateEvent";
        integrationUpdateEvent: IntegrationUpdateEvent;
      }
    | {
        $case: "integrationDeleteEvent";
        integrationDeleteEvent: IntegrationDeleteEvent;
      }
    | {
        $case: "interactionCreateEvent";
        interactionCreateEvent: InteractionCreateEvent;
      }
    | { $case: "readyEvent"; readyEvent: ReadyEvent }
    | { $case: "resumeEvent"; resumeEvent: ResumeEvent };
}

export interface EventEnvelope_HeaderData {
  $type: "pylon.discord.v1.event.EventEnvelope.HeaderData";
  seq: string;
  receivedAt: Date | undefined;
}

export interface EventEnvelopeAck {
  $type: "pylon.discord.v1.event.EventEnvelopeAck";
  seq: string;
}

export interface EventScope {
  $type: "pylon.discord.v1.event.EventScope";
  botId: string;
  guildId: string;
}

export interface ReadyEvent {
  $type: "pylon.discord.v1.event.ReadyEvent";
  scope: EventScope | undefined;
}

export interface ResumeEvent {
  $type: "pylon.discord.v1.event.ResumeEvent";
  scope: EventScope | undefined;
}

export interface GuildCreateEvent {
  $type: "pylon.discord.v1.event.GuildCreateEvent";
  scope: EventScope | undefined;
  payload: GuildData | undefined;
}

export interface GuildUpdateEvent {
  $type: "pylon.discord.v1.event.GuildUpdateEvent";
  scope: EventScope | undefined;
  payload: GuildData | undefined;
  previouslyCached: GuildData | undefined;
}

export interface GuildDeleteEvent {
  $type: "pylon.discord.v1.event.GuildDeleteEvent";
  scope: EventScope | undefined;
  payload: GuildData | undefined;
}

export interface PresenceUpdateEvent {
  $type: "pylon.discord.v1.event.PresenceUpdateEvent";
  scope: EventScope | undefined;
  payload: PresenceData | undefined;
  previouslyCached: PresenceData | undefined;
}

export interface GuildMemberAddEvent {
  $type: "pylon.discord.v1.event.GuildMemberAddEvent";
  scope: EventScope | undefined;
  payload: MemberData | undefined;
}

export interface GuildMemberUpdateEvent {
  $type: "pylon.discord.v1.event.GuildMemberUpdateEvent";
  scope: EventScope | undefined;
  payload: MemberData | undefined;
  previouslyCached: MemberData | undefined;
}

export interface GuildMemberRemoveEvent {
  $type: "pylon.discord.v1.event.GuildMemberRemoveEvent";
  scope: EventScope | undefined;
  payload: MemberData | undefined;
}

export interface ChannelCreateEvent {
  $type: "pylon.discord.v1.event.ChannelCreateEvent";
  scope: EventScope | undefined;
  payload: ChannelData | undefined;
}

export interface ChannelUpdateEvent {
  $type: "pylon.discord.v1.event.ChannelUpdateEvent";
  scope: EventScope | undefined;
  payload: ChannelData | undefined;
  previouslyCached: ChannelData | undefined;
}

export interface ChannelDeleteEvent {
  $type: "pylon.discord.v1.event.ChannelDeleteEvent";
  scope: EventScope | undefined;
  payload: ChannelData | undefined;
}

export interface ChannelPinsUpdateEvent {
  $type: "pylon.discord.v1.event.ChannelPinsUpdateEvent";
  scope: EventScope | undefined;
  payload: ChannelPinsUpdateEvent_PayloadData | undefined;
}

export interface ChannelPinsUpdateEvent_PayloadData {
  $type: "pylon.discord.v1.event.ChannelPinsUpdateEvent.PayloadData";
  channelId: string;
  guildId: string;
  lastPinTimestamp: Date | undefined;
}

export interface GuildRoleCreateEvent {
  $type: "pylon.discord.v1.event.GuildRoleCreateEvent";
  scope: EventScope | undefined;
  payload: RoleData | undefined;
}

export interface GuildRoleUpdateEvent {
  $type: "pylon.discord.v1.event.GuildRoleUpdateEvent";
  scope: EventScope | undefined;
  payload: RoleData | undefined;
  previouslyCached: RoleData | undefined;
}

export interface GuildRoleDeleteEvent {
  $type: "pylon.discord.v1.event.GuildRoleDeleteEvent";
  scope: EventScope | undefined;
  payload: RoleData | undefined;
}

export interface MessageCreateEvent {
  $type: "pylon.discord.v1.event.MessageCreateEvent";
  scope: EventScope | undefined;
  messageData: MessageData | undefined;
}

export interface MessageUpdateEvent {
  $type: "pylon.discord.v1.event.MessageUpdateEvent";
  scope: EventScope | undefined;
  payload?:
    | { $case: "cached"; cached: MessageData }
    | { $case: "raw"; raw: MessageUpdateEvent_PayloadData };
  previouslyCached: MessageData | undefined;
}

export interface MessageUpdateEvent_PayloadData {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData";
  id: string;
  channelId: string;
  guildId: SnowflakeValue | undefined;
  content: string | undefined;
  editedTimestamp: Date | undefined;
  mentionRoles: SnowflakeListValue | undefined;
  tts: boolean | undefined;
  mentionEveryone: boolean | undefined;
  attachments:
    | MessageUpdateEvent_PayloadData_MessageAttachmentListValue
    | undefined;
  embeds: MessageUpdateEvent_PayloadData_MessageEmbedListValue | undefined;
  mentions: MessageUpdateEvent_PayloadData_MessageMentionListValue | undefined;
  reactions:
    | MessageUpdateEvent_PayloadData_MessageReactionListValue
    | undefined;
  pinned: boolean | undefined;
  type: MessageUpdateEvent_PayloadData_MessageTypeValue | undefined;
  mentionChannels:
    | MessageUpdateEvent_PayloadData_MessageMentionChannelListValue
    | undefined;
  flags: number | undefined;
  activity: MessageUpdateEvent_PayloadData_MessageActivityValue | undefined;
  application:
    | MessageUpdateEvent_PayloadData_MessageApplicationValue
    | undefined;
  messageReference:
    | MessageUpdateEvent_PayloadData_MessageReferenceValue
    | undefined;
  author: MessageUpdateEvent_PayloadData_MessageAuthorValue | undefined;
  member: MessageUpdateEvent_PayloadData_MessageMemberValue | undefined;
  webhookId: SnowflakeValue | undefined;
}

export interface MessageUpdateEvent_PayloadData_MessageAttachmentListValue {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageAttachmentListValue";
  values: MessageData_MessageAttachmentData[];
}

export interface MessageUpdateEvent_PayloadData_MessageEmbedListValue {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageEmbedListValue";
  values: MessageData_MessageEmbedData[];
}

export interface MessageUpdateEvent_PayloadData_MessageMentionListValue {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageMentionListValue";
  values: MessageData_MessageMentionData[];
}

export interface MessageUpdateEvent_PayloadData_MessageReactionListValue {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageReactionListValue";
  values: MessageData_MessageReactionData[];
}

export interface MessageUpdateEvent_PayloadData_MessageTypeValue {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageTypeValue";
  value: MessageData_MessageType;
}

export interface MessageUpdateEvent_PayloadData_MessageMentionChannelListValue {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageMentionChannelListValue";
  values: MessageData_MessageMentionChannelData[];
}

export interface MessageUpdateEvent_PayloadData_MessageActivityValue {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageActivityValue";
  value: MessageData_MessageActivityData | undefined;
}

export interface MessageUpdateEvent_PayloadData_MessageApplicationValue {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageApplicationValue";
  value: MessageData_MessageApplicationData | undefined;
}

export interface MessageUpdateEvent_PayloadData_MessageReferenceValue {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageReferenceValue";
  value: MessageData_MessageReferenceData | undefined;
}

export interface MessageUpdateEvent_PayloadData_MessageAuthorValue {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageAuthorValue";
  value: UserData | undefined;
}

export interface MessageUpdateEvent_PayloadData_MessageMemberValue {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageMemberValue";
  value: MemberData | undefined;
}

export interface MessageDeleteEvent {
  $type: "pylon.discord.v1.event.MessageDeleteEvent";
  scope: EventScope | undefined;
  payload: MessageDeleteEvent_PayloadData | undefined;
  previouslyCached: MessageData | undefined;
}

export interface MessageDeleteEvent_PayloadData {
  $type: "pylon.discord.v1.event.MessageDeleteEvent.PayloadData";
  id: string;
  channelId: string;
  guildId: string;
}

export interface MessageDeleteBulkEvent {
  $type: "pylon.discord.v1.event.MessageDeleteBulkEvent";
  scope: EventScope | undefined;
  payload: MessageDeleteBulkEvent_PayloadData | undefined;
}

export interface MessageDeleteBulkEvent_PayloadData {
  $type: "pylon.discord.v1.event.MessageDeleteBulkEvent.PayloadData";
  ids: string[];
  channelId: string;
  guildId: string;
}

export interface MessageReactionAddEvent {
  $type: "pylon.discord.v1.event.MessageReactionAddEvent";
  scope: EventScope | undefined;
  payload: MessageReactionAddEvent_PayloadData | undefined;
}

export interface MessageReactionAddEvent_PayloadData {
  $type: "pylon.discord.v1.event.MessageReactionAddEvent.PayloadData";
  userId: string;
  channelId: string;
  messageId: string;
  guildId: string;
  emoji: MessageData_MessageReactionEmojiData | undefined;
}

export interface MessageReactionRemoveEvent {
  $type: "pylon.discord.v1.event.MessageReactionRemoveEvent";
  scope: EventScope | undefined;
  payload: MessageReactionRemoveEvent_PayloadData | undefined;
}

export interface MessageReactionRemoveEvent_PayloadData {
  $type: "pylon.discord.v1.event.MessageReactionRemoveEvent.PayloadData";
  userId: string;
  channelId: string;
  messageId: string;
  guildId: string;
  emoji: MessageData_MessageReactionEmojiData | undefined;
}

export interface MessageReactionRemoveAllEvent {
  $type: "pylon.discord.v1.event.MessageReactionRemoveAllEvent";
  scope: EventScope | undefined;
  payload: MessageReactionRemoveAllEvent_PayloadData | undefined;
}

export interface MessageReactionRemoveAllEvent_PayloadData {
  $type: "pylon.discord.v1.event.MessageReactionRemoveAllEvent.PayloadData";
  channelId: string;
  messageId: string;
  guildId: string;
}

export interface MessageReactionRemoveEmojiEvent {
  $type: "pylon.discord.v1.event.MessageReactionRemoveEmojiEvent";
  scope: EventScope | undefined;
  payload: MessageReactionRemoveEmojiEvent_PayloadData | undefined;
}

export interface MessageReactionRemoveEmojiEvent_PayloadData {
  $type: "pylon.discord.v1.event.MessageReactionRemoveEmojiEvent.PayloadData";
  channelId: string;
  messageId: string;
  guildId: string;
  emoji: MessageData_MessageReactionEmojiData | undefined;
}

export interface TypingStartEvent {
  $type: "pylon.discord.v1.event.TypingStartEvent";
  scope: EventScope | undefined;
  payload: TypingStartEvent_PayloadData | undefined;
}

export interface TypingStartEvent_PayloadData {
  $type: "pylon.discord.v1.event.TypingStartEvent.PayloadData";
  channelId: string;
  userId: string;
  timestamp: Date | undefined;
  member: MemberData | undefined;
}

export interface VoiceStateUpdateEvent {
  $type: "pylon.discord.v1.event.VoiceStateUpdateEvent";
  scope: EventScope | undefined;
  payload: VoiceStateData | undefined;
  previouslyCached: VoiceStateData | undefined;
}

export interface VoiceServerUpdateEvent {
  $type: "pylon.discord.v1.event.VoiceServerUpdateEvent";
  scope: EventScope | undefined;
  payload: VoiceServerUpdateEvent_PayloadData | undefined;
}

export interface VoiceServerUpdateEvent_PayloadData {
  $type: "pylon.discord.v1.event.VoiceServerUpdateEvent.PayloadData";
  guildId: string;
  token: string;
  endpoint: string;
}

export interface InviteCreateEvent {
  $type: "pylon.discord.v1.event.InviteCreateEvent";
  scope: EventScope | undefined;
  payload: InviteCreateEvent_PayloadData | undefined;
}

export interface InviteCreateEvent_PayloadData {
  $type: "pylon.discord.v1.event.InviteCreateEvent.PayloadData";
  channelId: string;
  code: string;
  createdAt: Date | undefined;
  guildId: SnowflakeValue | undefined;
  inviter: UserData | undefined;
  maxAge: string;
  maxUses: string;
  targetUser: UserData | undefined;
  targetUserType: InviteData_InviteTargetUserType;
  temporary: boolean;
  uses: string;
}

export interface InviteDeleteEvent {
  $type: "pylon.discord.v1.event.InviteDeleteEvent";
  scope: EventScope | undefined;
  payload: InviteDeleteEvent_PayloadData | undefined;
}

export interface InviteDeleteEvent_PayloadData {
  $type: "pylon.discord.v1.event.InviteDeleteEvent.PayloadData";
  guildId: string;
  channelId: string;
  code: string;
}

export interface GuildBanAddEvent {
  $type: "pylon.discord.v1.event.GuildBanAddEvent";
  scope: EventScope | undefined;
  payload: GuildBanAddEvent_PayloadData | undefined;
}

export interface GuildBanAddEvent_PayloadData {
  $type: "pylon.discord.v1.event.GuildBanAddEvent.PayloadData";
  guildId: string;
  user: UserData | undefined;
}

export interface GuildBanRemoveEvent {
  $type: "pylon.discord.v1.event.GuildBanRemoveEvent";
  scope: EventScope | undefined;
  payload: GuildBanRemoveEvent_PayloadData | undefined;
}

export interface GuildBanRemoveEvent_PayloadData {
  $type: "pylon.discord.v1.event.GuildBanRemoveEvent.PayloadData";
  guildId: string;
  user: UserData | undefined;
}

export interface GuildEmojisUpdateEvent {
  $type: "pylon.discord.v1.event.GuildEmojisUpdateEvent";
  scope: EventScope | undefined;
  payload: GuildEmojisUpdateEvent_PayloadData | undefined;
  previouslyCached: GuildEmojisUpdateEvent_PayloadData | undefined;
}

export interface GuildEmojisUpdateEvent_PayloadData {
  $type: "pylon.discord.v1.event.GuildEmojisUpdateEvent.PayloadData";
  guildId: string;
  emojis: EmojiData[];
}

export interface GuildIntegrationsUpdateEvent {
  $type: "pylon.discord.v1.event.GuildIntegrationsUpdateEvent";
  scope: EventScope | undefined;
  payload: GuildIntegrationsUpdateEvent_PayloadData | undefined;
}

export interface GuildIntegrationsUpdateEvent_PayloadData {
  $type: "pylon.discord.v1.event.GuildIntegrationsUpdateEvent.PayloadData";
  guildId: string;
}

export interface WebhooksUpdateEvent {
  $type: "pylon.discord.v1.event.WebhooksUpdateEvent";
  scope: EventScope | undefined;
  payload: WebhooksUpdateEvent_PayloadData | undefined;
}

export interface WebhooksUpdateEvent_PayloadData {
  $type: "pylon.discord.v1.event.WebhooksUpdateEvent.PayloadData";
  guildId: string;
}

export interface IntegrationCreateEvent {
  $type: "pylon.discord.v1.event.IntegrationCreateEvent";
  scope: EventScope | undefined;
  payload: IntegrationCreateEvent_PayloadData | undefined;
}

export interface IntegrationCreateEvent_PayloadData {
  $type: "pylon.discord.v1.event.IntegrationCreateEvent.PayloadData";
  guildId: string;
}

export interface IntegrationUpdateEvent {
  $type: "pylon.discord.v1.event.IntegrationUpdateEvent";
  scope: EventScope | undefined;
  payload: IntegrationUpdateEvent_PayloadData | undefined;
}

export interface IntegrationUpdateEvent_PayloadData {
  $type: "pylon.discord.v1.event.IntegrationUpdateEvent.PayloadData";
  guildId: string;
}

export interface IntegrationDeleteEvent {
  $type: "pylon.discord.v1.event.IntegrationDeleteEvent";
  scope: EventScope | undefined;
  payload: IntegrationDeleteEvent_PayloadData | undefined;
}

export interface IntegrationDeleteEvent_PayloadData {
  $type: "pylon.discord.v1.event.IntegrationDeleteEvent.PayloadData";
  guildId: string;
}

export interface InteractionCreateEvent {
  $type: "pylon.discord.v1.event.InteractionCreateEvent";
  scope: EventScope | undefined;
  payload: InteractionCreateEvent_PayloadData | undefined;
}

export interface InteractionCreateEvent_PayloadData {
  $type: "pylon.discord.v1.event.InteractionCreateEvent.PayloadData";
  guildId: string;
}

export interface EventResponse {
  $type: "pylon.discord.v1.event.EventResponse";
}

export interface InteractionResponse {
  $type: "pylon.discord.v1.event.InteractionResponse";
}

const baseEventEnvelope: object = {
  $type: "pylon.discord.v1.event.EventEnvelope",
};

export const EventEnvelope = {
  $type: "pylon.discord.v1.event.EventEnvelope" as const,

  encode(
    message: EventEnvelope,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.header !== undefined) {
      EventEnvelope_HeaderData.encode(
        message.header,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "guildCreateEvent") {
      GuildCreateEvent.encode(
        message.eventData.guildCreateEvent,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "guildUpdateEvent") {
      GuildUpdateEvent.encode(
        message.eventData.guildUpdateEvent,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "guildDeleteEvent") {
      GuildDeleteEvent.encode(
        message.eventData.guildDeleteEvent,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "presenceUpdateEvent") {
      PresenceUpdateEvent.encode(
        message.eventData.presenceUpdateEvent,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "guildMemberAddEvent") {
      GuildMemberAddEvent.encode(
        message.eventData.guildMemberAddEvent,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "guildMemberUpdateEvent") {
      GuildMemberUpdateEvent.encode(
        message.eventData.guildMemberUpdateEvent,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "guildMemberRemoveEvent") {
      GuildMemberRemoveEvent.encode(
        message.eventData.guildMemberRemoveEvent,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "channelCreateEvent") {
      ChannelCreateEvent.encode(
        message.eventData.channelCreateEvent,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "channelUpdateEvent") {
      ChannelUpdateEvent.encode(
        message.eventData.channelUpdateEvent,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "channelDeleteEvent") {
      ChannelDeleteEvent.encode(
        message.eventData.channelDeleteEvent,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "channelPinsUpdateEvent") {
      ChannelPinsUpdateEvent.encode(
        message.eventData.channelPinsUpdateEvent,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "guildRoleCreateEvent") {
      GuildRoleCreateEvent.encode(
        message.eventData.guildRoleCreateEvent,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "guildRoleUpdateEvent") {
      GuildRoleUpdateEvent.encode(
        message.eventData.guildRoleUpdateEvent,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "guildRoleDeleteEvent") {
      GuildRoleDeleteEvent.encode(
        message.eventData.guildRoleDeleteEvent,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "messageCreateEvent") {
      MessageCreateEvent.encode(
        message.eventData.messageCreateEvent,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "messageUpdateEvent") {
      MessageUpdateEvent.encode(
        message.eventData.messageUpdateEvent,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "messageDeleteEvent") {
      MessageDeleteEvent.encode(
        message.eventData.messageDeleteEvent,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "messageDeleteBulkEvent") {
      MessageDeleteBulkEvent.encode(
        message.eventData.messageDeleteBulkEvent,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "messageReactionAddEvent") {
      MessageReactionAddEvent.encode(
        message.eventData.messageReactionAddEvent,
        writer.uint32(162).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "messageReactionRemoveEvent") {
      MessageReactionRemoveEvent.encode(
        message.eventData.messageReactionRemoveEvent,
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "messageReactionRemoveAllEvent") {
      MessageReactionRemoveAllEvent.encode(
        message.eventData.messageReactionRemoveAllEvent,
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "messageReactionRemoveEmojiEvent") {
      MessageReactionRemoveEmojiEvent.encode(
        message.eventData.messageReactionRemoveEmojiEvent,
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "typingStartEvent") {
      TypingStartEvent.encode(
        message.eventData.typingStartEvent,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "voiceStateUpdateEvent") {
      VoiceStateUpdateEvent.encode(
        message.eventData.voiceStateUpdateEvent,
        writer.uint32(202).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "voiceServerUpdateEvent") {
      VoiceServerUpdateEvent.encode(
        message.eventData.voiceServerUpdateEvent,
        writer.uint32(210).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "inviteCreateEvent") {
      InviteCreateEvent.encode(
        message.eventData.inviteCreateEvent,
        writer.uint32(218).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "inviteDeleteEvent") {
      InviteDeleteEvent.encode(
        message.eventData.inviteDeleteEvent,
        writer.uint32(226).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "guildBanAddEvent") {
      GuildBanAddEvent.encode(
        message.eventData.guildBanAddEvent,
        writer.uint32(234).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "guildBanRemoveEvent") {
      GuildBanRemoveEvent.encode(
        message.eventData.guildBanRemoveEvent,
        writer.uint32(242).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "guildEmojisUpdateEvent") {
      GuildEmojisUpdateEvent.encode(
        message.eventData.guildEmojisUpdateEvent,
        writer.uint32(250).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "guildIntegrationsUpdateEvent") {
      GuildIntegrationsUpdateEvent.encode(
        message.eventData.guildIntegrationsUpdateEvent,
        writer.uint32(258).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "webhooksUpdateEvent") {
      WebhooksUpdateEvent.encode(
        message.eventData.webhooksUpdateEvent,
        writer.uint32(266).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "integrationCreateEvent") {
      IntegrationCreateEvent.encode(
        message.eventData.integrationCreateEvent,
        writer.uint32(274).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "integrationUpdateEvent") {
      IntegrationUpdateEvent.encode(
        message.eventData.integrationUpdateEvent,
        writer.uint32(282).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "integrationDeleteEvent") {
      IntegrationDeleteEvent.encode(
        message.eventData.integrationDeleteEvent,
        writer.uint32(290).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "interactionCreateEvent") {
      InteractionCreateEvent.encode(
        message.eventData.interactionCreateEvent,
        writer.uint32(298).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "readyEvent") {
      ReadyEvent.encode(
        message.eventData.readyEvent,
        writer.uint32(306).fork()
      ).ldelim();
    }
    if (message.eventData?.$case === "resumeEvent") {
      ResumeEvent.encode(
        message.eventData.resumeEvent,
        writer.uint32(314).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEnvelope {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventEnvelope } as EventEnvelope;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = EventEnvelope_HeaderData.decode(
            reader,
            reader.uint32()
          );
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
            presenceUpdateEvent: PresenceUpdateEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 6:
          message.eventData = {
            $case: "guildMemberAddEvent",
            guildMemberAddEvent: GuildMemberAddEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 7:
          message.eventData = {
            $case: "guildMemberUpdateEvent",
            guildMemberUpdateEvent: GuildMemberUpdateEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 8:
          message.eventData = {
            $case: "guildMemberRemoveEvent",
            guildMemberRemoveEvent: GuildMemberRemoveEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 9:
          message.eventData = {
            $case: "channelCreateEvent",
            channelCreateEvent: ChannelCreateEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 10:
          message.eventData = {
            $case: "channelUpdateEvent",
            channelUpdateEvent: ChannelUpdateEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 11:
          message.eventData = {
            $case: "channelDeleteEvent",
            channelDeleteEvent: ChannelDeleteEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 12:
          message.eventData = {
            $case: "channelPinsUpdateEvent",
            channelPinsUpdateEvent: ChannelPinsUpdateEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 13:
          message.eventData = {
            $case: "guildRoleCreateEvent",
            guildRoleCreateEvent: GuildRoleCreateEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 14:
          message.eventData = {
            $case: "guildRoleUpdateEvent",
            guildRoleUpdateEvent: GuildRoleUpdateEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 15:
          message.eventData = {
            $case: "guildRoleDeleteEvent",
            guildRoleDeleteEvent: GuildRoleDeleteEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 16:
          message.eventData = {
            $case: "messageCreateEvent",
            messageCreateEvent: MessageCreateEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 17:
          message.eventData = {
            $case: "messageUpdateEvent",
            messageUpdateEvent: MessageUpdateEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 18:
          message.eventData = {
            $case: "messageDeleteEvent",
            messageDeleteEvent: MessageDeleteEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 19:
          message.eventData = {
            $case: "messageDeleteBulkEvent",
            messageDeleteBulkEvent: MessageDeleteBulkEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 20:
          message.eventData = {
            $case: "messageReactionAddEvent",
            messageReactionAddEvent: MessageReactionAddEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 21:
          message.eventData = {
            $case: "messageReactionRemoveEvent",
            messageReactionRemoveEvent: MessageReactionRemoveEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 22:
          message.eventData = {
            $case: "messageReactionRemoveAllEvent",
            messageReactionRemoveAllEvent: MessageReactionRemoveAllEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 23:
          message.eventData = {
            $case: "messageReactionRemoveEmojiEvent",
            messageReactionRemoveEmojiEvent: MessageReactionRemoveEmojiEvent.decode(
              reader,
              reader.uint32()
            ),
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
            voiceStateUpdateEvent: VoiceStateUpdateEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 26:
          message.eventData = {
            $case: "voiceServerUpdateEvent",
            voiceServerUpdateEvent: VoiceServerUpdateEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 27:
          message.eventData = {
            $case: "inviteCreateEvent",
            inviteCreateEvent: InviteCreateEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 28:
          message.eventData = {
            $case: "inviteDeleteEvent",
            inviteDeleteEvent: InviteDeleteEvent.decode(
              reader,
              reader.uint32()
            ),
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
            guildBanRemoveEvent: GuildBanRemoveEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 31:
          message.eventData = {
            $case: "guildEmojisUpdateEvent",
            guildEmojisUpdateEvent: GuildEmojisUpdateEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 32:
          message.eventData = {
            $case: "guildIntegrationsUpdateEvent",
            guildIntegrationsUpdateEvent: GuildIntegrationsUpdateEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 33:
          message.eventData = {
            $case: "webhooksUpdateEvent",
            webhooksUpdateEvent: WebhooksUpdateEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 34:
          message.eventData = {
            $case: "integrationCreateEvent",
            integrationCreateEvent: IntegrationCreateEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 35:
          message.eventData = {
            $case: "integrationUpdateEvent",
            integrationUpdateEvent: IntegrationUpdateEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 36:
          message.eventData = {
            $case: "integrationDeleteEvent",
            integrationDeleteEvent: IntegrationDeleteEvent.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 37:
          message.eventData = {
            $case: "interactionCreateEvent",
            interactionCreateEvent: InteractionCreateEvent.decode(
              reader,
              reader.uint32()
            ),
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

  fromJSON(object: any): EventEnvelope {
    const message = { ...baseEventEnvelope } as EventEnvelope;
    if (object.header !== undefined && object.header !== null) {
      message.header = EventEnvelope_HeaderData.fromJSON(object.header);
    }
    if (
      object.guildCreateEvent !== undefined &&
      object.guildCreateEvent !== null
    ) {
      message.eventData = {
        $case: "guildCreateEvent",
        guildCreateEvent: GuildCreateEvent.fromJSON(object.guildCreateEvent),
      };
    }
    if (
      object.guildUpdateEvent !== undefined &&
      object.guildUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "guildUpdateEvent",
        guildUpdateEvent: GuildUpdateEvent.fromJSON(object.guildUpdateEvent),
      };
    }
    if (
      object.guildDeleteEvent !== undefined &&
      object.guildDeleteEvent !== null
    ) {
      message.eventData = {
        $case: "guildDeleteEvent",
        guildDeleteEvent: GuildDeleteEvent.fromJSON(object.guildDeleteEvent),
      };
    }
    if (
      object.presenceUpdateEvent !== undefined &&
      object.presenceUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "presenceUpdateEvent",
        presenceUpdateEvent: PresenceUpdateEvent.fromJSON(
          object.presenceUpdateEvent
        ),
      };
    }
    if (
      object.guildMemberAddEvent !== undefined &&
      object.guildMemberAddEvent !== null
    ) {
      message.eventData = {
        $case: "guildMemberAddEvent",
        guildMemberAddEvent: GuildMemberAddEvent.fromJSON(
          object.guildMemberAddEvent
        ),
      };
    }
    if (
      object.guildMemberUpdateEvent !== undefined &&
      object.guildMemberUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "guildMemberUpdateEvent",
        guildMemberUpdateEvent: GuildMemberUpdateEvent.fromJSON(
          object.guildMemberUpdateEvent
        ),
      };
    }
    if (
      object.guildMemberRemoveEvent !== undefined &&
      object.guildMemberRemoveEvent !== null
    ) {
      message.eventData = {
        $case: "guildMemberRemoveEvent",
        guildMemberRemoveEvent: GuildMemberRemoveEvent.fromJSON(
          object.guildMemberRemoveEvent
        ),
      };
    }
    if (
      object.channelCreateEvent !== undefined &&
      object.channelCreateEvent !== null
    ) {
      message.eventData = {
        $case: "channelCreateEvent",
        channelCreateEvent: ChannelCreateEvent.fromJSON(
          object.channelCreateEvent
        ),
      };
    }
    if (
      object.channelUpdateEvent !== undefined &&
      object.channelUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "channelUpdateEvent",
        channelUpdateEvent: ChannelUpdateEvent.fromJSON(
          object.channelUpdateEvent
        ),
      };
    }
    if (
      object.channelDeleteEvent !== undefined &&
      object.channelDeleteEvent !== null
    ) {
      message.eventData = {
        $case: "channelDeleteEvent",
        channelDeleteEvent: ChannelDeleteEvent.fromJSON(
          object.channelDeleteEvent
        ),
      };
    }
    if (
      object.channelPinsUpdateEvent !== undefined &&
      object.channelPinsUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "channelPinsUpdateEvent",
        channelPinsUpdateEvent: ChannelPinsUpdateEvent.fromJSON(
          object.channelPinsUpdateEvent
        ),
      };
    }
    if (
      object.guildRoleCreateEvent !== undefined &&
      object.guildRoleCreateEvent !== null
    ) {
      message.eventData = {
        $case: "guildRoleCreateEvent",
        guildRoleCreateEvent: GuildRoleCreateEvent.fromJSON(
          object.guildRoleCreateEvent
        ),
      };
    }
    if (
      object.guildRoleUpdateEvent !== undefined &&
      object.guildRoleUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "guildRoleUpdateEvent",
        guildRoleUpdateEvent: GuildRoleUpdateEvent.fromJSON(
          object.guildRoleUpdateEvent
        ),
      };
    }
    if (
      object.guildRoleDeleteEvent !== undefined &&
      object.guildRoleDeleteEvent !== null
    ) {
      message.eventData = {
        $case: "guildRoleDeleteEvent",
        guildRoleDeleteEvent: GuildRoleDeleteEvent.fromJSON(
          object.guildRoleDeleteEvent
        ),
      };
    }
    if (
      object.messageCreateEvent !== undefined &&
      object.messageCreateEvent !== null
    ) {
      message.eventData = {
        $case: "messageCreateEvent",
        messageCreateEvent: MessageCreateEvent.fromJSON(
          object.messageCreateEvent
        ),
      };
    }
    if (
      object.messageUpdateEvent !== undefined &&
      object.messageUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "messageUpdateEvent",
        messageUpdateEvent: MessageUpdateEvent.fromJSON(
          object.messageUpdateEvent
        ),
      };
    }
    if (
      object.messageDeleteEvent !== undefined &&
      object.messageDeleteEvent !== null
    ) {
      message.eventData = {
        $case: "messageDeleteEvent",
        messageDeleteEvent: MessageDeleteEvent.fromJSON(
          object.messageDeleteEvent
        ),
      };
    }
    if (
      object.messageDeleteBulkEvent !== undefined &&
      object.messageDeleteBulkEvent !== null
    ) {
      message.eventData = {
        $case: "messageDeleteBulkEvent",
        messageDeleteBulkEvent: MessageDeleteBulkEvent.fromJSON(
          object.messageDeleteBulkEvent
        ),
      };
    }
    if (
      object.messageReactionAddEvent !== undefined &&
      object.messageReactionAddEvent !== null
    ) {
      message.eventData = {
        $case: "messageReactionAddEvent",
        messageReactionAddEvent: MessageReactionAddEvent.fromJSON(
          object.messageReactionAddEvent
        ),
      };
    }
    if (
      object.messageReactionRemoveEvent !== undefined &&
      object.messageReactionRemoveEvent !== null
    ) {
      message.eventData = {
        $case: "messageReactionRemoveEvent",
        messageReactionRemoveEvent: MessageReactionRemoveEvent.fromJSON(
          object.messageReactionRemoveEvent
        ),
      };
    }
    if (
      object.messageReactionRemoveAllEvent !== undefined &&
      object.messageReactionRemoveAllEvent !== null
    ) {
      message.eventData = {
        $case: "messageReactionRemoveAllEvent",
        messageReactionRemoveAllEvent: MessageReactionRemoveAllEvent.fromJSON(
          object.messageReactionRemoveAllEvent
        ),
      };
    }
    if (
      object.messageReactionRemoveEmojiEvent !== undefined &&
      object.messageReactionRemoveEmojiEvent !== null
    ) {
      message.eventData = {
        $case: "messageReactionRemoveEmojiEvent",
        messageReactionRemoveEmojiEvent: MessageReactionRemoveEmojiEvent.fromJSON(
          object.messageReactionRemoveEmojiEvent
        ),
      };
    }
    if (
      object.typingStartEvent !== undefined &&
      object.typingStartEvent !== null
    ) {
      message.eventData = {
        $case: "typingStartEvent",
        typingStartEvent: TypingStartEvent.fromJSON(object.typingStartEvent),
      };
    }
    if (
      object.voiceStateUpdateEvent !== undefined &&
      object.voiceStateUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "voiceStateUpdateEvent",
        voiceStateUpdateEvent: VoiceStateUpdateEvent.fromJSON(
          object.voiceStateUpdateEvent
        ),
      };
    }
    if (
      object.voiceServerUpdateEvent !== undefined &&
      object.voiceServerUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "voiceServerUpdateEvent",
        voiceServerUpdateEvent: VoiceServerUpdateEvent.fromJSON(
          object.voiceServerUpdateEvent
        ),
      };
    }
    if (
      object.inviteCreateEvent !== undefined &&
      object.inviteCreateEvent !== null
    ) {
      message.eventData = {
        $case: "inviteCreateEvent",
        inviteCreateEvent: InviteCreateEvent.fromJSON(object.inviteCreateEvent),
      };
    }
    if (
      object.inviteDeleteEvent !== undefined &&
      object.inviteDeleteEvent !== null
    ) {
      message.eventData = {
        $case: "inviteDeleteEvent",
        inviteDeleteEvent: InviteDeleteEvent.fromJSON(object.inviteDeleteEvent),
      };
    }
    if (
      object.guildBanAddEvent !== undefined &&
      object.guildBanAddEvent !== null
    ) {
      message.eventData = {
        $case: "guildBanAddEvent",
        guildBanAddEvent: GuildBanAddEvent.fromJSON(object.guildBanAddEvent),
      };
    }
    if (
      object.guildBanRemoveEvent !== undefined &&
      object.guildBanRemoveEvent !== null
    ) {
      message.eventData = {
        $case: "guildBanRemoveEvent",
        guildBanRemoveEvent: GuildBanRemoveEvent.fromJSON(
          object.guildBanRemoveEvent
        ),
      };
    }
    if (
      object.guildEmojisUpdateEvent !== undefined &&
      object.guildEmojisUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "guildEmojisUpdateEvent",
        guildEmojisUpdateEvent: GuildEmojisUpdateEvent.fromJSON(
          object.guildEmojisUpdateEvent
        ),
      };
    }
    if (
      object.guildIntegrationsUpdateEvent !== undefined &&
      object.guildIntegrationsUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "guildIntegrationsUpdateEvent",
        guildIntegrationsUpdateEvent: GuildIntegrationsUpdateEvent.fromJSON(
          object.guildIntegrationsUpdateEvent
        ),
      };
    }
    if (
      object.webhooksUpdateEvent !== undefined &&
      object.webhooksUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "webhooksUpdateEvent",
        webhooksUpdateEvent: WebhooksUpdateEvent.fromJSON(
          object.webhooksUpdateEvent
        ),
      };
    }
    if (
      object.integrationCreateEvent !== undefined &&
      object.integrationCreateEvent !== null
    ) {
      message.eventData = {
        $case: "integrationCreateEvent",
        integrationCreateEvent: IntegrationCreateEvent.fromJSON(
          object.integrationCreateEvent
        ),
      };
    }
    if (
      object.integrationUpdateEvent !== undefined &&
      object.integrationUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "integrationUpdateEvent",
        integrationUpdateEvent: IntegrationUpdateEvent.fromJSON(
          object.integrationUpdateEvent
        ),
      };
    }
    if (
      object.integrationDeleteEvent !== undefined &&
      object.integrationDeleteEvent !== null
    ) {
      message.eventData = {
        $case: "integrationDeleteEvent",
        integrationDeleteEvent: IntegrationDeleteEvent.fromJSON(
          object.integrationDeleteEvent
        ),
      };
    }
    if (
      object.interactionCreateEvent !== undefined &&
      object.interactionCreateEvent !== null
    ) {
      message.eventData = {
        $case: "interactionCreateEvent",
        interactionCreateEvent: InteractionCreateEvent.fromJSON(
          object.interactionCreateEvent
        ),
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

  toJSON(message: EventEnvelope): unknown {
    const obj: any = {};
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
        ? GuildMemberUpdateEvent.toJSON(
            message.eventData?.guildMemberUpdateEvent
          )
        : undefined);
    message.eventData?.$case === "guildMemberRemoveEvent" &&
      (obj.guildMemberRemoveEvent = message.eventData?.guildMemberRemoveEvent
        ? GuildMemberRemoveEvent.toJSON(
            message.eventData?.guildMemberRemoveEvent
          )
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
        ? ChannelPinsUpdateEvent.toJSON(
            message.eventData?.channelPinsUpdateEvent
          )
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
        ? MessageDeleteBulkEvent.toJSON(
            message.eventData?.messageDeleteBulkEvent
          )
        : undefined);
    message.eventData?.$case === "messageReactionAddEvent" &&
      (obj.messageReactionAddEvent = message.eventData?.messageReactionAddEvent
        ? MessageReactionAddEvent.toJSON(
            message.eventData?.messageReactionAddEvent
          )
        : undefined);
    message.eventData?.$case === "messageReactionRemoveEvent" &&
      (obj.messageReactionRemoveEvent = message.eventData
        ?.messageReactionRemoveEvent
        ? MessageReactionRemoveEvent.toJSON(
            message.eventData?.messageReactionRemoveEvent
          )
        : undefined);
    message.eventData?.$case === "messageReactionRemoveAllEvent" &&
      (obj.messageReactionRemoveAllEvent = message.eventData
        ?.messageReactionRemoveAllEvent
        ? MessageReactionRemoveAllEvent.toJSON(
            message.eventData?.messageReactionRemoveAllEvent
          )
        : undefined);
    message.eventData?.$case === "messageReactionRemoveEmojiEvent" &&
      (obj.messageReactionRemoveEmojiEvent = message.eventData
        ?.messageReactionRemoveEmojiEvent
        ? MessageReactionRemoveEmojiEvent.toJSON(
            message.eventData?.messageReactionRemoveEmojiEvent
          )
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
        ? VoiceServerUpdateEvent.toJSON(
            message.eventData?.voiceServerUpdateEvent
          )
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
        ? GuildEmojisUpdateEvent.toJSON(
            message.eventData?.guildEmojisUpdateEvent
          )
        : undefined);
    message.eventData?.$case === "guildIntegrationsUpdateEvent" &&
      (obj.guildIntegrationsUpdateEvent = message.eventData
        ?.guildIntegrationsUpdateEvent
        ? GuildIntegrationsUpdateEvent.toJSON(
            message.eventData?.guildIntegrationsUpdateEvent
          )
        : undefined);
    message.eventData?.$case === "webhooksUpdateEvent" &&
      (obj.webhooksUpdateEvent = message.eventData?.webhooksUpdateEvent
        ? WebhooksUpdateEvent.toJSON(message.eventData?.webhooksUpdateEvent)
        : undefined);
    message.eventData?.$case === "integrationCreateEvent" &&
      (obj.integrationCreateEvent = message.eventData?.integrationCreateEvent
        ? IntegrationCreateEvent.toJSON(
            message.eventData?.integrationCreateEvent
          )
        : undefined);
    message.eventData?.$case === "integrationUpdateEvent" &&
      (obj.integrationUpdateEvent = message.eventData?.integrationUpdateEvent
        ? IntegrationUpdateEvent.toJSON(
            message.eventData?.integrationUpdateEvent
          )
        : undefined);
    message.eventData?.$case === "integrationDeleteEvent" &&
      (obj.integrationDeleteEvent = message.eventData?.integrationDeleteEvent
        ? IntegrationDeleteEvent.toJSON(
            message.eventData?.integrationDeleteEvent
          )
        : undefined);
    message.eventData?.$case === "interactionCreateEvent" &&
      (obj.interactionCreateEvent = message.eventData?.interactionCreateEvent
        ? InteractionCreateEvent.toJSON(
            message.eventData?.interactionCreateEvent
          )
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

  fromPartial(object: DeepPartial<EventEnvelope>): EventEnvelope {
    const message = { ...baseEventEnvelope } as EventEnvelope;
    if (object.header !== undefined && object.header !== null) {
      message.header = EventEnvelope_HeaderData.fromPartial(object.header);
    }
    if (
      object.eventData?.$case === "guildCreateEvent" &&
      object.eventData?.guildCreateEvent !== undefined &&
      object.eventData?.guildCreateEvent !== null
    ) {
      message.eventData = {
        $case: "guildCreateEvent",
        guildCreateEvent: GuildCreateEvent.fromPartial(
          object.eventData.guildCreateEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "guildUpdateEvent" &&
      object.eventData?.guildUpdateEvent !== undefined &&
      object.eventData?.guildUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "guildUpdateEvent",
        guildUpdateEvent: GuildUpdateEvent.fromPartial(
          object.eventData.guildUpdateEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "guildDeleteEvent" &&
      object.eventData?.guildDeleteEvent !== undefined &&
      object.eventData?.guildDeleteEvent !== null
    ) {
      message.eventData = {
        $case: "guildDeleteEvent",
        guildDeleteEvent: GuildDeleteEvent.fromPartial(
          object.eventData.guildDeleteEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "presenceUpdateEvent" &&
      object.eventData?.presenceUpdateEvent !== undefined &&
      object.eventData?.presenceUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "presenceUpdateEvent",
        presenceUpdateEvent: PresenceUpdateEvent.fromPartial(
          object.eventData.presenceUpdateEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "guildMemberAddEvent" &&
      object.eventData?.guildMemberAddEvent !== undefined &&
      object.eventData?.guildMemberAddEvent !== null
    ) {
      message.eventData = {
        $case: "guildMemberAddEvent",
        guildMemberAddEvent: GuildMemberAddEvent.fromPartial(
          object.eventData.guildMemberAddEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "guildMemberUpdateEvent" &&
      object.eventData?.guildMemberUpdateEvent !== undefined &&
      object.eventData?.guildMemberUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "guildMemberUpdateEvent",
        guildMemberUpdateEvent: GuildMemberUpdateEvent.fromPartial(
          object.eventData.guildMemberUpdateEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "guildMemberRemoveEvent" &&
      object.eventData?.guildMemberRemoveEvent !== undefined &&
      object.eventData?.guildMemberRemoveEvent !== null
    ) {
      message.eventData = {
        $case: "guildMemberRemoveEvent",
        guildMemberRemoveEvent: GuildMemberRemoveEvent.fromPartial(
          object.eventData.guildMemberRemoveEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "channelCreateEvent" &&
      object.eventData?.channelCreateEvent !== undefined &&
      object.eventData?.channelCreateEvent !== null
    ) {
      message.eventData = {
        $case: "channelCreateEvent",
        channelCreateEvent: ChannelCreateEvent.fromPartial(
          object.eventData.channelCreateEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "channelUpdateEvent" &&
      object.eventData?.channelUpdateEvent !== undefined &&
      object.eventData?.channelUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "channelUpdateEvent",
        channelUpdateEvent: ChannelUpdateEvent.fromPartial(
          object.eventData.channelUpdateEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "channelDeleteEvent" &&
      object.eventData?.channelDeleteEvent !== undefined &&
      object.eventData?.channelDeleteEvent !== null
    ) {
      message.eventData = {
        $case: "channelDeleteEvent",
        channelDeleteEvent: ChannelDeleteEvent.fromPartial(
          object.eventData.channelDeleteEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "channelPinsUpdateEvent" &&
      object.eventData?.channelPinsUpdateEvent !== undefined &&
      object.eventData?.channelPinsUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "channelPinsUpdateEvent",
        channelPinsUpdateEvent: ChannelPinsUpdateEvent.fromPartial(
          object.eventData.channelPinsUpdateEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "guildRoleCreateEvent" &&
      object.eventData?.guildRoleCreateEvent !== undefined &&
      object.eventData?.guildRoleCreateEvent !== null
    ) {
      message.eventData = {
        $case: "guildRoleCreateEvent",
        guildRoleCreateEvent: GuildRoleCreateEvent.fromPartial(
          object.eventData.guildRoleCreateEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "guildRoleUpdateEvent" &&
      object.eventData?.guildRoleUpdateEvent !== undefined &&
      object.eventData?.guildRoleUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "guildRoleUpdateEvent",
        guildRoleUpdateEvent: GuildRoleUpdateEvent.fromPartial(
          object.eventData.guildRoleUpdateEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "guildRoleDeleteEvent" &&
      object.eventData?.guildRoleDeleteEvent !== undefined &&
      object.eventData?.guildRoleDeleteEvent !== null
    ) {
      message.eventData = {
        $case: "guildRoleDeleteEvent",
        guildRoleDeleteEvent: GuildRoleDeleteEvent.fromPartial(
          object.eventData.guildRoleDeleteEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "messageCreateEvent" &&
      object.eventData?.messageCreateEvent !== undefined &&
      object.eventData?.messageCreateEvent !== null
    ) {
      message.eventData = {
        $case: "messageCreateEvent",
        messageCreateEvent: MessageCreateEvent.fromPartial(
          object.eventData.messageCreateEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "messageUpdateEvent" &&
      object.eventData?.messageUpdateEvent !== undefined &&
      object.eventData?.messageUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "messageUpdateEvent",
        messageUpdateEvent: MessageUpdateEvent.fromPartial(
          object.eventData.messageUpdateEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "messageDeleteEvent" &&
      object.eventData?.messageDeleteEvent !== undefined &&
      object.eventData?.messageDeleteEvent !== null
    ) {
      message.eventData = {
        $case: "messageDeleteEvent",
        messageDeleteEvent: MessageDeleteEvent.fromPartial(
          object.eventData.messageDeleteEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "messageDeleteBulkEvent" &&
      object.eventData?.messageDeleteBulkEvent !== undefined &&
      object.eventData?.messageDeleteBulkEvent !== null
    ) {
      message.eventData = {
        $case: "messageDeleteBulkEvent",
        messageDeleteBulkEvent: MessageDeleteBulkEvent.fromPartial(
          object.eventData.messageDeleteBulkEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "messageReactionAddEvent" &&
      object.eventData?.messageReactionAddEvent !== undefined &&
      object.eventData?.messageReactionAddEvent !== null
    ) {
      message.eventData = {
        $case: "messageReactionAddEvent",
        messageReactionAddEvent: MessageReactionAddEvent.fromPartial(
          object.eventData.messageReactionAddEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "messageReactionRemoveEvent" &&
      object.eventData?.messageReactionRemoveEvent !== undefined &&
      object.eventData?.messageReactionRemoveEvent !== null
    ) {
      message.eventData = {
        $case: "messageReactionRemoveEvent",
        messageReactionRemoveEvent: MessageReactionRemoveEvent.fromPartial(
          object.eventData.messageReactionRemoveEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "messageReactionRemoveAllEvent" &&
      object.eventData?.messageReactionRemoveAllEvent !== undefined &&
      object.eventData?.messageReactionRemoveAllEvent !== null
    ) {
      message.eventData = {
        $case: "messageReactionRemoveAllEvent",
        messageReactionRemoveAllEvent: MessageReactionRemoveAllEvent.fromPartial(
          object.eventData.messageReactionRemoveAllEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "messageReactionRemoveEmojiEvent" &&
      object.eventData?.messageReactionRemoveEmojiEvent !== undefined &&
      object.eventData?.messageReactionRemoveEmojiEvent !== null
    ) {
      message.eventData = {
        $case: "messageReactionRemoveEmojiEvent",
        messageReactionRemoveEmojiEvent: MessageReactionRemoveEmojiEvent.fromPartial(
          object.eventData.messageReactionRemoveEmojiEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "typingStartEvent" &&
      object.eventData?.typingStartEvent !== undefined &&
      object.eventData?.typingStartEvent !== null
    ) {
      message.eventData = {
        $case: "typingStartEvent",
        typingStartEvent: TypingStartEvent.fromPartial(
          object.eventData.typingStartEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "voiceStateUpdateEvent" &&
      object.eventData?.voiceStateUpdateEvent !== undefined &&
      object.eventData?.voiceStateUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "voiceStateUpdateEvent",
        voiceStateUpdateEvent: VoiceStateUpdateEvent.fromPartial(
          object.eventData.voiceStateUpdateEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "voiceServerUpdateEvent" &&
      object.eventData?.voiceServerUpdateEvent !== undefined &&
      object.eventData?.voiceServerUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "voiceServerUpdateEvent",
        voiceServerUpdateEvent: VoiceServerUpdateEvent.fromPartial(
          object.eventData.voiceServerUpdateEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "inviteCreateEvent" &&
      object.eventData?.inviteCreateEvent !== undefined &&
      object.eventData?.inviteCreateEvent !== null
    ) {
      message.eventData = {
        $case: "inviteCreateEvent",
        inviteCreateEvent: InviteCreateEvent.fromPartial(
          object.eventData.inviteCreateEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "inviteDeleteEvent" &&
      object.eventData?.inviteDeleteEvent !== undefined &&
      object.eventData?.inviteDeleteEvent !== null
    ) {
      message.eventData = {
        $case: "inviteDeleteEvent",
        inviteDeleteEvent: InviteDeleteEvent.fromPartial(
          object.eventData.inviteDeleteEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "guildBanAddEvent" &&
      object.eventData?.guildBanAddEvent !== undefined &&
      object.eventData?.guildBanAddEvent !== null
    ) {
      message.eventData = {
        $case: "guildBanAddEvent",
        guildBanAddEvent: GuildBanAddEvent.fromPartial(
          object.eventData.guildBanAddEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "guildBanRemoveEvent" &&
      object.eventData?.guildBanRemoveEvent !== undefined &&
      object.eventData?.guildBanRemoveEvent !== null
    ) {
      message.eventData = {
        $case: "guildBanRemoveEvent",
        guildBanRemoveEvent: GuildBanRemoveEvent.fromPartial(
          object.eventData.guildBanRemoveEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "guildEmojisUpdateEvent" &&
      object.eventData?.guildEmojisUpdateEvent !== undefined &&
      object.eventData?.guildEmojisUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "guildEmojisUpdateEvent",
        guildEmojisUpdateEvent: GuildEmojisUpdateEvent.fromPartial(
          object.eventData.guildEmojisUpdateEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "guildIntegrationsUpdateEvent" &&
      object.eventData?.guildIntegrationsUpdateEvent !== undefined &&
      object.eventData?.guildIntegrationsUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "guildIntegrationsUpdateEvent",
        guildIntegrationsUpdateEvent: GuildIntegrationsUpdateEvent.fromPartial(
          object.eventData.guildIntegrationsUpdateEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "webhooksUpdateEvent" &&
      object.eventData?.webhooksUpdateEvent !== undefined &&
      object.eventData?.webhooksUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "webhooksUpdateEvent",
        webhooksUpdateEvent: WebhooksUpdateEvent.fromPartial(
          object.eventData.webhooksUpdateEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "integrationCreateEvent" &&
      object.eventData?.integrationCreateEvent !== undefined &&
      object.eventData?.integrationCreateEvent !== null
    ) {
      message.eventData = {
        $case: "integrationCreateEvent",
        integrationCreateEvent: IntegrationCreateEvent.fromPartial(
          object.eventData.integrationCreateEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "integrationUpdateEvent" &&
      object.eventData?.integrationUpdateEvent !== undefined &&
      object.eventData?.integrationUpdateEvent !== null
    ) {
      message.eventData = {
        $case: "integrationUpdateEvent",
        integrationUpdateEvent: IntegrationUpdateEvent.fromPartial(
          object.eventData.integrationUpdateEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "integrationDeleteEvent" &&
      object.eventData?.integrationDeleteEvent !== undefined &&
      object.eventData?.integrationDeleteEvent !== null
    ) {
      message.eventData = {
        $case: "integrationDeleteEvent",
        integrationDeleteEvent: IntegrationDeleteEvent.fromPartial(
          object.eventData.integrationDeleteEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "interactionCreateEvent" &&
      object.eventData?.interactionCreateEvent !== undefined &&
      object.eventData?.interactionCreateEvent !== null
    ) {
      message.eventData = {
        $case: "interactionCreateEvent",
        interactionCreateEvent: InteractionCreateEvent.fromPartial(
          object.eventData.interactionCreateEvent
        ),
      };
    }
    if (
      object.eventData?.$case === "readyEvent" &&
      object.eventData?.readyEvent !== undefined &&
      object.eventData?.readyEvent !== null
    ) {
      message.eventData = {
        $case: "readyEvent",
        readyEvent: ReadyEvent.fromPartial(object.eventData.readyEvent),
      };
    }
    if (
      object.eventData?.$case === "resumeEvent" &&
      object.eventData?.resumeEvent !== undefined &&
      object.eventData?.resumeEvent !== null
    ) {
      message.eventData = {
        $case: "resumeEvent",
        resumeEvent: ResumeEvent.fromPartial(object.eventData.resumeEvent),
      };
    }
    return message;
  },
};

messageTypeRegistry.set(EventEnvelope.$type, EventEnvelope);

const baseEventEnvelope_HeaderData: object = {
  $type: "pylon.discord.v1.event.EventEnvelope.HeaderData",
  seq: "0",
};

export const EventEnvelope_HeaderData = {
  $type: "pylon.discord.v1.event.EventEnvelope.HeaderData" as const,

  encode(
    message: EventEnvelope_HeaderData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.seq !== "0") {
      writer.uint32(8).uint64(message.seq);
    }
    if (message.receivedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.receivedAt),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventEnvelope_HeaderData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventEnvelope_HeaderData,
    } as EventEnvelope_HeaderData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seq = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.receivedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventEnvelope_HeaderData {
    const message = {
      ...baseEventEnvelope_HeaderData,
    } as EventEnvelope_HeaderData;
    if (object.seq !== undefined && object.seq !== null) {
      message.seq = String(object.seq);
    }
    if (object.receivedAt !== undefined && object.receivedAt !== null) {
      message.receivedAt = fromJsonTimestamp(object.receivedAt);
    }
    return message;
  },

  toJSON(message: EventEnvelope_HeaderData): unknown {
    const obj: any = {};
    message.seq !== undefined && (obj.seq = message.seq);
    message.receivedAt !== undefined &&
      (obj.receivedAt = message.receivedAt.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventEnvelope_HeaderData>
  ): EventEnvelope_HeaderData {
    const message = {
      ...baseEventEnvelope_HeaderData,
    } as EventEnvelope_HeaderData;
    if (object.seq !== undefined && object.seq !== null) {
      message.seq = object.seq;
    }
    if (object.receivedAt !== undefined && object.receivedAt !== null) {
      message.receivedAt = object.receivedAt;
    }
    return message;
  },
};

messageTypeRegistry.set(
  EventEnvelope_HeaderData.$type,
  EventEnvelope_HeaderData
);

const baseEventEnvelopeAck: object = {
  $type: "pylon.discord.v1.event.EventEnvelopeAck",
  seq: "0",
};

export const EventEnvelopeAck = {
  $type: "pylon.discord.v1.event.EventEnvelopeAck" as const,

  encode(
    message: EventEnvelopeAck,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.seq !== "0") {
      writer.uint32(8).uint64(message.seq);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEnvelopeAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventEnvelopeAck } as EventEnvelopeAck;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seq = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventEnvelopeAck {
    const message = { ...baseEventEnvelopeAck } as EventEnvelopeAck;
    if (object.seq !== undefined && object.seq !== null) {
      message.seq = String(object.seq);
    }
    return message;
  },

  toJSON(message: EventEnvelopeAck): unknown {
    const obj: any = {};
    message.seq !== undefined && (obj.seq = message.seq);
    return obj;
  },

  fromPartial(object: DeepPartial<EventEnvelopeAck>): EventEnvelopeAck {
    const message = { ...baseEventEnvelopeAck } as EventEnvelopeAck;
    if (object.seq !== undefined && object.seq !== null) {
      message.seq = object.seq;
    }
    return message;
  },
};

messageTypeRegistry.set(EventEnvelopeAck.$type, EventEnvelopeAck);

const baseEventScope: object = {
  $type: "pylon.discord.v1.event.EventScope",
  botId: "0",
  guildId: "0",
};

export const EventScope = {
  $type: "pylon.discord.v1.event.EventScope" as const,

  encode(
    message: EventScope,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.botId !== "0") {
      writer.uint32(9).fixed64(message.botId);
    }
    if (message.guildId !== "0") {
      writer.uint32(17).fixed64(message.guildId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventScope {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventScope } as EventScope;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.botId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.guildId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventScope {
    const message = { ...baseEventScope } as EventScope;
    if (object.botId !== undefined && object.botId !== null) {
      message.botId = String(object.botId);
    }
    if (object.guildId !== undefined && object.guildId !== null) {
      message.guildId = String(object.guildId);
    }
    return message;
  },

  toJSON(message: EventScope): unknown {
    const obj: any = {};
    message.botId !== undefined && (obj.botId = message.botId);
    message.guildId !== undefined && (obj.guildId = message.guildId);
    return obj;
  },

  fromPartial(object: DeepPartial<EventScope>): EventScope {
    const message = { ...baseEventScope } as EventScope;
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

const baseReadyEvent: object = { $type: "pylon.discord.v1.event.ReadyEvent" };

export const ReadyEvent = {
  $type: "pylon.discord.v1.event.ReadyEvent" as const,

  encode(
    message: ReadyEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadyEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReadyEvent } as ReadyEvent;
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

  fromJSON(object: any): ReadyEvent {
    const message = { ...baseReadyEvent } as ReadyEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    return message;
  },

  toJSON(message: ReadyEvent): unknown {
    const obj: any = {};
    message.scope !== undefined &&
      (obj.scope = message.scope
        ? EventScope.toJSON(message.scope)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ReadyEvent>): ReadyEvent {
    const message = { ...baseReadyEvent } as ReadyEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    return message;
  },
};

messageTypeRegistry.set(ReadyEvent.$type, ReadyEvent);

const baseResumeEvent: object = { $type: "pylon.discord.v1.event.ResumeEvent" };

export const ResumeEvent = {
  $type: "pylon.discord.v1.event.ResumeEvent" as const,

  encode(
    message: ResumeEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResumeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResumeEvent } as ResumeEvent;
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

  fromJSON(object: any): ResumeEvent {
    const message = { ...baseResumeEvent } as ResumeEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    return message;
  },

  toJSON(message: ResumeEvent): unknown {
    const obj: any = {};
    message.scope !== undefined &&
      (obj.scope = message.scope
        ? EventScope.toJSON(message.scope)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ResumeEvent>): ResumeEvent {
    const message = { ...baseResumeEvent } as ResumeEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    return message;
  },
};

messageTypeRegistry.set(ResumeEvent.$type, ResumeEvent);

const baseGuildCreateEvent: object = {
  $type: "pylon.discord.v1.event.GuildCreateEvent",
};

export const GuildCreateEvent = {
  $type: "pylon.discord.v1.event.GuildCreateEvent" as const,

  encode(
    message: GuildCreateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      GuildData.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GuildCreateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGuildCreateEvent } as GuildCreateEvent;
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

  fromJSON(object: any): GuildCreateEvent {
    const message = { ...baseGuildCreateEvent } as GuildCreateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = GuildData.fromJSON(object.payload);
    }
    return message;
  },

  toJSON(message: GuildCreateEvent): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<GuildCreateEvent>): GuildCreateEvent {
    const message = { ...baseGuildCreateEvent } as GuildCreateEvent;
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

const baseGuildUpdateEvent: object = {
  $type: "pylon.discord.v1.event.GuildUpdateEvent",
};

export const GuildUpdateEvent = {
  $type: "pylon.discord.v1.event.GuildUpdateEvent" as const,

  encode(
    message: GuildUpdateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      GuildData.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    if (message.previouslyCached !== undefined) {
      GuildData.encode(
        message.previouslyCached,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GuildUpdateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGuildUpdateEvent } as GuildUpdateEvent;
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

  fromJSON(object: any): GuildUpdateEvent {
    const message = { ...baseGuildUpdateEvent } as GuildUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = GuildData.fromJSON(object.payload);
    }
    if (
      object.previouslyCached !== undefined &&
      object.previouslyCached !== null
    ) {
      message.previouslyCached = GuildData.fromJSON(object.previouslyCached);
    }
    return message;
  },

  toJSON(message: GuildUpdateEvent): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<GuildUpdateEvent>): GuildUpdateEvent {
    const message = { ...baseGuildUpdateEvent } as GuildUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = GuildData.fromPartial(object.payload);
    }
    if (
      object.previouslyCached !== undefined &&
      object.previouslyCached !== null
    ) {
      message.previouslyCached = GuildData.fromPartial(object.previouslyCached);
    }
    return message;
  },
};

messageTypeRegistry.set(GuildUpdateEvent.$type, GuildUpdateEvent);

const baseGuildDeleteEvent: object = {
  $type: "pylon.discord.v1.event.GuildDeleteEvent",
};

export const GuildDeleteEvent = {
  $type: "pylon.discord.v1.event.GuildDeleteEvent" as const,

  encode(
    message: GuildDeleteEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      GuildData.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GuildDeleteEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGuildDeleteEvent } as GuildDeleteEvent;
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

  fromJSON(object: any): GuildDeleteEvent {
    const message = { ...baseGuildDeleteEvent } as GuildDeleteEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = GuildData.fromJSON(object.payload);
    }
    return message;
  },

  toJSON(message: GuildDeleteEvent): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<GuildDeleteEvent>): GuildDeleteEvent {
    const message = { ...baseGuildDeleteEvent } as GuildDeleteEvent;
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

const basePresenceUpdateEvent: object = {
  $type: "pylon.discord.v1.event.PresenceUpdateEvent",
};

export const PresenceUpdateEvent = {
  $type: "pylon.discord.v1.event.PresenceUpdateEvent" as const,

  encode(
    message: PresenceUpdateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      PresenceData.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    if (message.previouslyCached !== undefined) {
      PresenceData.encode(
        message.previouslyCached,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PresenceUpdateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePresenceUpdateEvent } as PresenceUpdateEvent;
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
          message.previouslyCached = PresenceData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PresenceUpdateEvent {
    const message = { ...basePresenceUpdateEvent } as PresenceUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = PresenceData.fromJSON(object.payload);
    }
    if (
      object.previouslyCached !== undefined &&
      object.previouslyCached !== null
    ) {
      message.previouslyCached = PresenceData.fromJSON(object.previouslyCached);
    }
    return message;
  },

  toJSON(message: PresenceUpdateEvent): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<PresenceUpdateEvent>): PresenceUpdateEvent {
    const message = { ...basePresenceUpdateEvent } as PresenceUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = PresenceData.fromPartial(object.payload);
    }
    if (
      object.previouslyCached !== undefined &&
      object.previouslyCached !== null
    ) {
      message.previouslyCached = PresenceData.fromPartial(
        object.previouslyCached
      );
    }
    return message;
  },
};

messageTypeRegistry.set(PresenceUpdateEvent.$type, PresenceUpdateEvent);

const baseGuildMemberAddEvent: object = {
  $type: "pylon.discord.v1.event.GuildMemberAddEvent",
};

export const GuildMemberAddEvent = {
  $type: "pylon.discord.v1.event.GuildMemberAddEvent" as const,

  encode(
    message: GuildMemberAddEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      MemberData.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GuildMemberAddEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGuildMemberAddEvent } as GuildMemberAddEvent;
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

  fromJSON(object: any): GuildMemberAddEvent {
    const message = { ...baseGuildMemberAddEvent } as GuildMemberAddEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MemberData.fromJSON(object.payload);
    }
    return message;
  },

  toJSON(message: GuildMemberAddEvent): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<GuildMemberAddEvent>): GuildMemberAddEvent {
    const message = { ...baseGuildMemberAddEvent } as GuildMemberAddEvent;
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

const baseGuildMemberUpdateEvent: object = {
  $type: "pylon.discord.v1.event.GuildMemberUpdateEvent",
};

export const GuildMemberUpdateEvent = {
  $type: "pylon.discord.v1.event.GuildMemberUpdateEvent" as const,

  encode(
    message: GuildMemberUpdateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      MemberData.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    if (message.previouslyCached !== undefined) {
      MemberData.encode(
        message.previouslyCached,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GuildMemberUpdateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGuildMemberUpdateEvent } as GuildMemberUpdateEvent;
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

  fromJSON(object: any): GuildMemberUpdateEvent {
    const message = { ...baseGuildMemberUpdateEvent } as GuildMemberUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MemberData.fromJSON(object.payload);
    }
    if (
      object.previouslyCached !== undefined &&
      object.previouslyCached !== null
    ) {
      message.previouslyCached = MemberData.fromJSON(object.previouslyCached);
    }
    return message;
  },

  toJSON(message: GuildMemberUpdateEvent): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<GuildMemberUpdateEvent>
  ): GuildMemberUpdateEvent {
    const message = { ...baseGuildMemberUpdateEvent } as GuildMemberUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MemberData.fromPartial(object.payload);
    }
    if (
      object.previouslyCached !== undefined &&
      object.previouslyCached !== null
    ) {
      message.previouslyCached = MemberData.fromPartial(
        object.previouslyCached
      );
    }
    return message;
  },
};

messageTypeRegistry.set(GuildMemberUpdateEvent.$type, GuildMemberUpdateEvent);

const baseGuildMemberRemoveEvent: object = {
  $type: "pylon.discord.v1.event.GuildMemberRemoveEvent",
};

export const GuildMemberRemoveEvent = {
  $type: "pylon.discord.v1.event.GuildMemberRemoveEvent" as const,

  encode(
    message: GuildMemberRemoveEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      MemberData.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GuildMemberRemoveEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGuildMemberRemoveEvent } as GuildMemberRemoveEvent;
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

  fromJSON(object: any): GuildMemberRemoveEvent {
    const message = { ...baseGuildMemberRemoveEvent } as GuildMemberRemoveEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MemberData.fromJSON(object.payload);
    }
    return message;
  },

  toJSON(message: GuildMemberRemoveEvent): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<GuildMemberRemoveEvent>
  ): GuildMemberRemoveEvent {
    const message = { ...baseGuildMemberRemoveEvent } as GuildMemberRemoveEvent;
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

const baseChannelCreateEvent: object = {
  $type: "pylon.discord.v1.event.ChannelCreateEvent",
};

export const ChannelCreateEvent = {
  $type: "pylon.discord.v1.event.ChannelCreateEvent" as const,

  encode(
    message: ChannelCreateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      ChannelData.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelCreateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChannelCreateEvent } as ChannelCreateEvent;
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

  fromJSON(object: any): ChannelCreateEvent {
    const message = { ...baseChannelCreateEvent } as ChannelCreateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = ChannelData.fromJSON(object.payload);
    }
    return message;
  },

  toJSON(message: ChannelCreateEvent): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<ChannelCreateEvent>): ChannelCreateEvent {
    const message = { ...baseChannelCreateEvent } as ChannelCreateEvent;
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

const baseChannelUpdateEvent: object = {
  $type: "pylon.discord.v1.event.ChannelUpdateEvent",
};

export const ChannelUpdateEvent = {
  $type: "pylon.discord.v1.event.ChannelUpdateEvent" as const,

  encode(
    message: ChannelUpdateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      ChannelData.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    if (message.previouslyCached !== undefined) {
      ChannelData.encode(
        message.previouslyCached,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelUpdateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChannelUpdateEvent } as ChannelUpdateEvent;
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
          message.previouslyCached = ChannelData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChannelUpdateEvent {
    const message = { ...baseChannelUpdateEvent } as ChannelUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = ChannelData.fromJSON(object.payload);
    }
    if (
      object.previouslyCached !== undefined &&
      object.previouslyCached !== null
    ) {
      message.previouslyCached = ChannelData.fromJSON(object.previouslyCached);
    }
    return message;
  },

  toJSON(message: ChannelUpdateEvent): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<ChannelUpdateEvent>): ChannelUpdateEvent {
    const message = { ...baseChannelUpdateEvent } as ChannelUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = ChannelData.fromPartial(object.payload);
    }
    if (
      object.previouslyCached !== undefined &&
      object.previouslyCached !== null
    ) {
      message.previouslyCached = ChannelData.fromPartial(
        object.previouslyCached
      );
    }
    return message;
  },
};

messageTypeRegistry.set(ChannelUpdateEvent.$type, ChannelUpdateEvent);

const baseChannelDeleteEvent: object = {
  $type: "pylon.discord.v1.event.ChannelDeleteEvent",
};

export const ChannelDeleteEvent = {
  $type: "pylon.discord.v1.event.ChannelDeleteEvent" as const,

  encode(
    message: ChannelDeleteEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      ChannelData.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelDeleteEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChannelDeleteEvent } as ChannelDeleteEvent;
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

  fromJSON(object: any): ChannelDeleteEvent {
    const message = { ...baseChannelDeleteEvent } as ChannelDeleteEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = ChannelData.fromJSON(object.payload);
    }
    return message;
  },

  toJSON(message: ChannelDeleteEvent): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<ChannelDeleteEvent>): ChannelDeleteEvent {
    const message = { ...baseChannelDeleteEvent } as ChannelDeleteEvent;
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

const baseChannelPinsUpdateEvent: object = {
  $type: "pylon.discord.v1.event.ChannelPinsUpdateEvent",
};

export const ChannelPinsUpdateEvent = {
  $type: "pylon.discord.v1.event.ChannelPinsUpdateEvent" as const,

  encode(
    message: ChannelPinsUpdateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      ChannelPinsUpdateEvent_PayloadData.encode(
        message.payload,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChannelPinsUpdateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChannelPinsUpdateEvent } as ChannelPinsUpdateEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = EventScope.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = ChannelPinsUpdateEvent_PayloadData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChannelPinsUpdateEvent {
    const message = { ...baseChannelPinsUpdateEvent } as ChannelPinsUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = ChannelPinsUpdateEvent_PayloadData.fromJSON(
        object.payload
      );
    }
    return message;
  },

  toJSON(message: ChannelPinsUpdateEvent): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<ChannelPinsUpdateEvent>
  ): ChannelPinsUpdateEvent {
    const message = { ...baseChannelPinsUpdateEvent } as ChannelPinsUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = ChannelPinsUpdateEvent_PayloadData.fromPartial(
        object.payload
      );
    }
    return message;
  },
};

messageTypeRegistry.set(ChannelPinsUpdateEvent.$type, ChannelPinsUpdateEvent);

const baseChannelPinsUpdateEvent_PayloadData: object = {
  $type: "pylon.discord.v1.event.ChannelPinsUpdateEvent.PayloadData",
  channelId: "0",
  guildId: "0",
};

export const ChannelPinsUpdateEvent_PayloadData = {
  $type: "pylon.discord.v1.event.ChannelPinsUpdateEvent.PayloadData" as const,

  encode(
    message: ChannelPinsUpdateEvent_PayloadData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.guildId !== "0") {
      writer.uint32(17).fixed64(message.guildId);
    }
    if (message.lastPinTimestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastPinTimestamp),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChannelPinsUpdateEvent_PayloadData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseChannelPinsUpdateEvent_PayloadData,
    } as ChannelPinsUpdateEvent_PayloadData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.guildId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.lastPinTimestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChannelPinsUpdateEvent_PayloadData {
    const message = {
      ...baseChannelPinsUpdateEvent_PayloadData,
    } as ChannelPinsUpdateEvent_PayloadData;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    if (object.guildId !== undefined && object.guildId !== null) {
      message.guildId = String(object.guildId);
    }
    if (
      object.lastPinTimestamp !== undefined &&
      object.lastPinTimestamp !== null
    ) {
      message.lastPinTimestamp = fromJsonTimestamp(object.lastPinTimestamp);
    }
    return message;
  },

  toJSON(message: ChannelPinsUpdateEvent_PayloadData): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.guildId !== undefined && (obj.guildId = message.guildId);
    message.lastPinTimestamp !== undefined &&
      (obj.lastPinTimestamp = message.lastPinTimestamp.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<ChannelPinsUpdateEvent_PayloadData>
  ): ChannelPinsUpdateEvent_PayloadData {
    const message = {
      ...baseChannelPinsUpdateEvent_PayloadData,
    } as ChannelPinsUpdateEvent_PayloadData;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    if (object.guildId !== undefined && object.guildId !== null) {
      message.guildId = object.guildId;
    }
    if (
      object.lastPinTimestamp !== undefined &&
      object.lastPinTimestamp !== null
    ) {
      message.lastPinTimestamp = object.lastPinTimestamp;
    }
    return message;
  },
};

messageTypeRegistry.set(
  ChannelPinsUpdateEvent_PayloadData.$type,
  ChannelPinsUpdateEvent_PayloadData
);

const baseGuildRoleCreateEvent: object = {
  $type: "pylon.discord.v1.event.GuildRoleCreateEvent",
};

export const GuildRoleCreateEvent = {
  $type: "pylon.discord.v1.event.GuildRoleCreateEvent" as const,

  encode(
    message: GuildRoleCreateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      RoleData.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GuildRoleCreateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGuildRoleCreateEvent } as GuildRoleCreateEvent;
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

  fromJSON(object: any): GuildRoleCreateEvent {
    const message = { ...baseGuildRoleCreateEvent } as GuildRoleCreateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = RoleData.fromJSON(object.payload);
    }
    return message;
  },

  toJSON(message: GuildRoleCreateEvent): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<GuildRoleCreateEvent>): GuildRoleCreateEvent {
    const message = { ...baseGuildRoleCreateEvent } as GuildRoleCreateEvent;
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

const baseGuildRoleUpdateEvent: object = {
  $type: "pylon.discord.v1.event.GuildRoleUpdateEvent",
};

export const GuildRoleUpdateEvent = {
  $type: "pylon.discord.v1.event.GuildRoleUpdateEvent" as const,

  encode(
    message: GuildRoleUpdateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      RoleData.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    if (message.previouslyCached !== undefined) {
      RoleData.encode(
        message.previouslyCached,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GuildRoleUpdateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGuildRoleUpdateEvent } as GuildRoleUpdateEvent;
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

  fromJSON(object: any): GuildRoleUpdateEvent {
    const message = { ...baseGuildRoleUpdateEvent } as GuildRoleUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = RoleData.fromJSON(object.payload);
    }
    if (
      object.previouslyCached !== undefined &&
      object.previouslyCached !== null
    ) {
      message.previouslyCached = RoleData.fromJSON(object.previouslyCached);
    }
    return message;
  },

  toJSON(message: GuildRoleUpdateEvent): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<GuildRoleUpdateEvent>): GuildRoleUpdateEvent {
    const message = { ...baseGuildRoleUpdateEvent } as GuildRoleUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = RoleData.fromPartial(object.payload);
    }
    if (
      object.previouslyCached !== undefined &&
      object.previouslyCached !== null
    ) {
      message.previouslyCached = RoleData.fromPartial(object.previouslyCached);
    }
    return message;
  },
};

messageTypeRegistry.set(GuildRoleUpdateEvent.$type, GuildRoleUpdateEvent);

const baseGuildRoleDeleteEvent: object = {
  $type: "pylon.discord.v1.event.GuildRoleDeleteEvent",
};

export const GuildRoleDeleteEvent = {
  $type: "pylon.discord.v1.event.GuildRoleDeleteEvent" as const,

  encode(
    message: GuildRoleDeleteEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      RoleData.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GuildRoleDeleteEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGuildRoleDeleteEvent } as GuildRoleDeleteEvent;
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

  fromJSON(object: any): GuildRoleDeleteEvent {
    const message = { ...baseGuildRoleDeleteEvent } as GuildRoleDeleteEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = RoleData.fromJSON(object.payload);
    }
    return message;
  },

  toJSON(message: GuildRoleDeleteEvent): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<GuildRoleDeleteEvent>): GuildRoleDeleteEvent {
    const message = { ...baseGuildRoleDeleteEvent } as GuildRoleDeleteEvent;
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

const baseMessageCreateEvent: object = {
  $type: "pylon.discord.v1.event.MessageCreateEvent",
};

export const MessageCreateEvent = {
  $type: "pylon.discord.v1.event.MessageCreateEvent" as const,

  encode(
    message: MessageCreateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.messageData !== undefined) {
      MessageData.encode(
        message.messageData,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageCreateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMessageCreateEvent } as MessageCreateEvent;
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

  fromJSON(object: any): MessageCreateEvent {
    const message = { ...baseMessageCreateEvent } as MessageCreateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.messageData !== undefined && object.messageData !== null) {
      message.messageData = MessageData.fromJSON(object.messageData);
    }
    return message;
  },

  toJSON(message: MessageCreateEvent): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<MessageCreateEvent>): MessageCreateEvent {
    const message = { ...baseMessageCreateEvent } as MessageCreateEvent;
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

const baseMessageUpdateEvent: object = {
  $type: "pylon.discord.v1.event.MessageUpdateEvent",
};

export const MessageUpdateEvent = {
  $type: "pylon.discord.v1.event.MessageUpdateEvent" as const,

  encode(
    message: MessageUpdateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload?.$case === "cached") {
      MessageData.encode(
        message.payload.cached,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.payload?.$case === "raw") {
      MessageUpdateEvent_PayloadData.encode(
        message.payload.raw,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.previouslyCached !== undefined) {
      MessageData.encode(
        message.previouslyCached,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageUpdateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMessageUpdateEvent } as MessageUpdateEvent;
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
          message.previouslyCached = MessageData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageUpdateEvent {
    const message = { ...baseMessageUpdateEvent } as MessageUpdateEvent;
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
    if (
      object.previouslyCached !== undefined &&
      object.previouslyCached !== null
    ) {
      message.previouslyCached = MessageData.fromJSON(object.previouslyCached);
    }
    return message;
  },

  toJSON(message: MessageUpdateEvent): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<MessageUpdateEvent>): MessageUpdateEvent {
    const message = { ...baseMessageUpdateEvent } as MessageUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (
      object.payload?.$case === "cached" &&
      object.payload?.cached !== undefined &&
      object.payload?.cached !== null
    ) {
      message.payload = {
        $case: "cached",
        cached: MessageData.fromPartial(object.payload.cached),
      };
    }
    if (
      object.payload?.$case === "raw" &&
      object.payload?.raw !== undefined &&
      object.payload?.raw !== null
    ) {
      message.payload = {
        $case: "raw",
        raw: MessageUpdateEvent_PayloadData.fromPartial(object.payload.raw),
      };
    }
    if (
      object.previouslyCached !== undefined &&
      object.previouslyCached !== null
    ) {
      message.previouslyCached = MessageData.fromPartial(
        object.previouslyCached
      );
    }
    return message;
  },
};

messageTypeRegistry.set(MessageUpdateEvent.$type, MessageUpdateEvent);

const baseMessageUpdateEvent_PayloadData: object = {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData",
  id: "0",
  channelId: "0",
};

export const MessageUpdateEvent_PayloadData = {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData" as const,

  encode(
    message: MessageUpdateEvent_PayloadData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.content! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.editedTimestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.editedTimestamp),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.mentionRoles !== undefined) {
      SnowflakeListValue.encode(
        message.mentionRoles,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.tts !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.tts! },
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.mentionEveryone !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.mentionEveryone! },
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.attachments !== undefined) {
      MessageUpdateEvent_PayloadData_MessageAttachmentListValue.encode(
        message.attachments,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.embeds !== undefined) {
      MessageUpdateEvent_PayloadData_MessageEmbedListValue.encode(
        message.embeds,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.mentions !== undefined) {
      MessageUpdateEvent_PayloadData_MessageMentionListValue.encode(
        message.mentions,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.reactions !== undefined) {
      MessageUpdateEvent_PayloadData_MessageReactionListValue.encode(
        message.reactions,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.pinned !== undefined) {
      BoolValue.encode(
        { $type: "google.protobuf.BoolValue", value: message.pinned! },
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.type !== undefined) {
      MessageUpdateEvent_PayloadData_MessageTypeValue.encode(
        message.type,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.mentionChannels !== undefined) {
      MessageUpdateEvent_PayloadData_MessageMentionChannelListValue.encode(
        message.mentionChannels,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.flags !== undefined) {
      UInt32Value.encode(
        { $type: "google.protobuf.UInt32Value", value: message.flags! },
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.activity !== undefined) {
      MessageUpdateEvent_PayloadData_MessageActivityValue.encode(
        message.activity,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.application !== undefined) {
      MessageUpdateEvent_PayloadData_MessageApplicationValue.encode(
        message.application,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.messageReference !== undefined) {
      MessageUpdateEvent_PayloadData_MessageReferenceValue.encode(
        message.messageReference,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.author !== undefined) {
      MessageUpdateEvent_PayloadData_MessageAuthorValue.encode(
        message.author,
        writer.uint32(162).fork()
      ).ldelim();
    }
    if (message.member !== undefined) {
      MessageUpdateEvent_PayloadData_MessageMemberValue.encode(
        message.member,
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.webhookId !== undefined) {
      SnowflakeValue.encode(
        message.webhookId,
        writer.uint32(178).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MessageUpdateEvent_PayloadData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMessageUpdateEvent_PayloadData,
    } as MessageUpdateEvent_PayloadData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.guildId = SnowflakeValue.decode(reader, reader.uint32());
          break;
        case 4:
          message.content = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 5:
          message.editedTimestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.mentionRoles = SnowflakeListValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.tts = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 8:
          message.mentionEveryone = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 9:
          message.attachments = MessageUpdateEvent_PayloadData_MessageAttachmentListValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.embeds = MessageUpdateEvent_PayloadData_MessageEmbedListValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.mentions = MessageUpdateEvent_PayloadData_MessageMentionListValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.reactions = MessageUpdateEvent_PayloadData_MessageReactionListValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.pinned = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 14:
          message.type = MessageUpdateEvent_PayloadData_MessageTypeValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.mentionChannels = MessageUpdateEvent_PayloadData_MessageMentionChannelListValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.flags = UInt32Value.decode(reader, reader.uint32()).value;
          break;
        case 17:
          message.activity = MessageUpdateEvent_PayloadData_MessageActivityValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 18:
          message.application = MessageUpdateEvent_PayloadData_MessageApplicationValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 19:
          message.messageReference = MessageUpdateEvent_PayloadData_MessageReferenceValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 20:
          message.author = MessageUpdateEvent_PayloadData_MessageAuthorValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 21:
          message.member = MessageUpdateEvent_PayloadData_MessageMemberValue.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): MessageUpdateEvent_PayloadData {
    const message = {
      ...baseMessageUpdateEvent_PayloadData,
    } as MessageUpdateEvent_PayloadData;
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
    if (
      object.editedTimestamp !== undefined &&
      object.editedTimestamp !== null
    ) {
      message.editedTimestamp = fromJsonTimestamp(object.editedTimestamp);
    }
    if (object.mentionRoles !== undefined && object.mentionRoles !== null) {
      message.mentionRoles = SnowflakeListValue.fromJSON(object.mentionRoles);
    }
    if (object.tts !== undefined && object.tts !== null) {
      message.tts = Boolean(object.tts);
    }
    if (
      object.mentionEveryone !== undefined &&
      object.mentionEveryone !== null
    ) {
      message.mentionEveryone = Boolean(object.mentionEveryone);
    }
    if (object.attachments !== undefined && object.attachments !== null) {
      message.attachments = MessageUpdateEvent_PayloadData_MessageAttachmentListValue.fromJSON(
        object.attachments
      );
    }
    if (object.embeds !== undefined && object.embeds !== null) {
      message.embeds = MessageUpdateEvent_PayloadData_MessageEmbedListValue.fromJSON(
        object.embeds
      );
    }
    if (object.mentions !== undefined && object.mentions !== null) {
      message.mentions = MessageUpdateEvent_PayloadData_MessageMentionListValue.fromJSON(
        object.mentions
      );
    }
    if (object.reactions !== undefined && object.reactions !== null) {
      message.reactions = MessageUpdateEvent_PayloadData_MessageReactionListValue.fromJSON(
        object.reactions
      );
    }
    if (object.pinned !== undefined && object.pinned !== null) {
      message.pinned = Boolean(object.pinned);
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = MessageUpdateEvent_PayloadData_MessageTypeValue.fromJSON(
        object.type
      );
    }
    if (
      object.mentionChannels !== undefined &&
      object.mentionChannels !== null
    ) {
      message.mentionChannels = MessageUpdateEvent_PayloadData_MessageMentionChannelListValue.fromJSON(
        object.mentionChannels
      );
    }
    if (object.flags !== undefined && object.flags !== null) {
      message.flags = Number(object.flags);
    }
    if (object.activity !== undefined && object.activity !== null) {
      message.activity = MessageUpdateEvent_PayloadData_MessageActivityValue.fromJSON(
        object.activity
      );
    }
    if (object.application !== undefined && object.application !== null) {
      message.application = MessageUpdateEvent_PayloadData_MessageApplicationValue.fromJSON(
        object.application
      );
    }
    if (
      object.messageReference !== undefined &&
      object.messageReference !== null
    ) {
      message.messageReference = MessageUpdateEvent_PayloadData_MessageReferenceValue.fromJSON(
        object.messageReference
      );
    }
    if (object.author !== undefined && object.author !== null) {
      message.author = MessageUpdateEvent_PayloadData_MessageAuthorValue.fromJSON(
        object.author
      );
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = MessageUpdateEvent_PayloadData_MessageMemberValue.fromJSON(
        object.member
      );
    }
    if (object.webhookId !== undefined && object.webhookId !== null) {
      message.webhookId = SnowflakeValue.fromJSON(object.webhookId);
    }
    return message;
  },

  toJSON(message: MessageUpdateEvent_PayloadData): unknown {
    const obj: any = {};
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
        ? MessageUpdateEvent_PayloadData_MessageAttachmentListValue.toJSON(
            message.attachments
          )
        : undefined);
    message.embeds !== undefined &&
      (obj.embeds = message.embeds
        ? MessageUpdateEvent_PayloadData_MessageEmbedListValue.toJSON(
            message.embeds
          )
        : undefined);
    message.mentions !== undefined &&
      (obj.mentions = message.mentions
        ? MessageUpdateEvent_PayloadData_MessageMentionListValue.toJSON(
            message.mentions
          )
        : undefined);
    message.reactions !== undefined &&
      (obj.reactions = message.reactions
        ? MessageUpdateEvent_PayloadData_MessageReactionListValue.toJSON(
            message.reactions
          )
        : undefined);
    message.pinned !== undefined && (obj.pinned = message.pinned);
    message.type !== undefined &&
      (obj.type = message.type
        ? MessageUpdateEvent_PayloadData_MessageTypeValue.toJSON(message.type)
        : undefined);
    message.mentionChannels !== undefined &&
      (obj.mentionChannels = message.mentionChannels
        ? MessageUpdateEvent_PayloadData_MessageMentionChannelListValue.toJSON(
            message.mentionChannels
          )
        : undefined);
    message.flags !== undefined && (obj.flags = message.flags);
    message.activity !== undefined &&
      (obj.activity = message.activity
        ? MessageUpdateEvent_PayloadData_MessageActivityValue.toJSON(
            message.activity
          )
        : undefined);
    message.application !== undefined &&
      (obj.application = message.application
        ? MessageUpdateEvent_PayloadData_MessageApplicationValue.toJSON(
            message.application
          )
        : undefined);
    message.messageReference !== undefined &&
      (obj.messageReference = message.messageReference
        ? MessageUpdateEvent_PayloadData_MessageReferenceValue.toJSON(
            message.messageReference
          )
        : undefined);
    message.author !== undefined &&
      (obj.author = message.author
        ? MessageUpdateEvent_PayloadData_MessageAuthorValue.toJSON(
            message.author
          )
        : undefined);
    message.member !== undefined &&
      (obj.member = message.member
        ? MessageUpdateEvent_PayloadData_MessageMemberValue.toJSON(
            message.member
          )
        : undefined);
    message.webhookId !== undefined &&
      (obj.webhookId = message.webhookId
        ? SnowflakeValue.toJSON(message.webhookId)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MessageUpdateEvent_PayloadData>
  ): MessageUpdateEvent_PayloadData {
    const message = {
      ...baseMessageUpdateEvent_PayloadData,
    } as MessageUpdateEvent_PayloadData;
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
    if (
      object.editedTimestamp !== undefined &&
      object.editedTimestamp !== null
    ) {
      message.editedTimestamp = object.editedTimestamp;
    }
    if (object.mentionRoles !== undefined && object.mentionRoles !== null) {
      message.mentionRoles = SnowflakeListValue.fromPartial(
        object.mentionRoles
      );
    }
    if (object.tts !== undefined && object.tts !== null) {
      message.tts = object.tts;
    }
    if (
      object.mentionEveryone !== undefined &&
      object.mentionEveryone !== null
    ) {
      message.mentionEveryone = object.mentionEveryone;
    }
    if (object.attachments !== undefined && object.attachments !== null) {
      message.attachments = MessageUpdateEvent_PayloadData_MessageAttachmentListValue.fromPartial(
        object.attachments
      );
    }
    if (object.embeds !== undefined && object.embeds !== null) {
      message.embeds = MessageUpdateEvent_PayloadData_MessageEmbedListValue.fromPartial(
        object.embeds
      );
    }
    if (object.mentions !== undefined && object.mentions !== null) {
      message.mentions = MessageUpdateEvent_PayloadData_MessageMentionListValue.fromPartial(
        object.mentions
      );
    }
    if (object.reactions !== undefined && object.reactions !== null) {
      message.reactions = MessageUpdateEvent_PayloadData_MessageReactionListValue.fromPartial(
        object.reactions
      );
    }
    if (object.pinned !== undefined && object.pinned !== null) {
      message.pinned = object.pinned;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = MessageUpdateEvent_PayloadData_MessageTypeValue.fromPartial(
        object.type
      );
    }
    if (
      object.mentionChannels !== undefined &&
      object.mentionChannels !== null
    ) {
      message.mentionChannels = MessageUpdateEvent_PayloadData_MessageMentionChannelListValue.fromPartial(
        object.mentionChannels
      );
    }
    if (object.flags !== undefined && object.flags !== null) {
      message.flags = object.flags;
    }
    if (object.activity !== undefined && object.activity !== null) {
      message.activity = MessageUpdateEvent_PayloadData_MessageActivityValue.fromPartial(
        object.activity
      );
    }
    if (object.application !== undefined && object.application !== null) {
      message.application = MessageUpdateEvent_PayloadData_MessageApplicationValue.fromPartial(
        object.application
      );
    }
    if (
      object.messageReference !== undefined &&
      object.messageReference !== null
    ) {
      message.messageReference = MessageUpdateEvent_PayloadData_MessageReferenceValue.fromPartial(
        object.messageReference
      );
    }
    if (object.author !== undefined && object.author !== null) {
      message.author = MessageUpdateEvent_PayloadData_MessageAuthorValue.fromPartial(
        object.author
      );
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = MessageUpdateEvent_PayloadData_MessageMemberValue.fromPartial(
        object.member
      );
    }
    if (object.webhookId !== undefined && object.webhookId !== null) {
      message.webhookId = SnowflakeValue.fromPartial(object.webhookId);
    }
    return message;
  },
};

messageTypeRegistry.set(
  MessageUpdateEvent_PayloadData.$type,
  MessageUpdateEvent_PayloadData
);

const baseMessageUpdateEvent_PayloadData_MessageAttachmentListValue: object = {
  $type:
    "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageAttachmentListValue",
};

export const MessageUpdateEvent_PayloadData_MessageAttachmentListValue = {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageAttachmentListValue" as const,

  encode(
    message: MessageUpdateEvent_PayloadData_MessageAttachmentListValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.values) {
      MessageData_MessageAttachmentData.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MessageUpdateEvent_PayloadData_MessageAttachmentListValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageAttachmentListValue,
    } as MessageUpdateEvent_PayloadData_MessageAttachmentListValue;
    message.values = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(
            MessageData_MessageAttachmentData.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(
    object: any
  ): MessageUpdateEvent_PayloadData_MessageAttachmentListValue {
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageAttachmentListValue,
    } as MessageUpdateEvent_PayloadData_MessageAttachmentListValue;
    message.values = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(MessageData_MessageAttachmentData.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(
    message: MessageUpdateEvent_PayloadData_MessageAttachmentListValue
  ): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) =>
        e ? MessageData_MessageAttachmentData.toJSON(e) : undefined
      );
    } else {
      obj.values = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MessageUpdateEvent_PayloadData_MessageAttachmentListValue>
  ): MessageUpdateEvent_PayloadData_MessageAttachmentListValue {
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageAttachmentListValue,
    } as MessageUpdateEvent_PayloadData_MessageAttachmentListValue;
    message.values = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(MessageData_MessageAttachmentData.fromPartial(e));
      }
    }
    return message;
  },
};

messageTypeRegistry.set(
  MessageUpdateEvent_PayloadData_MessageAttachmentListValue.$type,
  MessageUpdateEvent_PayloadData_MessageAttachmentListValue
);

const baseMessageUpdateEvent_PayloadData_MessageEmbedListValue: object = {
  $type:
    "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageEmbedListValue",
};

export const MessageUpdateEvent_PayloadData_MessageEmbedListValue = {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageEmbedListValue" as const,

  encode(
    message: MessageUpdateEvent_PayloadData_MessageEmbedListValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.values) {
      MessageData_MessageEmbedData.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MessageUpdateEvent_PayloadData_MessageEmbedListValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageEmbedListValue,
    } as MessageUpdateEvent_PayloadData_MessageEmbedListValue;
    message.values = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(
            MessageData_MessageEmbedData.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageUpdateEvent_PayloadData_MessageEmbedListValue {
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageEmbedListValue,
    } as MessageUpdateEvent_PayloadData_MessageEmbedListValue;
    message.values = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(MessageData_MessageEmbedData.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(
    message: MessageUpdateEvent_PayloadData_MessageEmbedListValue
  ): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) =>
        e ? MessageData_MessageEmbedData.toJSON(e) : undefined
      );
    } else {
      obj.values = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MessageUpdateEvent_PayloadData_MessageEmbedListValue>
  ): MessageUpdateEvent_PayloadData_MessageEmbedListValue {
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageEmbedListValue,
    } as MessageUpdateEvent_PayloadData_MessageEmbedListValue;
    message.values = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(MessageData_MessageEmbedData.fromPartial(e));
      }
    }
    return message;
  },
};

messageTypeRegistry.set(
  MessageUpdateEvent_PayloadData_MessageEmbedListValue.$type,
  MessageUpdateEvent_PayloadData_MessageEmbedListValue
);

const baseMessageUpdateEvent_PayloadData_MessageMentionListValue: object = {
  $type:
    "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageMentionListValue",
};

export const MessageUpdateEvent_PayloadData_MessageMentionListValue = {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageMentionListValue" as const,

  encode(
    message: MessageUpdateEvent_PayloadData_MessageMentionListValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.values) {
      MessageData_MessageMentionData.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MessageUpdateEvent_PayloadData_MessageMentionListValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageMentionListValue,
    } as MessageUpdateEvent_PayloadData_MessageMentionListValue;
    message.values = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(
            MessageData_MessageMentionData.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(
    object: any
  ): MessageUpdateEvent_PayloadData_MessageMentionListValue {
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageMentionListValue,
    } as MessageUpdateEvent_PayloadData_MessageMentionListValue;
    message.values = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(MessageData_MessageMentionData.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(
    message: MessageUpdateEvent_PayloadData_MessageMentionListValue
  ): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) =>
        e ? MessageData_MessageMentionData.toJSON(e) : undefined
      );
    } else {
      obj.values = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MessageUpdateEvent_PayloadData_MessageMentionListValue>
  ): MessageUpdateEvent_PayloadData_MessageMentionListValue {
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageMentionListValue,
    } as MessageUpdateEvent_PayloadData_MessageMentionListValue;
    message.values = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(MessageData_MessageMentionData.fromPartial(e));
      }
    }
    return message;
  },
};

messageTypeRegistry.set(
  MessageUpdateEvent_PayloadData_MessageMentionListValue.$type,
  MessageUpdateEvent_PayloadData_MessageMentionListValue
);

const baseMessageUpdateEvent_PayloadData_MessageReactionListValue: object = {
  $type:
    "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageReactionListValue",
};

export const MessageUpdateEvent_PayloadData_MessageReactionListValue = {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageReactionListValue" as const,

  encode(
    message: MessageUpdateEvent_PayloadData_MessageReactionListValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.values) {
      MessageData_MessageReactionData.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MessageUpdateEvent_PayloadData_MessageReactionListValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageReactionListValue,
    } as MessageUpdateEvent_PayloadData_MessageReactionListValue;
    message.values = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(
            MessageData_MessageReactionData.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(
    object: any
  ): MessageUpdateEvent_PayloadData_MessageReactionListValue {
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageReactionListValue,
    } as MessageUpdateEvent_PayloadData_MessageReactionListValue;
    message.values = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(MessageData_MessageReactionData.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(
    message: MessageUpdateEvent_PayloadData_MessageReactionListValue
  ): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) =>
        e ? MessageData_MessageReactionData.toJSON(e) : undefined
      );
    } else {
      obj.values = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MessageUpdateEvent_PayloadData_MessageReactionListValue>
  ): MessageUpdateEvent_PayloadData_MessageReactionListValue {
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageReactionListValue,
    } as MessageUpdateEvent_PayloadData_MessageReactionListValue;
    message.values = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(MessageData_MessageReactionData.fromPartial(e));
      }
    }
    return message;
  },
};

messageTypeRegistry.set(
  MessageUpdateEvent_PayloadData_MessageReactionListValue.$type,
  MessageUpdateEvent_PayloadData_MessageReactionListValue
);

const baseMessageUpdateEvent_PayloadData_MessageTypeValue: object = {
  $type:
    "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageTypeValue",
  value: 0,
};

export const MessageUpdateEvent_PayloadData_MessageTypeValue = {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageTypeValue" as const,

  encode(
    message: MessageUpdateEvent_PayloadData_MessageTypeValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MessageUpdateEvent_PayloadData_MessageTypeValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageTypeValue,
    } as MessageUpdateEvent_PayloadData_MessageTypeValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageUpdateEvent_PayloadData_MessageTypeValue {
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageTypeValue,
    } as MessageUpdateEvent_PayloadData_MessageTypeValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = messageData_MessageTypeFromJSON(object.value);
    }
    return message;
  },

  toJSON(message: MessageUpdateEvent_PayloadData_MessageTypeValue): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = messageData_MessageTypeToJSON(message.value));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MessageUpdateEvent_PayloadData_MessageTypeValue>
  ): MessageUpdateEvent_PayloadData_MessageTypeValue {
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageTypeValue,
    } as MessageUpdateEvent_PayloadData_MessageTypeValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
};

messageTypeRegistry.set(
  MessageUpdateEvent_PayloadData_MessageTypeValue.$type,
  MessageUpdateEvent_PayloadData_MessageTypeValue
);

const baseMessageUpdateEvent_PayloadData_MessageMentionChannelListValue: object = {
  $type:
    "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageMentionChannelListValue",
};

export const MessageUpdateEvent_PayloadData_MessageMentionChannelListValue = {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageMentionChannelListValue" as const,

  encode(
    message: MessageUpdateEvent_PayloadData_MessageMentionChannelListValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.values) {
      MessageData_MessageMentionChannelData.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MessageUpdateEvent_PayloadData_MessageMentionChannelListValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageMentionChannelListValue,
    } as MessageUpdateEvent_PayloadData_MessageMentionChannelListValue;
    message.values = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(
            MessageData_MessageMentionChannelData.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(
    object: any
  ): MessageUpdateEvent_PayloadData_MessageMentionChannelListValue {
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageMentionChannelListValue,
    } as MessageUpdateEvent_PayloadData_MessageMentionChannelListValue;
    message.values = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(MessageData_MessageMentionChannelData.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(
    message: MessageUpdateEvent_PayloadData_MessageMentionChannelListValue
  ): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) =>
        e ? MessageData_MessageMentionChannelData.toJSON(e) : undefined
      );
    } else {
      obj.values = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MessageUpdateEvent_PayloadData_MessageMentionChannelListValue>
  ): MessageUpdateEvent_PayloadData_MessageMentionChannelListValue {
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageMentionChannelListValue,
    } as MessageUpdateEvent_PayloadData_MessageMentionChannelListValue;
    message.values = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(
          MessageData_MessageMentionChannelData.fromPartial(e)
        );
      }
    }
    return message;
  },
};

messageTypeRegistry.set(
  MessageUpdateEvent_PayloadData_MessageMentionChannelListValue.$type,
  MessageUpdateEvent_PayloadData_MessageMentionChannelListValue
);

const baseMessageUpdateEvent_PayloadData_MessageActivityValue: object = {
  $type:
    "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageActivityValue",
};

export const MessageUpdateEvent_PayloadData_MessageActivityValue = {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageActivityValue" as const,

  encode(
    message: MessageUpdateEvent_PayloadData_MessageActivityValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value !== undefined) {
      MessageData_MessageActivityData.encode(
        message.value,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MessageUpdateEvent_PayloadData_MessageActivityValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageActivityValue,
    } as MessageUpdateEvent_PayloadData_MessageActivityValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = MessageData_MessageActivityData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageUpdateEvent_PayloadData_MessageActivityValue {
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageActivityValue,
    } as MessageUpdateEvent_PayloadData_MessageActivityValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = MessageData_MessageActivityData.fromJSON(object.value);
    }
    return message;
  },

  toJSON(
    message: MessageUpdateEvent_PayloadData_MessageActivityValue
  ): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = message.value
        ? MessageData_MessageActivityData.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MessageUpdateEvent_PayloadData_MessageActivityValue>
  ): MessageUpdateEvent_PayloadData_MessageActivityValue {
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageActivityValue,
    } as MessageUpdateEvent_PayloadData_MessageActivityValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = MessageData_MessageActivityData.fromPartial(object.value);
    }
    return message;
  },
};

messageTypeRegistry.set(
  MessageUpdateEvent_PayloadData_MessageActivityValue.$type,
  MessageUpdateEvent_PayloadData_MessageActivityValue
);

const baseMessageUpdateEvent_PayloadData_MessageApplicationValue: object = {
  $type:
    "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageApplicationValue",
};

export const MessageUpdateEvent_PayloadData_MessageApplicationValue = {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageApplicationValue" as const,

  encode(
    message: MessageUpdateEvent_PayloadData_MessageApplicationValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value !== undefined) {
      MessageData_MessageApplicationData.encode(
        message.value,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MessageUpdateEvent_PayloadData_MessageApplicationValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageApplicationValue,
    } as MessageUpdateEvent_PayloadData_MessageApplicationValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = MessageData_MessageApplicationData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(
    object: any
  ): MessageUpdateEvent_PayloadData_MessageApplicationValue {
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageApplicationValue,
    } as MessageUpdateEvent_PayloadData_MessageApplicationValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = MessageData_MessageApplicationData.fromJSON(object.value);
    }
    return message;
  },

  toJSON(
    message: MessageUpdateEvent_PayloadData_MessageApplicationValue
  ): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = message.value
        ? MessageData_MessageApplicationData.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MessageUpdateEvent_PayloadData_MessageApplicationValue>
  ): MessageUpdateEvent_PayloadData_MessageApplicationValue {
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageApplicationValue,
    } as MessageUpdateEvent_PayloadData_MessageApplicationValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = MessageData_MessageApplicationData.fromPartial(
        object.value
      );
    }
    return message;
  },
};

messageTypeRegistry.set(
  MessageUpdateEvent_PayloadData_MessageApplicationValue.$type,
  MessageUpdateEvent_PayloadData_MessageApplicationValue
);

const baseMessageUpdateEvent_PayloadData_MessageReferenceValue: object = {
  $type:
    "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageReferenceValue",
};

export const MessageUpdateEvent_PayloadData_MessageReferenceValue = {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageReferenceValue" as const,

  encode(
    message: MessageUpdateEvent_PayloadData_MessageReferenceValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value !== undefined) {
      MessageData_MessageReferenceData.encode(
        message.value,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MessageUpdateEvent_PayloadData_MessageReferenceValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageReferenceValue,
    } as MessageUpdateEvent_PayloadData_MessageReferenceValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = MessageData_MessageReferenceData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageUpdateEvent_PayloadData_MessageReferenceValue {
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageReferenceValue,
    } as MessageUpdateEvent_PayloadData_MessageReferenceValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = MessageData_MessageReferenceData.fromJSON(object.value);
    }
    return message;
  },

  toJSON(
    message: MessageUpdateEvent_PayloadData_MessageReferenceValue
  ): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = message.value
        ? MessageData_MessageReferenceData.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MessageUpdateEvent_PayloadData_MessageReferenceValue>
  ): MessageUpdateEvent_PayloadData_MessageReferenceValue {
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageReferenceValue,
    } as MessageUpdateEvent_PayloadData_MessageReferenceValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = MessageData_MessageReferenceData.fromPartial(
        object.value
      );
    }
    return message;
  },
};

messageTypeRegistry.set(
  MessageUpdateEvent_PayloadData_MessageReferenceValue.$type,
  MessageUpdateEvent_PayloadData_MessageReferenceValue
);

const baseMessageUpdateEvent_PayloadData_MessageAuthorValue: object = {
  $type:
    "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageAuthorValue",
};

export const MessageUpdateEvent_PayloadData_MessageAuthorValue = {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageAuthorValue" as const,

  encode(
    message: MessageUpdateEvent_PayloadData_MessageAuthorValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value !== undefined) {
      UserData.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MessageUpdateEvent_PayloadData_MessageAuthorValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageAuthorValue,
    } as MessageUpdateEvent_PayloadData_MessageAuthorValue;
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

  fromJSON(object: any): MessageUpdateEvent_PayloadData_MessageAuthorValue {
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageAuthorValue,
    } as MessageUpdateEvent_PayloadData_MessageAuthorValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = UserData.fromJSON(object.value);
    }
    return message;
  },

  toJSON(message: MessageUpdateEvent_PayloadData_MessageAuthorValue): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = message.value ? UserData.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MessageUpdateEvent_PayloadData_MessageAuthorValue>
  ): MessageUpdateEvent_PayloadData_MessageAuthorValue {
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageAuthorValue,
    } as MessageUpdateEvent_PayloadData_MessageAuthorValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = UserData.fromPartial(object.value);
    }
    return message;
  },
};

messageTypeRegistry.set(
  MessageUpdateEvent_PayloadData_MessageAuthorValue.$type,
  MessageUpdateEvent_PayloadData_MessageAuthorValue
);

const baseMessageUpdateEvent_PayloadData_MessageMemberValue: object = {
  $type:
    "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageMemberValue",
};

export const MessageUpdateEvent_PayloadData_MessageMemberValue = {
  $type: "pylon.discord.v1.event.MessageUpdateEvent.PayloadData.MessageMemberValue" as const,

  encode(
    message: MessageUpdateEvent_PayloadData_MessageMemberValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value !== undefined) {
      MemberData.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MessageUpdateEvent_PayloadData_MessageMemberValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageMemberValue,
    } as MessageUpdateEvent_PayloadData_MessageMemberValue;
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

  fromJSON(object: any): MessageUpdateEvent_PayloadData_MessageMemberValue {
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageMemberValue,
    } as MessageUpdateEvent_PayloadData_MessageMemberValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = MemberData.fromJSON(object.value);
    }
    return message;
  },

  toJSON(message: MessageUpdateEvent_PayloadData_MessageMemberValue): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = message.value
        ? MemberData.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MessageUpdateEvent_PayloadData_MessageMemberValue>
  ): MessageUpdateEvent_PayloadData_MessageMemberValue {
    const message = {
      ...baseMessageUpdateEvent_PayloadData_MessageMemberValue,
    } as MessageUpdateEvent_PayloadData_MessageMemberValue;
    if (object.value !== undefined && object.value !== null) {
      message.value = MemberData.fromPartial(object.value);
    }
    return message;
  },
};

messageTypeRegistry.set(
  MessageUpdateEvent_PayloadData_MessageMemberValue.$type,
  MessageUpdateEvent_PayloadData_MessageMemberValue
);

const baseMessageDeleteEvent: object = {
  $type: "pylon.discord.v1.event.MessageDeleteEvent",
};

export const MessageDeleteEvent = {
  $type: "pylon.discord.v1.event.MessageDeleteEvent" as const,

  encode(
    message: MessageDeleteEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      MessageDeleteEvent_PayloadData.encode(
        message.payload,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.previouslyCached !== undefined) {
      MessageData.encode(
        message.previouslyCached,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageDeleteEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMessageDeleteEvent } as MessageDeleteEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = EventScope.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = MessageDeleteEvent_PayloadData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.previouslyCached = MessageData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageDeleteEvent {
    const message = { ...baseMessageDeleteEvent } as MessageDeleteEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MessageDeleteEvent_PayloadData.fromJSON(object.payload);
    }
    if (
      object.previouslyCached !== undefined &&
      object.previouslyCached !== null
    ) {
      message.previouslyCached = MessageData.fromJSON(object.previouslyCached);
    }
    return message;
  },

  toJSON(message: MessageDeleteEvent): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<MessageDeleteEvent>): MessageDeleteEvent {
    const message = { ...baseMessageDeleteEvent } as MessageDeleteEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MessageDeleteEvent_PayloadData.fromPartial(
        object.payload
      );
    }
    if (
      object.previouslyCached !== undefined &&
      object.previouslyCached !== null
    ) {
      message.previouslyCached = MessageData.fromPartial(
        object.previouslyCached
      );
    }
    return message;
  },
};

messageTypeRegistry.set(MessageDeleteEvent.$type, MessageDeleteEvent);

const baseMessageDeleteEvent_PayloadData: object = {
  $type: "pylon.discord.v1.event.MessageDeleteEvent.PayloadData",
  id: "0",
  channelId: "0",
  guildId: "0",
};

export const MessageDeleteEvent_PayloadData = {
  $type: "pylon.discord.v1.event.MessageDeleteEvent.PayloadData" as const,

  encode(
    message: MessageDeleteEvent_PayloadData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MessageDeleteEvent_PayloadData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMessageDeleteEvent_PayloadData,
    } as MessageDeleteEvent_PayloadData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.guildId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageDeleteEvent_PayloadData {
    const message = {
      ...baseMessageDeleteEvent_PayloadData,
    } as MessageDeleteEvent_PayloadData;
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

  toJSON(message: MessageDeleteEvent_PayloadData): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.guildId !== undefined && (obj.guildId = message.guildId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MessageDeleteEvent_PayloadData>
  ): MessageDeleteEvent_PayloadData {
    const message = {
      ...baseMessageDeleteEvent_PayloadData,
    } as MessageDeleteEvent_PayloadData;
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

messageTypeRegistry.set(
  MessageDeleteEvent_PayloadData.$type,
  MessageDeleteEvent_PayloadData
);

const baseMessageDeleteBulkEvent: object = {
  $type: "pylon.discord.v1.event.MessageDeleteBulkEvent",
};

export const MessageDeleteBulkEvent = {
  $type: "pylon.discord.v1.event.MessageDeleteBulkEvent" as const,

  encode(
    message: MessageDeleteBulkEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      MessageDeleteBulkEvent_PayloadData.encode(
        message.payload,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MessageDeleteBulkEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMessageDeleteBulkEvent } as MessageDeleteBulkEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = EventScope.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = MessageDeleteBulkEvent_PayloadData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageDeleteBulkEvent {
    const message = { ...baseMessageDeleteBulkEvent } as MessageDeleteBulkEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MessageDeleteBulkEvent_PayloadData.fromJSON(
        object.payload
      );
    }
    return message;
  },

  toJSON(message: MessageDeleteBulkEvent): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<MessageDeleteBulkEvent>
  ): MessageDeleteBulkEvent {
    const message = { ...baseMessageDeleteBulkEvent } as MessageDeleteBulkEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MessageDeleteBulkEvent_PayloadData.fromPartial(
        object.payload
      );
    }
    return message;
  },
};

messageTypeRegistry.set(MessageDeleteBulkEvent.$type, MessageDeleteBulkEvent);

const baseMessageDeleteBulkEvent_PayloadData: object = {
  $type: "pylon.discord.v1.event.MessageDeleteBulkEvent.PayloadData",
  ids: "0",
  channelId: "0",
  guildId: "0",
};

export const MessageDeleteBulkEvent_PayloadData = {
  $type: "pylon.discord.v1.event.MessageDeleteBulkEvent.PayloadData" as const,

  encode(
    message: MessageDeleteBulkEvent_PayloadData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MessageDeleteBulkEvent_PayloadData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMessageDeleteBulkEvent_PayloadData,
    } as MessageDeleteBulkEvent_PayloadData;
    message.ids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(longToString(reader.fixed64() as Long));
            }
          } else {
            message.ids.push(longToString(reader.fixed64() as Long));
          }
          break;
        case 2:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.guildId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageDeleteBulkEvent_PayloadData {
    const message = {
      ...baseMessageDeleteBulkEvent_PayloadData,
    } as MessageDeleteBulkEvent_PayloadData;
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

  toJSON(message: MessageDeleteBulkEvent_PayloadData): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.guildId !== undefined && (obj.guildId = message.guildId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MessageDeleteBulkEvent_PayloadData>
  ): MessageDeleteBulkEvent_PayloadData {
    const message = {
      ...baseMessageDeleteBulkEvent_PayloadData,
    } as MessageDeleteBulkEvent_PayloadData;
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

messageTypeRegistry.set(
  MessageDeleteBulkEvent_PayloadData.$type,
  MessageDeleteBulkEvent_PayloadData
);

const baseMessageReactionAddEvent: object = {
  $type: "pylon.discord.v1.event.MessageReactionAddEvent",
};

export const MessageReactionAddEvent = {
  $type: "pylon.discord.v1.event.MessageReactionAddEvent" as const,

  encode(
    message: MessageReactionAddEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      MessageReactionAddEvent_PayloadData.encode(
        message.payload,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MessageReactionAddEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMessageReactionAddEvent,
    } as MessageReactionAddEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = EventScope.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = MessageReactionAddEvent_PayloadData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageReactionAddEvent {
    const message = {
      ...baseMessageReactionAddEvent,
    } as MessageReactionAddEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MessageReactionAddEvent_PayloadData.fromJSON(
        object.payload
      );
    }
    return message;
  },

  toJSON(message: MessageReactionAddEvent): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<MessageReactionAddEvent>
  ): MessageReactionAddEvent {
    const message = {
      ...baseMessageReactionAddEvent,
    } as MessageReactionAddEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MessageReactionAddEvent_PayloadData.fromPartial(
        object.payload
      );
    }
    return message;
  },
};

messageTypeRegistry.set(MessageReactionAddEvent.$type, MessageReactionAddEvent);

const baseMessageReactionAddEvent_PayloadData: object = {
  $type: "pylon.discord.v1.event.MessageReactionAddEvent.PayloadData",
  userId: "0",
  channelId: "0",
  messageId: "0",
  guildId: "0",
};

export const MessageReactionAddEvent_PayloadData = {
  $type: "pylon.discord.v1.event.MessageReactionAddEvent.PayloadData" as const,

  encode(
    message: MessageReactionAddEvent_PayloadData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      MessageData_MessageReactionEmojiData.encode(
        message.emoji,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MessageReactionAddEvent_PayloadData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMessageReactionAddEvent_PayloadData,
    } as MessageReactionAddEvent_PayloadData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.messageId = longToString(reader.fixed64() as Long);
          break;
        case 4:
          message.guildId = longToString(reader.fixed64() as Long);
          break;
        case 6:
          message.emoji = MessageData_MessageReactionEmojiData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageReactionAddEvent_PayloadData {
    const message = {
      ...baseMessageReactionAddEvent_PayloadData,
    } as MessageReactionAddEvent_PayloadData;
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
      message.emoji = MessageData_MessageReactionEmojiData.fromJSON(
        object.emoji
      );
    }
    return message;
  },

  toJSON(message: MessageReactionAddEvent_PayloadData): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<MessageReactionAddEvent_PayloadData>
  ): MessageReactionAddEvent_PayloadData {
    const message = {
      ...baseMessageReactionAddEvent_PayloadData,
    } as MessageReactionAddEvent_PayloadData;
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
      message.emoji = MessageData_MessageReactionEmojiData.fromPartial(
        object.emoji
      );
    }
    return message;
  },
};

messageTypeRegistry.set(
  MessageReactionAddEvent_PayloadData.$type,
  MessageReactionAddEvent_PayloadData
);

const baseMessageReactionRemoveEvent: object = {
  $type: "pylon.discord.v1.event.MessageReactionRemoveEvent",
};

export const MessageReactionRemoveEvent = {
  $type: "pylon.discord.v1.event.MessageReactionRemoveEvent" as const,

  encode(
    message: MessageReactionRemoveEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      MessageReactionRemoveEvent_PayloadData.encode(
        message.payload,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MessageReactionRemoveEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMessageReactionRemoveEvent,
    } as MessageReactionRemoveEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = EventScope.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = MessageReactionRemoveEvent_PayloadData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageReactionRemoveEvent {
    const message = {
      ...baseMessageReactionRemoveEvent,
    } as MessageReactionRemoveEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MessageReactionRemoveEvent_PayloadData.fromJSON(
        object.payload
      );
    }
    return message;
  },

  toJSON(message: MessageReactionRemoveEvent): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<MessageReactionRemoveEvent>
  ): MessageReactionRemoveEvent {
    const message = {
      ...baseMessageReactionRemoveEvent,
    } as MessageReactionRemoveEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MessageReactionRemoveEvent_PayloadData.fromPartial(
        object.payload
      );
    }
    return message;
  },
};

messageTypeRegistry.set(
  MessageReactionRemoveEvent.$type,
  MessageReactionRemoveEvent
);

const baseMessageReactionRemoveEvent_PayloadData: object = {
  $type: "pylon.discord.v1.event.MessageReactionRemoveEvent.PayloadData",
  userId: "0",
  channelId: "0",
  messageId: "0",
  guildId: "0",
};

export const MessageReactionRemoveEvent_PayloadData = {
  $type: "pylon.discord.v1.event.MessageReactionRemoveEvent.PayloadData" as const,

  encode(
    message: MessageReactionRemoveEvent_PayloadData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      MessageData_MessageReactionEmojiData.encode(
        message.emoji,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MessageReactionRemoveEvent_PayloadData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMessageReactionRemoveEvent_PayloadData,
    } as MessageReactionRemoveEvent_PayloadData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.messageId = longToString(reader.fixed64() as Long);
          break;
        case 4:
          message.guildId = longToString(reader.fixed64() as Long);
          break;
        case 5:
          message.emoji = MessageData_MessageReactionEmojiData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageReactionRemoveEvent_PayloadData {
    const message = {
      ...baseMessageReactionRemoveEvent_PayloadData,
    } as MessageReactionRemoveEvent_PayloadData;
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
      message.emoji = MessageData_MessageReactionEmojiData.fromJSON(
        object.emoji
      );
    }
    return message;
  },

  toJSON(message: MessageReactionRemoveEvent_PayloadData): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<MessageReactionRemoveEvent_PayloadData>
  ): MessageReactionRemoveEvent_PayloadData {
    const message = {
      ...baseMessageReactionRemoveEvent_PayloadData,
    } as MessageReactionRemoveEvent_PayloadData;
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
      message.emoji = MessageData_MessageReactionEmojiData.fromPartial(
        object.emoji
      );
    }
    return message;
  },
};

messageTypeRegistry.set(
  MessageReactionRemoveEvent_PayloadData.$type,
  MessageReactionRemoveEvent_PayloadData
);

const baseMessageReactionRemoveAllEvent: object = {
  $type: "pylon.discord.v1.event.MessageReactionRemoveAllEvent",
};

export const MessageReactionRemoveAllEvent = {
  $type: "pylon.discord.v1.event.MessageReactionRemoveAllEvent" as const,

  encode(
    message: MessageReactionRemoveAllEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      MessageReactionRemoveAllEvent_PayloadData.encode(
        message.payload,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MessageReactionRemoveAllEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMessageReactionRemoveAllEvent,
    } as MessageReactionRemoveAllEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = EventScope.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = MessageReactionRemoveAllEvent_PayloadData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageReactionRemoveAllEvent {
    const message = {
      ...baseMessageReactionRemoveAllEvent,
    } as MessageReactionRemoveAllEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MessageReactionRemoveAllEvent_PayloadData.fromJSON(
        object.payload
      );
    }
    return message;
  },

  toJSON(message: MessageReactionRemoveAllEvent): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<MessageReactionRemoveAllEvent>
  ): MessageReactionRemoveAllEvent {
    const message = {
      ...baseMessageReactionRemoveAllEvent,
    } as MessageReactionRemoveAllEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MessageReactionRemoveAllEvent_PayloadData.fromPartial(
        object.payload
      );
    }
    return message;
  },
};

messageTypeRegistry.set(
  MessageReactionRemoveAllEvent.$type,
  MessageReactionRemoveAllEvent
);

const baseMessageReactionRemoveAllEvent_PayloadData: object = {
  $type: "pylon.discord.v1.event.MessageReactionRemoveAllEvent.PayloadData",
  channelId: "0",
  messageId: "0",
  guildId: "0",
};

export const MessageReactionRemoveAllEvent_PayloadData = {
  $type: "pylon.discord.v1.event.MessageReactionRemoveAllEvent.PayloadData" as const,

  encode(
    message: MessageReactionRemoveAllEvent_PayloadData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MessageReactionRemoveAllEvent_PayloadData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMessageReactionRemoveAllEvent_PayloadData,
    } as MessageReactionRemoveAllEvent_PayloadData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.messageId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.guildId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageReactionRemoveAllEvent_PayloadData {
    const message = {
      ...baseMessageReactionRemoveAllEvent_PayloadData,
    } as MessageReactionRemoveAllEvent_PayloadData;
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

  toJSON(message: MessageReactionRemoveAllEvent_PayloadData): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.messageId !== undefined && (obj.messageId = message.messageId);
    message.guildId !== undefined && (obj.guildId = message.guildId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MessageReactionRemoveAllEvent_PayloadData>
  ): MessageReactionRemoveAllEvent_PayloadData {
    const message = {
      ...baseMessageReactionRemoveAllEvent_PayloadData,
    } as MessageReactionRemoveAllEvent_PayloadData;
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

messageTypeRegistry.set(
  MessageReactionRemoveAllEvent_PayloadData.$type,
  MessageReactionRemoveAllEvent_PayloadData
);

const baseMessageReactionRemoveEmojiEvent: object = {
  $type: "pylon.discord.v1.event.MessageReactionRemoveEmojiEvent",
};

export const MessageReactionRemoveEmojiEvent = {
  $type: "pylon.discord.v1.event.MessageReactionRemoveEmojiEvent" as const,

  encode(
    message: MessageReactionRemoveEmojiEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      MessageReactionRemoveEmojiEvent_PayloadData.encode(
        message.payload,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MessageReactionRemoveEmojiEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMessageReactionRemoveEmojiEvent,
    } as MessageReactionRemoveEmojiEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = EventScope.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = MessageReactionRemoveEmojiEvent_PayloadData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageReactionRemoveEmojiEvent {
    const message = {
      ...baseMessageReactionRemoveEmojiEvent,
    } as MessageReactionRemoveEmojiEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MessageReactionRemoveEmojiEvent_PayloadData.fromJSON(
        object.payload
      );
    }
    return message;
  },

  toJSON(message: MessageReactionRemoveEmojiEvent): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<MessageReactionRemoveEmojiEvent>
  ): MessageReactionRemoveEmojiEvent {
    const message = {
      ...baseMessageReactionRemoveEmojiEvent,
    } as MessageReactionRemoveEmojiEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MessageReactionRemoveEmojiEvent_PayloadData.fromPartial(
        object.payload
      );
    }
    return message;
  },
};

messageTypeRegistry.set(
  MessageReactionRemoveEmojiEvent.$type,
  MessageReactionRemoveEmojiEvent
);

const baseMessageReactionRemoveEmojiEvent_PayloadData: object = {
  $type: "pylon.discord.v1.event.MessageReactionRemoveEmojiEvent.PayloadData",
  channelId: "0",
  messageId: "0",
  guildId: "0",
};

export const MessageReactionRemoveEmojiEvent_PayloadData = {
  $type: "pylon.discord.v1.event.MessageReactionRemoveEmojiEvent.PayloadData" as const,

  encode(
    message: MessageReactionRemoveEmojiEvent_PayloadData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      MessageData_MessageReactionEmojiData.encode(
        message.emoji,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MessageReactionRemoveEmojiEvent_PayloadData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMessageReactionRemoveEmojiEvent_PayloadData,
    } as MessageReactionRemoveEmojiEvent_PayloadData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.messageId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.guildId = longToString(reader.fixed64() as Long);
          break;
        case 4:
          message.emoji = MessageData_MessageReactionEmojiData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageReactionRemoveEmojiEvent_PayloadData {
    const message = {
      ...baseMessageReactionRemoveEmojiEvent_PayloadData,
    } as MessageReactionRemoveEmojiEvent_PayloadData;
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
      message.emoji = MessageData_MessageReactionEmojiData.fromJSON(
        object.emoji
      );
    }
    return message;
  },

  toJSON(message: MessageReactionRemoveEmojiEvent_PayloadData): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.messageId !== undefined && (obj.messageId = message.messageId);
    message.guildId !== undefined && (obj.guildId = message.guildId);
    message.emoji !== undefined &&
      (obj.emoji = message.emoji
        ? MessageData_MessageReactionEmojiData.toJSON(message.emoji)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MessageReactionRemoveEmojiEvent_PayloadData>
  ): MessageReactionRemoveEmojiEvent_PayloadData {
    const message = {
      ...baseMessageReactionRemoveEmojiEvent_PayloadData,
    } as MessageReactionRemoveEmojiEvent_PayloadData;
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
      message.emoji = MessageData_MessageReactionEmojiData.fromPartial(
        object.emoji
      );
    }
    return message;
  },
};

messageTypeRegistry.set(
  MessageReactionRemoveEmojiEvent_PayloadData.$type,
  MessageReactionRemoveEmojiEvent_PayloadData
);

const baseTypingStartEvent: object = {
  $type: "pylon.discord.v1.event.TypingStartEvent",
};

export const TypingStartEvent = {
  $type: "pylon.discord.v1.event.TypingStartEvent" as const,

  encode(
    message: TypingStartEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      TypingStartEvent_PayloadData.encode(
        message.payload,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TypingStartEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTypingStartEvent } as TypingStartEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = EventScope.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = TypingStartEvent_PayloadData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TypingStartEvent {
    const message = { ...baseTypingStartEvent } as TypingStartEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = TypingStartEvent_PayloadData.fromJSON(object.payload);
    }
    return message;
  },

  toJSON(message: TypingStartEvent): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<TypingStartEvent>): TypingStartEvent {
    const message = { ...baseTypingStartEvent } as TypingStartEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = TypingStartEvent_PayloadData.fromPartial(
        object.payload
      );
    }
    return message;
  },
};

messageTypeRegistry.set(TypingStartEvent.$type, TypingStartEvent);

const baseTypingStartEvent_PayloadData: object = {
  $type: "pylon.discord.v1.event.TypingStartEvent.PayloadData",
  channelId: "0",
  userId: "0",
};

export const TypingStartEvent_PayloadData = {
  $type: "pylon.discord.v1.event.TypingStartEvent.PayloadData" as const,

  encode(
    message: TypingStartEvent_PayloadData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.userId !== "0") {
      writer.uint32(17).fixed64(message.userId);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.member !== undefined) {
      MemberData.encode(message.member, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TypingStartEvent_PayloadData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTypingStartEvent_PayloadData,
    } as TypingStartEvent_PayloadData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.userId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): TypingStartEvent_PayloadData {
    const message = {
      ...baseTypingStartEvent_PayloadData,
    } as TypingStartEvent_PayloadData;
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

  toJSON(message: TypingStartEvent_PayloadData): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<TypingStartEvent_PayloadData>
  ): TypingStartEvent_PayloadData {
    const message = {
      ...baseTypingStartEvent_PayloadData,
    } as TypingStartEvent_PayloadData;
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

messageTypeRegistry.set(
  TypingStartEvent_PayloadData.$type,
  TypingStartEvent_PayloadData
);

const baseVoiceStateUpdateEvent: object = {
  $type: "pylon.discord.v1.event.VoiceStateUpdateEvent",
};

export const VoiceStateUpdateEvent = {
  $type: "pylon.discord.v1.event.VoiceStateUpdateEvent" as const,

  encode(
    message: VoiceStateUpdateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      VoiceStateData.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    if (message.previouslyCached !== undefined) {
      VoiceStateData.encode(
        message.previouslyCached,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): VoiceStateUpdateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVoiceStateUpdateEvent } as VoiceStateUpdateEvent;
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
          message.previouslyCached = VoiceStateData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VoiceStateUpdateEvent {
    const message = { ...baseVoiceStateUpdateEvent } as VoiceStateUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = VoiceStateData.fromJSON(object.payload);
    }
    if (
      object.previouslyCached !== undefined &&
      object.previouslyCached !== null
    ) {
      message.previouslyCached = VoiceStateData.fromJSON(
        object.previouslyCached
      );
    }
    return message;
  },

  toJSON(message: VoiceStateUpdateEvent): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<VoiceStateUpdateEvent>
  ): VoiceStateUpdateEvent {
    const message = { ...baseVoiceStateUpdateEvent } as VoiceStateUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = VoiceStateData.fromPartial(object.payload);
    }
    if (
      object.previouslyCached !== undefined &&
      object.previouslyCached !== null
    ) {
      message.previouslyCached = VoiceStateData.fromPartial(
        object.previouslyCached
      );
    }
    return message;
  },
};

messageTypeRegistry.set(VoiceStateUpdateEvent.$type, VoiceStateUpdateEvent);

const baseVoiceServerUpdateEvent: object = {
  $type: "pylon.discord.v1.event.VoiceServerUpdateEvent",
};

export const VoiceServerUpdateEvent = {
  $type: "pylon.discord.v1.event.VoiceServerUpdateEvent" as const,

  encode(
    message: VoiceServerUpdateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      VoiceServerUpdateEvent_PayloadData.encode(
        message.payload,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): VoiceServerUpdateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVoiceServerUpdateEvent } as VoiceServerUpdateEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = EventScope.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = VoiceServerUpdateEvent_PayloadData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VoiceServerUpdateEvent {
    const message = { ...baseVoiceServerUpdateEvent } as VoiceServerUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = VoiceServerUpdateEvent_PayloadData.fromJSON(
        object.payload
      );
    }
    return message;
  },

  toJSON(message: VoiceServerUpdateEvent): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<VoiceServerUpdateEvent>
  ): VoiceServerUpdateEvent {
    const message = { ...baseVoiceServerUpdateEvent } as VoiceServerUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = VoiceServerUpdateEvent_PayloadData.fromPartial(
        object.payload
      );
    }
    return message;
  },
};

messageTypeRegistry.set(VoiceServerUpdateEvent.$type, VoiceServerUpdateEvent);

const baseVoiceServerUpdateEvent_PayloadData: object = {
  $type: "pylon.discord.v1.event.VoiceServerUpdateEvent.PayloadData",
  guildId: "0",
  token: "",
  endpoint: "",
};

export const VoiceServerUpdateEvent_PayloadData = {
  $type: "pylon.discord.v1.event.VoiceServerUpdateEvent.PayloadData" as const,

  encode(
    message: VoiceServerUpdateEvent_PayloadData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): VoiceServerUpdateEvent_PayloadData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseVoiceServerUpdateEvent_PayloadData,
    } as VoiceServerUpdateEvent_PayloadData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guildId = longToString(reader.fixed64() as Long);
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

  fromJSON(object: any): VoiceServerUpdateEvent_PayloadData {
    const message = {
      ...baseVoiceServerUpdateEvent_PayloadData,
    } as VoiceServerUpdateEvent_PayloadData;
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

  toJSON(message: VoiceServerUpdateEvent_PayloadData): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = message.guildId);
    message.token !== undefined && (obj.token = message.token);
    message.endpoint !== undefined && (obj.endpoint = message.endpoint);
    return obj;
  },

  fromPartial(
    object: DeepPartial<VoiceServerUpdateEvent_PayloadData>
  ): VoiceServerUpdateEvent_PayloadData {
    const message = {
      ...baseVoiceServerUpdateEvent_PayloadData,
    } as VoiceServerUpdateEvent_PayloadData;
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

messageTypeRegistry.set(
  VoiceServerUpdateEvent_PayloadData.$type,
  VoiceServerUpdateEvent_PayloadData
);

const baseInviteCreateEvent: object = {
  $type: "pylon.discord.v1.event.InviteCreateEvent",
};

export const InviteCreateEvent = {
  $type: "pylon.discord.v1.event.InviteCreateEvent" as const,

  encode(
    message: InviteCreateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      InviteCreateEvent_PayloadData.encode(
        message.payload,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InviteCreateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInviteCreateEvent } as InviteCreateEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = EventScope.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = InviteCreateEvent_PayloadData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InviteCreateEvent {
    const message = { ...baseInviteCreateEvent } as InviteCreateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = InviteCreateEvent_PayloadData.fromJSON(object.payload);
    }
    return message;
  },

  toJSON(message: InviteCreateEvent): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<InviteCreateEvent>): InviteCreateEvent {
    const message = { ...baseInviteCreateEvent } as InviteCreateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = InviteCreateEvent_PayloadData.fromPartial(
        object.payload
      );
    }
    return message;
  },
};

messageTypeRegistry.set(InviteCreateEvent.$type, InviteCreateEvent);

const baseInviteCreateEvent_PayloadData: object = {
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
  $type: "pylon.discord.v1.event.InviteCreateEvent.PayloadData" as const,

  encode(
    message: InviteCreateEvent_PayloadData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(26).fork()
      ).ldelim();
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InviteCreateEvent_PayloadData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInviteCreateEvent_PayloadData,
    } as InviteCreateEvent_PayloadData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.code = reader.string();
          break;
        case 3:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.guildId = SnowflakeValue.decode(reader, reader.uint32());
          break;
        case 5:
          message.inviter = UserData.decode(reader, reader.uint32());
          break;
        case 6:
          message.maxAge = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.maxUses = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.targetUser = UserData.decode(reader, reader.uint32());
          break;
        case 9:
          message.targetUserType = reader.int32() as any;
          break;
        case 10:
          message.temporary = reader.bool();
          break;
        case 11:
          message.uses = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InviteCreateEvent_PayloadData {
    const message = {
      ...baseInviteCreateEvent_PayloadData,
    } as InviteCreateEvent_PayloadData;
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
      message.targetUserType = inviteData_InviteTargetUserTypeFromJSON(
        object.targetUserType
      );
    }
    if (object.temporary !== undefined && object.temporary !== null) {
      message.temporary = Boolean(object.temporary);
    }
    if (object.uses !== undefined && object.uses !== null) {
      message.uses = String(object.uses);
    }
    return message;
  },

  toJSON(message: InviteCreateEvent_PayloadData): unknown {
    const obj: any = {};
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
      (obj.targetUserType = inviteData_InviteTargetUserTypeToJSON(
        message.targetUserType
      ));
    message.temporary !== undefined && (obj.temporary = message.temporary);
    message.uses !== undefined && (obj.uses = message.uses);
    return obj;
  },

  fromPartial(
    object: DeepPartial<InviteCreateEvent_PayloadData>
  ): InviteCreateEvent_PayloadData {
    const message = {
      ...baseInviteCreateEvent_PayloadData,
    } as InviteCreateEvent_PayloadData;
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

messageTypeRegistry.set(
  InviteCreateEvent_PayloadData.$type,
  InviteCreateEvent_PayloadData
);

const baseInviteDeleteEvent: object = {
  $type: "pylon.discord.v1.event.InviteDeleteEvent",
};

export const InviteDeleteEvent = {
  $type: "pylon.discord.v1.event.InviteDeleteEvent" as const,

  encode(
    message: InviteDeleteEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      InviteDeleteEvent_PayloadData.encode(
        message.payload,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InviteDeleteEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInviteDeleteEvent } as InviteDeleteEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = EventScope.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = InviteDeleteEvent_PayloadData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InviteDeleteEvent {
    const message = { ...baseInviteDeleteEvent } as InviteDeleteEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = InviteDeleteEvent_PayloadData.fromJSON(object.payload);
    }
    return message;
  },

  toJSON(message: InviteDeleteEvent): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<InviteDeleteEvent>): InviteDeleteEvent {
    const message = { ...baseInviteDeleteEvent } as InviteDeleteEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = InviteDeleteEvent_PayloadData.fromPartial(
        object.payload
      );
    }
    return message;
  },
};

messageTypeRegistry.set(InviteDeleteEvent.$type, InviteDeleteEvent);

const baseInviteDeleteEvent_PayloadData: object = {
  $type: "pylon.discord.v1.event.InviteDeleteEvent.PayloadData",
  guildId: "0",
  channelId: "0",
  code: "",
};

export const InviteDeleteEvent_PayloadData = {
  $type: "pylon.discord.v1.event.InviteDeleteEvent.PayloadData" as const,

  encode(
    message: InviteDeleteEvent_PayloadData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InviteDeleteEvent_PayloadData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInviteDeleteEvent_PayloadData,
    } as InviteDeleteEvent_PayloadData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guildId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.channelId = longToString(reader.fixed64() as Long);
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

  fromJSON(object: any): InviteDeleteEvent_PayloadData {
    const message = {
      ...baseInviteDeleteEvent_PayloadData,
    } as InviteDeleteEvent_PayloadData;
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

  toJSON(message: InviteDeleteEvent_PayloadData): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = message.guildId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.code !== undefined && (obj.code = message.code);
    return obj;
  },

  fromPartial(
    object: DeepPartial<InviteDeleteEvent_PayloadData>
  ): InviteDeleteEvent_PayloadData {
    const message = {
      ...baseInviteDeleteEvent_PayloadData,
    } as InviteDeleteEvent_PayloadData;
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

messageTypeRegistry.set(
  InviteDeleteEvent_PayloadData.$type,
  InviteDeleteEvent_PayloadData
);

const baseGuildBanAddEvent: object = {
  $type: "pylon.discord.v1.event.GuildBanAddEvent",
};

export const GuildBanAddEvent = {
  $type: "pylon.discord.v1.event.GuildBanAddEvent" as const,

  encode(
    message: GuildBanAddEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      GuildBanAddEvent_PayloadData.encode(
        message.payload,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GuildBanAddEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGuildBanAddEvent } as GuildBanAddEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = EventScope.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = GuildBanAddEvent_PayloadData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GuildBanAddEvent {
    const message = { ...baseGuildBanAddEvent } as GuildBanAddEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = GuildBanAddEvent_PayloadData.fromJSON(object.payload);
    }
    return message;
  },

  toJSON(message: GuildBanAddEvent): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<GuildBanAddEvent>): GuildBanAddEvent {
    const message = { ...baseGuildBanAddEvent } as GuildBanAddEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = GuildBanAddEvent_PayloadData.fromPartial(
        object.payload
      );
    }
    return message;
  },
};

messageTypeRegistry.set(GuildBanAddEvent.$type, GuildBanAddEvent);

const baseGuildBanAddEvent_PayloadData: object = {
  $type: "pylon.discord.v1.event.GuildBanAddEvent.PayloadData",
  guildId: "0",
};

export const GuildBanAddEvent_PayloadData = {
  $type: "pylon.discord.v1.event.GuildBanAddEvent.PayloadData" as const,

  encode(
    message: GuildBanAddEvent_PayloadData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.guildId !== "0") {
      writer.uint32(9).fixed64(message.guildId);
    }
    if (message.user !== undefined) {
      UserData.encode(message.user, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GuildBanAddEvent_PayloadData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGuildBanAddEvent_PayloadData,
    } as GuildBanAddEvent_PayloadData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guildId = longToString(reader.fixed64() as Long);
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

  fromJSON(object: any): GuildBanAddEvent_PayloadData {
    const message = {
      ...baseGuildBanAddEvent_PayloadData,
    } as GuildBanAddEvent_PayloadData;
    if (object.guildId !== undefined && object.guildId !== null) {
      message.guildId = String(object.guildId);
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = UserData.fromJSON(object.user);
    }
    return message;
  },

  toJSON(message: GuildBanAddEvent_PayloadData): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = message.guildId);
    message.user !== undefined &&
      (obj.user = message.user ? UserData.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GuildBanAddEvent_PayloadData>
  ): GuildBanAddEvent_PayloadData {
    const message = {
      ...baseGuildBanAddEvent_PayloadData,
    } as GuildBanAddEvent_PayloadData;
    if (object.guildId !== undefined && object.guildId !== null) {
      message.guildId = object.guildId;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = UserData.fromPartial(object.user);
    }
    return message;
  },
};

messageTypeRegistry.set(
  GuildBanAddEvent_PayloadData.$type,
  GuildBanAddEvent_PayloadData
);

const baseGuildBanRemoveEvent: object = {
  $type: "pylon.discord.v1.event.GuildBanRemoveEvent",
};

export const GuildBanRemoveEvent = {
  $type: "pylon.discord.v1.event.GuildBanRemoveEvent" as const,

  encode(
    message: GuildBanRemoveEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      GuildBanRemoveEvent_PayloadData.encode(
        message.payload,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GuildBanRemoveEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGuildBanRemoveEvent } as GuildBanRemoveEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = EventScope.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = GuildBanRemoveEvent_PayloadData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GuildBanRemoveEvent {
    const message = { ...baseGuildBanRemoveEvent } as GuildBanRemoveEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = GuildBanRemoveEvent_PayloadData.fromJSON(
        object.payload
      );
    }
    return message;
  },

  toJSON(message: GuildBanRemoveEvent): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<GuildBanRemoveEvent>): GuildBanRemoveEvent {
    const message = { ...baseGuildBanRemoveEvent } as GuildBanRemoveEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = GuildBanRemoveEvent_PayloadData.fromPartial(
        object.payload
      );
    }
    return message;
  },
};

messageTypeRegistry.set(GuildBanRemoveEvent.$type, GuildBanRemoveEvent);

const baseGuildBanRemoveEvent_PayloadData: object = {
  $type: "pylon.discord.v1.event.GuildBanRemoveEvent.PayloadData",
  guildId: "0",
};

export const GuildBanRemoveEvent_PayloadData = {
  $type: "pylon.discord.v1.event.GuildBanRemoveEvent.PayloadData" as const,

  encode(
    message: GuildBanRemoveEvent_PayloadData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.guildId !== "0") {
      writer.uint32(9).fixed64(message.guildId);
    }
    if (message.user !== undefined) {
      UserData.encode(message.user, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GuildBanRemoveEvent_PayloadData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGuildBanRemoveEvent_PayloadData,
    } as GuildBanRemoveEvent_PayloadData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guildId = longToString(reader.fixed64() as Long);
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

  fromJSON(object: any): GuildBanRemoveEvent_PayloadData {
    const message = {
      ...baseGuildBanRemoveEvent_PayloadData,
    } as GuildBanRemoveEvent_PayloadData;
    if (object.guildId !== undefined && object.guildId !== null) {
      message.guildId = String(object.guildId);
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = UserData.fromJSON(object.user);
    }
    return message;
  },

  toJSON(message: GuildBanRemoveEvent_PayloadData): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = message.guildId);
    message.user !== undefined &&
      (obj.user = message.user ? UserData.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GuildBanRemoveEvent_PayloadData>
  ): GuildBanRemoveEvent_PayloadData {
    const message = {
      ...baseGuildBanRemoveEvent_PayloadData,
    } as GuildBanRemoveEvent_PayloadData;
    if (object.guildId !== undefined && object.guildId !== null) {
      message.guildId = object.guildId;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = UserData.fromPartial(object.user);
    }
    return message;
  },
};

messageTypeRegistry.set(
  GuildBanRemoveEvent_PayloadData.$type,
  GuildBanRemoveEvent_PayloadData
);

const baseGuildEmojisUpdateEvent: object = {
  $type: "pylon.discord.v1.event.GuildEmojisUpdateEvent",
};

export const GuildEmojisUpdateEvent = {
  $type: "pylon.discord.v1.event.GuildEmojisUpdateEvent" as const,

  encode(
    message: GuildEmojisUpdateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      GuildEmojisUpdateEvent_PayloadData.encode(
        message.payload,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.previouslyCached !== undefined) {
      GuildEmojisUpdateEvent_PayloadData.encode(
        message.previouslyCached,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GuildEmojisUpdateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGuildEmojisUpdateEvent } as GuildEmojisUpdateEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = EventScope.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = GuildEmojisUpdateEvent_PayloadData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.previouslyCached = GuildEmojisUpdateEvent_PayloadData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GuildEmojisUpdateEvent {
    const message = { ...baseGuildEmojisUpdateEvent } as GuildEmojisUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = GuildEmojisUpdateEvent_PayloadData.fromJSON(
        object.payload
      );
    }
    if (
      object.previouslyCached !== undefined &&
      object.previouslyCached !== null
    ) {
      message.previouslyCached = GuildEmojisUpdateEvent_PayloadData.fromJSON(
        object.previouslyCached
      );
    }
    return message;
  },

  toJSON(message: GuildEmojisUpdateEvent): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<GuildEmojisUpdateEvent>
  ): GuildEmojisUpdateEvent {
    const message = { ...baseGuildEmojisUpdateEvent } as GuildEmojisUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = GuildEmojisUpdateEvent_PayloadData.fromPartial(
        object.payload
      );
    }
    if (
      object.previouslyCached !== undefined &&
      object.previouslyCached !== null
    ) {
      message.previouslyCached = GuildEmojisUpdateEvent_PayloadData.fromPartial(
        object.previouslyCached
      );
    }
    return message;
  },
};

messageTypeRegistry.set(GuildEmojisUpdateEvent.$type, GuildEmojisUpdateEvent);

const baseGuildEmojisUpdateEvent_PayloadData: object = {
  $type: "pylon.discord.v1.event.GuildEmojisUpdateEvent.PayloadData",
  guildId: "0",
};

export const GuildEmojisUpdateEvent_PayloadData = {
  $type: "pylon.discord.v1.event.GuildEmojisUpdateEvent.PayloadData" as const,

  encode(
    message: GuildEmojisUpdateEvent_PayloadData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.guildId !== "0") {
      writer.uint32(9).fixed64(message.guildId);
    }
    for (const v of message.emojis) {
      EmojiData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GuildEmojisUpdateEvent_PayloadData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGuildEmojisUpdateEvent_PayloadData,
    } as GuildEmojisUpdateEvent_PayloadData;
    message.emojis = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guildId = longToString(reader.fixed64() as Long);
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

  fromJSON(object: any): GuildEmojisUpdateEvent_PayloadData {
    const message = {
      ...baseGuildEmojisUpdateEvent_PayloadData,
    } as GuildEmojisUpdateEvent_PayloadData;
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

  toJSON(message: GuildEmojisUpdateEvent_PayloadData): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = message.guildId);
    if (message.emojis) {
      obj.emojis = message.emojis.map((e) =>
        e ? EmojiData.toJSON(e) : undefined
      );
    } else {
      obj.emojis = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GuildEmojisUpdateEvent_PayloadData>
  ): GuildEmojisUpdateEvent_PayloadData {
    const message = {
      ...baseGuildEmojisUpdateEvent_PayloadData,
    } as GuildEmojisUpdateEvent_PayloadData;
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

messageTypeRegistry.set(
  GuildEmojisUpdateEvent_PayloadData.$type,
  GuildEmojisUpdateEvent_PayloadData
);

const baseGuildIntegrationsUpdateEvent: object = {
  $type: "pylon.discord.v1.event.GuildIntegrationsUpdateEvent",
};

export const GuildIntegrationsUpdateEvent = {
  $type: "pylon.discord.v1.event.GuildIntegrationsUpdateEvent" as const,

  encode(
    message: GuildIntegrationsUpdateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      GuildIntegrationsUpdateEvent_PayloadData.encode(
        message.payload,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GuildIntegrationsUpdateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGuildIntegrationsUpdateEvent,
    } as GuildIntegrationsUpdateEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = EventScope.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = GuildIntegrationsUpdateEvent_PayloadData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GuildIntegrationsUpdateEvent {
    const message = {
      ...baseGuildIntegrationsUpdateEvent,
    } as GuildIntegrationsUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = GuildIntegrationsUpdateEvent_PayloadData.fromJSON(
        object.payload
      );
    }
    return message;
  },

  toJSON(message: GuildIntegrationsUpdateEvent): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<GuildIntegrationsUpdateEvent>
  ): GuildIntegrationsUpdateEvent {
    const message = {
      ...baseGuildIntegrationsUpdateEvent,
    } as GuildIntegrationsUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = GuildIntegrationsUpdateEvent_PayloadData.fromPartial(
        object.payload
      );
    }
    return message;
  },
};

messageTypeRegistry.set(
  GuildIntegrationsUpdateEvent.$type,
  GuildIntegrationsUpdateEvent
);

const baseGuildIntegrationsUpdateEvent_PayloadData: object = {
  $type: "pylon.discord.v1.event.GuildIntegrationsUpdateEvent.PayloadData",
  guildId: "0",
};

export const GuildIntegrationsUpdateEvent_PayloadData = {
  $type: "pylon.discord.v1.event.GuildIntegrationsUpdateEvent.PayloadData" as const,

  encode(
    message: GuildIntegrationsUpdateEvent_PayloadData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.guildId !== "0") {
      writer.uint32(9).fixed64(message.guildId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GuildIntegrationsUpdateEvent_PayloadData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGuildIntegrationsUpdateEvent_PayloadData,
    } as GuildIntegrationsUpdateEvent_PayloadData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guildId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GuildIntegrationsUpdateEvent_PayloadData {
    const message = {
      ...baseGuildIntegrationsUpdateEvent_PayloadData,
    } as GuildIntegrationsUpdateEvent_PayloadData;
    if (object.guildId !== undefined && object.guildId !== null) {
      message.guildId = String(object.guildId);
    }
    return message;
  },

  toJSON(message: GuildIntegrationsUpdateEvent_PayloadData): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = message.guildId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GuildIntegrationsUpdateEvent_PayloadData>
  ): GuildIntegrationsUpdateEvent_PayloadData {
    const message = {
      ...baseGuildIntegrationsUpdateEvent_PayloadData,
    } as GuildIntegrationsUpdateEvent_PayloadData;
    if (object.guildId !== undefined && object.guildId !== null) {
      message.guildId = object.guildId;
    }
    return message;
  },
};

messageTypeRegistry.set(
  GuildIntegrationsUpdateEvent_PayloadData.$type,
  GuildIntegrationsUpdateEvent_PayloadData
);

const baseWebhooksUpdateEvent: object = {
  $type: "pylon.discord.v1.event.WebhooksUpdateEvent",
};

export const WebhooksUpdateEvent = {
  $type: "pylon.discord.v1.event.WebhooksUpdateEvent" as const,

  encode(
    message: WebhooksUpdateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      WebhooksUpdateEvent_PayloadData.encode(
        message.payload,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WebhooksUpdateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWebhooksUpdateEvent } as WebhooksUpdateEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = EventScope.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = WebhooksUpdateEvent_PayloadData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WebhooksUpdateEvent {
    const message = { ...baseWebhooksUpdateEvent } as WebhooksUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = WebhooksUpdateEvent_PayloadData.fromJSON(
        object.payload
      );
    }
    return message;
  },

  toJSON(message: WebhooksUpdateEvent): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<WebhooksUpdateEvent>): WebhooksUpdateEvent {
    const message = { ...baseWebhooksUpdateEvent } as WebhooksUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = WebhooksUpdateEvent_PayloadData.fromPartial(
        object.payload
      );
    }
    return message;
  },
};

messageTypeRegistry.set(WebhooksUpdateEvent.$type, WebhooksUpdateEvent);

const baseWebhooksUpdateEvent_PayloadData: object = {
  $type: "pylon.discord.v1.event.WebhooksUpdateEvent.PayloadData",
  guildId: "0",
};

export const WebhooksUpdateEvent_PayloadData = {
  $type: "pylon.discord.v1.event.WebhooksUpdateEvent.PayloadData" as const,

  encode(
    message: WebhooksUpdateEvent_PayloadData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.guildId !== "0") {
      writer.uint32(9).fixed64(message.guildId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WebhooksUpdateEvent_PayloadData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseWebhooksUpdateEvent_PayloadData,
    } as WebhooksUpdateEvent_PayloadData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guildId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WebhooksUpdateEvent_PayloadData {
    const message = {
      ...baseWebhooksUpdateEvent_PayloadData,
    } as WebhooksUpdateEvent_PayloadData;
    if (object.guildId !== undefined && object.guildId !== null) {
      message.guildId = String(object.guildId);
    }
    return message;
  },

  toJSON(message: WebhooksUpdateEvent_PayloadData): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = message.guildId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<WebhooksUpdateEvent_PayloadData>
  ): WebhooksUpdateEvent_PayloadData {
    const message = {
      ...baseWebhooksUpdateEvent_PayloadData,
    } as WebhooksUpdateEvent_PayloadData;
    if (object.guildId !== undefined && object.guildId !== null) {
      message.guildId = object.guildId;
    }
    return message;
  },
};

messageTypeRegistry.set(
  WebhooksUpdateEvent_PayloadData.$type,
  WebhooksUpdateEvent_PayloadData
);

const baseIntegrationCreateEvent: object = {
  $type: "pylon.discord.v1.event.IntegrationCreateEvent",
};

export const IntegrationCreateEvent = {
  $type: "pylon.discord.v1.event.IntegrationCreateEvent" as const,

  encode(
    message: IntegrationCreateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      IntegrationCreateEvent_PayloadData.encode(
        message.payload,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IntegrationCreateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIntegrationCreateEvent } as IntegrationCreateEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = EventScope.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = IntegrationCreateEvent_PayloadData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IntegrationCreateEvent {
    const message = { ...baseIntegrationCreateEvent } as IntegrationCreateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = IntegrationCreateEvent_PayloadData.fromJSON(
        object.payload
      );
    }
    return message;
  },

  toJSON(message: IntegrationCreateEvent): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<IntegrationCreateEvent>
  ): IntegrationCreateEvent {
    const message = { ...baseIntegrationCreateEvent } as IntegrationCreateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = IntegrationCreateEvent_PayloadData.fromPartial(
        object.payload
      );
    }
    return message;
  },
};

messageTypeRegistry.set(IntegrationCreateEvent.$type, IntegrationCreateEvent);

const baseIntegrationCreateEvent_PayloadData: object = {
  $type: "pylon.discord.v1.event.IntegrationCreateEvent.PayloadData",
  guildId: "0",
};

export const IntegrationCreateEvent_PayloadData = {
  $type: "pylon.discord.v1.event.IntegrationCreateEvent.PayloadData" as const,

  encode(
    message: IntegrationCreateEvent_PayloadData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.guildId !== "0") {
      writer.uint32(9).fixed64(message.guildId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IntegrationCreateEvent_PayloadData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseIntegrationCreateEvent_PayloadData,
    } as IntegrationCreateEvent_PayloadData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guildId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IntegrationCreateEvent_PayloadData {
    const message = {
      ...baseIntegrationCreateEvent_PayloadData,
    } as IntegrationCreateEvent_PayloadData;
    if (object.guildId !== undefined && object.guildId !== null) {
      message.guildId = String(object.guildId);
    }
    return message;
  },

  toJSON(message: IntegrationCreateEvent_PayloadData): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = message.guildId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<IntegrationCreateEvent_PayloadData>
  ): IntegrationCreateEvent_PayloadData {
    const message = {
      ...baseIntegrationCreateEvent_PayloadData,
    } as IntegrationCreateEvent_PayloadData;
    if (object.guildId !== undefined && object.guildId !== null) {
      message.guildId = object.guildId;
    }
    return message;
  },
};

messageTypeRegistry.set(
  IntegrationCreateEvent_PayloadData.$type,
  IntegrationCreateEvent_PayloadData
);

const baseIntegrationUpdateEvent: object = {
  $type: "pylon.discord.v1.event.IntegrationUpdateEvent",
};

export const IntegrationUpdateEvent = {
  $type: "pylon.discord.v1.event.IntegrationUpdateEvent" as const,

  encode(
    message: IntegrationUpdateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      IntegrationUpdateEvent_PayloadData.encode(
        message.payload,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IntegrationUpdateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIntegrationUpdateEvent } as IntegrationUpdateEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = EventScope.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = IntegrationUpdateEvent_PayloadData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IntegrationUpdateEvent {
    const message = { ...baseIntegrationUpdateEvent } as IntegrationUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = IntegrationUpdateEvent_PayloadData.fromJSON(
        object.payload
      );
    }
    return message;
  },

  toJSON(message: IntegrationUpdateEvent): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<IntegrationUpdateEvent>
  ): IntegrationUpdateEvent {
    const message = { ...baseIntegrationUpdateEvent } as IntegrationUpdateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = IntegrationUpdateEvent_PayloadData.fromPartial(
        object.payload
      );
    }
    return message;
  },
};

messageTypeRegistry.set(IntegrationUpdateEvent.$type, IntegrationUpdateEvent);

const baseIntegrationUpdateEvent_PayloadData: object = {
  $type: "pylon.discord.v1.event.IntegrationUpdateEvent.PayloadData",
  guildId: "0",
};

export const IntegrationUpdateEvent_PayloadData = {
  $type: "pylon.discord.v1.event.IntegrationUpdateEvent.PayloadData" as const,

  encode(
    message: IntegrationUpdateEvent_PayloadData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.guildId !== "0") {
      writer.uint32(9).fixed64(message.guildId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IntegrationUpdateEvent_PayloadData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseIntegrationUpdateEvent_PayloadData,
    } as IntegrationUpdateEvent_PayloadData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guildId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IntegrationUpdateEvent_PayloadData {
    const message = {
      ...baseIntegrationUpdateEvent_PayloadData,
    } as IntegrationUpdateEvent_PayloadData;
    if (object.guildId !== undefined && object.guildId !== null) {
      message.guildId = String(object.guildId);
    }
    return message;
  },

  toJSON(message: IntegrationUpdateEvent_PayloadData): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = message.guildId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<IntegrationUpdateEvent_PayloadData>
  ): IntegrationUpdateEvent_PayloadData {
    const message = {
      ...baseIntegrationUpdateEvent_PayloadData,
    } as IntegrationUpdateEvent_PayloadData;
    if (object.guildId !== undefined && object.guildId !== null) {
      message.guildId = object.guildId;
    }
    return message;
  },
};

messageTypeRegistry.set(
  IntegrationUpdateEvent_PayloadData.$type,
  IntegrationUpdateEvent_PayloadData
);

const baseIntegrationDeleteEvent: object = {
  $type: "pylon.discord.v1.event.IntegrationDeleteEvent",
};

export const IntegrationDeleteEvent = {
  $type: "pylon.discord.v1.event.IntegrationDeleteEvent" as const,

  encode(
    message: IntegrationDeleteEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      IntegrationDeleteEvent_PayloadData.encode(
        message.payload,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IntegrationDeleteEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIntegrationDeleteEvent } as IntegrationDeleteEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = EventScope.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = IntegrationDeleteEvent_PayloadData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IntegrationDeleteEvent {
    const message = { ...baseIntegrationDeleteEvent } as IntegrationDeleteEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = IntegrationDeleteEvent_PayloadData.fromJSON(
        object.payload
      );
    }
    return message;
  },

  toJSON(message: IntegrationDeleteEvent): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<IntegrationDeleteEvent>
  ): IntegrationDeleteEvent {
    const message = { ...baseIntegrationDeleteEvent } as IntegrationDeleteEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = IntegrationDeleteEvent_PayloadData.fromPartial(
        object.payload
      );
    }
    return message;
  },
};

messageTypeRegistry.set(IntegrationDeleteEvent.$type, IntegrationDeleteEvent);

const baseIntegrationDeleteEvent_PayloadData: object = {
  $type: "pylon.discord.v1.event.IntegrationDeleteEvent.PayloadData",
  guildId: "0",
};

export const IntegrationDeleteEvent_PayloadData = {
  $type: "pylon.discord.v1.event.IntegrationDeleteEvent.PayloadData" as const,

  encode(
    message: IntegrationDeleteEvent_PayloadData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.guildId !== "0") {
      writer.uint32(9).fixed64(message.guildId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IntegrationDeleteEvent_PayloadData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseIntegrationDeleteEvent_PayloadData,
    } as IntegrationDeleteEvent_PayloadData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guildId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IntegrationDeleteEvent_PayloadData {
    const message = {
      ...baseIntegrationDeleteEvent_PayloadData,
    } as IntegrationDeleteEvent_PayloadData;
    if (object.guildId !== undefined && object.guildId !== null) {
      message.guildId = String(object.guildId);
    }
    return message;
  },

  toJSON(message: IntegrationDeleteEvent_PayloadData): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = message.guildId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<IntegrationDeleteEvent_PayloadData>
  ): IntegrationDeleteEvent_PayloadData {
    const message = {
      ...baseIntegrationDeleteEvent_PayloadData,
    } as IntegrationDeleteEvent_PayloadData;
    if (object.guildId !== undefined && object.guildId !== null) {
      message.guildId = object.guildId;
    }
    return message;
  },
};

messageTypeRegistry.set(
  IntegrationDeleteEvent_PayloadData.$type,
  IntegrationDeleteEvent_PayloadData
);

const baseInteractionCreateEvent: object = {
  $type: "pylon.discord.v1.event.InteractionCreateEvent",
};

export const InteractionCreateEvent = {
  $type: "pylon.discord.v1.event.InteractionCreateEvent" as const,

  encode(
    message: InteractionCreateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      EventScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      InteractionCreateEvent_PayloadData.encode(
        message.payload,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InteractionCreateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInteractionCreateEvent } as InteractionCreateEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = EventScope.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = InteractionCreateEvent_PayloadData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InteractionCreateEvent {
    const message = { ...baseInteractionCreateEvent } as InteractionCreateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromJSON(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = InteractionCreateEvent_PayloadData.fromJSON(
        object.payload
      );
    }
    return message;
  },

  toJSON(message: InteractionCreateEvent): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<InteractionCreateEvent>
  ): InteractionCreateEvent {
    const message = { ...baseInteractionCreateEvent } as InteractionCreateEvent;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = EventScope.fromPartial(object.scope);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = InteractionCreateEvent_PayloadData.fromPartial(
        object.payload
      );
    }
    return message;
  },
};

messageTypeRegistry.set(InteractionCreateEvent.$type, InteractionCreateEvent);

const baseInteractionCreateEvent_PayloadData: object = {
  $type: "pylon.discord.v1.event.InteractionCreateEvent.PayloadData",
  guildId: "0",
};

export const InteractionCreateEvent_PayloadData = {
  $type: "pylon.discord.v1.event.InteractionCreateEvent.PayloadData" as const,

  encode(
    message: InteractionCreateEvent_PayloadData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.guildId !== "0") {
      writer.uint32(9).sfixed64(message.guildId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InteractionCreateEvent_PayloadData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInteractionCreateEvent_PayloadData,
    } as InteractionCreateEvent_PayloadData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guildId = longToString(reader.sfixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InteractionCreateEvent_PayloadData {
    const message = {
      ...baseInteractionCreateEvent_PayloadData,
    } as InteractionCreateEvent_PayloadData;
    if (object.guildId !== undefined && object.guildId !== null) {
      message.guildId = String(object.guildId);
    }
    return message;
  },

  toJSON(message: InteractionCreateEvent_PayloadData): unknown {
    const obj: any = {};
    message.guildId !== undefined && (obj.guildId = message.guildId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<InteractionCreateEvent_PayloadData>
  ): InteractionCreateEvent_PayloadData {
    const message = {
      ...baseInteractionCreateEvent_PayloadData,
    } as InteractionCreateEvent_PayloadData;
    if (object.guildId !== undefined && object.guildId !== null) {
      message.guildId = object.guildId;
    }
    return message;
  },
};

messageTypeRegistry.set(
  InteractionCreateEvent_PayloadData.$type,
  InteractionCreateEvent_PayloadData
);

const baseEventResponse: object = {
  $type: "pylon.discord.v1.event.EventResponse",
};

export const EventResponse = {
  $type: "pylon.discord.v1.event.EventResponse" as const,

  encode(
    _: EventResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventResponse } as EventResponse;
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

  fromJSON(_: any): EventResponse {
    const message = { ...baseEventResponse } as EventResponse;
    return message;
  },

  toJSON(_: EventResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<EventResponse>): EventResponse {
    const message = { ...baseEventResponse } as EventResponse;
    return message;
  },
};

messageTypeRegistry.set(EventResponse.$type, EventResponse);

const baseInteractionResponse: object = {
  $type: "pylon.discord.v1.event.InteractionResponse",
};

export const InteractionResponse = {
  $type: "pylon.discord.v1.event.InteractionResponse" as const,

  encode(
    _: InteractionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InteractionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInteractionResponse } as InteractionResponse;
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

  fromJSON(_: any): InteractionResponse {
    const message = { ...baseInteractionResponse } as InteractionResponse;
    return message;
  },

  toJSON(_: InteractionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<InteractionResponse>): InteractionResponse {
    const message = { ...baseInteractionResponse } as InteractionResponse;
    return message;
  },
};

messageTypeRegistry.set(InteractionResponse.$type, InteractionResponse);

export interface DataLoaderOptions {
  cache?: boolean;
}

export interface DataLoaders {
  rpcDataLoaderOptions?: DataLoaderOptions;
  getDataLoader<T>(identifier: string, constructorFn: () => T): T;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string }
  ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & {
      $case: T["$case"];
    }
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = (date.getTime() / 1_000).toString();
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = Number(t.seconds) * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
