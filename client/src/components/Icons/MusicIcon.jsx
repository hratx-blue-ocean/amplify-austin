import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MusicNoteIcon from "@material-ui/icons/MusicNote";

export default function MusicIcon() {
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
          <MusicNoteIcon  className={classes.successIcon}/>
        </div>
    );
}