"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NClass_1 = __importDefault(require("../src/NClass"));
const nString_1 = __importDefault(require("../src/types/nString"));
const nNumber_1 = __importDefault(require("../src/types/nNumber"));
class Curso extends NClass_1.default {
    constructor() {
        super();
        this.nombre = new nString_1.default();
        this.duracion = new nNumber_1.default();
    }
}
exports.default = Curso;
