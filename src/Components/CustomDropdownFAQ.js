import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { customColor } from "../Config/Color";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";


import AOS from "aos";
import "aos/dist/aos.css";

const CustomDropdownFAQ = ({ content }) => {
  const [flagClicked, setFlagClicked] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <StyledComponent
      onClick={() => {
        setFlagClicked(!flagClicked);
      }}
      data-aos="fade-up"
      data-aos-offset="150"
      data-aos-duration="500"
    >
      <PartText01>
        <TextTitle01>{content.title}</TextTitle01>
        {!flagClicked ? (
          <></>
        ) : (
          <TextDescription01>{content.description}</TextDescription01>
        )}
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
  width: 100%;
  padding: 30px 35px;
  box-sizing: border-box;
  background-color: ${customColor.mainColor02};
  border-radius: 11px;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
  cursor: pointer;
  transition: 0.5s;
`;

const PartText01 = styled(Box)`
  display: flex;
  flex-direction: column;
  transition: 0.5s;
`;

const TextTitle01 = styled(Box)`
  display: flex;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  letter-spacing: -0.02em;
  color: ${customColor.mainColor01};
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
`;

const PartIcon01 = styled(Box)`
  display: flex;
  color: ${customColor.mainColor01};
  > svg {
    font-size: 50px;
  }
`;

export default CustomDropdownFAQ;
