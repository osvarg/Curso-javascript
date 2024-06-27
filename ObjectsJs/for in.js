let x = 10;
console.log(x.length)

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido
    }
}

console.log(persona.nombre);
console.log(persona['apellido'])
console.log(persona.email);
console.log(persona.edad);
console.log(persona.nombreCompleto());
console.log(persona);

//for in
for(propiedad in persona){
    console.log(propiedad)
    console.log(persona[propiedad])
}
