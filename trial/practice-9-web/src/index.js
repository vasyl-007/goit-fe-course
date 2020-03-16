/* eslint-disable */

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.css";

// const withLog = function(BaseComponent) {
//   return function WithLog(props) {
//     console.log(`Calling ${BaseComponent.name} with props: ${props}`);
//     return <BaseComponent {...props} />;
//   };
// };

// const Article = ({ title, text }) => (
//   <article>
//     <h2>{title}</h2>
//     <p>{text}</p>
//   </article>
// );

// const ArticleWithLog = withLog(Article);

ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(
//   <ArticleWithLog title="title" text="text" />,
//   document.getElementById("root")
// );

// const add = (a, b) => {
//   //   console.log("args: ", a, b);
//   return a + b;
// };

// const filterNumbers = numbers => {
//   //   console.log("args: ", numbers);
//   numbers.filter(n => n > 2);
// };

// const withLog = function(fn) {
//   return function(...args) {
//     console.log("Args: ", ...args);
//     return fn(...args);

//   };
// };

// const addWithLog = withLog(add);
// const filterNumbersWithLog = withLog(filterNumbers);

// addWithLog(3, 5);
// addWithLog(4, 6);
// filterNumbersWithLog([1, 2, 3, 4, 5]);
// // withLog([1, 2, 3, 4, 5]);

// const withLog = function(BaseComponent) {
//   return function WithLog extends Component {
//       render() {
//           console.log(`Calling ${BaseComponent.name} with props: ${props}`);
//           return <BaseComponent {...props} />
//       }
//   }
// };
