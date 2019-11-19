import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Tags = props => {
  let defaultValues = [];
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
        multiple
        id="tags-standard"
        options={props.categories.map((cat) => { return { title: cat } })}
        getOptionLabel={option => option.title}
        defaultValue={defaultValues}
        onChange={(event, value) => props.selectCategories(value)}
        renderInput={params => (
          <TextField
            {...params}
            variant="standard"
            label="Category: "
            placeholder="Select a category to sort by..."
            margin="normal"
            fullWidth
          />
        )}
      />
    </div>
  );
};

export default Tags;
