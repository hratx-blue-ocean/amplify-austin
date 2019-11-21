import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Icon from "../../Icon/Icon";
import MiniPost from "../MiniPost/MiniPost";
import styles from "./Marker.module.css";

const Marker = ({ title, category, postId }) => {
  const history = useHistory();
  const [showTitle, toggleTitle] = useState(false);
  const [onPostPage, setOnPostPage] = useState(undefined);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === `/posts/${ postId }`) {
      setOnPostPage(true);
    }
  }, [location.pathname, postId]);

  return (
    <div
      className={styles.marker}
      onMouseEnter={() => toggleTitle(true)}
      onMouseLeave={() => toggleTitle(false)}
      onClick={() => !onPostPage && history.push(`/posts/${ postId }`)}
    >
      <Icon category={category.toLowerCase()} />
      {showTitle && <MiniPost title={title} />}
    </div>
  );
};

export default Marker;
