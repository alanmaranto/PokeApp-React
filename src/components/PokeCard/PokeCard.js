import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const PokeCard = ({ pokeName, classes, image }) => {
  return (
    <Card className={classes.item}>
      <CardMedia className={classes.media} image={image} />
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
        textAlign: "center"
    },
    media: {
        minHeight: "250px",
    }
})(PokeCard);
