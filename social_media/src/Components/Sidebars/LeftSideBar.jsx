import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { BsFillChatFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import {
  Typography,
  ListItemText,
  ListItemButton,
  ListItem,
  List,
  Toolbar,
  Drawer,
} from "@mui/material";
import { createGlobalStyle } from "styled-components";

const iconStyle = {
  height: "22px",
  width: "22px",
  marginRight: "10px",
};

const LogoFont = createGlobalStyle`
@font-face {
  font-family: 'InstagramFont';
  src: url('../../fonts/Fontspring-DEMO-blue_vinyl_bold_ps_ot.otf');
}
`;

const listItemStyle = {
  margin: "10px 0",
};

const LeftSideBar = ({ lbarWidth }) => {
  return (
    <>
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: lbarWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <LogoFont />
          <Typography
            variant="h5"
            sx={{ fontFamily: "InstagramFont" }}
            mt="40px"
            mb="15px"
          >
            Memestagram
          </Typography>
        </Toolbar>
        <List>
          <ListItem disablePadding sx={listItemStyle}>
            <ListItemButton>
              <AiFillHome style={iconStyle} />
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={listItemStyle}>
            <ListItemButton>
              <BsFillChatFill style={iconStyle} />
              <ListItemText primary="Chat" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={listItemStyle}>
            <ListItemButton>
              <CgProfile style={iconStyle} />
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={listItemStyle}>
            <ListItemButton>
              <AiFillSetting style={iconStyle} />
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
        <List style={{ marginTop: `auto` }}>
          <ListItem disablePadding>
            <ListItemButton>
              <FiLogOut style={{ ...iconStyle, color: "#DC143C" }} />
              <ListItemText sx={{ color: "#DC143C" }}>Log Out</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default LeftSideBar;
