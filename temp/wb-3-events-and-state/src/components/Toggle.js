import React, { Component } from "react";

class Toggle extends Component {
  state = {
    isOpen: false
  };
  show = () =>
    this.setState({ isOpen: true }, console.log("this.state", this.state));
  hide = () =>
    this.setState({ isOpen: false }, console.log("this.state", this.state));

  render() {
    const { isOpen } = this.state;

    return (
      <>
        {isOpen ? (
          <h4>
            This message will be shown if a toggle is 'true'. <br />
            Press the "Hide"-button below!
          </h4>
        ) : (
          <h4>
            Now a toggle is 'false'. <br />
            Press the "Show"-button below!
          </h4>
        )}
        <button onClick={this.show}>Show</button>
        <button onClick={this.hide}>Hide</button>
      </>
    );
  }
}

export default Toggle;
