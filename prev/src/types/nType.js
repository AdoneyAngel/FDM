"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _nType_value;
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
class nType {
    constructor(defaultValue = null, primitiveType) {
        _nType_value.set(this, void 0);
        __classPrivateFieldSet(this, _nType_value, defaultValue, "f");
        this.primitiveType = new primitiveType();
    }
    set(value) {
        if (value.constructor.name !== this.primitiveType.constructor.name && value.constructor.name !== this.constructor.name) {
            throw new Error("Invalid value type");
        }
        __classPrivateFieldSet(this, _nType_value, value, "f");
    }
    get value() {
        return __classPrivateFieldGet(this, _nType_value, "f");
    }
    [(_nType_value = new WeakMap(), util_1.inspect.custom)]() {
        return __classPrivateFieldGet(this, _nType_value, "f");
    }
}
exports.default = nType;
