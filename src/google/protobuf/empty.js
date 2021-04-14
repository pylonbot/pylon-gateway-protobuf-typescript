/* eslint-disable */
import { messageTypeRegistry } from "../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "google.protobuf";
const baseEmpty = { $type: "google.protobuf.Empty" };
export const Empty = {
    $type: "google.protobuf.Empty",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEmpty };
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
        const message = { ...baseEmpty };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseEmpty };
        return message;
    },
};
messageTypeRegistry.set(Empty.$type, Empty);
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
