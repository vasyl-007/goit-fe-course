import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

const ProductList = ({ items = [] }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Product
          imgUrl={item.imgUrl}
          alt={item.alt}
          name={item.name}
          price={item.price}

          // // либо просто спреднуть
          //   {...item}
        />
      </li>
    ))}
  </ul>
  //   <ul>
  //     {items.map(item => (
  //       <li key={item.id}>
  //         <Product />
  //       </li>
  //     ))}
  //   </ul>
);

ProductList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ProductList;
