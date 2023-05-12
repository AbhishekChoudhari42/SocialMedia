import React from "react";
import RightSideBar from "./RightSideBar";
import TopSideBar from "./TopSideBar";
import LeftSideBar from "./LeftSideBar";
import { CssBaseline, Box } from "@mui/material";
import PostsCard from "../PostsCard";

const LDrawerWidth = 240;
const RDrawerWidth = 350;
const TDrawerHeight = 90;

const Sidebars = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <LeftSideBar lbarWidth={LDrawerWidth} />

        <TopSideBar
          barHeight={TDrawerHeight}
          lBarWidth={LDrawerWidth}
          rBarWidth={RDrawerWidth}
        />

        <PostsCard
          lMargin={LDrawerWidth}
          rMargin={RDrawerWidth}
          tMargin={TDrawerHeight}
        />

        <RightSideBar barWidth={RDrawerWidth} />
      </Box>
    </>
  );
};

export default Sidebars;
