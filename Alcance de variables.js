let variableGlobal = 5;

// Modificar el valor
variableGlobal = 10

// Definicion de función
function miFuncion(variableLocal) {
    console.log(variableLocal);
    // Modificamos el valor de la variable global
    variableGlobal = 20;
    // No podemos redefinir una variable global (let)
}

// Llamamos la funcion
miFuncion(variableGlobal)
console.log(variableGlobal)