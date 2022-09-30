import React, { useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { customColor } from "../../Config/Color";
import TopNavbarAccount from "../../Layouts/TopNavbarAccount";
import FooterAccount from "../../Layouts/FooterAccount";
import LoginPane from "../../Components/Login";
import { TEXT_Login } from "../../Config/Text";

const Login = () => {
  const [textLogin, setSiteCopy] = useState(
    localStorage.getItem("flagLang") === "1" ? TEXT_Login.CH : TEXT_Login.EN
  );
  const switchLangCallback = () => {
    setSiteCopy(
      localStorage.getItem("flagLang") === "1" ? TEXT_Login.CH : TEXT_Login.EN
    );
  };

  return (
    <StyledComponent>
      <TopNavbarAccount switchLangCallback={switchLangCallback} />
      <LoginPane textLogin={textLogin} />
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
