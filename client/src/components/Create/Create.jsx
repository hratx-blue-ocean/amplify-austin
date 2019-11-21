import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrentLocationButton from "./CurrentLocationButton";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import RadioGroup from "@material-ui/core/RadioGroup";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Style from "./Create.module.css";
import { API, CATEGORIES } from "../../constants";
import { useHistory } from "react-router-dom";
import ErrorModal from "../NotificationModal/ErrorModal";
import SuccessModal from "../NotificationModal/SuccessModal";
const Create = props => {
  const categories = [];
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
      .get(API.CATEGORIES)
      .then(res => {
        setHungry(res.data);
      })
      .catch(() => {
        setCategory(CATEGORIES);
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

  //Submission for the form
  const makeSubmission = () => {
    if (category === "Category" || !title || !description || !location) {
      handleOpen("error");
      return;
    }
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
      })
      .catch(error => {
        handleOpen("error");
      });
  };

  //This will render the differences between the issue and event pages
  const IssueOrEventRender = () => {
    if (issueOrEvent === "Issue") {
      return (
        <React.Fragment>
          <Select
            variant="outlined"
            defaultValue="Accessibility"
            value={categories[0]}
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
              value={location}
              fullWidth={true}
              label="Location"
              margin="normal"
              color="secondary"
              required={true}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CurrentLocationButton setLocation={setLocation} />
                  </InputAdornment>
                )
              }}
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
              label="TX"
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
      <SuccessModal
        CurrentState={successToggle}
        ChangeState={setSuccessToggle.bind(this)}
        Message="Success!"
      />

      {/* Error */}
      <ErrorModal
        CurrentState={errorToggle}
        ChangeState={setErrorToggle.bind(this)}
        Message="An Error Occured With Submission"
      />
    </React.Fragment>
  );
};

export default Create;
