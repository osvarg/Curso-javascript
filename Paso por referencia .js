// Objetos (array) se pasan por referencia

function cambiarValor(parametro) {
    parametro[0] = 20
}

//Llamamos a la funcion
let arreglo = [10];
console.log(`Antes función: ${arreglo[0]}`);
cambiarValor(arreglo)
console.log(`Despues de la función ${arreglo[0]}`)