import "./Avatar.css";

const Avatar = ({ username, imageURL, size = "md" }) => {
  if (imageURL) {
    return (
      <div className={`avatar ${size}`}>
        <img src={imageURL} alt={username + "avatar"} />
      </div>
    );
  } else {
    return (
      <div className={`avatar ${size}`}>
        <h3>{username[0]}</h3>
      </div>
    );
  }
};

export default Avatar;
