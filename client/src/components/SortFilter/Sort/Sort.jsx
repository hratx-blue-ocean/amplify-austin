import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    justifyContent: "flex-start",
    minWidth: "30%"
  }
}));

const Sort = props => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const menuItems = ["popularity", "date"];

  const handleChange = event => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">
          Sort By...
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          {menuItems.map((option, index) => (
            <MenuItem
              key={option}
              value={option}
              onClick={() => {
                props.sortBy(option);
              }}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Sort;
