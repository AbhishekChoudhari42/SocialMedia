import React from "react";
import { Typography, Drawer } from "@mui/material";
import UserCard from "../UserCard";

const onlineUsers = [
  "Raunak Pandey",
  "Abhishek Choudary",
  "Vedika Jamwal",
  "Rishi Thakur",
  "Sandeep Gupta",
  "Paren Ghosh",
  "Shubham Rai",
];

const RightSideBar = ({ barWidth }) => {
  return (
    <>
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: barWidth,
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
            return <UserCard name={user} key={user} />;
          })}
        </div>
      </Drawer>
    </>
  );
};

export default RightSideBar;
