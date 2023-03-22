import React, { useState, useRef,useEffect } from "react";
import { useSelector } from "react-redux";
import { StyledDiv, Heading, BottomBorder } from "../../Header/styles";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";

import Dropdown from "react-bootstrap/Dropdown";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { AddData, deletePages } from "../../Redux/surveySlice";
import Quest from "./Quest";
import { useDispatch } from "react-redux";
function Preview() {
  const [PIndex, setPIndex] = useState(0);
  const [title, setTitle] = useState("Page1");
  const pages = useSelector((state) => state.PageReducer[0].Pages);
  const val=useSelector((state)=>state.surveyReducer.value);
  const Index = useRef(0);
  const Dispatch=useDispatch()
  
 
    
    

  const handleClick = (pages, ind) => {
    Index.current = ind;
    setTitle(pages[Index.current].name);
  };
  const handlePrevious = (pages) => {
    console.log(Index.current);
    Dispatch(deletePages)
    if (Index.current > 0) {
      Index.current -= 1;
      setPIndex(Index.current);
      setTitle(pages[Index.current].name);
    }
   
  };
  const handleNext = (pages) => {
    if (Index.current < pages.length - 1) {
      Index.current += 1;
      setPIndex(Index.current);
      setTitle(pages[Index.current].name);
    }
  };
  return (
    <StyledDiv
      DP="flex"
      BG="whiteSmoke"
      style={{ height: "620px", minWidth: "100%" }}
    >
      {pages[0].elements.length === 0 ? (
        <StyledDiv
          DP="flex"
          JC="center"
          style={{ marginLeft: "35%", marginTop: "20%" }}
        >
          <StyledDiv DP="flex">
            <Heading TC="15px">
              The survey doesn't contain visible pages or questions.
            </Heading>
          </StyledDiv>
        </StyledDiv>
      ) : (
        <StyledDiv DP="flex" style={{ minHeight: "100%", minWidth: "100%" }}>
          <StyledDiv style={{ minHeight: "100%", minWidth: "100%" }}>
            <Quest i={Index.current}  />
          </StyledDiv>
  {val===true && <StyledDiv
              DP="flex"
              BG="white"
              POT="absolute"
              HG="calc(6 * var(--base-unit, 8px))"
              WD="100%"
              style={{ bottom: "0", right: "0" }}
            >
              <BottomBorder BB="black"></BottomBorder>
              {pages.length > 1 ? (
                <StyledDiv
                  DP="flex"
                  BG="white"
                  AI="center"
                  style={{ marginLeft: "43%", marginTop: "6px" }}
                >
                  <StyledDiv>
                    <BiLeftArrowAlt onClick={() => handlePrevious(pages)} />
                  </StyledDiv>
                  &nbsp; &nbsp; &nbsp;
                  <StyledDiv BG="white !important">


                  <OverlayTrigger
            trigger="click"
            key={"top"}
            placement={"top"}
          
            overlay={
              
              <Popover   id={`popover-positioned-top}`} className="popover-preview" >
              {pages.map((item,ind)=>{
  return(
          
                <Popover.Body tabIndex={1234} style={{textAlign:"center"}}className="previewDrop"  onClick={() => handleClick(pages, ind)}>
                {item.name}
                </Popover.Body>
              
              ) })}
              </Popover>
            }
          >
            <Button variant="none">{title}</Button>
          </OverlayTrigger>


        
                  </StyledDiv>
                  &nbsp; &nbsp; &nbsp;
                  <StyledDiv>

                    <BiRightArrowAlt onClick={() => handleNext(pages)} />
                  </StyledDiv>
              </StyledDiv>
            ) : (
              <StyledDiv></StyledDiv>
            )}
          </StyledDiv>}
        </StyledDiv>
      )}
    </StyledDiv>
  );
}

export default Preview;
         

