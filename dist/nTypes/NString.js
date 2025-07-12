import NType from "./NType.js";
class NString extends NType {
    constructor(defaultValue = "") {
        super("");
        this.set(defaultValue);
    }
}
export default NString;
