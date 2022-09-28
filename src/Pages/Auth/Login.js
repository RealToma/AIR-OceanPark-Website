import React, { useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { textLogin } from "../../Config/Text_";
import { customColor } from "../../Config/Color";
import TopNavbarAccount from "../../Layouts/TopNavbarAccount";
import FooterAccount from "../../Layouts/FooterAccount";
import { useNavigate } from "react-router-dom";
import { actionLogin } from "../../Actions/Auth";
import LoginPane from '../../Components/Login'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgAlert, setMsgAlert] = useState("");

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleLogin = () => {
    if (email === "") {
      setMsgAlert(textLogin.ta01.en);
      return;
    }
    if (email !== "") {
      if (!isValidEmail(email)) {
        setMsgAlert(textLogin.ta02.en);
        return;
      }
    }
    if (password === "") {
      setMsgAlert(textLogin.ta03.en);
      return;
    }
    let loginData = {
      type: "email",
      handle: email,
      password: password,
    };
    actionLogin(loginData).then((res) => {
      if (res.status === 1001) {
        setMsgAlert(textLogin.ta04.en);
      } else if (res.status === 1002) {
        setMsgAlert(textLogin.ta05.en);
      } else if (res.status === 2000) {
        localStorage.setItem("userInfo", JSON.stringify(res.playerInfo.player));
        localStorage.setItem("userToken", res.playerInfo.userToken);
        localStorage.setItem("token", res.playerInfo.token);
        if (res.playerInfo.player.name === undefined) {
          navigate("/createPlayer");
        } else {
          navigate("/myNFT");
          window.location.reload();
        }
      } else {
        setMsgAlert(textLogin.ta06.en);
      }
    });
  };

  return (
    <StyledComponent>
      <TopNavbarAccount />
      <LoginPane />
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


export default Login;
