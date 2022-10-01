import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import styled from "styled-components";
import { customColor } from "../../Config/Color";
import TopNavbarAccount from "../../Layouts/TopNavbarAccount";
import FooterAccount from "../../Layouts/FooterAccount";
import BuyNFTContainer from "../../Components/BuyNFT/Container";
import LoginPane from '../../Components/Login'
import Checkout from '../../Components/BuyNFT/Checkout'
import Payment from '../../Components/BuyNFT/Payment'
import Nft from '../../Components/BuyNFT/Nft'
import { TEXT_BuyNFTContent } from "../../Config/Text"

const StyledComponent = styled(Box)`
  width: 100%;
  min-height: 100vh;
  background-color: ${customColor.backColor01};
  position: relative;
  font-family: "Rubik";
`;

const BuyNFT = () => {
  const { step: stepParam } = useParams()
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let stepNumber = Number(stepParam || 1)
  if (!userInfo && stepNumber > 1) stepNumber = 1
  if (userInfo && stepNumber < 2) stepNumber = 2
  if (userInfo && stepParam > 4) stepNumber = 4
  
  const [step, setStep] = useState(stepNumber)
  const [nftData, setNftData] = useState()
  const [siteCopy, setSiteCopy] = useState(localStorage.getItem("flagLang") === '1' ? TEXT_BuyNFTContent.CH : TEXT_BuyNFTContent.EN)
  const [error, setError] = useState()
  const switchLangCallback = () => {
    setSiteCopy(localStorage.getItem("flagLang") === '1' ? TEXT_BuyNFTContent.CH : TEXT_BuyNFTContent.EN)
  }
  // const flagLanguage = false;
  // const navigate = useNavigate();

  // const siteCopy = TEXT_BuyNFTContent.CH

  useEffect(() => {}, []);

  let component
  switch (step) {
    case 1:
      component = <LoginPane setStep={setStep} redirectPath="/buyNFT" siteCopy={siteCopy} />
      break
    case 2:
      component = <Checkout setStep={setStep} setNftData={setNftData} siteCopy={siteCopy} setError={setError} />
      break
    case 3:
      component = <Payment setStep={setStep} nftData={nftData} siteCopy={siteCopy} error={error} />
      break
    case 4:
      component = <Nft nftData={nftData} siteCopy={siteCopy} />
      break
    default:
      component = <></>
  }

  return (
    <StyledComponent>
      <TopNavbarAccount switchLangCallback={switchLangCallback} />
      <BuyNFTContainer step={step} siteCopy={siteCopy}>
        <div>{component}</div>
      </BuyNFTContainer>
      <FooterAccount />
    </StyledComponent>
  );
};


export default BuyNFT;
