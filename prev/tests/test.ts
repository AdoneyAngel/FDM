const FirebaseConnection = require("../src/db/FirebaseConnection")
const nArray = require("../src/types/nArray")
const User = require("./Users")
const Curso = require("./Curso")

const firebaseConfig = {
    apiKey: "AIzaSyC000f-WRhit1gic-pY20mrSRu5uawcOtw",
    authDomain: "deathbits-3377a.firebaseapp.com",
    databaseURL: "https://deathbits-3377a-default-rtdb.firebaseio.com",
    projectId: "deathbits-3377a",
    storageBucket: "deathbits-3377a.firebasestorage.app",
    messagingSenderId: "153716372377",
    appId: "1:153716372377:web:0416161a82899566721908"
};

FirebaseConnection.init(firebaseConfig)

const myUser = new User("juan")
const curso1 = new Curso()
const cursos = new nArray([curso1])

myUser.set({ id: "123321", nombre: "Antonio" })
console.log("1")
myUser.set({cursos: cursos})

console.log(myUser)

export default myUser