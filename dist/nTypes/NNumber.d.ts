import NType from "./NType.js";
declare class NNumber extends NType<Number> {
    constructor(defaultValue?: Number);
    _transform(value: any): number | Number;
}
export default NNumber;
