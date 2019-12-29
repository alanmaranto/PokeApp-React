import React from "react";
import PokeCard from '../PokeCard/PokeCard';
import Grid from '@material-ui/core/Grid';

const PokeDescription = ({ pokeImage, pokeName }) => {
  return (
    <Grid container justify="center">
      <PokeCard image={pokeImage} pokeName={pokeName}>
      </PokeCard>
    </Grid>
  );
};

export default PokeDescription;
