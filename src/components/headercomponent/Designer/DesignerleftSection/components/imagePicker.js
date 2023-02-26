import React from "react";
import { ImageDiv, StyledDiv, StyledInput } from "../../../../Header/styles";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { RxDragHandleDots2 } from "react-icons/rx";

import {
  AddImage,
  ChangeImage,
  DeleteImage,
} from "../../../../Redux/pageSlice";
import { useDispatch } from "react-redux";
import { AddImageIndex, ChangeImageIndex } from "../../../../Redux/surveySlice";
import { useSelector } from "react-redux";

function ImagePicker({ items, PageIndex, elementIndex, show }) {
  const P = useSelector((state) => state.surveyReducer.imagePageIndex);
  const E = useSelector((state) => state.surveyReducer.imageElementIndex);
  const I = useSelector((state) => state.surveyReducer.imageIndex);

  let Dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();

    const file = e.target.files[0];

    getBase64(file);
  };
  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      onLoad(reader.result);
    };
  };
  const onLoad = (fileString) => {
    Dispatch(AddImage({ fileString, P, E }));
  };
  const handleIndex = (PageIndex, elementIndex, ind) => {
    Dispatch(ChangeImageIndex({ PageIndex, elementIndex, ind }));
  };
  const handleImage = (e) => {
    e.preventDefault();

    const file = e.target.files[0];

    getBase(file);
  };
  const getBase = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      onLoading(reader.result);
    };
  };
  const onLoading = (fileString) => {
    Dispatch(ChangeImage({ fileString, P, E, I }));
  };

  return (
    <StyledDiv DP="flex" WD="100%">
      {items.Choices === "null" ? (
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
              {show === true && (
                <IoMdAddCircleOutline
                  size={40}
                  style={{ color: "rgb(25, 179, 148)" }}
                />
              )}
            </StyledDiv>
          </StyledDiv>
        </StyledDiv>
      ) : (
        <StyledDiv>
          <StyledDiv DP="inline-flex" style={{ flexWrap: "wrap", gap: "5px" }}>
            {items.Choices.map((ite, ind) => {
              return (
                <StyledDiv DP="flex" POT="relative" tabIndex="1234">
                  <img
                    src={ite.imageLink}
                    style={{ height: "10rem", width: "17.5rem" }}
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

                    {show === true && (
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
                          <label for="file-type">
                            <AiOutlineFolderOpen
                              size={25}
                              color={"grey"}
                              onClick={() =>
                                handleIndex(PageIndex, elementIndex, ind)
                              }
                            />
                          </label>
                          <StyledInput
                            DP="none"
                            id="file-type"
                            type="file"
                            name="file"
                            key={PageIndex}
                            onChange={(e) => handleImage(e)}
                          />
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
                          <RiDeleteBin6Line
                            size={25}
                            color={"grey"}
                            onClick={() =>
                              Dispatch(
                                DeleteImage({ PageIndex, elementIndex, ind })
                              )
                            }
                          />
                        </StyledDiv>
                      </StyledDiv>
                    )}
                  </StyledDiv>
                </StyledDiv>
              );
            })}

            {show === true && (
              <StyledDiv
                DP="flex"
                HG="10rem"
                WD="17.4rem"
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
                        onClick={() =>
                          Dispatch(AddImageIndex({ PageIndex, elementIndex }))
                        }
                      />
                    </label>
                    <StyledInput
                      DP="none"
                      id="file-input"
                      type="file"
                      name="file"
                      key={PageIndex}
                      onChange={(e) => handleChange(e)}
                    />
                  </StyledDiv>
                </StyledDiv>
              </StyledDiv>
            )}
          </StyledDiv>
        </StyledDiv>
      )}
    </StyledDiv>
  );
}

export default ImagePicker;
