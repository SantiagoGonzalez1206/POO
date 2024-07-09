class Persona {
    constructor(nombre, edad, sexo){
        this.nombre = nombre
        this.edad = edad
        this.sexo = sexo
    }

    saludar(){
        console.log(`Hola ${this.nombre}`);
    }
}
const persona1= new Persona ("santi", 23, "femenino")
persona1.saludar()

class Estudiante extends Persona{
    constructor(nombre, edad, sexo, carrera){
        super(nombre, edad, sexo)
        this.carrera = carrera
    }

    estudiar(){
        console.log(`${this.nombre} esta en la carrera de ${this.carrera}`)
    }
}
const estudiante1= new Estudiante ("Nicolle zarai", 23, "femenino", "Torrentismo")
estudiante1.saludar()
estudiante1.estudiar()