import FirebaseConfig from "../../types/FirebaseConfig.js";
declare class FirebaseDb {
    #private;
    static firestore: any;
    private constructor();
    static init(config: FirebaseConfig): Promise<typeof FirebaseDb>;
}
export default FirebaseDb;
