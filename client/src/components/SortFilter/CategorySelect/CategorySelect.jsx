import React from "react";
// import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Tags = props => {
  let selected = React.createRef();
  let defaultValues = [];

  if (props.filteredCategories) {
    console.log('We have some categories here!')
    categories.forEach(category => {
      if (props.filteredCategories.includes(category.title)) {
        defaultValues.push(category)
      }
    });
  }

  return (
    <div style={{ width: "100%" }}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={categories}
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

const categories = [
  { title: "accessibility" },
  { title: "danger" },
  { title: "events" },
  { title: "food" },
  { title: "garbage" },
  { title: "graffiti" },
  { title: "music" },
  { title: "nature" },
  { title: "parking" },
  { title: "pet" },
  { title: "school" },
  { title: "townhall" },
  { title: "water" },
  { title: "other" }
];

export default Tags;
