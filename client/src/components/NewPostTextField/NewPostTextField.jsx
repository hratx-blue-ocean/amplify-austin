import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
        paddingLeft: "15%",
        paddingBottom: "2%"
    },
}));

const NewPostTextField = props => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.margin}>
                <Grid container spacing={1} justify="flex-start" alignItems="center">
                    <Grid item>
                        <AccountCircle />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Add a new post..." />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default NewPostTextField;