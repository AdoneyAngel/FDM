"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseConnection = exports.NClass = void 0;
var NClass_1 = require("./NClass");
Object.defineProperty(exports, "NClass", { enumerable: true, get: function () { return __importDefault(NClass_1).default; } });
var FirebaseConnection_1 = require("./db/FirebaseConnection");
Object.defineProperty(exports, "FirebaseConnection", { enumerable: true, get: function () { return __importDefault(FirebaseConnection_1).default; } });
