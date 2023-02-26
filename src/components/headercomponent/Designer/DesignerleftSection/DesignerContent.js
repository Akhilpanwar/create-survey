import React,   from "react";
import { StyledDiv,StyledButton,StyledLI } from "../../../styles";



const DesignerContent = ({ faq, onToggle, active }) => {
  const { question, answer } = faq;

  return(
    <StyledLI BG="whiteSmoke"   >
      <StyledButton
        
        ABG="lightgrey"
        HBG="whiteSmoke"
        BG="white"
        WD="100%"
        FS="18px"
        PD="15px"
        BS="none"
        TA="left" 
        BB="1px solid darkGrey!important"
        FBG="white"
        TC="grey"
        FC="Black"
        OF="hidden"
        onClick={onToggle}
      >
        {question}
      </StyledButton>
      <StyledDiv  DP={active?"show":"none"}>
        <StyledDiv>{answer}</StyledDiv>
      </StyledDiv>
    </StyledLI>
  );
};

export default DesignerContent;
