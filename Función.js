function saludar (mensaje) {
    // Cuerpo de la función
    console.log(`Mensaje: ${mensaje}`)
}
// Llamar el procedimiento
saludar('Hola');


//Segundo ejemplo
function sumar(a, b){
    let resultadoSuma = a + b;
    return resultadoSuma;
}
// Llamar o invocara a la función 
let argA = 5, argB = 7;
let resultado = sumar(argA, argB);
console.log(resultado)