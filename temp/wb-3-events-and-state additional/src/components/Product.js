import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Product = ({ name, productPrice, imageUrl, imageWidth, children }) =>
  console.log("children", children) || (
    <Fragment>
      <h3>{name}</h3>
      <p>price: {productPrice} $</p>
      <img src={imageUrl} width={imageWidth} alt={name} />
      <button type="button">Add to card</button>
      <hr />
    </Fragment>
  );

Product.defaultProps = {
  imageWidth: "400"
};
Product.propTypes = {
  name: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  children: PropTypes.string
};

export default Product;
