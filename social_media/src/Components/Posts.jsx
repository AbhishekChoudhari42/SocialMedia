import React from "react";
import "../Styles/Posts.css";

const Posts = ({ lMargin, rMargin, tMargin }) => {
  return (
    <>
      <div
        className="post-container"
        style={{ margin: `${tMargin}px ${rMargin}px 0 ${lMargin}px` }}
      >
        <div className="post-card">
          <img src="https://picsum.photos/600/200" />
          <div className="post-buttons"></div>
        </div>
      </div>
    </>
  );
};

export default Posts;
