// CRUD - CREATE - READ - UPDATE - DELETE

//READ
const title = document.querySelector("#title");
console.log(title.textContent);

// READ 2
const parrafos = document.querySelectorAll("p");
console.log(parrafos[1]);

// UPDATE
title.textContent = "Esto es un cambio dinámico mediante JavaScript";

//DELETE
title.remove();

//CREATE
const parrafo = document.createElement("p");
parrafo.textContent = "Soy un parrafo";
parrafo.id = "parrafo_especial";

const imagen = document.createElement("img");
imagen.src =
  "https://image.api.playstation.com/vulcan/ap/rnd/202308/1519/95cce955dc59d04e2ea5ab624a823ace14e9c5f7e24dfb8f.png";
imagen.alt = "Fondo de Baldur's Gate 3";

const footer = document.querySelector("footer");
footer.appendChild(parrafo);
footer.appendChild(imagen);

//EJEMPLO
const albums2025 = [
  {
    title: "Hurry Up Tomorrow",
    artist: "The Weeknd",
    releaseYear: 2025,
    genre: "R&B / Pop",
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/placeholder_weeknd_2025.jpg",
  },
  {
    title: "I Said I Love You First",
    artist: "Selena Gomez & Benny Blanco",
    releaseYear: 2025,
    genre: "Pop",
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/placeholder_selena_2025.jpg",
  },
  {
    title: "Eternal Echoes",
    artist: "Coldplay",
    releaseYear: 2025,
    genre: "Alternative Rock",
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/placeholder_coldplay_2025.jpg",
  },
  {
    title: "Neon Skies",
    artist: "Dua Lipa",
    releaseYear: 2025,
    genre: "Pop / Dance",
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/placeholder_dualipa_2025.jpg",
  },
  {
    title: "Digital Soul",
    artist: "Daft Punk",
    releaseYear: 2025,
    genre: "Electronic",
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/placeholder_daftpunk_2025.jpg",
  },
  {
    title: "Midnight Stories",
    artist: "Taylor Swift",
    releaseYear: 2025,
    genre: "Pop / Folk",
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/placeholder_taylorswift_2025.jpg",
  },
];

for (const album of albums2025) {
  const div = document.createElement("div");
  div.innerHTML = `
    <h2>${album.title}</h2>
    <h3>${album.artist}</h3>
    <p>${album.releaseYear}</p>
    `;

  footer.appendChild(div);
}
