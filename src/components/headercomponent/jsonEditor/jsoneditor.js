import React from "react";
import {  useSelector } from 'react-redux';
import { StyledDiv } from "../../Header/styles";
import { survey } from "../../Header/survey";

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
