import React from 'react'
import { StyledDiv } from '../../../../Header/styles'
import {RiFilter3Fill} from "react-icons/ri"
function Comment() {
  return (
    <StyledDiv DP="flex" HG="100%" WD="100%" JC="center" AI="center" 
 >
      <StyledDiv      DP="flex"
      tabIndex={1234}
        BG="whiteSmoke"
          HG="8rem"
          WD="50rem"
          style={{
            boxSizing: "border-box",
            boxShadow: "inset 0px 1px 2px rgb(0 0 0 / 15%)" ,
            overflowY:"Scroll",
           maxHeight:"100%"
          }}
>
<StyledDiv DP="flex" AI="flex-end" JC="flex-end" WD="100%">
<RiFilter3Fill color={"black"} />
</StyledDiv>
      </StyledDiv>
     
    </StyledDiv>
  )
}

export default Comment
