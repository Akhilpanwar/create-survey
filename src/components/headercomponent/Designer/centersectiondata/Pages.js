import React from "react";
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
  changePageTitle,
  changePageDescription,
  ChangeSurveyName,
  changeSurveyDescription,
  DuplicateQuestion,
} from "../../../Redux/pageSlice";
import { BsImage } from "react-icons/bs";
import {
  addIndex,
  AddQuestionId,
  DeletePageQuestionId,
  AddPageId,
  DeletePageId,
  setPageId,
} from "../../../Redux/surveySlice";

function Pages() {
  const Dispatch = useDispatch();
  const Qn = useSelector((state) => state.surveyReducer.QuestionId);
  const pages = useSelector((state) => state.PageReducer[0].Pages);

  const SurveyName = useSelector((state) => state.PageReducer[0].title);
  const SurveyDescription = useSelector(
    (state) => state.PageReducer[0].description
  );

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
        title: it.title,
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
    Dispatch(AddPageId());
    Dispatch(DuplicatePages(newPage));
  };
  const handleDuplicateQuestion = (item, PageIndex) => {
    const it = Object.assign({}, item, {
      name: `question${+Qn}`,
    });

    Dispatch(DuplicateQuestion({ it, PageIndex }));
    Dispatch(AddQuestionId());
  };

  const handleDeletePages = (page, pageIndex) => {
    // Dispatch(AddQuestionId())
    console.log(pages);
    Dispatch(DeletePages(pageIndex));
    if (pages.length <= 1) {
      Dispatch(setPageId());
    }
    Dispatch(DeletePageQuestionId(page.elements.length));
    Dispatch(DeletePageId());
  };
  const handleDeleteQuestions = (PageIndex, elementIndex) => {
    Dispatch(DeleteQuestion({ PageIndex, elementIndex }));
  };
  const handleIconMouseover = (e) => {
    e.target.style.color = "var(--primary, #19b394)";
  };

  const handleClick = (pageIndex) => {
    Dispatch(addIndex(pageIndex));
  };
  const handlePageTitle = (e, pageIndex) => {
    const title = e.target.innerText;
    Dispatch(changePageTitle({ pageIndex, title }));
  };
  const handlePageDescription = (e, pageIndex) => {
    const value = e.target.innerText;
    Dispatch(changePageDescription({ value, pageIndex }));
  };
  const handleSurveyName = (e) => {
    const title = e.target.innerText;
    Dispatch(ChangeSurveyName(title));
  };
  const handleSurveyDescription = (e) => {
    const description = e.target.innerText;
    Dispatch(changeSurveyDescription(description));
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
                  placeholder={SurveyName ? `${SurveyName}` : "survey Title"}
                  contentEditable="true"
                  onInput={(e) => handleSurveyName(e)}
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
                style={{
                  fontFamily:
                    "var(--font-family, , Helvetica, Arial, sans-serif)",
                  fontWeight: "normal",
                }}
                contentEditable="true"
                placeholder={
                  SurveyDescription ? `${SurveyDescription}` : "description"
                }
                onInput={(e) => handleSurveyDescription(e)}
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
            {pages?.map((page, pageIndex) => {
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
                          placeholder={
                            !page.title ? `${page.name}` : `${page.title}`
                          }
                          onInput={(e) => handlePageTitle(e, pageIndex)}
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
                        PFC="20px"
                        DP="flex"
                        FS="20px"
                        style={{
                          fontFamily:
                            "var(--font-family, , Helvetica, Arial, sans-serif)",
                          fontWeight: "normal",
                        }}
                        role="textBox"
                        contentEditable="true"
                        placeholder={
                          !page.description
                            ? "description"
                            : `${page.description}`
                        }
                        onInput={(e) => handlePageDescription(e, pageIndex)}
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
