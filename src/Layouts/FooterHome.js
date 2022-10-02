import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { TEXT_Footer } from "../Config/Text";
import { customColor } from "../Config/Color";
import { Link } from "react-router-dom";

const FooterHome = ({ flagLanguage }) => {
  const textFooter = !flagLanguage ? TEXT_Footer.EN : TEXT_Footer.CH;
  return (
    <StyledComponent>
      <PartMax01>
        <Box display={"flex"}>{textFooter.tt01}</Box>
        <TextBetween>{"|"}</TextBetween>

        <TermBox01>
          <Text01>
            <Link to="/tnc" style={{ color: "white", textDecoration: "none" }}>
              {textFooter.textTerm}
            </Link>
          </Text01>
          {"|"}
          <a
            href="mailto:gm@air-world.io"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Text01>{textFooter.textContactUs}</Text01>
          </a>
        </TermBox01>
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
  gap: 10px;
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
    flex-direction: column;
    gap: 10px;
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

const TermBox01 = styled(Box)`
  display: flex;
  gap: 10px;
`;

const Text01 = styled(Box)`
  display: flex;
  cursor: pointer;
  color: ${customColor.mainColor01};

  transition: 0.3s;
  &:hover {
    text-shadow: 0px 0px 10px ${customColor.mainColor01};
  }
  &:active {
    text-shadow: none;
  }
`;

const TextBetween = styled(Box)`
  display: flex;

  @media (max-width: 1024px) {
    display: none;
  }
`;
export default FooterHome;
