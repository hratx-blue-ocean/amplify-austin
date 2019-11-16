import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FastfoodIcon from "@material-ui/icons/Fastfood";

export default function FoodIcon() {
  function iconStyles() {
    return {
      successIcon: {
        color: "#FF851B"
      }
    };
  }

  const classes = makeStyles(iconStyles)();

  return (
    <div>
      <FastfoodIcon className={classes.successIcon} />
    </div>
  );
}
