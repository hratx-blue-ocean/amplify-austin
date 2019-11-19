import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Tags = props => {
  let defaultValues = [];
  if (props.filteredCategories) {
    props.categories.forEach(category => {
      if (props.filteredCategories.includes(category)) {
        defaultValues.push({ title: `${category.charAt(0).toUpperCase()}${category.slice(1)}` });
      }
    });
  }
  console.log('---default values...again...', defaultValues);
  return (
    <div style={{ width: "100%" }}>
      <Autocomplete
        style={{ margin: "0" }}
        multiple
        id="tags-standard"
        options={props.categories.map(category => {
          return { title: `${category.charAt(0).toUpperCase()}${category.slice(1)}` };
        })}
        getOptionLabel={option => option.title}
        defaultValue={defaultValues}
        onChange={(event, value) => { props.selectCategories(value) }}
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
