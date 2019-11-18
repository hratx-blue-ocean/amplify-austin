import React from "react";
import Map from "../Map/Map";
import styles from "./MapPage.module.css";
import SortFilter from '../SortFilter/SortFilter';
import MapFilter from './MapFilter'

const MapPage = ({ posts, selectCategories }) => {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.filter}>
          <MapFilter
            selectCategories={selectCategories}
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
