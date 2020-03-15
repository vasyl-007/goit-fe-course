import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ArticlesPage from "../pages/ArticlesPage";
import NotFoundPage from "../pages/NotFound";

const containerStyles = {
  maxWidth: 1170,
  marginLeft: "auro",
  marginRight: "auto",
  padding: "padding: 0 16px"
};

const App = () => {
  return (
    <div style={containerStyles}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/articles" component={ArticlesPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <h3>IT WORKS</h3>
    </div>
  );
};

export default App;
