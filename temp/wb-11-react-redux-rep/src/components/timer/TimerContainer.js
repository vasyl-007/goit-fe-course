import { connect } from "react-redux";
import * as timerActions from "../../redux/timerActions";
import Timer from './Timer'


const mapStateToProps = state => ({
  value: state.value
  // newValue: "some value ---------->"
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(timerActions.increment(10)),
  onDecrement: () => dispatch(timerActions.decrement(5))
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);