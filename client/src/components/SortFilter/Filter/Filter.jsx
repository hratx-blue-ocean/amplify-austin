import React from "react";
import CategoryList from "./CategoryList/CategoryList";
import styles from "./Filter.module.css";

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      dropDown: false
    };
    this.addCategory = this.addCategory.bind(this);
    this.applyFilters = this.applyFilters.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }

  addCategory(category) {
    this.setState({
      categories: [...this.state.categories, category]
    });
  }

  deleteCategory(category) {
    // TODO
  }

  toggleDropDown() {
    if (this.state.dropDown) {
      // Send off new filter request
    }
    this.setState({
      dropDown: !this.state.dropDown
    });
  }

  applyFilters() {
    // PING IT
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.filter}>
          <button className={styles.filterbutton} onClick={this.toggleDropDown}>
            Filter
          </button>
          {this.state.dropDown && <CategoryList />}
        </div>
        <button className={styles.apply} onClick={this.applyFilters}>
          <span>O{/** Find an Icon */}</span>
        </button>
      </div>
    );
  }
}
