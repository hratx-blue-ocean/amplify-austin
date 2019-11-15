import React from "react";
import styles from "./Category.module.css";

const Category = ({ category }) => {
  return (
    <div className={styles.container}>
      <input type="checkbox" value={category} />{category}
    </div>
  );
};

export default Category;
