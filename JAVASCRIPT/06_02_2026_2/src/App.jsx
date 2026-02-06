import "./App.css";
import Avatar from "./components/Avatar";

const App = () => {
  return (
    <>
      <Avatar
        username="Peter Parker"
        imageURL="https://i.pinimg.com/736x/05/82/0f/05820ffbb40e4679a91891016b858a8b.jpg"
      />
      <Avatar username="Ciclope" size="sm" />
    </>
  );
};

export default App;
