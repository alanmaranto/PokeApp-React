import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const AppNav = ({ classes }) => {
  return (
    <AppBar className={classes.NavColor} position="static">
      <Toolbar>
        <Typography variant="h6" component="p">
          PokeApp
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles({
  NavColor: {
    backgroundColor: "#db0921"
  }
})(AppNav);
