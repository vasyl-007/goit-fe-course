import React, { Component } from "react";

class Counter extends Component {
  static defaultProps = {
    step: 1,
    anotherStep: 10,
    initialValue: 0
  };

  //   handleClick = event => {
  //     // event.persist();  // позволяет сохранять event
  //     console.log(event); // => null-объект.
  //     console.log(event.type); // => "click"
  //     const eventType = event.type; // => "click"

  //     setTimeout(function() {
  //       console.log(event.type); // => null
  //       console.log(eventType); // => "click"
  //     }, 0);

  //     // Не сработает, поскольку this.state.clickEvent будет содержать только null-значения.
  //     this.setState({ clickEvent: event });

  //     // По-прежнему можно экспортировать свойства события.
  //     this.setState({ eventType: event.type });
  //   };

  handleIncrement = evt => {
    // console.log("evt", evt);
    console.log("Increment button was clicked!", this.props); // работает
  };

  handleDecrement = evt => {
    console.log("Decrement button was clicked!", evt); // работает
    // console.log("this.props: ", this.props); // работает
  };

  state = {
    value: this.props.initialValue
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <br />
        <button
          type="button"
          onClick={this.handleIncrement}
          // <button
          //   type="button"
          //   onClick={e => {
          //     console.log("Increment button was clicked!", e);
          //     console.log("this.props", this.props);
          //   }}
        >
          Increment by "+" {step}
        </button>
        <br />
        <button
          type="button"
          onClick={this.handleDecrement}
          // <button
          //   type="button"
          //   onClick={e => {
          //     console.log("Decrement button was clicked!", e);
          //     console.log("this.props", this.props);
          //   }}
        >
          Decrement by "-" {step}
        </button>
        <br />
        <button type="button" onClick={this.handleClick}>
          event.persist()
        </button>
        <br />
        <button>initialValue = {this.state.value}</button>
      </div>
    );
  }
}

export default Counter;
