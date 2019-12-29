import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import { BrowserRouter } from "react-router-dom";
import PokeList from "../containers/PokeList";
import PokeInfo from "../containers/PokeInfo";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pokemons" component={PokeList} />
        <Route exact path="/poke-info/:pokeIndex/" component={PokeInfo} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
