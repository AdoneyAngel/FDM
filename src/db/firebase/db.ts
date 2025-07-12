import FirebaseConfig from "../../types/FirebaseConfig.js"
import Debug from "../../utils/Debug.js"
import { FirebaseApp, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

class FirebaseDb {
    static #app: FirebaseApp
    static firestore: any
    static #config: FirebaseConfig
    static #instance: FirebaseDb

    private constructor(config: FirebaseConfig) {
        FirebaseDb.#config = config

        FirebaseDb.#start()
    }

    static #start() {
        if (!FirebaseDb.#config) return;

        //Init firebase app
        const initializedApp = initializeApp(FirebaseDb.#config)
        FirebaseDb.#app = initializedApp

        //Init firebase services
        FirebaseDb.#startFirestore()
    }

    static async #startFirestore() {
        if (!FirebaseDb.#config) return;

        try {
            const initializedFirestore = getFirestore(FirebaseDb.#app)

            FirebaseDb.firestore = initializedFirestore

        } catch (err) {
            Debug.error(err)
        }
    }

    static async init(config: FirebaseConfig) {
        if (!FirebaseDb.#instance) {
            FirebaseDb.#instance = new FirebaseDb(config)
        }

        return FirebaseDb
    }
}

export default FirebaseDb