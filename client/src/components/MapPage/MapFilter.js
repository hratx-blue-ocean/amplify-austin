import React from "react";
import CategorySelect from "../SortFilter/CategorySelect/CategorySelect";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center"
  }
}));

const MapFilter = props => {
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
          <CategorySelect
            categories={props.categories}
            selectCategories={props.selectCategories}
            filteredCategories={props.filteredCategories}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default MapFilter;
