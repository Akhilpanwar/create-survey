import React, { useEffect, useState } from "react";
import { StyledDiv, StyledSpan } from "./styles";

import Designer from "../headercomponent/Designer/Designer";
import Logic from "../headercomponent/Logic/Logic";
import Preview from "../headercomponent/Preview/Preview";
import Jsoneditor from "../headercomponent/jsonEditor/jsoneditor";
import EmbededSurvey from "../headercomponent/EmbedSurvey/EmbededSurvey";
import Translation from "../headercomponent/Translation/Translation";
import { useSelector } from "react-redux";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Header() {
  const survey = useSelector((state) => state.surveyReducer.surveyData);
  const item5 = survey[5].title;
  const item4 = survey[4].title;
  const item3 = survey[3].title;
  const item2 = survey[2].title;
  const item1 = survey[1].title;
  const item0 = survey[0].title;
  const [lastIndex, setLastIndex] = useState(6);

  const [component, setComponent] = useState(<Designer />);

  const handleClick = (item, item5, item4, item3, item2, item1, item0) => {
    switch (item.title || item4 || item5 || item3 || item2 || item1 || item0) {
      case "Designer":
        setComponent(<Designer />);

        break;
      case "Preview":
        setComponent(<Preview />);
        break;
      case "Logic":
        setComponent(<Logic />);
        break;
      case "JsonEditor":
        setComponent(<Jsoneditor />);
        break;
      case "Embeded Survey":
        setComponent(<EmbededSurvey />);
        break;
      case "Translation":
        setComponent(<Translation />);
        break;
      default: {
        setComponent(<Designer />);
      }
    }
  };

  return (
    <StyledDiv   style={{margin:"auto"}} >
      <StyledDiv DP="flex" BB="1px solid lightgrey" BG="white" HG="9rem">
        {survey.map((item, index) => {
          return (
            <StyledDiv
              FBB="2px solid rgb(25, 179, 148)"
              AS="end"
              FS="1rem"
              CUR="pointer"
              BG="white"
              HBG="whiteSmoke"
              key={index}
              tabIndex="1234"
              className={`${item.class}`}
              onResize={() => setLastIndex(lastIndex - 1)}
              PB="12px"
              PT="12px"
              onClick={(e) => handleClick(item)}
            >
              <StyledSpan PD="32px 32px">{item.title}</StyledSpan>
            </StyledDiv>
          );
        })}
        <DropdownButton
          className="drop"
          variant="none"
          id="dropdown-basic-button"
          title="..."
        >
          <Dropdown.Item id="firstDrop" onClick={(e) => handleClick(e, item5)}>
            {survey[5].title}
          </Dropdown.Item>
          <Dropdown.Item id="secondDrop" onClick={(e) => handleClick(e, item4)}>
            {survey[4].title}
          </Dropdown.Item>
          <Dropdown.Item id="thirdDrop" onClick={(e) => handleClick(e, item3)}>
            {survey[3].title}
          </Dropdown.Item>
          <Dropdown.Item id="fourthDrop" onClick={(e) => handleClick(e, item2)}>
            {survey[2].title}
          </Dropdown.Item>
          <Dropdown.Item id="fifthDrop" onClick={(e) => handleClick(e, item1)}>
            {survey[1].title}
          </Dropdown.Item>
          <Dropdown.Item id="sixthDrop" onClick={(e) => handleClick(e, item0)}>
            {survey[0].title}
          </Dropdown.Item>
        </DropdownButton>
      </StyledDiv>

      <StyledDiv BG="whiteSmoke" >{component}</StyledDiv>
    </StyledDiv>
  );
}

export default Header;
 