import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const PokeCard = ({ pokeName, classes }) => {
  return (
    <Card className={classes.item}>
      <CardMedia />
      <CardContent>
        <Typography variant="h6" component="p">
          {pokeName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles({
    item: {
        minWidth: "300px",
        margin: "1em",
        boxSizing: "border-box",
    },
    media: {
        minWidth: "200px",
    }
})(PokeCard);
