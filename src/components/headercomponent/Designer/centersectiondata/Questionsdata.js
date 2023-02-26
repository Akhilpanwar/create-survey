import React, { useState } from "react";
import {
  StyledDiv,
  StyledButton,
  QuestionNumber,
  Input,
} from "../../../Header/styles";
import SingleInput from "../DesignerleftSection/components/singleInput";
import RadioGroup from "../DesignerleftSection/components/RadioGroup";
import Rating from "../DesignerleftSection/components/Rating";
import { AiFillStar } from "react-icons/ai";
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
import {
  changeQuestionTitle,
  DropQuestions,
  RequiredQuestion,
} from "../../../Redux/pageSlice";
import { AddQuestionId } from "../../../Redux/surveySlice";
import MyDropdown from "./dropdown";
import MultipleText from "../DesignerleftSection/components/MultipleText";
function Questionsdata({
  Page,
  PageIndex,
  Add,
  DeleteQuestions,
  DuplicateQuestion,
}) {
  const [index, setIndex] = useState();
  let Dispatch = useDispatch();
  const Qn = useSelector((state) => state.surveyReducer.QuestionId);

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
  const handleClick = (e, PageIndex, elementIndex) => {
    const value = e.target.innerText;

    setIndex(PageIndex);
    Dispatch(changeQuestionTitle({ value, PageIndex, elementIndex }));
  };
  const handleRequire = (item, PageIndex, elementIndex) => {
    console.log(item.isRequired);
    if (item.isRequired === true) {
      const v = false;
      Dispatch(RequiredQuestion({ PageIndex, elementIndex, v }));
    } else {
      const v = true;
      Dispatch(RequiredQuestion({ PageIndex, elementIndex, v }));
    }
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
        <StyledDiv DP="flex" FD="column" style={{ boxSizing: "border-box" }}>
          {Page.elements.map((element, elementIndex) => {
            return (
              <StyledDiv
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDragEnter(el, ind, Qn)}
              >
                <StyledDiv
                  HOT="1px solid rgba(255,154,0.9)"
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
                  MBS="1rem"
                  style={{
                    minWidth: "100%",
                    boxSizing: "border-box",
                    boxShadow: "0px 1px 2px rgb(0 0 0 / 15%)",
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
                    <StyledDiv DP="flex" AI="center">
                      <StyledDiv DP="flex" FD="row" AI="baseline" MBS="1rem">
                        <StyledDiv>
                          <QuestionNumber>
                            {element.name.split("question")}.
                          </QuestionNumber>
                        </StyledDiv>
                        <StyledDiv DP="flex">
                          <Input
                            DP="flex"
                            BG="white !important"
                            role="textBox"
                            contentEditable="true"
                            style={{
                              fontFamily:
                                "var(--font-family, var(--font-family))",
                              fontSize: "20px",
                            }}
                            placeholder={
                              element.title
                                ? `${element.title}`
                                : `${element.name}`
                            }
                            onInput={(e) =>
                              handleClick(e, PageIndex, elementIndex)
                            }
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
                        {element?.isRequired === true ? (
                          <StyledDiv DP="flex" AS="stretch">
                            <AiFillStar color={"red"} size={8} />
                          </StyledDiv>
                        ) : (
                          ""
                        )}
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
                          element
                          PageIndex={PageIndex}
                          elementIndex={elementIndex}
                          value={true}
                        />
                      ) : element.type === "radiogroup" ? (
                        <RadioGroup
                          items={element}
                          PageIndex={PageIndex}
                          elementIndex={elementIndex}
                          show={true}
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
                          show={false}
                        />
                      ) : element.type === "file" ? (
                        <File
                          items={element}
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
                          show={true}
                        />
                      ) : element.type === "imagepicker" ? (
                        <ImagePicker
                          items={element}
                          PageIndex={PageIndex}
                          elementIndex={elementIndex}
                          show={true}
                        />
                      ) : element.type === "multipletext" ? (
                        <MultipleText />
                      ) : (
                        element.type ===
                        ""(
                          <SingleInput
                            items={element}
                            PageIndex={PageIndex}
                            elementIndex={elementIndex}
                            val={"ReadOnly"}
                          />
                        )
                      )}
                    </StyledDiv>
                  </StyledDiv>
                  <StyledDiv MBE="1rem">
                    <QuestionsFun
                      handleRequired={handleRequire}
                      Add={Add}
                      item={element}
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
        <StyledDiv MBS="2rem" MBE="2rem">
          <StyledDiv DP="flex" FD="row" POT="relative" AI="center">
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

            <StyledDiv
              DP="flex"
              POT="absolute"
              style={{ minHeight: "100%", left: "20rem" }}
            >
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
