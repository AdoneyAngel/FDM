import { collection, getDocs, query } from "firebase/firestore";
import FirebaseDb from "../db/firebase/db.js";
import { invalidTypeException } from "../exceptions/TypeExceptions.js";
import NType from "../nTypes/NType.js";
class NClass {
    static doc;
    constructor() {
    }
    //DB methods   
    static async all() {
        if (!this.doc?.length)
            return [];
        const docRef = collection(FirebaseDb.firestore, this.doc);
        const dataQuery = query(docRef);
        const dataResult = await getDocs(dataQuery);
        return dataResult.docs.map((item) => {
            const newObject = this._createInstance({ ...item.data() });
            return newObject;
        });
    }
    //Class methods
    set(data) {
        this.valid(data);
        for (const key in data) {
            const dataValue = data[key];
            if (this[key] instanceof NType) {
                this[key].set(dataValue);
            }
            else {
                this[key] = dataValue;
            }
        }
    }
    valid(data) {
        for (const key in data) {
            const dataValue = data[key];
            const currentClassValue = this[key];
            if (currentClassValue === undefined) {
                throw new invalidTypeException(`'${this.constructor.name}' doesn't have the '${key}' attribute`);
            }
            if (currentClassValue instanceof NType) {
                if (!currentClassValue.valid(dataValue)) {
                    throw new invalidTypeException(`The '${key}' attribute must be '${currentClassValue.value.constructor.name}'`);
                }
            }
        }
        return true;
    }
    //Private
    static _createInstance(attributes) {
        const newInstance = Object.create(this.prototype);
        const thisInstance = this;
        for (const staticKey in thisInstance) {
            const staticValue = thisInstance[staticKey];
            //Exclude NClass attributes
            if (["doc"].includes(staticKey))
                continue;
            if (staticValue instanceof NType) {
                const attrValue = attributes[staticKey];
                if (attrValue != undefined) {
                    staticValue.secureSet(attrValue);
                }
                Object.assign(newInstance, { [staticKey]: staticValue });
            }
        }
        return newInstance;
    }
}
export default NClass;
