import React from "react";
import "../Styles/Posts.css";
import UserIcon from "./UserIcon";
import { FaRegHeart, FaRegComment, FaEllipsisH } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

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
              <div className="post-author">Raunak Pandey</div>
              <div className="post-upload-date-time">May 08 at 10:10AM</div>
            </div>
          </div>
          <div className="post-title">
            Checkout this beautiful picture I clicked 📸
          </div>
          <img className="post-image" src="https://picsum.photos/1920/1080" />
          <div className="post-buttons">
            <FaRegHeart className="post-btn btn-like" />
            <FaRegComment className="post-btn btn-comment" />
            <FiSend className="post-btn btn-share" />
            <FaEllipsisH className="post-btn btn-more" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
