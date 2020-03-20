import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

const ProductList = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Product
          name={item.name}
          imageUrl={item.imgUrl}
          productPrice={item.price}

          // если ключи совпадают, то можно еще вот так (ниже)
          // <Product {...item} />
        />
      </li>
    ))}
  </ul>
);

ProductList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired
};

export default ProductList;
