import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { SvgIcon } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  }
}));

export default function PostContainer(props) {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Paper className={styles.paper}>
        <Grid container spacing={2}>
          <Grid container item xs={12} spacing={3}>
            <ArrowUpwardIcon data-test="" className=""></ArrowUpwardIcon>
            <Typography gutterBottom variant="subtitle1">
              {/* {props.upvotes} */}
            </Typography>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <ArrowUpwardIcon></ArrowUpwardIcon>
                <Typography variant="body2" gutterBottom>
                  {/* {props.description} */}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {/* {props.createdAt} */}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
