import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ArticlesPage from "../pages/Articles";
import NotFoundPage from "../pages/NotFound";
import Nav from "../components/Nav";
import ArticlePage from "../pages/Article";

const containerStyles = {
  maxWidth: 1170,
  marginLeft: "auto",
  marginRight: "auto",
  padding: "padding: 0 16px",
  fontFamily: "Helvetica",
  fontSize: "32px"
};

const App = () => {
  return (
    <div styles={containerStyles}>
      <Nav />
      {/* <ul>
        <li style={itemStyles}>
          <Link to="/">Home</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/about">About</Link>
        </li>
      </ul> */}

      {/* <Link to="/about">About</Link> */}
      {/* history.push(/about) */}
      {/* <a href="/about">About</a> */}
      <h3>IT WORKS</h3>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/articles/:articleId" component={ArticlePage} />
        <Route path="/articles" component={ArticlesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
