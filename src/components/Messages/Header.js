import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

export const Header = ({children}) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>
}

const useStyles = makeStyles({
  root: {
    fontWeight: "bold",
    fontSize: "25px",
  },
});

Header.propTypes = {
  children: PropTypes.string,
};