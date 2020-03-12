import React from "react";
import transactions from "./transactions/transactions.json";
import TransactionHistory from "./transactions/TransactionHistory";

const AppTransactions = () => (
  <TransactionHistory transactions={transactions} />
);

export default AppTransactions;
