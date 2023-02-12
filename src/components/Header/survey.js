import { ImRadioChecked, ImStarEmpty, ImParagraphLeft } from "react-icons/im";
import { MdOutlinePowerInput, MdOutlineComment } from "react-icons/md";
import {
  BsCheck2Square,
  BsFullscreen,
  BsImages,
  BsUiRadiosGrid,
  BsGrid3X3Gap,
  BsCodeSlash,
  BsUiRadios,
} from "react-icons/bs";
import { TbMathFunction, TbSignatureOff } from "react-icons/tb";
import { CgNotes, CgServerless } from "react-icons/cg";
import { IoIosSwitch } from "react-icons/io";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { BiServer } from "react-icons/bi";
import { CiSquarePlus } from "react-icons/ci";
import { useSelector } from "react-redux";

const Qn = 1;
const ID = 1;
export const survey = [
  {
    title: "Designer",
    id: 1,
    class: "designer",
    content: [
      {
        forms: [
          {
            title: "Radio Group",
            icons: <ImRadioChecked />,
            data: {
              type: "radiogroup",
              name: `question${Qn}`,

              Choices: [`Item${ID}`, `Item${ID + 1}`, `Item${ID + 2}`],
              showOtherItem: false,
              showNoneItem: false,
            },
          },
          {
            title: "Rating",
            icons: <ImStarEmpty />,
            data: {
              type: "Rating",
              name: `question${Qn}`,
              rateMax: 5,
            },
          },
          {
            title: "CheckBox",
            icons: <BsCheck2Square />,
            data: {
              type: "CheckBox",
              name: `question${Qn}`,

              Choices: [`Item${ID}`, `Item${ID + 1}`, `Item${ID + 2}`],
              showOtherItem: false,
              showNoneItem: false,
              showSelectAllItem: false,
            },
          },
          {
            title: "Dropdown",
            icons: <CgNotes />,
            data: {
              type: "dropdown",
              name: `question${Qn}`,

              Choices: ["Item1", "Item2", "Item3"],
              showOtherItem: false,
              showNoneItem: false,
            },
          },
          {
            title: "TagBox",
            icons: <CgServerless />,
            data: {
              type: "TagBox",
              name: `question${Qn}`,

              Choices: ["Item1", "Item2", "Item3"],
              showOtherItem: false,
              showNoneItem: false,
            },
          },
          {
            title: "Boolean",
            icons: <IoIosSwitch />,
            data: {
              type: "boolean",
              name: `question${Qn}`,
            },
          },
          {
            title: "File",
            icons: <AiOutlineFolderOpen />,
            data: {
              type: "file",
              name: `question${Qn}`,
            },
          },
          {
            title: "Ranking",
            icons: <ImParagraphLeft />,
            data: {
              type: "ranking",
              name: `question9${Qn}`,
              Choices: [`Item${ID}`,`Item${ID+1}`,`Item${ID+2}`],
            },
          },

          {
            title: "ImagePicker",
            icons: <BsImages />,
            data: {
              type: "imagepicker",
              name: `question${Qn}`,
              Choices: [
                {
                
                  imageLink:
                    "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
                },
                {
               
                  imageLink:
                    "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
                },
                {
                 
                  imageLink:
                    "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
                },
                {
                
                  imageLink:
                    "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
                },
              ],
            },
          },
          {
            title: "Single Input",
            icons: <MdOutlinePowerInput />,
            data: {
              type: "text",
              name: `question${Qn}`,
            },
          },

          {
            title: "Comment",
            icons: <MdOutlineComment />,
            data: {
              type: "comment",
              name: `question${Qn}`,
            },
          },

          {
            title: "Multiple Text",
            icons: <BiServer />,
            data: {
              type: "multipletext",
              name: `question${Qn}`,
              items: [
                {
                  name: "text1",
                },
                {
                  name: "text2",
                },
              ],
            },
          },

          {
            title: "Panel",
            icons: <BsFullscreen />,
            data: {
              type: "panel",
              name: `question${Qn}`,
            },
          },

          {
            title: "Dynamic Panel",
            icons: <CiSquarePlus />,
            data: {
              type: "paneldynamic",
              name: `question${Qn}`,
            },
          },

          {
            title: "Single Choice Matrix",
            icons: <BsUiRadiosGrid />,
            data: {
              type: "matrix",
              name: `question${Qn}`,
              columns: ["Column 1", "Column 2", "Column 3"],
              rows: ["Row 1", "Row 2"],
            },
          },

          {
            title: "Multiple-Choice Matrix",
            icons: <BsGrid3X3Gap />,
            data: {
              type: "matrixdropdown",
              name: `question${Qn}`,
              columns: [
                {
                  name: "Column 1",
                },
                {
                  name: "Column 2",
                },
                {
                  name: "Column 3",
                },
              ],
              choices: [1, 2, 3, 4, 5],
              rows: ["Row 1", "Row 2"],
            },
          },
          {
            title: "Dynamic Matrix",
            icons: <BsUiRadios />,
            data: {
              type: "matrixdynamic",
              name: `question${Qn}`,
              columns: [
                {
                  name: "Column 1",
                },
                {
                  name: "Column 2",
                },
                {
                  name: "Column 3",
                },
              ],
              choices: [1, 2, 3, 4, 5],
            },
          },
          {
            title: "Html",
            icons: <BsCodeSlash />,
            data: {
              type: "html",
              name: `question${Qn}`,
            },
          },
          {
            title: "Expression(Read Only)",
            icons: <TbMathFunction />,
            data: {
              type: "expression",
              name: `question${Qn}`,
            },
          },
          {
            title: "Image",
            icons: <BsImages />,
            data: {
              type: "image",
              name: `question${Qn}`,
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
          },

          {
            title: "Signature Pad",
            icons: <TbSignatureOff />,
            data: {
              type: "signaturepad",
              name: `question${Qn}`,
            },
          },
        ],
      },
    ],
  },
  { title: "Preview", class: "preview", Qn: 2, content: [{}] },
  { title: "Logic", class: "logic", Qn: 3, content: [{}] },
  { title: "JsonEditor", class: "json", Qn: 4, content: [{}] },
  { title: "Embeded Survey", class: "embeded", Qn: 5, content: [{}] },
  { title: "Translation", class: "translation", Qn: 6, content: [{}] },
];
