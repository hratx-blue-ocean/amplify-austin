import React from "react";
import styles from "./Category.module.css";

const Category = ({ category }) => {
  return <div className={styles.container}>{category}</div>;
};

export default Category;
