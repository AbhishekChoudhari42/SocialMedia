import React from "react";
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
  CssBaseline,
  Drawer,
  Box,
} from "@mui/material";

const drawerWidth = 240;

const iconStyle = {
  height: "22px",
  width: "22px",
  marginRight: "10px",
};

const listItemStyle = {
  margin: "10px 0",
};

const Sidebar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="h5" fontWeight="bold" mt="50px" mb="15px">
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
    </Box>
  );
};

export default Sidebar;
