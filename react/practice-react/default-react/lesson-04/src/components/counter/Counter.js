import React, { Component } from "react"; // imrc

const showAlert = (param) => param > 50 && showAlert("more... !!!");


class Counter extends Component {
  // ccs
  state = {
    count: 1,
    step: this.props.step ? this.props.step : 1,
    flag
  };

  handleIncrement = () => {
    console.log("click INCREMENT")
    // this.setState({
    //   count: this.state.count + 1
    // });
    this.setState(prevState => {
        console.log("prevState", prevState);
        console.log("this.state", this.state.count);
        return {
            count: prevState.count + this.state.step || 1
        }
    }
  }

  handleDecrement = () => {
      console.log("click DECREMENT")
  }

  handleChooseStep = ({target: {value}}) => {
      this.setState({
          step: value,
          flag: false
      })
  }

  render(count, step) {
    console.log(this.state);
    console.log(step);
    const { count } = this.state;
    const {step} = this.props;
    showAlert(count);

    return (
      <>
      { (
        <button disabled={!step ? true : false } onClick={this.handleIncrement}>INCREMENT</button>
        <button disabled={true} >DECREMENT</button>
      )}
        <h2>{count}</h2>

        {/* <select onChange={(e => console.log(e.target.value))}> */}
        <select onChange={this.handleChooseStep}>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
        </select>


      </>
    );
  }
}

export default Counter;
