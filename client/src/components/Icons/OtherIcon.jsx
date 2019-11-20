import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FlareIcon from "@material-ui/icons/Flare";

export default function OtherIcon() {
  function iconStyles() {
    return {
      otherIcon: {
        color: "#3D9970"
      }
    }
  };

  const classes = makeStyles(iconStyles());

  return (
    <div>
      <FlareIcon className={classes.otherIcon} />
    </div>
  );
}