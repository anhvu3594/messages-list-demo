import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export const Message = ({ message = "", color = "", onClear = () => {} }) => {
  const classes = useStyles({ color });
  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>{message}</CardContent>
      <CardActions className={classes.cardAction}>
        <Button className={classes.button} onClick={() => onClear(message)}>
          Clear
        </Button>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles({
  root: {
    backgroundColor: ({ color }) => color,
    marginTop: "10px",
  },
  cardContent: {
    paddingBottom: 0,
    textTransform: "capitalize",
  },
  cardAction: {
    paddingTop: 0,
    justifyContent: "flex-end",
  },
  button: {
    textTransform: "capitalize",
  },
});

Message.propTypes = {
  message: PropTypes.string,
  color: PropTypes.string,
  onClear: PropTypes.func,
};
