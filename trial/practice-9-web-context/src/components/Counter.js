import React from "react";
import Reader from "./Reader";

const Counter = ({ totalPublications, currentIdx }) => (
  <Reader.Consumer>
    {({ currentIdx, totalPublications }) => (
      <p>
        {currentIdx + 1} / {totalPublications}
      </p>
    )}
  </Reader.Consumer>
);

export default Counter;
