import React, { Component } from "react";

const withToggle = BaseComponent => {
  return class WithToggle extends Component {
    state = {
      isOpen: false
    };

    toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

    render() {
      return (
        <>
          <button type="button" onClick={this.toggle}>
            {this.state.isOpen ? "Hide" : "Show"}
          </button>

          {this.state.isOpen && <BaseComponent {...this.props} />}
        </>
      );
    }
  };
};

export default withToggle;
