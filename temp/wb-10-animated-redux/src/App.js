import React, { Fragment } from "react";
import AnimatedOne from "./components/AnimatedOne";
import HookFunc from "./HooksFunc";
import Person from "./Person";
import HookEffects from "./HookEffects";

const App = () => (
  <Fragment>
    <AnimatedOne />
    <br />
    <HookFunc />
    {/* <Person /> */}
    <br />
    <HookEffects />
  </Fragment>
);

export default App;
