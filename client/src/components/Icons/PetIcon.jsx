import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pets from "@material-ui/icons/Pets";

export default function PetIcon() {
    function iconStyles() {
        return {
                successIcon: {
                color: '#39CCCC',
            }
        }
    }

    const classes = makeStyles(iconStyles)();

    return (
        <div>
          <Pets className={classes.successIcon}/>
        </div>
    );
}