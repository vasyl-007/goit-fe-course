import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";
import Article from "./components/Article";

const containerStyles = {
  maxWidth: 1170,
  marginLeft: "auto",
  marginRight: "auto",
  padding: "padding: 0 16px"
};

const App = () => (
  <div style={containerStyles}>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/articles/:articleId" component={Article} />
      <Route path="/articles" component={Articles} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
    <a href="/about">About</a>
  </div>
);

export default App;
