import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import styled from "styled-components";
import { TEXT_BuyNFT } from "../../Config/Text";
import { customColor } from "../../Config/Color";
import TopNavbarAccount from "../../Layouts/TopNavbarAccount";
import FooterAccount from "../../Layouts/FooterAccount";
import BuyNFTContainer from "../../Components/BuyNFT/Container";
import LoginPane from '../../Components/Login'
import Checkout from '../../Components/BuyNFT/Checkout'
import Payment from '../../Components/BuyNFT/Payment'

const StyledComponent = styled(Box)`
  width: 100%;
  min-height: 100vh;
  background-color: ${customColor.backColor01};
  position: relative;
  font-family: "Rubik";
`;

const BuyNFT = () => {
  const { id, step: stepParam } = useParams()
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let stepNumber = Number(stepParam)
  if (!userInfo && stepNumber > 1) stepNumber = 1
  if (userInfo && stepNumber < 2) stepNumber = 2
  if (userInfo && stepParam > 4) stepNumber = 4
  
  const [step, setStep] = useState(stepNumber)
  const flagLanguage = false;
  const navigate = useNavigate();
  const textBuyNFT = !flagLanguage ? TEXT_BuyNFT.EN : TEXT_BuyNFT.CH;

  useEffect(() => {}, []);

  let component
  switch (step) {
    case 1:
      component = <LoginPane />
      break
    case 2:
      component = <Checkout />
      break
    case 3:
      component = <Payment />
      break
    case 4:
      component = <>re</>
      break
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
