import { configureStore } from "@reduxjs/toolkit";
import surveyReducer from "./surveySlice";
import PageReducer from "./pageSlice";

const store = configureStore({
  reducer: {
    surveyReducer,
    PageReducer,
  },
});
export default store;
