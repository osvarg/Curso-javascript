let numerosArreglo = [13, 5, , 8, "hola"];

numerosArreglo[2] = 3
// Leer los valores
console.log(`Elemento 1: ${numerosArreglo[0]}`)
console.log(`Elemento 2: ${numerosArreglo[1]}`)
console.log(`Elemento 3: ${numerosArreglo[2]}`)
console.log(`Elemento 4: ${numerosArreglo[3]}`)
console.log(`Elemento 5: ${numerosArreglo[4]}`)
console.log(`Elemento 6: ${numerosArreglo[5]}`)

for(let i = 0; i < numerosArreglo.length; i++) {
    console.log(`Elemento ${i}: ${numerosArreglo[i]} `)
}