import { Routes, Route } from "react-router-dom";
import SignIn from "./authentication/SignIn";
import SignUp from "./authentication/SignUp";
import Home from "./pages/Home";

const RouterPaths = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
};

export default RouterPaths;
