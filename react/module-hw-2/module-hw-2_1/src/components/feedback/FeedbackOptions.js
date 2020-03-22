import React, { Fragment } from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Fragment>
    <button type="button" name={options.positive} onClick={onLeaveFeedback}>
      Good
    </button>
    <button type="button" name={options.normal} onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button type="button" name={options.negative} onClick={onLeaveFeedback}>
      Bad
    </button>
  </Fragment>
);

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(
    PropTypes.shape({
      positive: PropTypes.string.isRequired,
      normal: PropTypes.string.isRequired,
      negative: PropTypes.string.isRequired
    })
  )
};

export default FeedbackOptions;
