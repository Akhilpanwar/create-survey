import React, { useState } from "react";
import {
  StyledDiv,
  StyledInput,
  SurveyInput,
  Input,
} from "../../../../Header/styles";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  AddRadio,
  RadioShowOther,
  RadioShowNone,
  RemoveRadio,
} from "../../../../Redux/pageSlice";
function DropDown({ items, PageIndex, elementIndex }) {
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
    <StyledDiv DP="flex" FD="column" style={{ minWidth: "100%" }}>
      <StyledDiv DP="flex" HG="3rem" style={{ minWidth: "100%" }}>
        <StyledInput
          DP="flex"
          style={{
            minWidth: "100%",
            boxShadow: "inset 0px 1px 2px rgb(0 0 0 / 15%)",
          }}
          OT="1px solid white"
          BG="whiteSmoke"
          BD="none"
          placeholder="select... "
          disabled
        ></StyledInput>
      </StyledDiv>
      <StyledDiv MBS="2rem" MIS="1rem">
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
                <StyledDiv DP="flex" MIS=".5rem">
                  <Input
                    DP="flex"
                    contentEditable="true"
                    WW="break-word"
                    WB="break-word"
                    placeholder={item}
                    style={{ fontWeight: "200" }}
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
      </StyledDiv>
      <StyledDiv DP="flex" MIS="1rem">
        <StyledDiv DP="flex" AI="center" BD="1px solid lightgrey" BR="22px">
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
          <StyledDiv DP="flex" MIS=".5rem">
            <SurveyInput
              DP="flex"
              contentEditable="true"
              OW="break-word"
              WW="break-word"
              WB="break-word"
              style={{ fontWeight: "200" }}
              placeholder={`Item${num + 1} `}
              BR="20px"
              FBR="calc(.5 * var(--base-unit, 8px))"
              OT="none"
              FOT="3px solid rgb(25, 179, 148)"
            />
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>

      <StyledDiv
        DP="flex"
        AI="center"
        BD="1px solid lightgrey"
        BR="22px"
        MIS="1rem"
      >
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

          <StyledDiv DP="flex" MIS=".5rem">
            <SurveyInput
              DP="flex"
              contentEditable={items.showNoneItem ? "false" : "true"}
              OW="none"
              style={{ fontWeight: "200" }}
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

      <StyledDiv DP="flex">
        <StyledDiv DP="flex">
          <StyledDiv DP="flex" MIS="1rem">
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
          <StyledDiv DP="flex" MIS=".5rem">
            <SurveyInput
              DP="flex"
              contentEditable={items.showOtherItem ? "false" : "true"}
              OW="none"
              WW="break-word"
              WB="break-word"
              style={{ fontWeight: "200" }}
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

export default DropDown;
