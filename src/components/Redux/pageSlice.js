import { createSlice } from "@reduxjs/toolkit";
import { original } from "immer";


const i = 1;
const myArr = [
  {
    name: `Page${i}`,

    elements: [],
  },
];

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
    ChangeSurveyName(state = initialState, action) {
      state[0].title = action.payload;
    },
    changePageTitle(state = initialState, action) {
      state[0].Pages[action.payload.pageIndex].title = action.payload.title;
    },
    changeSurveyDescription(state = initialState, action) {
      state[0].description = action.payload;
    },
    changePageDescription(state = initialState, action) {
      state[0].Pages[action.payload.pageIndex].description =
        action.payload.value;
    },
    changeQuestionTitle(state = initialState, action) {
      state[0].Pages[action.payload.PageIndex].elements[
        action.payload.elementIndex
      ].title = action.payload.value;
    },
    changeElement(state = initialState, action) {
      console.log(action.payload.v);
      state[0].Pages[action.payload.PasgeIndex].elements[
        action.payload.elementIndex
      ].name = action.payload.v;
    },
    DeleteAll(state = initialState, action) {
      state[0].Pages.splice(0, state[0].Pages.length);
      state[0].Pages.push(...myArr);
    },
    AddQuestions(state = initialState, action) {
      state[0].Pages[action.payload.PageIndex].elements.push(
        action.payload.element
      );
    },
    DropQuestions(state = initialState, action) {
      state[0].Pages[action.payload.PageIndex].elements.push(
        action.payload.element
      );
    },
    changeType(state = initialState, action) {
      state[0].Pages[action.payload.PageIndex].elements.splice(
        action.payload.elementIndex,
        1,
        action.payload.v
      );
    },
    changeRadioContent(state = initialState, action) {
      state[0].Pages[action.payload.PageIndex].elements[
        action.payload.elementIndex
      ].Choices[action.payload.index] = action.payload.v;
    },

    checkRadio(state = initialState, action) {
      console.log(action.payload);
      let temp = [];
      state[0].Pages[action.payload.PageIndex].elements[
        action.payload.elementIndex
      ].Choices.map((item, index) => {
        console.log(item, index);
        temp.push({
          [item]: false,
        });
      });
      console.log(temp);
    },
    DuplicateQuestion(state = initialState, action) {
      state[0].Pages[action.payload.PageIndex].elements.push(action.payload.it);
    },
    DeleteQuestion(state = initialState, action) {
      state[0].Pages[action.payload.PageIndex].elements.splice(
        action.payload.elementIndex,
        1
      );
    },
    RequiredQuestion(state = initialState, action) {
      state[0].Pages[action.payload.PageIndex].elements[
        action.payload.elementIndex
      ].isRequired = action.payload.v;
    },
    DuplicatePages(state = initialState, action) {
      const newPage = structuredClone(action.payload);

      state[0].Pages.push({ ...newPage });
    },
    DeletePages(state = initialState, action) {
      state[0].Pages.splice(action.payload, 1);
      if (state[0].Pages.length === 0) {
        state[0].Pages.push(...myArr);
      }
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
      state[0].Pages[action.payload.P].elements[action.payload.E].Choices.push({
        imageLink: action.payload.fileString,
      });
    },
    ChangeImage(state = initialState, action) {
      state[0].Pages[action.payload.P].elements[
        action.payload.E
      ].Choices.splice(action.payload.I, 1, {
        imageLink: action.payload.fileString,
      });
    },
    DeleteImage(state = initialState, action) {
      state[0].Pages[action.payload.PageIndex].elements[
        action.payload.elementIndex
      ].Choices.splice(action.payload.ind, 1);
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
    changeBooleanYes(state = initialState, action) {},
    changeBooleanNo(state = initialState, action) {},
  },
});

export const {
  RequiredQuestion,
  checkRadio,
  changeRadioContent,
  ChangeImage,
  DuplicateQuestion,
  changeBooleanYes,
  changeBooleanNo,
  changeSurveyDescription,
  ChangeSurveyName,
  changePageDescription,
  changeQuestionTitle,
  changePageTitle,
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
