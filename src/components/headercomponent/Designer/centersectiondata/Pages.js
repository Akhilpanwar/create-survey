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
  const handleDuplicatePages = (page, Qn, Pn) => {
    console.log("i clicked");
    let temp = [];

    page.elements.map((it, i) => {
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

    const newPage = Object.assign({}, page, {
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
    <StyledDiv
      WD="100%"
      HG="100%"
      DP="flex"
      AI="center"
      JC="center"
      style={{ boxSizing: "border-box" }}
    >
      <StyledDiv DP="flex" HG="90%" WD="90%" FD="column" AI="center">
        <StyledDiv DP="flex" FD="column" JC="space-between" WD="90%">
          <StyledDiv
            DP="flex"
            FD="column"
            WD="95%"
            AS="center"
            style={{ boxSizing: "content-box" }}
          >
            <StyledDiv DP="flex" FD="row" JC="space-between">
              <StyledDiv DP="flex">
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
              <StyledDiv DP="flex">
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
                <input id="img" style={{ display: "none" }} type="file"></input>
              </StyledDiv>
            </StyledDiv>
            <StyledDiv style={{ whiteSpace: "pre" }}>
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
          </StyledDiv>

          <StyledDiv>
            <BottomBorder></BottomBorder>
          </StyledDiv>
          <StyledDiv style={{ minHeight: "100%" }}>
            {pages.map((page, pageIndex) => {
              return (
                <StyledDiv
                  onClick={() => handleClick(pageIndex)}
                  FBG="rgba(251,235,221,1.00)"
                  HBG="rgba(251,235,221,1.00)"
                  HIB="rgba(251,235,221,1.00)"
                  FOT="2px solid orange"
                  FBV="visible"
                  DP="flex"
                  HBV="visible"
                  style={{
                    boxSizing: "content-box",

                    Width: "100%",
                  }}
                  tabIndex="1234"
                >
                  <StyledDiv
                    DP="flex"
                    style={{ margin: "auto" }}
                    WD="95%"
                    FD="column"
                    JC="space-evenly"
                  >
                    <StyledDiv DP="flex" FD="column" JC="space-between">
                      <StyledDiv DP="flex" FD="row" JC="flex-end">
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
                      <StyledDiv>
                        <SurveyInput
                          PFC="35px"
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
                    <StyledDiv>
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
              );
            })}
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
}

export default Pages;
