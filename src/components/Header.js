import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

export const Header = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.root}>
      Help.com Coding Challenge
    </Grid>
  );
};

const useStyles = makeStyles({
  root: {
    fontSize: "30px",
    paddingBottom: "10px",
    borderBottom: "1px solid gray",
  },
});
