import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MapIcon from "@material-ui/icons/Map";

export default function MapSignIcon() {
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
      <MapIcon className={classes.successIcon} />
    </div>
  );
}
