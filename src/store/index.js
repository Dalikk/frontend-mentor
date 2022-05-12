import {configureStore} from "@reduxjs/toolkit";
import adviceReducer from "./adviceSlice";

export default configureStore({
  reducer: {
    advice: adviceReducer,
  }
})