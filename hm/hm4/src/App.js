import React from "react";
import HomePage from "./components/pages/HomePage";
import MovieDetailsPage from "./components/pages/MovieDetailsPage";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <p>IT WORKS</p>

      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/movies">Movies</NavLink>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies" component={MovieDetailsPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
