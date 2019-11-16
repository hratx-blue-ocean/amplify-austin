import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Style from "./Create.module.css";

const Create = props => {
  const [title, setTitle] = useState("");
  const [issueOrEvent, setIssueOrEvent] = useState("Issue");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("Category");
  const [date, setDate] = useState(new Date());

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
            <MenuItem value={"Category"}>Category</MenuItem>
            <MenuItem value={"Parking"}>Parking</MenuItem>
            <MenuItem value={"Flooding"}>Flooding</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
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
    <div className={Style.CreatePageContainer}>
      <div className={Style.ContentsDiv2}>
        <RadioGroup
          defaultValue="Issue"
          onChange={event => {
            setIssueOrEvent(event.target.value);
          }}
        >
          <div className={Style.RadioContainer}>
            <FormControlLabel value="Issue" control={<Radio />} label="Issue" />
            <FormControlLabel value="Event" control={<Radio />} label="Event" />
          </div>
        </RadioGroup>
      </div>

      <div className={Style.ContentsDiv}>
        <TextField
          onChange={event => {
            setTitle(event.target.value);
          }}
          fullWidth={true}
          placeholder="Title"
          required={true}
          variant="outlined"
        />
      </div>
      <div className={Style.ContentsDiv}>
        <TextField
          onChange={event => {
            setDescription(event.target.value);
          }}
          fullWidth={true}
          placeholder="Description"
          required={true}
          variant="outlined"
          multiline={true}
          rows={10}
        />
      </div>
      <div className={Style.ContentsDiv}>
        <TextField
          onChange={event => {
            setLocation(event.target.value);
          }}
          fullWidth={true}
          placeholder="Location"
          required={true}
          variant="outlined"
        />
        <TextField
          fullWidth={true}
          placeholder="Austin"
          required={true}
          variant="outlined"
          disabled={true}
        />
        <TextField
          fullWidth={true}
          placeholder="Tx"
          required={true}
          variant="outlined"
          disabled={true}
        />
      </div>
      <div className={Style.ContentsDiv}>{IssueOrEventRender()}</div>
      <div className={Style.ContentsDiv2}>
        <Button variant="contained">Submit</Button>
      </div>
    </div>
  );
};

export default Create;
