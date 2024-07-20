let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion)
        resolver('Resolvió correcto');
    else
        rechazar('Se produjo un error');
});


//miPromesa.then( valor => console.log(valor), error => console.log(error));
//miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));

let promesa = new Promise((resolver) => {
    //console.log('inicio de promesa');
    setTimeout(() => resolver('saludos con promesa y timeout'), 3000);
    //console.log('fin de la promesa');
});

//promesa.then( valor => console.log(valor));

//async deja que una función regrese una promesa
async function miFuncionConPromesa(){
    return 'saludos con promesa y async'
}

//miFuncionConPromesa().then(valor => console.log(valor));

async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( resolver => {
        resolver('Promesa con await');
    } );
//await se encarga de indicar que va a procesar una promesa
    console.log(await miPromesa);
}

//funcionConPromesaYAwait();

async function funcionConPromesaAwaitYTimeout(){
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('promesa con await y timeout'), 3000);
    });
    console.log(await miPromesa);
    console.log('fin función');
}

funcionConPromesaAwaitYTimeout();