export class invalidTypeException extends Error{
    constructor(message: string) {
        super(`Invalid type: ${message}`)

        this.name = "Invalid type"
    }
}