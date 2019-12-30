import React from "react";
import PokeCard from "../PokeCard/PokeCard";
import { Grid, Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const PokeDescription = ({ pokeImage, pokeName, pokeDescription, classes }) => {
  return (
    <Grid container className={classes.centerContainer} justify="center">
      <Grid item md={6}>
        <PokeCard image={pokeImage} pokeName={pokeName} />
      </Grid>
      <Grid item md={6}>
        <div className={classes.descriptionContainer}>
          <Paper className={classes.descriptionBox}>
            <Typography variant="body1" component="p" className={classes.descriptionText}>
              {pokeDescription}
            </Typography>
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
};

export default withStyles({
  centerContainer: {
    margin: "0 auto",
    width: "60% !important"
  },
  descriptionContainer: {
    margin: "2em"
  },
  descriptionBox: {
    padding: "2em",
    height: "auto"
  },
  descriptionText: {
    fontSize: "1em",
    textAlign: "justify",
    fontFamily: "Verdana"
  }
})(PokeDescription);
