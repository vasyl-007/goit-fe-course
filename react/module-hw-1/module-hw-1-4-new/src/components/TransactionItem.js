import React from "react";
import PropTypes from "prop-types";

const TransactionItem = ({ type, amount, currency }) => (
  <>
    <th>{type}</th>
    <th>{amount}</th>
    <th>{currency}</th>
  </>
);

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
};

export default TransactionItem;
