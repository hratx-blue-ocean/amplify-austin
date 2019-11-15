import React from "react";

const defaultImageForFun =
  "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg";

// External CSS file can be implemented for more versatility,
// but until more definite icons are decided upon styling is
// simply done within the function
const Marker = ({ image }) => {
  const style = {
    backgroundImage: `url(${defaultImageForFun})`,
    width: "25px",
    height: "25px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  };
  return <div style={style}></div>;
};

export default Marker;
