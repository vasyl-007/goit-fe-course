import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Controls = ({ onIncrement, onDecrement, value, step }) => (
  <Fragment>
    <div
      style={{
        minWidth: 400,
        display: "flex"
      }}
    >
      <button
        onClick={onIncrement}
        // onClick={this.handleIncrement.bind(this)}
        // onClick={e => {
        //   console.log("Increment button was clicked!", e);
        //   console.log("this.props", this.props);
        // }}
        type="button"
        style={{
          minWidth: 120,
          high: "auto",
          border: "2px dashed green"
        }}
      >
        Increment by {step}
      </button>
      <span
        style={{
          padding: "10px 26px",
          fontSize: 22,
          fontFamily: "monospace"
        }}
      >
        {value}
        {/* {INITIAL_STATE} */}
      </span>
      <button
        onClick={onDecrement}
        // onClick={this.handleDecrement.bind(this)}
        // onClick={e => {
        //   console.log("Decrement button was clicked!", e);
        //   console.log("this.props", this.props);
        // }}
        type="button"
        style={{
          minWidth: 120,
          high: "auto",
          border: "2px dashed red"
        }}
      >
        Decrement by {step}
      </button>
    </div>
  </Fragment>
);

Controls.propTypes = {
  onIncrement: PropTypes.number.isRequired,
  onDecrement: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};
export default Controls;
