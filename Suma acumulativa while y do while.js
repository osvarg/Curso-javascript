let maximo = 5, resultado = 0, numero = 1 ;

while ( numero <= maximo ) {
    console.log(` ${resultado} + ${numero}`);

    resultado += numero;
    console.log(resultado);
    numero++;
}
console.log(resultado);

resultado = 0, numero = 1 ;
do {
    console.log(` ${resultado} + ${numero}`);

    resultado += numero;
    console.log(resultado);
    numero++;
}
while (numero <= maximo)