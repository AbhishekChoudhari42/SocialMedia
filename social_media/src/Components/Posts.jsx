import { React, useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Posts.css";
import UserIcon from "./UserIcon";
import { FaRegHeart, FaRegComment, FaEllipsisH } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

//creating a demo Posts file that will be replaced with a Json file in future.
const BASE_URL = "https://meme-api.com/gimme/ProgrammerHumor/50";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(BASE_URL).then((response) => {
      setPosts(response.data.memes);
    });
  }, []);

  if (posts.length === 0) {
    return <h3>No Memes available!</h3>;
  } else {
    return posts.map((meme) => {
      return (
        <div className="post-card">
          <div className="post-head">
            <UserIcon isOnline={false} />
            <div className="post-details">
              <div className="post-author">{meme.author}</div>
              <div className="post-upload-date-time">{`${
                12 / 15 / 2047
              } at ${77}`}</div>
            </div>
          </div>
          <div className="post-title">{meme.title}</div>
          <img className="post-image" src={`${meme.url}`} />
          <div className="post-buttons">
            <FaRegHeart className="post-btn btn-like" />
            <FaRegComment className="post-btn btn-comment" />
            <FiSend className="post-btn btn-share" />
            <FaEllipsisH className="post-btn btn-more" />
          </div>
        </div>
      );
    });
  }
};

export default Posts;
