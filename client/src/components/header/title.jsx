import React, { useState, useEffect } from "react";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "../Menu/Menu";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import style from "./title.module.css";

const Title = props => {
  if (props.title === "favorites") {
    return <div className={style.titleLetter}>Watch List</div>;
  } else if (props.title === "myPosts") {
    return <div className={style.titleLetter}>My Posts</div>;
  } else {
    return <></>;
  }
};

export default Title;
