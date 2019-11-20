import React from "react";
import styles from "./MiniPost.module.css";

const MiniPost = ({ title }) => {
  return (
    <div className={styles.container}>
      <div>
        {`${title.slice(0, 26)}`}
        {title.length > 25 && `...`}
      </div>
    </div>
  );
};

export default MiniPost;
