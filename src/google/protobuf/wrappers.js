/* eslint-disable */
import { messageTypeRegistry } from "../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "google.protobuf";
const baseDoubleValue = {
    $type: "google.protobuf.DoubleValue",
    value: 0,
};
export const DoubleValue = {
    $type: "google.protobuf.DoubleValue",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== 0) {
            writer.uint32(9).double(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDoubleValue };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDoubleValue };
        if (object.value !== undefined && object.value !== null) {
            message.value = Number(object.value);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDoubleValue };
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
};
messageTypeRegistry.set(DoubleValue.$type, DoubleValue);
const baseFloatValue = {
    $type: "google.protobuf.FloatValue",
    value: 0,
};
export const FloatValue = {
    $type: "google.protobuf.FloatValue",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== 0) {
            writer.uint32(13).float(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFloatValue };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseFloatValue };
        if (object.value !== undefined && object.value !== null) {
            message.value = Number(object.value);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseFloatValue };
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
};
messageTypeRegistry.set(FloatValue.$type, FloatValue);
const baseInt64Value = {
    $type: "google.protobuf.Int64Value",
    value: "0",
};
export const Int64Value = {
    $type: "google.protobuf.Int64Value",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== "0") {
            writer.uint32(8).int64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInt64Value };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = longToString(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseInt64Value };
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
        const message = { ...baseInt64Value };
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
};
messageTypeRegistry.set(Int64Value.$type, Int64Value);
const baseUInt64Value = {
    $type: "google.protobuf.UInt64Value",
    value: "0",
};
export const UInt64Value = {
    $type: "google.protobuf.UInt64Value",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== "0") {
            writer.uint32(8).uint64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUInt64Value };
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
        const message = { ...baseUInt64Value };
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
        const message = { ...baseUInt64Value };
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
};
messageTypeRegistry.set(UInt64Value.$type, UInt64Value);
const baseInt32Value = {
    $type: "google.protobuf.Int32Value",
    value: 0,
};
export const Int32Value = {
    $type: "google.protobuf.Int32Value",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== 0) {
            writer.uint32(8).int32(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInt32Value };
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
        const message = { ...baseInt32Value };
        if (object.value !== undefined && object.value !== null) {
            message.value = Number(object.value);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseInt32Value };
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
};
messageTypeRegistry.set(Int32Value.$type, Int32Value);
const baseUInt32Value = {
    $type: "google.protobuf.UInt32Value",
    value: 0,
};
export const UInt32Value = {
    $type: "google.protobuf.UInt32Value",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== 0) {
            writer.uint32(8).uint32(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUInt32Value };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUInt32Value };
        if (object.value !== undefined && object.value !== null) {
            message.value = Number(object.value);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUInt32Value };
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
};
messageTypeRegistry.set(UInt32Value.$type, UInt32Value);
const baseBoolValue = {
    $type: "google.protobuf.BoolValue",
    value: false,
};
export const BoolValue = {
    $type: "google.protobuf.BoolValue",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value === true) {
            writer.uint32(8).bool(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBoolValue };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseBoolValue };
        if (object.value !== undefined && object.value !== null) {
            message.value = Boolean(object.value);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBoolValue };
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
};
messageTypeRegistry.set(BoolValue.$type, BoolValue);
const baseStringValue = {
    $type: "google.protobuf.StringValue",
    value: "",
};
export const StringValue = {
    $type: "google.protobuf.StringValue",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== "") {
            writer.uint32(10).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStringValue };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseStringValue };
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
        const message = { ...baseStringValue };
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
};
messageTypeRegistry.set(StringValue.$type, StringValue);
const baseBytesValue = { $type: "google.protobuf.BytesValue" };
export const BytesValue = {
    $type: "google.protobuf.BytesValue",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value.length !== 0) {
            writer.uint32(10).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBytesValue };
        message.value = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseBytesValue };
        message.value = new Uint8Array();
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBytesValue };
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
};
messageTypeRegistry.set(BytesValue.$type, BytesValue);
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
