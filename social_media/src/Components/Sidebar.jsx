import styled from "styled-components";
import { AiFillSetting, AiFillHome, AiOutlineHeart } from "react-icons/ai";
// import { BsFillChatFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { BiImageAdd } from "react-icons/bi";
import { FaFacebookMessenger } from "react-icons/fa";

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
`;

const Logo = styled.div`
  font-family: "logo-font";
  font-size: 1.8rem;
  margin: 1rem 0;
  padding-left: 0.5rem;
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
`;

const iconstyle = {
  height: "24px",
  width: "24px",
  marginRight: "10px",
};

const Sidebar = () => {
  return (
    <>
      <SideBarContainer>
        <Logo>Memestagram</Logo>
        <ListItem>
          <AiFillHome style={iconstyle} />
          Home
        </ListItem>
        <ListItem>
          <FaFacebookMessenger style={iconstyle} />
          Chat
        </ListItem>
        <ListItem>
          <CgProfile style={iconstyle} />
          Profile
        </ListItem>
        <ListItem>
          <BiImageAdd style={iconstyle} />
          Create
        </ListItem>
        <ListItem>
          <AiOutlineHeart style={iconstyle} />
          Notifications
        </ListItem>
        <ListItem>
          <AiFillSetting style={iconstyle} />
          Settings
        </ListItem>
        <ListItem>
          <FiLogOut style={{ ...iconstyle, color: "salmon" }} />
          Logout
        </ListItem>
      </SideBarContainer>
    </>
  );
};

export default Sidebar;
