import React from "react";
// import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// const Article = ({ title, text }) => (
//   <article>
//     <h2>{title}</h2>
//     <p>{text}</p>
//   </article>
// );

// const withLog = function(BaseComponent) {
//   return function WithLog(props) {
//     console.log(
//       `Calling ${BaseComponent.name} with props ${props.title} and ${props.text}`
//     );
//     return <BaseComponent {...props} />;
//   };
// };

// const ArticleWithLog = withLog(Article);

// const add = (a, b) => {
//   // console.log("args", a, b);
//   return a + b;
// };

// const filteredNumbers = numbers => {
//   // console.log("args", numbers);
//   numbers.filter(n => n > 2);
// };

// const withLog = function(fn) {
//   return function(...args) {
//     console.log("args", ...args);
//     return fn(...args);
//   };
// };

// const filteredNumbersWithLog = withLog(filteredNumbers);

// const addWithLog = withLog();

// add(3, 5);
// add(4, 6);
// addWithLog(3, 5);
// addWithLog(4, 6);

// filteredNumbers([1, 2, 3, 4, 5, 6]);
// filteredNumbersWithLog([1, 2, 3, 4, 5, 6]);
//=====================================================

// const withLog = BaseComponent => {
//   return class BaseComponent extends Component {
//     state = {};
//     render() {
//       console.log(`Calling ${BaseComponent.name} with props ${this.props}`);
//       return <BaseComponent {...this.props} />;
//     }
//   };
// };

//=====================================================

// const withLog = function(BaseComponent) {
//   return function WithLog(props) {
//     console.log(`Calling ${BaseComponent.name} with props ${props}`);
//     return <BaseComponent {...props} />;
//   };
// };
//=====================================================
