import React, { Component } from "react";
import SignUpForm from "./components/signUpForm/SignUpForm";

export default class App extends Component {
  state = {
    inputValue: ""
  };

  // handleChange = e => {
  //   console.log("e.target.value", e.target.value);
  //   this.setState({
  //     inputValue: e.target.value
  //   });
  // };

  handleSignUp = credentials => {
    console.log("credentials", credentials);
  };

  render() {
    return (
      <>
        <h4>IT WORKS</h4>

        <SignUpForm onSignUp={this.handleSignUp} />
        {/* <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        /> */}
      </>
    );
  }
}
