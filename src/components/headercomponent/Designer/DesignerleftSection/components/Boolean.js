import React from "react";
import { StyledDiv, SurveyInput } from "../../../../Header/styles";

function Boolean(items, pageIndex, elementIndex) {
  return (
    <StyledDiv>
      <StyledDiv DP="flex" WD="100%" HG="100%" style={{ flexWrap: "wrap" }}>
        <StyledDiv
          DP="flex"
          FD="row"
          JC="space-evenly"
          WD="20%"
          HG="3rem"
          BG="whiteSmoke"
          AI="center"
          BD="3px solid lightgrey"
          BR="50px"
          style={{
            boxSizing: "border-box",
            boxShadow: "inset 0px 1px 2px rgb(0 0 0 / 15%)",
            flexWrap: "wrap",
          }}
        >
          <StyledDiv DP="flex">
            <SurveyInput
              FOT="2px solid rgb(25, 179, 148)"
              contentEditable="true"
              placeholder="YES"
              style={{ fontWeight: "200", fontSize: "18px" }}
              FBR="6px"
              DP="flex"
            />
          </StyledDiv>
          <StyledDiv DP="flex">
            <SurveyInput
              FOT="2px solid rgb(25, 179, 148)"
              contentEditable="true"
              FBR="6px"
              style={{ fontWeight: "200", fontSize: "18px" }}
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
