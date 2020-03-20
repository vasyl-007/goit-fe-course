import React from "react";
import ReactDOM from "react-dom";
import Statistics from "./Statistics";
import statisticalData from "./statistical-data.json";


ReactDOM.render(
  <Statistics title="Upload stats" stats={statisticalData} />,
  document.getElementById("root")
);
