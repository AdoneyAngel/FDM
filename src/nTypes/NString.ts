import NType from "./NType.js";

class NString extends NType<string> {
    constructor(defaultValue: string = "") {
        super("")

        this.set(defaultValue)
    }
}

export default NString