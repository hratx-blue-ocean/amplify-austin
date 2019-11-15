import { centerATX } from "../Map/map-constants";

const fakeCoordinates = () => {
  let amount = Math.floor(Math.random() * 10) + 1;
  let coords = [];
  for (let i = 0; i < amount; i++) {
    let x = Math.random() * 0.05;
    let y = Math.random() * 0.05;
    x = Math.random() < 0.5 ? x : -1 * x;
    y = Math.random() < 0.5 ? y : -1 * y;
    coords.push([centerATX.lat + x, centerATX.lng + y]);
  }
  return coords;
};

export default fakeCoordinates;
