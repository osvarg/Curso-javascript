let a = 5;
let b = '5';

console.log(a);
console.log(b);

//Operadores igualdad ==
// (solo compara valores, y hace una conversión si es necesario)
console.log("a == b ->", a == b);
// String interpolation
console.log(`${a} == ${b} -> ${a == b}`);

// Operador igualdad estricta o exacto
// se compara el valor y el tipo de dato
console.log("a === b ->", a === b);
// String interpolation
console.log(`${a} === ${b} -> ${a === b}`);


// Operadores distintos
// compara valor y convierte el tipo de dato si es necesario
console.log(`${a} != ${b} -> ${a != b}`);

// Operadores distintos exacto
// compara valor y el tipo de dato
console.log(`${a} !== ${b} -> ${a !== b}`);

// Operador menor que 
console.log(`${a} < ${b} -> ${a < b}`);

// Operador menor o igual que 
console.log(`${a} <= ${b} -> ${a <= b}`);

// Operador mayor que 
console.log(`${a} > ${b} -> ${a > b}`);

// Operador mayor o igual que 
console.log(`${a} >= ${b} -> ${a >= b}`);