import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import timerReducer from "./timerReducer";
// import stepReducer from "./stepReducer";

// const reducer = (state = {}, action) => state; // template

const rootReducer = combineReducers({
  timer: timerReducer
  //   value: timerReducer,
  //   step: stepReducer
});

const store = createStore(rootReducer, devToolsEnhancer());
// const store = createStore(timerReducer, 150, devToolsEnhancer());

export default store;
