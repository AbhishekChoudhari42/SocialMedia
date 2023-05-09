import React from "react";
import "../Styles/UserCard.css";

const UserCard = ({ name }) => {
  return (
    <>
      <div className="user-card">
        <div className="user-image"></div>
        <h3 className="user-name">{name}</h3>
      </div>
    </>
  );
};

export default UserCard;
