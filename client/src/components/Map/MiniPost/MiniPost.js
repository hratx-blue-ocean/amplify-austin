import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./MiniPost.module.css";

const MiniPost = ({ title, postId }) => {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <div onClick={() => history.push(`posts/${postId}`)}>
        {`${title.slice(0, 26)}`}
        {title.length > 25 && `...`}
      </div>
    </div>
  );
};

export default MiniPost;
