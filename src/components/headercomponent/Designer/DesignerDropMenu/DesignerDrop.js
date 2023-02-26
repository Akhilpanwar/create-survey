import React, { useState } from "react";
import { Content } from "./Content";
import DesignerContent from "./DesignerContent";
import { StyledUl } from "../../../Header/styles";

const DesignerDrop = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <StyledUl
      BT="3px solid rgb(25, 179, 148)"
      BG="whiteSmoke"
      style={{ overflowY: "scroll", height: "600px" }}
    >
      {Content.map((faq, index) => (
        <DesignerContent
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          key={index}
          faq={faq}
        />
      ))}
    </StyledUl>
  );
};

export default DesignerDrop;
