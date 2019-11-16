import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MessageIcon from "@material-ui/icons/Message";

export default function MsgIcon() {
  function iconStyles() {
    return {
      successIcon: {
        color: "#FFFFFF"
      }
    };
  }

  const classes = makeStyles(iconStyles)();

  return (
    <div>
      <MessageIcon className={classes.successIcon} />
    </div>
  );
}
