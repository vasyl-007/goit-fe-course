import React, { Component } from "react";
import shortId from "shortid";


const tasks = [
  { title: "react", id: shortId() },
  { title: "redux", id: shortId() },
  { title: "javascript", id: shortId() }
];

class App extends Component {
  state = {
    todos: [],
    flag: true,
    choose: ""
  };

  componentDidMount() {
    console.log("componentDidMount");
    console.log(tasks);
    this.setState({ todos: tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevState", prevState);
    console.log("this.state", this.state);

    console.log("componentDidUpdate");
  }

  handleChoose = e => {};

  render() {
    return (
      <>
        <select onChange={e => console.log(event.target.value)}>
          <option>choose an option</option>
          <option>React</option>
          <option>JavaScript</option>
          <option>Redux</option>
        </select>
      </>
    );
  }
}



export default App;
