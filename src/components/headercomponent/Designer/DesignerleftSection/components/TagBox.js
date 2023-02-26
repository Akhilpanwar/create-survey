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
function TagBox({ items, PIndex, EIndex }) {
  const [value, setValue] = useState(true);
  const [val, setVal] = useState(true);
  const Dispatch = useDispatch();
  const num =
    items?.Choices?.length > 0 &&
    parseInt(items.Choices[items?.Choices?.length - 1].match(/(\d+)/));

  const handleAdd = (PIndex, EIndex, num) => {
    let ID = (num += 1);
    Dispatch(AddRadio({ PIndex, EIndex, ID }));
  };
  const handleRemove = (PIndex, EIndex, index) => {
    Dispatch(RemoveRadio({ PIndex, EIndex, index }));
  };
  const handleRemoveNone = (PIndex, EIndex, value) => {
    Dispatch(RadioShowNone({ PIndex, EIndex, value }));
    setValue(!value);
  };
  const handleAddNone = (PIndex, EIndex, value) => {
    Dispatch(RadioShowNone({ PIndex, EIndex, value }));
    setValue(!value);
  };
  const handleAddOther = (PIndex, EIndex, val) => {
    Dispatch(RadioShowOther({ PIndex, EIndex, val }));
    setVal(!val);
  };
  const handleRemoveOther = (PIndex, EIndex, val) => {
    Dispatch(RadioShowOther({ PIndex, EIndex, val }));
    setVal(!val);
  };
  return (
    <StyledDiv DP="flex" FD="column">
      <StyledDiv DP="flex" JC="center" HG="3rem">
        <StyledInput
          DP="flex"
          WD="95%"
          OT="none"
          BG="whiteSmoke"
          style={{
            minWidth: "100%",
            boxShadow: "inset 0px 1px 2px rgb(0 0 0 / 15%)",
          }}
          BD="none"
          placeholder="select... "
          disabled
        ></StyledInput>
      </StyledDiv>
      <StyledDiv MBS="1rem">
        {items.Choices.map((item, index) => {
          return (
            <StyledDiv>
              <StyledDiv
                DP="flex"
                AI="center"
                BD="1px solid lightgrey"
                BR="22px"
                MIS="1rem"

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
                    onClick={() => handleRemove(PIndex, EIndex, index)}
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
                <StyledDiv DP="flex" MIS=".6rem">
                  <Input
                    DP="flex"
                    contentEditable="true"
                    WW="break-word"
                    WB="break-word"
                    style={{ fontWeight: "200" }}
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
        <StyledDiv AI="center" DP="flex" MIS="1rem">
          <StyledDiv DP="flex" JC="center">
            <StyledDiv DP="flex">
              <IoIosAddCircle
                color="rgb(25, 179, 148)"
                size={20}
                onClick={() => handleAdd(PIndex, EIndex, num)}
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
            <StyledDiv DP="flex" MIS=".6rem">
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

        <StyledDiv AI="center" DP="flex" MIS="1rem">
          <StyledDiv DP="flex" JC="center">
            <StyledDiv DP="flex">
              {items.showNoneItem ? (
                <IoIosAddCircle
                  size={20}
                  color="rgb(25, 179, 148)"
                  onClick={() => handleAddNone(PIndex, EIndex, value)}
                />
              ) : (
                <IoIosRemoveCircle
                  size={20}
                  color="red"
                  onClick={() => handleRemoveNone(PIndex, EIndex, value)}
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
            <StyledDiv DP="flex" MIS=".6rem">
              <SurveyInput
                DP="flex"
                style={{ fontWeight: "200" }}
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

        <StyledDiv AI="center" DP="flex" MIS="1rem">
          <StyledDiv DP="flex" JC="center">
            <StyledDiv DP="flex">
              {items.showOtherItem ? (
                <IoIosAddCircle
                  size={20}
                  color="rgb(25, 179, 148)"
                  onClick={() => handleAddOther(PIndex, EIndex, val)}
                />
              ) : (
                <IoIosRemoveCircle
                  size={20}
                  color="red"
                  onClick={() => handleRemoveOther(PIndex, EIndex, val)}
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
            <StyledDiv MIS=".6rem">
              <SurveyInput
                DP="flex"
                style={{ fontWeight: "200" }}
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
  );
}

export default TagBox;
