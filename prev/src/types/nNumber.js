"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nType_ts_1 = __importDefault(require("./nType.ts"));
class nNumber extends nType_ts_1.default {
    constructor(defaultValue = 0) {
        super(defaultValue, Number);
    }
}
exports.default = nNumber;
