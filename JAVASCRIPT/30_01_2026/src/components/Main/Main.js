import "./Main.css";
import tecnologias from "../../data/data";

const Main = () => {
  return `
    <main>
        <h2>Tecnologías Web</h2>
        <ul>
            ${tecnologias.map((tecnologia) => `
            <li>
                <h3>${tecnologia.title} - ${tecnologia.emoji}</h3>
                <h4>${tecnologia.version}</h4>
                <p>${tecnologia.description}</p>
            </li>
            `).join("")}
        </ul>
    </main>
    `;
};

export default Main;
