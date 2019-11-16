import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

export default function AddIcon() {
    function iconStyles() {
        return {
                successIcon: {
                color: '#FFFFFF',
            }
        }
    }

    const classes = makeStyles(iconStyles)();

    return (
        <div>
          <AddCircleOutlineIcon className={classes.successIcon}/>
        </div>
    );
}