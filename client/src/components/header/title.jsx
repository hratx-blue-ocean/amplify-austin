import React from "react";
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
