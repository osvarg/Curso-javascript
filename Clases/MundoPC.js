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

let raton1 = new Raton('Bluetooth', 'Logitech');
console.log(raton1.toString());

let teclado1 = new Teclado('USB', 'HP');
console.log(teclado1.toString());

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

    get
}