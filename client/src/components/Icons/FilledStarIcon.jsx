import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import StarRateIcon from "@material-ui/icons/StarRate";

export default function FilledStarIcon() {
  function iconStyles() {
    return {
      successIcon: {
        color: "#FFDC00"
      }
    };
  }

  const classes = makeStyles(iconStyles)();

  return (
    <div>
      <StarRateIcon className={classes.successIcon} />
    </div>
  );
}
