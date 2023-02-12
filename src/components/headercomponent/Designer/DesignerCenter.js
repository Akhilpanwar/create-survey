import React, { useState } from "react";
import { StyledDiv, StyledButton, Heading, BottomBorder } from "../../Header/styles";
import Pages from "./centersectiondata/Pages";
import { useSelector, useDispatch } from "react-redux";
import {  AddQuestions, Questions } from "../../Redux/pageSlice";
import MyDropdown from "./centersectiondata/dropdown";

function DesignerCenter() {

  const Dispatch = useDispatch();
const title=useSelector((state)=>state.PageReducer[0].Pages[0])
  return (
 
     
      <StyledDiv style={
        {minHeight:"100%"
      }
      }>
       {title.elements.length ===0 ? (
          <StyledDiv DP="flex" FD="column" JC="center"   AI="center" MBS="21rem">
            <StyledDiv>
              <Heading
                FS="calc(2 * var(--base-unit, 10px))"
                FF="var(--font-family)"
                FST="normal"
                FW="normal"
              >
                This survey is empty.Drag an element from the toolbox or click
                the button below
              </Heading>
            </StyledDiv>
            <StyledDiv>
              <StyledDiv DP="flex" POT="relative" AI="center" >
                <StyledButton
                  color="rgb(25, 179, 148)"
                  BG="white"
                  FS="20px"
                  BD="none"
                  WD="22rem"
                  HG="3rem"
                  BSS="2px 2px 2px 2px lightgrey"
                
             
                  HOT="3px solid rgb(25, 179, 148)"
                  onClick={() =>Dispatch(AddQuestions())}
                >
                  Add Question
                
                </StyledButton>
                <StyledDiv style={{minHeight:"100%"}}>
                  <MyDropdown />
                </StyledDiv>
              </StyledDiv>
            </StyledDiv> 
          </StyledDiv> 
        ) : (
       

     
       <StyledDiv  DP="flex"  AI="center" style={{overflowY:"scroll",maxHeight:"700px"}} >

            <Pages />
            </StyledDiv>
        
       
        )}
      </StyledDiv>
      

  );
}

export default DesignerCenter;
