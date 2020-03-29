import { connect } from "react-redux";
import throttle from "lodash.throttle";
import * as timerActions from "../../redux/timerActions";
import Timer from "./Timer";

const mapStateToProps = state => ({
  value: state.timer.value,
  step: state.timer.step.value
  // newValue: "some value ---------->"
});

const mapDispatchToProps = dispatch => ({
  onIncrement: throttle(() => dispatch(timerActions.increment(10)), 2000),
  onDecrement: throttle(() => dispatch(timerActions.decrement(5)), 2000)
});

// const mapStateToProps = state => ({
//   value: state.value
//   // newValue: "some value ---------->"
// });

// const mapDispatchToProps = dispatch => ({
//   onIncrement: () => dispatch(timerActions.increment(10)),
//   onDecrement: () => dispatch(timerActions.decrement(5))
// });

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
