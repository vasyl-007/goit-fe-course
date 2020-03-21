import React, { Fragment } from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Fragment>
    <button type="button">Good</button>
    <button type="button">Neutral</button>
    <button type="button">Bad</button>
  </Fragment>
);

export default FeedbackOptions;
