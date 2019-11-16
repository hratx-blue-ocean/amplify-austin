import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import StarBorderIcon from "@material-ui/icons/StarBorder";

export default function EmptyStarIcon() {
  function iconStyles() {
    return {
      successIcon: {
        color: "#111111"
      }
    };
  }

  const classes = makeStyles(iconStyles)();

  return (
    <div>
      <StarBorderIcon className={classes.successIcon} />
    </div>
  );
}
