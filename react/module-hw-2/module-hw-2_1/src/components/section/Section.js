import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Section = ({ title, children }) => (
  <Fragment>
    <h2>{title}</h2>
    {children}
  </Fragment>
);

Section.propTypes = {
  title: PropTypes.string.isRequired
};

export default Section;
