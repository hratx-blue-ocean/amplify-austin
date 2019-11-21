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
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import VisibilityIcon from "@material-ui/icons/Visibility";
import NotificationModal from "../NotificationModal/NotificationModal";
import "typeface-roboto";
import axios from "axios";
import { API } from "../../constants";
import ErrorModal from "../NotificationModal/ErrorModal.jsx";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    cursor: "pointer",
    margin: "",
    maxWidth: "100%",
    background: "#c5d1e8",
    "&:hover": {
      background: "#8dade8"
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
    fontWeight: "500",
    paddingLeft: "10%",
    fontSize: "1rem",
    justifyContent: "flex-start"
  },
  star: {
    paddingLeft: "7%",
    width: "100%",
    cursor: "pointer"
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
    paddingBottom: "1%",
    justifyContent: "flex-end",
    textAlign: "right"
  },
  addressGrid: {
    display: "inline",
    textAlign: "left",
    justifyContent: "flex-end"
  },
  address: {
    marginRight: "7px",
    width: "auto",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: "0.75rem",
    flexWrap: "nowrap",
    paddingBottom: "1%",
    paddingLeft: "2%",
    paddingRight: "1%",
    display: "inline-block"
  }
}));

const Post = props => {
  const styles = useStyles();
  const history = useHistory();
  const [amp, setAmp] = useState(!props.canAmplify);
  const [votes, setVotes] = useState(props.votes);
  const [fave, setFave] = useState(undefined);
  const [displayModal, toggleDisplayModal] = useState(false);
  const [errorToggle, setErrorToggle] = useState(false);

  useEffect(() => {
    setFave(props.isFavorited);
  }, [props.isFavorited]);

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
        if (amp) {
          setVotes(votes - 1);
        } else {
          setVotes(votes + 1);
        }
        setAmp(!amp);
      }
    } catch (error) {
      setErrorToggle(true);
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
      setErrorToggle(true);
    }
  };

  const shortenAddreses = address => {
    let abrevAddress = "";
    let j;
    if (address.length <= 20) {
      j = address.length;
    } else if (address.length > 20) {
      j = 20;
    }

    for (var i = 0; i < j; i++) {
      abrevAddress += address[i];
    }

    abrevAddress += "...";
    return abrevAddress;
  };

  let abbreviatedAddress = shortenAddreses(props.address);

  return (
    // if other flag, display "other" icon and NOT category icon
    <React.Fragment>
      <div className={styles.root}>
        <NotificationModal
          display={displayModal}
          toggleDisplayModal={toggleDisplayModal}
          message={"You must be logged in to use this feature!"}
        />
        <Grid container spacing={3}>
          <Grid item xs={2} container direction="column">
            <Grid item xs className={styles.arrow}>
              <IconButton
                style={
                  amp ? { color: "orange", padding: "0" } : { padding: "0" }
                }
                onClick={handleAmplify}
                aria-label="delete"
              >
                <ArrowUpwardIcon />
              </IconButton>
            </Grid>
            <Grid item xs>
              <Typography className={styles.arrow}>{votes}</Typography>
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
                      <VisibilityIcon></VisibilityIcon>
                    ) : (
                      <VisibilityOutlinedIcon></VisibilityOutlinedIcon>
                    )}
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={12} container direction="row">
                <Grid item xs={7}>
                  <Typography className={styles.date} gutterBottom>
                    <Moment format="MMM Do, YYYY">{props.datecreated}</Moment>
                  </Typography>
                </Grid>
                <Grid item xs={1} className={styles.mapIcon}>
                  <MapMarkerIcon />
                </Grid>
                <Grid item xs={4} className={styles.addressGrid}>
                  <Typography gutterBottom className={styles.address}>
                    {abbreviatedAddress}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <ErrorModal
        CurrentState={errorToggle}
        ChangeState={setErrorToggle.bind(this)}
        Message="An Error Occured"
      />
    </React.Fragment>
  );
};

export default Post;
