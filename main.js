class Persona {
    constructor(nombre, edad, sexo){
        this.nombre = nombre
        this.edad = edad
        this.sexo = sexo
    }

    saludar(){
        console.log(`Hola ${this.nombre}`);
    }
    static esMayorDeEdad(edad){
        if(edad>17){
            return true;
        }else{
            return false;
        }
    }
}
const persona1= new Persona ("santi", 20, "femenino")
persona1.saludar()

const esMayor= Persona.esMayorDeEdad(persona1.edad)
console.log(`La persona es mayor? ${esMayor}`);

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


class Animal {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
    hacerSonido(){
        console.log(`muuu`);
    }
}



class Perro extends Animal{
    constructor(nombre, edad, raza){
        super (nombre, edad)
        this.raza = raza
    }
    moverCola(){
        console.log(`El perro ${perro1.nombre} esta moviendo la cola`);
    }
}

const perro1 = new Perro ("pepe", 10, "puddle")
perro1.hacerSonido()
perro1.moverCola()

class Figura {
    constructor(color, area){
        this.color = color
        this.area = area
    }
    calcularArea(){
        console.log(`el area de la figura es ${figura1.area}`);
    }
}


