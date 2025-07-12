import nType from "./types/nType";
import nString from "./types/nString";
class NClass {
    constructor() {
        this.id = new nString();
    }
    set(data) {
        for (const key in data) {
            if (this[key] instanceof nType) {
                this[key].set(data[key]);
            }
        }
    }
}
export default NClass;
