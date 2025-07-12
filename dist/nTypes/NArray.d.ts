import NType from "./NType.js";
declare class NArray extends NType<[...any]> {
    constructor(defaultValue?: [...any]);
    set(array: [...any]): void;
    validArray(array: [...any]): boolean;
}
export default NArray;
