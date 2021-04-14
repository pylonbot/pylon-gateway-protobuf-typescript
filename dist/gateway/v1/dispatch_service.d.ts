/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleBidiStreamingCall, Client, ClientDuplexStream, CallOptions, Metadata, handleUnaryCall, ClientUnaryCall, ServiceError } from "@grpc/grpc-js";
import { EventEnvelope, EventEnvelopeAck, GuildCreateEvent, EventResponse, GuildUpdateEvent, GuildDeleteEvent, PresenceUpdateEvent, GuildMemberAddEvent, GuildMemberUpdateEvent, GuildMemberRemoveEvent, ChannelCreateEvent, ChannelUpdateEvent, ChannelDeleteEvent, ChannelPinsUpdateEvent, GuildRoleCreateEvent, GuildRoleUpdateEvent, GuildRoleDeleteEvent, MessageCreateEvent, MessageUpdateEvent, MessageDeleteEvent, MessageDeleteBulkEvent, MessageReactionAddEvent, MessageReactionRemoveEvent, MessageReactionRemoveAllEvent, MessageReactionRemoveEmojiEvent, TypingStartEvent, VoiceStateUpdateEvent, VoiceServerUpdateEvent, InviteCreateEvent, InviteDeleteEvent, GuildBanAddEvent, GuildBanRemoveEvent, GuildEmojisUpdateEvent, GuildIntegrationsUpdateEvent, WebhooksUpdateEvent, IntegrationCreateEvent, IntegrationUpdateEvent, IntegrationDeleteEvent, InteractionCreateEvent, InteractionResponse } from "../../discord/v1/event";
export declare const protobufPackage = "pylon.gateway.v1.service";
export declare const GatewayDispatchStreamingService: {
    readonly event: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatchStreaming/Event";
        readonly requestStream: true;
        readonly responseStream: true;
        readonly requestSerialize: (value: EventEnvelope) => Buffer;
        readonly requestDeserialize: (value: Buffer) => EventEnvelope;
        readonly responseSerialize: (value: EventEnvelopeAck) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventEnvelopeAck;
    };
};
export interface GatewayDispatchStreamingServer extends UntypedServiceImplementation {
    event: handleBidiStreamingCall<EventEnvelope, EventEnvelopeAck>;
}
export interface GatewayDispatchStreamingClient extends Client {
    event(): ClientDuplexStream<EventEnvelope, EventEnvelopeAck>;
    event(options: Partial<CallOptions>): ClientDuplexStream<EventEnvelope, EventEnvelopeAck>;
    event(metadata: Metadata, options?: Partial<CallOptions>): ClientDuplexStream<EventEnvelope, EventEnvelopeAck>;
}
export declare const GatewayDispatchStreamingClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => GatewayDispatchStreamingClient;
export declare const GatewayDispatchService: {
    readonly guildCreate: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/GuildCreate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GuildCreateEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GuildCreateEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly guildUpdate: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/GuildUpdate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GuildUpdateEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GuildUpdateEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly guildDelete: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/GuildDelete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GuildDeleteEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GuildDeleteEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly presenceUpdate: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/PresenceUpdate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: PresenceUpdateEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => PresenceUpdateEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly guildMemberAdd: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/GuildMemberAdd";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GuildMemberAddEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GuildMemberAddEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly guildMemberUpdate: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/GuildMemberUpdate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GuildMemberUpdateEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GuildMemberUpdateEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly guildMemberRemove: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/GuildMemberRemove";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GuildMemberRemoveEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GuildMemberRemoveEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly channelCreate: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/ChannelCreate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ChannelCreateEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ChannelCreateEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly channelUpdate: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/ChannelUpdate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ChannelUpdateEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ChannelUpdateEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly channelDelete: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/ChannelDelete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ChannelDeleteEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ChannelDeleteEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly channelPinsUpdate: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/ChannelPinsUpdate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ChannelPinsUpdateEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ChannelPinsUpdateEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly guildRoleCreate: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/GuildRoleCreate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GuildRoleCreateEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GuildRoleCreateEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly guildRoleUpdate: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/GuildRoleUpdate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GuildRoleUpdateEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GuildRoleUpdateEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly guildRoleDelete: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/GuildRoleDelete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GuildRoleDeleteEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GuildRoleDeleteEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly messageCreate: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/MessageCreate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MessageCreateEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MessageCreateEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly messageUpdate: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/MessageUpdate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MessageUpdateEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MessageUpdateEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly messageDelete: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/MessageDelete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MessageDeleteEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MessageDeleteEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly messageDeleteBulk: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/MessageDeleteBulk";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MessageDeleteBulkEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MessageDeleteBulkEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly messageReactionAdd: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/MessageReactionAdd";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MessageReactionAddEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MessageReactionAddEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly messageReactionRemove: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/MessageReactionRemove";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MessageReactionRemoveEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MessageReactionRemoveEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly messageReactionRemoveAll: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/MessageReactionRemoveAll";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MessageReactionRemoveAllEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MessageReactionRemoveAllEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly messageReactionRemoveEmoji: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/MessageReactionRemoveEmoji";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MessageReactionRemoveEmojiEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MessageReactionRemoveEmojiEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly typingStart: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/TypingStart";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: TypingStartEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => TypingStartEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly voiceStateUpdate: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/VoiceStateUpdate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: VoiceStateUpdateEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => VoiceStateUpdateEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly voiceServerUpdate: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/VoiceServerUpdate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: VoiceServerUpdateEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => VoiceServerUpdateEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly inviteCreate: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/InviteCreate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: InviteCreateEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => InviteCreateEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly inviteDelete: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/InviteDelete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: InviteDeleteEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => InviteDeleteEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly guildBanAdd: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/GuildBanAdd";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GuildBanAddEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GuildBanAddEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly guildBanRemove: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/GuildBanRemove";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GuildBanRemoveEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GuildBanRemoveEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly guildEmojisUpdate: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/GuildEmojisUpdate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GuildEmojisUpdateEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GuildEmojisUpdateEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly guildIntegrationsUpdate: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/GuildIntegrationsUpdate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GuildIntegrationsUpdateEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GuildIntegrationsUpdateEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly webhooksUpdate: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/WebhooksUpdate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: WebhooksUpdateEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => WebhooksUpdateEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly integrationCreate: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/IntegrationCreate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: IntegrationCreateEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => IntegrationCreateEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly integrationUpdate: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/IntegrationUpdate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: IntegrationUpdateEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => IntegrationUpdateEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly integrationDelete: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/IntegrationDelete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: IntegrationDeleteEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => IntegrationDeleteEvent;
        readonly responseSerialize: (value: EventResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => EventResponse;
    };
    readonly interactionCreate: {
        readonly path: "/pylon.gateway.v1.service.GatewayDispatch/InteractionCreate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: InteractionCreateEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => InteractionCreateEvent;
        readonly responseSerialize: (value: InteractionResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => InteractionResponse;
    };
};
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
    messageReactionRemove: handleUnaryCall<MessageReactionRemoveEvent, EventResponse>;
    messageReactionRemoveAll: handleUnaryCall<MessageReactionRemoveAllEvent, EventResponse>;
    messageReactionRemoveEmoji: handleUnaryCall<MessageReactionRemoveEmojiEvent, EventResponse>;
    typingStart: handleUnaryCall<TypingStartEvent, EventResponse>;
    voiceStateUpdate: handleUnaryCall<VoiceStateUpdateEvent, EventResponse>;
    voiceServerUpdate: handleUnaryCall<VoiceServerUpdateEvent, EventResponse>;
    inviteCreate: handleUnaryCall<InviteCreateEvent, EventResponse>;
    inviteDelete: handleUnaryCall<InviteDeleteEvent, EventResponse>;
    guildBanAdd: handleUnaryCall<GuildBanAddEvent, EventResponse>;
    guildBanRemove: handleUnaryCall<GuildBanRemoveEvent, EventResponse>;
    guildEmojisUpdate: handleUnaryCall<GuildEmojisUpdateEvent, EventResponse>;
    guildIntegrationsUpdate: handleUnaryCall<GuildIntegrationsUpdateEvent, EventResponse>;
    webhooksUpdate: handleUnaryCall<WebhooksUpdateEvent, EventResponse>;
    integrationCreate: handleUnaryCall<IntegrationCreateEvent, EventResponse>;
    integrationUpdate: handleUnaryCall<IntegrationUpdateEvent, EventResponse>;
    integrationDelete: handleUnaryCall<IntegrationDeleteEvent, EventResponse>;
    interactionCreate: handleUnaryCall<InteractionCreateEvent, InteractionResponse>;
}
export interface GatewayDispatchClient extends Client {
    guildCreate(request: GuildCreateEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildCreate(request: GuildCreateEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildCreate(request: GuildCreateEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildUpdate(request: GuildUpdateEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildUpdate(request: GuildUpdateEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildUpdate(request: GuildUpdateEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildDelete(request: GuildDeleteEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildDelete(request: GuildDeleteEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildDelete(request: GuildDeleteEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    presenceUpdate(request: PresenceUpdateEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    presenceUpdate(request: PresenceUpdateEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    presenceUpdate(request: PresenceUpdateEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildMemberAdd(request: GuildMemberAddEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildMemberAdd(request: GuildMemberAddEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildMemberAdd(request: GuildMemberAddEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildMemberUpdate(request: GuildMemberUpdateEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildMemberUpdate(request: GuildMemberUpdateEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildMemberUpdate(request: GuildMemberUpdateEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildMemberRemove(request: GuildMemberRemoveEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildMemberRemove(request: GuildMemberRemoveEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildMemberRemove(request: GuildMemberRemoveEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    channelCreate(request: ChannelCreateEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    channelCreate(request: ChannelCreateEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    channelCreate(request: ChannelCreateEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    channelUpdate(request: ChannelUpdateEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    channelUpdate(request: ChannelUpdateEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    channelUpdate(request: ChannelUpdateEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    channelDelete(request: ChannelDeleteEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    channelDelete(request: ChannelDeleteEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    channelDelete(request: ChannelDeleteEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    channelPinsUpdate(request: ChannelPinsUpdateEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    channelPinsUpdate(request: ChannelPinsUpdateEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    channelPinsUpdate(request: ChannelPinsUpdateEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildRoleCreate(request: GuildRoleCreateEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildRoleCreate(request: GuildRoleCreateEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildRoleCreate(request: GuildRoleCreateEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildRoleUpdate(request: GuildRoleUpdateEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildRoleUpdate(request: GuildRoleUpdateEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildRoleUpdate(request: GuildRoleUpdateEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildRoleDelete(request: GuildRoleDeleteEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildRoleDelete(request: GuildRoleDeleteEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildRoleDelete(request: GuildRoleDeleteEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageCreate(request: MessageCreateEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageCreate(request: MessageCreateEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageCreate(request: MessageCreateEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageUpdate(request: MessageUpdateEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageUpdate(request: MessageUpdateEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageUpdate(request: MessageUpdateEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageDelete(request: MessageDeleteEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageDelete(request: MessageDeleteEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageDelete(request: MessageDeleteEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageDeleteBulk(request: MessageDeleteBulkEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageDeleteBulk(request: MessageDeleteBulkEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageDeleteBulk(request: MessageDeleteBulkEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageReactionAdd(request: MessageReactionAddEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageReactionAdd(request: MessageReactionAddEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageReactionAdd(request: MessageReactionAddEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageReactionRemove(request: MessageReactionRemoveEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageReactionRemove(request: MessageReactionRemoveEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageReactionRemove(request: MessageReactionRemoveEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageReactionRemoveAll(request: MessageReactionRemoveAllEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageReactionRemoveAll(request: MessageReactionRemoveAllEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageReactionRemoveAll(request: MessageReactionRemoveAllEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageReactionRemoveEmoji(request: MessageReactionRemoveEmojiEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageReactionRemoveEmoji(request: MessageReactionRemoveEmojiEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    messageReactionRemoveEmoji(request: MessageReactionRemoveEmojiEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    typingStart(request: TypingStartEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    typingStart(request: TypingStartEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    typingStart(request: TypingStartEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    voiceStateUpdate(request: VoiceStateUpdateEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    voiceStateUpdate(request: VoiceStateUpdateEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    voiceStateUpdate(request: VoiceStateUpdateEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    voiceServerUpdate(request: VoiceServerUpdateEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    voiceServerUpdate(request: VoiceServerUpdateEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    voiceServerUpdate(request: VoiceServerUpdateEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    inviteCreate(request: InviteCreateEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    inviteCreate(request: InviteCreateEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    inviteCreate(request: InviteCreateEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    inviteDelete(request: InviteDeleteEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    inviteDelete(request: InviteDeleteEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    inviteDelete(request: InviteDeleteEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildBanAdd(request: GuildBanAddEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildBanAdd(request: GuildBanAddEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildBanAdd(request: GuildBanAddEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildBanRemove(request: GuildBanRemoveEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildBanRemove(request: GuildBanRemoveEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildBanRemove(request: GuildBanRemoveEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildEmojisUpdate(request: GuildEmojisUpdateEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildEmojisUpdate(request: GuildEmojisUpdateEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildEmojisUpdate(request: GuildEmojisUpdateEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildIntegrationsUpdate(request: GuildIntegrationsUpdateEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildIntegrationsUpdate(request: GuildIntegrationsUpdateEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    guildIntegrationsUpdate(request: GuildIntegrationsUpdateEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    webhooksUpdate(request: WebhooksUpdateEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    webhooksUpdate(request: WebhooksUpdateEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    webhooksUpdate(request: WebhooksUpdateEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    integrationCreate(request: IntegrationCreateEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    integrationCreate(request: IntegrationCreateEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    integrationCreate(request: IntegrationCreateEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    integrationUpdate(request: IntegrationUpdateEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    integrationUpdate(request: IntegrationUpdateEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    integrationUpdate(request: IntegrationUpdateEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    integrationDelete(request: IntegrationDeleteEvent, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    integrationDelete(request: IntegrationDeleteEvent, metadata: Metadata, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    integrationDelete(request: IntegrationDeleteEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: EventResponse) => void): ClientUnaryCall;
    interactionCreate(request: InteractionCreateEvent, callback: (error: ServiceError | null, response: InteractionResponse) => void): ClientUnaryCall;
    interactionCreate(request: InteractionCreateEvent, metadata: Metadata, callback: (error: ServiceError | null, response: InteractionResponse) => void): ClientUnaryCall;
    interactionCreate(request: InteractionCreateEvent, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: InteractionResponse) => void): ClientUnaryCall;
}
export declare const GatewayDispatchClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => GatewayDispatchClient;
export interface DataLoaderOptions {
    cache?: boolean;
}
export interface DataLoaders {
    rpcDataLoaderOptions?: DataLoaderOptions;
    getDataLoader<T>(identifier: string, constructorFn: () => T): T;
}
