import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SettingsIcon from "@material-ui/icons/Settings";

export default function SettingsIconCustom() {
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
      <SettingsIcon className={classes.successIcon} />
    </div>
  );
}
