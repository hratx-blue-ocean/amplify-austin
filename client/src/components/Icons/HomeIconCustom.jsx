import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from "@material-ui/icons/Home";

export default function HomeIconCustom() {
    function iconStyles() {
        return {
                successIcon: {
                color: '#85144b',
            }
        }
    }

    const classes = makeStyles(iconStyles)();

    return (
        <div>
          <HomeIcon className={classes.successIcon}/>
        </div>
    );
}