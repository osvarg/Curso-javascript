// Declaración de matriz
let matriz = [[100, 200, 300],[400, 500, 600],[700, 800, 900],[1000,1100,1200]];

console.log(matriz.length);
console.log(matriz[0].length);
console.log(matriz[1].length);
// Renglones
for(let renglon = 0; renglon < matriz.length; renglon++){
    // Columnas
    for (let columna = 0; columna < matriz[renglon].length; columna++){
        console.log(matriz[renglon][columna]);
    }
}