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
import imgMarkHallo01 from "../Assets/image/markHallo01.png";
import imgMark01 from "../Assets/image/mark_AiR01.png";
import imgMark02 from "../Assets/image/mark_AiR02.png";
import imgMark03 from "../Assets/image/mark_AiR03.png";
import imgMarkOcean01 from "../Assets/image/mark_Ocean01.png";
import imgBack01 from "../Assets/image/back01.png";
import imgBack02 from "../Assets/image/back02.png";
import imgLeaf01 from "../Assets/image/leaf02.png";
import imgLeaf02 from "../Assets/image/leaf03.png";
import imgBottle01 from "../Assets/image/bottle01.png";
import imgPumpkin01 from "../Assets/image/pumpkin01.png";
import imgTNFT01 from "../Assets/image/nfts/OceanParkNFT_6.png";
import imgTNFT02 from "../Assets/image/nfts/OP nft_IT_A 1.png";
import imgTNFT03 from "../Assets/image/nfts/OceanParkNFT_13 1.png";
import imgTNFT04 from "../Assets/image/nfts/OceanParkNFT_7.png";
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
      if (tempFlag > 3) {
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
          <img src={imgPolygon01} weight={"100%"} alt={""} />
        </PartPolygon01>
        <PartLeaf02>
          <img src={imgLeaf02} width={"100%"} height={"100%"} alt={""} />
        </PartLeaf02>
        <PartMarkHallo01>
          <img src={imgMarkHallo01} width={"100%"} height={"100%"} alt={""} />
        </PartMarkHallo01>

        <PartMarkDescription01>
          <PartMark01>
            <img src={imgMark01} width={"100%"} alt={""} />
          </PartMark01>
          <PartDescription01>{textHomeContent.tdes01.en}</PartDescription01>
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
        </PartMarkDescription01>

        <PartNFTRotate01>
          <PartEachNFT flagrotate={(flagRotate + 0) % 4}>
            <img src={imgTNFT02} width={"100%"} height={"100%"} alt="" />
          </PartEachNFT>
          <PartEachNFT flagrotate={(flagRotate + 1) % 4}>
            <img src={imgTNFT02} width={"100%"} height={"100%"} alt="" />

            {/* <PartShadow01>
              <img src={imgShadow01} width={"100%"} height={"100%"} alt="" />
            </PartShadow01> */}
          </PartEachNFT>
          <PartEachNFT flagrotate={(flagRotate + 2) % 4}>
            <img src={imgTNFT02} width={"100%"} height={"100%"} alt="" />
          </PartEachNFT>
          <PartEachNFT flagrotate={(flagRotate + 3) % 4}>
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
        <PartLeaf01>
          <img
            src={imgLeaf01}
            width={"100%"}
            style={{ transform: "rotate(0deg)", filter: "blur(1.5px)" }}
            alt=""
          />
        </PartLeaf01>
        <PartBottle01
          data-aos="fade-right"
          data-aos-offset="150"
          data-aos-duration="500"
        >
          <img src={imgBottle01} width={"100%"} alt="" />
        </PartBottle01>
        <PartPumpkin01
          // data-aos="fade-left"
          data-aos-offset="150"
          data-aos-duration="500"
        >
          <img src={imgPumpkin01} width={"100%"} alt="" />
        </PartPumpkin01>
      </PartContent01>
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
          data-aos-duration="2000"
        >
          {textHomeContent.tc03.en}
        </PartDetailsText01>
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
        <PartBox01
          data-aos="fade-right"
          data-aos-offset="150"
          data-aos-duration="500"
        >
          <img src={imgBox01} width={"100%"} height={"100%"} alt="" />
        </PartBox01>
        <PartCover01
          // data-aos="fade-left"
          data-aos-offset="150"
          data-aos-duration="500"
        >
          <img src={imgCover01} width={"100%"} height={"100%"} alt="" />
        </PartCover01>
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
  bottom: 0px;
  transform-style: preserve-3d;
`;

const PartEachNFT = styled(Box)`
  display: flex;
  position: absolute;
  width: 530px;
  height: 530px;
  transform: ${({ flagrotate }) =>
    flagrotate === 0
      ? "scale(1) translateZ(-1px)"
      : flagrotate === 1
      ? "scale(0.9) translateZ(0px)"
      : flagrotate === 2
      ? "scale(0.8) translateZ(-2px)"
      : flagrotate === 3
      ? "scale(0.65) translateZ(-3px)"
      : "none"};
  transform-style: preserve-3d;
  opacity: 1;
  transition: 1s;
  left: ${({ flagrotate }) =>
    flagrotate === 0
      ? "0px"
      : flagrotate === 1
      ? "300px"
      : flagrotate === 2
      ? "600px"
      : flagrotate === 3
      ? "800px"
      : "none"};
  bottom: 0px;
  filter: ${({ flagrotate }) =>
    flagrotate === 0
      ? "blur(3px)"
      : flagrotate === 1
      ? "blur(0px)"
      : flagrotate === 2
      ? "blur(5px)"
      : flagrotate === 3
      ? "blur(7px)"
      : "none"};
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
  top: -100px;
  left: 20%;
  filter: blur(5px);
  z-index: 81;
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
  margin-top: 300px;
  width: 385px;
  z-index: 87;
`;

const PartMarkDescription01 = styled(Box)`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: flex-end;
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
  }
  @media (max-width: 500px) {
    right: 20px;
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
    text-align: center;
    font-size: 16px;
  }
`;

const PartMarkGroup01 = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 200px;
  margin-bottom: 30px;
  z-index: 89;
`;

const PartMarkOcean01 = styled(Box)`
  display: flex;
  width: 180px;
  height: 87px;
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
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
  }
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
`;

const PartOceanRight01 = styled(Box)`
  display: flex;
  flex: 1;
  position: relative;
  flex-direction: column;
`;

const PartNFT01 = styled(Box)`
  display: flex;
  position: absolute;
  bottom: -50px;
  left: -50px;
`;

const PartNFT02 = styled(Box)`
  display: flex;
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
`;

const PartNFT03 = styled(Box)`
  display: flex;
  position: absolute;
  bottom: -50px;
  right: -50px;
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
  margin-top: 30px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${customColor.textColor01};
`;

const PartLeaf01 = styled(Box)`
  display: flex;
  position: absolute;
  left: -150px;
  top: -60px;

  transition: 0.5s;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const PartBottle01 = styled(Box)`
  display: flex;
  position: absolute;
  left: 0px;
  bottom: 100px;
  transition: 0.5s;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const PartPumpkin01 = styled(Box)`
  display: flex;
  position: absolute;
  right: 0px;
  top: 30%;
  transition: 0.5s;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const PartNFTs01 = styled(Box)`
  display: flex;
  position: absolute;
  left: 0px;
  bottom: 100px;
`;

const PartDetails01 = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  background-image: url(${imgBack04});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 100px;
  padding-bottom: 100px;
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
`;

const PartGrid01 = styled(Box)`
  display: grid;
  width: 100%;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-top: 30px;
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
`;

const PartRoadmap01 = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  margin-top: 100px;
  z-index: 70;
`;

const PartBox01 = styled(Box)`
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

const PartCover01 = styled(Box)`
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
