"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FirebaseConnection_1 = __importDefault(require("../src/db/FirebaseConnection"));
const nArray_1 = __importDefault(require("../src/types/nArray"));
const Curso_1 = __importDefault(require("./Curso"));
const Users_1 = __importDefault(require("./Users"));
const firebaseConfig = {
    apiKey: "AIzaSyC000f-WRhit1gic-pY20mrSRu5uawcOtw",
    authDomain: "deathbits-3377a.firebaseapp.com",
    databaseURL: "https://deathbits-3377a-default-rtdb.firebaseio.com",
    projectId: "deathbits-3377a",
    storageBucket: "deathbits-3377a.firebasestorage.app",
    messagingSenderId: "153716372377",
    appId: "1:153716372377:web:0416161a82899566721908"
};
FirebaseConnection_1.default.init(firebaseConfig);
const myUser = new Users_1.default("juan");
const curso1 = new Curso_1.default();
const cursos = new nArray_1.default([curso1]);
myUser.set({ id: "123321", nombre: "Antonio" });
console.log("1");
myUser.set({ cursos: cursos });
console.log(myUser);
exports.default = myUser;
