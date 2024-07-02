function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

Persona.prototype.tel = '44332211'

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(padre.tel);
padre.tel = '55443322';
console.log(padre.tel);

let madre = new Persona('Juana', 'Rodriguez', 'jrodriguez@email.com');
console.log(madre.tel);

padre.nombre = 'Carlos';
console.log(padre);
console.log(madre);
