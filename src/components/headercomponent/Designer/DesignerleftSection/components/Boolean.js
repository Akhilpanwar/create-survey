import React from "react";
import { StyledDiv, SurveyInput } from "../../../../Header/styles";

function Boolean() {
  return (
    <StyledDiv>
      <StyledDiv DP="flex" WD="8rem" HG="3rem">
        <StyledDiv
          DP="flex"
          FD="row"
          JC="space-evenly"
          WD="100%"
          HG="100%"
          BG="whiteSmoke"
          AI="center"
          BD="3px solid lightgrey"
          BR="50px"
          style={{boxShadow: "inset 0px 1px 2px rgb(0 0 0 / 15%)"}}
        >
          
          <StyledDiv DP="flex" >
            <SurveyInput
              FOT="2px solid rgb(25, 179, 148)"
              contentEditable="true"
              placeholder="YES"
              FBR="6px"
              DP="flex"
            
            />
            
          </StyledDiv>
          <StyledDiv >
            <SurveyInput
              FOT="2px solid rgb(25, 179, 148)"
              contentEditable="true"
              FBR="6px"
           
              BG="whiteSmoke"
              placeholder="NO"
              OT="none"
              BD="none"
            />
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>
      </StyledDiv>

  );
}

export default Boolean;
