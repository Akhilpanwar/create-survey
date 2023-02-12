import React, { useState, useRef, useEffect } from 'react';
import {
  StyledDiv,

  Duplicate,
  Required,
  Delete,
} from "../../../Header/styles";
import "./drop.css";
import Switch from "react-bootstrap/Switch";

import { HiOutlineDuplicate } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

import { changeType } from '../../../Redux/pageSlice';

import { useSelector ,useDispatch} from "react-redux";

function QuestionsFun({ Add, ElementIndex, DeleteQuestions, PageIndex ,type,DuplicateQuestion}) {
  
  let Dispatch=useDispatch();
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const elements=useSelector((state)=>state.surveyReducer.Designer)
const Qn=useSelector((state)=>state.surveyReducer.QusetionId);
  const handleClick = (event) => {
    setShow(!show);
    
    setTarget(event.target);
  };
  

 

 

  return (
    <StyledDiv DP="flex" FD="row" JC="space-around" AI="flex-end">
  
    
        <StyledDiv ref={ref} >
    
      <Button  variant="none" style={{outline:"none"}} onClick={handleClick}>{type}</Button>

      <Overlay

        show={show}
        target={target}
        placement="top"
      
       
      >
        <Popover id="popover-contained"       style={{overflowY:"scroll",height:"24rem",width:"20rem"}}>
          <Popover.Header as="h3">search</Popover.Header>
          {elements.slice(0,9).map((data,i)=>{
            const title=data.title
          return(
          <Popover.Body onClick={()=>Dispatch(changeType({title},setShow(!show)))}> 
          <span>{data.icons}</span><span>{title}</span>
          </Popover.Body>)})}
          <Dropdown.Divider />
          {elements.slice(9,12).map((data,i)=>{
              const title=data.title
          return(
          <Popover.Body onClick={()=>Dispatch(changeType({title},setShow(!show)))}> 
         <span>{data.icons}</span><span>{title}</span>
          </Popover.Body>)})}
          <Dropdown.Divider />
          {elements.slice(12,14).map((data,i)=>{

const title=data.title
          return(
          <Popover.Body onClick={()=>Dispatch(changeType({title},setShow(!show)))}> 
         <span>{data.icons}</span><span>{title}</span>
          </Popover.Body>)})}
          <Dropdown.Divider />
          {elements.slice(14,17).map((data,i)=>{
                   const title=data.title
          return(
     
          <Popover.Body onClick={()=>Dispatch(changeType({title},setShow(!show)))}> 
         <span>{data.icons}</span><span>{title}</span>
          </Popover.Body>)})}
          <Dropdown.Divider />
          {elements.slice(17,21).map((data,i)=>{
                   const title=data.title
          return(
          <Popover.Body onClick={()=>Dispatch(changeType({title},setShow(!show)))}> 
         <span>{data.icons}</span><span>{title}</span>
          </Popover.Body>)})}
        </Popover>
      </Overlay>
    </StyledDiv>
    


      <StyledDiv DP="flex" FD="row" TA="flex-end">
        <StyledDiv>
          <Delete
            WD="140px"
            PD="none"
            BG="white"
            onClick={(e) => DeleteQuestions(e, PageIndex, ElementIndex)}
          >
            <RiDeleteBin6Line color="orange" /> Delete
          </Delete>
        </StyledDiv>

        <StyledDiv>
          <Required>
            <Switch
              role="switch"
              type="checkBox"
              name="switch"
              label="Required"
            />
          </Required>
        </StyledDiv>

        <StyledDiv>
          <Duplicate
            WD="140px"
            PD="none"
            BG="white"
            onClick={(e) =>DuplicateQuestion(e, ElementIndex,Qn)}
          >
            <HiOutlineDuplicate color="orange" /> Duplicate
          </Duplicate>
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
}

export default QuestionsFun;
