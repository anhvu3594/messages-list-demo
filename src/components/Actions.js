import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    fontSize: "30px",
    paddingBottom: "10px",
    borderBottom: "1px solid gray",
  },
  button: {
    backgroundColor: "#88FCA3",
    fontWeight: "bold",
    padding: "5px 20px",
    margin: "7px 2px 70px 2px",
  },
});

export const Actions = ({
  isApiStarted = true,
  onToggleAPI = () => {},
  onClickClear = () => {},
}) => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" item xs={12}>
      <Button
        variant="contained"
        size="medium"
        onClick={onToggleAPI}
        className={classes.button}
      >
        {isApiStarted ? "Stop" : "Start"}
      </Button>
      <Button
        variant="contained"
        size="medium"
        onClick={onClickClear}
        className={classes.button}
      >
        Clear
      </Button>
    </Grid>
  );
};

Actions.propTypes = {
  isApiStarted: PropTypes.bool,
  onToggleAPI: PropTypes.func,
  onClickClear: PropTypes.func,
};
