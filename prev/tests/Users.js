"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NClass_1 = __importDefault(require("../src/NClass"));
const nString_1 = __importDefault(require("../src/types/nString"));
const nArray_1 = __importDefault(require("../src/types/nArray"));
class User extends NClass_1.default {
    constructor(nombre) {
        super();
        this.nombre = new nString_1.default(nombre);
        this.cursos = new nArray_1.default();
    }
}
exports.default = User;
