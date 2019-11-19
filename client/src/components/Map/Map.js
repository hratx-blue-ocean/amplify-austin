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
    const mapable = this.props.posts || this.props.coordinates;
    return (
      // Important! Always set the container width & height explicitly
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          {mapable.map((post, i) => {
            return (
              <Marker
                key={i}
                lat={post.lat}
                lng={post.lng}
                title={post.headline}
                otherFlag={post.otherFlag}
                category={post.categoryName}
                isSelected={post.postId === this.state.selectedMarker}
                selectMarker={this.selectMarker}
                postId={post.postId}
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
