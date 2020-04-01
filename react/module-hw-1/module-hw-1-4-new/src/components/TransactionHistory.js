import React from "react";
import PropTypes from "prop-types";
import TransactionItem from "./TransactionItem";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) =>
  console.log("items", items) || (
    <div className={css.container}>
      <h3 className={css.header}>Transactions history</h3>
      <h4 className={css.subheader}>on a banking account #2600XXXXXXXX</h4>
      <table className={css.transactionHistory}>
        <thead className={css.thead}>
          <tr className={css.headRow}>
            <th className={css.headColumn}>Type</th>
            <th className={css.headColumn}>Amount</th>
            <th className={css.headColumn}>Currency</th>
          </tr>
        </thead>

        <tbody className={css.tbody}>
          {items.map(item => (
            <tr key={item.id} className={css.bodyRow}>
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
    </div>
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
