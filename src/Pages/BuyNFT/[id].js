import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import styled from "styled-components";
import { TEXT_BuyNFT } from "../../Config/Text";
import { customColor } from "../../Config/Color";
import TopNavbarAccount from "../../Layouts/TopNavbarAccount";
import FooterAccount from "../../Layouts/FooterAccount";
import BuyNFTContainer from "../../Components/BuyNFT/Container";

const BuyNFT = () => {
  const { id, step: stepParam } = useParams()
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let stepNumber = userInfo ? 2 : 1 // define init step, logged in = 2, guest = 1
  if (stepNumber > 2 && Number(stepParam) <= 4) stepNumber = Number(stepParam) // update step by url, with login checking
  
  const [step, setStep] = useState(stepNumber)
  const flagLanguage = false;
  const navigate = useNavigate();
  const textBuyNFT = !flagLanguage ? TEXT_BuyNFT.EN : TEXT_BuyNFT.CH;

  useEffect(() => {}, []);

  let component
  switch (step) {
    case 1:
      component = <>login</>
      break
    case 2:
      component = <>checkout</>
      break
    case 3:
      component = <>payment</>
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

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  background-color: ${customColor.backColor01};
`;

const StyledContainer = styled(Box)`
  padding-top:500px;
`

export default BuyNFT;
