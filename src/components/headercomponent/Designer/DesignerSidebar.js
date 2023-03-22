import React, { useRef, useState } from "react";
import {
  StyledDiv,
  StyledLi,
  StyledUl,
  BottomBorder,
} from "../../Header/styles";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { AddQuestionId, addQuestionIndex, addScroll, DragElement } from "../../Redux/surveySlice";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddQuestions, AddQuestionsOnIndex } from "../../Redux/pageSlice";

import { survey } from "../../Header/survey";
function DesignerSidebar() {
  const [value, setValue] = useState(true);
  const Form = survey[0].content[0].forms;
  
  const PageIndex = useSelector((state) => state.surveyReducer.index);
  const elementIndex=useSelector((state)=>state.surveyReducer.QuestionIndex);
 
console.log(elementIndex)
  const Qn = useSelector((state) => state.surveyReducer.QuestionId);

  const Dispatch = useDispatch();
  const valu = useRef(true);
  const handleClick = (item, PageIndex, Qn,elementIndex) => {
  
    const text = item.data;
    const element = Object.assign({}, text, {
      name: `question${+Qn}`,
    });
    if(elementIndex!==""){
      
      Dispatch(addQuestionIndex(elementIndex+1))
    Dispatch(AddQuestionsOnIndex({ element, PageIndex,elementIndex }));
    Dispatch(AddQuestionId());
    }else{
      Dispatch(AddQuestions({ element, PageIndex }));
      Dispatch(AddQuestionId());
    }

    
  };

  const handleDrag = (e,item, PageIndex, Qn) => {
 
    setValue(false);
    const element = item.data;
    Dispatch(DragElement({ element, PageIndex, Qn }));
  };

  const handleDragEnd = () => {};
  return (
    <StyledDiv >
      <StyledUl DP="flex" FD="column" JC="space-evenly">
        {Form.slice(0, 11).map((item, ind) => {
          return (
            
            <StyledLi
              style={{ marginBottom: ".8rem" }}
            
              SWD="130px"
              BR="25px"
              WS="nowrap"
              HBG="white"
              TAR="width 0.2s"
              HWD="150px"
              className="dragElement"
            tabIndex={1234}
          
              HBS="0px 2px 6px rgb(0 0 0 / 10%)"
              BG="white"
              onClick={() => handleClick(item, PageIndex, Qn,elementIndex)}
              onDragStart={(e) => handleDrag(e,item, PageIndex, Qn)}
              onDragEnd={() => handleDragEnd()}
              draggable
            >
              <b>{item.icons}</b>

              <i>{item.title}</i>
            </StyledLi>
          
          );
        })}
        <StyledLi>
          <DropdownButton
            style={{ display: "flex", float: "left", border: "none" }}
            className="mydropdown"
            drop="up"
            id="dropdown-basic-button"
            variant="none"
            title="..."
          >
            <StyledDiv>
              {Form.slice(11, 12).map((item, ind) => {
                return (
                  <StyledDiv
                    style={{
                      fontSize: "18px",
                      float: "left",
                      width: "19rem",
                      height: "4rem",
                    
                    }}
                  >
                    <Dropdown.Item
                      onClick={(e) => handleClick(e, PageIndex, Qn)}
                      className="dropItem"
                     
                    >
                      <b>{item.icons}</b>

                      <i>{item.title}</i>
                    </Dropdown.Item>
                  </StyledDiv>
                );
              })}
              <BottomBorder
                style={{ fontSize: "18px", float: "left", width: "19rem" }}
                BB="2px solid lightgrey "
              ></BottomBorder>
              {Form.slice(12, 14).map((item, ind) => {
                return (
                  <StyledDiv
                    style={{
                      fontSize: "18px",
                      float: "left",
                      width: "19rem",
                      height: "4rem",
                    }}
                  >
                    <Dropdown.Item
                      className="dropItem"
                      onClick={(e) => handleClick(e, PageIndex, Qn)}
                      href="#/action-1"
                    >
                      <b>{item.icons}</b>

                      <i>{item.title}</i>
                    </Dropdown.Item>
                  </StyledDiv>
                );
              })}
              <BottomBorder
                style={{ fontSize: "18px", float: "left", width: "19rem" }}
                BB="2px solid lightgrey "
              ></BottomBorder>
              {Form.slice(14, 17).map((item, ind) => {
                return (
                  <StyledDiv
                    style={{
                      fontSize: "18px",
                      float: "left",
                      width: "19rem",
                      height: "4rem",
                    }}
                  >
                    <Dropdown.Item
                      onClick={(e) => handleClick(e, PageIndex, Qn)}
                      className="dropItem"
                      href="#/action-1"
                    >
                      <b>{item.icons}</b>

                      <i>{item.title}</i>
                    </Dropdown.Item>
                  </StyledDiv>
                );
              })}
              <BottomBorder
                style={{ fontSize: "18px", float: "left", width: "19rem" }}
                BB="2px solid lightgrey "
              ></BottomBorder>
              {Form.slice(17, 23).map((item, ind) => {
                return (
                  <StyledDiv
                    style={{
                      fontSize: "18px",
                      float: "left",
                      width: "19rem",
                      height: "4rem",
                    }}
                  >
                    <Dropdown.Item
                      onClick={(e) => handleClick(e, PageIndex, Qn)}
                      className="dropItem"
                      href="#/action-1"
                    >
                      <b>{item.icons}</b>

                      <i>{item.title}</i>
                    </Dropdown.Item>
                  </StyledDiv>
                );
              })}
            </StyledDiv>
          </DropdownButton>
        </StyledLi>
      </StyledUl>
    </StyledDiv>
  );
}

export default DesignerSidebar;
