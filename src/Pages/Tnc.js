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
  const storageFlagLanguage = localStorage.getItem("flagLang")
  const [flagLanguage, setFlagLanguage] = useState(storageFlagLanguage === '1');
  const [flagRotate, setFlagRotate] = useState(0);
  const [flagScroll, setFlagScroll] = useState(false);
  const [flagTerms, setFlagTerms] = useState(false);

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
    <StyledComponent flagterms={flagTerms ? 1 : 0}>
      <TopNavbarHome
        flagLanguage={flagLanguage}
        setFlagLanguage={setFlagLanguage}
        flagScroll={flagScroll}
        setFlagScroll={setFlagScroll}
        flagTerms={flagTerms}
        setFlagTerms={setFlagTerms}
      />
      <PartTems01>
        <PartTermsTitle01>{textTerms.title01}</PartTermsTitle01>
        <PartTermsContent01>
          Age requirements
          <br />
          If you’re under the age required to manage your own Google Account,
          you must have your parent or legal guardian’s permission to use a
          Google Account. Please ask your parent or legal guardian to read these
          terms with you.
          <br />
          <br />
          If you’re a parent or legal guardian, and you allow your child to use
          the services, then these terms apply to you and you’re responsible for
          your child’s activity on the services.
          <br />
          <br />
          Some Google services have additional age requirements as described in
          their service-specific additional terms and policies.
          <br />
          <br />
          Your relationship with Google <br />
          These terms help define the relationship between you and Google.
          Broadly speaking, we give you permission to use our services if you
          agree to follow these terms, which reflect how Google’s business works
          and how we earn money. When we speak of 'Google', 'we', 'us' and
          'our', we mean Google LLC and its affiliates.
          <br />
          <br />
          What you can expect from us <br />
          Provide a broad range of useful services
          <br />
          <br />
          We provide a broad range of services that are subject to these terms,
          including: <br />
          apps and sites (like Search and Maps)
          <br /> platforms (like Google Shopping) <br />
          integrated services (like Maps embedded in other companies’ apps or
          sites)
          <br /> devices (like Google Nest)
          <br /> Many of these services also include content that you can stream
          or interact with.
          <br />
          <br />
          Our services are designed to work together, making it easier for you
          to move from one activity to the next. For example, if your Calendar
          event includes an address, you can click on that address and Maps can
          show you how to get there.
          <br />
          <br />
          Develop, improve and update Google services
          <br />
          <br /> We’re constantly developing new technologies and features to
          improve our services. For example, we use artificial intelligence and
          machine learning to provide you with simultaneous translations and to
          better detect and block spam and malware. As part of this continual
          improvement, we sometimes add or remove features and functionalities,
          increase or decrease limits to our services and start offering new
          services or stop offering old ones. When a service requires or
          includes downloadable software, that software sometimes updates
          automatically on your device once a new version or feature is
          available. Some services let you adjust your automatic update
          settings. <br />
          <br />
          If we make material changes that negatively impact your use of our
          services or if we stop offering a service, we’ll provide you with
          reasonable advance notice, except in urgent situations such as
          preventing abuse, responding to legal requirements or addressing
          security and operability issues. We’ll also provide you with an
          opportunity to export your content from your Google Account using
          Google Takeout, subject to applicable law and policies.
        </PartTermsContent01>
      </PartTems01>
      <FooterHome
        setFlagTerms={setFlagTerms}
        setFlagScroll={setFlagScroll}
        flagLanguage={flagLanguage}
      />
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

const PartTermsContent01 = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 50px;
  text-align: start;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
`;

export default Tnc;
