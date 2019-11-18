import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { centerATX, zoom } from "./map-constants";
import Marker from "./Marker/Marker";

// Make sure this component is always wrapped in a div
// If left to roam freely, it will take up the entire screen like a dick
export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: [],
      center: centerATX || centerOf(this.props.posts),
      selectedMarker: null,
      zoom: zoom
    };
    this.selectMarker = this.selectMarker.bind(this);
  }

  selectMarker(postId) {
    const newId = this.state.selectedMarker === postId ? null : postId;
    this.setState({
      selectedMarker: newId
    });
  }

  render() {
    return (
      // Important! Always set the container width & height explicitly
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          {this.props.posts.map((coord, i) => {
            return (
              <Marker
                key={i}
                lat={coord.lat}
                lng={coord.lng}
                category={coord.category}
                isSelected={coord.postId === this.state.selectedMarker}
                selectMarker={this.selectMarker}
                postID={coord.postId}
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
  if (!coordinates.length) {
    return null;
  }
  const center = {};
  let lat = 0;
  let lng = 0;
  coordinates.forEach(coord => {
    lat += coord.lat;
    lng += coord.lng;
  });
  center.lat = lat / coordinates.length;
  center.lng = lng / coordinates.length;
  return center;
};
