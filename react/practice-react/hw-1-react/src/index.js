import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/task1/App";
import AppFriends from "./components/task3/AppFriends";
import AppTransactions from "./components/task4/AppTransactions";

// import "./index.css";

ReactDOM.render(
  <>
    {/* <App />, document.getElementById("root") */}
    <AppFriends />
    <AppTransactions />
  </>,
  document.getElementById("root")
);

// import user from 'path/to/user.json;

// ReactDOM.render(<Profile user={user} />, document.getElementById('root'));
