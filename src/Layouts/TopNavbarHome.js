import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { customColor } from "../Config/Color";
import { textNavbar } from "../Config/Text";
import imgLogo01 from "../Assets/image/logo01.png";
import imgLogo02 from "../Assets/image/logo02.png";
import imgBoat01 from "../Assets/image/boat01.png";
import imgBoat02 from "../Assets/image/boat02.png";
import { useNavigate } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const TopNavbarHome = () => {
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
      <PartLogo01>
        <img
          src={!flagScroll ? imgLogo01 : imgLogo02}
          width={"107px"}
          height={"51px"}
          alt={""}
        />
      </PartLogo01>
      <PartLink01>
        <Button01 flagscroll={flagScroll ? 1 : 0}>
          {textNavbar.tb01.en}
        </Button01>
        <PartMenuIcon01 flagscroll={flagScroll ? 1 : 0}>
          <MenuRoundedIcon sx={{ fontSize: "2.5rem" }} />
        </PartMenuIcon01>
        <PartMobile01>
          <EachLink01 flagscroll={flagScroll ? 1 : 0}>
            {textNavbar.tb02.en}
          </EachLink01>
          <EachLink01 flagscroll={flagScroll ? 1 : 0}>
            {textNavbar.tb03.en}
          </EachLink01>
          <EachLink01 flagscroll={flagScroll ? 1 : 0}>
            {textNavbar.tb04.en}
          </EachLink01>
          <EachLink01 flagscroll={flagScroll ? 1 : 0}>
            {textNavbar.tb05.en}
          </EachLink01>
          <Button02
            flagscroll={flagScroll ? 1 : 0}
            onClick={() => {
              setFlagScroll(false);
              navigate("/login");
            }}
          >
            {textNavbar.tb06.en}
          </Button02>
          <ImgBoat01>
            <img
              src={!flagScroll ? imgBoat01 : imgBoat02}
              width="100%"
              height="100%"
              alt=""
            />
          </ImgBoat01>

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
        </PartMobile01>
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
  transition: 0.3s;
  z-index: 90;
  background-color: ${({ flagscroll }) =>
    !flagscroll ? "" : customColor.mainColor02}; ;
`;
const PartLogo01 = styled(Box)`
  display: flex;
  width: 107px;
  height: 51px;
  justify-content: flex-start;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;
`;

const PartLink01 = styled(Box)`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
`;

const PartMobile01 = styled(Box)`
  display: flex;
  align-items: center;
  gap: 30px;
  transition: 0.5s;
  @media (max-width: 1400px) {
    display: none;
  }
`;

const Button01 = styled(Box)`
  display: flex;
  width: 90px;
  height: 34px;
  border-radius: 6px;
  color: ${({ flagscroll }) =>
    !flagscroll ? customColor.mainColor01 : customColor.mainColor02};
  background-color: ${({ flagscroll }) =>
    !flagscroll ? customColor.mainColor02 : customColor.mainColor01};
  justify-content: center;
  align-items: center;
  font-family: "Rubik";
  text-align: center;
  letter-spacing: -0.05em;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 76.5%;
  cursor: pointer;
`;

const PartMenuIcon01 = styled(Box)`
  display: none;
  align-items: center;
  justify-content: center;
  color: ${({ flagscroll }) =>
    !flagscroll ? customColor.mainColor02 : customColor.mainColor01};
  cursor: pointer;
  transition: 0.5s;
  @media (max-width: 1400px) {
    display: flex;
  }
`;

const EachLink01 = styled(Box)`
  display: flex;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 76.5%;
  /* or 12px */

  text-align: center;
  letter-spacing: -0.05em;
  color: ${({ flagscroll }) =>
    !flagscroll ? customColor.mainColor02 : customColor.mainColor01};
  cursor: pointer;
`;

const Button02 = styled(Box)`
  display: flex;
  width: 100px;
  height: 32px;
  border-radius: 6px;
  color: ${({ flagscroll }) =>
    !flagscroll ? customColor.mainColor02 : customColor.mainColor01};
  border: 1px solid
    ${({ flagscroll }) =>
      !flagscroll ? customColor.mainColor02 : customColor.mainColor01};
  justify-content: center;
  align-items: center;
  font-family: "Rubik";
  text-align: center;
  letter-spacing: -0.05em;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 76.5%;
  cursor: pointer;
`;

const ImgBoat01 = styled(Box)`
  display: flex;
  width: 34px;
  height: 34px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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

export default TopNavbarHome;
