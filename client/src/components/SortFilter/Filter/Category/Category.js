import React from "react";
import styles from "./Category.module.css";

const Category = ({ category, checked, toggleCategory }) => {
  return (
    <div className={styles.container}>
      <div className={styles.select}>
        <div
          style={{ backgroundColor: checked ? "cyan" : "white" }}
          className={styles.box}
          onClick={e => {
            toggleCategory(category);
          }}
        ></div>
      </div>
      <div className={styles.category}>
        {`${category.charAt(0).toUpperCase()}${category.slice(1)}`}
      </div>
    </div>
  );
};

export default Category;
