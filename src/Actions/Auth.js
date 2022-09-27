import axios from "axios";

export const actionLogin = async (loginData) => {
  let response;
  try {
    response = await axios.post(
      process.env.REACT_APP_AIRAPI_URL + "/login",
      loginData
    );
    let code = response.data.code;
    if (code === 2000) {
      return {
        status: code,
        playerInfo: response.data.result,
      };
    } else {
      return { status: code };
    }
  } catch (error) {
    console.log(error);
  }
};

export const actionSignup = async (signupData) => {
  let response;
  try {
    response = await axios.post(
      process.env.REACT_APP_AIRAPI_URL + "/register",
      signupData
    );
    let code = response.data.code;
    if (code === 2000) {
      return { status: code, token: response.data.result.token };
    } else {
      return { status: code };
    }
  } catch (error) {
    console.log(error);
  }
};

export const actionCreatePlayer = async (token, playerData) => {
  let url = process.env.REACT_APP_AIRAPI_URL + "/createPlayer";
  let response;

  try {
    response = await axios.post(
      url, //https://api-pre-prod.air-world.io/airapi/createPlayer
      playerData,
      {
        headers: {
          token: token,
        },
      }
    );
    let code = response.data.code;
    return { status: code };
  } catch (error) {
    console.log(error);
  }
};

export const actionGetCitizens = async (token) => {
  let response;
  let url = process.env.REACT_APP_CITIZEN_URL + "/citizens";
  try {
    response = await axios.get(url, {
      headers: {
        token: token,
      },
    });
    let code = response.data.code;
    if (code === 2000) {
      console.log(response.data.result.citizens);
      return { status: code, citizens: response.data.result.citizens };
    } else {
      return { status: code };
    }
  } catch (error) {
    console.log(error);
  }
};

// curl --location --request GET ‘https://api-pre-prod.air-world.io/citizens/citizens’ \
// --header ‘token: qzRjVH88QoB4natR’
