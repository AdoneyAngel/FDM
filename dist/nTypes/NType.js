import { invalidTypeException } from "../exceptions/TypeExceptions.js";
import { inspect } from "node:util";
class NType {
    primitive;
    _default;
    _value;
    constructor(defaultValue) {
        this._default = defaultValue;
        this._value = defaultValue;
    }
    set(value) {
        if (!this.valid(value)) {
            throw new invalidTypeException(`The new value must be type of ${this._default.constructor.name}`);
        }
        const transformedValue = this._transform(value);
        this._value = transformedValue;
    }
    secureSet(value) {
        const transformedValue = this._transform(value);
        this._value = transformedValue;
    }
    get value() {
        return this._value;
    }
    get default() {
        return this._default;
    }
    valid(value) {
        return value.constructor.name.toLowerCase() === this._default.constructor.name.toLowerCase();
    }
    [inspect.custom]() {
        return this._value;
    }
    toString() {
        return this._value;
    }
    toJSON() {
        return this._value;
    }
}
export default NType;
