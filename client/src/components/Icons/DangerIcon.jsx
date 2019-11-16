import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";

export default function DangerIcon() {
  function iconStyles() {
    return {
      successIcon: {
        color: "#FF4136"
      }
    };
  }

  const classes = makeStyles(iconStyles)();

  return (
    <div>
      <ReportProblemIcon className={classes.successIcon} />
    </div>
  );
}
