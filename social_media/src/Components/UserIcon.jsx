import React from "react";
import "../Styles/UserIcon.css";

const UserIcon = ({ isOnline }) => {
  let status;
  if (isOnline) {
    status = <span class="status-dot" />;
  } else {
    status = "";
  }

  return (
    <>
      <div className="user-image-container">
        <img className="user-image" src="https://picsum.photos/100/100" />
        {status}
      </div>
    </>
  );
};

export default UserIcon;
