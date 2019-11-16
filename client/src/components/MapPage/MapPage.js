import React from "react";
import Map from "../Map/Map";
import styles from "./MapPage.module.css";
import coords from "./dummyCoordinates";
import Filter from "../SortFilter/Filter/Filter";

const MapPage = ({ coordinates, saveFilters }) => {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.filter}>
          <Filter saveFilters={saveFilters} />
        </div>
        <div className={styles.map}>
          <Map coordinates={coords()}></Map>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
