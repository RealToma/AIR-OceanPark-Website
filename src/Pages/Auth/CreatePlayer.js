import React, { useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { textCreatePlayer } from "../../Config/Text";
import { customColor } from "../../Config/Color";
import TopNavbarAccount from "../../Layouts/TopNavbarAccount";
import FooterAccount from "../../Layouts/FooterAccount";
import imgMark01 from "../../Assets/image/mark_AiR03.png";
import { useNavigate } from "react-router-dom";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import CheckIcon from "@mui/icons-material/Check";
import { actionCreatePlayer } from "../../Actions/Auth";

const CreatePlayer = () => {
  const navigate = useNavigate();
  const [flagGender, setFlagGender] = useState(false);
  const [flagCheck, setFlagCheck] = useState(false);
  const [username, setUsername] = useState("");
  const [msgAlert, setMsgAlert] = useState("");

  const handleCreatePlayer = () => {
    const token = localStorage.getItem("token");
    console.log("token:", token);
    if (username === "") {
      setMsgAlert(textCreatePlayer.ta01.en);
      return;
    }
    if (flagCheck === false) {
      setMsgAlert(textCreatePlayer.ta02.en);
      return;
    }
    let playerData = {
      name: username,
      gender: !flagGender ? "male" : "female",
    };
    actionCreatePlayer(token, playerData).then((res) => {
      if(res.status===2000)
      {
        navigate('/login');
      }
      else if(res.status === 1000)
      {
        setMsgAlert(textCreatePlayer.ta04.en);
      }
    });
  };
  return (
    <StyledComponent>
      <TopNavbarAccount />
      <PartCreate01>
        <PartHeader01>
          <img src={imgMark01} width={"170px"} height={"47px"} alt="" />
        </PartHeader01>
        <PartContent01>
          <TextTitle01>{textCreatePlayer.tt01.en}</TextTitle01>
          <InputCustom01
            component={"input"}
            placeholder={textCreatePlayer.ti01.en}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></InputCustom01>
          <PartGender01>
            <PartMale01
              onClick={() => {
                setFlagGender(false);
              }}
              flag_gender={flagGender ? 1 : 0}
            >
              <ManIcon />
            </PartMale01>
            <PartFemale01
              onClick={() => {
                setFlagGender(true);
              }}
              flag_gender={flagGender ? 1 : 0}
            >
              <WomanIcon />
            </PartFemale01>
          </PartGender01>
          <TextMessage01>{msgAlert}</TextMessage01>
          <PartAgree01>
            <CheckBox01
              onClick={() => {
                setFlagCheck(!flagCheck);
              }}
            >
              {!flagCheck ? <></> : <CheckIcon sx={{ fontSize: "1rem" }} />}
            </CheckBox01>
            <TextAgree01>
              {textCreatePlayer.ti02.en}
              {"\u00a0"}
              <u style={{ cursor: "pointer" }}>{textCreatePlayer.tiu02.en}</u>
            </TextAgree01>
          </PartAgree01>
          <ButtonCreate01
            onClick={() => {
              handleCreatePlayer();
            }}
          >
            {textCreatePlayer.tb01.en}
          </ButtonCreate01>
        </PartContent01>
      </PartCreate01>
      <FooterAccount />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${customColor.backColor01};
`;

const PartCreate01 = styled(Box)`
  display: flex;
  position: fixed;
  width: 386px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  filter: drop-shadow(4px 4px 21px rgba(0, 0, 0, 0.1));
  border-radius: 16px;
  background: ${customColor.backColor01};
  align-items: center;
  transition: 0.5s;
  @media (max-width: 500px) {
    width: 300px;
  }
`;

const PartHeader01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 91px;
  border-radius: 16px 16px 0px 0px;
  background-color: ${customColor.mainColor02};
  justify-content: center;
  align-items: center;

  transition: 0.5s;
  @media (max-width: 500px) {
    height: 80px;
  }
`;

const TextTitle01 = styled(Box)`
  display: flex;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 160%;
  /* identical to box height, or 26px */
  text-align: center;
  color: ${customColor.mainColor02};
`;

const PartContent01 = styled(Box)`
  display: flex;
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 0px 0px 16px 16px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  background-color: ${customColor.mainColor01};
  transition: 0.5s;
  @media (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const InputCustom01 = styled(Box)`
  display: flex;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 6px;
  color: ${customColor.textColor02};
  background-color: ${customColor.backColor03};
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  height: 45px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  margin-top: 20px;
`;

const TextMessage01 = styled(Box)`
  display: flex;
  width: 100%;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: ${customColor.textColor04};
  margin-top: 10px;
  height: 20px;
`;

const PartGender01 = styled(Box)`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-top: 10px;
`;
const PartMale01 = styled(Box)`
  display: flex;
  flex: 1;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: 0.5s;
  border: ${({ flag_gender }) =>
    !flag_gender
      ? `1px solid ${customColor.mainColor02}`
      : `1px solid ${customColor.backColor01}`};
  background-color: ${({ flag_gender }) =>
    !flag_gender ? customColor.mainColor02 : customColor.mainColor01};
  color: ${({ flag_gender }) =>
    !flag_gender ? customColor.mainColor01 : customColor.mainColor02};
  cursor: pointer;
`;
const PartFemale01 = styled(Box)`
  display: flex;
  flex: 1;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: 0.3s;
  border: ${({ flag_gender }) =>
    flag_gender
      ? `1px solid ${customColor.mainColor02}`
      : `1px solid ${customColor.backColor01}`};
  background-color: ${({ flag_gender }) =>
    flag_gender ? customColor.mainColor02 : customColor.mainColor01};
  color: ${({ flag_gender }) =>
    flag_gender ? customColor.mainColor01 : customColor.backColor04};
  cursor: pointer;
`;

const PartAgree01 = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 10px;
`;

const CheckBox01 = styled(Box)`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: ${customColor.backColor01};
  color: ${customColor.mainColor02};
  cursor: pointer;
`;

const ButtonCreate01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 45px;
  border-radius: 6px;
  background-color: ${customColor.mainColor02};
  color: ${customColor.mainColor01};
  justify-content: center;
  align-items: center;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  /* or 22px */
  text-align: center;
  margin-top: 10px;
  cursor: pointer;
`;

const TextAgree01 = styled(Box)`
  display: flex;
  color: ${customColor.textColor03};
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  /* or 22px */
  text-align: center;
  margin-left: 10px;

`;

export default CreatePlayer;
