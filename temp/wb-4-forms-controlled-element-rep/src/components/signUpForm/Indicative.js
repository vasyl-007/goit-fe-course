// import React, { Component } from "react";
// import { validateAll } from "indicative";

// const rules = {
//   login: "required|string",
//   email: "required|email",
//   password: "required|string|min:6"
// };

// const messages = {
//   "login.required": "Please choose a unique username for your account.",
//   "email.required": "Enter a valid email address.",
//   "email.email": "Email is invalid",
//   "password.required": "Enter a valid password.",
//   "password.min": "Password must be at least 6 characters long."
// };

// class Indicative extends Component {
//   state = {
//     login: "",
//     email: "",
//     password: "",
//     errors: null
//   };

//   onChange = e => {
//     const { name, value } = e.target;

//     this.setState({ [name]: value });
//   };

//   onSubmit = e => {
//     e.preventDefault();

//     validateAll(this.state, rules, messages)
//       .then(console.log)
//       .catch(errors => {
//         const formattedErrors = {};
//         errors.forEach[error.field] = error.message;
//       });

//     console.log(formattedErrors);

//     this.setState({ errors: formattedErrors });
//   };

//   render() {
//     return <h3>IT WORKS</h3>;
//   }
// }

// export default Indicative;
