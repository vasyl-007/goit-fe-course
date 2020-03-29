import React, { Fragment } from "react";
// import Timer from "./components/timer/Timer";
import TimerContainer from "./components/timer/TimerContainer";
import StepSelector from "./components/stepSelector/StepSelector";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh"
};

function App() {
  return (
    <Fragment>
      <h4>IT WORKS</h4>
      {/* <Timer /> */}
      <TimerContainer />
      <StepSelector />
    </Fragment>
  );
}

export default App;
