const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(lista) {
  let palabraMasLarga = "";

  for (const palabra of lista) {
    if (palabra.length > palabraMasLarga.length) {
      palabraMasLarga = palabra;
    }
  }

  console.log(palabraMasLarga);
}

findLongestWord(avengers);
findLongestWord(aldeanos)

//EXTRA
/* else if (palabra.length === palabraMasLarga.length) {
      console.log(palabra + " es igual a " + palabraMasLarga);
    } */
