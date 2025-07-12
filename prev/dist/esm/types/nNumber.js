import nType from "./nType";
class nNumber extends nType {
    constructor(defaultValue = 0) {
        super(defaultValue, Number);
    }
}
export default nNumber;
