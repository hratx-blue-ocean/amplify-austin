import React from "react";
import ConditionMenu from "./Sort/Sort";
import CategorySelect from "./CategorySelect/CategorySelect.jsx";
import NewPostTextField from "../NewPostTextField/NewPostTextField.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center"
  }
}));

const SortFilter = props => {
  const menuStyles = useStyles();

  return (
    <div className={menuStyles.root}>
      <Grid
        container
        spacing={12}
        justify="center"
        direction="row"
        alignItems="center"
      >
        <Grid item xs={6}>
          <ConditionMenu sortBy={props.sortBy} />
        </Grid>
        <Grid item xs={6}>
          <CategorySelect
            selectCategories={props.selectCategories}
            filteredCategories={props.filteredCategories}
          />
        </Grid>
        <Grid item xs={12}>
          <NewPostTextField></NewPostTextField>
        </Grid>
      </Grid>
    </div>
  );
};

export default SortFilter;
