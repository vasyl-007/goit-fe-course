import React from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NewComponent from "./pages/NewComponent";
import DefaultPage from "./pages/DefaultPage";
import queryString from "query-string";

const addProp = {
  key: "amazing prop"
};

function App() {
  return (
    <>
      <Switch>
        {/* <h4>IT WORKS</h4> */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route
          path="/new"
          render={props => <NewComponent {...props} extra={addProp} />}
        />
        {/* <Route path="/new" component={NewComponent} /> */}
        <Route
          path="/new"
          component={props => <NewComponent {...props} extra={addProp} />}
        />
        {/* <Route component={DefaultPage} /> */}
        {/* <Route component={DefaultPage} /> */}
        <Redirect to="/" />
        <Link
          to={{
            pathname: "/books",
            search: "?category=adventure&status=unread",
            hash: "#comments",
            state: { from: "dashbord" }
          }}
        />
      </Switch>
    </>
  );
}

export default App;
