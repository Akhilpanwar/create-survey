import React from "react";
import { StyledDiv } from "../../Header/styles";

import DesignerSidebar from "./DesignerSidebar";
import DesignerCenter from "./DesignerCenter";

import DesignerDrop from "./DesignerDropMenu/DesignerDrop";

function Designer() {
  return (
    <StyledDiv DP="flex">
      <StyledDiv WD="10%">
        <DesignerSidebar />
      </StyledDiv>
      <StyledDiv WD="60%" >
        <DesignerCenter />
      </StyledDiv>
      <StyledDiv WD="30%" OT="1px solid lightgrey">
<DesignerDrop/>
      </StyledDiv>
    </StyledDiv>
  );
}

export default Designer;
