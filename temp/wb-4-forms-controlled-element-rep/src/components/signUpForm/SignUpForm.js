import React, { Component, Fragment } from "react";
import shortId from "shortid";

export default class SignUpForm extends Component {
  state = {
    login: "",
    email: "",
    password: ""
  };

  inputId = shortId.generate();

  handleChange = e => {
    const { name, value } = e.target;
    // console.log("name", e.target.name);
    // console.log("value", e.target.value);

    this.setState({
      [name]: value // computed property name
      //   [e.target.name]: e.target.value // computed property name
    });
  };

  //   handleLoginChange = e => {
  //     this.setState({
  //       login: e.target.value
  //     });
  //   };

  //   handleEmailChange = e => {
  //     this.setState({
  //       email: e.target.value
  //     });
  //   };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submit");

    this.props.onSignUp({ ...this.state });  // задача формы собрать данные 
    // и при сабмите передать их куда-то (в функцию, напр.)

    this.reset();
    // this.setState({
    //   login: "",
    //   email: "",
    //   password: ""
    // });
  };

  reset = () => {
    this.setState({
      login: "",
      email: "",
      password: ""
    });
  };

  render() {
    const { login, email, password } = this.state;
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.inputId}>
            Login
            <input
              type="text"
              value={login}
              onChange={this.handleChange}
              name="login"
              id={this.inputId}
            />
          </label>
          <br />

          <label htmlFor={this.inputId}>
            Email
            <input
              type="email"
              value={email}
              onChange={this.handleChange}
              name="email"
              id={this.inputId}
            />
          </label>
          <br />

          <label htmlFor={this.inputId}>
            Password
            <input
              type="password"
              value={password}
              onChange={this.handleChange}
              name="password"
              id={this.inputId}
            />
          </label>
          <br />
          <button type="submit">Sign up as {login}</button>
        </form>
      </Fragment>
    );
  }
}
