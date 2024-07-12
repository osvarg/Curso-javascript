function miFuncion1(){
    console.log('función 1');
}

function miFuncion2(){
    console.log('función 2');
}

miFuncion1();
miFuncion2();

//Función de tipo callback
let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado ${res}`) 
}

sumar(2, 5, imp);