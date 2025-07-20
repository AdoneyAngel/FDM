import { inspect } from "node:util";
declare abstract class NType<T> {
    primitive: T;
    protected _default: T;
    protected _value: T;
    constructor(defaultValue: T);
    set(value: T): void;
    secureSet(value: any): void;
    abstract _transform(value: T): any;
    get value(): T;
    get default(): T;
    valid(value: any): boolean;
    [inspect.custom](): T;
    toString(): T;
    toJSON(): T;
}
export default NType;
