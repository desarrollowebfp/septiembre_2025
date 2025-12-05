for (let i = 0; i < 3; i++) {
  console.log("Hola", i);
}

// i = 0 -> TRUE -> ME LLEVO UNA -> Hola 0
// i = 1 -> TRUE -> ME LLEVO UNA -> Hola 1
// i = 2 -> TRUE -> ME LLEVO UNA -> Hola 2
// i = 3 -> FALSE -> SE ROMPE EL BUCLE -> SE TERMINA LA EJECUCION

const animales = [
  "Perro", //0
  "Gato", //1
  "Rinoceronte", //2
  "Murciélago", //3
  "Elefante", //4
  "Ornitorrinco", //5
];

for(let i = 0; i < animales.length; i++){
    const animal = animales[i];
    console.log(animal, i)
}