import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { centerATX, zoom } from "./map-constants";
import Marker from "./Marker/Marker";
import dummyCoords from "../MapPage/dummyCoordinates";
import axios from "axios";

// Make sure this component is always wrapped in a div
// If left to roam freely, it will take up the entire screen like a dick
export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: [],
      center: centerATX,
      zoom: zoom
    };
  }

  componentDidMount() {
    console.log("Map component did mount aka made another api call");
    /**
     * GET REQUEST for coordinates/marker info using
     * this.props.filteredCategories
     *
     * Calculate center based on those coordinates
     * Not neccessarily 'stateful' as it re-renders completely
     * on any change made up in APP
     */
    console.log("gimme them filtered ones", this.props.filteredCategories);
    let categories = this.props.filteredCategories.join("/");

    // const coordinates = dummyCoords();
    axios
      .get("http://localhost:8000/api/map", {
        params: {
          categories: categories
        }
      })
      .then(response => {
        console.log("heres your coordinates. bitch:", response.data);
        // const center = centerOf(response.data);
        //  possible 'zoom' calculation could be done
        this.setState({
          coordinates: response.data,
          // center: center || this.state.center,
          selectedMarker: null
        });
        this.selectMarker = this.selectMarker.bind(this);
      });
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
          {this.state.coordinates.map((coord, i) => {
            return (
              <Marker
                key={i}
                lat={coord.lat}
                lng={coord.lng}
                category={coord.category}
                isSelected={coord.lat === this.state.selectedMarker}
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
