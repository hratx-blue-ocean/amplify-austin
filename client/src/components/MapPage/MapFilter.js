import React from "react";
import CategorySelect from "../SortFilter/CategorySelect/CategorySelect";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MapPostSelect from './MapPostSelect';

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
        {localStorage.getItem("user_id") &&
          <Grid item xs={6}>
            <MapPostSelect
              selectBy={props.selectBy}
              changeSelectBy={props.changeSelectBy}
            />
          </Grid>
        }
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
