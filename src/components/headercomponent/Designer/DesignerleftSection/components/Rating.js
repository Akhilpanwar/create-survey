import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import { StyledDiv, SurveyInput } from "../../../../Header/styles";

import { useDispatch } from "react-redux";
import { AddRate } from "../../../../Redux/pageSlice";

function Rating({ Rates,PageIndex, elementIndex }) {
const item=Rates.rateMax
const items=[]
for(let i=1;i<item+1;i++){
items.push(i)
}
  const Dispatch = useDispatch();
  const handleAddRate = (PageIndex, elementIndex, items) => {
    if(items.length<20){
    const val = items.length + 1;

    
    Dispatch(AddRate({ PageIndex, elementIndex, val }));
    }
  };
  const handleRemove = (PageIndex, elementIndex, items) => {
  
    const val = items.length - 1;
    Dispatch(AddRate({ PageIndex, elementIndex, val }));
   
  };

  return (
    <StyledDiv DP="flex" FD="row"   style={{boxSizing:'borderBox',width:"100%",whiteSpace:"nowrap"}}>
      <IoIosRemoveCircle
        size={30}
        color="red"
        onClick={() => handleRemove(PageIndex, elementIndex, items)}
      />

      <IoIosAddCircle
        style={{ marginLeft: "1rem" }}
        color="rgb(25, 179, 148)"
        size={30}
        onClick={() => handleAddRate(PageIndex, elementIndex, items)}
      />
      <StyledDiv DP="flex" style={{boxSizing:'borderBox',width:"100%",flexWrap:"wrap",whiteSpace:"nowrap",overflowX:"hidden",maxWidth:"100%"}} >
      {items.map((item, index) => {
        return (
          <StyledDiv >
            <SurveyInput
              role="textbox"
              OT="transparent"
              BR="60px"
              HG="3rem"
         JC="space-around"
              FBG="white !important"
              FOT="3px solid rgb(25, 179, 148)"
              FBR="60px"
              FS="24px"
              AI="center"
             BG="transparent"
              DP="flex"
              OW="break-word"
              WW="break-word"
              WB="break-word"
              style={{
                fontSize: "25px",
                minWidth: "fit-content",
                width:"3rem",
                borderShadow:"12px 12px 12px 12px ",
                textOverflow:"wrap",
                whiteSpace: "nowrap"
              }}
              placeholder={item}
              contentEditable="true"
            ></SurveyInput>
          </StyledDiv>
        );
      })}
      </StyledDiv>
    </StyledDiv>
  );
}

export default Rating;
