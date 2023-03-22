import React from "react";
import { useDispatch } from "react-redux";
import { StyledInput } from "../../../../Header/styles";
import { AddData } from "../../../../Redux/surveySlice";

function SingleInput({ value,items,PageIndex,elementIndex }) {
  const Dispatch=useDispatch();
  console.log({items})
  const handleChange=(e)=>{
const Question=e.target.name;
const SelItem=e.target.value;

Dispatch(AddData({Question,SelItem}))
  }
  return (
 
    <StyledInput
      WD="100%"
      type="none"
      FOT="none"
      disabled={value}
      style={{ boxShadow: "inset 0px 1px 2px rgb(0 0 0 / 15%)" }}
      onChange={(e)=>handleChange(e)}
    name={items.name}
      FS="40px"
      BG="var(--background-dim-light, #f9f9f9)"
      BD="none"
    />
  );
}

export default SingleInput;
