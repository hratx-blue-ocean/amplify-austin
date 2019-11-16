import React from "react";
import Icons from "../Icon/Icon";
import styles from "./Marker.module.css";

const defaultIcon = <Icons type={"mapMarker"} />;

// External CSS file can be implemented for more versatility,
// but until more definite icons are decided upon styling is
// simply done within the function
const Marker = ({ category }) => {
  return (
    <div className={styles.marker}>
      {category === "other" ? defaultIcon : <Icons type={category} />}
    </div>
  );
};

export default Marker;
