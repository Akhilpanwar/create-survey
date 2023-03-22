import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import {
  StyledDiv,
  Input,
  StyledInput,
  StyledRadio,
} from "../../../../Header/styles";

import { useDispatch } from "react-redux";
import { AddRate } from "../../../../Redux/pageSlice";
import { AddData } from "../../../../Redux/surveySlice";

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
  const handleClick = (e,item) => {
    const SelItem = item;
    const Question = e.target.name;
console.log(SelItem,Question)
    Dispatch(AddData({ Question,SelItem }));
  };

  return (
    <StyledDiv>
      <StyledDiv DP="flex" AI="center" HG="100%">
        <StyledDiv DP="flex" FD="row" HG="100%" AS="baseline">
          {show === true && (
            <StyledDiv DP="flex" FD="row" AI="center">
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
            </StyledDiv>
          )}

          <StyledDiv DP="flex" FD="row" style={{ flexWrap: "wrap" }}>
            {items.map((item, index) => {
              return (
                <StyledDiv DP="flex" FD="row" MIS="1rem" POT="relative">
                  {show ? (
                    <Input
                      contentEditable={show ? true : false}
                      FOT="3px solid rgb(25, 179, 148)"
                      BR="222px"
                      OT="none"
                      FS="25px"
                      OW="break-word"
                      WW="break-word"
                      WB="break-word"
                      tabIndex={1234}
                      JC="space-around"
                      placeholder={item}
                      style={{
                        overflowX: "hidden",
                        maxWidth: "100%",
                        display: "flex",
                        cursor: "default",
                        textAlign: "center",
                        fontSize: "calc(2 * var(--base-unit, 8px))",
                        lineHeight: "calc(3 * var(--base-unit, 18px))",
                        minWidth: "calc(3 * var(--base-unit, 18px))",

                        whiteSpace: "nowrap",
                        background: "var(--background, #fff)",
                        boxShadow: "0px 1px 2px rgb(0 0 0 / 15%)",
                      }}
                    ></Input>
                  ) : (
                    <StyledRadio
                      ZI="8"
                      for={item}
                      value={Rates}
                      tabIndex={1234}
                      
                    >
                      {item}
                    </StyledRadio>
                   
            )}

                  {show === false && (
                    <StyledInput
                      type="radio"
                      ZI="1"
                      onClick={(e) => handleClick(e,item)}
                      id={item}
                      name={Rates.name}
                      style={{
                        justifyContent:"center",
                        textAlign:"center",
                        height: "52px",
                  
                     
                    
                        cursor: "default",
                        fontSize: "calc(2 * var(--base-unit, 8px))",
                        minWidth: "calc(3 * var(--base-unit, 18px))",
                        position: "absolute",
                        whiteSpace: "wrap",
                        borderRadius: "calc(12.5 * var(--base-unit, 8px))",
                      }}
                    ></StyledInput>
                  )}
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
