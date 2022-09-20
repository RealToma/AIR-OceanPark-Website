import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { customColor } from "../Config/Color";

const EachList = ({ image, text }) => {
//   const [flagSelect, setFlagSelect] = useState(false);

  return (
    <ListEach01 onClick={()=>{
        // setFlagSelect(true);
    }}>
      <PartListEachContent01>
        <PartListEachImage01>
          <img src={image} width={"100%"} height={"100%"} alt="" />
        </PartListEachImage01>
        <PartListEachText01>{text}</PartListEachText01>
      </PartListEachContent01>
    </ListEach01>
  );
};

const ListEach01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 30px;
  border-left: 5px solid rgba(255, 255, 255, 0);
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    border-left: 5px solid ${customColor.mainColor01};
  }
`;

const PartListEachContent01 = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
`;
const PartListEachImage01 = styled(Box)`
  width: 34px;
  height: 18px;
`;
const PartListEachText01 = styled(Box)`
  color: ${customColor.mainColor01};
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  margin-left: 10px;
`;

export default EachList;
