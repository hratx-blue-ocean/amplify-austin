import React, { useState, useEffect } from "react";
import axios from "axios";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import Style from "./Create.module.css";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { SnackbarContent } from "@material-ui/core";
import { API } from "../../constants";
import { useHistory } from "react-router-dom";

const Create = props => {
  let categories = [];
  const [category, setCategory] = useState("Category");
  const [hungry, setHungry] = useState(categories);
  const [title, setTitle] = useState("");
  const [issueOrEvent, setIssueOrEvent] = useState("Issue");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(new Date());
  const [successToggle, setSuccessToggle] = useState(false);
  const [errorToggle, setErrorToggle] = useState(false);
  const userID = localStorage.getItem("user_id");
  const history = useHistory();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/categories")
      .then(res => {
        setHungry(res.data);
      })
      .catch(error => {
        categories = [
          "Category",
          "Accessibility",
          "Danger",
          "Event",
          "Garbage",
          "Graffiti",
          "Music",
          "Nature",
          "Parking",
          "Pets",
          "School",
          "Townhall",
          "Water",
          "Other"
        ];
      });
  }, []);

  // Handle Open and Closes for SnackBars
  const handleOpen = specificToggle => {
    if (specificToggle === "success") {
      setSuccessToggle(true);
    } else if (specificToggle === "error") {
      setErrorToggle(true);
    }
  };
  const handleClose = specificToggle => {
    if (specificToggle === "success") {
      setSuccessToggle(false);
    } else if (specificToggle === "error") {
      setErrorToggle(false);
    }
  };

  //Styles for pop menus
  const styles = makeStyles(theme => ({
    success: {
      backgroundColor: green[600]
    },
    error: {
      backgroundColor: theme.palette.error.dark
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
  let classes = styles();
  //Submission for the form
  const makeSubmission = () => {
    axios
      .post(API.ISSUE, {
        creatorId: parseInt(userID),
        categoryName: category,
        headline: title,
        description: description,
        eventDate: date,
        location: `${location}, Austin, TX`
      })
      .then(response => {
        const postId = response.data.postId;
        if (postId) {
          history.push(`/posts/${postId}`);
        } else {
          handleOpen("error");
        }
        //dont need to have a pop up for success because we are going to immediately redirect to new page,
        // so no handleOpen("success") needed

        //redirect to singlePost page;
      })
      .catch(error => {
        console.log(error);
        handleOpen("error");
      });
  };

  //This will render the differences between the issue and event pages
  const IssueOrEventRender = () => {
    if (issueOrEvent === "Issue") {
      return (
        <React.Fragment>
          <Select
            value={category}
            onChange={event => {
              setCategory(event.target.value);
            }}
          >
            {hungry.map(option => {
              return <MenuItem value={option}>{option}</MenuItem>;
            })}
          </Select>
        </React.Fragment>
      );
    } else {
      return (
        <TextField
          id="datetime"
          label="Event Date"
          type="datetime-local"
          defaultValue="2019-11-18T10:30"
          InputLabelProps={{
            shrink: true
          }}
          onChange={event => {
            setDate(event.target.value);
          }}
        />
      );
    }
  };

  return (
    <React.Fragment>
      <div className={Style.CreatePageContainer}>
        {/* This is the selection of issue or event section */}
        <div className={Style.ContentsDiv2}>
          <RadioGroup
            defaultValue="Issue"
            onChange={event => {
              setIssueOrEvent(event.target.value);
            }}
          >
            <div className={Style.RadioContainer}>
              <FormControlLabel
                value="Issue"
                control={<Radio />}
                label="Issue"
              />
              <FormControlLabel
                value="Event"
                control={<Radio />}
                label="Event"
              />
            </div>
          </RadioGroup>
        </div>
        {/* This is the title section */}
        <div className={Style.ContentsDiv}>
          <TextField
            onChange={event => {
              setTitle(event.target.value);
            }}
            fullWidth={true}
            label="Title"
            color="secondary"
            margin="normal"
            required={true}
            variant="outlined"
          />
        </div>
        {/* This is the description section */}
        <div className={Style.ContentsDiv}>
          <TextField
            onChange={event => {
              setDescription(event.target.value);
            }}
            fullWidth={true}
            label="Description"
            margin="normal"
            required={true}
            color="secondary"
            variant="outlined"
            multiline={true}
            rows={10}
          />
        </div>
        {/* This is the location section */}
        <div className={Style.LocationDiv}>
          <div className={Style.ContentsDiv}>
            <TextField
              onChange={event => {
                setLocation(event.target.value);
              }}
              fullWidth={true}
              label="Location"
              margin="normal"
              color="secondary"
              required={true}
              variant="outlined"
            />
          </div>
          <div className={Style.ContentsDiv}>
            <TextField
              fullWidth={true}
              label="Austin"
              margin="normal"
              variant="outlined"
              disabled={true}
            />
            <TextField
              fullWidth={true}
              label="Tx"
              margin="normal"
              variant="outlined"
              disabled={true}
            />
          </div>
        </div>
        {/* This is the issue or event section */}
        <div className={Style.ContentsDiv}>{IssueOrEventRender()}</div>
        {/* This is the submission section */}
        <div className={Style.ContentsDiv2}>
          <Button
            variant="contained"
            onClick={() => {
              makeSubmission();
            }}
          >
            Submit
          </Button>
        </div>
      </div>
      {/* This is the success or error section */}

      {/* Success */}

      <Snackbar
        className={classes.success}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        open={successToggle}
        autoHideDuration={10000}
        onClose={() => {
          handleClose("success");
        }}
      >
        <SnackbarContent
          className={classes.success}
          message={
            <span className={classes.message}>
              <CheckCircleIcon
                className={clsx(classes.icon, classes.iconVariant)}
              />
              Submission was successful
            </span>
          }
          action={[
            <IconButton
              className={classes.icon}
              key="close"
              aria-label="close"
              color="inherit"
              onClick={() => {
                handleClose("success");
              }}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </Snackbar>

      {/* Error */}

      <Snackbar
        className={classes.error}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        open={errorToggle}
        autoHideDuration={10000}
        onClose={() => {
          handleClose("error");
        }}
      >
        <SnackbarContent
          className={classes.error}
          message={
            <span className={classes.message}>
              <ErrorIcon className={clsx(classes.icon, classes.iconVariant)} />
              Error with submission
            </span>
          }
          action={[
            <IconButton
              className={classes.icon}
              key="close"
              aria-label="close"
              color="inherit"
              onClick={() => {
                handleClose("error");
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

export default Create;
