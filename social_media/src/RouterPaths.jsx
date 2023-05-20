import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Components/Login/SignIn";
import SignUp from "./Components/Login/SignUp";
import Sidebars from "./Components/Sidebars/Sidebars";
const RouterPaths = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Sidebars" element={<Sidebars />} />
      </Routes>
    </>
  );
};

export default RouterPaths;
