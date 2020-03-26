import React from "react";

const TransactionHistory = ({ transactions }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>{transactions.type}</th>
        <th>{transactions.amount}</th>
        <th>{transactions.currency}</th>
      </tr>
    </thead>

    <tbody>
      {transactions.map(item => (
        <tr>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;
