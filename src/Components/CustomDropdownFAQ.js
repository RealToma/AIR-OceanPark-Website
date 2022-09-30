import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { customColor } from "../Config/Color";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import Collapse from "@mui/material/Collapse";

import AOS from "aos";
import "aos/dist/aos.css";

const CustomDropdownFAQ = ({ content }) => {
  const [flagClicked, setFlagClicked] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <StyledComponent
      onClick={() => {
        setFlagClicked(!flagClicked);
      }}
      data-aos="fade-up"
      data-aos-offset="150"
      data-aos-duration="1000"
    >
      <PartText01>
        <TextTitle01>{content.title}</TextTitle01>
        <Collapse in={flagClicked}>
          <TextDescription01>{content.description}</TextDescription01>
        </Collapse>
      </PartText01>
      <PartIcon01>
        {!flagClicked ? (
          <ArrowDropDownRoundedIcon />
        ) : (
          <ArrowDropUpRoundedIcon />
        )}
      </PartIcon01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;

  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  background-color: ${customColor.mainColor02};
  border-radius: 11px;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  cursor: pointer;
  transition: 0.5s;

  transition: 0.5s;
  @media (max-width: 1024px) {
    padding: 20px;
    gap: 30px;
  }
  @media (max-width: 500px) {
    padding: 15px;
    gap: 10px;
  }
`;

const PartText01 = styled(Box)`
  display: flex;
  flex-direction: column;
  transition: 0.5s;
`;

const TextTitle01 = styled(Box)`
  display: flex;
  align-items: center;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  letter-spacing: -0.02em;
  color: ${customColor.mainColor01};

  transition: 0.5s;
  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 160%;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    line-height: 160%;
  }
`;

const TextDescription01 = styled(Box)`
  display: flex;
  margin-top: 20px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  letter-spacing: -0.02em;
  color: ${customColor.mainColor01};
  opacity: 0.8;

  transition: 0.5s;
  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 160%;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    line-height: 160%;
  }
`;

const PartIcon01 = styled(Box)`
  display: flex;
  right: 0px;
  top: 15px;
  position: absolute;
  color: ${customColor.mainColor01};
  > svg {
    font-size: 50px;
  }
`;

export default CustomDropdownFAQ;
