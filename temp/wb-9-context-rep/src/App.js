import React, { createContext, useContext, Fragment } from "react";
import Reader from "./coponents/Reader";
import publications from "./publications.json";
import {
  PublicationWithContext,
  ControlsWithContext,
  CounterWithContext
} from "./coponents/Reader";

function App() {
  return (
    <Fragment>
      <h4>Happy hacking!</h4>
      <Reader items={publications} />
      <PublicationWithContext />
      <ControlsWithContext />
      <CounterWithContext />
    </Fragment>
  );
}

export default App;
