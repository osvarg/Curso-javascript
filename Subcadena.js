let cadena3 = 'Hola Mundo'

// substring(indice_inicio, indice_final - 1)
// No se insluye el caracter indice_fin
let cadena1 = cadena3.substring(0, 4);
console.log(cadena1);

// Subcadena Mundo
cadena1 = cadena3.substring(5, 10);// Si se pusiera solo el 5 se ejecutaría hasta el final de la cadena
console.log(cadena1)