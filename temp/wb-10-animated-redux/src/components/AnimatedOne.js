import React, { Component, Fragment } from "react";
import { Transition } from "react-transition-group";

const defaultStyle = {
  padding: "20px 16px 10px 16px",
  backgroundColor: "orange",
  color: "white",
  margin: "0 auto",
  width: "230px",
  height: "160px",
  borderRadius: "8px",
  marginTop: "20px",
  fontSize: "18px",
  textAlign: "center",
  transition: `opacity ${500}ms ease-in-out`,
  opacity: 0,
};

const transitionStyle = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0, backgroundColor: "green" },
  exited: { opacity: 0, backgroundColor: "green" },
};

export default class AnimatedOne extends Component {
  state = {
    visible: true,
  };

  toggle = () => {
    this.setState((prev) => ({ visible: !prev.visible }));
  };

  render() {
    const { visible } = this.state;
    return (
      <Fragment>
        <h3 style={{ textAlign: "center" }}>IT WORKS</h3>
        <button
          onClick={this.toggle}
          type="button"
          style={{
            display: "block",
            margin: "0 auto",
            border: "0",
            cursor: "pointer",
            padding: "8px 16px",
            width: "80px",
            textDecoration: "none",
          }}
        >
          {visible ? "HIDE" : "SHOW"}
        </button>
        <Transition in={visible} timeout={1000} unmountOnExit>
          {(state) => (
            <div style={{ ...defaultStyle, ...transitionStyle[state] }}>
              <p>This text shows the current state: {state}</p>
            </div>
          )}
        </Transition>
      </Fragment>
    );
  }
}
