import NType from "./NType.js";
declare class NArray extends NType<[...any]> {
    constructor();
    set(array: [...any]): void;
    validArray(array: [...any]): boolean;
}
export default NArray;
