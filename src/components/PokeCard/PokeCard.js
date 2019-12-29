import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom'

const PokeCard = ({ pokeName, classes, image, to }) => {
  return (
    <Card className={classes.item}>
      <CardMedia className={classes.media} image={image} />
      <CardContent>
        <Link to={to}>
          <Typography variant="h6" component="p">
            {pokeName}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default withStyles({
  item: {
    minWidth: "300px",
    margin: "2em",
    boxSizing: "border-box",
    textAlign: "center"
  },
  media: {
    minHeight: "300px"
  }
})(PokeCard);
