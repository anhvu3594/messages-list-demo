import React, { useState, useEffect, useRef } from "react";
import Api from "../api";
import Grid from "@material-ui/core/Grid";
import { MessagesColumn } from "./MessagesColumn";
import { useMessages } from "../hooks/useMessages";
import { Snackbar } from "./Snackbar";
import { Header } from "./Header";
import { Actions } from "./Actions";
import { makeStyles } from "@material-ui/core/styles";

const MESSAGE_CONFIG = {
  ERROR: {
    header: "Error Type 1",
    priority: 1,
    color: "#F56236",
  },
  WARNING: {
    header: "Warning Type 2",
    priority: 2,
    color: "#FCE788",
  },
  INFO: {
    header: "Info Type 3",
    priority: 3,
    color: "#88FCA3",
  },
};

const useStyles = makeStyles({
  columns: {
    padding: "0 10%",
  },
});

export const MessageList = () => {
  const classes = useStyles();
  const {
    getMessagesByPriority,
    addMessage,
    removeMessage,
    removeAllMessages,
  } = useMessages();
  const [isApiStarted, setIsApiStarted] = useState(true);
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
      setIsApiStarted(false);
    } else {
      api.current.start();
      setIsApiStarted(true);
    }
  };

  return (
    <Grid container>
      <Snackbar
        message={
          getMessagesByPriority(MESSAGE_CONFIG.ERROR.priority).slice(-1)[0]
        }
        color={MESSAGE_CONFIG.ERROR.color}
      />
      <Header />
      <Actions
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
        {Object.values(MESSAGE_CONFIG).map(({ header, priority, color }) => (
          <MessagesColumn
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
