import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { isBrowser, isMobile } from "react-device-detect";

const modalStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  modal: {
    width: "100%",
    display: "block"
  },
  title: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: "auto",
    whiteSpace: "normal"
  },
  intro: {
    width: "100%",
    alignItems: "center",
    justify: "center",
    textAlign: "center",
    margin: "auto",
    whiteSpace: "normal",
    paddingLeft: "2%",
    paddingRight: "2%"
  }
}));

const title = `Welcome to Amplify Austin!`;

const browserIntroduction = `We connect Austinites on community issues and the local government - check out
    some of the topmost and most recent issues. Sign-in or create an account to vote
    or add a new topic. Click anywhere to get started!`;

const mobileIntroduction = `We connect Austinites on community issues and the local government - scroll to see top issues. 
    Touch anywhere on the screen to get started!`;

const WelcomePopUp = () => {
  const classes = modalStyles();
  const userId = localStorage.getItem("user_id");

  const [display, setDisplay] = useState(true);

  useEffect(() => {
    window.addEventListener('click', () => {
      setDisplay(false);
    })
  }, [])

  if (!userId && display) {
    return (
      <Popup
        open={setTimeout(function () {
          return true;
        }, 5000)}
        modal
        position="top center"
        closeOnDocumentClick
      >
        <div className="modal">
          <Paper>
            <Grid
              item
              xs={12}
              container
              spacing={2}
              className={classes.title}
            >
              <Typography variant="h5" gutterBottom>
                <span role="img" aria-label="greeting">
                  👋👋👋
                  </span>
                {title}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              container
              spacing={2}
              className={classes.intro}
            >
              <Typography variant="span" gutterBottom>
                {isBrowser ? browserIntroduction : mobileIntroduction}
              </Typography>
            </Grid>
          </Paper>
        </div>
      </Popup>
    );
  } else {
    return <div></div>;
  }
};

export default WelcomePopUp;
