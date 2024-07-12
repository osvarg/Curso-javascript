"use strict"
class DispositivoEntrada {
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        return thid._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        return thid._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }
    
    set idRaton(idRaton){
        return this._idRaton = idRaton;
    }

    toString(){
        return `idRaton: ${this._idRaton}, tipo de entrada: ${this._tipoEntrada}, marca: ${this._marca} `
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `idTeclado: ${this._idTeclado}, tipo de entrada: ${this._tipoEntrada}, marca: ${this._marca} `
    }
}

class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamaño){
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor = ++Monitor.contadorMonitores;
    }

    get idMonitor(){
        return this._idMonitor
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        return this._marca = marca;
    }

    get tamaño(){
        return this._tamaño;
    }

    set tamaño(tamaño){
        return this._tamaño = tamaño;
    }

    toString(){
        return `idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño} `;
    }
}

class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`
    }
}

class Orden {
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = []
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let ordenComputadoras = '';
        for( let computadora of this._computadoras){
            ordenComputadoras += `\n ${computadora}`;
        }

        console.log(`Orden: ${this._idOrden} Computadoras: ${ordenComputadoras}`);
    }

}


let raton1 = new Raton('Bluetooth', 'Logitech');
console.log(raton1.toString());
let raton2 = new Raton('USB', 'Hyper X');

let teclado1 = new Teclado('USB', 'HP');
console.log(teclado1.toString());
let teclado2 = new Teclado('Wifi', 'Razer');

let monitor1 = new Monitor('ASUS', 10.4);
console.log(monitor1.toString());
let monitor2 = new Monitor('HP', 24);

let computadora1 = new Computadora('HP', monitor1, teclado1, raton1);
console.log(`${computadora1}`);
console.log(computadora1.toString());
let computadora2 = new Computadora('Lenovo', monitor2, teclado2, raton2);

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora1)
orden1.mostrarOrden()

let orden2 = new Orden();
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();