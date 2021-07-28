import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialButton from "@material-ui/core/Button";
import PropTypes from "prop-types";

export const Button = ({ onClick = () => {}, children = "" }) => {
  const classes = useStyles();
  return (
    <MaterialButton
      variant="contained"
      size="medium"
      onClick={onClick}
      className={classes.root}
    >
      {children}
    </MaterialButton>
  );
};

const useStyles = makeStyles({
  root: {
    backgroundColor: "#88FCA3",
    fontWeight: "bold",
    padding: "5px 20px",
    margin: "7px 2px 70px 2px",
  },
});

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
};
