const hacerDeberes = true;
const hacerLaCama = false;

if (hacerDeberes && hacerLaCama) {
  console.log("Te dejo jugar a videojuegos");
} else {
  console.log("Pues haber hecho lo que te dije");
}

const edad = 19;

if (edad >= 1 && edad < 18) {
  console.log("Eres menor de edad");
} else if (edad >= 18 && edad <= 32) {
  console.log("Eres adolescente");
} else if (edad > 32 && edad < 110) {
  console.log("Eres adulto");
} else {
  console.log("Me estás mintiendo");
}

//Switch
const curso = "DAM";

switch (curso) {
  case "DAM":
    console.log("Estudiamos desarrollo de Aplicaciones Multiplataforma");
    break;
  case "DAW":
    console.log("Estudiamos desarrollo de Aplicaciones Web");
    break;
  case "ASIR":
    console.log("Estudiamos administración de sistemas informaticos en red");
    break;
  case "SMR":
    console.log("Estudiamos sistemas microinformaticos y redes");
    break;
  default:
    console.log("No existe ese curso");
    break;
}

// Versión con condicional tradicional

if (curso === "DAM") {
  console.log("Estudiamos desarrollo de Aplicaciones Multiplataforma");
} else if (curso === "DAW") {
  console.log("Estudiamos desarrollo de Aplicaciones Web");
} else if (curso === "ASIR") {
  console.log("Estudiamos administración de sistemas informaticos en red");
} else if (curso === "SMR") {
  console.log("Estudiamos sistemas microinformaticos y redes");
} else {
  console.log("No existe ese curso");
}

// Ternarios
/* const hacerDeberes = true;
const hacerLaCama = false;

if (hacerDeberes && hacerLaCama) {
  console.log("Te dejo jugar a videojuegos");
} else {
  console.log("Pues haber hecho lo que te dije");
}
 */

hacerDeberes && hacerLaCama
  ? console.log("Te dejo jugar a videojuegos")
  : console.log("Pues haber hecho lo que te dije");
