/* eslint-disable */
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleBidiStreamingCall,
  Client,
  ClientDuplexStream,
  CallOptions,
  Metadata,
  handleUnaryCall,
  ClientUnaryCall,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import {
  EventEnvelope,
  EventEnvelopeAck,
  GuildCreateEvent,
  EventResponse,
  GuildUpdateEvent,
  GuildDeleteEvent,
  PresenceUpdateEvent,
  GuildMemberAddEvent,
  GuildMemberUpdateEvent,
  GuildMemberRemoveEvent,
  ChannelCreateEvent,
  ChannelUpdateEvent,
  ChannelDeleteEvent,
  ChannelPinsUpdateEvent,
  GuildRoleCreateEvent,
  GuildRoleUpdateEvent,
  GuildRoleDeleteEvent,
  MessageCreateEvent,
  MessageUpdateEvent,
  MessageDeleteEvent,
  MessageDeleteBulkEvent,
  MessageReactionAddEvent,
  MessageReactionRemoveEvent,
  MessageReactionRemoveAllEvent,
  MessageReactionRemoveEmojiEvent,
  TypingStartEvent,
  VoiceStateUpdateEvent,
  VoiceServerUpdateEvent,
  InviteCreateEvent,
  InviteDeleteEvent,
  GuildBanAddEvent,
  GuildBanRemoveEvent,
  GuildEmojisUpdateEvent,
  GuildIntegrationsUpdateEvent,
  WebhooksUpdateEvent,
  IntegrationCreateEvent,
  IntegrationUpdateEvent,
  IntegrationDeleteEvent,
  InteractionCreateEvent,
  InteractionResponse,
} from "../../discord/v1/event";

export const protobufPackage = "pylon.gateway.v1.service";

export const GatewayDispatchStreamingService = {
  event: {
    path: "/pylon.gateway.v1.service.GatewayDispatchStreaming/Event",
    requestStream: true,
    responseStream: true,
    requestSerialize: (value: EventEnvelope) =>
      Buffer.from(EventEnvelope.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EventEnvelope.decode(value),
    responseSerialize: (value: EventEnvelopeAck) =>
      Buffer.from(EventEnvelopeAck.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventEnvelopeAck.decode(value),
  },
} as const;

export interface GatewayDispatchStreamingServer
  extends UntypedServiceImplementation {
  event: handleBidiStreamingCall<EventEnvelope, EventEnvelopeAck>;
}

export interface GatewayDispatchStreamingClient extends Client {
  event(): ClientDuplexStream<EventEnvelope, EventEnvelopeAck>;
  event(
    options: Partial<CallOptions>
  ): ClientDuplexStream<EventEnvelope, EventEnvelopeAck>;
  event(
    metadata: Metadata,
    options?: Partial<CallOptions>
  ): ClientDuplexStream<EventEnvelope, EventEnvelopeAck>;
}

export const GatewayDispatchStreamingClient = (makeGenericClientConstructor(
  GatewayDispatchStreamingService,
  "pylon.gateway.v1.service.GatewayDispatchStreaming"
) as unknown) as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): GatewayDispatchStreamingClient;
};

export const GatewayDispatchService = {
  guildCreate: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/GuildCreate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GuildCreateEvent) =>
      Buffer.from(GuildCreateEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GuildCreateEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  guildUpdate: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/GuildUpdate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GuildUpdateEvent) =>
      Buffer.from(GuildUpdateEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GuildUpdateEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  guildDelete: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/GuildDelete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GuildDeleteEvent) =>
      Buffer.from(GuildDeleteEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GuildDeleteEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  presenceUpdate: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/PresenceUpdate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PresenceUpdateEvent) =>
      Buffer.from(PresenceUpdateEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PresenceUpdateEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  guildMemberAdd: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/GuildMemberAdd",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GuildMemberAddEvent) =>
      Buffer.from(GuildMemberAddEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GuildMemberAddEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  guildMemberUpdate: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/GuildMemberUpdate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GuildMemberUpdateEvent) =>
      Buffer.from(GuildMemberUpdateEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GuildMemberUpdateEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  guildMemberRemove: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/GuildMemberRemove",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GuildMemberRemoveEvent) =>
      Buffer.from(GuildMemberRemoveEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GuildMemberRemoveEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  channelCreate: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/ChannelCreate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ChannelCreateEvent) =>
      Buffer.from(ChannelCreateEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ChannelCreateEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  channelUpdate: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/ChannelUpdate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ChannelUpdateEvent) =>
      Buffer.from(ChannelUpdateEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ChannelUpdateEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  channelDelete: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/ChannelDelete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ChannelDeleteEvent) =>
      Buffer.from(ChannelDeleteEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ChannelDeleteEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  channelPinsUpdate: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/ChannelPinsUpdate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ChannelPinsUpdateEvent) =>
      Buffer.from(ChannelPinsUpdateEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ChannelPinsUpdateEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  guildRoleCreate: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/GuildRoleCreate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GuildRoleCreateEvent) =>
      Buffer.from(GuildRoleCreateEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GuildRoleCreateEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  guildRoleUpdate: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/GuildRoleUpdate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GuildRoleUpdateEvent) =>
      Buffer.from(GuildRoleUpdateEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GuildRoleUpdateEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  guildRoleDelete: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/GuildRoleDelete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GuildRoleDeleteEvent) =>
      Buffer.from(GuildRoleDeleteEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GuildRoleDeleteEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  messageCreate: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/MessageCreate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MessageCreateEvent) =>
      Buffer.from(MessageCreateEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MessageCreateEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  messageUpdate: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/MessageUpdate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MessageUpdateEvent) =>
      Buffer.from(MessageUpdateEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MessageUpdateEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  messageDelete: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/MessageDelete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MessageDeleteEvent) =>
      Buffer.from(MessageDeleteEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MessageDeleteEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  messageDeleteBulk: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/MessageDeleteBulk",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MessageDeleteBulkEvent) =>
      Buffer.from(MessageDeleteBulkEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MessageDeleteBulkEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  messageReactionAdd: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/MessageReactionAdd",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MessageReactionAddEvent) =>
      Buffer.from(MessageReactionAddEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      MessageReactionAddEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  messageReactionRemove: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/MessageReactionRemove",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MessageReactionRemoveEvent) =>
      Buffer.from(MessageReactionRemoveEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      MessageReactionRemoveEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  messageReactionRemoveAll: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/MessageReactionRemoveAll",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MessageReactionRemoveAllEvent) =>
      Buffer.from(MessageReactionRemoveAllEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      MessageReactionRemoveAllEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  messageReactionRemoveEmoji: {
    path:
      "/pylon.gateway.v1.service.GatewayDispatch/MessageReactionRemoveEmoji",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MessageReactionRemoveEmojiEvent) =>
      Buffer.from(MessageReactionRemoveEmojiEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      MessageReactionRemoveEmojiEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  typingStart: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/TypingStart",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: TypingStartEvent) =>
      Buffer.from(TypingStartEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => TypingStartEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  voiceStateUpdate: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/VoiceStateUpdate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: VoiceStateUpdateEvent) =>
      Buffer.from(VoiceStateUpdateEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => VoiceStateUpdateEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  voiceServerUpdate: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/VoiceServerUpdate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: VoiceServerUpdateEvent) =>
      Buffer.from(VoiceServerUpdateEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => VoiceServerUpdateEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  inviteCreate: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/InviteCreate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: InviteCreateEvent) =>
      Buffer.from(InviteCreateEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => InviteCreateEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  inviteDelete: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/InviteDelete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: InviteDeleteEvent) =>
      Buffer.from(InviteDeleteEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => InviteDeleteEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  guildBanAdd: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/GuildBanAdd",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GuildBanAddEvent) =>
      Buffer.from(GuildBanAddEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GuildBanAddEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  guildBanRemove: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/GuildBanRemove",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GuildBanRemoveEvent) =>
      Buffer.from(GuildBanRemoveEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GuildBanRemoveEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  guildEmojisUpdate: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/GuildEmojisUpdate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GuildEmojisUpdateEvent) =>
      Buffer.from(GuildEmojisUpdateEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GuildEmojisUpdateEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  guildIntegrationsUpdate: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/GuildIntegrationsUpdate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GuildIntegrationsUpdateEvent) =>
      Buffer.from(GuildIntegrationsUpdateEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GuildIntegrationsUpdateEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  webhooksUpdate: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/WebhooksUpdate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: WebhooksUpdateEvent) =>
      Buffer.from(WebhooksUpdateEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => WebhooksUpdateEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  integrationCreate: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/IntegrationCreate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: IntegrationCreateEvent) =>
      Buffer.from(IntegrationCreateEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => IntegrationCreateEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  integrationUpdate: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/IntegrationUpdate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: IntegrationUpdateEvent) =>
      Buffer.from(IntegrationUpdateEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => IntegrationUpdateEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  integrationDelete: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/IntegrationDelete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: IntegrationDeleteEvent) =>
      Buffer.from(IntegrationDeleteEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => IntegrationDeleteEvent.decode(value),
    responseSerialize: (value: EventResponse) =>
      Buffer.from(EventResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => EventResponse.decode(value),
  },
  interactionCreate: {
    path: "/pylon.gateway.v1.service.GatewayDispatch/InteractionCreate",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: InteractionCreateEvent) =>
      Buffer.from(InteractionCreateEvent.encode(value).finish()),
    requestDeserialize: (value: Buffer) => InteractionCreateEvent.decode(value),
    responseSerialize: (value: InteractionResponse) =>
      Buffer.from(InteractionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => InteractionResponse.decode(value),
  },
} as const;

export interface GatewayDispatchServer extends UntypedServiceImplementation {
  guildCreate: handleUnaryCall<GuildCreateEvent, EventResponse>;
  guildUpdate: handleUnaryCall<GuildUpdateEvent, EventResponse>;
  guildDelete: handleUnaryCall<GuildDeleteEvent, EventResponse>;
  presenceUpdate: handleUnaryCall<PresenceUpdateEvent, EventResponse>;
  guildMemberAdd: handleUnaryCall<GuildMemberAddEvent, EventResponse>;
  guildMemberUpdate: handleUnaryCall<GuildMemberUpdateEvent, EventResponse>;
  guildMemberRemove: handleUnaryCall<GuildMemberRemoveEvent, EventResponse>;
  channelCreate: handleUnaryCall<ChannelCreateEvent, EventResponse>;
  channelUpdate: handleUnaryCall<ChannelUpdateEvent, EventResponse>;
  channelDelete: handleUnaryCall<ChannelDeleteEvent, EventResponse>;
  channelPinsUpdate: handleUnaryCall<ChannelPinsUpdateEvent, EventResponse>;
  guildRoleCreate: handleUnaryCall<GuildRoleCreateEvent, EventResponse>;
  guildRoleUpdate: handleUnaryCall<GuildRoleUpdateEvent, EventResponse>;
  guildRoleDelete: handleUnaryCall<GuildRoleDeleteEvent, EventResponse>;
  messageCreate: handleUnaryCall<MessageCreateEvent, EventResponse>;
  messageUpdate: handleUnaryCall<MessageUpdateEvent, EventResponse>;
  messageDelete: handleUnaryCall<MessageDeleteEvent, EventResponse>;
  messageDeleteBulk: handleUnaryCall<MessageDeleteBulkEvent, EventResponse>;
  messageReactionAdd: handleUnaryCall<MessageReactionAddEvent, EventResponse>;
  messageReactionRemove: handleUnaryCall<
    MessageReactionRemoveEvent,
    EventResponse
  >;
  messageReactionRemoveAll: handleUnaryCall<
    MessageReactionRemoveAllEvent,
    EventResponse
  >;
  messageReactionRemoveEmoji: handleUnaryCall<
    MessageReactionRemoveEmojiEvent,
    EventResponse
  >;
  typingStart: handleUnaryCall<TypingStartEvent, EventResponse>;
  voiceStateUpdate: handleUnaryCall<VoiceStateUpdateEvent, EventResponse>;
  voiceServerUpdate: handleUnaryCall<VoiceServerUpdateEvent, EventResponse>;
  inviteCreate: handleUnaryCall<InviteCreateEvent, EventResponse>;
  inviteDelete: handleUnaryCall<InviteDeleteEvent, EventResponse>;
  guildBanAdd: handleUnaryCall<GuildBanAddEvent, EventResponse>;
  guildBanRemove: handleUnaryCall<GuildBanRemoveEvent, EventResponse>;
  guildEmojisUpdate: handleUnaryCall<GuildEmojisUpdateEvent, EventResponse>;
  guildIntegrationsUpdate: handleUnaryCall<
    GuildIntegrationsUpdateEvent,
    EventResponse
  >;
  webhooksUpdate: handleUnaryCall<WebhooksUpdateEvent, EventResponse>;
  integrationCreate: handleUnaryCall<IntegrationCreateEvent, EventResponse>;
  integrationUpdate: handleUnaryCall<IntegrationUpdateEvent, EventResponse>;
  integrationDelete: handleUnaryCall<IntegrationDeleteEvent, EventResponse>;
  interactionCreate: handleUnaryCall<
    InteractionCreateEvent,
    InteractionResponse
  >;
}

export interface GatewayDispatchClient extends Client {
  guildCreate(
    request: GuildCreateEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildCreate(
    request: GuildCreateEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildCreate(
    request: GuildCreateEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildUpdate(
    request: GuildUpdateEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildUpdate(
    request: GuildUpdateEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildUpdate(
    request: GuildUpdateEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildDelete(
    request: GuildDeleteEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildDelete(
    request: GuildDeleteEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildDelete(
    request: GuildDeleteEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  presenceUpdate(
    request: PresenceUpdateEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  presenceUpdate(
    request: PresenceUpdateEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  presenceUpdate(
    request: PresenceUpdateEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildMemberAdd(
    request: GuildMemberAddEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildMemberAdd(
    request: GuildMemberAddEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildMemberAdd(
    request: GuildMemberAddEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildMemberUpdate(
    request: GuildMemberUpdateEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildMemberUpdate(
    request: GuildMemberUpdateEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildMemberUpdate(
    request: GuildMemberUpdateEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildMemberRemove(
    request: GuildMemberRemoveEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildMemberRemove(
    request: GuildMemberRemoveEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildMemberRemove(
    request: GuildMemberRemoveEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  channelCreate(
    request: ChannelCreateEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  channelCreate(
    request: ChannelCreateEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  channelCreate(
    request: ChannelCreateEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  channelUpdate(
    request: ChannelUpdateEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  channelUpdate(
    request: ChannelUpdateEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  channelUpdate(
    request: ChannelUpdateEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  channelDelete(
    request: ChannelDeleteEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  channelDelete(
    request: ChannelDeleteEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  channelDelete(
    request: ChannelDeleteEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  channelPinsUpdate(
    request: ChannelPinsUpdateEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  channelPinsUpdate(
    request: ChannelPinsUpdateEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  channelPinsUpdate(
    request: ChannelPinsUpdateEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildRoleCreate(
    request: GuildRoleCreateEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildRoleCreate(
    request: GuildRoleCreateEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildRoleCreate(
    request: GuildRoleCreateEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildRoleUpdate(
    request: GuildRoleUpdateEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildRoleUpdate(
    request: GuildRoleUpdateEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildRoleUpdate(
    request: GuildRoleUpdateEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildRoleDelete(
    request: GuildRoleDeleteEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildRoleDelete(
    request: GuildRoleDeleteEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildRoleDelete(
    request: GuildRoleDeleteEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageCreate(
    request: MessageCreateEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageCreate(
    request: MessageCreateEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageCreate(
    request: MessageCreateEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageUpdate(
    request: MessageUpdateEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageUpdate(
    request: MessageUpdateEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageUpdate(
    request: MessageUpdateEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageDelete(
    request: MessageDeleteEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageDelete(
    request: MessageDeleteEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageDelete(
    request: MessageDeleteEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageDeleteBulk(
    request: MessageDeleteBulkEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageDeleteBulk(
    request: MessageDeleteBulkEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageDeleteBulk(
    request: MessageDeleteBulkEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageReactionAdd(
    request: MessageReactionAddEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageReactionAdd(
    request: MessageReactionAddEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageReactionAdd(
    request: MessageReactionAddEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageReactionRemove(
    request: MessageReactionRemoveEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageReactionRemove(
    request: MessageReactionRemoveEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageReactionRemove(
    request: MessageReactionRemoveEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageReactionRemoveAll(
    request: MessageReactionRemoveAllEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageReactionRemoveAll(
    request: MessageReactionRemoveAllEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageReactionRemoveAll(
    request: MessageReactionRemoveAllEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageReactionRemoveEmoji(
    request: MessageReactionRemoveEmojiEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageReactionRemoveEmoji(
    request: MessageReactionRemoveEmojiEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  messageReactionRemoveEmoji(
    request: MessageReactionRemoveEmojiEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  typingStart(
    request: TypingStartEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  typingStart(
    request: TypingStartEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  typingStart(
    request: TypingStartEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  voiceStateUpdate(
    request: VoiceStateUpdateEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  voiceStateUpdate(
    request: VoiceStateUpdateEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  voiceStateUpdate(
    request: VoiceStateUpdateEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  voiceServerUpdate(
    request: VoiceServerUpdateEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  voiceServerUpdate(
    request: VoiceServerUpdateEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  voiceServerUpdate(
    request: VoiceServerUpdateEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  inviteCreate(
    request: InviteCreateEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  inviteCreate(
    request: InviteCreateEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  inviteCreate(
    request: InviteCreateEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  inviteDelete(
    request: InviteDeleteEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  inviteDelete(
    request: InviteDeleteEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  inviteDelete(
    request: InviteDeleteEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildBanAdd(
    request: GuildBanAddEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildBanAdd(
    request: GuildBanAddEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildBanAdd(
    request: GuildBanAddEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildBanRemove(
    request: GuildBanRemoveEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildBanRemove(
    request: GuildBanRemoveEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildBanRemove(
    request: GuildBanRemoveEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildEmojisUpdate(
    request: GuildEmojisUpdateEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildEmojisUpdate(
    request: GuildEmojisUpdateEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildEmojisUpdate(
    request: GuildEmojisUpdateEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildIntegrationsUpdate(
    request: GuildIntegrationsUpdateEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildIntegrationsUpdate(
    request: GuildIntegrationsUpdateEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  guildIntegrationsUpdate(
    request: GuildIntegrationsUpdateEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  webhooksUpdate(
    request: WebhooksUpdateEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  webhooksUpdate(
    request: WebhooksUpdateEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  webhooksUpdate(
    request: WebhooksUpdateEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  integrationCreate(
    request: IntegrationCreateEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  integrationCreate(
    request: IntegrationCreateEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  integrationCreate(
    request: IntegrationCreateEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  integrationUpdate(
    request: IntegrationUpdateEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  integrationUpdate(
    request: IntegrationUpdateEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  integrationUpdate(
    request: IntegrationUpdateEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  integrationDelete(
    request: IntegrationDeleteEvent,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  integrationDelete(
    request: IntegrationDeleteEvent,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  integrationDelete(
    request: IntegrationDeleteEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: EventResponse) => void
  ): ClientUnaryCall;
  interactionCreate(
    request: InteractionCreateEvent,
    callback: (
      error: ServiceError | null,
      response: InteractionResponse
    ) => void
  ): ClientUnaryCall;
  interactionCreate(
    request: InteractionCreateEvent,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: InteractionResponse
    ) => void
  ): ClientUnaryCall;
  interactionCreate(
    request: InteractionCreateEvent,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: InteractionResponse
    ) => void
  ): ClientUnaryCall;
}

export const GatewayDispatchClient = (makeGenericClientConstructor(
  GatewayDispatchService,
  "pylon.gateway.v1.service.GatewayDispatch"
) as unknown) as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): GatewayDispatchClient;
};

export interface DataLoaderOptions {
  cache?: boolean;
}

export interface DataLoaders {
  rpcDataLoaderOptions?: DataLoaderOptions;
  getDataLoader<T>(identifier: string, constructorFn: () => T): T;
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
