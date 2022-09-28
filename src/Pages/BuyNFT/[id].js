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
  let stepNumber = Number(stepParam)
  if (!userInfo && stepNumber > 1) stepNumber = 1
  if (userInfo && stepNumber < 2) stepNumber = 2
  if (userInfo && stepParam > 4) stepNumber = 4
  
  const [step, setStep] = useState(stepNumber)
  const [orderId, setOrderId] = useState(stepNumber)
  const [nftData, setNftData] = useState()
  // const flagLanguage = false;
  // const navigate = useNavigate();

  useEffect(() => {}, []);

  let component
  switch (step) {
    case 1:
      component = <LoginPane setStep={setStep} />
      break
    case 2:
      component = <Checkout setStep={setStep} setOrderId={setOrderId} />
      break
    case 3:
      component = <Payment setStep={setStep} orderId={orderId} />
      break
    case 4:
      component = <Nft nftData={nftData} />
      break
    default:
      component = <></>
  }

  return (
    <StyledComponent>
      <TopNavbarAccount />
      <BuyNFTContainer step={step}>
        <div>{component}</div>
      </BuyNFTContainer>
      <FooterAccount />
    </StyledComponent>
  );
};


export default BuyNFT;
