import { React, useState } from "react";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { BsFillChatFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import {
  Typography,
  ListItemText,
  ListItemButton,
  ListItem,
  List,
  Toolbar,
  CssBaseline,
  Drawer,
  Box,
} from "@mui/material";

const LDrawerWidth = 240;
const RDrawerWidth = 350;
const TDrawerHeight = 90;
const iconStyle = {
  height: "22px",
  width: "22px",
  marginRight: "10px",
};

const listItemStyle = {
  margin: "10px 0",
};

const onlineUsers = [
  "Raunak Pandey",
  "Abhishek Choudary",
  "Vedika Jamwal",
  "Rishi Thakur",
  "Sandeep Gupta",
  "Paren Ghosh",
  "Shubham Rai",
];

const Sidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          height: TDrawerHeight,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            height: TDrawerHeight,
            boxSizing: "border-box",
            marginLeft: `${LDrawerWidth}px`,
            marginRight: `${RDrawerWidth}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
        variant="permanent"
        anchor="top"
      >
        <SearchBar setSearchQuery={setSearchQuery} />
      </Drawer>
      <Drawer
        sx={{
          width: LDrawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: LDrawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="h5" fontWeight="bold" mt="40px" mb="15px">
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

      {/*custom components here*/}
      <Drawer
        sx={{
          width: RDrawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: RDrawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#f0f0f0",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          mt="40px"
          mb="15px"
          sx={{ paddingLeft: "1rem" }}
        >
          Online
        </Typography>
        <div>
          {onlineUsers.map((user) => {
            return <UserCard name={user} />;
          })}
        </div>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
