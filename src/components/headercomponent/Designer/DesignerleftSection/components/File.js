import React from "react";
import { Heading, StyledDiv } from "../../../../Header/styles";
function File() {
  return (
    <StyledDiv DP="flex" HG="20rem" WD="100%" JC="center" AI="center">
      <StyledDiv
        DP="flex"
        OT="3px dotted lightgrey"
        HG="90%"
        WD="100%"
        style={{
          boxSizing: "border-box",
        }}
      >
        <StyledDiv
          DP="flex"
          FD="column"
          AI="center"
          style={{ minWidth: "100%" }}
          JC="center"
        >
          <Heading FS="15px" FW="200">
            Drop a file here or click the button below to load the file.
          </Heading>
          <Heading TC="lightgrey">Choose FIle</Heading>
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
}

export default File;
