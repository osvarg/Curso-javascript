'use strict';
let resultado = '3'
try {
    let x = 10;
    console.log(x)
    if(isNaN(resultado))throw 'No es un número';
    else if(resultado === '') throw 'Es cadena vacía'
    else if(resultado >= 0) throw 'Es un valor positivo'
    //Permite generar errores de manera voluntaria
    throw 'Mi error'
}
catch(error){
    console.log(error);
}
finally{
    console.log('Termina la función de errores')
}
console.log('añflsdkjadfsñlasdfadfsfadsfkjafdslkñadfs')