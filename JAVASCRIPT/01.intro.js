// Esto es un comentario en linea

/* 
Esto es 
un 
comentario
multi
linea
*/

//CONST y LET -> VARIABLES
const myDogName = "Byron"; //Declarar y asignar

let movie = "Batman";
console.log(movie);
// Reasignar el valor de una variable let
movie = "Superman";
console.log(movie);

//AMBITO DE BLOQUE -> SCOPE

//Ambito global
const x = 10;

if (true) {
  //Ambito de bloque
  const y = 5;
  //Puedo leer la x porque está a nivel global
  console.log(x);
  //Puedo leer la y porque está en el mismo bloque
  console.log(y);
}

//Puedo leer la x porque está a nivel global
console.log(x);
//No puedo leer la y porque está dentro de un bloque
console.log(y);
