import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { customColor } from "../Config/Color";
import imgLogo01 from "../Assets/image/logo01.png";
import imgLogo02 from "../Assets/image/logo02.png";
import imgMark01 from "../Assets/image/mark_AiR01.png";
import { useNavigate } from "react-router-dom";

const TopNavbarAccount = () => {
  const navigate = useNavigate();
  const [flagScroll, setFlagScroll] = useState(false);
  const [flagLanguage, setFlagLanguage] = useState(false);

  const handleScroll = () => {
    let position = window.pageYOffset;
    if (position > 80) {
      setFlagScroll(true);
    } else {
      setFlagScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <StyledComponent flagscroll={flagScroll ? 1 : 0}>
      <PartLogo01
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <LogoLeft01>
          <img
            src={!flagScroll ? imgLogo01 : imgLogo02}
            width={"100%"}
            height={"100%"}
            alt={""}
          />
        </LogoLeft01>
        <LogoRight01>
          <img
            src={!flagScroll ? imgMark01 : imgMark01}
            width={"100%"}
            height={"100%"}
            alt={""}
          />
        </LogoRight01>
      </PartLogo01>
      <PartLink01>
        <ButtonLanguage01>
          {!flagLanguage ? (
            <>
              <ButtonClicked01
                onClick={() => {
                  setFlagLanguage(false);
                }}
              >
                ENG
              </ButtonClicked01>
              <ButtonUnclicked01
                onClick={() => {
                  setFlagLanguage(true);
                }}
              >
                中文
              </ButtonUnclicked01>
            </>
          ) : (
            <>
              <ButtonUnclicked01
                onClick={() => {
                  setFlagLanguage(false);
                }}
              >
                ENG
              </ButtonUnclicked01>
              <ButtonClicked01
                onClick={() => {
                  setFlagLanguage(true);
                }}
              >
                中文
              </ButtonClicked01>
            </>
          )}
        </ButtonLanguage01>
      </PartLink01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 80px;
  position: fixed;
  padding-left: 150px;
  padding-right: 150px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  z-index: 90;
  background-color: ${({ flagscroll }) =>
    !flagscroll ? "" : customColor.mainColor02};
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
  }
`;
const PartLogo01 = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LogoLeft01 = styled(Box)`
  display: flex;
  align-items: center;
  width: 107px;
  height: 51px;
  transition: 0.5s;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 70px;
    height: 35px;
  }
`;

const LogoRight01 = styled(Box)`
  display: flex;
  align-items: center;
  width: 115px;
  height: 40px;
  margin-left: 20px;
  transition: 0.5s;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 80px;
    height: 25px;
  }
`;

const PartLink01 = styled(Box)`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
`;

const ButtonLanguage01 = styled(Box)`
  display: flex;
  width: 84px;
  height: 26px;
  justify-content: space-between;
  align-items: center;
  border-radius: 36px;
  background-color: ${customColor.mainColor01};
  padding: 3px;
  box-sizing: border-box;
`;

const ButtonClicked01 = styled(Box)`
  display: flex;
  width: 40px;
  height: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 36px;
  background-color: ${customColor.mainColor02};
  color: ${customColor.mainColor01};
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 76.5%;
  /* or 9px */
  text-align: center;
  letter-spacing: -0.05em;
  cursor: pointer;
`;

const ButtonUnclicked01 = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  margin-left: 4px;
  color: ${customColor.mainColor02};
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 76.5%;
  /* or 9px */
  text-align: center;
  letter-spacing: -0.05em;
  cursor: pointer;
`;

export default TopNavbarAccount;
