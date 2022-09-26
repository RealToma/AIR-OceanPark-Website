import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { textFooter } from "../Config/Text_";
import { customColor } from "../Config/Color";

const FooterAccount = () => {
  return (
    <StyledComponent>
      <PartMax01>{textFooter.tt01.en}</PartMax01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: fixed;
  bottom: 0px;
  width: 100%;
  justify-content: center;
`;

const PartMax01 = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 1440px;
  min-height: 50px;
  opacity: 0.3;
  padding-left: 120px;
  padding-right: 120px;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: center;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  transition: 0.5s;
  color: ${customColor.textColor03};

  @media (max-width: 1400px) {
    padding-left: 90px;
    padding-right: 90px;
  }
  @media (max-width: 1200px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 1024px) {
    padding-left: 40px;
    padding-right: 40px;
    min-height: 50px;
    justify-content: center;
  }
  @media (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
    font-size: 12px;
  }
  @media (max-width: 350px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export default FooterAccount;
