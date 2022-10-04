import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { customColor } from "./Config/Color";
import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import CreatePlayer from "./Pages/Auth/CreatePlayer";
import MyNFT from "./Pages/MyNFT";
import BuyNFT from "./Pages/BuyNFT/[id]";
import Tnc from "./Pages/Tnc";
import ScrollTop from "./Components/Common/ScrollTop";

const App = () => {
  return (
    <StyledComponent>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/createPlayer" element={<CreatePlayer />} />
          <Route
            path="/myNFT"
            element={localStorage.getItem("userToken") ? <MyNFT /> : <Home />}
          />
          <Route path="/buyNFT" element={<BuyNFT />} />
          <Route path="/tnc" element={<Tnc />} />
          <Route path="/buyNFT/:step" element={<BuyNFT />} />
        </Routes>
      </BrowserRouter>
      <NotificationContainer />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: ${customColor.mainColor01};

`;

export default App;
