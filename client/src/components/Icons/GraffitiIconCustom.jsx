import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BrushIcon from "@material-ui/icons/Brush";

export default function GraffitiIconCustom() {
  function iconStyles() {
    return {
      successIcon: {
        color: "#F012BE"
      }
    };
  }

  const classes = makeStyles(iconStyles)();

  return (
    <div>
      <BrushIcon className={classes.successIcon} />
    </div>
  );
}
