import React from "react";
import "../Styles/UserCard.css";
import UserIcon from "./UserIcon";

const UserCard = ({ name }) => {
  return (
    <>
      <div className="user-card">
        <UserIcon isOnline={true} />
        <p className="user-name">{name}</p>
      </div>
    </>
  );
};

export default UserCard;
