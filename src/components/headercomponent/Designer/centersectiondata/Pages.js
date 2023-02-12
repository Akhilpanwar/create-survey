import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  StyledDiv,
  SurveyInput,
  BottomBorder,
  DeletePage,
  DuplicatePage,
} from "../../../Header/styles";
import { useSelector, useDispatch } from "react-redux";
import { HiOutlineDuplicate } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Questionsdata from "./Questionsdata";
import {
  DuplicatePages,
  AddQuestions,
  DeletePages,
  DeleteQuestion,
} from "../../../Redux/pageSlice";
import { BsImage } from "react-icons/bs";
import {
  addIndex,
  AddQuestionId,
  DeletePageQuestionId,
  DeleteQuestionId,
  AddPageId,
  DeletePageId,
} from "../../../Redux/surveySlice";

function Pages() {
  const Dispatch = useDispatch();
  const Qn = useSelector((state) => state.surveyReducer.QuestionId);
  const pages = useSelector((state) => state.PageReducer[0].Pages);

  const Pn = useSelector((state) => state.surveyReducer.PageId);
  const handleQuestion = (e, PageIndex, text, Qn) => {
    e.preventDefault();
    const element = Object.assign({}, text, {
      name: `question${+Qn}`,
    });

    Dispatch(AddQuestions({ PageIndex, element }));

    Dispatch(AddQuestionId());
  };
  const handleDuplicatePages = (item, Qn, Pn) => {
    let temp = [];

    item.elements.map((it, i) => {
      Dispatch(AddQuestionId());

      temp.push({
        name: `question${+Qn}`,
        type: it.type,
        Choices: it.Choices,

        showOtherItem: it.showOtherItem,
        showSelectedAllItem: it.showSelectedAllItem,
        showNoneItem: it.showNoneItem,
      });

      Qn += 1;
    });

    const newPage = Object.assign({}, item, {
      name: `Page${+Pn}`,
      elements: [...temp],
    });

    Dispatch(DuplicatePages(newPage));

    Dispatch(AddPageId());
  };
  const handleDuplicateQuestion = () => {};

  const handleDeletePages = (page, pageIndex) => {
    Dispatch(DeletePageQuestionId(page.elements.length));
    Dispatch(DeletePages({ page, pageIndex }));
    Dispatch(DeletePageId());
  };
  const handleDeleteQuestions = (e, DeletedIndex, index) => {
    Dispatch(DeleteQuestionId());
    Dispatch(DeleteQuestion({ DeletedIndex, index }));
  };
  const handleIconMouseover = (e) => {
    e.target.style.color = "var(--primary, #19b394)";
  };

  const handleClick = (pageIndex) => {
    Dispatch(addIndex(pageIndex));
  };
  return (
    <StyledDiv WD="70%"  style={{margin:"auto"}}>
      <StyledDiv DP="flex" MBS="1rem">
      <StyledDiv  DP="flex"  style={{minHeight:"100%"}} JC="space-between" FD="column" >
       
    
       
              <StyledDiv DP="flex" FD="row" JC="space-between">
                <StyledDiv >
                  <SurveyInput
                    DP="flex"
                    placeholder="survey Title"
                    contentEditable="true"
                    FWD="fit-content"
                    FS="44px"
                    PTC="44px"
                    OW="break-word"
                    WW="break-word"
                    WB="break-word"
                    OT="none"
                    FOT="3px solid rgb(25, 179, 148)"
                    FBR="calc(.5 * var(--base-unit, 8px))"
                    HG="100%"
                  />
                </StyledDiv>
                <StyledDiv >
                  <label for="img">
                    <BsImage
                      size={40}
                      color="lightgrey"
                      onMouseOver={(e) => handleIconMouseover(e)}
                      onMouseOut={({ target }) =>
                        (target.style.color = "lightgrey")
                      }
                    />
                  </label>
                  <input
                    id="img"
                    style={{ display: "none" }}
                    type="file"
                  ></input>
                </StyledDiv>
              </StyledDiv>
           
            <StyledDiv>
              <SurveyInput
                DP="flex"
                PTC="20px"
                FS="20px"
                contentEditable="true"
                placeholder="description"
                OT="none"
                FBG="white"
                FOT="3px solid rgb(25, 179, 148)"
                FWD="fit-content"
                OW="break-word"
                WW="break-word"
                WB="break-word"
                FBR="5px"
              />
            </StyledDiv>
        
       
        <StyledDiv>
          <BottomBorder></BottomBorder>
        </StyledDiv>
        
        <StyledDiv>
          {pages.map((page, pageIndex) => {
            return (
              <StyledDiv
                tabIndex="1234"
                onClick={() => handleClick(pageIndex)}
                FBG="rgba(251,235,221,1.00)"
                HBG="rgba(251,235,221,1.00)"
                HIB="rgba(251,235,221,1.00)"
                FOT="2px solid orange"
                HBDP="flex"
                FBDP="flex"
                DP="flex"
                style={{
                  boxSizing: "border-box",
               minHeight:"100%",
                  Width: "100%",
                }}
              >
                <StyledDiv DP="flex">
                <StyledDiv DP="flex" FD="column" JC="space-around">

                <StyledDiv DP="flex" FD="row"  JC="space-between">
                <StyledDiv>
                <SurveyInput
                  PFC="35pxpx"
                  DP="flex"
                  FS="35px"
                  contentEditable="true"
                  placeholder={`${page.name}`}
                  OT="none"
                  FBG="white"
                  FOT="2px solid rgb(25, 179, 148)"
                  FWD="fit-content"
                  OW="break-word"
                  WW="break-word"
                  WB="break-word"
                  FBR="3px"
                />
                </StyledDiv>
<StyledDiv DP="flex" FD="row">
  <StyledDiv>
                <DuplicatePage
                  PD="none"
                  BG="none"
                  onClick={() => handleDuplicatePages(page, Qn, Pn)}
                >
                  <HiOutlineDuplicate color="orange" /> Duplicate
                </DuplicatePage>
                </StyledDiv>
                <StyledDiv>
                <DeletePage
                  WD="140px"
                  PD="none"
                  BG="none"
                  onClick={() => handleDeletePages(page, pageIndex)}
                >
                  <RiDeleteBin6Line color="orange" /> Delete
                </DeletePage>
                </StyledDiv>
</StyledDiv>
</StyledDiv>
<StyledDiv>
                <SurveyInput
                  FS="18px"
                  role="textBox"
                  contentEditable="true"
                  placeholder="Description"
                  OT="none"
                  FBG="white"
                  FOT="3px solid rgb(25, 179, 148)"
                  FWD="fit-content"
                  OW="break-word"
                  WW="break-word"
                  WB="break-word"
                  FBR="3px"
                />

</StyledDiv>
<StyledDiv >
                <Questionsdata
                  Page={page}
                  PageIndex={pageIndex}
                  Add={handleQuestion}
                  DeleteQuestions={handleDeleteQuestions}
                  DuplicateQuestion={handleDuplicateQuestion}
                />
                </StyledDiv>
                </StyledDiv>
              </StyledDiv>
              </StyledDiv>
            );
          })}
        </StyledDiv>

      </StyledDiv>
    </StyledDiv>
    </StyledDiv>
  );
}

export default Pages;
