import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Tags = props => {
  const defaultValues = [];
  // Don't let it break if it's ever undefined
  if (props.filteredCategories) {
    props.categories.forEach(category => {
      if (props.filteredCategories.includes(category)) {
        defaultValues.push({ title: category });
      }
    });
  }

  return (
    <div style={{ width: "100%" }}>
      <Autocomplete
        style={{ margin: "0" }}
        multiple
        id="tags-standard"
        options={props.categories.map(category => {
          return { title: category };
        })}
        getOptionLabel={option => option.title}
        getOptionDisabled={option =>
          props.filteredCategories.includes(option.title)
        }
        defaultValue={defaultValues}
        onChange={(event, value) => props.selectCategories(value)}
        renderInput={params => (
          <TextField
            {...params}
            variant="standard"
            label="Categories"
            placeholder="Filter by..."
            margin="normal"
            fullWidth
          />
        )}
      />
    </div>
  );
};

export default Tags;
