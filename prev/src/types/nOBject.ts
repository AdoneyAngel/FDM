import nType from "./nType"

class nObject<T> extends nType<T> {
    constructor(defaultValue: T) {
        super(defaultValue, any)
    }
}