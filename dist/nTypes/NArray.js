import { invalidTypeException } from "../exceptions/TypeExceptions.js";
import NType from "./NType.js";
class NArray extends NType {
    _object;
    constructor(object = String, defaultValue = []) {
        super(defaultValue);
        this._object = object;
    }
    set(array) {
        if (!this.validArray(array)) {
            throw new invalidTypeException(`The array must have only ${this._object.name} objects`);
        }
        const transformedArray = this._transform(array);
        this._value = transformedArray;
    }
    secureSet(value) {
        if (value.constructor.name.toLowerCase() !== "array") {
            this._value = this._default;
            return;
        }
        const transformedArray = this._transform(value);
        this._value = transformedArray;
    }
    _transform(value) {
        const transformedArray = [];
        if (this._object instanceof NType) {
            value.forEach(item => {
                const newObject = new this._object();
                newObject.secureSet(item);
                transformedArray.push(newObject);
            });
        }
        else {
            const primitiveConstructors = [Number, String, Array];
            if (primitiveConstructors.includes(this._object)) {
                value.forEach(item => {
                    transformedArray.push(new this._object(item));
                });
            }
            else {
                value.forEach(item => {
                    //Search in the object NType/NClass attributes
                    let transformedItem = {};
                    for (const key in this._object) {
                        const thisObjectAttrValue = this._object[key];
                        if (thisObjectAttrValue instanceof NType) {
                            transformedItem[key] = thisObjectAttrValue._transform(item[key]);
                        }
                        else {
                            transformedItem[key] = item[key];
                        }
                    }
                    const newObject = Object.create(this._object);
                    Object.assign(newObject, transformedItem);
                    transformedArray.push(newObject);
                });
            }
        }
        return transformedArray;
    }
    validArray(array) {
        let isValid = true;
        if (!array.length)
            return true;
        if (array.constructor.name.toLowerCase() !== "array") {
            return false;
        }
        array.forEach(item => {
            if (!(item instanceof this._object)) {
                isValid = false;
                return false;
            }
        });
        if (!isValid) {
            return false;
        }
        return array.some(item => !(item instanceof this._object));
    }
}
export default NArray;
