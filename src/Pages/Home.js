import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { customColor } from "../Config/Color";
import {
  textHomeContent,
  textHomeUtility,
  textHomeProgress,
} from "../Config/Text";
import EachProgress from "../Components/EachProgress";
import imgPolygon01 from "../Assets/image/back_polygon01.png";
import imgMarkHallo01 from "../Assets/image/markHallo01_en.png";
import imgMark01 from "../Assets/image/mark_AiR01.png";
import imgMark02 from "../Assets/image/mark_AiR02.png";
import imgMark03 from "../Assets/image/mark_AiR03.png";
import imgMarkOcean01 from "../Assets/image/mark_Ocean01.png";
import imgBack01 from "../Assets/image/back01_en.png";
import imgBack02 from "../Assets/image/back02.png";
import imgLeaf02 from "../Assets/image/leaf03.png";
import imgClean01 from "../Assets/image/clean01.png";
import imgBottle01 from "../Assets/image/bottle01.png";
// import imgPumpkin01 from "../Assets/image/pumpkin01.png";
import imgKnife01 from "../Assets/image/knife01.png";
import imgDolphin01 from "../Assets/image/dolphin01.png";
import imgBat01 from "../Assets/image/bat01.png";
import imgCap01 from "../Assets/image/cap01.png";
import imgPen01 from "../Assets/image/pen01.png";
import imgRing01 from "../Assets/image/ring01.png";

// import imgTNFT01 from "../Assets/image/nfts/OceanParkNFT_6.png";
import imgTNFT02 from "../Assets/image/nfts/OP nft_IT_A 1.png";
// import imgTNFT03 from "../Assets/image/nfts/OceanParkNFT_13 1.png";
// import imgTNFT04 from "../Assets/image/nfts/OceanParkNFT_7.png";
import imgShadow01 from "../Assets/image/bottom_ellipse01.png";
import imgCNFT01 from "../Assets/image/nfts/op-nft_dolphin_0003_op-nft_pufferfish.png";
import imgCNFT02 from "../Assets/image/nfts/op-nft_dolphin_0000_op-nft_walrus.png";
import imgCNFT03 from "../Assets/image/nfts/op-nft_dolphin_0001_op-nft_orca.png";
import imgBack03 from "../Assets/image/back03.png";
import imgBack04 from "../Assets/image/back04.png";
import imgProgress01 from "../Assets/image/scene01.png";
import imgProgress02 from "../Assets/image/scene02.png";
import imgProgress03 from "../Assets/image/scene03.png";
import imgBox01 from "../Assets/image/box01.png";
import imgCover01 from "../Assets/image/cover01.png";

import iconGroup01 from "../Assets/image/icons/group 1.png";
import iconTicket01 from "../Assets/image/icons/ticket 1.png";
import iconDiscount01 from "../Assets/image/icons/discount 1.png";
import iconUser01 from "../Assets/image/icons/user 1.png";
import iconPeace01 from "../Assets/image/icons/peace 1.png";
import iconChest01 from "../Assets/image/icons/chest 1.png";
import CloseIcon from "@mui/icons-material/Close";
import InsertLinkRoundedIcon from "@mui/icons-material/InsertLinkRounded";

import TopNavbarHome from "../Layouts/TopNavbarHome";
import FooterHome from "../Layouts/FooterHome";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [flagRotate, setFlagRotate] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      let tempFlag;
      tempFlag = flagRotate;
      tempFlag++;
      if (tempFlag > 5) {
        setFlagRotate(0);
      } else {
        setFlagRotate(tempFlag++);
      }
    }, 3000);
  }, [flagRotate]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <StyledComponent>
      <TopNavbarHome />
      <PartTop01>
        <PartPolygon01>
          <img src={imgPolygon01} weight={"100%"} height={"100%"} alt={""} />
        </PartPolygon01>
        <PartLeaf02>
          <img src={imgLeaf02} width={"100%"} height={"100%"} alt={""} />
        </PartLeaf02>
        <PartMarkHallo01>
          <img src={imgMarkHallo01} width={"100%"} height={"100%"} alt={""} />
        </PartMarkHallo01>

        <PartMarkDescription01>
          <PartMark01>
            <img src={imgMark01} width={"100%"} height={"100%"} alt={""} />
          </PartMark01>
          <PartDescription01>{textHomeContent.tdes01.en}</PartDescription01>
        </PartMarkDescription01>

        <PartMarkGroup01>
          <PartMarkOcean01>
            <img src={imgMarkOcean01} width={"100%"} height={"100%"} alt="" />
          </PartMarkOcean01>
          <PartMutiple01>
            <CloseIcon
              size="small"
              sx={{ color: "#88836A", fontSize: "1.5rem" }}
            />
          </PartMutiple01>
          <PartMark02>
            <img src={imgMark02} width={"100%"} height={"100%"} alt="" />
          </PartMark02>
        </PartMarkGroup01>

        <PartNFTRotate01>
          <PartEachNFT flagrotate={(flagRotate + 0) % 6}>
            <img src={imgTNFT02} width={"100%"} height={"100%"} alt="" />
          </PartEachNFT>
          <PartEachNFT flagrotate={(flagRotate + 1) % 6}>
            <img src={imgTNFT02} width={"100%"} height={"100%"} alt="" />

            {/* <PartShadow01>
              <img src={imgShadow01} width={"100%"} height={"100%"} alt="" />
            </PartShadow01> */}
          </PartEachNFT>
          <PartEachNFT flagrotate={(flagRotate + 2) % 6}>
            <img src={imgTNFT02} width={"100%"} height={"100%"} alt="" />
          </PartEachNFT>
          <PartEachNFT flagrotate={(flagRotate + 3) % 6}>
            <img src={imgTNFT02} width={"100%"} height={"100%"} alt="" />
          </PartEachNFT>
          <PartEachNFT flagrotate={(flagRotate + 4) % 6}>
            <img src={imgTNFT02} width={"100%"} height={"100%"} alt="" />
          </PartEachNFT>
          <PartEachNFT flagrotate={(flagRotate + 5) % 6}>
            <img src={imgTNFT02} width={"100%"} height={"100%"} alt="" />
          </PartEachNFT>
        </PartNFTRotate01>
      </PartTop01>
      <PartContent01>
        <PartOcean01>
          <PartOceanLeft01 data-aos="fade-up" data-aos-duration="1000">
            <img src={imgBack01} width={"100%"} alt="" />
          </PartOceanLeft01>
          <PartOceanRight01 data-aos="fade-up" data-aos-duration="1000">
            <TextTitle01>{textHomeContent.tt01.en}</TextTitle01>
            <TextContent01>{textHomeContent.tc01.en}</TextContent01>
            <ButtonVisitLink01>
              <InsertLinkRoundedIcon />
              {"\u00a0"}
              {"\u00a0"}
              {textHomeContent.textVisitSite.en}
            </ButtonVisitLink01>
          </PartOceanRight01>
        </PartOcean01>
        <PartOcean01>
          <PartOceanLeft01 data-aos="fade-up" data-aos-duration="1000">
            <TextTitle01>{textHomeContent.tt02.en}</TextTitle01>
            <TextContent01>{textHomeContent.tc02.en}</TextContent01>
          </PartOceanLeft01>
          <PartOceanRight01 data-aos="fade-up" data-aos-duration="1000">
            <img src={imgBack02} width={"100%"} alt="" />
            <PartNFT01>
              <img src={imgCNFT01} width={"100%"} height={"100%"} alt="" />
            </PartNFT01>
            <PartNFT02>
              <img src={imgCNFT02} width={"100%"} height={"100%"} alt="" />
            </PartNFT02>
            <PartNFT03>
              <img src={imgCNFT03} width={"100%"} height={"100%"} alt="" />
            </PartNFT03>
          </PartOceanRight01>
        </PartOcean01>
        <PartBottle01
          data-aos="fade-right"
          data-aos-offset="150"
          data-aos-duration="500"
        >
          <img
            src={imgBottle01}
            width={"100%"}
            style={{ transform: "rotate(0deg)", filter: "blur(1.5px)" }}
            alt=""
          />
        </PartBottle01>
        <PartClean01
          data-aos="fade-right"
          data-aos-offset="150"
          data-aos-duration="500"
        >
          <img src={imgClean01} width={"100%"} alt="" />
        </PartClean01>
        <PartBat01
          data-aos="fade-left"
          data-aos-offset="150"
          data-aos-duration="500"
        >
          <img src={imgBat01} width={"100%"} alt="" />
        </PartBat01>
      </PartContent01>
      <PartContent02>
        <PartContentUp01>
          <TextTitle01 data-aos="fade-up" data-aos-duration="800">
            {textHomeContent.tt01.en}
          </TextTitle01>
          <PartOceanLeft01 data-aos="fade-up" data-aos-duration="800">
            <img src={imgBack01} width={"100%"} alt="" />
          </PartOceanLeft01>
          <TextContent01 data-aos="fade-up" data-aos-duration="800">
            {textHomeContent.tc01.en}
          </TextContent01>
          <ButtonVisitLink01 data-aos="fade-up" data-aos-duration="800">
            <InsertLinkRoundedIcon />
            {"\u00a0"}
            {"\u00a0"}
            {textHomeContent.textVisitSite.en}
          </ButtonVisitLink01>
        </PartContentUp01>
        <PartContentDown01>
          <TextTitle01 data-aos="fade-up" data-aos-duration="800">
            {textHomeContent.tt02.en}
          </TextTitle01>
          <PartOceanRight01 data-aos="fade-up" data-aos-duration="800">
            <img src={imgBack02} width={"100%"} alt="" />
            <PartNFT01>
              <img src={imgCNFT01} width={"100%"} height={"100%"} alt="" />
            </PartNFT01>
            <PartNFT02>
              <img src={imgCNFT02} width={"100%"} height={"100%"} alt="" />
            </PartNFT02>
            <PartNFT03>
              <img src={imgCNFT03} width={"100%"} height={"100%"} alt="" />
            </PartNFT03>
          </PartOceanRight01>
          <TextContent01 mt={"50px"} data-aos="fade-up" data-aos-duration="800">
            {textHomeContent.tc02.en}
          </TextContent01>
        </PartContentDown01>
      </PartContent02>
      <PartDetails01>
        <PartMarkGroup02
          data-aos="slide-up"
          data-aos-offset="150"
          data-aos-duration="500"
        >
          <PartMarkOcean02>
            <img src={imgMarkOcean01} width={"100%"} height={"100%"} alt="" />
          </PartMarkOcean02>
          <PartMutiple02>
            <CloseIcon
              size="small"
              sx={{ color: "white", fontSize: "2.5rem" }}
            />
          </PartMutiple02>
          <PartMark03>
            <img src={imgMark03} width={"100%"} height={"100%"} alt="" />
          </PartMark03>
        </PartMarkGroup02>
        <PartDetailsText01
          data-aos="slide-up"
          data-aos-offset="150"
          data-aos-duration="1000"
        >
          {textHomeContent.tc03.en}
        </PartDetailsText01>
        <PartBox01
          data-aos="fade-right"
          data-aos-offset="150"
          data-aos-duration="500"
        >
          <img src={imgBox01} width={"100%"} alt="" />
        </PartBox01>
        <PartCover01
          data-aos="fade-left"
          data-aos-offset="150"
          data-aos-duration="500"
        >
          <img src={imgCover01} width={"100%"} alt="" />
        </PartCover01>
      </PartDetails01>
      <PartUtility01>
        <TextTitle01
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-duration="500"
        >
          {textHomeUtility.tt01.en}
        </TextTitle01>
        <TextDescription01
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-duration="500"
        >
          {textHomeUtility.tdes01.en}
        </TextDescription01>
        <PartGrid01>
          <GridEach01
            data-aos="flip-down"
            data-aos-offset="250"
            data-aos-duration="1000"
          >
            <PartIcon01>
              <img src={iconGroup01} width={"100%"} height={"100%"} alt="" />
            </PartIcon01>
            <TextDescription02>{textHomeUtility.tc01.en}</TextDescription02>
          </GridEach01>
          <GridEach01
            data-aos="flip-up"
            data-aos-offset="250"
            data-aos-duration="1000"
          >
            <PartIcon01>
              <img src={iconTicket01} width={"100%"} height={"100%"} alt="" />
            </PartIcon01>
            <TextDescription02>{textHomeUtility.tc02.en}</TextDescription02>
          </GridEach01>
          <GridEach01
            data-aos="flip-down"
            data-aos-offset="250"
            data-aos-duration="1000"
          >
            <PartIcon01>
              <img src={iconDiscount01} width={"100%"} height={"100%"} alt="" />
            </PartIcon01>
            <TextDescription02>{textHomeUtility.tc03.en}</TextDescription02>
          </GridEach01>
          <GridEach01
            data-aos="flip-up"
            data-aos-offset="250"
            data-aos-duration="1000"
          >
            <PartIcon01>
              <img src={iconUser01} width={"100%"} height={"100%"} alt="" />
            </PartIcon01>
            <TextDescription02>{textHomeUtility.tc04.en}</TextDescription02>
          </GridEach01>
          <GridEach01
            data-aos="flip-down"
            data-aos-offset="250"
            data-aos-duration="1000"
          >
            <PartIcon01>
              <img src={iconPeace01} width={"100%"} height={"100%"} alt="" />
            </PartIcon01>
            <TextDescription02>{textHomeUtility.tc05.en}</TextDescription02>
          </GridEach01>
          <GridEach01
            data-aos="flip-up"
            data-aos-offset="250"
            data-aos-duration="1000"
          >
            <PartIcon01>
              <img src={iconChest01} width={"100%"} height={"100%"} alt="" />
            </PartIcon01>
            <TextDescription02>{textHomeUtility.tc06.en}</TextDescription02>
          </GridEach01>
        </PartGrid01>
        <PartDolphin01
          data-aos="fade-left"
          data-aos-offset="150"
          data-aos-duration="500"
        >
          <img src={imgDolphin01} width={"100%"} alt="" />
        </PartDolphin01>
      </PartUtility01>
      <PartProgress01>
        <TextTitle01
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-duration="500"
        >
          {textHomeProgress.tt01.en}
        </TextTitle01>
        <PartRoadmap01>
          <EachProgress
            date={textHomeProgress.tdate01.en}
            image={imgProgress01}
            text={textHomeProgress.tdes01.en}
          />
          <EachProgress
            date={textHomeProgress.tdate02.en}
            image={imgProgress02}
            text={textHomeProgress.tdes02.en}
          />
          <EachProgress
            date={textHomeProgress.tdate03.en}
            image={imgProgress03}
            text={textHomeProgress.tdes03.en}
          />
          <EachProgress
            date={textHomeProgress.tdate04.en}
            image=""
            text={textHomeProgress.tdes04.en}
          />
          <EachProgress
            date={textHomeProgress.tdate05.en}
            image=""
            text={textHomeProgress.tdes05.en}
          />
          <EachProgress
            date={textHomeProgress.tdate06.en}
            image=""
            text={textHomeProgress.tdes06.en}
          />
          <EachProgress
            date={textHomeProgress.tdate07.en}
            image=""
            text={textHomeProgress.tdes07.en}
          />
        </PartRoadmap01>
        <PartPen01
          data-aos="fade-right"
          data-aos-offset="150"
          data-aos-duration="500"
        >
          <img src={imgPen01} width={"100%"} height={"100%"} alt="" />
        </PartPen01>
        <PartCap01
          data-aos="fade-left"
          data-aos-offset="150"
          data-aos-duration="500"
        >
          <img src={imgCap01} width={"100%"} height={"100%"} alt="" />
        </PartCap01>
        <PartRing01
          data-aos="fade-right"
          data-aos-offset="150"
          data-aos-duration="500"
        >
          <img src={imgRing01} width={"100%"} alt="" />
        </PartRing01>
        <PartKnife01
          data-aos="fade-left"
          data-aos-offset="150"
          data-aos-duration="500"
        >
          <img src={imgKnife01} width={"100%"} alt="" />
        </PartKnife01>
      </PartProgress01>
      <FooterHome />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow-x: hidden;
`;

const PartTop01 = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  height: 800px;
  padding-left: 150px;
  padding-right: 150px;
  box-sizing: border-box;
  background-color: ${customColor.backColor01};
  z-index: 80;
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

const PartNFTRotate01 = styled(Box)`
  display: flex;
  width: 80%;
  position: absolute;
  left: 0px;
  bottom: 20px;
  transform-style: preserve-3d;

  transition: 0.5s;
  @media (max-width: 900px) {
    bottom: 200px;
  }
  @media (max-width: 500px) {
    left: -50px;
    bottom: 280px;
  }
`;

const PartEachNFT = styled(Box)`
  display: flex;
  position: absolute;
  width: 530px;
  height: 530px;
  transform: ${({ flagrotate }) =>
    flagrotate === 0
      ? "scale(0.6) translateZ(-3px) translateX(-30%)"
      : flagrotate === 1
      ? "scale(0.75) translateZ(-2px) translateX(-30%)"
      : flagrotate === 2
      ? "scale(0.9) translateZ(-1px) translateX(-30%)"
      : flagrotate === 3
      ? "scale(1.1) translateZ(0px) translateX(-30%)"
      : flagrotate === 4
      ? "scale(0) translateZ(1px) translateX(-30%)"
      : flagrotate === 5
      ? "scale(0) translateZ(-4px) translateX(-30%)"
      : "none"};
  transform-style: preserve-3d;
  opacity: 1;
  transition: 1s;
  left: ${({ flagrotate }) =>
    flagrotate === 0
      ? "750px"
      : flagrotate === 1
      ? "600px"
      : flagrotate === 2
      ? "400px"
      : flagrotate === 3
      ? "0px"
      : flagrotate === 4
      ? "-1000px"
      : flagrotate === 5
      ? "800px"
      : "none"};
  bottom: 0px;
  filter: ${({ flagrotate }) =>
    flagrotate === 0
      ? "blur(7px)"
      : flagrotate === 1
      ? "blur(5px)"
      : flagrotate === 2
      ? "blur(0px)"
      : flagrotate === 3
      ? "blur(3px)"
      : flagrotate === 4
      ? "blur(3px)"
      : flagrotate === 5
      ? "blur(3px)"
      : "none"};

  @media (max-width: 900px) {
    width: 400px;
    height: 400px;
    left: ${({ flagrotate }) =>
      flagrotate === 0
        ? "550px"
        : flagrotate === 1
        ? "450px"
        : flagrotate === 2
        ? "250px"
        : flagrotate === 3
        ? "0px"
        : flagrotate === 4
        ? "-1000px"
        : flagrotate === 5
        ? "550px"
        : "none"};
  }
  @media (max-width: 500px) {
    width: 330px;
    height: 330px;
    left: ${({ flagrotate }) =>
      flagrotate === 0
        ? "400px"
        : flagrotate === 1
        ? "300px"
        : flagrotate === 2
        ? "180px"
        : flagrotate === 3
        ? "0px"
        : flagrotate === 4
        ? "-1000px"
        : flagrotate === 5
        ? "400px"
        : "none"};
  }
`;

// const PartShadow01 = styled(Box)`
//   display: flex;
//   position: absolute;
//   width: 335px;
//   height: 50px;
//   bottom: 0px;
//   left: 50%;
//   transform: translateX(-50%);
// `;

const PartPolygon01 = styled(Box)`
  display: flex;
  position: absolute;
  width: 650px;
  height: 700px;
  top: -100px;
  left: 100px;
  filter: blur(5px);
  z-index: 81;

  transition: 0.5s;
  @media (max-width: 900px) {
    width: 500px;
    height: 540px;
    left: 50px;
  }
  @media (max-width: 500px) {
    width: 400px;
    height: 430px;
    left: -50px;
  }
`;

const PartLeaf02 = styled(Box)`
  display: flex;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 500px;
  height: 300px;
  z-index: 82;

  transition: 0.5s;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const PartMarkHallo01 = styled(Box)`
  display: flex;
  position: absolute;
  top: 100px;
  right: 150px;
  width: 130px;
  height: 120px;
  z-index: 83;

  transition: 0.5s;
  @media (max-width: 1200px) {
    right: 50px;
  }
  @media (max-width: 700px) {
    width: 100px;
    height: 90px;
  }
  @media (max-width: 500px) {
    right: 20px;
  }
`;

const PartMark01 = styled(Box)`
  width: 385px;
  height: 120px;
  z-index: 87;

  transition: 0.5s;
  @media (max-width: 900px) {
    width: 270px;
    height: 90px;
  }
`;

const PartMarkDescription01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  right: 150px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    right: 100px;
  }
  @media (max-width: 1200px) {
    right: 50px;
  }
  @media (max-width: 900px) {
    align-items: center;
    justify-content: flex-end;
    bottom: 100px;
    right: 0px;
  }
`;

const PartDescription01 = styled(Box)`
  display: flex;
  width: 380px;
  margin-top: 10px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 21px;
  text-align: right;
  letter-spacing: -0.01em;
  color: ${customColor.textColor01};
  z-index: 88;
  transition: 0.5s;
  @media (max-width: 900px) {
    width: 350px;
    text-align: center;
    font-size: 16px;
  }
  @media (max-width: 500px) {
    width: 280px;
    text-align: center;
    font-size: 16px;
  }
`;

const PartMarkGroup01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  position: absolute;
  align-items: center;
  z-index: 89;
  bottom: 50px;
  right: 150px;
  transition: 0.5s;

  @media (max-width: 1400px) {
    right: 100px;
  }
  @media (max-width: 1200px) {
    right: 50px;
  }
  @media (max-width: 900px) {
    justify-content: center;
    right: 0px;
    bottom: 20px;
  }
`;

const PartMarkOcean01 = styled(Box)`
  display: flex;
  width: 180px;
  height: 87px;

  transition: 0.5s;
  @media (max-width: 900px) {
    width: 105px;
    height: 50px;
  }
`;

const PartMutiple01 = styled(Box)`
  display: flex;
  margin-left: 10px;
`;

const PartMark02 = styled(Box)`
  display: flex;
  width: 126px;
  height: 35px;
  margin-left: 10px;

  transition: 0.5s;
  @media (max-width: 900px) {
    width: 105px;
    height: 30px;
  }
`;

const PartContent01 = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: 150px;
  padding-right: 150px;
  padding-top: 100px;
  padding-bottom: 100px;
  box-sizing: border-box;
  flex-direction: column;
  background-color: ${customColor.mainColor01};
  gap: 50px;
  z-index: 70;

  transition: 0.5s;
  @media (max-width: 1400px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

const PartContent02 = styled(Box)`
  display: none;
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  box-sizing: border-box;
  flex-direction: column;
  background-color: ${customColor.mainColor01};
  gap: 50px;
  z-index: 70;
  transition: 0.5s;

  @media (max-width: 1200px) {
    display: flex;
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const PartContentUp01 = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

const PartContentDown01 = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

const PartOcean01 = styled(Box)`
  display: flex;
  width: 100%;
  gap: 50px;
`;

const PartOceanLeft01 = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
`;

const PartOceanRight01 = styled(Box)`
  display: flex;
  flex: 1;
  position: relative;
  flex-direction: column;
  gap: 20px;
`;

const PartNFT01 = styled(Box)`
  display: flex;
  width: 175px;
  position: absolute;
  bottom: -50px;
  left: -50px;

  transition: 0.5s;
  @media (max-width: 1600px) {
    width: 150px;
  }
  @media (max-width: 1200px) {
    width: 200px;
  }
  @media (max-width: 900px) {
    width: 150px;
  }
  @media (max-width: 700px) {
    width: 125px;
  }
  @media (max-width: 500px) {
    width: 95px;
    left: -20px;
  }
`;

const PartNFT02 = styled(Box)`
  display: flex;
  position: absolute;
  width: 167px;

  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);

  transition: 0.5s;
  @media (max-width: 1600px) {
    width: 145px;
  }
  @media (max-width: 1200px) {
    width: 190px;
  }
  @media (max-width: 900px) {
    width: 145px;
  }
  @media (max-width: 700px) {
    width: 120px;
  }
  @media (max-width: 500px) {
    width: 90px;
  }
`;

const PartNFT03 = styled(Box)`
  display: flex;
  position: absolute;
  bottom: -50px;
  right: -50px;
  width: 195px;

  transition: 0.5s;
  @media (max-width: 1600px) {
    width: 170px;
  }
  @media (max-width: 1200px) {
    width: 220px;
  }
  @media (max-width: 900px) {
    width: 170px;
  }
  @media (max-width: 700px) {
    width: 150px;
  }
  @media (max-width: 500px) {
    width: 110px;
    right: -20px;
  }
`;

const TextTitle01 = styled(Box)`
  display: flex;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  /* identical to box height */
  letter-spacing: -0.02em;
  color: ${customColor.mainColor02};
`;

const TextContent01 = styled(Box)`
  display: flex;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${customColor.textColor01};
`;

const PartBottle01 = styled(Box)`
  display: flex;
  position: absolute;
  left: 0px;
  top: 150px;

  transition: 0.5s;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const PartClean01 = styled(Box)`
  display: flex;
  position: absolute;
  left: 0px;
  bottom: 100px;
  transition: 0.5s;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const PartBat01 = styled(Box)`
  display: flex;
  position: absolute;
  right: 0px;
  top: 30%;
  transition: 0.5s;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const ButtonVisitLink01 = styled(Box)`
  display: flex;
  width: 190px;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: ${customColor.backColor05};
  color: ${customColor.backColor01};
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
`;
const PartNFTs01 = styled(Box)`
  display: flex;
  position: absolute;
  left: 0px;
  bottom: 100px;
`;

const PartDetails01 = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  flex-direction: column;
  background-image: url(${imgBack04});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 100px;
  padding-bottom: 100px;
  z-index: 70;

  transition: 0.5s;
  @media (max-width: 1200px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  transition: 0.5s;
  @media (max-width: 500px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

const PartBox01 = styled(Box)`
  display: flex;
  position: absolute;
  left: 0px;
  bottom: -20px;

  transition: 0.5s;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const PartCover01 = styled(Box)`
  display: flex;
  position: absolute;
  right: 0px;
  top: -20px;
  z-index: 61;
  transition: 0.5s;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const PartMarkGroup02 = styled(Box)`
  display: flex;
  align-items: center;
`;

const PartMarkOcean02 = styled(Box)`
  display: flex;
  width: 305px;
  height: 150px;

  transition: 0.5s;
  @media (max-width: 900px) {
    width: 250px;
    height: 120px;
  }
  @media (max-width: 700px) {
    width: 200px;
    height: 100px;
  }
  @media (max-width: 500px) {
    width: 160px;
    height: 80px;
  }
  @media (max-width: 350px) {
    width: 120px;
    height: 60px;
  }
`;

const PartMutiple02 = styled(Box)`
  display: flex;
  margin-left: 20px;

  transition: 0.5s;
  @media (max-width: 700px) {
    margin-left: 10px;
    > svg {
      font-size: 2rem;
    }
  }
  @media (max-width: 500px) {
    margin-left: 5px;
    > svg {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 350px) {
    margin-left: 0px;
  }
`;

const PartMark03 = styled(Box)`
  display: flex;
  width: 260px;
  height: 70px;
  margin-left: 20px;

  transition: 0.5s;
  @media (max-width: 900px) {
    width: 200px;
    height: 60px;
  }
  @media (max-width: 700px) {
    width: 160px;
    height: 50px;
    margin-left: 10px;
  }
  @media (max-width: 500px) {
    width: 140px;
    height: 40px;
    margin-left: 5px;
  }
  @media (max-width: 350px) {
    width: 100px;
    height: 30px;
    margin-left: 0px;
  }
`;

const PartDetailsText01 = styled(Box)`
  display: flex;
  width: 40%;
  padding: 30px;
  box-sizing: border-box;
  background-color: ${customColor.backColor02};
  border-radius: 10px;
  opacity: 0.7;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  /* or 26px */
  text-align: center;
  color: ${customColor.mainColor01};
  margin-top: 30px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    width: 50%;
  }
  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 900px) {
    width: 70%;
    padding: 20px;
    font-size: 14px;
  }
  @media (max-width: 500px) {
    width: 80%;
    padding: 10px;
    font-size: 12px;
  }
`;

const PartUtility01 = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  background-color: ${customColor.backColor01};
  background-image: url(${imgBack03});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 50% 50%;
  flex-direction: column;
  padding-left: 150px;
  padding-right: 150px;
  padding-top: 100px;
  padding-bottom: 100px;
  box-sizing: border-box;
  transition: 0.5s;

  z-index: 50;

  @media (max-width: 1400px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media (max-width: 1200px) {
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
    align-items: flex-start;
  }
  @media (max-width: 700px) {
    background-size: 50% 20%;
  }
  @media (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
    background-size: 70% 20%;
  }
`;

const PartDolphin01 = styled(Box)`
  display: flex;
  position: absolute;
  right: 0px;
  top: 10px;
  z-index: 51;
  transition: 0.5s;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const TextDescription01 = styled(Box)`
  display: flex;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${customColor.textColor02};
  padding-top: 50px;

  transition: 0.5s;
  @media (max-width: 1200px) {
    padding-top: 30px;
  }
  @media (max-width: 900px) {
    padding-top: 20px;
  }
`;

const PartGrid01 = styled(Box)`
  display: grid;
  width: 100%;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-top: 30px;

  transition: 0.5s;
  @media (max-width: 900px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
  }
  @media (max-width: 700px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto;
  }
`;

const GridEach01 = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
  background-color: ${customColor.mainColor01};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`;

const PartIcon01 = styled(Box)`
  display: flex;
  width: 50px;
  height: 50px;
`;

const TextDescription02 = styled(Box)`
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  /* or 26px */

  text-align: center;
  color: ${customColor.textColor02};
  padding-top: 30px;
`;

const PartProgress01 = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  padding-left: 150px;
  padding-right: 150px;
  padding-top: 100px;
  padding-bottom: 100px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;

  transition: 0.5s;
  @media (max-width: 1400px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media (max-width: 1200px) {
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
    align-items: flex-start;
  }
  @media (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const PartPen01 = styled(Box)`
  display: flex;
  position: absolute;
  left: 0px;
  top: -100px;
  z-index: 51;
  transition: 0.5s;
  @media (max-width: 1200px) {
    display: none;
  }
`;
const PartCap01 = styled(Box)`
  display: flex;
  position: absolute;
  right: 0px;
  top: 100px;
  z-index: 51;
  transition: 0.5s;
  @media (max-width: 1200px) {
    display: none;
  }
`;
const PartRing01 = styled(Box)`
  display: flex;
  position: absolute;
  left: 0px;
  top: 50%;
  z-index: 51;
  transition: 0.5s;
  @media (max-width: 1200px) {
    display: none;
  }
`;
const PartKnife01 = styled(Box)`
  display: flex;
  position: absolute;
  right: 0px;
  bottom: 10px;
  z-index: 51;
  transition: 0.5s;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const PartRoadmap01 = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  margin-top: 100px;
  z-index: 70;

  transition: 0.5s;
  @media (max-width: 1200px) {
    margin-top: 50px;
  }
  @media (max-width: 900px) {
    margin-top: 3px;
  }
  @media (max-width: 500px) {
    margin-top: 20px;
  }
`;

const PartBox011 = styled(Box)`
  display: flex;
  position: absolute;
  width: 260px;
  height: 275px;
  left: 0px;
  top: 30%;

  transition: 0.5s;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const PartCover011 = styled(Box)`
  display: flex;
  position: absolute;
  width: 205px;
  height: 105px;
  right: 0px;
  bottom: 20%;

  transition: 0.5s;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export default Home;
