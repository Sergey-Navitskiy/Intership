import "./UserCard.css";
import reactLogo from "../../assets/react.svg";

export const UserCard = ({ name, age, photo }) => {
  return (
    <div className="user-card">
      <p>Имя: {name}</p>
      <h2> Возраст: {age}</h2>
      <img src={photo ?? reactLogo} alt="photo" />
    </div>
  );
}; //семантика - не оч

export default UserCard;
