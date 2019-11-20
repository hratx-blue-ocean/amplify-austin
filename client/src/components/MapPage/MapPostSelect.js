import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SimpleSelect(props) {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          value={props.selectBy}
          onChange={event => {
            props.changeSelectBy(event.target.value);
          }}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value={null}>All Posts</MenuItem>
          <MenuItem value={"myPosts"}>My Posts</MenuItem>
          <MenuItem value={"favorites"}>Watch List</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
