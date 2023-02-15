import { createSlice } from "@reduxjs/toolkit";

const i = 1;
const myArr=[  
 
    {
      name: `Page${i}`,

      elements: [],
    },
  ]

const initialState = [
  {
    Pages: [
      {
        name: `Page${i}`,

        elements: [],
      },
    ],
  },
];

const pageSlice = createSlice({
  name: "Pages",
  initialState,
  reducers: {
    changeElement(state=initialState,action){
      console.log(action.payload.v)
state[0].Pages[action.payload.PageIndex].elements[action.payload.elementIndex].name=action.payload.v
    },
    DeleteAll(state = initialState, action) {
     state[0].Pages.splice(0 ,state[0].Pages.length)
     state[0].Pages.push(...myArr)
    },
    AddQuestions(state = initialState, action) {
      state[0].Pages[action.payload.PageIndex].elements.push(
        action.payload.element
      );
    },
DropQuestions(state=initialState,action){
  state[0].Pages[action.payload.PageIndex].elements.push(
    action.payload.element
  );
},
    changeType(state = initialState, action) {
     
      state[0].Pages[action.payload.PageIndex].elements.splice(action.payload.ElementIndex,1,action.payload.v)
    },
    DeleteQuestion(state = initialState, action) {
      state[0].Pages[action.payload.PageIndex].elements.splice(
        action.payload.ElementIndex,
        1
      );
    },

    DuplicatePages(state = initialState, action) {
      const newPage = structuredClone(action.payload);

      state[0].Pages.push({ ...newPage });
    },
    DeletePages(state = initialState, action) {
      state[0].Pages[action.payload.PageIndex].filter(action.payload);
    },
    //radio actions===================================
    AddRadio(state = initialState, action) {
      console.log(action.payload);
      state[0].Pages[action.payload.PageIndex].elements[
        action.payload.elementIndex
      ].Choices.push(`Item${+action.payload.ID}`);
    },
    RemoveRadio(state = initialState, action) {
      state[0].Pages[action.payload.PageIndex].elements[
        action.payload.elementIndex
      ].Choices.splice(action.payload.index, 1);
    },
    RadioShowOther(state = initialState, action) {
      state[0].Pages[action.payload.PageIndex].elements[
        action.payload.elementIndex
      ].showOtherItem = action.payload.val;
    },
    RadioShowNone(state = initialState, action) {
      state[0].Pages[action.payload.PageIndex].elements[
        action.payload.elementIndex
      ].showNoneItem = action.payload.value;
    },
    // what is what?
    SelectShow(state = initialState, action) {
      state[0].Pages[action.payload.PageIndex].elements[
        action.payload.elementIndex
      ].showSelectAllItem = action.payload.showSelect;
    },
    AddRate(state = initialState, action) {
      state[0].Pages[action.payload.PageIndex].elements[
        action.payload.elementIndex
      ].rateMax = action.payload.val;
    },
    AddImage(state = initialState, action) {
      console.log("========", action.payload);

      state[0].Pages[action.payload.PageIndex].elements[
        action.payload.elementIndex
      ].Choices.push({
        imageLink: action.payload.fileString,
      });
    },
    DeleteImage(state = initialState, action) {
      state[0].Pages[action.payload.PageIndex].elements[
        action.payload.ElementIndex
      ].choices.pop();
    },
    AddRank(state = initialState, action) {
      state[0].Pages[action.payload.PageIndex].elements[
        action.payload.elementIndex
      ].Choices.push(`Item${action.payload.num}`);
    },
    RemoveRank(state = initialState, action) {
      console.log(action.payload);
      state[0].Pages[action.payload.PageIndex].elements[
        action.payload.elementIndex
      ].Choices.splice(action.payload.ind, 1);
    },
  },
});

export const {
  DropQuestions,
  changeElement,
  DeleteAll,
  RemoveRank,
  AddRank,
  AddQuestions,
  DuplicatePages,
  DeletePages,
  DeleteQuestion,
  changeType,
  AddRadio,
  RemoveRadio,
  RadioShowOther,
  RadioShowNone,
  SelectShow,
  AddRate,
  AddImage,
  DeleteImage,
} = pageSlice.actions;
export default pageSlice.reducer;
