import NType from "./NType.js";
declare class NArray extends NType<[...any]> {
    _object: new (...args: any[]) => any;
    constructor(object?: new (...args: any[]) => any, defaultValue?: [...any]);
    set(array: [...any]): void;
    secureSet(value: any): void;
    _transform(value: any[]): any[];
    validArray(array: [...item: any[]]): boolean;
}
export default NArray;
