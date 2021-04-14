/* eslint-disable */
import { messageTypeRegistry } from "../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PresenceData_OnlineStatus,
  GuildData,
  ChannelData,
  MemberData,
  SnowflakeValue,
  PresenceData,
  RoleData,
  EmojiData,
  VoiceStateData,
  UserData,
  presenceData_OnlineStatusFromJSON,
  presenceData_OnlineStatusToJSON,
} from "../../discord/v1/model";
import { StringValue } from "../../google/protobuf/wrappers";

export const protobufPackage = "pylon.discord.v1.cache";

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

const baseGetGuildRequest: object = {
  $type: "pylon.discord.v1.cache.GetGuildRequest",
};

export const GetGuildRequest = {
  $type: "pylon.discord.v1.cache.GetGuildRequest" as const,

  encode(
    _: GetGuildRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGuildRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetGuildRequest } as GetGuildRequest;
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

  fromJSON(_: any): GetGuildRequest {
    const message = { ...baseGetGuildRequest } as GetGuildRequest;
    return message;
  },

  toJSON(_: GetGuildRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetGuildRequest>): GetGuildRequest {
    const message = { ...baseGetGuildRequest } as GetGuildRequest;
    return message;
  },
};

messageTypeRegistry.set(GetGuildRequest.$type, GetGuildRequest);

const baseGetGuildResponse: object = {
  $type: "pylon.discord.v1.cache.GetGuildResponse",
};

export const GetGuildResponse = {
  $type: "pylon.discord.v1.cache.GetGuildResponse" as const,

  encode(
    message: GetGuildResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.guild !== undefined) {
      GuildData.encode(message.guild, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGuildResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetGuildResponse } as GetGuildResponse;
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

  fromJSON(object: any): GetGuildResponse {
    const message = { ...baseGetGuildResponse } as GetGuildResponse;
    if (object.guild !== undefined && object.guild !== null) {
      message.guild = GuildData.fromJSON(object.guild);
    }
    return message;
  },

  toJSON(message: GetGuildResponse): unknown {
    const obj: any = {};
    message.guild !== undefined &&
      (obj.guild = message.guild ? GuildData.toJSON(message.guild) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetGuildResponse>): GetGuildResponse {
    const message = { ...baseGetGuildResponse } as GetGuildResponse;
    if (object.guild !== undefined && object.guild !== null) {
      message.guild = GuildData.fromPartial(object.guild);
    }
    return message;
  },
};

messageTypeRegistry.set(GetGuildResponse.$type, GetGuildResponse);

const baseListGuildChannelsRequest: object = {
  $type: "pylon.discord.v1.cache.ListGuildChannelsRequest",
};

export const ListGuildChannelsRequest = {
  $type: "pylon.discord.v1.cache.ListGuildChannelsRequest" as const,

  encode(
    _: ListGuildChannelsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListGuildChannelsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListGuildChannelsRequest,
    } as ListGuildChannelsRequest;
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

  fromJSON(_: any): ListGuildChannelsRequest {
    const message = {
      ...baseListGuildChannelsRequest,
    } as ListGuildChannelsRequest;
    return message;
  },

  toJSON(_: ListGuildChannelsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<ListGuildChannelsRequest>
  ): ListGuildChannelsRequest {
    const message = {
      ...baseListGuildChannelsRequest,
    } as ListGuildChannelsRequest;
    return message;
  },
};

messageTypeRegistry.set(
  ListGuildChannelsRequest.$type,
  ListGuildChannelsRequest
);

const baseListGuildChannelsResponse: object = {
  $type: "pylon.discord.v1.cache.ListGuildChannelsResponse",
};

export const ListGuildChannelsResponse = {
  $type: "pylon.discord.v1.cache.ListGuildChannelsResponse" as const,

  encode(
    message: ListGuildChannelsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.channels) {
      ChannelData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListGuildChannelsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListGuildChannelsResponse,
    } as ListGuildChannelsResponse;
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

  fromJSON(object: any): ListGuildChannelsResponse {
    const message = {
      ...baseListGuildChannelsResponse,
    } as ListGuildChannelsResponse;
    message.channels = [];
    if (object.channels !== undefined && object.channels !== null) {
      for (const e of object.channels) {
        message.channels.push(ChannelData.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ListGuildChannelsResponse): unknown {
    const obj: any = {};
    if (message.channels) {
      obj.channels = message.channels.map((e) =>
        e ? ChannelData.toJSON(e) : undefined
      );
    } else {
      obj.channels = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListGuildChannelsResponse>
  ): ListGuildChannelsResponse {
    const message = {
      ...baseListGuildChannelsResponse,
    } as ListGuildChannelsResponse;
    message.channels = [];
    if (object.channels !== undefined && object.channels !== null) {
      for (const e of object.channels) {
        message.channels.push(ChannelData.fromPartial(e));
      }
    }
    return message;
  },
};

messageTypeRegistry.set(
  ListGuildChannelsResponse.$type,
  ListGuildChannelsResponse
);

const baseGetGuildChannelRequest: object = {
  $type: "pylon.discord.v1.cache.GetGuildChannelRequest",
  channelId: "0",
};

export const GetGuildChannelRequest = {
  $type: "pylon.discord.v1.cache.GetGuildChannelRequest" as const,

  encode(
    message: GetGuildChannelRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetGuildChannelRequest } as GetGuildChannelRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGuildChannelRequest {
    const message = { ...baseGetGuildChannelRequest } as GetGuildChannelRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    return message;
  },

  toJSON(message: GetGuildChannelRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetGuildChannelRequest>
  ): GetGuildChannelRequest {
    const message = { ...baseGetGuildChannelRequest } as GetGuildChannelRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    return message;
  },
};

messageTypeRegistry.set(GetGuildChannelRequest.$type, GetGuildChannelRequest);

const baseGetGuildChannelResponse: object = {
  $type: "pylon.discord.v1.cache.GetGuildChannelResponse",
};

export const GetGuildChannelResponse = {
  $type: "pylon.discord.v1.cache.GetGuildChannelResponse" as const,

  encode(
    message: GetGuildChannelResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channel !== undefined) {
      ChannelData.encode(message.channel, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetGuildChannelResponse,
    } as GetGuildChannelResponse;
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

  fromJSON(object: any): GetGuildChannelResponse {
    const message = {
      ...baseGetGuildChannelResponse,
    } as GetGuildChannelResponse;
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = ChannelData.fromJSON(object.channel);
    }
    return message;
  },

  toJSON(message: GetGuildChannelResponse): unknown {
    const obj: any = {};
    message.channel !== undefined &&
      (obj.channel = message.channel
        ? ChannelData.toJSON(message.channel)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetGuildChannelResponse>
  ): GetGuildChannelResponse {
    const message = {
      ...baseGetGuildChannelResponse,
    } as GetGuildChannelResponse;
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = ChannelData.fromPartial(object.channel);
    }
    return message;
  },
};

messageTypeRegistry.set(GetGuildChannelResponse.$type, GetGuildChannelResponse);

const baseListGuildMembersRequest: object = {
  $type: "pylon.discord.v1.cache.ListGuildMembersRequest",
  after: "0",
  limit: 0,
};

export const ListGuildMembersRequest = {
  $type: "pylon.discord.v1.cache.ListGuildMembersRequest" as const,

  encode(
    message: ListGuildMembersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.after !== "0") {
      writer.uint32(9).fixed64(message.after);
    }
    if (message.limit !== 0) {
      writer.uint32(16).uint32(message.limit);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListGuildMembersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListGuildMembersRequest,
    } as ListGuildMembersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.after = longToString(reader.fixed64() as Long);
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

  fromJSON(object: any): ListGuildMembersRequest {
    const message = {
      ...baseListGuildMembersRequest,
    } as ListGuildMembersRequest;
    if (object.after !== undefined && object.after !== null) {
      message.after = String(object.after);
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = Number(object.limit);
    }
    return message;
  },

  toJSON(message: ListGuildMembersRequest): unknown {
    const obj: any = {};
    message.after !== undefined && (obj.after = message.after);
    message.limit !== undefined && (obj.limit = message.limit);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListGuildMembersRequest>
  ): ListGuildMembersRequest {
    const message = {
      ...baseListGuildMembersRequest,
    } as ListGuildMembersRequest;
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

const baseListGuildMembersResponse: object = {
  $type: "pylon.discord.v1.cache.ListGuildMembersResponse",
};

export const ListGuildMembersResponse = {
  $type: "pylon.discord.v1.cache.ListGuildMembersResponse" as const,

  encode(
    message: ListGuildMembersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.members) {
      MemberData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListGuildMembersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListGuildMembersResponse,
    } as ListGuildMembersResponse;
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

  fromJSON(object: any): ListGuildMembersResponse {
    const message = {
      ...baseListGuildMembersResponse,
    } as ListGuildMembersResponse;
    message.members = [];
    if (object.members !== undefined && object.members !== null) {
      for (const e of object.members) {
        message.members.push(MemberData.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ListGuildMembersResponse): unknown {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map((e) =>
        e ? MemberData.toJSON(e) : undefined
      );
    } else {
      obj.members = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListGuildMembersResponse>
  ): ListGuildMembersResponse {
    const message = {
      ...baseListGuildMembersResponse,
    } as ListGuildMembersResponse;
    message.members = [];
    if (object.members !== undefined && object.members !== null) {
      for (const e of object.members) {
        message.members.push(MemberData.fromPartial(e));
      }
    }
    return message;
  },
};

messageTypeRegistry.set(
  ListGuildMembersResponse.$type,
  ListGuildMembersResponse
);

const baseGetGuildMemberRequest: object = {
  $type: "pylon.discord.v1.cache.GetGuildMemberRequest",
  userId: "0",
};

export const GetGuildMemberRequest = {
  $type: "pylon.discord.v1.cache.GetGuildMemberRequest" as const,

  encode(
    message: GetGuildMemberRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== "0") {
      writer.uint32(9).fixed64(message.userId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildMemberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetGuildMemberRequest } as GetGuildMemberRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGuildMemberRequest {
    const message = { ...baseGetGuildMemberRequest } as GetGuildMemberRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    }
    return message;
  },

  toJSON(message: GetGuildMemberRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetGuildMemberRequest>
  ): GetGuildMemberRequest {
    const message = { ...baseGetGuildMemberRequest } as GetGuildMemberRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    }
    return message;
  },
};

messageTypeRegistry.set(GetGuildMemberRequest.$type, GetGuildMemberRequest);

const baseGetGuildMemberResponse: object = {
  $type: "pylon.discord.v1.cache.GetGuildMemberResponse",
};

export const GetGuildMemberResponse = {
  $type: "pylon.discord.v1.cache.GetGuildMemberResponse" as const,

  encode(
    message: GetGuildMemberResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.member !== undefined) {
      MemberData.encode(message.member, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildMemberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetGuildMemberResponse } as GetGuildMemberResponse;
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

  fromJSON(object: any): GetGuildMemberResponse {
    const message = { ...baseGetGuildMemberResponse } as GetGuildMemberResponse;
    if (object.member !== undefined && object.member !== null) {
      message.member = MemberData.fromJSON(object.member);
    }
    return message;
  },

  toJSON(message: GetGuildMemberResponse): unknown {
    const obj: any = {};
    message.member !== undefined &&
      (obj.member = message.member
        ? MemberData.toJSON(message.member)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetGuildMemberResponse>
  ): GetGuildMemberResponse {
    const message = { ...baseGetGuildMemberResponse } as GetGuildMemberResponse;
    if (object.member !== undefined && object.member !== null) {
      message.member = MemberData.fromPartial(object.member);
    }
    return message;
  },
};

messageTypeRegistry.set(GetGuildMemberResponse.$type, GetGuildMemberResponse);

const baseFindGuildMembersRequest: object = {
  $type: "pylon.discord.v1.cache.FindGuildMembersRequest",
  status: 0,
  limit: 0,
};

export const FindGuildMembersRequest = {
  $type: "pylon.discord.v1.cache.FindGuildMembersRequest" as const,

  encode(
    message: FindGuildMembersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.name! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.prefix !== undefined) {
      StringValue.encode(
        { $type: "google.protobuf.StringValue", value: message.prefix! },
        writer.uint32(18).fork()
      ).ldelim();
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FindGuildMembersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFindGuildMembersRequest,
    } as FindGuildMembersRequest;
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
          message.status = reader.int32() as any;
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

  fromJSON(object: any): FindGuildMembersRequest {
    const message = {
      ...baseFindGuildMembersRequest,
    } as FindGuildMembersRequest;
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

  toJSON(message: FindGuildMembersRequest): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<FindGuildMembersRequest>
  ): FindGuildMembersRequest {
    const message = {
      ...baseFindGuildMembersRequest,
    } as FindGuildMembersRequest;
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

const baseFindGuildMembersResponse: object = {
  $type: "pylon.discord.v1.cache.FindGuildMembersResponse",
};

export const FindGuildMembersResponse = {
  $type: "pylon.discord.v1.cache.FindGuildMembersResponse" as const,

  encode(
    message: FindGuildMembersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.members) {
      MemberData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FindGuildMembersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFindGuildMembersResponse,
    } as FindGuildMembersResponse;
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

  fromJSON(object: any): FindGuildMembersResponse {
    const message = {
      ...baseFindGuildMembersResponse,
    } as FindGuildMembersResponse;
    message.members = [];
    if (object.members !== undefined && object.members !== null) {
      for (const e of object.members) {
        message.members.push(MemberData.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: FindGuildMembersResponse): unknown {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map((e) =>
        e ? MemberData.toJSON(e) : undefined
      );
    } else {
      obj.members = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<FindGuildMembersResponse>
  ): FindGuildMembersResponse {
    const message = {
      ...baseFindGuildMembersResponse,
    } as FindGuildMembersResponse;
    message.members = [];
    if (object.members !== undefined && object.members !== null) {
      for (const e of object.members) {
        message.members.push(MemberData.fromPartial(e));
      }
    }
    return message;
  },
};

messageTypeRegistry.set(
  FindGuildMembersResponse.$type,
  FindGuildMembersResponse
);

const baseGetGuildMemberPresenceRequest: object = {
  $type: "pylon.discord.v1.cache.GetGuildMemberPresenceRequest",
  userId: "0",
};

export const GetGuildMemberPresenceRequest = {
  $type: "pylon.discord.v1.cache.GetGuildMemberPresenceRequest" as const,

  encode(
    message: GetGuildMemberPresenceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== "0") {
      writer.uint32(9).fixed64(message.userId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildMemberPresenceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetGuildMemberPresenceRequest,
    } as GetGuildMemberPresenceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGuildMemberPresenceRequest {
    const message = {
      ...baseGetGuildMemberPresenceRequest,
    } as GetGuildMemberPresenceRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    }
    return message;
  },

  toJSON(message: GetGuildMemberPresenceRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetGuildMemberPresenceRequest>
  ): GetGuildMemberPresenceRequest {
    const message = {
      ...baseGetGuildMemberPresenceRequest,
    } as GetGuildMemberPresenceRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetGuildMemberPresenceRequest.$type,
  GetGuildMemberPresenceRequest
);

const baseGetGuildMemberPresenceResponse: object = {
  $type: "pylon.discord.v1.cache.GetGuildMemberPresenceResponse",
};

export const GetGuildMemberPresenceResponse = {
  $type: "pylon.discord.v1.cache.GetGuildMemberPresenceResponse" as const,

  encode(
    message: GetGuildMemberPresenceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.presence !== undefined) {
      PresenceData.encode(message.presence, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildMemberPresenceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetGuildMemberPresenceResponse,
    } as GetGuildMemberPresenceResponse;
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

  fromJSON(object: any): GetGuildMemberPresenceResponse {
    const message = {
      ...baseGetGuildMemberPresenceResponse,
    } as GetGuildMemberPresenceResponse;
    if (object.presence !== undefined && object.presence !== null) {
      message.presence = PresenceData.fromJSON(object.presence);
    }
    return message;
  },

  toJSON(message: GetGuildMemberPresenceResponse): unknown {
    const obj: any = {};
    message.presence !== undefined &&
      (obj.presence = message.presence
        ? PresenceData.toJSON(message.presence)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetGuildMemberPresenceResponse>
  ): GetGuildMemberPresenceResponse {
    const message = {
      ...baseGetGuildMemberPresenceResponse,
    } as GetGuildMemberPresenceResponse;
    if (object.presence !== undefined && object.presence !== null) {
      message.presence = PresenceData.fromPartial(object.presence);
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetGuildMemberPresenceResponse.$type,
  GetGuildMemberPresenceResponse
);

const baseListGuildRolesRequest: object = {
  $type: "pylon.discord.v1.cache.ListGuildRolesRequest",
};

export const ListGuildRolesRequest = {
  $type: "pylon.discord.v1.cache.ListGuildRolesRequest" as const,

  encode(
    _: ListGuildRolesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListGuildRolesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListGuildRolesRequest } as ListGuildRolesRequest;
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

  fromJSON(_: any): ListGuildRolesRequest {
    const message = { ...baseListGuildRolesRequest } as ListGuildRolesRequest;
    return message;
  },

  toJSON(_: ListGuildRolesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ListGuildRolesRequest>): ListGuildRolesRequest {
    const message = { ...baseListGuildRolesRequest } as ListGuildRolesRequest;
    return message;
  },
};

messageTypeRegistry.set(ListGuildRolesRequest.$type, ListGuildRolesRequest);

const baseListGuildRolesResponse: object = {
  $type: "pylon.discord.v1.cache.ListGuildRolesResponse",
};

export const ListGuildRolesResponse = {
  $type: "pylon.discord.v1.cache.ListGuildRolesResponse" as const,

  encode(
    message: ListGuildRolesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.roles) {
      RoleData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListGuildRolesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListGuildRolesResponse } as ListGuildRolesResponse;
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

  fromJSON(object: any): ListGuildRolesResponse {
    const message = { ...baseListGuildRolesResponse } as ListGuildRolesResponse;
    message.roles = [];
    if (object.roles !== undefined && object.roles !== null) {
      for (const e of object.roles) {
        message.roles.push(RoleData.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ListGuildRolesResponse): unknown {
    const obj: any = {};
    if (message.roles) {
      obj.roles = message.roles.map((e) =>
        e ? RoleData.toJSON(e) : undefined
      );
    } else {
      obj.roles = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListGuildRolesResponse>
  ): ListGuildRolesResponse {
    const message = { ...baseListGuildRolesResponse } as ListGuildRolesResponse;
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

const baseGetGuildRoleRequest: object = {
  $type: "pylon.discord.v1.cache.GetGuildRoleRequest",
  roleId: "0",
};

export const GetGuildRoleRequest = {
  $type: "pylon.discord.v1.cache.GetGuildRoleRequest" as const,

  encode(
    message: GetGuildRoleRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.roleId !== "0") {
      writer.uint32(9).fixed64(message.roleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGuildRoleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetGuildRoleRequest } as GetGuildRoleRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGuildRoleRequest {
    const message = { ...baseGetGuildRoleRequest } as GetGuildRoleRequest;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = String(object.roleId);
    }
    return message;
  },

  toJSON(message: GetGuildRoleRequest): unknown {
    const obj: any = {};
    message.roleId !== undefined && (obj.roleId = message.roleId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetGuildRoleRequest>): GetGuildRoleRequest {
    const message = { ...baseGetGuildRoleRequest } as GetGuildRoleRequest;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = object.roleId;
    }
    return message;
  },
};

messageTypeRegistry.set(GetGuildRoleRequest.$type, GetGuildRoleRequest);

const baseGetGuildRoleResponse: object = {
  $type: "pylon.discord.v1.cache.GetGuildRoleResponse",
};

export const GetGuildRoleResponse = {
  $type: "pylon.discord.v1.cache.GetGuildRoleResponse" as const,

  encode(
    message: GetGuildRoleResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.role !== undefined) {
      RoleData.encode(message.role, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildRoleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetGuildRoleResponse } as GetGuildRoleResponse;
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

  fromJSON(object: any): GetGuildRoleResponse {
    const message = { ...baseGetGuildRoleResponse } as GetGuildRoleResponse;
    if (object.role !== undefined && object.role !== null) {
      message.role = RoleData.fromJSON(object.role);
    }
    return message;
  },

  toJSON(message: GetGuildRoleResponse): unknown {
    const obj: any = {};
    message.role !== undefined &&
      (obj.role = message.role ? RoleData.toJSON(message.role) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetGuildRoleResponse>): GetGuildRoleResponse {
    const message = { ...baseGetGuildRoleResponse } as GetGuildRoleResponse;
    if (object.role !== undefined && object.role !== null) {
      message.role = RoleData.fromPartial(object.role);
    }
    return message;
  },
};

messageTypeRegistry.set(GetGuildRoleResponse.$type, GetGuildRoleResponse);

const baseListGuildEmojisRequest: object = {
  $type: "pylon.discord.v1.cache.ListGuildEmojisRequest",
};

export const ListGuildEmojisRequest = {
  $type: "pylon.discord.v1.cache.ListGuildEmojisRequest" as const,

  encode(
    _: ListGuildEmojisRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListGuildEmojisRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListGuildEmojisRequest } as ListGuildEmojisRequest;
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

  fromJSON(_: any): ListGuildEmojisRequest {
    const message = { ...baseListGuildEmojisRequest } as ListGuildEmojisRequest;
    return message;
  },

  toJSON(_: ListGuildEmojisRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ListGuildEmojisRequest>): ListGuildEmojisRequest {
    const message = { ...baseListGuildEmojisRequest } as ListGuildEmojisRequest;
    return message;
  },
};

messageTypeRegistry.set(ListGuildEmojisRequest.$type, ListGuildEmojisRequest);

const baseListGuildEmojisResponse: object = {
  $type: "pylon.discord.v1.cache.ListGuildEmojisResponse",
};

export const ListGuildEmojisResponse = {
  $type: "pylon.discord.v1.cache.ListGuildEmojisResponse" as const,

  encode(
    message: ListGuildEmojisResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.emojis) {
      EmojiData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListGuildEmojisResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListGuildEmojisResponse,
    } as ListGuildEmojisResponse;
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

  fromJSON(object: any): ListGuildEmojisResponse {
    const message = {
      ...baseListGuildEmojisResponse,
    } as ListGuildEmojisResponse;
    message.emojis = [];
    if (object.emojis !== undefined && object.emojis !== null) {
      for (const e of object.emojis) {
        message.emojis.push(EmojiData.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ListGuildEmojisResponse): unknown {
    const obj: any = {};
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
    object: DeepPartial<ListGuildEmojisResponse>
  ): ListGuildEmojisResponse {
    const message = {
      ...baseListGuildEmojisResponse,
    } as ListGuildEmojisResponse;
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

const baseGetGuildEmojiRequest: object = {
  $type: "pylon.discord.v1.cache.GetGuildEmojiRequest",
  emojiId: "0",
};

export const GetGuildEmojiRequest = {
  $type: "pylon.discord.v1.cache.GetGuildEmojiRequest" as const,

  encode(
    message: GetGuildEmojiRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.emojiId !== "0") {
      writer.uint32(9).fixed64(message.emojiId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildEmojiRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetGuildEmojiRequest } as GetGuildEmojiRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.emojiId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGuildEmojiRequest {
    const message = { ...baseGetGuildEmojiRequest } as GetGuildEmojiRequest;
    if (object.emojiId !== undefined && object.emojiId !== null) {
      message.emojiId = String(object.emojiId);
    }
    return message;
  },

  toJSON(message: GetGuildEmojiRequest): unknown {
    const obj: any = {};
    message.emojiId !== undefined && (obj.emojiId = message.emojiId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetGuildEmojiRequest>): GetGuildEmojiRequest {
    const message = { ...baseGetGuildEmojiRequest } as GetGuildEmojiRequest;
    if (object.emojiId !== undefined && object.emojiId !== null) {
      message.emojiId = object.emojiId;
    }
    return message;
  },
};

messageTypeRegistry.set(GetGuildEmojiRequest.$type, GetGuildEmojiRequest);

const baseGetGuildEmojiResponse: object = {
  $type: "pylon.discord.v1.cache.GetGuildEmojiResponse",
};

export const GetGuildEmojiResponse = {
  $type: "pylon.discord.v1.cache.GetGuildEmojiResponse" as const,

  encode(
    message: GetGuildEmojiResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.emoji !== undefined) {
      EmojiData.encode(message.emoji, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildEmojiResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetGuildEmojiResponse } as GetGuildEmojiResponse;
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

  fromJSON(object: any): GetGuildEmojiResponse {
    const message = { ...baseGetGuildEmojiResponse } as GetGuildEmojiResponse;
    if (object.emoji !== undefined && object.emoji !== null) {
      message.emoji = EmojiData.fromJSON(object.emoji);
    }
    return message;
  },

  toJSON(message: GetGuildEmojiResponse): unknown {
    const obj: any = {};
    message.emoji !== undefined &&
      (obj.emoji = message.emoji ? EmojiData.toJSON(message.emoji) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetGuildEmojiResponse>
  ): GetGuildEmojiResponse {
    const message = { ...baseGetGuildEmojiResponse } as GetGuildEmojiResponse;
    if (object.emoji !== undefined && object.emoji !== null) {
      message.emoji = EmojiData.fromPartial(object.emoji);
    }
    return message;
  },
};

messageTypeRegistry.set(GetGuildEmojiResponse.$type, GetGuildEmojiResponse);

const baseGetGuildMemberVoiceStateRequest: object = {
  $type: "pylon.discord.v1.cache.GetGuildMemberVoiceStateRequest",
  userId: "0",
};

export const GetGuildMemberVoiceStateRequest = {
  $type: "pylon.discord.v1.cache.GetGuildMemberVoiceStateRequest" as const,

  encode(
    message: GetGuildMemberVoiceStateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== "0") {
      writer.uint32(9).fixed64(message.userId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildMemberVoiceStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetGuildMemberVoiceStateRequest,
    } as GetGuildMemberVoiceStateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGuildMemberVoiceStateRequest {
    const message = {
      ...baseGetGuildMemberVoiceStateRequest,
    } as GetGuildMemberVoiceStateRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    }
    return message;
  },

  toJSON(message: GetGuildMemberVoiceStateRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetGuildMemberVoiceStateRequest>
  ): GetGuildMemberVoiceStateRequest {
    const message = {
      ...baseGetGuildMemberVoiceStateRequest,
    } as GetGuildMemberVoiceStateRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetGuildMemberVoiceStateRequest.$type,
  GetGuildMemberVoiceStateRequest
);

const baseGetGuildMemberVoiceStateResponse: object = {
  $type: "pylon.discord.v1.cache.GetGuildMemberVoiceStateResponse",
};

export const GetGuildMemberVoiceStateResponse = {
  $type: "pylon.discord.v1.cache.GetGuildMemberVoiceStateResponse" as const,

  encode(
    message: GetGuildMemberVoiceStateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.voiceStateData !== undefined) {
      VoiceStateData.encode(
        message.voiceStateData,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGuildMemberVoiceStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetGuildMemberVoiceStateResponse,
    } as GetGuildMemberVoiceStateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voiceStateData = VoiceStateData.decode(
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

  fromJSON(object: any): GetGuildMemberVoiceStateResponse {
    const message = {
      ...baseGetGuildMemberVoiceStateResponse,
    } as GetGuildMemberVoiceStateResponse;
    if (object.voiceStateData !== undefined && object.voiceStateData !== null) {
      message.voiceStateData = VoiceStateData.fromJSON(object.voiceStateData);
    }
    return message;
  },

  toJSON(message: GetGuildMemberVoiceStateResponse): unknown {
    const obj: any = {};
    message.voiceStateData !== undefined &&
      (obj.voiceStateData = message.voiceStateData
        ? VoiceStateData.toJSON(message.voiceStateData)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetGuildMemberVoiceStateResponse>
  ): GetGuildMemberVoiceStateResponse {
    const message = {
      ...baseGetGuildMemberVoiceStateResponse,
    } as GetGuildMemberVoiceStateResponse;
    if (object.voiceStateData !== undefined && object.voiceStateData !== null) {
      message.voiceStateData = VoiceStateData.fromPartial(
        object.voiceStateData
      );
    }
    return message;
  },
};

messageTypeRegistry.set(
  GetGuildMemberVoiceStateResponse.$type,
  GetGuildMemberVoiceStateResponse
);

const baseListGuildChannelVoiceStatesRequest: object = {
  $type: "pylon.discord.v1.cache.ListGuildChannelVoiceStatesRequest",
  channelId: "0",
};

export const ListGuildChannelVoiceStatesRequest = {
  $type: "pylon.discord.v1.cache.ListGuildChannelVoiceStatesRequest" as const,

  encode(
    message: ListGuildChannelVoiceStatesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "0") {
      writer.uint32(9).fixed64(message.channelId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListGuildChannelVoiceStatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListGuildChannelVoiceStatesRequest,
    } as ListGuildChannelVoiceStatesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListGuildChannelVoiceStatesRequest {
    const message = {
      ...baseListGuildChannelVoiceStatesRequest,
    } as ListGuildChannelVoiceStatesRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    }
    return message;
  },

  toJSON(message: ListGuildChannelVoiceStatesRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListGuildChannelVoiceStatesRequest>
  ): ListGuildChannelVoiceStatesRequest {
    const message = {
      ...baseListGuildChannelVoiceStatesRequest,
    } as ListGuildChannelVoiceStatesRequest;
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = object.channelId;
    }
    return message;
  },
};

messageTypeRegistry.set(
  ListGuildChannelVoiceStatesRequest.$type,
  ListGuildChannelVoiceStatesRequest
);

const baseListGuildChannelVoiceStatesResponse: object = {
  $type: "pylon.discord.v1.cache.ListGuildChannelVoiceStatesResponse",
};

export const ListGuildChannelVoiceStatesResponse = {
  $type: "pylon.discord.v1.cache.ListGuildChannelVoiceStatesResponse" as const,

  encode(
    message: ListGuildChannelVoiceStatesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.voiceStatesData) {
      VoiceStateData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListGuildChannelVoiceStatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListGuildChannelVoiceStatesResponse,
    } as ListGuildChannelVoiceStatesResponse;
    message.voiceStatesData = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voiceStatesData.push(
            VoiceStateData.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListGuildChannelVoiceStatesResponse {
    const message = {
      ...baseListGuildChannelVoiceStatesResponse,
    } as ListGuildChannelVoiceStatesResponse;
    message.voiceStatesData = [];
    if (
      object.voiceStatesData !== undefined &&
      object.voiceStatesData !== null
    ) {
      for (const e of object.voiceStatesData) {
        message.voiceStatesData.push(VoiceStateData.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ListGuildChannelVoiceStatesResponse): unknown {
    const obj: any = {};
    if (message.voiceStatesData) {
      obj.voiceStatesData = message.voiceStatesData.map((e) =>
        e ? VoiceStateData.toJSON(e) : undefined
      );
    } else {
      obj.voiceStatesData = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListGuildChannelVoiceStatesResponse>
  ): ListGuildChannelVoiceStatesResponse {
    const message = {
      ...baseListGuildChannelVoiceStatesResponse,
    } as ListGuildChannelVoiceStatesResponse;
    message.voiceStatesData = [];
    if (
      object.voiceStatesData !== undefined &&
      object.voiceStatesData !== null
    ) {
      for (const e of object.voiceStatesData) {
        message.voiceStatesData.push(VoiceStateData.fromPartial(e));
      }
    }
    return message;
  },
};

messageTypeRegistry.set(
  ListGuildChannelVoiceStatesResponse.$type,
  ListGuildChannelVoiceStatesResponse
);

const baseGetUserRequest: object = {
  $type: "pylon.discord.v1.cache.GetUserRequest",
  userId: "0",
};

export const GetUserRequest = {
  $type: "pylon.discord.v1.cache.GetUserRequest" as const,

  encode(
    message: GetUserRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== "0") {
      writer.uint32(9).fixed64(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUserRequest } as GetUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUserRequest {
    const message = { ...baseGetUserRequest } as GetUserRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId);
    }
    return message;
  },

  toJSON(message: GetUserRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetUserRequest>): GetUserRequest {
    const message = { ...baseGetUserRequest } as GetUserRequest;
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    }
    return message;
  },
};

messageTypeRegistry.set(GetUserRequest.$type, GetUserRequest);

const baseGetUserResponse: object = {
  $type: "pylon.discord.v1.cache.GetUserResponse",
};

export const GetUserResponse = {
  $type: "pylon.discord.v1.cache.GetUserResponse" as const,

  encode(
    message: GetUserResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== undefined) {
      UserData.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUserResponse } as GetUserResponse;
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

  fromJSON(object: any): GetUserResponse {
    const message = { ...baseGetUserResponse } as GetUserResponse;
    if (object.user !== undefined && object.user !== null) {
      message.user = UserData.fromJSON(object.user);
    }
    return message;
  },

  toJSON(message: GetUserResponse): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? UserData.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetUserResponse>): GetUserResponse {
    const message = { ...baseGetUserResponse } as GetUserResponse;
    if (object.user !== undefined && object.user !== null) {
      message.user = UserData.fromPartial(object.user);
    }
    return message;
  },
};

messageTypeRegistry.set(GetUserResponse.$type, GetUserResponse);

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

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
