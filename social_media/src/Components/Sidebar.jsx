import { React } from "react";
import RightSideBar from "./Sidebars/RightSideBar";
import TopSideBar from "./Sidebars/TopSideBar";
import LeftSideBar from "./Sidebars/LeftSideBar";
import { CssBaseline, Box } from "@mui/material";

const LDrawerWidth = 240;
const RDrawerWidth = 350;
const TDrawerHeight = 90;

const Sidebar = () => {
  return (
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
  );
};

export default Sidebar;
