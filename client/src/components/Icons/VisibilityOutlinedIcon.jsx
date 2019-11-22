import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";

export default function VisibleOutlinedIcon() {
  function iconStyles() {
    return {
      visibilityOutlinedIcon: {
        color: "#000000"
      }
    };
  }

  const classes = makeStyles(iconStyles)();

  return (
    <div>
      <VisibilityOutlinedIcon className={classes.visibilityOutlinedIcon} />
    </div>
  );
}
