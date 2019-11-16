import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const Create = props => {
  const [title, setTitle] = useState("");
  const [issueOrEvent, setIssueOrEvent] = useState("Issue");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("Parking");
  const [date, setDate] = useState(new Date());

  const IssueOrEventRender = () => {
    if (issueOrEvent === "Issue") {
      return (
        <React.Fragment>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            onChange={event => {
              setCategory(event.target.value);
            }}
          >
            <MenuItem value={"Parking"}>Parking</MenuItem>
            <MenuItem value={"Flooding"}>Flooding</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </React.Fragment>
      );
    } else {
      return (
        <TextField
          onChange={event => {
            setDate(event.target.value);
          }}
          placeholder="Date"
          required={true}
          variant="outlined"
        />
      );
    }
  };

  return (
    <div>
      <RadioGroup
        defaultValue="Issue"
        onChange={event => {
          setIssueOrEvent(event.target.value);
        }}
      >
        <FormControlLabel value="Issue" control={<Radio />} label="Issue" />
        <FormControlLabel value="Event" control={<Radio />} label="Event" />
      </RadioGroup>
      <TextField
        onChange={event => {
          setTitle(event.target.value);
        }}
        placeholder="Title"
        required={true}
        variant="outlined"
      />
      <br></br>
      <TextField
        onChange={event => {
          setDescription(event.target.value);
        }}
        placeholder="Description"
        required={true}
        variant="outlined"
        multiline={true}
        rows={10}
      />
      <br></br>
      <TextField
        onChange={event => {
          setLocation(event.target.value);
        }}
        placeholder="Location"
        required={true}
        variant="outlined"
      />
      <br></br>
      {IssueOrEventRender()}
      <br></br>
      <Button variant="contained">Submit</Button>
    </div>
  );
};

export default Create;
