import { invalidTypeException } from "../exceptions/TypeExceptions.js"
import NType from "../nTypes/NType.js"

class NClass {

    set(data: {[key: string]: any}) {
        this.valid(data)

        for (const key in data) {
            const dataValue = data[key]

            if (this[key] instanceof NType) {
                this[key].set(dataValue)

            } else {
                this[key] = dataValue
            }
        }
    }

    valid(data: {[key: string]: any}) {
        for (const key in data) {
            const dataValue = data[key]
            const currentClassValue = this[key]

            if (currentClassValue === undefined) {
                throw new invalidTypeException(`'${this.constructor.name}' doesn't have the '${key}' attribute`)
            }

            if (currentClassValue instanceof NType) {
                if (!currentClassValue.valid(dataValue)) {
                    throw new invalidTypeException(`The '${key}' attribute must be '${currentClassValue.value.constructor.name}'`)
                }
            }
        }

        return true
    }
}

export default NClass