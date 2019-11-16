import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import RoomIcon from "@material-ui/icons/Room";

export default function MapMarkerIcon() {
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
      <RoomIcon className={classes.successIcon} />
    </div>
  );
}
