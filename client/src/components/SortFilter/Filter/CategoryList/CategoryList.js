import React from 'react';
import Category from '../Category/Category'
import styles from './CategoryList.module.css';
import { categories } from '../dummyCategories'

const CategoryList = ({ }) => {
  return (
    <div className={styles.container}>
      {categories.map((category, i) => {
        return (
          <Category key={i} category={category} />
        )
      })}
    </div>
  )
}

export default CategoryList