import center from '../Map/map-constants';

const fakeCoordinates = () => {
  let amount = Math.floor(Math.random() * 10) + 1;
  let coords = [];
  for (let i = 0; i < amount; i++) {
    let x = center.lat + (Math.random() * .05);
    let y = center.lng + (Math.random() * .05);
    x = (Math.random() < .5) ? x : (-x);
    y = (Math.random() < .5) ? y : (-y);
    coords.push([x, y]);
  }
  return coords;
}

export default fakeCoordinates;