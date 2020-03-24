import React from "react";
// import { connect } from "react-redux";
import css from "./Timer.module.css";
// import * as timerActions from "../../redux/timerActions";

const Timer = ({ value, step, onIncrement, onDecrement }) => (
  <div className={css.container}>
    {/* <button type="button" className={css.button} onClick={onDecrement}> */}
    <button
      type="button"
      className={css.button}
      onClick={() => onDecrement(step)}
    >
      &#8722;
    </button>
    <div className={css.value}>{value} minutes</div>
    {/* <button type="button" className={css.button} onClick={onIncrement}> */}
    <button
      type="button"
      className={css.button}
      onClick={() => onIncrement(step)}
    >
      &#43;
    </button>
  </div>
);

// const mapStateToProps = state => ({
//   value: state.value
//   // newValue: "some value ---------->"
// });

// const mapDispatchToProps = dispatch => ({
//   onIncrement: () => dispatch(timerActions.increment(10)),
//   onDecrement: () => dispatch(timerActions.decrement(5))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Timer);
export default Timer;
