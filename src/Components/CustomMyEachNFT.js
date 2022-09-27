import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import styled from "styled-components";
import imgAiRMark01 from "../Assets/image/icons/air_mark01.png";
import imgSolana01 from "../Assets/image/icons/solana01.png";
import imgWithdraw01 from "../Assets/image/icons/withdraw01.png";
import imgWithdraw02 from "../Assets/image/icons/withdraw02.png";
import { customColor } from "../Config/Color";
import  ArrowForwardIcon  from "@mui/icons-material/ArrowForward";

const CustomMyEachNFT = ({ dataNFT }) => {
  //   const [flagSelect, setFlagSelect] = useState(false);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);

  return (
    <StyledComponent
      onClick={() => {
        setOpen(true);
      }}
    >
      <PartImage01>
        <img
          src={dataNFT.images}
          width={"100%"}
          height={"100%"}
          style={{ borderRadius: "6px" }}
          alt=""
        />
      </PartImage01>
      <PartFooter01>
        <PartLeft01>
          <PartIcon01>
            <img src={imgAiRMark01} width={"100%"} height={"100%"} alt="" />
          </PartIcon01>
          <PartText01>{dataNFT.nftID}</PartText01>
        </PartLeft01>
        <PartWithdraw01>
          <img src={imgWithdraw01} width={"100%"} height={"100%"} alt="" />
        </PartWithdraw01>
      </PartFooter01>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropComponent={customBackdrop}
      >
        <PartModal01>
          <img
            src={dataNFT.images}
            width={"100%"}
            height={"100%"}
            style={{ borderRadius: "6px" }}
            alt=""
          />
          <PartModalFooter01>
            <PartLeft01>
              <PartText02>{dataNFT.nftID}</PartText02>
            </PartLeft01>
            <PartWithdraw02>
              <PartIcon02>
                <img src={imgAiRMark01} width={"100%"} height={"100%"} alt="" />
              </PartIcon02>
              <PartRightIcon01>
                <ArrowForwardIcon />
              </PartRightIcon01>
              <PartIcon02>
                <img src={imgSolana01} width={"100%"} height={"100%"} alt="" />
              </PartIcon02>
              <ButtonWithdraw01>
                <PartIcon03>
                  <img
                    src={imgWithdraw02}
                    width={"100%"}
                    height={"100%"}
                    alt=""
                  />
                </PartIcon03>
                <PartTextWithdraw01>{"Withdraw"}</PartTextWithdraw01>
              </ButtonWithdraw01>
            </PartWithdraw02>
          </PartModalFooter01>
        </PartModal01>
      </Modal>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;
  width: 200px;
  height: 200px;
`;

const PartImage01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 6px;
`;

const PartFooter01 = styled(Box)`
  display: flex;
  position: absolute;
  bottom: -30px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const PartLeft01 = styled(Box)`
  display: flex;
  align-items: center;
`;

const PartWithdraw01 = styled(Box)`
  display: flex;
  width: 26px;
  height: 26px;
`;

const PartWithdraw02 = styled(Box)`
  display: flex;
  align-items: center;
`;
const PartIcon02 = styled(Box)`
  display: flex;
  width: 46px;
  height: 46px;
  margin-right: 10px;
`;

const PartIcon03 = styled(Box)`
  display: flex;
  width: 20px;
  height: 20px;
`;

const PartRightIcon01 = styled(Box)`
  display: flex;
  margin-right: 10px;
`;

const ButtonWithdraw01 = styled(Box)`
  display: flex;
  width: 128px;
  height: 46px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${customColor.textColor03};
  color: ${customColor.mainColor01};
`;

const PartIcon01 = styled(Box)`
  display: flex;
  width: 36px;
  height: 36px;
`;
const PartText01 = styled(Box)`
  display: flex;
  margin-left: 5px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${customColor.textColor02};
  margin-right: 10px;
`;

const PartText02 = styled(Box)`
  display: flex;
  color: ${customColor.mainColor01};
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  /* identical to box height */
  letter-spacing: -0.02em;
`;

const PartTextWithdraw01 = styled(Box)`
  display: flex;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
`;

const PartModal01 = styled(Box)`
  display: flex;
  position: relative;
  width: 560px;
  height: 560px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: box-shadow 300ms;
  transition: transform 505ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
  outline: none;
  animation: back_animation1 0.5s 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  @keyframes back_animation1 {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
`;

const PartModalFooter01 = styled(Box)`
  display: flex;
  position: absolute;
  bottom: -60px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const customBackdrop = styled(Box)`
  width: 100%;
  height: 100%;
  position: fixed;

  background-color: ${customColor.textColor03};
  opacity: 0.7;
`;

export default CustomMyEachNFT;
