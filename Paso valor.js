// Pasando información de tipo primitivo (number, bool, string)
function cambiarValor (parametro) {
    parametro[0] = 20
}

let argumento = 10;
cambiarValor(argumento);
console.log(argumento)