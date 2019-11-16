import { centerATX } from "../Map/map-constants";
import { categories } from "../SortFilter/Filter/dummyCategories";

const fakeCoordinates = () => {
  let amount = Math.floor(Math.random() * 40) + 1;
  let coords = [];
  for (let i = 0; i < amount; i++) {
    let cat = categories[Math.floor(Math.random() * categories.length)];
    let x = Math.random() * 0.05;
    let y = Math.random() * 0.05;
    x = Math.random() < 0.5 ? x : -1 * x;
    y = Math.random() < 0.5 ? y : -1 * y;
    let coord = {
      lat: centerATX.lat + x,
      lng: centerATX.lng + y,
      category: cat
    };
    coords.push(coord);
  }
  return coords;
};

export default fakeCoordinates;
