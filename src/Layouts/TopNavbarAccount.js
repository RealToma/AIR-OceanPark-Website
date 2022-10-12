import React, { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import styled from "styled-components";
import { customColor } from "../Config/Color";
import imgLogo01 from "../Assets/image/logo01.png";
import imgLogo02 from "../Assets/image/logo02.png";
import imgBoat02 from "../Assets/image/boat02.png";
import imgMark01 from "../Assets/image/mark_AiR01.png";
import imgMark02 from "../Assets/image/mark01.png";
import { useNavigate } from "react-router-dom";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import imgMergeMark01 from "../Assets/image/markMerge01.png";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { TEXT_MyNFT } from "../Config/Text";

const TopNavbarAccount = (props) => {
  const storageFlagLanguage = localStorage.getItem("flagLang");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    switchLangCallback,
    publicKey,
    flagWalletConnected,
    handleOpenConnectWallet,
  } = props;
  const navigate = useNavigate();
  const [flagScroll, setFlagScroll] = useState(false);
  const [flagLanguage, setFlagLanguage] = useState(storageFlagLanguage === "1");

  const textMyNFT = !flagLanguage ? TEXT_MyNFT.EN : TEXT_MyNFT.CH;
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

  const switchFlagLanguage = (value) => {
    setFlagLanguage(value);
    localStorage.setItem("flagLang", value ? 1 : 0);
    if (switchLangCallback) switchLangCallback(value);
  };

  const shortWalletAddress = (address) => {
    return address.slice(0, 4) + "..." + address.slice(-4);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <StyledComponent flagscroll={flagScroll ? 1 : 0}>
      <PartMax01>
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
                    switchFlagLanguage(false);
                  }}
                >
                  ENG
                </ButtonClicked01>
                <ButtonUnclicked01
                  onClick={() => {
                    switchFlagLanguage(true);
                  }}
                >
                  中文
                </ButtonUnclicked01>
              </>
            ) : (
              <>
                <ButtonUnclicked01
                  onClick={() => {
                    switchFlagLanguage(false);
                  }}
                >
                  ENG
                </ButtonUnclicked01>
                <ButtonClicked01
                  onClick={() => {
                    switchFlagLanguage(true);
                  }}
                >
                  中文
                </ButtonClicked01>
              </>
            )}
          </ButtonLanguage01>
        </PartLink01>
        <PartMenuIcon01
          flagscroll={flagScroll ? 1 : 0}
          onClick={() => {
            setOpen(true);
          }}
        >
          <MenuRoundedIcon sx={{ fontSize: "2.5rem" }} />
        </PartMenuIcon01>
      </PartMax01>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropComponent={customBackdrop}
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
              <HeaderRight01
                onClick={() => {
                  navigate("/");
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  handleClose();
                }}
              >
                <img
                  src={imgMergeMark01}
                  width={"100%"}
                  height={"100%"}
                  alt={""}
                />
              </HeaderRight01>
            </ModalHeader01>
            {userInfo ? (
              <ModalAccountPart01>
                <ImgMark01>
                  <img src={imgMark02} width={"100%"} height={"100%"} alt="" />
                </ImgMark01>
                <TextUsername01>{userInfo ? userInfo.name : ""}</TextUsername01>
                <TextID01>{userInfo ? userInfo.displayID : ""}</TextID01>

                <ButtonLogout01
                  onClick={() => {
                    localStorage.removeItem("userInfo");
                    localStorage.removeItem("userToken");
                    localStorage.removeItem("token");
                    navigate("/login");
                    window.location.reload();
                  }}
                >
                  {textMyNFT.tLogout01}
                </ButtonLogout01>

                <PartBorder01></PartBorder01>
                <PartConnectWallet01
                  onClick={() => {
                    if (flagWalletConnected) {
                      return;
                    }
                    handleOpenConnectWallet();
                  }}
                >
                  <PartWalletIcon01>
                    <AccountBalanceWalletIcon sx={{ fontSize: "1.5rem" }} />
                  </PartWalletIcon01>
                  <PartWalletText01>
                    {!flagWalletConnected
                      ? textMyNFT.tConnectWallet01
                      : shortWalletAddress(publicKey)}
                  </PartWalletText01>
                </PartConnectWallet01>
              </ModalAccountPart01>
            ) : (
              <></>
            )}
          </ModalPartUp01>

          <ModalFooter01>
            <a
              href="https://opensea.io/collection/oceanparkhalloween22-air-citizen-v2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <ImgBoat02>
                <img src={imgBoat02} width="100%" height="100%" alt="" />
              </ImgBoat02>
            </a>
            <ButtonLanguage01 ml={"20px"}>
              {!flagLanguage ? (
                <>
                  <ButtonClicked01
                    onClick={() => {
                      console.log(flagLanguage);
                      setFlagLanguage(false);
                      switchFlagLanguage(false);
                    }}
                  >
                    ENG
                  </ButtonClicked01>
                  <ButtonUnclicked01
                    onClick={() => {
                      setFlagLanguage(true);
                      switchFlagLanguage(true);
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
                      switchFlagLanguage(false);
                    }}
                  >
                    ENG
                  </ButtonUnclicked01>
                  <ButtonClicked01
                    onClick={() => {
                      setFlagLanguage(true);
                      switchFlagLanguage(true);
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
  z-index: 200;
  display: flex;
  width: 100%;
  min-height: 80px;
  position: fixed;
  justify-content: center;
  background-color: ${({ flagscroll }) =>
    !flagscroll ? "" : customColor.mainColor02};
`;

const PartMax01 = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 1400px;

  z-index: 90;
  padding-left: 120px;
  padding-right: 120px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;

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
    min-height: 60px;
  }
  @media (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: 350px) {
    padding-left: 10px;
    padding-right: 10px;
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
  transition: 0.5s;
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

  transition: 0.5s;
  @media (max-width: 1024px) {
    display: none;
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
  @media (max-width: 1024px) {
    display: flex;
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

const ModalAccountPart01 = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
  margin-top: 50px;
`;

const TextUsername01 = styled(Box)`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  /* identical to box height */

  text-align: right;
  letter-spacing: -0.02em;
  color: ${customColor.mainColor01};
`;

const TextID01 = styled(Box)`
  display: flex;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;

  color: ${customColor.mainColor01};
`;

const ButtonLogout01 = styled(Box)`
  display: flex;
  border: 1px solid ${customColor.mainColor01};
  border-radius: 6px;
  width: 80px;
  height: 30px;
  align-items: center;
  justify-content: center;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  /* or 22px */

  text-align: center;
  color: ${customColor.mainColor01};
  cursor: pointer;
`;

const PartBorder01 = styled(Box)`
  display: flex;
  width: 100%;
  background-color: ${customColor.backColor01};
  opacity: 0.5;
  height: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const PartConnectWallet01 = styled(Box)`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
`;

const PartWalletIcon01 = styled(Box)`
  align-items: center;
  color: ${customColor.mainColor01};
`;

const PartWalletText01 = styled(Box)`
  /* web content 14B */

  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  color: ${customColor.mainColor01};
`;

const ImgMark01 = styled(Box)`
  display: flex;
  width: 55px;
  height: 40px;
`;

export const customBackdrop = styled(Box)`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: ${customColor.mainColor02};

  opacity: 0.8;
`;
export default TopNavbarAccount;
