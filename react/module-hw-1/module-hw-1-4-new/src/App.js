import React, { Fragment } from "react";
import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  return (
    <Fragment>
      <TransactionHistory items={transactions} />
    </Fragment>
  );
}

export default App;
