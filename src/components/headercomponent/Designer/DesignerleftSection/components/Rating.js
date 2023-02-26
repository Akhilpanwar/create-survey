import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import { StyledDiv, Input } from "../../../../Header/styles";

import { useDispatch } from "react-redux";
import { AddRate } from "../../../../Redux/pageSlice";

function Rating({ Rates, PageIndex, elementIndex, show }) {
  const item = Rates.rateMax;
  const items = [];
  for (let i = 1; i < item + 1; i++) {
    items.push(i);
  }
  const Dispatch = useDispatch();
  const handleAddRate = (PageIndex, elementIndex, items) => {
    if (items.length < 20) {
      const val = items.length + 1;

      Dispatch(AddRate({ PageIndex, elementIndex, val }));
    }
  };
  const handleRemove = (PageIndex, elementIndex, items) => {
    if (items.length > 2) {
      const val = items.length - 1;
      Dispatch(AddRate({ PageIndex, elementIndex, val }));
    }
  };

  return (
    <StyledDiv>
    <StyledDiv DP="flex" AI="center" HG="100%" >
    <StyledDiv DP="flex" FD="row" HG="100%" AS="baseline" JC="space-between" HG="100%" >
      <StyledDiv DP="flex" AI="center" MIE="1rem"  style={{maxHeight:"100%" }}>
        <IoIosRemoveCircle
          size={30}
          color="red"
          onClick={() => handleRemove(PageIndex, elementIndex, items)}
        />
        <IoIosAddCircle
          size={30}
          color="rgb(25, 179, 148)"
          onClick={() => handleAddRate(PageIndex, elementIndex, items)}
        />
      </StyledDiv >
<StyledDiv DP="flex" HG="90%"  style={{flexWrap:"wrap",maxHeight:"100%" }} >
      {items.map((item, index) => {
        return (
          <StyledDiv
            DP="flex"
          
            MIE="1rem"
            HG="100%"
            AI="center"
          
            style={{ overflowX: "hidden", flexWrap: "wrap",maxHeight:"100%" }}>
    

             <Input
              contentEditable="true"
              role="textbox"
              // OT="transparent"
              FOT="3px solid rgb(25, 179, 148)"
              FS="25px"
         
              OW="break-word"
              WW="break-word"
              WB="break-word"
           
              placeholder={item}
              style={{
               
                alignItems:"center",
                overflowX: "hidden",
                maxWidth: "100%",
                position:"relative",
                cursor: "default",
                textAlign: "center",
                fontSize: "calc(2 * var(--base-unit, 8px))",
                lineHeight: "calc(3 * var(--base-unit, 18px))",
                minWidth: "calc(3 * var(--base-unit, 18px))",
             

                borderShadow: "12px 12px 12px 12px ",

                whiteSpace: "nowrap",
                background: "var(--background, #fff)",
                boxShadow: "0px 1px 2px rgb(0 0 0 / 15%)",
                borderRadius: " calc(12.5 * var(--base-unit, 8px))",
              }}
            ></Input> 

      
          </StyledDiv>
        );
      })}
      </StyledDiv>
    </StyledDiv>
    </StyledDiv>
    </StyledDiv>
  );
}

export default Rating;

{
  /* */
}
{
  /* <SurveyInput
role="textbox"
type="radio"
OT="transparent"
FOT="3px solid rgb(25, 179, 148)"
FS="25px"
HG="3rem"
OW="break-word"
WW="break-word"
WB="break-word"
AI="baseline"
style={{
  overflowX: "hidden",
  maxWidth: "100%  ",

  flexWrap: "wrap",
  cursor: "default",
  textAlign: "center",
  fontSize: "calc(2 * var(--base-unit, 8px))",
  lineHeight: "calc(3 * var(--base-unit, 8px))",
  minWidth: "calc(3 * var(--base-unit, 8px))",
  wordSpacing: "3px",
  display: "inline-block",
  width: "3rem",
  borderShadow: "12px 12px 12px 12px ",
 
  whiteSpace: "nowrap",
  background: "var(--background, #fff)",
  boxShadow: "0px 1px 2px rgb(0 0 0 / 15%)",
  borderRadius: " calc(12.5 * var(--base-unit, 8px))",
}}
id={item}
contentEditable="true"
></SurveyInput>  */
}
// style={{
//   overflowX: "hidden",
//   maxWidth: "100%  ",

//   flexWrap: "wrap",
//   cursor: "default",
//   textAlign: "center",
//   fontSize: "calc(2 * var(--base-unit, 8px))",
//   lineHeight: "calc(3 * var(--base-unit, 8px))",
//   minWidth: "calc(3 * var(--base-unit, 8px))",
//   wordSpacing: "3px",
//   display: "inline-block",
//   width: "3rem",
//   borderShadow: "12px 12px 12px 12px ",
// boxShadow: "0px 1px 2px rgb(0 0 0 / 15%)"
//   whiteSpace: "nowrap",
//   background: "var(--background, #fff)",
// ,
//   borderRadius: " calc(12.5 * var(--base-unit, 8px))",
// }}

// <StyledDiv
// DP="flex"
// FD="row"
// AI="baseline"
// style={{
//   boxSizing: "borderBox",
//   overflowX: "hidden",
//   width: "100%",
//   flexWrap: "wrap",
// }}
// >
// <StyledDiv DP="flex">
//   <IoIosRemoveCircle
//     size={30}
//     color="red"
//     onClick={() => handleRemove(PageIndex, elementIndex, items)}
//   />

//   <IoIosAddCircle
//     color="rgb(25, 179, 148)"
//     size={30}
//     onClick={() => handleAddRate(PageIndex, elementIndex, items)}
//   />
// </StyledDiv>

//   {items.map((item, index) => {
//     return (
//       <StyledDiv DP="flex" FD="row" HG="100%" JC="space-evenly">
//         &nbsp;
//         <label for={item}>

//           <SurveyInput
//             role="textbox"
//             OT="transparent"
//             FOT="3px solid rgb(25, 179, 148)"
//             FS="25px"
//             HG="3rem"
//             OW="break-word"
//             WW="break-word"
//             WB="break-word"
//             AI="baseline"
//             placeholder={item}
//             style={{
//               overflowX: "hidden",
//               maxWidth: "100%  ",
//               position: "absolute",
//               flexWrap: "wrap",
//               cursor: "default",
//               textAlign: "center",
//               fontSize: "calc(2 * var(--base-unit, 8px))",
//               lineHeight: "calc(3 * var(--base-unit, 8px))",
//               minWidth: "calc(3 * var(--base-unit, 8px))",
//               wordSpacing: "3px",
//               display: "inline-block",
//               width: "3rem",
//               borderShadow: "12px 12px 12px 12px ",

//               whiteSpace: "nowrap",
//               background: "var(--background, #fff)",
//               boxShadow: "0px 1px 2px rgb(0 0 0 / 15%)",
//               borderRadius: " calc(12.5 * var(--base-unit, 8px))",
//             }}
//           ></SurveyInput>
//         </label>
//         <StyledDiv DP="flex">
//         <StyledInput
//           type="radio"
//           WD="calc(3 * var(--base-unit, 12px))"
//           HG="3rem"
//           FS="2px"
//           BR="400px"
//           id={item}

//         ></StyledInput>
//         </StyledDiv>
//       </StyledDiv>
//     );
//   })}
// </StyledDiv>
