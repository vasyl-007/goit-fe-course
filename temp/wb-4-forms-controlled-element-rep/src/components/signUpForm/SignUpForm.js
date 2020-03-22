import React, { Component, Fragment } from "react";
import shortId from "shortid";
import { validateAll } from "indicative";

// const { validateAll } = require("indicative");

const rules = {
  login: "required|string",
  email: "required|email",
  password: "required|string|min:6"
};

const messages = {
  "login.required": "Please choose a unique username for your account.",
  "email.required": "Enter a valid email address.",
  "email.email": "Email is invalid",
  "password.required": "Enter a valid password.",
  "password.min": "Password must be at least 6 characters long."
};

const Gender = {
  MALE: "male",
  FEMALE: "female"
};

export default class SignUpForm extends Component {
  state = {
    login: "",
    email: "",
    password: "",
    agreed: false,
    gender: null,
    age: "",
    errors: null
  };

  inputId = shortId.generate();

  handleChange = e => {
    const { name, value, type, checked } = e.target;
    // console.log("name", e.target.name);
    // console.log("value", e.target.value);
    console.log("type", type);

    this.setState({
      [name]: type === "checkbox" ? checked : value // computed property name
      //   [e.target.name]: e.target.value // computed property name
    });
    // this.setState({
    //   [name]: value // computed property name
    //   //   [e.target.name]: e.target.value // computed property name
    // });
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
    // console.log("submit");
    // ===================== Validation via indicative ================
    // const { login, email, password } = this.state;
    // validateAll({ login, email, password }, rules, messages)
    //   .then(data => {
    //     console.log("success ---->", data);
    //     this.props.onSignUp({ ...this.state }); // задача формы собрать данные и при сабмите передать их куда-то (в функцию, напр.)
    //   })
    //   .catch(errors => {
    //     console.log("errors ----<", errors);

    //     const formattedErrors = {};

    //     errors.forEach(error => {
    //       formattedErrors[error.field] = error.message;
    //     });

    //     console.log("formattedErrors", formattedErrors);

    //     this.setState({
    //       errors: formattedErrors
    //     });
    //   });
    // =====================================

    this.props.onSignUp({ ...this.state }); // задача формы собрать данные
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
      password: "",
      agreed: false,
      gender: null,
      age: ""
    });
  };

  render() {
    const { login, email, password, agreed, gender, age, errors } = this.state;
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
          <label htmlFor={this.inputId}>
            Agree to terms
            <input
              type="checkbox"
              checked={agreed}
              onChange={this.handleChange}
              name="agreed"
              id={this.inputId}
            />
          </label>
          <br />
          <h4>Choose your gender</h4>
          <label>
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
          <br />

          <label>
            <h4>Choose your group age</h4>
            <select name="age" value={age} onChange={this.handleChange}>
              <option value="" disabled>
                ...
              </option>
              <option value="18-25">teen</option>
              <option value="26-60">adult</option>
              <option value="61+">senior</option>
            </select>
          </label>
          <br />
          <button type="submit">Sign up as {login}</button>
        </form>
      </Fragment>
    );
  }
}
