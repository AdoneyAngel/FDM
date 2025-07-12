import { invalidTypeException } from "../exceptions/TypeExceptions.js";
import NType from "./NType.js";

class NArray extends NType<[...any]> {
    constructor(defaultValue: [...any] = []) {
        super([])

        this.set(defaultValue)
    }

    set(array: [...any]) {
        if (!this.validArray(array)) {
            throw new invalidTypeException("The array must have only NType objects")
        }

        this._value = array

    }

    validArray(array: [...any]) {
        return !array.find(item => !(item instanceof NType))
    }
}

export default NArray