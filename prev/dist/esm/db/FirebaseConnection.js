var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
class FirebaseConnection {
    constructor(firebaseConfig) {
        FirebaseConnection.config = firebaseConfig;
    }
    static init(firebaseConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!FirebaseConnection.instance) {
                FirebaseConnection.instance = new FirebaseConnection(firebaseConfig);
            }
            FirebaseConnection.startApp();
            return firebaseConfig.instance;
        });
    }
    static startApp() {
        return __awaiter(this, void 0, void 0, function* () {
            FirebaseConnection._app = initializeApp(FirebaseConnection.config);
            FirebaseConnection.startDb();
            FirebaseConnection.startAuth();
        });
    }
    static get app() {
        return FirebaseConnection._app;
    }
    static get db() {
        return FirebaseConnection._db;
    }
    static get auth() {
        return FirebaseConnection._auth;
    }
    static startDb() {
        FirebaseConnection._db = getFirestore(FirebaseConnection._app);
    }
    static startAuth() {
        FirebaseConnection._auth = getAuth(FirebaseConnection._app);
    }
}
export default FirebaseConnection;
const firebaseConfig = {
    apiKey: "AIzaSyC000f-WRhit1gic-pY20mrSRu5uawcOtw",
    authDomain: "deathbits-3377a.firebaseapp.com",
    databaseURL: "https://deathbits-3377a-default-rtdb.firebaseio.com",
    projectId: "deathbits-3377a",
    storageBucket: "deathbits-3377a.firebasestorage.app",
    messagingSenderId: "153716372377",
    appId: "1:153716372377:web:0416161a82899566721908"
};
