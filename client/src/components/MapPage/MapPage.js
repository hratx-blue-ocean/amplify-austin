import React from "react";
import Map from "../Map/Map";
import styles from './MapPage.module.css';
import coordinates from "./dummyCoordinates";

const MapPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.map}>
          <Map coordinates={coordinates()}></Map>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
