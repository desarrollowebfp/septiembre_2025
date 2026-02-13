fetch("https://rickandmortyapi.com/api/caracter")
  .then((respuesta) => respuesta.json())
  .then((respuesta) => {
    for (const character of respuesta.results) {
      document.body.innerHTML += `
                <div>
                    <h2>${character.name}</h2>
                    <h3>${character.origin.name}</h3>
                    <img src="${character.image}" alt="${character.name}"/>
                </div>
            `;
    }
  })
  .catch((error) => {
    document.body.innerHTML = `<h2>Hubo un error con la base de datos</h2>`;
  });
