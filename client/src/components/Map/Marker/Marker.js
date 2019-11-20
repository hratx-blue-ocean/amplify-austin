import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Icon from "../../Icon/Icon";
import MiniPost from "../MiniPost/MiniPost";
import styles from "./Marker.module.css";

const defaultIcon = <Icon category={"mapMarker"} />;

const Marker = ({ title, category, postId }) => {
  const history = useHistory();
  const [showTitle, toggleTitle] = useState(false);
  return (
    <div
      className={styles.marker}
      onClick={() => history.push(`posts/${postId}`)}
      onMouseEnter={() => toggleTitle(true)}
      onMouseLeave={() => toggleTitle(false)}>
      {category === "Other" ? (
        defaultIcon
      ) : (
          <Icon category={category.toLowerCase()} />
        )}
      {showTitle && <MiniPost title={title} />}
    </div>
  );
};

export default Marker;
