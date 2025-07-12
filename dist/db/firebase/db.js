import Debug from "../../utils/Debug.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
class FirebaseDb {
    static #app;
    static firestore;
    static #config;
    static #instance;
    constructor(config) {
        FirebaseDb.#config = config;
        FirebaseDb.#start();
    }
    static #start() {
        if (!FirebaseDb.#config)
            return;
        //Init firebase app
        const initializedApp = initializeApp(FirebaseDb.#config);
        FirebaseDb.#app = initializedApp;
        //Init firebase services
        FirebaseDb.#startFirestore();
    }
    static async #startFirestore() {
        if (!FirebaseDb.#config)
            return;
        try {
            const initializedFirestore = getFirestore(FirebaseDb.#app);
            FirebaseDb.firestore = initializedFirestore;
        }
        catch (err) {
            Debug.error(err);
        }
    }
    static async init(config) {
        if (!FirebaseDb.#instance) {
            FirebaseDb.#instance = new FirebaseDb(config);
        }
        return FirebaseDb;
    }
}
export default FirebaseDb;
