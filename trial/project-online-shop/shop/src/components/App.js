import React, { lazy, Suspense } from "react";
import Sidebar from "./sidebar/Sidebar";
import css from "./App.module.css";
import Header from "./header/Header";
import Container from "./container/Container";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage";
import Loadable from "react-loadable";


const HomePage = lazy(() => import("../pages/HomePage.js"));
const CatalogPage = lazy(() => import("../pages/CatalogPage.js"));

const App = props => {
  return (
    <div className={css.app}>
      <Sidebar />
      <div className={css.mainBlock}>
        <Header />
        <Container>
          <Switch>
            <Suspense fallback={<div>...loading</div>}>
              <Route exact path="/" component={HomePage} />
              <Route path="/catalog" component={CatalogPage} />
            </Suspense>
            {/* <Redirect to="/" /> */}
          </Switch>
        </Container>
      </div>
    </div>
  );
};

export default App;
