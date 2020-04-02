import React, { Component } from "react";
import Loader from "react-loader-spinner";

export default class App extends Component {
  render() {
    return (
      <Loader
        type="Oval"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={3000}
      />
    );
  }
}
