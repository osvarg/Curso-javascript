class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this.apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1);
console.log(persona1.nombre);
persona1.nombre= 'Joshua Guzman';//set nombre('Juan Carlos')
console.log(persona1.nombre);//get nombre