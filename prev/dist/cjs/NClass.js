"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nType_1 = __importDefault(require("./types/nType"));
const nString_1 = __importDefault(require("./types/nString"));
class NClass {
    constructor() {
        this.id = new nString_1.default();
    }
    set(data) {
        for (const key in data) {
            if (this[key] instanceof nType_1.default) {
                this[key].set(data[key]);
            }
        }
    }
}
exports.default = NClass;
