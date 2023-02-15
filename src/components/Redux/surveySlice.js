import { createSlice } from "@reduxjs/toolkit";

import { survey } from "../Header/survey";

const initialState = {
  surveyData: survey,
  Designer: survey[0].content[0].forms,
  Preview: survey[1].content[0],
  PageId: 2,
  QuestionId: 1,
 index:0,
 drag:{},



};

const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    addIndex(state = initialState, action) {
      state.index = action.payload;
    },


setQuestionId(state=initialState,action){
  state.QuestionId=1
},
    AddQuestionId(state = initialState, action) {
      state.QuestionId += 1;
    },
    AddPageId(state = initialState, action) {
      state.PageId += 1;
    },
    DeletePageId(state=initialState,action){
state.PageId-=1;
    },
    DeletePageQuestionId(state = initialState, action) {
      state.QuestionId = state.QuestionId - action.payload;
    },
    DeleteQuestionId(state = initialState, action) {
      state.QuestionId -= 1;
    },
DragElement(state=initialState,action){
  const item=action.payload.element;
const number=action.payload.Qn;
  const Index =action.payload.PageIndex;
  console.log(item,number,Index)

state.drag=(item)
state.index=(Index)
state.QuestionId=(number)
}
  },
});

export const {
  setQuestionId,
DragElement,
  addIndex,
  AddQuestionId,
  AddPageId,
  DeletePageQuestionId,
  DeleteQuestionId,
  DeletePageId
} = surveySlice.actions;

export default surveySlice.reducer;
