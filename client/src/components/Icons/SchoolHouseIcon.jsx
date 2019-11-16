import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SchoolIcon from "@material-ui/icons/School";

export default function SchoolHouseIcon() {
  function iconStyles() {
    return {
      successIcon: {
        color: "#001f3f"
      }
    };
  }

  const classes = makeStyles(iconStyles)();

  return (
    <div>
      <SchoolIcon className={classes.successIcon} />
    </div>
  );
}
