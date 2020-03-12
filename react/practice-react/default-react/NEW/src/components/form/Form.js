
import React, { Component } from 'react';
const INITIAL_STATE = {
  login: "",
  email: "",
  password: ""
};
class Form extends Component {
  state = { ...INITIAL_STATE };
  handleSubmit = event => {
    event.preventDefault();
    //console.log(this.state);
    this.props.getFormValue(this.state);
    // NODE JS  СПОСОБ СБОРА ФОРМЫ
    // console.log(event.target.elements);
    // const [login, email, password] = event.target.elements;
    // console.log(login.value);
    // console.log(email.value);
    // console.log(password.value);
    // this.setState({
    //  login: login.value,
    //  email: email.value,
    //  password: password.value,
    // });
    this.setState({ // очистка формы
      // login: ‘’,
      // email: ‘’,
      // password: ‘’
      ...INITIAL_STATE
    });
  };
  handleChange = evt => {
    // console.log(evt.target.value);
    // console.log(evt.target.name);
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  render() {
    //console.log(this.state);
    const { login, email, password } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="login"
            onChange={this.handleChange}
            value={login}
          />
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
          <button type="submit">Register</button>
        </form>
      </>
    );
  }
}
export default Form;