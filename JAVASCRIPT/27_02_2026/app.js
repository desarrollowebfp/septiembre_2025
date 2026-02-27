let lista = [];

document.querySelector("#themeBtn").addEventListener("click", () => {
  if (document.body.className === "dark") {
    document.body.className = "light";
    localStorage.setItem("theme", "light");
  } else {
    document.body.className = "dark";
    localStorage.setItem("theme", "dark");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme")) {
    document.body.className = localStorage.getItem("theme");
  }

  if (localStorage.getItem("lista")) {
    lista = JSON.parse(localStorage.getItem("lista"));
    renderList(JSON.parse(localStorage.getItem("lista")));
  }
});

//

document.querySelector("#listaBtn").addEventListener("click", () => {
  lista.push(Math.floor(Math.random() * 100));
  renderList(lista);
  localStorage.setItem("lista", JSON.stringify(lista));
});

const renderList = (lista) => {
  document.querySelector("#listadiv").innerHTML = "";
  for (const elemento of lista) {
    document.querySelector("#listadiv").innerHTML += `<p>${elemento}</p>`;
  }
};
