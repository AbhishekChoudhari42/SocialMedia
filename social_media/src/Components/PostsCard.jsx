// eslint-disable-next-line no-unused-vars
import React from "react";
import "../Styles/PostsCard.css";
import Posts from "./Posts";

// eslint-disable-next-line react/prop-types
const PostCard = ({ lMargin, rMargin, tMargin }) => {
  return (
    <div
      className="post-container"
      style={{ margin: `${tMargin}px ${rMargin}px 0 ${lMargin}px` }}
    >
      <Posts />
    </div>
  );
};

export default PostCard;
