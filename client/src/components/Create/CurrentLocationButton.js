import React from "react";
import axios from "axios";
import { geolocated } from "react-geolocated";
import Style from "./Create.module.css";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import MyLocationIcon from "@material-ui/icons/MyLocation";

class CurrentLocationButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fab
        color="primary"
        size="small"
        onClick={() => {
          if (!this.props.isGeolocationAvailable) {
            console.log("GeoLocation is not available on this browser!");
          } else if (!this.props.isGeolocationEnabled) {
            console.log("GeoLocation is not enabled");
          } else {
            // Nab Latitude and Longitude, send off to Google API for decoding
            let key = `&key=${process.env.REACT_APP_MAP_API_KEY}`;
            let https = `https://maps.googleapis.com/maps/api/geocode/json?latlng=`;
            let coordinates = `${this.props.coords.latitude},${this.props.coords.longitude}`;

            const request = `${https}${coordinates}${key}`;
            axios.get(request).then(results => {
              console.log(results);
              let shortAddress = "";
              const addressComponents =
                results.data.results[0].address_components;
              for (let i = 0; i < addressComponents.length; i++) {
                let addressPart = addressComponents[i].long_name;
                if (addressPart === "Austin" || addressPart === "Texas") {
                  break;
                } else {
                  shortAddress = `${shortAddress} ${addressPart}`;
                }
              }
              this.props.setLocation(shortAddress.trim());
            });
          }
        }}
      >
        <MyLocationIcon />
      </Fab>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(CurrentLocationButton);
