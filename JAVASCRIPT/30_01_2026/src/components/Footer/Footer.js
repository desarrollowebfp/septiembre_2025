import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return `
    <footer>
        <p>Prometeo ${year}</p>
    </footer>
    `;
};

export default Footer