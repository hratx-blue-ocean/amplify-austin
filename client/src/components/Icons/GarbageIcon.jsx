import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from "@material-ui/icons/Delete";

export default function GarbageIcon() {
    function iconStyles() {
        return {
                successIcon: {
                color: '#2ECC40',
            }
        }
    }

    const classes = makeStyles(iconStyles)();

    return (
        <div>
          <DeleteIcon className={classes.successIcon}/>
        </div>
    );
}