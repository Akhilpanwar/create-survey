import React, { useState } from "react";
import { StyledDiv, StyledInput, SurveyInput } from "../../../../Header/styles";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  AddRadio,
  RadioShowOther,
  RadioShowNone,
  RemoveRadio,
  SelectShow,
} from "../../../../Redux/pageSlice";
function CheckBox({items,PageIndex,elementIndex}) {
  const [value, setValue] = useState(true);
  const [val, setVal] = useState(true);
  const [showSelect,setShowSelect]=useState(true)
  const Dispatch = useDispatch();
  const num =
    items?.Choices?.length > 0 &&
    parseInt(items.Choices[items?.Choices?.length - 1].match(/(\d+)/));

  const handleAdd = (PageIndex, elementIndex, num) => {
    let ID = (num += 1);
    Dispatch(AddRadio({ PageIndex, elementIndex, ID }));
  };
  const handleRemove = (PageIndex, elemetIndex, index) => {
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
  const handleShow=(PageIndex,elementIndex,showSelect)=>{
Dispatch(SelectShow({PageIndex,elementIndex,showSelect}))
setShowSelect(!showSelect)
  }
  const  handleShowOff=(PageIndex,elementIndex,showSelect)=>{
    Dispatch(SelectShow({PageIndex,elementIndex,showSelect}))
setShowSelect(!showSelect)
  }
  return (
    <StyledDiv >
      <StyledDiv DP="flex">
        <StyledDiv DP="flex" FD="column">
          <StyledDiv DP="flex">
           {items.showSelectAllItem? (
              <IoIosAddCircle
                size={20}
                color="rgb(25, 179, 148)"
                onClick={()=>handleShow(PageIndex,elementIndex,showSelect)}
               
              />
            ) : (
              <IoIosRemoveCircle size={20} color="red" onClick={()=>handleShowOff(PageIndex,elementIndex,showSelect)} />
            ) }
            <StyledInput
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "calc(3 * var(--base-unit, 8px))",
                height: "calc(3 * var(--base-unit, 8px))",
                boxSizing: "border-box",
                background: "whiteSmoke",
                boxShadow: "inset 0px 1px 2px rgb(0 0 0 / 15%)",

                flexShrink: "0",
              }}
              BD="none"
              ML="12px"
              disabled
            />
            <StyledDiv DP="flex" MIE="15%">
              <SurveyInput
                ML="12px"
                DP="flex"
                contentEditable={items.showSelectAllItem?"false":"true"}
                placeholder="SelectAll"
                BG="white"
                OT="none"
                FOT="3px solid rgb(25, 179, 148)"
                OW="break-word"
                WW="break-word"
                WB="break-word"
                BR="20px"
                FBR="calc(.5 * var(--base-unit, 8px))"
              />
            </StyledDiv>
          </StyledDiv>
          <StyledDiv>
      {items.Choices.map((item, index) => {
        return (
          <StyledDiv>
            <StyledDiv
              DP="flex"
              AI="center"
              BD="1px solid lightgrey"
              BR="22px"

              //   onDragOver={(e) => handleDragOver(e, index)}
              //   onDragEnter={(e) => handleDragEnter(e, index)}
              //   onDrop={(e) => handleDrop(e)}
              //   onDrag={(e) => handleDrag(e, index)}
              //   onDragEnd={(e) => handleDragEnd(e)}
              //   draggable
            >
              <StyledDiv DP="flex">
                <IoIosRemoveCircle
                  size={20}
                  color="red"
                  onClick={() => handleRemove(PageIndex, elementIndex, index)}
                />

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
                    JC="center"
                    BR="12px"
                    BD="none"
                    ML="12px"
                    disabled
                  />
                </StyledDiv>
              </StyledDiv>
              <StyledDiv MIS="1rem" DP="flex">
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
          </StyledDiv>
        );
      })}
      <StyledDiv AI="center" DP="flex">
        <StyledDiv DP="flex" JC="center">
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
          <StyledDiv DP="flex">
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
        </StyledDiv>
    </StyledDiv>
    </StyledDiv>
 );
}

export default CheckBox;
