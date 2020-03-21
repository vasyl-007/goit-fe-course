import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Controls from "./Controls";

// const INITIAL_STATE = 115;

export default class Counter extends Component {
  static defaulProps = {
    // будет доступно в конструкторе
    step: 1,
    initialValue: 0
  };

  static propTypes = {
    step: PropTypes.number,
    initialValue: PropTypes.number
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // value: 100
  //     value: props.initialValue
  //   };
  // }

  state = {
    value: this.props.initialValue
  };

  handleIncrement = e => {
    // const { value } = this.state;
    // const { step } = this.props;
    // this.setState({
    //   value: value + step
    // });
    this.setState(prev => ({
      value: prev.value + this.props.step
    }));
    // =====================
    // this.setState((prev, props) => ({
    //   // props в очень редких случаях также можно получать
    //   value: prev.value + props.step // тоже работает
    // }));
    // =====================

    // setTimeout(() => {}, 1000);
    // console.log("this.state Counter", this.state);
    // console.log("Increment button was clicked!", e);
    // console.log("this.props", this.props);
  };
  handleDecrement = e => {
    // const { value } = this.state;
    // const { step } = this.props;
    // this.setState({
    //   value: value - step
    // });
    this.setState(prev => ({
      value: prev.value - this.props.step
    }));
    // console.log("this.state Counter", this.state);
    // console.log("Increment button was clicked!", e);
    // console.log("this.props", this.props);
  };
  //   handleIncrement(e) {  // кастомный метод
  //     // console.log("this.state Counter", this.state);
  //     // console.log("Increment button was clicked!", e);
  //     // console.log("this.props", this.props);
  //   }

  // ==========================================
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this); // ! important
  //     this.handleDecrement = this.handleDecrement.bind(this);
  //   }

  //   handleIncrement(e) {
  //     console.log("Increment button was clicked!", e);
  //     console.log("this.props", this.props);
  //   }

  //   handleDecrement(e) {
  //     console.log("Increment button was clicked!", e);
  //     console.log("this.props", this.props);
  //   }
  // ==========================================

  render() {
    // console.log("this.state Counter", this.state);
    const { step } = this.props;
    const { value } = this.state;

    return (
      <Controls
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        value={value}
        step={step}
      />
      // <Fragment>
      //   <div
      //     style={{
      //       minWidth: 400,
      //       display: "flex"
      //     }}
      //   >
      //     <button
      //       onClick={this.handleIncrement}
      //       // onClick={this.handleIncrement.bind(this)}
      //       // onClick={e => {
      //       //   console.log("Increment button was clicked!", e);
      //       //   console.log("this.props", this.props);
      //       // }}
      //       type="button"
      //       style={{
      //         minWidth: 120,
      //         high: "auto",
      //         border: "2px dashed green"
      //       }}
      //     >
      //       Increment by {step}
      //     </button>
      //     <span
      //       style={{
      //         padding: "10px 26px",
      //         fontSize: 22,
      //         fontFamily: "monospace"
      //       }}
      //     >
      //       {value}
      //       {/* {INITIAL_STATE} */}
      //     </span>
      //     <button
      //       onClick={this.handleDecrement}
      //       // onClick={this.handleDecrement.bind(this)}
      //       // onClick={e => {
      //       //   console.log("Decrement button was clicked!", e);
      //       //   console.log("this.props", this.props);
      //       // }}
      //       type="button"
      //       style={{
      //         minWidth: 120,
      //         high: "auto",
      //         border: "2px dashed red"
      //       }}
      //     >
      //       Decrement by {step}
      //     </button>
      //   </div>
      // </Fragment>
    );
  }
}

// const counter1 = new Counter();
// const counter2 = new Counter();
// console.log("counter2", counter2);
// console.log("counter1", counter1);
