import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { BsSimFill } from "react-icons/bs";
import { CiStreamOn } from "react-icons/ci";
import { TbZoomExclamation } from "react-icons/tb";

import { survey } from "../Header/survey";

const initialState = {
  surveyData: survey,
  Designer: survey[0].content[0].forms,
  Preview: survey[1].content[0],
  PageId: 2,
  QuestionId: 1,
  index: 0,
  drag: {},
  imagePageIndex: 0,
  imageElementIndex: 0,
  imageIndex: 0,
  Pages: [],
  value: true,

  scroll: "",
  QuestionIndex: "",
};

const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    addIndex(state = initialState, action) {
      state.index = action.payload;
    },

    setQuestionId(state = initialState, action) {
      state.QuestionId = 1;
    },
    AddQuestionId(state = initialState, action) {
      state.QuestionId += 1;
    },
    AddPageId(state = initialState, action) {
      state.PageId += 1;
    },
    DeletePageId(state = initialState, action) {
      state.PageId -= 1;
    },
    setPageId(state = initialState, action) {
      state.PageId = 2;
    },
    DeletePageQuestionId(state = initialState, action) {
      state.QuestionId = state.QuestionId - action.payload;
    },
    DeleteQuestionId(state = initialState, action) {
      state.QuestionId -= 1;
    },
    DragElement(state = initialState, action) {
      const item = action.payload.element;
      const number = action.payload.Qn;
      const Index = action.payload.PageIndex;
      console.log(item, number, Index);

      state.drag = item;
      state.index = Index;
      state.QuestionId = number;
    },
    AddImageIndex(state = initialState, action) {
      state.imagePageIndex = action.payload.PageIndex;
      state.imageElementIndex = action.payload.elementIndex;
    },
    ChangeImageIndex(state = initialState, action) {
      state.imagePageIndex = action.payload.PageIndex;
      state.imageElementIndex = action.payload.elementIndex;
      state.imageIndex = action.payload.ind;
    },

    AddData(state = initialState, action) {
      if (state.Pages.find((it) => it.name === action.payload.Question)) {
        state.Pages.map((obj) => {
          if (obj.name === action.payload.Question) {
            obj.value = action.payload.SelItem;
          }
        });
      } else {
        state.Pages.push({
          name: action.payload.Question,
          value: action.payload.SelItem,
        });
      }
    },
    AddCheck(state = initialState, action) {
      console.log(action.payload)
      if (state.Pages.find((it) => it.name === action.payload.Question)) {
        state.Pages.map((v) => {
          console.log(v)
        if (v.name === action.payload.Question && v.value.includes(action.payload.SelItem[0])) {
           const i= v.value.findIndex((a)=>a===action.payload.SelItem[0])
          v.value[i]=null
          }
        });
      } else {
        state.Pages.push({
          name: action.payload.Question,
          value: action.payload.SelItem,
        });
      }
    },
    deletePages(state=initialState,action){
   
        state.Pages.length=0
    },
     
    
    addQuestionIndex(state = initialState, action) {
      console.log(action);
      state.QuestionIndex = action.payload;
    },
    addScroll(state = initialState, action) {
      state.scroll = action.payload.value;
    },

    changeGroundColor(state = initialState, action) {
      state.value = action.payload;
    },
  },
});

export const {
  changeGroundColor,
  AddData,
  AddCheck,
  ChangeImageIndex,
  AddImageIndex,
  setPageId,
  setQuestionId,
  DragElement,
  addIndex,
  AddQuestionId,
  AddPageId,
  DeletePageQuestionId,
  DeleteQuestionId,
  DeletePageId,
  selectAll,
  addScroll,
  addQuestionIndex,
  deletePages,
} = surveySlice.actions;

export default surveySlice.reducer;
