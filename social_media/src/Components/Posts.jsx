import React from "react";
import "../Styles/Posts.css";
import UserIcon from "./UserIcon";
import { FaRegHeart, FaRegComment, FaEllipsisH } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

//creating a demo Posts file that will be replaced with a Json file in future.

const Posts = () => {
  let postsArray = [
    {
      author: "Raunak Pandey",
      title: "Check out this beautiful picture I just CLicked 📸",
      image: "https://picsum.photos/1920/1080",
      likeCount: 108,
      comments: [
        "Nice click 😄",
        "Awesome click bro 🔥",
        "Where is this 👀",
        "you can now call yourself a photographer 😂",
        "Which camera did you use to click this? 🤔",
      ],
      date: "May 08",
      time: "10:10AM",
    },
    {
      author: "Terry Medhurst",
      title: "His mother had always taught him",
      image: "https://picsum.photos/1920/1080",
      likeCount: 515,
      comments: [
        "Nice click 😄",
        "Awesome click bro 🔥",
        "Where is this 👀",
        "you can now call yourself a photographer 😂",
        "Which camera did you use to click this? 🤔",
      ],
      date: "May 08",
      time: "10:10AM",
    },
    {
      author: "Henrietta Higgins",
      title: "Check out this beautiful picture I just CLicked 📸",
      image: "https://picsum.photos/1920/1080",
      likeCount: 108,
      comments: [
        "Nice click 😄",
        "Awesome click bro 🔥",
        "Where is this 👀",
        "you can now call yourself a photographer 😂",
        "Which camera did you use to click this? 🤔",
      ],
      date: "May 08",
      time: "10:10AM",
    },
    {
      author: "Raunak Pandey",
      title: "Check out this beautiful picture I just CLicked 📸",
      image: "https://picsum.photos/1920/1080",
      likeCount: 108,
      comments: [
        "Nice click 😄",
        "Awesome click bro 🔥",
        "Where is this 👀",
        "you can now call yourself a photographer 😂",
        "Which camera did you use to click this? 🤔",
      ],
      date: "May 08",
      time: "10:10AM",
    },
    {
      author: "Raunak Pandey",
      title: "Check out this beautiful picture I just CLicked 📸",
      image: "https://picsum.photos/1920/1080",
      likeCount: 108,
      comments: [
        "Nice click 😄",
        "Awesome click bro 🔥",
        "Where is this 👀",
        "you can now call yourself a photographer 😂",
        "Which camera did you use to click this? 🤔",
      ],
      date: "May 08",
      time: "10:10AM",
    },
    {
      author: "Raunak Pandey",
      title: "Check out this beautiful picture I just CLicked 📸",
      image: "https://picsum.photos/1920/1080",
      likeCount: 108,
      comments: [
        "Nice click 😄",
        "Awesome click bro 🔥",
        "Where is this 👀",
        "you can now call yourself a photographer 😂",
        "Which camera did you use to click this? 🤔",
      ],
      date: "May 08",
      time: "10:10AM",
    },
    {
      author: "Raunak Pandey",
      title: "Check out this beautiful picture I just CLicked 📸",
      image: "https://picsum.photos/1920/1080",
      likeCount: 108,
      comments: [
        "Nice click 😄",
        "Awesome click bro 🔥",
        "Where is this 👀",
        "you can now call yourself a photographer 😂",
        "Which camera did you use to click this? 🤔",
      ],
      date: "May 08",
      time: "10:10AM",
    },
    {
      author: "Raunak Pandey",
      title: "Check out this beautiful picture I just CLicked 📸",
      image: "https://picsum.photos/1920/1080",
      likeCount: 108,
      comments: [
        "Nice click 😄",
        "Awesome click bro 🔥",
        "Where is this 👀",
        "you can now call yourself a photographer 😂",
        "Which camera did you use to click this? 🤔",
      ],
      date: "May 08",
      time: "10:10AM",
    },
  ];

  if (postsArray.length === 0) {
    return <h3>No Posts available!</h3>;
  } else {
    return postsArray.map((post) => {
      return (
        <div className="post-card">
          <div className="post-head">
            <UserIcon isOnline={false} />
            <div className="post-details">
              <div className="post-author">{post.author}</div>
              <div className="post-upload-date-time">{`${post.date} at ${post.time}`}</div>
            </div>
          </div>
          <div className="post-title">{post.title}</div>
          <img className="post-image" src={`${post.image}`} />
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
