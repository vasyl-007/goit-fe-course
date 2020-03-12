import React, { Component } from 'react';
import Form from './Form';
class App extends Component {
  state = {
    isVisible: true
    }
  getFormValue = value => {
    console.log("app -->", value);
    if (value) {
      this.setState({
        isVisible: false
      })
    }
  }
  render() {
      const {isVisible} =this.state;
      return isVisible ? <Form getFormValue={this.getFormValue} /> : <p>OK</p>
  }
}
export default App;