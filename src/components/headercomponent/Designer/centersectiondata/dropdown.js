import React from "react";
import {
  StyledDiv,
  BottomBorder,
  StyledLi,
  SurveyInput,
} from "../../../Header/styles";
import { VscSearch } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { AddQuestions } from "../../../Redux/pageSlice";
import { AddQuestionId } from "../../../Redux/surveySlice";
function MyDropdown() {
  const Dispatch = useDispatch();
  const Form = useSelector((state) => state.surveyReducer.Designer);
  const Qn = useSelector((state) => state.surveyReducer.QuestionId);

  const ind = useSelector((state) => state.surveyReducer.index);
  const handleClick = (item, ind, Qn) => {
    const PageIndex = ind;
    const it = item.data;
    const element = Object.assign({}, it, {
      name: `question${+Qn}`,
    });

    Dispatch(AddQuestions({ PageIndex, element }));

    Dispatch(AddQuestionId());
  };

  return (
    <StyledDiv>
      <OverlayTrigger
        trigger="click"
        key="top"
        placement="top"
        overlay={
          <Popover id="popover-positioned-top" style={{ width: "23rem" }}>
            <Popover.Header
              as="h3"
              style={{
                boxSizing: "borderBox",
                border: "1px solid lightgrey",
                outline: "none",
                borderRadius: "0px",
                background: "white",
                overflowY: "none",
              }}
            >
              <StyledDiv
                DP="flex"
                FD="row"
                AI="center"
                style={{ overflowY: "none" }}
              >
                <StyledDiv style={{ overflowY: "none" }}>
                  <VscSearch size={20} color={"lightgrey"} />
                </StyledDiv>
                <StyledDiv DP="flex" HG="1rem">
                  <SurveyInput
                    DP="flex"
                    style={{ overflowX: "scroll", height: "1.4rem" }}
                    contentEditable="true"
                    TC="lightgrey"
                    placeholder="search"
                    BD="none"
                    OT="none"
                    OW="break-word"
                    WW="break-word"
                    WB="break-word"
                    FS="24px"
                  />
                </StyledDiv>
              </StyledDiv>
            </Popover.Header>
            <StyledDiv className="popover-positioned-top">
              {Form.slice(0, 9).map((item, index) => {
                return (
                  <>
                    <StyledLi
                      style={{ marginBottom: ".5rem" }}
                      onClick={() => handleClick(item, ind, Qn)}
                    >
                      <b>{item.icons}</b>&nbsp;&nbsp;<i>{item.title}</i>
                    </StyledLi>
                  </>
                );
              })}
              <BottomBorder
                style={{ marginTop: "1rem" }}
                BB="1px solid lightgrey"
              ></BottomBorder>
              {Form.slice(9, 12).map((item) => {
                return (
                  <StyledLi
                    style={{ marginBottom: ".5rem" }}
                    onClick={() => handleClick(item, ind, Qn)}
                  >
                    <b>{item.icons}</b>&nbsp;&nbsp;<i>{item.title}</i>
                  </StyledLi>
                );
              })}
              <BottomBorder BB="1px solid lightgrey"></BottomBorder>
              {Form.slice(12, 14).map((item) => {
                return (
                  <>
                    <StyledLi
                      style={{ marginBottom: ".5rem" }}
                      onClick={() => handleClick(item, ind, Qn)}
                    >
                      <b>{item.icons}</b>&nbsp;&nbsp;<i>{item.title}</i>
                    </StyledLi>
                  </>
                );
              })}
              <BottomBorder
                style={{ marginTop: "1rem" }}
                BB="1px solid lightgrey"
              ></BottomBorder>
              {Form.slice(14, 17).map((item) => {
                return (
                  <>
                    <StyledLi
                      style={{ marginBottom: ".5rem" }}
                      onClick={() => handleClick(item, ind, Qn)}
                    >
                      <b>{item.icons}</b>&nbsp;&nbsp;<i>{item.title}</i>
                    </StyledLi>
                  </>
                );
              })}
              <BottomBorder
                style={{ marginTop: "1rem" }}
                BB="1px solid lightgrey"
              ></BottomBorder>
              {Form.slice(17, 21).map((item) => {
                return (
                  <>
                    <StyledLi
                      style={{ marginBottom: ".5rem" }}
                      onClick={() => handleClick(item, ind, Qn)}
                    >
                      <b>{item.icons}</b>&nbsp;&nbsp;<i>{item.title}</i>
                    </StyledLi>
                  </>
                );
              })}
              <BottomBorder
                style={{ marginTop: "1rem", marginBottom: "none" }}
                BB="1px solid lightgrey"
              ></BottomBorder>
            </StyledDiv>
          </Popover>
        }
      >
        <Button variant="none" className="dropbtn">
          ...
        </Button>
      </OverlayTrigger>
    </StyledDiv>
  );
}

export default MyDropdown;
