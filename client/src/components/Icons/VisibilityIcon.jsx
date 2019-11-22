import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import VisibilityIcon from "@material-ui/icons/Visibility";

export default function VisibleIcon() {
  function iconStyles() {
    return {
      visibilityIcon: {
        color: "#0000ff"
      }
    };
  }

  const classes = makeStyles(iconStyles)();

  return (
    <div>
      <VisibilityIcon className={classes.visibilityIcon} />
    </div>
  );
}
