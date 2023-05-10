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
          {/* <div className="post-uploader">
            <img src="https://picsum.photos/50/50" />
            <p>Raunak Pandey</p>
          </div> */}
          <img className="uploader-img" src="https://picsum.photos/50/50" />
          <img src="https://picsum.photos/1920/1080" />
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
