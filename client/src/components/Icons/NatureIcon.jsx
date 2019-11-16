import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EcoIcon from "@material-ui/icons/Eco";

export default function NatureIcon() {
    function iconStyles() {
        return {
                successIcon: {
                color: '#3D9970',
            }
        }
    }

    const classes = makeStyles(iconStyles)();

    return (
        <div>
          <EcoIcon  className={classes.successIcon}/>
        </div>
    );
}