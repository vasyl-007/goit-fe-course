import React from 'react';
// import React, { Fragment } from "react";
import App from "./components/App";
import ReactDOM from "react-dom";
// import Product from "./components/Product";
// import Panel from "./components/Panel";
// import ProfileDetails from "./components/ProfileDetails";

const link = React.createElement(
  "a",
  { href: "https://reactjs.org/", target: "_blank" },
  "react website",
  "great library!"
);

console.log(link);

ReactDOM.render(link, document.querySelector("#root"));

const image = React.createElement("img", {
  src: "https://picsum.photos/200/300?grayscale",
  width: "300px",
  alt: "Tacos with Lime"
});
const title = React.createElement("h2", null, "Tacos With Lime");
const price = React.createElement("p", null, "Price: 10$");
const button = React.createElement(
  "button",
  { type: "button" },
  "Add to chart"
);
const product = React.createElement("div", null, image, title, price, button);
console.log(product);
ReactDOM.render(product, document.querySelector("#root"));

//================ Render App =======================
ReactDOM.render(<App/>, document.querySelector("#root"))

//============== JSX ====================

const linkWithJSX = (
  <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
    React website
  </a>
);
console.log(linkWithJSX);
//=======================================
//=======================================
// const Product = props => {
//   return (
//     <div>
//       <img
//         src="https://picsum.photos/200/300?grayscale"
//         width="300"
//         alt="Tacos with Lime"
//       />
//       <h2>Tacos With Lime</h2>
//       <p>Price: 10$</p>
//       <button type="button">Add to chart</button>
//     </div>
//   );
// };
// const Product = (props) => console.log(props) || (
//   <div>
//     <img src={props.imgUrl} width={props.width} alt={props.alt} />
//     <h2>{props.name}</h2>
//     <p>Price: {props.price}$</p>
//     <button type="button">Add to chart</button>
//   </div>
// );

// ReactDOM.render(
//   <Fragment>
//     {/* <Panel title="Some title">
//       <ProfileDetails name="Mango" email="mango@mail.com" />
//     </Panel>
//     <Product
//       name="Tacos With Lime"
//       imgUrl="https://picsum.photos/200/300?grayscale"
//       width="300"
//       alt="Tacos with Lime"
//       price={10}
//     >
//       demonstrate of children
//     </Product>
//     <Product
//       name="Working day"
//       imgUrl="https://picsum.photos/200/300/?blur"
//       width="300"
//       alt="Working day"
//       price={20}
//     /> */}
//   </Fragment>,
//   document.querySelector("#root")
// );
// ReactDOM.render(<Product />, document.querySelector("#root"));
// ReactDOM.render(React.createElement(Product), document.querySelector("#root"));
//=======================================

// const productWithJSX = (
//   <div>
//     <img
//       src="https://picsum.photos/200/300?grayscale"
//       width="300"
//       alt="Tacos with Lime"
//     />
//     <h2>Tacos With Lime</h2>
//     <p>Price: 10$</p>
//     <button type="button">Add to chart</button>
//   </div>
// );
// ReactDOM.render(productWithJSX, document.querySelector("#root"));
