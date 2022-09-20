import axios from "axios";

export const actionLogin = async (loginData) => {
  let response;
  try {
    response = await axios.post(
      process.env.REACT_APP_STRAPI_URL + "/login",
      loginData
    );
  } catch (error) {
    console.log(error);
  }
  let code = response.data.code;
  if (code === 2000) {
    return {
      status: code,
      playerInfo: response.data.result,
    };
  } else {
    return { status: code };
  }
};

export const actionSignup = async (signupData) => {
  let response;
  try {
    response = await axios.post(
      process.env.REACT_APP_STRAPI_URL + "/register",
      signupData
    );
  } catch (error) {
    console.log(error);
  }
  let code = response.data.code;
  if (code === 2000) {
    return { status: code, token: response.data.result.token };
  } else {
    return { status: code };
  }
};

export const actionCreatePlayer = async (token, playerData) => {
  console.log(token);
  let response;
  try {
    response = await axios.post(
      process.env.REACT_APP_STRAPI_URL + "/createPlayer",
      playerData,
      {
        headers: {
          token: token,
          "Accept": "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          "Access-Control-Allow-Origin": "*/*",
          "Access-Control-Allow-Headers": "*/*", // this will allow all CORS requests
          "Access-Control-Allow-Methods": "*/*", // this states the allowed methods
          "Content-Type": "*/*",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
  console.log(response);
  let code = response.data.code;
  if (code === 2000) {
    console.log(response);
  } else {
    return { status: code };
  }
  console.log(response);
};
