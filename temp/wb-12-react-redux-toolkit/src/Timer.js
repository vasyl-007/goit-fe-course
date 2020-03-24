import React from "react";
import { connect } from "react-redux";
import * as timerActions from "./redux/timerActions";
import css from "./Timer.module.css";

const Timer = ({ value, onIncrement, onDecrement }) => (
  <div className={css.container}>
    <button type="button" className={css.button} onClick={() => onDecrement(5)}>
      &#8722;
    </button>
    <p className={css.value}>{value} minutes</p>
    <button type="button" className={css.button} onClick={() => onIncrement(5)}>
      &#43;
    </button>
  </div>
);

const mapStateToProps = state => ({
  value: state.timer
});

const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(timerActions.increment(value)),
  onDecrement: value => dispatch(timerActions.decrement(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
