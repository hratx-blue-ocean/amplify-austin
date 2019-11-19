import React from "react";
import Map from "../Map/Map";
import styles from "./MapPage.module.css";
import MapFilter from "./MapFilter";

const MapPage = ({
  posts,
  selectBy,
  categories,
  changeSelectBy,
  selectCategories,
  filteredCategories
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.filter}>
          <MapFilter
            selectBy={selectBy}
            categories={categories}
            changeSelectBy={changeSelectBy}
            selectCategories={selectCategories}
            filteredCategories={filteredCategories}
          ></MapFilter>
        </div>
        <div className={styles.map}>
          <Map posts={posts}></Map>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
