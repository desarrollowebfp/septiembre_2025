//Backticks

const firstname = "Peter";
const surname = "Parker";
const fullname = `${firstname} ${surname}`;

const template = `
<div>
    <p>Hola</p>
    <h3>Esto es un template string</h3>
</div>
`;

//Destructuring con arrays
const alumnos = ["Sandra", "Joan", "Manuel"];

/* const sandra = alumnos[0];
const joan = alumnos[1];
const manuel = alumnos[2]; */

// Con destructuring
const [sandra, joan, manuel] = alumnos;

console.log(joan);

//Destructuring con objetos
const batman = {
  name: "Batman",
  city: "Gotham",
  family: false,
};

/* const name = batman.name;
const city = batman.city;
const family = batman.family;
 */
//Con destructuring
const { name, city, family } = batman;

//Con un array de objetos
const albums = [
  {
    title: "Abbey Road",
    artist: "The Beatles",
    year: 1969,
    genre: "Rock",
  },
  {
    title: "Thriller",
    artist: "Michael Jackson",
    year: 1982,
    genre: "Pop",
  },
  {
    title: "Back in Black",
    artist: "AC/DC",
    year: 1980,
    genre: "Rock",
  },
  {
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    year: 1973,
    genre: "Progressive Rock",
  },
  {
    title: "Rumours",
    artist: "Fleetwood Mac",
    year: 1977,
    genre: "Rock",
  },
];

const [beatles, michael] = albums;

console.log(beatles);

//Spread Operator
const primerArray = ["Primero", "Segundo", "Tercero"];
const segundoArray = ["Cuarto", "Quinto", "Sexto"];

/* const nuevoArray = primerArray.concat(segundoArray);
console.log(nuevoArray) */

// Con spread operator
const nuevoArray = ["Cero", ...primerArray, ...segundoArray, "Septimo"];
console.log(nuevoArray);

let todoList = [];
todoList = [...todoList, "Limpiar la cocina"];
todoList = [...todoList, "Pasear al perro"];
todoList = [...todoList, "Estudiar ITP"];
console.log(todoList);

//Con objetos
const daredevil = {
  name: "Daredevil",
  realName: "Matt Murdock",
  city: "New York",
};

const daredevilMoreInfo = {
  zone: "Hell Kitchen",
  age: 38,
};

const newDaredevil = { ...daredevil, ...daredevilMoreInfo, job: "Lawyer" };
console.log(newDaredevil);

//Con funciones
const mostrarClase = (...alumnos) => {
  const clase = alumnos;
  console.log(clase);
};

mostrarClase("Alex", "Angel", "Jose", "Manuel");

const sumarNumerosIndefinidos = (...numeros) => {
  let suma = 0;

  for (const numero of numeros) {
    suma += numero;
  }

  console.log(suma);
};

sumarNumerosIndefinidos(1, 2, 3, 4, 5, 6, 10, 23, 76);

//CHORRADA
console.log([..."🧑🏻‍🌾"]);
console.log([..."👩🏽‍💻"]);
console.log([..."👩‍🚀"]);