import React from "react";
import Map from "../Map/Map";
import styles from "./MapPage.module.css";
import coords from "./dummyCoordinates";

const MapPage = ({ coordinates }) => {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.map}>
          <Map coordinates={coords()}></Map>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
