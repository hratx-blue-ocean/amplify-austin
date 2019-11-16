import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InvertColorsIcon from "@material-ui/icons/InvertColors";

export default function WaterIcon() {
    function iconStyles() {
        return {
                successIcon: {
                color: '#7FDBFF',
            }
        }
    }

    const classes = makeStyles(iconStyles)();

    return (
        <div>
          <InvertColorsIcon className={classes.successIcon}/>
        </div>
    );
}