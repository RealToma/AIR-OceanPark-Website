import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { customColor } from "../Config/Color";
import { TEXT_Terms } from "../Config/Text";

import TopNavbarHome from "../Layouts/TopNavbarHome";
import FooterHome from "../Layouts/FooterHome";

import AOS from "aos";
import "aos/dist/aos.css";

const Tnc = () => {
  const storageFlagLanguage = localStorage.getItem("flagLang");
  const [flagLanguage, setFlagLanguage] = useState(storageFlagLanguage === "1");
  const [flagRotate, setFlagRotate] = useState(0);
  const [flagScroll, setFlagScroll] = useState(false);

  const textTerms = !flagLanguage ? TEXT_Terms.EN : TEXT_Terms.CH;

  useEffect(() => {
    setTimeout(() => {
      setFlagRotate((flagRotate + 1) % 8);
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
      <PartTems01>
        <PartTermsTitle01>{textTerms.title}</PartTermsTitle01>
        <TextSectionTitle> {textTerms.section1.title}</TextSectionTitle>
        {textTerms.section1.content.map((each, index) => {
          return <TextSectionContent key={index}>{each}</TextSectionContent>;
        })}

        <TextSectionTitle> {textTerms.section2.title}</TextSectionTitle>
        {textTerms.section2.content.map((each, index) => {
          return <TextSectionContent key={index}>{each}</TextSectionContent>;
        })}

        <TextSectionTitle> {textTerms.section3.title}</TextSectionTitle>
        {textTerms.section3.content.map((each, index) => {
          return <TextSectionContent key={index}>{each}</TextSectionContent>;
        })}

        <TextSectionTitle> {textTerms.section4.title}</TextSectionTitle>
        {textTerms.section4.content.map((each, index) => {
          return <TextSectionContent key={index}>{each}</TextSectionContent>;
        })}

        <TextSectionTitle> {textTerms.section5.title}</TextSectionTitle>
        {textTerms.section5.content.map((each, index) => {
          return <TextSectionContent key={index}>{each}</TextSectionContent>;
        })}

        <TextSectionTitle> {textTerms.section6.title}</TextSectionTitle>
        {textTerms.section6.content.map((each, index) => {
          return (
            <TextSectionContent key={index}>
              {each.title_child}
              {each.content_child.map((each, index) => {
                return (
                  <TextSectoinChildContent key={index}>
                    {each}
                  </TextSectoinChildContent>
                );
              })}
            </TextSectionContent>
          );
        })}

        <TextSectionTitle> {textTerms.section7.title}</TextSectionTitle>
        {textTerms.section7.content.map((each, index) => {
          return (
            <TextSectionContent key={index}>
              {each.title_child}
              {each.content_child.map((each, index) => {
                return (
                  <TextSectoinChildContent key={index}>
                    {each}
                  </TextSectoinChildContent>
                );
              })}
            </TextSectionContent>
          );
        })}

        <TextSectionTitle> {textTerms.section8.title}</TextSectionTitle>
        <TextSectionContent>{textTerms.section8.content}</TextSectionContent>
        {textTerms.section8.child.map((each, index) => {
          return (
            <TextSectoinChildContent key={index}>
              {each}
            </TextSectoinChildContent>
          );
        })}

        <TextSectionTitle> {textTerms.section9.title}</TextSectionTitle>
        {textTerms.section9.content.map((each, index) => {
          return <TextSectionContent key={index}>{each}</TextSectionContent>;
        })}

        <TextSectionTitle> {textTerms.section10.title}</TextSectionTitle>
        {textTerms.section10.content.map((each, index) => {
          return (
            <TextSectionContent key={index}>
              {each.title_child}
              {each.content_child.map((each, index) => {
                return (
                  <TextSectoinChildContent key={index}>
                    {each}
                  </TextSectoinChildContent>
                );
              })}
            </TextSectionContent>
          );
        })}

        <TextSectionTitle> {textTerms.section11.title}</TextSectionTitle>
        {textTerms.section11.content.map((each, index) => {
          return <TextSectionContent key={index}>{each}</TextSectionContent>;
        })}
        <TextSectionTitle> {textTerms.section12.title}</TextSectionTitle>
        {textTerms.section12.content.map((each, index) => {
          return <TextSectionContent key={index}>{each}</TextSectionContent>;
        })}
        <TextSectionTitle> {textTerms.section13.title}</TextSectionTitle>
        {textTerms.section13.content.map((each, index) => {
          return <TextSectionContent key={index}>{each}</TextSectionContent>;
        })}
        <TextSectionTitle> {textTerms.section14.title}</TextSectionTitle>
        {textTerms.section14.content.map((each, index) => {
          return <TextSectionContent key={index}>{each}</TextSectionContent>;
        })}
        <TextSectionTitle> {textTerms.section15.title}</TextSectionTitle>
        {textTerms.section15.content.map((each, index) => {
          return <TextSectionContent key={index}>{each}</TextSectionContent>;
        })}
      </PartTems01>
      <FooterHome setFlagScroll={setFlagScroll} flagLanguage={flagLanguage} />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const PartTems01 = styled(Box)`
  display: flex;
  flex: 1;
  max-width: 1920px;
  height: 100%;
  overflow-y: auto;
  margin-top: 0px;
  padding-left: 300px;
  padding-right: 300px;
  margin-top: 150px;
  margin-bottom: 50px;
  box-sizing: border-box;
  flex-direction: column;
  color: ${customColor.textTerms};

  transition: 0.5s;
  @media (max-width: 1400px) {
    padding-left: 200px;
    padding-right: 200px;
  }
  @media (max-width: 1200px) {
    padding-left: 150px;
    padding-right: 150px;
  }
  @media (max-width: 700px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media (max-width: 500px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

const PartTermsTitle01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  /* identical to box height */
  letter-spacing: -0.02em;

  transition: 0.5s;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const TextSectionTitle = styled(Box)`
  margin-top: 50px;
  text-align: start;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 160%;
`;

const TextSectionContent = styled(Box)`
  margin-top: 10px;
  text-align: start;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
`;

const TextSectoinChildContent = styled(Box)`
  margin-top: 10px;
  margin-left: 50px;
  text-align: start;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  transition: 0.5s;
  @media (max-width: 1024px) {
    margin-left: 30px;
  }
  @media (max-width: 500px) {
    margin-left: 20px;
  }
`;

export default Tnc;
