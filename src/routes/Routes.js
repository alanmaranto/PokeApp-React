import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import { BrowserRouter } from "react-router-dom";
import PokeList from "../containers/PokeList";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/pokemons' component={PokeList} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
