import React from "react";
import Sort from "./Sort/Sort";
import CategorySelect from "./CategorySelect/CategorySelect.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const SortFilter = props => {
  const menuStyles = useStyles();

  return (
    <div className={menuStyles.root}>
      <Grid container spacing={3}>
        <Sort item xs={6} sortBy={props.sortBy} />
        <CategorySelect item xs={6} />
      </Grid>
    </div>
  );
};

export default SortFilter;
