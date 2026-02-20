//Función que busca el tiempo en la API con la ciudad que queramos y limpia los datos
const getWeather = async (city) => {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=69902c6c30a342d6b7e163258241906&q=${city}&aqi=no`,
  );
  const data = await res.json();
  //Limpiamos los datos
  const weatherData = {
    ciudad: data.location.name,
    pais: data.location.country,
    temp: data.current.temp_c,
    icono: data.current.condition.icon,
    humedad: data.current.humidity,
    sensacion: data.current.windchill_c,
  };
  renderWeather(weatherData);
};

//Función que pinta los datos del tiempo en la interfaz
const renderWeather = (data) => {
  document.querySelector("main").innerHTML = `
    <h2>${data.ciudad} - ${data.pais}</h2>
    <h3>${data.temp}º</h3>
    <img src="${data.icono}" alt="Representación visual del tiempo"/>
    <div>
        <p>🌡️${data.sensacion}º</p>
        <p>💧${data.humedad}%</p>
    </div>
    `;
};

//Añadimos un evento click al botón para poder buscar otras ciudades en la app
document.querySelector("#searchBtn").addEventListener("click", () => {
  const valorCiudad = document.querySelector("#city").value;
  getWeather(valorCiudad);
  document.querySelector("#city").value = "";
});

//Añadimos un evento a la tecla Enter
document.querySelector("#city").addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    const valorCiudad = document.querySelector("#city").value;
    getWeather(valorCiudad);
    document.querySelector("#city").value = "";
  }
});

//Al arranque de la aplicación al renderizar el DOM por completo, se busca el tiempo predeterminado
document.addEventListener("DOMContentLoaded", () => {
   navigator.geolocation.getCurrentPosition((pos) => {
    const coord = `${pos.coords.latitude},${pos.coords.longitude}`
    if(coord){
        getWeather(coord)
    } else{
        getWeather("Tokyo")
    }
   })
});
