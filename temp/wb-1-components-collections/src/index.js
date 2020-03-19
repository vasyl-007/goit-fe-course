import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Product from "./components/Product";
import Panel from "./components/Panel";
import ProfileDetails from "./components/ProfileDetails";
import Portfolio from "./components/Portfolio";

ReactDOM.render(
  <Fragment>
    <Panel title="Authorisation panel">
      <ProfileDetails name="Ricky" email="ricky.margin@gmail.com" />
      <Portfolio
        workOne="JoJo's Bizarre Adventure"
        workTwo="Thriller"
        workThree="African adventure"
      />
    </Panel>
    <Product
      name="John Wick 4K Ultra Hd [Blu-ray]"
      imageUrl="https://images-na.ssl-images-amazon.com/images/I/51%2BCkK0MUKL.jpg"
      imageWidth="400"
      productPrice={349}
    >
      ----------> Children are here
    </Product>
    <Product
      name="Ex Machina"
      imageUrl="https://images-na.ssl-images-amazon.com/images/I/51LnZI4zDaL.jpg"
      imageWidth="400"
      productPrice={29}
    />
    <Product
      name="Saban's Power Rangers 4K Ultra HD"
      imageUrl="https://images-na.ssl-images-amazon.com/images/I/61EfhxZpd6L.jpg"
      imageWidth="400"
      productPrice={89}
    />
  </Fragment>,
  document.getElementById("root")
);
// ReactDOM.render(React.createElement(Product), document.getElementById("root")); // the same as a line above

// ===============================================
// const Product = ({ name, productPrice, imageUrl, imageWidth }) => (
//   <Fragment>
//     <h3>{name}</h3>
//     <p>price: {productPrice} $</p>
//     <img src={imageUrl} width={imageWidth} alt={name} />
//     <button type="button">Add to card</button>
//     <hr />
//   </Fragment>
// );
// const Product = props => console.log('props', props) || (
//   <Fragment>
//     <h3>{props.name}</h3>
//     <p>price: {props.productPrice} $</p>
//     <img src={props.imageUrl} width={props.imageWidth} alt={props.name} />
//     <button type="button">Add to card</button>
//   </Fragment>
// );

// ========================================================

// const productWithJSX = (
//   <>
//     <h3>John Wick 4K Ultra Hd [Blu-ray]</h3>
//     <p>329 $</p>
//     <img
//       src="https://images-na.ssl-images-amazon.com/images/I/51%2BCkK0MUKL.jpg"
//       width="400"
//       alt="John Wick 4K Ultra Hd"
//     />
//     <button type="button">Add to card</button>
//   </>
// );
// ReactDOM.render(productWithJSX, document.getElementById("root"));
// ========================================================

// const link = React.createElement(
//   "a",
//   {
//     href:
//       "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
//     target: "_blank"
//   },
//   "react web"
// );

// console.log("link", link);
// ========================================================

// const image = React.createElement("img", {
//   src: "https://images-na.ssl-images-amazon.com/images/I/51%2BCkK0MUKL.jpg",
//   width: 400,
//   alt: "John Wick 4K Ultra Hd [Blu-ray]"
// });

// const title = React.createElement(
//   "h3",
//   null,
//   "John Wick 4K Ultra Hd [Blu-ray]"
// );
// const button = React.createElement("button", null, "Add to card");
// const price = React.createElement("p", null, "329 $");
// const product = React.createElement("div", null, title, price, image, button);
// console.log("product", product);

// ReactDOM.render(product, document.getElementById("root"));
// ReactDOM.render(link, document.querySelector("#root"));
// ==================================================
// const imageUrl =
//   "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
// const price = 10.99;

// const product = (
//   <div>
//     <img src={imageUrl} alt="Tacos With Lime" width="400" />
//     <h2>Tacos With Lime</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );
// ReactDOM.render(product, document.getElementById("root"));
// ==================================================

// const card = (
//   <div>
//     <h3>
//       Samsung SM-G900V - Galaxy S5 - 16GB Android Smartphone Verizon - Black
//     </h3>
//     <img
//       src="https://images-na.ssl-images-amazon.com/images/I/81NdGJWjA9L._AC_SL1500_.jpg"
//       width="300"
//       alt="Samsung SM-G900V - Galaxy S5"
//     />
//     <h4>$ 599 with discount</h4>
//     <button type="button">Add to cart</button>
//   </div>
// );
// ==================================================

// ReactDOM.render(card, document.getElementById("root"));
