import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import Grid from "@material-ui/core/Grid";
import Moment from "react-moment";
import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    margin: "",
    maxWidth: "100%",
    background: "#c4c4c4",
    '&:hover': {
      background: "#DCDCDC",
    }
  },
  arrow: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    alignItems: "center",
    justify: "center",
    textAlign: "center",
  },
  row2: {
      paddingBottom: '1%'
  },
  category: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      paddingLeft: '2%',
      paddingTop: '1%',
      paddingBottom: '1%'
  },
  title: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    paddingLeft: '10%',
    fontSize: '1rem',
    justifyContent: "flex-start"  
  },
  date: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    paddingLeft: '10%',
    fontSize: '0.75rem',
    justifyContent: "flex-start",  
    paddingBottom: '1%'
  },
  address: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    paddingLeft: '10%',
    fontSize: '0.75rem',
    justifyContent: "flex-start",
    paddingBottom: '1%'  
  }
}));

const Post = props => {
  const styles = useStyles();

  return (
      // if other flag, display "other" icon and NOT category icon
    <div className={styles.root}>
       <Grid container spacing={3}>
        <Grid item xs={2} container direction="column">
            <Grid item xs className={styles.arrow}>
                <IconButton aria-label="delete">
                 <ArrowUpwardIcon/>
                </IconButton>
            </Grid>
            <Grid item xs>
                <Typography className={styles.arrow}>
                    {props.votes}
                </Typography>
            </Grid>
        </Grid>
        <Grid item xs={10} container direction="column">
            <Paper className={styles.paper}>
             <Grid item xs={12} container direction="row" className={styles.category}>
                <ReportProblemIcon/>
             </Grid>
             <Grid item xs={12} container direction="row" className={styles.row2}>
                <Grid item xs={10}>
                    <Typography className={styles.title} gutterBottom fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }} noWrap>
                        {props.title}
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <ReportProblemIcon/>
                </Grid>
             </Grid>
             <Grid item xs={12} container direction="row">
                <Grid item xs={6}>
                    <Typography className={styles.date} gutterBottom>
                        <Moment format="MMM Do, YYYY">{props.datecreated}</Moment>
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <ReportProblemIcon/>
                </Grid>
                <Grid item xs={5}>
                    <Typography gutterBottom className={styles.address}>
                        {props.location}
                    </Typography>
                </Grid>
             </Grid>
            </Paper>
        </Grid>
       </Grid>
    </div>
  );
}

export default Post;
