import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ContactPage from "./pages/ContactPage";

export const useRouter = isAuthentication => {
  if (isAuthentication) {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route to="/" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/contact" component={ContactPage} />
      <Redirect to="/login" />
    </Switch>
  );
};
