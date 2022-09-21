import React, { useEffect } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { customColor } from "../Config/Color";
import AOS from "aos";
import "aos/dist/aos.css";

const EachProgress = ({ date, image, text }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <StyledComponent data-aos="slide-up" data-aos-duration="1000">
      <PartLeft01>
        <PartDate01>{date}</PartDate01>
        <PartDot01></PartDot01>
      </PartLeft01>
      <PartRight01>
        {image ? (
          <PartImage01>
            <img src={image} width={"100%"} height={"100%"} alt="" />
          </PartImage01>
        ) : (
          <></>
        )}

        <PartText01>{text}</PartText01>
      </PartRight01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: flex-start;

  transition: 0.5s;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const PartLeft01 = styled(Box)`
  display: flex;
  flex: 1;
  gap: 20px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const PartRight01 = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
`;

const PartImage01 = styled(Box)`
  display: flex;
  width: 200px;
  height: 150px;
  margin-right: 20px;

  transition: 0.5s;
  @media (max-width: 500px) {
    width: 165px;
    height: 120px;
  }
  @media (max-width: 350px) {
    width: 150px;
    height: 110px;
  }
`;

const PartText01 = styled(Box)`
  display: flex;
  flex: 1;
  text-align: left;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${customColor.textColor01};
`;

const PartDate01 = styled(Box)`
  display: flex;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */
  letter-spacing: -0.02em;
  color: ${customColor.textColor01};
`;

const PartDot01 = styled(Box)`
  display: flex;
  align-self: center;
  flex: 1;
  border-top: 2px dashed ${customColor.textColor01};
  opacity: 0.2;
`;

export default EachProgress;
