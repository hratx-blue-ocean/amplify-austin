import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import MapMarkerIcon from "../Icons/MapMarkerIcon.jsx";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Moment from "react-moment";
import Icon from "../Icon/Icon";
import EmptyStarIcon from "../Icons/EmptyStarIcon.jsx";
import FilledStarIcon from "../Icons/FilledStarIcon.jsx";
import NotificationModal from "../NotificationModal/NotificationModal";
import "typeface-roboto";
import axios from "axios";
import { API } from "../../constants";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    margin: "",
    maxWidth: "100%",
    background: "#c4c4c4",
    "&:hover": {
      background: "#DCDCDC"
    }
  },
  arrow: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    alignItems: "center",
    justify: "center",
    textAlign: "center"
  },
  row2: {
    paddingBottom: "1%"
  },
  category: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    paddingLeft: "2%",
    paddingTop: "1%",
    paddingBottom: "1%"
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    paddingLeft: "10%",
    fontSize: "1rem",
    justifyContent: "flex-start"
  },
  star: {
    paddingLeft: "2%",
    width: "100%"
  },
  date: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    paddingLeft: "10%",
    fontSize: "0.75rem",
    justifyContent: "flex-start",
    paddingBottom: "1%"
  },
  mapIcon: {
    paddingBottom: "1%"
  },
  address: {
    marginRight: "7px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: "0.75rem",
    justifyContent: "flex-start",
    paddingBottom: "1%"
  }
}));

const Post = props => {
  const styles = useStyles();
  const history = useHistory();
  const [amp, setAmp] = useState(undefined);
  const [fave, setFave] = useState(undefined);
  const [displayModal, toggleDisplayModal] = useState(false);

  useEffect(() => {
    setFave(props.isFavorited);
  }, []);

  const userID = localStorage.getItem("user_id");

  const handleAmplify = async () => {
    if (!userID) {
      toggleDisplayModal(!displayModal);
      return;
    }
    try {
      const response = await axios.post(API.AMPLIFY, {
        userId: userID,
        postId: props.postID
      });
      if (response.data.split(" ")[0] === "post") {
        amp === undefined ? setAmp(props.votes + 1) : setAmp(undefined);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFavorite = async e => {
    e.stopPropagation();
    if (!userID) {
      toggleDisplayModal(!displayModal);
      return;
    }
    try {
      const response = await axios.post(API.FAVORITE, {
        userId: userID,
        postId: props.postID
      });
      if (response.data.split(" ")[0] === "postId") {
        setFave(!fave);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // if other flag, display "other" icon and NOT category icon
    <div className={styles.root}>
      <NotificationModal
        display={displayModal}
        toggleDisplayModal={toggleDisplayModal}
      />
      <Grid container spacing={3}>
        <Grid item xs={2} container direction="column">
          <Grid item xs className={styles.arrow}>
            <IconButton
              style={amp ? { color: "orange", padding: "0" } : { padding: "0" }}
              onClick={handleAmplify}
              aria-label="delete"
            >
              <ArrowUpwardIcon />
            </IconButton>
          </Grid>
          <Grid item xs>
            <Typography className={styles.arrow}>
              {amp ? amp : props.votes}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={10} container direction="column">
          <Paper
            onClick={() => {
              history.push(`/posts/${props.postID}`);
            }}
            className={styles.paper}
          >
            <Grid
              item
              xs={12}
              container
              direction="row"
              className={styles.category}
            >
              <Icon category={props.category.toLowerCase()} />
            </Grid>
            <Grid
              item
              xs={12}
              container
              direction="row"
              className={styles.row2}
            >
              <Grid item xs={10}>
                <Typography
                  className={styles.title}
                  gutterBottom
                  fontSize={{
                    xs: "h6.fontSize",
                    sm: "h4.fontSize",
                    md: "h3.fontSize"
                  }}
                  noWrap
                >
                  {props.title}
                </Typography>
              </Grid>
              <Grid item xs={2} className={styles.star}>
                {/* width: 100% */}
                <div onClick={handleFavorite}>
                  {fave === true ? (
                    <FilledStarIcon></FilledStarIcon>
                  ) : (
                    <EmptyStarIcon></EmptyStarIcon>
                  )}
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12} container direction="row">
              <Grid item xs={6}>
                <Typography className={styles.date} gutterBottom>
                  <Moment format="MMM Do, YYYY">{props.datecreated}</Moment>
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <MapMarkerIcon />
              </Grid>
              <Grid item xs={5}>
                <Typography gutterBottom className={styles.address}>
                  {props.address}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Post;
