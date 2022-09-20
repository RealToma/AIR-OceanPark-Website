import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { customColor } from "../Config/Color";

const CustomBuyNFT = ({ imageNFT, imageCoin, imageMethod, text, backColor }) => {
  //   const [flagSelect, setFlagSelect] = useState(false);

  return (
    <StyledComponent bgcolor={backColor}>
      <img
        src={imageNFT}
        width={"100%"}
        height={"100%"}
        style={{ borderRadius: "6px" }}
        alt=""
      />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 6px;
`;

export default CustomBuyNFT;
