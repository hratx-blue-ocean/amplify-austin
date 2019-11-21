import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    paddingLeft: "15%",
    paddingBottom: "2%",
    fontSize: "32px"
  },
  icon: {
    fontSize: "inherit"
  }
}));

const NewPostTextField = props => {
  const classes = useStyles();
  const history = useHistory();

  const handleRedirect = e => {
    e.preventDefault();
    history.push("/create");
  };

  return (
    <div>
      <div className={classes.margin}>
        <Grid container spacing={1} justify="center" alignItems="flex-end">
          <Grid item>
            <AccountCircle className={classes.icon} />
          </Grid>
          <Grid item xs={10}>
            <TextField
              onClick={handleRedirect}
              id="input-with-icon-grid"
              label="Add a new post..."
              fullWidth={true}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default NewPostTextField;
