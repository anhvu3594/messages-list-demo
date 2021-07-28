import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { Message } from "./Message";
import { Header } from "./Header";

export const Messages = ({
  messages = [],
  header = "",
  color = "",
  onClear = () => {},
}) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      item
      xs={4}
    >
      <Header>{header}</Header>
      <div>Count {messages.length}</div>
      {messages.map((message) => (
        <Message
          key={message}
          color={color}
          message={message}
          onClear={onClear}
        />
      ))}
    </Grid>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string,
  onClear: PropTypes.func,
};
