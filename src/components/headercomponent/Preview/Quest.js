import React, { useState } from "react";
import {
  StyledDiv,
  QuestionNumber,
  SurveyInput,
  Heading,
  StyledButton,
} from "../../Header/styles";
import { useSelector } from "react-redux";
import SingleInput from "../Designer/DesignerleftSection/components/singleInput";
import RadioGroup from "../Designer/DesignerleftSection/components/RadioGroup";
import CheckBox from "../Designer/DesignerleftSection/components/CheckBox";
import ImagePicker from "../Designer/DesignerleftSection/components/imagePicker";
import Boolean from "../Designer/DesignerleftSection/components/Boolean";
import Ranking from "../Designer/DesignerleftSection/components/Ranking";
import Rating from "../Designer/DesignerleftSection/components/Rating";
import TagBox from "../Designer/DesignerleftSection/components/TagBox";
import DropDown from "../Designer/DesignerleftSection/components/DropDown";
import File from "../Designer/DesignerleftSection/components/File";
import Comment from "../Designer/DesignerleftSection/components/Comment";
import { Table } from "react-bootstrap";
import Jsoneditor from "../jsonEditor/jsoneditor";
import { useDispatch } from "react-redux";
import { changeGroundColor } from "../../Redux/surveySlice";
function Quest({ i }) {
  const PageIndex = i;
  const [value, setValue] = useState(true);
  const [show, setShow] = useState(true);
  const [showTable, setShowTable] = useState(false);
  const [showJson, setShowJson] = useState(false);
  const Pages = useSelector((state) => state.PageReducer[0].Pages);
  
  const data = useSelector((state) => state.surveyReducer.Pages);
  const Dispatch = useDispatch();
  const handleClick = () => {
    setValue(!value);
  };
  const handleComplete = () => {
    setShow(false);
    Dispatch(changeGroundColor(false));
  };
  const handlePrevious = () => {
    setShow(true);
    Dispatch(changeGroundColor(true));
  };
  const handleTable = () => {
    setShowTable(!showTable);
    setShowJson(false);
  };
  const handleJson = () => {
    setShowJson(!showJson);
    setShowTable(false);
  };
  return (
    <StyledDiv WD="100%" style={{ minWidth: "100%" }}>
      <StyledDiv
        DP="flex"
        FD="column"
        WD="82%"
        JC="space-around"
        style={{ boxSizing: "border-box", margin: "auto" }}
      >
        <StyledDiv
          DP="flex"
          WD="83%"
          style={{ overflowY: "scroll", height: "570px", margin: "auto" }}
        >
          {show ? (
            <StyledDiv
              DP="flex"
              FD="column"
              WD="72%"
              style={{
                boxSizing: "border-box",
                overflowY: "scroll",
                margin: "auto",
              }}
            >
              {Pages[PageIndex].elements.map((element, elementIndex) => {
                return (
                  <StyledDiv>
                    <StyledDiv
                      FBV="visible"
                      HBV="visible"
                      DP="flex"
                      JC="space-around"
                      FD="column"
                      BG="white !important"
                      WD="100%"
                      FBS="0 0 0 2px var(--secondary, #ff9814)"
                      tabIndex="1234"
                      MBS="1rem"
                      style={{
                        minWidth: "100%",
                        boxSizing: "border-box",
                        boxShadow: "0px 1px 2px rgb(0 0 0 / 15%)",
                      }}
                    >
                      <StyledDiv
                        HG="100%"
                        style={{
                          boxSizing: "border-box",
                          width: "90%",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      >
                        <StyledDiv DP="flex" AI="center">
                          <StyledDiv
                            DP="flex"
                            FD="row"
                            AI="baseline"
                            MBS="1rem"
                          >
                            <StyledDiv>
                              <QuestionNumber>
                                {element.name.split("question")}.
                              </QuestionNumber>
                            </StyledDiv>
                            <StyledDiv DP="flex">
                              <SurveyInput
                                DP="flex"
                                BG="white !important"
                                role="textBox"
                                contentEditable="false"
                                TC="black"
                                placeholder={
                                  element.title
                                    ? `${element.title}`
                                    : `${element.name}`
                                }
                                onInput={(e) =>
                                  handleClick(e, PageIndex, elementIndex)
                                }
                                BD="none"
                                OT="none"
                                FBG="white !important"
                                FOT="3px solid rgb(25, 179, 148)"
                                OW="break-word"
                                WW="break-word"
                                WB="break-word"
                                FBR="5px"
                                FS="24px"
                              />
                            </StyledDiv>
                          </StyledDiv>
                        </StyledDiv>
                        <StyledDiv
                          DP="flex"
                          HG="100%"
                          FD="column"
                          MBS="1rem"
                          MBE="1rem"
                          style={{
                            boxSizing: "border-box",
                            width: "95%",

                            height: "100%",
                          }}
                        >
                          {element.type === "text" ? (
                            <SingleInput
                              items={element}
                              PageIndex={PageIndex}
                              elementIndex={elementIndex}
                              value={false}
                            />
                          ) : element.type === "radiogroup" ? (
                            <RadioGroup
                              items={element}
                              PageIndex={PageIndex}
                              elementIndex={elementIndex}
                              show={false}
                              data={data}
                            />
                          ) : element.type === "CheckBox" ? (
                            <CheckBox
                              items={element}
                              PageIndex={PageIndex}
                              elementIndex={elementIndex}
                              show={false}
                            />
                          ) : element.type === "dropdown" ? (
                            <DropDown
                              items={element}
                              PageIndex={PageIndex}
                              elementIndex={elementIndex}
                              show={false}
                            />
                          ) : element.type === "TagBox" ? (
                            <TagBox
                              items={element}
                              PageIndex={PageIndex}
                              elementIndex={elementIndex}
                              show={false}
                            />
                          ) : element.type === "Rating" ? (
                            <Rating
                              Rates={element}
                              PageIndex={PageIndex}
                              elementIndex={elementIndex}
                              show={false}
                            />
                          ) : element.type === "file" ? (
                            <File
                              items={element}
                              PageIndex={PageIndex}
                              elementIndex={elementIndex}
                              show={false}
                            />
                          ) : element.type === "boolean" ? (
                            <Boolean
                              items={element}
                              PageIndex={PageIndex}
                              elementIndex={elementIndex}
                              show={false}
                            />
                          ) : element.type === "comment" ? (
                            <Comment
                              items={element}
                              PageIndex={PageIndex}
                              elementIndex={elementIndex}
                              show={false}
                            />
                          ) : element.type === "ranking" ? (
                            <Ranking
                              items={element}
                              PageIndex={PageIndex}
                              elementIndex={elementIndex}
                              show={false}
                            />
                          ) : element.type === "imagepicker" ? (
                            <ImagePicker
                              items={element}
                              PageIndex={PageIndex}
                              elementIndex={elementIndex}
                              show={false}
                            />
                          ) : (
                            element.type ===
                            ""(
                              <SingleInput
                                items={element}
                                PageIndex={PageIndex}
                                elementIndex={elementIndex}
                                val={"ReadOnly"}
                              />
                            )
                          )}
                        </StyledDiv>
                      </StyledDiv>
                      <StyledDiv MBS="3rem"></StyledDiv>
                    </StyledDiv>
                  </StyledDiv>
                );
              })}
              <StyledDiv MBS="1rem" MBE="2rem" MIS=".5rem">
                <StyledButton
                  HC="rgb(25, 179, 148)"
                  HBG="white"
                  color="white"
                  BG="rgb(25, 179, 148)"
                  FS="20px"
                  BR="5px"
                  WD="38%"
                  HG="3.5rem"
                  HOT="2px solid rgb(25, 179, 148)"
                  BD="none"
                  onClick={() => handleComplete()}
                >
                  Complete
                </StyledButton>
              </StyledDiv>
            </StyledDiv>
          ) : (
            <StyledDiv
              DP="flex"
              style={{
                minHeight: "100%",
                minWidth: "100%",
                oveflowY: "Scroll",
                maxHeight: "100%",
              }}
            >
              <StyledDiv
                DP="flex"
                WD="80%"
                FD="column"
                JC="space-around"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <StyledDiv DP="flex" JC="center">
                  <Heading
                    style={{
                      fontSize: "calc(3 * var(--base-unit, 8px))",
                      fontFamily: "var(--font-family, var(--font-family))",
                      color: "black",
                      whiteSpace: "normal",
                    }}
                  >
                    Thank you for completing the survey
                  </Heading>
                </StyledDiv>
                <StyledDiv DP="flex" WD="100%" JC="center">
                  <StyledButton
                    color="rgb(25, 179, 148)"
                    BG="white"
                    HC="white"
                    HBG="rgb(25, 179, 148)"
                    FS="20px"
                    BR="5px"
                    WD="33%"
                    HG="3.5rem"
                    HOT="2px solid rgb(25, 179, 148)"
                    BD="none"
                    style={{ boxShadow: "1px 1px 2px rgb(0 0 0 / 15%)" }}
                    onClick={() => handlePrevious()}
                  >
                    Preview Survey Again
                  </StyledButton>
                </StyledDiv>
                <StyledDiv MBE="2rem">
                  <StyledDiv
                    DP="flex"
                    AI="baseline"
                    HG="4rem"
                    style={{
                      boxSizing: "border-box",
                      minWidth: "100%",
                      background: "white",
                      boxShadow: "0px 1px 2px rgb(0 0 0 / 15%)",
                    }}
                  >
                    <StyledDiv
                      DP="flex"
                      WD="90%"
                      FD="row"
                      HG="100%"
                      JC="space-between"
                      AI="center"
                      style={{
                        boxSizing: "border-box",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      <StyledDiv DP="flex">
                        <Heading
                          style={{
                            fontSize: "calc(2 * var(--base-unit, 8px))",
                            wordSpacing: "-1px",
                            opacity: "0.5",
                            fontFamily: "var(--font-family)",
                            color: "var(--foreground-light, #909090)",
                          }}
                        >
                          Survey Results
                        </Heading>
                      </StyledDiv>
                      <StyledDiv
                        DP="flex"
                        FD="row"
                        WD="11rem"
                        JC="space-between"
                      >
                        <StyledDiv
                          DP="flex"
                          tabIndex="1234"
                          onClick={() => handleTable()}
                          HBG="var(--primary-light, rgba(25,179,148,0.1))"
                          AI="end"
                          JC="space-around"
                          FOT="3px solid  rgb(25, 179, 148)"
                          style={{
                            cursor: "Default",
                            boxSizing: "border-box",
                            borderRadius: "40px",
                            height: "2rem",
                            width: "5rem",
                          }}
                        >
                          <Heading TC="rgb(25, 179, 148)">As Table</Heading>
                        </StyledDiv>
                        <StyledDiv
                          DP="flex"
                          AI="end"
                          tabIndex="1234"
                          FOT="3px solid  rgb(25, 179, 148)"
                          HBG="var(--primary-light, rgba(25,179,148,0.1))"
                          onClick={() => handleJson()}
                          JC="space-around"
                          style={{
                            cursor: "Default",
                            boxSizing: "border-box",
                            borderRadius: "40px",
                            height: "2rem",
                            width: "5rem",
                            background: "whiteSmoke",
                          }}
                        >
                          <Heading TC="rgb(25, 179, 148)">As Json</Heading>{" "}
                        </StyledDiv>
                      </StyledDiv>
                    </StyledDiv>
                  </StyledDiv>
                </StyledDiv>
                <StyledDiv
                  MBS="-6rem"
                  BG="whiteSmoke !important"
                  style={{ overflowY: "scroll", height: "7rem" }}
                >
                  {showTable === true && (
                    <Table striped bordered hover>
                      <thead>
                        <tr style={{ background: "white" }}>
                          <th
                            style={{
                              color: "grey",
                              fontSize: "13px",
                              fontWeight: "200",
                            }}
                          >
                            Question Title
                          </th>
                          <th
                            style={{
                              color: "grey",
                              fontSize: "13px",
                              fontWeight: "200",
                            }}
                          >
                            Display Value
                          </th>
                        </tr>
                      </thead>

                      {data.map((it, ind) => {
                        return (
                          <tbody >
                            <tr >
                              <td>{it.name}</td>
                              <td>{it.value}</td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </Table>
                  )}
                  {showJson === true && (
                    <StyledDiv>
                      <pre>{JSON.stringify(data, null, 2)}</pre>
                    </StyledDiv>
                  )}
                </StyledDiv>
              </StyledDiv>
            </StyledDiv>
          )}
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
}

export default Quest;
