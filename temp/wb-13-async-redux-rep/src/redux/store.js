import { createStore, combineReducers, applyMiddleware } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import timerReducer from "./timer/timerReducer";
import postReducer from "./posts/postReducer";

// Middlewares
import logger from "redux-logger";
// import logger from "../redux/middleware/logger";
import throttle from "./middleware/throttle";
import stateValidator from "./middleware/state-validation";
import analytics from "./middleware/analytics";

const rootReducer = combineReducers({
  timer: timerReducer,
  post: postReducer
});

const middlewares = [stateValidator, logger, throttle, analytics]; // порядок подключения имеет значение
const enhancer = applyMiddleware(...middlewares);
// const enhancer = applyMiddleware(stateValidator, logger, throttle, analytics); // порядок подключения имеет значение

const store = createStore(rootReducer, composeWithDevTools(enhancer));
// (reducer, perState, enhancer)
// (reducer, enhancer)

export default store;
// action => devTools => stateValidator => logger => throttle => reducers
