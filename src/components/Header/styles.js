import styled from "styled-components";
export const StyledDiv = styled.div`
  display: ${(props) => props.DP};
  position: ${(props) => props.POT};
  border-radius: ${(props) => props.BR};
  flex-direction: ${(props) => props.FD};
  justify-content: ${(props) => props.JC};
  height: ${(props) => props.HG};
  align-items: ${(props) => props.AI};
  align-self: ${(props) => props.AS};
  width: ${(props) => props.WD};
  border-bottom: ${(props) => props.BB};
  font-size: ${(props) => props.FS};
  background: ${(props) => props.BG};
  margin-left: ${(props) => props.ML};
  padding-bottom: ${(props) => props.PB};
  padding-top: ${(props) => props.PT};
  text-align: ${(props) => props.TA};
  margin-block-start: ${(props) => props.MBS};
  margin-block-end: ${(props) => props.MBE};
  margin-inline-start: ${(props) => props.MIS};
  margin-inline-end: ${(props) => props.MIE};
  float: ${(props) => props.FL};
  outline: ${(props) => props.OT};
  &:hover {
    cursor: ${(props) => props.CUR};
    background: ${(props) => props.HBG};
    outline: ${(props) => props.HOT };
    
  }
  &:focus {
    outline: ${(props) => props.FOT};
    border-bottom: ${(props) => props.FBB};
    background: ${(props) => props.FBG};
  }

  &:hover button {
    display: ${(props) => props.HBDP};
    visibility: ${(props) => props.HBV};
  }
  &:focus button {
    display: ${(props) => props.FBDP};
    visibility: ${(props) => props.FBV};
  }
`;
export const ImageDiv = styled.div`
  display: none;
  background: ${(props) => props.BG};
  width: ${(props) => props.WD};
  height: ${(props) => props.HG};

  align-items: ${(props) => props.AI};

  justify-content: ${(props) => props.JC};

  border-radius: ${(props) => props.BR};
`;

export const StyledSpan = styled.span`
  padding: ${(props) => props.PD};
  padding-bottom: ${(props) => props.PB};
  font-size: ${(props) => props.FS};
  display: ${(props) => props.DP};
`;

export const StyledUl = styled.ul`
  padding-inline-start: ${(props) => props.PIS};
  margin-block-start: ${(props) => props.MBS};
`;
export const StyledLi = styled.li`
  list-style: none;
 
width:1px;
    transition:width .1s;
 
   
  height: 40px;

  white-space: ${(props) => props.WS};
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: ${(props) => props.BR};
 
  &:hover {
    background-color: white;
    box-shadow: ${(props) => props.HBS};
    height: 40px;
    background: ${(props) => props.BG};
    padding-left: 1rem;
    cursor: default;
    height: ${(props) => props.HG};
  
    width: 150px;
  }
  i {
    font: 1em/1 "rokkitt", sans-serif;
    visibility:hidden;
   
  }
  &:hover i{
    visibility:visible;
  }
  b {
    color: grey;

    display: inline-block;

    padding: 0.675em 0.175em;
  }

  &:hover b {
    color: rgb(25, 179, 148);

     
    
  }
`;

export const StyledButton = styled.button`
  position: ${(props) => props.POT};
  background: ${(props) => props.BG};
  color: ${(props) => props.color};
  font-size: ${(props) => props.FS};
  float: ${(props) => props.FL};
  height: ${(props) => props.HG};
  border: ${(props) => props.BD};
  border-radius: ${(props) => props.BR};
  padding-left: ${(props) => props.PL};
  padding-right: ${(props) => props.PR};
  padding-top: ${(props) => props.PT};
  padding-bottom: ${(props) => props.PB};
  padding: ${(props) => props.PD};
  left: ${(props) => props.LEFT};
  box-shadow: ${(props) => props.BSS};
  outline: ${(props) => props.OT};
  flex-grow: ${(props) => props.FG};
  margin-right: ${(props) => props.MR};
  margin-left: ${(props) => props.ML};
  width: ${(props) => props.WD};
  font-size: ${(props) => props.FS};
  margin-bottom: ${(props) => props.MB};
  text-align: ${(props) => props.TA};
  border-bottom: ${(props) => props.BB};
  border-style: ${(props) => props.BS};
  color: ${(props) => props.TC};
  margin-inline-start: ${(props) => props.MIS};
  margin-inline-end: ${(props) => props.MIE};
  display: ${(props) => props.DP};

  &:hover {
    outline: ${(props) => props.HOT};
    background: ${(props) => props.HBG};
    color: ${(props) => props.HC};
    cursor: pointer;
    border: ${(props) => props.HBD};
  }
  &:focus {
    background: ${(props) => props.FBG};
    color: ${(props) => props.FC};

    cursor: pointer;
  }
`;
export const Heading = styled.h1`
  font-family: ${(props) => props.FF};
  line_height: ${(props) => props.LH};
  font-style: ${(props) => props.FST};
  font-weight: ${(props) => props.FW};
  background: ${(props) => props.BG};
  margin: ${(props) => props.MG};
  width: ${(props) => props.WD};
  margin-left: ${(props) => props.ML};
  margin-right: ${(props) => props.MR};
  margin-top: ${(props) => props.MT};
  margin-bottom: ${(props) => props.MB};
  padding: ${(props) => props.PD};
  padding-left: ${(props) => props.PL};
  font-size: ${(props) => props.FS || "15px"};
  padding-right: ${(props) => props.PR};
  color: ${(props) => props.TC || "Grey"};
  padding-top: ${(props) => props.PT};
  padding-down: ${(props) => props.PD};
  float: ${(props) => props.FL};
  overflow: ${(props) => props.OF};
  display: ${(props) => props.DP};
  border: ${(props) => props.BD};
  text-align: ${(props) => props.TA};
  &:hover{
    background:${(props)=>props.HBG};

  }
  &:focus{
    outline:${(props)=>props.FOT};
  }
`;
export const SurveyInput = styled.h3`
  line-height: 1;
  background: ${(props) => props.BG};
  display: ${(props) => props.DP};
  outline: ${(props) => props.OT};
  font-size: ${(props) => props.FS};
  border: ${(props) => props.BD};
  font-size: ${(props) => props.FS};
  overflow-wrap: ${(props) => props.OW};
  word-wrap: ${(props) => props.WW};
  word-break: ${(props) => props.WB};
  color: ${(props) => props.TC};
  padding: ${(props) => props.PD};
  margin-left: ${(props) => props.ML};
  max-width: ${(props) => props.MW};
  height: ${(props) => props.HG};
  border-radius: ${(props) => props.BR};
  justify-content: ${(props) => props.JC};
  align-items: ${(props) => props.AI};
  align-self: ${(props) => props.AS};
  width: ${(props) => props.WD};
 
  &:focus {
    overflow: ${(props) => props.FOW};
    word-break: ${(props) => props.FWB};
    word-wrap: ${(props) => props.FWW};
    border-radius: ${(props) => props.FBR};
    outline: ${(props) => props.FOT};
    width: ${(props) => props.FWD};
    max-width: ${(props) => props.FMW};
    height: ${(props) => props.FHE};
    color: black;
    background: white !important;
    text-decoration: none;
    display: ${(props) => props.FDP};
    position: ${(props) => props.FPT};
    white-space: ${(props) => props.FWS};
    z-index: ${(props) => props.FZI};
  }
  [placeholder]:empty&:before {
    content: Attr(placeholder);
    color:${(props) => props.PTC};
    cursor: text;
color:black;
    oultine: none;
opacity:0.5;

    text-decoration: none;
  }

  &:hover {
    background: ${(props) => props.HBG};
  }
`;
export const Input = styled.h3`
  line-height: 1;
  background: ${(props) => props.BG};
  display: ${(props) => props.DP};
  outline: ${(props) => props.OT};
  font-size: ${(props) => props.FS};
  border: ${(props) => props.BD};
  font-size: ${(props) => props.FS};
  overflow-wrap: ${(props) => props.OW};
  word-wrap: ${(props) => props.WW};
  word-break: ${(props) => props.WB};
  color: ${(props) => props.TC};
  padding: ${(props) => props.PD};
  margin-left: ${(props) => props.ML};
  max-width: ${(props) => props.MW};
  height: ${(props) => props.HG};
  border-radius: ${(props) => props.BR};
  justify-content: ${(props) => props.JC};
  align-items: ${(props) => props.AI};
  align-self: ${(props) => props.AS};
  width: ${(props) => props.WD};
  &:focus {
    overflow: ${(props) => props.FOW};
    word-break: ${(props) => props.FWB};
    word-wrap: ${(props) => props.FWW};
    border-radius: ${(props) => props.FBR};
    outline: ${(props) => props.FOT};
    width: ${(props) => props.FWD};
    max-width: ${(props) => props.FMW};
    height: ${(props) => props.FHE};
    color: black;
    background: white !important;
    text-decoration: none;
    display: ${(props) => props.FDP};
    position: ${(props) => props.FPT};
    white-space: ${(props) => props.FWS};
    z-index: ${(props) => props.FZI};
  }
  [placeholder]:empty&:before {
    content: Attr(placeholder);
    color:black
    cursor: text;
opacity:0.9;
    oultine: none;

    text-decoration: none;
  }

  &:hover {
    background: ${(props) => props.HBG};
  }
`;
export const BottomBorder = styled.h1`
  border-bottom: ${(props) => props.BB || "2px solid rgb(25, 179, 148);"};
`;
export const StyledInput = styled.input`
  margin-top: ${(props) => props.MT};
  margin-left: ${(props) => props.ML};
  display: ${(props) => props.DP};
  width: ${(props) => props.WD};
  height: ${(props) => props.HG};
  border: ${(props) => props.BD};
  outline: ${(props) => props.OT};
  font-size: ${(props) => props.FS};
  background: ${(props) => props.BG};
  position: ${(props) => props.PT};
  box-shadow: ${(props) => props.BS};
  border-radius: ${(props) => props.BR};
  &:focus {
    width: ${(props) => props.FWD};
    outline: ${(props) => props.FOT};
    border: ${(props) => props.FBD};
    border-radius: ${(props) => props.FBR};
  }
  &:hover {
    background: ${(props) => props.HBG};
  }
`;

export const CheckBox = styled.input`
  display: flex;
  flex-direction: column;
  width: 25px;
  height: 25px;
  margin-top: 12px;
`;
export const DataButton = styled.button`
  background: white;
  height: 45px;
  width: 50%;
  font-size: 20px;
  border: 1px solid lightgrey;
  &:focus {
    background: white;
    cursor: pointer;
    color: rgb(25, 179, 148);
  }
  &:active {
    background: white;
    cursor: pointer;
  }
  &:hover {
    background: lightgrey;
  }
`;

export const StyledLI = styled.li`
  list-style-type: none;
  background: ${(props) => props.BG};
  margin: ${(props) => props.MG};
  margin-left: ${(props) => props.ML};
  margin-right: ${(props) => props.MR};
  margin-top: ${(props) => props.MT};
  margin-bottom: ${(props) => props.MB};
  padding: ${(props) => props.PD};
  padding-left: ${(props) => props.PL};
  width: ${(props) => props.WD};
  padding-right: ${(props) => props.PR};
  padding-top: ${(props) => props.PT};
  padding-down: ${(props) => props.PD};
  float: ${(props) => props.FL};
  overflow: ${(props) => props.OF};
  display: ${(props) => props.DP};
  border: ${(props) => props.BD};
`;

//================buttons===================
export const DuplicatePage = styled.button`
  border: none;
  color: black;
  margin-inline-end: 1rem;
  background: none;
  cursor: pointer;
  float: ${(props) => props.FL};
  visibility: hidden;
  &:hover {
    background: white;
  }
`;
export const DeletePage = styled.button`
  border: none;
  color: black;
  background: none;
  cursor: pointer;
  float: ${(props) => props.FL};
  visibility: hidden;
  &:hover {
    background: white;
  }
`;
export const Duplicate = styled.button`
  border: none;
  color: black;
  visibility: hidden;
  background: white;
  cursor: pointer;
  float: ${(props) => props.FL};

  &:hover {
    background: white;
  }
`;
export const DropMenu =styled.button`
cursor: pointer;
border: none;
visibility: hidden;

background: ${(props) => props.BG || "white"};
&:hover {
  background: white;
}
`
export const Delete = styled.button`
  cursor: pointer;
  border: none;
  visibility: hidden;

  background: ${(props) => props.BG || "white"};
  &:hover {
    background: white;
  }
`;
export const Required = styled.button`
  border: none;

  visibility: hidden;
  cursor: pointer;
  background: white;
  display: flex;
  align-items:baseline;

  &:hover {
    background: var(--background-dim, #f3f3f3);
  }
  &:focus: {
    background: var(--background-dim, #f3f3f3);
  }
`;
export const QuestionNumber = styled.span`
  font-size: 24px;
  background: white !important;
  color: grey;
  line-height: none;
`;



 export const RadioButton = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;

  input[type="radio"] {
    display: none;
  }

  .radio-circle {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #ccc;
    position: relative;
    margin-right: 10px;
  }

  .radio-circle::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ccc;
    opacity: 0;
    transition: opacity 0.2s;
  }

  input[type="radio"]:checked + .radio-circle::before {
    opacity: 1;
  }
`;