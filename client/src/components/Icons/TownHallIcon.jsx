import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

export default function TownHallIcon() {
  function iconStyles() {
    return {
      successIcon: {
        color: "#B10DC9"
      }
    };
  }

  const classes = makeStyles(iconStyles)();

  return (
    <div>
      <AccountBalanceIcon className={classes.successIcon} />
    </div>
  );
}
