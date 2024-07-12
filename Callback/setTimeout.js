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

//Llamadas asíncronas con uso setTimeout
function miFuncionCallback(){
    console.log('saludo asíncrono despues de 3 segundos')
}

setTimeout(miFuncionCallback, 3000);//después de 3s}

setTimeout(function(){console.log('saludo asíncrono 2')}, 5000);

setTimeout(() => console.log('saludo asíncrono 3'), 1000 );