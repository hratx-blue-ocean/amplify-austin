import React from "react";
import styles from "./Category.module.css";

const Category = ({ category, checked, toggleCategory }) => {
  return (
    <div className={styles.container}>
      <input type="checkbox" value={category} checked={checked}
        onChange={(e) => {
          toggleCategory(e.target.value)
        }} />
      {category}
    </div>
  );
};

export default Category;
