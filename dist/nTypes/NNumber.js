import NType from "./NType.js";
class NNumber extends NType {
    constructor(defaultValue = 0) {
        super(0);
        this.set(defaultValue);
    }
}
export default NNumber;
