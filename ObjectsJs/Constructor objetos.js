function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(padre)

let madre = new Persona('Juana', 'Rodriguez', 'jrodriguez@email.com');
console.log(madre)