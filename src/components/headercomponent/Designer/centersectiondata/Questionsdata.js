import React from "react";
import {
  StyledDiv,
  StyledButton,
  SurveyInput,
  QuestionNumber,
} from "../../../Header/styles";
import SingleInput from "../DesignerleftSection/components/singleInput";
import RadioGroup from "../DesignerleftSection/components/RadioGroup";
import Rating from "../DesignerleftSection/components/Rating";

import Boolean from "../DesignerleftSection/components/Boolean";
import QuestionsFun from "./QuestionsFun";
import Ranking from "../DesignerleftSection/components/Ranking";
import { useSelector, useDispatch } from "react-redux";
import { survey } from "../../../Header/survey";
import CheckBox from "../DesignerleftSection/components/CheckBox";

import ImagePicker from "../DesignerleftSection/components/imagePicker";
import File from "../DesignerleftSection/components/File";

import DropDown from "../DesignerleftSection/components/DropDown";
import TagBox from "../DesignerleftSection/components/TagBox";
import Comment from "../DesignerleftSection/components/Comment";
import { AddQuestions, DropQuestions } from "../../../Redux/pageSlice";
import { AddQuestionId } from "../../../Redux/surveySlice";
import MyDropdown from "./dropdown";
function Questionsdata({
  Page,
  PageIndex,
  Add,
  DeleteQuestions,
  DuplicateQuestion,
}) {
  let Dispatch = useDispatch();
  const Qn = useSelector((state) => state.surveyReducer.QuestionId);
  const val = useSelector((state) => state.PageReducer[0].value);
  const Rates = useSelector((state) => state.surveyReducer.Rate);

  const el = useSelector((state) => state.surveyReducer.drag);
  const ind = useSelector((state) => state.surveyReducer.index);

  const text = survey[0].content[0].forms[9].data;

  const handleDragEnter = (el, ind, Qn) => {
    const PageIndex = ind;
    const element = Object.assign({}, el, {
      name: `question${+Qn}`,
    });

    Dispatch(DropQuestions({ PageIndex, element }));

    Dispatch(AddQuestionId());
  };
  return (
    <StyledDiv style={{ minHeight: "100%" }}>
      <StyledDiv
        DP="flex"
        FD="column"
        WD="100%"
        JC="space-around"
        style={{ boxSizing: "border-box" }}
      >
        <StyledDiv DP="flex" FD="column" style={{ boxSizing: "border-box" }}  >
          {Page.elements.map((element, elementIndex) => {
            return (
              <StyledDiv   onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDragEnter(el, ind, Qn)}> 
              <StyledDiv
                HOT="2px inset orange"
                FBV="visible"
                HBV="visible"
                DP="flex"
                JC="space-around"
                FD="column"
                HBS="0 0 0 2px var(--secondary, #ff9814)"
                BG="white !important"
                BR="4px"
                WD="100%"
                FBS="0 0 0 2px var(--secondary, #ff9814)"
                tabIndex="1234"
                FOT="2px solid orange"
                MBE="1rem"
                style={{
                  minWidth: "100%",
                  boxSizing: "border-box",
                  boxShadow: "0px 0px 0px 2px lightgrey",
                }}
               
            
              >
                <StyledDiv
                  HG="100%"
                  style={{
                    boxSizing: "border-box",
                    width: "90%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                
                >
                  <StyledDiv DP="flex" AI="center"  
>
                    <StyledDiv DP="flex" FD="row" AI="baseline" MBS="1rem">
                      <StyledDiv>
                        <QuestionNumber>
                          {element.name.split("question")}.
                        </QuestionNumber>
                      </StyledDiv>
                      <StyledDiv DP="flex">
                        <SurveyInput
                          DP="flex"
                          BG="white !important"
                          role="textBox"
                          contentEditable="true"
                          TC="black"
                          placeholder={`${element.name}`}
                          BD="none"
                          OT="none"
                          FBG="white !important"
                          FOT="3px solid rgb(25, 179, 148)"
                          OW="break-word"
                          WW="break-word"
                          WB="break-word"
                          FBR="5px"
                          FS="24px"
                        />
                      </StyledDiv>
                    </StyledDiv>
                  </StyledDiv>
                  <StyledDiv
                    DP="flex"
                    HG="100%"
                    FD="column"
                    MBS="1rem"
                    MBE="1rem"
                    style={{
                      boxSizing: "border-box",
                      width: "95%",
                     
                      height: "100%",
                      
                    }}
                   
                  >
                    {element.type === "text" ? (
                      <SingleInput
                        items={element}
                        PageIndex={PageIndex}
                        elementIndex={elementIndex}
                      />
                    ) : element.type === "radiogroup" ? (
                      <RadioGroup
                        items={element}
                        PageIndex={PageIndex}
                        elementIndex={elementIndex}
                      />
                    ) : element.type === "CheckBox" ? (
                      <CheckBox
                        items={element}
                        PageIndex={PageIndex}
                        elementIndex={elementIndex}
                      />
                    ) : element.type === "dropdown" ? (
                      <DropDown
                        items={element}
                        PageIndex={PageIndex}
                        elementIndex={elementIndex}
                      />
                    ) : element.type === "TagBox" ? (
                      <TagBox
                        items={element}
                        PageIndex={PageIndex}
                        elementIndex={elementIndex}
                      />
                    ) : element.type === "Rating" ? (
                      <Rating
                        Rates={element}
                        PageIndex={PageIndex}
                        elementIndex={elementIndex}
                      />
                    ) : element.type === "file" ? (
                      <File
                        iitems={element}
                        PageIndex={PageIndex}
                        elementIndex={elementIndex}
                      />
                    ) : element.type === "boolean" ? (
                      <Boolean
                        items={element}
                        PageIndex={PageIndex}
                        elementIndex={elementIndex}
                      />
                    ) : element.type === "comment" ? (
                      <Comment
                        items={element}
                        PageIndex={PageIndex}
                        elementIndex={elementIndex}
                      />
                    ) : element.type === "ranking" ? (
                      <Ranking
                        items={element}
                        PageIndex={PageIndex}
                        elementIndex={elementIndex}
                      />
                    ) : element.type === "imagepicker" ? (
                      <ImagePicker
                        items={element}
                        PageIndex={PageIndex}
                        elementIndex={elementIndex}
                      />
                    ) : (
                      element.type === ""(<SingleInput />)
                    )}
                  </StyledDiv>
                </StyledDiv>
                <StyledDiv MBE="1rem">
                  <QuestionsFun
                    Add={Add}
                    elementIndex={elementIndex}
                    DeleteQuestions={DeleteQuestions}
                    PageIndex={PageIndex}
                    type={element.type}
                    DuplicateQuestion={DuplicateQuestion}
                  />
                </StyledDiv>
              </StyledDiv>
              </StyledDiv>
            );
          })}
        </StyledDiv>
        <StyledDiv MBS="2rem" MBE="2rem" >
          <StyledDiv DP="flex" FD="row" POT="relative" AI="center" >
            <StyledButton
              BG="white"
              color="rgb(25, 179, 148)"
              bg="white"
              FS="20px"
              BR="5px"
              WD="100%"
              HG="3.5rem"
              HOT="2px solid rgb(25, 179, 148)"
              BD="none"
           
              onClick={(e) => Add(e, PageIndex, text, Qn)}
            >
              ADDQuestion
            </StyledButton>
        
            <StyledDiv  DP="flex" POT="absolute"   style={{minHeight:"100%",left:"20rem"}} >
              <MyDropdown />
            </StyledDiv>
            </StyledDiv>
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
}

//redux toolkit  with react native?
export default Questionsdata;
