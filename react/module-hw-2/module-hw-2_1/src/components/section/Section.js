import React, { Fragment } from "react";

const Section = ({ title, children }) => (
  <Fragment>
    <h2>{title}</h2>
    {children}
  </Fragment>
);

export default Section;
