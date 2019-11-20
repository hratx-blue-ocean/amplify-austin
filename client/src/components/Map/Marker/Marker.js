import React from "react";
import Icon from "../../Icon/Icon";
import MiniPost from "../MiniPost/MiniPost";
import styles from "./Marker.module.css";

const Marker = ({ title, category, postId, selectMarker, isSelected }) => {
  return (
    <div className={styles.marker} onClick={() => selectMarker(postId)}>
      <Icon category={category.toLowerCase()} />
      {isSelected && <MiniPost title={title} postId={postId} />}
    </div>
  );
};

export default Marker;
