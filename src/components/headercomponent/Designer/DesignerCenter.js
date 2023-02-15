import React, { useState } from "react";
import { StyledDiv, StyledButton, Heading } from "../../Header/styles";
import Pages from "./centersectiondata/Pages";
import { useSelector, useDispatch } from "react-redux";
import { AddQuestions, Questions } from "../../Redux/pageSlice";
import { survey } from "../../Header/survey";
import MyDropdown from "./centersectiondata/dropdown";
import { AddQuestionId } from "../../Redux/surveySlice";

function DesignerCenter() {
  const Dispatch = useDispatch();
  const title = useSelector((state) => state.PageReducer[0].Pages[0]);
  const Qn = useSelector((state) => state.surveyReducer.QuestionId);
  const el=useSelector((state)=>state.surveyReducer.drag);
const ind=useSelector((state)=>state.surveyReducer.index);
  const text = survey[0].content[0].forms[9].data;
  const PageIndex = 0;
  const handleQuestion = (e, PageIndex, text, Qn) => {
    e.preventDefault();
    const element = Object.assign({}, text, {
      name: `question${+Qn}`,
    });

    Dispatch(AddQuestions({ PageIndex, element }));

    Dispatch(AddQuestionId());
  };
  const handleDragEnter=(el,ind,Qn)=>{

    const PageIndex=ind
    const element = Object.assign({}, el, {
      name: `question${+Qn}`,
    });

    Dispatch(AddQuestions({ PageIndex, element }));

   
 Dispatch(AddQuestionId());

  }
  return (
    <StyledDiv DP="flex" style={{ minHeight: "100%" }}

    >
      {title.elements.length === 0 ? (
        <StyledDiv
        onDrop={()=>handleDragEnter(el,ind,Qn)}
        onDragOver={(e)=>e.preventDefault()}
          DP="flex"
          FD="column"
          JC="center"
          AI="center"
          style={{ margin: "auto" }}
        >
          <StyledDiv>
            <Heading
              FS="calc(2 * var(--base-unit, 10px))"
              FF="var(--font-family)"
              FST="normal"
              FW="normal"
            >
              This survey is empty.Drag an element from the toolbox or click the
              button below
            </Heading>
          </StyledDiv>
   
            <StyledDiv DP="flex" POT="relative" AI="center">
              <StyledButton
                color="rgb(25, 179, 148)"
                BG="white"
                FS="20px"
                BD="none"
                WD="22rem"
                HG="3rem"
                BSS="2px 2px 2px 2px lightgrey"
                HOT="3px solid rgb(25, 179, 148)"
                onClick={(e) => handleQuestion(e, PageIndex, text, Qn)}
              >
                Add Question
              </StyledButton>
              <StyledDiv style={{ minHeight: "100%" }}>
                <MyDropdown />
              </StyledDiv>
            </StyledDiv>
          </StyledDiv>
    
      ) : (
        <StyledDiv WD="100%" HG="600px" style={{overflowY:"scroll"}}>
          <Pages />
        </StyledDiv>
      )}
    </StyledDiv>
  );
}

export default DesignerCenter;
