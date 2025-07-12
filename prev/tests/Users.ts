import NClass from "../src/NClass";
import nString from "../src/types/nString";
import nArray from "../src/types/nArray";
import Curso from "./Curso"

class User extends NClass {
    private nombre: nString
    private cursos: nArray<Curso>

    constructor(nombre: String) {
        super()

        this.nombre = new nString(nombre)
        this.cursos = new nArray()
    }
}

export default User