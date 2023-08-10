import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import useReducer from "./userSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: useReducer,
  },
});
