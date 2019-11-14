import React from "react";
import Sort from "./Sort/Sort";
import Filter from "./Filter/Filter";

export class SortFilter extends React.Component {
  render() {
    return (
      <div>
        <Sort />
        <Filter />
      </div>
    );
  }
}

export default SortFilter;
