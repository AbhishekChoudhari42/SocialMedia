import React from "react";
import RightSideBar from "./RightSideBar";
import TopSideBar from "./TopSideBar";
import LeftSideBar from "./LeftSideBar";
import { CssBaseline, Box } from "@mui/material";

const LDrawerWidth = 240;
const RDrawerWidth = 350;
const TDrawerHeight = 90;

const Sidebars = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <TopSideBar
          barHeight={TDrawerHeight}
          lBarWidth={LDrawerWidth}
          rBarWidth={RDrawerWidth}
        />

        <LeftSideBar lbarWidth={LDrawerWidth} />

        <RightSideBar barWidth={RDrawerWidth} />
      </Box>
    </>
  );
};

export default Sidebars;
