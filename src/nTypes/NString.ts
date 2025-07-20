import NType from "./NType.js";

class NString extends NType<string> {
    constructor(defaultValue: string = "") {
        super(defaultValue)
    }
    
    _transform(value: any) {
        if (value === undefined) {
            return this._default
        }
        if (typeof value == "object") {
            return this._default
        }

        return `${value}`
    }
}

export default NString