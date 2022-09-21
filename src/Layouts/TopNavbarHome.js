import React, { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import styled from "styled-components";
import { customColor } from "../Config/Color";
import { textNavbar } from "../Config/Text";
import imgLogo01 from "../Assets/image/logo01.png";
import imgLogo02 from "../Assets/image/logo02.png";
import imgBoat01 from "../Assets/image/boat01.png";
import imgBoat02 from "../Assets/image/boat02.png";
import imgMergeMark01 from "../Assets/image/markMerge01.png";
import { useNavigate } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const TopNavbarHome = () => {
  const navigate = useNavigate();
  const [flagScroll, setFlagScroll] = useState(false);
  const [flagLanguage, setFlagLanguage] = useState(false);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);

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
        <img
          src={!flagScroll ? imgLogo01 : imgLogo02}
          width={"100%"}
          height={"100%"}
          alt={""}
        />
      </PartLogo01>
      <PartLink01>
        <Button01 flagscroll={flagScroll ? 1 : 0}>
          {textNavbar.tb01.en}
          <PartComingSoon01 flagscroll={flagScroll ? 1 : 0}>
            <TextComingSoon01 flagscroll={flagScroll ? 1 : 0}>
              {textNavbar.textComingSoon.en}
            </TextComingSoon01>
          </PartComingSoon01>
        </Button01>
        <PartMenuIcon01
          flagscroll={flagScroll ? 1 : 0}
          onClick={() => {
            setOpen(true);
          }}
        >
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
          <ImgBoat01 flagscroll={flagScroll ? 1 : 0}>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        backdropcomponent={customBackdrop}
      >
        <ModalBox>
          <ModalPartUp01>
            <ModalHeader01>
              <HeaderLeft01>
                <CloseRoundedIcon
                  sx={{
                    fontSize: "2rem",
                  }}
                  onClick={() => {
                    setOpen(false);
                  }}
                />
              </HeaderLeft01>
              <HeaderRight01 onClick={() => {
                    navigate('/');
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    handleClose();
                  }}>
                <img
                  src={imgMergeMark01}
                  width={"100%"}
                  height={"100%"}
                  alt={""}
                />
              </HeaderRight01>
            </ModalHeader01>
            <ModalLinkPart01>
              <ModalEachLink01> {textNavbar.tb02.en}</ModalEachLink01>
              <ModalEachLink01> {textNavbar.tb03.en}</ModalEachLink01>
              <ModalEachLink01> {textNavbar.tb04.en}</ModalEachLink01>
              <ModalEachLink01> {textNavbar.tb05.en}</ModalEachLink01>
              <Button02
                flagscroll={flagScroll ? 1 : 1}
                onClick={() => {
                  navigate("/login");
                }}
              >
                {textNavbar.tb06.en}
              </Button02>
            </ModalLinkPart01>
          </ModalPartUp01>

          <ModalFooter01>
            <ImgBoat02>
              <img src={imgBoat02} width="100%" height="100%" alt="" />
            </ImgBoat02>

            <ButtonLanguage01 ml={"20px"}>
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
          </ModalFooter01>
        </ModalBox>
      </Modal>
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
  @media (max-width: 1400px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media (max-width: 1200px) {
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
  width: 107px;
  height: 51px;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  transition: 0.5s;
  @media (max-width: 500px) {
    width: 64px;
    height: 32px;
  }
`;

const PartLink01 = styled(Box)`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
  transition: 0.5s;

  @media (max-width: 1400px) {
    gap: 20px;
  }
  @media (max-width: 500px) {
    gap: 10px;
  }
`;

const PartMobile01 = styled(Box)`
  display: flex;
  align-items: center;
  gap: 30px;
  transition: 0.5s;
  @media (max-width: 1400px) {
    gap: 20px;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

const Button01 = styled(Box)`
  display: flex;
  position: relative;
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

  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px
      ${({ flagscroll }) =>
        !flagscroll ? customColor.mainColor02 : customColor.mainColor01};
  }
  &:active {
    box-shadow: none;
  }
`;

const PartComingSoon01 = styled(Box)`
  display: flex;
  position: absolute;
  width: 105px;
  height: 105px;
  border-radius: 100%;
  background-color: ${({ flagscroll }) =>
    !flagscroll ? customColor.backColor01 : customColor.mainColor02};
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  left: -90px;
  top: -50px;

  transition: 0.5s;
  @media (max-width: 500px) {
    left: -75px;
    top: -40px;
    width: 92px;
    height: 92px;
  }
`;

const TextComingSoon01 = styled(Box)`
  display: flex;
  width: 60%;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */
  text-align: center;
  color: ${({ flagscroll }) =>
    !flagscroll ? customColor.mainColor02 : customColor.mainColor01};
  opacity: 0.6;
  transform: rotate(-15deg);

  transition: 0.5s;
  @media (max-width: 500px) {
    width: 70%;
  }
`;

const PartMenuIcon01 = styled(Box)`
  display: none;
  align-items: center;
  justify-content: center;
  color: ${({ flagscroll }) =>
    !flagscroll ? customColor.mainColor02 : customColor.mainColor01};
  cursor: pointer;
  transition: 0.5s;
  @media (max-width: 1200px) {
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
  transition: 0.3s;
  &:hover {
    text-shadow: 0px 0px 10px ${({ flagscroll }) =>
        !flagscroll ? customColor.mainColor02 : customColor.mainColor01};
  }
  &:active {
    text-shadow: none;
  }
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

  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px
      ${({ flagscroll }) =>
        !flagscroll ? customColor.mainColor02 : customColor.mainColor01};
  }
  &:active {
    box-shadow: none;
  }
`;

const ImgBoat01 = styled(Box)`
  display: flex;
  width: 34px;
  height: 34px;
  justify-content: center;
  border-radius: 100%;
  align-items: center;
  cursor: pointer;

  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px
      ${({ flagscroll }) =>
        !flagscroll ? customColor.mainColor02 : customColor.mainColor01};
  }
  &:active {
    box-shadow: none;
  }
`;

const ImgBoat02 = styled(Box)`
  display: flex;
  width: 34px;
  height: 34px;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: ${customColor.mainColor02};
  cursor: pointer;

  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px
      ${({ flagscroll }) =>
        !flagscroll ? customColor.mainColor02 : customColor.mainColor01};
  }
  &:active {
    box-shadow: none;
  }

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

  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px ${customColor.mainColor01};
  }
  &:active {
    text-shadow: 0px 0px 10px ${customColor.mainColor01};
  }
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

const ModalBox = styled(Box)`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  backdrop-filter: blur(3px);

  padding: 50px;
  box-sizing: border-box;

  transition: box-shadow 300ms;
  transition: transform 505ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
  outline: none;
  animation: back_animation1 0.5s 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  @keyframes back_animation1 {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }

  @media (max-width: 500px) {
    transition: 0.5s !important;
    padding: 20px;
  }
`;

const ModalHeader01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: ${customColor.mainColor01};
`;
const HeaderLeft01 = styled(Box)`
  display: flex;
  cursor: pointer;
`;
const HeaderRight01 = styled(Box)`
  display: flex;
  width: 260px;
  height: 60px;
  transition: 0.5s;
  @media (max-width: 500px) {
    width: 220px;
    height: 50px;
  }
  cursor: pointer;
`;

const ModalLinkPart01 = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 25px;
  margin-top: 50px;
`;
const ModalEachLink01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */
  text-align: right;
  letter-spacing: -0.02em;
  color: ${customColor.mainColor01};

  cursor: pointer;
  transition: 0.3s;
  &:hover {
    text-shadow: 0px 0px 10px ${({ flagscroll }) =>
        !flagscroll ? customColor.mainColor02 : customColor.mainColor01};
  }
  &:active {
    text-shadow: none;
  }
`;

const ModalPartUp01 = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ModalFooter01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
`;

export const customBackdrop = styled(Box)`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: ${customColor.mainColor02};

  opacity: 0.8;
`;

export default TopNavbarHome;
