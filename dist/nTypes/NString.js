import NType from "./NType.js";
class NString extends NType {
    constructor(defaultValue = "") {
        super(defaultValue);
    }
    _transform(value) {
        if (value === undefined) {
            return this._default;
        }
        if (typeof value == "object") {
            return this._default;
        }
        return `${value}`;
    }
}
export default NString;
