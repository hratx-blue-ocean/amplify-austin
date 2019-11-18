import React from "react";
import { useHistory } from "react-router-dom";

export const navigateTo = location => {
  const history = useHistory();
  if (Location === "home") {
    history.push("/");
  } else {
    history.push(`/${location}`);
  }
};
