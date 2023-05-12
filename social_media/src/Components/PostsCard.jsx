import React from "react";
import "../Styles/PostsCard.css";
import Posts from "./Posts";

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
