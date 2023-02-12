import React from "react";
import { StyledDiv } from "../../Header/styles";

import DesignerSidebar from "./DesignerSidebar";
import DesignerCenter from "./DesignerCenter";

function Designer() {
  return (
    <StyledDiv DP="flex"  BG="whiteSmoke">
      <StyledDiv WD="10%">
        <DesignerSidebar />
      </StyledDiv>
      <StyledDiv WD="90%">
        <DesignerCenter />
      </StyledDiv>
    </StyledDiv>
  );
}

export default Designer;
