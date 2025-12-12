//Declarar
function saludar() {
  console.log("Hola");
}
//Ejecutar
saludar();
//Parámetro
function saludarConNombre(nombre) {
  console.log("Hola " + nombre);
}
//Argumento
saludarConNombre("Antonio");
saludarConNombre("Miriam");
saludarConNombre("Sara");
saludarConNombre("Pablo");
saludarConNombre("Manuel");

function calcularEdad(nombre, añoNacimiento, añoActual = 2025) {
  const edad = añoActual - añoNacimiento;
  console.log(nombre + " tiene " + edad + " años.");
}

calcularEdad("Antonio", 1990);
calcularEdad("Antonio", 1990, 2001);

function mostrarDatosUsuario(usuario) {
  console.log(
    usuario.nombre +
      " tiene " +
      usuario.edad +
      " años " +
      " y vive en " +
      usuario.ciudad +
      ", y tiene un DNI con numero " +
      usuario.dni
  );
}

antonio = {
  nombre: "Antonio",
  edad: 35,
  ciudad: "Madrid",
  dni: 758739823,
};

mostrarDatosUsuario(antonio);

function suma(numA, numB) {
  const total = numA + numB;
  return total;
}

const cincoMasSeis = suma(5, 6);
console.log(cincoMasSeis);

// ARROW FUNCTIONS
const suma = (numA, numB) => {
  const total = numA + numB;
  return total;
};
