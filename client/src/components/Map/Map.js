import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { googleMapAPIKey } from "../../config/config.env";
import { center, zoom } from "./map-constants";

import Marker from "./Marker";

// Make sure this component is always wrapped in a div
// If left to roam freely, it will take up the entire screen like a dick
export default class Map extends Component {
  constructor(props) {
    console.log(googleMapAPIKey)
    super(props);
    this.center = center || centerOf(this.props.coordinates);
    this.zoom = zoom || this.props.zoom;
  }

  render() {
    return (
      // Important! Always set the container width & height explicitly
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapAPIKey }}
          defaultCenter={this.center}
          defaultZoom={this.zoom}
        >
          {this.props.coordinates.map((dir, i) => {
            return (
              <Marker
                key={i}
                image={"INSERT URL TO IMAGE ICON HERE ACCORDINGLY"}
                lat={dir[0]}
                lng={dir[1]}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    );
  }
}
/**
 *
 * @param {Array} coordinates Coordinate array of markers to be placed on map
 * @returns {Object} Returns object with latitude and longitude of coordinate
 * in the center of input array
 */
const centerOf = coordinates => {
  if (!coordinates) {
    return null;
  }
  const center = {};
  let lat, lng;
  coordinates.forEach(coord => {
    lat += coord[0];
    lng += coord[1];
  });
  center.lat = lat / coordinates.length;
  center.lng = lng / coordinates.length;
  return center;
};
