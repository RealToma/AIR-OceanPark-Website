import axios from "axios";

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



export const actionWithdraw = async (data, token) => {
  let response;
  try {
    response = await axios.post(
      process.env.REACT_APP_CITIZEN_URL + "/withdraw",
      data,
      {
        headers: {
          token: token,
        },
      }
    );
    console.log(response);
    let code = response.data.code;
    if (code === 2000) {
      return {
        status: code,
      };
    } else {
      return { status: code };
    }
  } catch (error) {
    console.log(error);
  }
};
