import NType from "./NType.js";

class NNumber extends NType<Number>{
    constructor(defaultValue: Number = 0) {
        super(0)

        this.set(defaultValue)
    }
}

export default NNumber