import React from "react";
import "../Styles/Posts.css";
import UserIcon from "./UserIcon";

const Posts = ({ lMargin, rMargin, tMargin }) => {
  return (
    <>
      <div
        className="post-container"
        style={{ margin: `${tMargin}px ${rMargin}px 0 ${lMargin}px` }}
      >
        <div className="post-card">
          <div className="post-head">
            <UserIcon isOnline={false} />
            <div className="post-details">
              <p className="post-author">Raunak Pandey</p>
              <p className="post-upload-date-time">May 08 at 10:10AM</p>
            </div>
          </div>
          <img className="post-image" src="https://picsum.photos/1920/1080" />
          <div className="post-buttons">
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
            <button>more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
