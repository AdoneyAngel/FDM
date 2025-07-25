import { invalidTypeException } from "../exceptions/TypeExceptions.js"
import { inspect } from "node:util"

abstract class NType<T> {
    primitive: T
    protected _default: T
    protected _value: T

    constructor(defaultValue: T) {
        this._default = defaultValue
        this._value = defaultValue
    }

    set(value: T): void {
        if (!this.valid(value)) {
            throw new invalidTypeException(`The new value must be type of ${this._default.constructor.name}`)
        }

        const transformedValue = this._transform(value)

        this._value = transformedValue
    }

    secureSet(value: any): void {
        const transformedValue = this._transform(value)

        this._value = transformedValue
    }

    abstract _transform(value: T)

    get value(): T {
        return this._value
    }
    
    get default(): T {
        return this._default
    }

    valid(value: any) {
        return value.constructor.name.toLowerCase() === this._default.constructor.name.toLowerCase()
    }

    [inspect.custom] () {
        return this._value
    }

    toString() {
        return this._value
    }

    toJSON() {
        return this._value
    }

}

export default NType