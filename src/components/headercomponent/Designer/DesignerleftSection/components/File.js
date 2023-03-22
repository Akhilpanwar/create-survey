import React,{useState} from "react";
import { MdSettingsRemote } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Heading, StyledDiv, StyledInput } from "../../../../Header/styles";
import { AddData } from "../../../../Redux/surveySlice";
function File({ items, show,PageIndex, elementIndex }) {
  const [image, SetImage] = useState();
  const Dispatch = useDispatch();
  const handleChange = (e) => {
    const Question = e.target.name;
    const file = e.target.files[0];
    getBase64(file, Question);
  };
  const getBase64 = (file, Question) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      onLoad(reader.result, Question);
    };
  };
  const onLoad = (fileString, Question) => {
    const SelItem = fileString;
    SetImage(fileString);
    Dispatch(AddData({ Question, SelItem }));
  };
  return (
    <StyledDiv DP="flex" HG="20rem" WD="100%" JC="center" AI="center">
      <StyledDiv
        DP="flex"
        OT="3px dotted lightgrey"
        HG="90%"
        WD="100%"
        style={{
          boxSizing: "border-box",
        }}
      >
        <StyledDiv
          DP="flex"
          FD="column"
          AI="center"
          style={{ minWidth: "100%" }}
          JC="center"
        >
         {!image ? ( <> <Heading FS="15px" FW="200">
            Drop a file here or click the button below to load the file.
          </Heading>
          <label for="myItem" style={{ color: "lightgrey" }}>
            Choose File
          </label>
        
            <StyledInput
              onChange={(e) => {
                handleChange(e);
              }}
              name={items.name}
              DP="none"
              id="myItem"
              type="file"
              TC="lightgrey"
              BD="none"
              FOT="none"
              placeholder="Choose File"
              disabled={show}
              style={{ border: "none !important", outline: "none !important" }}
            /></> 
          ) : (
            <img src={image}  style={{height:"14rem"}}/>
          )}
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
}

export default File;
