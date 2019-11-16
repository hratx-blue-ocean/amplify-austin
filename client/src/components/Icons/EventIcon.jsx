import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";

export default function EventIcon() {
    function iconStyles() {
        return {
                successIcon: {
                color: '#B10DC9',
            }
        }
    }

    const classes = makeStyles(iconStyles)();

    return (
        <div>
          <InsertInvitationIcon className={classes.successIcon}/>
        </div>
    );
}