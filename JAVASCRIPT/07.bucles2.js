const numeros = [1, 2, 3, 4, 5, 6];
const numerosPorDos = [];

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
  numerosPorDos.push(numero * 2);
}

console.log(numerosPorDos);

// FOR OF
const numerosPorDosFor = [];

for (const numero of numeros) {
  numerosPorDosFor.push(numero * 2);
}

console.log(numerosPorDosFor);

//FOR EACH
const numerosPorDosForEach = [];

numeros.forEach((numero, i) => {
  numerosPorDosForEach.push(numero * 2);
});

console.log(numerosPorDosForEach);

//FOR IN

const batman = {
  name: "Batman",
  city: "Gotham",
  age: 56,
};

for (const clave in batman) {
  console.log("La clave: " + clave + " tiene el valor: " + batman[clave]);
}

//////////////////////

let x = 5;

while (x < 3) {
  console.log("El valor de i es: " + x);
  x++;
}

/////////

let z = 5;

do {
  console.log("El valor de z es " + z);
  z++;
} while (z < 3);
