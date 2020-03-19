import React, { Fragment } from "react";

const Product = ({ name, productPrice, imageUrl, imageWidth, children }) =>
  console.log(
    "children",
    children
  ) || (
    <Fragment>
      <h3>{name}</h3>
      <p>price: {productPrice} $</p>
      <img src={imageUrl} width={imageWidth} alt={name} />
      <button type="button">Add to card</button>
      <hr />
    </Fragment>
  );

export default Product;
