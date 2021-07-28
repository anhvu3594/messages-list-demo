import React, { useState, useEffect, useRef } from "react";
import Api from "../api";
import Grid from "@material-ui/core/Grid";
import { Messages } from "./Messages";
import { useMessages } from "../hooks/useMessages";
import { Notification } from "./Notification";
import { Header } from "./Header";
import { ActionButtons } from "./ActionButtons";
import { makeStyles } from "@material-ui/core/styles";
import { MESSAGE_TYPES } from '../constants';

export const MessageList = () => {
  const classes = useStyles();
  const {
    getMessagesByPriority,
    addMessage,
    removeMessage,
    removeAllMessages,
  } = useMessages();
  const [isApiStarted, setIsApiStarted] = useState(true);

  // Use useRef to keep api instance persistent every time component is updated.
  const api = useRef();
  useEffect(() => {
    api.current = new Api({
      messageCallback: addMessage,
    });

    api.current.start();
  }, []);

  const onToggleAPI = () => {
    if (isApiStarted) {
      api.current.stop();
    } else {
      api.current.start();
    }
    setIsApiStarted(value => !value);
  };

  const errorMessages = getMessagesByPriority(MESSAGE_TYPES.ERROR.priority);
  const lastErrorMessage = errorMessages.slice(-1)[0]

  return (
    <Grid container>
      <Notification
        message={lastErrorMessage}
        color={MESSAGE_TYPES.ERROR.color}
      />
      <Header />
      <ActionButtons
        isApiStarted={isApiStarted}
        onToggleAPI={onToggleAPI}
        onClickClear={removeAllMessages}
      />
      <Grid
        container
        justifyContent="center"
        item
        xs={12}
        spacing={2}
        className={classes.columns}
      >
        {Object.values(MESSAGE_TYPES).map(({ header, priority, color }) => (
          <Messages
            messages={getMessagesByPriority(priority)}
            header={header}
            color={color}
            onClear={removeMessage}
            key={priority}
          />
        ))}
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles({
  columns: {
    padding: "0 10%",
  },
});