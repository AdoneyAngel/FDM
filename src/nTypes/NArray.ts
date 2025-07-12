import NClass from "../classes/NClass.js";
import { invalidTypeException } from "../exceptions/TypeExceptions.js";
import NType from "./NType.js";

class NArray extends NType<[...any]> {
    constructor(defaultValue: [...any] = []) {
        super([])

        this.set(defaultValue)
    }

    set(array: [...any]) {
        if (!this.validArray(array)) {
            throw new invalidTypeException("The array must have only NType/NClass objects")
        }

        this._value = array

    }

    validArray(array: [...any]) {
        if (array.constructor.name.toLowerCase() !== "array") {
            throw new invalidTypeException("The vale must be Array")
        }

        return !(array.find(item => !(item instanceof NType || item instanceof NClass)))
    }
}

export default NArray