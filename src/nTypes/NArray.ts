import NClass from "../classes/NClass.js";
import { invalidTypeException } from "../exceptions/TypeExceptions.js";
import NType from "./NType.js";

class NArray extends NType<[...any]> {
    _object: any

    constructor(object: new (...args: any[])=>any, defaultValue: [...any] = []) {
        super([])

        this.set(defaultValue)
        this._object = object
    }

    set(array: [...any]) {
        if (!this.validArray(array)) {
            throw new invalidTypeException("The array must have only NType/NClass objects")
        }

        this._value = array

    }

    validArray(array: [...item: any[]]) {
        let isValid = true

        if (array.constructor.name.toLowerCase() !== "array") {
            return false
        }

        array.forEach(item => {
            if (!(item instanceof this._object)) {
                isValid = false
                return false
            }
        })

        if (!isValid) {
            return false
        }

        return !(array.find(item => !(item instanceof NType || item instanceof NClass)))
    }
}

export default NArray