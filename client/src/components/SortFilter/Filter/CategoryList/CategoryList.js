import React from "react";
import Category from "../Category/Category";
import styles from "./CategoryList.module.css";

const CategoryList = ({ categories, isChecked, toggleCategory }) => {
  return (
    <div className={styles.container}>
      {categories.map((category, i) => {
        return (
          <Category
            key={i}
            category={category}
            checked={isChecked[category]}
            toggleCategory={toggleCategory}
          />
        );
      })}
    </div>
  );
};

export default CategoryList;
