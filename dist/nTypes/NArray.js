import { invalidTypeException } from "../exceptions/TypeExceptions.js";
import NType from "./NType.js";
class NArray extends NType {
    constructor() {
        super([]);
    }
    set(array) {
        if (!this.validArray(array)) {
            throw new invalidTypeException("The array must have only NType objects");
        }
        this._value = array;
    }
    validArray(array) {
        return !array.find(item => !(item instanceof NType));
    }
}
export default NArray;
