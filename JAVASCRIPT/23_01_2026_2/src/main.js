import "./style.css";
import animales from "./data";

document.querySelector("header").innerHTML = `
<h1>Animales</h1>
`;

document.querySelector("main").innerHTML = `
<ul>
  ${animales.map((animal) => `<li>${animal}</li>`).join("")}
</ul>
`;

document.querySelector("footer").innerHTML = `
<p>Animales 2025</p>
`;
