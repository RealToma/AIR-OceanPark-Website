import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { textFooter } from "../Config/Text";
import { customColor } from "../Config/Color";

const FooterAccount = () => {
  return <StyledComponent>{textFooter.tt01.en}</StyledComponent>;
};

const StyledComponent = styled(Box)`
  display: flex;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 50px;
  color: ${customColor.textColor03};
  opacity: 0.3;
  padding-left: 150px;
  padding-right: 150px;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: center;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  transition: 0.5s;
  @media (max-width: 900px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media (max-width: 700px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
    font-size: 12px;
  }
`;

export default FooterAccount;
