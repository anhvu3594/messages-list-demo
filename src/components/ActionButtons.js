import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { Button } from "./common/Button";

export const ActionButtons = ({
  isApiStarted = true,
  onToggleAPI = () => {},
  onClickClear = () => {},
}) => {
  return (
    <Grid container justifyContent="center" item xs={12}>
      <Button
        onClick={onToggleAPI}
      >
        {isApiStarted ? "Stop" : "Start"}
      </Button>
      <Button
        onClick={onClickClear}
      >
        Clear
      </Button>
    </Grid>
  );
};

ActionButtons.propTypes = {
  isApiStarted: PropTypes.bool,
  onToggleAPI: PropTypes.func,
  onClickClear: PropTypes.func,
};
