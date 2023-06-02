import styled from "styled-components";
import { AiFillSetting, AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { BiImageAdd } from "react-icons/bi";
import { FaFacebookMessenger } from "react-icons/fa";
import { useState, useEffect } from "react";

const SideBarContainer = styled.div`
  height: 100dvh;
  width: 330px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem 1.5rem;
  border-right: 1px solid #333333;
  display: flex;
  flex-direction: column;
  color: white;

  @media (max-width: 1300px) {
    width: 80px;
  }

  @media (max-width: 766px) {
    display: none;
  }
`;

const Logo = styled.div`
  font-family: "logo-font";
  font-size: 1.8rem;
  margin: 1rem 0;
  padding-left: 0.5rem;
  transition: 0.5s;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  padding: 1rem 0.5rem;
  border-radius: 8px;

  &:last-child {
    color: salmon;
    margin-top: auto;
  }
  &:hover {
    background-color: #1a1a1a;
    cursor: pointer;
  }
  &:active {
    color: gray;
  }

  @media (max-width: 1300px) {
    padding: 0;
    margin-top: 3rem;
    border-radius: 0;
    &:hover {
      background-color: transparent;
    }
  }
`;

const ListItemText = styled.p`
  transition: 0.3s ease;
  @media (max-width: 1300px) {
    display: none;
  }
`;

const iconstyle = {
  height: "24px",
  width: "24px",
  marginRight: "10px",
  flexShrink: 0,
};

const Sidebar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  function updateScreenSize() {
    const isSmall = window.matchMedia("(max-width: 1300px)").matches;
    setIsSmallScreen(isSmall);
  }

  useEffect(() => {
    updateScreenSize(); // Call the function at the initial render
    window.addEventListener("resize", updateScreenSize); // Listen for screen size changes

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <>
      <SideBarContainer>
        <Logo>{isSmallScreen ? "M" : "Memestagram"}</Logo>
        <ListItem>
          <AiFillHome style={iconstyle} />
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem>
          <FaFacebookMessenger style={iconstyle} />
          <ListItemText>Chat</ListItemText>
        </ListItem>
        <ListItem>
          <CgProfile style={iconstyle} />
          <ListItemText>Profile</ListItemText>
        </ListItem>
        <ListItem>
          <BiImageAdd style={iconstyle} />
          <ListItemText>Create</ListItemText>
        </ListItem>
        <ListItem>
          <AiOutlineHeart style={iconstyle} />
          <ListItemText>Notifications</ListItemText>
        </ListItem>
        <ListItem>
          <AiFillSetting style={iconstyle} />
          <ListItemText>Settings</ListItemText>
        </ListItem>
        <ListItem>
          <FiLogOut style={{ ...iconstyle, color: "salmon" }} />
          <ListItemText>Logout</ListItemText>
        </ListItem>
      </SideBarContainer>
    </>
  );
};

export default Sidebar;
