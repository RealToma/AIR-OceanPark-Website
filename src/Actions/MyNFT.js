import axios from "axios";

export const actionWithdraw = async (data, token) => {
  let response;
  console.log("withdraw data:", data);
  console.log("token:", token);
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
