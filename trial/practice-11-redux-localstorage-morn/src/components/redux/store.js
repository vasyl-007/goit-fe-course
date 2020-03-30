import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { notes, token } from "./reducers";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["token"]
};
const rootReducer = combineReducers({
  notes,
  token
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, devToolsEnhancer());
export const persistor = persistStore(store);
