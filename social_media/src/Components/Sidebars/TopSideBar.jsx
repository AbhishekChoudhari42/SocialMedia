import React from "react";
import { Drawer } from "@mui/material";
import SearchBar from "../SearchBar";

const TopSideBar = ({ barHeight, lBarWidth, rBarWidth }) => {
  return (
    <>
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            height: barHeight,
            boxSizing: "border-box",
            marginLeft: `${lBarWidth}px`,
            marginRight: `${rBarWidth}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
        variant="permanent"
        anchor="top"
      >
        <SearchBar />
      </Drawer>
    </>
  );
};

export default TopSideBar;
