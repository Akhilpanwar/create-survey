import React from 'react';
import {  StyledDiv, StyledInput } from '../../../../Header/styles';

function SingleInput() {
  return (
  
    <StyledInput
    WD="100%"
 type="none"
    FOT="none"
    style={{boxShadow: "inset 0px 1px 2px rgb(0 0 0 / 15%)"}}
    FS="40px"
    BG="var(--background-dim-light, #f9f9f9)"
    BD="none"
    readOnly
  />


  )
}

export default SingleInput