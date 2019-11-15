import React from 'react';
import Map from '../Map/Map';
import coordinates from './dummyCoordinates';

const MapPage = () => {
  console.log(coordinates);
  return (
    <div>
      <Map coordinates={coordinates}></Map>
    </div>
  )
}

export default MapPage
