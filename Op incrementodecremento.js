let a, b, c, d;
a = 0;

// Pre-incremento;
++a;
console.log(a);

// Post-incremento
a++;
console.log(a);

// Pre-decremento
--a;
console.log(a);

// Post-decremento
a--;
console.log(a);

// Ejemplo
a = 5;
b = 2;
c = ++a * b--;
console.log(c)
console.log(a)
console.log(b)
