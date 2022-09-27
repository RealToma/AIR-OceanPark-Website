import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import styled from "styled-components";
import { textBuyNFT } from "../Config/Text_";
import { TEXT_BuyNFT } from "../Config/Text";
import { customColor } from "../Config/Color";
import TopNavbarAccount from "../Layouts/TopNavbarAccount";
import FooterAccount from "../Layouts/FooterAccount";
import imgMark01 from "../Assets/image/mark01.png";
import imgLogo02 from "../Assets/image/logo02.png";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import EachList from "../Components/EachList";
import CustomBuyNFT from "../Components/CustomBuyNFT";


import imgNFT01 from "../Assets/image/nfts/OceanParkNFT_6.png";
// import imgNFT02 from "../Assets/image/nfts/OceanParkNFT_7.png"
// import imgNFT03 from "../Assets/image/nfts/OceanParkNFT_13 1.png"
// import imgNFT04 from "../Assets/image/nfts/OP nft_IT_A 1.png"

const BuyNFT = () => {
  const { id, step } = useParams()
  console.log(id, step)
  const flagLanguage = false;
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();
  const textBuyNFT = !flagLanguage ? TEXT_BuyNFT.EN : TEXT_BuyNFT.CH;

  useEffect(() => {}, []);

  return (
    <StyledComponent>
      <TopNavbarAccount />
      <PartContent01>
        <PartContent02>
          <PartSidebar01>
            <PartList01>
              <EachList image={imgLogo02} text={"My AiR CITIZEN (2)"} />
            </PartList01>
            <PartAccount01>
              <TextUsername01>{userInfo.name}</TextUsername01>
              <TextID01>{userInfo.displayID}</TextID01>
              <PartLogout01
                onClick={() => {
                  localStorage.removeItem("userInfo");
                  localStorage.removeItem("userToken");
                  localStorage.removeItem("token");
                  navigate("/");
                  window.location.reload();
                }}
              >
                <ButtonLogout01>{textBuyNFT.tLogout01}</ButtonLogout01>
                <PartMark01>
                  <img
                    src={imgMark01}
                    width={"100%"}
                    height={"100%"}
                    alt={""}
                  />
                </PartMark01>
              </PartLogout01>
              <PartBorder01></PartBorder01>
              <PartConnectWallet01>
                <PartWalletIcon01>
                  <AccountBalanceWalletIcon sx={{ fontSize: "1.5rem" }} />
                </PartWalletIcon01>
                <PartWalletText01>
                  {textBuyNFT.tConnectWallet01}
                </PartWalletText01>
              </PartConnectWallet01>
            </PartAccount01>
          </PartSidebar01>
          <PartDisplayNFT01>
            <PartDisplayNFT02>
              <CustomBuyNFT imageNFT={imgNFT01} backColor={"#F5DD86"} />
              <CustomBuyNFT imageNFT={imgNFT01} backColor={"#F5DD86"} />
              <CustomBuyNFT imageNFT={imgNFT01} backColor={"#F5DD86"} />
              <CustomBuyNFT imageNFT={imgNFT01} backColor={"#F5DD86"} />
              <CustomBuyNFT imageNFT={imgNFT01} backColor={"#F5DD86"} />
              <CustomBuyNFT imageNFT={imgNFT01} backColor={"#F5DD86"} />
              <CustomBuyNFT imageNFT={imgNFT01} backColor={"#F5DD86"} />
              <CustomBuyNFT imageNFT={imgNFT01} backColor={"#F5DD86"} />
              <CustomBuyNFT imageNFT={imgNFT01} backColor={"#F5DD86"} />
              <CustomBuyNFT imageNFT={imgNFT01} backColor={"#F5DD86"} />
              <CustomBuyNFT imageNFT={imgNFT01} backColor={"#F5DD86"} />
            </PartDisplayNFT02>
          </PartDisplayNFT01>
        </PartContent02>
      </PartContent01>
      <FooterAccount />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  background-color: ${customColor.backColor01};
`;

const PartContent01 = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  padding-left: 120px;
  padding-right: 120px;
  box-sizing: border-box;
  justify-content: center;
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

const PartContent02 = styled(Box)`
  display: flex;
  width: 100%;
  height: 60%;
  box-shadow: 4px 4px 21px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  background-color: ${customColor.mainColor01};
`;

const PartSidebar01 = styled(Box)`
  display: flex;
  min-width: 285px;
  background-color: ${customColor.mainColor02};
  border-radius: 16px 0px 0px 16px;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 30px;
  box-sizing: border-box;
  justify-content: space-between;
`;

const PartList01 = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const PartAccount01 = styled(Box)`
  display: flex;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  flex-direction: column;
  color: ${customColor.mainColor01};
`;
const TextUsername01 = styled(Box)`
  display: flex;
  width: 100%;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  /* identical to box height */
  letter-spacing: -0.02em;
`;

const TextID01 = styled(Box)`
  display: flex;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
`;

const PartDisplayNFT01 = styled(Box)`
  display: flex;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
`;

const PartDisplayNFT02 = styled(Box)`
  display: grid;
  overflow-y: auto;
  /* flex-wrap: wrap;
  justify-content: space-between; */
  width: 100%;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: auto;
  grid-row-gap: 40px;
  transition: 0.5s;
  @media (max-width: 1400px) {
    grid-template-columns: auto auto auto;
  }
`;

const PartLogout01 = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
const ButtonLogout01 = styled(Box)`
  display: flex;
  border: 1px solid ${customColor.mainColor01};
  border-radius: 4px;
  width: 60px;
  height: 30px;
  align-items: center;
  justify-content: center;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 160%;
  cursor: pointer;
`;
const PartMark01 = styled(Box)`
  display: flex;
  width: 55px;
  height: 40px;
`;
const PartBorder01 = styled(Box)`
  display: flex;
  width: 100%;
  background-color: ${customColor.backColor01};
  opacity: 0.5;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const PartConnectWallet01 = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  cursor: pointer;
`;

const PartWalletIcon01 = styled(Box)`
  align-items: center;
`;

const PartWalletText01 = styled(Box)`
  align-items: center;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  margin-left: 10px;
`;

export default BuyNFT;
