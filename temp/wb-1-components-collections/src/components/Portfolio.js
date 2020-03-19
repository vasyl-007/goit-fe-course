import React from "react";

const Portfolio = ({ workOne, workTwo, workThree }) => (
  <>
    <ul>
      <li>{workOne}</li>
      <li>{workTwo}</li>
      <li>{workThree}</li>
    </ul>
    <hr />
  </>
);

export default Portfolio;
