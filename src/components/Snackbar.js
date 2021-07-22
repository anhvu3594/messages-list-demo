import React, { useState, useEffect } from "react";
import MaterialSnackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  snackbar: {
    top: 0,
    minWidth: "25%",
  },
  card: {
    width: "100%",
    backgroundColor: ({ color }) => color,
  },
  cardContent: {
    "&:last-child": {
      padding: "12px",
    },
  },
  button: {
    marginRight: "10px",
  },
});

const AUTO_HIDE_DURATION = 2000;

export const Snackbar = ({ color = "", message = "" }) => {
  const classes = useStyles({ color });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (message && !open) {
      setOpen(true);
    }
  }, [message]);

  const handleClose = () => setOpen(false);
  return (
    <MaterialSnackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={open}
      autoHideDuration={AUTO_HIDE_DURATION}
      onClose={handleClose}
      className={classes.snackbar}
    >
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
            className={classes.button}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
          {message}
        </CardContent>
      </Card>
    </MaterialSnackbar>
  );
};

Snackbar.propTypes = {
  message: PropTypes.string,
  color: PropTypes.string,
};
