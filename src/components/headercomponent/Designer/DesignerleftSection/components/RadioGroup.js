import React, { useState, useRef } from "react";
import { StyledDiv, StyledInput, SurveyInput } from "../../../../Header/styles";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  AddRadio,
  RadioShowOther,
  RadioShowNone,
  RemoveRadio,
} from "../../../../Redux/pageSlice";
function RadioGroup({ items, PageIndex, elementIndex }) {
  const [value, setValue] = useState(true);
  const [val, setVal] = useState(true);
  const Dispatch = useDispatch();
  const num =
    items?.Choices?.length > 0 &&
    parseInt(items.Choices[items?.Choices?.length - 1].match(/(\d+)/));

  const handleAdd = (PageIndex, elementIndex, num) => {
    let ID = (num += 1);
   
    Dispatch(AddRadio({ PageIndex, elementIndex, ID }));
  };
  const handleRemove = (PageIndex, elementIndex, index) => {
    Dispatch(RemoveRadio({ PageIndex, elementIndex, index }));
  };
  const handleRemoveNone = (PageIndex, elementIndex, value) => {
    Dispatch(RadioShowNone({ PageIndex, elementIndex, value }));
    setValue(!value);
  };
  const handleAddNone = (PageIndex, elementIndex, value) => {
    Dispatch(RadioShowNone({ PageIndex, elementIndex, value }));
    setValue(!value);
  };
  const handleAddOther = (PageIndex, elementIndex, val) => {
    Dispatch(RadioShowOther({ PageIndex, elementIndex, val }));
    setVal(!val);
  };
  const handleRemoveOther = (PageIndex, elementIndex, val) => {
    Dispatch(RadioShowOther({ PageIndex, elementIndex, val }));
    setVal(!val);
  };
  return (
    <StyledDiv DP="flex" FD="column">
     
      {items.Choices.map((item, index) => {
        return (
          <StyledDiv DP="flex" >
          
              <StyledDiv DP="flex">
                <IoIosRemoveCircle
                  size={20}
                  color="red"
                  onClick={() => handleRemove(PageIndex, elementIndex, index)}
                /></StyledDiv>

                <StyledDiv DP="flex">
                  <StyledInput
                    style={{
                      display: "flex",

                      width: "calc(3 * var(--base-unit, 8px))",
                      height: "calc(3 * var(--base-unit, 8px))",
                      boxSizing: "border-box",
                      background: "whiteSmoke",
                      boxShadow: "inset 0px 1px 2px rgb(0 0 0 / 15%)",
                      flexShrink: "0",
                    }}
                    BR="12px"
                    BD="none"
                    disabled
                  />
                </StyledDiv>
          
              <StyledDiv DP="flex">
                <SurveyInput
                  DP="flex"
                  contentEditable="true"
                  WW="break-word"
                  WB="break-word"
                  placeholder={item}
                  BR="20px"
                  FBR="calc(.5 * var(--base-unit, 8px))"
                  OT="none"
                  FOT="3px solid rgb(25, 179, 148)"
                />
              </StyledDiv>
            </StyledDiv>
         
        );
      })}
    
      <StyledDiv DP="flex">
        <StyledDiv DP="flex" AI="center">
          <StyledDiv DP="flex">
            <IoIosAddCircle
              color="rgb(25, 179, 148)"
              size={20}
              onClick={() => handleAdd(PageIndex, elementIndex, num)}
            />
            <StyledDiv DP="flex">
              <StyledInput
                style={{
                  display: "flex",

                  justifyContent: "center",
                  width: "calc(3 * var(--base-unit, 8px))",
                  height: "calc(3 * var(--base-unit, 8px))",
                  boxSizing: "border-box",
                  background: "whiteSmoke",
                  boxShadow: "inset 0px 1px 2px rgb(0 0 0 / 15%)",

                  flexShrink: "0",
                }}
                BR="12px"
                BD="none"
                ML="12px"
                disabled
              />
            </StyledDiv>
          </StyledDiv>
          <StyledDiv>
            <SurveyInput
              DP="flex"
              contentEditable="true"
              OW="break-word"
              WW="break-word"
              WB="break-word"
              placeholder={`Item${num + 1} `}
              BR="20px"
              FBR="calc(.5 * var(--base-unit, 8px))"
              OT="none"
              FOT="3px solid rgb(25, 179, 148)"
            />
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>

      <StyledDiv AI="center" DP="flex">
        <StyledDiv DP="flex" JC="center">
          <StyledDiv DP="flex">
            {items.showNoneItem ? (
              <IoIosAddCircle
                size={20}
                color="rgb(25, 179, 148)"
                onClick={() => handleAddNone(PageIndex, elementIndex, value)}
              />
            ) : (
              <IoIosRemoveCircle
                size={20}
                color="red"
                onClick={() => handleRemoveNone(PageIndex, elementIndex, value)}
              />
            )}
            <StyledDiv>
              <StyledInput
                style={{
                  display: "flex",

                  justifyContent: "center",
                  width: "calc(3 * var(--base-unit, 8px))",
                  height: "calc(3 * var(--base-unit, 8px))",
                  boxSizing: "border-box",
                  background: "whiteSmoke",
                  boxShadow: "inset 0px 1px 2px rgb(0 0 0 / 15%)",

                  flexShrink: "0",
                }}
                BR="12px"
                BD="none"
                ML="12px"
                disabled
              />
            </StyledDiv>
          </StyledDiv>
          <StyledDiv DP="flex">
            <SurveyInput
              DP="flex"
              contentEditable={items.showNoneItem ? "false" : "true"}
              OW="none"
              WW="break-word"
              WB="break-word"
              placeholder="none"
              BR="20px"
              FBR="calc(.5 * var(--base-unit, 8px))"
              OT="none"
              FOT="3px solid rgb(25, 179, 148)"
            />
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>

      <StyledDiv AI="center" DP="flex">
        <StyledDiv DP="flex" JC="center">
          <StyledDiv DP="flex">
            {items.showOtherItem ? (
              <IoIosAddCircle
                size={20}
                color="rgb(25, 179, 148)"
                onClick={() => handleAddOther(PageIndex, elementIndex, val)}
              />
            ) : (
              <IoIosRemoveCircle
                size={20}
                color="red"
                onClick={() => handleRemoveOther(PageIndex, elementIndex, val)}
              />
            )}
            <StyledDiv DP="flex">
              <StyledInput
                style={{
                  display: "flex",

                  justifyContent: "center",
                  width: "calc(3 * var(--base-unit, 8px))",
                  height: "calc(3 * var(--base-unit, 8px))",
                  boxSizing: "border-box",
                  background: "whiteSmoke",
                  boxShadow: "inset 0px 1px 2px rgb(0 0 0 / 15%)",

                  flexShrink: "0",
                }}
                BR="12px"
                BD="none"
                ML="12px"
                disabled
              />
            </StyledDiv>
          </StyledDiv>
          <StyledDiv>
            <SurveyInput
              DP="flex"
              contentEditable={items.showOtherItem ? "false" : "true"}
              OW="none"
              WW="break-word"
              WB="break-word"
              placeholder="Others(Describe)"
              BR="20px"
              FBR="calc(.5 * var(--base-unit, 8px))"
              OT="none"
              FOT="3px solid rgb(25, 179, 148)"
            />
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
}

export default RadioGroup;
