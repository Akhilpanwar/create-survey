import React, { useEffect ,useState} from "react";
import {

  ImageDiv,
  StyledDiv,
  StyledInput,
  StyledButton
} from "../../../../Header/styles";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { RxDragHandleDots2 } from "react-icons/rx";

import { BsJustify } from "react-icons/bs";
import { AddImage, DeleteImage } from "../../../../Redux/pageSlice";
import { useDispatch } from "react-redux";


function ImagePicker({ items,PageIndex,elementIndex }) {
const [value,setValue]=useState()
var P=PageIndex
var E=elementIndex
console.log(P,E)
  let Dispatch = useDispatch();
  const handleChange = (e,elementIndex,PageIndex) => {
    e.preventDefault()
 
    const file = e.target.files[0];

    getBase64(file,elementIndex,PageIndex);
  };
  const getBase64 = (file,elementIndex,PageIndex) => {
    let reader = new FileReader();
    reader.readAsDataURL(file,elementIndex,PageIndex);
    
    reader.onload = (elementIndex,PageIndex) => {
    
      onLoad(reader.result,elementIndex,PageIndex);
    };
  };
  const onLoad = (fileString,elementIndex,PageIndex) => {
 console.log(elementIndex)
    Dispatch(AddImage({fileString,PageIndex,elementIndex}))
  
  };
  

  return (
    <StyledDiv DP="flex" WD="100%">
      {items.Choices==="null" ?(
        <StyledDiv DP="flex" HG="20rem" WD="100%" JC="center" AI="center">
          <StyledDiv
            DP="flex"
            OT="3px dotted lightgrey"
            WD="100%"
            style={{
              boxSizing: "border-box",
              minHeight: "100%",
            }}
          >
            <StyledDiv
              DP="flex"
              FD="column"
              AI="center"
              style={{ minWidth: "100%", minHeight: "100%" }}
              JC="center"
            >
              <IoMdAddCircleOutline
                size={40}
                style={{ color: "rgb(25, 179, 148)" }}
              />
            </StyledDiv>
          </StyledDiv>
        </StyledDiv>
      ) : (
        <StyledDiv>
          <StyledDiv DP="inline-flex" style={{ flexWrap: "wrap", gap: "10px" }}>
            {items.Choices.map((ite, ind) => {
              return (
                <StyledDiv DP="flex" POT="relative"   tabIndex="1234">
                  <img
                    src={ite.imageLink}
                    style={{ height: "10rem", width: "19.4rem" }}
                  />

                  <StyledDiv
                    DP="flex"
                    POT="absolute"
                    WD="100%"
                    JC="space-around"
                    style={{ marginTop: ".5rem" }}
                  >
                    <StyledDiv DP="flex">
                      <ImageDiv
                        HDP="flex"
                    
                        BG="white"
                        HG="3rem"
                        WD="3rem"
                        AI="center"
                        JC="center"
                        BR="39px"
                      >
                        <RxDragHandleDots2 size={25} color={"grey"} />
                      </ImageDiv>
                    </StyledDiv>

                    <StyledDiv DP="flex">
                      <StyledDiv
                        DP="flex"
                        BG="white"
                        HG="3rem"
                        WD="3rem"
                        AI="center"
                        JC="center"
                        BR="39px"
                        style={{ marginRight: "1rem", marginLeft: "5rem" }}
                      >
                        <AiOutlineFolderOpen size={25} color={"grey"} />
                      </StyledDiv>
                      <StyledDiv
                        DP="flex"
                        BG="white"
                        HG="3rem"
                        WD="3rem"
                        AI="center"
                        JC="center"
                        BR="39px"
                      >
                        <RiDeleteBin6Line size={25} color={"grey"} onClick={()=>Dispatch(DeleteImage({PageIndex,elementIndex}))}/>
                      </StyledDiv>
                    </StyledDiv>
                  </StyledDiv>
                </StyledDiv>
              );
            })}

            <StyledDiv
              DP="flex"
              HG="10rem"
              WD="19.4rem"
              OT="3px dotted lightgrey"
              style={{
                boxSizing: "border-box",
              }}
            >
              <StyledDiv DP="flex" style={{ minWidth: "100%" }} JC="center">
                <StyledDiv DP="flex" AI="center">
                  <label for="file-input">
                    <IoMdAddCircleOutline
                      size={40}
                      style={{ color: "rgb(25, 179, 148)" }}
                    />
                  </label>
                  <StyledInput
                    DP="none"
                    id="file-input"
                    type="file"
                    name="file"
                  
                    onChange={(e)=>handleChange(e,elementIndex,PageIndex)}
                    webkitdirectory
                    multiple
                  />
                 
                </StyledDiv>
              </StyledDiv>
            </StyledDiv>
          </StyledDiv>
        </StyledDiv>
      )}
    </StyledDiv>
  );
}
// saving image in react?
export default ImagePicker;
