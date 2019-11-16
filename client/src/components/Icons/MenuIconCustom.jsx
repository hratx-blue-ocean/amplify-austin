import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

export default function MenuIconCustom() {
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
      <MenuIcon className={classes.successIcon} />
    </div>
  );
}
