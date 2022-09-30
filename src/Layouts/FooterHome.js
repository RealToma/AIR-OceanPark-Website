import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { TEXT_Footer } from "../Config/Text";
import { customColor } from "../Config/Color";

const FooterHome = ({ setFlagTerms, setFlagScroll, flagLanguage }) => {
  const textFooter = !flagLanguage ? TEXT_Footer.EN : TEXT_Footer.CH;
  return (
    <StyledComponent>
      <PartMax01>
        {textFooter.tt01}

        {"\u00a0\u00a0"}
        <Box
          display={"flex"}
          onClick={() => {
            setFlagScroll(true);
            setFlagTerms(true);
          }}
          style={{ cursor: "pointer" }}
        >
          {textFooter.textTerm}
        </Box>
        {"\u00a0\u00a0|\u00a0\u00a0"}
        <Box display={"flex"} onClick={() => {}} style={{ cursor: "pointer" }}>
          {textFooter.textContactUs}
        </Box>
      </PartMax01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  background-color: ${customColor.mainColor02};
  color: ${customColor.mainColor01};
  justify-content: center;
`;

const PartMax01 = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 1440px;
  min-height: 175px;
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
    min-height: 120px;
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

export default FooterHome;
