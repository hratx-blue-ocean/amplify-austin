import React from "react";
import Map from "../Map/Map";
import styles from "./MapPage.module.css";
import Filter from "../SortFilter/Filter/Filter";

const MapPage = ({ filteredCategories, saveFilters }) => {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.filter}>
          <Filter saveFilters={saveFilters} />
        </div>
        <div className={styles.map}>
          <Map filteredCategories={filteredCategories}></Map>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
