class Persona{
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }

    get IdPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        return this._nombre = nombre;
    }

    get apellido(){
        return this.apellido;
    }

    set apellido(apellido){
        return this._apellido = apellido;
    }

    get edad(){
        return this._edad
    }

    set edad(edad){
        return this._edad = edad
    }

    toString(){
        return this._idPersona + ' ' + this._nombre + ' ' + this._apellido + ' ' + this._edad;
    }
}

class Empleado extends Persona {

    static contadorPersonas = 0

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorPersonas;
        this._sueldo = sueldo
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        return this._sueldo = sueldo;
    }

    toString(){
        return  super.toString() + ' ' + this._idEmpleado + ' ' + this._sueldo;
    }

}

let persona = new Persona('Juan', 'Perez', 23, 22000);
console.log(persona.toString());

let empleado2 = new Empleado('Miguel', 'De cervantes', 43, 23000);
console.log(empleado2);
console.log(empleado2.toString())

class Cliente extends Persona {

    static contadorPersonas = 0

    constructor(nombre, apellido, edad){
        super(nombre, apellido, edad)
        this._idCliente = ++Cliente.contadorPersonas;
        this._fechaRegistro = new Date();
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        return this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }

}

let cliente1 = new Cliente('Martin', 'Mendoza', 53, 29000,)

console.log(cliente1)
console.log(cliente1.toString())