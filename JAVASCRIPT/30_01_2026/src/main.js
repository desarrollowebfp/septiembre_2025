import "./style.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

//Indico al documento, que cuando todo el contenido del DOM esté cargado, me inyecte este HTML
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#app").innerHTML = `
  ${Header()}
  ${Main()}
  ${Footer()}
`;
});
