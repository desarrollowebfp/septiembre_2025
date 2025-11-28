const batman = {
  nombre: "Batman",
  nombreReal: "Bruce Wayne",
  ciudad: "Gotham",
  amigos: [
    "Dick Grayson",
    "Tim Drake",
    "Jason Todd",
    "Alfred",
    "Barbara Gordon",
  ],
  padres: false,
};

//LEER y ACCEDER A UN OBJETO
console.log(batman.ciudad);
console.log(batman["ciudad"]);
console.log(batman.amigos[0]);

//MODIFICAR UN OBJETO
batman.ciudad = "Barcelona";
console.log(batman);
batman.amigos = 5;
console.log(batman);

//CREAR PROPIEDADES
batman.coche = "Batmovil";
console.log(batman);

//Borrar propiedades
delete batman.coche;
console.log(batman);
