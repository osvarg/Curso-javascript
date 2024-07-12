class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        return this._nombre = nombre;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        return this._sueldo = sueldo
    }

    obtenerDetalles(){
        return `Empleado:  nombre: ${this._nombre}, sueldo: ${this._sueldo}`
    }
}

class Gerente extends Empleado {
    constructor (nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        return this._departamento = departamento;
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, depto: ${this.departamento}`
    }
}

function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log('Es una función de tipo gerente')
        console.log(tipo.departamento)
    }
    if(tipo instanceof Object){
        console.log('Es un tipo objeto')
    }
    else if (tipo instanceof Empleado){
        console.log('Es una función de tipo Empleado')
    }
}
let empleado1 = new Empleado('Roberto', 3000);
let gerente1 = new Gerente('Juan Álvarez', 30000, 'Sistemas');
console.log(gerente1)


determinarTipo(empleado1);
determinarTipo(gerente1);