// TIPOS DE DATOS
const strings = `Hola, soy un "string"`;
const numeros = 203459436.563546;
const booleans = true; //false
/* const objetos = {
  propiedad: valor,
  propiedad: valor,
}; */
const arrays = ["Primero", "Segundo", "Tercero", 2, true];
const nulo = null;
//const noDefinido = undefined;

const explicacionNullUndefined =
  "https://www.aprendejavascript.dev/images/null-undefined.jpg";

// OPERADORES ARITMETICOS
let x = 10;

x += 5;
console.log(x);
x -= 1;
console.log(x);
x *= 2;
console.log(x);
x /= 2;
console.log(x);
x %= 3;
console.log(x);

//CUIDADO CON LOS STRINGS
const z = "1" + "1";
console.log(z);

//OPERADORES LOGICOS -> Operaciones con booleans
// && -> AND -> Y
console.log(true && false);
// || -> OR -> O
console.log(true || false)
// ! -> NOT -> NO
console.log(!true)

// IGUAL QUE
console.log(10 == "10");
// ESTRICTAMENTE IGUAL QUE
console.log(10 === "10")
// DESIGUAL QUE
console.log(10 !== 5)

// MAYOR - MENOR - IGUAL QUE
console.log(5 > 5)
console.log(5 >= 5)
console.log(5 < 5)
console.log(5 <= 5)