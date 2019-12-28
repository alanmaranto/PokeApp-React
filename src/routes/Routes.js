import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import { BrowserRouter } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
