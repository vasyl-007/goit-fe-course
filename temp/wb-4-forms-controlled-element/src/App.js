import React, { Component } from "react";
import Form from "./Form";


const INITIAL_STATE = {
  login: "",
  email: "",
  password: "",
  agreed: false,
  gender: null,
  age: ""
};


class App extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    // console.log("target", target);
    const { name, value, type, checked } = target;

    this.setState({ [name]: type === "checkbox" ? checked : value });
    // this.setState({ [name]: value }); // !!! pattern

    // this.setState({
    //   login: e.target.value
    // });
  };
  handleSubmit = e => {
    e.preventDefault();

    const { login, email, password, agreed, gender, age} = this.state;

    console.log(`
      Login: ${login}
      Email: ${email}
      Password: ${password}
      Agreed: ${agreed}
      Gender: ${gender}
      Age: ${age}
    `);

    // console.log(`Signed up as ${this.state.login}`);
    this.props.onSubmitForm({ ...this.state });
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreed, gender, age } = this.state;
    return (
      <>
        <h3>IT WORKS</h3>
        <Form
          onSubmitForm={this.handleSubmit}
          onChangeInput={this.handleChange}
          login={login}
          email={email}
          password={password}
          agreed={agreed}
          gender={gender}
          age={age}
        />
      </>
    );
  }
}

export default App;
