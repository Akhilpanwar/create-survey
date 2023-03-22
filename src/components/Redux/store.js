import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import surveyReducer from "./surveySlice";
import PageReducer from "./pageSlice";
import undoable from 'redux-undo';







const store = configureStore({
  reducer: {
    surveyReducer,
    PageReducer,
  
   
  },

});
export default store;
