import React from "react";
import Icon from "../../Icon/Icon";
import MiniPost from "../MiniPost/MiniPost";
import styles from "./Marker.module.css";

const eventIcon = <Icon category={"townhall"} />;
const defaultIcon = <Icon category={"mapMarker"} />;

const Marker = ({
  title,
  category,
  postId,
  selectMarker,
  isSelected,
  otherFlag
}) => {
  // Determine Icon to place
  let markerIcon;
  if (otherFlag) {
    markerIcon = eventIcon;
  } else {
    markerIcon =
      category === "Other" ? (
        defaultIcon
      ) : (
        <Icon category={category.toLowerCase()} />
      );
  }
  return (
    <div className={styles.marker} onClick={() => selectMarker(postId)}>
      {markerIcon}
      {isSelected && <MiniPost title={title} postId={postId} />}
    </div>
  );
};

export default Marker;
