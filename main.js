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
