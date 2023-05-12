// eslint-disable-next-line no-unused-vars
import React from "react";
import "../Styles/UserCard.css";
import UserIcon from "./UserIcon";

// eslint-disable-next-line react/prop-types
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
