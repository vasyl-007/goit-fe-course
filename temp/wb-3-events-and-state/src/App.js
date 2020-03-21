import React, { Component } from "react";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import Button from "./components/Button";

class App extends Component {
  state = {
    message: new Date().toLocaleDateString(),
    newDate: ""
  };

  updateMessage = event => {
    console.log("event", event);
    this.setState({ newDate: new Date().toLocaleDateString()});
  };
  render() {
    return (
      <>
        <h3>IT WORKS</h3>
        <Counter step={5} initialValue={15} />
        <hr />
        <Toggle />
        <hr />
        <span>{this.state.message}</span>
        <Button label="Change message" changeMessage={this.updateMessage} />
      </>
    );
  }
}
export default App;
