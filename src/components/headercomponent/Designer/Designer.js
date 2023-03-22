import React from "react";
import { StyledDiv } from "../../Header/styles";

import DesignerSidebar from "./DesignerSidebar";
import DesignerCenter from "./DesignerCenter";

import DesignerDrop from "./DesignerDropMenu/DesignerDrop";
import { useSelector } from "react-redux";
import Accordian from "./DesignerleftSection/Accordian/Accordian";
function Designer() {
  const pages=useSelector((state)=>state.PageReducer[0].Pages)
  return (
    <StyledDiv DP="flex" HG="632px" >
      <StyledDiv WD="10%">
        <DesignerSidebar />
      </StyledDiv>
      <StyledDiv  WD="60%" >
        <DesignerCenter />
      </StyledDiv>
      <StyledDiv WD="30%" HG="80rem"  style={{overflowY:"scroll",maxHeight:"600px",borderLeft:".1px solid lightgrey"}}>
<Accordian pages={pages}/>
      </StyledDiv>
    </StyledDiv>
  );
}

export default Designer;
