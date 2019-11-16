import React from "react";
import CategoryList from "./CategoryList/CategoryList";
import styles from "./Filter.module.css";

// THESE NEED TO BE REAL(hardcoded) OR PINGED FROM API
import { categories } from "./dummyCategories";

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {},
      dropDown: false
    };
    this.applyFilters = this.applyFilters.bind(this);
    this.toggleCategory = this.toggleCategory.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }

  toggleCategory(category) {
    const newCategories = this.state.categories;
    if (this.state.categories[category]) {
      delete newCategories[category];
    } else {
      newCategories[category] = true;
    }
    this.setState(
      {
        categories: newCategories
      },
      () => this.applyFilters()
    );
  }

  toggleDropDown() {
    this.setState({
      dropDown: !this.state.dropDown
    });
  }

  applyFilters() {
    let categories = this.state.categories;
    categories = Object.keys(categories);
    // Send categories up to App (main state)
    this.props.saveFilters(categories);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.filter}>
          <button
            className={styles.filterbutton}
            onClick={this.toggleDropDown}>
            Filter
          </button>
          {this.state.dropDown && (
            <CategoryList
              categories={categories}
              isChecked={this.state.categories}
              toggleCategory={this.toggleCategory}
            />
          )}
        </div>
      </div>
    );
  }
}
