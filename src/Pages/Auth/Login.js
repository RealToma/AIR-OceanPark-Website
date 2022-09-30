import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { customColor } from "../../Config/Color";
import TopNavbarAccount from "../../Layouts/TopNavbarAccount";
import FooterAccount from "../../Layouts/FooterAccount";
import LoginPane from "../../Components/Login";

const Login = () => {
  return (
    <StyledComponent>
      <TopNavbarAccount />
      <LoginPane />
      <FooterAccount />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${customColor.backColor01};
`;

export default Login;
