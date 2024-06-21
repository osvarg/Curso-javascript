let maximo = 5, resultado = 0;

for(let suma= 1; suma <= maximo; suma++){
    console.log(`${resultado} + ${suma}`)
    console.log(resultado += suma );
}
console.log(resultado)