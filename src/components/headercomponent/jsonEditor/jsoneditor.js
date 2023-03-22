import React, { useEffect } from "react";
import {  useSelector,useDispatch } from 'react-redux';
import { StyledDiv } from "../../Header/styles";
import { survey } from "../../Header/survey";
import { AddData } from "../../Redux/surveySlice";

function Jsoneditor() {

  const data=useSelector((state)=>state.PageReducer[0]);
  




  return (
    <StyledDiv>
   
       
          <pre contentEditable="true"> 
       
   { JSON.stringify(data,null,4)}
        </pre>
        
 
  
    
    </StyledDiv>
  );
}

export default Jsoneditor;
