import React from "react";
import PokeCard from "../PokeCard/PokeCard";
import { Grid } from "@material-ui/core";

const List = ({ pokeData, classes }) => {
  return (
    <>
      <h1>Lista de pokemons</h1>
      <Grid container justify="center" spacing={2}>
        {pokeData.map((pokemon, index) => {
            let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
            let pokeIndex = pokemon.url.split('/')[pokemon.url.split('/').length - 2]

            const titleCasePokeName = (str) => {
                str = pokemon.name.toLowerCase().split(' ');
                let capitalLetterPokeName = [ ];

                 str.map(word => {
                     capitalLetterPokeName.push(word.charAt(0).toUpperCase() + word.slice(1))
                 })
             
               return capitalLetterPokeName.join(' ')
             }

          return <PokeCard key={index} pokeName={titleCasePokeName(pokemon.name)} image={`${url}${pokeIndex}.png?raw=true`}/>;
        })}
      </Grid>
    </>
  );
};

export default List;
