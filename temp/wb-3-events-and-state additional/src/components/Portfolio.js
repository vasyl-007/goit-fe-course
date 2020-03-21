import React from "react";
import PropTypes from "prop-types";

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

Portfolio.defaultProps = {
  workOne: "work first",
  workTwo: "work second",
  workThree: "work third"
};
Portfolio.propTypes = {
  workOne: PropTypes.string,
  workTwo: PropTypes.string,
  workThree: PropTypes.string
};

export default Portfolio;
