import { configureStore } from "@reduxjs/toolkit";
import timer from "./timerReducer";

const store = configureStore({
  reducer: {
    timer
  }
});

export default store;
