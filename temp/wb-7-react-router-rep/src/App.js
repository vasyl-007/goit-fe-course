import React, { Fragment } from "react";
import { Route, Switch, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import NotFound from "./pages/NotFound";

const containerStyles = {
  maxWidth: 1170,
  marginLeft: "auto",
  marginRight: "auto",
  padding: "padding: 0 16px"
};

const App = () => (
  <div style={containerStyles}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/articles">Articles</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/articles" component={Articles} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
    <a href="/about">About</a>
  </div>
);

export default App;
