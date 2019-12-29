import React from "react";
import PokeCard from '../PokeCard/PokeCard';
import Grid from '@material-ui/core/Grid';

const PokeDescription = ({ pokeImage }) => {
  return (
    <Grid container justify="center">
      <PokeCard image={pokeImage} />
    </Grid>
  );
};

export default PokeDescription;
