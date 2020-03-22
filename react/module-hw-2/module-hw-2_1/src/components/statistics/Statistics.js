import React, { Fragment } from "react";
import shortId from "shortid";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <Fragment>
    <h3>Statistics</h3>
    {total >= 1 && (
      <div>
        <ul>
          <li key={shortId()}>Good: {good}</li>
          <li key={shortId()}>Neutral: {neutral}</li>
          <li key={shortId()}>Bad: {bad}</li>
        </ul>
        <span>Total: {total}</span>
        <br />
        <span>Positive feedback: {positivePercentage} %</span>
      </div>
    )}
  </Fragment>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};

export default Statistics;
