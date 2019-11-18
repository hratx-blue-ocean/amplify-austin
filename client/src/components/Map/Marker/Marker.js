import React from "react";
import Icon from "../../Icon/Icon";
import MiniPost from "../MiniPost/MiniPost";
import styles from "./Marker.module.css";

const defaultIcon = <Icon category={"mapMarker"} />;

const Marker = ({ category, postID, selectMarker, isSelected }) => {
  return (
    <div className={styles.marker} onClick={() => selectMarker(postID)}>
      {category === "other" ? defaultIcon : <Icon category={category} />}
      {isSelected && <MiniPost category={category} postID={postID} />}
    </div>
  );
};

export default Marker;
