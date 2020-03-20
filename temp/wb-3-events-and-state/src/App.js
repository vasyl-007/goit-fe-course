import React from "react";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";

function App() {
  return (
    <>
      <h3>IT WORKS</h3>
      <Counter step={5} initialValue={15} />
      <hr/>
      <Toggle />
    </>
  );
}

export default App;
