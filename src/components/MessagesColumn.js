import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  header: {
    fontWeight: "bold",
    fontSize: "25px",
  },
  card: {
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

export const MessagesColumn = ({
  messages = [],
  header = "",
  color = "",
  onClear = () => {},
}) => {
  const classes = useStyles({ color });
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      item
      xs={4}
    >
      <div className={classes.header}>{header}</div>
      <div>Count {messages.length}</div>
      {messages.map((message) => (
        <Card key={message} className={classes.card}>
          <CardContent className={classes.cardContent}>{message}</CardContent>
          <CardActions className={classes.cardAction}>
            <Button className={classes.button} onClick={() => onClear(message)}>
              Clear
            </Button>
          </CardActions>
        </Card>
      ))}
    </Grid>
  );
};

MessagesColumn.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string,
  onClear: PropTypes.func,
};
