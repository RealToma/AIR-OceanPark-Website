import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { customColor } from "../Config/Color";
import {
  TEXT_Benefit,
  TEXT_HomeContent,
  TEXT_HomeUtility,
  TEXT_HomeProgress,
  TEXT_FAQ,
} from "../Config/Text";
import EachProgress from "../Components/EachProgress";
import imgBenefitBack01 from "../Assets/image/benefits/back01.png";
import imgBenefitItem01 from "../Assets/image/benefits/image01.png";
import imgBenefitItem02 from "../Assets/image/benefits/image02.png";
import imgBenefitItem03 from "../Assets/image/benefits/image03.png";
import imgPolygon01 from "../Assets/image/back_polygon01.png";
import imgMarkHalloEN01 from "../Assets/image/markHallo01_en.png";
import imgMarkHalloCH01 from "../Assets/image/markHallo01_ch.png";
import imgMark01 from "../Assets/image/mark_AiR01.png";
import imgMark02 from "../Assets/image/mark_AiR02.png";
import imgMark03 from "../Assets/image/mark_AiR03.png";
import imgMarkOcean01 from "../Assets/image/mark_Ocean01.png";
import imgMarkOcean02 from "../Assets/image/mark_Ocean02.png";
import imgBackEN01 from "../Assets/image/back01_en.png";
import imgBackCH01 from "../Assets/image/back01_ch.png";
import imgBack02 from "../Assets/image/back02.png";
import imgLeaf02 from "../Assets/image/leaf03.png";
import imgClean01 from "../Assets/image/clean01.png";
import imgBottle01 from "../Assets/image/bottle01.png";
import imgKnife01 from "../Assets/image/knife01.png";
import imgDolphin01 from "../Assets/image/dolphin01.png";
import imgBat01 from "../Assets/image/bat01.png";
import imgCap01 from "../Assets/image/cap01.png";
import imgPen01 from "../Assets/image/pen01.png";
import imgRing01 from "../Assets/image/ring01.png";
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
import CustomDropdownFAQ from "../Components/CustomDropdownFAQ";
import { useParallax } from "react-scroll-parallax";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";

const Home = () => {
  const parallaxAbout = useParallax({
    speed: -3,
    offset: 0.1,
  });

  const parallaxUtility = useParallax({
    speed: -3,
    offset: 0.1,
  });
  const storageFlagLanguage = localStorage.getItem("flagLang");
  const [flagLanguage, setFlagLanguage] = useState(storageFlagLanguage === "1");
  const [flagRotate, setFlagRotate] = useState(0);
  const [flagScroll, setFlagScroll] = useState(false);

  const textHomeContent = !flagLanguage
    ? TEXT_HomeContent.EN
    : TEXT_HomeContent.CH;
  const textHomeUtility = !flagLanguage
    ? TEXT_HomeUtility.EN
    : TEXT_HomeUtility.CH;
  const textHomeProgress = !flagLanguage
    ? TEXT_HomeProgress.EN
    : TEXT_HomeProgress.CH;
  const textFAQ = !flagLanguage ? TEXT_FAQ.EN : TEXT_FAQ.CH;
  const textBenefit = !flagLanguage ? TEXT_Benefit.EN : TEXT_Benefit.CH;

  useEffect(() => {
    setTimeout(() => {
      setFlagRotate((flagRotate + 1) % 8);
      // let tempFlag;
      // tempFlag = flagRotate;
      // tempFlag++;
      // if (tempFlag > 5) {
      //   setFlagRotate(0);
      // } else {
      //   setFlagRotate(tempFlag++);
      // }
    }, 3000);
  }, [flagRotate]);

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <StyledComponent>
      <TopNavbarHome
        flagLanguage={flagLanguage}
        setFlagLanguage={setFlagLanguage}
        flagScroll={flagScroll}
        setFlagScroll={setFlagScroll}
      />
      <PartTop01>
        <PartMaxTop01>
          <PartPolygon01>
            <img src={imgPolygon01} weight={"100%"} height={"100%"} alt={""} />
          </PartPolygon01>
          <PartLeaf02>
            <img src={imgLeaf02} width={"100%"} height={"100%"} alt={""} />
          </PartLeaf02>
          <PartMarkHallo01>
            <a
              href={
                !flagLanguage
                  ? "https://www.oceanpark.com.hk/en/park-experience/halloween-fest-2022"
                  : "https://www.oceanpark.com.hk/tc/park-experience/halloween-fest-2022"
              }
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={!flagLanguage ? imgMarkHalloEN01 : imgMarkHalloCH01}
                width={"100%"}
                height={"100%"}
                alt={""}
              />
            </a>
          </PartMarkHallo01>

          <PartMarkDescription01>
            <PartMark01>
              <img src={imgMark01} width={"100%"} height={"100%"} alt={""} />
            </PartMark01>
            <PartDescription01 flaglan={flagLanguage?1:0}>{textHomeContent.tdes01}</PartDescription01>
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
            {/* <PartShadow01>
                  <img src={imgShadow01} width={"100%"} height={"100%"} alt="" />
                </PartShadow01> */}
            {Array(8)
              .fill(0)
              .map((_, index) => {
                return (
                  <PartEachNFT
                    key={index}
                    flagrotate={(flagRotate + index) % 8}
                  >
                    <img
                      src={require(`../Assets/image/nfts__/0${index + 1}.png`)}
                      width={"100%"}
                      height={"100%"}
                      alt=""
                    />
                  </PartEachNFT>
                );
              })}
          </PartNFTRotate01>
        </PartMaxTop01>
      </PartTop01>
      <PartBenefit01>
        <PartMaxBenefit01>
          <TextTitleBenefit01>{textBenefit.title}</TextTitleBenefit01>
          <PartItem01>
            <PartEachItem01>
              <PartItemImage01>
                <img
                  src={imgBenefitItem01}
                  width={"100%"}
                  height={"100%"}
                  alt=""
                />
              </PartItemImage01>
              <TextItemTitle01>{textBenefit.item01.title}</TextItemTitle01>
              <TextItemDescription01>
                {textBenefit.item01.description}
              </TextItemDescription01>
            </PartEachItem01>
            <PartEachItem01>
              <PartItemImage01>
                <img
                  src={imgBenefitItem02}
                  width={"100%"}
                  height={"100%"}
                  alt=""
                />
              </PartItemImage01>
              <TextItemTitle01>{textBenefit.item02.title}</TextItemTitle01>
              <TextItemDescription01>
                {textBenefit.item02.description}
              </TextItemDescription01>
            </PartEachItem01>
            <PartEachItem01>
              <PartItemImage01>
                <img
                  src={imgBenefitItem03}
                  width={"100%"}
                  height={"100%"}
                  alt=""
                />
              </PartItemImage01>
              <TextItemTitle01>{textBenefit.item03.title}</TextItemTitle01>
              <TextItemDescription01>
                {textBenefit.item03.description}
              </TextItemDescription01>
            </PartEachItem01>
          </PartItem01>
          <PartMarqueeItem01>
            <Marquee
              gradient={false}
              speed={"30"}
              // gradientColor={[250, 249, 250]}
              // gradientWidth={"50px"}
            >
              <PartEachItem01>
                <PartItemImage01>
                  <img
                    src={imgBenefitItem01}
                    width={"100%"}
                    height={"100%"}
                    alt=""
                  />
                </PartItemImage01>
                <TextItemTitle01>{textBenefit.item01.title}</TextItemTitle01>
                <TextItemDescription01>
                  {textBenefit.item01.description}
                </TextItemDescription01>
              </PartEachItem01>
              <PartEachItem01>
                <PartItemImage01>
                  <img
                    src={imgBenefitItem02}
                    width={"100%"}
                    height={"100%"}
                    alt=""
                  />
                </PartItemImage01>
                <TextItemTitle01>{textBenefit.item02.title}</TextItemTitle01>
                <TextItemDescription01>
                  {textBenefit.item02.description}
                </TextItemDescription01>
              </PartEachItem01>
              <PartEachItem01>
                <PartItemImage01>
                  <img
                    src={imgBenefitItem03}
                    width={"100%"}
                    height={"100%"}
                    alt=""
                  />
                </PartItemImage01>
                <TextItemTitle01>{textBenefit.item03.title}</TextItemTitle01>
                <TextItemDescription01>
                  {textBenefit.item03.description}
                </TextItemDescription01>
              </PartEachItem01>
            </Marquee>
          </PartMarqueeItem01>
        </PartMaxBenefit01>
      </PartBenefit01>
      <PartMainOcean01 id="ocean">
        <PartMaxMainOcean01>
          <PartOcean01>
            <PartOceanLeft01 data-aos="fade-up" data-aos-duration="1000">
              <TextTitle02>{textHomeContent.tt01}</TextTitle02>
              <img
                src={!flagLanguage ? imgBackEN01 : imgBackCH01}
                width={"100%"}
                style={{ borderRadius: "6px" }}
                alt=""
              />
            </PartOceanLeft01>
            <PartOceanRight01 data-aos="fade-up" data-aos-duration="1000">
              <TextTitle03>{textHomeContent.tt01}</TextTitle03>
              <TextContent01>{textHomeContent.tc01}</TextContent01>
              <a
                href={
                  !flagLanguage
                    ? "https://www.oceanpark.com.hk/en/park-experience/halloween-fest-2022"
                    : "https://www.oceanpark.com.hk/tc/park-experience/halloween-fest-2022"
                }
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <ButtonVisitLink01 onClick={() => {}}>
                  <InsertLinkRoundedIcon />
                  {"\u00a0"}
                  {"\u00a0"}
                  {textHomeContent.textVisitSite}
                </ButtonVisitLink01>
              </a>
            </PartOceanRight01>
          </PartOcean01>
          <PartOcean01>
            <PartOceanLeft01 data-aos="fade-up" data-aos-duration="1000">
              <TextTitle01>{textHomeContent.tt02}</TextTitle01>
              <TextContent01>{textHomeContent.tc02}</TextContent01>
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
        </PartMaxMainOcean01>
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
      </PartMainOcean01>
      <PartAbout01 id="about" ref={parallaxAbout.ref}>
        <PartMaxAbout01>
          <PartMarkGroup02
            data-aos="slide-up"
            data-aos-offset="150"
            data-aos-duration="500"
          >
            <PartMarkOcean02>
              <img src={imgMarkOcean02} width={"100%"} height={"100%"} alt="" />
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
            data-aos-duration="500"
          >
            {textHomeContent.tc03}
          </PartDetailsText01>
        </PartMaxAbout01>
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
      </PartAbout01>
      <PartUtility01 id="utility" ref={parallaxUtility.ref}>
        <PartMaxUtility01>
          <TextTitle01
            data-aos="fade-up"
            data-aos-offset="250"
            data-aos-duration="500"
          >
            {textHomeUtility.tt01}
          </TextTitle01>
          <TextDescription01
            data-aos="fade-up"
            data-aos-offset="250"
            data-aos-duration="500"
          >
            {textHomeUtility.tdes01}
          </TextDescription01>
          <PartGrid01>
            <GridEach01
              data-aos="fade-up"
              data-aos-offset="250"
              data-aos-duration="1000"
            >
              <PartIcon01>
                <img src={iconGroup01} width={"100%"} height={"100%"} alt="" />
              </PartIcon01>
              <TextDescription02>{textHomeUtility.tc01}</TextDescription02>
            </GridEach01>
            <GridEach01
              data-aos="fade-up"
              data-aos-offset="250"
              data-aos-duration="1000"
            >
              <PartIcon01>
                <img src={iconTicket01} width={"100%"} height={"100%"} alt="" />
              </PartIcon01>
              <TextDescription02>{textHomeUtility.tc02}</TextDescription02>
            </GridEach01>
            <GridEach01
              data-aos="fade-up"
              data-aos-offset="250"
              data-aos-duration="1000"
            >
              <PartIcon01>
                <img
                  src={iconDiscount01}
                  width={"100%"}
                  height={"100%"}
                  alt=""
                />
              </PartIcon01>
              <TextDescription02>{textHomeUtility.tc03}</TextDescription02>
            </GridEach01>
            <GridEach01
              data-aos="fade-up"
              data-aos-offset="250"
              data-aos-duration="1000"
            >
              <PartIcon01>
                <img src={iconUser01} width={"100%"} height={"100%"} alt="" />
              </PartIcon01>
              <TextDescription02>{textHomeUtility.tc04}</TextDescription02>
            </GridEach01>
            <GridEach01
              data-aos="fade-up"
              data-aos-offset="250"
              data-aos-duration="1000"
            >
              <PartIcon01>
                <img src={iconPeace01} width={"100%"} height={"100%"} alt="" />
              </PartIcon01>
              <TextDescription02>{textHomeUtility.tc05}</TextDescription02>
            </GridEach01>
            <GridEach01
              data-aos="fade-up"
              data-aos-offset="250"
              data-aos-duration="1000"
            >
              <PartIcon01>
                <img src={iconChest01} width={"100%"} height={"100%"} alt="" />
              </PartIcon01>
              <TextDescription02>{textHomeUtility.tc06}</TextDescription02>
            </GridEach01>
          </PartGrid01>
          <PartDolphin01
            data-aos="fade-left"
            data-aos-offset="150"
            data-aos-duration="500"
          >
            <img src={imgDolphin01} width={"100%"} alt="" />
          </PartDolphin01>
        </PartMaxUtility01>
      </PartUtility01>
      <PartProgress01 id="progress">
        <PartMaxProgress01>
          <TextTitle01
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-duration="500"
          >
            {textHomeProgress.tt01}
          </TextTitle01>
          <PartRoadmap01>
            <EachProgress
              date={textHomeProgress.tdate01}
              image={imgProgress01}
              text={textHomeProgress.tdes01}
            />
            <EachProgress
              date={textHomeProgress.tdate02}
              image={imgProgress02}
              text={textHomeProgress.tdes02}
            />
            <EachProgress
              date={textHomeProgress.tdate03}
              image={imgProgress03}
              text={textHomeProgress.tdes03}
            />
            <EachProgress
              date={textHomeProgress.tdate04}
              image=""
              text={textHomeProgress.tdes04}
            />
            <EachProgress
              date={textHomeProgress.tdate05}
              image=""
              text={textHomeProgress.tdes05}
            />
            <EachProgress
              date={textHomeProgress.tdate06}
              image=""
              text={textHomeProgress.tdes06}
            />
            <EachProgress
              date={textHomeProgress.tdate07}
              image=""
              text={textHomeProgress.tdes07}
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
        </PartMaxProgress01>
      </PartProgress01>
      <PartFAQ01 id="faq">
        <PartMaxFAQ01>
          <TextTitle01
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-duration="500"
          >
            {textFAQ.title01}
          </TextTitle01>
          <ContentFAQ01>
            {textFAQ.content.map((each, index) => {
              return <CustomDropdownFAQ content={each} key={index} />;
            })}
          </ContentFAQ01>
        </PartMaxFAQ01>
      </PartFAQ01>
      <FooterHome setFlagScroll={setFlagScroll} flagLanguage={flagLanguage} />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: ${({ flagterms }) => (!flagterms ? "100%" : "100vh")};
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const PartBenefit01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  background-image: url(${imgBenefitBack01});
`;

const PartMaxBenefit01 = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 1440px;
  height: 320px;
  transition: 0.5s;

  padding-left: 120px;
  padding-right: 120px;
  box-sizing: border-box;
  flex-direction: column;
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
    align-items: flex-start;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
  }
  /* @media (max-width: 350px) {
    padding-left: 10px;
    padding-right: 10px;
  } */
`;

const TextTitleBenefit01 = styled(Box)`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  /* identical to box height */

  letter-spacing: -0.02em;
  color: ${customColor.mainColor01};

  transition: 0.5s;
  @media (max-width: 768px) {
    margin-left: 40px;
  }
  @media (max-width: 500px) {
    margin-left: 20px;
  }
  @media (max-width: 350px) {
    margin-left: 10px;
  }
`;

const PartItem01 = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;

  transition: 0.5s;
  @media (max-width: 1024px) {
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    /* display: none; */
    overflow-x: auto;
  }
`;

const PartMarqueeItem01 = styled(Box)`
  display: none;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  transition: 0.5s;
  @media (max-width: 768px) {
    display: none;
  }
`;
const PartEachItem01 = styled(Box)`
  display: flex;
  width: 230px;
  min-width: 230px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

const TextItemTitle01 = styled(Box)`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  /* or 26px */

  text-align: center;
  color: ${customColor.mainColor01};
`;

const TextItemDescription01 = styled(Box)`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  /* or 26px */

  text-align: center;
  color: ${customColor.mainColor01};
`;

const PartItemImage01 = styled(Box)`
  width: 180px;
  height: 180px;
`;

const PartTop01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: ${customColor.backColor01};
  z-index: 80;
`;

const PartMaxTop01 = styled(Box)`
  display: flex;
  position: relative;

  width: 100%;
  max-width: 1440px;
  height: 800px;
  transition: 0.5s;

  padding-left: 120px;
  padding-right: 120px;
  box-sizing: border-box;

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
    height: 650px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: 350px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const PartNFTRotate01 = styled(Box)`
  display: flex;
  width: 80%;
  position: absolute;
  left: -10px;
  bottom: 30px;
  transform-style: preserve-3d;

  transition: 0.5s;
  @media (max-width: 900px) {
    bottom: 200px;
  }
  @media (max-width: 500px) {
    left: -100px;
    bottom: 190px;
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
      ? "scale(0.8) translateZ(-2px) translateX(-30%)"
      : flagrotate === 2
      ? "scale(1) translateZ(-1px) translateX(-30%)"
      : flagrotate === 3
      ? "scale(1.2) translateZ(0px) translateX(-30%)"
      : flagrotate === 4
      ? "scale(1.35) translateZ(1px) translateX(-30%)"
      : flagrotate === 5
      ? "scale(0.6) translateZ(-4px) translateX(-30%)"
      : "scale(0.6) translateZ(-4px) translateX(-30%)"};
  transform-style: preserve-3d;
  opacity: ${({ flagrotate }) =>
    flagrotate === 0
      ? "1"
      : flagrotate === 1
      ? "1"
      : flagrotate === 2
      ? "1"
      : flagrotate === 3
      ? "1"
      : flagrotate === 4
      ? "0"
      : flagrotate === 5
      ? "0"
      : "0"};
  transition: 1s;
  left: ${({ flagrotate }) =>
    flagrotate === 0
      ? "750px"
      : flagrotate === 1
      ? "600px"
      : flagrotate === 2
      ? "400px"
      : flagrotate === 3
      ? "150px"
      : flagrotate === 4
      ? "-200px"
      : flagrotate === 5
      ? "750px"
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
      : "blur(3px)"};

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
    left: -100px;
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
  @media (max-width: 1024px) {
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
  @media (max-width: 1024px) {
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
  width: 282px;
  height: 110px;
  z-index: 87;

  transition: 0.5s;
  /* @media (max-width: 900px) {
    width: 330px;
    height: 100px;
  }
  @media (max-width: 500px) {
    width: 300px;
    height: 90px;
  } */
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
  @media (max-width: 1024px) {
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
  width: ${({ flaglan }) => (flaglan ? "280px" : "380px")};
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
    font-size: 18px;
  }
  @media (max-width: 500px) {
    width: 300px;
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
  @media (max-width: 1024px) {
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

const PartMainOcean01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: center;
  background-color: ${customColor.mainColor01};
  z-index: 70;
`;

const PartMaxMainOcean01 = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 1440px;
  flex-direction: column;
  gap: 50px;

  transition: 0.5s;

  padding-left: 120px;
  padding-right: 120px;
  padding-top: 120px;
  padding-bottom: 120px;
  box-sizing: border-box;

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
    padding-top: 50px;
    padding-bottom: 100px;

    gap: 30px;
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

const PartOcean01 = styled(Box)`
  display: flex;
  width: 100%;
  gap: 50px;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }
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
  @media (max-width: 1024px) {
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
  @media (max-width: 1024px) {
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
  @media (max-width: 1024px) {
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

const TextTitle02 = styled(Box)`
  display: none;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  /* identical to box height */
  letter-spacing: -0.02em;
  color: ${customColor.mainColor02};

  transition: 0.5s;
  @media (max-width: 1024px) {
    display: flex;
  }
`;

const TextTitle03 = styled(Box)`
  display: flex;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  /* identical to box height */
  letter-spacing: -0.02em;
  color: ${customColor.mainColor02};

  transition: 0.5s;
  @media (max-width: 1024px) {
    display: none;
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
  @media (max-width: 1024px) {
    display: none;
  }
`;

const PartClean01 = styled(Box)`
  display: flex;
  position: absolute;
  left: 0px;
  bottom: 100px;
  transition: 0.5s;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const PartBat01 = styled(Box)`
  display: flex;
  position: absolute;
  right: 0px;
  top: 30%;
  transition: 0.5s;
  @media (max-width: 1024px) {
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

const PartAbout01 = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  background-image: url(${imgBack04});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 70;
`;

const PartMaxAbout01 = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 1440px;
  align-items: center;
  flex-direction: column;
  transition: 0.5s;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 120px;
  padding-right: 120px;
  box-sizing: border-box;

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
    padding-top: 50px;
    padding-bottom: 50px;
  }
  @media (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  @media (max-width: 350px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const PartBox01 = styled(Box)`
  display: flex;
  position: absolute;
  left: 0px;
  bottom: -20px;

  transition: 0.5s;
  @media (max-width: 1024px) {
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
  @media (max-width: 1024px) {
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
  width: 50%;
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
  @media (max-width: 1024px) {
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
  background-color: ${customColor.backColor01};
  justify-content: center;
`;

const PartMaxUtility01 = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 1440px;
  background-image: url(${imgBack03});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 50% 50%;
  flex-direction: column;
  align-items: center;

  padding-left: 120px;
  padding-right: 120px;
  padding-top: 100px;
  padding-bottom: 100px;
  box-sizing: border-box;
  transition: 0.5s;
  z-index: 50;

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
  @media (max-width: 350px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const PartDolphin01 = styled(Box)`
  display: flex;
  position: absolute;
  right: 0px;
  top: 50px;
  z-index: 71;
  transition: 0.5s;
  @media (max-width: 1024px) {
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
  @media (max-width: 1024px) {
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
    /* grid-template-columns: auto;
    grid-template-rows: auto auto auto auto; */
    display: flex;
    overflow-x: auto;
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

  transition: 0.5s;
  @media (max-width: 700px) {
    width: 200px;
    min-width: 200px;
  }
  @media (max-width: 500px) {
    padding: 20px;
  }
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
  justify-content: center;
`;

const PartMaxProgress01 = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 1440px;

  padding-left: 120px;
  padding-right: 120px;
  padding-top: 100px;
  padding-bottom: 100px;
  box-sizing: border-box;
  flex-direction: column;
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
    padding-top: 50px;
    padding-bottom: 50px;
    align-items: flex-start;
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

const PartPen01 = styled(Box)`
  display: flex;
  position: absolute;
  left: 0px;
  top: -100px;
  z-index: 51;
  transition: 0.5s;
  @media (max-width: 1024px) {
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
  @media (max-width: 1024px) {
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
  @media (max-width: 1024px) {
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
  @media (max-width: 1024px) {
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
  @media (max-width: 1024px) {
    margin-top: 50px;
  }
  @media (max-width: 900px) {
    margin-top: 3px;
  }
  @media (max-width: 500px) {
    margin-top: 20px;
  }
`;

const PartFAQ01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: ${customColor.backColor01};
`;

const PartMaxFAQ01 = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 1440px;
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 100px;
  padding-bottom: 100px;
  box-sizing: border-box;
  flex-direction: column;
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
    padding-top: 50px;
    padding-bottom: 50px;
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

const ContentFAQ01 = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 50px;
`;

export default Home;
