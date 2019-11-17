import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./MiniPost.module.css";

const MiniPost = ({ category, postID }) => {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <div
        className={styles.title}
        onClick={() => history.push(`posts/${postID}`)}
      >
        {category}
      </div>
    </div>
  );
};

export default MiniPost;
