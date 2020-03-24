import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Timer from "./Timer";
import store from "./redux/store";
import "./global.css";

render(
  <Provider store={store}>
    <Timer />
  </Provider>,
  document.getElementById("root")
);

