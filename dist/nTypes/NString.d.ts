import NType from "./NType.js";
declare class NString extends NType<string> {
    constructor(defaultValue?: string);
    _transform(value: any): string;
}
export default NString;
