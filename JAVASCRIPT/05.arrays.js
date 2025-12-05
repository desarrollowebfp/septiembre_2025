const animales = [
  "Perro",
  "Gato",
  "Rinoceronte",
  "Murciélago",
  "Elefante",
  "Ornitorrinco",
];

//Calculamos la longitud de un array -> HUMANA ->
console.log(animales.length); // GO THE HELL

console.log(animales[animales.length - 1]);

animales[2] = "Cuervo de Nueva Caledonia";
console.log(animales);

// MÉTODOS DE ARRAYS

const peliculas = [
  "Jurassic Park", //0
  "El Retorno del Jedi", //1
  "The Thing", //2
  "The Evil Dead", //3
  "El Castillo Ambulante", //4
];

peliculas.push("El Viaje de Chihiro", "El ejercito de las tinieblas");
console.log(peliculas);

peliculas.pop();
console.log(peliculas);

peliculas.unshift("Dracula");
console.log(peliculas);

peliculas.shift();
console.log(peliculas);

peliculas.reverse();
console.log(peliculas);

peliculas.sort();
console.log(peliculas);

const numeros = [2, 3, 4, 5, 10, 20, 1, 10, 9, 12, 3, 35];
numeros.sort((a, b) => a - b);
console.log(numeros);

console.log(peliculas.indexOf("The Thing"));
console.log(peliculas);

console.log(peliculas.slice(2, 4));

console.log(peliculas);
//Opcional, puedo buscar una posición de pelicula para el primer argumento
const posicionJurassicPark = peliculas.indexOf("Jurassic Park");
peliculas.splice(3, 1, "Dracula");
console.log(peliculas);
