import React from "react";
import PokeCard from "../PokeCard/PokeCard";
import { Grid } from "@material-ui/core";

const List = ({ pokeData }) => {
  return (
    <>
      <h1>Lista de pokemons</h1>
      <Grid container justify="center" spacing={2}>
        {pokeData.map((pokemon, index) => {
          return <PokeCard key={index} pokeName={pokemon.name} />;
        })}
      </Grid>
    </>
  );
};

export default List;
