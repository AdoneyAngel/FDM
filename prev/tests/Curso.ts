import NClass from "../src/NClass";
import nString from "../src/types/nString";
import nNumber from "../src/types/nNumber";

class Curso extends NClass {
    private nombre: nString
    private duracion: nNumber

    constructor() {
        super()

        this.nombre = new nString()
        this.duracion = new nNumber()
    }
}

export default Curso