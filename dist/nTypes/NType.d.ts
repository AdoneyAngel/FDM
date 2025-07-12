import { inspect } from "node:util";
declare class NType<T> {
    primitive: T;
    protected _default: T;
    protected _value: T;
    constructor(defaultValue: T);
    set(value: T): void;
    get value(): T;
    valid(value: any): boolean;
    [inspect.custom](): T;
    toString(): T;
    toJSON(): T;
}
export default NType;
