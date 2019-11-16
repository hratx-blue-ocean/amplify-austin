import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DriveEtaIcon from "@material-ui/icons/DriveEta";

export default function CarIconCustom() {
    function iconStyles() {
        return {
                successIcon: {
                color: '#FF851B',
            }
        }
    }

    const classes = makeStyles(iconStyles)();

    return (
        <div>
          <DriveEtaIcon className={classes.successIcon}/>
        </div>
    );
}