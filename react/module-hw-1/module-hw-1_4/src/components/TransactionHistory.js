import React, { Fragment } from "react";
import TransactionItem from "./TransactionItem";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) =>
  console.log("items", items) || (
    <Fragment>
      <h2>IT WORKS</h2>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <TransactionItem
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
              {/* <TransactionItem {...item} /> */}
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TransactionHistory;
