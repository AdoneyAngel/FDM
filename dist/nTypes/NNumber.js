import NType from "./NType.js";
class NNumber extends NType {
    constructor(defaultValue = 0) {
        super(defaultValue);
    }
    _transform(value) {
        const transformedValue = Number(value);
        if (isNaN(value)) {
            return this._default;
        }
        else {
            return transformedValue;
        }
    }
}
export default NNumber;
