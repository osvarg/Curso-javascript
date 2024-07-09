class Persona{

    static contadorPersonas = 0; //atributos de nuestra clase

    static get MAX_OBJ(){
        return 5;
    }

    email = 'Valor default email'; //atributo de nuestros objetos

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
            console.log('Se incrementa contador: ' + Persona.contadorPersonas);
        }
        else{
            console.log('Se han superado el maximo de objetos permitidos')
        }

    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    static saludar(){
        console.log('Saludos desde método estático')
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido)
    }
    toString(){
        return this.nombreCompleto();
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamentp;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() +  ', ' + this._departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.toString());

let empleado1 = new Empleado('María', 'Jimenez', 'Sistemas');
console.log(empleado1.toString());

let persona2 = new Persona ('Karla', 'Ramirez');
console.log(persona2.toString());

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ)

let persona3 = new Persona('Mariano', 'Lara');
let persona4 = new Persona('Armando', 'Toledo');
let persona5 = new Persona('Laura', 'Quintero');
console.log(persona5.toString())