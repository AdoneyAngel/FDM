export class invalidTypeException extends Error {
    constructor(message) {
        super(`Invalid type: ${message}`);
        this.name = "Invalid type";
    }
}
