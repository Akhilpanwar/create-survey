import React, { useState, useRef, useEffect } from "react";

import {
  StyledDiv,
  StyledInput,
  SurveyInput,
  Input,
  StyledRadio,
} from "../../../../Header/styles";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  AddRadio,
  RadioShowOther,
  RadioShowNone,
  RemoveRadio,
  changeRadioContent,
} from "../../../../Redux/pageSlice";
import { AddData } from "../../../../Redux/surveySlice";

function RadioGroup({ items, data, PageIndex, elementIndex, show }) {
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
  const handleChange = (e, PageIndex, elementIndex, index) => {
    const v = e.target.innerText;

    Dispatch(changeRadioContent({ PageIndex, elementIndex, index, v }));
  };
  const handleChangeCheck = (e) => {
    const SelItem = e.target.value;
    const Question = e.target.name;


    Dispatch(AddData({ Question, SelItem }));
  };
  return (
    <StyledDiv DP="flex" FD="column" AI="baseline">
      {items.Choices.map((item, index) => {
        return (
          <StyledDiv DP="flex" AI="baseline">
            <StyledDiv DP="flex" FD="row" MIE=".5rem">
              {show === true && (
                <IoIosRemoveCircle
                  size={20}
                  color="red"
                  onClick={() => handleRemove(PageIndex, elementIndex, index)}
                />
              )}
            </StyledDiv>

            <StyledDiv DP="flex">
              <StyledInput
                style={{
                  width: "calc(3 * var(--base-unit, 8px))",
                  height: "calc(3 * var(--base-unit, 8px))",
                }}
                value={item}
                id={item}
                onChange={(e) => handleChangeCheck(e)}
                name={items.name}
                type="radio"
                disabled={show}
              />
            </StyledDiv>

            <StyledDiv DP="flex" MIS="1rem">
              <Input
                DP="flex"
                contentEditable={show ? "true" : "false"}
                WW="break-word"
                WB="break-word"
                style={{ fontWeight: "200", color: "black" }}
                placeholder={!item.title ? item : item.title}
                onInput={(e) => handleChange(e, PageIndex, elementIndex, index)}
                BR="20px"
                FBR="calc(.5 * var(--base-unit, 8px))"
                OT="none"
                FOT="3px solid rgb(25, 179, 148)"
              />
            </StyledDiv>
          </StyledDiv>
        );
      })}

      {show === true && (
        <StyledDiv DP="flex" FD="column" AI="baseline">
          <StyledDiv DP="flex">
            <StyledDiv DP="flex">
              <IoIosAddCircle
                color="rgb(25, 179, 148)"
                size={20}
                onClick={() => handleAdd(PageIndex, elementIndex, num)}
              />
              <StyledDiv DP="flex" MIS=".5rem">
                <StyledInput
                  style={{
                    display: "flex",

                    width: "calc(3 * var(--base-unit, 8px))",
                    height: "calc(3 * var(--base-unit, 8px))",

                    flexShrink: "0",
                  }}
                  type="Radio"
                  BD="none"
                  disabled
                />
              </StyledDiv>
            </StyledDiv>
            <StyledDiv DP="flex" MIS="1rem">
              <SurveyInput
                DP="flex"
                contentEditable="true"
                OW="break-word"
                WW="break-word"
                WB="break-word"
                placeholder={`Item${num + 1} `}
                style={{ fontWeight: "200", color: "black" }}
                BR="20px"
                FBR="calc(.5 * var(--base-unit, 8px))"
                OT="none"
                FOT="3px solid rgb(25, 179, 148)"
              />
            </StyledDiv>
          </StyledDiv>

          <StyledDiv AI="baseline" DP="flex">
            <StyledDiv DP="flex" JC="center">
              <StyledDiv DP="flex">
                {items.showNoneItem ? (
                  <IoIosAddCircle
                    size={20}
                    color="rgb(25, 179, 148)"
                    onClick={() =>
                      handleAddNone(PageIndex, elementIndex, value)
                    }
                  />
                ) : (
                  <IoIosRemoveCircle
                    size={20}
                    color="red"
                    onClick={() =>
                      handleRemoveNone(PageIndex, elementIndex, value)
                    }
                  />
                )}
                <StyledDiv DP="flex" MIS=".5rem">
                  <StyledInput
                    style={{
                      width: "calc(3 * var(--base-unit, 8px))",
                      height: "calc(3 * var(--base-unit, 8px))",
                    }}
                    type="Radio"
                    disabled
                  />
                </StyledDiv>
              </StyledDiv>
              <StyledDiv DP="flex" MIS="1rem">
                <SurveyInput
                  DP="flex"
                  style={{ fontWeight: "200", color: "black" }}
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
                    onClick={() =>
                      handleRemoveOther(PageIndex, elementIndex, val)
                    }
                  />
                )}
                <StyledDiv DP="flex" MIS=".5rem">
                  <StyledInput
                    type="Radio"
                    style={{
                      width: "calc(3 * var(--base-unit, 8px))",
                      height: "calc(3 * var(--base-unit, 8px))",
                    }}
                    disabled
                  />
                </StyledDiv>
              </StyledDiv>
              <StyledDiv DP="flex" MIS="1rem">
                <SurveyInput
                  DP="flex"
                  PTC="grey"
                  style={{ fontWeight: "200", color: "black" }}
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
      )}
    </StyledDiv>
  );
}

export default RadioGroup;
