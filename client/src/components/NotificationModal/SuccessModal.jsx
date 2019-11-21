import React from "react";
import clsx from "clsx";
import { green } from "@material-ui/core/colors";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import { SnackbarContent } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: green[600]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));
//Props CurrentState: An Open Toggle Val Bol
//Props ChangeState: a state change function
//Props Message: The message you want to display
const SuccessModal = props => {
  const styles = useStyles();
  return (
    <React.Fragment>
      <Snackbar
        className={styles.error}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        open={props.CurrentState}
        autoHideDuration={10000}
        onClose={() => {
          props.ChangeState(false);
        }}
      >
        <SnackbarContent
          className={styles.error}
          message={
            <span className={styles.message}>
              <CheckCircleIcon
                className={clsx(styles.icon, styles.iconVariant)}
              />
              {props.Message}
            </span>
          }
          action={[
            <IconButton
              className={styles.icon}
              key="close"
              aria-label="close"
              color="inherit"
              onClick={() => {
                props.ChangeState(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </Snackbar>
    </React.Fragment>
  );
};

export default SuccessModal;
