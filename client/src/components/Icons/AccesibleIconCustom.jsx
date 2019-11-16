import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccessibleIcon from "@material-ui/icons/Accessible";

export default function AccesibleIconCustom() {
  function iconStyles() {
    return {
      successIcon: {
        color: "#0074D9"
      }
    };
  }

  const classes = makeStyles(iconStyles)();

  return (
    <div>
      <AccessibleIcon className={classes.successIcon} />
    </div>
  );
}
