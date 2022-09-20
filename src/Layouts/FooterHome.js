import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { textFooter } from "../Config/Text";
import { customColor } from "../Config/Color";

const FooterHome = () => {
  return <StyledComponent>{textFooter.tt01.en}</StyledComponent>;
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 175px;
  background-color: ${customColor.mainColor02};
  color: ${customColor.mainColor01};
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
`;

export default FooterHome;
