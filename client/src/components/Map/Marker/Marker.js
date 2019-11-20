import React from "react";
import Icon from "../../Icon/Icon";
import MiniPost from "../MiniPost/MiniPost";
import styles from "./Marker.module.css";

const defaultIcon = <Icon category={"mapMarker"} />;

const Marker = ({ title, category, postId, selectMarker, isSelected }) => {
  return (
    <div className={styles.marker} onClick={() => selectMarker(postId)}>
      {category === "Other" ? (
        defaultIcon
      ) : (
          <Icon category={category.toLowerCase()} />
        )}
      <div>
        <MiniPost title={title} postId={postId} />
      </div>
      {/* {isSelected && <MiniPost title={title} postId={postId} />} */}
    </div>
  );
};

export default Marker;
