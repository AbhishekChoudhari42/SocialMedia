// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
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

  const getRandomDateAndTime = () => {
    let day = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
    let month = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    let year = Math.floor(Math.random() * (23 - 0 + 1)) + 0;
    if (year < 10) {
      year = `0${year}`;
    }

    let date = `${day}/${month}/${year}`;

    let hour = Math.floor(Math.random() * (23 - 0 + 1)) + 0;
    if (hour < 10) {
      hour = `0${hour}`;
    }
    let minute = Math.floor(Math.random() * (59 - 0 + 1)) + 0;
    if (minute < 10) {
      minute = `0${minute}`;
    }

    let time = `${hour}:${minute}`;
    return `${date} at ${time}`;
  };

  if (posts.length === 0) {
    return <h3>No Memes available!</h3>;
  } else {
    return posts.map((meme, index) => {
      return (
        <div key={index} className="post-card">
          <div className="post-head">
            <UserIcon isOnline={false} />
            <div className="post-details">
              <div className="post-author">{meme.author}</div>
              <div className="post-upload-date-time">
                {getRandomDateAndTime()}
              </div>
            </div>
          </div>
          <div className="post-title">{meme.title}</div>
          <img className="post-image" src={`${meme.url}`} />
          <div className="post-buttons">
            <FaRegHeart className="post-btn btn-like" />
            <div className="post-like-count">{meme.ups}</div>
            <FaRegComment className="post-btn btn-comment" />
            <div className="post-comment-count">{8}</div>
            <FiSend className="post-btn btn-share" />
            <FaEllipsisH className="post-btn btn-more" />
          </div>
        </div>
      );
    });
  }
};

export default Posts;
