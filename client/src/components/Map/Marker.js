import React from "react";
import Icons from "../Icon/Icon";
import MiniPost from './MiniPost'
import styles from "./Marker.module.css";

const defaultIcon = <Icons category={"mapMarker"} />;

const Marker = ({ category, postID, selectMarker, isSelected }) => {
  return (
    <div className={styles.marker} onClick={() => selectMarker(postID)}>
      {category === "other" ? defaultIcon : <Icons category={category} />}
      {isSelected && <MiniPost category={category} postID={postID} />}
    </div>
  );
};

export default Marker;
