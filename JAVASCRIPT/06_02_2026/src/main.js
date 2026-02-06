import './style.css'
import Avatar from './components/Avatar'

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#app").innerHTML = `
    ${Avatar("Peter Parker", "https://i.pinimg.com/736x/05/82/0f/05820ffbb40e4679a91891016b858a8b.jpg")}
    ${Avatar("Matt Murdock", undefined, "lg")}
    ${Avatar("Ciclope", undefined, "sm")}
    ${Avatar("Wolverine", "https://sm.ign.com/t/ign_latam/screenshot/default/wolverine-jackman_smx7.1280.jpg", "sm")}
  `
})