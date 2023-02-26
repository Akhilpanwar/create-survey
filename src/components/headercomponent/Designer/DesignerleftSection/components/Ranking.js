import React from "react";
import { StyledDiv, StyledInput, SurveyInput } from "../../../../Header/styles";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";

import { useDispatch } from "react-redux";
import { AddRank, RemoveRank } from "../../../../Redux/pageSlice";
function Ranking({ items, PageIndex, elementIndex, show }) {
  console.log(PageIndex, elementIndex);
  const Dispatch = useDispatch();
  const num =
    items?.Choices?.length > 0 &&
    parseInt(items.Choices[items?.Choices?.length - 1].match(/(\d+)/));
  const handleRemove = (PageIndex, elementIndex, ind) => {
    Dispatch(RemoveRank({ PageIndex, elementIndex, ind }));
  };
  const handleAdd = (PageIndex, elementIndex, num) => {
    num += 1;

    Dispatch(AddRank({ PageIndex, elementIndex, num }));
  };
  return (
    <StyledDiv DP="flex" FD="column" WD="100%" JC="space-between">
      {items.Choices.map((item, ind) => {
        return (
          <StyledDiv DP="flex" WD="28%" AI="center" JC="space-between">
            <StyledDiv DP="flex">
              {show === true && (
                <IoIosRemoveCircle
                  size={30}
                  color="red"
                  onClick={() => handleRemove(PageIndex, elementIndex, ind)}
                />
              )}
            </StyledDiv>

            <StyledDiv DP="flex">
              <StyledInput
                placeholder="-"
                className="place"
                style={{
                  display: "flex",

                  width: "calc(4 * var(--base-unit, 8px))",
                  height: "calc(4 * var(--base-unit, 8px))",
                  boxSizing: "border-box",
                  background: "var(--primary-light, rgba(25, 179, 148, 0.1))",

                  flexShrink: "0",
                }}
                BR="38px"
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
      {items.Choices.length !== 0 && (
        <StyledDiv DP="flex" WD="28%" AI="center" JC="space-between">
          <StyledDiv DP="flex">
            {show === true && (
              <IoIosAddCircle
                color="rgb(25, 179, 148)"
                size={30}
                onClick={() => handleAdd(PageIndex, elementIndex, num)}
              />
            )}
          </StyledDiv>
          <StyledDiv DP="flex">
            <StyledInput
              placeholder="-"
              className="place"
              style={{
                display: "flex",

                width: "calc(4 * var(--base-unit, 8px))",
                height: "calc(4 * var(--base-unit, 8px))",
                boxSizing: "border-box",
                background: "whiteSmoke",

                flexShrink: "0",
              }}
              BR="38px"
              BD="none"
              disabled
            />
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
      )}
    </StyledDiv>
  );
}

export default Ranking;
