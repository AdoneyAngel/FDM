"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nType_1 = __importDefault(require("./nType"));
class nString extends nType_1.default {
    constructor(defaultValue = "") {
        super(defaultValue, String);
    }
}
exports.default = nString;
