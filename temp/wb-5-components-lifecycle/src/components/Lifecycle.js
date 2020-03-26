import React, { Component, Fragment } from "react";

class Lifecycle extends Component {
  constructor() {
    console.log("constructor() --- >");
    super();
    // this.state = {
    //   isOnline: false
    // };
    // this.setState = this.setState.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  state = {
    inOnline: false,
    count: 10
  };

  componentDidMount() {
    console.log("componentDidMount --->");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate --->");
  }
  
  handleChange = () => {
    this.setState(prev => ({
      count: prev.count + 5
    }));
    console.log("this.state.count", this.state.count);
  };

  render() {
    console.log("render() ----> ");
    // console.log("state: ", this.state);
    return (
      <Fragment>
        <button type="button" onClick={this.handleChange}>
          Update me!
        </button>
      </Fragment>
    );
  }
}

export default Lifecycle;
