import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LocalParkingIcon from "@material-ui/icons/LocalParking";

export default function ParkingIcon() {
    function iconStyles() {
        return {
                successIcon: {
                color: '#FF4136',
            }
        }
    }

    const classes = makeStyles(iconStyles)();

    return (
        <div>
          <LocalParkingIcon className={classes.successIcon}/>
        </div>
    );
}