import React, { useState, useRef } from "react";
import {
  StyledDiv,
  Duplicate,
  Required,
  Delete,
  DropMenu,
} from "../../../Header/styles";
import "./drop.css";
import Switch from "react-bootstrap/Switch";

import { HiOutlineDuplicate } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import { IoMdArrowDropdown } from "react-icons/io";
import { changeType } from "../../../Redux/pageSlice";

import { useSelector, useDispatch } from "react-redux";

function QuestionsFun({
  Add,
  item,
  elementIndex,
  DeleteQuestions,
  PageIndex,
  type,
  DuplicateQuestion,
  handleRequired,
}) {
  let Dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const elements = useSelector((state) => state.surveyReducer.Designer);

  const handleClick = (event) => {
    setShow(!show);

    setTarget(event.target);
  };

  return (
    <StyledDiv DP="flex" FD="row" JC="space-around" AI="flex-end">
      <DropMenu ref={ref}>
        <Button
          variant="none"
          style={{
            outline: "none",
            fontWeight: "600",
            fontSize: "calc(1.5 * var(--base-unit, 8px))",
          }}
          onClick={handleClick}
        >
          {type}
          <IoMdArrowDropdown color="orange" size={25} />
        </Button>

        <Overlay show={show} target={target} placement="top">
          <Popover
            id="popover-contained"
            style={{ overflowY: "scroll", height: "24rem", width: "20rem" }}
          >
            <Popover.Header as="h3">search</Popover.Header>
            {elements.slice(0, 9).map((data, i) => {
              const title = data.title;
              const v = data.data;
              return (
                <Popover.Body
                  onClick={() =>
                    Dispatch(
                      changeType({ PageIndex, elementIndex, v }),
                      setShow(!show)
                    )
                  }
                >
                  <span>{data.icons}</span>
                  <span>{title}</span>
                </Popover.Body>
              );
            })}
            <Dropdown.Divider />
            {elements.slice(9, 12).map((data, i) => {
              const title = data.title;
              return (
                <Popover.Body
                  onClick={() =>
                    Dispatch(changeType({ title }, setShow(!show)))
                  }
                >
                  <span>{data.icons}</span>
                  <span>{title}</span>
                </Popover.Body>
              );
            })}
            <Dropdown.Divider />
            {elements.slice(12, 14).map((data, i) => {
              const title = data.title;
              return (
                <Popover.Body
                  onClick={() =>
                    Dispatch(changeType({ title }, setShow(!show)))
                  }
                >
                  <span>{data.icons}</span>
                  <span>{title}</span>
                </Popover.Body>
              );
            })}
            <Dropdown.Divider />
            {elements.slice(14, 17).map((data, i) => {
              const title = data.title;
              return (
                <Popover.Body
                  onClick={() =>
                    Dispatch(changeType({ title }, setShow(!show)))
                  }
                >
                  <span>{data.icons}</span>
                  <span>{title}</span>
                </Popover.Body>
              );
            })}
            <Dropdown.Divider />
            {elements.slice(17, 21).map((data, i) => {
              const title = data.title;
              return (
                <Popover.Body
                  onClick={() =>
                    Dispatch(changeType({ title }, setShow(!show)))
                  }
                >
                  <span>{data.icons}</span>
                  <span>{title}</span>
                </Popover.Body>
              );
            })}
          </Popover>
        </Overlay>
      </DropMenu>

      <StyledDiv DP="flex" FD="row" TA="flex-end">
        <StyledDiv>
          <Duplicate
            WD="140px"
            PD="none"
            BG="white"
            style={{
              fontWeight: "600",
              fontSize: "calc(1.5 * var(--base-unit, 8px))",
            }}
            onClick={() => DuplicateQuestion(item, PageIndex)}
          >
            <HiOutlineDuplicate color="orange" /> Duplicate
          </Duplicate>
        </StyledDiv>

        <StyledDiv DP="flex" AI="baseline">
          <Required>
            <Switch
              id={elementIndex}
              role="switch"
              type="checkBox"
              name="switch"
              style={{
                fontWeight: "600",
                fontSize: "calc(1.5 * var(--base-unit, 8px))",
              }}
              onChange={() => handleRequired(item, PageIndex, elementIndex)}
            />
            <label for={elementIndex}>Required</label>
          </Required>
        </StyledDiv>

        <StyledDiv>
          <Delete
            WD="140px"
            PD="none"
            BG="white"
            style={{
              fontWeight: "600",
              fontSize: "calc(1.5 * var(--base-unit, 8px))",
            }}
            onClick={() => DeleteQuestions(item, PageIndex, elementIndex)}
          >
            <RiDeleteBin6Line color="orange" /> Delete
          </Delete>
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
}

export default QuestionsFun;
