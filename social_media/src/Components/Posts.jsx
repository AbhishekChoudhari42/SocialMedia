import styled from "styled-components";
import UserIcon from "./UserIcon";
import {
  FaRegHeart,
  FaRegComment,
  FaEllipsisH,
  FaRegBookmark,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { useState, useEffect } from "react";
import axios from "axios";

//creating a demo Posts file that will be replaced with a Json file in future.
const BASE_URL = "https://meme-api.com/gimme/ProgrammerHumor/50";
//#region
const PostContainer = styled.div`
  display: flex;
  width: 600px;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 2rem;
  transition: 0.3s;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;

  @media (max-width: 700px) {
    padding: 0 0.3rem;
  }
`;

const PostAuthorNTime = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostAuthor = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

const PostTime = styled.p`
  font-size: 0.8rem;
  color: gray;
  margin-top: 0.2rem;
`;

const PostMenuBtn = styled.div`
  color: white;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  &:hover {
    cursor: pointer;
    color: gray;
  }
`;

const PostCaption = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 1rem;
  margin-bottom: 0.5rem;

  @media (max-width: 700px) {
    padding: 0 0.5rem;
  }
`;

const PostMedia = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 2px;
`;

const PostFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  gap: 1rem;

  @media (max-width: 700px) {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeartIcon = styled(FaRegHeart)`
  height: 25px;
  width: 25px;

  &:hover {
    color: gray;
    cursor: pointer;
  }
`;
const CommentIcon = styled(FaRegComment)`
  height: 25px;
  width: 25px;

  &:hover {
    color: gray;
    cursor: pointer;
  }
`;

const ShareIcon = styled(FiSend)`
  padding-top: 0.1rem;
  height: 25px;
  width: 25px;

  &:hover {
    color: gray;
    cursor: pointer;
  }
`;
const SaveIcon = styled(FaRegBookmark)`
  height: 25px;
  width: 25px;
  margin-left: auto;

  &:hover {
    color: gray;
    cursor: pointer;
  }
`;
const LikeCount = styled.p`
  font-size: 0.7rem;
  margin-left: 0.5rem;
`;
//#endregion

const Post = () => {
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
        <PostContainer key={meme.author + index}>
          <PostHeader>
            <UserIcon
              isOnline={false}
              isStory={false}
              height={40}
              width={40}
              mr={1}
            />
            <PostAuthorNTime>
              <PostAuthor>{meme.author}</PostAuthor>
              <PostTime>{getRandomDateAndTime()}</PostTime>
            </PostAuthorNTime>
            <PostMenuBtn>
              <FaEllipsisH />
            </PostMenuBtn>
          </PostHeader>
          <PostCaption>{meme.title}</PostCaption>
          <PostMedia src={`${meme.url}`} />
          <PostFooter>
            <IconWrapper>
              <HeartIcon />
              <LikeCount>{meme.ups}</LikeCount>
            </IconWrapper>
            <IconWrapper>
              <CommentIcon />
              <LikeCount>{8}</LikeCount>
            </IconWrapper>
            <IconWrapper>
              <ShareIcon />
            </IconWrapper>
            <SaveIcon />
          </PostFooter>
        </PostContainer>
      );
    });
  }
};

export default Post;
